/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 *
 * contrainte:
 *   - le mot clée "function" est interdis
 */

const arrow1 = (a) => {
  return a + 1;
};

console.log(arrow1(5));

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 *
 * contrainte:
 *   - le mot clée "function" est interdis
 *   - le mot clée "return" est interdis
 */

const arrow2 = (b) => b + 1;
console.log(arrow2(1));

module.exports = { arrow1, arrow2 };
