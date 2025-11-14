import { motion } from 'framer-motion';
import { Shield, Lock, MessageCircle, Clock, BookOpen, Mail } from 'lucide-react';
import { GlassCard } from '../../shared/GlassCard';

export function HelpResources() {
  const faqs = [
    {
      question: 'Is my feedback really anonymous?',
      answer: 'Yes, absolutely. Your feedback is encrypted and anonymized before being analyzed by Coro AI. Leadership sees insights and themes, not individual identities.',
    },
    {
      question: 'How long does it take to get a response?',
      answer: 'Most feedback receives acknowledgment within 24-48 hours. Complex issues may take longer to address, but you\'ll see status updates along the way.',
    },
    {
      question: 'Can I delete my feedback after submitting?',
      answer: 'Yes, you can delete feedback that hasn\'t been reviewed yet. Once it\'s been acknowledged or responded to, deletion requires contacting support.',
    },
    {
      question: 'What types of feedback should I share?',
      answer: 'Share anything that impacts your work experience: suggestions, concerns, celebrations, questions about policies, or ideas for improvement.',
    },
  ];

  const resources = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy & Security',
      description: 'Learn how we protect your identity and data',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Anonymity Guarantee',
      description: 'Understand our commitment to your privacy',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Feedback Best Practices',
      description: 'Tips for effective communication',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Timeline',
      description: 'What to expect after submission',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Help & Resources</h1>
        <p className="text-gray-600">Everything you need to know about using LoopSync</p>
      </motion.div>

      {/* Quick Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
      >
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
          >
            <GlassCard className="p-6 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary-500" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <GlassCard className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <GlassCard className="p-8 text-center bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
          <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            Our support team is here to help you get the most out of LoopSync
          </p>
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Contact Support
          </button>
        </GlassCard>
      </motion.div>
    </div>
  );
}
