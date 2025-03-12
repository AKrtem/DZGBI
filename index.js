// const array = [1, 4, 3, 4, 5, 20];
// // const arrayString = ["a", "b"];

// console.log(array[0]);
// console.log(array[array.length - 1]);
// array[0] = "salam";
// console.log(array);
const create = document.getElementById(addNote);
const inputElement = document.getElementById(notesContainer);
const listelement = document.getElementById(noteText);

console.log(inputElement.value);
create.onclick = function () {
  listelement.innerHTML = `
    `;
};
