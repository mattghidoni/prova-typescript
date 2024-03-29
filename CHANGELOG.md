# CHANGE LOG
Mattia Ghidoni - 27/02/2024

## CREAZIONE FILE TYPESCRIPT
Per creare un file in Typescript, sono stati eseguiti i seguenti passaggi:
- Tramite il prompt dei comandi, è stato creato un file Typescript con i relativi attributi. Ciò è stato reso possibile con il seguente comando:
    ```sh
    yarn init
    ```
    ![prompt1](1.png)
- Siamo entrati nella directory `prova-typescript` appena creata.
- Sempre tramite prompt dei comandi, era necessario spcificare il tipo di dipendenza (`devDepency`) di TypeScript all'interno di un progetto Node.js utilizzando Yarn come gestore. Questo è stato fatto con il seguente comando:
    ```sh
    yarn add --dev typescript
    ```
    ![prompt2](2.png)

- Ora è necessario inizializzare il nuovo file in Typescript. Quest'operazione può essere eseguita da prompt con il seguente comando:
    ```sh
    npx nsc --init
    ```
    ![prompt3](3.png)
- `npx` serve a eseguire i pacchetti Node.js scaricati senza doverli installare globalmente.
- Da VSCODE era possibile vedere che si sono aggiunti i file `yarn.lock`, `package.json` e `tsconfig.json`.
- All'interno del file `tsconfig.json` abbiamo cambiato i commenti di rootDir in 
  ```sh
  "rootDir": "./",
  ```
  e di outDir in
  ```sh
  "outDir": "./dist",
  ```
- Dal file `package.json` era possibile visualizzare gli attributi prima inseriti nella creazione del file. In aggiunta ai presenti, sono stati aggiunti ulteriormente i seguenti:
    ```sh
    "scripts": {
        "build": "npx tsc",
        "start": "yarn build && node ./dist/src/main.js"
    },
    ```
- Ora, se scriviamo del codice nel file `main.ts` e poi apriamo la console per visualizzarlo, è necessario digitare nella console `yarn start` per avviare il programma.

## CREAZIONE DELLE FUNZIONI
Per la creazione di funzioni nei file typescript, ci sono da seguire i seguenti procedimenti:
- Creare un file interno alla cartella che finisce con `.ts`.
- All'interno di questo file, si possono dichiarare le nuove funzioni.
- Se è solamente una nuova funzione, c'è da seguire la dichiarazione:
    ```sh
    export default function <tipoFunzione>(<tipoParametro>:<tipoParametro) : <tipoValoreRitorno>{
        //istruzioni

        //eventuale return <valore>
    }
    ```
- Se ci sono più funzioni, la dichiarazione sopra citata è la medesima ma senza `default`.
- Nel file main, se ci sono da richiamare le funzioni:
    ```sh
    import logMessage from "./<nome del file con solamente una funzione>";
    import { somma } from "./<nome del file con più funzioni>";

    function main() : void {
        let frase : string = "Ciao";
        logMessage(frase);
        let a : number = 1;
        let b : number = 4;
        let add = somma(a, b);
        console.log(add);
    }

    main();
    ```
- La differenza principale tra il file con una funzione e il file con più funzioni è che nell'importazione del file con solamente una funzione non è necessario mettere le parentesi graffe per specificare la funzione da importare.
- Per eseguire il codice e visualizzarlo da terminale, scrivere nel terminale `yarn start`.

## CREAZIONE DI FUNZIONI ASINCRONE
Per la creazione di funzioni `asincrone`, sono stati seguiti i seguenti passaggi:
- Innanzitutto, il main deve essere dichiarato come funzione asincrona stessa. In questo caso, è stato deciso che doveva ritornare come risultato una stringa:
    ```sh
    async function main(): Promise<string>
    ```
- All'interno del main, si può semplicemente leggere una stringa e ritornarla al termine della funzione.
- Fuori dal main, seguire la seguente sintassi:
    ```sh
    main()
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })
    ```
- Dove è presente il `.then`, significa che una volta eseguito il main, se l'operazione è andata a buon fine, si stampa il risultato, altrimenti si segue il `.error`, che viene eseguito solo nel caso sia stato generato un errore.
- Per generare appositamente un errore, nel main scrivere:
    ```sh
    throw new Error("Errore!")
    ```
Nel caso in cui si volessero prendere dati da indirizzi web, nel main:
- Inizializzare una nuova variabile di tipo any con attributo `awayt`:
    ```sh
    let res : any = await fetch('https://jsonplaceholder.typicode.com/todos')
    ```
- Per rendere il tutto leggibile all'uomo, inizializzare una nuova variabile con:
    ```sh
    let temp = await res.json()
    ```
- Se poi si vuole stampare il tutto, fare semplicemente:
    ```sh
    console.log(temp)
    ```
- `ATTENZIONE!` Nella riga della stampa, aggiungere un breakpoint. Così facendo, dato che bisogna attendere il tempo necessario di prendere le informazioni dal sito web voluto, si evita di stampare `undefined`.
- Si deve quindi mettere il breakpoint dalla stampa. Una volta che i dati sono stati prelevati, si può continuare con l'esecuzione del programma.

## RILEVAZIONE DI DATI DA INTERNET
Per prendere i dati dalla pagina web citata in precenza (https://jsonplaceholder.typicode.com/todos), in successione alla [creazione delle funzioni asincrone](https://github.com/mattghidoni/prova-typescript/blob/main/CHANGELOG.md#creazione-di-funzioni-asincrone), sono stati seguiti i seguenti passaggi:
- Innanzitutto, era evidente che i dati fossero tutti nello stesso formato, quindi caratterizzati da:
    ```sh
    numero userId
    numero id
    stringa titolo
    boolean completato
    ```
- È stato creato un file `types.ts` che creasse un nuovo tipo di dato chiamato `IUSER`. La nuova interfaccia doveva quindi contenere i dati sopra citati. È stata creata con il seguente codice:
    ```sh
    export interface IUser{
    userId : number
    id : number
    title : string
    completed : boolean
    }
    ```
- È stata creata una nuova funzione che stampasse i dati presi da internet direttamente in console. La nuova funzione aveva il seguente codice:
    ```sh
    import { IUser } from "../types"
    export function processItem(list: IUser[]): void {
        for (let i = 0; i < list.length; i++) {
            console.log("")
            console.log("NUMERO " + i + ": ")
            let user : IUser = list[i]
            console.log(user)
        }
    }
    ```
- Ora, per creare una nuova funzione che stampasse i dati direttamente su un nuovo file chiamato `risultati.json` è stato implementato il seguente codice:
    ```sh
    import { IUser } from "../types"
    import fs from "fs"
    export function saveDataToFile(list: IUser[]): void {
        fs.writeFileSync("./risultati.json", JSON.stringify(list), "utf-8")
    }
    ```
- Per vedere i risultati sul nuovo file `risultati.json`, basta aprirlo e vedere i dati al suo interno:
    ```sh
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 3,
        "id": 60,
        "title": "et sequi qui architecto ut adipisci",
        "completed": true
    },
    {
        "userId": 4,
        "id": 61,
        "title": "odit optio omnis qui sunt",
        "completed": true
    },
    ...
    ```
- Sono stati inoltre creati i `JSDoc comment`, ovvero commenti che servono a descrivere delle funzioni create.
- Vengono implementati sopra la dichiarazione della funzione con la seguente sintassi:
    ```sh
    /**
    * @description processo lo User.
    * @function processItem
    * @param {IUser[]} list
    * @returns void
    */
    ```
- Ora, ogni volta che si va con il puntatore sopra la funzione (utilizzata in qualsiasi punto del programma), si può vedere la sua descrizione.
-  Nel main, per utilizzare le funzioni appena create, è stato eseguito il seguente codice:
    ```sh
    import logMessage from "./log-message"
    import { processItem, saveDataToFile } from "./functions"

    async function main(): Promise<string> {
    let frase : string = "Ciao"
    let c : string = logMessage(frase)
    let res : any = await fetch('https://jsonplaceholder.typicode.com/todos')
    let temp = await res.json()
    saveDataToFile(temp)

   return c
    }

    main()
   .then((res) => {
      console.log(res)
   })
   .catch((error) => {
      console.error(error)
   })
    ```