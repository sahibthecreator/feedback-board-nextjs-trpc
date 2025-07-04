import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "@/server/routers/_app";

type RouterOutput = inferRouterOutputs<AppRouter>;

export type Feedback = RouterOutput["feedback"]["list"]["feedbacks"][number];
