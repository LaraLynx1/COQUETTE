class Barra extends HTMLElement {
    coquette?: string;
    inicio?: string;
    mensajes?: string;
    notificaciones?: string;
    crear?: string;
    perfil?: string;


    constructor (){
        super();
        this.attachShadow({mode: 'open'});
    }
}