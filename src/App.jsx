import { useState } from "react";
import "./App.css";
import "./index.css";

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

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
    </>
  );
}

export default App;
