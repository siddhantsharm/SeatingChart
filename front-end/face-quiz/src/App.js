import React, {useState} from 'react';
import Alpha from './Alpha';
import FlashCards from './FlashCards';
import BinaryChoice from './BinaryChoice';
import MultipleChoice from './MultipleChoice';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mode: 'FlashCards',
      selectMode: true,
    };
  }
  render() {

    const change = (to) => {
      this.setState({mode: to})
      this.setState({selectMode:false})
    }
    const choose = () => {
      this.setState({mode: 'BinaryChoice'})
    }
    const changeMode = () => {
      this.setState({selectMode:true})
    }

    let select = <React.Fragment>
		<div className ='test'>
			<table>
      <tr>
      <th><button onClick={() => change('FlashCards')}> Flash Cards </button></th>
      <th><button onClick={() => change('MultipleChoice')}> Multiple Choice Face-Quiz </button></th>
      <th><button onClick={() => change('BinaryChoice')}> Binary Choice Faze-Quiz </button></th>
      <th><button onClick={() => change('Alpha')}> Face-Quiz Alpha </button></th>
      </tr>
      </table>
		</div>
		</React.Fragment>


    let ans;
    if(this.state.mode === 'FlashCards') {
      ans =  <FlashCards />;
    }
    else if(this.state.mode == 'MultipleChoice') {
      ans =  <MultipleChoice />;
    }
    else if(this.state.mode == 'BinaryChoice') {
      ans =  <BinaryChoice />;
    }
    else if(this.state.mode == 'Alpha') {
      ans = <Alpha />;
    }
    console.log(ans);

    return (
      <React.Fragment>
      {this.state.selectMode ? (
        <React.Fragment>
        {select}
        </React.Fragment>
      ) :(
        <React.Fragment>
        <div className = 'change-button' onClick ={() => changeMode()}> Change Mode </div>
        {ans}
        </React.Fragment>
      )}
      </React.Fragment>

    );
  }

}

export default App;
