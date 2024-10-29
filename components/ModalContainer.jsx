'use client';
import { useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import Script from 'next/script';
import PaymentForm from './PaymentForm';
import OtherForm from './OtherForm';

const ModalContainer = () => {
  const [step, setStep] = useState(0);
  const cardRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Dialog fullWidth open={open} onClose={() => {setOpen(false); setStep(0)}}>
        <DialogContent>
          {step === 0 && <OtherForm step={step} />}
          {step === 1 && <OtherForm step={step} />}
          {step === 2 && <PaymentForm cardRef={cardRef} />}
        </DialogContent>
        <DialogActions>
          <Button sx={{ mr: 'auto' }} variant="outlined" onClick={() => setOpen(false)}>Close</Button>
          {step > 0 && <Button variant="contained" onClick={() => setStep(step - 1)}>Previous</Button>}
          {step < 2 && <Button variant="contained" onClick={() => setStep(step + 1)}>Next</Button>}
        </DialogActions>
      </Dialog>
      <Script
        src="https://js.chargebee.com/v2/chargebee.js"
        onLoad={() => {
          window.Chargebee.init({
            site: 'mannar-test',
            publishableKey: 'test___dev__cdF5IUqCBwUNpKZrueN3KcfAnBcdsKX1xK'
          });
        }}
      />
    </>
  );
};

export default ModalContainer;
