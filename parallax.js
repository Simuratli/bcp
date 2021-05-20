let image1Div = document.querySelector(".about-header");
let image1 = document.querySelector(".about-header-image");
let animatedImage = document.querySelectorAll(".animated-img");
let imgOne = document.querySelectorAll('.img-one')

window.addEventListener('scroll', parallax)

function parallax() { 
    let value = window.scrollY
    console.log(value);
    
    image1.style.transform =  `translate3d(0px, ${- value*0.007 + '%'}, 0px)`
    
   

    if(value >=1070){
        let number = 1070
        for (let index = 0; index < animatedImage.length; index++) {
            animatedImage[index].style.transform =  `translate3d(0px, ${- (value-number)*0.03 + '%'}, 0px)`
            if(value >=2041){
                let number2 = 2041;
                animatedImage[index].style.transform =  `translate3d(0px, ${- (value-number2)*0.03 + '%'}, 0px)`
            }
        }
    }
}