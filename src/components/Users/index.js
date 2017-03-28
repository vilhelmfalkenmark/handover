import React from "react";
import {connect} from "react-redux";
import {DeleteUserAction} from "../../actions/UsersActions";
class Users extends React.Component {
  deleteUser(userID) {
    this.props.dispatch(DeleteUserAction(userID));
  }
  render() {
    const {users} = this.props;
    // console.log(this.props);
    return (
      <section className="MainApp-block MainApp-block--users">
         <h3>Användare</h3>
         <ul>
           {
             users.map((user)=>
             <li key={user.id}>{user.name} <span>2</span>
             <div>
               <button className="Btn Btn--turq">Växla till</button>
               <button className="Btn Btn--danger" onClick={this.deleteUser.bind(this,user.id)}>Radera användare</button>
               <button className="Btn Btn--success">Uppgradera</button>
             </div>
            </li>
          )
           }
         </ul>
      </section>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps)(Users);
