function infoM() {
    alert("Cargando informe meteorológico…");

}

function ocultarFooter() {
    document.querySelector('.footer').style.display = 'none';
}

function transformarTemp(select) {
    const unidad = select.value;
    const temps = document.querySelectorAll('.hottest, .coldest');

    temps.forEach(temp => {
        let valor = parseInt(temp.textContent);

        if (unidad === 'F') {
            valor = Math.round((valor * 9 / 5) + 32);
        } else {
            valor = Math.round((valor - 32) * 5 / 9);
        }

        temp.textContent = valor + '°';
    });
}
