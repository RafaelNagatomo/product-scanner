import { PostgresDataSource } from "./dataSource"

PostgresDataSource.initialize()
    .then(() => {
        console.log("Postgres has been initialized!")
    })
    .catch((error) => {
        console.error('Faled to connect to the Postgres:', error)
    })
