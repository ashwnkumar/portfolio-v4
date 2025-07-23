import React from 'react'
import { admin } from '../../../data/admin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterCard = () => {
    const { socialLinks: links } = admin
    return (
        <div className="w-full h-full flex flex-col items-center justify-between">
            <div className="text-start">
                <h3 className='text-2xl'>Like what you see? Or have something on your mind?</h3>
                <p className='text-xl'>Feel free to reach out!</p>
                <div className="flex items-center gap-4 mt-2">
                    {links.map((item) => {
                        return (
                            <a
                                href={item.link}
                                key={item.title}
                                target="_blank"
                                rel="noreferrer"
                                className="p-4 rounded-xl border border-border hover:text-gray-200 transition-all duration-300 ease-in-out"
                                style={{
                                    transition: 'background-color 0.3s ease-in-out',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = item.color;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >

                                <FontAwesomeIcon icon={item.icon} size="2xl" />

                            </a>
                        );
                    })}
                </div>
            </div>
            <p className='text-sm'> &copy; 2025 Ashwin Kumar. All Rights Reserved</p>
        </div>
    )
}

export default FooterCard