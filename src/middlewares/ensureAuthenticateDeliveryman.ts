import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../database/prismaClient";

interface IPayload {
  sub: string;
}

export function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    })
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: id } = verify(token, "589beaff4a1fe045f44812a39b00abad") as IPayload;

    const deliveryman = prisma.deliveryman.findFirst({
      where: {
        id
      }
    })

    if (!deliveryman) {
      throw new Error("Client not found!");
    }

    request.id_deliveryman = id;

    return next()

  } catch (err) {
    return response.status(401).json({
      message: "Invalid token",
    })
  }


}