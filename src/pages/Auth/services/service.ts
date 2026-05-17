import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"
import type { RegisterPayload } from "../types/type"

export const getUsers = ()=> {
  return openApi(BASE_URL).get('/users')
}

export const postApp = (data: RegisterPayload)=> {
  return openApi(BASE_URL).post('/register', data)
}

export const loginUser = (data: RegisterPayload)=> {
  return openApi(BASE_URL).post('/login', data)
}