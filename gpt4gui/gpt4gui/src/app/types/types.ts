import { GptResponseGetDTO } from "../dtos/dtos";

export type Role = "system" | "user" | "assistant";

export type Message = {
    question: string,
    answer: GptResponseGetDTO
}