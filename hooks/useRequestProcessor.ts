import {useQuery,useMutation,useQueryClient} from "@tanstack/react-query"
import { useAppDispatch } from "./reduxHooks"
import { Action } from "@reduxjs/toolkit"


interface IGetPost{
    queryKey:string
    queryFn:(variables:any) => Promise<any>
    onSuccess?:(data:any)=>void
    onError?:(data:any)=>void
    showError?:boolean,
    staleTime?:number
    retry?:number | boolean
}

interface IFetchPost{
    queryKey:string,
    mutationFn:(variables:any) => Promise<any>
    onSuccess?:(data:any)=>void
    onError?:(data:any)=>void
    showError?:boolean
}

export const useGetRequest = ({
    queryKey,queryFn,onSuccess=()=>{},
    onError=()=>{},showError=true,staleTime=30000,retry=false}:IGetPost)=>{
    // const {toast} = useToast()

    
    return useQuery({
      queryKey:[queryKey],
      staleTime:staleTime,
      refetchOnWindowFocus:false,
      retry:retry,
      queryFn,
      onSuccess,
    //   onError:(res:AxiosError<any>)=>{
    //   if (res.code === "ERR_NETWORK" && showError){
    //       toast({
    //         title:"Network error",
    //         description:"your connection is down",
    //         className:"border-2 border-red-500"
    //       })
    //   }
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
    //   onError(res)
      
    //   }
    }) 
  }


  export const usePostRequest = ({queryKey,mutationFn,onSuccess=()=>{},onError=()=>{},showError=true}:IFetchPost)=>{
    // const {toast} = useToast()
    // const dispatch = useAppDispatch()
    const queryclient = useQueryClient()
    return useMutation({
    mutationKey:[queryKey],
      mutationFn:mutationFn,
      onSuccess:(data)=>{
        queryclient.invalidateQueries({queryKey:[queryKey]})
        onSuccess(data)
      },
    //   onError:(res:AxiosError<any>)=>{
    //   if (res.code === "ERR_NETWORK"){
    //       toast({
    //         title:"Network error",
    //         description:"your connection is down",
    //         className:"border-2 border-red-500"
    //       })
    //   }
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
    //     }
    //   }
    //   onError(res)
    //   }
    })
  }