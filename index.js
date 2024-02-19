/* get rating choices  */
const star1 = document.getElementById("star1")
const star2 = document.getElementById("star2")
const star3 = document.getElementById("star3")
const star4 = document.getElementById("star4")
const star5 = document.getElementById("star5")

const submitBtn = document.getElementById("submit-btn")
const modal = document.getElementById("modal")
const container = document.getElementById("container")

const ratingNum = document.getElementById("rating-num")
const inputRadio = document.querySelector(".input-radio")
console.log(inputRadio)
const labels = document.querySelector(".labels")



submitBtn.addEventListener('click', onSubmit)

function onSubmit(){
    container.style.display = "none"
    modal.style.display = "flex"
    selectedStar()
    
}


function selectedStar(){
  if(star1.checked ){
    return ratingNum.innerHTML = 1
  } else if(star2.checked){
    return ratingNum.innerHTML = 2
  }else if(star3.checked){
    return ratingNum.innerHTML = 3
  }else if(star4.checked){
    return ratingNum.innerHTML = 4
  }else if(star5.checked){
    return ratingNum.innerHTML = 5
  }else{
    container.style.display = "flex"
    modal.style.display = "none"
    alert('Please select rating')
  }
}


inputRadio.addEventListener('change', function(){
  if(inputRadio.checked){
    labels.classList.add("radio-container")
    console.log('checked')
  }
  
})
      
