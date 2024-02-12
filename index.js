const inputNom = document.querySelector("#inputnom");
const boutonSubmit = document.querySelector("#form");

boutonSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(inputNom.value)
    if (inputNom.value == ""||inputNom.value.length < 3||inputNom.value.length > 25||inputNom.value === "afpa"||inputNom.value === "root") {
        console.log("marche pô")
    }
})
function isBetween(length,min,max) {

}