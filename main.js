const numberrand = Math.round(Math.random() * 10)
let acerts = 1

function botao(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inpnumber")

    if(Number(inputNumber.value) == numberrand) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `você acertou com ${acerts} tentativas!`
    }

    inputNumber.value = ""
    acerts++
}

const clicktent = document.querySelector("#clicktent")
const clickreturn = document.querySelector("#clickreturn")
//você cria o botão aqui para depois fazer a função dele


//eventos
//no caso, a funcão criada é essa a baixo!
clicktent.addEventListener('click', botao)
clickreturn.addEventListener('click', function() {

    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")

    acerts = 1
})