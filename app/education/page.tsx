import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const articles = [
  {
    title: "Understanding Your Credit Score",
    description: "Learn about the factors that influence your credit score and how they're weighted.",
    slug: "understanding-credit-score",
    category: "Personal Credit"
  },
  {
    title: "Building Business Credit",
    description: "A comprehensive guide to establishing and building strong business credit.",
    slug: "building-business-credit",
    category: "Business Credit"
  },
  {
    title: "Credit Repair Basics",
    description: "Essential information about the credit repair process and what to expect.",
    slug: "credit-repair-basics",
    category: "Credit Repair"
  },
  {
    title: "Disputing Credit Report Errors",
    description: "Step-by-step guide to identifying and disputing errors on your credit report.",
    slug: "disputing-errors",
    category: "Credit Repair"
  },
  {
    title: "Maintaining Good Credit",
    description: "Tips and strategies for maintaining a healthy credit score long-term.",
    slug: "maintaining-good-credit",
    category: "Personal Credit"
  },
  {
    title: "Business Credit Cards",
    description: "How to leverage business credit cards to build your company's credit profile.",
    slug: "business-credit-cards",
    category: "Business Credit"
  }
];

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Credit Education Center</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        Explore our comprehensive library of credit education resources to better understand credit repair and improvement strategies.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link href={`/education/${article.slug}`} key={article.slug}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-sm text-primary mb-2">{article.category}</div>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}