import { motion } from 'framer-motion';
import { Bot, Cloud, Shield, Link2, Cpu, Sparkles } from 'lucide-react';

const icons = [
  { Icon: Bot, color: 'text-primary', delay: 0 },
  { Icon: Cloud, color: 'text-dawn-sky', delay: 0.5 },
  { Icon: Shield, color: 'text-secondary', delay: 1 },
  { Icon: Link2, color: 'text-accent', delay: 1.5 },
  { Icon: Cpu, color: 'text-cyber-teal', delay: 2 },
  { Icon: Sparkles, color: 'text-dawn-coral', delay: 2.5 },
];

interface FloatingIconsProps {
  isActive: boolean;
}

const FloatingIcons = ({ isActive }: FloatingIconsProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {icons.map(({ Icon, color, delay }, index) => {
        const angle = (index / icons.length) * Math.PI * 2;
        const radius = 140;
        const startX = Math.cos(angle) * radius * 2;
        const startY = Math.sin(angle) * radius * 2;
        const endX = Math.cos(angle) * 40;
        const endY = Math.sin(angle) * 40;

        return (
          <motion.div
            key={index}
            className={`absolute ${color}`}
            initial={{ 
              x: startX, 
              y: startY, 
              opacity: 0,
              scale: 0.5 
            }}
            animate={isActive ? { 
              x: endX, 
              y: endY, 
              opacity: [0, 1, 1, 0.8],
              scale: [0.5, 1.2, 1] 
            } : {
              x: [startX, startX + 20, startX],
              y: [startY, startY - 15, startY],
              opacity: [0.3, 0.6, 0.3],
              scale: 0.8
            }}
            transition={isActive ? {
              duration: 2,
              delay: delay,
              ease: "easeOut",
            } : {
              duration: 4,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;