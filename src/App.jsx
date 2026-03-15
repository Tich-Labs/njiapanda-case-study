import { useState, useEffect, useCallback } from 'react'
import Cover from './components/Cover'
import TableOfContents from './components/TableOfContents'
import Chapter1 from './components/Chapter1'
import Chapter2 from './components/Chapter2'
import Chapter3 from './components/Chapter3'
import Chapter4 from './components/Chapter4'
import Chapter5 from './components/Chapter5'
import Chapter6 from './components/Chapter6'
import Chapter7 from './components/Chapter7'
import Chapter8 from './components/Chapter8'

const TOTAL = 10

export default function App() {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState(0)

  const updateUI = useCallback(() => {
    document.getElementById('progress-bar').style.width = `${(current / (TOTAL - 1)) * 100}%`
    document.getElementById('current-page').textContent = current + 1
    const btnPrev = document.getElementById('btn-prev')
    const btnNext = document.getElementById('btn-next')
    if (btnPrev) btnPrev.disabled = current === 0
    if (btnNext) {
      btnNext.disabled = current === TOTAL - 1
      btnNext.textContent = current === TOTAL - 1 ? 'Done ✓' : 'Next →'
    }
    const dotsContainer = document.getElementById('dots')
    if (dotsContainer) {
      dotsContainer.innerHTML = ''
      for (let i = 0; i < TOTAL; i++) {
        const dot = document.createElement('div')
        dot.className = 'dot' + (i === current ? ' active' : '')
        dot.onclick = () => goToPage(i)
        dotsContainer.appendChild(dot)
      }
    }
  }, [current])

  useEffect(() => {
    updateUI()
  }, [updateUI])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextPage()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevPage()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [current])

  const goToPage = (n) => {
    if (n === current) return
    const oldPage = document.getElementById(`page-${current}`)
    const newPage = document.getElementById(`page-${n}`)
    if (oldPage) {
      oldPage.classList.remove('active')
      oldPage.classList.add('exit-up')
      setTimeout(() => {
        oldPage.classList.remove('exit-up')
        oldPage.scrollTop = 0
      }, 500)
    }
    if (newPage) {
      newPage.scrollTop = 0
      setTimeout(() => {
        newPage.classList.add('active')
      }, 50)
    }
    setCurrent(n)
  }

  const nextPage = () => {
    if (current < TOTAL - 1) goToPage(current + 1)
  }

  const prevPage = () => {
    if (current > 0) goToPage(current - 1)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextPage() : prevPage()
    }
  }

  return (
    <>
      <div id="progress-bar" style={{ width: '0%' }} />

      <nav id="top-nav">
        <div className="nav-brand">Njia<span>panda</span></div>
        <div className="nav-label">Case Study · 2026</div>
        <div id="page-counter">
          <span id="current-page">1</span> / <span id="total-pages">{TOTAL}</span>
        </div>
      </nav>

      <div id="pages" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <Cover id="page-0" active={current === 0} />
        <TableOfContents id="page-1" active={current === 1} goToPage={goToPage} />
        <Chapter1 id="page-2" active={current === 2} />
        <Chapter2 id="page-3" active={current === 3} />
        <Chapter3 id="page-4" active={current === 4} />
        <Chapter4 id="page-5" active={current === 5} />
        <Chapter5 id="page-6" active={current === 6} />
        <Chapter6 id="page-7" active={current === 7} />
        <Chapter7 id="page-8" active={current === 8} />
        <Chapter8 id="page-9" active={current === 9} />
      </div>

      <nav id="bottom-nav">
        <button className="nav-btn" id="btn-prev" onClick={prevPage} disabled={current === 0}>
          ← Prev
        </button>
        <div id="dots"></div>
        <button className="nav-btn primary" id="btn-next" onClick={nextPage} disabled={current === TOTAL - 1}>
          Next →
        </button>
      </nav>
    </>
  )
}