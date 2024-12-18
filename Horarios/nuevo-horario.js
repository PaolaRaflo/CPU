document.addEventListener("DOMContentLoaded", function () {
    const tablaHorario = document.getElementById("tablaHorario");
    const btnAgregar = document.getElementById("btnAgregar");
    const btnGuardar = document.getElementById("btnGuardar");
    const btnLimpiar = document.getElementById("btnLimpiar");
    const turnoSelect = document.getElementById("turnoSelect");
    const cursoSelect = document.getElementById("cursoSelect");
    const diaSelect = document.getElementById("diaSelect");
    const horaInicio = document.getElementById("horaInicio");
    const horaFin = document.getElementById("horaFin");

    const horariosManana = [
        "07:00 - 07:50",
        "07:50 - 08:40",
        "08:40 - 09:30",
        "09:30 - 10:20",
        "10:20 - 10:50 (Receso)",
        "10:50 - 11:40",
        "11:40 - 12:30",
        "12:30 - 13:20",
    ];

    const horariosTarde = [
        "15:20 - 16:10",
        "16:10 - 17:00",
        "17:00 - 17:50",
        "17:50 - 18:40",
        "18:40 - 19:10 (Receso)",
        "19:10 - 20:00",
        "20:00 - 20:50",
        "20:50 - 21:40",
    ];

    function generarTabla(turno) {
        tablaHorario.innerHTML = "";
        const horarios = turno === "Mañana" ? horariosManana : horariosTarde;
        horarios.forEach((hora) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${hora}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            `;
            tablaHorario.appendChild(fila);
        });
    }

    btnAgregar.addEventListener("click", function () {
        // Obtener valores del formulario
        const curso = cursoSelect.value;
        const dia = diaSelect.value;
        const inicio = horaInicio.value;
        const fin = horaFin.value;

        if (!curso || !dia || !inicio || !fin) {
            Swal.fire("Error", "Completa todos los campos antes de agregar.", "error");
            return;
        }

        // Buscar la fila correspondiente al rango horario
        const filas = tablaHorario.querySelectorAll("tr");
        let horarioEncontrado = false;

        filas.forEach((fila) => {
            if (fila.children[0].textContent.includes(`${inicio} - ${fin}`)) {
                const index = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].indexOf(dia);
                if (index !== -1) {
                    fila.children[index + 1].textContent = curso;
                    horarioEncontrado = true;
                }
            }
        });

        if (horarioEncontrado) {
            Swal.fire("¡Horario Agregado!", "El horario fue agregado correctamente.", "success");
        } else {
            Swal.fire("Error", "El rango horario no coincide con la tabla actual.", "error");
        }
    });

    btnGuardar.addEventListener("click", function () {
        Swal.fire({
            title: "Horario Registrado",
            text: "El horario se guardó correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
        }).then(() => {
            window.location.href = "aula.html";
        });
    });

    btnLimpiar.addEventListener("click", function () {
        // Limpia solo los campos Curso, Día, Hora Inicio, y Hora Fin
        cursoSelect.selectedIndex = 0; // Restablece el curso al primero
        diaSelect.selectedIndex = 0; // Restablece el día al primero
        horaInicio.value = ""; // Limpia el campo de hora de inicio
        horaFin.value = ""; // Limpia el campo de hora de fin
    });
    



    turnoSelect.addEventListener("change", function () {
        generarTabla(turnoSelect.value);
    });

    generarTabla("Mañana");
});

document.getElementById("btnCancelar").addEventListener("click", function () {
    window.location.href = "aula.html";
});
