export class Alumno {
  constructor(username, DNI) {
    this.username = username;
    this.DNI = DNI;
  }
  
  toString() {
    return `Alumno(username=${this.username}, DNI=${this.DNI})`;
  }
}