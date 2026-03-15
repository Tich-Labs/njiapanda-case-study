export default function TableOfContents({ id, active, goToPage }) {
  const items = [
    { num: '01', title: 'It Started With a Question I Couldn\'t Let Go' },
    { num: '02', title: 'The Gap Nobody Was Building For' },
    { num: '03', title: 'What Already Existed — and What We Learned' },
    { num: '04', title: 'What We Built and Who We Built It For' },
    { num: '05', title: 'The Key Feature — Stories & Self-Identification' },
    { num: '06', title: 'Technical Architecture & Interoperability' },
    { num: '07', title: 'Lessons from the Nyakach Pilot' },
    { num: '08', title: 'What We Are Building Toward' },
  ]

  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="chapter">Contents</div>
        <h2 className="page-title">What this<br/><em>story covers</em></h2>
        <div className="toc">
          {items.map((item, i) => (
            <div key={i} className="toc-item" onClick={() => goToPage(i + 2)}>
              <div className="toc-left">
                <span className="toc-num">{item.num}</span>
                <span className="toc-title">{item.title}</span>
              </div>
              <span className="toc-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}