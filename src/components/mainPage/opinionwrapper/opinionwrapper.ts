import { useropinion } from '../../../data/data';
import Crearopinion, { datacosas3 } from '../shareopinion/shareopinion';
import styles from './opinionwrapper.css';

class wrapperopinion extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	opinions: Crearopinion[] = [];

	connectedCallback() {
		useropinion.forEach((person: any) => {
			const publicate = this.ownerDocument.createElement('crear-opinion') as Crearopinion;
			publicate.setAttribute(datacosas3.userpfp, person.userpfp);
			this.opinions.push(publicate);
		});
		this.render();
	}
	attributeChangedCallback(attrName: datacosas3, oldVal: any, newVal: any) {
		this.render();
	}

	render() {
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
}

window.customElements.define('wrapper-opinion', wrapperopinion);
export default wrapperopinion;
