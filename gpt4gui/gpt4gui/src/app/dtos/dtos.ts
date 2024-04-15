export interface GetResponseDTO {
    id: string,
    created: number,
    choices: ChoiceDTO[],
    usage: {
        prompt_tokens: number,
        completion_tokens: number,
        total_tokens: number
    }
}

export interface ChoiceDTO {
    message: {
        role: string;
        content: string;
    },
    logprobs: any // TODO: immagino sia una stringa che contenga i log di errore, lo capiremo
}