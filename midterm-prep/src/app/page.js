"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
// Implementation
// X 1 Pick an API
// X 4 Build a button component that has a fetch action/clear action
// X Build a component that displays our data (should have an empty and fulfilled state)
// X 3 Build a function that will fetch our data 
// X Format and handle the data 
// - ^(error handling)
// - Style our app anc create breakpoints 
// X 2 Component for our button to sit in 

const [pictureContents, setPictureContents] = useState(null);
const [loading, setLoading] = useState(false);

  async function fetchPictures(){
    const API_URL = 
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
    const response = await fetch (API_URL);
    const testVar = "hello;"
    const data = await response.json();
    setPictureContents(data);
    // console.log(data); ASK SONJA IF SHE WANTS THIS COMMENTED OUT OR DELETED ENTIRELY
    setLoading(false);
  }

  // ASK SONJA: Should we move these out into component folders?
  const Header = () => {
      return (
        <section>
          <h1>My Cool Midterm Submission</h1>
          <button 
            disabled={loading} // means that button is disabled it this is in loading state 
            onClick={fetchPictures}
            className="border-2 border-black p-2">
              Fetch 💁‍♀️
          </button>
        </section>
      );
  };

  const PictureDisplay = () => {
      if (loading) {
        return <section>Loading...</section>
      }

      if (pictureContents) {
        const pictureList = [];
        pictureContents.forEach((picture, i) => {
        // keys are explanation, title, url
          pictureList.push(
            <article key={i}>
              <img src={picture.url} alt={picture.explanation}/> 
              <h1>{picture.title}</h1>
              <p>{picture.explanation}</p>
              <hr />
            </article>
          );
        });

        return <section>{pictureList}</section>
      }

      return <section>No pictures have been fetched</section>
  };

  return (
    <div className="m-8">
      <Header />
      <PictureDisplay />
    </div>
  );
}
