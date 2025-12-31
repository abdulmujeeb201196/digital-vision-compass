export interface QuizOption {
  id: string;
  label: string;
  icon: string;
}

export interface QuizQuestionData {
  id: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestionData[] = [
  {
    id: 'challenge',
    question: "What's your biggest digital challenge heading into 2025?",
    options: [
      { id: 'ai', label: 'Keeping up with AI advancements', icon: '🤖' },
      { id: 'security', label: 'Securing my data & systems', icon: '🛡️' },
      { id: 'cloud', label: 'Cloud migration & optimization', icon: '☁️' },
      { id: 'skills', label: 'Closing the digital skills gap', icon: '📚' },
    ],
  },
  {
    id: 'excitement',
    question: 'Which technology are you most excited to leverage?',
    options: [
      { id: 'genai', label: 'Generative AI & LLMs', icon: '✨' },
      { id: 'sustainable', label: 'Sustainable & Green Tech', icon: '🌱' },
      { id: 'automation', label: 'Hyper-automation & RPA', icon: '⚡' },
      { id: 'cybersec', label: 'AI-powered Cybersecurity', icon: '🔐' },
    ],
  },
  {
    id: 'goal',
    question: "What's your primary goal for the new year?",
    options: [
      { id: 'efficiency', label: 'Boost operational efficiency', icon: '🚀' },
      { id: 'security_goal', label: 'Enhance security posture', icon: '🏰' },
      { id: 'innovation', label: 'Drive innovation & growth', icon: '💡' },
      { id: 'cost', label: 'Reduce costs & optimize spend', icon: '📊' },
    ],
  },
];

export interface VisionResult {
  title: string;
  mantra: string;
  icon: string;
}

export const visionResults: Record<string, VisionResult> = {
  ai_pioneer: {
    title: 'The AI Pioneer',
    mantra: 'Leverage AI ethically to unlock new creative frontiers and transform how work gets done.',
    icon: '🚀',
  },
  cloud_architect: {
    title: 'The Cloud Architect',
    mantra: 'Build resilient, scalable infrastructure that powers innovation and enables agility.',
    icon: '☁️',
  },
  security_sentinel: {
    title: 'The Security Sentinel',
    mantra: 'Protect digital assets with vigilance, building trust through uncompromising security.',
    icon: '🛡️',
  },
  innovation_catalyst: {
    title: 'The Innovation Catalyst',
    mantra: 'Spark transformation by embracing emerging tech and fostering a culture of experimentation.',
    icon: '💡',
  },
  efficiency_master: {
    title: 'The Efficiency Master',
    mantra: 'Streamline operations through smart automation, doing more with less while scaling impact.',
    icon: '⚡',
  },
  green_visionary: {
    title: 'The Green Visionary',
    mantra: 'Champion sustainable technology that creates value while protecting our planet.',
    icon: '🌱',
  },
};

export function calculateVision(answers: Record<string, string>): VisionResult {
  const { challenge, excitement, goal } = answers;

  // Logic to determine vision based on answers
  if (challenge === 'ai' && excitement === 'genai') {
    return visionResults.ai_pioneer;
  }
  if (challenge === 'cloud' || excitement === 'genai' && goal === 'efficiency') {
    return visionResults.cloud_architect;
  }
  if (challenge === 'security' || excitement === 'cybersec' || goal === 'security_goal') {
    return visionResults.security_sentinel;
  }
  if (excitement === 'sustainable') {
    return visionResults.green_visionary;
  }
  if (goal === 'innovation') {
    return visionResults.innovation_catalyst;
  }
  if (excitement === 'automation' || goal === 'efficiency' || goal === 'cost') {
    return visionResults.efficiency_master;
  }

  // Default
  return visionResults.innovation_catalyst;
}