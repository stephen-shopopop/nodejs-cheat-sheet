import { knex, Knex } from '../../deps'

export const sqlite: Knex<any, Array<Record<string, any>>> = knex({
  client: 'better-sqlite3',
  connection: {
    filename: ':memory:'
  },
  debug: false,
  log: {
    error: (msg: any) => console.error('ERROR from Sqlite: %o', msg),
    debug: (msg: any) => console.debug('DEBUG from Sqlite: %o', msg),
    warn: (msg: any) => console.warn('WARN from Sqlite: %o', msg)
  },
  useNullAsDefault: true
})
