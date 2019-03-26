// 1 - variables
const boton = $("#boton");
const contenido = $("#contenido");
const numero = $("#numero");
const boton2 = $("#boton2");

// 2 - funciones

// https://randomuser.me/
const llamarAPI = urlpersonalizada => {
  $.ajax({
    url: urlpersonalizada,
    dataType: "json",
    success: function(data) {
      console.log(data);
      console.log(data.results[0].cell);
      console.log(
        data.results[0].name.title,
        data.results[0].name.first,
        data.results[0].name.last
      );
      let micontenido = "";
      for (let i = 0; i < data.results.length; i++) {
        micontenido +=
          /* html */
          `<img class="rounded-circle" src="${data.results[i].picture.large}">
            <hr>
            <p>
            ${data.results[i].name.title}.
            ${data.results[i].name.first}
            ${data.results[i].name.last}
            </p>
        `;
      }
      contenido.html(micontenido);
    },
    error: function() {
      console.log("Ha habido un error en la consulta Ajax...");
    }
  });
};

const PrepararURL = e => {
  e.preventDefault();
  console.log(e.target.id);
  let miurl;
  if (e.target.id === "boton") {
    miurl = "https://randomuser.me/api/?nat=es&inc=gender,name,nat,picture";
  }
  if (e.target.id === "boton2") {
    let n = numero.val(); // val es en jquery lo que value en js
    miurl =
      "https://randomuser.me/api/?nat=es&inc=gender,name,nat,picture&results=" +
      n;
  }
  console.log(miurl);

  llamarAPI(miurl);
};

// 3 - eventos

/*
$('#boton').click(function (e) {
    e.preventDefault();
    llamarAPI();
});
*/

// equivalente a lo de arriba
boton.on("click", PrepararURL);
boton2.on("click", PrepararURL);
