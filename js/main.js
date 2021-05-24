$(document).ready(function () {});
const names = [
"Мазаков Евгений Борисович",
"Медведев Валерий Александрович",
"Образцов Артем Вадимович",
"Федяков Кирилл Иванович",
"Лушин Владимир Евгеньевич",
"Бельков Илья Андреевич",
"Душный Илья Душнилович",
"Рейс Хистория Родовна",
"Шиханова Дарья Сергеевна",
"Барахонова Дина Александровна",
"Сарфанова Валерия Алексеевна",
"Шидичева Татьяна Анатольевна"
]
const professions = [
"Системный администратор",
"Проектный менеджер",
"Frontend программист",
"Backend программист",
"Full-stack программист"
]

function oknoHide(element) {
    var className = '.' + element;
    $(className).css('display','none');
}
function adminLog() {
  
    var a = $('#log-log').val();
    var b = $('#log-pass').val();
    if(a == "admin" && b == "admin") $('.log_form .button1').attr('href', 'admin.html');
  }
  
function oknoShow(element) {
    var idName = '#' + element;
    $(idName).arcticmodal();
}
function toServ(element)
{
  var className = '.' + element;
  let a = $('.log-put').val();
}
function getRandomInt(max,min) {
  return Math.floor(Math.random() * max + min);
}
function infoInit(){
    var fio ='Иванов Иван Иванович';
    var work ='Должность: Системный администратор';
    var time ='Стаж: 2 месяца';
    var adapt_progress ='Прогресс адаптации: 65%';
    var tasks ='Текущие задачи: Освоить работу в основных ИС компании';
    var pr1 = 15;
    var pr2 = 30;
    var pr3 = 20;
    $('#fio').text(fio);
    $('#work').text(work);
    $('#time').text(time);
    $('#adapt_progress').text(adapt_progress);
    $('#tasks').text(tasks);
    $('.progress-bar standard').attr('style','width: '+String(pr1)+'%').attr('aria-valuenow',String(pr1));
    $('.progress-bar bg-success').attr('style','width: '+String(pr2)+'%').attr('aria-valuenow',String(pr2));
    $('.progress-bar bg-info').attr('style','width: '+String(pr3)+'%').attr('aria-valuenow',String(pr3));
}
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);
function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'You');

      data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: '%'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
    var a = 0;
    function tableCreate(){
        if(a == 0)
        {
            var body = document.getElementById('dede');
        tbl  = document.createElement('table');
    tbl.style.width  = '900px';

    for(var i = 0; i < 11; i++){
        var tr = tbl.insertRow();
        if(i%2==0) tr.style = "background-color: #fbfbfb";
        for(var j = 0; j < 7; j++){
            var td = tr.insertCell();
            var rand = getRandomInt(2,0);
            if(i == 0)
            {
                if(j==0)
                {
                    td.appendChild(document.createTextNode("Фото"));
                }
                else if(j==1)
                {
                    td.appendChild(document.createTextNode("ФИО"));
                }
                 else if(j==2)
                {
                   td.appendChild(document.createTextNode("Возраст"));
                }
                 else if(j==3)
                {
                   td.appendChild(document.createTextNode("Пол"));
                }
                 else if(j==4)
                {
                    td.appendChild(document.createTextNode("Должность"));
                }
                 else if(j==5)
                {
                    td.appendChild(document.createTextNode("Стаж"));
                }
                 else if(j==6)
                {
                    td.appendChild(document.createTextNode("Прогресс"));
                }
            }
            else {
                if(j==0)
                {
                    td.appendChild(document.createElement('img'));
                    td.firstChild.src = "image/user.svg";
                    //td.firstChild.style.height = "20px";
                    //td.firstChild.style.width = "20px";
                    td.style = "margin-top:2px";

                }
                else if(j==1)
                {
                    if(rand == 0)
                    {
                        var s = names[getRandomInt(5,7)];
                        td.appendChild(document.createTextNode(s));
                    }
                    else if(rand == 1)
                    {
                        var s = names[getRandomInt(7,0)];
                        td.appendChild(document.createTextNode(s));
                    }
                    td.style = "margin-top:2px";

                }
                 else if(j==2)
                {
                    var s = String(getRandomInt(10,20));
                    td.appendChild(document.createTextNode(s));
                    td.style = "margin-top:2px";

                }
                 else if(j==3)
                {
                    if(rand==0)
                    {
                        td.appendChild(document.createTextNode('M'));
                    }
                    else if(rand==1) {td.appendChild(document.createTextNode('Ж'));}  
                    td.style = "margin-top:2px";
                }
                 else if(j==4)
                {
                    var s = professions[getRandomInt(4,0)];
                    td.appendChild(document.createTextNode(s));
                    td.style = "margin-top:2px";

                }
                 else if(j==5)
                {
                    var s = String(getRandomInt(3,1)) + " месяца";
                    td.appendChild(document.createTextNode(s));
                    td.style = "margin-top:2px";

                }
                 else if(j==6)
                {
                    var s = String(getRandomInt(60,40)) + '%';
                    td.appendChild(document.createTextNode(s));
                    td.style = "margin-top:2px";

                }
                td.style.border = '1px solid black';
                td.style = "border-collapse: collapse";

            }
                
        }
    }
    body.appendChild(tbl);
    a=1;
    }
}
