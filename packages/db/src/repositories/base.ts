import { PostgresDataSource } from "@db/dataSource";
import { DeepPartial, EntityTarget, ObjectLiteral, Repository } from "typeorm";

export abstract class BaseRepository<T extends ObjectLiteral> {
    private _entity: EntityTarget<T>

    constructor(entity: EntityTarget<T>) {
        this._entity = entity
    }

    protected get postgresRepository(): Repository<T> {
        return PostgresDataSource.getRepository(this._entity)
    }

    async findAll(): Promise<T[]> {
        return this.postgresRepository.find()
    }

    async findById(id: number): Promise<T | null> {
        return this.postgresRepository.findOne({ where: { id } as any })
    }

    async create(data: DeepPartial<T>): Promise<T> {
        const entity = this.postgresRepository.create(data)
        return this.postgresRepository.save(entity)
    }

    async update(id: number, data: DeepPartial<T>): Promise<T | null> {
        const existing = await this.findById(id)
        if(!existing) return null
        const updated = this.postgresRepository.merge(existing, data)
        return this.postgresRepository.save(updated)
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.postgresRepository.delete(id)
        return result.affected !== 0
    }
}
