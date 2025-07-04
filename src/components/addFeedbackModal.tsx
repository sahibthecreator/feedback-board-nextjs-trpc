"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useAddFeedback } from "@/hooks/useAddFeedback";
import { handleTRPCError } from "@/lib/handleTRPCError";

export default function AddFeedbackModal() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const { mutate: addFeedback, isPending: isLoading } = useAddFeedback();

  const isFormValid = () => title.trim() && body.trim();

  const resetForm = () => {
    setTitle("");
    setBody("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Please fill in both fields.");
      return;
    }

    addFeedback(
      { title, body },
      {
        onSuccess: () => {
          toast.success("Feedback submitted!");
          setOpen(false);
          resetForm();
        },
        onError: (err) => handleTRPCError(err),
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="font-bold">+ Add Feedback</Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Write Feedback</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
          />
          <Textarea
            placeholder="Your feedback"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            disabled={isLoading}
          />
          <DialogFooter>
            <Button type="submit" className="font-bold" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
