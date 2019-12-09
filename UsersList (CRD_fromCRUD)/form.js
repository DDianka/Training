const btn = document.querySelector('#btn');
const userName = document.querySelector('#inpName');
const userSurname = document.querySelector('#inpSurname');
const userPatronymic = document.querySelector('#inpPatronymic');
const tbody = document.querySelector('tbody');

function isValid(userName, userSurname, userPatronymic) {
    return userName && userSurname && userPatronymic
}

// creating table columns
function onSubmit() {
    if (isValid(userName.value, userSurname.value, userPatronymic.value)) {
        const row = document.createElement("tr");
        const tdSurname = document.createElement("td");
        const tdName = document.createElement("td");
        const tdPatronymic = document.createElement("td");
        const actionRemove = document.createElement("td");

        tdSurname.innerText = userSurname.value;
        tdName.innerText = userName.value;
        tdPatronymic.innerText = userPatronymic.value;
        actionRemove.innerHTML = "[X]";

        actionRemove.classList.add("remover");

        row.appendChild(tdSurname);
        row.appendChild(tdName);
        row.appendChild(tdPatronymic);
        row.appendChild(actionRemove);

        tbody.appendChild(row);
    } else {
        alert("Заполните пустое поле");
    }

    // actionRemove.addEventListener("click", (event) => {
    //     event.target.parentNode.remove()
    // });

}

tbody.addEventListener('click', ({ target }) => {
    if (target.classList.contains('remover')) {
        target.parentNode.remove();
    }
});

btn.addEventListener("click", onSubmit);