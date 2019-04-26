class Store {
  data = {
    older: 14,
    size: 140,
    hairColor: 'blond',
    hairLength: 'long',
    eyeColor: 'blue',
    beard: 'none',
    body: 'muscle',
  };

  hairColor = [
    { label: 'Blond', value: 'blond', score: 5 },
    { label: 'Brown', value: 'brown', score: 10 },
    { label: 'Black', value: 'black', score: 15 },
    { label: 'Red', value: 'red', score: 20 },
    { label: 'Gray', value: 'gray', score: 25 },
  ];

  hairLength = [
    { label: 'Long', value: 'long', score: 5 },
    { label: 'Middle', value: 'middle', score: 10 },
    { label: 'Short', value: 'short', score: 15 },
    { label: 'Bald', value: 'bald', score: 20 },
  ];

  eyeColor = [
    { label: 'Blue', value: 'blue', score: 5 },
    { label: 'Green', value: 'green', score: 10 },
    { label: 'Brown', value: 'brown', score: 15 },
    { label: 'Grey', value: 'grey', score: 20 },
  ];

  beard = [
    { label: 'None', value: 'none', score: 5 },
    { label: 'Small', value: 'small', score: 10 },
    { label: 'Middle', value: 'middle', score: 15 },
    { label: 'Large', value: 'large', score: 20 },
  ];

  body = [
    { label: 'Muscle', value: 'muscle', score: 5 },
    { label: 'Normal', value: 'normal', score: 10 },
    { label: 'Chubby', value: 'chubby', score: 15 },
  ];

  maxScore = 133;

  getHairColorOptions() {
    return this.getOptions(this.hairColor);
  }

  getHairLengthOptions() {
    return this.getOptions(this.hairLength);
  }

  getEyeColorOptions() {
    return this.getOptions(this.eyeColor);
  }

  getBeardOptions() {
    return this.getOptions(this.beard);
  }

  getBodyOptions() {
    return this.getOptions(this.body);
  }

  getOptions(options) {
    return options.map(({ label, value }) => {
      return { label, value };
    });
  }

  getScore(options, value) {
    const option = options.find(option => option.value === value);
    return option ? option.score : 0;
  }

  computeCamels(data) {
    const olderScore = (parseInt(data.older) / 14) * 5;
    const sizeScore = (parseInt(data.size) / 140) * 5;
    const partialScore = Object.keys(data)
      .filter(key => !['older', 'size'].includes(key))
      .reduce((score, key) => {
        return score + this.getScore(this[key], data[key]);
      }, 0);
    const score = partialScore + olderScore + sizeScore;
    return Math.round((score / this.maxScore) * 100);
  }
}

export default new Store();
