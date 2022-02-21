import inquirer from "inquirer"

import validator from "./core/validator.js";
import Canvas from "./core/canvas.js";
import CommandProcessor from "./core/commandProcessor.js";

let Processor = new CommandProcessor()
// let canvas = new Canvas(10,10)
// canvas.render()
// // canvas.drawLine({x1:1,y1:3,x2:5,y2:3})
// canvas.drawLine({x1:2,y1:1,x2:2,y2:3})
// // canvas.drawLine({x1:2,y1:4,x2:2,y2:3})
// canvas.render()

const query = ()=>{
  inquirer
  .prompt([
   {
    type:"input",
    name:"COMMAND",
    message:"Enter Command:",
    validate:validator
   }
  ])
  .then((answers) => {
    // Process command here
  
    Processor.processCommand(answers.COMMAND)
   
    query()
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("error",error)
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

query()