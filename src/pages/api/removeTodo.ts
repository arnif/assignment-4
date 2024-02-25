import { removeTodoById } from "@/lib/todoStore";
import type { NextApiRequest, NextApiResponse } from "next";

type RemoveTodoQueryParams = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method !== "DELETE") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { id } = req.query as RemoveTodoQueryParams;
  const success: boolean = await removeTodoById(id);

  if (success) {
    res.status(200).json({ message: "Todo removed successfully" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
}
