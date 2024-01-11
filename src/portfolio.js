/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Thamali Herath",
  title: "Hi all, I'm Thamali",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1dGiLp5rE5t9xPKPd6o_vim9Da7zesTWF?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ThamaliNirmala",
  linkedin: "https://www.linkedin.com/in/thamali-nirmala/",
  gitlab: "https://gitlab.com/tnirmalaadasooriya",
  facebook: "https://web.facebook.com/thamalinirmala/",
  medium: "https://medium.com/@ThamaliNirmala",
  Instagram: "https://www.instagram.com/__thamali_nirmala__/",
  //stackoverflow: "https://stackoverflow.com/users/16866691/sahan-kumarasiri",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sri Lanka Institute of Information Technology",
      logo: require("./assets/images/SLIIT_Logo_Crest.png"),
      subHeader: "Bsc.(Hons) Information Technology | specialization in Sofftware Engineering",
      duration: " 2020 -  2024",
      desc: "The largest IT degree awarding institute in Sri Lanka in the field of Information Technology, ...",
      descBullets: [
        
      ]
    },
    {
      schoolName: "Isipathana Central College",
      logo: require("./assets/images/school.jpg"),
      subHeader: "Ordinary Level + Advanced Level",
      duration: "2008 -  2016",
      desc: "Isipathana Central College is situated at a serene and tranquil site in the village known as Bamunakotuwa.",
     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Student",
      company: "SLIIT",
      companylogo: require("./assets/images/SLIIT_Logo_Crest.png"),
      date: "2020 – 2023",
      desc: "The largest IT degree awarding institute in Sri Lanka in the field of Information Technology...",
     
    },
    {
      role: "Intern Fullstack Software Engineer",
      company: "Treinetic",
      companylogo: require("./assets/images/Treinetic.jpg"),
      date: "2022 Mar 30 – 2022 Dec 31",
      desc: "Latest Technology to Meet up Your Innovative Ideas & Business Needs...",
     
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/login.png"),
      projectName: "Thaulla Bojun",
      projectDesc: "Online Food Ordering & Delivery Management System",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/SLIIT-IT-Project-2021/Thaulla-Bojun"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/600D.png"),
      projectName: "Studio-600D",
      projectDesc: "Full Stack MERN Web Application for Heart Touching Photography.",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/ThamaliNirmala/Studio-600D"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/research.png"),
      projectName: "Final Year Research Project" ,
      projectDesc: "ARCHIVEHUB: An Assistive Dashboard for Staff Research Profile",
      footerLink: [
        {
          name: "Visit Web Site",
          url: "http://archivehub.online/"
        }
        //  you can add extra buttons here.
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "First Year First Semester",
      subtitle:
        "3.55 GPA",
      image: require("./assets/images/y1_s1.PNG"),
      footerLink: [
        {
          name: "View Result",
          url: "https://i.ibb.co/WpmNMzX/y1-s1.png"
        }
       
      ]
    },
    {
      title: "First Year Second Semester",
      subtitle:
        "3.14 GPA",
      image: require("./assets/images/y1_s2.PNG"),
      footerLink: [
        {
          name: "View Result",
          url: "https://i.ibb.co/JcyNDn9/y1-s2.png"
        }
       
      ]
    },

    {
      title: "Second Year First Semester",
      subtitle:
        "2.83 GPA",
      image: require("./assets/images/y2_s1.PNG"),
      footerLink: [
        {
          name: "View Result",
          url: "https://i.ibb.co/4mgSZh4/y2-s1.png"
        }
       
      ]
    },

    {
      title: "Second Year Second Semester",
      subtitle:
        "2.91 GPA",
      image: require("./assets/images/y2_s2.PNG"),
      footerLink: [
        {
          name: "View Result",
          url: "https://i.ibb.co/TMRLcc5/y2-s2.png"
        }
       
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@ThamaliNirmala/solid-principles-e346b3018d6a",
      title: "SOLID Principles",
      description:
        " SOLID is an acronym for the first five object-oriented design (OOD) principles. In software development, Object-Oriented Design plays a crucial role when it comes to writing flexible, scalable, maintainable, and reusable code. There are so many benefits of using OOD but every developer should also have the knowledge of the SOLID principle for good object-oriented design in programming. The SOLID principle was introduced by Robert C. Martin, also known as Uncle Bob and it is a coding standard in programming. This principle is an acronym of the five principles which is given below…"
    },
    {
      url: "https://medium.com/@ThamaliNirmala/version-controlling-nosql-a9a2736bf53f",
      title: "Version Controlling | NoSql",
      description:
        "Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time. As development environments have accelerated, version control systems help software teams work faster and smarter. They are especially useful for DevOps teams since they help them to reduce development time and increase successful deployments."
    },
    {
      url: "https://medium.com/@ThamaliNirmala/node-js-koa-js-1eddcac8a276",
      title: "Node JS | Koa JS",
      description:
        "Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!. Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant."
    },
    {
      url: "https://medium.com/@ThamaliNirmala/react-js-fd999cd5ae67",
      title: "React JS",
      description:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It’s ‘V’ in MVC. React JS is an open-source, component-based front-end library responsible only for the view layer of the application. It is maintained by Facebook. "
    },
    {
      url: "https://medium.com/@ThamaliNirmala/an-overview-of-the-challenges-and-experiences-encountered-during-the-project-63f6b03b4968",
      title: "An overview of the challenges and experiences encountered during the project.",
      description:
        "In this project we have to create a RESTful web application to get approval for a research project. That is Research Project Management Tool. A project management tool allows us to quickly create a task hierarchy, which helps us complete projects effectively and efficiently. This research project management tool helps identify current project stages. A group of students should submit a research topic in a particular field of study to a supervisor with similar research interests. Once the title is accepted, the supervisor should recruit a co-supervisor with similar research interests. Once the project is approved by the supervisor, the student should provide a paper outlining the research subject. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
     
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "0770113437",
  email_address: "tnirmalaadasooriya@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
