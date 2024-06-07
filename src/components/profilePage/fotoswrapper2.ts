import { fotosperfil } from '../../data/data';
import { getPosById, getpublicacionByUser, getpublicacionBylike } from '../../services/firebase';
import { appState } from '../../store';
import Crearfoto, { datacosasfotos } from './fotosmias';
import styles from './fotoswrapper.css';

class fotoslike extends HTMLElement {
	profiles: Crearfoto[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const usuario = appState.user;
		const publicacionesByLike = await getpublicacionBylike(usuario!);

		publicacionesByLike.forEach(async (meGusta) => {
			//traer el post basados en el posId
			const publicaciones = await getPosById(meGusta.postId);
			const publicate = this.ownerDocument.createElement('crear-foto') as Crearfoto;

			publicate.setAttribute(datacosasfotos.image, publicaciones[0].image);

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

window.customElements.define('foto-likes', fotoslike);
export default fotoslike;
