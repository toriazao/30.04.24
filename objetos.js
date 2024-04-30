class Toria {
    constructor (site) {
        this.site = site; //variável de interface
        // ações
    }

    exibirSite () {
        // ações
        window.open(this.site);
    } 
}

var novoToria = new Toria ("https://www.cifraclub.com.br/tie/a-noite/");
novoToria.exibirSite();