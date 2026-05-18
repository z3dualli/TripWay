export interface RegisterData {
  email: string
  password: string
  confirmpassword: string
}

export interface RegisterPayload {
  email: string
  password: string
}

export interface authState {
  email: string | null
  isAuth: boolean
}