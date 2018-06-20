//   Using the JavaScript language, have the
//   function ArrayAdditionI(arr) take the array of numbers stored 
//   in arr and return the string true if any combination of numbers
//   in the array can be added up to equal the largest number in the array,
//   otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] 
//   the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, 
//   will not contain all the same elements, and may contain negative numbers.
//   Sample Test Cases

// Input:5,7,16,1,2

// Output:"false"

// Input:3,5,-1,8,12

// Output:"true"

function ArrayAdditionI(arr) {
    // Expecto Patronum
    // cari angka tertinggi 
    var max = Math.max.apply(null, arr);

    // splice angka tertinggi dari arr
	arr.splice(arr.indexOf(max), 1);

    // buat initial value
    var total = 0;
    
    // jumlahkan tiap element array || reduce
	for (var i = 0; i < arr.length; i++) {
		total += Number(arr[i]);
	}

    // jika total === max => true
    // selain itu return false
    
	if (total === max) {
		return true;
	}
	return false;
    
}



console.log(ArrayAdditionI([5, 7, 16, 1, 2])); // false
console.log(ArrayAdditionI([3, 5, 8, 16])); // true
console.log(ArrayAdditionI([1, 2, 3, 4]));// false


module.exports = ArrayAdditionI;