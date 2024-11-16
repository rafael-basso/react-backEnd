import knex from 'knex'
import path from 'path'

// const connection = knex ({
//     client: 'sqlite3',
//     connection: {
//         filename: path.resolve(__dirname, 'database.sqlite')
//     },
//     useNullAsDefault: true
// })

const connection = knex ({
    client: 'pg',
    connection: "postgresql://react_db_owner:HtIjn7RlZc9o@ep-shiny-cake-a5143noi.us-east-2.aws.neon.tech/react_db?sslmode=require",
})

export default connection