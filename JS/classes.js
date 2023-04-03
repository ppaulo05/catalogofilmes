class Ator
{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Diretor
{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}

class Filme
{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id=id;
        this.ano=ano;
        this.titulo=titulo;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
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
        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }

    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
      }
      getDetalhesFilme =  () => {

        let cardDetalhes = document.createElement('div');
        cardDetalhes.setAttribute("class", "card-detalhes");

        let imgDetalhes = document.createElement("img");
        imgDetalhes.setAttribute("class", "img-detalhes");
        imgDetalhes.setAttribute("src", this.cartaz);

        let cardBodyDetalhes = document.createElement("div");
        cardBodyDetalhes.setAttribute("class", "body-detalhes");

        let divCabecalho = document.createElement("div");
        divCabecalho.setAttribute("class", "cabecalho");

        let hTitleDetalhes = document.createElement("h2");
        hTitleDetalhes.setAttribute("class", "cardTitle");
        hTitleDetalhes.appendChild(document.createTextNode(this.titulo));

        let fecharFilme = document.createElement('button');
        fecharFilme.setAttribute("class", "btn-close");
        fecharFilme.setAttribute("id", this.id);
        fecharFilme.setAttribute("id", "fecharDetalhes");

        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("class", "div-detalhes");

        let divAno = document.createElement("div");
        divAno.setAttribute("class", "div-ano");
        divAno.appendChild(document.createTextNode("• Ano: "));

        let divGenero = document.createElement("div");
        divGenero.setAttribute("class", "div-genero");
        divGenero.appendChild(document.createTextNode("• Genêro: "));

        let divDuracao = document.createElement("div");
        divDuracao.setAttribute("class", "div-duracao");
        divDuracao.appendChild(document.createTextNode("• Duração: "));

        let divDirecao = document.createElement("div");
        divDirecao.setAttribute("class", "div-direcao");
        divDirecao.appendChild(document.createTextNode("• Direção: "));

        let divElenco = document.createElement("div");
        divElenco.setAttribute("class", "div-elenco");
        divElenco.appendChild(document.createTextNode("• Elenco: "));

        let divSinopse = document.createElement("div");
        divSinopse.setAttribute("class", "div-sinopse");
        divSinopse.appendChild(document.createTextNode("• Sinopse: "));

        let divAvaliacao = document.createElement("div");
        divAvaliacao.setAttribute("class", "div-avaliacao");
        divAvaliacao.appendChild(document.createTextNode("• Avaliação: "));

        divAno.appendChild(document.createTextNode(this.ano));
        divGenero.appendChild(document.createTextNode(this.genero));
        divDuracao.appendChild(document.createTextNode(this.duracao));
        divDirecao.appendChild(document.createTextNode(this.direcao));
        divElenco.appendChild(document.createTextNode(this.elenco));
        divSinopse.appendChild(document.createTextNode(this.sinopse));
        divAvaliacao.appendChild(document.createTextNode(this.avaliacao));

        divDetalhes.appendChild(divAno);
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divDirecao);
        divDetalhes.appendChild(divElenco);
        divDetalhes.appendChild(divSinopse);
        divDetalhes.appendChild(divAvaliacao);

        cardDetalhes.appendChild(imgDetalhes);
        cardDetalhes.appendChild(cardBodyDetalhes);

        divCabecalho.appendChild(hTitleDetalhes);
        divCabecalho.appendChild(fecharFilme);

        cardBodyDetalhes.appendChild(divCabecalho);
        cardBodyDetalhes.appendChild(divDetalhes);

        let btnSalvar = document.createElement('button');
        btnSalvar.appendChild(document.createTextNode('Favoritar'));
        btnSalvar.setAttribute("id","btnSalvar");
        divDetalhes.appendChild(btnSalvar);

        


        return cardDetalhes;

    }
}