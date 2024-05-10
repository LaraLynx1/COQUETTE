import SignUpComponent from '../components/SignupPage/Signup';
import { addObserver, dispatch } from '../store/index';
import { navigate } from '../types/store';
import { PANTALLAS } from '../types/enumeraciones';

class SIGNUP extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            
        }
}
}