import { useState } from 'react';
import { keywords } from '../lib/keywords';

const comingSoonTools = [
  { icon: '🔍', title: 'AI Search', desc: 'Describe what you need' },
  { icon: '🤔', title: 'Should I Buy?', desc: 'Honest advice on products' },
  { icon: '🛒', title: 'Cart Audit', desc: 'Analyze your cart' },
  { icon: '⚖️', title: 'Compare', desc: 'Side-by-side analysis' },
  { icon: '🚫', title: 'Dont Buy', desc: 'We tell you when to skip it' }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Track search event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'search', {
        search_term: searchQuery,
        event_category: 'engagement'
      });
    }
    
    const slug = searchQuery.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    window.location.href = `/${slug}?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', marginBottom: '40px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
            BRUTALLY HONEST • AI-POWERED
          </div>
          
          <h1 style={{ fontSize: '80px', fontWeight: '700', margin: '0 0 24px 0', letterSpacing: '-2px' }}>
            Stop Wasting Money
          </h1>
          
          <p style={{ fontSize: '24px', color: 'rgba(255,255,255,0.6)', margin: '0 auto 40px auto', maxWidth: '600px' }}>
            AI-powered product recommendations you can actually trust
          </p>

          <form onSubmit={handleSearch} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '8px' }}>
              <input 
                type="text" 
                placeholder="Search any product... (gaming headset, winter jacket, etc.)" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', fontSize: '16px', padding: '12px 16px', outline: 'none' }} 
              />
              <button type="submit" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', borderRadius: '12px', color: 'white', padding: '12px 32px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
                Search
              </button>
            </div>
          </form>
        </div>

        <div style={{ marginBottom: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '600', margin: '0 0 16px 0' }}>Popular Right Now</h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>AI-curated recommendations ready to browse</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {keywords.map(kw => (
              <a key={kw.slug} href={`/${kw.slug}`} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '32px', borderRadius: '20px', textDecoration: 'none', color: 'white', transition: 'all 0.3s ease', display: 'block' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>
                  {kw.category === 'tech' ? '💻' : kw.category === 'office' ? '🖊️' : '💪'}
                </div>
                <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{kw.title}</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{kw.description}</div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '600', margin: '0 0 16px 0' }}>More Tools Coming Soon</h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Advanced features in development</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {comingSoonTools.map((tool, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '40px 32px', opacity: 0.6 }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{tool.icon}</div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: '600' }}>{tool.title}</h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>{tool.desc}</p>
                <div style={{ marginTop: '24px', fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: '500', textTransform: 'uppercase' }}>Coming Soon</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '60px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>Built with Claude AI</p>
          <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>We earn from qualifying purchases as an Amazon Associate</p>
        </div>
      </div>
    </div>
  );
}
