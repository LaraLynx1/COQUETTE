import styles from './Login.css';
import { addObserver, dispatch } from '../../store/index';
import { loginUser, navigate, setUserPfp } from '../../types/store';
import { PANTALLAS } from '../../types/enumeraciones';
import { login } from '../../services/firebase';

export class LoginComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		/*         this.onSubmit = this.onSubmit.bind(this);
        this.handleLoginButton = this.handleLoginButton.bind(this); */
		this.render();
	}

	connectedCallback() {
		const button = this.shadowRoot?.querySelector('#botonregreso');

		button?.addEventListener('click', () => {
			this.shadowRoot?.querySelector('form')?.addEventListener('submit', this.submitLogin.bind(this));
		});
	}

	disconnectedCallback() {
		this.shadowRoot?.querySelector('form')?.removeEventListener('submit', this.submitLogin.bind(this));
	}
	/*
    handleLoginButton(event:any) {
        event.preventDefault();
        dispatch(navigate(PANTALLAS.DASHBOARD));
    }
 */
	async submitLogin(event: Event) {
		event.preventDefault();
		const email = (this.shadowRoot?.querySelector('#username') as HTMLInputElement).value;
		const password = (this.shadowRoot?.querySelector('#password') as HTMLInputElement).value;

		try {
			const usuario = await login(email, password);
			console.log('userId', usuario?.user);

			if (usuario) {
				//dispatch de accion para almacnar usuario en el appState
				dispatch(loginUser(usuario.user));
				dispatch(setUserPfp(usuario.profile));
				//Dispatch para cambio de pantalla Dashboard
				dispatch(navigate(PANTALLAS.DASHBOARD));
			} else {
				alert('Error al iniciar sesión');
			}
		} catch (error) {
			console.log('rror login', error);
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ''; 

			const formContainer = document.createElement('div');
			const header = document.createElement('h2');
			header.textContent = 'Login Now';

			formContainer.appendChild(header);
			const form = document.createElement('form');
			form.onsubmit = this.submitLogin.bind(this);

			const usernameLabel = document.createElement('label');
			usernameLabel.textContent = 'Email';

			form.appendChild(usernameLabel);
			const usernameInput = document.createElement('input');
			usernameInput.id = 'username';
			usernameInput.type = 'text';
			usernameInput.placeholder = 'Enter your email';

			form.appendChild(usernameInput);
			const passwordLabel = document.createElement('label');
			passwordLabel.textContent = 'Password';
			form.appendChild(passwordLabel);
			const passwordInput = document.createElement('input');

			passwordInput.id = 'password';
			passwordInput.type = 'password';
			passwordInput.placeholder = 'Enter your password';
			form.appendChild(passwordInput);

			const rememberMeLabel = document.createElement('label');
			const rememberMeCheckbox = document.createElement('input');

			rememberMeCheckbox.type = 'checkbox';
			rememberMeLabel.appendChild(rememberMeCheckbox);
			rememberMeLabel.append(' Remember me');
			form.appendChild(rememberMeLabel);

			const loginButton = document.createElement('button');
			loginButton.type = 'submit';
			loginButton.onclick = this.submitLogin.bind(this);
			loginButton.setAttribute('id', 'botonregreso');
			loginButton.textContent = 'Login';

			form.appendChild(loginButton);
			const linksContainer = document.createElement('div');
			linksContainer.className = 'footer-links';
			const signUpLink = document.createElement('a');
			signUpLink.href = '#';

			signUpLink.textContent = 'Don’t have an account?';
			linksContainer.appendChild(signUpLink);
			const forgotPasswordLink = document.createElement('a');
			forgotPasswordLink.href = '#';

			forgotPasswordLink.textContent = 'Forgot password?';
			linksContainer.appendChild(forgotPasswordLink);
			form.appendChild(linksContainer);
			formContainer.appendChild(form);
			this.shadowRoot.appendChild(formContainer);

			const cssLogin = document.createElement('style');
			cssLogin.textContent = styles;
			this.shadowRoot.appendChild(cssLogin);
		}
	}
}

window.customElements.define('login-component', LoginComponent);
