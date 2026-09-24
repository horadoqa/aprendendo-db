const body = document.body;

        const themeToggle =
            document.getElementById("themeToggle");

        const themeIcon =
            document.getElementById("themeIcon");

        const themeLabel =
            document.getElementById("themeLabel");


        /*
         * Atualiza o botão de acordo com o tema atual.
         */

        function updateThemeButton() {

            const isLight =
                body.classList.contains("light");

            if (isLight) {

                themeIcon.textContent = "🌙";

                themeLabel.textContent =
                    "Modo escuro";

                themeToggle.setAttribute(
                    "aria-label",
                    "Ativar modo escuro"
                );

            } else {

                themeIcon.textContent = "☀️";

                themeLabel.textContent =
                    "Modo claro";

                themeToggle.setAttribute(
                    "aria-label",
                    "Ativar modo claro"
                );
            }
        }


        /*
         * Alterna entre os temas.
         */

        themeToggle.addEventListener(
            "click",
            () => {

                body.classList.toggle("light");

                const theme =
                    body.classList.contains("light")
                        ? "light"
                        : "dark";

                localStorage.setItem(
                    "theme",
                    theme
                );

                updateThemeButton();

            }
        );


        /*
         * Recupera o tema salvo.
         */

        const savedTheme =
            localStorage.getItem("theme");


        if (savedTheme === "light") {

            body.classList.add("light");

        }


        /*
         * Inicializa o botão.
         */

        updateThemeButton();