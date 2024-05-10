import styles from './shareopinion.css';
import { publics } from '../../../data/data';
import { PANTALLAS } from '../../../types/enumeraciones';
import { navigate } from '../../../types/store';
import { dispatch } from '../../../store/index';

export enum datacosas3 {
	'userpfp' = 'userpfp',
}

class Crearopinion extends HTMLElement {
	userpfp?: string;
	modal?: HTMLElement;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const fijateEn: Record<datacosas3, null> = {
			userpfp: null,
		};
		return Object.keys(fijateEn);
	}

	onClickPost() {
		if (this.innerHTML == 'POSTED') {
			this.innerHTML = 'POST';
			this.className = 'habilitar';
		} else {
			this.innerHTML = 'POSTED';
			this.className = 'deshabilitar';
		}
	}

	connectedCallback() {
		this.render();
		//this.shadowRoot?.querySelector('#post')?.addEventListener('click', this.onClickPost);

		const valorInputimagenpost = this.shadowRoot?.querySelector('#imagenpost') as HTMLInputElement;
		const valorInputusuario = this.shadowRoot?.querySelector('#usuario') as HTMLInputElement;
		const valorInputusuariopfp = this.shadowRoot?.querySelector('#usuariopfp') as HTMLInputElement;
		const valorInputmegusta = this.shadowRoot?.querySelector('#megusta') as HTMLInputElement;

		const buttonGuardar = this.shadowRoot?.querySelector('#guardar');
		buttonGuardar?.addEventListener('click', () => {
			this.modal!.className! = 'contenedorpost ocultarpost';
			/* 			console.log('valor del campo', valorInputusuario!.value);
			console.log('valor del campo', valorInputusuariopfp!.value);
			console.log('valor del campo', valorInputimagenpost!.value);
			console.log('valor del campo', valorInputmegusta!.value); */
			const postData = {
				user: valorInputusuario!.value,
				userpfp: valorInputusuariopfp!.value,
				image: valorInputimagenpost!.value,
				likes: valorInputmegusta!.value,
			};
			publics.push(postData);
			dispatch(navigate(PANTALLAS.DASHBOARD));
		});

		const buttonpostear = this.shadowRoot?.querySelector('#post');

		buttonpostear?.addEventListener('click', () => {
			this.modal!.className! = 'contenedorpost mostrarpost';
		});
		//push array de post
		//publics.push({})
	}

	attributeChangedCallback(attrName: datacosas3, oldVal: any, newVal: any) {
		switch (attrName) {
			default:
				this[attrName] = newVal;
				break;
		}

		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

				<div class="headeropinion">
					<img class="fotopfp" src="${this.userpfp}" />
          <h2>What is happening?</h2>
        </div>

        <div class="textopinion">
        <input id="write" type="text" placeholder="write" />
        <button id="post">POST</button>

        </div>
				<div class="linea"></div>
      `;
			this.modal = this.ownerDocument.createElement('div');
			this.modal.className = 'contenedorpost ocultarpost';
			const formulario = this.ownerDocument.createElement('div');
			formulario.className = 'formulario';
			const titulo = this.ownerDocument.createElement('H1');
			formulario.appendChild(titulo);
			titulo.innerHTML = 'Datos del Post';

			const usuario = this.ownerDocument.createElement('input');
			usuario.placeholder = 'usuario';
			usuario.setAttribute('id', 'usuario');
			formulario.appendChild(usuario);

			const usuariopfp = this.ownerDocument.createElement('input');
			usuariopfp.placeholder = 'pfp';
			usuariopfp.setAttribute('id', 'usuariopfp');
			formulario.appendChild(usuariopfp);

			const imagenpost = this.ownerDocument.createElement('input');
			imagenpost.placeholder = 'imagen';
			imagenpost.setAttribute('id', 'imagenpost');
			formulario.appendChild(imagenpost);

			const megusta = this.ownerDocument.createElement('input');
			megusta.placeholder = 'me gustan';
			megusta.setAttribute('id', 'megusta');
			formulario.appendChild(megusta);

			const guardar = this.ownerDocument.createElement('button');
			guardar.setAttribute('id', 'guardar');
			formulario.appendChild(guardar);
			guardar.innerHTML = 'SAVE';

			this.modal.appendChild(formulario);
			this.shadowRoot.appendChild(this.modal);
		}
		const cssprofile = this.ownerDocument.createElement('style');
		cssprofile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssprofile);
	}
}

window.customElements.define('crear-opinion', Crearopinion);
export default Crearopinion;
