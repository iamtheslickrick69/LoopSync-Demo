import { create } from 'zustand';
import { Message } from '../types/chat';

interface ChatStore {
  messages: Message[];
  isTyping: boolean;
  error: string | null;

  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setTyping: (isTyping: boolean) => void;
  setError: (error: string | null) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  isTyping: false,
  error: null,

  addMessage: (message) => {
    const newMessage: Message = {
      ...message,
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
    };

    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
  },

  setTyping: (isTyping) => set({ isTyping }),

  setError: (error) => set({ error }),

  clearMessages: () => set({ messages: [], error: null }),
}));
