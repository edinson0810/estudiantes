import { cityUser, materiaUser } from "./solicitudes.js";


// const solutioncityUser = await Promise.all(cityUser);
// console.log(solutioncityUser);

const solutionMateria_user = (await Promise.all(materiaUser)).filter((suma) => suma !== null );
console.log(solutionMateria_user);













