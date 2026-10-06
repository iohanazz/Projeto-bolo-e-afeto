function fazerPedidoWhatsApp() {

    let telefone = "551125183890"; 
    
    let mensagem = "Olá, Bolo & Afeto! Estava olhando o site de vocês e gostaria de fazer um pedido.";
    

    let mensagemFormatada = encodeURIComponent(mensagem);
    
    let linkWhatsApp = `https://wa.me/${telefone}?text=${mensagemFormatada}`;
    
    window.open(linkWhatsApp, '_blank');
}


document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
   
        let destino = document.querySelector(this.getAttribute('href'));
      
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});