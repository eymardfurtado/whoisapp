import { Labels } from '@/utils';
import React, { useRef, } from 'react';
import styles from '../../styles/Form.module.css';

type SearchFormProps = {
  onSubmit: (inputValue: string) => void
};

const SearchForm = ({
  onSubmit
}: SearchFormProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current?.value.trim()) {
      onSubmit(inputRef.current.value);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} placeholder={Labels.form.formPlaceholder} ref={inputRef} type="text" />
      <button className={styles.button} type="submit">Search</button>
    </form>
  )
};

export default SearchForm