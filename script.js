// Establece la fecha y hora del partido (año, mes (0-11), día, hora, minutos, segundos)
var countDownDate = new Date("June 1, 2024 20:00:00").getTime();

// Actualiza el contador cada segundo
var x = setInterval(function() {

  // Obtiene la fecha y hora actual
  var now = new Date().getTime();
  
  // Calcula la diferencia entre la fecha y hora del partido y la fecha y hora actual
  var distance = countDownDate - now;
  
  // Calcula los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Muestra el tiempo restante en el elemento con el id "countdown-1"
  document.getElementById("countdown-1").innerHTML = "<li><span class='days'>" + days + " </span>Días</li>" +
                                                      "<li><span class='hours'>" + hours + " </span>Horas</li>" +
                                                      "<li><span class='minutes'>" + minutes + " </span>Minutos</li>" +
                                                      "<li><span class='seconds'>" + seconds + " </span>Segundos</li>";

  // Si el contador llega a cero, muestra el mensaje
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-1").innerHTML = "El partido está por comenzar";
  }
}, 1000);