// Array com uma lista de kanjis para aprendizado, juntamente com seus equivalentes em romaji e significados em português
var kanjiList = [
  { kanji: "日", romaji: "nichi", significado: "dia" },
  { kanji: "月", romaji: "getsu", significado: "mês" },
  { kanji: "木", romaji: "ki", significado: "árvore" },
  { kanji: "水", romaji: "sui", significado: "água" },
  { kanji: "火", romaji: "ka", significado: "fogo" },
  { kanji: "金", romaji: "kin", significado: "ouro" },
  { kanji: "土", romaji: "do", significado: "terra" }
];

// Índice inicial para o kanji exibido
var currentIndex = 0;

// Função para atualizar o kanji exibido, seu equivalente em romaji e o significado em português
function atualizarKanji() {
  var kanjiElement = document.getElementById("kanji");
  var kanjiData = kanjiList[currentIndex];
  kanjiElement.innerText = kanjiData.kanji;

  kanjiElement.onclick = function() {
    if (kanjiElement.innerText === kanjiData.kanji) {
      kanjiElement.innerText = kanjiData.romaji + " (" + kanjiData.significado + ")";
    } else {
      kanjiElement.innerText = kanjiData.kanji;
    }
  }

  // Atualiza o índice para o próximo kanji na lista
  currentIndex = (currentIndex + 1) % kanjiList.length;
}

// Atualiza o kanji inicial
atualizarKanji();

// Atualiza o kanji a cada meia hora (em milissegundos)
setInterval(atualizarKanji, 30 * 60 * 1000);
