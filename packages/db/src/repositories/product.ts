import { Product } from "@db/entities/product";
import { BaseRepository } from "./base";

export default class ProductRepository extends BaseRepository<Product> {
    constructor() {
        super(Product)
    }
}
