function suma(a, b) {
    return a + b;
}

console.log("app lista");
console.log(suma(2, 3));

function agregarItem(texto) {
    const lista = document.getElementById('lista');
    if (lista) {
        const item = document.createElement('li');
        item.textContent = texto;
        lista.appendChild(item);
    }
}