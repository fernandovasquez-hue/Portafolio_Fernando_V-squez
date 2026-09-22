console.log("Conexión exitosa con JS")

        document.addEventListener('DOMContentLoaded', () => {
            // 1. ALTERNANCIA DE MODO OSCURO / MODO CLARO
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeIcon = document.getElementById('theme-icon');
            const themeText = document.getElementById('theme-text');
            const htmlElement = document.documentElement;

            themeToggleBtn.addEventListener('click', () => {
                if (htmlElement.classList.contains('dark')) {
                    htmlElement.classList.remove('dark');
                    htmlElement.classList.add('light');
                    themeIcon.className = 'fa-solid fa-moon';
                    themeText.textContent = 'Modo Oscuro';
                } else {
                    htmlElement.classList.remove('light');
                    htmlElement.classList.add('dark');
                    themeIcon.className = 'fa-solid fa-sun';
                    themeText.textContent = 'Modo Claro';
                }
            });

            // 2. MENÚ HAMBURGUESA PARA DISPOSITIVOS MÓVILES
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            const navLinks = document.querySelectorAll('.nav-link');

            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });

            // 3. SEGUIMIENTO DE SECCIÓN ACTIVA EN LA BARRA DE NAVEGACIÓN (Scroll Spy)
            window.addEventListener('scroll', () => {
                let current = '';
                const sections = document.querySelectorAll('section');

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });

            // 4. MANEJO INTERACTIVO DEL FORMULARIO DE CONTACTO
            const contactForm = document.getElementById('contact-form');
            const feedbackMsg = document.getElementById('form-feedback');

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Animación / feedback simulado
                feedbackMsg.className = 'feedback-msg success';
                feedbackMsg.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
                
                // Reiniciar campos
                contactForm.reset();

                // Ocultar mensaje tras 4 segundos
                setTimeout(() => {
                    feedbackMsg.style.display = 'none';
                }, 4000);
            });
        });

        // 5. INTERACCIONES DE BOTONES EN TARJETAS DE PROYECTO
        function openProjectAlert(title) {
            const feedback = document.createElement('div');
            feedback.style.position = 'fixed';
            feedback.style.bottom = '20px';
            feedback.style.right = '20px';
            feedback.style.padding = '15px 25px';
            feedback.style.background = 'var(--green-primary)';
            feedback.style.color = '#fff';
            feedback.style.borderRadius = '8px';
            feedback.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            feedback.style.zIndex = '9999';
            feedback.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> Abriendo demostración de: <strong>${title}</strong>`;
            
            document.body.appendChild(feedback);

            setTimeout(() => {
                feedback.remove();
            }, 3000);
        }

        function openGithubAlert(title) {
            const feedback = document.createElement('div');
            feedback.style.position = 'fixed';
            feedback.style.bottom = '20px';
            feedback.style.right = '20px';
            feedback.style.padding = '15px 25px';
            feedback.style.background = 'var(--earth-primary)';
            feedback.style.color = '#fff';
            feedback.style.borderRadius = '8px';
            feedback.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            feedback.style.zIndex = '9999';
            feedback.innerHTML = `<i class="fa-brands fa-github"></i> Redirigiendo al repositorio de: <strong>${title}</strong>`;
            
            document.body.appendChild(feedback);

            setTimeout(() => {
                feedback.remove();
            }, 3000);
        }

        // 6. INTERACCIÓN DE HABILIDADES
        function highlightSkill(card) {
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        }