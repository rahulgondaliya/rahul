var capslock = true;
var shift = false;
var linebreak = `/n`;

function addText(value,second){
    document.getElementById("addText").focus()
    
    if (value === "BackSpace") {
        let currentValue = document.getElementById("addText").value
        document.getElementById("addText").value =  currentValue.substr(0,currentValue.length - 1);
        
    }
    else if(value === 'capslock'){
        
        capslock= !capslock
       
    }
    else if(value === 'shift'){
        shift = !shift
      
    }
    
     else if (value ==='space') {
        document.getElementById("addText").value += ' ';          
          
      }
      else if (value ==='tab') {
        document.getElementById("addText").value += '    ';          
          
      }
      else if(value === 'enter'){
        document.getElementById("addText").value += `\n` ;
        
        

     }
      else if(second !== undefined){
        if(shift){
            document.getElementById("addText").value += second;

        }
        else{
            document.getElementById("addText").value += value;
        }
    }
    
      else {
        document.getElementById("addText").value += capslock ? value.toLowerCase() :value;
         
      }
    


      
      
      
     
       
}