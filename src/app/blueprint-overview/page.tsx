'use client';
import { useMemo } from 'react';
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';

const htmlContent = `

<nav id="TOC" role="doc-toc">
<ul>
<li><a href="#kaizen-digital-strategy-blueprint"
id="toc-kaizen-digital-strategy-blueprint">Kaizen Digital Strategy
Blueprint*</a>
<ul>
<li><a href="#document-control" id="toc-document-control">Document
Control</a></li>
<li><a href="#purpose-scope" id="toc-purpose-scope">Purpose &
Scope</a></li>
<li><a href="#service-pillars" id="toc-service-pillars">Service
Pillars</a>
<ul>
<li><a href="#brandingpositioning" id="toc-brandingpositioning">1.
Branding/Positioning</a></li>
<li><a href="#platformpresence" id="toc-platformpresence">2.
Platform/Presence</a></li>
<li><a href="#contentcreative" id="toc-contentcreative">3.
Content/Creative</a></li>
<li><a href="#socialcommunication" id="toc-socialcommunication">4.
Social/Communication</a></li>
<li><a href="#systemstoolsautomation" id="toc-systemstoolsautomation">5.
Systems/Tools/Automation</a></li>
<li><a href="#adsacquisition" id="toc-adsacquisition">6.
Ads/Acquisition</a></li>
</ul></li>
<li><a href="#service-priorities-market-driven"
id="toc-service-priorities-market-driven">Service Priorities
(Market-Driven)</a></li>
<li><a href="#process-documentation-standards"
id="toc-process-documentation-standards">Process Documentation
Standards</a>
<ul>
<li><a href="#iso-90012015-compliance-all-processes"
id="toc-iso-90012015-compliance-all-processes">ISO 9001:2015 Compliance
(All Processes)</a></li>
<li><a href="#iso-420012023-compliance-aiautomation-process"
id="toc-iso-420012023-compliance-aiautomation-process">ISO 42001:2023
Compliance (AI/Automation Process)</a></li>
<li><a href="#standard-process-structure"
id="toc-standard-process-structure">Standard Process Structure</a></li>
</ul></li>
<li><a href="#directory-structure"
id="toc-directory-structure">Directory Structure</a></li>
<li><a href="#process-integration" id="toc-process-integration">Process
Integration</a>
<ul>
<li><a href="#cross-process-dependencies"
id="toc-cross-process-dependencies">Cross-Process Dependencies</a></li>
<li><a href="#service-packages" id="toc-service-packages">Service
Packages</a></li>
</ul></li>
<li><a href="#quality-management-system"
id="toc-quality-management-system">Quality Management System</a>
<ul>
<li><a href="#document-control-1" id="toc-document-control-1">Document
Control</a></li>
<li><a href="#quality-assurance" id="toc-quality-assurance">Quality
Assurance</a></li>
<li><a href="#continuous-improvement"
id="toc-continuous-improvement">Continuous Improvement</a></li>
<li><a href="#training-competency" id="toc-training-competency">Training
& Competency</a></li>
</ul></li>
<li><a href="#how-to-use-this-blueprint"
id="toc-how-to-use-this-blueprint">How to Use This Blueprint</a>
<ul>
<li><a href="#for-project-managers" id="toc-for-project-managers">For
Project Managers</a></li>
<li><a href="#for-team-members" id="toc-for-team-members">For Team
Members</a></li>
<li><a href="#for-clients" id="toc-for-clients">For Clients</a></li>
</ul></li>
<li><a href="#updating-the-blueprint"
id="toc-updating-the-blueprint">Updating the Blueprint</a>
<ul>
<li><a href="#process-updates" id="toc-process-updates">Process
Updates</a></li>
<li><a href="#new-process-addition" id="toc-new-process-addition">New
Process Addition</a></li>
<li><a href="#quarterly-review" id="toc-quarterly-review">Quarterly
Review</a></li>
</ul></li>
<li><a href="#supporting-resources"
id="toc-supporting-resources">Supporting Resources</a>
<ul>
<li><a href="#templates" id="toc-templates">Templates</a></li>
<li><a href="#tools-resources" id="toc-tools-resources">Tools &
Resources</a></li>
<li><a href="#metrics-kpis" id="toc-metrics-kpis">Metrics &
KPIs</a></li>
</ul></li>
<li><a href="#document-status" id="toc-document-status">Document
Status</a></li>
</ul></li>
</ul>
</nav>
<h1 id="kaizen-digital-strategy-blueprint">Kaizen Digital Strategy
Blueprint*</h1>
<h2 id="document-control">Document Control</h2>
<ul>
<li><strong>Version</strong>: 1.0</li>
<li><strong>Last Updated</strong>: 2025-01-XX</li>
<li><strong>Owner</strong>: Kaizen Strategic AI</li>
<li><strong>Review Cycle</strong>: Quarterly</li>
<li><strong>ISO Compliance</strong>: ISO 9001:2015 Quality Management
Systems</li>
</ul>
<hr />
<h2 id="purpose-scope">Purpose & Scope</h2>
<p>This blueprint documents all processes, packages, and systems for
Kaizen Strategic AI’s digital strategy services. It serves as the master
reference for service delivery, ensuring consistency, quality, and
continuous improvement across all client engagements.</p>
<p>The blueprint is organized by <strong>Service Pillars</strong>
(categories) and contains detailed, ISO-standard process documentation
for each service offering.</p>
<hr />
<h2 id="service-pillars">Service Pillars</h2>
<p>Our services are organized into six strategic pillars:</p>
<h3 id="brandingpositioning">1. Branding/Positioning</h3>
<p>Cohesive brand identity and market positioning - <a
href="01_BRANDING_POSITIONING/01_Branding_Strategy.md">Branding
Strategy</a> - <a
href="01_BRANDING_POSITIONING/02_Graphic_Logo_Design.md">Graphic/Logo
Design</a></p>
<h3 id="platformpresence">2. Platform/Presence</h3>
<p>Digital platforms and online presence - <a
href="02_PLATFORM_PRESENCE/01_Website_Development.md">Website
Development</a> - <a
href="02_PLATFORM_PRESENCE/02_Web_App_Mobile_App.md">Web App/Mobile
App</a></p>
<h3 id="contentcreative">3. Content/Creative</h3>
<p>Content strategy and creative assets - <em>[To be documented - Video,
Audio, Animation, Photography]</em></p>
<h3 id="socialcommunication">4. Social/Communication</h3>
<p>Social media and communication channels - <a
href="04_SOCIAL_COMMUNICATION/01_Social_Media.md">Social Media</a></p>
<h3 id="systemstoolsautomation">5. Systems/Tools/Automation</h3>
<p>Technology infrastructure and automation - <a
href="05_SYSTEMS_AUTOMATION/01_AI_Automation.md">AI/Automation</a> - <a
href="05_SYSTEMS_AUTOMATION/02_Process_Optimization.md">Process
Optimization</a></p>
<h3 id="adsacquisition">6. Ads/Acquisition</h3>
<p>Digital advertising and customer acquisition - <em>[To be documented
- SEO, Email Marketing, Digital Advertising, CRM]</em></p>
<hr />
<h2 id="service-priorities-market-driven">Service Priorities
(Market-Driven)</h2>
<p>Based on market analysis, our priority services are:</p>
<ol type="1">
<li><strong>Branding Strategy</strong> - Incohesive brands in the
region</li>
<li><strong>Websites</strong> - Poor visual quality in the region</li>
<li><strong>Graphic/Logo Design</strong> - Hand-in-hand with
branding</li>
<li><strong>AI/Automation</strong> - High demand, expertise
advantage</li>
<li><strong>Process Optimization</strong> - Foundation for AI/Automation
success</li>
<li><strong>Social Media</strong> - Overused incorrectly, opportunity
for proper execution</li>
<li><strong>Web App/Mobile App</strong> - Custom software solutions,
high value</li>
</ol>
<hr />
<h2 id="process-documentation-standards">Process Documentation
Standards</h2>
<h3 id="iso-90012015-compliance-all-processes">ISO 9001:2015 Compliance
(All Processes)</h3>
<p>All processes follow ISO 9001:2015 Quality Management Systems
requirements:</p>
<ul>
<li><strong>Process Identification</strong>: Clear process name and
purpose</li>
<li><strong>Process Owner</strong>: Responsible party</li>
<li><strong>Inputs</strong>: Required resources and information</li>
<li><strong>Activities</strong>: Step-by-step procedures</li>
<li><strong>Outputs</strong>: Deliverables and outcomes</li>
<li><strong>Controls</strong>: Quality checkpoints and approvals</li>
<li><strong>Metrics</strong>: Success criteria and KPIs</li>
<li><strong>Review</strong>: Continuous improvement mechanisms</li>
<li><strong>Document Control</strong>: Version, dates, approval</li>
<li><strong>Scope</strong>: What’s included/excluded</li>
<li><strong>Records</strong>: Documentation requirements</li>
</ul>
<h3 id="iso-420012023-compliance-aiautomation-process">ISO 42001:2023
Compliance (AI/Automation Process)</h3>
<p>The AI/Automation process additionally follows ISO 42001:2023 AI
Management Systems requirements:</p>
<ul>
<li><strong>AI Risk Management</strong>: Risk identification and
assessment</li>
<li><strong>AI Impact Assessment</strong>: Stakeholder impact
evaluation</li>
<li><strong>Data Quality Management</strong>: Data governance
procedures</li>
<li><strong>Transparency & Explainability</strong>: Clear AI
decision-making</li>
<li><strong>Bias Detection & Mitigation</strong>: Fairness
measures</li>
<li><strong>Human Oversight</strong>: Human control and
intervention</li>
<li><strong>Third-Party AI Services</strong>: Vendor management</li>
<li><strong>AI Incident Response</strong>: Incident handling
procedures</li>
</ul>
<h3 id="standard-process-structure">Standard Process Structure</h3>
<p>Each process document includes:</p>
<ol type="1">
<li><strong>Process Overview</strong> - Purpose, owner, duration, client
sessions</li>
<li><strong>Process Map</strong> - Visual flow diagram</li>
<li><strong>Detailed Process Steps</strong> - Step-by-step procedures
with checkboxes</li>
<li><strong>Deliverables</strong> - Clear outputs at each phase</li>
<li><strong>Quality Checkpoints</strong> - Approval gates</li>
<li><strong>Success Metrics</strong> - Measurable KPIs</li>
<li><strong>Review & Continuous Improvement</strong> - Ongoing
optimization</li>
</ol>
<hr />
<h2 id="directory-structure">Directory Structure</h2>
<pre><code>KAIZEN_DIGITAL_STRATEGY_BLUEPRINT/
├── README.md (this file)
├── 01_BRANDING_POSITIONING/
│   ├── 01_Branding_Strategy.md
│   └── 02_Graphic_Logo_Design.md
├── 02_PLATFORM_PRESENCE/
│   ├── 01_Website_Development.md
│   └── 02_Web_App_Mobile_App.md
├── 03_CONTENT_CREATIVE/
│   └── (future processes)
├── 04_SOCIAL_COMMUNICATION/
│   └── 01_Social_Media.md
├── 05_SYSTEMS_AUTOMATION/
│   ├── 01_AI_Automation.md
│   └── 02_Process_Optimization.md
├── 06_ADS_ACQUISITION/
│   └── (future processes)
└── TEMPLATES/
    └── (process templates and checklists)</code></pre>
<hr />
<h2 id="process-integration">Process Integration</h2>
<h3 id="cross-process-dependencies">Cross-Process Dependencies</h3>
<ul>
<li><strong>Branding Strategy</strong> → Website Development</li>
<li><strong>Graphic/Logo Design</strong> → Branding Strategy, Website
Development</li>
<li><strong>Process Optimization</strong> → AI/Automation</li>
<li><strong>Branding Strategy</strong> → Social Media, Digital
Advertising</li>
</ul>
<h3 id="service-packages">Service Packages</h3>
<p>Processes can be combined into service packages:</p>
<ul>
<li><strong>Complete Brand Package</strong>: Branding Strategy +
Graphic/Logo Design</li>
<li><strong>Digital Presence Package</strong>: Website + Social
Media</li>
<li><strong>Automation Package</strong>: Process Optimization +
AI/Automation</li>
<li><strong>Full Digital Strategy</strong>: All services integrated</li>
</ul>
<hr />
<h2 id="quality-management-system">Quality Management System</h2>
<h3 id="document-control-1">Document Control</h3>
<ul>
<li>All processes documented in this blueprint</li>
<li>Version control for all process documents</li>
<li>Regular review and updates</li>
<li>Change management process</li>
</ul>
<h3 id="quality-assurance">Quality Assurance</h3>
<ul>
<li>Quality checkpoints at each phase</li>
<li>Client approval gates</li>
<li>Internal QA processes</li>
<li>Testing and validation</li>
</ul>
<h3 id="continuous-improvement">Continuous Improvement</h3>
<ul>
<li>Regular process reviews</li>
<li>Client feedback integration</li>
<li>Performance metrics tracking</li>
<li>Process optimization</li>
</ul>
<h3 id="training-competency">Training & Competency</h3>
<ul>
<li>Team training on processes</li>
<li>Skill development</li>
<li>Certification (where applicable)</li>
<li>Knowledge sharing</li>
</ul>
<hr />
<h2 id="how-to-use-this-blueprint">How to Use This Blueprint</h2>
<h3 id="for-project-managers">For Project Managers</h3>
<ol type="1">
<li>Review the relevant process document before starting a project</li>
<li>Use the process as a checklist for project execution</li>
<li>Document any deviations or improvements</li>
<li>Report process effectiveness in quarterly reviews</li>
</ol>
<h3 id="for-team-members">For Team Members</h3>
<ol type="1">
<li>Familiarize yourself with your role’s processes</li>
<li>Follow the step-by-step procedures</li>
<li>Complete all checkboxes before moving to next phase</li>
<li>Document deliverables as specified</li>
</ol>
<h3 id="for-clients">For Clients</h3>
<ol type="1">
<li>Review the process to understand what to expect</li>
<li>Know when approvals are required</li>
<li>Understand the timeline and deliverables</li>
<li>Provide feedback for continuous improvement</li>
</ol>
<hr />
<h2 id="updating-the-blueprint">Updating the Blueprint</h2>
<h3 id="process-updates">Process Updates</h3>
<ul>
<li>Document changes in process files</li>
<li>Update version numbers</li>
<li>Note date of change</li>
<li>Review with team before implementation</li>
</ul>
<h3 id="new-process-addition">New Process Addition</h3>
<ol type="1">
<li>Create new process document following standard structure</li>
<li>Add to appropriate category directory</li>
<li>Update this README with link</li>
<li>Review with team</li>
</ol>
<h3 id="quarterly-review">Quarterly Review</h3>
<ul>
<li>Review all processes for effectiveness</li>
<li>Collect team feedback</li>
<li>Collect client feedback</li>
<li>Update processes as needed</li>
<li>Document improvements</li>
</ul>
<hr />
<h2 id="supporting-resources">Supporting Resources</h2>
<h3 id="templates">Templates</h3>
<p>Process templates and checklists are available in the
<code>TEMPLATES/</code> directory: - Client intake forms - Project brief
templates - Approval forms - Feedback forms - Phase completion
checklists</p>
<h3 id="tools-resources">Tools & Resources</h3>
<p>Each process document includes recommended tools and resources
specific to that service.</p>
<h3 id="metrics-kpis">Metrics & KPIs</h3>
<p>Success metrics are defined in each process document. Reporting
templates and dashboards are available in the <code>TEMPLATES/</code>
directory.</p>
<hr />
<h2 id="document-status">Document Status</h2>
<p><strong>Status</strong>: Living document - updated quarterly or as
processes evolve</p>
<p><strong>Next Review Date</strong>: [Quarterly]</p>
<p><strong>Last Major Update</strong>: 2025-01-XX</p>
<hr />
<p><em>Kaizen Digital Strategy Blueprint v1.0 - Kaizen Strategic
AI</em></p>

`;

export default function Page() {
  const processedContent = useMemo(() => {
    const options: HTMLReactParserOptions = {
      replace: undefined,
    };
    return parse(htmlContent, options);
  }, []);

  return (
    <div className="document-container">
      {processedContent}
    </div>
  );
}
