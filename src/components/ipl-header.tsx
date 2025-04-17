import { Trophy } from "lucide-react";

export function IPLHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-2 font-bold">
          <Trophy className="h-5 w-5 text-primary" />
          <span>IPL Chatbot</span>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div
                className="h-6 w-6 rounded-full bg-[#004c93]"
                title="Mumbai Indians"
              />
              <div
                className="h-6 w-6 rounded-full bg-[#fdb913]"
                title="Chennai Super Kings"
              />
              <div
                className="h-6 w-6 rounded-full bg-[#a72056]"
                title="Royal Challengers Bangalore"
              />
              <div
                className="h-6 w-6 rounded-full bg-[#3b215e]"
                title="Kolkata Knight Riders"
              />
              <div
                className="h-6 w-6 rounded-full bg-[#d71920]"
                title="Delhi Capitals"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
