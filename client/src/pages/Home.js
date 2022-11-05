import React, { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios'
const Home = () => {
    const [alphabets, setAlhabets] = useState([])
    useEffect(()=> {
        getAlphabets()
    },[])
    async function getAlphabets (){
       const {data} =  await axios.get('http://localhost:8000/alphabets')
       setAlhabets(data.alphabets)
       
    }
    return (
        <>
        <div className='alphabet_container'>
            {

                alphabets?.map(alphabet => (
                    <div className='items' draggable key={alphabet._id}> 
                        <div>
                        {
                            alphabet.alphabet
                        }
                        </div>
                    </div>
                ))
            }
            
        </div>
        <div className='arithmetic_container'>
            <div className='operator_container'>
                {
                    ['+','-','*', '/'].map(a => (
                        <div className='operator_container_item' draggable> {a}</div>
                    ))
                }

            </div>
            <div className='comparator_container'>
            {
                    ['<', '>'].map(a => (
                        <div className='comparator_container_item'> {a}</div>
                    ))
                }

            </div>
            <div className='integer_container'>
                <span>RHS Integer</span>
            </div>
        </div>
        <div className='droppable_container'>

        </div>
        <button className='button'><span>Evaluate</span></button>
        </>
    );
};

export default Home;