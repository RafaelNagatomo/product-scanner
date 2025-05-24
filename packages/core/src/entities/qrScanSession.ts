import { Base } from "./base"
import { Status } from "@core/enums/status"
import { Operations } from "@core/enums/operations"

export default class QrScanSession extends Base {
    authSessionId: string
    productId: string
    operation: Operations
    status: Status
    socketRoomId: string
}
