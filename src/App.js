import React from 'react';
// import StyleGuide from "./StyleGuide";
import AddUser from "./components/AddUser/";
import LoggedIn from "./components/LoggedIn/";
import Users from "./components/Users/";
import TodoList from "./components/TodoList/";
import SideBar from "./components/SideBar/";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="Dashboard">
          <header className="Header-container">
            <LoggedIn/>
            <AddUser/>
          </header>
          <main className="MainApp-Container">
            <Users/>
            <TodoList/>
            <SideBar/>
          </main>
        </div>
      </div>
    );
  }
}
