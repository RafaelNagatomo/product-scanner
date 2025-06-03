import "reflect-metadata"
import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ApiRoutes from './routes'
import { PostgresDataSource } from "@db/index"

dotenv.config()

export default class Server {
    private port: number | string
    private app: Application

    constructor() {
        this.port = process.env.PORT || 4000
        this.app = express()

        this.configureMiddlewares()
        this.configureRouters()
    }

    private configureMiddlewares(): void {
        this.app.use(cors())
        this.app.use(express.json())
    }

    private async configureRouters(): Promise<void> {
        this.app.use('/api', new ApiRoutes().run())
    }

    public async start(): Promise<void> {
        await PostgresDataSource.initialize()
            .then(() => {
            console.log("Postgres has been initialized!")
            })
            .catch((error) => {
                console.error('Faled to connect to the Postgres:', error)
            })

        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}...`)
        })
    }
}
