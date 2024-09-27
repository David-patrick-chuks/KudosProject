import Carspage from "../components/Carspage"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"

const Home = () => {
  return (
    <div className="px-[160px]">
        <Hero />
      <Carspage />
        <Pricing />
    </div>
  )
}

export default Home