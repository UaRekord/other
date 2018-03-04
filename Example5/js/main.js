(function () {
    const input = document.getElementById('input'), // dom елементи
        output = document.getElementById('output'), // вхідне поле, вихід, кнопка
        calc = document.getElementById('calc');
    let numArray = [];
        
    function numToArray(input) { // ця функція робить з числа масив цифр
        let tempArray = input.toString().split("");
        for (let key in tempArray) {
            tempArray[key] = +tempArray[key];
        }
        return tempArray;
    }
    
    function moveDigit(arr) { // перекладую цифри
        let box = 0,
            tempArray = [];
          
        for (let i = arr.length - 1; i > 0; i--) {
            if (arr[i] > arr[i - 1]) {
                tempArray = arr.slice(i).sort((a, b) => b - a);
                for (let j = tempArray.length - 1; j >= 0; j--) {
                    if (arr[i - 1] < tempArray[j]) {
                        box = arr[i - 1];
                        arr[i - 1] = arr[arr.lastIndexOf(tempArray[j])];
                        arr[arr.lastIndexOf(tempArray[j])] = box;
                        break;
                    } 
                }
                break;
            }
        }
    return arr;
    }
 
    function init() { // бізнес-логіка
        inputValue = input.value;
        numArray = numToArray(inputValue);
        numArray = moveDigit(numArray);
        output.value = +numArray.join("");
    }
 
    calc.addEventListener("click", init); // чіпляю обробник на кнопку
  
}())