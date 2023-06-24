let imgBox = document.querySelector(".img-box")
let btnOne = document.querySelector(".one")
let btnTwo = document.querySelector(".two")
let btnThree = document.querySelector(".three")
let btnFour = document.querySelector(".four")


btnOne.addEventListener('click', function() {
  imgBox.style.marginLeft = "0px"
})

btnTwo.addEventListener('click', function() {
  imgBox.style.marginLeft = "-600px"
})

btnThree.addEventListener('click', function() {
  imgBox.style.marginLeft = "-1200px"
})

btnFour.addEventListener('click', function() {
  imgBox.style.marginLeft = "-1800px"
})
