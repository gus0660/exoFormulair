const inputNom = document.querySelector("#inputnom");
const boutonSubmit = document.querySelector("#form");

boutonSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(inputNom.value)
    isBetween();
        // console.log("marche pô")
    
})

function isBetween(length,min,max) {
    const min = 3;
    const max = 25;
    if (length<min||length>max) {
        return false
    }else{
        return true
    }
}