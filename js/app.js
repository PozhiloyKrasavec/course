const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

const results =
[
   new Result("Вам многому нужно научиться", 6),
   new Result("Вы уже неплохо разбираетесь", 10),
   new Result("Ваш уровень выше среднего", 14),
   new Result("Вы в совершенстве знаете тему", 18)
];
const questions = 
[
   new Question("В результате чего было разработано техническое задание для ИС?",
   [
       new Answer("Обследование",1),
       new Answer("Опрос Рабочих",0),
       new Answer("Опрос руководителей",0),
       
   ]),
    new Question("Для чего используется ИС Total Cost Management Nuclear Construction?",
   [
       new Answer("Для управления стоимостью и сроками строительства",1),
       new Answer("Для управления персоналом и наймом работников",0),
       new Answer("Для бухгалтерского учета",0),
       
   ]),
    new Question("Проводит ли Росатом работы по стандартизации использования атомной энергии?",
   [
       new Answer("Да",1),
       new Answer("Нет",0),
   ]),
    new Question("Управляет ли Росатом фондом финансирования расходов на захоронение радиоактивных отходов?",
   [
       new Answer("Да",1),
       new Answer("Нет",0),
   ]),
    new Question("Может ли корпорация в каком ни будь экстренном случае не отчитываться за предыдущий год?",
   [
       new Answer("Нет",1),
       new Answer("Да",0),  
   ]),
    new Question("Можно ли курить на АЭС?",
   [
       new Answer("Да, в специально оборудованных местах",1),
       new Answer("Нет, категорический запрещено",0),  
   ]),
    new Question("Можно ли где-то на АЭС узнать информацию о всех газоопасных местах?",
   [
       new Answer("Да",1),
       new Answer("Нет",0),  
   ]),
    new Question("Концентрация горючего газа в помещении не должна превышать эту долю нижнего предела его воспламеняемости.?",
   [
       new Answer("1/3",1),
       new Answer("1/4",0),
        new Answer("Барабан спаратор",0),
   ]),
    new Question("Что такое сердце АЭС?",
   [
       new Answer("Реактор",1),
       new Answer("Паровая турбина",0),
        new Answer("1/2",0),
   ]),
    new Question("Как вырабатывается электричество на АЭС?",
   [
       new Answer("Энергия распада радиоактивных веществ идет на испарение пара, который в свою очередь крутит турбину, которая вырабатывает электричество",1),
       new Answer("Энергия распада радиоактивных веществ преобразуется в электричество",0),
   ]),
    new Question("Что не включает в себя термодинамический цикл АЭС?",
   [
       new Answer("Оборудование линий электросетей",1),
       new Answer("Повышение температуры конденсата до температуры насыщения 1/4",0),
        new Answer("Получение из конденсата пара",0),
   ]),
     new Question("Под чьим руководством была создана первая в мире Обнинская АЭС?",
   [
       new Answer("Игорь Васильевич Курчатов",1),
       new Answer("Иванов Иван Алексеевич",0),
        new Answer("Кириллов Петр Владимирович",0),
   ]),
     new Question("После распада СССР сколько АЭС досталось министерству по атомной энергии Российской Федерации?",
   [
       new Answer("9",1),
       new Answer("10",0),
        new Answer("8",0),
   ]),
     new Question("Включает ли в себя Росатом атомный ледокольный флот?",
   [
       new Answer("Да",1),
       new Answer("Нет",0),
   ]),
      new Question("По какому количеству векторов выстроена система обучения и развития работников атомной отрасли в Росатоме?",
   [
       new Answer("3",1),
       new Answer("2",0),
        new Answer("4",0),
   ]),
     new Question("Кто являются основными поставщиками знаний и программ обучения для Росатома?",
   [
       new Answer("Академия Росатома и Центральный институт повышения квалификации",1),
       new Answer("Все вузы страны, в которых есть атомное направление",0),
        new Answer("Только МИФИ",0),
   ]),
     new Question("Заказывает ли Росатом программы обучения?",
   [
       new Answer("Да",1),
       new Answer("Нет",0),
   ]),
    new Question("На чем основана ИС?",
   [
       new Answer("Процессы",1),
       new Answer("Объекты",0),
       new Answer("Люди",0),
       
   ])
];
const quiz = new Quiz(1,questions,results);
Update();
 function Update()
{
   //Проверяем, есть ли ещё вопросы
   if(quiz.current < quiz.questions.length)
   {
       //Если есть, меняем вопрос в заголовке
       headElem.innerHTML = quiz.questions[quiz.current].text;
 
       //Удаляем старые варианты ответов
       buttonsElem.innerHTML = "";
 
       //Создаём кнопки для новых вариантов ответов
       for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
       {
           let btn = document.createElement("button");
           btn.className = "button";
 
           btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
 
           btn.setAttribute("index", i);
 
           buttonsElem.appendChild(btn);
       }
      
       //Выводим номер текущего вопроса
       pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;
 
       //Вызываем функцию, которая прикрепит события к новым кнопкам
       Init();
   }
   else
   {
       //Если это конец, то выводим результат
       buttonsElem.innerHTML = "";
       headElem.innerHTML = quiz.results[quiz.result].text;
       pagesElem.innerHTML = "Очки: " + quiz.score;
   }
}

function Init()
{
   //Находим все кнопки
   let btns = document.getElementsByClassName("button");
 
   for(let i = 0; i < btns.length; i++)
   {
       //Прикрепляем событие для каждой отдельной кнопки
       //При нажатии на кнопку будет вызываться функция Click()
       btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
   }
}
 
function Click(index)
{
   //Получаем номер правильного ответа
   let correct = quiz.Click(index);
 
   //Находим все кнопки
   let btns = document.getElementsByClassName("button");
 
   //Делаем кнопки серыми
   for(let i = 0; i < btns.length; i++)
   {
       btns[i].className = "button button_passive";
   }
 
   //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
   if(quiz.type == 1)
   {
       if(correct >= 0)
       {
           btns[correct].className = "button button_correct";
       }
 
       if(index != correct)
       {
           btns[index].className = "button button_wrong";
       }
   }
   else
   {
       //Иначе просто подсвечиваем зелёным ответ пользователя
       btns[index].className = "button button_correct";
   }
 
   //Ждём секунду и обновляем тест
   setTimeout(Update, 1000);
}