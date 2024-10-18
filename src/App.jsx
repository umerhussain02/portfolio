import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Education from "./components/Education";
import Contact from "./components/Contact";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ThemeProvider theme={theme}>
          <Header />
          <Hero />
          <Skills />
          <Projects />
          {/* <Education /> */}
          <Contact />
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
