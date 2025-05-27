import { Router } from "express"
import ProductController from "@controllers/productController"

export default class ProductRoutes {
    private router: Router

    constructor() {
        this.router = Router()
        this.getAll()
        this.create()
    }

    private getAll(): void {
        this.router.get('/', async (req, res) => {
            try {
                const result = await ProductController.getAll()
                res.json(result)
            } catch (error) {
                console.error(error)
                res.status(500).json({ error: 'Failed to fetch products' })
            }
        })
    }

    private create(): void {
        this.router.post('/', async (req, res) => {
            try {
                const data = req.body
                const result = await ProductController.create(data)
                res.status(201).json(result)
            } catch (error) {
                console.error(error)
                res.status(500).json({ error: 'Failed to create product' })
            }
        })
    }

    public run(): Router {
        return this.router
    }
}
