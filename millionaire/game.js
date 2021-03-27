let game = {
  init() {
    console.log('Привет игрок!');
    console.log('Для начала игры «Кто хочет стать миллионером?» введите game.run() и нажмите Enter.');
  },

  run(){
    renderer.clear();
    

    for (config.indexOfCurrentQuestion; config.indexOfCurrentQuestion < tasks.length; config.indexOfCurrentQuestion++) {

      renderer.renderQuestion();

      renderer.renderAnswers();

      while (true) {
        config.userAnswer = prompt('Выберите вариант ответа a, b, c или d.');

        // Если игрок нажал "отмену", то игра заканчивается.
        if (config.userAnswer === null) {
          console.log("Очень жаль. Приходите ещё.");
          console.log(`Ваш счёт ${config.score}`);
          return;
        }

        // Если введен не допустимый ответ, то сообщаем что надо ввести корректные данные
        // и начинаем новую итерацию.
        if (!config.availableAnswers.includes(config.userAnswer)) {
          alert('Для ответа необходимо ввести одну из следующих букв a, b, c или d.');
          continue;
        }
        break;
      }

      //Проверяем ответ и выводим результат в консоль
      if ( this.check() ) {
        console.log(`${config.availableAnswers[indexOfRightAnswer].toUpperCase()} - это правильный ответ!`);
        config.score++;
      } else {
        console.log(`Мимо! Правильный ответ: ${config.availableAnswers[indexOfRightAnswer].toUpperCase()}.`)
      }

      // Выведем счет, если вопросов больше нет
      if(config.counterQuestion == tasks.length){
        console.log('');
        console.log(`Ваш счёт ${config.score}.`);
        console.log('Конец игры.');
        console.log('Введите game.run() и нажмите Enter, если хотите сыграть ещё.');
        return;
      }

      config.counterQuestion++;
      console.log('');
    }
  },

  /**
   * Получим массив с перемешанными ответами.
   * @param  {int} indexOfCurrentQuestion Индекс очередного вопроса в массиве tasks.
   * @returns {array} arrMixedAnswers возвращается массив с ответами в случайном порядке.
  */
  getMixedAnswers(indexOfCurrentQuestion) {
    let i = 4;
    let arrMixedAnswers = [];
    //Во вспомагательном массиве будем хранить индексы ответов, которые ещё не занесены в перемешанный массив ответов
    let auxiliaryArr = [0, 1, 2, 3];
    for(let j = 0; j < 4; j++){
      let indexOfArrMixedAnswers = Math.floor( Math.random() * i );
      arrMixedAnswers.push(tasks[indexOfCurrentQuestion].answers[auxiliaryArr[indexOfArrMixedAnswers]]);

      //Запомним индекс правильного ответа в перемешанном массиве
      if(auxiliaryArr[indexOfArrMixedAnswers] == 0){
        indexOfRightAnswer = j;
      }

      // Вырежем индекс ответа в исходном массиве, который уже занесли в перемешанный массив ответов
      auxiliaryArr.splice(indexOfArrMixedAnswers,1);
      i--;
    }
    return arrMixedAnswers;
  },

  /**
   * Проверим ответ пользователя.
   * Функция возвращает true или false.
   */
  check(){
    //Проверим ответ пользователя
    if (config.userAnswer.toLowerCase() == config.availableAnswers[indexOfRightAnswer]) {
      return true;
    }
    return false;
  },
}

game.init();
