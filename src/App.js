import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board.js';
import Cell from './components/Cell.js';


class Game extends React.Component {

    /*
    Beginner: 10 mines, 8x8 board
    Intermediate: 20 mines, 12x12 board
    Expert: 40 mines, 16x16 board
    */
    state = {
        height: 8,
        width: 8,
        mines: 10,
    };

    handleGameStart = () => {
        let difficulty = document.querySelector("#level_select");
        if (difficulty.value === "beginner") {
            this.setState({
                height: 8,
                width: 8,
                mines: 10,
            });
        }
        if (difficulty.value === "intermediate") {
            this.setState({
                height: 12,
                width: 12,
                mines: 20,
            });
        }
        if (difficulty.value === "expert") {
            this.setState({
                height: 16,
                width: 16,
                mines: 40,
            });
        }
    }

    render() {
        const { height, width, mines } = this.state;
        return (
            <div className="game">
                <div className="game-info">
                    <div className="instructions">
                        <h2 >Minesweeper</h2>
                        <h3>Regulile jocului</h3>
                        <p>Următoarea tablă de joc conține mai multe căsuțe, dintre care unele conțin bombe. Scopul jocului este de a descoperi toate căsuțele fără a declanșa vreo bombă. </p>
                        <p>Unele căsuțe conțin numere care reprezintă numărul de bombe dimprejur.</p>
                        <p>Pentru a marca locul unde crezi că există o bombă, poți apăsa click dreapta și un steguleț va apărea în zona respectivă.</p>
                        <p>Have fun! 😎💯</p>
                        
                    </div>
                    <h4>Selectează un nivel</h4>
                    <p><span className="info">Nivel:
                        <select id="level_select">
                            <option value="beginner"> Începător </option>
                            <option value="intermediate"> Mediu </option>
                            <option value="expert"> Expert </option>
                        </select>
                    </span>
                    <button onClick={this.handleGameStart}>Start</button>
                </p>
                </div>

              <Board height={height} width={width} mines={mines} />

            </div>
        );
    }
}

export default Game;
