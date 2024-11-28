function loadCourses() {
    const container = document.getElementById("course-container");
    let html = "";

    courses.forEach((course) => {
        html += `
            <div class="col-md-3 col-sm-6 mb-3">
                <div class="card text-center shadow-sm">
                    <div class="card-body">
                        <h6 class="card-title">${course.name}</h6>
                        <a href="curso.html?course=${encodeURIComponent(course.name)}" class="btn btn-sm btn-success">INGRESAR</a>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadCourses();

    // Manejar el cambio de estado en los switches
    document.querySelectorAll('.estado-seminario').forEach((switchElement) => {
        switchElement.addEventListener('change', (event) => {
            const label = event.target.nextElementSibling;
            const isChecked = event.target.checked;

            Swal.fire({
                title: '¿Estás seguro?',
                text: `El seminario será marcado como ${isChecked ? 'Activo' : 'Inactivo'}.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#28a745',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, confirmar',
            }).then((result) => {
                if (!result.isConfirmed) {
                    event.target.checked = !isChecked; // Revertir estado
                } else {
                    label.textContent = isChecked ? 'Activo' : 'Inactivo';
                    label.style.color = isChecked ? 'blue' : 'red';
                }
            });
        });
    });

    // Manejar el clic en "Nuevo Registro" para mostrar el modal
    const nuevoRegistroBtn = document.querySelector(".btn-success.float-right");
    if (nuevoRegistroBtn) {
        nuevoRegistroBtn.addEventListener("click", () => {
            $("#seminarioModal").modal("show"); // Mostrar el modal
        });
    }
});

// Manejar el guardado del seminario desde el modal
function guardarSeminario() {
    const nombre = document.getElementById("nombreSeminario").value;
    if (!nombre) {
        Swal.fire({
            icon: 'warning',
            title: 'Faltan Datos',
            text: 'Por favor complete todos los campos.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    // Mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: 'Seminario Registrado',
        text: 'El seminario se guardó correctamente.',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        // Cierra el modal y limpia el formulario
        $('#seminarioModal').modal('hide');
        document.getElementById("seminarioForm").reset();
    });
}
