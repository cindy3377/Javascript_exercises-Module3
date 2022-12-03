/*Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg
when user mouses off, change the picture back to original
 */

var image = document.getElementById("target");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

image.addEventListener('mouseover', function(){
  image.src = "img/picA.jpg"
})
image.addEventListener('mouseout', function(){
    image.src = "img/picB.jpg"
  })