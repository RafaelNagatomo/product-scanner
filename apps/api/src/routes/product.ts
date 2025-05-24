import { Router } from "express"

export default class ProductRoutes {
    private router: Router

    constructor() {
        this.router = Router()
        this.getAll()
    }

    private getAll(): void {
        this.router.get('/', (req, res) => {
            res.json({ message: 'Product route working...' })
        })
    }

    public run(): Router {
        return this.router
    }
}
