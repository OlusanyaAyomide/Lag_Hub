export const isFileLarge=(file:File,maxSize:number)=>{
    if(!file){return false}
    const fileSize  = file.size/(1024 * 1024);
    if(fileSize > maxSize){
        return true
    }
    return false
}