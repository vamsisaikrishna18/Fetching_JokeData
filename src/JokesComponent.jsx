import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JokesComponent = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10');
      const { jokes } = response.data;

      setJokes(jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <div className='container'>
        <div className='row'>
            <h2 className='text-center'>Jokes of the Day</h2>
            <table className='m-5 p-5'>
                <thead className='m-5'>
                    <tr>
                        <td>Category</td>
                        <td>Type</td>
                        <td>Joke</td>
                    </tr>
                </thead>
                <tbody>
                    {jokes.map((joke, index) => {
                        return <tr key={index}>
                    <td>{joke.category}</td>
                    <td>{joke.type}</td>
                    <td>{joke.joke}</td>
                   </tr>
                  })}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default JokesComponent;
