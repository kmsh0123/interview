import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../services/todo.service"
import { Request, Response } from "express"

export const todo = async (req:Request,res:Response) => {
    try {
        const todo =  await createTodo(req.body)
        res.status(201).json({success : true,todo})
    }catch(error:any){
        res.status(400).json({error:error.message})
    }
}

export const getTodosController = async (req: Request, res: Response) => {
  const todos = await getTodos();
  res.json({ success: true, data: todos });
};

export const getTodoByIdController = async (req: Request, res: Response) => {
  const todo = await getTodoById(Number(req.params.id));
  res.json({ success: true, data: todo });
};

export const updateTodoController = async (req: Request, res: Response) => {
  const todo = await updateTodo(Number(req.params.id), req.body);
  res.json({ success: true, data: todo });
};

export const deleteTodoController = async (req: Request, res: Response) => {
  await deleteTodo(Number(req.params.id));
  res.json({ success: true, message: "Todo deleted" });
};
