'use client';
import { CardComponent, CardNumber, CardExpiry, CardCVV } from '@chargebee/chargebee-js-react-wrapper';

const CB_LOCALE = 'en';
const CB_CLASSES = {
  focus: 'focus',
  invalid: 'invalid',
  empty: 'empty',
  complete: 'complete'
};
const CB_STYLE = {
  // Styles for default state
  base: {
    color: '#333',
    fontWeight: '500',
    fontFamily: 'Roboto, Segoe UI, Helvetica Neue, sans-serif',
    fontSize: '16px',
    fontSmoothing: 'antialiased',

    // Input text color on focus
    ':focus': {
      color: '#424770'
    },

    // Default placeholder color
    '::placeholder': {
      color: 'transparent'
    },

    // Placeholder color when focused
    ':focus::placeholder': {
      color: '#7b808c'
    }
  },

  // Styles applied when field is in an invalid state
  invalid: {
    color: '#e41029',

    ':focus': {
      color: '#e44d5f'
    },

    '::placeholder': {
      color: '#FFCCA5'
    }
  }
};
const CB_PLACEHOLDER = {
  number: '4111 1111 1111 1111',
  expiry: 'MM / YY',
  cvv: 'CVV'
};
export default function PaymentForm({ cardRef }) {
  return (
    <>
      <CardComponent
        ref={cardRef}
        styles={CB_STYLE}
        classes={CB_CLASSES}
        locale={CB_LOCALE}
        placeholder={CB_PLACEHOLDER}
      >
        <CardNumber className="input" />
        <CardExpiry className="input" />
        <CardCVV className="input" />
      </CardComponent>
    </>
  );
}
