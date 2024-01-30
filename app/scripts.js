// __________cursor animation using gsap________________
function cursor(){
    let cursor = document.querySelector(".cursor")
    let body = document.querySelector("body")

    body.addEventListener("mousemove", (e)=>{
        gsap.to(cursor,{
            x: e.x + "px",
            y: e.y + "px",
        })
    })
}
cursor();

// _________Navbar animation using gsap________________

function navbar(){
    let tl = gsap.timeline()
    tl.from(".navbar .logo img, .nav",{
        y: -50,
        opacity:0,
        duration: 1,
    })

}
navbar()

// _________Section1 animation using gsap________________
function section1(){
    // let body = doucment.querySelector("body")
    let cursor = document.querySelector(".cursor")
    let section1 = document.querySelector(".section1")
    section1.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            width: "15px",
            height: "15px",
            background: "#f5f5f6",
        })
    })
}
section1()

// _________Section2 animation using gsap________________

function section2(){
    let section2 = document.querySelector(".section2")
    let cursor = document.querySelector(".cursor")
    let bodySection2 = document.querySelector("body")
    
    // to change the cursor
    section2.addEventListener("mouseenter",()=>{
        gsap.to(cursor, {
            height: "50px",
            width: "50px",
            background:"gray",
            border:"1px solid black"
          });
    } )

    //to change the Background
        // gsap.to(bodySection2,{
        //     background:"light blue",
        //     scrollTrigger:{
        //         trigger:".section2",
        //         start:"top center",
        //         end:"top center",
        //         scrub:2,
        //         markers: true,
        //     }
        // })
    
    
}
section2()

// _________Section3 animation using gsap________________

function section3(){
    let bodySection3 = document.querySelector("body");
    let section3 = document.querySelector(".section3")
    let cursor = document.querySelector(".cursor")

    section3.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            width:"40px",
            height:"40px",
            background:"red",
        })
    })

    gsap.to(bodySection3,{
        background:"black",
        scrollTrigger:{
            trigger:".section3",
            start: "top center",
            end: "top center",
            scrub:0.5,
            markers: true
        }
    })

    // gsap.to(bodySection3,{
    //     background:"black",
    //     scrollTrigger:{
    //         trigger:".section3",
    //         start:"top center",
    //         end:"top center",
    //         scrub:2,
    //         markers: true,
    //     }
    // })


    
}
section3()



