export default class Count{
  constructor(data){
   this.count = data.count || 0
  }
 
 get countTemplate(){
   let template = `
   <div class="text-white">
   <h5>"${this.count}</h5>
   </div>
   `
   return template
 }
 
 
 }


