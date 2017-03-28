import React from "react";
import {connect} from "react-redux";

class LoggedIn extends React.Component {
  render() {
    console.log(this.props,"LOGGEDIN");
    return (
      <section className="Header-container-user">
        <div>
          <h2>Inloggad som Vilhelm</h2>
          <p>Roll: Administratör</p>
          <p>Att göra: 2</p>
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
export default connect(mapStateToProps)(LoggedIn);
