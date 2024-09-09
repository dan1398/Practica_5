/* Hacer un CRUD:
    C (create) = ingresar un color por el input.
    R (read) = renderizar el color dentro de la ul en una li.
    U (update) = dentro del li crear un boton para actualizar y hacer que funcione.
    D (delete) = dentro del li crear un boton para eliminar y hacer que funcione.
    
    -Utilizar el localstorage para emular una base de datos donde se guarden los colores y se renderizen.

    -Por ultimo subir la carpeta practicaJs5 a su github personal.
*/
var colores = JSON.parse(localStorage.getItem("colorIngresado")) || [];
seleccionado = null; 

function addColor() {
    var colorInput = document.getElementById("colorInput");
    var color = colorInput.value; 

    if (seleccionado == null) {
        colores.push(color);
    } else {
        colores[seleccionado] = color;
        seleccionado = null;
    }
    
    colorInput.value = "";
    localStorage.setItem("colorIngresado", JSON.stringify(colores));
    cargarColores();
}

function cargarColores() {
    var cadena = "";
    for (let i = 0; i < colores.length; i++) {
        cadena += `<li class="list-group-item d-flex justify-content-between align-items-center">
        ${colores[i]}
        <div>
            <button onclick="editarColor(${i})" class="btn btn-warning btn-sm me-2"> 
                <i class="fa fa-edit"></i>
            </button>
            <button onclick="borrarColor(${i})" class="btn btn-danger btn-sm">
                <i class="fa fa-trash"></i>
            </button>
        </div>
        </li>`;
    }
    document.getElementById("colorList").innerHTML = cadena;
}
function borrarColor(posicion){
    colores.splice(posicion, 1);
    localStorage.setItem("colorIngresado", JSON.stringify(colores));
    cargarColores();
}
function editarColor(id){
    seleccionado = id;
    localStorage.setItem("color_seleccionado", id);
    document.getElementById("colorInput").value = colores[id];
    
}
