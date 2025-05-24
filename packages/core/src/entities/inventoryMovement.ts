import { Base } from "./base"
import { Operations } from "@core/enums/operations"
import { Sources } from "@core/enums/sources"

export default class InventoryMovementEntity extends Base {
    productId: string
    operation: Operations
    quantity: number
    timestamp: Date
    source: Sources
}
