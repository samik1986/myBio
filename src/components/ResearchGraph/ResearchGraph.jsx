import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ResearchGraph.css';

const researchData = [
  { year: '2010', impact: 5, projects: 2, field: 'Quantum Computing' },
  { year: '2012', impact: 10, projects: 1, field: 'Early CV' },
  { year: '2014', impact: 25, projects: 2, field: 'Deep Learning' },
  { year: '2016', impact: 40, projects: 4, field: 'Face Recognition' },
  { year: '2018', impact: 65, projects: 5, field: 'CNN / GANs' },
  { year: '2020', impact: 80, projects: 7, field: 'Neuroscience' },
  { year: '2022', impact: 95, projects: 8, field: 'Brain Atlas' },
  { year: '2024', impact: 120, projects: 10, field: 'Multimodal AI' },
  { year: '2026', impact: 150, projects: 12, field: 'Connectomics' }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="research-tooltip glass">
        <p className="tooltip-year">{label}</p>
        <p className="tooltip-field">{payload[0].payload.field}</p>
        <p className="tooltip-impact">Impact Score: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const ResearchGraph = () => {
  return (
    <div className="section research-graph-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Research & Innovation Impact</h2>
        </div>
        <p className="research-subtitle text-secondary mb-4">
          Visualizing the growth of my research footprint, transitioning from core Computer Vision to large-scale Multimodal Neuroscience AI.
        </p>

        <div className="glass research-chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={researchData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent-color)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--accent-color)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="year" stroke="var(--text-secondary)" tick={{ fill: 'var(--text-secondary)' }} />
              <YAxis stroke="var(--text-secondary)" tick={{ fill: 'var(--text-secondary)' }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="impact" stroke="var(--accent-color)" fillOpacity={1} fill="url(#colorImpact)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResearchGraph;
