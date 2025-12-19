"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight, TrendingUp, Clock, Users, CheckCircle2 } from "lucide-react"

export default function FintechAICaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Link 
            href="/#ai-solutions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to AI Solutions
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider border-r border-border pr-4">
                  Fintech
                </span>
                <span className="text-sm text-muted-foreground">
                  2024
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6 leading-tight">
                AI-Powered Risk Assessment for Fintech Platform
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Implementing advanced machine learning models to transform credit risk evaluation 
                and fraud detection, reducing processing time by 85% while improving accuracy.
              </p>
            </div>

            <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-none overflow-hidden border border-border">
              {/* Placeholder for main case study image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm text-muted-foreground mb-2">Featured Image</p>
                  <p className="text-xs text-muted-foreground/60">
                    Add hero image from PDF here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-foreground" />
                <span className="text-3xl md:text-4xl font-semibold text-foreground">85%</span>
              </div>
              <p className="text-sm text-muted-foreground">Faster Processing</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-foreground" />
                <span className="text-3xl md:text-4xl font-semibold text-foreground">94%</span>
              </div>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-foreground" />
                <span className="text-3xl md:text-4xl font-semibold text-foreground">6mo</span>
              </div>
              <p className="text-sm text-muted-foreground">Implementation</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-foreground" />
                <span className="text-3xl md:text-4xl font-semibold text-foreground">50K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Users Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                The Challenge
              </h2>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 leading-tight">
                Manual processes limiting growth and accuracy
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A rapidly growing fintech platform was struggling with manual credit risk assessment 
                processes that created bottlenecks in their loan approval pipeline. The existing system 
                relied heavily on traditional scoring models and human review, resulting in:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Slow processing times:</strong> Average 3-5 days 
                    for loan application reviews, leading to customer drop-off
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Limited scalability:</strong> Manual review capacity 
                    couldn&apos;t keep pace with 300% year-over-year growth
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Inconsistent decisions:</strong> Human bias and 
                    varying interpretation of risk factors led to approval rate variance
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Rising fraud rates:</strong> Traditional rule-based 
                    systems missing sophisticated fraud patterns
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Challenge Visualization */}
          <div className="mt-16 p-8 md:p-12 bg-muted/30 border border-border rounded-none">
            <div className="aspect-[16/9] bg-background border border-border/50 rounded-none flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-sm text-muted-foreground mb-2">Process Flow Diagram</p>
                <p className="text-xs text-muted-foreground/60">
                  Add &quot;before&quot; process diagram from PDF
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Our Solution
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              End-to-end AI infrastructure for intelligent risk assessment
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              We designed and deployed a comprehensive machine learning pipeline that automated 
              credit risk evaluation while maintaining regulatory compliance and explainability.
            </p>
          </div>

          {/* Implementation Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-background border border-border rounded-none p-8 md:p-10">
              <div className="w-12 h-12 rounded-none bg-foreground flex items-center justify-center mb-6">
                <span className="text-xl font-semibold text-background">1</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Data Infrastructure & Feature Engineering
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built a robust data pipeline integrating multiple sources including credit bureaus, 
                transaction history, and alternative data sources. Engineered 200+ features capturing 
                behavioral patterns and risk indicators.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Real-time data ingestion and validation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Automated feature selection and importance ranking
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  GDPR-compliant data handling
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-none p-8 md:p-10">
              <div className="w-12 h-12 rounded-none bg-foreground flex items-center justify-center mb-6">
                <span className="text-xl font-semibold text-background">2</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                ML Model Development
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Developed ensemble models combining gradient boosting and neural networks, 
                optimized for both accuracy and interpretability to meet regulatory requirements.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  XGBoost for primary risk scoring
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Deep learning for fraud detection
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  SHAP values for model explainability
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-none p-8 md:p-10">
              <div className="w-12 h-12 rounded-none bg-foreground flex items-center justify-center mb-6">
                <span className="text-xl font-semibold text-background">3</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Production Deployment
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implemented scalable inference infrastructure with sub-100ms latency, 
                comprehensive monitoring, and automated retraining pipelines.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Kubernetes-based model serving
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  A/B testing framework for model updates
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Real-time performance monitoring
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-none p-8 md:p-10">
              <div className="w-12 h-12 rounded-none bg-foreground flex items-center justify-center mb-6">
                <span className="text-xl font-semibold text-background">4</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Integration & Training
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Seamlessly integrated with existing loan origination system and trained 
                risk analysts on the new AI-assisted workflow.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  RESTful API integration
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Human-in-the-loop review interface
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Comprehensive team training program
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Architecture Diagram */}
          <div className="p-8 md:p-12 bg-background border border-border rounded-none">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Technical Architecture
            </h4>
            <div className="aspect-[16/9] bg-muted/30 border border-border/50 rounded-none flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-sm text-muted-foreground mb-2">Architecture Diagram</p>
                <p className="text-xs text-muted-foreground/60">
                  Add technical architecture diagram from PDF
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Results & Impact
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              Transformative improvements across all key metrics
            </h3>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-muted/30 border border-border rounded-none p-8">
              <div className="text-5xl font-semibold text-foreground mb-2">85%</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Faster Processing
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Reduced average loan application review time from 3-5 days to under 2 hours, 
                dramatically improving customer experience and conversion rates.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-none p-8">
              <div className="text-5xl font-semibold text-foreground mb-2">94%</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Prediction Accuracy
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Achieved 94% accuracy in default prediction, outperforming traditional 
                credit scoring models by 12 percentage points.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-none p-8">
              <div className="text-5xl font-semibold text-foreground mb-2">67%</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Fraud Reduction
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Decreased fraudulent applications by 67% through advanced pattern 
                recognition and anomaly detection algorithms.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-none p-8">
              <div className="text-5xl font-semibold text-foreground mb-2">5x</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Throughput Increase
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Enabled the team to process 5x more applications with the same headcount, 
                supporting aggressive growth targets.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-none p-8">
              <div className="text-5xl font-semibold text-foreground mb-2">€2.4M</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Annual Savings
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Reduced operational costs through automation and improved risk assessment, 
                delivering strong ROI within 8 months.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-none p-8">
              <div className="text-5xl font-semibold text-foreground mb-2">98%</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Compliance Rate
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Maintained full regulatory compliance with explainable AI providing 
                clear rationale for every decision.
              </p>
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background border border-border rounded-none p-8">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Processing Time Comparison
              </h4>
              <div className="aspect-[16/9] bg-muted/30 border border-border/50 rounded-none flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm text-muted-foreground mb-2">Before/After Chart</p>
                  <p className="text-xs text-muted-foreground/60">
                    Add processing time graph from PDF
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-none p-8">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Accuracy Improvement Over Time
              </h4>
              <div className="aspect-[16/9] bg-muted/30 border border-border/50 rounded-none flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm text-muted-foreground mb-2">Performance Graph</p>
                  <p className="text-xs text-muted-foreground/60">
                    Add accuracy trend graph from PDF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                Key Takeaways
              </h2>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 leading-tight">
                Lessons learned and best practices
              </h3>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  1. Explainability is Non-Negotiable
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  In regulated industries like fintech, model interpretability isn&apos;t optional. 
                  We invested heavily in SHAP values and decision trees to ensure every prediction 
                  could be explained to regulators and customers.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  2. Start with Strong Data Foundations
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  60% of our implementation time was spent on data infrastructure and feature 
                  engineering. This upfront investment paid dividends in model performance and 
                  maintainability.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  3. Human-in-the-Loop Drives Adoption
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Rather than replacing risk analysts, we augmented their capabilities. This 
                  approach reduced resistance to change and captured valuable domain expertise 
                  for continuous model improvement.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  4. Monitor Everything in Production
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive monitoring of model performance, data drift, and business metrics 
                  allowed us to catch and address issues before they impacted customers. We 
                  implemented automated alerts for any deviation from expected behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6">
              Ready to transform your business with AI?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Let&apos;s discuss how we can build custom AI solutions tailored to your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base font-medium rounded-none bg-foreground text-background hover:bg-foreground/90 transition-all"
              >
                <Link href="/contact?service=ai-solutions">
                  Discuss Your Project
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base font-medium rounded-none border-foreground/20 hover:bg-foreground hover:text-background transition-all"
              >
                <Link href="/#ai-solutions">
                  View More Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
