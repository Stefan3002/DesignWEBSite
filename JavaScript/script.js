function ExtendFooter() {
    console.log("dsadas")
    const content = `
    <div class="ExtendedFooterItem">
    <img class="Left" src="Images/SocialMedia%20Icons/Facebook.png">
    </div>
    <div class="ExtendedFooterItem">
    <img class="MiddleUp" src="../Images/Twitter.png">
    </div>
    <div class="ExtendedFooterItem">
    <img class="MiddlePopUp" src="../Images/SocialMedia%20Icons/Instagram.png">
    </div>
    <div class="ExtendedFooterItem">
    <img class="MiddleDown" src="../Images/SocialMedia%20Icons/Mail.png">
    </div>
    <div class="ExtendedFooterItem">
    <img class="Right" src="../Images/SocialMedia%20Icons/LinkedIn.png">
    </div>
    <img class="Right" onclick="RemoveFooter()" src="../Images/SocialMedia%20Icons/Minus.png">
    
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
