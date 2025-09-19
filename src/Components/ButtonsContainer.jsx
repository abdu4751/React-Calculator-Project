import styles from './ButtonsContainer.module.css'
let ButtonContainer=({onButtonText})=>{
    let calculatorButtons=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
    return(
        <div className={styles.ButtonContainer}>
            {
                calculatorButtons.map( (btn)=><button
                className={styles.calculatorButton}
                key={btn}
                onClick={()=>onButtonText(btn)}
                
                
                >{btn}</button>)
            }
        </div>
    )
}
export default ButtonContainer;