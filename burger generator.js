console.log('Burger toppings surprise')

	function randomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  

const burgerToppings = {
topping1: ['single', 'double', 'tripple', 'chicken' ],
topping2: ['no cheese', 'cheese', 'american cheese', 'squirtie cheese'],
topping3: ['onions', 'lettuce', 'tomatos', 'jalapeños']
}

let surpirseBurger = [];
  
  
  for(let tops in burgerToppings) {
    let index = randomNumber(burgerToppings[tops].length);

switch (tops){

	case 'topping1': 
	surpirseBurger.push(`your first choice is ${burgerToppings[tops][index]}. Nice!`)
	 
	break;
	case 'topping2': 
	surpirseBurger.push(`Your next choice is ${burgerToppings[tops][index]}.mmmm!`)

	break;
	case  'topping3': 
	surpirseBurger.push(`Your last choice is ${burgerToppings[tops][index]}. Your burger is complete!`)
	
	break;
	default: surpirseBurger.push(`no burger made`)
	}
  }
	function result (results) {
    const result = surpirseBurger.join()
  }
result(surpirseBurger)

console.log(surpirseBurger)
	