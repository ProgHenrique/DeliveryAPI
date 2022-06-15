import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../database/prismaClient";

interface IPayload {
  sub: string;
}

export function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    })
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: id } = verify(token, "d93fec5d576593621147654f94db68e2") as IPayload;

    const client = prisma.client.findFirst({
      where: {
        id
      }
    })

    if (!client) {
      throw new Error("Client not found!");

    }

    request.id_client = id;

    return next()

  } catch (err) {
    return response.status(401).json({
      message: "Invalid token",
    })
  }


}