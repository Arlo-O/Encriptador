# Encriptador básico web.

## Sobre el proyecto.

Este es un proyecto desarrollado con HTML, CSS y JavaScript, cuenta con responsividad, consta de unicamente una página en la cual el usuario digita
el texto que desea encriptar (o desencriptar) y el programa se encargará de hacer dicho proceso y de mostrarle al usuario el mensaje una vez ha
sido procesado, y permitiendole copiar el texto que responde la aplicación de manera rápida.

Inicialmente solo cuenta con la función de encriptar un mensaje, posterior a la primera encriptación, se habilitará el desencriptar un mensaje y además 
se le permitirá que copie el mensaje que ha sido encriptado para que le de el uso que desee.

## Funcionalidades.
- Encriptación: El usuario digita una cadena de texto y el programa por medio de JavaScript lee dicho mensaje y siguiendo ciertas reglas prestablecidas para trabajar
                la cadena encripta el mensaje y lo muestra en pantalla.
- Desencriptación: Se captura el mensaje que se encuentra ubicado en el "textarea" y siguiendo de manera inversa las reglas de la encriptación se desencripta el mensaje
                y se muestra en pantalla.
- Copiado: Se copia en el portapapeles el último texto procesado por la aplicación usando métodos definidos por la clase Navigator en javascript.

## Manual de usuario básico.
Inicialmente solo estará habilitada la funcionalidad de encriptar mensajes, luego de que encripte su primer mensaje la aplicación liberará las funcionalidades de 
desencriptación y copiado.
1. Una vez en la página, identifique el texto que dice "Ingrese el texto aquí".
2. En dicha sección ingrese el texto que desee encriptar.
3. Clickee el botón "Encriptar", se mostrará su mensaje una vez ha sido encriptado.
4. Copie el mensaje, encripte uno nuevo o desencripte algún mensaje.
    - Copió el mensaje:
       - El texto que ha sido encriptado ahora está en su portapapeles, puede pegarlo en la aplicación para que sea encriptado o en donde usted lo desee.
    - Desencriptar un mensaje:
      - Si usted ya tiene un texto que desee ver como sería una vez desencriptado digitelo en la aplicación y de click en el botón desencriptar.
    - Encriptar un nuevo mensaje:
      - Digite su nuevo mensaje y de click en el botón encriptar.
   
