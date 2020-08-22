import './ShippingPage.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCommonPriceOfProductsToBuy } from '../../app/slices/basketSlice';
import {
  ShippingTypes,
  shippingValues,
  minPriceForFreeExpress,
} from './shippingType';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateAddress,
} from './validations';

export function ShippingPage() {
  const commonPrice = useSelector(selectCommonPriceOfProductsToBuy);

  const [shipType, setShipType] = useState(
    commonPrice > minPriceForFreeExpress
      ? ShippingTypes.FreeExpress
      : ShippingTypes.Free
  );
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    alert(
      `Congratulations! You buy stuff on ${
        commonPrice + shippingValues[shipType].additionalPrice
      } euro.`
    );
  }

  return (
    <div className="shipping-page">
      <form onSubmit={onSubmit} className="shipping-form">
        <div className="field name">
          <label className="field-name">Name*</label>
          <div className="field-body">
            <input
              className={chooseInputValidityClass(name, validateName)}
              required
              type="text"
              placeholder="John Kovalsky"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <p
              className={
                'error-message ' +
                (validateName(name) ? 'invisible' : 'visible')
              }
            >
              Invalid name.
            </p>
          </div>
        </div>
        <div className="field address">
          <label className="field-name">Address*</label>
          <div className="field-body">
            <input
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className={chooseInputValidityClass(address, validateAddress)}
              required
              type="text"
            />
            <p
              className={
                'error-message ' +
                (validateAddress(address) ? 'invisible' : 'visible')
              }
            >
              Invalid address
            </p>
          </div>
        </div>
        <div className="field phone">
          <label className="field-name">Phone</label>
          <div className="field-body">
            <PhoneInput
              className={chooseInputValidityClass(phone, validatePhone)}
              value={phone}
              onChange={setPhone}
            />
            <p
              className={
                'error-message ' +
                (validatePhone(phone) ? 'invisible' : 'visible')
              }
            >
              Invalid phone number
            </p>
          </div>
        </div>
        <div className="field email">
          <label className="field-name">Email</label>
          <div className="field-body">
            <input
              value={email}
              className={chooseInputValidityClass(email, validateEmail)}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              placeholder="contact@example.com"
            />
            <p
              className={
                'error-message ' +
                (validateEmail(email) ? 'invisible' : 'visible')
              }
            >
              Invalid e-mail
            </p>
          </div>
        </div>
        <div className="field shipping-type">
          <label className="field-name">Shipping options</label>
          <select
            value={shipType}
            onChange={(event) => {
              setShipType(event.target.value as ShippingTypes);
            }}
          >
            {Object.entries(shippingValues).map(([key, value]) => (
              <option key={key} value={key}>
                {value.description}
              </option>
            ))}
          </select>
        </div>
        <input
          disabled={
            !(
              name &&
              address &&
              validateName(name) &&
              validatePhone(phone) &&
              validateEmail(email) &&
              validateAddress(address)
            )
          }
          className="btn buy-btn"
          type="submit"
          value="Buy"
        />
      </form>
    </div>
  );
}

function chooseInputValidityClass(
  value: string,
  predicat: (value: string) => boolean
): string {
  if (!value) {
    // If value is empty <input> will not be highlighted.
    return '';
  }

  return predicat(value) ? 'valid' : 'invalid';
}
