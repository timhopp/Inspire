import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawImg(){
 document.getElementById("bg-image").innerHTML = store.State.img.imgTemplate
}


export default class ImageController {
  constructor(){
    store.subscribe('img', _drawImg)
  }

}
