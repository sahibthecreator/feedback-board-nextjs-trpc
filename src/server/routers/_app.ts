import { router } from '@/lib/trpc';
import { feedbackRouter } from './feedback';

export const appRouter = router({
  feedback: feedbackRouter,
});

export type AppRouter = typeof appRouter;
