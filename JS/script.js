/*let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

let listarFilmes = async (filmes) => {
  let listaFilmes = document.querySelector("#lista-filmes");
  listaFilmes.style.display = "flex";
  listaFilmes.innerHTML = "";
  document.querySelector("#mostrar-filme").innerHTML="";
  document.querySelector("#mostrar-filme").style.display = "none";
  //console.log(listaFilmes);
  if(filmes.length > 0) {
    filmes.forEach(async(filme) => {
      //console.log(filme);
      listaFilmes.appendChild(await filme.getCard());
      filme.getBtnDetalhes().onclick=()=>{
        detalhesFilme(filme.id);
      }
    });
  }
}

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
      let filmes = new Array();
      fetch("http://www.omdbapi.com/?apikey=88ffc734&s="+inputBuscarFilme.value)
      .then((resp)=> resp.json())
      .then((resp)=> {
        resp.Search.forEach((item)=>{
          console.log(item);
          let filme = new Filme(
            item.imdbID,
            item.Title,
            item.Year,
            null,
            null,
            item.Poster,
            null,
            null,
            null,
            null,
            null
          );
          filmes.push(filme);

        });
        listarFilmes(filmes);
        
      })

    }
    return false;
}

let detalhesFilme = async (id)=>{
  fetch("http://www.omdbapi.com/?apikey=88ffc734&i="+id)
  .then((resp)=> resp.json())
  .then((resp)=> {
    console.log(resp);
    let filme=new Filme(
      resp.imdbID,
      resp.Title,
      resp.Year,
      resp.Genre.split(","),
      resp.Runtime,
      resp.Poster,
      resp.plot,
      resp.Director,
      resp.Actors.split(","),
      resp.Awards,
      resp.imdbRating
    )

    document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());
    
    document.querySelector("#btnFechar").onclick = () => {
      document.querySelector("#lista-filmes").style.display="flex";
      document.querySelector("#mostrar-filme").innerHTML="";
      document.querySelector("#mostrar-filme").style.display="none";
    }
    document.querySelector("#btnSavar").onclick = () => {
      salvarFilme(filme);
    }
    document.querySelector("#lista-filmes").style.display="none";
    document.querySelector("#mostrar-filme").style.display="flex";
  });
}

let filmes = new Array();
filmesFavoritos.forEach((item) => {
  let filme = new filme (
    item.id,
    item.titulo,
    item.ano,
    item.genero,
    item.duracao,
    item.cartaz,
    item.cartaz,
    item.direcao,
    item.elenco,
    item.classificacao,
    item.avaliacao
  );
  
filmes.push(filme);
})

//let navFavoritos = document.querySelector("#nav-favoritos");
//navFavoritos.onclick = () => {
//  listarFavoritos();
//}


//let filmesString = localStorage.getItem('filmesFavoritos');
//filmes=JSON.stringify(filmes);
//localStorage.setItem('filmesFavoritos', filmes);


   /* mostrarFilmes.style.display = "flex";
    mostrarFilmes.appendChild(filme.getDetalhesFilme());

    document.querySelector("#fecharDetalhes").onclick = () => {
        document.querySelector("#lista-filmes").style.display = "flex";
        document.querySelector("#mostrar-filmes").innerHTML = "";
        document.querySelector("#mostrar-filmes").style.display = "none";
    }
   */

   
let inputBuscarFilme = document.querySelector('#input-buscar-filme');
let btnBuscarFilme = document.querySelector('#btn-buscar-filme');
let listaFilmes =  document.querySelector("#lista-filmes");
let mostrarFilmes = document.querySelector('#mostrar-filme');
let favoritos = document.querySelector('.favoritos');

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=88ffc734&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item) => {
                console.log(item);
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null,
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    mostrarFilmes.style.display = 'none';
    return false;
}
let listarFilmes = async (filmes) => { 
    listaFilmes.style.display = 'flex';
    listaFilmes.innerHTML = "";
    mostrarFilmes.style.display = 'flex';
    mostrarFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme)=>{
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick= async()=>{
                listaFilmes.style.display = 'none';
                detalhesFilme(filme.id);
            }
        })
    }
}

let detalhesFilme = async (id) =>{
    fetch("http://www.omdbapi.com/?apikey=88ffc734&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        );

        mostrarFilmes.style.display = 'flex';
        mostrarFilmes.appendChild(filme.getCardDetalhes());

        document.querySelector("#btnFechar").onclick = () =>{
            listaFilmes.style.display="flex";
            mostrarFilmes.style.display = 'none';
            mostrarFilmes.innerHTML = "";
        }
        document.querySelector("#btnSalvar").onclick = () => {
            salvarFilmes(filme);
        }
    })
}






