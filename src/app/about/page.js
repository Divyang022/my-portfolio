import About from "@components/About/About.js";
import ScrollToTop from "@components/ScrollToTop";
export default function HomePage() {


    return (
    
      <div className="App" >
              <ScrollToTop />
              <About/>
            </div>  
  );
}