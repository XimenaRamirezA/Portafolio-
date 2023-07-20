let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});
 
typewriter
  .pauseFor(2500)
  .typeString('I do website development.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
