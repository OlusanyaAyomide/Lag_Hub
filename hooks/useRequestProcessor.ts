import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useAppDispatch } from "./reduxHooks";
import { Action } from "@reduxjs/toolkit";
import { toast } from '@/components/ui/use-toast';
import { useCustomToast } from '@/hooks/useCustomToast';


interface IGetPost{
    queryKey:string[]
    queryFn:(variables:any) => Promise<any>
    onSuccess?:(data:any)=>void
    onError?:(data:any)=>void
    showError?:boolean,
    staleTime?:number
    retry?:number | boolean
    enabled?:boolean
}

interface IFetchPost{
    mutationFn:(variables:any) => Promise<any>
    onSuccess?:(data:any)=>void
    onError?:(data:any)=>void
    showError?:boolean
}

export const useGetRequest = ({
    queryKey,queryFn,onSuccess,onError,showError=true,staleTime=30000,retry=false,enabled=true}:IGetPost)=>{
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
      if(onError){
        onError(res)
      }
   
      
    //   if (res.code === "ERR_BAD_REQUEST" && showError){
    //     const errmsg = res.response?.data?.message ? res.response?.data?.message:res.response?.data?.error
    //     toast({
    //       title:"Bad request",
    //       description:`${errmsg?errmsg:""}`,
    //       className:"border-2 border-red-500",
    //       duration:3000
    //     })
    //     console.log(errmsg)
    //     if (errmsg === "Unauthenticated." && showError){
    //         dispatch(layoutActions.setRedirected(pathname))
    //         navigate("/auth/signin")
    //         toast({
    //           title:"Session Expired",
    //           description:"Relog in to continue",
    //           className:"border border-yellow-500"
    //         })
    //     }
    //   }
      }

    }) 
  }


  export const usePostRequest = ({mutationFn,onSuccess=()=>{},onError=()=>{},showError=true}:IFetchPost)=>{

    // const dispatch = useAppDispatch()
    const toaster = useCustomToast()
    return useMutation({
    mutationKey:["post-at"],
      mutationFn:mutationFn,
      onSuccess:(data)=>{
        onSuccess(data)
      },
      onError:(res:AxiosError<any>)=>{
        console.log(res)
      if (res.code === "ERR_NETWORK"){
          toaster("bad","Connection could not be established try again")
      }
      if (res.code === "ERR_BAD_REQUEST" && showError){
        const errmsg = res.response?.data?.message || res.response?.data?.error
        toast({
          title:"Bad request",
          description:`${errmsg?errmsg:""}`,
          className:"border h-fit background-transparent backdrop-blur-sm border-red-500",
          duration:3000
        })
    //     console.log(errmsg)
    //     if (errmsg === "Unauthenticated." && showError){
    //         dispatch(layoutActions.setRedirected(pathname))
    //     }
      }
      onError(res)
      }
    })
  }