const video = document.getElementById('myVideo');
    
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
});

observer.observe(video);

document.getElementById("button-send").addEventListener("click", function(event) {
    const nombre = document.getElementById('name').value; // Obtener el valor del input
    event.preventDefault();
    
    Swal.fire({
      title: "Gracias, " + nombre + "!",
      text: "Tu mensaje ha sido enviado con éxito.",
      icon: "success"
    });
});