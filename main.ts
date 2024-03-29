import logMessage from "./log-message"
import { processItem, saveDataToFile } from "./functions"

async function main(): Promise<string> {
   let frase : string = "Ciao"
   let c : string = logMessage(frase)
   //throw new Error("Errore!") //TODO: da incapsulare in una funzione che genera un errore.
    let res : any = await fetch('https://jsonplaceholder.typicode.com/todos')
    let temp = await res.json()
    //processItem(temp)
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