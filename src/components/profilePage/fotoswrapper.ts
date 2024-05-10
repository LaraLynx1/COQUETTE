import { fotosperfil } from '../../data/data';
import Crearfoto, { datacosasfotos } from './fotosmias';
import styles from './fotoswrapper.css';

class fotowrapper extends HTMLElement {
	profiles: Crearfoto[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		fotosperfil.forEach((foto) => {
			const publicate = this.ownerDocument.createElement('crear-foto') as Crearfoto;
			publicate.setAttribute(datacosasfotos.image, foto.image);

			this.shadowRoot?.appendChild(publicate);
			this.profiles.push(publicate);
		});
		this.render();
	}
	attributeChangedCallback(attrName: datacosasfotos, oldVal: any, newVal: any) {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			const fotocuadrara = this.ownerDocument.createElement('div');
			fotocuadrara.className = 'foto-contenedor';

			this.profiles.forEach((profile) => {
				fotocuadrara.appendChild(profile);
			});

			this.shadowRoot?.appendChild(fotocuadrara);

			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);
		}
	}
}

window.customElements.define('foto-wrapper', fotowrapper);
export default fotowrapper;
