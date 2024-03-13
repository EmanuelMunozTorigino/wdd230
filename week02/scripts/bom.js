


const list = document.getElementById("list");

const input = document.getElementById("favchap");

const btn = document.querySelector("button");


btn.addEventListener("click", () => {

    if (input.value != "")
    {
            const liBookName = document.createElement("li");

            const deleteBtn = document.createElement("button");

            liBookName.textContent = input.value;
            deleteBtn.textContent = "❌";

            liBookName.append(deleteBtn);
            list.append(liBookName);
            

            deleteBtn.addEventListener("click", () => {
                list.removeChild(liBookName);
                input.focus();
                input.value = "";
            });
            
        }
    else {
        alert("You need to enter a book and Chapter!")
        input.focus();
    };
});

