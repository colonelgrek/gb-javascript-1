let renderer = {
   /**
   * Отображает вопрос в консоли.
   */
  renderQuestion() {
    console.log(`Вопрос номер ${config.counterQuestion}`);
    console.log(`${tasks[config.indexOfCurrentQuestion].question}`);
  },

  /**
   * Отображает варианты ответов в консоли.
   */
  renderAnswers(){
    console.log('Варианты ответов:');

    let arrMixedAnswers = game.getMixedAnswers(config.indexOfCurrentQuestion);

    let strOfAnswers = '';
    for (let i = 0; i < arrMixedAnswers.length; i++) {
      strOfAnswers += `${String.fromCodePoint(65 + i)}: ${arrMixedAnswers[i]}`;
      if ( i < arrMixedAnswers.length-1) {
        strOfAnswers += ' | ';
      }
    }

    console.log(strOfAnswers);
  },

  clear() {
    // Чистим консоль.
    console.clear();
    //Скидываем счетчик вопросов
    config.counterQuestion = 1;
    //Обнуляем счет
    config.score = 0;
    //Обнуляем индекс вопросов
    config.indexOfCurrentQuestion = 0;
  }
};
