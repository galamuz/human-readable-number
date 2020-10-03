module.exports = function toReadable (number) {

    const stringNumber = number.toString();

    if(stringNumber == '0') return 'zero';
    const arrNum = stringNumber.split('');

    var str = '';
    
    if (arrNum != null) {
        arrNum.reverse();
        for (let i = arrNum.length - 1; i >= 0; i--) {
            if(arrNum[i] == '1' && i == 1){
               str+= onenumToString(arrNum[0]);
               i--;
            } else{
                str+=  detimalToString(i, arrNum[i]);
            }  
        }
  
    }
    return str.trim();
}

function numberToString(numberStr){
    switch (numberStr) {
        case '1':
          return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';        
        case '9':
            return 'nine';
        case '0':
            return '';          
        default:
          return ;
      }
return '';

}

function detimalToString(detimal, num){
    detimal = detimal.toString();
    switch (detimal) {
        case '0':
          return numberToString(num);
        case '1':
            return twonumToString(num);
        case '2':
            return numberToString(num) +' hundred ';       
        default:
          return ;
      }
return '';

}


function twonumToString(numberStr){
    switch (numberStr) {
        case '2':
            return 'twenty ';
        case '3':
            return 'thirty ';
        case '4':
            return 'forty ';
        case '5':
            return 'fifty ';
        case '6':
            return 'sixty ';
        case '7':
            return 'seventy ';        
        case '8':
            return 'eighty ';
        case '9':
            return 'ninety ';   
        case '1':
            return 'ten';
        case '0':
            return '';
        default:
          return;
      }
      return;
}

function onenumToString(numberStr){
    switch (numberStr) {
        case '1':
            return 'eleven';
        case '2':
            return 'twelve';
        case '3':
            return 'thirteen';
        case '4':
            return 'fourteen';
        case '5':
            return 'fifteen';
        case '6':
            return 'sixteen';
        case '7':
            return 'seventeen';        
        case '8':
            return 'eighteen';
        case '9':
            return 'nineteen';   
        case '0':
            return 'ten';          
        default:
          return;
      }
      return;
}