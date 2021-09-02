import React from 'react'

const Question = ({ answer1, answer2, show, setAnswerone, questions }) => {



    return (
        <>

            <div class=" question">
                <p>{questions[0]}</p>
                {answer1?.map((a, i) => (
                    <div key={i} class="form-check">
                        <input class="form-check-input" type="radio" value={a} name="answer1" onChange={(e) => setAnswerone(e.target.value)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            {a}
                        </label>
                    </div>
                ))}
            </div>

            <div class={show.two ? 'question' : 'no-question'}>
                <p>{questions[1]}</p>
                {answer2?.map((a, i) => (
                    <div key={i} class="form-check">
                        <input class="form-check-input" type="radio" value={a} name="answer1" onChange={(e) => console.log(e.target.value)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            {a}
                        </label>
                    </div>
                ))}
            </div>

            <div class={show.three ? 'question' : 'no-question'}>
                <p>{questions[2]}</p>
                {answer2?.map((a, i) => (
                    <div key={i} class="form-check">
                        <input class="form-check-input" type="radio" value={a} name="answer1" onChange={(e) => (e) => console.log(e.target.value)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            {a}
                        </label>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Question
