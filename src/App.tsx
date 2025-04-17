import { ChatInterface } from "./components/chat-interface";
import { IPLHeader } from "./components/ipl-header";

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <IPLHeader />
      <main className="flex-1 container max-w-4xl mx-auto p-4 flex items-center justify-center">
        <ChatInterface />
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} IPL Chatbot - Ask anything about IPL
        cricket
      </footer>
    </div>
  );
}

export default App;
