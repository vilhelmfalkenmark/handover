import React, { Component } from 'react';

class StyleGuide extends Component {
  render() {
    return (
      <div className="Dashboard">
       <header className="Header-container">

         <section className="Header-container-user">
           <div>
             <h2>Inloggad som Vilhelm</h2>
             <p>Roll: Administratör</p>
             <p>Att göra: 2</p>
           </div>
         </section>

         <section className="Header-container-adduser">
           <div className="Form-container">
             <input className="Form-input" type="text" placeholder="Ny användare" />
             <button className="Form-btn">Lägg till användare</button>
           </div>
         </section>

       </header>

       <main className="MainApp-Container">
         {/* VÄNSTERKOLUMN */}
         <section className="MainApp-block MainApp-block--users">
            <h3>Användare</h3>
            <ul>
              <li>Vilhelm (Admin) <span>2</span>
                <div>
                  <button className="Btn Btn--turq">Växla till</button>
                  <button className="Btn Btn--danger">Radera användare</button>
                  <button className="Btn Btn--success">Uppgradera</button>
                </div>
              </li>
              <li>Kalle (Användare) <span>3</span>
                <div>
                  <button className="Btn Btn--turq">Växla till</button>
                  <button className="Btn Btn--danger">Radera användare</button>
                  <button className="Btn Btn--success">Uppgradera</button>
                </div>
              </li>
            </ul>
         </section>
         {/* CENTERKOLUMN */}
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
         {/* HÖGERKOLUMN */}
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
       </main>
      </div>
    );
  }
}

export default StyleGuide;
