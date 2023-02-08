const characters =[
    {
        name: 'Tarak Mehta',  //for accessing any properties we use 'map function'
        height:'172',         //for sum of height we use 'reduce function'
        mass:'77',            //for find any specific value we use 'filter function'
        eye_color:'brown',    //for finding any value is present or not we use 'every function'
        gender:'male',        //for atleast one value is present in an array/object then we use 'some function'
    },
    {
        name: 'Jetha Lal',
        height:'145',
        mass:'136',
        eye_color:'black',
        gender:'male',
    },
    {
        name: 'Babita Ji',
        height:'150',
        mass:'49',
        eye_color:'grey',
        gender:'female',
    },
    {
        name: 'Krishyan Iyer',
        height:'168',
        mass:'84',
        eye_color:'black',
        gender:'male',
    }
]


// //Get an array of all names
// const ch_name = characters.map(ch=>ch.name);
// console.log(ch_name);

// //Get an array of an object with just name and height properties
// const ch_nam_ht = characters.map((char)=>{
//     return {
//         name:char.name,
//         height:char.height
//     }
// })
// console.log(ch_nam_ht);

// //Get the total height of all properties
// const total_ht = characters.reduce((prevHeight,ch)=>{
//     return prevHeight+Number(ch.height);
// },0
// );
// console.log(total_ht);

//Get the characters with mass greater than 100
// const mass_100 = characters.filter(ch=>ch.mass>100);
// console.log(mass_100);

// //Get all male characters
// const male_ch = characters.filter(ch=>{
//     if(ch.gender=='male'){
//         return {name:ch.name
//         }
//     }
// });
// console.log(male_ch);

// //sort by gender
// //sort by name
// const sort_name = characters.sort((ch1,ch2)=>{
//     if(ch1.name<ch2.name){
//         return -1;
//     }else if(ch1.name>ch2.name){
//         return 1;
//     }
//     return 0;
// })
// console.log(sort_name);


// //Does every chracter have mass greater than 40?
// const mass_greater40 = characters.every(ch=>ch.mass>40);
// console.log(mass_greater40)


////Does every character have blue eyes?
// const ch_blue = characters.every(ch=>ch.eye_color=='blue');
// console.log(ch_blue);

// //s there at least one male character?
// const least_male = characters.some(ch=>ch.gender=='male');
// console.log(least_male);

