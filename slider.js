let imgs = document.querySelectorAll(".banner-img");
let index = 0;

function trocarImagem() {
    imgs[index].classList.remove("active");

    index = (index + 1) % imgs.length;

    imgs[index].classList.add("active");
}

setInterval(trocarImagem, 4000); // troca a cada 4 segundos
<script>
    // Sem JS para o slideshow — ele é todo feito em CSS.
    // Este bloco existe apenas para evitar erros caso queira expandir depois.
</script>
setInterval(trocarSlide, 3500);
