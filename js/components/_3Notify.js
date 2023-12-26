class _3Notify extends HTMLElement {
    text = '';
    type = '';
    textComponent;
    static observedAttributes = ['data-text', 'data-type'];

    constructor() {
        super();
    };

    static warn(text = '') {
        const el = new _3Notify();
        el.dataset.text = text;
        el.dataset.type = 'bad';
        return el;
    };

    static success(text = '') {
        const el = new _3Notify();
        el.dataset.text = text;
        el.dataset.type = 'ok';
        return el;
    };

    static info(text = '') {
        const el = new _3Notify();
        el.dataset.text = text;
        el.dataset.type = 'info';
        return el;
    };

    getText() {
        return this.text;
    };

    init() {
        document.body.appendChild(this);
        setTimeout(() => this.remove(), 8000);
    }

    onChange() {
        this.className = `notification notification__${this.type}`;
        if (this.textComponent) this.textComponent.textContent = this.text;
    };

    connectedCallback() {
        this.text = this.getAttribute('data-text');
        this.type = this.getAttribute('data-type');
        this.className = `notification notification__${this.type}`;
        this.innerHTML = `<div class="notification__close" onclick="this.parentElement.remove()"><span class="material-symbols-outlined">close</span></div>`;
        this.textComponent = document.createElement('p');
        this.textComponent.textContent = this.text;
        this.appendChild(this.textComponent);
    };

    disconnectedCallback() { };

    adoptedCallback() { };

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'data-text':
                this.text = newValue;
            case 'data-type':
                this.type = newValue
        }
        this.onChange();
    };
}

customElements.define("s3-notify", _3Notify);