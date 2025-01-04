"use client"

import { useEffect } from "react";
import gsap from "gsap"; 
import QuestionForm from "@/components/QuestionForm";
import Image from "next/image";

export default function Home() {
  function runner3() {
    gsap.timeline().fromTo(".Logo", {
        opacity: 0,
        y: -100,
    },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "bounce.out"
        })
        .to(".Loader", {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .to(".Loader",{
            y:"-100vh",
            duration:0
        })
}
  useEffect(() => {
    runner3();
  }, []);

  return (
    <>
    <div className='Loader z-[100000] absolute bg-[#0E100F] h-[100vh] mt-[-10vh] z-10 w-[98vw] flex justify-center items-center flex-col'>
                <Image src="/Logo1.png" alt="" className='mb-[5vh]' width={150} height={150}/>
                <h1 className='text-5xl transform-style-3d'>
                    <span class="Logo transform-style-3d inline-block">C</span>
                    <span class="Logo transform-style-3d inline-block">o</span>
                    <span class="Logo transform-style-3d inline-block">d</span>
                    <span class="Logo transform-style-3d inline-block">e</span>
                    <span class="Logo transform-style-3d inline-block">L</span>
                    <span class="Logo transform-style-3d inline-block">i</span>
                    <span class="Logo transform-style-3d inline-block">m</span>
                    <span class="Logo transform-style-3d inline-block">e</span>
                </h1>
            </div>
    <div className="pt-[5vh]">
        <QuestionForm />
    </div>
  </>
  );
}