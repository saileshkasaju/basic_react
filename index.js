class Button extends React.Component {
	  handleClick = () => {
		      this.props.handleClick(this.props.incrementValue);
		    };
	  render() {
		      return (
			            <button onClick={this.handleClick}>
				              +{this.props.incrementValue}
			            </button>
				          );
		    }
}

const Result = (props) => (<div>{props.value}</div>);

class App extends React.Component {
	  state={counter: 0};

	  incrementCounter = (incrementValue) => {
		      this.setState(prevState => ({
			              counter: prevState.counter + incrementValue
			            })
			          );
		    }
	  render() {
		      return (
			            <div>
				              <Button incrementValue={1} handleClick={this.incrementCounter}/>
				              <Button incrementValue={5} handleClick={this.incrementCounter}/>
				              <Button incrementValue={10} handleClick={this.incrementCounter}/>
				              <Button incrementValue={100} handleClick={this.incrementCounter}/>
				              <Result value={this.state.counter}/>
				            </div>
				          );
		    }
}
ReactDOM.render(<App/>, document.getElementById('root'));

