
document.getElementById("Btn_Buscar").onclick = async function(e){

    try {

           
        var Solicitud = await fetch(`http://ec2-3-95-182-107.compute-1.amazonaws.com/`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });
        var Respuesta_Servidor = await Solicitud.json();

        console.log(Respuesta_Servidor)

           document.getElementById("Genero").innerText = Respuesta_Servidor.Respuesta.Genero;
           document.getElementById("Telefono").innerText = Respuesta_Servidor.Respuesta.Telefono;
           document.getElementById("Email").innerText = Respuesta_Servidor.Respuesta.Email;
       

              var Solicitud = await fetch(`http://ec2-54-145-132-125.compute-1.amazonaws.com`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });
        var Respuesta_Servidor = await Solicitud.json();

                   document.getElementById("Mascota").src = Respuesta_Servidor.Respuesta;


         var Solicitud = await fetch(`http://ec2-3-86-209-53.compute-1.amazonaws.com/`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }     
        });
    
           var Respuesta_Servidor = await Solicitud.json();

           console.log(Respuesta_Servidor)

           document.getElementById("Imagen").src = Respuesta_Servidor.Respuesta.Logo;
           document.getElementById("Descripcion").innerText = Respuesta_Servidor.Respuesta.Descripcion;

        
    } catch (error) {
        alert("Error al leer el equipo")
    }


}