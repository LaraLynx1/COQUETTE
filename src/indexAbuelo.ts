import './components/mainPage/mainPagePadre';
import CardFollow from './components/mainPage/cardFollow/cardfollow';
import publicwrapper from './components/mainPage/publicwrapper/publicwrapper';
import { useropinion } from './data/data';
import Crearopinion, { datacosas3 } from './components/mainPage/shareopinion/shareopinion';
import styles from './components/mainPage/shareopinion/shareopinion.css';

class appContainer extends HTMLElement {
	tarjeta?: CardFollow;
	tarjeta2?: publicwrapper;
	tarjeta3?: Crearopinion;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	opinions: Crearopinion[] = [];

	connectedCallback() {
		useropinion.forEach((person) => {
			const publicate = this.ownerDocument.createElement('crear-opinion') as Crearopinion;
			publicate.setAttribute(datacosas3.userpfp, person.userpfp);
			this.opinions.push(publicate);
		});
		this.render();
		this.render2();
	}
	attributeChangedCallback(attrName: datacosas3, oldVal: any, newVal: any) {
		this.render();
		this.render2();
	}

	render2() {
		if (this.shadowRoot) {
			const tarjeta3 = this.ownerDocument.createElement('div');
			tarjeta3.className = 'wrapper-opinion';

			this.opinions.forEach((opinion) => {
				tarjeta3.appendChild(opinion);
			});

			this.shadowRoot?.appendChild(tarjeta3);
			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);
		}
	}

	render() {
		this.tarjeta = this.ownerDocument.createElement('tarjeta-whotofollow') as CardFollow;
		this.tarjeta2 = this.ownerDocument.createElement('public-wrapper') as publicwrapper;

		if (this.shadowRoot) {
			this.shadowRoot?.appendChild(this.tarjeta!);
			this.shadowRoot?.appendChild(this.tarjeta2!);
		}
	}
}

window.customElements.define('app-container', appContainer);
