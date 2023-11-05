import mainPhoto from '../m1-ui/images/mainPhotoSelfie copy.png'

export const store = {
    main: {
        name: "Iryna ",
        surname: "Nisnevich",
        profession: ' Front-End Developer',
        aboutMe: 'I am a Front-End Developer with experience in designing, developing and managing sites and creating SPA. Specializing in React/Redux/ TypeScript. Always seeking to improve my expertise. Planning to study Angular, Node.js to become a Full-Stack Developer.\n' +
            'Open to full-time employment.',
        photo: mainPhoto,
        backgroundTitle: 'Developer'
    } as MainPropsType,
    skills: {
        title: {
            mainTitle: 'Professional skills',
            subWord: 'my',
            subMainWord: 'Talent'
        },
        block: [
            {title: "React", description: '', value: 90},
            {title: "Redux", description: '', value: 85},
            {title: "Thunk", description: '', value: 85},
            {title: "TypeScript", description: '', value: 90},
            {title: "JavaScript", description: '', value: 90},
            {title: "Axios", description: '', value: 80},
            {title: "Jest", description: '', value: 70},
            {title: "Redux Toolkit", description: '', value: 70},
            {title: "RestAPI", description: '', value: 75},
            {title: "HTML5/CSS/SASS", description: '', value: 85},
            {title: "MUI", description: '', value: 80},
            {title: "STORYBOOK", description: '', value: 60},
            {title: "Unit-tests", description: '', value: 60},
            {title: "POSTMAN", description: '', value: 60},
            {title: "GIT", description: '', value: 70}
        ],
        backgroundTitle: 'Skills'
    } as SegmentPropsType,
    portfolio: {
        title: {
            mainTitle: 'Portfolio',
            subWord: 'my',
            subMainWord: 'Cases'
        },
        block: [
            {title: 'CARDS APP', description: 'React, Redux, Redux-Thunk, TypeScript, Axios, React-\n' +
                    'router-dom, Formik, SCSS, GIT', value: 'development', img: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"},
            {title: 'Social Network', description: 'React, Redux, Redux-Thunk, TypeScript, Axios, React-\n' +
                    'router-dom, Jest, SCSS', value: 'development', img: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"},
            {title: 'Todolist', description: 'React, Redux, TypeScript, React-router-dom, Jest,\n' +
                    'Storybook, Axios, Formik, MaterialUI.', value: 'development', img: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"},

        ],
        backgroundTitle: 'Skills'
    } as SegmentPropsType,
    contacts: {
        title: {
            mainTitle: 'Contact me',
            subWord: 'Let\'s',
            subMainWord: 'Talk About Ideas'
        },
        block: [
            {title: "Address", description: 'Los Angeles, USA', value: ["far", "user"]},
            {title: "Freelance", description: 'Available Right Now', value: ["far", "address-book"]},
            {title: "Email", description: 'irynanisnevich@gmail.com', value: ["far", "envelope"]},
            {title: "Phone", description: '+1 (310) 926-3032', value: ["far", "map"]},
        ],
        backgroundTitle: 'Contact me'
    } as SegmentPropsType
}

//types
export type storePropsType = typeof store
export type MainPropsType = {
    name: string,
    surname: string,
    profession: string,
    aboutMe: string,
    photo: string,
    backgroundTitle: string
}
export type SegmentPropsType = {
    title: TitlePropsType,
    block: BlockPropsType[],
    backgroundTitle: string
}
export type TitlePropsType = {
    mainTitle: string,
    subWord: string,
    subMainWord: string
}
export type BlockPropsType = {
    title: string,
    description: string,
    value: number | string | string[]
    img?: string
}