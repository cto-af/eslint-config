import {localCooldown} from '@cto.af/ncurc';

export default {
  dep: ['prod', 'dev', 'packageManager'],
  // eslint-disable-next-line n/no-top-level-await
  cooldown: await localCooldown(),
};
