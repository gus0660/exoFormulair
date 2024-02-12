const inputNom = document.querySelector("#inputnom");
const boutonSubmit = document.querySelector("#form");

boutonSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(inputNom.value)
    const min = 3;
    const max = 25;
    if (!isBetween(inputNom.value.length,min, max)) {
        console.log("marche pô")
    };
        // console.log("marche pô")
    
})

function isBetween(length,min,max) {
    
    if (length<min||length>max) {
        return false
    }else{
        return true
    }
}
// const regex = new RegExp('["afpa", "root", "deus"]')