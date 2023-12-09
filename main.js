let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #291900;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ffeb45 ; ">Estudio la carrera de administración y hago contenido de tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
