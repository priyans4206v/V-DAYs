// SCROLL ANIMATION + TYPEWRITER
const scenes = document.querySelectorAll(".scene");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                // Typewriter for paragraph
                const para = entry.target.querySelector("p");
                if (para && !para.dataset.typed) {
                    typeWriter(para, para.textContent, 40);
                    para.dataset.typed = true;
                }
            }
        });
    },
    { threshold: 0.35 }
);

scenes.forEach(scene => observer.observe(scene));
