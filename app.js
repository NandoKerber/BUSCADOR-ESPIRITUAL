function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document. getElementById("campo-pesquisa").value
    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi Encontrado</p>"
return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado na lista de resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) ||
        descricao.includes(campoPesquisa)|| 
        tags.includes(campoPesquisa)){
      // Constrói o HTML para cada item do resultado, incluindo título, descrição e link
      resultados += `<div class="item-resultado">
      <h2> 
          <a href="#" target="_blank">${dado.titulo} </a> 
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link}"https://pt.wikipedia.org/wiki/Budismo#:~:text=O%20budismo%20%C3%A9%20uma%20religi%C3%A3o,criador%20de%20todas%20as%20coisas." target="_blank"> Mais informações</a>
      </div>
      `;
    }
        }
        if (!resultados) {
            resultados = "<p>Nada foi localizado</p>"
          }
    section.innerHTML = resultados;
}
