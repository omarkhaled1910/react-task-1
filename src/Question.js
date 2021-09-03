import React from 'react'

//static form just to display what it gets
const Question = ({ answer1, answer2, show, setAnswerone, questions }) => {



    return (
        <>

            <div class=" question">
                <p>{questions[0]}</p>
                {answer1?.map((a, i) => (
                    <div key={i} >
                        <input type="radio" value={a} name="answer1" onChange={(e) => setAnswerone(e.target.value)} />
                        <label  >
                            {a}
                        </label>
                    </div>
                ))}
            </div>

            <div class={show.two ? 'question' : 'no-question'}>
                <p>{questions[1]}</p>
                {answer2?.map((a, i) => (
                    <div key={i} >
                        <input type="radio" value={a} name="answer2" onChange={(e) => console.log(e.target.value)} />
                        <label  >
                            {a}
                        </label>
                    </div>
                ))}
            </div>

            <div class={show.three ? 'question' : 'no-question'}>
                <p>{questions[2]}</p>
                {answer2?.map((a, i) => (
                    <div key={i} >
                        <input type="radio" value={a} name="answer3" onChange={(e) => (e) => console.log(e.target.value)} />
                        <label  >
                            {a}
                        </label>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Question
