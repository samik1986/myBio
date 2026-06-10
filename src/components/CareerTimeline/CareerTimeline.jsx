import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { formattedTimelineData, categoryColors } from '../../data/timelineData';
import './CareerTimeline.css';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const [startYear, endYear] = payload[0].value;
    const isPresent = endYear === 2026;
    
    return (
      <div className="timeline-tooltip glass">
        <p className="tooltip-title">{data.name}</p>
        <p className="tooltip-cat" style={{ color: categoryColors[data.category] }}>
          {data.category}
        </p>
        <p className="tooltip-time">
          {startYear} - {isPresent ? 'Present' : endYear}
        </p>
        <p className="tooltip-desc">{data.description}</p>
      </div>
    );
  }
  return null;
};

const CareerTimeline = () => {
  // We need to group bars by category so they share the same Y axis properly without stacking issues.
  // Actually, since we mapped dynamic keys based on category, we can just render a <Bar> for each unique category.
  
  return (
    <div className="section timeline-page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Career Timeline</h2>
        </div>
        
        <p className="timeline-subtitle text-secondary mb-4">
          A visual representation of my education, roles, projects, and technologies over the years.
        </p>

        <div className="glass timeline-chart-container">
          <ResponsiveContainer width="100%" height={900}>
            <BarChart
              data={formattedTimelineData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 150, bottom: 20 }}
              barSize={15}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                type="number" 
                domain={[2004, 2026]} 
                tickCount={23} 
                stroke="var(--text-secondary)" 
                tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} 
                tickFormatter={(val) => Math.floor(val)}
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                stroke="var(--text-secondary)" 
                tick={{ fill: 'var(--text-primary)', fontSize: 13 }} 
                width={150}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              
              {/* Render a Bar for each category. Only rows matching the category will render this bar because of the dynamic data keys. */}
              {Object.keys(categoryColors).map(category => (
                <Bar key={category} dataKey={category} isAnimationActive={true} radius={[4, 4, 4, 4]}>
                  {
                    formattedTimelineData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={categoryColors[category]} />
                    ))
                  }
                </Bar>
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="timeline-legend glass">
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: color }}></span>
              {cat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;
