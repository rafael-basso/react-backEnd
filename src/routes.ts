import express, { request, response } from 'express'
import knex from './database/connection'

const routes = express.Router() 

// routes.get('/', (request, response) => {
//     return response.json({message: 'hello world'});
// });

// routes.get('/', async (request, response) => {
//     const data = await knex('data').select('*')
//     return response.json(data)
// });

routes.get('/', async (request, response) => {
    const datas = await knex('data').select('*')
    const serializedData = datas.map(data => {
        return {
            id: data.id,
            name: data.name,
            password: data.password
        }
    })
    return response.json(serializedData)
});

routes.get('/balance', async (request, response) => {
    const datas = await knex('balance').select('*')
    const serializedData = datas.map(data => {
        return {
            id: data.id,
            transaction_name: data.transaction_name,
            value: data.value,
            date: data.date,
            idData: data.idData
        }
    })
    return response.json(serializedData)
});

routes.get('/:id', async (request, response) => { 
    const id = Number(request.params.id);
    
    await knex('data').where('id', id).first()
    // if (!getId)
    //         return response.status(400).json({ message: 'Data not found.'})
    // const balance = await knex('balance').join('data_balance', 'balance.id', '=', 'data_balance.balance_id').where('data_balance.data_id', id).select('data.name')
    //const items = await knex('items').join('point_items', 'items.id', '=', 'point_items.item_id').where('point_items.point_id', id) // mesmo que SELECT * FROM items JOIN point_items ON items.id = point_item.id WHERE point_items.point_id = {id}
        
    return response.json(id)
});

routes.post('/', async (request, response) => {
    const { name, password } = request.body
    
    await knex('data').insert({
        name: name,
        password: password
    })
    
    return response.json({ name, password })
});

routes.post('/balance', async (request, response) => {
    const { description, amount, date, id } = request.body
    
    // const balance = {
    //     transaction_name: description,
    //     value: amount,
    //     date: date,
    //     idData: id
    // }

    // const ids =  await knex('balance').insert(balance)
    
    // const dataBalance = {
    //   data_id: id,
    //   balance_id: ids,
    // };    
            
    // await knex('data_balance').insert(dataBalance)
    
    await knex.transaction(async (trx) => {
        const balance = {
            transaction_name: description,
            value: amount,
            date: date,
            idData: id
        };

        const [balance_id] = await trx('balance')
            .insert(balance)
            .returning('id');

        const dataBalance = {
            data_id: id,
            balance_id: balance_id
        };    
                
        await trx('data_balance').insert(dataBalance);
    });

    return response.json( { success: true, message: "Data saved successfully!" })
});

routes.delete('/:id', async (request, response) => {
    const id = Number(request.params.id)

    await knex('data').where('id', id).delete()
    await knex('balance').where('idData', id).delete()
    await knex('data_balance').where('data_id', id).delete()
    
    return response.json(id)
});

routes.delete('/balance/:id', async(request,response) => {
    const id  = Number(request.params.id)
    //const name = await knex('balance').select('transaction_name')
    
    await knex('balance').where('id', id).delete()
    await knex('data_balance').where('balance_id', id).delete()

    return response.json(id)
})


export default routes