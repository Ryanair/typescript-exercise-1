import {collagen} from './collagen';

/**
 * Base enum defining the 4 DNA bases
 */
enum Base {
  A,
  T,
  G,
  C
}

/**
 * @description Retrieves the string version of a DNA Base
 * 
 * @param {Base} base enum of DNA base
 * @return {String} string version of DNA base
 */
const base2String = (base: Base): string => Base[base];

/**
 * @description A map of DNA bases to complementary ones
 */
const basePairs: { [baseName: string]: Base } = {
  'A': Base.T,
  'T': Base.A,
  'G': Base.C,
  'C': Base.G
};

/**
 * @description Replies with a string containing complementary bases of input
 * 
 * @param {string} sequence string containing a sequence of DNA Bases
 * @returns {string} stirng of complementary DNA bases
 */
const complementary = (sequence: string): string => 
  sequence
    .split('')
    .map((s) => base2String(basePairs[s]))
    .join('');

/**
 * Get the complementary DNA base sequence and print it out
 */
const res = complementary('ATGCATCAGACT');
console.log(res);
