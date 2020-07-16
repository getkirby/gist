/**
 * document.querySelectorAll returns a NodeList, which 
 * does not provide a forEach loop. This is a simple
 * way to turn the NodeList to an array.
 */

Array.from(document.querySelectorAll("button")).forEach(button => {
  // do something with the button
});
