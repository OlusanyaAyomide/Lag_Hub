export const AlertAnimation={
    initial:{
        y:-20
    },
    animate:{
        y:0
    },
    exit:{
        x:450
    }
}

export const commentAnimation={
    initial:{
        opacity:0,
        y:-40
    },
    animate:{
        opacity:1,
        y:0, 
    }
}


export const chatFIleAnimation={
    initial:{
        opacity:0,
        y:100,
        height:0,
    },
    animate:{
        opacity:1,
        y:0,
        height:220
    },
    exit:{
        opacity:0,
        y:100,
        height:0
    }
}


export const pauseAnimation ={
    initial:{
        opacity:1
    },
    animate:{
        opacity:0,
        transition:{
            duration:2
        }
    }
}
export const herosvgAnimation={
    intitial:{
        opacity:0,
        scale:0.2
    },
    animate:{
        opacity:1,
        scale:1,
        transition:{
            delay:0.5,
        }
    }
}



export const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
};

export const signInVariants={
    hidden:{
        y:75,
        transition: {
            duration: 0.5,
        },
    },
    animate:{
        y:0,
        transition: {
            duration: 0.5,
        },
    }
}