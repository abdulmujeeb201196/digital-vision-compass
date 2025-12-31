import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface VisionCardProps {
  userName: string;
  visionTitle: string;
  visionMantra: string;
  visionIcon: string;
}

const VisionCard = forwardRef<HTMLDivElement, VisionCardProps>(
  ({ userName, visionTitle, visionMantra, visionIcon }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(222 47% 10%) 0%, hsl(222 47% 6%) 100%)',
          boxShadow: '0 25px 80px -20px hsl(187 85% 53% / 0.3), 0 0 0 1px hsl(187 85% 53% / 0.2)',
        }}
      >
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, hsl(330 80% 65% / 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, hsl(187 85% 53% / 0.3) 0%, transparent 50%)`,
          }}
        />

        {/* Star dots */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-foreground/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-between p-8 text-center">
          {/* Header */}
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              2025 Digital Vision
            </p>
            <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-primary via-accent to-secondary" />
          </div>

          {/* Main content */}
          <div className="space-y-6">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="text-6xl"
            >
              {visionIcon}
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-2xl font-bold text-gradient"
            >
              {userName || "Your Name"}
            </motion.h2>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-muted-foreground mb-2">You are</p>
              <h3 className="font-display text-3xl font-bold text-foreground">
                {visionTitle}
              </h3>
            </motion.div>

            {/* Mantra */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground italic max-w-xs mx-auto leading-relaxed"
            >
              "{visionMantra}"
            </motion.p>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary" />
            </div>
            <p className="text-xs text-muted-foreground tracking-wider">
              Digital Next Path
            </p>
          </motion.div>
        </div>

        {/* Glow border effect */}
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 30px hsl(187 85% 53% / 0.1)',
          }}
        />
      </motion.div>
    );
  }
);

VisionCard.displayName = 'VisionCard';

export default VisionCard;