export default function Chapter1({ id, active }) {
  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="chapter">Chapter 01</div>
        <h2 className="page-title">It started with a question<br/>I couldn't <em>let go</em></h2>
        <div className="byline">
          <div className="byline-avatar">N</div>
          <div><div className="byline-name">Naijeria Toweett</div><div className="byline-meta">Founder, Mama Tech Limited · Product Engineer · IWD 2026</div></div>
        </div>
        <p className="body-text">International Women's Day is about celebrating women. And what better way to celebrate than to spend it building something for the ones who need it most. Not a post. Not a hashtag. A tool.</p>
        <p className="body-text">I have family and friends who have been there. Who needed help and couldn't find the first step toward it. Watching that — being close to it — taught me something that no amount of product research ever could.</p>
        <div className="pull-quote"><p>It is not enough to have services available. You have to first be able to name what is happening to you.</p></div>
        <p className="body-text">I am a product engineer. I have spent years building digital tools for social impact — SRHR chatbots, learning platforms, community tech. I have sat in rooms with NGOs and health workers asking the question that never quite gets answered:</p>
        <p className="body-text"><em>How do women who need help actually find their way to it? Not after they have decided to leave. Not after they have called the hotline. Before all of that. In the quiet before.</em></p>
        <p className="body-text">I planned Njiapanda the day before International Women's Day. On the 8th of March 2026, I sat down with 24 free hours on Lovable's SheBuilds challenge and built it.</p>
        <div className="tags">
          <span className="tag">#SheBuilds</span>
          <span className="tag">#IWD2026</span>
          <span className="tag">#BuildInPublic</span>
          <span className="tag">#GBVTech</span>
          <span className="tag">#AfricaTech</span>
        </div>
      </div>
    </div>
  )
}