import './components/mainPage/mainPagePadre';
import CardFollow from './components/mainPage/cardFollow/cardfollow';

class appContainer extends HTMLElement {
	tarjeta?: CardFollow;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.tarjeta = this.ownerDocument.createElement('tarjeta-whotofollow') as CardFollow;
	}
	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot?.appendChild(this.tarjeta!);
		}
	}
}

window.customElements.define('app-container', appContainer);
