var Lista = [];
localStorage.removeItem("Lista_Pokemones");

document.getElementById("Btn_Buscar").onclick = async function(e){

    alert("clic")

    Lista = [];
    var Inp_Nombre = document.getElementById("Inp_Nombre").value;
    var Select_Generacion = document.getElementById("Select_Generacion").value;

    if(Inp_Nombre.trim() == "" && Select_Generacion == "Seleccione"){
        alert("Ingrese un nombre o seleccion una generacion");
        return;
    }


    if(Inp_Nombre.trim() != ""){
        var Solicitud = await fetch(`https://pokeapi.co/api/v2/pokemon/${Inp_Nombre}`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });
    
        if(Solicitud.ok){
            Lista.push(Inp_Nombre);                     
        }
        else{
    
            alert("esta mal el nombre");
        }
    }

    if(Select_Generacion != "Seleccione"){
        var Solicitud = await fetch(`https://pokeapi.co/api/v2/generation/${Select_Generacion}/`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });
    
        if(Solicitud.ok){
    
            var Respuesta_Servidor = await Solicitud.json();

            for (let index = 0; index < Respuesta_Servidor.pokemon_species.length; index++) {

                if(!Lista.includes(Respuesta_Servidor.pokemon_species[index].name)){
                    Lista.push(Respuesta_Servidor.pokemon_species[index].name);
                }
            }

            
        }
        else{
    
            alert("esta mal la generacion");
        }
    }
    
    localStorage.setItem("Lista_Pokemones", Lista);

   location.href = "/info";
}