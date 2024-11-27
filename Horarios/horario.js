document.addEventListener("DOMContentLoaded", function () {
    const aulas = ["A-01", "A-02", "A-03", "B-01", "C-01"];
    const container = document.getElementById("aula-container");
    let html = "";

    aulas.forEach((aula) => {
        html += `
            <div class="col-md-3 col-sm-6 mb-3">
                <div class="card text-center shadow-sm">
                    <div class="card-body">
                        <h6 class="card-title">${aula}</h6>
                        <a href="aula.html?aula=${encodeURIComponent(aula)}" class="btn btn-sm btn-success">HORARIO</a>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
});


