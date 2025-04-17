import { cn } from "../lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

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
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted prose prose-sm dark:prose-invert",
        )}
      >
        {isUser ? (
          message.content
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              // Override default element styling
              p: ({ node, ...props }) => <p className="my-1" {...props} />,
              a: ({ node, ...props }) => (
                <a className="text-primary hover:underline" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-4 my-2" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-4 my-2" {...props} />
              ),
              li: ({ node, ...props }) => <li className="my-0.5" {...props} />,
              h1: ({ node, ...props }) => (
                <h1 className="text-xl font-bold my-2" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-lg font-bold my-2" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-md font-bold my-1" {...props} />
              ),
              code: ({ node, inline, className, children, ...props }) => {
                if (inline) {
                  return (
                    <code
                      className="bg-muted-foreground/20 px-1 py-0.5 rounded text-sm"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
                return (
                  <pre className="bg-muted-foreground/20 p-2 rounded-md overflow-x-auto my-2 text-sm">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                );
              },
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-muted-foreground/30 pl-2 italic my-2"
                  {...props}
                />
              ),
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-2">
                  <table
                    className="border-collapse border border-border w-full"
                    {...props}
                  />
                </div>
              ),
              th: ({ node, ...props }) => (
                <th
                  className="border border-border p-1 bg-muted-foreground/10 font-medium"
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <td className="border border-border p-1" {...props} />
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
