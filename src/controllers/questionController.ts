import { Request, Response } from "express";
import * as answerService from "../services/answerService.js";
import * as questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const CreateQuestionData = req.body;
  await questionService.createQuestion(CreateQuestionData);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const {answer} = req.body;
  const {id} = req.params;
  const CreateAnswerData = {answer, questionId:parseInt(id)}
  await answerService.createAnswer(CreateAnswerData);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAll();
  res.status(200).send({questions}); 
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params;
  const question = await questionService.findById(parseInt(id));
  res.status(200).send(question);
}
