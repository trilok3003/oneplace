// const dragdiv = document.querySelector("#drag-container div");

// dragdiv.addEventListener("dragstart", () => {
//     dragdiv.classList.add("dragging");
// });

// dragdiv.addEventListener("dragend", () => {
//     dragdiv.classList.remove("dragging");
// });

const dragdivs = document.querySelectorAll("#drag-container div");
Array.from(dragdivs).forEach((dragdiv) => {
    dragdiv.addEventListener("dragstart", (event) => {
        event.target.classList.add("dragging");
        event.dataTransfer.effectAllowed = "move";
        console.log(event.target);
        const className = event.target.getAttribute("data-image");
        event.dataTransfer.setData("text/plain", className); 
    });
    
    dragdiv.addEventListener("dragend", (event) => {
        event.target.classList.remove("dragging");
        event.target.remove();
    });
  
})



// dragstart
// drag
// dragend

// const dropdiv = document.querySelector("#drop-container div");
// dropdiv.addEventListener("dragenter", (event) => {
//     event.target.classList.add("drop-select");
// })
// dropdiv.addEventListener("dragleave", (event) => {
//     event.target.classList.remove("drop-select");
// })

const dropdivs = document.querySelectorAll("#drop-container div");
Array.from(dropdivs).forEach((dropdiv) => {
    dropdiv.addEventListener("dragenter", (event) => {
        event.target.classList.add("drop-select");
        event.dataTransfer.dropEffect = "move";
    })
    dropdiv.addEventListener("dragleave", (event) => {
        event.target.classList.remove("drop-select");
    })
    dropdiv.addEventListener("dragover", (event) => {
        event.preventDefault();
    })
    dropdiv.addEventListener("drop", (event) => {
        const className = event.dataTransfer.getData("text/plain")
        event.stopPropagation();
        event.target.classList.add(className);
        event.target.classList.remove("drop-select");
    })
})


// dragenter
// dragover
// dragleave
// drop