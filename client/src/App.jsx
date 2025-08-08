import { useEffect, useState } from "react";
import { Footer, Navbar, TopNav } from "./components/sections";
import Layout from "./Layout";

// redux
import { store } from './redux/store.js'
import { Provider } from 'react-redux'


// react router
import { BrowserRouter } from 'react-router-dom'

export default function App() {



  return (
    <div className="relative">
      <div id="body-wrapper" className="absolute z-[205]"></div>
      <Provider store={store}>

        <BrowserRouter>
          <TopNav />
          <Navbar />

          <Layout />

          <Footer />
        </BrowserRouter>
      </Provider>

    </div>
  )
}
