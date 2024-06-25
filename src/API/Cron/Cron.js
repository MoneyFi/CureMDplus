import { sendRenewEmail } from "../Mails/emailjs";

export function calculateExpiryDate(startDate, planDuration) {
  let expiryDate = new Date(startDate);
  expiryDate.setSeconds(0);
  expiryDate.setMilliseconds(0);
  switch (planDuration) {
    case "mensual":
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      break;
    case "semestral":
      expiryDate.setMonth(expiryDate.getMonth() + 6);
      break;
    case "anual":
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      break;
    case "test":
      expiryDate.setMinutes(expiryDate.getMinutes() + 2);
      break;
    default:
      throw new Error("Duración del plan no válida");
  }

  return expiryDate;
}
export function createScheduler(email, startDate, planDuration) {
  let expiryDate = calculateExpiryDate(startDate, planDuration);
  let remind = new Date(expiryDate);
  remind.setDate(remind.getDate() - 1); // Enviar recordatorio 1 día antes
  const now = new Date();
  const timeUntilReminder = remind.getTime() - now.getTime()
  if (timeUntilReminder > 0) {
    setTimeout(() => {
      sendRenewEmail(email);
    }, timeUntilReminder);
  }
}
