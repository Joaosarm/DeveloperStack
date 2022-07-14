import { prisma } from "../config/database.js";
import { CreateAnswerData } from "../services/answerService.js";


export async function insert(CreateAnswerData : CreateAnswerData) {
    await prisma.answers.create({
        data : CreateAnswerData,
    });
}