import { trpc } from "@/lib/trpcClient";

export function useFeedback() {
  return trpc.feedback.list.useInfiniteQuery(
    {
      limit: 10, 
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: "always",
    }
  );
}