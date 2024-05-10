import styles from './Login.css';
import { addObserver, dispatch } from '../../store/index';
import { navigate } from '../../types/store';
import { PANTALLAS } from '../../types/enumeraciones';

export class LoginComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
/*         this.onSubmit = this.onSubmit.bind(this);
        this.handleLoginButton = this.handleLoginButton.bind(this); */
        this.render();
    }

    connectedCallback() {
        this.shadowRoot?.querySelector('form')?.addEventListener('submit', this.onSubmit);

        const button = this.shadowRoot?.querySelector('#botonregreso');

        button?.addEventListener('click', () => {
			dispatch(navigate(PANTALLAS.DASHBOARD));
		});
    }
    
    disconnectedCallback() {
        this.shadowRoot?.querySelector('form')?.removeEventListener('submit', this.onSubmit);
    }
/* 
    handleLoginButton(event:any) {
        event.preventDefault(); 
        dispatch(navigate(PANTALLAS.DASHBOARD));
    }
 */
    onSubmit(event: any) {
        const username = (this.shadowRoot!.querySelector('#username') as HTMLInputElement).value;
const password = (this.shadowRoot!.querySelector('#password') as HTMLInputElement).value;
console.log(`Username: ${username}, Password: ${password}`);

    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ''; // Asegúrate de limpiar cualquier contenido anterior

           
            const formContainer = document.createElement('div');
            const header = document.createElement('h2');
            header.textContent = 'Login Now';

            formContainer.appendChild(header);
            const form = document.createElement('form');
            const usernameLabel = document.createElement('label');
            usernameLabel.textContent = 'Username';

            form.appendChild(usernameLabel);
            const usernameInput = document.createElement('input');
            usernameInput.id = 'username';
            usernameInput.type = 'text';
            usernameInput.placeholder = 'Enter your username';

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
            loginButton.setAttribute('id', 'botonregreso')
            loginButton.textContent = 'login';

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
