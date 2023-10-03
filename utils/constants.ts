import { IAiSingleChat } from "@/store/interfaces"
import { Icons } from "@/utils/icons"
export const Toplinks=[
    {
        name:"home",
        link:"/home",
        icon:Icons.home
    },
    {
        name:"chats",
        link:"/chats",
        icon:Icons.messenger
    },
    {
        name:"community",
        link:"/community",
        icon:Icons.community
    },
    {
        name:"reels",
        link:"/reels",
        icon:Icons.reels
    },

    // {
    //     name:"notification",
    //     link:"/notification",
    //     icon:Icons.notification
    // },

]

export const sideLinks =[
    {
        name:"Home",
        icon:Icons.home,
        link:"/home"
    },
    {
        name:"Liam",
        icon:Icons.robot,
        link:"/chats/liam"
    },
    {
        name:"Reels",
        icon:Icons.reels,
        link:"/reels"
    },
    {
        name:"Community",
        icon:Icons.community,
        link:"/community"
    },
    {
        name:"chats",
        icon:Icons.messenger,
        link:"/chats"
    },


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
        message:"This is a test image ",
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
        unread:0
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
        unread:0
    },
    {
        name:"Johnson Dora and",
        profile:"/profile.png",
        message:"Mock Messages consectetur",
        unread:3
    },
    {
        name:"Johnson Doesyee",
        profile:"/profile.png",
        message:"Mock consectetur Messages ",
        unread:1
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
        unread:0
    },
    {
        name:"Johnson Doesyee",
        profile:"/profile.png",
        message:"Mock consectetur Messages ",
        unread:2
    },
]

export const LIamChatDemo = [
    {
        text:"Hi there,My Name is LIam , A pretrained AI model ,i can help you easily navigate your way around and also give insights of the features of Laghub as well as other general information",
        isBot:true
    },
    {
        text:"What is this place about  mock message This ",
        isBot:false
    },
    {
        text:"What is this place the features of Laghub message This ",
        isBot:true
    },
    {
        text:"What are u",
        isBot:false
    },
    {
        text:" Name is LIam , A pretrained AI model ,i can help you easily navigate your way around and also give insights of the features of ",
        isBot:true,
    },
    {
        text:"What is this place about  mock message This ",
        isBot:false
    },
    {
        text:"What is this place the features of Laghub message This ",
        isBot:true
    },
    {
        text:"What are u",
        isBot:false
    },
    {
        text:" Name is LIam , A pretrained AI model ,i can help you easily navigate your way around and also give insights of the features of ",
        isBot:true,
    }
]


export const firstAiChat:IAiSingleChat={
    type:"ai",
    message:"Hi there,my name is Liam a pretrained ai chat assistant"
}



export const avatarLists =[
    "/avatars/Avatar1.png",
    "/avatars/Avatar2.png",
    "/avatars/Avatar3.png",
    "/avatars/Avatar4.png",
    "/avatars/Avatar5.png",
    "/avatars/Avatar6.png",
    "/avatars/Avatar7.png",
    "/avatars/Avatar8.png",
    "/avatars/Avatar9.png",
    "/avatars/Avatar10.png",
    "/avatars/Avatar11.png",
    "/avatars/Avatar12.png",
    "/avatars/Avatar13.png",
    "/avatars/Avatar14.png",
    "/avatars/Avatar15.png",
    "/avatars/Avatar16.png",
    "/avatars/Avatar17.png",
    "/avatars/Avatar18.png",
    "/avatars/Avatar19.png",

]

export const colorTheme = [
    "#FF0000", "#FF2200", "#FF4400", "#FF6600", "#FF8800", "#FFAA00", "#FFCC00", "#FFEE00",
    "#EEFF00", "#CCFF00", "#AAFF00", "#88FF00", "#66FF00", "#44FF00", "#22FF00", "#00FF00",
    "#00FF22", "#00FF44", "#00FF66", "#00FF88", "#00FFAA", "#00FFCC", "#00FFEE", "#00EEFF",
    "#00CCFF", "#00AAFF", "#0088FF", "#0066FF", "#0044FF", "#0022FF", "#0000FF", "#2200FF",
    "#4400FF", "#6600FF", "#8800FF", "#AA00FF", "#CC00FF", "#EE00FF", "#FF00FF", "#FF00DD",
    "#FF00BB", "#FF0099", "#FF0077", "#FF0055", "#FF0033", "#FF0011", "#FF0000","#FF5500"
]



export const Appfeatures=[
    {
        text:"Enjoy personalized feed content with real time and instaneous updates, react to feeds, like share and repost",
        Icon:Icons.feed,
        style:'#FFD700',
        header:"User feed"
        // className:string
    },
    {
        text:"Let everyone on goConnect know your thought through your post,get notified in real time on reactions ,reposts and other activities on yout post",
        Icon:Icons.repost,   
        style:'#f558f5',
        header:"Public post"
        // className:string
    },
    {
        text:"Meet like minds on goConect Community ,connect,interact ,share thoughts,messages,media files and ideas on goConnect communities",
        Icon:Icons.community,   
        style:'#ff627a',
        header:"Community Chat"
        // className:string
    },
    {
        text:"Connect with friends on goConnect enjoy personalized chat in real time,chats are private and visible to both party only",
        Icon:Icons.profile ,  
        style:'#9bec18',
        header:"Personal Chat"
        // className:string
    },
    {
        text:"Talk to Liam, an Ai powered assistnant that is peronal to you!!,Liam got you covered on goConnect related information as well as the ability to remeber past conversations",
        Icon:Icons.robot,
        style:'#1977F2',
        header:"Ai Assistant"
        // className:string
    },
    {
        text:"goConnect got you covered on entertainment, enjoy peronalized video reels and shorts",
        Icon:Icons.reels,  
        style:'#26e998',
        header:"Reels"
        // className:string
    },
]