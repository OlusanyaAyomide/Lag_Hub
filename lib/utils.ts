import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {setCookie} from "nookies"
import Cookies from "js-cookie"
import { IPost } from "@/store/interfaces"
 
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


export function shuffleArray(array:IPost[]) {
  const newArray = [...array]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray
  
}





export function trimSentence(input: string,number?:number){
  const words = input.split(' ');
  const wordLength = number || 3
  if (words.length <= wordLength) {
      return input;
  }

  const trimmedWords = words.slice(0, 3);
  return trimmedWords.join(' ') + ' ...';
}


export function truncateString(str:string, maxLength:number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }
}

export function setCookieAsync(token:string){
  return new Promise((resolve,reject)=>{
    Cookies.set('authCookie',token, { expires: 30 })
    resolve(null)
  })
}

export function isDateToday(dateString: string): string | null {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  if (
    inputDate.getDate() === currentDate.getDate() &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getFullYear() === currentDate.getFullYear()
  ) {
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();

    // Use padStart to ensure that single-digit hours and minutes have a leading zero
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  }

  return null;
}


export const getCurrentTimeString=()=>{
  const now = new Date();
  const year = String(now.getUTCFullYear());
  const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(now.getUTCMilliseconds()).padStart(6, '0');
  
  const currentTimeString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  return currentTimeString

}




export function getRandomItem(arr: string[]): string {
  if (arr.length === 0) {
    return "";
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function isBlob(str:string) {
  try {
    const blob = new Blob([str]);
    
    return blob instanceof Blob;
  } catch (e) {
    return false;
  }
}


export function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


