
import { TbBrandJavascript, TbBrandTypescript, TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiGithub, SiGit } from "react-icons/si";

export const skills = [
    { name: "HTML5", Icon: TbBrandHtml5, color: "#e34f26", proficiency: 90 },
    { name: "CSS3", Icon: TbBrandCss3, color: "#1572b6", proficiency: 80 },
    { name: "Javascript", Icon: TbBrandJavascript, color: "#f7df1e", proficiency: 85 },
    { name: "Typescript", Icon: TbBrandTypescript, color: "#3178c6", proficiency: 70 },
    { name: "React.js", Icon: GrReactjs, color: "#5ad2ea", proficiency: 80 },
    { name: "Next.js", Icon: RiNextjsFill, color: "#f0e8ff", proficiency: 75 },
    { name: "Tailwind Css", Icon: RiTailwindCssFill, color: "#06b6d4", proficiency: 75 },
    { name: "Styled-components", Icon: SiStyledcomponents, color: "#db7093", proficiency: 70 },
    { name: "Git", Icon: SiGit, color: "#f34f29", proficiency: 80 },
    { name: "GitHub", Icon: SiGithub, color: "#f0e8ff", proficiency: 80 }
];
