import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import { initialdomManip } from './initial-dom-manip.js';

blankProjectLoad();
initialdomManip();

const myToDo = createToDo("Grocery Run","Go get groceries","25/3/2023","Low", "Meat, Fish, Veggies");
const myToDo2 = createToDo("Cricket","To play Cricket","26/3/2023","Medium","Bat, Ball, Stumps");
console.log("Show me properties of myToDo",myToDo);
console.log("Show me properties of myToDo2",myToDo2);

