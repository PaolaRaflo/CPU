document.addEventListener("DOMContentLoaded", function () {
    const switches = document.querySelectorAll(".switch-horario");

    switches.forEach((toggle) => {
        toggle.addEventListener("change", function () {
            const label = this.nextElementSibling;
            const estadoActual = this.checked;

            if (!estadoActual) {
                // Mostrar mensaje de advertencia al intentar desactivar
                Swal.fire({
                    title: "¿Estás seguro?",
                    text: "Si desactivas este horario, se marcará como 'Desactivado'.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Sí, desactivar",
                    cancelButtonText: "Cancelar",
                }).then((result) => {
                    if (result.isConfirmed) {
                        label.textContent = "Inactivo"; // Cambia el estado a desactivado
                        label.classList.add("text-danger");
                    } else {
                        this.checked = true; // Revertir el cambio si se cancela
                    }
                });
            } else {
                // Cambiar el estado de regreso a Activo
                label.textContent = "Activo";
                label.classList.remove("text-danger");
            }
        });
    });
});
