const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", addNote);

function addNote(){
    const note = document.createElement("div");
    note.classList.add("notes");
    note.innerHTML = 
    `
    <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
    </div>
        <textarea></textarea>

    `;

    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.querySelector("textarea");

    save.addEventListener("click", saveData);
    textarea.addEventListener("input", saveData);
    trash.addEventListener("click", () => {
        note.remove();
        saveData
    });

    main.appendChild(note);
}

function saveData(){
    const notes = document.querySelectorAll(".notes textarea");
    const data = Array.from(notes).map(notes => notes.value);

    if(data.length == 0){
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
}

function loadNotes(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    
    if(lsNotes != null){
        lsNotes.forEach(noteText => {
            addNote();
            const notes = document.querySelectorAll(".notes textareaa");
            const lastNote = notes[notes.length - 1];
            lastNote.value = noteText;
        });
    }
}

loadNotes();