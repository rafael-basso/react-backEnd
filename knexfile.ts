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
        connection: "postgresql://react_db_owner:HtIjn7RlZc9o@ep-shiny-cake-a5143noi.us-east-2.aws.neon.tech/react_db?sslmode=require",
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        }
    }
};