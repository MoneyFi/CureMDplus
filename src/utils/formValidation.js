const regex_no_numbers = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/;
const regex_no_letters = /^\d+$/;
const regex_emails = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const register_validation = {
  firts_name: (name) => {
    if (name.split("").at(0) !== name.split("").at(0).toUpperCase()) {
      return "Debe comenzar con mayuscula";
    }
    if (name.split(" ").length > 1) return "Solo el primer nombre";
    if (!regex_no_numbers.test(name))
      return "Solo se permiten letras y acentos";
    return null;
  },
  last_name: (name) => {
    if (name.split("").at(0) !== name.split("").at(0).toUpperCase()) {
      return "Debe comenzar con mayuscula";
    }
    if (name.split(" ").length > 1) return "Solo el primer apellido";
    if (!regex_no_numbers.test(name))
      return "Solo se permiten letras y acentos";
    return null;
  },
  cuil: (number) => {
    if (!regex_no_letters.test(number)) return "Solo se permiten numeros";
    return null;
  },
  mobile_number: (number) => {
    if (!regex_no_letters.test(number)) return "Solo se permiten numeros";
    return null;
  },
  email: (string) => {
    if (!regex_emails.test(string)) return "Coloca un email valido";
    return null;
  },
  default: (string) => {
    if (string.split("").at(0) !== string.split("").at(0).toUpperCase()) {
      return "Debe comenzar con mayuscula";
    }
    return null;
  },
  dob: (fecha) => {
    const fechaInicio = new Date(1900, 0, 1);
    const fechaActual = new Date();

    if(!(fecha >= fechaInicio && fecha <= fechaActual)) return true
    return null;
  },
};
