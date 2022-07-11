import fastify from "fastify";
import cors from "@fastify/cors";
import { CORS_ORIGIN } from "../constants";
import jwt from "@fastify/jwt";
import fs from "fs";
import path from "path";

function createServer() {
  const app = fastify();

  app.register(cors, {
    origin: CORS_ORIGIN,
    credentials: true,
  });

  app.register(jwt, {
    secret: {
      private: fs.readFileSync(
        `${(path.join(process.cwd()), "certs")}/private.key`
      ),
      public: fs.readFileSync(
        `${(path.join(process.cwd()), "certs")}/public.key`
      ),
    },
    sign: {
      algorithm: "RS256",
    },
    cookie: {
      cookieName: "token",
      signed: false,
    },
  });
  return app;
}

export default createServer;
