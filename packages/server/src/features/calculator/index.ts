import { FastifyPluginAsync } from "fastify";
import { divide, sum, DivisionByZeroError } from "@my-app/lib";

interface CalcParams {
  x: string;
  y: string;
}

type CalcResponse =
  | {
      result: number;
    }
  | {
      error: string;
    };

const calculator: FastifyPluginAsync = async (fastify) => {
  fastify.get<{ Params: CalcParams; Reply: CalcResponse }>(
    "/sum/:x/:y",
    async (request) => {
      const { x, y } = request.params;
      const result = sum(parseInt(x), parseInt(y));
      return { result };
    }
  );

  fastify.get<{ Params: CalcParams; Reply: CalcResponse }>(
    "/divide/:x/:y",
    async (request, reply) => {
      const { x, y } = request.params;
      try {
        const result = divide(parseInt(x), parseInt(y));
        return { result };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error instanceof DivisionByZeroError) {
          return { result: 0 };
        }
        reply.status(400);
        return { error: error.message ?? "Something went wrong" };
      }
    }
  );
};

export default calculator;
