'use client';
import { use, useEffect, useState } from 'react';
import { useFormContext } from '../form-provider';
import { FormMask } from '../form-mask';
import { FormValidation } from '../form-validation';
import { Input as InputComponent } from '@/common/components/ui/input';

type InputProps = {
  name: string;
  label?: string;
  mask?: keyof typeof FormMask;
  validation?: (keyof typeof FormValidation)[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  equalsTo?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'className'>;

export function Input({
  name,
  label,
  mask,
  onChange,
  value: valueProp,
  validation,
  className,
  equalsTo,
  ...rest
}: InputProps) {
  const { setFields, errors, setErrors, errorMessages, setErrorMessages } = useFormContext();
  const [value, setValue] = useState<string>('');

  const handleError = (value: string = '') => {
    if (!validation) return;
    let error: string = '';
    if (equalsTo) {
      error = value !== equalsTo ? 'Os campos não são iguais' : '';
    }
    error =
      validation.reduce((acc, key) => {
        const validationFn = FormValidation[key];
        return validationFn(value) || acc;
      }, '') || error;
    if (error) {
      errors[name] !== error && setErrors((errors) => ({ ...errors, [name]: error }));
      return;
    }
    setErrors((errors) => {
      const { [name]: _, ...rest } = errors;
      return rest;
    });
  };

  const handleChange = (value: string) => {
    if (mask) {
      const maskFn = FormMask[mask];
      setValue(maskFn(value));
      onChange && onChange(maskFn(value));
    } else {
      setValue(value);
      onChange && onChange(value);
    }
    handleError(value);
    setFields((fields) => {
      const { [name]: _, ...rest } = fields;
      value && (rest[name] = value);
      return rest;
    });
    setErrorMessages((errorMessages) => ({ ...errorMessages, [name]: false }));
  };

  useEffect(() => {
    handleError();
    setErrorMessages((errorMessages) => ({ ...errorMessages, [name]: false }));
  }, []);

  useEffect(() => {
    if (!valueProp || valueProp === value) return;
    handleChange(valueProp);
  }, [valueProp, handleChange]);

  return (
    <div className={`flex flex-col gap-2 ${className} ${errorMessages?.[name] && '[&_input]:border-destructive'}`}>
      {label && (
        <label htmlFor={name} className="text-base font-medium">
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1">
        <InputComponent onChange={(e) => handleChange(e.target.value)} name={name} value={value} {...rest} />
        {errorMessages?.[name] && <p className="text-sm text-destructive pl-1">{errors[name]}</p>}
      </div>
    </div>
  );
}
