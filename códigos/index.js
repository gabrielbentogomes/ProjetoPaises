const btnEnviar = document.getElementById("btnEnviar")

const url = "https://restcountries.com/v2/all"

let html = ""
let nomePais = ""
let flag = ""
let population = ""
let capital = ""
let continente = ""
let area = ""
let moeda = ""
let linguas = ""

fetch(url)
	.then( (resposta) => resposta.json() )
	.then( (dados) => {

		for(let i = 0; i < dados.length; i++){
			html += `
			<option value="${dados[i].name}">${dados[i].name}</option>
			`;
		}

		document.querySelector("select").innerHTML += html;

		var comboCidades = document.getElementById("cbPais")

		btnEnviar.addEventListener("click", (verificar) => {
			let texto = comboCidades.options[comboCidades.selectedIndex].text;
			for (var i = 0; i < dados.length; i++) {
				if(dados[i].name===texto){
	 			 	flag = `<img src="${dados[i].flag}" width="300">`
	 			 	document.querySelector("#bandeiras").innerHTML = flag;

	 			 	nomePais =`<h1 id="tituloBox">Nome: ${dados[i].name}</h1>`
	 			 	document.querySelector("#tituloBox").innerHTML = nomePais;

	 			 	population =`<p id="pop">População: ${dados[i].population}</h1>`
	 			 	document.querySelector("#pop").innerHTML = population;

	 			 	capital =`<p id="capital">Capital: ${dados[i].capital}</h1>`
	 			 	document.querySelector("#cap").innerHTML = capital;

					continente =`<p id="cont">Continente: ${dados[i].region}</h1>`
	 			 	document.querySelector("#cont").innerHTML = continente;

					area =`<p id="area">Area:${dados[i].area}</h1>`
	 			 	document.querySelector("#area").innerHTML = area;

	 			 	moeda =`<p id="moeda">Moeda: ${dados[i].currencies[0].name}</h1>`
	 			 	document.querySelector("#moeda").innerHTML = moeda;

	 			 	linguas =`<p id="lingua">Lingua: ${dados[i].languages[0].name}<br></h1>`
	 			 	document.querySelector("#lingua").innerHTML = linguas;	 	
				}
			}

		})


	})
	.catch((erro) => console.log(erro))
