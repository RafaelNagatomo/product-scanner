import { BaseEntity } from "./base"
import { EStatus } from "@core/enums/status"
import { EOperations } from "@core/enums/operations"

export default class QrScanSessionEntity extends BaseEntity {
    authSessionId: string
    productId: string
    operation: EOperations
    status: EStatus
    socketRoomId: string
}
