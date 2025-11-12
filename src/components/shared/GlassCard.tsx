import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'strong' | 'subtle';
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hover = false,
  variant = 'default',
  delay = 0,
}: GlassCardProps) {
  const variantClasses = {
    default: 'glass',
    strong: 'glass-strong',
    subtle: 'glass-subtle',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        variantClasses[variant],
        'rounded-2xl p-6',
        hover && 'glass-hover cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
