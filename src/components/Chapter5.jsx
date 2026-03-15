export default function Chapter5({ id, active }) {
  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="chapter">Chapter 05</div>
        <h2 className="page-title">The key feature —<br/><em>stories & self-identification</em></h2>
        <p className="body-text">Most GBV platforms start at the point where a woman already knows she needs help. Njiapanda starts earlier than that. It starts with a story.</p>
        <div className="pull-quote"><p>A woman reads a story and thinks — <em>that sounds like me.</em> Maybe she reads another. Something shifts. That moment of recognition — quiet, private, on her own terms — is the feature.</p></div>
        <p className="body-text">It is what no hotline, no shelter directory, no reporting form can give her. The ability to see her own situation reflected back at her before she has the words for it.</p>
        <p className="body-text"><strong>That is what separates Njiapanda from everything else that exists.</strong></p>
        <p className="body-text">We have seeded the platform with 15 stories to start — in English and Swahili, covering emotional abuse, financial control, digital surveillance, and coercive control. What we need to know — and what only real women can tell us — is whether reading them creates that moment of recognition. Does she read it and think <em>that sounds like me?</em> Does something shift?</p>
        <p className="body-text">The goal is for real women from the community to contribute their own stories over time. Every submission is moderated before publishing — AI first, then a trained human moderator.</p>
        <h3 className="sub-title">The moderation architecture</h3>
        <div className="lesson-cards">
          <div className="lesson-card">
            <div className="lesson-num">1</div>
            <div className="lesson-content"><h4>AI Moderation Layer</h4><p>Detects graphic content, personal identifiers, or unsafe advice. Flags potentially harmful or off-topic submissions before human review.</p></div>
          </div>
          <div className="lesson-card">
            <div className="lesson-num">2</div>
            <div className="lesson-content"><h4>Human Moderation Layer</h4><p>Trained volunteer moderators confirm AI flags, approve safe content, and ensure stories do not inadvertently expose survivors or responders.</p></div>
          </div>
          <div className="lesson-card">
            <div className="lesson-num">3</div>
            <div className="lesson-content"><h4>Tagging & Categorisation</h4><p>Each story is tagged by abuse type, risk level, and language — making the feed searchable and surfacing the most relevant stories to each visitor.</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}