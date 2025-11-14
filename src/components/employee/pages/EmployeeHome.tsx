import { motion } from 'framer-motion';
import { ChatInterface } from '../ChatInterface';
import { StarterPrompts } from '../StarterPrompts';
import { useChatStore } from '../../../store/chatStore';

export function EmployeeHome() {
  const { addMessage } = useChatStore();

  const handlePromptSelect = (prompt: string) => {
    addMessage({ role: 'user', content: prompt });
  };

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          How can{' '}
          <span className="text-gradient">Coro</span>
          {' '}help you today?
        </h1>
        <p className="text-xl text-gray-600">
          Your trusted AI assistant for workplace feedback and support
        </p>
      </motion.div>

      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ChatInterface />
      </motion.div>

      {/* Starter Prompts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <StarterPrompts onSelect={handlePromptSelect} />
      </motion.div>

      {/* Trust Signals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-gradient mb-2">100%</div>
          <div className="text-sm text-gray-600">Anonymous & Secure</div>
        </div>
        <div className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
          <div className="text-sm text-gray-600">Always Available</div>
        </div>
        <div className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-gradient mb-2">AI-Powered</div>
          <div className="text-sm text-gray-600">Intelligent Support</div>
        </div>
      </motion.div>
    </div>
  );
}
