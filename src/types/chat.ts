export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  error: string | null;
}

export interface ClaudeConfig {
  apiKey: string | null;
  model: string;
  maxTokens: number;
}
