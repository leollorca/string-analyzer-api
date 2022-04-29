const UI = {
  analyzeButton: document.querySelector("#analyzeButton"),
  analyzeInput: document.querySelector("#analyzeInput"),
  resultBox: document.querySelector("#result"),
};

UI.analyzeButton.addEventListener("click", analyze);

function analyze() {
  const inputValue = UI.analyzeInput.value;
  if (!inputValue) {
    UI.resultBox.innerHTML = "Veuillez remplir le champs ci-dessus.";
    return;
  }
  UI.resultBox.innerHTML = "Chargement...";
  getAnalyze(inputValue)
    .then((result) => {
      UI.resultBox.innerHTML = `
        <div>Length: ${result.length}</div>
        <div>Words: ${result.words}</div>
        <div>Vowels: ${result.vowels}</div>
        <div>Consonants: ${result.consonants}</div>
      `;
    })
    .catch(() => {
      UI.resultBox.innerHTML = "Une erreur est survenue.";
    });
}

function getAnalyze(string) {
  /* @TODO : To implement */
}
