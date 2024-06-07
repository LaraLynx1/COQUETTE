import { getpublicaciones } from '../../../services/firebase';
import Crearpublicacion, { datacosas2 } from '../publication/publicacion';
import styles from './publicwrapper.css';

class publicwrapper extends HTMLElement {
	profiles: Crearpublicacion[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const publicaciones = await getpublicaciones();

		this.profiles = [];
		publicaciones.forEach((publication) => {
			const publicate = this.ownerDocument.createElement('crear-publicacion') as Crearpublicacion;
			publicate.setAttribute('idpost', publication.id);
			publicate.setAttribute(datacosas2.user, publication.user);
			publicate.setAttribute(datacosas2.userpfp, publication.userpfp);
			publicate.setAttribute(datacosas2.image, publication.image);
			publicate.setAttribute(datacosas2.likes, publication.likes);
			this.profiles.push(publicate);
		});
		this.render();
	}
	attributeChangedCallback(attrName: datacosas2, oldVal: any, newVal: any) {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			const tarjeta2 = this.ownerDocument.createElement('div');
			tarjeta2.className = 'wrapper-publicacion';

			this.profiles.forEach((profile) => {
				tarjeta2.appendChild(profile);
			});

			this.shadowRoot?.appendChild(tarjeta2);

			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);
		}
	}
}

window.customElements.define('public-wrapper', publicwrapper);
export default publicwrapper;
