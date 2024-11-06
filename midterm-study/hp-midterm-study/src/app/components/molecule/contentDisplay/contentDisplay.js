"use client"
import Image from "next/image";
import styles from "./ContentDisplay.module.css"

const ContentDisplay = ({ content, isLoading, isError }) => {

    return (
        <div className={styles.container}>
            {isLoading ? (
                <p>Loading ...</p>
            ) : isError ? (
                <p>Something went wrong! ☹️</p>
            ) : (
                <>
                    {content && content.map((character, index) => (
                        <div key={index} className={styles.characterContainer}>
                            <Image
                                loader={() => character.image}
                                src="https://ik.imagekit.io/hpapi/harry.jpg"
                                width={300}
                                height={200}
                                alt="Picture of the author"
                                style={{borderRadius: 20, height: 420, objectFit: 'cover'}}
                            />
                            <ul className={styles.information}>
                                <li>Name: {character.name}</li>
                                <li>House: {character.house}</li>
                                <li>Wand: <span className={styles.wood}>{character.wand.wood}</span> with a <span className={styles.core}>{character.wand.core}</span> core</li>
                            </ul>
                        </div>
                    ))}
                </>
            )} 
        </div>
    );
}

export default ContentDisplay;
