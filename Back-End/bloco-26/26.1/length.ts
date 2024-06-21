export function convert(valor: number, unidadeBase: string, unidadeConversao: string) {
  let ximira = 0;
  let xelo = '';
  let resultado

  switch (unidadeConversao) {
    case 'km': ximira = 1000, xelo = 'mult';
      break;
    case 'hm': ximira = 100, xelo = 'mult';
      break;
    case 'dam': ximira = 10, xelo = 'mult';
      break;
    case 'dm': ximira = 10, xelo = 'div';
      break;
    case 'cm': ximira = 100, xelo = 'div';
      break;
    case 'mm': ximira = 1000, xelo = 'div';
      break;
    default: ximira = 1;
      break;
  };

  if (xelo = 'mult') return resultado = valor * ximira;
  if (xelo = 'div') return resultado = valor / ximira;

  return `${valor} ${unidadeBase} = ${resultado}m`;

};