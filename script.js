// Crear un arreglo con los nombres de las imágenes
var imagenes = [];
for (var i = 1; i <= 26; i++) {
  imagenes.push("imagen" + i + ".jpg");
}

// Crear un elemento de imagen para cada imagen en el arreglo
for (var i = 0; i < imagenes.length; i++) {
  var imagen = document.createElement("img");
  imagen.src = "imagenes/" + imagenes[i];
  imagen.alt = "imagen " + (i + 1);
  imagen.className = "imagen-ampliable";
  imagen.onclick = function() { ampliarImagen(this); };


  // Agregar la imagen al documento
  document.body.appendChild(imagen);
}


function ampliarImagen(imagen) {
    // Mostrar la capa
    document.getElementById("capa").style.display = "block";

    // Mostrar la imagen ampliada en la capa
    document.getElementById("imagen-ampliada").src = imagen.src;
}
function cerrarAmpliacion() {
    // Ocultar la capa
    document.getElementById("capa").style.display = "none";

    // Limpiar la imagen ampliada
    document.getElementById("imagen-ampliada").src = "";
}
