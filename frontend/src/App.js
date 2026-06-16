import "@/App.css";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { VideoShowcase } from "@/components/site/VideoShowcase";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

function App() {
  return (
    <div className="App bg-[#0a0a0b] min-h-screen">
      <Toaster position="top-right" theme="dark" richColors />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <VideoShowcase />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
