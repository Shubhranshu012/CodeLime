
"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
        .to(".Loader", {
            y: "-100vh",
            duration: 0
        })
}
function runner() {
    gsap.fromTo(
        ".Top1",
        { rotationX: 180, y: 100, opacity: 1 },
        {
            rotationX: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        }
    );
    gsap.fromTo(
        ".Top2",
        { x: -100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        }
    );
    gsap.fromTo(
        ".Top3",
        { y: -100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        }
    );

    gsap.timeline()
        .fromTo(".Top41",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            }
        )
        .to(".Top41", {
            y: -150,
            duration: 1,
            opacity: 0,
            ease: "power2.out",
        }, "+=1")
        .fromTo(".Top42",
            { y: 150, opacity: 1 },
            {
                y: 0,
                duration: 1,
                ease: "power2.in",
            }, "-=1.3");

    gsap.to(".Top6", {
        rotationX: 720,
        duration: 1,
        repeat: -1,
        repeatDelay: 5,
        ease: "none",
    });
    gsap.to(".Top7", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
    })
    gsap.timeline()
        .fromTo("#svg",
            { opacity: 0, x: -50, y: 50 },
            { opacity: 1, x: 0, duration: 1 }
        )
        .fromTo("#svg",
            { x: 0 },
            { x: 70, duration: 1 }
        )
        .fromTo("#letter-a",
            { x: -100 },
            { x: 0, duration: 1 }
        )
        .fromTo("#svg",
            { y: 50 },
            { y: 200, opacity: 0, duration: 1 }
        )
        .fromTo("#letter-n",
            { x: 0, y: 150 },
            { x: 0, y: 0, duration: 0.5 }
        );

    gsap.timeline()
        .to(".first-a", { y: 250, opacity: 1, duration: 0, ease: "none" })
        .to(".first-a", { y: -200, opacity: 1, duration: 1, ease: "linear" })
        .to(".second_a", { y: -290, opacity: 1, duration: .5, ease: "linear" })
        .to(".second_a", { y: -160, opacity: 1, duration: .5, ease: "linear" })
        .to(".first-a", { y: -75, opacity: 1, duration: 0.5, ease: "linear" });

    gsap.timeline()
        .to(".first-b", { y: 250, opacity: 1, duration: 0, ease: "none" })
        .to(".first-b", { y: -200, opacity: 1, duration: 1.3, ease: "linear" })
        .to(".second_b", { y: -260, opacity: 1, duration: .5, ease: "linear" })
        .to(".second_b", { y: -160, opacity: 1, duration: .5, ease: "linear" })
        .to(".first-b", { y: -75, opacity: 1, duration: 0.6, ease: "linear" });


    gsap.to("#my-svg", {
        y: -220,
        opacity: 1,
        duration: 0,
        ease: 'none',
    });
    gsap.to("#my-svg", {
        rotation: 360,
        opacity: 1,
        duration: 2,
        ease: 'linear',
        repeat: -1
    });

    gsap.fromTo(
        ".Top17",
        { x: -300, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "none",
        }
    );
    gsap.timeline()
        .to(".Top13", {
            opacity: 0,
            scale: 0,
            duration: 0,
        })
        .to(".Top13-svg", {
            opacity: 1,
        })
        .to("#bolt-outline", {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1,
            ease: "linear",
        })
        .fromTo("#fill-rect", {
            y: 227,

        }, {
            y: 0,
            duration: 1,
            ease: "linear"
        })
        .to(".Top13-svg", {
            scale: 0.5,
            duration: 1,
        })
        .to(".Top13-svg", {
            scale: 0,
            duration: 1,
        })
        .to(".Top13", {
            opacity: 0.5,
            scale: 0.5,
            duration: .5,
        })
        .to(".Top13", {
            opacity: 1,
            scale: 1,
            duration: .5,
        })
}
function runner2() {
    const sections = gsap.utils.toArray('.xtemp');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.fulld',
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => `+=${document.querySelector('.fulld').offsetWidth}`,
        },
    });


    gsap.fromTo(".scroll_letter",
        { y: -220, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".xtemp1",
                containerAnimation: scrollTween,
                start: "left 90%",
                end: "right 100%",
                scrub: true,
                id: "3"
            }
            , stagger: 0.05
        }
    );

    gsap.fromTo(".scroll_letter1",
        { y: 220, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".xtemp2",
                containerAnimation: scrollTween,
                start: "left 90%",
                end: "right 100%",
                scrub: true,
                id: "3"
            }
            , stagger: 0.05
        }
    );

    gsap.fromTo(".h_letter",
        { x: 100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".xtemp3",
                containerAnimation: scrollTween,
                start: "left 90%",
                end: "right 100%",
                scrub: true,
                id: "3"
            }
            , stagger: 0.05
        }
    );
}
  
const HorizontalScroll = () => {


    useEffect(() => {
        runner3();
        gsap.delayedCall(2.2, runner);
        runner2();
    }, []);

    return (
        <>
            <div className='Loader absolute bg-[#0E100F] h-[100vh] mt-[-10vh] z-10 w-[98.7vw] flex justify-center items-center flex-col'>
                <img src="Logo1.png" alt="" className='mb-[5vh]' />
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
            <div className="overflow-x-hidden bg-[#0E100F]">
                <div className="flex flex-col font-sans justify-center items-center h-screen font-semibold text-[25vh]">
                    <div className="transform-style-3d flex items-end">
                        <span className="Top1 inline-block transform-style-3d ">P</span>
                        <span className="Top2 inline-block transform-style-3d ">r</span>
                        <span className="Top3 inline-block transform-style-3d ">a</span>
                        <span className="Top4 flex flex-row relative transform-style-3d overflow-hidden">
                            <span className="Top41 block absolute opacity-0">1</span>
                            <span className="Top42 block 0">t</span>
                        </span>
                        <span className="Top6 inline-block transform-gpu origin-center transform-style-3d ">i</span>
                        <span className="Top7 ">c</span>
                        <span className="Top8 inline-block transform-gpu origin-center transform-style-3d ">e</span>
                        <span className="Top9 w-[4rem]"> </span>
                        <div className="Top4 flex flex-col h-[25vh] overflow-hidden">
                            <span className="first-a block opacity-0">a</span>
                            <span className="second_a">a</span>
                        </div>

                        <div className="Top5 flex flex-col h-[25vh] overflow-hidden">
                            <span className="first-b block opacity-0">n</span>
                            <span className="second_b ">n</span>
                        </div>
                        <div className="Top10 relative">
                            <span>
                                y
                            </span>
                            <svg id="my-svg" className="my-svg absolute will-change-transform opacity-0" viewBox="0 0 137 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z" fill="url(#paint0_linear_1655_45397)"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_1655_45397" x1="-76.6791" y1="-15.6157" x2="165.682" y2="81.0082" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.427083" stop-color="#FF8709"></stop>
                                        <stop offset="0.791667" stop-color="#F7BDF8"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>

                    </div>
                    <div className="flex flex-row">
                        <div className="relative mr-[10px]">
                            <span className="Top13">L</span>
                            <svg viewBox="0 0 134 229" className="Top13-svg top-10 left-[-10px] absolute opacity-0" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="90" height="160">
                                <path id="bolt-outline" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M101.08 11C102.439 11 103.402 12.3264 102.982 13.6187L78.6746 88.3335C78.2542 89.6259 79.2175 90.9522 80.5765 90.9522H108.983C110.634 90.9522 111.574 92.8401 110.579 94.1577L10.2304 227L39.4408 125.708C39.8095 124.429 38.8499 123.154 37.5191 123.154H7.82733C6.44727 123.154 5.48193 121.789 5.94147 120.488L44.1353 12.334C44.4176 11.5346 45.1733 11 46.0211 11H101.08Z"
                                    stroke="#0AE448" stroke-width="4" stroke-dasharray="1200" stroke-dashoffset="1200"></path>
                                <path id="bolt-fill" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M102.08 10C103.439 10 104.402 11.3264 103.982 12.6187L79.6746 87.3335C79.2542 88.6259 80.2175 89.9522 81.5765 89.9522H109.983C111.634 89.9522 112.574 91.8401 111.579 93.1577L11.2304 226L40.4408 124.708C40.8095 123.429 39.8499 122.154 38.5191 122.154H8.82733C7.44727 122.154 6.48193 120.789 6.94147 119.488L45.1353 11.334C45.4176 10.5346 46.1733 10 47.0211 10H102.08Z"
                                    fill="#0AE448" mask="url(#reveal-mask)">
                                </path>

                                <mask id="reveal-mask">
                                    <rect id="fill-rect" x="0" y="0" width="134" height="227" fill="white" />
                                </mask>
                            </svg>
                        </div>
                        <div className="flex flex-row realtive overflow-hidden">
                            <div className="letter" id="letter-a">a</div>
                            <svg id="svg" viewBox="0 0 157 156" width=".6em" height=".6em" className="mt-[37px] absolute opacity-0" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z" fill="url(#paint0_radial_1413_80169)">
                                    <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 78.5 78; 360 78.5 78" />
                                </path>

                                <radialGradient id="paint0_radial_1413_80169" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(124.192 87.08) rotate(149.757) scale(126.034)">
                                    <stop stop-color="#FFEBE7"></stop>
                                    <stop offset="0.6721" stop-color="#FF9C7C"></stop>
                                    <stop offset="0.8164" stop-color="#FF9983"></stop>
                                    <stop offset="0.9014" stop-color="#FF774B"></stop>
                                    <stop offset="1" stop-color="#E76F00"></stop>
                                </radialGradient>
                            </svg>

                            <div className="letter" id="letter-n">n</div>
                        </div>

                        <div className="relative overflow-hidden">
                            <span className="Top17 transform-style-3d inline-block">g</span>
                        </div>
                        <span className="Top15">u</span>
                        <span className="Top16">a</span>
                        <div className="relative overflow-hidden">
                            <span className="Top17 transform-style-3d inline-block">g</span>
                        </div>
                        <span className="Top18">e</span>
                    </div>
                </div>
                <div className="fulld xtempain flex flex-nowrap w-[500vw] h-screen bg-[#0E100F]">
                    <div className="bg-blue-500 w-screen xtemp xtemp0 flex flex-row h-[100vh]">
                        <div className="w-[50%] flex justify-center items-center flex-col relative">
                            <h2 className="text-black font-semibold shadow-[10px_10px_20px_rgba(0,0,0,0.3)] p-1 pr-5 pl-5 text-xl bg-[#FEC5FB] rounded-md mr-[10vw]">Compile any Code</h2>
                            <h2 className="text-black font-semibold p-1 pr-5 pl-5 text-xl bg-[#FF8709] rounded-md">Pratice Any Language</h2>
                            <p className="p-[50px] text-2xl">From code practice to instant compilation, your journey to mastery starts here—any language, anytime, anywhere.</p>
                        </div>
                        <div className="relative flex items-center w-[50%] justify-center">
                            <img className="Ring absolute top-20 left-20" src="circle-448f73d1.png" alt="" />
                            <svg width="42" height="52" className="Timmer absolute left-20 top-[45%]" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2532 28.1943C27.7212 29.751 27.7212 32.249 29.2532 33.8057L50.3023 55.1943C52.7911 57.7232 50.9996 62 47.4513 62H26H4.54865C1.00044 62 -0.79113 57.7232 1.69768 55.1943L22.7468 33.8057C24.2788 32.249 24.2788 29.7511 22.7468 28.1943L1.69769 6.80572C-0.791119 4.27676 1.00044 5.24575e-07 4.54865 8.34769e-07L26 2.71011e-06L47.4514 4.58544e-06C50.9996 4.89564e-06 52.7911 4.27676 50.3023 6.80572L29.2532 28.1943Z" fill="url(#paint0_linear_2080_57096)"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2532 28.1943C27.7212 29.751 27.7212 32.249 29.2532 33.8057L50.3023 55.1943C52.7911 57.7232 50.9996 62 47.4513 62H26H4.54865C1.00044 62 -0.79113 57.7232 1.69768 55.1943L22.7468 33.8057C24.2788 32.249 24.2788 29.7511 22.7468 28.1943L1.69769 6.80572C-0.791119 4.27676 1.00044 5.24575e-07 4.54865 8.34769e-07L26 2.71011e-06L47.4514 4.58544e-06C50.9996 4.89564e-06 52.7911 4.27676 50.3023 6.80572L29.2532 28.1943Z" fill="url(#pattern-home-animate-timer-0)"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_2080_57096" x1="-7.77612" y1="17.8134" x2="63.2463" y2="31" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0242443" stop-color="#EDBEFF"></stop>
                                        <stop offset="0.84375" stop-color="#8E78DA"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg width="200" height="200" className="Flower absolute z-10 top-[25%] right-[15%]" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M62 124C27.7583 124 0 151.758 0 186C0 220.242 27.7583 248 62 248C96.2417 248 124 220.242 124 186C124 220.242 151.758 248 186 248C220.242 248 248 220.242 248 186C248 151.758 220.242 124 186 124C220.242 124 248 96.2417 248 62C248 27.7583 220.242 0 186 0C151.758 0 124 27.7583 124 62C124 27.7583 96.2417 0 62 0C27.7583 0 0 27.7583 0 62C0 96.2417 27.7583 124 62 124Z" fill="url(#paint0_radial_2080_56318)"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M62 124C27.7583 124 0 151.758 0 186C0 220.242 27.7583 248 62 248C96.2417 248 124 220.242 124 186C124 220.242 151.758 248 186 248C220.242 248 248 220.242 248 186C248 151.758 220.242 124 186 124C220.242 124 248 96.2417 248 62C248 27.7583 220.242 0 186 0C151.758 0 124 27.7583 124 62C124 27.7583 96.2417 0 62 0C27.7583 0 0 27.7583 0 62C0 96.2417 27.7583 124 62 124Z" fill="url(#paint1_radial_2080_56318)"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M62 124C27.7583 124 0 151.758 0 186C0 220.242 27.7583 248 62 248C96.2417 248 124 220.242 124 186C124 220.242 151.758 248 186 248C220.242 248 248 220.242 248 186C248 151.758 220.242 124 186 124C220.242 124 248 96.2417 248 62C248 27.7583 220.242 0 186 0C151.758 0 124 27.7583 124 62C124 27.7583 96.2417 0 62 0C27.7583 0 0 27.7583 0 62C0 96.2417 27.7583 124 62 124Z" fill="url(#pattern-home-animate-flower-0)" fill-opacity="0.6"></path>
                                <defs>
                                    <radialGradient id="paint0_radial_2080_56318" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.3114 176.859) rotate(-90) scale(194.26 195.353)">
                                        <stop stop-color="#E193FF"></stop>
                                        <stop offset="0.6721" stop-color="#8E78DA"></stop>
                                        <stop offset="0.7378" stop-color="#937DDB"></stop>
                                        <stop offset="0.8164" stop-color="#A28BDD"></stop>
                                        <stop offset="0.9014" stop-color="#BAA3E2"></stop>
                                        <stop offset="0.9905" stop-color="#DBC3E7"></stop>
                                        <stop offset="1" stop-color="#DFC7E8"></stop>
                                    </radialGradient>
                                    <radialGradient id="paint1_radial_2080_56318" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-27 234) rotate(-68.2758) scale(275.572 434.122)">
                                        <stop stop-color="#FFE2F2"></stop>
                                        <stop offset="0.609375" stop-color="#FFADDA"></stop>
                                        <stop offset="0.776042" stop-color="#FF7CC5"></stop>
                                        <stop offset="0.911458" stop-color="#FF71BF"></stop>
                                        <stop offset="1" stop-color="#F84FAC"></stop>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <svg width="430" height="230" className="SemiCircle absolute bottom-[10vh]" viewBox="0 0 496 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M496 248C496 111.033 384.967 5.987e-06 248 0C111.033 -5.987e-06 5.987e-06 111.033 0 248L496 248Z" fill="url(#paint0_radial_2080_56314)"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M496 248C496 111.033 384.967 5.987e-06 248 0C111.033 -5.987e-06 5.987e-06 111.033 0 248L496 248Z" fill="url(#pattern-home-animate-half-circle-0)" fill-opacity="0.6"></path>
                                <defs>
                                    <radialGradient id="paint0_radial_2080_56314" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(137.354 461.661) rotate(-54.9042) scale(517.614 425.925)">
                                        <stop offset="0.380208" stop-color="#D1FFBC"></stop>
                                        <stop offset="0.734375" stop-color="#0AE448"></stop>
                                        <stop offset="1" stop-color="#0AA3E4"></stop>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <svg width="40" height="40" className="Diamond absolute bottom-40 right-10" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z" fill="url(#paint0_linear_2080_57095)"></path>
                                <path d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z" fill="url(#pattern-home-animate-diamond-0)" fill-opacity="0.6"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_2080_57095" x1="-35.7015" y1="-8.17164" x2="74.4179" y2="35.0896" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.427083" stop-color="#FF8709"></stop>
                                        <stop offset="0.791667" stop-color="#F7BDF8"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-[#0E100F] w-screen xtemp xtemp1 flex justify-center items-center font-semibold text-[12vh]">
                        <div className="tagline-part-1  transform-style-3d flex flex-row overflow-hidden">
                            <p className='scroll_letter'>Quick </p>
                            <span >&nbsp;</span>
                            <p className='scroll_letter'>coding </p>
                            <span >&nbsp;</span>
                            <p className='scroll_letter'>challenges</p>
                        </div>
                    </div>
                    <div className="bg-[#0E100F] w-screen xtemp xtemp2 flex justify-center items-center font-semibold text-[12vh] box-3">
                        <div className="transform-style-3d flex flex-row overflow-hidden">
                            <p className='scroll_letter1'>sharpen </p>
                            <span >&nbsp;</span>
                            <p className='scroll_letter1'>Your </p>
                            <span >&nbsp;</span>
                            <p className='scroll_letter1'>skills </p>
                            <span >&nbsp;</span>
                            <p className='scroll_letter1'>in </p>
                            <span >&nbsp;</span>
                            <p className='scroll_letter1'>any </p>
                            <span >&nbsp;</span>
                            <p className='scroll_letter1'>language </p>
                        </div>
                    </div>
                    <div className="bg-[#0E100F] w-screen xtemp xtemp3 flex justify-center items-center font-semibold text-[12vh] box-3">
                        <div className="transform-style-3d flex flex-row overflow-hidden">
                            <p className='h_letter'>s</p>
                            <p className='h_letter'>h</p>
                            <p className='h_letter'>a</p>
                            <p className='h_letter'>r</p>
                            <p className='h_letter'>p</p>
                            <p className='h_letter'>e</p>
                            <p className='h_letter'>n</p>
                            <span>&nbsp;</span>
                            <p className='h_letter'>Y</p>
                            <p className='h_letter'>o</p>
                            <p className='h_letter'>u</p>
                            <p className='h_letter'>r</p>
                            <span>&nbsp;</span>
                            <p className='h_letter'>s</p>
                            <p className='h_letter'>k</p>
                            <p className='h_letter'>i</p>
                            <p className='h_letter'>l</p>
                            <p className='h_letter'>l</p>
                            <p className='h_letter'>s</p>
                            <span>&nbsp;</span>
                            <p className='h_letter'>i</p>
                            <p className='h_letter'>n</p>
                            <span>&nbsp;</span>
                            <p className='h_letter'>a</p>
                            <p className='h_letter'>n</p>
                            <p className='h_letter'>y</p>
                            <span>&nbsp;</span>
                            <p className='h_letter'>l</p>
                            <p className='h_letter'>a</p>
                            <p className='h_letter'>n</p>
                            <p className='h_letter'>g</p>
                            <p className='h_letter'>u</p>
                            <p className='h_letter'>a</p>
                            <p className='h_letter'>g</p>
                            <p className='h_letter'>e</p>
                        </div>
                    </div>
                    <div className="bg-[#0E100F] w-screen xtemp flex justify-center items-center font-semibold text-[12vh]">
                        <div className="tagline-part-10 flex flex-row">
                            <p>compile, test and</p>
                            <span>&nbsp;</span>
                            <svg className='mt-[2%]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 99 99" aria-hidden="true" width="80" height="80">
                                <path fill="url(#paint0_linear_2163_48870)" d="M98.59 49.09 49.91.41a.579.579 0 0 0-.82 0L.41 49.09a.579.579 0 0 0 0 .82l48.68 48.68a.579.579 0 0 0 .82 0l48.68-48.68a.579.579 0 0 0 0-.82Z"></path>
                                <path fill="url(#pattern0)" fill-opacity=".6" d="M98.59 49.09 49.91.41a.579.579 0 0 0-.82 0L.41 49.09a.579.579 0 0 0 0 .82l48.68 48.68a.579.579 0 0 0 .82 0l48.68-48.68a.579.579 0 0 0 0-.82Z"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_2163_48870" x1="60.816" x2="38.263" y1="20.902" y2="87.976" gradientUnits="userSpaceOnUse">
                                        <stop offset=".199" stop-color="#F7BDF8"></stop>
                                        <stop offset="1" stop-color="#2F3CC0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className='pl-2'>Debug</p>

                        </div>
                    </div>
                </div>
                <div className="flex h-screen ">
                    <div className=" w-[100%]">
                        <p className='text-4xl pl-10 pt-10 mb-8'>Platform Features</p>
                        <div className='pl-10 pt-5 flex flex-row justify-evenly content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className='w-[75px] h-[75px]' viewBox="0 0 24 25" >
                                <path fill-opacity=".4" d="M9.091 11.663h5.782c1.61 0 2.877-1.353 2.877-2.96V3.225c0-1.559-1.315-2.73-2.886-2.99A18.088 18.088 0 0011.853 0a16.25 16.25 0 00-2.738.235c-2.45.43-2.866 1.33-2.866 2.99v2.132H12v.788H4.025C2.342 6.145.868 7.152.408 9.064c-.532 2.191-.556 3.531 0 5.82.411 1.702 1.394 2.888 3.076 2.888h1.972V15.2c0-1.9 1.672-3.538 3.635-3.538zm-.364-7.707c-.6 0-1.087-.489-1.087-1.093 0-.606.486-1.1 1.087-1.1.597 0 1.086.494 1.086 1.1a1.09 1.09 0 01-1.086 1.093zm14.83 5.108c-.416-1.665-1.21-2.919-2.895-2.919h-2.118v2.558c0 1.98-1.744 3.551-3.671 3.551H9.091c-1.584 0-2.842 1.444-2.842 3.02v5.479c0 1.558 1.338 2.475 2.868 2.923 1.833.535 3.568.632 5.76 0 1.458-.42 2.873-1.264 2.873-2.923V18.56H12v-.788h8.662c1.682 0 2.31-1.138 2.895-2.89.604-1.801.578-3.506 0-5.818zm-8.32 10.958c.6 0 1.087.488 1.087 1.093 0 .606-.486 1.1-1.087 1.1a1.095 1.095 0 01-1.086-1.1 1.09 1.09 0 011.086-1.093z"></path>
                            </svg>
                            <p className='w-[70vw] flex flex-col justify-center text-xl'><span className='text-2xl  text-[#FEC5FB]'>Generate Questions</span>Choose from beginner to advanced levels and create coding challenges in a variety of programming</p>
                        </div>
                        <hr class="w-[90vw] mx-auto border-t-[0.5px] border-gray-500 mt-[20px] pt-[10px] pb-[10px]"></hr>
                        <div className='pl-10 pt-5 flex flex-row justify-evenly content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[75px] h-[75px]' fill="#ffffff" width="86" height="98" viewBox="0 0 86 98" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L7.81641 87.668L42.8914 97.4047L78.0625 87.6547L85.8875 0H0ZM42.9624 39.9803H28.7717L27.7889 28.9693H42.9624H42.9998H68.9343L69.1499 26.5537L69.6405 21.1021L69.8976 18.2178H42.9998H42.9624H16.0381L16.2959 21.1021L18.9381 50.7326H42.9624H42.9998H56.2022L54.9546 64.6772L42.9624 67.9139V67.9149L42.9521 67.9178L30.9779 64.6834L30.2131 56.1092H19.4186L20.9248 72.9912L42.9506 79.1053L42.9998 79.092V79.0902L65.0054 72.9912L65.1671 71.1748L67.6936 42.8678L67.9554 39.9803H65.0585H42.9998H42.9624Z" fill="#F9F7F7"></path>
                            </svg>
                            <p className='w-[70vw] flex flex-col justify-center text-xl'><span className='text-2xl  text-[#FF8709]'>Live Code Execution</span>Write, test, and run your code in real-time with support for multiple programming languages.</p>
                        </div>
                        <hr class="w-[90vw] mx-auto border-t-[0.5px] border-gray-500 mt-[20px]"></hr>
                        <div className='pl-10 pt-5 flex flex-row justify-evenly content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[75px] h-[75px]' fill="#ffffff" viewBox="0 0 21 28" >
                                <path fill-rule="evenodd" d="M13.266 1s2.718 2.703-2.578 6.857c-3.285 2.578-2.069 4.3-.902 5.951.343.485.68.963.9 1.456-2.48-2.223-4.298-4.18-3.078-6.002.596-.89 1.543-1.626 2.501-2.372 1.922-1.495 3.889-3.026 3.157-5.89zm-1.403 12.431c1.263 1.445-.331 2.744-.331 2.744s3.204-1.644 1.733-3.703a46.915 46.915 0 00-.175-.242c-1.278-1.764-2.008-2.772 3.452-5.92 0 0-8.956 2.223-4.679 7.122zm-4.65 7.678s-.998.577.713.772c2.073.236 3.133.202 5.417-.227 0 0 .601.374 1.44.698-5.122 2.18-11.592-.127-7.57-1.244zm-.625-2.847s-1.121.825.591 1.001c2.215.227 3.964.246 6.99-.333 0 0 .419.422 1.076.652-6.191 1.8-13.088.142-8.657-1.32zm11.235 6.028c1.554-.468.815-1.075.815-1.075 2.708 1.215-5.885 3.655-16.326 1.972-3.83-.617 1.842-2.77 2.88-2.044 0 0-.328-.022-.902.101-.55.118-2.3.678-1.368 1.082 2.597 1.122 11.945.854 14.9-.036zM6.01 16.845c-3.07-.409 1.684-1.531 1.684-1.531s-1.847-.124-4.117.967c-2.686 1.29 6.641 1.879 11.47.616.503-.34 1.196-.636 1.196-.636s-1.975.351-3.943.516c-2.409.2-4.993.24-6.29.067zM17.28 15.41c1.584-.328 3.854 2.108-1.055 4.642-.02.055-.084.115-.096.127l-.002.001c6.555-1.712 4.145-6.036 1.011-4.941a.89.89 0 00-.419.321s.174-.07.561-.15zm3.017 9.127c-.172 2.216-7.408 2.681-12.118 2.382-3.096-.198-3.699-.694-3.699-.694 2.941.483 7.902.57 11.923-.182 3.564-.666 3.893-1.506 3.893-1.506z" clip-rule="evenodd"></path>
                                <path d="M10.688 7.857l-.186-.236.186.236zM13.266 1l.212-.213a.3.3 0 00-.502.287l.29-.074zm-3.48 12.808l-.245.174.245-.174zm.9 1.456l-.2.223a.3.3 0 00.474-.345l-.274.122zM7.608 9.262l-.25-.167.25.167zm2.501-2.372l.184.237-.184-.237zm1.423 9.285l-.19-.233a.3.3 0 00.327.5l-.137-.267zm.331-2.744l-.226.198.226-.197zm1.402-.96l.244-.174-.244.175zm-.175-.241l-.243.176.243-.176zm3.452-5.92l.15.26a.3.3 0 00-.222-.55l.072.29zM7.926 21.882l-.034.298.034-.298zm-.712-.773l.15.26a.3.3 0 00-.23-.549l.08.29zm6.129.546l.158-.255a.3.3 0 00-.214-.04l.056.295zm1.44.698l.118.276a.3.3 0 00-.01-.556l-.108.28zM7.18 19.263l-.03.298.03-.298zm-.591-1l.177.24a.3.3 0 00-.271-.526l.094.285zm7.582.667l.213-.211a.3.3 0 00-.27-.084l.057.295zm1.075.652l.084.288a.3.3 0 00.016-.571l-.1.283zm3.393 3.633l.122-.273a.3.3 0 00-.312.505l.19-.232zm-.815 1.075l.086.287-.086-.287zm-15.511.897l-.048.297.048-.297zm2.88-2.044l-.02.3a.3.3 0 00.192-.546l-.172.246zm-.902.101l.063.293-.063-.293zm-1.368 1.082l-.119.275.12-.275zm4.773-9.012l.069.292a.3.3 0 00-.049-.591l-.02.299zm-1.684 1.53l.04-.297-.04.297zm-2.433-.563l.13.27-.13-.27zm11.47.616l.077.29a.301.301 0 00.092-.042l-.168-.248zm1.196-.636l.118.276a.3.3 0 00-.17-.571l.052.295zm-3.943.516l.025.299-.025-.3zm3.923 3.275l-.137-.267a.3.3 0 00-.143.16l.28.107zm1.055-4.642l.061.294-.06-.294zm-1.15 4.769l-.208-.218-.005.005.212.213zm0 0l.208.215.003-.003-.212-.212zm-.003.001l-.209-.215a.3.3 0 00.285.506l-.076-.29zm1.011-4.941l-.099-.284.1.284zm-.419.321l-.252-.162a.3.3 0 00.364.44l-.112-.278zm-8.54 11.36l-.02.298.02-.299zm12.117-2.383l.3.023a.3.3 0 00-.579-.132l.28.11zM4.48 26.225l.049-.296a.3.3 0 00-.349.296h.3zm11.923-.182l-.055-.295.055.295zm-5.53-17.95c2.69-2.11 3.41-3.904 3.391-5.227-.01-.655-.2-1.17-.391-1.521a2.916 2.916 0 00-.353-.514 1.677 1.677 0 00-.036-.039L13.48.79h-.001V.787L13.265 1c-.211.213-.211.213-.212.212l.002.003.016.016c.014.017.037.042.064.078.055.07.131.178.208.32.154.286.311.706.32 1.246.015 1.067-.555 2.702-3.162 4.746l.37.473zm-.84 5.542c-.597-.844-1.13-1.613-1.165-2.467-.033-.82.397-1.812 2.006-3.075l-.37-.472c-1.677 1.316-2.28 2.473-2.235 3.571.043 1.064.703 1.982 1.273 2.79l.49-.347zm.928 1.507c-.233-.525-.59-1.028-.929-1.507l-.49.347c.347.49.666.944.871 1.404l.548-.244zM7.358 9.095c-.34.51-.475 1.04-.432 1.585.043.537.257 1.068.578 1.59.638 1.037 1.745 2.108 2.982 3.217l.4-.446c-1.242-1.114-2.285-2.133-2.871-3.086-.291-.473-.458-.912-.49-1.323-.033-.404.063-.801.332-1.203l-.499-.334zm2.567-2.442c-.948.738-1.938 1.505-2.567 2.442l.499.334c.564-.841 1.468-1.549 2.436-2.302l-.368-.474zm3.05-5.579c.343 1.342.056 2.352-.54 3.214-.609.882-1.54 1.61-2.51 2.365l.368.474c.953-.741 1.965-1.526 2.637-2.498.685-.993 1.016-2.18.627-3.703l-.582.148zm-1.443 15.1l.19.233.002-.002.006-.004a12.436 12.436 0 00.073-.066 2.969 2.969 0 00.639-.861c.137-.287.235-.64.201-1.03-.034-.395-.2-.806-.554-1.21l-.452.395c.279.318.386.612.408.866a1.39 1.39 0 01-.145.72 2.287 2.287 0 01-.556.726l-.002.002.19.232zm1.49-3.528c.32.45.375.854.3 1.211-.079.37-.303.722-.592 1.035a5.084 5.084 0 01-.888.745 5.698 5.698 0 01-.417.255l-.024.013-.005.002h-.001l.137.268.137.267.001-.001.003-.001a5.685 5.685 0 001.498-1.14c.328-.356.629-.802.738-1.319.111-.53.014-1.104-.4-1.684l-.488.35zm-.175-.24l.174.24.488-.349-.176-.243-.486.352zm3.545-6.355c-1.371.79-2.366 1.453-3.064 2.034-.696.577-1.12 1.093-1.318 1.595-.204.519-.15.99.036 1.439.179.43.488.854.801 1.287l.486-.352c-.325-.45-.587-.813-.733-1.166-.14-.335-.168-.642-.031-.99.143-.363.479-.8 1.142-1.352.66-.549 1.622-1.192 2.98-1.975l-.299-.52zm-4.303 7.183c-1.026-1.175-1.214-2.133-1.01-2.905.212-.794.86-1.479 1.69-2.047.823-.564 1.783-.985 2.544-1.266a15.575 15.575 0 011.296-.413h.004l.001-.001-.072-.291-.073-.291h-.002l-.005.002a3.097 3.097 0 00-.098.025 16.165 16.165 0 00-1.258.406c-.784.29-1.796.73-2.677 1.334-.875.6-1.664 1.388-1.93 2.388-.27 1.023.026 2.18 1.138 3.454l.452-.395zm-4.13 8.35c-.417-.048-.627-.116-.72-.168-.045-.024-.041-.034-.03-.015a.124.124 0 01.013.083c-.005.02-.003-.003.057-.054a.704.704 0 01.082-.06l.004-.002-.151-.26-.15-.26v.001h-.001l-.002.001-.004.003a1.94 1.94 0 00-.05.032c-.031.02-.073.05-.117.089-.074.063-.215.197-.255.385a.477.477 0 00.054.342.658.658 0 00.258.24c.2.11.507.189.945.238l.068-.596zm5.328-.225c-2.256.424-3.285.456-5.327.224l-.068.596c2.105.24 3.194.204 5.506-.23l-.11-.59zm1.604.713a9.737 9.737 0 01-1.367-.659c-.008-.005-.014-.009-.018-.01l-.004-.003-.001-.001-.158.255-.159.255h.001l.002.001.006.004.023.014.084.05a10.362 10.362 0 001.375.654l.216-.56zm-7.757-1.253c-.517.144-.905.316-1.152.523a.919.919 0 00-.284.379.665.665 0 00-.001.46c.098.276.358.488.648.649.302.168.696.313 1.15.428 1.81.457 4.777.49 7.406-.63l-.235-.552c-2.494 1.061-5.324 1.03-7.023.6a4.304 4.304 0 01-1.007-.37c-.256-.143-.352-.263-.374-.326a.066.066 0 01-.001-.051.335.335 0 01.106-.127c.149-.125.438-.269.927-.404l-.16-.579zm.076-1.854c-.415-.043-.597-.121-.665-.172-.028-.021-.024-.027-.02-.014.004.012 0 .015.004.001a.509.509 0 01.125-.176 1.176 1.176 0 01.106-.096l.005-.004h.001l-.178-.242-.178-.241h-.001l-.002.001-.004.003-.012.01a1.51 1.51 0 00-.166.15c-.088.088-.218.24-.272.428-.029.1-.04.22 0 .346a.63.63 0 00.231.313c.203.153.523.244.965.29l.061-.597zm6.904-.33c-2.996.573-4.715.554-6.904.33l-.061.596c2.24.23 4.018.248 7.077-.337l-.113-.589zm1.23.664a2.835 2.835 0 01-.96-.579l-.002-.002h.001l-.213.212a46.433 46.433 0 00-.213.211v.001l.003.002.005.005.018.018.065.058a3.438 3.438 0 001.098.64l.199-.566zm-8.85-1.322c-.566.187-.984.386-1.25.603-.265.216-.45.517-.325.86.104.287.394.487.703.629.327.15.756.275 1.255.37 1.993.382 5.313.343 8.452-.569l-.167-.576c-3.052.887-6.276.92-8.172.556-.473-.09-.85-.203-1.117-.326-.284-.131-.374-.243-.39-.288-.003-.009-.005-.016.003-.036a.457.457 0 01.137-.155c.18-.147.516-.319 1.059-.498l-.188-.57zm12.144 5.238l-.19.232h-.001l-.002-.001v-.001c-.001 0-.001 0 0 0l.008.008c.008.008.02.021.03.037.025.035.031.06.03.074 0 .001.002.047-.098.129-.106.087-.309.198-.679.31l.173.574c.408-.123.695-.263.888-.42.198-.164.307-.358.316-.567a.722.722 0 00-.139-.445.907.907 0 00-.127-.145l-.012-.01-.004-.004-.002-.002-.191.231zM2.264 25.484c5.253.846 10.045.657 13.194.1 1.564-.278 2.76-.652 3.4-1.058.163-.104.305-.218.407-.345a.724.724 0 00.177-.47c-.008-.372-.334-.613-.681-.77l-.246.548c.15.068.24.13.287.178.023.023.033.04.037.048l.003.008v.005a.26.26 0 01-.044.076c-.047.059-.13.132-.261.215-.535.34-1.632.699-3.183.973-3.081.546-7.806.735-12.995-.1l-.095.592zm3.1-2.587c-.202-.14-.475-.19-.74-.2a4.4 4.4 0 00-.91.077 7.598 7.598 0 00-1.92.618c-.28.137-.534.293-.725.46-.18.158-.36.376-.369.643-.01.302.193.518.447.66.255.141.626.25 1.117.329l.095-.593c-.466-.075-.756-.17-.92-.26a.411.411 0 01-.13-.102l-.009-.013c0-.01.017-.083.164-.213.136-.12.34-.247.595-.372a7.003 7.003 0 011.759-.566c.295-.053.565-.076.784-.068.229.009.36.051.418.092l.344-.492zm-1.01.64c.271-.058.482-.081.621-.09a2.307 2.307 0 01.197-.005l.02-.299.02-.3h-.024a2.871 2.871 0 00-.25.005 4.88 4.88 0 00-.711.103l.126.586zm-1.313.513c-.097-.042-.115-.069-.11-.061.02.027.03.078.015.119-.006.017-.006.002.044-.039.045-.037.112-.08.2-.126.356-.188.903-.35 1.163-.406l-.126-.586c-.29.062-.894.239-1.317.461-.107.057-.212.121-.3.193a.715.715 0 00-.226.293.464.464 0 00.066.45.85.85 0 00.353.253l.238-.55zm14.695-.047c-1.434.431-4.473.721-7.502.76-1.508.018-3.002-.026-4.276-.143-1.285-.119-2.315-.31-2.917-.57l-.238.55c.696.302 1.809.498 3.1.617 1.3.12 2.816.164 4.339.145 3.033-.038 6.146-.327 7.667-.785l-.173-.574zM7.695 15.314l-.07-.292h-.003c-.002.002-.006.002-.01.003l-.041.01a16.032 16.032 0 00-.652.172c-.401.112-.913.27-1.332.442-.208.086-.406.18-.559.282-.076.051-.152.11-.213.18a.521.521 0 00-.135.297.45.45 0 00.128.35c.076.08.176.137.276.18.202.086.497.152.888.204l.079-.595c-.377-.05-.606-.108-.732-.162-.063-.027-.079-.043-.075-.04.01.012.039.053.034.114-.004.047-.026.064-.011.047a.495.495 0 01.094-.075c.104-.07.26-.147.455-.227.386-.16.87-.309 1.265-.42a20.51 20.51 0 01.632-.166l.038-.01.01-.001h.002v-.001l-.068-.292zm-3.987 1.237a9.68 9.68 0 012.822-.866c.36-.05.65-.068.849-.074a4.554 4.554 0 01.28.002h.016l.02-.299.02-.3h-.001-.027a3.501 3.501 0 00-.324-.002 8.124 8.124 0 00-.917.08c-.77.108-1.83.357-2.998.919l.26.54zm11.265.056c-2.373.62-5.878.79-8.46.64-1.3-.075-2.323-.23-2.849-.428a.984.984 0 01-.252-.128c-.045-.036-.014-.03-.011.023.003.054-.029.062.018.017.045-.044.134-.105.289-.18l-.26-.54c-.181.087-.334.18-.445.287a.581.581 0 00-.201.448c.01.19.126.327.236.414.112.09.257.16.414.22.619.235 1.725.39 3.026.466 2.617.151 6.19-.017 8.647-.659l-.152-.58zm1.271-.346l-.117-.276h-.001l-.002.001a7.207 7.207 0 00-1.243.662l.336.497c.234-.158.52-.31.75-.424a9.775 9.775 0 01.367-.172l.021-.009.006-.002-.117-.277zm-3.918.815a45.615 45.615 0 002.728-.322 52.192 52.192 0 001.152-.182l.067-.011.018-.003.004-.001h.001l-.052-.296-.052-.295h-.002-.004c-.003.002-.009.002-.016.004a13.238 13.238 0 01-.314.053c-.214.035-.52.084-.889.137a45.05 45.05 0 01-2.69.318l.05.598zm-6.354.066c1.33.177 3.941.135 6.354-.066l-.05-.598c-2.404.2-4.962.237-6.225.07l-.08.594zm10.39 3.177c2.47-1.276 3.309-2.614 3.12-3.712-.184-1.077-1.331-1.684-2.264-1.49l.122.587c.652-.135 1.432.312 1.551 1.005.115.671-.366 1.817-2.804 3.076l.275.534zm-.027.077a.91.91 0 00.066-.07.584.584 0 00.104-.168l-.561-.212a.147.147 0 01.007-.016l.002-.003-.008.01a.326.326 0 01-.024.024l.414.435zm.005-.005l-.424-.425.424.425zm-.004.004l.002-.001-.419-.43-.002.001.419.43zm.9-4.873c1.441-.503 2.593.258 2.732 1.18.07.463-.093 1.038-.687 1.615-.597.58-1.622 1.153-3.23 1.573l.151.58c1.669-.435 2.8-1.046 3.497-1.723.701-.681.968-1.44.863-2.135-.21-1.394-1.83-2.248-3.524-1.656l.198.566zm-.518.038l.253.162-.001.001v.001l-.001.001v-.002l.011-.014a.594.594 0 01.257-.187l-.2-.566a1.169 1.169 0 00-.566.434l-.003.005-.001.002h-.001v.001l.252.162zm.5-.444a5.432 5.432 0 00-.566.149 1.725 1.725 0 00-.04.015h-.003l-.002.001.111.28.112.278h-.001l.003-.001.018-.007a4.842 4.842 0 01.49-.127l-.122-.588zm-9.06 12.102c2.37.151 5.38.11 7.825-.25 1.22-.18 2.32-.441 3.133-.809.793-.358 1.422-.868 1.479-1.599l-.599-.046c-.029.377-.368.756-1.127 1.099-.739.333-1.775.585-2.974.761-2.393.353-5.358.395-7.698.246l-.038.598zm-3.979-.993a.622.622 0 00.105.228l.004.003a.41.41 0 00.004.004l.006.005a.385.385 0 00.055.037c.033.02.079.046.14.075.123.058.312.132.594.21.564.156 1.51.332 3.071.431l.039-.598c-1.535-.098-2.438-.27-2.95-.411a3.156 3.156 0 01-.497-.174.819.819 0 01-.081-.043l-.008-.005.003.002.003.003.004.002.003.004a.622.622 0 01.105.228h-.6zm12.168-.477c-3.985.746-8.91.659-11.82.181l-.097.592c2.974.488 7.97.576 12.027-.183l-.11-.59zm3.948-1.21l-.279-.111v-.001l.002-.002v-.003l.003-.006a.173.173 0 01.004-.007l-.001.002a.426.426 0 01-.05.06c-.063.064-.19.173-.434.308-.49.272-1.428.64-3.193.97l.11.59c1.8-.336 2.808-.72 3.374-1.035.284-.158.462-.301.573-.415a1.027 1.027 0 00.153-.203.499.499 0 00.015-.03l.001-.005.001-.001v-.001l-.279-.11z"></path>
                            </svg>
                            <p className='w-[70vw] flex flex-col justify-center text-xl'><span className='text-2xl  text-[#9D95FF]'>Submit & Get Feedback</span>Submit your code and get instant feedback. Review and improve your solutions as you go.</p>
                        </div>
                        <hr class="w-[90vw] mx-auto border-t-[0.5px] border-gray-500 mt-[20px]"></hr>
                        <div className='pl-10 pt-5 flex flex-row justify-evenly content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[75px] h-[75px]' fill="#ffffff" viewBox="0 0 24 28" >
                                <path fill-opacity=".4" d="M23.903 6.916l.067-.044c-.134-.243-.334-.464-.534-.574L12.696.155C12.518.045 12.274 0 12.007 0c-.267 0-.511.066-.69.155L.646 6.32C.267 6.54 0 7.093 0 7.513v12.308c0 .243.044.508.2.752l-.044.022c.11.176.266.331.422.42l10.718 6.165c.178.11.422.154.689.154.267 0 .511-.066.69-.154l10.672-6.165c.378-.221.645-.774.645-1.194V7.491c.022-.177 0-.376-.089-.575zM12.007 19.07a5.455 5.455 0 004.736-2.74l2.869 1.68a8.794 8.794 0 01-7.605 4.374c-4.847 0-8.783-3.91-8.783-8.728 0-4.817 3.936-8.728 8.783-8.728a8.796 8.796 0 017.627 4.42l-2.89 1.656a5.43 5.43 0 00-4.737-2.762c-3.002 0-5.448 2.431-5.448 5.414 0 2.983 2.446 5.414 5.448 5.414z"></path>
                            </svg>
                            <p className='w-[70vw] flex flex-col justify-center text-xl'><span className='text-2xl  text-[#9D95FF]'>Multi-Language Compiler</span>Write and execute code in multiple programming languages instantly. Get real-time feedback on your solutions and refine your code with ease.</p>
                        </div>
                    </div>
                </div>
                <div className='h-screen flex flex-row justify-center items-center overflow-hidden mt-[10vh]'>
                    <div className='w-[50%]'>
                        <img src="compiler.png" alt="" />
                    </div>
                    <div className='w-[50%] pl-[5vw]'>
                        <p className='text-3xl pt-10 mb-4 text-[#9D95FF]'>Practice with our Online Compilers</p>
                        <p className='mb-8'>We believe coding should be accessible to all. So we made our own compilers for web and mobile. And it's free!</p>
                        <div className='flex flex-row'>
                            <div className='flex flex-col w-[50%]'>
                                <a href='/Compiler?Language=c%2B%2B' class="bg-transparent border-[1px] border-gray-400 rounded-md w-[20vw] pt-[5px] pb-[5px] mb-[10px] flex flex-col justify-center items-center">
                                    C++ Compiler
                                    <p>Start Coding C++ &rarr;</p>
                                </a>
                                <a href='/Compiler?Language=c'  class="bg-transparent border-[1px] border-gray-400 rounded-md w-[20vw] pt-[5px] pb-[5px] mb-[10px] flex flex-col justify-center items-center">
                                    C Compiler
                                    <p>Start Coding C &rarr;</p>
                                </a>
                                <a href='/Compiler?Language=python' class="bg-transparent border-[1px] border-gray-400 rounded-md w-[20vw] pt-[5px] pb-[5px] mb-[10px] flex flex-col justify-center items-center">
                                    Python Compiler
                                    <p>Start Coding Python &rarr;</p>
                                </a>
                                <a href='/Compiler?Language=java' class="bg-transparent border-[1px] border-gray-400 rounded-md w-[20vw] pt-[5px] pb-[5px] mb-[10px] flex flex-col justify-center items-center">
                                    Java Compiler
                                    <p>Start Coding Java &rarr;</p>
                                </a>
                            </div>
                            <div className='flex flex-col w-[50%]'>
                                <a href="/HtmlRun" class="bg-transparent border-[1px] border-gray-400 rounded-md w-[20vw] pt-[5px] pb-[5px] mb-[10px] flex flex-col justify-center items-center">
                                    Html Compiler
                                    <p>Start Coding Html &rarr;</p>
                                </a>
                                <a href='/Compiler?Language=c%23' class="bg-transparent border-[1px] border-gray-400 rounded-md w-[20vw] pt-[5px] pb-[5px] mb-[10px] flex flex-col justify-center items-center">
                                    C# Compiler
                                    <p>Start Coding C# &rarr;</p>
                                </a>
                                <a href='/Compiler?Language=js' class="bg-transparent border-[1px] border-gray-400 rounded-md w-[20vw] pt-[5px] pb-[5px] mb-[10px] flex flex-col justify-center items-center">
                                    JavaScript Compiler
                                    <p>Start Coding Js &rarr;</p>
                                </a>
                                <a href='/Compiler?Language=swift' class="bg-transparent border-[1px] border-gray-400 rounded-md w-[20vw] pt-[5px] pb-[5px] mb-[10px] flex flex-col justify-center items-center">
                                    Swift Compiler
                                    <p>Start Coding Swift &rarr;</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default HorizontalScroll;
