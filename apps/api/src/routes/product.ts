import { Router } from "express"
import ProductController from "@controllers/productController"

export default class ProductRoutes {
    private router: Router

    constructor() {
        this.router = Router()
        this.getAll()
        this.new()
        this.edit()
        this.delete()
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

    private new(): void {
        this.router.post('/', async (req, res) => {
            try {
                const data = req.body
                const result = await ProductController.new(data)
                res.status(201).json(result)
            } catch (error) {
                console.error(error)
                res.status(500).json({ error: 'Failed to create product' })
            }
        })
    }

    private edit(): void {
        this.router.put('/:id', async (req, res) => {
            try {
                const id = Number(req.params.id)
                const data = req.body
                const result = await ProductController.edit(id, data)
                res.status(201).json(result)
            } catch (error) {
                console.error(error)
                res.status(500).json({ error: 'Failed to update product' })
            }
        })
    }

    private delete(): void {
        this.router.delete('/:id', async (req, res) => {
            try {
                const id = Number(req.params.id)
                const result = await ProductController.delete(id)
                res.status(201).json(result)
            } catch (error) {
                console.error(error)
                res.status(500).json({ error: 'Failed to delete product' })
            }
        })
    }

    public run(): Router {
        return this.router
    }
}
