import {foo} from '../index.js';
import test from 'ava';

test('foo', t => {
  t.is(foo(2), 24);
});
