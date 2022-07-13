import React from "react"

export default function Die(props) {
    let diceClassName = ""
    if (props.isHeld) {
        switch (props.mode) {
            case "PARTY":
                diceClassName = "held--party-dice"
                break;
            case "WORK":
                diceClassName = "held--work-dice"
                break;
        }
    } else {
        switch (props.mode) {
            case "PARTY":
                diceClassName = "party-dice"
                break;
            case "WORK":
                diceClassName = "work-dice"
                break;
        }
    }
    
    return (
        <div className={diceClassName} onClick={()=> props.holdDice(props.id, props.value, props.isHeld)}>
            <p className="dice-number">{props.value}</p>   
        </div>     
    )
}