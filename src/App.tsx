import Navbar from "./components/Navbar";
import About from "./components/About";
import Info from "./components/Info";
import Skills from "./components/Skills";
import History from "./components/History";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import AboutThisSite from "./components/Site";

function App() {
  return (
    <div className="bg-[#e6ead8] relative flex flex-col ">
      <Navbar />
      <div className="mx-4 sm:mt-24 mt-10 text-center flex flex-col  items-center min-h-screen overflow-x-hidden">
        <Info />
        <About />
        <Skills />
        <History />
        <Certificates />
        <Projects />
        <AboutThisSite />
      </div>

      <footer className="flex items-center justify-center bg-[#6ba28f] p-6 px-10 rounded-t-xl mx-4 shadow-inner mt-12 sm:mt-24">
        <p className="font-medium">by Matin Chehrehsaz</p>
      </footer>
    </div>
  );
}

export default App;
