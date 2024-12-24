const text = "The Chef Restaurant";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('#hero_content h1').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();


