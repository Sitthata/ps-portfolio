import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { GrDocumentDownload } from 'react-icons/gr'

export const commandNavItems = [
    {
        id: 'home',
        title: 'Home',
    },
    {
        id: 'skills',
        title: 'Skills',
    },
    {
        id: 'about-me',
        title: 'About Me',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
]

export const commandLinkItems = [
    {
        icon: <GrDocumentDownload />,
        title: 'Resume',
        link: 'https://drive.google.com/file/d/1ynOoC4691p-fUCmhGHTGP6C5cfzpC5NB/view?usp=drive_link',
    },
    {
        icon: <FaLinkedinIn />,
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/pattaradanai-srichon-212b96312/',
    },
    {
        icon: <FaGithub />,
        title: 'Github',
        link: 'https://github.com/Sitthata',
    },
]