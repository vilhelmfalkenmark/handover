import React from "react";

export default class TodoList extends React.Component {

  render() {
    return (
      <section className="MainApp-block MainApp-block--todolist">
        <div className="MainApp-block--todolist-well">
          <h2>Lägg till ny sak för Vilhelm att göra</h2>
          <div className="Form-container">
            <input className="Form-input" type="text" placeholder="Ny sak att göra" />
            <button className="Form-btn">Lägg till</button>
          </div>
          <ul className="Todolist">
            <li className="Todolist-item">
              <span>Klippa gräset</span>
              <div className="Todolist-item-btns">
                <button className="Btn Btn--turq">Färdig</button>
              </div>
            </li>
            <li className="Todolist-item is-done">
              <span>Dingla med benen</span>
              <div className="Todolist-item-btns">
                <button className="Btn Btn--danger">Radera</button>
                <button className="Btn Btn--turq">Ej Färdig</button>
              </div>
            </li>
          </ul>
         </div>
      </section>
    )
  }

}
