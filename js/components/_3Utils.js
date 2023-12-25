class _3Utils {
    static #registerElements = new Map();
    /**
     * Получить элемент со страницы
     * @param selector селектор
     * @param name опциональный, имя для регистрации
     * @returns _3Element
     */
    static get(selector, name) {
        const temp = document.querySelector(selector);
        return _3Utils.#tryRegister(name, temp);
    };

    /**
     * Создать новый _3Element
     * @param tag tag элемента
     * @param name опциональный, имя для регистрации
     * @returns _3Element элемент
     */
    static create(tag, name) {
        const temp = document.createElement(tag);
        return _3Utils.#tryRegister(name, temp);
    };

    static #tryRegister(name, temp) {
        if (name) {
            const regElement = _3Utils.register(name, temp);
            return regElement;
        } else {
            const el = new _3Element(temp);
            return el;
        }
    }

    /**
     * Зарегистрировать элемент
     * @param name имя для регистрации
     * @param el элемент
     * @returns _3Element элемент
     */
    static register(name, el) {
        if (!name || this.#registerElements.has(name)) {
            throw new Error(`ошибка регистрации элемента ${name} obj=${el.description()}`);
        }
        if (!(el instanceof _3Element)) {
            el = new _3Element(el);
        }

        this.#registerElements.set(name, el);
        return el;
    };

    static regElement(name) {
        if (!name || !this.#registerElements.has(name)) {
            throw new Error(`ошибка получения элемента ${name}`);
        }
        return this.#registerElements.get(name);
    }


    /**
     * Временная смена класса
     * @param el елемент
     * @param time время
     * @param addClass класс, который на время добавится
     * @param removeClass класс который на время уберется
     */
    static timeClassToggle(el, time, addClass, removeClass) {
        el.withClass(addClass);
        removeClass && el.withoutClass(removeClass);

        setTimeout(() => {
            removeClass && el.withClass(removeClass);
            el.withoutClass(addClass);
        }, time);
    };
}

/**
 * Прокси для работы с утилитами
 * @type {_3Utils}
 * @private
 */
const _$ = _3Utils;