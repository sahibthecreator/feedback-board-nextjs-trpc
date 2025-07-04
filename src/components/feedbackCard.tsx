"use client";

import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { Feedback } from "@/types/feedback";

interface FeedbackCardProps {
  feedback: Feedback;
  index: number;
}

export default function FeedbackCard({ feedback, index }: FeedbackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="p-6 border border-primary rounded-lg bg-white shadow hover:shadow-md transition"
    >
      <h2 className="font-semibold text-lg mb-1">{feedback.title}</h2>
      <p className="text-gray-700 mb-3">{feedback.body}</p>
      <p className="text-sm text-gray-400">
        {formatDistanceToNow(new Date(feedback.createdAt), { addSuffix: true })}
      </p>
    </motion.div>
  );
}
