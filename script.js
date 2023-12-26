var tl = gsap.timeline()
tl.from(".nav h1, .nav h4, .nav button",{
  y:-80,
  opacity:0,
  duration:0.8,
  delay:1,
  stagger:0.2

})
gsap.from(".page2 .class",{
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.5,
  scrollTrigger:{
    trigger:".page2 .class",
    scroller:"body",
  }
})
tl.from(".page4 h4",{
  y:40,
  duration:0.5,
  delay:0.5,
  repeat:-1,
  yoyo:true
} )