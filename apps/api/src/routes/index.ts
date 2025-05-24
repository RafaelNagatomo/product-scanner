import express, { Router } from "express"
import ProductRoutes from "./product"

export default class ApiRoutes {
    private router: Router

    constructor() {
        this.router = express.Router()
    }

    public run() {
        this.router.use('/product', new ProductRoutes().run())

        return this.router
    }
}
