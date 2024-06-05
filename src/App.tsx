import Features from "./components/Features"
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
    </div>
  )
}

export default App
