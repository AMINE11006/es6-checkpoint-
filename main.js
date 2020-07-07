const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;
  }
  
  let petsWithAge = [];
getPetsWithAge = () => {
      pets.forEach(pets=>{
          petsWithAge.push(pets);
      });
      console.log(petsWithAge);
  };
  getPetsWithAge()

getDogs = () => {
      const dogs= pets.filter((pets)=>{
          return(pets.type === "dog");
      });
      console.log(dogs);
  };
getDogs()

  findAge = () => {
    const jasper = pets.find(pet=>{return pet.name === "Jasper"});
    let age = getAge(jasper);
console.log(`Jasper is ${age} years old`);    
  };

findAge()  
