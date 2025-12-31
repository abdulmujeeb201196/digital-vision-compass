import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toPng } from 'html-to-image';
import { Download, Share2, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from '@/components/StarField';
import DigitalEye from '@/components/DigitalEye';
import QuizQuestion from '@/components/QuizQuestion';
import VisionCard from '@/components/VisionCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { quizQuestions, calculateVision, VisionResult } from '@/data/quizData';
import { useToast } from '@/hooks/use-toast';

type Stage = 'hero' | 'name' | 'quiz' | 'result';

const Index = () => {
  const [stage, setStage] = useState<Stage>('hero');
  const [userName, setUserName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [visionResult, setVisionResult] = useState<VisionResult | null>(null);
  const [eyeActive, setEyeActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleStart = () => {
    setEyeActive(true);
    setTimeout(() => {
      setStage('name');
    }, 2000);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setStage('quiz');
    }
  };

  const handleAnswer = (optionId: string) => {
    const question = quizQuestions[currentQuestion];
    const newAnswers = { ...answers, [question.id]: optionId };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        const result = calculateVision(newAnswers);
        setVisionResult(result);
        setStage('result');
      }
    }, 500);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
      });

      const link = document.createElement('a');
      link.download = `${userName.replace(/\s+/g, '-')}-2026-vision.png`;
      link.href = dataUrl;
      link.click();

      toast({
        title: "Vision Card Downloaded!",
        description: "Share your digital vision on social media.",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    const shareText = `Just discovered my 2026 digital vision with Digital Next Path! I'm ${visionResult?.title}. What's your digital vision? #NewYearNewVision #LetsGetDigital`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My 2026 Digital Vision',
          text: shareText,
        });
      } catch (error) {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to clipboard!",
        description: "Share your vision on social media.",
      });
    }
  };

  const handleReset = () => {
    setStage('hero');
    setUserName('');
    setCurrentQuestion(0);
    setAnswers({});
    setVisionResult(null);
    setEyeActive(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Star background */}
      <StarField />

      {/* Dawn gradient overlay - fades in during animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, hsl(330 80% 65% / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, hsl(15 90% 65% / 0.1) 0%, transparent 40%)',
        }}
        animate={{
          opacity: eyeActive ? 1 : 0.3,
        }}
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary" />
            </div>
            <span className="font-display font-bold text-foreground">Digital Next Path</span>
          </motion.div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <AnimatePresence mode="wait">
            {/* Hero Stage */}
            {stage === 'hero' && (
              <motion.div
                key="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-8 max-w-3xl mx-auto flex flex-col items-center"
              >
                <DigitalEye isActive={eyeActive} />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient glow-text">
                    New Year, New Vision
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground">
                    Let's Get Digital at the Start of the Year
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    onClick={handleStart}
                    size="lg"
                    className="group px-8 py-6 text-lg font-display font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow"
                  >
                    Discover Your Digital Vision
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {/* Name Input Stage */}
            {stage === 'name' && (
              <motion.div
                key="name"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="w-full max-w-md mx-auto text-center space-y-8"
              >
                <div className="space-y-4">
                  <Sparkles className="w-12 h-12 mx-auto text-primary" />
                  <h2 className="font-display text-3xl font-bold text-foreground">
                    Let's personalize your vision
                  </h2>
                  <p className="text-muted-foreground">
                    Enter your name to begin the journey
                  </p>
                </div>

                <form onSubmit={handleNameSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="h-14 text-lg text-center bg-card border-border focus:border-primary"
                    autoFocus
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={!userName.trim()}
                    className="w-full py-6 font-display font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </motion.div>
            )}

            {/* Quiz Stage */}
            {stage === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full px-4"
              >
                <AnimatePresence mode="wait">
                  <QuizQuestion
                    key={currentQuestion}
                    question={quizQuestions[currentQuestion].question}
                    options={quizQuestions[currentQuestion].options}
                    selectedOption={answers[quizQuestions[currentQuestion].id] || null}
                    onSelect={handleAnswer}
                    questionNumber={currentQuestion}
                    totalQuestions={quizQuestions.length}
                  />
                </AnimatePresence>
              </motion.div>
            )}

            {/* Result Stage */}
            {stage === 'result' && visionResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-lg mx-auto space-y-8 px-4"
              >
                <VisionCard
                  ref={cardRef}
                  userName={userName}
                  visionTitle={visionResult.title}
                  visionMantra={visionResult.mantra}
                  visionIcon={visionResult.icon}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    onClick={handleDownload}
                    size="lg"
                    className="flex-1 py-6 font-display bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Card
                  </Button>
                  <Button
                    onClick={handleShare}
                    size="lg"
                    variant="outline"
                    className="flex-1 py-6 font-display border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <Share2 className="mr-2 w-5 h-5" />
                    Share Vision
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center"
                >
                  <Button
                    onClick={handleReset}
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <RotateCcw className="mr-2 w-4 h-4" />
                    Start Over
                  </Button>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="p-6 rounded-2xl border border-border bg-card/50 text-center space-y-4"
                >
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Ready to make this vision a reality?
                  </h3>
                  <p className="text-muted-foreground">
                    Let's discuss how Digital Next Path can help you achieve your 2026 digital goals.
                  </p>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-display"
                    >
                      Talk to Us About Your Path
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-sm text-muted-foreground"
          >
            © 2025 Digital Next Path. All rights reserved.
          </motion.p>
        </footer>
      </div>
    </div>
  );
};

export default Index;