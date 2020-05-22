import React from 'react';
import ReactDOM from 'react-dom';


class Car extends React.Component {
    constructor(props) {
        super(props);
        this.colorChange = this.colorChange.bind(this)
        this.modelChange = this.modelChange.bind(this)
        this.undoChange = this.undoChange.bind(this)
        this.state = {
            color: 'Green',
            model: 'BMW',
            
        }
    }
colorChange(){
    this.setState({
        color: 'red'
    })
}
modelChange() {
    this.setState ({
        model: 'Toyota'
    })
}
undoChange() {
    this.setState({
        color: 'Green',
        model: 'BMW'
    })
}

    render() {
        return (
            <div>
                <h1>Color : {this.state.color}</h1>
                <hr/>
                <h1>Model : {this.state.model}</h1>
                <hr/>
                <button onClick={this.colorChange}>colorChange</button>
                <button onClick={this.modelChange}>modelChange</button>
                <button onClick={this.undoChange}>Undo</button>
            </div>

        )
        
    }
} 






















/*class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: 'Ford',
            color: 'black'


        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
      }
    render () {
        return (
            <div>
            <p>{this.state.model}</p>
            <p>{this.state.color}</p>
            <button
                type="button"
                onClick={this.changeColor}>
                Change color
            </button>
            </div>
        )
    }
}*/
ReactDOM.render(<Car />, document.getElementById('app'));