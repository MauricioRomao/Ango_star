// -função para o menu

function active_modal() {
    // -vars
    const active_modal = document.querySelector('.active_modal')
    const modal = document.querySelector('.modal')


    // 
    active_modal.style.display = 'none'
    modal.style.display = 'block'

}
function close_modal() {
    const active_modal = document.querySelector('.active_modal')
    const modal = document.querySelector('.modal')
    // exe.bat
    active_modal.style.display = 'block'
    modal.style.display = 'none'
}


// logon
function login() {


}
// cancelar o login
function logon_btn_concluido() {
    const modal = document.querySelector('.modalLogon')
    modal.style.display = 'none'

}


// evento para dar close no modal

function Modal_login() {
    const modal = document.querySelector('.modalLogon').style.display = 'flex'
}



function editar_user() {
    const abrir_editor = document.querySelector('.Editor')
    abrir_editor.style.display = 'block'
    const modalLogon=document.querySelector('.contentLogon')
    modalLogon.style.display='none'

}
function fechar_editor() {
    const abrir_editor = document.querySelector('.Editor')
    abrir_editor.style.display = 'none'
    const modalLogon=document.querySelector('.contentLogon')
    modalLogon.style.display='block'

}
function indes(){
    alert("Indesponivel de momento")
}
// PEGAR O NOME
function feito() {
    const abrir_editor = document.querySelector('.Editor')
    const EditadoNome = document.querySelector('.EditadoNome')
    const Usernome = document.querySelector('.Usernome')
    const modalLogon=document.querySelector('.contentLogon')
    modalLogon.style.display='block'

    Usernome.innerHTML = `" ${EditadoNome.value} "` 
    abrir_editor.style.display = 'none'
    localStorage.setItem('Nome', JSON.stringify(EditadoNome.value))



}
function pegarDOlocalStorage() {

    const Usernome = document.querySelector('.Usernome')
    const pegar = localStorage.getItem('Nome')
    Usernome.innerHTML = pegar
}
pegarDOlocalStorage()