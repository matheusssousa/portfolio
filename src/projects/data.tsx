import ImageStudeNotes from "../assets/images/screen-studenotes.png";
import ImageLeLearn from "../assets/images/lelearn.png";
import ImageMedicalApp from "../assets/images/medical-screen.png";
import ImageMinte from "../assets/images/minte.png";

const projects = [
    {
        title: "minte",
        description: "minte",
        image: ImageMinte,
        link: "https://minte.com.br",
        technologies: ["Next.js", "Laravel", "MySQL"],
    },
    {
        title: "stude notes",
        description: "studenotes",
        image: ImageStudeNotes,
        link: "https://studenotes.vercel.app",
        github: "https://github.com/matheusssousa/studenotes-frontend",
        technologies: ["React", "Vite", "Laravel", "MySQL"],
    },
    {
        title: "lelearn",
        description: "lelearn",
        image: ImageLeLearn,
        link: "https://llrn-frontend.vercel.app/login",
        github: "https://github.com/mateusdayrell/lelearn",
        technologies: ["React", "Node.js", "MySQL"],
    },
    {
        title: "medical app",
        description: "medical",
        image: ImageMedicalApp,
        github: "https://github.com/matheusssousa/gestao-medica",
        technologies: ["Laravel", "MySQL", "Docker"],
    },
];

export default projects;

export type Project = {
    title: string;
    description: string;
    image: string;
    link?: string;
    github: string;
    technologies: string[];
};
