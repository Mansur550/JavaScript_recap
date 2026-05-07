const handleAddToStorage = () => {

    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    //localStorage.setItem(name, email); // Store the name in local storage with the key "name"


    // Store the name and email in local storage as an object
    const data= {id, name};
    localStorage.setItem(id,JSON.stringify(data));


}

const storeditem =localStorage.getItem("123");
console.log(JSON.parse(storeditem));

const handleClear = () => {
    localStorage.clear();
}