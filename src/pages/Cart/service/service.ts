import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"
import type { AlltourType } from "../../AllTours/types/type"
import type { PatchUserPayload } from "../types/type"

export const getAlltours = ()=> {
  return openApi(BASE_URL).get<AlltourType[]>("/tours")
}

export const getUserById = (id:string)=> {
  return openApi(BASE_URL).get(`/users/${id}`)
}

export const patchUser = (id: string, data: PatchUserPayload)=> {
  return openApi(BASE_URL).patch(`/users/${id}`, data)
}