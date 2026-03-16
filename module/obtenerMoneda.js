export function obtenerMoneda(countryCode) {
  if (!countryCode) return null;
  const code = countryCode.toUpperCase();
  
 
  const MAP = {
    AR: 'Peso Argentino',
    US: 'Dólar estadounidense',
    GB: 'Libra esterlina',
    BR: 'Real Brasileño',
    CL: 'Peso Chileno',
    UY: 'Peso Uruguayo',
    MX: 'Peso Mexicano',
    ES: 'Euro',
    FR: 'Euro',
    DE: 'Euro'
  };
  
  return MAP[code] || null;
}
