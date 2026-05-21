import type { AlltourType } from "../../AllTours/types/type"

export type CartItem = AlltourType & {
  quantity: number
}

export interface Purchase {
  date: string
  tours: CartItem[]
  total: number
}

export interface PatchUserPayload {
  purchases: Purchase[]
}