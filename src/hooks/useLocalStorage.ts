import { useState } from 'react';

type SetValueFunction = (value: string | object) => void;

const useLocalStorage = (
  key: string,
  initialValue: string | object,
): [string | object, SetValueFunction] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: string | object) => {
    try {
      const valueToStore =
        typeof value === 'function' ? value(storedValue) : value;

      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
