import './components/mainPage/mainPagePadre';
import CardFollow from './components/mainPage/cardFollow/cardfollow';
import publicwrapper from './components/mainPage/publicwrapper/publicwrapper';

class appContainer extends HTMLElement {
	tarjeta?: CardFollow;
	tarjeta2?: publicwrapper;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.tarjeta = this.ownerDocument.createElement('tarjeta-whotofollow') as CardFollow;
		this.tarjeta2 = this.ownerDocument.createElement('public-wrapper') as publicwrapper;
	}
	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot?.appendChild(this.tarjeta!);
			this.shadowRoot?.appendChild(this.tarjeta2!);
		}
	}
}

window.customElements.define('app-container', appContainer);
