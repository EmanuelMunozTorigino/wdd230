


const list = document.getElementById("list");

const input = document.getElementById("favchap");

const btn = document.querySelector("button");



let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);        
});

function displayList (item) {
    const liBookName = document.createElement("li");

    const deleteBtn = document.createElement("button");

    liBookName.textContent = item;
    deleteBtn.textContent = "❌";

    deleteBtn.classList.add("delete");


    liBookName.append(deleteBtn);
    list.append(liBookName);


    deleteBtn.addEventListener("click", () => {
    list.removeChild(liBookName);
    deleteChapter(liBookName.textContent);
    input.focus();
    input.value = "";
    });

}

const setChapterList = () => {
    localStorage.setItem( "favBOMChapters" ,JSON.stringify(chaptersArray));
} 

function getChapterList() {
    return JSON.parse(localStorage.getItem("favBOMChapters"));
}

function deleteChapter (chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item ==! chapter); 
    
    setChapterList();
}


btn.addEventListener("click", () => {

    if (input.value != "")
    {
            displayList(input.value);
            chaptersArray.push(input.value);

            setChapterList()

            input.value = "";
            input.focus();
            
        }
    else {
        alert("You need to enter a book and Chapter!")
        input.focus();
    };



});

