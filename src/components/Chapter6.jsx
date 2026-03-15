import { Zap, Link, Brain, Database, CreditCard, Globe } from 'lucide-react'

export default function Chapter6({ id, active }) {
  const stack = [
    { icon: Zap, title: 'Lovable', desc: 'Rapid prototyping & workflow orchestration' },
    { icon: Link, title: 'OpenFN', desc: 'Secure interoperability with NGO & GovTech systems' },
    { icon: Brain, title: 'Anthropic', desc: 'AI risk briefs & story moderation' },
    { icon: Database, title: 'Supabase', desc: 'Encrypted database, role-based access' },
    { icon: CreditCard, title: 'Stripe / M-Pesa', desc: 'Community funding tiers' },
    { icon: Globe, title: 'MIT License', desc: 'Open source — fork it for your country' },
  ]

  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="chapter">Chapter 06</div>
        <h2 className="page-title">Technical architecture<br/>& <em>interoperability</em></h2>
        <p className="body-text">One of the critical lessons from the Nyakach pilot was the need to connect — not compete — with existing systems. Njiapanda is designed from the ground up for interoperability. OpenFN powers the integration layer — sending anonymised, de-identified event payloads to NGO and GovTech partner systems when a survivor submits a quiet signal.</p>
        <h3 className="sub-title">The OpenFN event schema</h3>
        <div className="code-wrap">
          <div className="code-header"><span className="code-dot" style={{background:'#ff5f56'}}></span><span className="code-dot" style={{background:'#ffbd2e'}}></span><span className="code-dot" style={{background:'#27c93f'}}></span>&nbsp;&nbsp;openfn-event-payload.json</div>
          <div className="code-body">{`{
  "event_type": "first_step_trigger",
  "timestamp": "2026-03-08T12:15:00Z",
  "zone": "Nairobi East",
  "urgency_level": "high",
  "consent": true,
  "resource_needed": ["safe_house", "counseling"]
}`}</div>
        </div>
        <p className="body-text">Zone. Urgency. Consent. Resource needed. Nothing else — unless the survivor explicitly chooses to share more.</p>
        <div className="inline-note"><p><strong>Njiapanda is not a surveillance tool.</strong> It connects to what already works and routes around what doesn't — quietly, safely, with the survivor's consent at every step. This directly addresses the concerns raised from the Nyakach experience.</p></div>
        <h3 className="sub-title">Stack</h3>
        <div className="feature-grid">
          {stack.map((s, i) => (
            <div className="feature-item" key={i}>
              <s.icon className="feature-emoji" size={20} strokeWidth={1.5} />
              <div className="feature-text"><strong>{s.title}</strong>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}