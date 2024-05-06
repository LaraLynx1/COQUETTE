class login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
		this.render();
	}

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Log in';
			this.shadowRoot?.appendChild(title);

            const userTitle = this.ownerDocument.createElement('h2');
			title.innerText = 'Username';
			this.shadowRoot?.appendChild(title);

         const login = this.ownerDocument.createElement( 'login-page');
        this.shadowRoot?.appendChild(login);   
        }
        
    }
}

customElements.define('login-page', login)