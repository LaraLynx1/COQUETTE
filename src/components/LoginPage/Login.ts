class login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
		this.render();
	}

    render(){
        const login = this.ownerDocument.createElement( 'login-page');
        this.shadowRoot?.appendChild(login);
    }
}

customElements.define('login-page', login)