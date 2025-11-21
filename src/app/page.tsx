import Link from 'next/link';

const documents = [
  {
    id: 'blueprint-overview',
    title: 'Blueprint Overview',
    description: 'Main documentation and navigation for Kaizen Digital Strategy Blueprint',
    route: '/blueprint-overview',
    order: 0
  },
  {
    id: 'branding-strategy',
    title: 'Branding Strategy',
    description: 'Complete branding strategy process with 2 flow charts (high-level + detailed phases)',
    route: '/branding-strategy',
    order: 1
  },
  {
    id: 'graphic-logo-design',
    title: 'Graphic/Logo Design',
    description: 'Complete design process with flow chart',
    route: '/graphic-logo-design',
    order: 2
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Full development process with flow chart',
    route: '/website-development',
    order: 3
  },
  {
    id: 'web-app-mobile-app',
    title: 'Web App/Mobile App',
    description: 'Application development process with flow chart',
    route: '/web-app-mobile-app',
    order: 4
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Ongoing strategy process with flow chart',
    route: '/social-media',
    order: 5
  },
  {
    id: 'ai-automation',
    title: 'AI/Automation',
    description: 'Process flow with ISO 42001 compliance (2 flow charts)',
    route: '/ai-automation',
    order: 6
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization',
    description: 'Optimization workflow with flow chart',
    route: '/process-optimization',
    order: 7
  }
].sort((a, b) => a.order - b.order);

export default function Home() {
  return (
    <div className="home-container">
      <h1>Kaizen Digital Strategy Blueprint</h1>
      <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
        Complete documentation for all processes, packages, and systems for Kaizen Strategic AI&apos;s digital strategy services.
      </p>
      <p>
        All process documents include visual flow charts and ISO-compliant documentation.
      </p>
      
      <div className="doc-grid">
        {documents.map((doc) => (
          <div key={doc.id} className="doc-card">
            <h2>
              <Link href={doc.route}>{doc.title}</Link>
            </h2>
            <p>{doc.description}</p>
            <Link href={doc.route} style={{ display: 'inline-block', marginTop: '16px' }}>
              View Document →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}