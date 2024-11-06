import styles from './Button.module.css'

const Button = ({onClick, disabled}) => {
    return(
        <button 
            className={styles.button} 
            onClick={onClick}
            disabled={disabled}
        >
            Fetch Harry Potter Content!⚡
        </button>
    )
}

export default Button