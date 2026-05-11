import { generateProducts } from '../lib/generateProducts';
import { keywords } from '../lib/keywords';

export default function ProductPage({ products, keyword }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '80px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <a href="/" style={{ 
            color: 'rgba(255,255,255,0.5)', 
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            ← Back to Home
          </a>
          
          <h1 style={{ 
            fontSize: '56px',
            fontWeight: '700',
            margin: '24px 0 16px 0',
            letterSpacing: '-2px'
          }}>
            {keyword.title}
          </h1>
          
          <p style={{ 
            fontSize: '20px',
            color: 'rgba(255,255,255,0.6)',
            margin: '0 0 12px 0'
          }}>
            {keyword.description}
          </p>

          <div style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)'
          }}>
            AI-Curated • Brutally Honest
          </div>
        </div>

        {/* Products */}
        <div style={{ display: 'grid', gap: '24px' }}>
          {products.map((product, i) => (
            <div 
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '40px',
                position: 'relative'
              }}
            >
              {i === 0 && (
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                  color: '#000',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>
                  ⭐ Best Pick
                </div>
              )}

              <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                marginBottom: '24px'
              }}>
                {keyword.category === 'tech' && '🎧'}
                {keyword.category === 'office' && '🖊️'}
                {keyword.category === 'fitness' && '🧘'}
                {keyword.category === 'search' && '🔍'}
              </div>

              <div style={{ display: 'grid', gap: '20px' }}>
                <div>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    margin: '0 0 8px 0'
                  }}>
                    {product.name}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.5)',
                    margin: 0
                  }}>
                    {product.brand}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#fbbf24' }}>
                    {product.rating}
                  </div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
                    {'⭐'.repeat(Math.floor(product.rating))} ({product.reviews})
                  </div>
                </div>

                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '8px'
                  }}>
                    WHY WE LOVE IT
                  </div>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {product.reason}
                  </p>
                </div>

                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '12px'
                  }}>
                    KEY FEATURES
                  </div>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    {product.highlights.map((highlight, j) => (
                      <div key={j} style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ color: '#10b981' }}>✓</div>
                        <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '12px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255,255,255,0.08)'
                }}>
                  <div style={{ fontSize: '24px', fontWeight: '700' }}>
                    {product.priceRange}
                  </div>
                  
                  <a
                    href={`https://www.amazon.com/s?k=${encodeURIComponent(product.name + ' ' + product.brand)}&tag=curate0f8-20`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #FF9900 0%, #FF6B00 100%)',
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: '700'
                    }}
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '60px',
          padding: '32px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.5)',
            margin: 0
          }}>
            🤖 Recommendations by Claude AI • We earn from qualifying purchases
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, query }) {
  // First, check if it's a predefined keyword
  let keyword = keywords.find(kw => kw.slug === params.slug);
  
  // If not found, create a dynamic keyword from the search query
  if (!keyword) {
    const searchQuery = query?.q || params.slug.replace(/-/g, ' ');
    keyword = {
      slug: params.slug,
      query: searchQuery,
      title: searchQuery.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      description: `AI-curated recommendations for ${searchQuery}`,
      category: 'search'
    };
  }
  
  const products = await generateProducts(keyword.query);
  return { 
    props: { products, keyword }
  };
}
