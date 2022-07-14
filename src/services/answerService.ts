
import * as answerRepository from "../repositories/answerRepository.js"
import {answers} from "@prisma/client";

export type CreateAnswerData = Omit<answers,"id">


export async function createAnswer(CreateAnswerData : CreateAnswerData){
    await answerRepository.insert(CreateAnswerData);
}