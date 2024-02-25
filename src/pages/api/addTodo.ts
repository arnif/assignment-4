// pages/api/addTodo.ts

import { addTodo, Todo } from "@/lib/todoStore";
import type { NextApiRequest, NextApiResponse } from "next";

type AddTodoRequestBody = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo | { message: string }>
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { title } = req.body as AddTodoRequestBody;
  const newTodo: Todo = await addTodo(title);

  res.status(200).json(newTodo);
}
