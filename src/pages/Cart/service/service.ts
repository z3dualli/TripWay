import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"
import type { AlltourType } from "../types/type"

export const getAlltours = ()=> {
  return openApi(BASE_URL).get<AlltourType[]>(`${BASE_URL}/tours`)
}