//filter = input
//dogs =ul


const dogList = document.getElementById('dogs') //ul
const filter = document.getElementById('filter').addEventListener('keyup', filterDogs);

function filterDogs(e) {
    const text = e.target.value.toLowerCase()
    const dogs = dogList.getElementsByTagName('li');
    Array.from(dogs).forEach(function(dog) {
        const dogName = dog.firstChild.textContent;
        if (dogName.toLowerCase().indexOf(text) != -1) {
            dog.style.display = 'initial'
        } else {
            dog.style.display = 'none';
        }
    });
}