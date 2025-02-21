import * as migration_20250221_153128 from './20250221_153128';
import * as migration_seed from './seed';

export const migrations = [
  {
    up: migration_20250221_153128.up,
    down: migration_20250221_153128.down,
    name: '20250221_153128',
  },
  {
    up: migration_seed.up,
    down: migration_seed.down,
    name: 'seed'
  },
];
