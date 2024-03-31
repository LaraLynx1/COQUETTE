import { publics } from '../../../data/data';
import Crearpublicacion, { datacosas2 } from '../publication/publicacion';
import styles from './publicwrapper.css';

class publicwrapper extends HTMLElement {
	profiles: Crearpublicacion[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		publics.forEach((publication) => {
			const publicate = this.ownerDocument.createElement('crear-publicacion') as Crearpublicacion;
			publicate.setAttribute(datacosas2.user, publication.user);
			publicate.setAttribute(datacosas2.userpfp, publication.userpfp);
			publicate.setAttribute(datacosas2.image, publication.image);
			publicate.setAttribute(datacosas2.likes, publication.likes);
			this.shadowRoot?.appendChild(publicate);
			this.profiles.push(publicate);
		});
		this.render();
	}
	attributeChangedCallback(attrName: datacosas2, oldVal: any, newVal: any) {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const tarjeta2 = this.ownerDocument.createElement('div');
			tarjeta2.className = 'wrapper-publicacion';

			this.shadowRoot?.appendChild(tarjeta2);
		}
		const csscardfollow = this.ownerDocument.createElement('style');
		csscardfollow.innerHTML = styles;
		this.shadowRoot?.appendChild(csscardfollow);
	}
}

window.customElements.define('public-wrapper', publicwrapper);
export default publicwrapper;
