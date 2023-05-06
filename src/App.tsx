import { Navbar } from "./components/Navbar";

import { Home } from "./scenes/Home";
import { Benefits } from "./scenes/Benefits";
import { OurClasses } from "./scenes/OurClasses";
import { ContactUs } from "./scenes/ContactUs";
import { Footer } from "./scenes/Footer";

export function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Home />
        <Benefits />
        <OurClasses />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
