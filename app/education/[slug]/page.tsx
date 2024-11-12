import { notFound } from 'next/navigation';

const articles = {
  'understanding-credit-score': {
    title: "Understanding Your Credit Score",
    content: `
      <h1>Understanding Your Credit Score</h1>
      <p>Your credit score is a numerical representation of your creditworthiness, typically ranging from 300 to 850. This comprehensive guide will help you understand how credit scores work and what factors influence them.</p>
      
      <h2>What Makes Up Your Credit Score?</h2>
      <ul>
        <li><strong>Payment History (35%)</strong>: Your track record of paying bills on time</li>
        <li><strong>Credit Utilization (30%)</strong>: How much of your available credit you're using</li>
        <li><strong>Length of Credit History (15%)</strong>: How long you've had credit accounts</li>
        <li><strong>Credit Mix (10%)</strong>: The variety of credit accounts you have</li>
        <li><strong>New Credit (10%)</strong>: Recent credit applications and new accounts</li>
      </ul>
      
      <h2>Credit Score Ranges</h2>
      <ul>
        <li>Excellent: 800-850</li>
        <li>Very Good: 740-799</li>
        <li>Good: 670-739</li>
        <li>Fair: 580-669</li>
        <li>Poor: 300-579</li>
      </ul>
    `
  },
  'building-business-credit': {
    title: "Building Business Credit",
    content: `
      <h1>Building Business Credit</h1>
      <p>Establishing strong business credit is crucial for your company's financial health and growth potential. This guide covers the essential steps to build and maintain good business credit.</p>
      
      <h2>Key Steps to Build Business Credit</h2>
      <ol>
        <li>Incorporate your business or form an LLC</li>
        <li>Get a federal tax ID number (EIN)</li>
        <li>Open a business bank account</li>
        <li>Establish credit accounts with suppliers</li>
        <li>Apply for a business credit card</li>
        <li>Monitor your business credit reports</li>
      </ol>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Pay all bills on time or early</li>
        <li>Keep business and personal finances separate</li>
        <li>Maintain low credit utilization</li>
        <li>Work with creditors who report to business credit bureaus</li>
      </ul>
    `
  },
  // Add more articles as needed
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];
  
  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-4xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  );
}