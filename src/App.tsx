import React from 'react';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CompetitiveProgrammingSection } from './components/CompetitiveProgrammingSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { EducationSection } from './components/EducationSection';
import { CurrentlyLearningSection } from './components/CurrentlyLearningSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';

export default function App() {
  return (
    <ProfilePhotoProvider>
      <div className="relative min-h-screen bg-[#0d1224] text-slate-100 flex flex-col font-sans selection:bg-[#16f2b3]/30 selection:text-[#16f2b3] overflow-x-hidden">
        {/* Dynamic Interactive Hooking Background Animation */}
        <BackgroundAnimation />

        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10 flex-1 flex flex-col">
          {/* 1. Hero */}
          <HeroSection />

          {/* 2. About */}
          <AboutSection />

          {/* 3. Skills */}
          <SkillsSection />

          {/* 4. Projects */}
          <ProjectsSection />

          {/* 5. Competitive Programming */}
          <CompetitiveProgrammingSection />

          {/* 6. Hackathons & Activities */}
          <ActivitiesSection />

          {/* 7. Education */}
          <EducationSection />

          {/* 8. Currently Learning */}
          <CurrentlyLearningSection />

          {/* 9. Contact */}
          <ContactSection />
        </main>

        {/* 10. Footer */}
        <Footer />
      </div>
    </ProfilePhotoProvider>
  );
}
