import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveTicker from "./components/LiveTicker";

export default function Home() {
  return (
    <div>
      <LiveTicker />
      <Navbar />
      <Hero />
    </div>
  );
}
