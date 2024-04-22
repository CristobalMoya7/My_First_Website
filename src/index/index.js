function cambiarImagen() {
    const imagen1 = document.getElementById('imagen1');
    const imagen2 = document.getElementById('imagen2');

    setInterval(() => {
        if (imagen1.style.display === 'none') {
            imagen1.style.display = 'block';
            imagen2.style.display = 'none';
        } else {
            imagen1.style.display = 'none';
            imagen2.style.display = 'block';
        }
    }, 4000);
}