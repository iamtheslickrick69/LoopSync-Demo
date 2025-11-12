import { motion } from 'framer-motion';
import { MessageSquare, Shield, AlertCircle, PartyPopper, Lightbulb, Clock } from 'lucide-react';

const prompts = [
  {
    icon: Shield,
    text: 'Share anonymous feedback',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: MessageSquare,
    text: 'Ask about company policies',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: AlertCircle,
    text: 'Report a workplace concern',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: PartyPopper,
    text: 'Celebrate a team win',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Lightbulb,
    text: 'Suggest an improvement',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Clock,
    text: 'Check my feedback history',
    color: 'from-indigo-500 to-indigo-600',
  },
];

interface StarterPromptsProps {
  onSelect: (prompt: string) => void;
}

export function StarterPrompts({ onSelect }: StarterPromptsProps) {
  return (
    <div className="mt-6">
      <p className="text-sm text-gray-600 mb-4 text-center">Quick actions:</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {prompts.map((prompt, index) => {
          const Icon = prompt.icon;
          return (
            <motion.button
              key={prompt.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSelect(prompt.text)}
              className="glass px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-white/90 transition-all duration-200 flex items-center gap-2 group hover:scale-105"
            >
              <div className={`p-1 rounded-full bg-gradient-to-r ${prompt.color}`}>
                <Icon className="w-3 h-3 text-white" />
              </div>
              {prompt.text}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
