import React, { useState } from 'react';
import { admin } from '../../../data/admin';
import { ChevronDown } from 'lucide-react';

const WorkExpCard = () => {
  const { workExp } = admin;
  const [expandedId, setExpandedId] = useState(null);

  const toggleItem = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <section className="w-full h-full flex flex-col gap-4 text-start">
      <h3 className="text-2xl">Work Experience:</h3>

      <div className="w-full h-full space-y-3 overflow-y-auto overflow-x-hidden divide-y divide-border pr-2">
        {workExp.map(({ id, position, company, from, to, work, skills }) => {
          const isExpanded = expandedId === id;

          return (
            <div key={id} className="w-full pb-3">
              <button
                onClick={() => toggleItem(id)}
                className="w-full flex items-center justify-between text-left cursor-pointer"
                aria-expanded={isExpanded}
              >
                <div>
                  <h4 className="text-xl text-primary font-secondary font-medium">{position}</h4>
                  <p className="text-sm text-muted-foreground">
                    {company} | {from} - {to || 'Present'}
                  </p>
                </div>

                <ChevronDown
                  className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>

              {isExpanded && (
                <div className="space-y-4 mt-3">
                  {work && (
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
                      {work.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  )}
                  {skills && (
                    <>
                      <p>Skills Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
                          <span key={idx} className="text-sm rounded-full px-4 py-1 border border-border">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExpCard;
