import path from 'path'

module.exports = {
    development: {
        client: 'sqlite',
        connection: {
            filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        // seeds: {
        //     directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        // },
        useNullAsDefault: true,
    },
    production: {
        client: 'pg',
        connection: process.env.CONNECTION_STRING,
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        }
    }
};