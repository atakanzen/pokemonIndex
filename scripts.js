const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(logo)
app.appendChild(container)

var req = new XMLHttpRequest()
req.open('GET','https://pokeapi.co/api/v2/pokemon',true)
req.onload = function() {
   if(req.status >= 200 && req.status < 400) {
    var _json = JSON.parse(this.response)
    _json.results.forEach(pokemon => {
        const card = document.createElement('div')
        card.setAttribute('class','card')

        const h2 = document.createElement('h2')
        h2.textContent = pokemon.name
        
        const a = document.createElement('a')
        a.setAttribute('class','card')
        a.href = pokemon.url
        a.target = '_blank'
        a.textContent = "Click here for more information."
        

        
        card.appendChild(h2)
        card.appendChild(a)
        container.appendChild(card)
    });
}
   else {
        console.log('There was an error.')
}
    
}
req.send()