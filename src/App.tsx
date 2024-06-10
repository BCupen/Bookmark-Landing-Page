import CTA from "./components/CTA"
import Extensions from "./components/Extensions"
import FAQs from "./components/FAQs"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TabSection from "./components/TabSection"

function App() {

  return (
    <div className="max-w-[1440px] font-body flex flex-col mx-auto items-center gap-8">
      <Header />
      <Hero />
      <Features />
      <TabSection />
      <Extensions />
      <FAQs />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
