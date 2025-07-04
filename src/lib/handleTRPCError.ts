// lib/handleTRPCError.ts
import { toast } from "sonner";

export function handleTRPCError(err: unknown, fallback = "Something went wrong! Please try again") {
  if (!err) {
    toast.error(fallback);
    return;
  }

  if (typeof err !== "object") {
    toast.error(String(err));
    return;
  }

  const maybeError = err as { message?: string };

  // Try to parse JSON
  if (maybeError.message) {
    try {
      const parsed = JSON.parse(maybeError.message);
      if (Array.isArray(parsed)) {
        const first = parsed[0];
        if (first?.message) {
          toast.error(first.message);
          return;
        }
      }
    } catch {
      // Not JSON, use plain message
      toast.error(maybeError.message);
      return;
    }
  }

  toast.error(fallback);
}
