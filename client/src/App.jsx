import { Footer, Navbar, TopNav } from "./components/sections";
import Layout from "./Layout";

// react router
import { BrowserRouter } from 'react-router-dom'

export default function App() {




  return (
    <div className="relative">
      <div id="body-wrapper" className="absolute z-[205]"></div>

      <BrowserRouter>
        <TopNav />
        <Navbar />

        <Layout />

        <Footer />
      </BrowserRouter>


    </div>
  )
}
