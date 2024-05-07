import '../components/mainPage/mainPagePadre';
import CardFollow from '../components/mainPage/cardFollow/cardfollow';
import publicwrapper from '../components/mainPage/publicwrapper/publicwrapper';
import wrapperopinion from '../components/mainPage/opinionwrapper/opinionwrapper';
import styles from '../dashboard.css';
import cardInicio from '../components/mainPage/sidebar/sidebar';
import cardStories from '../components/mainPage/sidebar/sidebar';

class dashboard extends HTMLElement {
	tarjeta?: CardFollow;
	tarjeta2?: publicwrapper;
	tarjeta3?: wrapperopinion;
	tarjeta4?: cardInicio;
	tarjeta5?: cardStories;

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
			const divtodo = this.ownerDocument.createElement('div');
			divtodo.className = 'div-todo';

			const divcentro = this.ownerDocument.createElement('div');
			divcentro.className = 'div-centro';

			this.tarjeta = this.ownerDocument.createElement('tarjeta-whotofollow') as CardFollow;
			this.tarjeta2 = this.ownerDocument.createElement('public-wrapper') as publicwrapper;
			this.tarjeta2.className = 'contenedorpub';
			this.tarjeta3 = this.ownerDocument.createElement('wrapper-opinion') as wrapperopinion;
			this.tarjeta3.className = 'contenedoropinion';
			this.tarjeta4 = this.ownerDocument.createElement('card-inicio') as cardInicio;
			this.tarjeta5 = this.ownerDocument.createElement('card-stories') as cardStories;

			divcentro.appendChild(this.tarjeta5!);
			divcentro.appendChild(this.tarjeta3!);
			divcentro.appendChild(this.tarjeta2!);

			const divizquierda = this.ownerDocument.createElement('div');
			divizquierda.className = 'div-izquierda';

			divizquierda.appendChild(this.tarjeta4!);

			const divderecha = this.ownerDocument.createElement('div');
			divderecha.className = 'div-derecha';
			divderecha.appendChild(this.tarjeta!);

			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);

			divtodo.appendChild(divizquierda);
			divtodo.appendChild(divcentro);
			divtodo.appendChild(divderecha);
			this.shadowRoot.appendChild(divtodo);
		}
	}
}

window.customElements.define('create-dashbard', dashboard);
export default dashboard;
