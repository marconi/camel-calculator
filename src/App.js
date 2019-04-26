import React, { useState } from 'react';

import store from './store';
import { Form } from './components';

const styles = {
  score: {
    fontSize: 200,
    lineHeight: '200px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoreLabel: {
    fontSize: 50,
    textAlign: 'center',
  },
};

const App = () => {
  const [data, setData] = useState(store.data);
  const [score, setScore] = useState(store.computeCamels(data));

  const handleChange = event => {
    const { name, value } = event.target;
    const finalValue = ['older', 'size'].includes(name)
      ? parseInt(value)
      : value;
    const newData = { ...data, [name]: finalValue };
    setData(newData);
    setScore(store.computeCamels(newData));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <Form
              data={data}
              hairColorOptions={store.getHairColorOptions()}
              hairLengthOptions={store.getHairLengthOptions()}
              eyeColorOptions={store.getEyeColorOptions()}
              beardOptions={store.getBeardOptions()}
              bodyOptions={store.getBodyOptions()}
              onChange={handleChange}
            />
          </div>
          <div className="column is-3">
            <h2 style={styles.score}>{score}</h2>
            <h4 style={styles.scoreLabel}>Camels</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
