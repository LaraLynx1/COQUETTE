import { subirImagen } from "../services/firebase";
import { setUserPfp } from "../types/store";
import { SomeActions } from "../types/store";
import { PANTALLAS } from "../types/enumeraciones";
import { navigate } from '../types/store';
import { addObserver, appState, dispatch } from '../store/index';


export class editarPerfil extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
    connectedCallback() {
        this.render();
        const button = this.shadowRoot?.querySelector('#cerrarperfil');

		button?.addEventListener('click', () => {
			dispatch(navigate(PANTALLAS.PERFIL));
		});
    }
    disconnectedCallback() {
        this.shadowRoot?.querySelector('form')?.removeEventListener('submit', this.submitEdit.bind(this));
    }

    async submitEdit(event: Event) {
        event.preventDefault();
        const user = (this.shadowRoot?.querySelector('#user') as HTMLInputElement).value;
        const userpfp = (this.shadowRoot?.querySelector('#userpfp') as HTMLInputElement).value;

        try {
            let profileImageUrl = '';
            if (File) {
              
            }
         
        

        } catch (error: any) {
            alert('Error actualizando perfil: ' + error.message);
        }

    }

    render() {
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = '';
            
            const editContainer = document.createElement('div');
            const header = document.createElement('h2');
			header.textContent = 'Editar Perfil';
            editContainer.appendChild(header);

            const form = document.createElement('form');
			form.onsubmit = this.submitEdit.bind(this);

            const btncerrar = this.ownerDocument.createElement('button');
			btncerrar.setAttribute('id', 'cerrarperfil');
			btncerrar.innerHTML = 'regresar';

            

            const usernameInput = document.createElement('input');
			usernameInput.id = 'username';
			usernameInput.type = 'text';
			usernameInput.placeholder = 'Change username';



            this.shadowRoot.appendChild(editContainer);
        }
    }

}
window.customElements.define('editar-perfil', editarPerfil);