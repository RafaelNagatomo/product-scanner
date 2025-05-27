import { Product } from '@db/entities/product'
import ProductRepository from '@db/repositories/product'
import { DeepPartial } from 'typeorm'

export default class ProductController {
    static async getAll(): Promise<Product[]> {
        return new ProductRepository().findAll()
    }

    static async create(data: DeepPartial<Product>): Promise<Product> {
        return new ProductRepository().create(data)
    }
}
