import React from "react"

export default function Home(props) {
    return (
        <main>
            <h1 className="title--home">TENZIES</h1>
            <p className="description--game"> Roll until all the dice are the same. Click on each dice to freeze and hold the dice between rolls.</p>
            <h4>Pick a mode:</h4>
            <span>
                <button className="button--mode work" onClick={() => props.setPage("PAGE--WORK")}>Work Mode</button>
                <button className="button--mode party" onClick={() => props.setPage("PAGE--PARTY")}>Party Mode  
                <p className="warning--strobe">**strobe warning**</p>
                </button>
            </span>
        </main>
    )
}