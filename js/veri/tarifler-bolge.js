// Türk mutfağı bölge tarifleri: her dosya bir ya da iki bölge; "mutfak" alanı buradan atanır.
import { KARADENIZ, EGE } from './bolge/karadeniz-ege.js';
import { AKDENIZ, MARMARA } from './bolge/akdeniz-marmara.js';
import { IC_ANADOLU, DOGU } from './bolge/icanadolu-dogu.js';
import { GUNEYDOGU, OSMANLI } from './bolge/guneydogu-osmanli.js';
import { GENEL_1 } from './bolge/genel-1.js';
import { GENEL_2 } from './bolge/genel-2.js';
import { EK_TURK } from './bolge/ek-turk.js';

const etiketle = (mutfak, l) => l.map((t) => ({ mutfak, ...t }));

export const BOLGE_TARIFLERI = [
  ...etiketle('karadeniz', KARADENIZ),
  ...etiketle('ege', EGE),
  ...etiketle('akdeniz', AKDENIZ),
  ...etiketle('marmara', MARMARA),
  ...etiketle('ic-anadolu', IC_ANADOLU),
  ...etiketle('dogu', DOGU),
  ...etiketle('guneydogu', GUNEYDOGU),
  ...etiketle('osmanli', OSMANLI),
  ...etiketle('genel', GENEL_1),
  ...etiketle('genel', GENEL_2),
  ...EK_TURK,
];
