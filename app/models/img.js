export default class Img{
  constructor(data){
    console.log('hi from img model')
    this.large_url = data.large_url
    this.copyright = data.copyright
  }

  get imgTemplate(){
    let template= `
    <div>
		<style>
			body{
				background-image: url('${this.large_url}')
			}
		</style>
  </div>
  `
  return template
  }

}