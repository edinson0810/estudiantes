const URL = `http://127.0.0.1:3000`;

export const solicitud = async (endpoints) => {
  const respuesta = await fetch(`${URL}/${endpoints}`);
  return await respuesta.json();
}


