const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // entry.target.classList.remove('#hidden');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.website');
hiddenElements.forEach((el) => observer.observe(el));