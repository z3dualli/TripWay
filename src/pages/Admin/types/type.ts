export interface AppType{
  id: number
  name: string
  duration: number
  difficulty: string
  price: number
  summary: string
  image: string
}

export interface PostTourPayload {
  name: string
  duration: number
  difficulty: string
  price: number
  summary: string
  image: string
}

export const DifficultyEnum = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
  difficult: 'difficult',
} as const

export const DifficultyOptions = [
  {value: DifficultyEnum.easy, label: 'Easy'},
  {value: DifficultyEnum.medium, label: 'Medium'},
  {value: DifficultyEnum.hard, label: 'Hard'},
  {value: DifficultyEnum.difficult, label: 'Difficult'},
]