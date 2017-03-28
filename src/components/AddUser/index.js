import React from "react";
import {connect} from "react-redux";
import {AddUserAction} from "../../actions/UsersActions";

class AddUser extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: ""
    }
    this.addUser = this.addUser.bind(this);
  }
  addUser() {
    const {dispatch} = this.props;
    const {inputValue} = this.state;
    dispatch(AddUserAction(inputValue));
  }
  render() {
    const {inputValue} = this.state;
    return(
      <section className="Header-container-adduser">
        <div className="Form-container">
          <input className="Form-input" type="text" placeholder="Ny användare"
          value={inputValue} onChange={(e)=> this.setState({inputValue:e.target.value})}
          />
          <button className="Form-btn" onClick={this.addUser}>Lägg till användare</button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps)(AddUser);
