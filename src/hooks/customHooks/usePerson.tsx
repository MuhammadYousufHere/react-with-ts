import { useState, useEffect } from 'react';
import localforage from 'localforage';
import { Person } from '../../types';
function savePerson(person: Person | null): void {
  console.log('saving', person);
  localforage.setItem('person', person);
}
export const usePerson = (initialPerson: Person) => {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    (async function () {
      const person = await localforage.getItem<Person>('person');
      setPerson(person ?? initialPerson);
    })();
  }, [initialPerson]);
  useEffect(() => {
    savePerson(person);
  }, [person]);

  return [person, setPerson] as const; // to make ts aware that we are not returing an array rather, a tuple instead
};
