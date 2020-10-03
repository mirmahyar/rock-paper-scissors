import React, { Component } from "react"
import rock from "./rock.png"
import paper from "./paper.png"
import scissors from "./scissors.png"
import "./App.css"

class App extends Component {

    state = { stateHumanChoice: '', stateMachineChoice: '', stateWinnerRound: '' }

    play = (humanChoice) => {
        this.setState({ stateHumanChoice: humanChoice })
        let machineChoice = this.decideComputerChoice();
        this.setState({ stateMachineChoice: machineChoice })
        let winner = this.decideWinnerRound(humanChoice, machineChoice);
        this.setState({ stateWinnerRound: winner })

        //console.log(winner)

    }

    decideComputerChoice = () => {
        let machineChoice = '';
        const computerChoiceNumber = Math.floor(Math.random() * 3);

        if (computerChoiceNumber === 0) {
            //this.setState({ computerChoice: 'rock' })
            machineChoice = 'rock'
        } else if (computerChoiceNumber === 1) {
            //this.setState({ computerChoice: 'paper' })
            machineChoice = 'paper'
        } else if (computerChoiceNumber === 2) {
            //this.setState({ computerChoice: 'scissors' })
            machineChoice = 'scissors'
        }
        return machineChoice;

    }

    decideWinnerRound = (humanChoice, machineChoice) => {

        let winner = '';

        if (humanChoice === 'rock') {
            if (machineChoice === 'scissors') {
                // this.setState({ WinnerRound: 'human' })
                winner = 'You';
            } else if (machineChoice === 'paper') {
                //this.setState({ WinnerRound: 'computer' })
                winner = 'Computer'

            }
            else if (machineChoice === 'rock') {
                winner = 'Tie'
            }
        }

        if (humanChoice === 'paper') {
            if (machineChoice === 'scissors') {
                // this.setState({ WinnerRound: 'human' })
                winner = 'Computer';
            } else if (machineChoice === 'paper') {
                //this.setState({ WinnerRound: 'computer' })
                winner = 'Tie'

            }
            else if (machineChoice === 'rock') {
                winner = 'You'
            }
        }

        if (humanChoice === 'scissors') {
            if (machineChoice === 'scissors') {
                // this.setState({ WinnerRound: 'human' })
                winner = 'Tie';
            } else if (machineChoice === 'paper') {
                //this.setState({ WinnerRound: 'computer' })
                winner = 'You'

            }
            else if (machineChoice === 'rock') {
                winner = 'Computer'
            }


        }
        return winner;

    }





    render() {
        return (
            <div>
                <h1 className="title">Rock Paper Scissors ! </h1>

                <div className='pic'>
                    <input className='individual-pic' type='image' src={rock} alt='img' onClick={() => this.play("rock")} />
                    <input className='individual-pic' type='image' src={paper} alt='img' onClick={() => this.play("paper")} />
                    <input className='individual-pic' type='image' src={scissors} alt='img' onClick={() => this.play("scissors")} />
                </div>

                <p className='announcement'> you chose {this.state.stateHumanChoice}</p>
                <p className='announcement'> Computer chose {this.state.stateMachineChoice}</p>
                <p className='announcement'> And the Winner is .... {this.state.stateWinnerRound}
                    {this.state.stateWinnerRound === 'You' ?
                        <p> Congrats ! </p> :
                        <p>:(</p>}
                </p>

            </div>
        );
    }
}

export default App;