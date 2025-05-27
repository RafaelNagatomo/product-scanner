import { BaseEntity } from "./base"
import { EOperations } from "@core/enums/operations"
import { ESources } from "@core/enums/sources"

export default class InventoryMovementEntity extends BaseEntity {
    productId: number
    operation: EOperations
    quantity: number
    timestamp: Date
    source: ESources
}
