import { gsap } from "gsap";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(Flip,ScrollTrigger);

gsap.to(".box", { x: 200 })

console.log('Hello world');