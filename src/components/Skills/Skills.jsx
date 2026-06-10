import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { skillsData } from '../../data/skillsData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Expertise & Highlights</h2>
        
        <div className="skills-grid">
          {/* Topics Radar Chart */}
          <div className="glass skill-card">
            <h3>Research Topics</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData.topics}>
                  <PolarGrid stroke="rgba(255,255,255,0.2)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Expertise" dataKey="A" stroke="var(--accent-color)" fill="var(--accent-color)" fillOpacity={0.5} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--accent-color)' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Languages Bar Chart */}
          <div className="glass skill-card">
            <h3>Programming Languages</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillsData.languages} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: 'var(--bg-dark)', border: 'none', borderRadius: '8px' }} />
                  <Bar dataKey="expertise" radius={[0, 4, 4, 0]}>
                    {skillsData.languages.map((entry, index) => (
                      <cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tools Bar Chart */}
          <div className="glass skill-card">
            <h3>Tools & Frameworks</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillsData.tools} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="name" type="category" width={120} tick={{ fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: 'var(--bg-dark)', border: 'none', borderRadius: '8px' }} />
                  <Bar dataKey="expertise" radius={[0, 4, 4, 0]}>
                    {skillsData.tools.map((entry, index) => (
                      <cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
