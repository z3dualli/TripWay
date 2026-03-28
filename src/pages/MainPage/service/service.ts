import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"
import type { TourType } from "../types/type"

export const getTours = ()=> {
  return openApi(BASE_URL).get<TourType[]>(`${BASE_URL}/tours`)
}