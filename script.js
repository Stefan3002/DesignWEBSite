function ExtendFooter() {
    console.log("dsadas")
    const content = `
    <div class="ExtendedFooterItem">
    <img class="Left" src="Images/SocialMedia Icons/Facebook.png">
    </div>
    <div class="ExtendedFooterItem">
    <img class="MiddleUp" src="Images/SocialMedia Icons/Twitter.png">
    </div>
    <div class="ExtendedFooterItem">
    <img class="MiddlePopUp" src="Images/SocialMedia Icons/Instagram.png">
    </div>
    <div class="ExtendedFooterItem">
    <img class="MiddleDown" src="Images/SocialMedia Icons/Mail.png">
    </div>
    <div class="ExtendedFooterItem">
    <img class="Right" src="Images/SocialMedia Icons/LinkedIn.png">
    </div>
    <img class="Right" onclick="RemoveFooter()" src="Images/SocialMedia Icons/Minus.png">
    
`

    if(!(document.querySelector("#ExtendedFooter"))){
        const element = document.createElement("section")
        element.id = "ExtendedFooter"
        const Footer = document.querySelector("#ExtendedFooterContainer")
        element.innerHTML = content
        const plusButton = document.querySelector(".SeeMore")
        // plusButton.setAttribute("src","Images/SocialMedia%20Icons/Minus.png")
        Footer.appendChild(element)
    }
}
function RemoveFooter(){
    const ExtendedFooter = document.querySelector("#ExtendedFooter")
    if(ExtendedFooter)
        ExtendedFooter.remove()

}

window.addEventListener("scroll", function(){CalculateScroller()})

function CalculateScroller(){
    // console.log("TEST")
    let ScrollTop = document.documentElement.scrollTop // Cati pixeli am dat scroll
    let ScrollHeight = document.documentElement.scrollHeight // Cati pixeli sunt in total
    // p/100 * ScrollHeight = ScrollTop // Cat la suta din (pixelii totali) reprezinta cat (pixeli am dat eu scroll)
    let Traversed = Math.round((100 * ScrollTop) / ScrollHeight)
    // console.log(ScrollTop,ScrollHeight, Traversed)
    let ProgressBar = document.querySelector("#ScrollerBar")
    ProgressBar.style.width= Traversed + '%'
    if(Traversed > 5)
        ProgressBar.innerHTML = Traversed + '%'
    else
        ProgressBar.innerHTML = ""
}