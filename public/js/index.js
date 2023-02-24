function setupInput() {
  let text = document.getElementById("text");
  let button = document.getElementById("button");

  button.onclick = async () => {
    let value = text.value;
    if(value === "") return;

    text.textContent = "";

    const json = JSON.stringify({ text: value });
    const res = await axios.post('/text', json, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.status === 200) {
      displayMessage()
      setupHobbies(res.data.text)
    }
  }
}

setupInput();

function addHobbie(text, li) {
  li.innerHTML = `
  <div class="mt-6 flex m-auto">
    <img class="object-cover w-40 h-40 rounded-full mr-4 align-middle m-auto" src="https://picsum.photos/200/200" alt="random">
    <div class="w-full">
      <label class="font-bold text-gray-700">Nombre de hobbie</label>
      <br>
      <label class="font-light text-gray-600">${text}</label>
    </div>
  </div>
  `
}

function setupHobbies(text) {
  const hobbieList = document.getElementById("hobbies");
  let li = document.createElement("li");
  addHobbie(text, li);
  hobbieList.appendChild(li);
}

function displayMessage() {
  alert('Articulo creado con exito!')
}
