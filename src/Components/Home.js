import React from 'react';
import './Home.css';
import 'react-bootstrap';
import logo from "./temp.ico";
import earpods from "./earpods.jpg";
import stofzuiger from "./stofzuiger.jpg";

function unreleasedClick(){
    alert("No page yet")
}
const home = () => {
    return (
        <div class="container">
            <h2 className="header"> Welkom op StudentenStore.nl!</h2>
            <h3> De site voor studenten, door studenten</h3>
            <h4>Log in om jouw punten te bekijken en ontvang korting op </h4>
            <h4>Nog geen account? Klik HIER om er een aan te maken!</h4>
            <h5>Voor meer info; lees de <a href="/faq">FAQ </a></h5>
            <br/>
            <div class="row">
                <div class="col-md">
                    <img src={logo} onClick={unreleasedClick}></img><br />
                    <h4>Apple airpods met draadloze oplaadcase</h4> <br />
                </div>
                <div class="col-md">
                    <img src={logo} onClick={unreleasedClick}></img><br />
                    <h4>Beats by Dre</h4> <br />
                </div>
                <div class="col-md">
                    <img src={logo} onClick={unreleasedClick}></img><br />
                    <h4>Samsung TAB</h4> <br />
                </div>
            </div>
        </div>
    );
}
export default home;