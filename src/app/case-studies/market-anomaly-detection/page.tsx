"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight, TrendingUp, AlertTriangle, CheckCircle2, BarChart3 } from "lucide-react"

export default function MarketAnomalyDetectionCaseStudy() {
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
                  Financial AI
                </span>
                <span className="text-sm text-muted-foreground">
                  2024
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6 leading-tight">
                Detecting Abnormal Markets: Early Warning Systems
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A machine learning system that detects early warning signs of market instability by 
                analyzing 43 financial indicators and categorizing anomalies as Risk-on or Risk-off signals.
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span className="px-3 py-1 bg-background border border-border rounded-none">LSTM Autoencoder</span>
                <span className="px-3 py-1 bg-background border border-border rounded-none">Active Learning</span>
                <span className="px-3 py-1 bg-background border border-border rounded-none">Anomaly Detection</span>
              </div>
            </div>

            <div className="relative aspect-[18/10] rounded-none overflow-hidden border border-border">
              <Image
                src="/ai-solutions/cover.png"
                alt="Market Anomaly Detection System"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-foreground" />
                <span className="text-3xl md:text-4xl font-semibold text-foreground">90%</span>
              </div>
              <p className="text-sm text-muted-foreground">F1 Score</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-foreground" />
                <span className="text-3xl md:text-4xl font-semibold text-foreground">99%</span>
              </div>
              <p className="text-sm text-muted-foreground">Recall Rate</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-5 w-5 text-foreground" />
                <span className="text-3xl md:text-4xl font-semibold text-foreground">43</span>
              </div>
              <p className="text-sm text-muted-foreground">Indicators</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-foreground" />
                <span className="text-3xl md:text-4xl font-semibold text-foreground">118/119</span>
              </div>
              <p className="text-sm text-muted-foreground">Anomalies Detected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                Problem & Solution
              </h2>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 leading-tight">
                Early detection of market instability
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Market anomalies are rare but critical events. Traditional monitoring systems 
                    often fail to detect early warning signs, leading to significant financial losses. 
                    The challenge lies in identifying these rare events within highly imbalanced datasets 
                    where normal observations vastly outnumber anomalies.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    The Objective
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Build an automated early warning system that detects market instability in real-time, 
                    rather than attempting long-term crisis prediction. The system needed to analyze 
                    multiple financial indicators simultaneously and categorize anomalies by their 
                    risk profile.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Dataset Characteristics
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">43 financial indicators</strong> spanning 
                        bonds, equity indices, and currencies
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Highly imbalanced</strong> with few anomalies 
                        among many normal observations
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Temporal dependencies</strong> requiring 
                        sequential pattern recognition
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 my-auto">
              {/* Financial Indicators Breakdown */}
              <div className="bg-muted/30 border border-border rounded-none p-8">
                <h4 className="text-lg font-semibold text-foreground mb-6">
                  43 Financial Indicators by Category
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Equity Indices</span>
                      <span className="text-sm text-muted-foreground">High Risk</span>
                    </div>
                    <div className="h-2 bg-background rounded-none overflow-hidden">
                      <div className="h-full bg-foreground" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Bond Yields</span>
                      <span className="text-sm text-muted-foreground">High Risk</span>
                    </div>
                    <div className="h-2 bg-background rounded-none overflow-hidden">
                      <div className="h-full bg-foreground" style={{ width: '78%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Currency Pairs</span>
                      <span className="text-sm text-muted-foreground">High Risk</span>
                    </div>
                    <div className="h-2 bg-background rounded-none overflow-hidden">
                      <div className="h-full bg-foreground" style={{ width: '72%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Classification */}
              <div className="bg-background border border-border rounded-none p-8">
                <h4 className="text-lg font-semibold text-foreground mb-6">
                  Anomaly Classification
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/30 border border-border rounded-none">
                    <div className="text-2xl font-semibold text-foreground mb-1">Risk-On</div>
                    <p className="text-xs text-muted-foreground">Bullish market signals</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 border border-border rounded-none">
                    <div className="text-2xl font-semibold text-foreground mb-1">Risk-Off</div>
                    <p className="text-xs text-muted-foreground">Bearish market signals</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 43 Indicators Chart */}
              <div className="bg-background border border-border rounded-none p-8 md:p-10">
                <h4 className="text-xl font-semibold text-foreground mb-6">
                  43 Financial Indicators Distribution
                </h4>
                <div className="relative aspect-[4/3] bg-muted/10 rounded-none overflow-hidden">
                  <Image
                    src="/ai-solutions/indicators.png"
                    alt="43 Financial Indicators Distribution"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Anomaly Heatmap */}
              <div className="bg-background border border-border rounded-none p-8 md:p-10">
                <h4 className="text-xl font-semibold text-foreground mb-6">
                  Anomaly Heatmap by Group Over Time
                </h4>
                <div className="relative aspect-[16/9] bg-muted/10 rounded-none overflow-hidden">
                  <Image
                    src="/ai-solutions/heatmap.png"
                    alt="Anomaly Detection Heatmap by Group Over Time"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Methodology
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              Data preprocessing and anomaly detection approach
            </h3>
          </div>

          {/* Preprocessing Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-background border border-border rounded-none p-8">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-6">
                <span className="text-sm font-semibold text-background">1</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Data Preprocessing
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Stationarity transformation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Temporal splitting (80/10/10)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Standardization (mean/std)
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-none p-8">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-6">
                <span className="text-sm font-semibold text-background">2</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Anomaly Detection
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Deviation from mean/std
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Risk-on/off categorization
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  3-day lookback window
                </li>
              </ul>
            </div>

            <div className="bg-background border border-border rounded-none p-8">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-6">
                <span className="text-sm font-semibold text-background">3</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Risk Group Analysis
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Equity Index (Highest)
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Bond Yield (High)
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  Currency (High)
                </li>
              </ul>
            </div>
          </div>

          {/* Random Forest PCA Visualization */}
          <div className="bg-background border border-border rounded-none p-8 md:p-12">
            <h4 className="text-xl font-semibold text-foreground mb-8 text-center">
              Random Forest PCA Projection for Supervised Learning
            </h4>
            <div className="relative aspect-[16/9] bg-muted/10 rounded-none overflow-hidden">
              <Image
                src="/ai-solutions/random-forest.png"
                alt="Random Forest PCA Projection"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Model Performance
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              Comprehensive comparison across 8 machine learning approaches
            </h3>
          </div>

          {/* Performance Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted/30">
                  <th className="border border-border p-4 text-left text-sm font-semibold text-foreground">Model</th>
                  <th className="border border-border p-4 text-center text-sm font-semibold text-foreground">Precision</th>
                  <th className="border border-border p-4 text-center text-sm font-semibold text-foreground">Recall</th>
                  <th className="border border-border p-4 text-center text-sm font-semibold text-foreground">F1 Score</th>
                </tr>
              </thead>
              <tbody className="bg-background">
                <tr className="bg-foreground/5 border-2 border-foreground">
                  <td className="border border-border p-4 font-semibold text-foreground">
                    LSTM Autoencoder + Active Learning
                  </td>
                  <td className="border border-border p-4 text-center font-semibold text-foreground">0.8252</td>
                  <td className="border border-border p-4 text-center font-semibold text-foreground">0.9916</td>
                  <td className="border border-border p-4 text-center font-semibold text-foreground">0.9008</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">Ensemble (AE + XGBoost + LOF)</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.7426</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.8487</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.7922</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">XGBoost</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.7661</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.7983</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.7819</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">Multivariate Gaussian</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.6031</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.9832</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.7476</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">COPOD</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.6692</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.7479</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.7063</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">LSTM</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.6960</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.5520</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.6150</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">Optimized Random Forest</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.9444</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.2857</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.4387</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">Random Forest</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">1.0000</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.0252</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">0.0492</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Confusion Matrix */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-background border border-border rounded-none p-8 md:p-12">
              <h4 className="text-xl font-semibold text-foreground mb-8 text-center">
                Confusion Matrix - LSTM Autoencoder
              </h4>
              <div className="relative aspect-square bg-background rounded-none overflow-hidden">
                <Image
                  src="/ai-solutions/conusion-matrix.png"
                  alt="LSTM Autoencoder Confusion Matrix"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winning Model Deep-Dive */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Winning Model
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              LSTM Autoencoder with Active Learning
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              The champion model achieved 90% F1 score and detected 118 out of 119 anomalies 
              in the test set through innovative semi-supervised learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Architecture Details
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Stacked LSTM layers</strong> with hidden size 64 
                      for capturing temporal dependencies
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Latent dimension 8</strong> for compressed 
                      representation learning
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Dropout & batch normalization</strong> to prevent 
                      overfitting on limited anomaly samples
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">3-day lookback window</strong> captures immediate 
                      market momentum while filtering noise
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Key Innovation: Active Learning
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The model employs a semi-supervised active learning approach that iteratively 
                  selects high-error sequences as pseudo-anomalies. This technique effectively 
                  addresses the challenge of limited labeled anomaly data.
                </p>
                <div className="bg-background border border-border rounded-none p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Process:</strong> The autoencoder identifies 
                    sequences with high reconstruction error, treats them as potential anomalies, 
                    and retrains iteratively. This bootstrapping approach significantly improved 
                    recall without sacrificing precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-auto">
              {/* Performance Metrics */}
              <div className="bg-background border border-border rounded-none p-8 md:p-10">
                <h4 className="text-xl font-semibold text-foreground mb-8">
                  Final Performance Metrics
                </h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base font-medium text-foreground">Precision</span>
                      <span className="text-2xl font-semibold text-foreground">82.52%</span>
                    </div>
                    <div className="h-3 bg-muted/30 rounded-none overflow-hidden">
                      <div className="h-full bg-foreground transition-all duration-500" style={{ width: '82.52%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base font-medium text-foreground">Recall</span>
                      <span className="text-2xl font-semibold text-foreground">99.16%</span>
                    </div>
                    <div className="h-3 bg-muted/30 rounded-none overflow-hidden">
                      <div className="h-full bg-foreground transition-all duration-500" style={{ width: '99.16%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base font-medium text-foreground">F1 Score</span>
                      <span className="text-2xl font-semibold text-foreground">90.08%</span>
                    </div>
                    <div className="h-3 bg-muted/30 rounded-none overflow-hidden">
                      <div className="h-full bg-foreground transition-all duration-500" style={{ width: '90.08%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights & Limitations */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                Key Insights
              </h2>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-8 leading-tight">
                Why LSTM Autoencoder won
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Temporal Patterns Are Crucial
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Financial markets exhibit strong sequential dependencies. LSTMs excel at capturing 
                    these temporal patterns, making them ideal for detecting anomalies that unfold 
                    over time rather than appearing as isolated events.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Active Learning Overcomes Data Scarcity
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    With only ~119 anomalies in the test set—far below what neural networks typically 
                    require—active learning proved essential. By iteratively identifying and learning 
                    from high-error sequences, the model effectively expanded its training data.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Random Forest Severely Overfitted
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Despite achieving 100% precision, Random Forest&apos;s recall of only 2.52% revealed 
                    severe overfitting. The model memorized training anomalies but failed to generalize, 
                    highlighting the importance of temporal modeling in this domain.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Ensemble Underperformed
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Surprisingly, the ensemble (AE + XGBoost + LOF) achieved lower F1 score (79.22%) 
                    than the standalone LSTM Autoencoder (90.08%). This suggests that combining models 
                    with different strengths can sometimes dilute the best performer.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                Limitations & Challenges
              </h2>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-8 leading-tight">
                Trade-offs and constraints
              </h3>
              
              <div className="space-y-6">
                <div className="bg-muted/30 border border-border rounded-none p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    The Interpretability Problem
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    While LSTM Autoencoder achieved the best performance, it operates as a &quot;black box.&quot; 
                    Finance professionals need to understand why a model flags specific market conditions 
                    as anomalous, which is challenging with deep learning architectures.
                  </p>
                </div>

                <div className="bg-muted/30 border border-border rounded-none p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Limited Anomaly Samples
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The dataset contained only ~119 anomalies in the test set. Neural networks typically 
                    require thousands of examples to learn robust patterns. Active learning helped but 
                    doesn&apos;t fully compensate for fundamental data scarcity.
                  </p>
                </div>

                <div className="bg-muted/30 border border-border rounded-none p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Computational Requirements
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    LSTM Autoencoders require significantly more computational resources for training 
                    and inference compared to traditional methods like Multivariate Gaussian. This 
                    impacts real-time deployment costs.
                  </p>
                </div>

                <div className="bg-muted/30 border border-border rounded-none p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Window Size Sensitivity
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The 3-day lookback window was optimal for this dataset, but different market 
                    conditions or asset classes might require different window sizes. The model 
                    needs retuning when applied to new contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Improvements */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Future Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
              Recommendations for next iterations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-none p-8 md:p-10">
              <div className="w-12 h-12 rounded-none bg-foreground flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-background" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Ensemble with Bootstrapping
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Extend the ensemble approach with bootstrapping techniques on larger datasets. 
                This could capture diverse anomaly patterns while maintaining the temporal 
                modeling strength of LSTMs.
              </p>
            </div>

            <div className="bg-background border border-border rounded-none p-8 md:p-10">
              <div className="w-12 h-12 rounded-none bg-foreground flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-background" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Explainability Layer
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Develop an explainability framework using attention mechanisms or SHAP values 
                to interpret LSTM predictions. This would make the model more trustworthy for 
                financial decision-makers.
              </p>
            </div>

            <div className="bg-background border border-border rounded-none p-8 md:p-10">
              <div className="w-12 h-12 rounded-none bg-foreground flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-background" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Continuous Learning Pipeline
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Implement an active learning workflow for continuous model refinement as new 
                market data arrives. This would keep the model current with evolving market dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6">
              Interested in financial AI solutions?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Let&apos;s discuss how we can build custom anomaly detection systems for your specific needs.
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
