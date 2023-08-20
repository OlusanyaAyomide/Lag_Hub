import { Icons } from "@/utils/icons"
export const Toplinks=[
    {
        name:"home",
        link:"/",
        icon:Icons.home
    },
    {
        name:"video",
        link:"/video",
        icon:Icons.video
    },
    {
        name:"messages",
        link:"/messages",
        icon:Icons.messenger
    },
    {
        name:"community",
        link:"/community",
        icon:Icons.community
    },
    {
        name:"notification",
        link:"/notification",
        icon:Icons.notification
    },

]

export const sideLinks =[
    {
        name:"Home",
        icon:Icons.home,
        link:"/"
    },
    {
        name:"Videos",
        icon:Icons.video,
        link:"/video"
    },
    {
        name:"Reels",
        icon:Icons.reels,
        link:"/reels"
    },
    {
        name:"Community",
        icon:Icons.community,
        link:"/home"
    },
    {
        name:"Explore",
        icon:Icons.explore,
        link:"/home"
    },
    {
        name:"Question Bank",
        icon:Icons.book,
        link:"/home"
    },
    {
        name:"Take a test",
        icon:Icons.computer,
        link:"/home"
    },
    {
        name:"Settings",
        icon:Icons.settings,
        link:"/home"
    },
    {
        name:"Logout",
        icon:Icons.logout,
        link:"/home"
    }

]

export const NotificationDemo = [
    {
        name:"Olusanya Ayomide",
        action:"LIked your post"   
    },
    {
        name:"Justin bieber",
        action:"is Now following you"   
    },
    {
        name:"John drake",
        action:"Commented on a post you are following"
    },
    {
        name:"Alan walker",
        action:"Posted a new video to skywalkers"
    }
    
]

export const postLinks=[
    {
        name:"photos",
        icon:Icons.picture
    },
    {
        name:"videos",
        icon:Icons.video
    },
    {
        name:"polls",
        icon:Icons.chart
    },
]

export const inputText: string = "john doe is a very good man who likes skating and coding he also is a very friendly person Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facere eius molestias perspiciatis expedita mollitia magni eaque vitae enim quas ducimus quasi quaerat, maiores rerum cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta exercitationem ea tenetur cumque earum velit obcaecati aliquid nam aperiam?"


export const mockComments =[
    {
        comment:"rerum cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        time:"2w ago",
        like:45,
        reply:[{
            comment:"rerum umque ipsa dolore quisquam. Modi? Lorem umque ipsa dolore quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            time:"2w ago",
        },
        {
            comment:"rerum cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            time:"2w ago",
        },
,       {
            comment:"rerum cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            time:"2w ago",
        },
        ]
    },
    {
        comment:"rerum cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        time:"2w ago",
        like:45,
        reply:[{
            comment:"rerum cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            time:"2w ago",
        },
        {
            comment:"rerum cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            time:"2w ago",
        },
,       {
            comment:"rerum cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            time:"2w ago",
        },
        ]
    },
    {
        comment:"rerum umque ipsa dolore quisquam. Modi? Lorem vumque ipsa dolore quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        time:"2w ago",
        like:45,
        reply:[]
    },


]

const myArray = [1,2,3,4,5,6,7,8,9,10,11,12]
const array2 =[1,2,3,4,5]
export const mockComments2 ={
    comment:"rerum cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    time:"2w ago",
    like:45,
    reply:[]
}

export const mockData = ()=>{
    const arrays:{comment:string,time:string,like:number,reply:any}[] =[]
    myArray.map((item)=>arrays.push(mockComments2))
    return arrays
}
export const mockData01 = ()=>{
    const arrays:{comment:string,time:string,like:number,reply:any}[] =[]
    array2.map((item)=>arrays.push(mockComments2))
    return arrays
}

export const youTubecategories = [
    "Programming",
    "Science",
    "Javascript",
    "Documentaries",
    "Mr Beast",
    "React",
    "Machine Learning",
    "Cooking",
    "Health and Fitness",
    "Trending",
    "Mathematics",
    "Quantum Computing",
    "Art and Design",
    "Fashion and Beauty",
    "Comedy Sketches",
    "History Lessons",
    "Nature and Wildlife",
    "Film and Cinema",
    "Space Exploration",
    "Virtual Reality"
]

export const MockSearchResult=[
    {
        name:"React Devlopment",
    },
    {
        name:"Programming Nigeria",
    },
    {
        name:"BitCoin Devs",
    },
    {
        name:"NodeJS Team",
    },
    {
        name:"Forex Traders",
    },

]

export const mockMessage =[
    {
        user:"user1",
        message:"This is a mock message",
        time:"9:46Am",
        isUser:false,
        type:"text",
    },
    {
        user:"user1",
        message:"This is a mock message This is a mock message This is a mock message This is a mock message This is a mock message This is a mock message",
        time:"9:46Am",
        isUser:false,
        type:"text",
    },
    {
        user:"user3",
        message:"This is a mock message This is a mock message This is a mock message",
        time:"2:46Am",
        isUser:false,
        type:"text",
    },
    {
        user:"user2",
        message:"This is a test image",
        time:"10:46Am",
        isUser:false,
        type:"image",
        src:"/SignUpInspire.png" 
    },
    {
        user:"Me",
        message:"Hello",
        time:"9:46Am",
        isUser:true,
        type:"text",
    },
    {
        user:"Me",
        message:"Hello",
        time:"9:46Am",
        isUser:true,
        type:"text",
    },
    {
        user:"user3",
        message:"This is a mock message This is a test mock message This  test is a mock message Modi? Lorem vumque ipsa dolore quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        time:"2:46Am",
        isUser:false,
        type:"text",
    },
    {
        user:"user3",
        message:"ok",
        time:"2:46Am",
        isUser:false,
        type:"text",
    },
    {
        user:"user4",
        message:"Hey whats up",
        time:"2:46Am",
        isUser:false,
        type:"text",
    },
    {
        user:"me",
        message:"test mes age This test is a mock message Modi? Lorem vumque ipsa dolore quisquam. Modi? Lorem umque ipsa dolore quisquam. Modi? Lorem umque ipsa dolore quisquam. Modi? Lorem umque ipsa dolore quisquam. Modi? Lorem cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet",
        time:"10:46Am",
        isUser:true,
        type:"image",
        src:"/community.svg" 
    },
]

export const mocKDescription="quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  umque ipsa dolore quisquam. Modi? Lorem  cumque ipsa dolore quisquam. Modi? Lorem ipsum dolor sit, amet consectetur adipisicing"


export const mockMessagesarray =[
    {
        name:"Johnson Doe",
        profile:"/profile.png",
        message:"Mock Messages consectetur",
        unread:2
    },
    {
        name:"Travis Scott",
        profile:"/profile.png",
        message:"Mock Messages consectetur2",
        unread:1
    },
    {
        name:"Johnson Doe",
        profile:"/profile.png",
        message:"Mock  consectetur Messages",
        unread:4
    },
    {
        name:"Johnson Dora and",
        profile:"/profile.png",
        message:"Mock Messages consectetur",
        unread:6
    },
    {
        name:"Johnson Doesyee",
        profile:"/profile.png",
        message:"Mock consectetur Messages ",
        unread:8
    },
    {
        name:"Johnson Doe",
        profile:"/profile.png",
        message:"Mock Messages consectetur",
        unread:2
    },
    {
        name:"Johnson Doesyee",
        profile:"/profile.png",
        message:"Mock consectetur Messages ",
        unread:8
    },
    {
        name:"Johnson Doesyee",
        profile:"/profile.png",
        message:"Mock consectetur Messages ",
        unread:8
    },
]