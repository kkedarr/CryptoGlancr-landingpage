import Hero from "../components/Hero";
import Features from "../components/Features";
import GettingStarted from "../components/GettingStarted";
import Reviews from "../components/Reviews";
import Waitlist from "../components/Waitlist";
import ForEveryone from "../components/ForEveryone";
const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <ForEveryone />
      <GettingStarted />
      <Reviews />
      <Waitlist />
    </main>
  );
};

export default Home;
