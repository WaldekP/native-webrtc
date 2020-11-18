import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <div>
            <h1>Zdzwonki Twój Psycholog</h1>
            <button onClick={create}>Utwórz pokój</button>
        </div>
    );
}

export default CreateRoom;
