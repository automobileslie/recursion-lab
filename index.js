
// Write out a recursive function to print out each character in a string.
function printString(string) {
    let substring;
    if (string.length) {
       substring = string.substring(1, string.length)
        printString(substring)
    }
}


// recursive function to reverse a string
function reverseString(string) {
    function findReverse(aString, i){
        let reversedString;

        if (i > 0) {
            reversedString = aString.substring(1, i) + aString[0] + aString.substring(i)
            if (i === 1){
                return reversedString
            }
          
            return findReverse(reversedString, i-1)
        }
    }

    return findReverse(string, string.length)
}

// recursive function to see if a word is a palindrome.
function isWordPalindrome(string) {
    let wordIsPalindrome = (string === reverseString(string))
   return wordIsPalindrome
}


// a recursive function to add up the elements of an array.
function addElements(arr) {
    function addingValues(array, idx) {
        let subArray;
        let firstNumToAdd;
        let secondNumToAdd;
        if (idx >= 0) {
            if (idx === 0) {
                return array[0]
            }

            firstNumToAdd = array[idx]
            secondNumToAdd = array[idx - 1]
            subArray = array.slice(0, idx - 1)
            subArray.push(firstNumToAdd + secondNumToAdd)
            return addingValues(subArray, idx - 1)
        }
    }
    return addingValues(arr, arr.length - 1)
}

// recursive function to find the largest integer in an array.
function findMax(arr) {
    function findingMax(array, idx) {
        let subArray;
        let firstNum;
        let secondNum;
        if (idx >= 0) {
            if (idx === 0) {
                return array[0]
            }

            firstNum = array[idx]
            secondNum = array[idx - 1]
            if (firstNum > secondNum) {
                subArray = array.slice(0, idx - 1)
                subArray.push(firstNum)
            }
            else {
                subArray = array.slice(0, idx)
            }
            
            return findingMax(subArray, idx - 1)
        }
    }
    return findingMax(arr, arr.length - 1)
}

// function to see if an array includes a given element.
function includesElement(arr, element) {
    function searchForElement(array, idx) {
        if (idx >= 0) {
            return element === array[idx] ? true : searchForElement(array, idx - 1)
        }
        return false
    }
    return searchForElement(arr, arr.length - 1)
}