import { isValidPhoneNumber } from 'react-phone-number-input';

export function validateName(name: string): boolean {
  if (!name) {
    return true;
  }

  const nameRegExp = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,31}$/i;
  return nameRegExp.test(name);
}

/**
 * [According to RFC 2822](https://tools.ietf.org/html/rfc2822#section-3.4.1).
 * Was taked [here](https://regexr.com/2rhq7).
 */
export function validateEmail(email: string): boolean {
  if (!email) {
    return true;
  }
  const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return re.test(email);
}

/**
 * Address validates as letters with allowed symbols.
 * It does not check for real address.
 */
export function validateAddress(address: string): boolean {
  if (!address) {
    return true;
  }

  return /^[a-z0-9\s,.'-]+$/i.test(address);
}

export function validatePhone(phone: string): boolean {
  if (!phone) {
    return true;
  }

  return isValidPhoneNumber(phone);
}
