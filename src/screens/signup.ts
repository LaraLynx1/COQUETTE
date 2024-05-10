import "../components/indexPadre";
import styles from './signup.css';
import { addObserver, dispatch } from '../store/index';
import { navigate } from '../types/store';
import { PANTALLAS } from '../types/enumeraciones';

class SIGNUP extends HTMLElement {
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

			const SignUpComponent = document.createElement('sign-up-component');
			divFondo.appendChild(SignUpComponent);

			this.shadowRoot.appendChild(divFondo);

			const cssSignup = this.ownerDocument.createElement('style');
			cssSignup.innerHTML = styles;
			this.shadowRoot?.appendChild(cssSignup);
			
		}
	}
}
window.customElements.define('signup-screen', SIGNUP);
export default SIGNUP;
