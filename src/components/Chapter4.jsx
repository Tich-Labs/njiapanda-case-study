import { Home, Signal, BookOpen, FileText, Shield, MapPin, Phone, Heart, LayoutDashboard, Settings, CircleDot, MessageSquare } from 'lucide-react'

export default function Chapter4({ id, active }) {
  const features = [
    { icon: Home, title: 'Home', desc: 'Hero, 5 quick actions, trust banner' },
    { icon: Signal, title: 'Signal', desc: 'Anonymous help request, no login required' },
    { icon: BookOpen, title: 'Stories', desc: '15 seeded stories, bilingual EN/SW' },
    { icon: FileText, title: 'Share Story', desc: 'Submit your own scenario anonymously' },
    { icon: Shield, title: 'Safety Plan', desc: 'Interactive 6-step checklist' },
    { icon: MapPin, title: 'Resources', desc: 'Leaflet map, verified Nairobi & Limuru listings' },
    { icon: Phone, title: 'Helplines', desc: 'Tap-to-call emergency contacts' },
    { icon: Heart, title: 'Contribute', desc: 'Stripe · M-Pesa · PayPal' },
    { icon: LayoutDashboard, title: 'Conductor Dashboard', desc: 'Zone signals, AI briefs, safe house panel' },
    { icon: Settings, title: 'Admin Portal', desc: 'Metrics, conductors, story moderation' },
    { icon: CircleDot, title: 'Emergency Exit', desc: 'On every single page, always visible' },
    { icon: MessageSquare, title: 'Feedback', desc: 'Every page — no account needed' },
  ]

  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="chapter">Chapter 04</div>
        <h2 className="page-title">What we built —<br/>and <em>who we built it for</em></h2>
        <p className="body-text">Njiapanda means <em>crossroads</em> in Swahili. A crossroads is a moment of choice — the place where you decide which path to take. That is exactly where Njiapanda is designed to meet a survivor.</p>
        <div className="user-cards">
          <div className="user-card"><div className="user-role">The Survivor</div><p>She arrives anonymously. She reads a story and thinks — <em>that sounds familiar</em>. She submits a quiet signal with no account, no login, no trace. She finds a real organisation near her. She taps to call. She leaves no footprint.</p></div>
          <div className="user-card conductor"><div className="user-role">The Conductor</div><p>A trained community responder who logs in and sees only the cases in their zone — nothing else. They receive an AI risk brief on each case. They check safe house capacity in real time. They coordinate the referral. They are the human who makes every decision.</p></div>
          <div className="user-card admin"><div className="user-role">The Admin</div><p>Managing quietly in the background — approving stories, inviting conductors, monitoring escalations, reviewing what is working and what is not.</p></div>
        </div>
        <h3 className="sub-title">What was built in 24 hours</h3>
        <div className="feature-grid">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <f.icon className="feature-emoji" size={20} strokeWidth={1.5} />
              <div className="feature-text"><strong>{f.title}</strong>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}