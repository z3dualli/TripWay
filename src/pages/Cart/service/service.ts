import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"
import type { AlltourType } from "../../AllTours/types/type"

export const getAlltours = ()=> {
  return openApi(BASE_URL).get<AlltourType[]>(`${BASE_URL}/tours`)
}

export const postTours = (data: AlltourType)=> {
  return openApi(BASE_URL).post('/users/', data)
}