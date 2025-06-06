let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Evento para descargar el CV
document.addEventListener('DOMContentLoaded', function() {
    const btnCV = document.querySelector('.btn-cv');
    if (btnCV) {
        btnCV.addEventListener('click', function() {
            const pdfUrl = 'documentation/2.- ANEXO_I_PFC_Normativa_Indice_Proyecto.pdf';
            // Open PDF in new tab
            window.open(pdfUrl, '_blank');
            // Trigger download
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'CV_Edgar_Antonio_Salazar_Rodríguez.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Evento para mandar el formulario de contacto
    const sendButton = document.querySelector('#contacto .col button');
    if (sendButton) {
        sendButton.addEventListener('click', function(event) {
            event.preventDefault();

            const inputs = document.querySelectorAll('#contacto .col input, #contacto .col textarea');
            const formData = {};
            let allFilled = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    allFilled = false;
                }
                formData[input.placeholder] = input.value.trim();
            });

            if (!allFilled) {
                alert('Por favor, rellena todos los campos del formulario.');
                return;
            }

            // Preparar los datos para enviar a EmailJS
            const templateParams = {
                from_name: formData['Nombre'],
                phone: formData['Número telefónico'],
                from_email: formData['Dirección de correo'],
                subject: formData['Tema'],
                message: formData['Mensaje'],
                to_email: 'edgar91cuba@gmail.com' 
            };

            emailjs.send('service_fz9xrdj', 'template_yp8truf', templateParams)
                .then(function(response) {
                    alert('Mensaje enviado correctamente. ¡Gracias por contactarme!');
                    // Limpiar los campos del formulario una vez envíe
                    inputs.forEach(input => input.value = '');
                }, function(error) {
                    alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                    console.error('EmailJS error:', error);
                });
        });
    }
});
