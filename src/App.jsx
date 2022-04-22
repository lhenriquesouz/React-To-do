import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from './components/Header';
import TaskDetails from "./components/TaskDetails";

import "./App.css";


const App = () => {
  const [tasks, setTasks] = useState([
      {
            id: "1",
            title: "Estudar",
            completed: false,
      },	
      { 	    
            id: "2",
            title: "Trabalhar",
            completed: true,
      },
      { 	    
            id: "3",
            title: "Jogar",
            completed: false,
      },
  ]);

  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
        if(task.id === taskId) return { ...task, completed: !task.completed}

        return task;
      });

      setTasks(newTasks);
  }

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks);
}

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [
        ... tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
      ];

      setTasks(newTasks);
  }

  return (
		<Router>
			<div className="container">
				<Header />

							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskRemove={handleTaskRemove}
							/>
			</div>
		</Router>
	);
};

export default App;