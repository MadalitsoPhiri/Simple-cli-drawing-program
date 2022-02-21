import { COMMANDS } from "./constants.js";
import {isError, validateArgs } from "./helpers.js";


export default (input)=> {
   const command = input.trim().split(" ")[0].toLowerCase()
   const inputArr = input.trim().split(" ")
   let result;
   switch(command){
      
         case COMMANDS.C.symbol:
              // create canvas command
            
                result = validateArgs(COMMANDS.C,inputArr)

          
              if(isError(result)){
                 return result.message
              }
            break;
           
         case COMMANDS.L.symbol:
             // draw line command
        
             result = validateArgs(COMMANDS.L,inputArr)

          
             if(isError(result)){
                return result.message
             }
         
            break;
         case COMMANDS.R.symbol:
          
            result = validateArgs(COMMANDS.R,inputArr)

          
             if(isError(result)){
                return result.message
             }
            break;    
         
         case COMMANDS.HELP.symbol:
       
       
            break;

         case COMMANDS.H.symbol:
      
       
            break;
         case COMMANDS.exit.symbol:
      
       
               break;
        default:
            return "Invalid command."   
          

   }
   return true
    
}