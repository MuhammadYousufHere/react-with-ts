import React from 'react';
import { Person } from '../types';
import { Loading } from './Loading';
import { usePerson } from './customHooks/usePerson';

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

const Playground = () => {
  const [person] = usePerson(initialPerson);

  // side effect with cleanups
  React.useEffect(() => {
    const interval = setInterval(() => {
      // do something
    }, 1000);

    return () => clearInterval(interval);
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
    </>
  );
};

export default Playground;
