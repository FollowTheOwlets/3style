_3GlobalEventUtils.DOMload(() => {
    _3Utils.forEach(".accardion-item__header", (el) => {
        let group = el.dataset.group;
        el.__element__.addEventListener('click', () => {
            const target = el._$(`input[name="${group}"]`);
            const state = target.prop('checked');

            _3Utils.forEach(`input[name="${group}"]`, (el) => {
                if (!el.equals(target)) {
                    el.prop('checked', false);
                    el.parent.withoutClass("active");
                }
            });

            target.prop('checked', !state);
            if (!state) {
                el.withClass("active");
            } else {
                el.withoutClass("active");
            }
         })

    });

    _3Utils.forEach(".select", (el) => {
        const container = el._$(".select__container").click("select-click", () => {
            if (!container.hasClass("done")) {
                _3Utils.timeClassToggle(container, 300, "done");
            }
        });
    });

    _3Utils.forEach(".input.file-input", (el) => {
        const fileNameSpan = el._$('.file-name');
        const fileInput = el._$('input');
        let file;

        fileInput.change('file-input', (event) => {
            let localFile = event.target.files[0];

            if (!localFile.type.includes('zip') && !localFile.type.includes('rar') && !localFile.name.endsWith('.7z')) {
                fileInput.value = file ? file : '';
                new _3Notify.warn('Файл не является архивом').init();
                return;
            }

            fileNameSpan.prop('textContent', localFile.name);
        });

    });

})

// document.addEventListener("DOMContentLoaded", function () {
//
//     for (const el of document.querySelectorAll(".accardion-item__header")) {
//         let group = el.dataset.group;
//
//         el.addEventListener("click", () => {
//             let target = el.querySelector(`input[name="${group}"]`);
//             let state = target.checked;
//             let checks = document.querySelectorAll(`input[name="${group}"]`);
//             for (let check of checks) {
//                 if (check != target) {
//                     check.checked = false;
//                     check.parentElement.classList.remove("active");
//                 }
//             }
//             target.checked = !state;
//             if (target.checked) {
//                 el.classList.add("active");
//             } else {
//                 el.classList.remove("active");
//             }
//         });
//     }
//
//
//     for (const el of document.querySelectorAll(".select")) {
//         let container = el.querySelector(".select__container");
//
//         container.addEventListener("click", () => {
//             if (!container.classList.contains("done")) {
//                 _3Utils.timeClassToggle(container, 300, "done");
//             }
//         });
//
//         for (const opt of el.querySelectorAll("input[type='radio']")) {
//             opt.addEventListener("click", () => {
//                 el.setAttribute("value", opt.getAttribute("value"));
//             });
//         }
//     }
//
//     for (const el of document.querySelectorAll('.input.file-input')) {
//         const fileNameSpan = document.querySelector('.file-name');
//         const fileInput = document.querySelector('input');
//         let file;
//
//         fileInput.addEventListener('change', (event) => {
//             let localFile = event.target.files[0];
//
//             if (!localFile.type.includes('zip') && !localFile.type.includes('rar') && !localFile.name.endsWith('.7z')) {
//                 fileInput.value = file ? file : '';
//                 const notify = new DevNotify('bad', 'Файл не является архивом');
//                 notify.init();
//                 return;
//             }
//             fileNameSpan.textContent = localFile.name;
//         });
//     }
// });