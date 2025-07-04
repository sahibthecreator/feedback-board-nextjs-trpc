"use client";
import FeedbackCard from "@/components/feedbackCard";
import HeroSection from "@/components/heroSection";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useFeedback } from "@/hooks/useFeedback";
import { handleTRPCError } from "@/lib/handleTRPCError";
import { error } from "console";
import { useEffect } from "react";

export default function HomePage() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useFeedback();

  const feedbacks = data?.pages.flatMap((page) => page.feedbacks) ?? [];

  return (
    <div className="main">
      <HeroSection title="Feedback Board" />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-4xl font-bold text-dark">
            Give Us Your <span className="text-primary">Feedback</span>
          </h1>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="p-6 border border-primary rounded-lg bg-white shadow"
              >
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-2/3 mt-2" />
              </div>
            ))
          ) : isError ? (
            <div className="p-6 border border-red-300 bg-red-50 rounded-lg shadow">
              <h2 className="text-lg font-bold text-red-700 mb-4">
                Oops! Couldn’t load feedback. {}
              </h2>
              <Button onClick={() => refetch()}>Try Again</Button>
            </div>
          ) : feedbacks?.length ? (
            <>
              {feedbacks.map((fb, i) => (
                <FeedbackCard key={fb.id} feedback={fb} index={i} />
              ))}

              {hasNextPage && (
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className="font-bold"
                  >
                    {isFetchingNextPage ? "Loading more..." : "Load More"}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500">
              No feedback yet. Be the first to add one!
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
