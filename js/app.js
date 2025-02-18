const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");
const today = document.getElementById("date");
const inputName = document.getElementById('name');
const saveName = document.getElementById('submit');
const greetings = document.getElementById('greeting');
const msgbox = document.querySelector('.msgbox');
const todoApp = document.querySelector('.todo-app');



inputName.focus();

checkMsgBox();

saveName.addEventListener('click', saveUserName);


addButton.addEventListener('click', ()=> {
if (inputBox.value === '') {
    alert("باید متنی وارد کنید");
}else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    saveData();
    inputBox.value = "";
    inputBox.focus();
}   
});

listContainer.addEventListener('click', (e)=> {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){

    localStorage.setItem('data', listContainer.innerHTML);

}

function showData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
setInterval(todayDate, 1000);
todayDate();
showData();
document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        if (inputBox.value === '') {
            alert("باید متنی وارد کنید");
        }else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            li.appendChild(span);
            saveData();
            inputBox.value = "";
            inputBox.focus();
        }
    }
})

function todayDate(){
    const date = new persianDate();
    today.innerHTML = `تاریخ امروز : ${date.format('YYYY/MM/DD')} ساعت : ${date.format('HH:mm:ss a')}`
}

function saveUserName(){
    if (inputName.value === '') {
        
        alert("لطفا نام کاربری خود را وارد کنید !");
        inputName.focus();
    }else {
    localStorage.setItem('name', inputName.value);
    greetings.innerHTML = `سلام 👋🏻 ${inputName.value} عزیز !`;
    document.querySelector('.msgbox').style.display = 'none';
    document.querySelector('.todo-app').style.display = 'block';
    }
}

function checkMsgBox(){
    if (localStorage.getItem('name')) {
        msgbox.style.display = 'none';
        todoApp.style.display = 'block';
        let name = localStorage.getItem('name');
        greetings.innerHTML = `سلام 👋🏻 ${name} عزیز !`;
    }else {
        msgbox.style.display = 'block';
        todoApp.style.display = 'none';
    }
};