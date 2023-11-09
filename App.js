import React from 'react';
import './App.css';
import SlotM from './SlotM';


const App=()=>{
  return(
      <>
          <div className='heading'>
            <h1>🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot Machine Game 🎰</span></h1>
          </div>
          <div className='main'>
            <div className='slotmachine'>
              <SlotM x='😄' y='😄' z='😄'/>
              <hr/>
              <SlotM x='😄' y='😍' z='👍'/>
              <hr/>
              <SlotM x='🥱' y='😉' z='😒'/>
              <hr/>
              <SlotM x='❤️' y='❤️' z='❤️'/>
              <hr/>
              <SlotM x='🛫' y='🍔' z='🤖'/>
            </div>
          </div>
      </>
  );
};

export default App;