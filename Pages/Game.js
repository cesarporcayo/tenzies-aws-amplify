import React, {useState, useEffect} from "react" 
import Die from "..Components/Die"

export default function Game(props) {
    let initArr;
    const [dieCount, setDieCount] = React.useState(0);
    const [heldValue, setHeldValue] = useState("")
    function getNewDieSet() {
        initArr = []
        for (let i = 0; i < 10; i++) {
            let dice = {
                key: i,
                id: i,
                value: Math.floor(Math.random()*6) + 1,
                isHeld: false,
                styles: {backgroundColor: "white", color: "grey"} 
            }
            initArr.push(dice)
        }
    }
    
    getNewDieSet()
    function initNewGame() {
        setDieCount(0)
        setHeldValue("")
        getNewDieSet()
        setDie(initArr)
    }
    
    const [die, setDie] = React.useState(initArr)
    
    const dieElements = die.map(dice => {
        return (<Die 
        key={dice.key} 
        id={dice.id}
        value={dice.value} 
        isHeld={dice.isHeld} 
        holdDice={holdDice}
        style={dice.styles}
        mode={props.mode}
        />)
    })
    
    function rollDice() {
        setDie(prevDie => {
            return (
                prevDie.map(dice => dice.isHeld ? {...dice, value: dice.value} : {...dice, value: Math.floor(Math.random()*6)+1})
            )
        })
    }
    
    function holdDice(index, value, isHeld) {
        if (dieCount === 0) {
            setHeldValue(value)
        }
        
        if (!isHeld && heldValue === value) {
           setDie(prevDie => { 
                const updatedDie = prevDie.map(dice => {
                    return dice.id === index ? {...dice, isHeld: true, styles: {backgroundColor: "green", color: "white"}} : dice
                })
                return updatedDie
            })
            setDieCount(prevCount => prevCount + 1)
            console.log(dieCount) 
        } else if (isHeld){
            setDie(prevDie => { 
                const updatedDie = prevDie.map(dice => {
                    return dice.id === index ? {...dice, isHeld: false, styles: {backgroundColor: "white", color: "grey"}} : dice
                })
                return updatedDie
            })
            setDieCount(prevCount => prevCount - 1)

            console.log(dieCount)
        }
    }
    

    const buttonText = "Roll"
    
    return (
        <main className={props.mode === 'PARTY' ? "main--party" : "main--work"}>
            <section className={props.mode === "PARTY" ? "title--party" : "title--work"}>
                <h1> T </h1>
                <h1> E </h1>
                <h1> N </h1>
                <h1> Z </h1>
                <h1> I </h1>
                <h1> E </h1>
                <h1> S </h1>
                <h1> ! </h1>
                
            </section>
            <p className="game--description"> Roll until all the dice are the same. Click on each dice to freeze and hold the dice between rolls. </p>
            <section className="container--die">
                {dieElements}
            </section>
            <button className={props.mode === "PARTY" ? "button--party-roll" : "button--work-roll"} 
                onClick={() => {
                    dieCount === 10 ? props.setPage("PAGE--HOME") : rollDice()
                }
             }> {dieCount === 10 ? "Return Home" : "Roll"} </button>
        </main>
    )
}