const links = document.querySelectorAll('a');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const alert = `
    <div class="alert alert-success" role="alert">
    Cantidad de links en la página: ${links.length}
    <br>Primer link: ${links[0]}
    <br>Último link: ${links[links.length - 1]}
    </div>
    `;
  btn.insertAdjacentHTML('afterend', alert);
});
