import { FaDiscord, FaGitAlt, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaPython, FaGithub,  FaArrowRight, FaArrowLeft, FaLinkedin, FaRegHeart, FaGraduationCap  } from "react-icons/fa";
import { IoGrid, IoGridOutline, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { SiBuymeacoffee, SiExpress, SiLinktree } from "react-icons/si";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import CppIcon from "./CppIcon";

export const icons = {
    search : CiSearch,
    hamburger : FiMenu,
    close : FiX,
    git : FaGitAlt,
    html : FaHtml5,
    css : FaCss3Alt,
    react : FaReact,
    bootstrap : FaBootstrap,
    python : FaPython,
    js : IoLogoJavascript,
    nextjs : RiNextjsFill,
    tailwind : RiTailwindCssFill,
    nodejs : DiNodejs,
    monogodb: DiMongodb,
    express : SiExpress,
    cpp : CppIcon,
    rightArrow : FaArrowRight, 
    leftArrow : FaArrowLeft,
    twitter : FaXTwitter,
    facebook : BiLogoFacebookCircle,
    linkedIn : FaLinkedin,
    github : FaGithub,
    insta : FaInstagram,
    youtube : FaYoutube,
    linktree : SiLinktree,
    arrowUp : IoIosArrowUp,
    arrowDown : IoIosArrowDown,
    byMeCoffee : SiBuymeacoffee,
    filledGrid : IoGrid,
    unFilledGrid : IoGridOutline,
    like : FaRegHeart,
    graduationCap : FaGraduationCap,
}

import error_404 from './Images/404.svg'
import no_result1 from './Images/no-result-1.svg'
import no_result2 from './Images/no-result-2.svg'
import search_bar from './Images/search-bar.jpg'
import coming_soon from "./Images/coming_soon.svg"

export const ErrorImages = {
    error_404,
    no_result1,
    no_result2,
    search_bar,
    coming_soon
}

export const brand_name = {
    name: "BEDAR",
    author_name: "Saqib Bedar"
}

export const slideContent = [
    {
        title: "Welcome to my Portfolio",
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        description: " I'm a passionate self-taught Developer from Pakistan, currently, working as a student in Pakistan. My journey towards I.T has been an exciting one, and as a passionate developer I'm constantly exploring new horizons. Due to this keen intrest, I've been certified from various reputable platforms i.e. Meta, freeCodeCamp and many more",
        btnValue: "Explore More"
    },
    {
        title: "My new Project",
        img : "https://www.sotatek.com/wp-content/uploads/2022/12/game-development-services-4.png",
        description: "Recently, I have completed my new web development project, it was built with react.js you can check live demo below",
        btnValue: "Live Demo"
    },
    {
        title: "I am working on",
        img : "https://imageio.forbes.com/specials-images/imageserve/5f15a9ee916e8500077ad83b/0x0.jpg?format=jpg&width=1200",
        description: "I have started on my new project in python for object detection using Yolov5, you can contribute to it by checking my github",
        btnValue: "View Project"    
    },
]

export const SearchMaterial = [
    {
        id: 1,
        title: "React.js",
        description: "I have started on my new project in python for object detection using Yolov5, you can contribute to it by checking my github",
    },
    {
        id: 2,
        title: "Python",
        description:"I have started on my new project in python for object detection using Yolov5, you can contribute to it by checking my github",
    }, 
    {
        id:3,
        title: "Django",
        description: "I have started on my new project in python for object detection using Yolov5, you can contribute to it by checking my github",
    }
]

export const futureProjectsData = [
    {
        project_link : "/",
        project_name: "Insta clone",
        project_img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        category: "free Nextjs MERN TAILWIND Nodejs Frontend Backend HTML JavaScript React Express MongoDB featured"
    },
    {
        project_link : "/",
        project_name: "MERN Portfolio",
        project_img : "https://www.sotatek.com/wp-content/uploads/2022/12/game-development-services-4.png",
        category: "Premium MERN Nodejs Frontend Backend HTML JavaScript React Express MongoDB featured"
    },
    {
        project_link : "/",
        project_name: "Food Ordering App",
        project_img : "https://www.sotatek.com/wp-content/uploads/2022/12/game-development-services-4.png",
        category: "Premium MERN Nodejs Frontend Backend HTML CSS JavaScript React Express MongoDB"
    },
]

export const author_skills_first_row = [
    {
        skill_link: "/",
        skill_name: "HTML",
        skill_icon: FaHtml5
    },
    {
        skill_link: "/",
        skill_name: "CSS",
        skill_icon: FaCss3Alt
    },
    {
        skill_link: "/",
        skill_name: "JS",
        skill_icon: IoLogoJavascript
    },
    {
        skill_link: "/",
        skill_name: "REACT",
        skill_icon: FaReact
    },
    {
        skill_link: "/",
        skill_name: "NEXTJS",
        skill_icon: RiNextjsFill
    },
    {
        skill_link: "/",
        skill_name: "TAILWIND",
        skill_icon: RiTailwindCssFill
    },
    {
        skill_link: "/",
        skill_name: "BOOTSTRAP",
        skill_icon: FaBootstrap
    },
];

export const author_skills_second_row = [
    {
        skill_link: "/",
        skill_name:"GIT",
        skill_icon: FaGitAlt
    },
    {
        skill_link: "/",
        skill_name:"GITHUB",
        skill_icon: FaGithub 
    },
    {
        skill_link: "/",
        skill_name:"C++",
        skill_icon: CppIcon 
    },
    {
        skill_link: "/",
        skill_name:"PYTHON",
        skill_icon: FaPython 
    },
    {
        skill_link: "/",
        skill_name:"NODEJS",
        skill_icon: DiNodejs
    },
    {
        skill_link: "/",
        skill_name:"EXPRESS",
        skill_icon: SiExpress
    },
    {
        skill_link: "/",
        skill_name:"MONGODB",
        skill_icon: DiMongodb
    },
]

import css from "./Images/certificate_css.webp"
import html from "./Images/certificate_html.webp"
import py from "./Images/certificate_py.webp"
import ccl from "./Images/certificate_singing.webp"
import js_coursera from "./Images/Coursera.webp"
import fCC from "./Images/freeCodeCampCertificate.webp"
import programming_hub_logo from "./Images/programming_hub_logo.webp"

export const blogPostCategories = [
    "Education",
    "Technology",
    "Coding",
    "Programming",
    "Courses",
    "Projects"
]

export const featuredBlogPostsData = [
    {
        link : "/",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem.",
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        title : "Education",
        category: "Education"
    },
    {
        link : "/",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem.",
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        title : "Education",
        category: "Education"
    },
    {
        link : "/",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem.",
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        title : "Hello, world",
        category: "Technology"
    },
    {
        link : "/",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem.",
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        title : "Hello, world",
        category: "Programming"
    },
    {
        link : "/",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem.",
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        title : "Hello, world",
        category: "Courses"
    },
    {
        link : "/",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem.",
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        title : "Hello, world",
        category: "Projects"
    },
]

export const certificates = [
    {
        title: "Programming With JavaScript",
        des: "Earned a distinguished Meta certification through Coursera for mastering Programming With JavaScript.",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/HNBS292LZU6Y?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=I+android",
        cer_img: js_coursera,
        org_name: "Coursera",
        org_logo: "https://external-preview.redd.it/meta-career-certificates-v0-wWgHp7ccPNrsrmMkAbWUIfQ2unGsVrA2UX0Z6im6YdQ.jpg?auto=webp&s=0f1cb1a2101abfbad1c9b5a2aa7d06dd4d666ce3"
    },
    {
        title: "Responsive Web Design",
        des: "Earned a prestigious certification through freeCodeCamp, showcasing mastery in web design & front-end development.",
        verify_link: "https://www.freecodecamp.org/certification/bedarsaqib/responsive-web-design",
        cer_img: fCC,
        org_name: "freeCodeCamp",
        org_logo: "https://avatars3.githubusercontent.com/u/9892522?s=280&v=4"
    },
    {
        title: "HTML Excellence Certificate",
        des: "Honored with the HTML Excellence Certificate from Programming Hub, highlighting proficiency in HTML coding.",
        verify_link: "https://storage.googleapis.com/programminghub/certificate%2F1688548837186.jpg",
        cer_img: html,
        org_name: "Programming Hub",
        org_logo: programming_hub_logo
    },
    {
        title: "CSS Excellence Certificate",
        des: "Attained a CSS Excellence Certificate from Programming Hub, recognizing exceptional skills in CSS styling techniques.",
        verify_link: "https://storage.googleapis.com/programminghub/certificate%2F1688547942093.jpg",
        cer_img: css,
        org_name: "Programming Hub",
        org_logo: programming_hub_logo
    },
    {
        title: "Python Certification Course",
        des: "Completed the Python Certification Course from Programming Hub, understanding fundamental concepts of Python.",
        verify_link: "https://storage.googleapis.com/programminghub/certificate%2F1688570418306.jpg",
        cer_img: py,
        org_name: "Programming Hub",
        org_logo: programming_hub_logo
    },
    {
        title: "Certificate of Merit",
        des: "Awarded for achieving the 1st position in the college singing competition, showcasing exceptional vocal talent and musical prowess.",
        verify_link: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9poGATzdXwDjd5vDJm88fTyiVU7rI7denq-IzWOfdJnWsRJ-KUh-1OvBpBpv4p2HZNasqLICKmsihsFfdVDmpnQfGDkEcBehIl4YG-QgWOOdvGrnf3yw4DAKg3Lw_sNopTXqMbbiqLpvRoPGy_8-5ugTcnwMQJLp1YwaM6aUQP2z8HyoIS5T_WUAVGzSl/s1600/Cetificate%20of%20Merit.jpg",
        cer_img: ccl,
        org_name: "Cadet College Larkana",
        org_logo: "https://jaamiah.com/wp-content/uploads/2019/05/cadet-college-larkana-logo.jpg"
    },
]

export const Awards_data = [
    {
        date : "Jan 2018 - Shield Award",
        des : "“Received the Shield Award in 2018 from SST Public Rashidabad for securing the second position at the provincial level in the singing competition. Honored to be recognized for my musical talents and achievements”",
        institution_name : "- SST Public School",
        link : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbsUHOT8wLMVgCVdVx2f5_rimhtxXVr8p9HQVCX4H3igrbvemL09sMSfksQnoYmShmLb8uX8rBh63ZljU5d7MLz-hxkqYci5sClDTqms-k_eIR7dHi7d-HV7aoRRxVzH_skmJb7DDTCgVlILo4Mh4D7P9YgTvFzOmlsA64b9j_Ogx-pYdYoDqvcchfB47-/s1600/PicsArt_10-14-07.58.34.jpg"
    },
    {
        date : "Dec 2021 - Best Singer of the Year",
        des : "“Honored with the prestigious Best Singer Award for the academic year 2020-21 at Cadet College Larkana, celebrating my exceptional achievements in the singing competition”",
        institution_name : "- Cadet College Larkana",
        link: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy0cwRTmZIIOzqMwbkeiZcvJtQV6j_75pXLK56fem0D7vwSC6_vDXlrffy2K5Bpsp0bLEg2GlSMv6zdhx2Tl-te8eqBpMiOJ_YmJHOVYAueov0_1Lyt_anOX0_z_BP3x_Y59qkABS4ZUJNPU4hVWfjWA_wEBSsJk1_HaoxfFBIGUaUqHWs8vuRToYF0Yse/s1600/Best%20Singer%20of%20the%20Year%202020-21.jpg"
    }
]

export const footer_data = [
    {
        link : "https://twitter.com/saqibbedar",
        icon : icons.twitter
    },
    {
        link : "https://www.youtube.com/@bedarsaqib",
        icon : icons.youtube
    },
    {
        link : "https://www.linkedin.com/in/saqibbedar",
        icon : icons.linkedIn
    },
    {
        link : "https://github.com/saqibbedar",
        icon : icons.github
    },
    {
        link : "https://www.instagram.com/saqibbedar",
        icon : icons.insta
    },
    {
        link : "https://buymeacoffee.com/saqibbedar",
        icon : icons.byMeCoffee
    },
    {
        link : "https://linktr.ee/saqibbedar",
        icon : icons.linktree
    },

]

export const FAQs = [
    {
        question : "Can you create a full stack web application?",
        ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem."
    },
    {
        question : "Can you create a full stack web application?",
        ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem."
    },
    {
        question : "Can you create a full stack web application?",
        ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem."
    },
    {
        question : "Can you create a full stack web application?",
        ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem."
    },
]

export const TestimonialsData = [
    {
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        link : "/",
        name : "John Doe",
        designation : "Professor",
        description : "orem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem."
    },
    {
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        link : "/",
        name : "John Doe",
        designation : "Professor",
        description : "orem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem."
    },
    {
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        link : "/",
        name : "John Doe",
        designation : "Professor",
        description : "orem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem."
    },
    {
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        link : "/",
        name : "John Doe",
        designation : "Professor",
        description : "orem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem."
    },
    {
        img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0",
        name : "John Doe",
        designation : "Professor",
        description : "orem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum rerum et. Cupiditate eligendi, explicabo animi laboriosam dolorum deleniti itaque ipsam enim corporis ex harum voluptatum, eum alias ducimus dolorem."
    },
]



// About Page Data 
import authorImg from "./Images/authorProfile.webp"
import { FiMenu, FiX } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


export const about_data_1 = {
    title : "Saqib Bedar", 
    description : "A passionate self-taught Developer from Pakistan, currently, working as a student in Pakistan. My journey towards I.T has been an exciting one, and as a passionate developer I'm constantly exploring new horizons. Due to this keen intrest, I've been certified from various reputable platforms i.e. Meta, freeCodeCamp and many others.",
    authorImg,
    cv_download_link : "",
}

// educational data

export const educational_data = [
    {
        year : "2021",
        degreeType : "High School",
        description : "I completed my High School Education in Science group (Math, Physics, Chemistry) from Cadet College Larkana, Pakistan with A1 grade."

    },
    {
        year : "2021-22",
        degreeType : "Bachelor's in Law",
        description : "After my High School, I got admission in GC University Lahore, Pakistan to pursue my bachelor's degree in Law. But I was highly motivated towards the computer science and artificial intelligence, therefore, I find law education not matching to my interest. Additionally, I made a difficult decision regarding my future, as I left the law degree in midway. "
    },
    {
        year : "2023",
        degreeType : "BS Computer Science",
        description : "After leaving my law degree in midway at GC University Lahore, Pakistan, I embarked on a new path in frontend development in February 2023. With dedication and passion, I quickly gained a good command over HTML, CSS and JavaScript, leading to certification in a matter of months. Currently, I am enthusiastically learning JavaScript, fueling my pursuit of a fulfilling career in the world of web development. "
    },
    {
        year : "2023",
        degreeType : "BS Computer Science",
        description : "Moreover, I am also doing a bachelor's in Computer Science at QAU Islamabad.  And I am super excited about exploring the various aspects of computer science and expanding my knowledge and skills in this field at QAU Islamabad."
    },
]

// skills data

export const skills_data = [
    {
        name : "Frontend",
        icon1 : icons.html,
        icon2 : icons.css,
        icon3 : icons.js,
        project1 : {
            project_name : "Portfolio",
            project_img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0"
        },
        project2 : {
            project_name : "Quiz App",
            project_img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0"
        },
        project3 : {
            project_name : "Quiz App",
            project_img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0"
        },
        project4 : {
            project_name : "Quiz App",
            project_img : "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0"
        },
    }
]
