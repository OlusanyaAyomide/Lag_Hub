import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useCustomToast } from '@/components/utils/useCustomToast';


interface IGetPost{
    queryKey:string[]
    queryFn:(variables:any) => Promise<any>
    onSuccess?:(data:any)=>void
    onError?:(data:any)=>void
    showError?:boolean,
    staleTime?:number
    retry?:number | boolean
    enabled?:boolean
    setNotFound?:()=>void
}

interface IFetchPost{
    mutationFn:(variables:any) => Promise<any>
    onSuccess?:(data:any)=>void
    onError?:(data:any)=>void
    showError?:boolean
    sucessText?:string
}

export const useGetRequest = ({
    queryKey,queryFn,onSuccess,onError,showError=true,setNotFound,staleTime=30000,retry=false,enabled=true}:IGetPost)=>{
      const toaster = useCustomToast()
    
    
    return useQuery({
      queryKey:queryKey,
      staleTime:staleTime,
      refetchOnWindowFocus:false,
      retry:retry,
      enabled,
      queryFn,
      onSuccess,
      onError:(res:AxiosError<any>)=>{
      if (res.code === "ERR_NETWORK" && showError){
          toaster("bad","Connection could not be established try again")
      }
      if(res.response?.status === 404 && setNotFound){
        setNotFound()
      }
      if(onError){
        onError(res)
      }
   
      }

    }) 
  }


  export const usePostRequest = ({mutationFn,onSuccess=()=>{},onError=()=>{},showError=true,sucessText}:IFetchPost)=>{

    const toaster = useCustomToast()
    return useMutation({
    mutationKey:["post-at"],
      mutationFn:mutationFn,
      onSuccess:(data)=>{
        if(sucessText){
          toaster("good",sucessText)
        }
        onSuccess(data)
      },
      onError:(res:AxiosError<any>)=>{
      if (res.code === "ERR_NETWORK"){
          toaster("bad","Connection could not be established try again")
      }
      if (res.code === "ERR_BAD_REQUEST" && showError){
        const errmsg = res.response?.data?.message || res.response?.data?.error
          toaster("bad",errmsg )
    //     console.log(errmsg)
    //     if (errmsg === "Unauthenticated." && showError){
    //         dispatch(layoutActions.setRedirected(pathname))
    //     }
      }
      onError(res)
      }
    })
  }