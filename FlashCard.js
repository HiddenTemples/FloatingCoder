const phrases = [
    { original: 'Привет (Privet)', translation: 'Hello' },
    { original: 'До свидания (Do svidaniya)', translation: 'Goodbye' },
    { original: 'Пожалуйста (Pozhaluysta)', translation: 'Please' },
    { original: 'Спасибо (Spasibo)', translation: 'Thank you' },
  { original: 'Извините (Izvinite)', translation: 'Excuse me / Sorry' },
  { original: 'Не за что (Ne za chto)', translation: "You're welcome" },
  { original: 'Да (Da)', translation: 'Yes' },
  { original: 'Нет (Net)', translation: 'No' },
  { original: 'Вот (Vot)', translation: 'Here' },
  { original: 'Как дела? (Kak dela?)', translation: 'How are you?' },
  { original: 'Хорошо (Khorosho)', translation: 'Good / Well' },
  { original: 'Плохо (Plokho)', translation: 'Bad' },
  { original: 'Нормально (Normal\'no)', translation: 'Okay / Normal' },
  { original: 'Как Вас зовут? (Kak Vas zovut?)', translation: 'What is your name?' },
  { original: 'Меня зовут... (Menya zovut...)', translation: 'My name is...' },
  { original: 'Очень приятно (Ochen\' priyatno)', translation: 'Nice to meet you' },
  { original: 'Где? (Gde?)', translation: 'Where?' },
  { original: 'Когда? (Kogda?)', translation: 'When?' },
  { original: 'Почему? (Pochemu?)', translation: 'Why?' },
  { original: 'Как? (Kak?)', translation: 'How?' },
  { original: 'Сколько? (Skol\'ko?)', translation: 'How much? / How many?' },
  { original: 'Что? (Chto?)', translation: 'What?' },
  { original: 'Кто? (Kto?)', translation: 'Who?' },
  { original: 'Где туалет? (Gde tualet?)', translation: 'Where is the bathroom?' },
  { original: 'Я не понимаю (Ya ne ponimayu)', translation: 'I don\'t understand' },
  { original: 'Помогите! (Pomogite!)', translation: 'Help!' },
  { original: 'Я не говорю по-русски (Ya ne govoryu po-russki)', translation: 'I don\'t speak Russian' },
  { original: 'Говорите ли Вы по-английски? (Govorite li Vy po-angliyski?)', translation: 'Do you speak English?' },
  { original: 'Можете ли Вы помочь? (Mozhete li Vy pomoch\'?)', translation: 'Can you help me?' },
  ];
  
  let currentPhrase = 0;
  let showTranslation = false;
  const flashcard = document.querySelector('.flashcard');
  const front = document.querySelector('.front');
  const back = document.querySelector('.back');
  
  function updateCardContent() {
    if (showTranslation) {
      back.textContent = `${phrases[currentPhrase].original} - ${phrases[currentPhrase].translation}`;
      front.style.display = 'none';
      back.style.display = 'block';
    } else {
      front.textContent = phrases[currentPhrase].original;
      back.style.display = 'none';
      front.style.display = 'block';
    }
  }
  
  function flipCard() {
    showTranslation = !showTranslation;
    if (!showTranslation) {
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }
    updateCardContent();
  }
  
  updateCardContent();
  flashcard.addEventListener('click', flipCard);