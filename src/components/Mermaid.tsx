'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
  id?: string;
}

export default function Mermaid({ chart, id }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const mermaidId = id || `mermaid-${Math.random().toString(36).substring(2, 9)}`;

  useEffect(() => {
    if (!ref.current || !chart) return;

    // Initialize Mermaid once
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      themeVariables: {
        primaryColor: '#F5F5F5',
        primaryTextColor: '#1E1E1E',
        primaryBorderColor: '#D62828',
        lineColor: '#1E1E1E',
        secondaryColor: '#C9C9C9',
        tertiaryColor: '#F5F5F5',
        noteBkgColor: '#F5F5F5',
        noteTextColor: '#1E1E1E'
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    });

    // Clear previous content
    const currentElement = ref.current;
    currentElement.innerHTML = '';
    currentElement.className = 'mermaid';
    setError(null);

    // Set the Mermaid code directly on the element
    currentElement.textContent = chart.trim();

    // Render the diagram
    mermaid.run({
      nodes: [currentElement],
      suppressErrors: false,
    }).then(() => {
      setError(null);
    }).catch((err) => {
      console.error('Mermaid rendering error:', err);
      setError(err.message || 'Failed to render diagram');
      currentElement.innerHTML = '<p style="color: #D62828; padding: 20px;">⚠️ Diagram failed to load. Please check the Mermaid syntax.</p>';
    });

    // Cleanup function
    return () => {
      if (ref.current) {
        ref.current.innerHTML = '';
      }
    };
  }, [chart, mermaidId]);

  if (error) {
    return (
      <div className="mermaid">
        <p style={{ color: '#D62828', padding: '20px' }}>
          ⚠️ Diagram failed to load: {error}
        </p>
      </div>
    );
  }

  return (
    <div 
      ref={ref}
      className="mermaid"
      data-mermaid-id={mermaidId}
    />
  );
}
