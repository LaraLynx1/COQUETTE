import { whotofollow } from './data/data';
import CardFollow from './components/mainPage/cardFollow/cardfollow';
import CrearWhotofollow, { datacosas } from './components/mainPage/toFollow/tofollow';

class appContainer extends HTMLElement {
	profiles: CrearWhotofollow[] = [];
	tarjeta?: CardFollow;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.tarjeta = this.ownerDocument.createElement('tarjeta-seguir') as CardFollow;

		whotofollow.forEach((profile) => {
			const recomcard = this.ownerDocument.createElement('crear-whotofollow') as CrearWhotofollow;
			recomcard.setAttribute(datacosas.image, profile.image);
			recomcard.setAttribute(datacosas.name, profile.name);
			recomcard.setAttribute(datacosas.arroba, profile.arroba);

			this.profiles.push(recomcard);
		});
	}
	connectedCallback() {
		console.log('antes de render abuelo');

		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot?.appendChild(this.tarjeta!);
			console.log('despues d apend child abuelo', this.tarjeta);
			this.profiles.forEach((profile) => {
				this.shadowRoot?.appendChild(profile);
			});
		}
	}
}

window.customElements.define('app-container', appContainer);
