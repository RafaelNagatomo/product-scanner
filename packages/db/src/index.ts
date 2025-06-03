import { DataSource } from 'typeorm'
import { Product } from './entities/product'

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'productscanner',
  synchronize: true,
  logging: false,
  entities: [Product],
})
