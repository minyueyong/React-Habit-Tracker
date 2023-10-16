import { useState } from 'react';

export default function Add( {addHabits, addSpending} ) {
	const [activityName, setActivityName] = useState("");
	const [points, setPoints] = useState("");
	const [activityType, setActivityType] = useState("habit");
	
	function handleSubmit(e) {
		
		e.preventDefault();
		
			
		if (activityType === "habit") {
			
		  addHabits(activityName, points);
		  
		} else if (activityType === "spending") {
			
		  addSpending(activityName, points);
		}

		
	}
	
  return (
	  <form method="post" onSubmit={handleSubmit} className="add">
			
			
				<div className="addoptions">
					Activity Name : <input type="text" name="activity" value={activityName} required onChange={(e) => setActivityName(e.target.value)} /> <br/>
					<label for="type">Activity Type&nbsp;&nbsp;&nbsp;&nbsp;:</label>

				
					<select name="type" id="type" value={activityType} onChange={(e) => setActivityType(e.target.value)}>
					  <option value="habit">Habit</option>
					  <option value="spending">Spending</option>
					</select>
					
					<br/>
					Points   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  : <input type="number" name="points" min="0" value={points}  required onChange={(e) => setPoints(e.target.value)}/> <br/>
				</div>
				
				<div className="button1">
					<button type="submit">
					  Add New Habits/Spending
					</button>
				</div>
			
		</form>
  );
  
}