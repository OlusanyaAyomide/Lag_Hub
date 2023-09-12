import { toast } from "../components/ui/use-toast";


export const useCustomToast = ()=>{
    const styles={
        bad:"border-red-500 border",
        good:"border-green-500 border"
    }
    const toaster = (type:"bad"|"good",text:string,duration?:number)=>{
        toast({
            duration:duration || 5000,
            description:text,
            className:`${styles[type]}  fixed top-2 whitespace-nowrap font-medium backdrop-blur-sm py-3 max-w-[350px] bg-transparent `
        })
    }
    return toaster
}