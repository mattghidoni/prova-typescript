import { IUser } from "./types"
import fs from "fs"

export function somma(number1: number, number2: number): number {
   return number1 + number2
}

export const differenza = (number1: number, number2: number): number => {
   return number1 - number2
}

/**
 * @description processo lo User.
 * @function processItem
 * @param {IUser[]} list
 * @returns void
 */
export function processItem(list: IUser[]): void {
   for (let i = 0; i < list.length; i++) {
      console.log("")
      console.log("NUMERO " + i + ": ")
      let user : IUser = list[i]
      fs.writeFileSync("./risultati.json", JSON.stringify(user), "utf-8")
      console.log(user)
   }
}

export function saveDataToFile(list: IUser[]): void {
    fs.writeFileSync("./risultati.json", JSON.stringify(list), "utf-8")
}