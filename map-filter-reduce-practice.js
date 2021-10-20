// Try these map filter and reduce practice problems

const names = ['anatoly', 'bobby', 'carlsen', 'gary', 'fabiano']
const primes = [1,2,3,5,7,11,13]
const users = [
	{
		name: 'anatoly',
		rating: 2848
	}, 
	{
		name: 'bobby',
		rating: 2785
	},
	{
		name: 'carlsen',
		rating: 2882
	},
	{
		name: 'gary',
		rating: 2851
	},
	{
		name: 'fabiano',
		rating: 2844
	}
]

// Solve the problems below using map, filter, and reduce. 
// Be sure to log the results to the console as you solve 
// each problem to check your results. 

// --------------------------------------------------------------

// Map problems

// Create an array of uppercase names
const upperNames = names.map(name => name.toUpperCase())
console.log(upperNames)

// TODO: Map the names array to an array of three letter strings 
// ['anatoly', 'bobby', 'carlsen'] -> ['ana', 'bob', 'car']
const threeLetter = names.map(name => name.slice(0, 3))
console.log(threeLetter)

// TODO: Use map to create an array of squares from the primes array. 
// [1,2,3,5,7,11,13] -> [1,4,9,25,49,121,169]
const squares = primes.map(num => num*num)
console.log(squares)

// TODO: Map the users array into an array of name strings: 
// [{ name: "anatoly", ... }, {}, {}] -> ['anatoly', 'bobby', 'carlsen']
const nameArr = users.map(obj => obj.name)
console.log(nameArr)

// TODO: Map the array of users to an array of ratings:
// [{ name: "anatoly", rating: 2848 }, {}, {}] -> [2848, 2785, 2882]
const ratings = users.map(obj => obj.rating)
console.log(ratings)

// TODO: Map the Users array into an array of string descriptions: 
// [{ name: "anatoly", rating: 2848 }, {}, {}] -> ['name: anatoly rating: 2848', ...]
const stringDesc = users.map(obj => `name: ${obj.name} rating: ${obj.rating}`)
console.log(stringDesc)

// --------------------------------------------------------------

// Filter

// Use filter to create an array that has a subset of the items 
// from the source array. 

// TODO: Filter the names array to create a new array that 
// that contains only names that begin with the letter 'b'
const namesb = names.filter(name => name[0]==='b')
console.log(namesb)

// TODO: Filter the primes array to a new array that contains 
// only numbers that are greater than 10
const primes10 = primes.filter(num => num>10)
console.log(primes10)

// TODO: Filter the users array to a new array containing 
// Users with a rating greater than 2850
const users2850 = users.filter(user => user.rating>2850)
console.log(users2850)

// ---------------------------------------------------------------

// Reduce

// Use reduce to aggregate the contents of an array to 
// a single new value. Usually you'll reduce to a number or 
// string but sometimes you'll reduce to an array or object. 

// Be sure to include an initial value when using reduce. This 
// is the second praramter: arr.reduce(callBack, initalValue)
// arr.reduce(() => {}, 0) <- here 0 is the intial value! 


// TODO: Reduce the names array to a string made from the first 
// letter of each string in the source array: 
// ['anatoly', 'bobby', 'carlsen'] -> 'abc'
const name1red = names.reduce((acc, str) => acc+str[0])
console.log(name1red)


// TODO: Reduce the primes array to the total sum of all 
// numbers in the array. 
// [1,2,3,5,7,11,13] -> 42
const primesTot = primes.reduce((acc, num) => acc+num)
console.log(primesTot)


// TODO: Reduce the users array to on object with the key 
// as the name and value as the rating. For example: 
// [{ name: "anatoly", rating: 2848 }, {}, {}] -> { 'anatoly': 2848, 'bobby': 2785, 'carlsen': 2882 }
const kv = users.reduce((acc, obj) => {
	acc[obj.name] = obj.rating
	return acc
}, {})
console.log(kv)


// ----------------------------------------------------------

// Combine map filter and reduce!

// You ,may have noticed that Map and Filter each return a 
// new array. They do not modify the existing array. 
// All arrays have these methods. This means you can chain 
// them together like this: arr.map().filter(), or like
// this: arr.filter().map(), or arr.map().filter().reduce()
// Or any other combination you can think of. 

// TODO: filter the primes array to numbers less than 10. Then 
// reduce to get the sum. 
// primes.filter().reduce() -> 18
const comb1 = primes.filter(num => num<10).reduce((acc, num) => acc+num)
console.log(comb1)

// TODO: filter the users array to get all of the players 
// with ratings above 2850 and then map these objects to 
// name and rating strings: 
// users.filter().map() -> ['anatoly rating: 2848', ...]
const comb2 = users.filter(user => user.rating>2850).map(user => `${user.name}: ${user.rating}`)
console.log(comb2)
// TODO: Sometimes you'll run into data that is missing. 
// often this will appear as undefined, or null. The 
// array below has some undefined values. Filter these 
// then get the sum. 

const data = [23, 44, undefined, 12, undefined, 59, 83, 13, 42, 71, undefined]
const comb3 = data.filter(x => x!=undefined).reduce((acc, num) => acc+num)
console.log(comb3)
