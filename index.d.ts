import DataTypes = require('./lib/data-types');
import Deferrable = require('./lib/deferrable');
import Op = require('./lib/operators');
import QueryTypes = require('./lib/query-types');
import TableHints = require('./lib/table-hints');
import IndexHints = require('./lib/index-hints');
import Utils = require('./lib/utils');
import * as Association from './lib/associations';
import * as Error from './lib/errors';
import * as Model from './lib/model';
import * as Promise from './lib/promise';
import * as QueryInterface from './lib/query-interface';
import * as Sequelize from './lib/sequelize';
import * as Transaction from './lib/transaction';
import * as ValidatorExtra from './lib/utils/validator-extras';

declare module 'sequelize' {
  export * from './lib/sequelize';
  export * from './lib/query-interface';
  export * from './lib/data-types';
  export * from './lib/model';
  export * from './lib/transaction';
  export * from './lib/associations';
  export * from './lib/errors';
  export { BaseError as Error } from './lib/errors';
  export { useInflection } from './lib/utils';
  export { Promise } from './lib/promise';
  export { Utils, QueryTypes, Op, TableHints, IndexHints, DataTypes, Deferrable };
  export { Validator as validator } from './lib/utils/validator-extras';
}
