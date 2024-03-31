import './components/mainPage/mainPagePadre';
import CardFollow from './components/mainPage/cardFollow/cardfollow';
import cardInicio from './components/mainPage/sidebar/sidebar';


class appContainer extends HTMLElement {
	tarjeta?: CardFollow;
	barra?: cardInicio;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.tarjeta = this.ownerDocument.createElement('tarjeta-whotofollow') as CardFollow;
		this.barra = this.ownerDocument.createElement('barra-inicio') as cardInicio;
	}
	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot?.appendChild(this.tarjeta!);
			this.shadowRoot?.appendChild(this.barra!);
		}
	}
}


window.customElements.define('app-container', appContainer);
