// Dünya mutfakları: her dosya bir ya da birkaç mutfak; "mutfak" alanı buradan atanır.
import { UZAKDOGU } from './dunya/uzakdogu.js';
import { ITALYAN, FRANSIZ, ISPANYOL, YUNAN_BALKAN } from './dunya/avrupa.js';
import { ORTADOGU, HINT, MEKSIKA, AMERIKAN, DIGER_DUNYA } from './dunya/diger.js';

const etiketle = (mutfak, l) => l.map((t) => ({ mutfak, ...t }));

export const DUNYA_TARIFLERI = [
  ...etiketle('uzakdogu', UZAKDOGU),
  ...etiketle('italyan', ITALYAN),
  ...etiketle('fransiz', FRANSIZ),
  ...etiketle('ispanyol', ISPANYOL),
  ...etiketle('yunan-balkan', YUNAN_BALKAN),
  ...etiketle('ortadogu', ORTADOGU),
  ...etiketle('hint', HINT),
  ...etiketle('meksika', MEKSIKA),
  ...etiketle('amerikan', AMERIKAN),
  ...etiketle('diger-dunya', DIGER_DUNYA),
];
