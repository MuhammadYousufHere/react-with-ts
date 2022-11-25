import React, { useRef, useState } from 'react';
import { Person } from '../types';
import { Loading } from './Loading';
import { usePerson } from './customHooks/usePerson';
import { useDebounce } from './customHooks/useDebounce';

export const initialPerson: Person = {
  id: 4,
  firstname: 'Freda',
  surname: 'Lowery',
  email: 'fredalowery@hawkster.com',
  balance: 1501.07,
  picture: 'https://randomuser.me/api/portraits/lego/4.jpg',
  address: '879 Sapphire Street, Wells, Texas, 8427',
  phone: '(899) 456-3001',
};
const btnStyle = {
  backgroundColor: '#fff',
  padding: '0.4rem 1rem',
  borderRadius: '6px',
  color: '#000000',
};
const Playground = () => {
  const [person] = usePerson(initialPerson);
  const [count, setCount] = useState<number>(0);
  const btnRef = useRef<HTMLButtonElement>(null);
  // side effect with cleanups
  React.useEffect(() => {
    const interval = setInterval(() => {
      // do something
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useLayoutEffect(() => {
    if (btnRef.current) {
      btnRef.current.style.backgroundColor = 'dodgerblue';
    }
  }, []);
  if (!person) return <Loading />;
  return (
    <>
      <div className='person-container'>
        {
          <div className='portrait'>
            <figure>
              <img
                src={person.picture}
                alt={person.firstname}
              />
              <figcaption>{`${person.firstname} ${person.surname}`}</figcaption>
            </figure>
          </div>
        }
      </div>
      <div
        className='counter-btn'
        style={{ color: '#fff' }}
      >
        <button
          ref={btnRef}
          style={btnStyle}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count
        </button>{' '}
        {count}
      </div>
    </>
  );
};

export default Playground;
