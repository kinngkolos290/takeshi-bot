/**
 * Classe de erro customizada para
 * erros críticos.
 *
 * @author Dev destructor 
 */
class DangerError extends Error {
  constructor(message) {
    super(message);
    this.name = "DangerError";
  }
}

module.exports = {
  DangerError,
};
