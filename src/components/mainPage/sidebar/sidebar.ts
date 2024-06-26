import styles from './sidebar.css';

export enum databarra {
	'coquette' = 'coquette',
	'inicio' = 'inicio',
	'busqueda' = 'busqueda',
	'mensajes' = 'mensajes',
	'inotificaciones' = 'notificaciones',
	'crear' = 'crear',
	'perfil' = 'perfil',
}

class cardInicio extends HTMLElement {
	coquette?: string;
	inicio?: string;
	busqueda?: string;
	mensajes?: string;
	notificaciones?: string;
	crear?: string;
	perfil?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<databarra, null> = {
			coquette: null,
			inicio: null,
			busqueda: null,
			mensajes: null,
			notificaciones: null,
			crear: null,
			perfil: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: databarra, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<style>
			${styles}
			</style>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
			<div class="sidebar">
				<h2 class="etiqueta">Coquette</h2>
				<ul class="menuiconos">
					<li><i class="bx bx-home-alt"></i><a class="texto" href="index.html">Inicio</a></li>
					<li><i class="bx bx-search-alt-2"></i> <a class="texto" href="#">Búsqueda</a></li>
					<li><i class="bx bx-message-square-detail"></i> <a class="texto" href="#">Mensajes</a></li>
					<li><i class="bx bx-bell"></i> <a class="texto" href="#">Notificaciones</a></li>
					<li><i class="bx bxs-plus-circle"></i> <a class="texto" href="#">Crear</a></li>
					<li><i class="bx bxs-user"></i> <a class="texto" href="#">Perfil</a></li>
				</ul>
			</div>
          `;
		}
		const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

customElements.define('card-inicio', cardInicio);
export default cardInicio;
