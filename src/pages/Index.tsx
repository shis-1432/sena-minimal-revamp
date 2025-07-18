import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ValuesSection from "@/components/ValuesSection"
import InitiativesSection from "@/components/InitiativesSection"
import AchievementsSection from "@/components/AchievementsSection"
import Footer from "@/components/Footer"
import CursorBubble from "@/components/CursorBubble"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorBubble />
      <Header />
      <Hero />
      <ValuesSection />
      <InitiativesSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
};

export default Index;
