export default class Quote{
 constructor(data){
   this.author = data.author
   this.body = data.body
 }

get quoteTemplate(){
  let template = `
  <div class="text-white">
  <h5>"${this.body}"
  - ${this.author}</h5>
  </div>
  `
  return template
}


}