const alumnos = [
    { nombre: 'Juan', mail: 'juan@example.com', calificacion: 8 },
    { nombre: 'María', mail: 'maria@example.com', calificacion: 9 },
    { nombre: 'Carlos', mail: 'carlos@example.com', calificacion: 7 },
    { nombre: 'Ana', mail: 'ana@example.com', calificacion: 10 },
    { nombre: 'Luis', mail: 'luis@example.com', calificacion: 6 }
  ];
  
  const nombreBuscado = 'Juan';
  
  const alumnoJuan = alumnos.find(alumno => alumno.nombre === nombreBuscado);
  
  console.log(alumnoJuan ? `La calificación de ${alumnoJuan.nombre} es: ${alumnoJuan.calificacion}` : 'Alumno no encontrado');
  