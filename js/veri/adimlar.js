// Ayrıntılı hazırlanış adımları: tarif kimliği → adımlar. Burada olan tarifler kısa adımlarının yerine bunları kullanır.
import { ADIM_1 } from './adimlar/adim-1.js';
import { ADIM_2 } from './adimlar/adim-2.js';
import { ADIM_3 } from './adimlar/adim-3.js';

export const AYRINTILI_ADIMLAR = { ...ADIM_1, ...ADIM_2, ...ADIM_3 };
