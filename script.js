 function show(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();}
    
    show()

    
    gsap.to("#bottle", {
      rotate: -15,
      scrollTrigger: {
        trigger: "#bottle",
        scroller: "#main",
        start: "top 5%",
        end: "top -416%",
        scrub: true,
        pin: true

      }
    })

    gsap.to("#bottle", {
      scale: 0.5,
      scrollTrigger: {
        trigger: "#page5 h1",
        scroller: "#main",
        start: "top 438%",
        end: "top -438%",
        scrub: true,
        pin: true

      }
    })

   let tl = gsap.timeline()
   tl.from("#main #Page1_dog",{
    opacity : 0,
    duration:1,
    scale:0.1,
   })

   tl.from("#bottle",{
    opacity:0,
    duration:1,
    scale:0.1,
   })
   
   gsap.from(".page2-left>button",{
    scrollTrigger: {
      trigger: ("#page2_part1>button"),
      scroller: ("#main"),
      start: "top 70%",
    },
    xPrecent:-300,
    duration:1,
  })


  gsap.from("#page6_part6>button",{
    scrollTrigger: {
      trigger: ("#page6_part2>button"),
      scroller: ("#main"),
      start: "top 70%",
    },
    xPrecent:600,
    duration:1,
  })