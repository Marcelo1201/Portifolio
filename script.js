function menu() {
    let menu = document.querySelector('.box');
    let hamb = document.querySelector('#menu-hamb');
    
    if(menu.style.display == 'block') {
        menu.style.display = 'none';
        hamb.style.background = '';
        hamb.innerText = 'menu';
    } else {
        menu.style.display = 'block';
        hamb.style.background = 'var(--cor-fundo)';
        hamb.style.borderRadius = '3px';
        hamb.innerText = 'close';
    }
}

function desktop() {
    let botao = document.querySelector('#botao-desktop');
    let box = document.querySelector('.box-desktop');

    if(box.style.display == 'block') {
        box.style.display = 'none';
        botao.innerText = 'menu'
    } else {
        box.style.display = 'block'
        botao.innerText = 'close'
    }
}

window.sr = ScrollReveal({ reset:true });

sr.reveal('.projeto', { 
    duration: 2500,
    scale: 1.2
});
