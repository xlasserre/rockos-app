import React from "react";
import Image from "next/image";
import rockoCover from '../../../public/images/rocko-cover.jpg'

const Hero = () => {
  return (
    <div className="flex flex-row h-screen w-full bg-orange-100 px-10 pt-20 pb-10">
      <div className="basis-2/4">
        <Image
          src={rockoCover}
          width={500}
          height={500}
          alt="Rocko being pretty"
        />
      </div>
      <div className="basis-2/4 px-10">
        <h1 className="text-4xl	p-10">Rocko's Handbook</h1>
        <section className="p-10">This is Rocko's handbook! If you got here you're probably sitting him and have questions about his care.  Please read on! </section>
      </div>
    </div>
  )
}

export default Hero;
