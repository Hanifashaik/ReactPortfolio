import self from "../img/self.png"





export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;



export const info = {
    firstName: "Shaik ",
    lastName: "Hanifa",
    initials: "S", 
    position: "JAVA Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
       
        {
            emoji: '🌎',
            text: 'India'
        },
        {
            emoji: "💼",
            text: "JAVA Full Stack Developer"
        },
        {
            emoji: "📧",
            text: "hanifashaik285@gmail.com"
        }
    ],
    socials: [
       
       
        {
            link: "https://github.com/Hanifashaik",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/shaik-hanifa-58a388266",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        


    ],
    bio: "As a passionate Java Fullstack Developer, I specialize in crafting robust, scalable, and high-performance web applications. With a solid foundation in both frontend and backend technologies, I thrive on transforming complex problems into elegant solutions.",
    skills:
        {
            proficientWith: ['HTML', 'CSS', 'JavaScript', 'React JS', 'JAVA','MY SQL'],
            exposedTo: ['SQL', 'DSA using Java', 'Bootstrap']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '🗺️⁀જ✈︎'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🍳'
        },
       

    ],
    
}
