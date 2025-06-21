const btnId = document.getElementById("btn");


btnId.addEventListener("click", () => {
    const txtId= document.getElementById("text");
    txtId.textContent = "ボタンをクリックしました";
});
