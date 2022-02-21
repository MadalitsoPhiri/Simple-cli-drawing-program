import { COMMANDS } from "./constants.js";
import { printHelp, processCreateCanvas, processDrawLine } from "./helpers.js";

export default class CommandProcessor{
    canvas = null
    constructor(){

    }
    processCommand(input){
        const command = input.trim().split(" ")[0].toLowerCase()
        const inputArr = input.trim().split(" ")
     
        switch(command){
           
             case COMMANDS.C.symbol:
                  // create canvas command
                
               this.canvas = processCreateCanvas(inputArr)
               this.canvas.render()
                  
             
               
                  
                 break;
                
             case COMMANDS.L.symbol:
                  // draw line command
             
                  if(this.canvas == null){
                     console.log("Create a canvas first.")
                 }else{
                    const result = processDrawLine(inputArr)
                    this.canvas.drawLine(result)
                    this.canvas.render()
                    
                 }
                
              
                 break;
             case COMMANDS.R.symbol:
                 //TODO: build rectangle functionality
               
                 
                 break;    
              
             case COMMANDS.HELP.symbol:
                printHelp()
         
                 break;
     
             case COMMANDS.H.symbol:
                printHelp()
       
                 break;

            case COMMANDS.exit.symbol:
                  process.exit(0)
       
                    break;    
             default:
                 return "Invalid command."   
               
     
        }
    }

}

