const container_noty = document.getElementById("container_noty");
const evento = document.getElementById("evento");
const cabecario = document.getElementById("cabecario");
const sucesso = document.getElementById("sucesso");
const progress = document.getElementById("progress");
const conteudo = document.getElementById("conteudo");
const erro = document.getElementById("erro");
const alerta = document.getElementById("alerta");

sucesso.addEventListener("click", () => {

    sucesso.innerText = "Sucesso..."
    sucesso.disabled = true

    const novoType = document.createElement("h4");
    novoType.setAttribute("class", "type")
    novoType.innerText = "Sucesso"
    progress.classList.add("progress")

    const novoConteudo = document.createElement("p");
    novoConteudo.innerText = "Usuario cadastrado com sucesso!!"

    cabecario.appendChild(novoType)
    cabecario.classList.add("cabecario")

    container_noty.classList.add("container_noty")

    conteudo.appendChild(novoConteudo)
    conteudo.classList.add("conteudo")

    setTimeout(() => {
        container_noty.classList.add("sair")
        novoType.innerHTML = ""
            sucesso.innerText = "Sucesso"
            novoConteudo.innerText = ""
            sucesso.disabled = false
            progress.classList.remove("progress")
    }, 5000)
    container_noty.classList.remove("sair")

})

erro.addEventListener("click", () => {
    
    erro.innerText = "erro..."
    erro.disabled = true

    const novoType = document.createElement("h4");
    novoType.setAttribute("class", "type")
    novoType.innerText = "Erro"
    progress.classList.add("progress_erro")

    const novoConteudo = document.createElement("p");
    novoConteudo.innerText = "Erro ao cadastrar usuario!!"

    cabecario.appendChild(novoType)
    cabecario.classList.add("cabecario_erro")

    container_noty.classList.add("container_noty")

    conteudo.appendChild(novoConteudo)
    conteudo.classList.add("conteudo")

    setTimeout(() => {
        container_noty.classList.add("sair")
        novoType.innerHTML = ""
            erro.innerText = "erro"
            novoConteudo.innerText = ""
            erro.disabled = false
            cabecario.classList.remove("cabecario_erro")
    }, 5000)
    container_noty.classList.remove("sair")

})

alerta.addEventListener("click", () => {
     
    alerta.innerText = "alerta..."
    alerta.disabled = true

    const novoType = document.createElement("h4");
    novoType.setAttribute("class", "type")
    novoType.innerText = "alerta"
    progress.classList.add("progress_alerta")

    const novoConteudo = document.createElement("p");
    novoConteudo.innerText = "alerta ao cadastrar usuario!!"

    cabecario.appendChild(novoType)
    cabecario.classList.add("cabecario_alerta")

    container_noty.classList.add("container_noty")

    conteudo.appendChild(novoConteudo)
    conteudo.classList.add("conteudo")

    setTimeout(() => {
        container_noty.classList.add("sair")
        novoType.innerHTML = ""
            alerta.innerText = "alerta"
            novoConteudo.innerText = ""
            alerta.disabled = false
            progress.classList.add("progress_alerta")
    }, 5000)
    container_noty.classList.remove("sair")
})
