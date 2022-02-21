import { lineSymbol, xBorderSymbol, yBorderSymbol} from "./constants.js";

export default class Canvas{
    state = new Map()
  
    constructor(width,height){
     this.width = width;
     this.height = height;
     this.setupState()
       
    }
    setupState(){
      for(let i = 0;i <= parseInt(this.height) + 1; i++){
         const newData = []
         for(let j = 0; j < this.width; j++){
            if(i == 0 || i == parseInt(this.height) + 1){ 
                newData.push({isBorder:true,selected:false,painted:false})
            }else{
                newData.push({isBorder:false,number:j + 1,selected:false,painted:false})
            }
         }
            
           this.state.set(i,newData)
      }
    }
    drawLine(line){
        // example L 1 2 6 2
        const {x1,y1,x2,y2} = line
        if(!x1 || !x2 || !y1 || !y2){
            console.log("missing coordinate values")
            return
        } 
        if(x1 == x2){
            // this line is vertical
            // find y range  

            const maximumX = Math.max(x1,x2)
            const maximumY = Math.max(y1,y2)
            const minimumY = Math.min(y1,y2)
            const {width,height} = this.getDimensions()
            if(maximumX > width || maximumY > height){
                console.log("Line out of bounds.")
                return

            }else{
                for (var [key, value] of this.state) {
                  if(key >= minimumY && key <= maximumY){
                    let row = [...value]
                    row[maximumX - 1].selected = true
                    this.state.set(key,row)
                    
                  }
                 
                }

              
            
            }
        }else if(y1 == y2){
            // this line is horizontal
            // find x range
            const maximumX = Math.max(x1,x2)
            const maximumY = Math.max(y1,y2)
            const minimumX = Math.min(x1,x2)
            const {width,height} = this.getDimensions()
            if(maximumX > width || maximumY > height){
                console.log("Line out of bounds.")
                return

            }else{
                const yaxis =  this.state.get(y1)
                const row = [...yaxis]
                for (let i = 1; i <= yaxis.length; i++ ) {
                    if(i >= minimumX && i <= maximumX){
                 
                      row[i - 1].selected = true
                    
                      
                    }
                   
                  }

                  this.state.set(y1,row)
            }

        }else if(y1 == y2 && x1 == x2){
            // this is a dot
            const yaxis =  this.state.get(y1)
            const row = [...yaxis]
            row[x1 - 1].selected = true
            this.state.set(y1,row)


        }else{
          // throw error saying it only supports horizontal and vertical lines. 
          console.log("supports horizontal and vertical lines only.")
          return
        }
        
    }
    render(){
    for (var [key, value] of this.state) {
        let finalLine = "";
        value.forEach((item,index)=>{
            if(item.isBorder){
             finalLine += xBorderSymbol
            }else{
                if(item.selected){
                  finalLine += lineSymbol
                }else{
                  finalLine += " "
                }
            }
        })
        console.log(`${key == 0 || key == parseInt(this.height) + 1 ?xBorderSymbol:yBorderSymbol}${finalLine}${key == 0 || key == parseInt(this.height) + 1 ?xBorderSymbol:yBorderSymbol}`)
     
    }

    
    }
   

    getDimensions(){
        return{
            width:this.width,
            height: this.height
        }
    }

}