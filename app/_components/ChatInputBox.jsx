"use client";
import { Paperclip, Mic, Send } from "lucide-react";
import AiMultiModels from "./AiMultiModels";
import { Button } from "@/components/ui/button";
import React from "react";

function ChatInputBox() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Main chat area */}
      <div className="flex-1 overflow-y-auto p-4">
        <AiMultiModels />
      </div>

      {/* Chat input box (sticky bottom) */}
      <div className="sticky bottom-0 left-0 w-full bg-background border-t border-border px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-2 shadow-sm">
          {/* Attachment button */}
          <Button variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>

          {/* Input field */}
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
          />

          {/* Mic and send buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Mic className="h-5 w-5" />
            </Button>
            <Button size="icon">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInputBox;
