        var modal = document.querySelector(".contact-btn");
        var popup = document.querySelector(".modal-content");
        var form = popup.querySelector("form");
        var close = document.querySelector(".modal-content-close");
        var login = popup.querySelector("[name=contact-form-name]");
        var mail = popup.querySelector("[name=contact-form-mail]");
        var storage = localStorage.getItem("login");

        modal.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.add("modal-content-show");
            login.focus();
            if (storage) {
                login.value = storage;
                mail.focus();
            } else {
                login.focus();
            }
        });

        close.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function(event) {
          if (!login.value || !mail.value) {  
            event.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
          } else {
            localStorage.setItem("login", login.value);
          }

        });

        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) {
               if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
            }
            }
        });