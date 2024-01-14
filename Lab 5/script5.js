class Test {
    constructor() {
            // Ініціалізація властивостей об'єкта Test
        this.PIB = '';
        this.group = '';
        this.ocinka = 0;
        this.answerQuestion = 1;
    }
  
    // Функція, яка запускає тестування
    start() {
        document.getElementById('start-button').hidden = true;
        document.getElementById('registration').hidden = false;
    }
  
    // Функція, яка обробляє введення користувача і розпочинає тест, якщо дані введено
    blank() {
        this.PIB = document.getElementById('input1').value;
        this.group = document.getElementById('input2').value;
  
        // Перевірка, чи введені дані не порожні
        if (this.PIB !== '' && this.group !== '') {
            this.startTest();
        }
  
        console.log(this.PIB);
        console.log(this.group);
    }
  
    // Функція, яка розпочинає безпосередньо тест
    startTest() {
        document.getElementById('registration').hidden = true;
        document.getElementById('test').hidden = false;
        document.getElementById('test').classList.add('newFlexClass');
        document.getElementById('Quest1').hidden = false;
    }
  
    // Функція для перевірки відповіді на питання
    checkAnswer(i) {
        let res = 0;
  
        switch (i) {
          case 1:
            if (document.getElementById("pick12").checked) {
                res = 1;
            }
            break;
        case 2:
            if (document.getElementById("pick22").checked && document.getElementById("pick23").checked) {
                res = 1;
            }
            break;
        case 3:
            if (document.getElementById("pick31").checked && document.getElementById("pick32").checked && document.getElementById("pick34").checked) {
                res = 1;
            }
            break;
        case 4:
            if (document.getElementById("select1").value == 'pick41') {
                res = 1;
            }
            break;
        case 5:
            if (document.getElementById("pick52").checked) {
                res = 1;
            }
            break;
            case 6:
              if (
                document.getElementById("Container1").contains(document.getElementById("drag1")) &&
                document.getElementById("Container2").contains(document.getElementById("drag2")) &&
                document.getElementById("Container3").contains(document.getElementById("drag3"))
              ) {
                res = 1; 
              }
              break;
        case 7:
            if (document.getElementById("pick72").checked) {
                res = 1;
            }
            break;
        case 8:
            if (document.getElementById("pick81").checked) {
                res = 1;
            }
            break;
        case 9:
            if (document.getElementById("pick93").checked) {
                res += 0.25;
            }
            if (document.getElementById("pick94").checked) {
                res += 0.25;
            }
            if (document.getElementById("pick95").checked) {
                res += 0.25;
            }
            if (document.getElementById("pick96").checked) {
                res += 0.25;
            }
            break;
        case 10:
            if (document.getElementById("pick101").checked) {
                res = 1;
            }
            break;
        }
  
        return res;
    }
  
    // Функція для переходу до наступного питання
    nextQuestion() {
        // Якщо відповіли на всі питання, приховуємо їх і відображаємо результат
        if (this.answerQuestion === 10) {
            document.getElementById('Quest10').hidden = true;
            document.getElementById('continue-button').hidden = true;
            document.getElementById('resultTest').hidden = false;
        } else {
            // Переходимо до наступного питання
            document.getElementById('Quest' + (this.answerQuestion + 1)).hidden = false;
            document.getElementById('Quest' + this.answerQuestion).hidden = true;
        }
  
        // Отримуємо оцінку за поточне питання та додаємо її до загальної оцінки
        this.ocinka += this.checkAnswer(this.answerQuestion);
        console.log(this.ocinka);
        this.answerQuestion++;
  
        // Якщо відповіли на всі питання, відображаємо результат
        if (this.answerQuestion === 11) {
            document.getElementById('resultTest').classList.add('newFlexClass');
            document.getElementById('PIBuchnya').textContent += this.PIB;
            document.getElementById('resGroup').textContent += this.group;
            document.getElementById('resRating').textContent += this.ocinka;
        }
      
    }
  }
  
  // Функція, що дозволяє перетягування елементів
  // Забороняє браузеру виконувати дії за замовчуванням при перетягуванні
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  // Функція, яка встановлює дані для перетягуваного елемента
  // Встановлює дані, які будуть перетягуватися
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  // Функція, що викликається при "відпусканні" перетягуваного елемента
  function drop(ev) {
    // Забороняє браузеру виконувати дії за замовчуванням при відпусканні
    ev.preventDefault();

    // Отримання даних перетягуваного елемента та контейнера, в який його перетягнули
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
  
    const dropContainerId = ev.target.id;
    const dropContainer = document.getElementById(dropContainerId);
  
    // Перевірка, чи в контейнері вже є такий елемент
    const existingElement = dropContainer.querySelector('#' + data);
    if (existingElement) {
        return;
    }
  
    // Додавання перетягуваного елемента до контейнера
    dropContainer.appendChild(draggedElement);
  }
  
  // Створення екземпляра класу Test
  const testInstance = new Test();
  
  // Додавання обробників подій для кнопок
  document.getElementById('start-button').addEventListener('click', function() {
    // Виклик методу start при кліку на кнопку "Почати тест"
    testInstance.start();
  });
  
  document.getElementById('reg-button').addEventListener('click', function() {
    // Виклик методу blank при кліку на кнопку "Реєстрація"
    testInstance.blank();
  });
  
  document.getElementById('continue-button').addEventListener('click', function() {
    // Виклик методу nextQuestion при кліку на кнопку "Продовжити"
    testInstance.nextQuestion();
  });