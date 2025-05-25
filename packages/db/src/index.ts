import { PostgresDataSource } from "./dataSource"

PostgresDataSource.initialize()
    .then(() => {
        console.log("Postgres has been initialized!")
    })
