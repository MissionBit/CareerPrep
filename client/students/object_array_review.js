// Built-in data structures in JavaScript
// =================================================
var data_structures = ['arrays', 'objects']

var similarities = [
  "Both Arrays and Objects are Objects (!!)",
  "Both are what we call in computer sciences 'associative arrays'",
  "An associative array is just **a bucket that hold name-value pairs**",
  "Associative arrays are also called key-value stores",
  "Each name-value pair is a property (property name and property value)"
]

// what's the difference??
// =================================================
// Arrays are enclosed in brackets, Objects use curly braces

var my_array = []
var my_object = {}

// Arrays are ordered with sequential integer indeces

var arr = ['first', 'second', 'third']

arr[0]
arr[1]
arr[2]

// Objects are unordered and have named properties

var obj = {
  "key1": "value1",
  "key2": "value2"
}

// The property keys are always strings, so JavaScript lets us omit the quotes around keys (not values)

var obj = {
  key1: "value1",
  key2: "value2"
}

// Arrays have a length property, objects do not:

arr.length // 2
obj.length // undefined

// how to add values to an array
// =================================================
var ways_to_add_values = ['at instantiation-time']


ways_to_add_values[1] = 'using bracket notation'

var index = 2
ways_to_add_values[index] = 'bracket notation with a variable'

ways_to_add_values.push('native array methods')
ways_to_add_values.unshift('native array methods')

ways_to_add_values[ways_to_add_values.length] = "this value is placed at the index after the last one"


// how to access values at indices in an array
// =================================================
var ways_to_access_values = ["using bracket notation", "bracket notation with a variable", "native array methods"]

// to what value do the following expressons resolve?
ways_to_access_values[0]

var index = 1
ways_to_access_values[index]

ways_to_access_values[ ways_to_access_values.length - 1 ]

ways_to_access_values.pop() //  destructive!
ways_to_access_values.shift() // destructive!

// how to add properties to objects
// =================================================
var ways_to_add_properties = {
  'traditional': 'bracket notation',
  'shortcut': 'dot notation',
  'tricky': 'bracket notation with variable'
}

var confusing_syntax_equals_job_security = {
  traditional: 'bracket notation',
  shortcut: 'dot notation',
  tricky: 'bracket notation with variable'
}

var obj = {}
obj['name'] = 'bob'
obj.age = 75

var property = 'location'
obj[property] = 'San Francisco'


// How to loop through Arrays vs Objects
// Experiment with these in your console.
// =================================================
// Arrays: use a `for loop`

var arr = [ 'first', 'second', 'third', 'fourth'];

for (var i = 0; i < arr.length; i++){
  console.log( arr[i] ); // why don't we need quotes around the i??
}

var sentences = ["Hello, there!", "Welcome to the page!", "Glad to have you"]

for (var i = 0; i < sentences.length; i++) {
  var sentence = sentences[i]
  var newElement = $('&lt;div class=sentence&gt;').text(sentence)
  $('body').append(newElement)
}

words.forEach(function(sentence){
  $('#sentences-container').append( $('&lt;div class=sentence&gt;').text(sentence) )
})

// Objects: use a `for in` loop

var obj = { greeting: 'howdy', direction: 'down', color: 'red', 'invalid-characters': 'need quotes'}

for(var key in obj) {
  console.log( obj[key] ); //why don't we need quotes around key??
}

// Use a for loop search arr for 'third', log it's index.
// =================================================

// Iterate over arr until you are at index 1, log the value at that index.
// =================================================

// Use a `for in` loop to search obj for the key 'color', log its value.
// =================================================

// Search obj for the value 'down', log its key.
// =================================================

// Search arr for the value which matches the variable targetValue, log its index.
// =================================================
var targetValue = 'fourth';

// Search arr for the index which matches the variable targetIndex, log the value at that index.
// =================================================
var targetIndex = 3;

// Search obj for the key which matches the variable targetKey, log the value at that key.
// =================================================
var targetKey = 'greeting';
