import React from 'react';
import "./Nav.css";
import "./Main.css"
import bracelet from '../assets/bracelet.jpg';
import ring from '../assets/ring.jpg';
import resinStatue from '../assets/resinStatue.png';
import bracelet2 from '../assets/bracelet2.png';


export default function Main(props) {
    return (
        <div class="card-container">
            <div class="card">
                <div class="card-date">1 June, 2024</div>
                <div class="card-image">
                    <img src={bracelet} alt="Bracelet"></img>
                </div>
                <div class="card-content">
                    <h2>Bracelet</h2>
                    <p>Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.</p>
                </div>
                <div class="card-curve"></div>
            </div>

            <div class="card">
                <div class="card-date">1 June, 2024</div>
                <div class="card-image">
                    <img src={ring} alt="Bracelet"></img>
                </div>
                <div class="card-content">
                    <h2>Bracelet</h2>
                    <p>Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.</p>
                </div>
                <div class="card-curve"></div>
            </div>

            <div class="card">
                <div class="card-date">1 June, 2024</div>
                <div class="card-image">
                    <img src={bracelet2} alt="b2"></img>
                </div>
                <div class="card-content">
                    <h2>Bracelet</h2>
                    <p>Received this special gift from my best friend on my birthday. I loved it a lot. One of the most beautiful gifts.</p>
                </div>
                <div class="card-curve"></div>
            </div>


        </div>
    )
}