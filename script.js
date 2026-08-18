/* DADOS DAS OCORRÊNCIAS */
const ocorrencias = [
  {
    maquina: "M001",
    imagem: "https://placehold.co",
    status: "Aberta",
    prioridade: "Crítica",
    tecnico: "Carlos Silva",
    setor: "Produção",
    data: "03/08/2026",
    descricao: "Vibração excessiva detectada no motor principal.",
  },
  {
    maquina: "M002",
    imagem: "https://placehold.co",
    status: "Em manutenção",
    prioridade: "Alta",
    tecnico: "Ana Souza",
    setor: "Acabamento",
    data: "02/08/2026",
    descricao: "Temperatura acima do limite recomendado.",
  },
  {
    maquina: "M003",
    imagem: "https://placehold.co",
    status: "Resolvida",
    prioridade: "Baixa",
    tecnico: "Marcos Oliveira",
    setor: "Corte",
    data: "01/08/2026",
    descricao: "Substituição preventiva realizada.",
  },
  {
    maquina: "M004",
    imagem: "https://placehold.co",
    status: "Em análise",
    prioridade: "Média",
    tecnico: "João Santos",
    setor: "Produção",
    data: "31/07/2026",
    descricao: "Ruído identificado durante operação.",
  },
  {
    maquina: "M005",
    imagem: "https://placehold.co",
    status: "Aberta",
    prioridade: "Alta",
    tecnico: "Fernanda Lima",
    setor: "Fiação",
    data: "30/07/2026",
    descricao: "Falha intermitente no painel elétrico.",
  },
  {
    maquina: "M006",
    imagem: "https://placehold.co",
    status: "Resolvida",
    prioridade: "Média",
    tecnico: "Pedro Costa",
    setor: "Embalagem",
    data: "29/07/2026",
    descricao: "Sensor substituído durante manutenção.",
  },
  {
    maquina: "M007",
    imagem: "https://placehold.co",
    status: "Em manutenção",
    prioridade: "Crítica",
    tecnico: "Lucas Mendes",
    setor: "Produção",
    data: "28/07/2026",
    descricao: "Parada total do equipamento.",
  },
  {
    maquina: "M008",
    imagem: "https://placehold.co",
    status: "Aberta",
    prioridade: "Média",
    tecnico: "Mariana Alves",
    setor: "Controle",
    data: "27/07/2026",
    descricao: "Oscilação de energia identificada.",
  },
  {
    maquina: "M009",
    imagem: "https://placehold.co",
    status: "Em análise",
    prioridade: "Alta",
    tecnico: "Ricardo Souza",
    setor: "Fiação",
    data: "26/07/2026",
    descricao: "Necessária avaliação técnica.",
  },
  {
    maquina: "M010",
    imagem: "https://placehold.co",
    status: "Resolvida",
    prioridade: "Baixa",
    tecnico: "Paulo Lima",
    setor: "Expedição",
    data: "25/07/2026",
    descricao: "Manutenção preventiva concluída.",
  },
];

const container = document.querySelector("#lista-ocorrencias");
const campoBusca = document.querySelector("#campo-busca");
const filtroStatus = document.querySelector("#filtro-status");
const filtroPrioridade = document.querySelector("#filtro-prioridade");

function criarCard(ocorrencia) {
  const card = document.createElement("div");
  card.classList.add("card-ocorrencia");

  const imagem = document.createElement("img");
  imagem.classList.add("imagem-maquina");
  imagem.src = ocorrencia.imagem;
  imagem.alt = "Imagem da máquina " + ocorrencia.maquina;

  const titulo = document.createElement("h2");
  titulo.innerText = "Máquina: " + ocorrencia.maquina;

  const status = document.createElement("p");
  status.classList.add("status");
  status.innerText = "Status: " + ocorrencia.status;

  const prioridade = document.createElement("p");
  prioridade.innerText = "Prioridade: " + ocorrencia.prioridade;

  if (ocorrencia.prioridade === "Crítica") prioridade.classList.add("prioridade-critica");
  if (ocorrencia.prioridade === "Alta") prioridade.classList.add("prioridade-alta");
  if (ocorrencia.prioridade === "Média") prioridade.classList.add("prioridade-media");
  if (ocorrencia.prioridade === "Baixa") prioridade.classList.add("prioridade-baixa");

  const tecnico = document.createElement("p");
  tecnico.innerText = "Técnico: " + ocorrencia.tecnico;

  const setor = document.createElement("p");
  setor.innerText = "Setor: " + ocorrencia.setor;

  const data = document.createElement("p");
  data.innerText = "Data: " + ocorrencia.data;

  const descricao = document.createElement("p");
  descricao.innerText = ocorrencia.descricao;

  const botao = document.createElement("button");
  botao.innerText = "Ver detalhes";
  botao.classList.add("botao-detalhes");

  botao.addEventListener("click", function () {
    alert(
      "Máquina: " + ocorrencia.maquina +
      "\n\nStatus: " + ocorrencia.status +
      "\nPrioridade: " + ocorrencia.prioridade +
      "\n\nDescrição: " + ocorrencia.descricao
    );
  });

  card.appendChild(imagem);
  card.appendChild(titulo);
  card.appendChild(status);
  card.appendChild(prioridade);
  card.appendChild(tecnico);
  card.appendChild(setor);
  card.appendChild(data);
  card.appendChild(descricao);
  card.appendChild(botao);

  container.appendChild(card);
}

function filtrarOcorrencias() {
  const texto = campoBusca.value.toLowerCase();
  const statusSelecionado = filtroStatus.value;
  const prioridadeSelecionada = filtroPrioridade.value;

  container.innerHTML = "";

  ocorrencias.forEach(function (ocorrencia) {
    const encontrouTexto =
      ocorrencia.maquina.toLowerCase().includes(texto) ||
      ocorrencia.descricao.toLowerCase().includes(texto);

    const encontrouStatus =
      statusSelecionado === "Todos" || ocorrencia.status === statusSelecionado;

    const encontrouPrioridade =
      prioridadeSelecionada === "Todas" || ocorrencia.prioridade === prioridadeSelecionada;

    if (encontrouTexto && encontrouStatus && encontrouPrioridade) {
      criarCard(ocorrencia);
    }
  });
}

campoBusca.addEventListener("input", filtrarOcorrencias);
filtroStatus.addEventListener("change", filtrarOcorrencias);
filtroPrioridade.addEventListener("change", filtrarOcorrencias);

// Executa a carga inicial dos dados
filtrarOcorrencias();

/* =====================================================
CONTROLE DE INSTALAÇÃO DO APLICATIVO (PWA)
===================================================== */
let disparadorInstalacao;
const blocoInstalacao = document.querySelector("#bloco-instalacao");
const btnInstalar = document.querySelector("#btn-instalar");

window.addEventListener("beforeinstallprompt", function (evento) {
  evento.preventDefault();
  disparadorInstalacao = evento;
  blocoInstalacao.style.display = "block"; // Mostra o banner na tela web
});

btnInstalar.addEventListener("click", function () {
  if (disparadorInstalacao) {
    disparadorInstalacao.prompt();
    disparadorInstalacao.userChoice.then(function (escolha) {
      if (escolha.outcome === "accepted") {
        console.log("Usuário aceitou a instalação.");
      }
      blocoInstalacao.style.display = "none";
      disparadorInstalacao = null;
    });
  }
});

window.addEventListener("appinstalled", function () {
  blocoInstalacao.style.display = "none";
  console.log("Aplicativo Fio de Ouro instalado com sucesso!");
});

/* REGISTRO DO SERVICE WORKER */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js")
      .then(function (reg) {
        console.log("Service Worker registrado no escopo:", reg.scope);
      })
      .catch(function (erro) {
        console.error("Falha ao registrar o Service Worker:", erro);
      });
  });
}
