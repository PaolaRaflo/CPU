// Para efectos de toggle del sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const toggleButton = document.querySelector('.btn-toggle-sidebar');

    sidebar.classList.toggle('hidden');
    if (sidebar.classList.contains('hidden')) {
        toggleButton.style.left = '10px';
    } else {
        toggleButton.style.left = '210px';
    }
}

// Detectar el cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth <= 768) {
        sidebar.classList.add('hidden');
    } else {
        sidebar.classList.remove('hidden');
    }
});

// Botón Guardar: Muestra un mensaje de confirmación y redirige
function guardarAsistencia() {
    Swal.fire({
        title: "Asistencia Registrada",
        text: "La asistencia se guardó correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
    }).then(() => {
        window.location.href = "asistencia.html"; // Redirige al finalizar
    });
}

// Botón Cancelar: Redirige sin mensaje
function cancelarAsistencia() {
    window.location.href = "asistencia.html";
}
