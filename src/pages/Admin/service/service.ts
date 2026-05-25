import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"
import type { TourType } from "../../MainPage/types/type"
import type { PatchTourPayload, PostTourPayload } from "../types/type"

export const getTourList = ()=> {
  return openApi(BASE_URL).get('/tours')
}

export const postTour = (data: PostTourPayload)=> {
  return openApi(BASE_URL).post('/tours', data)
}

export const DeleteTour = (id: number)=> {
  return openApi(BASE_URL).delete(`/tours/${id}`)
}

export const PatchTour = (id: number, data: PatchTourPayload)=> {
  return openApi(BASE_URL).patch(`/tours/${id}`, data)
}