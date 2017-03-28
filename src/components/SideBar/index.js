import React from "react";

export default class SideBar extends React.Component {

  render() {
    return (
      <section className="MainApp-block MainApp-block--all">
        <div className="MainApp-block--all-user">
          <h4>Vilhelm (2 saker)</h4>
          <ul>
            <li>Klippa gräset</li>
            <li>Panta flaskor</li>
          </ul>
        </div>
        <div className="MainApp-block--all-user">
          <h4>Kalle (3 saker)</h4>
          <ul>
            <li>Klippa gräset</li>
            <li>Panta flaskor</li>
            <li>Hälsa på mormor</li>
          </ul>
        </div>
      </section>
    )
  }

}
