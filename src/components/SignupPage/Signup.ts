import styles from '.signup.css';
import { addObserver, dispatch } from '../../store/index';
import { navigate } from '../../types/store';
import { PANTALLAS } from '../../types/enumeraciones';

class SignUpComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.shadowRoot?.querySelector('form')?.addEventListener('submit', this.onSubmit.bind(this));
    }

    disconnectedCallback() {
        this.shadowRoot?.querySelector('form')?.removeEventListener('submit', this.onSubmit.bind(this));
    }

    onSubmit(event: Event) {
        event.preventDefault();
        const username = (this.shadowRoot?.querySelector('#username') as HTMLInputElement).value;
        const email = (this.shadowRoot?.querySelector('#email') as HTMLInputElement).value;
        const birthday = (this.shadowRoot?.querySelector('#birthday') as HTMLInputElement).value;
        const phone = (this.shadowRoot?.querySelector('#phone') as HTMLInputElement).value;
        const password = (this.shadowRoot?.querySelector('#password') as HTMLInputElement).value;
        console.log(`Username: ${username}, Email: ${email}, Birthday: ${birthday}, Phone: ${phone}, Password: ${password}`);
        const buttonSignUp = this.shadowRoot?.querySelector('#signup');
        buttonSignUp?.addEventListener('click', () => {
			dispatch(navigate(PANTALLAS.DASHBOARD));
		});
        // Aquí puedes añadir la lógica para procesar el registro.
    }

    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
            <h2>Sign up Now</h2>
            <form>
                <input id="username" type="text" placeholder="Enter your username">
                <input id="email" type="email" placeholder="Enter your email">
                <div style="display: flex; justify-content: space-between;">
                    <input id="birthday" type="date" style="flex: 1; margin-right: 4px;">
                    <input id="phone" type="tel" placeholder="Enter your phone number" style="flex: 1; margin-left: 4px;">
                </div>
                <input id="password" type="password" placeholder="Enter your password">
                <input type="submit" value="Sign up">
                <div class="footer-links">
                    <a href="#">Already have an account?</a>
                </div>
            </form>
        `;
    }
}

customElements.define('sign-up-component', SignUpComponent);
export default SignUpComponent;