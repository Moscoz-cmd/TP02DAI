import { copyFileSync } from 'fs';

export function copiar(origen, destino) {
  copyFileSync(origen, destino);
}
if (process.argv.length >= 4) {
  copiar(process.argv[2], process.argv[3]);
  console.log(`Copiado ${process.argv[2]} -> ${process.argv[3]}`);
}
