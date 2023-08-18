import {Popover , PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import { Input } from '../ui/input'
import UserAvatar from '../utils/UserAvatar'

export default function VideoSearch() {
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button size={"icon"} variant={"ghost"} className={`text-shade`}>
                <Icons.search className={`text-2xl`}/>
            </Button>
        </PopoverTrigger>
        <PopoverContent className='relative w-[310px] right-1 sm:w-[400px] xl:right-[48%] sm:right-[8%] md:right-[36%]'>
            <div className="flex-center mb-2">
                <UserAvatar className='mr-2'/>
                <span className="font-medium">Johnsoon Noah</span>
            </div>
            <div className="flex-center py-2">
                <Input placeholder='Search videos' className='grow mr-2'/>
                <Button variant={"ghost"}><Icons.search className={`text-2xl`}/></Button>
            </div>
            <h1>Search over 10,000 video categories</h1>
        </PopoverContent>
    </Popover>
  )
}
