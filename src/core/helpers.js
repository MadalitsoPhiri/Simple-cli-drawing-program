import Canvas from "./canvas.js";
import { NUMBER } from "./constants.js";


export function isError(error) {
    if (error && error.stack && error.message) {
      return true;
    }
  
    return false;
  }

export const validateArgs = (command,inputArr)=>{

    if(inputArr.length != (command.args.length + 1)) return new Error(`command ${command.symbol.toUpperCase()} needs ${command.args.length} arguments => ${command.requirementsText}`)
    
    const parsedArray = []
    for(let i = 0; i < inputArr.length; i++){
      if(i != 0){
        if(command.args[i - 1].type === NUMBER){
           parsedArray.push(parseInt(inputArr[i]))
           continue 
        } 
        if(command.args[i - 1].type === TEXT){
          parsedArray.push(parseInt(inputArr[i].toLowerCase()))
          continue 
        }   
      }
    }
   

    for(let i = 0; i < parsedArray.length; i++){
     

             if(!parsedArray[i] && parsedArray[i] != 0) return new Error(`argument ${command.args[i].name} needs to be a ${command.args[i].type}`)
              if(parsedArray[i] == 0) return new Error(`argument ${command.args[i].name} can not be zero.`)
             
    }

    return true
    


}

export const processDrawLine = (input)=>{
  const coordinates = {
    x1:parseInt(input[1]),
    y1:parseInt(input[2]),
    x2:parseInt(input[3]),
    y2:parseInt(input[4]),
  }
 
return coordinates

}

export const processCreateCanvas = (input)=>{
         const dimens = {
           width:input[1],
           height:input[2]
         }
       
   return new Canvas(dimens.width,dimens.height)
}
export const printHelp = ()=>{

  console.log("Command             Description") 
  console.log("C w d               Creates a new canvas of width w and height h. Command 'C' will create a new canvas with width W and height H. Example: C 6 2 will create a canvas of 6 pixel width and 2 pixel height!\n") 
  console.log("L x1 y1 x2 y2       Creates a new line from (x1, y1) to (x2, y2). Currently only horizontal or vertical lines are supported. Horizontal and vertical lines will be drawn using the 'x' character. Command 'L' will create a line from X1,Y1 to X2,Y2. Lines can only be diagonal. Example: L 1 2 1 6 will go from 1,2 point to 1,6 point.\n") 
  console.log("-h or help          Prints help for commands.\n")  
}