import React from 'react';

const LocationCard = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.9318718718!2d73.78056628574886!3d18.524761374039606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1753432619889!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default LocationCard;
