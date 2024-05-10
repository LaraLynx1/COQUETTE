import styles from './login.css';
import { addObserver, dispatch } from '../../store/index';
import { navigate } from '../../types/store';
import { PANTALLAS } from '../../types/enumeraciones';

export class LoginComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.onSubmit = this.onSubmit.bind(this); // Asegurar que 'this' esté vinculado correctamente
        this.render();
    }

    connectedCallback() {
        this.shadowRoot?.querySelector('form')?.addEventListener('submit', this.onSubmit);

        const buttonLogin = this.shadowRoot?.querySelector('#login');
      
        handleLoginButton() {
            dispatch(navigate(PANTALLAS.DASHBOARD));
    }
    }

    attributeChangedCallback(attrName: any, oldVal: any, newVal: any) {
		this.render();
	}

    disconnectedCallback() {
        this.shadowRoot?.querySelector('form')?.removeEventListener('submit', this.onSubmit);
    }

    

    onSubmit(event: any) {
        event.preventDefault();
        const username = (this.shadowRoot?.querySelector('#username') as HTMLInputElement)?.value;
        const password = (this.shadowRoot?.querySelector('#password') as HTMLInputElement)?.value;
        console.log(`Username: ${username}, Password: ${password}`);
        
        
    }

    render() {
        if (this.shadowRoot) {

            this.shadowRoot.innerHTML = ``
            // Create the container for the login form
const formContainer = document.createElement('div');

// Create and append the header
const header = document.createElement('h2');
header.textContent = 'Login Now';
formContainer.appendChild(header);

// Create the form
const form = document.createElement('form');

// Create and append the username label and input
const usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Username';
form.appendChild(usernameLabel);
const usernameInput = document.createElement('input');
usernameInput.id = 'username';
usernameInput.type = 'text';
usernameInput.placeholder = 'Enter your username';
form.appendChild(usernameInput);

// Create and append the password label and input
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';
form.appendChild(passwordLabel);
const passwordInput = document.createElement('input');
passwordInput.id = 'password';
passwordInput.type = 'password';
passwordInput.placeholder = 'Enter your password';
form.appendChild(passwordInput);

// Create and append the remember me checkbox
const rememberMeLabel = document.createElement('label');
const rememberMeCheckbox = document.createElement('input');
rememberMeCheckbox.type = 'checkbox';
rememberMeLabel.appendChild(rememberMeCheckbox);
rememberMeLabel.append(' Remember me'); // Append text node after the checkbox
form.appendChild(rememberMeLabel);

// Create and append the login button
const loginButton = document.createElement('button');
loginButton.className = 'hola';
loginButton.textContent = 'login';
form.appendChild(loginButton);

// Create and append the links container
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

// Append the links container to the form
form.appendChild(linksContainer);

// Finally, append the form to the form container
formContainer.appendChild(form);


        loginButton.addEventListener("click", this.handleLoginButton);
        const cssLogin = this.ownerDocument.createElement('style');
			cssLogin.innerHTML = styles;
			this.shadowRoot?.appendChild(cssLogin);
   } 
}
}

window.customElements.define('login-component', LoginComponent);
