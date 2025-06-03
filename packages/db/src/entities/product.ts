import { Entity, Column } from 'typeorm'
import { AbstractBaseEntity  } from './base'

@Entity()
export class Product extends AbstractBaseEntity  {
  @Column({ type: 'varchar' })
  name: string

  @Column({ nullable: true, type: 'varchar' })
  sku: string

  @Column('int')
  quantity: number

  @Column('decimal', { precision: 10, scale: 2 })
  price: number

  @Column({ nullable: true, type: 'varchar' })
  qrCodeUrl: string
}
