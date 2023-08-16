import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function trimAndAppend(numWords: number,text?: string): string {
  if(!text){return ""}
  const words: string[] = text.split(' ');

  if (words.length <= numWords) {
      return text;
  }

  const trimmedText: string = words.slice(0, numWords).join(' ');

  return trimmedText;
}

export const shouldTrim = (number:number,text?:string)=>{
  if(!text){return false}
  const wordLength =text.split(" ").length
  if(wordLength>number){return true}
  return false
}