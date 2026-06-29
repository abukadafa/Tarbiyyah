import React, { useState } from 'react';

const impactMap = {
  20: 'Provides a full set of school books and writing slates for one student for a term.',
  50: 'Covers a month of stationery, uniforms, and learning materials for two students.',
  100: 'Funds a month of stipend support for one rural teacher.',
  200: 'Supports a rural teacher’s salary and training for a full term.',
  500: 'Covers materials for one bay of a new classroom block.',
  1000: 'Sponsors the construction of a full classroom from foundation to roof.'
};

export default function Donate() {
  const [frequency, setFrequency] = useState('once');
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [customAmount, setCustomAmount] = useState('');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [gateway, setGateway] = useState('Paystack');
  const [statusHtml, setStatusHtml] = useState(null);

  const tiers = [
    { amount: 20, label: 'A term of books' },
    { amount: 50, label: 'Stationery & uniforms' },
    { amount: 100, label: 'A teacher\'s monthly stipend' },
    { amount: 200, label: 'A teacher, for a term' },
    { amount: 500, label: 'One classroom bay' },
    { amount: 1000, label: 'A full classroom build' },
  ];

  const handleTierClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom amount if selecting a preset tier
    setStatusHtml(null);
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setSelectedAmount(parsed);
    } else {
      setSelectedAmount(0);
    }
    setStatusHtml(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseInt(customAmount, 10) : selectedAmount;
    if (isNaN(finalAmount) || finalAmount <= 0) {
      alert('Please select or enter a valid donation amount.');
      return;
    }
    const donorName = name || 'friend';
    setStatusHtml({
      name: donorName,
      amount: finalAmount,
      frequency: frequency === 'monthly' ? 'monthly' : 'one-time'
    });
    
    // Smooth scroll down to the status element
    setTimeout(() => {
      const statusEl = document.getElementById('donateStatus');
      if (statusEl) {
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const currentImpactText = impactMap[selectedAmount] || 'Every gift, of any size, moves a child or teacher closer to opportunity.';

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ maxWidth: '680px' }} data-reveal>
          <p className="eyebrow">Donate</p>
          <h1>Put your gift exactly where it's needed.</h1>
          <p className="lede" style={{ color: 'rgba(250,246,238,0.78)' }}>Choose an amount below and see precisely what it funds — from a student's books to a full classroom build.</p>
        </div>
      </section>

      {/* DONATION INTERFACE */}
      <section className="section">
        <div className="wrap donate-layout">

          {/* LEFT: tiers + form */}
          <div data-reveal>
            <div className="freq-toggle">
              <button 
                data-freq="once" 
                className={frequency === 'once' ? 'is-active' : ''} 
                type="button"
                onClick={() => { setFrequency('once'); setStatusHtml(null); }}
              >
                Give once
              </button>
              <button 
                data-freq="monthly" 
                className={frequency === 'monthly' ? 'is-active' : ''} 
                type="button"
                onClick={() => { setFrequency('monthly'); setStatusHtml(null); }}
              >
                Give monthly
              </button>
            </div>

            <div className="tier-grid">
              {tiers.map((tier) => (
                <button 
                  key={tier.amount}
                  className={`tier-card ${selectedAmount === tier.amount && !customAmount ? 'is-selected' : ''}`} 
                  type="button"
                  onClick={() => handleTierClick(tier.amount)}
                >
                  <span className="tier-amount">${tier.amount.toLocaleString()}</span>
                  <span className="tier-label">{tier.label}</span>
                </button>
              ))}
            </div>

            <div className="custom-amount-row">
              <label htmlFor="customAmount">Or enter a custom amount (USD)</label>
              <div className="custom-input-wrap">
                <span>$</span>
                <input 
                  type="number" 
                  id="customAmount" 
                  min="1" 
                  placeholder="150"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </div>
            </div>

            <div className="impact-note" id="impactNote">
              {currentImpactText}
            </div>

            <form id="donateForm" className="donor-form" onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: '18px' }}>Your details</h3>
              <div className="form-row">
                <label htmlFor="donorName">Full name</label>
                <input 
                  type="text" 
                  id="donorName" 
                  required 
                  placeholder="Amina Ismail"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-row">
                <label htmlFor="donorEmail">Email address</label>
                <input 
                  type="email" 
                  id="donorEmail" 
                  required 
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-row">
                <label htmlFor="donorCountry">Country</label>
                <select 
                  id="donorCountry" 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option>Nigeria</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="gateway-box">
                <p className="eyebrow" style={{ marginBottom: '10px' }}>Payment method</p>
                <div className="gateway-options">
                  <label className="gateway-pill">
                    <input 
                      type="radio" 
                      name="gateway" 
                      checked={gateway === 'Paystack'} 
                      onChange={() => setGateway('Paystack')}
                    /> Paystack
                  </label>
                  <label className="gateway-pill">
                    <input 
                      type="radio" 
                      name="gateway" 
                      checked={gateway === 'Flutterwave'} 
                      onChange={() => setGateway('Flutterwave')}
                    /> Flutterwave
                  </label>
                  <label className="gateway-pill">
                    <input 
                      type="radio" 
                      name="gateway" 
                      checked={gateway === 'Card / Bank transfer'} 
                      onChange={() => setGateway('Card / Bank transfer')}
                    /> Card / Bank transfer
                  </label>
                </div>
                <p className="gateway-note">🔒 Payments are processed securely. This demo connects to your Paystack or Flutterwave merchant account at checkout.</p>
              </div>

              <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '8px' }}>
                Give ${(selectedAmount || 0).toLocaleString()} securely →
              </button>
              
              {statusHtml && (
                <p id="donateStatus" className="donate-status">
                  <strong>Thank you, {statusHtml.name}.</strong> This is a demo form — connect Paystack or Flutterwave here to process a real {statusHtml.frequency} gift of ${statusHtml.amount.toLocaleString()}.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT: trust / sidebar */}
          <aside className="donate-sidebar" data-reveal>
            <div className="sidebar-card">
              <h3>Where your money goes</h3>
              <div className="alloc-bar">
                <span style={{ width: '62%', background: 'var(--green)' }} title="Programs 62%"></span>
                <span style={{ width: '24%', background: 'var(--gold)' }} title="Infrastructure 24%"></span>
                <span style={{ width: '14%', background: 'var(--sage)' }} title="Operations 14%"></span>
              </div>
              <ul className="alloc-key">
                <li><i style={{ background: 'var(--green)' }}></i>62% — Direct programs &amp; stipends</li>
                <li><i style={{ background: 'var(--gold)' }}></i>24% — Infrastructure &amp; materials</li>
                <li><i style={{ background: 'var(--sage)' }}></i>14% — Operations &amp; monitoring</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h3>Secure &amp; transparent</h3>
              <ul className="trust-list">
                <li>Registered Nigerian non-profit</li>
                <li>Bank-grade payment encryption</li>
                <li>Annual project impact reports</li>
              </ul>
            </div>
            <div className="sidebar-quote">
              <p>"The stipend meant I could stop taking extra unpaid work and just teach."</p>
              <span>— A supported rural teacher, Kano State</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
