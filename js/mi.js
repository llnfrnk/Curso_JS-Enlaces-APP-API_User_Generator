// 1 - variables
const boton = $("#boton");
const contenido = $("#contenido");

// 2 - funciones

// https://randomuser.me/
const llamarAPI = e => {
  e.preventDefault();
  $.ajax({
    url:
      "https://randomuser.me/api/?nat=es&inc=gender,name,nat,picture&results=5",
    dataType: "json",
    success: function(data) {
      console.log(data);
      console.log(data.results[0].cell);
      console.log(
        data.results[0].name.title,
        data.results[0].name.first,
        data.results[0].name.last
      );
      // creamos una variable e insertamos el html
      let miContenido =
        /* html */
        `<img class="rounded-circle" src="${data.results[0].picture.large}">
                <hr>
                <p>
                ${data.results[0].name.title}.
                ${data.results[0].name.first}
                ${data.results[0].name.last}
                </p>
            `;
      // insertamos el contenido de la variable dentro del div
      contenido.html(miContenido);
    },
    error: function() {
      console.log("Ha habido un error en la consulta Ajax...");
    }
  });
};

// 3 - eventos

/*
$('#boton').click(function (e) {
    e.preventDefault();
    llamarAPI();
});
*/

// equivalente a lo de arriba
boton.on("click", llamarAPI);
