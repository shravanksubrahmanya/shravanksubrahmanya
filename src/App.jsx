import { useState } from "react";
import "./App.css";
import "./index.css";

import { ThemeProvider } from "./components/ThemeContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Github } from "./components/sections/Github";
import { Blogs } from "./components/sections/Blogs";
import { Footer } from "./components/Footer";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { FloatingRobot } from "./components/FloatingRobot";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <FloatingRobot />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Home />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Blogs />
          <Github />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
