import React from 'react';
import { admin } from '../../../data/admin';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { ArrowUpRight, FileText, Github, Mail } from 'lucide-react';

const LinksCard = () => {
    const links = [admin.mailto, admin.github, admin.linkedin, admin.resume];

    return (
        <div className="grid grid-cols-2 gap-4">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group aspect-square bg-card flex flex-col items-center justify-between p-4 rounded-xl bg-muted/10 hover:bg-muted/20 transition"
                >
                    <span className="self-start text-lg text-muted-foreground flex items-start gap-1 group-hover:scale-105 group-hover:text-primary transition-all duration-300 ">{link.label} <ArrowUpRight size={20} /> </span>
                    <span className="self-end text-2xl  group-hover:text-primary transition-all duration-300">
                        <link.icon size={32} strokeWidth={1.5} />
                    </span>
                </a>
            ))}
        </div>

    );
};

export default LinksCard;
