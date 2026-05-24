import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"
import type { TourType } from "../../MainPage/types/type"

export const getTourList = ()=> {
  return openApi(BASE_URL).get('/tours')
}

export const postTour = (data: TourType)=> {
  return openApi(BASE_URL).post('/tours', data)
}

export const DeleteTour = (id: number)=> {
  return openApi(BASE_URL).delete(`/tours/${id}`)
}