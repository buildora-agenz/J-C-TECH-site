import React from 'react';

const Blog = () => {
  return (
    <section id="blog">
  <div className="container">
    <div className="section-head reveal">
      <div className="eyebrow">From the Blog</div>
      <h2>Weekly Articles on What Actually Moves Engineering Forward</h2>
    </div>
    <div className="blog-grid stagger">
      <div className="blog-card reveal">
        <div className="blog-thumb"><span className="blog-tag">AI</span></div>
        <div className="blog-body">
          <h4>How AI Is Changing Drawing Search on the Shop Floor</h4>
          <p>A practical look at why search, not automation, is AI's first real win in manufacturing.</p>
          <span className="blog-read is-soon">Publishing soon</span>
        </div>
      </div>
      <div className="blog-card reveal">
        <div className="blog-thumb"><span className="blog-tag">EV</span></div>
        <div className="blog-body">
          <h4>Battery Management Systems, Explained for Design Engineers</h4>
          <p>What every mechanical engineer should know before their first EV project.</p>
          <span className="blog-read is-soon">Publishing soon</span>
        </div>
      </div>
      <div className="blog-card reveal">
        <div className="blog-thumb"><span className="blog-tag">CAD</span></div>
        <div className="blog-body">
          <h4>GD&amp;T Mistakes That Cost Manufacturers the Most</h4>
          <p>The tolerancing errors we see repeated across every industry we consult for.</p>
          <span className="blog-read is-soon">Publishing soon</span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Blog;
