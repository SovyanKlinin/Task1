import "../styles/main.scss";

(function () {
    const index = {

        init () {

            this.smoothScroll();
            this.getUp();
            this.getForm();
            this.formClosed();
            this.formSubmit();

        },

        smoothScroll() {
            const navbarLinks = document.querySelectorAll('a[href^="#"]');
            for (let navbarLink of navbarLinks) {
                navbarLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    const id = navbarLink.getAttribute('href');

                    document.querySelector(id).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            }
        },

        getUp() {
            let getUpButton = document.getElementById("getUpButton");
            getUpButton.style.opacity = '0';
            
            function scrollUp() {
                if (window.scrollY > 20) {
                    getUpButton.style.opacity = '1';
                } else { 
                    getUpButton.style.opacity = '0';
                }
              }

            window.onscroll = scrollUp;
        },

        getForm() {
            let formButton = Array.from(document.getElementsByClassName("formButton"));
            let formSection = document.getElementById("formSection");

            formButton.forEach(element => {
                element.addEventListener("click", () => {
                    formSection.style.display = "flex";
                });
            });
        },

        formClosed() {
            let formClosed = document.getElementById("formClosed");

            formClosed.addEventListener("click", () => {
                formSection.style.display = "none";
            });
        },

        formSubmit() {
            let formSubmit = document.getElementById("formSubmit");
            let name = document.getElementById("name");
            let email = document.getElementById("email");
            let number = document.getElementById("number");
            let formContent = document.getElementById("formContent");
            let formResult = document.getElementById("formResult");

            formSubmit.addEventListener("click", () => {
                if (name.value && email.value && number.value) {
                    formContent.style.display = "none";
                    formResult.style.display = "block";
                }
            });
        }

    }

    index.init();
})();