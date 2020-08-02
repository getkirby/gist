/**
 * document.querySelectorAll returns a NodeList, which 
 * does not provide a forEach loop. This is a simple
 * way to turn the NodeList to an array.
 */

Array.from(document.querySelectorAll("button")).forEach(button => {
  // do something with the button
});

/**
 * A for loop however does support array-like objects,
 * thus a NodeList can be iterated over as-is.
 */
for (const button of document.querySelectorAll("button")) {
  // do something with the button
}
