import { Knex } from '../../deps'
import { Tables } from './enums'

export async function migrate (sqlite: Knex): Promise<void> {
  const hasPostsTable = await sqlite.schema.hasTable(Tables.posts)

  if (!hasPostsTable) {
    await sqlite.schema.createTable(Tables.posts, (table: Knex.TableBuilder) => {
      table.increments('id').primary().unsigned()
      table.string('title')
      table.string('body')
      table.string('category')
    })
  }
}
