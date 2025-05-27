import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm"

@Entity()
export abstract class BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date = new Date()

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date = new Date()
}
