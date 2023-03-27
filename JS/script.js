//let ator = new Ator(1, "JOHN WAYNE");
//console.log(ator)

//let diretor = new Diretor(1, "Alfred hitchcock");
//console.log(diretor);

//let direcao = [
//    new Diretor(1, "Jim Sheridan"),
//];


//let elenco = [
//  new Ator(1, " 50 Cent"),
//new Ator(2, "Adewale Akinnuoye-Agbaje"),
//new Ator(3, "Joy Bryant"),
//    new Ator(4, "Terrence Howard"),
//    new Ator(5, " Ashley Walters"),
//    new Ator(6, "Omar Benson Miller"),
//];


//let sinopse = "Marcus (50 Cent) é um jovem da periferia que se envolveu em um tiroteio, que por pouco não lhe tirou a vida."


//let cartaz = "https://media.fstatic.com/eZPNjnVEoqwltt8b3PJNHHJTuzM=/322x478/smart/filters:format(webp)/media/movies/covers/2017/06/getrich.jpg"


//let genero = ["Drama", "Ficção policial"];


//let filme = new Filme(
//   1,
//    "Fique rico ou morra tentando",
//    2005,
//    genero,
//    135,
//    sinopse,
//    cartaz,
//    direcao,
//    elenco,
//    16,
//    null
//);

//console.log(filme);

//btnBuscarFilme.onclick = () => {
//  if (inputBuscarFilme.ariaValueMax.lenght > 0) {
//      fetch("http://www.omdbapi.com/?apikey=88ffc734&s=" + inputBuscarFilme.value, { mode: "cors" })
//          .then((resp) => resp.json())
//          .then((resp) => {
//              console.log(resp);
//          });
//  }
//  return false;
//}

let inputBuscarFilme = document.querySelector("#input-buscar-filme");
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

let navFavoritos = document.querySelector("#nav-favoritos");
navFavoritos.onclick = () => {
  listarFavoritos();
}


let filmesString = localStorage.getItem('filmesFavoritos');
filmes=JSON.stringify(filmes);
localStorage.setItem('filmesFavoritos', filmes);







