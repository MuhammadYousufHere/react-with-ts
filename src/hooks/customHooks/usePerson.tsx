import { useState, useEffect, useCallback } from 'react';
import localforage from 'localforage';
import { useIsMounted } from './useIsMouted';
import { Person } from '../../types';
import { useDebounce } from './useDebounce';
import { useWillUnmount } from './useWillUnmount';
function savePerson(person: Person | null): void {
  console.log('saving', person);
  localforage.setItem('person', person);
}
export const usePerson = (initialPerson: Person) => {
  const [person, setPerson] = useState<Person | null>(null);
  const isMounted = useIsMounted();
  useEffect(() => {
    (async function () {
      const person = await localforage.getItem<Person>('person');
      if (isMounted.current) {
        setPerson(person ?? initialPerson);
      }
    })();
  }, [initialPerson, isMounted]);
  //
  // useEffect(() => {
  //   savePerson(person);
  // }, [person]);

  // rerender every half a second/ mock
  // const [_, setTime] = useState(new Date());
  // useEffect(() => {
  //   const handle = setInterval(() => setTime(new Date()), 500);
  //   return () => clearInterval(handle);
  // }, []);
  //return new when person changs
  const svPerson = useCallback(() => {
    savePerson(person);
  }, [person]);

  // set only when a user stops changing the state/
  useDebounce(() => {
    svPerson();
  }, 1000);
  useWillUnmount(svPerson);
  return [person, setPerson] as const; // to make ts aware that we are not returing an array rather, a tuple instead
};
