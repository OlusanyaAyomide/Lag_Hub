import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function trimAndAppend(text: string, numWords: number): string {
  const words: string[] = text.split(' ');

  if (words.length <= numWords) {
      return text;
  }

  const trimmedText: string = words.slice(0, numWords).join(' ') + ' ...see more';

  return trimmedText;
}
