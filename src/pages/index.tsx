import SearchForm from '@/components/Form/Form';
import Results from '@/components/Results/Results';
import { useState } from 'react';
import { Whois } from '../models/whois';
import ErrorMessage from '@/components/Results/ErrorMessage';
import styles from '@/styles/Home.module.css';

export default function Home() {

  const [data, setData] = useState<Whois | null>(null);

  const onSubmit = (inputValue: string) => {
    fetch(`api/search-whois?domainName=${inputValue}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log('err', err)
        setData(err)
      });
  };

  const resultElement = data && data.WhoisRecord && <Results data={data.WhoisRecord} />;
  const errorMessageElement = data && data.ErrorMessage && <ErrorMessage heading={data.ErrorMessage.msg.includes("invalid domain") ? "Invalid domain" : "Something went wrong..."} errorMessage={data.ErrorMessage.msg} />;

  return (
    <main className={styles.main}>
      <SearchForm onSubmit={onSubmit} />
      {resultElement}
      {errorMessageElement}
    </main>
  )
}
