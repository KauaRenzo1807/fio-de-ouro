const botaoInstalar = document.getElementById("install-button");
const msgInstalar = document.getElementById("install-message");
let eventoInstalacao = null;

//2
window.addEventListener("beforeinstallprompt", (event) =>{
    
    event.preventDefault();

    eventoInstalacao = event;

    botaoInstalar.hidden = false;
   

    msgInstalar.textContent = "Essa aplicação pode ser instalada";

});

//3

botaoInstalar.addEventListener("click" , () =>{
    if (!eventoInstalacao){
        return;
    }

    eventoInstalacao.prompt();


    botaoInstalar.hidden = true;

});


//4
window.addEventListener("appinstalled" , (event)=>{
    msgInstalar.textContent = "O app foi instalado com sucesso. Abra o app"
    botaoInstalar.hidden = true;
    eventoInstalacao= null;
});