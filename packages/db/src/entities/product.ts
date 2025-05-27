import { Entity, Column } from 'typeorm'
import { BaseEntity } from './base'

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string

  @Column({ nullable: true })
  sku: string

  @Column('int')
  quantity: number

  @Column('decimal', { precision: 10, scale: 2 })
  price: number

  @Column({ nullable: true })
  qrCodeUrl: string
}
