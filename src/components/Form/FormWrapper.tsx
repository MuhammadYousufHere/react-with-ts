import React, { ReactNode } from 'react';
import { FormikConfig, FormikValues, Formik, Form } from 'formik';
import Button from '../Button/Button';
type FormWrapperProps = { children?: ReactNode } & FormikConfig<FormikValues>;
function FormWrapper({ children, ...props }: FormWrapperProps) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = React.useState(0);
  const currnetChild = childrenArray[step];
  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (step < childrenArray.length - 1) {
          setStep((s) => s + 1);
        } else {
          await props.onSubmit(values, helpers);
        }
      }}
    >
      <Form autoComplete='off'>
        {currnetChild}
        {step < childrenArray.length - 1 && (
          <Button onClick={() => setStep((s) => s - 1)} />
        )}
      </Form>
    </Formik>
  );
}

const FormStep = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
const App = () => {
  return (
    <FormWrapper
      initialValues={{ name: '' }}
      onSubmit={() => {}}
    ></FormWrapper>
  );
};
