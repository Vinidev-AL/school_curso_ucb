//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

// Aqui se inicia a parte para quando clicarmos em "Matricula-se" abrir a area de matricula 

let btn_matricula = document.getElementById("btn_mat")
let area_de_matricula = document.getElementById("div_matricula")
let header = document.querySelector("header")
let section = document.querySelector("section")

btn_matricula.addEventListener("click", matricule_se)



function matricule_se() {
     area_de_matricula.style.display = "block"

     section.style.filter = "blur(4px)"
     header.style.filter = "blur(4px)"

     section.style.pointerEvents = "none"
     header.style.pointerEvents = "none"
}

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

// Aqui se inicia a parte para quando clicarmos em "Sair" fechar a area de matricula 

let btn_sair_matricula = document.querySelector('#btn_sair_matricula');

btn_sair_matricula.addEventListener("click", sair_matricula)

function sair_matricula() {

     area_de_matricula.style.display = "none"

     section.style.filter = "none"
     header.style.filter = "none"

     section.style.pointerEvents = "all"
     header.style.pointerEvents = "all"
}

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

// Aqui se inicia a parte para quando clicarmos em "Agende" abrir a area de agende uma visita
let area_de_agendamento = document.querySelector('#div_agendamento')
let btn_agende = document.querySelector('#btn_agen')
btn_agende.addEventListener("click", agende_visita)

function agende_visita() {
    area_de_agendamento.style.display = "block"

     section.style.filter = "blur(4px)"
     header.style.filter = "blur(4px)"

     section.style.pointerEvents = "none"
     header.style.pointerEvents = "none"
}

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

// Aqui se inicia a parte para quando clicarmos em "Sair" fechar a area de agendamento

let btn_sair_agendamento = document.querySelector('#btn_sair_agendamento');

btn_sair_agendamento.addEventListener("click", sair_agendamento)

function sair_agendamento() {

     area_de_agendamento.style.display = "none"

     section.style.filter = "none"
     header.style.filter = "none"

     section.style.pointerEvents = "all"
     header.style.pointerEvents = "all"
}
