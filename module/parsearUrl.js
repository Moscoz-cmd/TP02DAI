import { URL } from 'url';


//Usamos ia para que nos explique la funcion Url y como parsear una url con ella:
//Utilizamos funciones que tiene para desglosar una url
export function parsearUrl(urlString) {
  try {
    const u = new URL(urlString);

    const host = `${u.protocol}//${u.host}`;

    const pathname = u.pathname;

    const parametros = {};
    u.searchParams.forEach((value, key) => {
      parametros[key] = value;
    });

    return { host, pathname, parametros };
  } catch (err) {
    return null;
  }
}

if (process.argv[1].endsWith('parsearUrl.js')) {
  const ejemplo = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
  const objeto = parsearUrl(ejemplo);
  console.log(JSON.stringify(objeto, null, 2));
}
