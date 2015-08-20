//设置初始值
function f(a, first){
    (a !== undefined && a != null)?(a = a):(a = first);
    return a;
}

//indexOf模拟
// if (typeof Array.prototype.indexOf != 'function') {
// 	Array.prototype.indexOf = function  (ele, index) {
// 		var record = -1;
// 	    index = f(index, 0);
// 	    for (var i = index; i < this.length; i++) {
// 	        if (this[i] === ele) {
// 	        	record = i;
// 	    	    break;
// 	        }
// 	    }
// 	    return record
//     } 
// }
// var a = [0, 1, 2, 3, 4];
// document.write(a.indexOf(3));

//lastIndexOf模拟
// if (typeof Array.prototype.lastIndexOf != 'function') {
// 	Array.prototype.lastIndexOf = function  (ele, index) {
// 		var record = -1;
// 		index = f(index, this.length-1)
// 		for (var i = index; i >=0; i--) {
// 			if (this[i] === ele) {
// 				record = i;
// 				break;
// 			}
// 		}
// 		return record;
// 	}
// }
// var a = [0, 1, 2, 3, 4];
// document.write(a.lastIndexOf(4));

//every模拟
// if (typeof Array.prototype.every != 'function') {
// 	Array.prototype.every = function  (fn) {
// 		for (var i = 0; i < this.length; i++) {
// 			if (!fn(this[i])) {
// 				break;
// 			}
// 		}
// 		if (i === this.length) {
// 			return true;
// 		}else {
// 			return false;
// 		}
// 	}
// }
// function test (x) {
// 	return x > 3;
// }
// var a = [4, 4, 6, 7];
// document.write(a.every(test));

//some模拟
// if (typeof Array.prototype.some != 'function') {
// 	Array.prototype.some = function  (fn) {
// 		for (var i = 0; i < this.length; i++) {
// 			if (fn(this[i])) {
// 				break;
// 			}
// 		}
// 		if (i === this.length) {
// 			return false;
// 		}else {
// 			return true;
// 		}
// 	}
// }
// function test (x) {
// 	return x > 3;
// }
// var a = [2, 3, 1, 2];
// document.write(a.some(test));

//forEach模拟
// if (typeof Array.prototype.forEach != 'function') {
// 	Array.prototype.forEach = function  (fn, obj) {
// 		for (var i = 0; i < this.length; i++) {
// 			fn.call(obj, this[i], i, this);
// 		}
// 	}
// }
// var a = [2, 3, 7, 8],
//     sum = 0;
// a.forEach(function  (index, value) {
// 	sum += value;
// })
// document.write(sum);

//map模拟
// if (typeof Array.prototype.map != 'function') {
// 	Array.prototype.map = function  (fn, obj) {
// 		var a = [],
// 		    ele;
// 		for (var i = 0; i < this.length; i++) {
// 			ele = fn.call(obj, this[i], i, this);
// 			a.push(ele);
// 		}
// 		return a;
// 	}
// }
// var a = [4, 5, 6, 7],
//     b;
// b = a.map(function  (val) {
// 	return val + 1;
// })
// document.write(b);

//filter模拟
// if (typeof Array.prototype.filter != 'function') {
// 	Array.prototype.filter = function  (fn, obj) {
// 		var a = [],
// 		    ele;
// 		for (var i = 0; i < this.length; i++) {
// 			ele = fn.call(obj, this[i], i, this);
// 			if (ele) {
// 				a.push(ele);
// 			}
// 		}
// 		return a;
// 	}
// }
// var a = [0, 1, 2, 4],
//     b;
// b = a.filter(function  (val) {
// 	return val;
// })
// document.write(b);

//reduce模拟
// if (typeof Array.prototype.reduce != 'function') {
// 	Array.prototype.reduce = function  (fn, initalVal) {
// 		var index = initalVal === undefined ? 1 : 0,
// 		    firstValue = initalVal === undefined ? this[0] : initalVal,
// 		    len = initalVal === undefined ? this.length-1 : this.length,
// 		    a;
// 	    for (var i = 0; i < len; i++) {
// 	    	a = fn (firstValue, this[index], index, this);
// 	    	firstValue = a;
// 	    	index++;
// 	    }	
// 	    return a;    
// 	}
// }
// var sum = [1, 2, 3, 4].reduce(function (previous, current, index, array) {
//   return previous + current;
// });
// document.write(sum);

//reduceRight模拟
// if (typeof Array.prototype.reduceRight != 'function') {
// 	Array.prototype.reduceRight = function  (fn, initalVal) {
// 		var len = initalVal === undefined ? this.length-1 : this.length,
// 		    index = initalVal === undefined ? len-1 : 0,
// 		    firstValue = initalVal === undefined ? this[len] : initalVal,		    
// 		    a;
// 	    for (var i = len-1; i >= 0; i--) {
// 	    	a = fn (firstValue, this[index], index, this);
// 	    	firstValue = a;
// 	    	index--;
// 	    }	
// 	    return a;    
// 	}
// }
// var data = [1, 2, 3, 4];
// var specialDiff = data.reduceRight(function (previous, current, index) {
//   if (index == 0) {
//     return previous + current;
//   }
//   return previous - current;
// });

// document.write(specialDiff); // 0