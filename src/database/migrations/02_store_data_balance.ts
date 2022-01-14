import { Knex, knex } from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('data_balance', table => {
        table.increments('id').primary()
        
        //para criar foreign key
        table.integer('data_id').notNullable().references('id').inTable('data') 
        table.integer('balance_id').notNullable().references('id').inTable('balance')
    })
}
    
export async function down(knex: Knex) {
     return knex.schema.dropTable('data_balance')
}

