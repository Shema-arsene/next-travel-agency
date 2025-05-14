import BookingSteps from "@/components/BookingSteps"
import HeroSection from "@/components/HeroSection"
import PartnersSection from "@/components/PartnersSection"
import ServicesSection from "@/components/ServicesSection"
import SubscribeSection from "@/components/SubscribeSection"
import Testimonials from "@/components/Testimonials"
import React from "react"

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <BookingSteps />
      <Testimonials />
      <PartnersSection />
      <SubscribeSection />
    </main>
  )
}

export default Home
