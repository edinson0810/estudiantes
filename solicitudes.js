import { solicitud } from "./module.js";

const ciudades = await solicitud(`ciudades`)
export const cityUser = ciudades.map(async (ciudad) => {
  const usuarios = await solicitud(`usuarios?cityId=${ciudad.id}`)
  return { ...ciudad, usuarios: usuarios };
})

const usuarios = await solicitud(`usuarios`);
export const materiaUser = usuarios.map(async (usuario) => {
  // return usuario.cityId == 1;
  const materiausuarios = await solicitud(`materia_usuario?userId=${usuario.id}`);

  // return materiausuarios.length > 0;
  if (materiausuarios.length > 0) {
   const arrayMaterias = materiausuarios.map(async(mat) => {
    const materiaName = await solicitud(`materias?id=${mat.subjectId}`);
    return materiaName;
   })
    const solutionMaterias = await Promise.all(arrayMaterias);
    return { ... usuario, materias: solutionMaterias}
  } 
  return null;


})

