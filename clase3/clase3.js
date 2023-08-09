//Calculadora positiva con promesa
function isNotZero(a, b) {
    if (a === 0 || b === 0) return false;
    else return true;
  }
  
  const suma = (numeroA, numeroB) => {
    return new Promise((resolve, reject) => {
      //    setTimeout(() => {
      if (!isNotZero(numeroA, numeroB)) {
        reject("operacion no necesaria");
      } else if (numeroA + numeroB < 0) {
        reject("Solo devolvemos valores positivos");
      } else {
        resolve(numeroA + numeroB);
      }
      // }, 2000);
    });
  };
  
  const resta = (numeroA, numeroB) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNotZero(numeroA, numeroB)) {
          reject("operacion invalida");
        } else if (numeroA - numeroB < 0) {
          reject("Solo devolvemos valores positivos");
        } else {
          resolve(numeroA - numeroB);
        }
      }, 2000);
    });
  };
  
  const multiplicacion = (numeroA, numeroB) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (numeroA < 0 || numeroB < 0) {
          reject("operacion invalida");
        } else if (numeroA * numeroB < 0) {
          reject("Solo devolvemos valores positivos");
        } else {
          resolve(numeroA * numeroB);
        }
      }, 2000);
    });
  };
  
  async function operacion() {
    try {
      let resultado = await suma(1, 2);
      let resultado2 = await resta(4, 2);
      let resultado3 = await multiplicacion(2, 2);
      console.log("suma", resultado);
      console.log("resta", resultado2);
      console.log("multi", resultado3);
    } catch (err) {
      console.log(err);
    }
  }
  operacion();