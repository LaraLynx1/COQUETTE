import { registrarUsuario } from '../../services/firebase';
import styles from './Signup.css';
import { dispatch } from '../../store/index';
import { navigate } from '../../types/store';
import { PANTALLAS } from '../../types/enumeraciones';
import { createUserWithEmailAndPassword } from 'firebase/auth';

class SignUpComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	connectedCallback() {
		this.shadowRoot?.querySelector('form')?.addEventListener('submit', this.submitSignup.bind(this));

		const button = this.shadowRoot?.querySelector('#botonregreso');
		button?.addEventListener('click', () => {
			dispatch(navigate(PANTALLAS.LOGIN));
		});
	}

	disconnectedCallback() {
		this.shadowRoot?.querySelector('form')?.removeEventListener('submit', this.submitSignup.bind(this));
	}

  async submitSignup(event: Event) {
	console.log("submitSignup");
    event.preventDefault();
    const username = (
      this.shadowRoot?.querySelector("#username") as HTMLInputElement
    ).value;
    const email = (this.shadowRoot?.querySelector("#email") as HTMLInputElement)
      .value;
    const birthday = (
      this.shadowRoot?.querySelector("#birthday") as HTMLInputElement
    ).value;
    const phone = (this.shadowRoot?.querySelector("#phone") as HTMLInputElement)
      .value;
    const password = (
      this.shadowRoot?.querySelector("#password") as HTMLInputElement
    ).value;

    try {
      const userId = await registrarUsuario(
        username,
        email,
        password,
        birthday,
        phone
      );
      alert(`Usuario registrado con id: ${userId}`);
      dispatch(navigate(PANTALLAS.DASHBOARD));
    } catch (error: any) {
      alert("Error registrando usuario: " + error.message);
    }
  }

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const header = document.createElement('h2');
			header.textContent = 'Sign up Now';

			const form = document.createElement('form');
			form.onsubmit = this.submitSignup.bind(this);

			const usernameInput = document.createElement('input');
			usernameInput.id = 'username';
			usernameInput.type = 'text';
			usernameInput.placeholder = 'Enter your username';
			form.appendChild(usernameInput);

			const emailInput = document.createElement('input');
			emailInput.id = 'email';
			emailInput.type = 'email';
			emailInput.placeholder = 'Enter your email';
			form.appendChild(emailInput);

			const flexContainer = document.createElement('div');
			flexContainer.style.display = 'flex';
			flexContainer.style.justifyContent = 'space-between';

			const birthdayInput = document.createElement('input');
			birthdayInput.id = 'birthday';
			birthdayInput.type = 'date';
			birthdayInput.style.flex = '1';
			birthdayInput.style.marginRight = '4px';
			flexContainer.appendChild(birthdayInput);

			const phoneInput = document.createElement('input');
			phoneInput.id = 'phone';
			phoneInput.type = 'tel';
			phoneInput.placeholder = 'Enter your phone number';
			phoneInput.style.flex = '1';
			phoneInput.style.marginLeft = '4px';
			flexContainer.appendChild(phoneInput);

			form.appendChild(flexContainer);

			const passwordInput = document.createElement('input');
			passwordInput.id = 'password';
			passwordInput.type = 'password';
			passwordInput.placeholder = 'Enter your password';
			form.appendChild(passwordInput);

			const submitButton = document.createElement('button');
			submitButton.setAttribute('id', 'botonregreso');
			submitButton.textContent = 'Sign up';
			submitButton.type = 'submit';
			submitButton.onclick = this.submitSignup.bind(this);
			form.appendChild(submitButton);

			const footerLinks = document.createElement('div');
			footerLinks.className = 'footer-links';
			const accountLink = document.createElement('a');
			accountLink.href = '#';
			accountLink.textContent = 'Already have an account?';
			footerLinks.appendChild(accountLink);

			form.appendChild(footerLinks);

			this.shadowRoot.appendChild(header);
			this.shadowRoot.appendChild(form);

			const cssSignup = document.createElement('style');
			cssSignup.textContent = styles;
			this.shadowRoot?.appendChild(cssSignup);
		}
	}
}

window.customElements.define('sign-up-component', SignUpComponent);
export default SignUpComponent;
