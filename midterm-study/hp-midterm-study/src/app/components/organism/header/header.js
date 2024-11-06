import Button from '../../atom/button/button'
import styles from './Header.module.css'
import { Jolly_Lodger } from "next/font/google";

const fontJolly = Jolly_Lodger({
  weight: [ '400'],
  subsets: ['latin'],
})

const Header = ({onFetchData, loading}) => {
    return (
        <header className={`${styles.headerContainer} ${fontJolly.className}`}>
            <h1 className={styles.header}>Harry Potter Fansite</h1>
            <Button onClick={onFetchData} disabled={loading}/>
        </header>
    )
}

export default Header