const API_URL="https://jsonplaceholder.typicode.com/users";
document.addEventListener('DOMContentLoaded',()=>{
    const BotonRegistro=document.getElementById("Registrarse")
    BotonRegistro.addEventListener("click",()=>{
    const Nombre=document.getElementById("Nombre");
    const Apellido=document.getElementById("Apellido");
    const Fecha=document.getElementById("Fecha");
    const Informacion= {
        Nombre:Nombre.value,
        Apellido:Apellido.value,
        Fecha:Fecha.value
    } // Creamos un objeto que almacenara toda la informacion del registro
    const opciones={
        
            method: 'POST', // Método HTTP
            headers: {
              'Content-Type': 'application/json' // Tipo de contenido del cuerpo de la solicitud
            },
            body: JSON.stringify(Informacion) // Convierte los datos a formato JSON
          };
    fetch(API_URL,opciones)
    .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no se pudo completar correctamente.');
        }
        return response.json(); // Parsea la respuesta JSON
      })
      .then(data => {
        console.log('Respuesta del servidor:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
})

})