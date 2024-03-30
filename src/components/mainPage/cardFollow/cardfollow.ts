import { whotofollow } from '../../../data/data';
import CrearWhotofollow, { datacosas } from '../toFollow/tofollow';
import styles from './cardfollow.css';

class CardFollow extends HTMLElement {
	profiles: CrearWhotofollow[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		console.log('dos');
	}

	connectedCallback() {
		console.log('yyyy');

		whotofollow.forEach((profile) => {
			const recomcard = this.ownerDocument.createElement('crear-whotofollow') as CrearWhotofollow;
			recomcard.setAttribute(datacosas.image, profile.image);
			recomcard.setAttribute(datacosas.name, profile.name);
			recomcard.setAttribute(datacosas.arroba, profile.arroba);

			this.profiles.push(recomcard);
		});
		this.render();
	}

	attributeChangedCallback(attrName: datacosas, oldVal: any, newVal: any) {
		this.render();
	}
	render() {
		console.log('xxx');

		if (this.shadowRoot) {
			this.profiles.forEach((profile) => {
				this.shadowRoot?.appendChild(profile);
			});
		}

		const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

window.customElements.define('tarjeta-seguir', CardFollow);
export default CardFollow;
