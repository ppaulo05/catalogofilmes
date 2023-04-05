
let inputBuscarFilme = document.querySelector('#input-buscar-filme');
let btnBuscarFilme = document.querySelector('#btn-buscar-filme');
let listaFilmes =  document.querySelector("#lista-filmes");
let mostrarFilmes = document.querySelector('#mostrar-filme');
let favoritos = document.querySelector('.favoritos');
let navFavoritos = document.querySelector("#nav-favoritos");


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
        mostrarFilmes.appendChild(filme.getDetalhesFilme());

        document.querySelector("#fecharDetalhes").onclick = () =>{
            listaFilmes.style.display="flex";
            mostrarFilmes.style.display = 'none';
            mostrarFilmes.innerHTML = "";
        }
        document.querySelector("#btnSalvar").onclick = () => {
          filmeFavorito(filme);
        }
    })
}

let filmeFavorito =(filme) =>{
  let filmeString =localStorage.getItem('filmeFavoritos');
  let filmes = null;
  if(filmeString){
    filme=JSON.parse(filmeString);
    filmes.push(filme);
  }
  else{
    filmes = [filme];
  }

  filmes=JSON.stringify(filmes);
  localStorage.setItem('filmesFavoritos', filmes);
}

let listaFavorito = () =>{
  filmesFavorito=JSON.parse(filmesFavorito);
  let filmes=new Array();
  filmesFavorito.forEach((item) => {
    let filme = new filme (
      item.id,
      item.titulo,
      item.genero,
      item.duracao,
      item.sinopse,
      item.cartaz,
      item.direcao,
      item.elenco,
      item.classificacao,
      item.avaliacao
    );
    filmes.push(filme);
  });
  listarFilmes(filmes);
}

navFavoritos.onclick = () => {

  listaFavoritos();

}

const excluirFilme = (id) => {

  let filmesFavorito = JSON.parse(localStorage.getItem('filmesFavoritos'));

  let Id = (filme) => filme.id == id;

  let excluir = filmesFavorito.find(Id);

  filmesFavorito.splice(excluir, 1);

  localStorage.setItem('filmesFavoritos', JSON.stringify(filmeFavorito));

  listaFavoritos();
}





