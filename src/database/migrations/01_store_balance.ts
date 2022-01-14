import {Knex, knex} from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('balance', table => {
        table.increments('id').primary()

        table.string('transaction_name').notNullable()
        table.decimal('value').notNullable()
        table.string('date').notNullable()
        table.integer('idData').notNullable()
    })

}

export async function down(knex: Knex) {
    return knex.schema.dropTable('balance')
}