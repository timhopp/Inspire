import store from "../store.js";
import Img from "../models/img.js";


// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor(){
    console.log('hi from img service');
    this.getImg();
  }
  getImg(){
  imgApi.get('').then(res =>{
    // console.log(res.data)
    store.commit('img', new Img(res.data))
  }
    ).catch(err =>console.error(err))
  }

}

const imageService = new ImageService();
export default imageService;
