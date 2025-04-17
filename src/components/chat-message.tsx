import type React from "react";

import { cn } from "../lib/utils";

type MessageProps = {
  message: {
    role: "user" | "assistant";
    content: string;
  };
};

export function ChatMessage({ message }: MessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg p-3",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted",
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
