import '../components/mainPage/mainPagePadre';
import styles from './profile.css';
import { fotosperfil } from '../data/data';
import fotowrapper from '../components/profilePage/fotoswrapper';
import fotoslike from '../components/profilePage/fotoswrapper2';
import { addObserver, appState, dispatch } from '../store/index';
import { navigate } from '../types/store';
import { PANTALLAS } from '../types/enumeraciones';
import { logOut } from '../services/firebase';

class Perfil extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const button = this.shadowRoot?.querySelector('#cerrarperfil');

		button?.addEventListener('click', () => {
			dispatch(navigate(PANTALLAS.DASHBOARD));
		});

		const button2 = this.shadowRoot?.querySelector('#cerrarsesion');
		button2?.addEventListener('click', () => {
			this.shadowRoot?.querySelector('form')?.addEventListener('submit', this.submitLogout.bind(this));
		});
	}

	disconnectedCallback() {
		this.shadowRoot?.querySelector('form')?.removeEventListener('submit', this.submitLogout.bind(this));
	}

	attributeChangedCallback(attrName: any, oldVal: any, newVal: any) {
		this.render();
	}

	async submitLogout(event: Event) {
		event.preventDefault();
		try {
			const verify = await logOut();
			if (verify) {
				dispatch(navigate(PANTALLAS.LOGIN));
			} else {
				alert('Error al cerrar sesión');
			}
		} catch (error) {
			console.log(error);
			alert(error);
		}
	}

	render() {
		const ususriopfp = appState.userpfp;
		const usuario = appState.user;
		if (this.shadowRoot) {
			const form = document.createElement('form');
			form.onsubmit = this.submitLogout.bind(this);

			const divfondo = this.ownerDocument.createElement('div');
			divfondo.className = 'div-fondo';

			const divarriba = this.ownerDocument.createElement('div');
			divarriba.className = 'div-arriba';

			const divarribafoto = this.ownerDocument.createElement('div');
			divarribafoto.className = 'div-arribafoto';

			const fotodeperfil = this.ownerDocument.createElement('img');
			fotodeperfil.className = 'fotopfp';
			fotodeperfil.setAttribute('src', ususriopfp!);

			divarribafoto.appendChild(fotodeperfil);

			const divarribatexto = this.ownerDocument.createElement('div');
			divarribatexto.className = 'div-arribatexto';

			const divarribatextonombre = this.ownerDocument.createElement('div');
			divarribatextonombre.className = 'div-arribatextoboton';

			const usrname = this.ownerDocument.createElement('h3');
			usrname.innerHTML = usuario!;

			const btncerrar = this.ownerDocument.createElement('button');
			btncerrar.setAttribute('id', 'cerrarperfil');
			btncerrar.innerHTML = 'regresar';

			divarribatextonombre.appendChild(usrname);
			divarribatextonombre.appendChild(btncerrar);

			const btneditar = this.ownerDocument.createElement('button');
			btneditar.setAttribute('id', 'editarperfil');
			btneditar.innerHTML = 'Editar Perfil';

			const btSalida = this.ownerDocument.createElement('button');
			btSalida.setAttribute('id', 'cerrarsesion');
			btSalida.textContent = 'Salir';
			btSalida.type = 'submit';
			btSalida.onclick = this.submitLogout.bind(this);
			btSalida.innerHTML = 'Salir';
			form.appendChild(btSalida);

			const seguidores = this.ownerDocument.createElement('h3');
			seguidores.innerHTML = '300 seguidores';

			divarribatexto.appendChild(divarribatextonombre);
			divarribatexto.appendChild(form);
			divarribatexto.appendChild(btneditar);
			divarribatexto.appendChild(seguidores);

			const divalinea = this.ownerDocument.createElement('div');
			divalinea.className = 'div-linea';

			divarribatexto.appendChild(divalinea);

			divarriba.appendChild(divarribafoto);
			divarriba.appendChild(divarribatexto);

			divfondo.appendChild(divarriba);

			const divfotos = this.ownerDocument.createElement('div');
			divfotos.className = 'div-fotos';

			const misfotos = this.ownerDocument.createElement('h3');
			misfotos.innerHTML = 'Mis fotos:';
			divfotos.appendChild(misfotos);

			const fotos = this.ownerDocument.createElement('foto-wrapper') as fotowrapper;
			divfotos.appendChild(fotos);
			divfondo.appendChild(divfotos);
			//hasta aqui
			const divalinea2 = this.ownerDocument.createElement('div');
			divalinea2.className = 'div-linea2';
			divfondo.appendChild(divalinea2);

			const divlikes = this.ownerDocument.createElement('div');
			divlikes.className = 'div-fotos';

			const misfotoslikes = this.ownerDocument.createElement('h3');
			misfotoslikes.innerHTML = 'Mis likes:';
			divlikes.appendChild(misfotoslikes);

			const fotoslikes = this.ownerDocument.createElement('foto-likes') as fotoslike;
			divlikes.appendChild(fotoslikes);
			divfondo.appendChild(divlikes);
			//hasta aqui

			const csscardfollow = this.ownerDocument.createElement('style');
			csscardfollow.innerHTML = styles;
			this.shadowRoot?.appendChild(csscardfollow);

			this.shadowRoot.appendChild(divfondo);
		}
	}
}

window.customElements.define('create-perfil', Perfil);
export default Perfil;
