import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/Data/Skills';
import { IconType } from 'react-icons';
import { useInView } from 'react-intersection-observer';

interface Skill {
    name: string;
    Icon: IconType;
    color: string;
    proficiency: number;
}

const Skills: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    useEffect(() => {
        const nodes = Array.from(document.querySelectorAll(".skill-item")) as HTMLElement[];

        nodes.forEach((node) => {
            node.addEventListener("mouseover", (ev) => handleHover(ev, node, "in"));
            node.addEventListener("mouseout", (ev) => handleHover(ev, node, "out"));
        });

        return () => {
            nodes.forEach((node) => {
                node.removeEventListener("mouseover", (ev) => handleHover(ev, node, "in"));
                node.removeEventListener("mouseout", (ev) => handleHover(ev, node, "out"));
            });
        };
    }, []);

    const handleHover = (ev: MouseEvent, node: HTMLElement, prefix: string) => {
        const directions = ["top", "right", "bottom", "left"];
        const { width, height, top, left } = node.getBoundingClientRect();
        const l = ev.pageX - (left + window.pageXOffset);
        const t = ev.pageY - (top + window.pageYOffset);
        const x = l - (width / 2) * (width > height ? height / width : 1);
        const y = t - (height / 2) * (height > width ? width / height : 1);
        const direction = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        const className = `${prefix}-${directions[direction]}`;

        node.classList.remove("in-top", "in-right", "in-bottom", "in-left", "out-top", "out-right", "out-bottom", "out-left");
        node.classList.add(className);
    };

    return (
        <div id="Skills" className="mt-[8vh] w-[80%] mx-auto" ref={ref}>
            <motion.h1
                className="xl:text-[70px] lg:text-[60px] sm:text-[55px] text-[45px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8750f7] to-white mb-10"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Skills
            </motion.h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
                {skills.map((skill: Skill, index: number) => (
                    <motion.div
                        key={index}
                        className="relative flex flex-col items-center p-2 bg-[rgba(20, 12, 28, 0.8)] bg-opacity-80 rounded-lg shadow-lg text-white text-center border border-transparent transition-colors min-w-40 max-w-60 transform transition-all duration-300"
                        initial={{ x: index % 2 === 0 ? 100 : -100 }}
                        whileInView={{ y: 0, x: 0 }}
                        transition={{ duration: 1 }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <skill.Icon className="text-5xl mb-2" color={skill.color} />
                        <span className="text-[15px] md:text-[17px] text-white leading-relaxed">{skill.name}</span>
                        {hoveredSkill === skill.name && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="info antialiased absolute inset-0 flex items-center justify-center text-[#dcbfff] font-bold text-2xl rounded-lg cursor-pointer"
                            >
                                <h3> {skill.proficiency}</h3>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
