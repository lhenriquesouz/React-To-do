import React from 'react';
import { useHistory,useParams } from 'react-router-dom';

import Button from "./Button";

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleTaskbackButtonClick = () => {
        history.goBack();
    };

    return ( 
        <>
            <div className='back-button-container'>
                <Button onClick={handleTaskbackButtonClick}>Voltar</Button>
            </div>     
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor dolorem et quia. Similique, veniam!  
                </p>    
            </div>  
        </>
     );
}
 
export default TaskDetails;