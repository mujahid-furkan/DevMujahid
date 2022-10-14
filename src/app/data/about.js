import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";

export const ABOUT = {
    title: "About Me",
    name: "Mujahidul Islam",
    description: "I am a web developer with a passion for building beautiful, responsive websites and applications. I have a background in graphic design and I am currently working on a career in web development.",
    exports: ['JavaScript', 'React','Firebase', 'WordPress'],
    image: "/Asset/me.png",
    services: [
        {
            title: "Web Development",
            text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
            icon: <GoDeviceDesktop size={33} />
        },
        {
            title: "Grapics Design",
            text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
            icon: <MdOutlineDesignServices size={33} />
        },
        {
            title: "Web Design",
            text: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
            icon: <SiAdobeindesign size={33} />
        },
    ]
}