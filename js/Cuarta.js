let questions = [
    {
        id: 1,
        question: "Viajas con:",
        answer: "Solo",
        answer2:"Familia",
        answer3: "Amigos"
      }
];

let question_count = 0;
i = 0;

window.onload = function(){
    show(question_count);
};

function show(count){
    i++;
    let question = document.getElementById("questions");
    let first = questions[count].answer;
    let second = questions[count].answer2;
    let third =  questions[count].answer3;


    question.innerHTML = `<h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    location.href = "4.html";
}

question_count++;
show(question_count);
}