/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

// ho preferito creare una funzione in cui inserire due parametri (in questo caso 10 e 20) e che ritorna il risultato in console
const sumTwoNumbers = (a, b) => {
  let sum = a + b // ho creato questa riga in più (potevo anche direttamente inserire l'operazione in return), per far vedere
  // che ho creato la variabile "sum" come richiesto dall'esercizio
  return console.log(sum)
}
sumTwoNumbers(10, 20)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

// anche in questo caso ho creato la funzione che genera ogni volta un numero casuale diverso fra 0 e 20 e lo visualizza in console
const randomNumber = () => {
  random = Math.floor(Math.random() * 21)
  return console.log(random)
}
randomNumber()

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

// stavolta ho preferito creare prima una variabile "me" (esistente quindi fuori dalla funzione) ed assegnarle le 3 proprietà
// richieste ma vuote, che si riempiono una volta avviata la funzione inserendo i parametri che andranno a riempire le rispettive
// proprietà dell'oggetto "me"
const me = {}
me.name = ''
me.surname = ''
me.age = ''

const personalInformation = (name, surname, age) => {
  me.name = name
  me.surname = surname
  me.age = age
  return console.log(me)
}
personalInformation('Andrea', 'Freddi', 44)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

// ho semplicemente creato una funzione che alla sua chiamata elimina la proprietà "age" dal precedente oggetto "me"
// come sempre faccio il console.log interno per vedere in console che esegua quanto richiesto
const removeAge = () => {
  delete me.age
  return console.log(me)
}
removeAge()

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

// per poter fare in questo caso la funzione, non sapendo quante skill avrei potuto aggiungere, ho dovuto usare l'operatore rest
const addSkills = (...skills) => {
  // scrivendo (...skills) raccolgo il numero variabile di parametri immessi e me lo ritorna in
  // un array, aggiungo la proprietà all'oggetto "me" ed uno alla volta aggiungo le proprietà all'interno con un ciclo "for"
  me.skills = []
  for (let i = 0; i < skills.length; i++) {
    me.skills[i] = skills[i]
  }
  return console.log(me)
}
addSkills('HTML', 'CSS', 'JS')

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

// in questo caso ho semplicemente creato funzione che aggiunge una nuova skill alla proprietà già esistente nell'oggetto
const newSkill = (newSkill) => {
  me.skills.push(newSkill)
  return console.log(me)
}
newSkill('Java?')

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

// e qui purtroppo :( devo già eliminare la skill appena aggiunta; lo faccio sempre chiamando funzione apposita
const deleteLastSkill = () => {
  me.skills.pop()
  return console.log(me)
}
deleteLastSkill()

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

// questa funzione, quando invocata, genera un numero casuale fra 1 e 6 e lo fa vedere in console
const dice = () => {
  random = Math.ceil(Math.random() * 6)
  return random
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

// questa funzione confronta i due numeri ricevuti come parametri all'invocazione della funzione e ritorna il maggiore
// siccome viene richiesto che venga "ritornato", con return ritorno il valore, e non la visualizzazione in console; quella la
// eseguo insieme all'invocazione della funzione per vedere che mi ritorni il numero giusto
const whoIsBigger = (a, b) => {
  if (a > b) {
    return a
  } else {
    return b
  }
}
console.log(whoIsBigger(62, 13))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

// anche in questo caso si chiede di "tornare" l'array quindi il console.log lo eseguo fuori, insieme all'invocazione della funzione
const splitMe = (string) => {
  splittedString = string.split(' ')
  return splittedString
}
console.log(
  splitMe(
    'Stefano is a great teacher with great students!! ( not all of them :D )'
  )
)

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

// anche in questo caso si chiede di "tornare" la nuova stringa quindi il console.log lo eseguo fuori, insieme all'invocazione della funzione
const deleteOne = (string, boolean) => {
  if (boolean) {
    // non serve una condizione di uguaglianza ma basta inserire il valore booleano da parametro; se è "true" (non stringa)
    // allora automaticamente esegue quanto definito
    return string.slice(1)
  } else {
    return string.slice(0, -1)
  }
}
console.log(deleteOne('PEPPICODE', true))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// ho pensato di risolvere questa funzione splittando prima la stringa in un array composto dalle diverse "parole" per poi applicare
// parseInt ad ognuna di esse e vedere se dava un numero o NaN; ho provato ad eseguire condizione di uguaglianza === NaN con ogni risultato
// di parseInt ma non funzionava perché poi ho scoperto che NaN è un valore speciale che da sempre false (mind blowing) e quindi ho trovato
// metodo isNaN() che ho inserito per verificare se era o no un numero ed in quel caso lo andavo ad eslcudere dall'inserimento nel nuovo
// array, che alla fine ho ricommutato in stringa con il metodo join()
const onlyLetters = (string) => {
  splittedString = string.split(' ')
  newSplittedString = []
  for (let i = 0; i < splittedString.length; i++) {
    if (isNaN(parseInt(splittedString[i]))) {
      newSplittedString.push(splittedString[i])
    }
  }
  newSplittedString.join(' ')
  return newSplittedString
}
console.log(onlyLetters('Stefano has 35 strange students!'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// questo era impegnativo perché c'erano molte condizioni da considerare affinché la stringa risultasse un indirizzo email valido; ho dovuto
// innanzitutto verificare che esistesse la @ e che ce ne fosse solo una e che il punto fosse successivo ad essa e ci fossero elementi fra
// @ e punto; e poi dovevo verificare che non ci fossero tutti i caratteri speciali non previsti; solo così mi torna "true"
const isThisAnEmail = (string) => {
  splittedString = string.split('')
  if (
    splittedString.indexOf('@') > 0 &&
    splittedString.lastIndexOf('.') > splittedString.indexOf('@') + 1 &&
    splittedString.length > splittedString.lastIndexOf('.') &&
    splittedString.indexOf(' ') === -1 &&
    splittedString.indexOf(',') === -1 &&
    splittedString.indexOf(':') === -1 &&
    splittedString.indexOf(';') === -1 &&
    splittedString.indexOf('>') === -1 &&
    splittedString.indexOf('<') === -1 &&
    splittedString.indexOf('[') === -1 &&
    splittedString.indexOf(']') === -1 &&
    splittedString.indexOf('{') === -1 &&
    splittedString.indexOf('}') === -1 &&
    splittedString.indexOf('#') === -1 &&
    splittedString.indexOf('|') === -1 &&
    splittedString.indexOf('"') === -1 &&
    splittedString.indexOf('@') === splittedString.lastIndexOf('@')
  ) {
    return true
  }
  return false
}
console.log(isThisAnEmail('andrea.freddi.go@gmail.com'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

// ho creato funzione con al suo interno array con tutti i nomi dei giorni della settimana; l'indice del giorno lo ricavo
// da geDay() e lo applico all'array in modo che mi tiri fuori il giorno della settimana ed il console.log come al solito è esterno
const whatDayIsIt = () => {
  const date = new Date()
  const today = date.getDay()
  week = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ]
  return week[today]
}
console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

// ho creato funzione che tira i dadi (lancia dice() per tante volte quante richieste) e crea oggetto con la somma dei risultati e
// altra proprietà con array con la lista dei valori estratti dal lancio del dado
const rollTheDices = (n) => {
  const result = {}
  result.sum = 0
  result.values = []
  for (let i = 0; i < n; i++) {
    const newLaunch = dice()
    console.log(newLaunch)
    result.values.push(newLaunch)
    result.sum = result.sum + newLaunch
  }
  return result
}
console.log(rollTheDices(5))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// ho scritto funzione che determina i giorni passati (arrotondati per difetto, quindi solo i giorni interi trascorsi); per poter fare
// differenza fra le due date va inserito il parametro (stringa) in Date(); ho scoperto che la data può essere scritta in molti modi
// diversi e viene comunque sempre riconosciuta; la differenza è in millisecondi quindi va poi diviso quel numero per determinare i giorni
const howManyDays = (receivedDate) => {
  const date = new Date()
  const newDate = new Date(receivedDate)
  const differenceinMs = date - newDate
  const days = Math.floor(differenceinMs / (1000 * 60 * 60 * 24))
  return days
}
console.log(howManyDays('2024/01/01'))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// in questa funzione, invece, sembra obbligatorio inserire la data in questo modo YYYY/MM/DD altrimenti se metto prima il giorno
// si incasina e mi da risultato NaN; comunque ho semplicemente cercato gli indici di giorno e mese del mio compleanno e confrontato
// con quello corrente; se uguale allora è il giorno del mio compleanno e torna "true"
const isTodayMyBirthday = (receivedDate) => {
  const date = new Date()
  const newDate = new Date(receivedDate)
  const birthdayDay = newDate.getDate()
  const birthdayMonth = newDate.getMonth()
  const thisDay = date.getDate()
  const thisMonth = date.getMonth()
  if (birthdayDay === thisDay && birthdayMonth === thisMonth) {
    return true
  }
  return false
}
console.log(isTodayMyBirthday('1980/05/18'))

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, str) => {
  const newObject = obj
  delete newObject[str]
  return newObject
}
console.log(deleteProp(me, 'skills'))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

// con questa funzione vado a cercare nell'array gli anni di uscita e con ciclo for controllo uno a uno se quello precedentemente
// salvato in "result" sia più recente, cioè con anno maggiore, se confermato vado a sovrascrivere il result ed anche a salvare
// il film in newestMovie
const newestMovie = (array) => {
  let result = 0
  let newestMovie = []
  for (let i = 0; i < array.length; i++) {
    movieYear = parseInt(array[i].Year)
    if (movieYear > result) {
      result = movieYear
      newestMovie = array[i]
    }
  }
  return newestMovie
}
console.log(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

// questa funzione semplicemente torna il numero di elementi dell'array, cioè la lunghezza dell'array
const countMovies = (array) => {
  totalMovies = array.length
  return totalMovies
}
console.log(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

// con questa funzione eseguo ciclo che recupera da ogni elemento dell'array (movie) la proprietà Year e la va a salvare in un apposito
// nuovo array che visualizzo in console alla fine
const onlyTheYears = (array) => {
  let moviesYears = []
  for (let i = 0; i < array.length; i++) {
    moviesYears.push(array[i].Year)
  }
  return moviesYears
}
console.log(onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

// anche in questa funzione eseguo ciclo che recupera da ogni elemento dell'array (movie) la proprietà Year e verifica se sia inferiore al
// numero 2000 quindi appartenente al millenio scorso e se confermato va a salvare l'oggetto movie in questione in apposito array
// che visualizzo alla fine: i film dello scorso millennio sono solo 4
const onlyInLastMillennium = (array) => {
  let moviesMillenium = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].Year < 2000) {
      moviesMillenium.push(array[i])
    }
  }
  return moviesMillenium
}
console.log(onlyInLastMillennium(movies))

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

// in questa funzione vado di nuovo a recuperare, come sopra, tutti gli anni di ogni movie con un ciclo for, e vado a sommarli
// all'interno di una variabile che parte da 0; essendo gli anni stringhe, devo prima convertirli a numeri con parseInt
const sumAllTheYears = (array) => {
  let finalSum = 0
  for (let i = 0; i < array.length; i++) {
    finalSum = finalSum + parseInt(array[i].Year)
  }
  return finalSum
}
console.log(sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

// nella seguente funzione come parametri si inserisce il solito array di movies, ed una stringa da ricercare nel titolo; per farlo ho
// deciso con un ciclo di verificare film per film il titolo, di splittarlo parola per parola e verificare la presenza della parola
// ricercata (parametro stringa inserita al lancio della funzione) all'interno del titolo (con metodo indexOf ho sfruttato il fatto che
// torna -1 se non è presente); se presente ho fatto in modo che venisse salvato in apposito array che ritorno alla fine e visualizzo
// in console
const searchByTitle = (array, string) => {
  let selectedMoviesByTitle = []
  for (let i = 0; i < array.length; i++) {
    splittedTitle = array[i].Title.split(' ')
    if (splittedTitle.indexOf(string) !== -1) {
      selectedMoviesByTitle.push(array[i])
    }
  }
  return selectedMoviesByTitle
}
console.log(searchByTitle(movies, 'Lord'))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (array, string) => {
  let result = {}
  result.match = []
  result.unmatch = []
  for (let i = 0; i < array.length; i++) {
    splittedTitle = array[i].Title.split(' ')
    if (splittedTitle.indexOf(string) !== -1) {
      result.match.push(array[i])
    } else {
      result.unmatch.push(array[i])
    }
  }
  return result
}
console.log(searchAndDivide(movies, 'Lord'))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (array, index) => {
  const newArray = [...array]
  if (index > array.length) {
    return console.log(
      "ATTENZIONE: non c'è un film in quella posizione perché i film sono solo 14!!"
    )
  } else {
    newArray.splice(index - 1, 1)
  }
  return newArray
}
console.log(removeIndex(movies, 7))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

// questa funzione ritorna il valore selezionato, cioè quello che ha id='container'
const getId = () => {
  const selectedId = document.getElementById('container')
  return selectedId
}
getId()

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

// questa funzione ritorna un array con tutti i td nel documento; non dovessero essercene ritornerebbe array vuoto
const getTd = () => {
  const selectedTd = document.getElementsByTagName('td')
  return selectedTd
}
getTd()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

// con questa funzione si recupera lo stesso array dell'esercizio precedente e con un ciclo for si va a prendere uno per uno gli
// elementi dell'array e se ne recupera il testo che viene visualizzato in console
const getTdText = () => {
  const selectedTd = document.getElementsByTagName('td')
  for (let i = 0; i < selectedTd.length; i++) {
    console.log(selectedTd[i].innerText)
  }
  return
}
getTdText()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

// con questa funzione si recupera array di tutti i tag link e con un ciclo for si va a prendere uno per uno gli
// elementi dell'array e se ne cambia con style inline il colore di background direttamente in HTML
const changeColor = () => {
  const selectedLink = document.getElementsByTagName('link')
  for (let i = 0; i < selectedLink.length; i++) {
    selectedLink[i].style.backgroundColor = 'red'
  }
  return
}
changeColor()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

// con questa funzione cerco la lista non ordinata ul specifica con proprio id e le aggiungo un nuovo li
const addNewLi = () => {
  const selectedUl = document.getElementById('myList') // questo è il padre
  const newLi = document.createElement('li') // creo il figlio, quindi un nuovo "li"
  selectedUl.appendChild(newLi) // appena il figlio al padre cioè aggiungo un li a ul
}
addNewLi()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// con questa funzione vado a recupera l'ul (padre) e tutti i figli li, ed uno ad uno, con ciclo for, vado ad eliminarli con
// removeChild
const resetUl = () => {
  const selectedUl = document.getElementById('myList') // padre
  const selectedLi = document.querySelectorAll('#myList li') // figli
  for (let i = 0; i < selectedLi.length; i++) {
    selectedUl.removeChild(selectedLi[i])
  }
}
resetUl()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// in questa funzione sono andato a recuperare tutti i tr tramite apposito tag e con ciclo for, ad ognuno di essi ho applicato
// la classe CSS "test"
const addStyle = () => {
  const selectedTr = document.getElementsByTagName('tr')
  for (let i = 0; i < selectedTr.length; i++) {
    selectedTr[i].classList.add('test')
  }
}
addStyle()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
