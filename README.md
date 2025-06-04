Modal con Javascript vs Modal con css:

*El modal con CSS:* 
Superpongo dos imágenes y luego juego con la opacidad de ellas=
Funciona mediante estados estáticos y pseudo-clases. 
Utiliza principalmente:

:target para mostrar/ocultar el modal
opacity y transform para las transiciones visuales
Checkboxes ocultos o enlaces ancla para activar los estados

/* Goblin con ojos abiertos (por defecto visible) */
.goblin-ojos-abiertos {
  opacity: 1;
}

/* Goblin con ojos cerrados (por defecto invisible) */
.goblin-ojos-cerrados {
  opacity: 0;
}

/* Cuando el campo de contraseña está enfocado, invertir las opacidades */
.password-container:focus-within~.goblin-container .goblin-ojos-abiertos {
  opacity: 0;
}

.password-container:focus-within~.goblin-container .goblin-ojos-cerrados {
  opacity: 1;
}


*Modal con JavaScript* : 
Nos permite hacerlo funcional, es decir, conservar los datos de ingreso, recordar cuantas veces se escribió o vió la contraseña, permite validación en tiempo real o enviar datos al servidor, 
CSS solo cambia la apariencia visual (ojos abiertos/cerrados al introducir contraseña). El de js opera a través de manejos de eventos con condicionales de if/else.

_Flujo Completo del Funcionamiento_
-Inicialización: JavaScript selecciona elementos y configura eventos
-Apertura: Usuario hace clic → JavaScript muestra modal → Carga datos guardados
-Interacción: Usuario escribe → JavaScript puede validar en tiempo real
-Persistencia: Al cerrar o cambiar de campo → JavaScript guarda automáticamente
-Envío: Usuario envía → JavaScript procesa y puede enviar a servidor
-Cierre: JavaScript oculta modal pero conserva datos para próxima vez

