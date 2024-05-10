import SignUpComponent from '../components/SignupPage/Signup';
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

			const SignUpComponent = document.createElement('signup-component');
			divFondo.appendChild(SignUpComponent);

			this.shadowRoot.appendChild(divFondo);
		}
	}
}
window.customElements.define('signup-screen', SIGNUP);
export default SIGNUP;
