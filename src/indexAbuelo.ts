import './components/mainPage/mainPagePadre';
import CardFollow from './components/mainPage/cardFollow/cardfollow';
import publicwrapper from './components/mainPage/publicwrapper/publicwrapper';
import wrapperopinion from './components/mainPage/opinionwrapper/opinionwrapper';
import styles from './abuelo.css';

class appContainer extends HTMLElement {
	tarjeta?: CardFollow;
	tarjeta2?: publicwrapper;
	tarjeta3?: wrapperopinion;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
	attributeChangedCallback(attrName: any, oldVal: any, newVal: any) {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const divcentro = this.ownerDocument.createElement('div');
			divcentro.className = 'div-centro';

			this.tarjeta = this.ownerDocument.createElement('tarjeta-whotofollow') as CardFollow;
			this.tarjeta2 = this.ownerDocument.createElement('public-wrapper') as publicwrapper;
			this.tarjeta3 = this.ownerDocument.createElement('wrapper-opinion') as wrapperopinion;

			divcentro.appendChild(this.tarjeta3!);
			divcentro.appendChild(this.tarjeta2!);

			/* 			this.shadowRoot?.appendChild(this.tarjeta!);
			this.shadowRoot?.appendChild(this.tarjeta2!);
			this.shadowRoot?.appendChild(this.tarjeta3!); */
			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);

			this.shadowRoot.appendChild(divcentro);
			this.shadowRoot?.appendChild(this.tarjeta!);
		}
	}
}

window.customElements.define('app-container', appContainer);
