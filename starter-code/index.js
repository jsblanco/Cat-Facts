const factsArray = ["70% of your cat's life is spent asleep.", "The cat has 500 skeletal muscles (humans have 650)."]

let url = 'https://catfact.ninja/fact/' // Visit https://catfact.ninja/ to read the documentation.

const catList = document.getElementById("cat-facts-list")
const catFacts = []
const newFact = document.getElementById("add-button")
const deleteFact = document.getElementById("remove-button")
const input = document.getElementById("number-input")
const h1 = document.getElementsByTagName("h1")[0]
let numberOfTimes= input.value


// ITERACIÓN 1: Añade las dos curiosidades de la array para que se despliegen en la lista del HTML.
function addFact(){
factsArray.map(function(facts) {
    let newLi =document.createElement("li");
    newLi.innerText=facts;
    catList.appendChild(newLi)
})
}

newFact.onclick=()=>{
    if (isValidNumber() === true) {
    for (let i=0; i< numberOfTimes; i++){
    addFactFromApi()
    }
}
}

// ITERACIÓN 2: Cada vez que el usuario pulse el botón de Remove a cat fact, elimina el último elemento de la lista. 

deleteFact.onclick=()=> {
    if (isValidNumber() === true) {
    for (let i=0; i< numberOfTimes; i++){
    catList.removeChild(catList.lastChild)
        }
    }
}

// ITERACIÓN 3: Cada vez que el usuario pulse el botón de añadir una curiosidad
// llama a la API y añade una curiosidad Random. 
// ITERACIÓN 3.BONUS: Asegurate de que nunca se despliegen curiosidades repetidas.

function addFactFromApi(){
    fetch("https://catfact.ninja/fact/")
        .then (response => response.json())
        .then (data => {
            if (catFacts.includes(data.fact) === false){
                let newLi = document.createElement("li");
                newLi.innerText = data.fact
                catList.appendChild(newLi)
                catFacts.push(data.fact)
                } else (addFactionFromApi())
            }
        )
    }
    
// ITERACIÓN 4: Añade un elemento input al HTML de tipo number.
//Cuando el usuario cambie el número de este input cambia el texto de los botones 
//para que aparezca "Add / Remove x cat facts"
    
    
    input.addEventListener("change", updateNumbers)
        
    function updateNumbers() {let value = input.value;
        newFact.innerText=`Add ${value} cat facts`
        deleteFact.innerText = `Remove ${value} cat facts`
        numberOfTimes=value
    }
    
    
// ITERACIÓN 4.1: modifica las funciónes anteriores para que al hacer click en el botón 
//se añadan o quiten este número de curiosidades. 

function isValidNumber(){
    if (numberOfTimes <=0){
        h1.innerText = "Cat facts - Please input a valid number"
        return false
    } else {
        h1.innerText = "Cat facts"
        return true
    }
}