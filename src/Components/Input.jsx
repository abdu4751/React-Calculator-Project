import styles from "./Input.module.css"
let Input=({userInputValue})=>{
    return(
        <input type="text" readOnlys className={styles.calculatorInput} value={userInputValue} />
        
    )
}
export default Input