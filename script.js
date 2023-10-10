// navigation 
window.addEventListener("scroll", function() {
    // const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");
    const scrollY = window.scrollY;

    if (scrollY === 0) {
        navbar.style.paddingTop = "15px"
        navbar.style.paddingBottom = '10px'
        navbar.style.transitionDuration = '0.3s'
        navbar.style.transitionTimingFunction = 'ease-in-out'
        navbar.style.boxShadow = '0px 0px 0px 0px white'
        navbar.style.background = 'none'
        // navbar.style.background = 'rgba(72, 72, 72, 0.2)'
        // navbar.style.backdropFilter = 'blur(8px)'
        // homenav.style.color = '#00B2FF'
    } else {
        navbar.style.paddingTop = "25px"
        navbar.style.paddingBottom = '10px'
        navbar.style.transitionDuration = '0.3s'
        navbar.style.transitionTimingFunction = 'ease-in-out'
        navbar.style.boxShadow = '0px 0.7px 10px 1px rgba(0, 0, 0, 0.50)'
        navbar.style.backgroundColor = '#000E41'
        // homenav.style.color = 'white'
    }
    // background: rgba(72, 72, 72, 0.2);
    // backdrop-filter: blur(8px); 
});

// ----------Waterfall Image----------

// function changeBackgroundImageWaterfall() {
//     let background = document.getElementById('div-main-hot-place');
//     background.classList.add('div-main-hot-place-Waterfall');
//     background.style.transitionDuration = '1s'
//     background.classList.remove('div-main-hot-place-Temple')
//     background.classList.remove('div-main-hot-place-Beach')
//     background.style.transitionDuration = '0.5s'
// }

// function changeTitleWaterfall() {
//     var content = document.getElementById('title-hot-place')
//     content.innerHTML = "Banyu Wana Amertha Waterfall"
// }

// function changePWaterfall(){
//     var content = document.getElementById('p-hot-place')
//     content.innerHTML = "Bhuana Sari Street, Wanagiri, Sukasada, Buleleng, Bali"
// }

// function changeImageWaterfall1() {
//     var element = document.getElementById('img-hot-place1')
//     element.setAttribute("src","assets/Waterfall1.png")
// }

// function changeImageWaterfall2() {
//     var element = document.getElementById('img-hot-place2')
//     element.setAttribute("src","assets/Waterfall2.png")
// }

// function changeImageWaterfall3() {
//     var element = document.getElementById('img-hot-place3')
//     element.setAttribute("src","assets/Waterfall3.png")
// }

// // ----------Temple Image----------

// function changeBackgroundImageTemple() {
//     let background = document.getElementById('div-main-hot-place');
//     background.classList.add('div-main-hot-place-Temple');
//     background.style.transitionDuration = '1s'
//     background.classList.remove('div-main-hot-place-Waterfall')
//     background.classList.remove('div-main-hot-place-Beach')
//     background.style.transitionDuration = '0.5s'
// }

// function changeTitleTemple() {
//     var content = document.getElementById('title-hot-place')
//     content.innerHTML = "Tirta Empul Temple"
// }

// function changePTemple() {
//     var content = document.getElementById('p-hot-place')
//     content.innerHTML = "Tirta Street, Manukaya, Tampaksiring District, Gianyar Regency, Bali"
// }

// function changeImageTemple1() {
//     var element = document.getElementById('img-hot-place1')
//     element.setAttribute("src","assets/Temple1.png")
//     changeImageHotPlace1Hover()
// }

// function changeImageTemple2() {
//     var element = document.getElementById('img-hot-place2')
//     element.setAttribute("src","assets/Temple2.png")
// }

// function changeImageTemple3() {
//     var element = document.getElementById('img-hot-place3')
//     element.setAttribute("src","assets/Temple3.png")
// }

// ----------Beach Image----------

// function changeBackgroundImageBeach() {
//     let background = document.getElementById('div-main-hot-place');
//     background.classList.add('div-main-hot-place-Beach');
//     background.style.transitionDuration = '1s'
//     background.classList.remove('div-main-hot-place-Temple')
//     background.classList.remove('div-main-hot-place-Waterfall')
//     background.style.transitionDuration = '0.5s'
// }

// function changeTitleBeach() {
//     var content = document.getElementById('title-hot-place')
//     content.innerHTML = "Sanur Beach"
// }

// function changePBeach() {
//     var content = document.getElementById('p-hot-place')
//     content.innerHTML = "Danau Tamblingan Street No.99A, Sanur, South Denpasar, Denpasar City, Bali"
// }

// function changeImageBeach1() {
//     var element = document.getElementById('img-hot-place1')
//     element.setAttribute("src","assets/Beach1.png")
// }

// function changeImageBeach2() {
//     var element = document.getElementById('img-hot-place2')
//     element.setAttribute("src","assets/Beach2.png")
// }

// function changeImageBeach3() {
//     var element = document.getElementById('img-hot-place3')
//     element.setAttribute("src","assets/Beach3.png")
// }

// ----------button image hot place----------

// ----------waterfall button----------

// function changeImageButtonWaterfall(element) {
//     var element = document.getElementById('img-button-hot-place-Waterfall')
//     element.setAttribute("src","assets/Waterfall-button-image-clicked.png")
// }

// function changeImageButtonWaterfallBack(element) {
//     var element = document.getElementById('img-button-hot-place-Waterfall')
//     element.setAttribute("src","assets/Waterfall-button-image.png")
// }

// ----------Temple button----------

// function changeImageButtonTemple(element) {
//     var element = document.getElementById('img-button-hot-place-Temple')
//     element.setAttribute("src","assets/Temple-button-image-clicked.png")
// }

// function changeImageButtonTempleBack(element) {
//     var element = document.getElementById('img-button-hot-place-Temple')
//     element.setAttribute("src","assets/Temple-button-image.png")
// }

// ----------Beach button----------

// function changeImageButtonBeach(element) {
//     var element = document.getElementById('img-button-hot-place-Beach')
//     element.setAttribute("src","assets/Beach-button-image-clicked.png")
// }

// function changeImageButtonBeachBack(element) {
//     var element = document.getElementById('img-button-hot-place-Beach')
//     element.setAttribute("src","assets/Beach-button-image.png")
// }

// ----------3 image hot place hover----------
// function changeImageHotPlace1Hover() {
//     var element = document.getElementById('img-hot-place1')
//     element.setAttribute("src","assets/Temple1-Hover.png")
// }











document.querySelectorAll('.klungkung-location').forEach(e => {
    e.addEventListener('mouseover', function() {
        document.querySelectorAll('.klungkung-location').forEach(e => 
            e.style.fill = "#000E41")
    })
})

document.querySelectorAll('.klungkung-location').forEach(e => {
    e.addEventListener('mouseout', function() {
        document.querySelectorAll('.klungkung-location').forEach(e => 
            e.style.fill = "#C3C3C3")
    })
})







// <--------- Set Navigation Active Section Function --------->
function setNavigationActiveSection(index) {
    // Clear active section
    document.querySelectorAll('.div-nav-a a').forEach(e => {
        e.classList.remove('active');
    })

    // Set current active section
    document.querySelectorAll('.div-nav-a a')[index].classList.add('active');
}

// <---------- Window Scroll Event ---------->
let element = document.querySelector('.animation')
window.addEventListener('scroll', function() {
    if ( window.scrollY < document.querySelector('#place').offsetTop -100) {
        setNavigationActiveSection(0);
        element.style.left = '50.6vw'
    }
    else if (window.scrollY >= document.querySelector('#place').offsetTop -100 && window.scrollY < document.querySelector('#place').offsetTop + document.querySelector('#place').clientHeight -100) {
        setNavigationActiveSection(1);
        element.style.left = '59vw'
    }
    else if (window.scrollY >= document.querySelector('#rest-place').offsetTop -100 && window.scrollY < document.querySelector('#rest-place').offsetTop + document.querySelector('#rest-place').clientHeight - 100) {
        setNavigationActiveSection(2);
        element.style.left = '67.6vw'
    }

    else if (window.scrollY >= document.querySelector('#souvenirs').offsetTop -100 && window.scrollY < document.querySelector('#souvenirs').offsetTop + document.querySelector('#souvenirs').clientHeight - 100) {
        setNavigationActiveSection(3);
        element.style.left = '77.5vw'
    }

    else if (window.scrollY >= document.querySelector('#other').offsetTop -100 && window.scrollY < document.querySelector('#other').offsetTop + document.querySelector('#other').clientHeight - 100) {
        setNavigationActiveSection(4);
        element.style.left = '87vw'
    }
})

const sliderContainer = document.querySelector('.slider-container');
        const slides = document.querySelector('.slides');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentSlideIndex = 0;
        const slideWidth = sliderContainer.clientWidth;

        function showSlide(index) {
            if (index < 0) {
                index = slides.children.length - 1;
            } else if (index >= slides.children.length) {
                index = 0;
            }
            currentSlideIndex = index;
            const translateX = -currentSlideIndex * slideWidth;
            slides.style.transform = `translateX(${translateX}px)`;
        }

        prevButton.addEventListener('click', () => {
            currentSlideIndex--;
            showSlide(currentSlideIndex);
        });

        nextButton.addEventListener('click', () => {
            currentSlideIndex++;
            showSlide(currentSlideIndex);
        });

        showSlide(currentSlideIndex);







// function changeImgPlus1() {
//     var element = document.getElementById('plus-img1');
//     if(element.getAttribute("src") = "assets/minus.png"){
//         element.setAttribute("src","assets/plus.png")
//     }else {
//         element.setAttribute("src","assets/minus.png")
//     }
// }

document.querySelectorAll("summary").forEach((e, i) => {
    e.addEventListener("click", function(){
        if(e.childNodes[1].getAttribute("src") == "assets/plus.png"){
            e.childNodes[1].src = "assets/minus.png"
        }else {
            e.childNodes[1].src = "assets/plus.png"
        }
    })
})

document.querySelectorAll(".heart-img").forEach((e, i) => {
    e.addEventListener("click", function(){
        if(e.getAttribute("src") == "assets/grey-heart.png") {
            e.src = "assets/red-heart.png"
        } else {
            e.src = "assets/grey-heart.png"
        }
    })
})

document.querySelectorAll(".white-heart").forEach((e, i) => {
    e.addEventListener("click", function(){
        if(e.getAttribute("src") == "assets/white-heart.png") {
            e.src = "assets/red-heart.png"
        } else {
            e.src = "assets/white-heart.png"
        }
    })
})

// <---------- arrow in souvenirs ---------->
// ---------- left arrow ----------
function changeImageLeftArrow() {
    var element = document.getElementById('prev')
    element.setAttribute("src","assets/left-arrow2-hover.png")
}

function changeImageLeftArrowBack() {
    var element = document.getElementById('prev')
    element.setAttribute("src","assets/left-arrow2.png")
}

// ---------- right arrow ----------
function changeImageRightArrow() {
    var element = document.getElementById('next')
    element.setAttribute("src","assets/right-arrow2-hover.png")
}

function changeImageRightArrowBack() {
    var element = document.getElementById('next')
    element.setAttribute("src","assets/right-arrow2.png")
}





var kondisi = true;
function showPopUpLogin() {
    var element = document.getElementById('pop-up-login')
    var textSignUp = document.getElementById('sign-up-text')
    var signUp = document.getElementById('sign-up')
    var title = document.getElementById('title-pop-up')
    var password = document.getElementById('password-input')
    var confirmPassword = document.getElementById('confirm-password-input')
    var email = document.getElementById('email')
    var checkbox = document.getElementById('checkbox')
    var signIn = document.getElementById('sign-in')
    var username = document.getElementById('username')
    var checkboxInput = document.getElementById('checkbox-input')
    
    element.style.display = 'block'
    element.style.transitionDuration = '1s'
    textSignUp.innerHTML = "Don't have an account?"
    signUp.innerHTML = 'Sign up'
    title.innerHTML = "Welcome Back!"
    kondisi = true;
    password.style.display = 'none'
    confirmPassword.style.display = 'none'
    email.placeholder = 'password'
    checkbox.style.display = 'block'
    signIn.innerHTML = 'Sign in'
    email.value = ''
    username.value = ''
    checkboxInput.checked = false
    incorrectPassword.style.display = 'none'
}

function hidePopUpLogin() {
    var element = document.getElementById('pop-up-login')
    element.style.display = 'none'
    element.style.transitionDuration = '1s'
}


var signup = document.getElementById('sign-up')
var text = document.getElementById('sign-up-text')
var title = document.getElementById('title-pop-up')
var email = document.getElementById('email')
var password = document.getElementById('password-input')
var confirmPassword = document.getElementById('confirm-password-input')
var checkbox = document.getElementById('checkbox')
var signIn = document.getElementById('sign-in')
var username = document.getElementById('username')
var checkboxInput = document.getElementById('checkbox-input')


signup.addEventListener("click", function(){
    if(kondisi){
        text.innerHTML = "Already have account?"
        console.log(kondisi)
        signup.innerHTML = "Sign in"
        title.innerHTML = "create an account"
        kondisi = false;
        email.placeholder = 'email'
        password.style.display = 'block'
        confirmPassword.style.display = 'block'
        confirmPassword.style.marginBottom = '2vw'
        checkbox.style.display = 'none'
        signIn.innerHTML = 'Sign up'
        username.value = ''
        email.value = ''
        password.value = ''
        confirmPassword.value = ''
    }else {
        text.innerHTML = "Don't have an account?"
        signup.innerHTML = "Sign up"
        title.innerHTML = "Welcome Back!"
        kondisi = true;
        password.style.display = 'none'
        confirmPassword.style.display = 'none'
        checkbox.style.display = 'block'
        email.placeholder = 'password'
        signIn.innerHTML = 'Sign in'
        username.value = ''
        email.value = ''
        password.value = ''
        confirmPassword.value = ''
        checkboxInput.checked = false
        incorrectPassword.style.display = 'none'
    }
})

var buttonInput = document.getElementById('sign-in')
var form = document.getElementById("login-form")
var incorrectPassword = document.getElementById('incorrect-password')
buttonInput.addEventListener('click', function(){
    if (username.value == ''|| email.value == '' || password.value == '' || confirmPassword.value == '') {
        form.preventDefault()
        console.log('berhasil')
    }
    else {
        if (password.value != confirmPassword.value) {
            incorrectPassword.style.display = 'block'
        }
        else {
            text.innerHTML = "Don't have an account?"
            signup.innerHTML = "Sign up"
            title.innerHTML = "Welcome Back!"
            kondisi = false;
            password.style.display = 'none'
            confirmPassword.style.display = 'none'
            checkbox.style.display = 'block'
            email.placeholder = 'password'
            signIn.innerHTML = 'Sign in'
            username.value = ''
            email.value = ''
            password.value = ''
            confirmPassword.value = ''
            incorrectPassword.style.display = 'none'
            checkboxInput.checked = false
        }
    }
})

function showSignInDone() {
    var signInContainer = document.getElementById('div-pop-up-sign-in')
    var element = document.getElementById('pop-up-login')

    if (username.value == '' || email.value == '') {
        form.preventDefault()
    }

    else if (buttonInput.innerHTML == 'Sign in'){
        element.style.display = 'none'
        element.style.transitionDuration = '1s'
        signInContainer.style.display = 'block'
        signInContainer.style.transitionDuration = '1s'
    }
}

function hideSignInDone() {
    var signInContainer = document.getElementById('div-pop-up-sign-in')
    signInContainer.style.display = 'none'
    signInContainer.style.transitionDuration = '1s'
}























document.getElementById('next-hot-place').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev-hot-place').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}






// <---------- arrow in hot place ---------->
// ---------- left arrow ----------
function changeImageLeftArrowHotPlace() {
    var element = document.getElementById('prev2')
    element.setAttribute("src","assets/left-arrow2.png")
}

function changeImageLeftArrowHotPlaceBack() {
    var element = document.getElementById('prev2')
    element.setAttribute("src","assets/nav-left.png")
}

// ---------- right arrow ----------
function changeImageRightArrowHotPlace() {
    var element = document.getElementById('next2')
    element.setAttribute("src","assets/right-arrow2.png")
}

function changeImageRightArrowHotPlaceBack() {
    var element = document.getElementById('next2')
    element.setAttribute("src","assets/nav-right.png")
}

// <---------- arrow in hot place2 ---------->
// ---------- left arrow ----------
function changeImageLeftArrowHotPlace() {
    var element = document.getElementById('prev-hot-place2')
    element.setAttribute("src","assets/left-arrow2.png")
}

function changeImageLeftArrowHotPlaceBack() {
    var element = document.getElementById('prev-hot-place2')
    element.setAttribute("src","assets/nav-left.png")
}

// ---------- right arrow ----------
function changeImageRightArrowHotPlace() {
    var element = document.getElementById('next-hot-place2')
    element.setAttribute("src","assets/right-arrow2.png")
}

function changeImageRightArrowHotPlaceBack() {
    var element = document.getElementById('next-hot-place2')
    element.setAttribute("src","assets/nav-right.png")
}

// <---------- arrow in rest place2 ---------->
// ---------- left arrow ----------
function changeImageLeftArrowHotPlace() {
    var element = document.getElementById('prev-rest-place2')
    element.setAttribute("src","assets/left-arrow2.png")
}

function changeImageLeftArrowHotPlaceBack() {
    var element = document.getElementById('prev-rest-place2')
    element.setAttribute("src","assets/nav-left.png")
}

// ---------- right arrow ----------
function changeImageRightArrowHotPlace() {
    var element = document.getElementById('next-rest-place2')
    element.setAttribute("src","assets/right-arrow2.png")
}

function changeImageRightArrowHotPlaceBack() {
    var element = document.getElementById('next-rest-place2')
    element.setAttribute("src","assets/nav-right.png")
}


















// <---------- change image in hot place and hotels ---------->
// Jembrana
document.getElementById('jembrana').onclick = function() {
    changeImageJembrana1()
    changeImageJembrana2()
    changeImageJembrana3()
    changeImageJembrana4()
    changeImageJembrana5()
    changeTitleJembrana()
    changeTitleItem1Jembrana()
    changeTitleItem2Jembrana()
    changeTitleItem3Jembrana()
    changeTitleItem4Jembrana()
    changeTitleItem5Jembrana()
    changeImageRestPlaceJembrana1()
    changeImageRestPlaceJembrana2()
    changeImageRestPlaceJembrana3()
    changeTitleHotelsJembrana()
    changeTitleHotels1Jembrana()
    changeTitleHotels2Jembrana()
    changeTitleHotels3Jembrana()
    changeLocationHotels1Jembrana()
    changeLocationHotels2Jembrana()
    changeLocationHotels3Jembrana()
    changeLocationHotPlaceJembrana1()
    changeLocationHotPlaceJembrana2()
    changeLocationHotPlaceJembrana3()
    changeLocationHotPlaceJembrana4()
    changeLocationHotPlaceJembrana5()
    changeRatingHotelsJembrana1()
    changeRatingHotelsJembrana2()
    changeRatingHotelsJembrana3()
}

function changeTitleJembrana() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'JEMBRANA'
}

function changeImageJembrana1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/siwa-monument.png)'
}

function changeImageJembrana2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/Perancak-Beach.png)'
}

function changeImageJembrana3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/CegurHolyWater.png)'
}

function changeImageJembrana4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/Baluk-Rening.png)'
}

function changeImageJembrana5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/west-bali-national-park.png)'
}

// <---------- Title ----------> 

function changeTitleItem1Jembrana() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'TELUK GILIMANUK'
}

function changeTitleItem2Jembrana() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'PERANCAK BEACH'
}

function changeTitleItem3Jembrana() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'CEGUR HOLY WATER'
}

function changeTitleItem4Jembrana() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'BALUK RENING BEACH'
}

function changeTitleItem5Jembrana() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'WEST BALI NATIONAL PARK'
}

// <---------- Rest Place ----------> 
function changeImageRestPlaceJembrana1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/The-Asri-Villas.jpg)'
}

function changeImageRestPlaceJembrana2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Niki-Hotel.jpg)'
}

function changeImageRestPlaceJembrana3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Teracce-Medewi.jpg)'
}

function changeTitleHotelsJembrana() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Jembrana'
}

function changeTitleHotels1Jembrana() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'The Asri Villas'
}

function changeTitleHotels2Jembrana() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'Hotel Niki'
}

function changeTitleHotels3Jembrana() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'Teracce Medewi'
}

function changeLocationHotels1Jembrana() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Ngurah Rai Streets, Jembrana'
}

function changeLocationHotels2Jembrana() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Gilimanuk, Jembrana'
}

function changeLocationHotels3Jembrana() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place in Pantai Medewi Streets, Jembrana'
}

//hOT PLACE
function changeLocationHotPlaceJembrana1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Cekik Street, Jembrana Regency, Bali'
}

function changeLocationHotPlaceJembrana2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Baluk Village, Negara District, Jembrana Regency, Bali'
}

function changeLocationHotPlaceJembrana3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Perancak Village Jembrana District, Jembrana Regency, Bali'
}

function changeLocationHotPlaceJembrana4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Cegur Village, Jembrana District, Jembrana Regency, Bali'
}

function changeLocationHotPlaceJembrana5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Baluk Village, Negara District, Jembrana Regency, Bali'
}

//Rating
function changeRatingHotelsJembrana1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.0'
}

function changeRatingHotelsJembrana2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '8.4'
}

function changeRatingHotelsJembrana3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '9.0'
}

// Tabanan
document.getElementById('tabanan').onclick = function() {
    changeImageTabanan1()
    changeImageTabanan2()
    changeImageTabanan3()
    changeImageTabanan4()
    changeImageTabanan5()
    changeTitleTabanan()
    changeTitleItem1Tabanan()
    changeTitleItem2Tabanan()
    changeTitleItem3Tabanan()
    changeTitleItem4Tabanan()
    changeTitleItem5Tabanan()
    changeImageRestPlaceTabanan1()
    changeImageRestPlaceTabanan2()
    changeImageRestPlaceTabanan3()
    changeTitleHotelsTabanan()
    changeTitleHotels1Tabanan()
    changeTitleHotels2Tabanan()
    changeTitleHotels3Tabanan()
    changeLocationHotels1Tabanan()
    changeLocationHotels2Tabanan()
    changeLocationHotels3Tabanan()
    changeLocationHotPlaceTabanan1()
    changeLocationHotPlaceTabanan2()
    changeLocationHotPlaceTabanan3()
    changeLocationHotPlaceTabanan4()
    changeLocationHotPlaceTabanan5()
    changeRatingHotelsTabanan1()
    changeRatingHotelsTabanan2()
    changeRatingHotelsTabanan3()
}

// <---------- Image ----------> 

function changeTitleTabanan() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'TABANAN'
}

function changeImageTabanan1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/Batu-Bolong.png)'
}

function changeImageTabanan2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/Botanic-Garden.png)'
}

function changeImageTabanan3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/Jatiluwih.png)'
}

function changeImageTabanan4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/Tanah-Lot.png)'
}

function changeImageTabanan5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/UlunDanu.png)'
}
// <------------ Title ---------->

function changeTitleItem1Tabanan() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'BATU BOLONG TEMPLE'
}

function changeTitleItem2Tabanan() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'BEDUGUL BOTANIC GARDENS BALI'
}

function changeTitleItem3Tabanan() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'JATILUWIH RICE TERRACES'
}

function changeTitleItem4Tabanan() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'TANAH LOT'
}

function changeTitleItem5Tabanan() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'ULUN DANU BERATAN TEMPLE'
}

//hOT PLACE
function changeLocationHotPlaceTabanan1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Candikuning Village, Baturiti District, Tabanan Regency, Bali'
}

function changeLocationHotPlaceTabanan2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Beraban Village, Kediri District, Tabanan Regency, Bali'
}

function changeLocationHotPlaceTabanan3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Kebun Raya Eka Karya Candikuning Street, Tabanan Regency, Bali'
}

function changeLocationHotPlaceTabanan4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Jatiluwih Village, Penebel District, Tabanan Regency, Bali'
}

function changeLocationHotPlaceTabanan5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Beraban Village, Kediri District, Tabanan Regency, Bali'
}

// <---------- Rest Place ----------> 
function changeImageRestPlaceTabanan1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Sahaja-Sawah-Resort.jpg)'
}

function changeImageRestPlaceTabanan2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Alami-Boutique-Villas-Resort.jpg)'
}

function changeImageRestPlaceTabanan3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Puri-Taman-Sari.jpg)'
}

function changeTitleHotelsTabanan() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Tabanan'
}

function changeTitleHotels1Tabanan() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Sahaja Sawah Resort'
}

function changeTitleHotels2Tabanan() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'Alami Boutique Villas & Resort'
}

function changeTitleHotels3Tabanan() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'Puri Taman Sari'
}

//Rating
function changeRatingHotelsTabanan1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.3'
}

function changeRatingHotelsTabanan2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '9.2'
}

function changeRatingHotelsTabanan3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '9.0'
}

function changeLocationHotels1Tabanan() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Tegal Mengkeb, Tabanan'
}

function changeLocationHotels2Tabanan() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place Kerambitan, Tabanan'
}

function changeLocationHotels3Tabanan() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place in Peken Village, Tabanan'
}

// Badung
document.getElementById('badung').onclick = function() {
    changeImageBadung1()
    changeImageBadung2()
    changeImageBadung3()
    changeImageBadung4()
    changeImageBadung5()
    changeTitleBadung()
    changeTitleItem1Badung()
    changeTitleItem2Badung()
    changeTitleItem3Badung()
    changeTitleItem4Badung()
    changeTitleItem5Badung()
    changeImageRestPlaceBadung1()
    changeImageRestPlaceBadung2()
    changeImageRestPlaceBadung3()
    changeTitleHotelsBadung()
    changeTitleHotels1Badung()
    changeTitleHotels2Badung()
    changeTitleHotels3Badung()
    changeLocationHotels1Badung()
    changeLocationHotels2Badung()
    changeLocationHotels3Badung()
    changeLocationHotPlaceBadung1()
    changeLocationHotPlaceBadung2()
    changeLocationHotPlaceBadung3()
    changeLocationHotPlaceBadung4()
    changeLocationHotPlaceBadung5()
    changeRatingHotelsBadung1()
    changeRatingHotelsBadung2()
    changeRatingHotelsBadung3()
}

// <---------- Image ----------> 

function changeTitleBadung() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'BADUNG'
}

function changeImageBadung1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/mengening.png)'
}

function changeImageBadung2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/gwk.png)'
}

function changeImageBadung3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/nungnung.png)'
}

function changeImageBadung4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/NyangNyang.png)'
}

function changeImageBadung5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/luhur.jpeg)'
}
// <------------ Title ---------->

function changeTitleItem1Badung() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'MENGENING BEACH'
}

function changeTitleItem2Badung() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'GARUDA WISNU KENCANA'
}

function changeTitleItem3Badung() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'NUNGNUNG WATERFALL'
}

function changeTitleItem4Badung() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'NYANG-NYANG BEACH'
}

function changeTitleItem5Badung() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'LUHUR ULUWATU TEMPLE'
}

//hOT PLACE
function changeLocationHotPlaceBadung1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Pecatu Village, South Kuta District, Badung Regency, Bali'
}

function changeLocationHotPlaceBadung2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Mengening Village, Mengwi District, Badung Regency, Bali'
}

function changeLocationHotPlaceBadung3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Ungusan Village, South Kuta District, Badung Regency, Bali'
}

function changeLocationHotPlaceBadung4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Pelaga Village, Petang District, Badung Regency, Bali'
}

function changeLocationHotPlaceBadung5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Uluwatu Street, Pecatu, South Kuta District, Badung Regency, Bali'
}


// <---------- Rest Place ----------> 
function changeImageRestPlaceBadung1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Karuna-Villa.jpg)'
}

function changeImageRestPlaceBadung2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/The-ume.jpg)'
}

function changeImageRestPlaceBadung3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Villa-Kori-Bali-Kubu.jpg)'
}

function changeTitleHotelsBadung() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Badung'
}

function changeTitleHotels1Badung() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Karuna Villa'
}

function changeTitleHotels2Badung() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'The Ume'
}

function changeTitleHotels3Badung() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'Kori Bali Kubu Villa'
}

function changeLocationHotels1Badung() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place South kuta, Badung'
}

function changeLocationHotels2Badung() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Umelalang Cemagi Streets, Badung'
}

function changeLocationHotels3Badung() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place in Kuta, Badung'
}

//Rating
function changeRatingHotelsBadung1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '8.9'
}

function changeRatingHotelsBadung2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '7.9'
}

function changeRatingHotelsBadung3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '9.5'
}

// Gianyar
document.getElementById('gianyar').onclick = function() {
    changeImageGianyar1()
    changeImageGianyar2()
    changeImageGianyar3()
    changeImageGianyar4()
    changeImageGianyar5()
    changeTitleGianyar()
    changeTitleItem1Gianyar()
    changeTitleItem2Gianyar()
    changeTitleItem3Gianyar()
    changeTitleItem4Gianyar()
    changeTitleItem5Gianyar()
    changeImageRestPlaceGianyar1()
    changeImageRestPlaceGianyar2()
    changeImageRestPlaceGianyar3()
    changeTitleHotelsGianyar()
    changeTitleHotels1Gianyar()
    changeTitleHotels2Gianyar()
    changeTitleHotels3Gianyar()
    changeLocationHotels1Gianyar()
    changeLocationHotels2Gianyar()
    changeLocationHotels3Gianyar()
    changeLocationHotPlaceGianyar1()
    changeLocationHotPlaceGianyar2()
    changeLocationHotPlaceGianyar3()
    changeLocationHotPlaceGianyar4()
    changeLocationHotPlaceGianyar5()
    changeRatingHotelsGianyar1()
    changeRatingHotelsGianyar2()
    changeRatingHotelsGianyar3()
}

// <---------- Image ----------> 

function changeTitleGianyar() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'GIANYAR'
}

function changeImageGianyar1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/kantoLampo.png)'
}

function changeImageGianyar2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/tirthaEmpul.png)'
}

function changeImageGianyar3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/RengReng.png)'
}

function changeImageGianyar4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/tegenungan.png)'
}

function changeImageGianyar5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/SerayuPot.png)'
}

// <------------ Title ---------->

function changeTitleItem1Gianyar() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'KANTO LAMPO WATERFALL'
}

function changeTitleItem2Gianyar() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'TIRTHA EMPUL'
}

function changeTitleItem3Gianyar() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'RENG-RENG WATERFALL'
}

function changeTitleItem4Gianyar() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'TEGENUNGAN WATERFALL'
}

function changeTitleItem5Gianyar() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'SERAYU POTTERY'
}

//hOT PLACE
function changeLocationHotPlaceGianyar1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Banjar Ambengan, Ubud, Gianyar Regency, Bali'
}

function changeLocationHotPlaceGianyar2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Beng Village, Gianyar District, Gianyar Regency, Bali'
}

function changeLocationHotPlaceGianyar3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Manukaya Village, Tampaksiring District, Gianyar Regency, Bali '
}

function changeLocationHotPlaceGianyar4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Babakan Village, Gianyar District, Gianyar Regency, Bali'
}

function changeLocationHotPlaceGianyar5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Kemenuh, Sukawati, Gianyar Regency, Bali'
}

// <---------- Rest Place ----------> 
function changeImageRestPlaceGianyar1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Magatama-Villa-by-Mahaputra.jpg)'
}

function changeImageRestPlaceGianyar2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Alam-Kawi-Ubud-Resort.jpg)'
}

function changeImageRestPlaceGianyar3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Inara-Alas-Harum.jpg)'
}

function changeTitleHotelsGianyar() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Gianyar'
}

function changeTitleHotels1Gianyar() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Magatama Villa by Mahaputra'
}

function changeTitleHotels2Gianyar() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'Alam Kawi Ubud Resort'
}

function changeTitleHotels3Gianyar() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'Inara Alas Harum'
}

//Rating
function changeRatingHotelsGianyar1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.1'
}

function changeRatingHotelsGianyar2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '8.3'
}

function changeRatingHotelsGianyar3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '9.7'
}

function changeLocationHotels1Gianyar() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place Tegallalang, Gianyar'
}

function changeLocationHotels2Gianyar() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Tampaksiring, Gianyar'
}

function changeLocationHotels3Gianyar() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place in Payangan, Gianyar'
}

// Bangli
document.getElementById('bangli').onclick = function() {
    changeImageBangli1()
    changeImageBangli2()
    changeImageBangli3()
    changeImageBangli4()
    changeImageBangli5()
    changeTitleBangli()
    changeTitleItem1Bangli()
    changeTitleItem2Bangli()
    changeTitleItem3Bangli()
    changeTitleItem4Bangli()
    changeTitleItem5Bangli()
    changeImageRestPlaceBangli1()
    changeImageRestPlaceBangli2()
    changeImageRestPlaceBangli3()
    changeTitleHotelsBangli()
    changeTitleHotels1Bangli()
    changeTitleHotels2Bangli()
    changeTitleHotels3Bangli()
    changeLocationHotels1Bangli()
    changeLocationHotels2Bangli()
    changeLocationHotels3Bangli()
    changeLocationHotPlaceBangli1()
    changeLocationHotPlaceBangli2()
    changeLocationHotPlaceBangli3()
    changeLocationHotPlaceBangli4()
    changeLocationHotPlaceBangli5()
    changeRatingHotelsBangli1()
    changeRatingHotelsBangli2()
    changeRatingHotelsBangli3()
}

// <---------- Image ----------> 

function changeTitleBangli() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'BANGLI'
}

function changeImageBangli1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/JatiTempleKintaMani.png)'
}

function changeImageBangli2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/Penglipuran.png)'
}

function changeImageBangli3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/Trunyan.png)'
}

function changeImageBangli4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/tibumana.png)'
}

function changeImageBangli5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/TukadCepung.png)'
}

// <------------ Title ---------->

function changeTitleItem1Bangli() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'JATI TEMPLE KINTAMANI'
}

function changeTitleItem2Bangli() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'PENGLIPURAN VILLAGE'
}

function changeTitleItem3Bangli() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'SKULL ISLAND TRUNYAN '
}

function changeTitleItem4Bangli() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'TIBUMANA WATERFALL'
}

function changeTitleItem5Bangli() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'TUKAD CEPUNG WATERFALL'
}

//hOT PLACE
function changeLocationHotPlaceBangli1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Banjar Penida Kelod, Tembuku Village, Tembuku District, Bangli Regency, Bali'
}

function changeLocationHotPlaceBangli2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Batur Tengah Village, Kintamani District, Bangli Regency, Bali'
}

function changeLocationHotPlaceBangli3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Penglipuran Village, Bangli District, Bangli Regency, Bali'
}

function changeLocationHotPlaceBangli4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Trunyan Village, Kintamani District, Bangli Regency, Bali'
}

function changeLocationHotPlaceBangli5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Apuan Village, Susut District, Bangli Regency, Bali'
}


// <---------- Rest Place ----------> 
function changeImageRestPlaceBangli1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Asli-Bali-Villas.jpg)'
}

function changeImageRestPlaceBangli2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/The-Toya-Bali.jpg)'
}

function changeImageRestPlaceBangli3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/De-Umah-Bali-Eco-Tradi-Home.jpg)'
}

function changeTitleHotelsBangli() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Bangli'
}

function changeTitleHotels1Bangli() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Asli Bali Villas'
}

function changeTitleHotels2Bangli() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'The Toya Bali'
}

function changeTitleHotels3Bangli() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'De Umah Bali Eco Tradi Home'
}

//Rating
function changeRatingHotelsBangli1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.5'
}

function changeRatingHotelsBangli2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '9.7'
}

function changeRatingHotelsBangli3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '8.5'
}

function changeLocationHotels1Bangli() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Taman Bali, Bangli'
}

function changeLocationHotels2Bangli() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Kintamani, Bangli'
}

function changeLocationHotels3Bangli() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place Tembuku, Bangli'
}

// Karangasem
document.getElementById('karangasem').onclick = function() {
    changeImageKarangasem1()
    changeImageKarangasem2()
    changeImageKarangasem3()
    changeImageKarangasem4()
    changeImageKarangasem5()
    changeTitleKarangasem()
    changeTitleItem1Karangasem()
    changeTitleItem2Karangasem()
    changeTitleItem3Karangasem()
    changeTitleItem4Karangasem()
    changeTitleItem5Karangasem()
    changeImageRestPlaceKarangasem1()
    changeImageRestPlaceKarangasem2()
    changeImageRestPlaceKarangasem3()
    changeTitleHotelsKarangasem()
    changeTitleHotels1Karangasem()
    changeTitleHotels2Karangasem()
    changeTitleHotels3Karangasem()
    changeLocationHotels1Karangasem()
    changeLocationHotels2Karangasem()
    changeLocationHotels3Karangasem()
    changeLocationHotPlaceKarangasem1()
    changeLocationHotPlaceKarangasem2()
    changeLocationHotPlaceKarangasem3()
    changeLocationHotPlaceKarangasem4()
    changeLocationHotPlaceKarangasem5()
    changeRatingHotelsKarangasem1()
    changeRatingHotelsKarangasem2()
    changeRatingHotelsKarangasem3()
}

// <---------- Image ----------> 

function changeTitleKarangasem() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'KARANGASEM'
}

function changeImageKarangasem1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/lempuyang.png)'
}

function changeImageKarangasem2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/tirtaGangga.png)'
}

function changeImageKarangasem3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/Besakih.png)'
}

function changeImageKarangasem4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/gumitirGarden.png)'
}

function changeImageKarangasem5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/virginBeach.png)'
}

// <------------ Title ---------->

function changeTitleItem1Karangasem() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'LEMPUYANG TEMPLE'
}

function changeTitleItem2Karangasem() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'TIRTA GANGGA TEMPLE'
}

function changeTitleItem3Karangasem() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'BESAKIH TEMPLE'
}

function changeTitleItem4Karangasem() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'GUMITIR GARDEN'
}

function changeTitleItem5Karangasem() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'VIRGIN BEACH'
}

//hOT PLACE
function changeLocationHotPlaceKarangasem1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Karangasem Village, Karangasem District, Karangasem Regency, Bali'
}

function changeLocationHotPlaceKarangasem2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Lempuyang Village, Abang District, Karangasem Regency, Bali'
}

function changeLocationHotPlaceKarangasem3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Ababi Village, Abang District, Karangasem Regency, Bali'
}

function changeLocationHotPlaceKarangasem4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Besakih Village, Rendang District, Karangasem Regency, Bali'
}

function changeLocationHotPlaceKarangasem5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Rendang District, Karangasem Regency, Bali'
}

// <---------- Rest Place ----------> 
function changeImageRestPlaceKarangasem1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Atta-Villa.jpg)'
}

function changeImageRestPlaceKarangasem2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Lempuyang-Boutique-Hotel.jpg)'
}

function changeImageRestPlaceKarangasem3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Lumbung-Seraya-Villa.jpg)'
}

function changeTitleHotelsKarangasem() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Karangasem'
}

function changeTitleHotels1Karangasem() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Atta Villa'
}

function changeTitleHotels2Karangasem() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'Lempuyang Boutique Hotel'
}

function changeTitleHotels3Karangasem() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'Lumbung Seraya Villa'
}

//Rating
function changeRatingHotelsKarangasem1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.7'
}

function changeRatingHotelsKarangasem2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '9.5'
}

function changeRatingHotelsKarangasem3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '8.9'
}


function changeLocationHotels1Karangasem() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Seraya, Karangasem'
}

function changeLocationHotels2Karangasem() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Bukit Lempuyang Streets, Karangasem'
}

function changeLocationHotels3Karangasem() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place in West Seraya, Karangasem'
}

// Klungkung 1
document.getElementById('klungkung1').onclick = function() {
    changeImageKlungkung1()
    changeImageKlungkung2()
    changeImageKlungkung3()
    changeImageKlungkung4()
    changeImageKlungkung5()
    changeTitleKlungkung()
    changeTitleItem1Klungkung()
    changeTitleItem2Klungkung()
    changeTitleItem3Klungkung()
    changeTitleItem4Klungkung()
    changeTitleItem5Klungkung()
    changeImageRestPlaceKlungkung1()
    changeImageRestPlaceKlungkung2()
    changeImageRestPlaceKlungkung3()
    changeTitleHotelsKlungkung()
    changeTitleHotels1Klungkung()
    changeTitleHotels2Klungkung()
    changeTitleHotels3Klungkung()
    changeLocationHotels1Klungkung()
    changeLocationHotels2Klungkung()
    changeLocationHotels3Klungkung()
    changeLocationHotPlaceKlungkung1()
    changeLocationHotPlaceKlungkung2()
    changeLocationHotPlaceKlungkung3()
    changeLocationHotPlaceKlungkung4()
    changeLocationHotPlaceKlungkung5()
    changeRatingHotelsKlungkung1()
    changeRatingHotelsKlungkung2()
    changeRatingHotelsKlungkung3()
}

// <---------- Image ----------> 

function changeTitleKlungkung() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'KLUNGKUNG'
}

function changeImageKlungkung1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/PasihUug.png)'
}

function changeImageKlungkung2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/Kelingking.png)'
}

function changeImageKlungkung3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/Diamond.png)'
}

function changeImageKlungkung4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/KerthaGosa.png)'
}

function changeImageKlungkung5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/JungutBatu.png)'
}

// <------------ Title ---------->

function changeTitleItem1Klungkung() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'PASIH UUG'
}

function changeTitleItem2Klungkung() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'KELINGKING BEACH'
}

function changeTitleItem3Klungkung() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'DIAMOND BEACH'
}

function changeTitleItem4Klungkung() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'KERTHA GOSA'
}

function changeTitleItem5Klungkung() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'JUNGUT BATU BEACH'
}

//hOT PLACE
function changeLocationHotPlaceKlungkung1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Jungut Batu Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Bunga Mekar Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Bunga Mekar Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Pejekutan Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Puputan Klungkung Street, Semarapura Kelod, Klungkung District, Klungkung Regency, Bali'
}

// <---------- Rest Place ----------> 
function changeImageRestPlaceKlungkung1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Kelingking-Hostel.jpg)'
}

function changeImageRestPlaceKlungkung2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Skywatch-cottage.jpg)'
}

function changeImageRestPlaceKlungkung3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Lembongan-Lux-Villas.jpg)'
}

function changeTitleHotelsKlungkung() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Klungkung'
}

function changeTitleHotels1Klungkung() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Kelingking Hostel'
}

function changeTitleHotels2Klungkung() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'Skywatch cottage'
}

function changeTitleHotels3Klungkung() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'Lembongan Lux Villas'
}

//Rating
function changeRatingHotelsKlungkung1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.5'
}

function changeRatingHotelsKlungkung2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '9.7'
}

function changeRatingHotelsKlungkung3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '8.9'
}

function changeLocationHotels1Klungkung() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Nusa Penida, Klungkung'
}

function changeLocationHotels2Klungkung() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Nusa Penida, Klungkung'
}

function changeLocationHotels3Klungkung() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place Jungutbatu, Klungkung'
}

// Klungkung 2
document.getElementById('klungkung2').onclick = function() {
    changeImageKlungkung1()
    changeImageKlungkung2()
    changeImageKlungkung3()
    changeImageKlungkung4()
    changeImageKlungkung5()
    changeTitleKlungkung()
    changeTitleItem1Klungkung()
    changeTitleItem2Klungkung()
    changeTitleItem3Klungkung()
    changeTitleItem4Klungkung()
    changeTitleItem5Klungkung()
    changeImageRestPlaceKlungkung1()
    changeImageRestPlaceKlungkung2()
    changeImageRestPlaceKlungkung3()
    changeTitleHotelsKlungkung()
    changeTitleHotels1Klungkung()
    changeTitleHotels2Klungkung()
    changeTitleHotels3Klungkung()
    changeLocationHotels1Klungkung()
    changeLocationHotels2Klungkung()
    changeLocationHotels3Klungkung()
    changeLocationHotPlaceKlungkung1()
    changeLocationHotPlaceKlungkung2()
    changeLocationHotPlaceKlungkung3()
    changeLocationHotPlaceKlungkung4()
    changeLocationHotPlaceKlungkung5()
    changeRatingHotelsKlungkung1()
    changeRatingHotelsKlungkung2()
    changeRatingHotelsKlungkung3()
}

// <---------- Image ----------> 

function changeTitleKlungkung() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'KLUNGKUNG'
}

function changeImageKlungkung1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/PasihUug.png)'
}

function changeImageKlungkung2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/Kelingking.png)'
}

function changeImageKlungkung3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/Diamond.png)'
}

function changeImageKlungkung4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/KerthaGosa.png)'
}

function changeImageKlungkung5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/JungutBatu.png)'
}

// <------------ Title ---------->

function changeTitleItem1Klungkung() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'PASIH UUG'
}

function changeTitleItem2Klungkung() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'KELINGKING BEACH'
}

function changeTitleItem3Klungkung() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'DIAMOND BEACH'
}

function changeTitleItem4Klungkung() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'KERTHA GOSA'
}

function changeTitleItem5Klungkung() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'JUNGUT BATU BEACH'
}
//hOT PLACE
function changeLocationHotPlaceKlungkung1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Jungut Batu Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Bunga Mekar Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Bunga Mekar Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Pejekutan Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Puputan Klungkung Street, Semarapura Kelod, Klungkung District, Klungkung Regency, Bali'
}

// <---------- Rest Place ----------> 
function changeImageRestPlaceKlungkung1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Kelingking-Hostel)'
}

function changeImageRestPlaceKlungkung2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Skywatch-cottage.jpg)'
}

function changeImageRestPlaceKlungkung3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Lembongan-Lux-Villas.jpg)'
}

function changeTitleHotelsKlungkung() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Klungkung'
}

function changeTitleHotels1Klungkung() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Kelingking Hostel'
}

function changeTitleHotels2Klungkung() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'Skywatch cottage'
}

function changeTitleHotels3Klungkung() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'Lembongan Lux Villas'
}

//Rating
function changeRatingHotelsKlungkung1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.5'
}

function changeRatingHotelsKlungkung2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '9.7'
}

function changeRatingHotelsKlungkung3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '8.9'
}

function changeLocationHotels1Klungkung() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Nusa Penida, Klungkung'
}

function changeLocationHotels2Klungkung() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Nusa Penida, Klungkung'
}

function changeLocationHotels3Klungkung() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place Jungutbatu, Klungkung'
}

// Klungkung 3
document.getElementById('klungkung3').onclick = function() {
    changeImageKlungkung1()
    changeImageKlungkung2()
    changeImageKlungkung3()
    changeImageKlungkung4()
    changeImageKlungkung5()
    changeTitleKlungkung()
    changeTitleItem1Klungkung()
    changeTitleItem2Klungkung()
    changeTitleItem3Klungkung()
    changeTitleItem4Klungkung()
    changeTitleItem5Klungkung()
    changeImageRestPlaceKlungkung1()
    changeImageRestPlaceKlungkung2()
    changeImageRestPlaceKlungkung3()
    changeTitleHotelsKlungkung()
    changeTitleHotels1Klungkung()
    changeTitleHotels2Klungkung()
    changeTitleHotels3Klungkung()
    changeLocationHotels1Klungkung()
    changeLocationHotels2Klungkung()
    changeLocationHotels3Klungkung()
    changeLocationHotPlaceKlungkung1()
    changeLocationHotPlaceKlungkung2()
    changeLocationHotPlaceKlungkung3()
    changeLocationHotPlaceKlungkung4()
    changeLocationHotPlaceKlungkung5()
    changeRatingHotelsKlungkung1()
    changeRatingHotelsKlungkung2()
    changeRatingHotelsKlungkung3()
}

// <---------- Image ----------> 

function changeTitleKlungkung() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'KLUNGKUNG'
}

function changeImageKlungkung1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/PasihUug.png)'
}

function changeImageKlungkung2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/Kelingking.png)'
}

function changeImageKlungkung3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/Diamond.png)'
}

function changeImageKlungkung4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/KerthaGosa.png)'
}

function changeImageKlungkung5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/JungutBatu.png)'
}

// <------------ Title ---------->

function changeTitleItem1Klungkung() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'PASIH UUG'
}

function changeTitleItem2Klungkung() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'KELINGKING BEACH'
}

function changeTitleItem3Klungkung() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'DIAMOND BEACH'
}

function changeTitleItem4Klungkung() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'KERTHA GOSA'
}

function changeTitleItem5Klungkung() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'JUNGUT BATU BEACH'
}
//hOT PLACE
function changeLocationHotPlaceKlungkung1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Jungut Batu Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Bunga Mekar Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Bunga Mekar Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Pejekutan Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Puputan Klungkung Street, Semarapura Kelod, Klungkung District, Klungkung Regency, Bali'
}

// <---------- Rest Place ----------> 
function changeImageRestPlaceKlungkung1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Kelingking-Hostel)'
}

function changeImageRestPlaceKlungkung2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Skywatch-cottage.jpg)'
}

function changeImageRestPlaceKlungkung3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Lembongan-Lux-Villas.jpg)'
}

function changeTitleHotelsKlungkung() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Klungkung'
}

function changeTitleHotels1Klungkung() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Kelingking Hostel'
}

function changeTitleHotels2Klungkung() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'Skywatch cottage'
}

function changeTitleHotels3Klungkung() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'Lembongan Lux Villas'
}

//Rating
function changeRatingHotelsKlungkung1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.5'
}

function changeRatingHotelsKlungkung2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '9.7'
}

function changeRatingHotelsKlungkung3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '8.9'
}

function changeLocationHotels1Klungkung() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Nusa Penida, Klungkung'
}

function changeLocationHotels2Klungkung() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Nusa Penida, Klungkung'
}

function changeLocationHotels3Klungkung() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place Jungutbatu, Klungkung'
}

// Klungkung 4
document.getElementById('klungkung4').onclick = function() {
    changeImageKlungkung1()
    changeImageKlungkung2()
    changeImageKlungkung3()
    changeImageKlungkung4()
    changeImageKlungkung5()
    changeTitleKlungkung()
    changeTitleItem1Klungkung()
    changeTitleItem2Klungkung()
    changeTitleItem3Klungkung()
    changeTitleItem4Klungkung()
    changeTitleItem5Klungkung()
    changeImageRestPlaceKlungkung1()
    changeImageRestPlaceKlungkung2()
    changeImageRestPlaceKlungkung3()
    changeTitleHotelsKlungkung()
    changeTitleHotels1Klungkung()
    changeTitleHotels2Klungkung()
    changeTitleHotels3Klungkung()
    changeLocationHotels1Klungkung()
    changeLocationHotels2Klungkung()
    changeLocationHotels3Klungkung()
    changeLocationHotPlaceKlungkung1()
    changeLocationHotPlaceKlungkung2()
    changeLocationHotPlaceKlungkung3()
    changeLocationHotPlaceKlungkung4()
    changeLocationHotPlaceKlungkung5()
    changeRatingHotelsKlungkung1()
    changeRatingHotelsKlungkung2()
    changeRatingHotelsKlungkung3()
}

// <---------- Image ----------> 

function changeTitleKlungkung() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'KLUNGKUNG'
}

function changeImageKlungkung1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/PasihUug.png)'
}

function changeImageKlungkung2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/Kelingking.png)'
}

function changeImageKlungkung3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/Diamond.png)'
}

function changeImageKlungkung4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/KerthaGosa.png)'
}

function changeImageKlungkung5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/JungutBatu.png)'
}

// <------------ Title ---------->

function changeTitleItem1Klungkung() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'PASIH UUG'
}

function changeTitleItem2Klungkung() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'KELINGKING BEACH'
}

function changeTitleItem3Klungkung() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'DIAMOND BEACH'
}

function changeTitleItem4Klungkung() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'KERTHA GOSA'
}

function changeTitleItem5Klungkung() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'JUNGUT BATU BEACG'
}

//hOT PLACE
function changeLocationHotPlaceKlungkung1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Jungut Batu Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Bunga Mekar Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Bunga Mekar Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Pejekutan Village, Nusa Penida District, Klungkung Regency, Bali'
}

function changeLocationHotPlaceKlungkung5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Puputan Klungkung Street, Semarapura Kelod, Klungkung District, Klungkung Regency, Bali'
}

// <---------- Rest Place ----------> 
function changeImageRestPlaceKlungkung1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Kelingking-Hostel.jpg)'
}

function changeImageRestPlaceKlungkung2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Skywatch-cottage.jpg)'
}

function changeImageRestPlaceKlungkung3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Lembongan-Lux-Villas.jpg)'
}

function changeTitleHotelsKlungkung() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Klungkung'
}

function changeTitleHotels1Klungkung() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Kelingking Hostel'
}

function changeTitleHotels2Klungkung() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'Skywatch cottage'
}

//Rating
function changeRatingHotelsKlungkung1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.5'
}

function changeRatingHotelsKlungkung2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '9.7'
}

function changeRatingHotelsKlungkung3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '8.9'
}

function changeTitleHotels3Klungkung() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'Lembongan Lux Villas'
}

function changeLocationHotels1Klungkung() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Nusa Penida, Klungkung'
}

function changeLocationHotels2Klungkung() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Nusa Penida, Klungkung'
}

function changeLocationHotels3Klungkung() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place Jungutbatu, Klungkung'
}

// Denpasar
document.getElementById('denpasar').onclick = function() {
    changeImageDenpasar1()
    changeImageDenpasar2()
    changeImageDenpasar3()
    changeImageDenpasar4()
    changeImageDenpasar5()
    changeTitleDenpasar()
    changeTitleItem1Denpasar()
    changeTitleItem2Denpasar()
    changeTitleItem3Denpasar()
    changeTitleItem4Denpasar()
    changeTitleItem5Denpasar()
    changeImageRestPlaceDenpasar1()
    changeImageRestPlaceDenpasar2()
    changeImageRestPlaceDenpasar3()
    changeTitleHotelsDenpasar()
    changeTitleHotels1Denpasar()
    changeTitleHotels2Denpasar()
    changeTitleHotels3Denpasar()
    changeLocationHotels1Denpasar()
    changeLocationHotels2Denpasar()
    changeLocationHotels3Denpasar()
    changeLocationHotPlaceDenpasar1()
    changeLocationHotPlaceDenpasar2()
    changeLocationHotPlaceDenpasar3()
    changeLocationHotPlaceDenpasar4()
    changeLocationHotPlaceDenpasar5()
    changeRatingHotelsDenpasar1()
    changeRatingHotelsDenpasar2()
    changeRatingHotelsDenpasar3()
}

// <---------- Image ----------> 

function changeTitleDenpasar() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'DENPASAR'
}

function changeImageDenpasar1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/Sanur.png)'
}

function changeImageDenpasar2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/mangroveForest.png)'
}

function changeImageDenpasar3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/Mertasari.png)'
}

function changeImageDenpasar4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/BajraSandhiMonument.png)'
}

function changeImageDenpasar5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/RenonSquare.png)'
}

// <------------ Title ---------->

function changeTitleItem1Denpasar() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'SANUR BEACH'
}

function changeTitleItem2Denpasar() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'MANGROVE FOREST'
}

function changeTitleItem3Denpasar() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'MERTASARI BEACH'
}

function changeTitleItem4Denpasar() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'BEJRA SANDHI MONUMENT'
}

function changeTitleItem5Denpasar() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'RENON SQUARE'
}

//hOT PLACE
function changeLocationHotPlaceDenpasar1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Renon, East Denpasar, Denpasar City, Bali'
}

function changeLocationHotPlaceDenpasar2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Sanur Kauh, South Denpasar, Denpasar City, Bali'
}

function changeLocationHotPlaceDenpasar3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'By Pass Ngurah Rai Denpasar Street, South Denpasar, Bali'
}

function changeLocationHotPlaceDenpasar4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Mertasari Street, Sanur Kauh, South Denpasar, Denpasar City, Bali'
}

function changeLocationHotPlaceDenpasar5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Puputan Niti Mandala Raya Street, East Denpasar, Denpasar City, Bali'
}

// <---------- Rest Place ----------> 
function changeImageRestPlaceDenpasar1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Ganga-Hotel.jpg)'
}

function changeImageRestPlaceDenpasar2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/The-Banyumas-Villa.jpg)'
}

function changeImageRestPlaceDenpasar3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/D-carik-Bali-Villa.jpg)'
}

function changeTitleHotelsDenpasar() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Denpasar'
}

function changeTitleHotels1Denpasar() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Ganga Hotel'
}

function changeTitleHotels2Denpasar() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'The Banyumas Villa'
}

function changeTitleHotels3Denpasar() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'D Carik Bali Villa'
}

//Rating
function changeRatingHotelsDenpasar1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '7.2'
}

function changeRatingHotelsDenpasar2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '8.2'
}

function changeRatingHotelsDenpasar3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '9.0'
}

function changeLocationHotels1Denpasar() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Kepuh Segina Streets, Denpasar'
}

function changeLocationHotels2Denpasar() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place Tukad Banyumas Streets, Denpasar'
}

function changeLocationHotels3Denpasar() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place in Banjar Semaga Penatih, Denpasar'
}

// Buleleng
document.getElementById('buleleng').onclick = function() {
    changeImageBuleleng1()
    changeImageBuleleng2()
    changeImageBuleleng3()
    changeImageBuleleng4()
    changeImageBuleleng5()
    changeTitleBuleleng()
    changeTitleItem1Buleleng()
    changeTitleItem2Buleleng()
    changeTitleItem3Buleleng()
    changeTitleItem4Buleleng()
    changeTitleItem5Buleleng()
    changeImageRestPlaceBuleleng1()
    changeImageRestPlaceBuleleng2()
    changeImageRestPlaceBuleleng3()
    changeTitleHotelsBuleleng()
    changeTitleHotels1Buleleng()
    changeTitleHotels2Buleleng()
    changeTitleHotels3Buleleng()
    changeLocationHotels1Buleleng()
    changeLocationHotels2Buleleng()
    changeLocationHotels3Buleleng()
    changeLocationHotPlaceBuleleng1()
    changeLocationHotPlaceBuleleng2()
    changeLocationHotPlaceBuleleng3()
    changeLocationHotPlaceBuleleng4()
    changeLocationHotPlaceBuleleng5()
    changeRatingHotelsBuleleng1()
    changeRatingHotelsBuleleng2()
    changeRatingHotelsBuleleng3()
}

// <---------- Image ----------> 

function changeTitleBuleleng() {
    var title = document.getElementById('title-hot-place2')
    title.innerHTML = 'BULELENG'
}

function changeImageBuleleng1() {
    var element = document.getElementById('item2')
    element.style.backgroundImage = 'url(assets/Sekumpul.png)'
}

function changeImageBuleleng2() {
    var element = document.getElementById('item3')
    element.style.backgroundImage = 'url(assets/Tamblingan.png)'
}

function changeImageBuleleng3() {
    var element = document.getElementById('item4')
    element.style.backgroundImage = 'url(assets/HotSpringBanjar.png)'
}

function changeImageBuleleng4() {
    var element = document.getElementById('item5')
    element.style.backgroundImage = 'url(assets/AlingAling.png)'
}

function changeImageBuleleng5() {
    var element = document.getElementById('item1')
    element.style.backgroundImage = 'url(assets/Gitgit.png)'
}

// <------------ Title ---------->

function changeTitleItem1Buleleng() {
    var element = document.getElementById('title-item2')
    element.innerHTML = 'SEKUMPUL WATERFALL'
}

function changeTitleItem2Buleleng() {
    var element = document.getElementById('title-item3')
    element.innerHTML = 'TAMBLINGAN LAKE'
}

function changeTitleItem3Buleleng() {
    var element = document.getElementById('title-item4')
    element.innerHTML = 'HOT SPRING BANJAR'
}

function changeTitleItem4Buleleng() {
    var element = document.getElementById('title-item5')
    element.innerHTML = 'ALING-ALING WATERFALL'
}

function changeTitleItem5Buleleng() {
    var element = document.getElementById('title-item1')
    element.innerHTML = 'GITGIT WATERFALL'
}


//hOT PLACE
function changeLocationHotPlaceBuleleng1() {
    var element = document.getElementById('location-hot-place1')
    element.innerHTML = 'Gitgit Village, Sukasada District, Buleleng Regency, Bali'
}

function changeLocationHotPlaceBuleleng2() {
    var element = document.getElementById('location-hot-place2')
    element.innerHTML = 'Sekumpul Village, Sawan District, Buleleng Regency, Bali'
}

function changeLocationHotPlaceBuleleng3() {
    var element = document.getElementById('location-hot-place3')
    element.innerHTML = 'Munduk Village, Banjar District, Buleleng Regency, Bali'
}

function changeLocationHotPlaceBuleleng4() {
    var element = document.getElementById('location-hot-place4')
    element.innerHTML = 'Banjar Street, Banjar District, Buleleng Regency, Bali'
}

function changeLocationHotPlaceBuleleng5() {
    var element = document.getElementById('location-hot-place5')
    element.innerHTML = 'Sambangan Village, Sukasada District, Buleleng Regency, Bali'
}


// <---------- Rest Place ----------> 
function changeImageRestPlaceBuleleng1() {
    var element = document.getElementById('div1-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Rostika-Villa.jpg)'
}

function changeImageRestPlaceBuleleng2() {
    var element = document.getElementById('div2-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/Melamun-hotel.jpg)'
}

function changeImageRestPlaceBuleleng3() {
    var element = document.getElementById('div3-image-example-rest-place')
    element.style.backgroundImage = 'url(assets/The-Bali-Menjangan-Boutique-Villas-Dive-Center.jpg)'
}

function changeTitleHotelsBuleleng() {
    var element = document.getElementById('rest-place-title')
    element.innerHTML = 'Find your rest place in Buleleng'
}

function changeTitleHotels1Buleleng() {
    var element = document.getElementById('title-hotels1')
    element.innerHTML = 'Rostika Villa'
}

function changeTitleHotels2Buleleng() {
    var element = document.getElementById('title-hotels2')
    element.innerHTML = 'Melamun Hotel'
}

function changeTitleHotels3Buleleng() {
    var element = document.getElementById('title-hotels3')
    element.innerHTML = 'The Bali Menjangan Boutique Villas'
}

//Rating
function changeRatingHotelsBuleleng1() {
    var element = document.getElementById('rating-hotels1')
    element.innerHTML = '9.4'
}

function changeRatingHotelsBuleleng2() {
    var element = document.getElementById('rating-hotels2')
    element.innerHTML = '7.5'
}

function changeRatingHotelsBuleleng3() {
    var element = document.getElementById('rating-hotels3')
    element.innerHTML = '9.2'
}

function changeLocationHotels1Buleleng() {
    var element = document.getElementById('location-hotels1')
    element.innerHTML = 'Place in Sekumpul, Sawan'
}

function changeLocationHotels2Buleleng() {
    var element = document.getElementById('location-hotels2')
    element.innerHTML = 'Place in Kalibubuk, Lovina'
}

function changeLocationHotels3Buleleng() {
    var element = document.getElementById('location-hotels3')
    element.innerHTML = 'Place in Pemuteran Village, Gerokgak'
}








document.getElementById('header-phone').onclick = function() {
    let element = document.querySelector('.div-nav-a-phone');
    if (element.style.display == 'flex') {
        element.style.display = 'none'
    }

    else {
        element.style.display = 'flex'
    }
}