import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, TrendingUp, Shield, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-6">
                Your Credit Score Deserves Better
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Let Credibully fight for your financial future. Professional credit repair services that get results.
              </p>
              <Link href="/sales-funnel">
                <Button size="lg" className="mr-4">Start Your Journey</Button>
              </Link>
              <Link href="/education">
                <Button variant="outline" size="lg">Learn More</Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/logo.png"
                alt="Credibully Mascot"
                width={500}
                height={500}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Credibully?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <BadgeCheck className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Expert Analysis</CardTitle>
                <CardDescription>
                  Professional review of your credit report to identify all negative items.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Fast Results</CardTitle>
                <CardDescription>
                  See improvements in your credit score within the first 45 days.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Legal Protection</CardTitle>
                <CardDescription>
                  All our methods are 100% legal and compliant with federal regulations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Guaranteed Results</CardTitle>
                <CardDescription>
                  Money-back guarantee if we don't deliver on our promises.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Credit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have improved their credit scores with Credibully.
          </p>
          <Link href="/sales-funnel">
            <Button size="lg" variant="secondary">
              Get Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}