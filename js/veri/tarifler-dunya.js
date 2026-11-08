// Dünya mutfakları: her dosya bir ya da birkaç mutfak; "mutfak" alanı buradan atanır.
import { UZAKDOGU } from './dunya/uzakdogu.js';
import { ITALYAN, FRANSIZ, ISPANYOL, YUNAN_BALKAN } from './dunya/avrupa.js';
import { ORTADOGU, HINT, MEKSIKA, AMERIKAN, DIGER_DUNYA } from './dunya/diger.js';
import { ITALYAN_EK } from './dunya/italyan-ek.js';
import { HINT_EK } from './dunya/hint-ek.js';
import { FRANSIZ_EK, ISPANYOL_EK } from './dunya/fransiz-ispanyol-ek.js';
import { YUNAN_BALKAN_EK, ORTADOGU_EK } from './dunya/yunan-ortadogu-ek.js';

const etiketle = (mutfak, l) => l.map((t) => ({ mutfak, ...t }));

export const DUNYA_TARIFLERI = [
  ...etiketle('uzakdogu', UZAKDOGU),
  ...etiketle('italyan', [...ITALYAN, ...ITALYAN_EK]),
  ...etiketle('fransiz', [...FRANSIZ, ...FRANSIZ_EK]),
  ...etiketle('ispanyol', [...ISPANYOL, ...ISPANYOL_EK]),
  ...etiketle('yunan-balkan', [...YUNAN_BALKAN, ...YUNAN_BALKAN_EK]),
  ...etiketle('ortadogu', [...ORTADOGU, ...ORTADOGU_EK]),
  ...etiketle('hint', [...HINT, ...HINT_EK]),
  ...etiketle('meksika', MEKSIKA),
  ...etiketle('amerikan', AMERIKAN),
  ...etiketle('diger-dunya', DIGER_DUNYA),
];
