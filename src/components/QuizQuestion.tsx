import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Option {
  id: string;
  label: string;
  icon: string;
}

interface QuizQuestionProps {
  question: string;
  options: Option[];
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion = ({
  question,
  options,
  selectedOption,
  onSelect,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-all duration-300",
              i < questionNumber 
                ? "bg-primary" 
                : i === questionNumber 
                  ? "bg-primary/50" 
                  : "bg-muted"
            )}
          />
        ))}
      </div>

      {/* Question */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
      >
        {question}
      </motion.h2>

      {/* Options */}
      <div className="grid gap-4">
        {options.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            onClick={() => onSelect(option.id)}
            className={cn(
              "group relative p-5 rounded-xl border-2 text-left transition-all duration-300",
              "hover:border-primary/50 hover:bg-muted/50",
              selectedOption === option.id
                ? "border-primary bg-primary/10 shadow-[0_0_30px_hsl(187_85%_53%_/_0.2)]"
                : "border-border bg-card/50"
            )}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{option.icon}</span>
                <span className="font-medium text-foreground text-lg">
                  {option.label}
                </span>
              </div>
              
              {/* Selection indicator */}
              <motion.div
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                animate={{
                  scale: selectedOption === option.id ? 1 : 0.8,
                  borderColor: selectedOption === option.id ? 'hsl(187 85% 53%)' : 'hsl(222 30% 20%)',
                }}
              >
                {selectedOption === option.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3 h-3 rounded-full bg-primary"
                  />
                )}
              </motion.div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizQuestion;