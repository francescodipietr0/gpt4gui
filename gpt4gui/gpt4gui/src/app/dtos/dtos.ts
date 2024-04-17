import { Role } from "../types/types"

export interface GptResponseGetDTO {
    id: string,
    created: number,
    choices: ChoiceDTO,
    usage: {
        prompt_tokens: number,
        completion_tokens: number,
        total_tokens: number
    }
}

export interface ChoiceDTO {
    message: {
        role: Role,
        content: string,
    },
    logprobs: any // TODO: immagino sia una stringa che contenga i log di errore, lo capiremo
}