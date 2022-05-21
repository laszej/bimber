const container = document.getElementById("container")

const ladies = [{id:0, name: "Daria", age: 23, place: "Poznań", image:"ladies/daria.png"},
 { name: "Paulina", age: 23, place: "Poznań", image:"ladies/paulina.png"},
  { name: "Ania", age: 24, place: "Poznań", image:"ladies/ania.png"}, 
  { name: "Karina", age: 19, place: "Poznań", image:"ladies/karina.png"},
   {name: "Ola", age: 27, place: "Poznań", image:"ladies/ola.png"}, 
   {name: "Joanna", age: 26, place: "Poznań", image:"ladies/joanna.png"},
   {name: "Marta", age: 23, place: "Poznań", image:"ladies/marta.png"},
   {name: "Katarzyna", age: 23, place: "Poznań", image:"ladies/katarzyna.png"},
   {name: "Lidia", age: 23, place: "Poznań", image:"ladies/lidia.png"},
   {name: "Ewelina", age: 23, place: "Poznań", image:"ladies/ewelina.png"},
   {name: "Joanna", age: 23, place: "Poznań", image:"ladies/joanna.png"},
   {name: "Martyna", age: 23, place: "Poznań", image:"ladies/martyna.png"},
   {name: "Hanna", age: 23, place: "Poznań", image:"ladies/hanna.png"},
   {name: "Magda", age: 23, place: "Poznań", image:"ladies/magda.png"},
   {name: "Monika", age: 23, place: "Poznań", image:"ladies/monika.png"},
   {name: "Gosia", age: 23, place: "Poznań", image:"ladies/gosia.png"},
]

function randomNumber(){
   return Math.floor(Math.random() * ladies.length)
}


function randomLady(){
   let random = randomNumber()
   let randomLady = ladies[random]

   const opis = document.createElement("div")
   opis.innerHTML = `${randomLady.name} | ${randomLady.age} | ${randomLady.place} `
   opis.style.marginTop = "auto"
   opis.style.width= "150px"
   opis.style.height= "35px"
   opis.style.backgroundColor="grey"

   const likes =  document.createElement("div")
   likes.classList.add("likes")

   const yes = document.createElement("img")
   yes.setAttribute("src", "yes.svg")
   yes.classList.add("like")

   const no = document.createElement("img")
   no.setAttribute("src", "no.svg")
   no.classList.add("like")

   likes.append(no, yes)
   
   let card = document.createElement("div")
   card.appendChild(opis)
   card.appendChild(likes)
   card.classList.add("personCard")
   card.style.backgroundImage = `url("${randomLady.image}")`
   container.appendChild(card)
   yes.addEventListener("click", ()=>{location.reload()})
   no.addEventListener("click", ()=>{location.reload()})
  
}

randomLady()
