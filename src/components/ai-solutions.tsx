"use client"

 import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

export function AISolutions() {
  return (
    <section id="ai-solutions" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6">
            AI Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We architect and deploy cutting-edge AI and deep learning infrastructure 
            tailored to your business needs. From computer vision to natural language 
            processing, we transform complex challenges into scalable solutions.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Featured Case Study
            </h3>
          </div>

          <div className="bg-muted/30 border border-border rounded-none overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image/Visual Side */}
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <Image
                  src="/ai-solutions/cover.png"
                  alt="Market Anomaly Detection System"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-background">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider border-r border-border pr-4">
                    Financial AI
                  </span>
                  <span className="text-sm text-muted-foreground">
                    2024
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4 leading-tight">
                  Detecting Abnormal Markets: Early Warning Systems
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Machine learning system that detects early warning signs of market instability 
                  by analyzing 43 financial indicators, achieving 90% F1 score with LSTM Autoencoder 
                  and active learning.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="h-4 w-4 text-foreground" />
                      <span className="text-2xl font-semibold text-foreground">90%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">F1 Score</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-foreground" />
                      <span className="text-2xl font-semibold text-foreground">99%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Recall</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-foreground" />
                      <span className="text-2xl font-semibold text-foreground">43</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Indicators</p>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group h-11 px-6 text-sm font-medium rounded-none border-foreground/20 hover:bg-foreground hover:text-background transition-all w-fit"
                >
                  <Link href="/case-studies/market-anomaly-detection">
                    Read Full Case Study
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Our Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-background border border-border rounded-none p-8 md:p-10 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm">
              <h4 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
                Machine Learning
              </h4>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Custom ML models for prediction, classification, and anomaly detection. 
                From traditional algorithms to deep learning architectures.
              </p>
            </div>

            <div className="bg-background border border-border rounded-none p-8 md:p-10 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm">
              <h4 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
                Computer Vision
              </h4>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Image recognition, object detection, and video analysis systems. 
                Deployed at scale with real-time inference capabilities.
              </p>
            </div>

            <div className="bg-background border border-border rounded-none p-8 md:p-10 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm">
              <h4 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
                NLP & LLMs
              </h4>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Natural language processing, sentiment analysis, and large language model 
                integration for intelligent automation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-12 px-6 text-base font-medium rounded-none border-foreground/20 hover:bg-foreground hover:text-background transition-all"
          >
            <Link href="/contact?service=ai-solutions">
              Discuss Your AI Challenge
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
