console.log("connected")

//variable definitions below!
let userCount = 890345
//random number
let nowWaiting = document.querySelector("#count")
//displays in count div
let inviteButton = document.querySelector("#requestInvite")
let reviewButton = document.querySelector("#readReviews")
let browseButton=document.querySelector("#browse")
let listingImg=document.querySelector("#imagePic")

initializeUserCount();

inviteButton.addEventListener("click", e=> {
  changeUserCount();
  changeButton(inviteButton, "REQUEST SENT");
})

reviewButton.addEventListener("click", e=> {
  changeButton(reviewButton,"COMING SOON");
})

browseButton.addEventListener("click", e=> {
  listingImg.innerHTML=`<img src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/399040/65f7707b673e73ac43f5206e9261ab5e933eed4b.jpg" height=150>`
})

//all functions are defined here
function initializeUserCount(){
  nowWaiting.innerHTML=`<p>OVER ${userCount} WAITING TO STAY</p>`
}

function changeUserCount(){
  userCount += 1
  nowWaiting.innerHTML=`<p>OVER ${userCount} WAITING TO STAY</p>`
}

function changeButton(theButton, theInsides){
    console.log(`clicked ${theButton}`)
    theButton.innerHTML=`<h6>${theInsides}</h6>`
    theButton.style.backgroundColor=`#4E5C57`
    theButton.style.opacity=`0.9`
}
