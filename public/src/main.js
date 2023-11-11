let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main-container"); // will select the entire main content of thr web page which contains all the other divs
let mainVideo = document.querySelector(".video1");
let texts = document.querySelectorAll(".text");
let image1Set = document.querySelectorAll(".imageSet1");
let image2Set = document.querySelectorAll(".imageSet2");
let image3Set = document.querySelectorAll(".imageSet3");
let scrollingTexts = document.querySelectorAll(".scrolling-text");

document.addEventListener("mousemove", (e) => {
    animateTrailer(e);
    console.log('this is right one');
});


scrollingTexts.forEach((scrollingText, i) => {
    scrollingText.addEventListener('mouseover', () => {
        console.log(`hovered over ${i}`);
        showImage(i);
    })
})

scrollingTexts.forEach((scrollingText, i) => {
    scrollingText.addEventListener('mouseout', () => {
        console.log(`hovered away from  ${i}`);
        hideImage(i);
    })
})

function showImage(i) {
    if (i == 0) {
        image1Set.forEach((image1) => {
            image1.classList.add("image-visible");
        })
        console.log(`image1 is active`);
    }
    else if (i == 1) {
        image2Set.forEach((image2) => {
            image2.classList.add("image-visible");
        })
        console.log(`image2 is active`);
    }
    else {
        image3Set.forEach((image3) => {
            image3.classList.add("image-visible");
        })
        console.log(`image3 is active`);
    }
}

function hideImage(i) {
    if (i == 0) {
        image1Set.forEach((image1) => {
            image1.classList.remove("image-visible");
        })
        console.log(`image1 is inactive`);
    }
    else if (i == 1) {
        image2Set.forEach((image2) => {
            image2.classList.remove("image-visible");
        })
        console.log(`image2 is inactive`);
    }
    else {
        image3Set.forEach((image3) => {
            image3.classList.remove("image-visible");
        })
        console.log(`image3 is inactive`);
    }
}

let animateTrailer = (e) => {

    const x = e.clientX - cursor.offsetWidth / 2,
        y = e.clientY - cursor.offsetHeight / 2;


    console.log(`${x} , ${y}`);

    // object todefine the animation
    const keyframes = {
        transform: `translate(${x}px , ${y}px)`
    }


    // animation function
    cursor.animate(keyframes, {
        duration: 600,
        fill: "forwards"
    })
}

gsap.registerPlugin(ScrollTrigger);


let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 .heading1", // element that triggers the animation
        scroller: window, // Element that is being scrolled (the container) , we are using window as the scroller
        markers: true, // Show markers on the scrollbar for debugging
        start: "top 30%", // Start the animation when the element is 30% from the top of the viewport
        end: "top 0", // End the animation when the element is at the top of the viewport
        scrub: 2 //  Smoothly scrub the animation over 2 seconds , time it takes to catch u[]
    }
})

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 .heading1", // element that triggers the animation
        scroller: window, // element that is being scrolled
        markers: true,
        start: "top -120%", // start the animation when the trigger element is 120% at the top of the viewport
        end: "top -130%", // stop the animation when the trigger element is 130% at the top of the viewport
        scrub: 3
    }
})



// creating a GSAP tween
// the target element here is "heading1" under "page1"
t1.to(".page1 .heading1", {
    x: -100, // move the element 80px towards the left

}, "movetogether")

t1.to(".page1 .heading2", {
    x: 100,
}, "movetogether") // now making both of them having the same variable "movetogether" will both move together

t1.to(".video1", {
    width: "100%"
}, "movetogether") // using t1 timeline for the scroll trigger , make the width of the ".video1" to 100% from it's original

t2.to(".main-container", {
    backgroundColor: "#ffffff"
})

let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3_last-video",
        scroller: window,
        markers: true,
        start: "top 30%",
        end: "top 0%",
        scrub: 3
    }
});

t3.to(".main-container", {
    backgroundColor: "#0f0d0d" // Change "yourNewColor" to the desired background color
});
