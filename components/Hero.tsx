"use client"

import Image from "next/image";
import Button from "./Button";

interface HeroProps {
    children: React.ReactNode;
}

const Hero = () => {
  const handleScroll = () => {
    
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Rent the car you need quickly and easily!</h1>

        <p className="hero__subtitle">Booking your next car rental is a smooth process through our app.</p>

        <Button 
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />

        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
            <div className="hero__image-overlay"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;