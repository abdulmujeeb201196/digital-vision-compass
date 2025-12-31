import { motion } from 'framer-motion';
import FloatingIcons from './FloatingIcons';

interface DigitalEyeProps {
  isActive: boolean;
}

const DigitalEye = ({ isActive }: DigitalEyeProps) => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(187 85% 53% / 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main eye container */}
      <motion.div
        className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-2 border-primary/30 flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, hsl(222 47% 10%) 0%, hsl(222 47% 6%) 100%)',
          boxShadow: '0 0 60px hsl(187 85% 53% / 0.3), inset 0 0 40px hsl(187 85% 53% / 0.1)',
        }}
        animate={{
          boxShadow: isActive 
            ? '0 0 100px hsl(187 85% 53% / 0.5), inset 0 0 60px hsl(187 85% 53% / 0.2)'
            : '0 0 60px hsl(187 85% 53% / 0.3), inset 0 0 40px hsl(187 85% 53% / 0.1)',
        }}
        transition={{ duration: 1 }}
      >
        {/* Inner iris */}
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32 rounded-full relative overflow-hidden"
          style={{
            background: 'conic-gradient(from 0deg, hsl(187 85% 53%), hsl(330 80% 65%), hsl(15 90% 65%), hsl(187 85% 53%))',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Pupil */}
          <motion.div
            className="absolute inset-4 md:inset-6 rounded-full bg-background flex items-center justify-center"
            animate={{
              scale: isActive ? [1, 0.8, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Digital pattern inside pupil */}
            <motion.div
              className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(187 85% 53% / 0.8) 0%, transparent 70%)',
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Floating icons */}
        <FloatingIcons isActive={isActive} />
      </motion.div>

      {/* Orbiting particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            boxShadow: '0 0 10px hsl(187 85% 53%)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        >
          <motion.div
            className="absolute"
            style={{
              left: 100 + i * 20,
              top: 0,
              width: 4 - i * 0.5,
              height: 4 - i * 0.5,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DigitalEye;