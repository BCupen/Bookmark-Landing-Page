import Extensions from "./components/Extensions"
import FAQs from "./components/FAQs"
import Features from "./components/Features"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TabSection from "./components/TabSection"

function App() {

  return (
    <div className="max-w-[1440px] font-body flex flex-col mx-auto items-center gap-8 mb-20">
      <Header />
      <Hero />
      <Features />
      <TabSection />
      <Extensions />
      <FAQs />
    </div>
  )
}

export default App
