export interface AppType {
  id: number;
  name: string;
  duration: number;
  difficulty: string;
  price: number;
  summary: string;
  image: string;
}

export const initialTour: AppType = {
  id: 0,
  name: "",
  duration: 0,
  difficulty: "",
  price: 0,
  summary: "",
  image: "",
};
export interface PostTourPayload {
  id: number
  name: string
  duration: number
  difficulty: string
  price: number
  summary: string
  image: string
}

export const DifficultyEnum = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
  difficult: "difficult",
} as const;

export interface PatchTourPayload {
  id: number
  name: string
  duration: number
  difficulty: string
  price: number
  summary: string
  image: string
}

export const DifficultyOptions = [
  { value: DifficultyEnum.easy, label: "Easy" },
  { value: DifficultyEnum.medium, label: "Medium" },
  { value: DifficultyEnum.hard, label: "Hard" },
  { value: DifficultyEnum.difficult, label: "Difficult" },
];
