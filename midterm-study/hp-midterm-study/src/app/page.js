"use client"
import styles from './Page.module.css'
import Header from './components/organism/header/header';
import ContentDisplay from './components/molecule/contentDisplay/contentDisplay';
import { useState } from 'react';

export default function Home() {
  
// Implementation
// X Pick an API
// X Create a header component 
// X Create a button component
// X Create a component to display content
// X Create styles modules
// X Fetch data from API
// X Format and handle the data
// X Create breakpoints
// X Error handling

  const [content, setContent] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('idle');
  const isLoading = fetchStatus === 'loading'; 
  const isError = fetchStatus === 'error'; 
  const API_URL = "https://hp-api.herokuapp.com/api/characters";
  
  const handleFetch = async () => {
    try {
        setFetchStatus('loading');
        const response = await fetch(API_URL);
        const data = await response.json();
        setContent(data.slice(0, 5)); 
        setFetchStatus('idle');
    } catch (e) {
        setFetchStatus('error');
        console.error(e.message);
    }
  };

  return (
    <div className={styles.container}>
      <Header onFetchData={handleFetch} loading={isLoading} />
      <ContentDisplay content={content} isLoading={isLoading} isError={isError} />
    </div>
  );
}
