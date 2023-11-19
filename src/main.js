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
        // markers: false, // Show markers on the scrollbar for debugging
        start: "top 30%", // Start the animation when the element is 30% from the top of the viewport
        end: "top 0", // End the animation when the element is at the top of the viewport
        scrub: 2 //  Smoothly scrub the animation over 2 seconds , time it takes to catch u[]
    }
})

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 .heading1", // element that triggers the animation
        scroller: window, // element that is being scrolled
        markers: false,
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
        markers: false,
        start: "top 30%",
        end: "top 0%",
        scrub: 3
    }
});

t3.to(".main-container", {
    backgroundColor: "#0f0d0d" // Change "yourNewColor" to the desired background color
});




const toggleButton = document.querySelector('.page5_toggle-button');
const heading1Container = document.querySelector('.page5_heading1-container');
const heading2Container = document.querySelector('.page5_heading2-container');
const image1Cards = document.querySelectorAll('.page5_image-card-1');
const image2Cards = document.querySelectorAll('.page5_image-card-2');
const interactables = document.querySelectorAll('.page5_interactable');
const interactables1=document.querySelectorAll('.page5_interactable-1');
const interactables2=document.querySelectorAll('.page5_interactable-2');
const list = document.querySelectorAll('.page5_list');
let activeListNumber = 0;

document.addEventListener('DOMContentLoaded', () => {
    toggleButton.addEventListener('click', function () {
        heading1Container.classList.toggle('page5_clicked');
        heading2Container.classList.toggle('page5_clicked');
        toggleButton.classList.toggle('page5_clicked');
        updateActiveList();

    });
    list[activeListNumber].classList.remove('page5_hidden');
    console.log(`showing list ${activeListNumber + 1}`)

});


let updateActiveList = () => {

    list[activeListNumber].classList.add('page5_hidden');
    activeListNumber = (activeListNumber + 1) % list.length; // cyclic looping over the list items
    list[activeListNumber].classList.remove('page5_hidden');
    console.log(`showing list ${activeListNumber + 1}`);
}


window.addEventListener('mousemove', (e) => {
    let interactableNumber;

    const interactable = e.target.closest('.page5_interactable'); // to check if the event happening is closest to an element which has the 'interactable class' in it
    const interacting = interactable !== null; // if interactable is not null then interacting turns true;
    if (interacting) {
        console.log(`interacting with ${activeListNumber + 1}`);
        interactableNumber = checkInteractable(e);
        if (activeListNumber == 0) {
            page5_showImage(interactableNumber, e, image1Cards);
            checkMouseOut(interactableNumber, interactables1, image1Cards);
        }
        else {
            page5_showImage(interactableNumber, e, image2Cards);
            checkMouseOut(interactableNumber, interactables2, image2Cards);
        }
    }

})




let checkInteractable = (e) => {
    const interactableNumber = e.target.closest('.page5_interactable').dataset.type;
    console.log(`interacting with ${interactableNumber}`);
    return interactableNumber;
}

let page5_showImage = (interactableNumber, e, imageCards) => {
    console.log(`showing image ${interactableNumber}`);
    imageCards[interactableNumber - 1].classList.add('page5_visible-image');
    const x = e.clientX - imageCards[interactableNumber - 1].offsetWidth / 2;
    const y = e.clientY - imageCards[interactableNumber - 1].offsetWidth / 2;
    imageCards[interactableNumber - 1].style.transform = `translate(${x}px ,${y}px)`;

}

function checkMouseOut(interactableNumber, interactables , imageCards) {
    interactables[interactableNumber - 1].addEventListener('mouseout', () => {
        console.log(`mouse out`);
        imageCards[interactableNumber - 1].classList.remove('page5_visible-image');
    })
}