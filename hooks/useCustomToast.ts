import { toast } from "../components/ui/use-toast";


export const useCustomToast = ()=>{
    const styles={
        bad:"border-red-500 border",
        good:"border-green-500 border"
    }
    const toaster = (type:"bad"|"good",text:string,duration?:number)=>{
        toast({
            duration:duration || 4000,
            description:text,
            className:`${styles[type]} fixed top-2 font-medium backdrop-blur-sm py-2 max-w-[300px] bg-transparent `
        })
    }
    return toaster
}