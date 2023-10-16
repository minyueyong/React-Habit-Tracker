import './App.css';
import { useState } from 'react';
import React from 'react';
import Add from './Add.js';


export default function HabitTracker() {
	 
	  const [points, setPoints] = useState(0);
	  const [spending, setSpending] = useState([]);
	  const [habits, setHabits] = useState([]);

	  function addPoints( i ) {
		setPoints(points + i);
	  }

	 function spendPoints( i ) {
		 
		 if(points - i< 0 ){
			 
			 alert( "You don't have enough points");
			 
		 }else {
			setPoints(points - i);
		 }
		
		
	  }
	  
	 function addHabits ( newHabitName, newPoints){
		  
		 const newHabit = {
			Habit: newHabitName,
			Points: newPoints,
		  };

		  // create a copy of habits array and assign the newHabit into it and set inside the habits array
		  setHabits([...habits, newHabit]);
	  }
	  
	  function addSpending (newSpendingName, newPoints ) {
		 
		   const newSpending = {
			Spending: newSpendingName,
			Points: newPoints,
		  };

		  // create a copy of spending array and assign the newSpending into it and set inside the spending array
		  setSpending([...spending, newSpending]);
		  
	  }
	  
	  
	  return (
		<div className="App">
		  <p><b>Habit Tracker</b></p>
		  <p>Your Points: {points}</p>

		  <Add addHabits={addHabits} addSpending={addSpending} />
		  <br/>

		  <div className="habits" >
			   <p> Habits </p>
			   <Habits  habitList={habits} adPoints={addPoints}  />
		  </div>
		   <br/>
			
		  <div className="spending" >	
			   <p>Spending</p>
			   <Spending spendingList={spending} spendPoints={spendPoints}  />
		  </div>
		</div>
	  );
}
/* adPoints is pass as variable */
function Habits({habitList, adPoints, addHabits}) {


  const moves = habitList.map((squares, index) => (
   
      <button onClick={() => adPoints(parseInt(squares.Points))} className="button1">
        <div style={{ marginRight: '10px' }}>{squares.Habit}</div>
        <div style={{ marginLeft: '10px' }}>{squares.Points} points</div>
      </button>
    
   
  ));

  return <>{moves}</>;
}


/* adPoints is pass as variable */
function Spending({spendingList, spendPoints}) {


  const moves = spendingList.map((squares, index) => (
   
      <button onClick={() => spendPoints(parseInt(squares.Points))} className="button1">
        <div style={{ marginRight: '10px' }}>{squares.Spending}</div>
        <div style={{ marginLeft: '10px' }}>{squares.Points} points</div>
      </button>
    
   
  ));

  return <>{moves}</>;
}



