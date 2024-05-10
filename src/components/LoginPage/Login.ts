class LoginComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.onSubmit = this.onSubmit.bind(this); // Asegurar que 'this' esté vinculado correctamente
        this.render();
    }

    connectedCallback() {
        this.shadowRoot?.querySelector('form')?.addEventListener('submit', this.onSubmit);
    }

    disconnectedCallback() {
        this.shadowRoot?.querySelector('form')?.removeEventListener('submit', this.onSubmit);
    }

    onSubmit(event: any) {
        event.preventDefault();
        const username = (this.shadowRoot?.querySelector('#username') as HTMLInputElement)?.value;
        const password = (this.shadowRoot?.querySelector('#password') as HTMLInputElement)?.value;
        console.log(`Username: ${username}, Password: ${password}`);
        // Implementar lógica de autenticación aquí
    }

    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
            <h2>Login Now</h2>
            <form>
                <label>Username</label>
                <input id="username" type="text" placeholder="Enter your username">
                <label>Password</label>
                <input id="password" type="password" placeholder="Enter your password">
                <label>
                    <input type="checkbox"> Remember me
                </label>
                <input type="submit" value="Login">
                <div class="footer-links">
                    <a href="#">Don't have an account?</a>
                    <a href="#">Forgot password?</a>
                </div>
            </form>
        `;
    }
}

window.customElements.define('login-component', LoginComponent);
export default LoginComponent;