import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";


export async function insert(CreateQuestionData: CreateQuestionData) {
    await prisma.questions.create({
        data: CreateQuestionData
    });
}

export async function findAll() {
    return await prisma.questions.findMany();
}

export async function findById(id: number) {
    return await prisma.questions.findUnique({
        where: { id },
        include: {
            answers:{
                select:{
                    answer: true
                }
            }
        }
    })
}