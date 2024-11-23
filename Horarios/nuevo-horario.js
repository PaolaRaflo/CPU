document.addEventListener("DOMContentLoaded", function () {
    const tablaHorario = document.getElementById("tablaHorario");
    const btnAgregar = document.getElementById("btnAgregar");
    const btnGuardar = document.getElementById("btnGuardar");
    const btnLimpiar = document.getElementById("btnLimpiar");
    const turnoSelect = document.getElementById("turnoSelect");

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
        Swal.fire("¡Horario Agregado!", "El horario fue agregado correctamente", "success");
    });

    btnGuardar.addEventListener("click", function () {
        Swal.fire({
            title: "Horario Registrado",
            text: "El horario se guardó correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
        }).then(() => {
            window.location.href = "horario.html";
        });
    });

    btnLimpiar.addEventListener("click", function () {
        document.getElementById("formHorario").reset();
    });

    turnoSelect.addEventListener("change", function () {
        generarTabla(turnoSelect.value);
    });

    generarTabla("Mañana");
});

btnCancelar.addEventListener("click", function () {
    window.location.href = "aula.html";
});
