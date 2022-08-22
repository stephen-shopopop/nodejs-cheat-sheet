import { Knex } from '../../deps'

export async function migrate (sqlite: Knex): Promise<void> {
  const hasPostsTable = await sqlite.schema.hasTable('Posts')

  if (!hasPostsTable) {
    await sqlite.schema.createTable('Posts', (table: Knex.TableBuilder) => {
      table.increments('id').primary().unsigned()
      table.string('title')
      table.string('body')
      table.string('category')
    })
  }
}
