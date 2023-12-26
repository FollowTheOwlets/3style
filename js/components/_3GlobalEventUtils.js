class _3GlobalEventUtils {
    static DOMload (fun, options) {
        document.addEventListener("DOMContentLoaded", fun, options);
    }
}