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

let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = function () {
    if (inputBuscarFilme.ariaValueMax.lenght > 0) {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=88ffc734" + inputBuscarFilme.value, { mode: "cors" })
            .then((resp) => resp.json())
            .then((resp) => {
                console.log(resp);
            });
    }
    return false;
}

getCard = async () => {
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class","card-img-topz");
    imgCartaz.setAttribute("src",this.cartaz);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");
    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class","card-title");
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("style","display:flex; justify-content:space-arund;");
    let divGenero = document.createElement("div");
    divGenero.setAttribute("style","flex-grow:1;");
    let divAnoPrducao = document.createElement("div");
    divAnoPrducao.setAttribute("style","flex-grow:1;");
    let divClassificacao = document.createElement("div");
    divClassificacao.setAttribute("style","flex-grow:1;");
    hCardTitle.appendChild(document.createTextNode(this.titulo));
    divGenero.appendChild(document.createTextNode(this.genero));
    divAnoPrducao.appendChild(document.createTextNode(this.ano));
    divClassificacao.appendChild(document.createTextNode(this.classificacao));
    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAnoPrducao);
    divDetalhes.appendChild(divClassificacao);
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);
    return card;
}

btnBuscarFilme.onclick = async () => {
    if(inputBuscarFilme.value.length > 0){
      let filmes = new Array();
      fetch("http://www.omdbapi.com/?i=tt3896198&apikey=88ffc734"+inputBuscarFilme.value)
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

let listarFilmes = async (filmes) => {
  let listaFilmes = await document.querySelector("#lista-filmes");
  listaFilmes.innerHTML = "";
  console.log(listaFilmes);
  if(filmes.length > 0) {
    filmes.forEach(async(filme) => {
      listaFilmes.appendChild(await filme.getCard());
    });
  }
}