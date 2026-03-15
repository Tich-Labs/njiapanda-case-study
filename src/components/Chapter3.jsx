export default function Chapter3({ id, active }) {
  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="chapter">Chapter 03</div>
        <h2 className="page-title">What already existed —<br/>and what we <em>learned from it</em></h2>
        <p className="body-text">Shortly after I posted about Njiapanda on International Women's Day 2026, I received a message from a researcher working on this problem locally. They had been there before.</p>
        <p className="body-text">In March 2024, ICON Data and Learning Labs published a pilot study alongside Susan Auma, SRHR and TFGBV Officer — <em>Exploring the Effectiveness of a Collaborative GBV E-Tracking and Reporting Application: A Pilot Study in Nyakach Sub-County, Kenya.</em> The findings were significant.</p>
        <div className="stat-row">
          <div className="stat-card"><div className="stat-num">93.75%</div><div className="stat-label">reported streamlined case reporting and tracking</div></div>
          <div className="stat-card"><div className="stat-num">↑</div><div className="stat-label">Survivors felt more cared for due to timely updates</div></div>
          <div className="stat-card"><div className="stat-num">∅</div><div className="stat-label">Project stalled before scaling despite strong results</div></div>
        </div>
        <div className="pull-quote">
          <p>"Key thing was the need to align with stakeholders — government teams, enforcers, facilities — especially on expectations and also the feeling that we could expose their gaps."</p>
          <cite>GBV Tech Researcher · Kenya · 2026</cite>
        </div>
        <p className="body-text">That single insight reframed everything for me. The challenge was not the technology. It was trust. Government partners feared that a tracking system would reveal what wasn't working in their services.</p>
        <div className="inline-note"><p><strong>The researcher has since offered to help refine Njiapanda for better impact and adoption.</strong> That collaboration is something I am genuinely excited about — because they bring what no amount of building can substitute: the lived experience of what happens after you deploy.</p></div>
      </div>
    </div>
  )
}