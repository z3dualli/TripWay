import type { AlltourType } from "../../AllTours/types/type"


export type CartItem = AlltourType & {
  quantity: number
}