import * as questionRepository from "../repositories/questionRepository.js"
import { questions } from "@prisma/client";

export type CreateQuestionData = Omit<questions, "id">


export async function createQuestion(CreateQuestionData: CreateQuestionData) {
    await questionRepository.insert(CreateQuestionData);
}

export async function findAll() {
    const questions = await questionRepository.findAll();
    return questions;
}

export async function findById(id : number){
    return await questionRepository.findById(id);
}
