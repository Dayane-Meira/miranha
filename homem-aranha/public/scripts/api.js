
var id = decodeURIComponent(window.location.search.match(/(\?|&)id\=([^&]*)/)[2]);
// Váriaveis
//                 Peter      Miles     May        Gwen        2099
var characters = ['1009610', '1009609', '1016181', '1017603', '1014873']
var auth = '?ts=1633742097&apikey=b91cf23df42cc212d43c8059eff9338d&hash=e2c8c97f223ea787d51c5f78a845a83e'
var param = `&id=${characters[id]}`
var url = `https://gateway.marvel.com:443/v1/public/characters`

console.log(id)
console.log(param)
// Requisição para a API
json = reqJson(url, param);

// Captura das comics
var comicSize = json.data.results[0].comics.items.length - 1;
indexComic = random(comicSize);
var comics = reqJson(json.data.results[0].comics.items[indexComic].resourceURI);

// Verificação da descrição.
while (true){
    if (!comics.data.results[0].description){
        aux = indexComic
        while(aux == indexComic){
            indexComic = random(comicSize)
        }
        comics = reqJson(json.data.results[0].comics.items[indexComic].resourceURI);
    } else {
        break
    }
}

if (id == 3){
    json.data.results[0].description = "Spider-Woman is a variant of Spider-Man and an alternate-universe version of Gwen Stacy. She lives on Earth-65, where Gwen Stacy is bitten by a radioactive spider and becomes a superheroine instead of Peter Parker becoming Spider-Man. The character's various enemies include Earth-65 versions of Matt Murdock and Frank Castle. Gwen Stacy's Spider-Woman harbors much of Peter's personality and conflicts along with his powers and abilities.";
} else if(id == 4) {
    json.data.results[0].description = "His real identity is Miguel O'Hara, a brilliant geneticist living in New York (renamed Nueva York) in the year 2099 who attempts to recreate the abilities of the original Spider-Man in other people and later suffers a related accident that causes half of his DNA to be re-written with a spider's genetic code.";
}


// Inclusão dos dados no html
//Character
try{document.getElementById("characterName").innerHTML = json.data.results[0].name;}catch{null}
try{document.getElementById("characterDescription").innerHTML = json.data.results[0].description;}catch{null}
try{document.getElementById("characterImage").src = json.data.results[0].thumbnail.path + ".jpg";}catch{null}

//Comics
try{document.getElementById("commicName").innerHTML = comics.data.results[0].title;}catch {null}
try{document.getElementById("commicDescription").innerHTML = comics.data.results[0].description;}catch{null}
try{document.getElementById("commicImage").src = comics.data.results[0].thumbnail.path + ".jpg";}catch{null}


// Função para request na API da marvel
function reqJson(url_, param_=""){
    var request = new XMLHttpRequest();
    request.open('GET', `${url_}${auth}${param_}`, false);
    request.send();

    return JSON.parse(request.responseText);
}

// Função para gerar um número aleatório
function random(size){
    return Math.floor(Math.random() * (size));
}

console.log(characters);

