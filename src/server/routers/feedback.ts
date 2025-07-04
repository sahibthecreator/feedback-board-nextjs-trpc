import { router, publicProcedure } from '@/lib/trpc';
import { z } from 'zod';
import { prisma } from "@/lib/prisma";

export const feedbackRouter = router({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(50).default(10),
        cursor: z.number().nullish(),
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor } = input;

      const feedbacks = await prisma.feedback.findMany({
        take: limit + 1, 
        orderBy: { createdAt: "desc" },
        cursor: cursor ? { id: cursor } : undefined,
        skip: cursor ? 1 : 0, // skip the cursor itself
      });

      let nextCursor: number | undefined = undefined;
      if (feedbacks.length > limit) {
        const nextItem = feedbacks.pop(); 
        nextCursor = nextItem?.id;
      }

      return {
        feedbacks,
        nextCursor,
      };
    }),

  add: publicProcedure
    .input(
      z.object({
        title: z.string().min(1).trim(),
        body: z.string().min(3).trim(),
      })
    )
    .mutation(async ({ input }) => {
      return prisma.feedback.create({
        data: {
          title: input.title,
          body: input.body,
        },
      });
    }),
});
