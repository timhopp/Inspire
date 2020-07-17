
export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.name = data.name;
    this.kelvin = Math.round((data.main.temp - 273.15) * (9/5) + 32)

  }
  

  get tempTemplate(){

    let template = `
    <div class="rounded text-white text-center bg-dark p-3 mr-5 mt-4">
    <div class="col-4">
     <h4> ${this.name}</h4>
    <h3>${this.kelvin}°</h3>
    </div>
		</div>
    
    `
    return template
  }
}