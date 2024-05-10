import {LoginComponent} from "../components/LoginPage/Login";
import { addObserver, dispatch } from '../store/index';
import { navigate } from '../types/store';
import { PANTALLAS } from '../types/enumeraciones';
import styles from './login.css';

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
			this.shadowRoot.innerHTML = ``;
            

        const LoginComponent = document.createElement('div');
        LoginComponent.className = 'div-fondo';
        console.log('hola');

        const LoginCompo = document.createElement('login-component');
        LoginComponent.appendChild(LoginCompo);

        const csslogin = this.ownerDocument.createElement('style');
			csslogin.innerHTML = styles;
			this.shadowRoot?.appendChild(csslogin);

        this.shadowRoot.appendChild(LoginComponent);
   }
 }
}

window.customElements.define('login-container', LOGIN);
export default LOGIN;
