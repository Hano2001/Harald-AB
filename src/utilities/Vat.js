import react from "react";

export function VatCheck(vatNumber) {
  if (vatNumber.length === 12) {
    const vatString = vatNumber.toString();
    const vatFirst = vatString.slice(0, 2);
    const vatLast = vatString.slice(2, 12);
    const isNumber = Number(vatLast);

    if (vatFirst === "SE" && isNaN(isNumber) === false) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
