import {Knex, knex} from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('data', table => {
        table.increments('id').primary()

        table.string('name').notNullable()
        table.string('password').notNullable()
    })

}

export async function down(knex: Knex) {
    return knex.schema.dropTable('data')
}