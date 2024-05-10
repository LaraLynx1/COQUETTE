import LoginComponent from "../components/LoginPage/Login";
import { addObserver, dispatch } from '../store/index';
import { navigate } from '../types/store';
import { PANTALLAS } from '../types/enumeraciones';

class LOGIN extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {

        const divFondo = document.createElement('div');
        divFondo.className = 'div-fondo';

        const loginComponent = document.createElement('login-component');
        divFondo.appendChild(loginComponent);

        this.shadowRoot.appendChild(divFondo);
   }
 }
}

window.customElements.define('login-container', LOGIN);
export default LOGIN;
