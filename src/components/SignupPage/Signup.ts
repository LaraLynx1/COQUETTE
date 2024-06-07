import { db } from '../../services/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../services/firebase';
import styles from './Signup.css';
import { addObserver, dispatch } from '../../store/index';
import { navigate } from '../../types/store';
import { PANTALLAS } from '../../types/enumeraciones';
import { registrarUsuario } from '../../services/firebase';

class SignUpComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	connectedCallback() {
		this.shadowRoot?.querySelector('form')?.addEventListener('submit', this.onSubmit.bind(this));

		const button = this.shadowRoot?.querySelector('#botonregreso');
		button?.addEventListener('click', () => {
			dispatch(navigate(PANTALLAS.LOGIN));
		});
	}

	disconnectedCallback() {
		this.shadowRoot?.querySelector('form')?.removeEventListener('submit', this.onSubmit.bind(this));
	}

	async onSubmit(event: Event) {

		const credentials = await signInWithEmailAndPassword(auth, email, password);
		const userExists = users.some((i) => i.email != user.email);

		event.preventDefault();
		const username = (this.shadowRoot?.querySelector('#username') as HTMLInputElement).value;
		const email = (this.shadowRoot?.querySelector('#email') as HTMLInputElement).value;
		const birthday = (this.shadowRoot?.querySelector('#birthday') as HTMLInputElement).value;
		const phone = (this.shadowRoot?.querySelector('#phone') as HTMLInputElement).value;
		const password = (this.shadowRoot?.querySelector('#password') as HTMLInputElement).value;

		console.log(
			`Username: ${username}, Email: ${email}, Birthday: ${birthday}, Phone: ${phone}, Password: ${password}`
		);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const header = document.createElement('h2');
			header.textContent = 'Sign up Now';

			// Create the form
			const form = document.createElement('form');

			// Create username input
			const usernameInput = document.createElement('input');
			usernameInput.id = 'username';
			usernameInput.type = 'text';
			usernameInput.placeholder = 'Enter your username';
			form.appendChild(usernameInput);

			// Create email input
			const emailInput = document.createElement('input');
			emailInput.id = 'email';
			emailInput.type = 'email';
			emailInput.placeholder = 'Enter your email';
			form.appendChild(emailInput);

			// Create container for birthday and phone with flex layout
			const flexContainer = document.createElement('div');
			flexContainer.style.display = 'flex';
			flexContainer.style.justifyContent = 'space-between';

			// Create birthday input
			const birthdayInput = document.createElement('input');
			birthdayInput.id = 'birthday';
			birthdayInput.type = 'date';
			birthdayInput.style.flex = '1';
			birthdayInput.style.marginRight = '4px';
			flexContainer.appendChild(birthdayInput);

			// Create phone input
			const phoneInput = document.createElement('input');
			phoneInput.id = 'phone';
			phoneInput.type = 'tel';
			phoneInput.placeholder = 'Enter your phone number';
			phoneInput.style.flex = '1';
			phoneInput.style.marginLeft = '4px';
			flexContainer.appendChild(phoneInput);

			// Append the flex container to the form
			form.appendChild(flexContainer);

			// Create password input
			const passwordInput = document.createElement('input');
			passwordInput.id = 'password';
			passwordInput.type = 'password';
			passwordInput.placeholder = 'Enter your password';
			form.appendChild(passwordInput);

			// Create submit button
			const submitButton = document.createElement('button');
			submitButton.setAttribute('id', 'botonregreso');
			submitButton.textContent = 'Sign up';
			submitButton.type = 'submit';
			form.appendChild(submitButton);

			// Create footer links div
			const footerLinks = document.createElement('div');
			footerLinks.className = 'footer-links';
			const accountLink = document.createElement('a');
			accountLink.href = '#';
			accountLink.textContent = 'Already have an account?';
			footerLinks.appendChild(accountLink);

			// Append the footer links to the form
			form.appendChild(footerLinks);

			// Append elements to the shadow root
			this.shadowRoot.appendChild(header);
			this.shadowRoot.appendChild(form);

			// Agregar evento de clic al botón de "crear cuenta"
			// Agregar evento de clic al botón de "crear cuenta"
			submitButton.addEventListener('click', async () => {
				const userId = await registrarUsuario(usernameInput.value, emailInput.value, passwordInput.value);
				alert(`Usuario registrado con id: ${userId}`);
				dispatch(navigate(PANTALLAS.DASHBOARD));
			});
			console.log('Se hizo clic en el botón de "crear cuenta"');
		}

		const cssSignup = document.createElement('style');
		cssSignup.textContent = styles;
		this.shadowRoot?.appendChild(cssSignup);
	}
}

window.customElements.define('sign-up-component', SignUpComponent);
export default SignUpComponent;
