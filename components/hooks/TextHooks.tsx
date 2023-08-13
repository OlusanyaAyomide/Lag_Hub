import {useState} from "react"

export function useTrimmedText(initialText:string, numWords:number) {
    const words = initialText.split(' ');
    const [showFullText, setShowFullText] = useState(false);
    
    const trimmedText = words.slice(0, numWords).join(' ');

    return {
        text: showFullText ? initialText : trimmedText,
        isTrimmed:showFullText,
        toggleText: () => setShowFullText(prevState => !prevState)
    };
}
