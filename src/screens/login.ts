import LoginComponent from "../components/LoginPage/Login";
class LOGIN extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        const divFondo = document.createElement('div');
        divFondo.className = 'div-fondo';

        const loginComponent = document.createElement('login-component');
        divFondo.appendChild(loginComponent);

        this.shadowRoot.appendChild(divFondo);
    }
}

window.customElements.define('login-container', LOGIN);
export default LOGIN;