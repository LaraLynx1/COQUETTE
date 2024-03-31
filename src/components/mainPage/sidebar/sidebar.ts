import styles from '../../mainPage/sidebar/sidebar.css'

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

    // static get observedAttributes() {
	// 	const fijacion: Record<databarra, null> = {
	// 		coquette: null,
	// 		inicio: null,
	// 		busqueda: null,
	// 		mensajes: null,
	// 		notificaciones: null,
	// 		crear: null,
	// 		perfil: null,
	// 	};
	// 	return Object.keys(fijacion);
	// }

    connectedCallback() {
		this.render();
	}

    render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <div class="sidebar">
            <h2 class="etiqueta">Coquette</h2>
            <ul>
				<li><a class="texto" href="index.html">${this.inicio}</a></li>
                <li><a class="texto" href="#">${this.busqueda}</a></li>
                <li><a class="texto" href="#">${this.mensajes}</a></li>
                <li><a class="texto" href="#">${this.notificaciones}</a></li>
                <li><a class="texto" href="#">${this.crear}</a></li>
                <li><a class="texto" href="#">${this.perfil}</a></li>
            </ul>
        </div>
          `;
		}
        const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

window.customElements.define('card-inicio', cardInicio);
export default cardInicio;