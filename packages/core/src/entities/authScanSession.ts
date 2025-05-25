import { BaseEntity } from "./base"

export default class AuthScanSessionEntity extends BaseEntity {
    token: string
    isActive: boolean
    expiresAt: Date
}
