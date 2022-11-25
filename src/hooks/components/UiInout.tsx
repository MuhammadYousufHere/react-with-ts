import React, { InputHTMLAttributes, ReactElement, forwardRef } from 'react';
import classNames from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const LabeledInput = forwardRef<HTMLInputElement, Props>(
  ({ id, label, className, ...props }, ref): ReactElement => {
    return (
      <div className={classNames('form-group', className)}>
        <label
          htmlFor={id}
          className='form-label'
        >
          {label}
        </label>

        <input
          {...props}
          id={id}
          className='form-control'
          ref={ref}
        />
      </div>
    );
  }
);
