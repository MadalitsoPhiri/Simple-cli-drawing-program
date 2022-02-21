export const NUMBER = "number";
export const TEXT = "string";
export const xBorderSymbol = "-";
export const yBorderSymbol = "|";
export const lineSymbol = "X"
export const colorSymbol = "0"

export const COMMANDS = {
    "C":{
        symbol:"c",
        args:[
        {   
            name:"width",
            type:NUMBER
        },
        {   
            name:"height",
            type:NUMBER
        }
        ],
        requirementsText:" width : <int>, height : <int>"
    },
    "L":{
        symbol:"l",
        args:[
            {   
                name:"x1",
                type:NUMBER
            },
            {   
                name:"y1",
                type:NUMBER
            },
            {   
                name:"x2",
                type:NUMBER
            },
            {   
                name:"y2",
                type:NUMBER
            }
        ],
        requirementsText:"x1 : <int>, y1 : <int>, x2 : <int>, y2 : <int>"
    },
    "R":{
        symbol:"r",
        args:[
            {   name:"x1",
                type:NUMBER
            },
            {   name:"y1",
                type:NUMBER
            },
            {   name:"x2",
                type:NUMBER
            },
            {   name:"y2",
                type:NUMBER
            },
            {   name:"x3",
                type:NUMBER
            },
            {   name:"y3",
                type:NUMBER
            },
            {   name:"x4",
                type:NUMBER
            },
            {   name:"y4",
                type:NUMBER
            }
        ],
        requirementsText:"x1 : <int>, y1 : <int>, x2 : <int>, y2 : <int>, x3 : <int>, y3 : <int>, x4 : <int>, y4 : <int>"
    }
    ,
    "HELP":{
        symbol:"help",
        args:[],
        requirementsText:null
    },
    "H":{
        symbol:"-h",
        args:[],
        requirementsText:null
    },
    "exit":{
        symbol:"exit",
        args:[],
        requirementsText:null
    }
  
   
}

