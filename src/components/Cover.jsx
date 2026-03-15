export default function Cover({ id, active }) {
  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="cover-badge">IWD 2026 · 24-Hour Build</div>
        <div className="cover-tag">Case Study · Nairobi & Limuru Pilot</div>
        <h1 className="cover-title">Njia<em>panda</em><br/>Paths to<br/><em>Safety</em></h1>
        <p className="cover-sub">Building the layer that was always missing in GBV response — and what we learned from those who tried before us.</p>
        <div className="cover-meta">
          <div><div className="cover-meta-label">Author</div><div className="cover-meta-value">Naijeria Toweett</div></div>
          <div><div className="cover-meta-label">Built</div><div className="cover-meta-value">8 March 2026 · 24 Hours</div></div>
          <div><div className="cover-meta-label">Pilot Region</div><div className="cover-meta-value">Nairobi & Limuru, Kenya</div></div>
          <div><div className="cover-meta-label">Stack</div><div className="cover-meta-value">Lovable · OpenFN · Anthropic · Supabase</div></div>
          <div><div className="cover-meta-label">License</div><div className="cover-meta-value">MIT · Open Source</div></div>
        </div>
      </div>
    </div>
  )
}