import React, { InputHTMLAttributes, ReactElement, forwardRef } from 'react';
import classNames from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
// useRef() primarly used for accessing the dom but could maintain any state for a component when you don;t want to render on update
// forwardRef : obiviosly used for accessing the dom of component
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
