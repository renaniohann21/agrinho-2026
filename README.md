# agrinho-2026
Agro Forte e Sustentavel
Uma landing page interativa e responsiva desenvolvida para ilustrar o conceito de que a forca do agronegocio e a preservacao ambiental devem caminhar juntas. O projeto aborda os principais pilares de uma agricultura moderna e ecologica, incluindo uma ferramenta interativa para simular o impacto ambiental de uma fazenda.

Objetivo do Projeto
O principal objetivo deste site e educar e conscientizar sobre praticas agricolas sustentaveis. Ele demonstra visualmente e de forma interativa como pequenas mudancas nas praticas de cultivo, como o uso de bioinsumos ou tecnologias de precisao, podem aumentar o indice de sustentabilidade de uma producao.

Funcionalidades
Design Responsivo: A interface adapta-se a computadores, tablets e smartphones utilizando Flexbox e Grid.

Secao Informativa: Explicacao detalhada sobre quatro pilares essenciais do agro sustentavel: Rotacao de Culturas, Plantio Direto, Uso de Bioinsumos e Tecnologia de Precisao.

Simulador Interativo de Sustentabilidade: Um painel dinamico onde o usuario pode ativar diferentes praticas agricolas por meio de botoes seletores. O sistema calcula em tempo real uma pontuacao de 0% a 100% e fornece um feedback visual e textual com base no nivel alcancado.

Tecnologias Utilizadas
O projeto foi construido utilizando as bases fundamentais do desenvolvimento web, sem recurso a frameworks externas:

HTML5: Estruturacao semantica do conteudo.

CSS3: Variaveis globais para padronizacao da paleta de cores, posicionamento com Flexbox e Grid, alem de transicoes suaves nos botoes de selecao.

JavaScript: Manipulacao do DOM, escuta de eventos e logica condicional para atualizacao da pontuacao em tempo real.

Estrutura de Arquivos
O projeto esta dividido em tres arquivos principais para facilitar a manutencao:

index.html: Estrutura principal da pagina e ligacao dos scripts e estilos.

style.css: Regras de estilizacao, design responsivo e animacoes.

script.js: Logica de calculo e interatividade do simulador.

Como Executar o Projeto
Como o projeto e composto por arquivos estaticos, nao e necessario instalar dependencias complexas.

Clone o repositorio para a sua maquina local.

Acesse a pasta do projeto.

Abra o arquivo index.html diretamente no seu navegador de preferencia.

Logica do Simulador
O simulador distribui um total de 100 pontos entre as quatro praticas disponiveis:

Rotacao de Culturas: +25 pontos

Plantio Direto: +25 pontos

Trocar Quimicos por Bioinsumos: +30 pontos

Gotejamento Inteligente e Drones: +20 pontos

O script processa a soma dessas pontuacoes a cada clique do usuario, alterando a cor do indicador e a mensagem de status exibida na tela.
