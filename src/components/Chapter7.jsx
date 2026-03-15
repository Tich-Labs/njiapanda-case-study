export default function Chapter7({ id, active }) {
  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="chapter">Chapter 07</div>
        <h2 className="page-title">Lessons from<br/>the <em>Nyakach pilot</em></h2>
        <p className="body-text">The ICON Data and Learning Labs study offers three lessons that directly shape how Njiapanda is being developed.</p>
        <div className="lesson-cards">
          <div className="lesson-card">
            <div className="lesson-num">1</div>
            <div className="lesson-content"><h4>Technology is not the barrier — trust is</h4><p>The Nyakach application worked technically. What stalled it was stakeholder alignment. Government partners needed to understand what the tool was for and feel safe participating in it. Njiapanda positions itself as an awareness and connection layer — not a tracking tool that implies accountability or exposure.</p></div>
          </div>
          <div className="lesson-card">
            <div className="lesson-num">2</div>
            <div className="lesson-content"><h4>Survivor experience drives adoption</h4><p>93.75% of respondents reported that survivors felt more cared for due to timely updates. This confirms the core hypothesis behind Njiapanda — that feeling seen, heard, and responded to quickly is what builds trust and drives use. The stories module is designed to create that feeling before a survivor ever submits a signal.</p></div>
          </div>
          <div className="lesson-card">
            <div className="lesson-num">3</div>
            <div className="lesson-content"><h4>Integration must be built in from the start</h4><p>The Nyakach study noted that staff sought improvements to allow integration with other GBV pathways — this was an afterthought. For Njiapanda, OpenFN integration is not a future feature. It is foundational architecture. The platform is designed to plug into the ecosystem from day one.</p></div>
          </div>
        </div>
        <div className="pull-quote">
          <p>"Willing to help refine what you have for better impact and adoption."</p>
          <cite>GBV Tech Researcher · Kenya · on reaching out after seeing Njiapanda on LinkedIn</cite>
        </div>
        <p className="body-text">That message — from someone working on this problem locally, who tried it, who learned the hard lessons and still wants to help — is one of the most meaningful things that has happened since the build. I am looking forward to exploring that connection further.</p>
      </div>
    </div>
  )
}