import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [numberIds, setNumberIds] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/numbers/${numberIds}`);
            setResponse(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return ( <
        div className = "App" >
        <
        h1 > Average Calculator < /h1> <
        form onSubmit = { handleSubmit } >
        <
        label >
        Qualified Number IDs:
        <
        input type = "text"
        value = { numberIds }
        onChange = {
            (e) => setNumberIds(e.target.value) }
        /> <
        /label> <
        button type = "submit" > Submit < /button> <
        /form> {
            response && ( <
                div >
                <
                h2 > Response: < /h2> <
                p > Window Prev State: { response.windowPrevState.join(', ') } < /p> <
                p > Window Curr State: { response.windowCurrState.join(', ') } < /p> <
                p > Numbers: { response.numbers.join(', ') } < /p> <
                p > Average: { response.avg } < /p> <
                /div>
            )
        } <
        /div>
    );
}

export default App;