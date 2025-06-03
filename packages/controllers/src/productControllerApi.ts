import { Product } from '@db/entities/product'
import ProductRepository from '@db/repositories/product'
import { DeepPartial } from 'typeorm'

export default class ProductController {
    static async getAll(): Promise<Product[]> {
        return new ProductRepository().findAll()
    }

    static async new(data: DeepPartial<Product>): Promise<Product> {
        return new ProductRepository().create(data)
    }

    static async edit(id: number, data: DeepPartial<Product>): Promise<Product | null> {
        return new ProductRepository().update(id, data)
    }

    static async delete(id: number): Promise<boolean> {
        return new ProductRepository().delete(id)
    }
}
