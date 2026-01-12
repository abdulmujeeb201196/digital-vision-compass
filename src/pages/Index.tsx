import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { DualServiceSection } from "@/components/sections/DualServiceSection";
import { IntegratedSolutionsSection } from "@/components/sections/IntegratedSolutionsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DualServiceSection />
      <IntegratedSolutionsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
