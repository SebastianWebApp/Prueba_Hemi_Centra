var lista = localStorage.getItem("Lista_Pokemones")
var Nueva_Lista = [];

Nueva_Lista = lista.split(",");

Leer_Informacion();

async function Leer_Informacion(){

    var Contenido = "";

    for (let index = 0; index < Nueva_Lista.length; index++) {
    
        var Solicitud = await fetch(`https://pokeapi.co/api/v2/pokemon/${Nueva_Lista[index]}`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });
    
       var Respuesta_Servidor = await Solicitud.json();

       Contenido = Contenido + `
       <div class = "General">
       <div class = "Sub_Hijo">
       <div class = "Hijo">
       <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Respuesta_Servidor.id}.png">
       </div>
       <div class = "Hijo">
       <h3>${Respuesta_Servidor.name.toUpperCase()}</h3>
       </div>
       </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa ducimus cum consequatur laborum quam vel adipisci reiciendis dignissimos, ullam, error inventore dicta eligendi quas quos magnam itaque commodi porro.</p>
       </div>`;

        
    }


    document.getElementById("Div_Padre").innerHTML = Contenido;

}



    
