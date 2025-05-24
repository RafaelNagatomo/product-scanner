import { Base } from "./base"

export default class AuthScanSession extends Base {
    token: string
    isActive: boolean
    expiresAt: Date
}
