

// Завдання 1: Створити об’єкт «Задача» з властивостями «назва», «опис», «дата початку», «дата кінця».
function task1() {

    // Створення об'єкта "Задача"
    let task = {
        name: "Task-1",
        description: "Створити мобільний додаток-планер",
        startDate: "20.12.2023",
        endDate: "15.01.2024"
    };

    // Відображення результату
    alert("Назва задачі: " + task.name +
        "\nОпис: " + task.description +
        "\nДата початку: " + task.startDate +
        "\nДата кінця: " + task.endDate);

    // Повернення об'єкта
    return task;
}


// Завдання 2: Створити об’єкт «Проект»,що містить властивості «Назва проекту», «Тип» і методи: додати, видалити та змінити.
function task2() {

    // Створення об'єкта "Проект"
    let project = {
        projectName: "",
        type: "",
    };

    
    // Відображення результату
    alert("Назва проекту: " + project.projectName +
        "\nТип: " + project.type);

    // Відображення результату
    project.add = function (projectName, type) {
        this.projectName = projectName;
        this.type = type;
    };

    // Виклик методу для додавання інформації до проєкту
    project.add(" Написання курсової", " Курсова");
    alert("Додано назву проекту:" + project.projectName + "\n Додано тип:" + project.type);


    // Додавання методу для видалення назви проєкту та типу
    project.remove = function () {
        this.projectName = "";
        this.type = ""
    };

    // Виклик методу для видалення інформації з проєкту
    project.remove();
    alert("Видалено назву проекту:" + project.projectName + "\nВидалено тип:" + project.type);

    // Додавання методу для редагування назви проєкту та типу
    project.edit = function (newProjectName, newType) {
        if (newProjectName) {
            this.projectName = newProjectName;
        }

        if (newType) {
            this.type = newType;
        }
    };

    // Виклик методу для редагування інформації в проєкті
    project.edit(" Створення сайту", " Лабораторна");
    alert("Змінено назву проекту:" + project.projectName + "\n Змінено тип:" + project.type);

    // Повернення з оновленою інформацією
    return project;
}


// Завдання 3: Об’єднання властивостей і методів об’єктів «Проект» і «Задача».
function task3() {
    
    // Виклик функцій для створення об'єктів "Проект" і "Задача"
    let project = task2();
    let task = task1();

    // Об'єднання властивостей і методів "Задача" в "Проект"
    Object.assign(project, task);

    // Відображення результату
    alert("Об'єкт 'Проект' після об'єднання з властивостями та методами 'Задача':\n" +
        "Назва проекту: " + project.projectName +
        "\nТип: " + project.type +
        "\nНазва задачі: " + project.name +
        "\nОпис задачі: " + project.description +
        "\nДата початку задачі: " + project.startDate +
        "\nДата закінчення задачі: " + project.endDate);

    return project;
}


//Завдання 4: Додати в прототип об’єкту «Задача» метод «Показати дані».
function task4() {

    // Виклик функції для створення об'єкта "Задача"
    let task = task1();

    // Додавання методу до прототипу об'єкту "Задача"
    task.constructor.prototype.showData = function () {
        alert("Назва задачі: " + this.name +
            "\nОпис: " + this.description +
            "\nДата початку: " + this.startDate +
            "\nДата кінця: " + this.endDate);
    };

    // Виклик методу
    task.showData();

    return task;
}


// Завдання 5: Створити об’єкт «Задача в процесі»
function task5() {

    // Створення об'єкта "Задача в процесі", який наслідує властивості і методи "Задача"
    let taskInProgress = Object.create(task1());

    // Додавання додаткових властивостей "процент виконання" і "прапор завершення задачі"
    taskInProgress.progress = 10;
    taskInProgress.completed = true;

    // Додавання методу "Показати дані" для "Задача в процесі"
    taskInProgress.showData = function () {
        alert("Назва задачі: " + this.name +
            "\nОпис: " + this.description +
            "\nДата початку: " + this.startDate +
            "\nДата кінця: " + this.endDate +
            "\nПроцент виконання: " + this.progress + "%" +
            "\nПрапор завершення задачі: " + this.completed);
    };

    // Виклик методу "Показати дані" для "Задача в процесі"
    taskInProgress.showData();

    return taskInProgress;
}

// Завдання 6: Реалізувати класи «ЗадачаКлас» і «Задача в процесі Клас»
// Оголошення класу "TaskClass" для представлення задачі
class TaskClass {

    // Конструктор класу, приймає параметри і ініціалізує властивості об'єкта
    constructor(name, description, startDate, endDate) {
        this._name = name;
        this._description = description;
        this._startDate = startDate;
        this._endDate = endDate;
    }

    // Get та Set для властивості "name"
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    
    // Get set для властивості "description"
    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    // Get set для властивості "startDate"
    get startDate() {
        return this._startDate;
    }

    set startDate(newStartDate) {
        this._startDate = newStartDate;
    }

    // Get set для властивості "endDate"
    get endDate() {
        return this._endDate;
    }

    set endDate(newEndDate) {
        this._endDate = newEndDate;
    }

    // Метод "showData", який виводить інформацію про задачу
    showData() {
        alert(`Назва задачі: ${this._name}\nОпис: ${this._description}\nДата початку: ${this._startDate}\nДата кінця: ${this._endDate}`);


    }
}


// Оголошення класу "TaskInProgressClass", який наслідує властивості та методи класу "TaskClass"
class TaskInProgressClass extends TaskClass {
    
    // Конструктор класу, приймає параметри і викликає конструктор батьківського класу "TaskClass"
    constructor(name, description, startDate, endDate, progress, completed) {
        super(name, description, startDate, endDate);
        this._progress = progress;
        this._completed = completed;
    }

    // Get set для властивості "progress"
    get progress() {
        return this._progress;
    }

    set progress(newProgress) {
        this._progress = newProgress;
    }

    // Get set для властивості "completed"
    get completed() {
        return this._completed;
    }

    set completed(newCompleted) {
        this._completed = newCompleted;
    }

    // Перевизначений метод "showData", який виводить інформацію про задачу в процесі
    showData() {
        alert(`Назва задачі: ${this.name}\nОпис: ${this.description}\nДата початку: ${this.startDate}\nДата кінця: ${this.endDate}\nПроцент виконання: ${this.progress}%\nПрапор завершення задачі: ${this.completed}`);
    }
}

// Функція task6 - приклад використання класів TaskClass та TaskInProgressClass
function task6() {

    // Створення екземпляра класу TaskClass з ім'ям "Task-1" та іншими властивостями
    let task1 = new TaskClass("Task-1", "створити мобільний додаток-планер", "20.12.2023", "15.01.2024");
    
    // Створення екземпляра класу TaskInProgressClass з ім'ям "Task-1", тими ж властивостями та новими параметрами
    let taskInProgress1 = new TaskInProgressClass("Task-1", "створити мобільний додаток-планер", "20.12.2023", "15.01.2024", 90, true);

    // Виклик методу showData для виведення інформації про екземпляри
    task1.showData();
    taskInProgress1.showData();
}
