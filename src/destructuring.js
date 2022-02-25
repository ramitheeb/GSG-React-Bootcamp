

const rami = {
    age: 12,
    name: "rami theeb",
}

const { age } = rami // const age = rami.age 


const ramiWithWorkInfo = {
    ...rami,
    company: "foothill technologies",
    job: "software engineer",
}

//ramiWithWorkInfo equals to 
// {
//     age: 12,
//     name: "rami theeb",
//     company: "foothill technologies",
//     job: "software engineer",
// }

