import { Button } from "../ui/button"
import { IconType } from "react-icons/lib"
import { cn } from "@/lib/utils"
import DotLoader from "../utils/spinners/DotLoader"

interface IButtons{
    Icon:IconType,
    className?:string,
    text:string
    onClick?:()=>void
    ngClass?:string
    disabled?:boolean
    isloading?:boolean
}

export  const ReactButtons = ({Icon,className,text,onClick,ngClass,disabled=false,isloading=false}:IButtons)=>(
  <Button 
  disabled={disabled} 
  variant={"ghost"} 
  onClick={onClick} 
  className={cn(`w-4/12  flex ${isloading?"items-center justify-center":""}`,ngClass)}>
    {!isloading ? <>
        <span className={cn('text-main relative right-[2px] text-xl',className)}><Icon/></span>
        <span className='text-xs'>{text}</span>
    </>:<DotLoader color="#1977F2"/>}

  </Button>
)