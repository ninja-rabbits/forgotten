import React from 'react';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 10,
};


class EditAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      usernameTextField: '',
      id: ''
    };


    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleUsernameTextFieldChange = this.handleUsernameTextFieldChange.bind(this);
  }

  componentWillMount () {
    this.setState({
      userInfo: this.props.userInfo
    });
  }


  handleUsernameTextFieldChange (e) {
    this.setState({
      usernameTextField: e.target.value
    });
  }

  handleSubmitClick () {
  // $.post('/updateUsername', {username: this.state.usernameTextField}, () => {
  //   console.log(data, 'Username update succss');
  // });

    console.log(this.state.usernameTextField);
    fetch('/updateUsername', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.usernameTextField,
        id: this.props.id
      })
    });
  }
//thesis_devel=# INSERT INTO items (name, description, img_url, puzzle_id, equipped)              VALUES ('Blue Pill', 'Consuming this pill increases the timer on the next quest by 30 seconds', /assets/items/paper.jpg', null, Not Possible');


  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h3><u>Edit Account</u></h3><br></br>
          <form>
            <TextField
              hintText="New Username"
              floatingLabelText={this.state.userInfo.username}
              value={this.state.usernameTextField}
              onChange={this.handleUsernameTextFieldChange}
            /><br />
            <RaisedButton label="Submit Changes" style={style} onClick={this.handleSubmitClick}/>
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default EditAccount;
