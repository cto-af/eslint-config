// eslint-disable hildjj/sort-rules
'use strict'
const {builtinRules} = require('eslint/use-at-your-own-risk')
const avaPlugin = require('eslint-plugin-ava')
const nodePlugin = require('eslint-plugin-n')
const jsdocPlugin = require('eslint-plugin-jsdoc')
const tsPlugin = require('@typescript-eslint/eslint-plugin')

function rename(rules, prefix) {
  return Object.fromEntries(
    Object.entries(rules).map(([k, v]) => [`${prefix}/${k}`, v])
  )
}

const rules = {
  ...Object.fromEntries(builtinRules.entries()),
  ...rename(avaPlugin.rules, 'ava'),
  ...rename(nodePlugin.rules, 'n'),
  ...rename(jsdocPlugin.rules, 'jsdoc'),
  ...rename(tsPlugin.rules, '@typescript-eslint'),
}

function getIndent(n, src) {
  const [tok] = src.getTokens(n)
  return src.text.slice(tok.range[0] - tok.loc.start.column, tok.range[0])
}
const meta = {
  type: 'layout',
  fixable: 'code',
  docs: {
    description: 'Sort eslint rules',
    category: 'Stylistic Issues',
    recommended: false,
    url: 'https://github.com/hildjj/ctoaf-eslint-config/tree/main/rules',
  },
}

module.exports = {
  rules: {
    // eslint-disable-next-line hildjj/sort-rules
    'sort-rules': {
      meta,
      create(context) {
        const src = context.getSourceCode()
        return {
          'ObjectExpression[parent.key.name="rules"]': node => {
            const comments = src.getCommentsInside(node)
            const lines = comments.reduce((t, c) => {
              const match = c.value.match(/.*\[(?<title>[^\]]+)\].*/)
              if (match) {
                t.push({
                  name: match.groups.title,
                  line: c.loc.start.line,
                  range: c.range,
                  rules: [],
                })
              }
              return t
            }, [])

            for (const p of node.properties) {
              const key = p.key.name || p.key.value
              const kr = rules[key]
              if (!kr) {
                context.report({
                  message: 'Unknown rule "{{ key }}"',
                  node: p.key,
                  data: {
                    key,
                  },
                })
                continue
              }
              if (kr?.meta?.deprecated) {
                context.report({
                  message: 'Rule "{{ key }}" is deprecated',
                  node: p.key,
                  data: {
                    key,
                  },
                })
              }
              const section = kr?.meta?.docs?.category
              if (!section) {
                continue
              }
              const i = lines.findIndex(({name}) => name === section)
              if (i === -1) {
                context.report({
                  message: 'No section found: "{{ section }}" for {{ key }}',
                  node: p.key,
                  data: {
                    key,
                    section,
                  },
                  fix(fixer) {
                    const slug = section.replace(/\s+/g, '-').toLowerCase()
                    return fixer.insertTextBefore(p, `\
// [${section}](https://eslint.org/docs/rules/#${slug})
${getIndent(p.key, src)}`)
                  },
                })
                continue
              }
              const keyLine = p.key.loc.start.line
              const last = lines.reduce(
                (t, {line}, ci) => ((keyLine >= line) ? ci : t),
                -1
              )
              if (last === -1) {
                context.report({
                  message: '{{ key }} before any section',
                  node: p.key,
                  data: {
                    key,
                  },
                  fix(fixer) {
                    const {range} = p
                    const tokAfter = src.getTokenAfter(p)
                    if (tokAfter && (tokAfter.value === ',')) {
                      // eslint-disable-next-line prefer-destructuring
                      range[1] = tokAfter.range[1]
                    }
                    range[0] -= (p.loc.start.column + 1) // Newline
                    const orig = src.text.slice(...range)
                    return [
                      fixer.removeRange(range),
                      fixer.insertTextAfterRange(lines[i].range, orig),
                    ]
                  },
                })
                continue
              }
              if (last !== i) {
                context.report({
                  message: '{{ key }} should be in section: "{{ section }}", ' +
                    'but found in "{{ found }}"',
                  node: p.key,
                  data: {
                    key,
                    section,
                    found: lines[last].name,
                  },
                  fix(fixer) {
                    const {range} = p
                    const tokAfter = src.getTokenAfter(p)
                    if (tokAfter && (tokAfter.value === ',')) {
                      // eslint-disable-next-line prefer-destructuring
                      range[1] = tokAfter.range[1]
                    }
                    range[0] -= (p.loc.start.column + 1) // Newline
                    const orig = src.text.slice(...range)
                    return [
                      fixer.removeRange(range),
                      fixer.insertTextAfterRange(lines[i].range, orig),
                    ]
                  },
                })
                continue
              }
              lines[i].rules.push(p)
            }

            for (const comment of lines) {
              let prev = ''
              for (const p of comment.rules) {
                const key = p.key.name || p.key.value
                if (key.localeCompare(prev) !== 1) {
                  context.report({
                    message: '{{ key }} out of order',
                    node: p.key,
                    data: {
                      key,
                    },
                  })
                }
                prev = key
              }
            }
          },
        }
      },
    },
  },
}
