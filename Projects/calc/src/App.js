import React, {Component} from 'react';
import Button from './components/Button';

class App extends Component {
    constructor(props){
        super(props)

        this.state={
            current:'0',
            previous:[]
        }
    }

    reset = () =>{
        this.setState({result: '0'})
    }

    addToCurrent = (symbol) =>{
        this.setState({current: this.state.current + symbol})
    }

    render(){
        const buttons = [
            {symbol: 'C', cols: 3, action: this.reset},
            {symbol: '/', cols: 1, action: this.addToCurrent},
            {symbol: '7', cols: 1, action: this.addToCurrent},
            {symbol: '8', cols: 1, action: this.addToCurrent},
            {symbol: '9', cols: 1, action: this.addToCurrent},
            {symbol: 'X', cols: 1, action: this.addToCurrent},
            {symbol: '4', cols: 1, action: this.addToCurrent},
            {symbol: '5', cols: 1, action: this.addToCurrent},
            {symbol: '6', cols: 1, action: this.addToCurrent},
            {symbol: '-', cols: 1, action: this.addToCurrent},
            {symbol: '1', cols: 1, action: this.addToCurrent},
            {symbol: '2', cols: 1, action: this.addToCurrent},
            {symbol: '3', cols: 1, action: this.addToCurrent},
            {symbol: '+', cols: 1, action: this.addToCurrent},
            {symbol: '0', cols: 2, action: this.addToCurrent},
            {symbol: '.', cols: 1, action: this.addToCurrent},
            {symbol: '=', cols: 1, action: this.addToCurrent},
        ]
        return (
            <div className="App">
                <input className="Result" type="text" value={this.state.result}></input>

                {buttons.map((btn, i)=>{
                    return <Button symbol={btn.symbol} cols={btn.cols} action={(symbol)=>btn.action} />
                })}

            </div>
        );
    }
}

export default App;
