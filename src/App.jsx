import React, { Component } from 'react';
import './App.css';

import KeyPad from "./components/Keypad";

class App extends Component {
    state = {
            result: ""
        }
    

    onClick = (value) => {

        if(value === "C"){
            this.clear()
        }

        else if(value === "CE"){
            this.backspace()
        }
        else if(value === "="){
            this.eval()
        }

        else {
            this.setState({
                result: this.state.result + value
            })
        }
    };

    clear = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    eval = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    render() {
        return (
            <div>
                <div className="calcBody">
                    <h1>Calculator</h1>
                    
                    <KeyPad onClick={this.onClick} result={this.state.result}/>
                </div>
            </div>
        );
    }
}

export default App;