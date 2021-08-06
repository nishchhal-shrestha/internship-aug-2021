// Recursive function definitions has 2 clauses
// It should call itself
// There should be a stopping condition for recursion 

const flatten = (input = [], result = []) => {
    for(let item of input) {
        if(typeof item == 'object') {
            flatten(item, result);
        } else {            
            result.push(item);
        }
    }
}

let mixedArray = [100, 5, 'a', [3, 1, 5], 7, 9, [3, ['a', 'b']]]

let result = []
flatten(mixedArray, result);

console.log(result);