import React, { useEffect, useLayoutEffect } from 'react'

// pages
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'

// extra pages
import Testimonials from './components/pages/Testimonials.jsx'
import TermsOfService from './components/pages/TermsOfService.jsx'
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx'
import FAQ from './components/pages/FAQ.jsx'

// inventory
import InventoryGrid from './components/pages/InventoryGrid.jsx'
import InventorySingle from './components/pages/InventorySingle.jsx'

// auth pages
import Login from './components/pages/auth/Login.jsx'
import Register from './components/pages/auth/Register.jsx'
import ForgotPassword from './components/pages/auth/ForgotPassword.jsx'
// dashboard pages
import DashboardLayout from './components/pages/dashboard/DashboardLayout.jsx'
import Dashboard from './components/pages/dashboard/Dashboard.jsx'
import Profile from './components/pages/dashboard/Profile.jsx'
import MyListings from './components/pages/dashboard/MyListings.jsx'
import AddListing from './components/pages/dashboard/AddListing.jsx'
import MyFavorites from './components/pages/dashboard/MyFavorites.jsx'
import Messages from './components/pages/dashboard/Messages.jsx'
import Settings from './components/pages/dashboard/Settings.jsx'




// components
import { ScrollHeightTracker } from './components/universalComponents/'

// react router
import { Routes, Route, useLocation } from 'react-router'
import Page404 from './components/pages/Page404.jsx'
import PrivateRoute from './components/pages/PrivateRoute.jsx'

export default function Layout() {

  const location = useLocation()

  useLayoutEffect(() => {
    const paths = location.pathname
    const isDashPath = paths.includes("/dashboard")

    if (!isDashPath) {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [location.pathname])


  return (
    <>

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* inventory */}
          <Route path='/inventory' element={<InventoryGrid />} />
          <Route path='/inventory/:listingId' element={<InventorySingle />} />

          {/* auth */}
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />

          {/* other pages */}
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />

          {/* dashboard */}
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='/dashboard/profile' element={<Profile />} />
              <Route path='/dashboard/my-listings' element={<MyListings />} />
              <Route path='/dashboard/add-listing' element={<AddListing />} />
              <Route path='/dashboard/favorites' element={<MyFavorites />} />
              <Route path='/dashboard/settings' element={<Settings />} />
              {/* <Route path='/dashboard/messages' element={<Messages />} /> */}
            </Route>
          </Route>
          <Route path='*' element={<Page404 />} />

        </Route>
      </Routes>


      <ScrollHeightTracker />

    </>
  )
}
