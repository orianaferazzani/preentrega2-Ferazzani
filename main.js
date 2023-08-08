const profesor = {};
const alumnos = [];

function mostrarAlumnoForm() {
    const profesorNombre = document.getElementById("profesorNombre").value;
    const profesorApellido = document.getElementById("profesorApellido").value;
    const materia = document.getElementById("materia").value;

    if (profesorNombre && profesorApellido && materia) {
        profesor.nombre = profesorNombre;
        profesor.apellido = profesorApellido;
        profesor.materia = materia;

        const profesorForm = document.getElementById("profesorForm");
        const alumnoForm = document.getElementById("alumnoForm");
        profesorForm.style.display = "none";
        alumnoForm.style.display = "block";
    } else {
        alert("Completa todos los campos del profesor.");
    }
}

function agregarAlumno() {
    const nombre = document.getElementById("alumnoNombre").value;
    const apellido = document.getElementById("alumnoApellido").value;
    const notasInput = document.getElementById("notas").value;
    const notas = notasInput.split(",").map(nota => parseFloat(nota));

    if (nombre && apellido && validarNotas(notas)) {
        alumnos.push({ nombre, apellido, notas });

        document.getElementById("alumnoNombre").value = "";
        document.getElementById("alumnoApellido").value = "";
        document.getElementById("notas").value = "";
    } else {
        alert("Completa todos los campos del alumno y asegúrate de ingresar notas válidas (1-10).");
    }
}

function validarNotas(notas) {
    for (const nota of notas) {
        if (isNaN(nota) || nota < 1 || nota > 10) {
            return false;
        }
    }
    return true;
}

function calcularPromedios() {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";

    for (const alumno of alumnos) {
        const promedio = alumno.notas.reduce((total, nota) => total + nota, 0) / alumno.notas.length;
        const promedioFormateado = promedio.toFixed(2);
        resultadosDiv.innerHTML += `<p>${alumno.nombre} ${alumno.apellido} - Promedio: ${promedioFormateado}</p>`;
    }
}
