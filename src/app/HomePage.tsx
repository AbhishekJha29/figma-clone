import { Footer } from "~/components/home/Footer";
import { Hero } from "~/components/home/Hero";
import { Navbar } from "~/components/home/Navbar";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <Hero/>
      </main>
      <Footer />
    </div>
  );
}
