import React from "react"
import Wrapper from "./Wrapper"
import { Button } from "./ui/button"
import { FaRegCirclePlay } from "react-icons/fa6"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="md:mt-10">
      <Wrapper>
        <div className="flex flex-col items-center gap-6 md:flex-row min-h-[84vh]">
          <div className="py-10 basis-1/2">
            <h3 className="font-bold uppercase text-primary font-poppins text-xl">
              Best destinations around the world!
            </h3>
            <h1 className="font-bold font-volkhov text-3xl md:text-4xl lg:text-7xl text-navy leading-[1] mt-5">
              Travel, enjoy and live a new full life
            </h1>
            <p className="leading-[1.6] mt-8">
              Build wicked longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex items-center gap-4 mt-9">
              <Button className="cursor-pointer">Find out more</Button>
              <Button variant="outline" className="cursor-pointer">
                <FaRegCirclePlay />
                Play Demo
              </Button>
            </div>
          </div>
          <div className="basis-1/2 w-full h-full relative aspect-square">
            <Image fill src="/traveller-1.png" alt="" />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroSection
