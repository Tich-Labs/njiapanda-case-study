export default function Chapter8({ id, active }) {
  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="chapter">Chapter 08</div>
        <h2 className="page-title">What we are<br/><em>building toward</em></h2>
        <p className="body-text">The prototype is live. The build is done. Now the real work starts.</p>
        <div className="next-grid">
          <div className="next-card"><h4>Immediate</h4><ul><li>UI polish and extensive testing</li><li>Survivor tester recruitment</li><li>Conductor & NGO testing in Nairobi & Limuru</li><li>Survivor Advisory Board — forming now</li><li>First pilot partner conversations</li></ul></div>
          <div className="next-card"><h4>Pilot Questions</h4><ul><li>Do stories create genuine moments of recognition?</li><li>Does the quiet signal feel safe on a monitored device?</li><li>Can conductors coordinate on zone-level info alone?</li><li>Can OpenFN connect to partner systems in real time?</li></ul></div>
          <div className="next-card"><h4>Collaborations</h4><ul><li>Connecting with the Nyakach pilot research team</li><li>NGO partners — Nairobi & Limuru</li><li>World Pulse community testers</li><li>GovTech alignment conversations</li></ul></div>
          <div className="next-card"><h4>Longer Vision</h4><ul><li>Other Kenyan counties</li><li>East African regional networks</li><li>Open source forks for other countries</li><li>NGO and government partnerships</li></ul></div>
        </div>
        <div className="cta-block">
          <h3>I need your honesty more than your approval.</h3>
          <p>I am looking for women who will move through Njiapanda as a first-time user and tell me what they actually felt. No technical knowledge needed. No account. Just honesty — before this reaches the women who need it most.</p>
          <a href="https://lnkd.in/d_3d-A_v" className="cta-btn" target="_blank" rel="noopener noreferrer">Test Njiapanda →</a>
        </div>
        <div className="bio-block"><p>Naijeria Toweett · Founder, Mama Tech · Fractional CTO · Builder of Njiapanda</p></div>
      </div>
    </div>
  )
}