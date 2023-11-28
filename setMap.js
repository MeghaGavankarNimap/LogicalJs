console.log("h")
const arr=[34,51,90,67,44]
const setFun=new set(arr)
console.log(setFun)
console.log("h")

// reduce 
const value=[2,7,6,8,10];
const val=value.reduce(function(accu,ini){
    return accu+ini
},0);
console.log(val);

// differnce in map and flatmap
//map:one to one thing
//it takes one obj in  and return one obj out in array
// flat map is one to many thing
// it takes one obg in  and return array out
const friends = [
    {name: 'Dave', kids: ['Max', 'Jack']},
    {name: 'Max', kids: ['Sam', 'Alex', 'Megan']},
    {name: 'Jordan', kids: ['Mason', 'Cameron', 'Kaylin']}
];
const mapFunction = p => p.name;
// Then, use array.map like this:

const names = friends.map(mapFunction);
// which returns:

// o/p["Dave", "Max", "Jordan"]

// flatmap
p => p.kids
// The net result: 3 person objects in will produce 8 kid names out. Thus, this code:

const flatmapFunction = p => p.kids;
const kidNames = friends.flatMap(mapFunction);





