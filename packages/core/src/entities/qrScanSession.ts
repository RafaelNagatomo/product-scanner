import { BaseEntity } from "./base"
import { EStatus } from "@core/enums/status"
import { EOperations } from "@core/enums/operations"

export default class QrScanSessionEntity extends BaseEntity {
    authSessionId: number
    productId: number
    operation: EOperations
    status: EStatus
    socketRoomId: number
}
