import { trpc } from "@/lib/trpcClient";

export function useAddFeedback() {
  const utils = trpc.useUtils();
  return trpc.feedback.add.useMutation({
    onSuccess: (newFeedback) => {
      utils.feedback.list.setInfiniteData({ limit: 10 }, (old) => {
        if (!old) return old;
        const [firstPage, ...rest] = old.pages;
        return {
          ...old,
          pages: [
            {
              feedbacks: [newFeedback, ...firstPage.feedbacks],
              nextCursor: old.pages[0].nextCursor, // keep the same cursor
            },
            ...rest,
          ],
        };
      });
    },
  });
}
