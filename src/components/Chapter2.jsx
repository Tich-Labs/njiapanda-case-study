export default function Chapter2({ id, active }) {
  return (
    <div className={`page ${active ? 'active' : ''}`} id={id}>
      <div className="page-inner">
        <div className="chapter">Chapter 02</div>
        <h2 className="page-title">The gap nobody<br/>was <em>building for</em></h2>
        <p className="body-text">Most of the services GBV survivors need already exist in Kenya. Shelters. Legal aid. Crisis hotlines. Counselling.</p>
        <p className="body-text">The gap was never the absence of help. It was the distance between a person and the moment they could reach it. And before that distance — there is another one.</p>
        <div className="pull-quote"><p>The moment before you can reach for help is the moment you have to be honest with yourself about what is happening. That is the hardest moment of all.</p></div>
        <p className="body-text">Because abuse does not announce itself. It settles in slowly, quietly, until it starts to feel like your normal. It is that gut feeling you keep pushing down. The nervousness you cannot explain. The discomfort you have learned to move around.</p>
        <p className="body-text">It is hiding a physical mark from your friends. It is carrying an emotional hurt so deep you have stopped knowing how to name it — even to yourself. You do not see it until you look into a mirror and decide to be honest about what is looking back.</p>
        <p className="body-text">Financial control. Emotional manipulation. Phone monitoring. Isolation. For many women these show up as normal relationship problems. They are not.</p>
        <div className="pull-quote"><p>Every GBV platform I looked at started at the point where a woman already knew she needed help. Nobody was building for the moment before that. The moment of recognition. That is the gap Njiapanda is designed to fill.</p></div>
      </div>
    </div>
  )
}