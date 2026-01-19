'use client'

import { useState } from 'react'
import CommitScroller from '@/components/CommitScroller'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'
import NetworkNav from '@/components/NetworkNav'
import LegalModal from '@/components/LegalModal'
import PrivacyContent from '@/components/legal/PrivacyContent'
import TermsContent from '@/components/legal/TermsContent'
import GDPRContent from '@/components/legal/GDPRContent'

export default function Home() {
  const [legalModal, setLegalModal] = useState<{ type: 'privacy' | 'terms' | 'gdpr' | null }>({ type: null })

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Git is Your Choice",
    "description": "Public or private? Fork or clone? Merge or rebase? Git doesn't force. Git empowers. Your code, your choice.",
    "url": "https://git-isyourchoice.com",
    "about": {
      "@type": "Thing",
      "name": "Git is Your Choice",
      "description": "Git empowers individual freedom. Public or private? Fork or merge? You decide everything. Total control, zero lock-in."
    },
    "keywords": "git is your choice, personal freedom, git flexibility, fork rights, data sovereignty, choose privacy level"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does \"Git is Your Choice\" mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Git doesn't lock you in. Public or private? Fork or clone? Merge or rebase? Every decision is yours. No platform forces your hand. Total freedom."
        }
      },
      {
        "@type": "Question",
        "name": "Can I change my mind later?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Always. Start private, go public later. Fork to experiment. Merge when ready. Git adapts to you. Change direction anytime."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't want to share?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Don't. Keep it private. Git works perfectly for personal projects. No judgment. No pressure. Your code, your rules."
        }
      },
      {
        "@type": "Question",
        "name": "How do I decide what to share?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trust your instincts. Want feedback? Go public. Working on something sensitive? Stay private. Git doesn't judge—it just preserves."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use different strategies for different projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Public work stuff. Private personal projects. Git doesn't care. Mix and match. Every repository is independent. Total flexibility."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="min-h-screen bg-black text-white">
        <NetworkNav currentSite="choice" siteName="Git is Your Choice" siteColor="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-transparent bg-clip-text" />

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 flex flex-col items-center justify-center px-4">
          <CommitScroller theme="choice" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start mb-6">
              <div className="flex justify-center md:justify-start">
                <Logo size="lg" showText={false} />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 pb-3 leading-tight bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-transparent bg-clip-text">
                  Git is Your Choice
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Your data. Your rules.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">Public or private?</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">You decide.</p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0 text-gray-300 font-light">Total freedom.</p>
              </div>
              <div className="text-center md:text-right md:ml-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Fork or clone?</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Public or private?</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-yellow-400 font-semibold break-words">You choose everything.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Git doesn't force.</p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">Git empowers.</p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto text-center mb-8 px-4 border-t border-gray-800 pt-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-yellow-400 font-semibold">
                Your choice. Your freedom. Your control. Always.
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <CommitScroller theme="choice" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">Freedom Through Choice</h2>
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <article className="p-6 bg-gray-800/50 rounded-lg border border-yellow-500/30">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Flexibility</h3>
                <p className="text-gray-300">Public today, private tomorrow. Fork, clone, merge, rebase. Git adapts to you, not the other way around.</p>
              </article>
              <article className="p-6 bg-gray-800/50 rounded-lg border border-orange-500/30">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Control</h3>
                <p className="text-gray-300">You choose what to share. You choose who sees it. You choose where it lives. Complete control over every decision.</p>
              </article>
              <article className="p-6 bg-gray-800/50 rounded-lg border border-yellow-500/30">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Freedom</h3>
                <p className="text-gray-300">No lock-in. No forced commitment. Change your mind anytime. Git gives you freedom to choose your path.</p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <CommitScroller theme="choice" commitCount={50} opacity={0.15} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-transparent bg-clip-text">
              Common Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">What does "Git is Your Choice" mean?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Git doesn't lock you in. Public or private? Fork or clone? Merge or rebase? Every decision is yours. No platform forces your hand. Total freedom.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-orange-400">Can I change my mind later?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Always. Start private, go public later. Fork to experiment. Merge when ready. Git adapts to you. Change direction anytime.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">What if I don't want to share?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Don't. Keep it private. Git works perfectly for personal projects. No judgment. No pressure. Your code, your rules.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-orange-400">How do I decide what to share?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Trust your instincts. Want feedback? Go public. Working on something sensitive? Stay private. Git doesn't judge—it just preserves.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">Can I use different strategies for different projects?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">Absolutely. Public work stuff. Private personal projects. Git doesn't care. Mix and match. Every repository is independent. Total flexibility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 bg-black">
          <CommitScroller theme="choice" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Transparency Creates Trust</h2>
            <p className="text-xl text-gray-300 mb-8">Open source changed software. Public git changes history.</p>
            <p className="text-2xl font-bold text-cyan-400">Git is public. Your legacy. Visible forever.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-4 bg-black border-t border-gray-800">
          <CommitScroller theme="choice" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-400">
            <p className="text-sm">Git is Public • Git is Transparent • Git is Open</p>
            <p className="text-xs mt-4">© 2026 • All consciousness preserved</p>
            <p className="text-xs mt-2">
              <a href="mailto:gitiseternal@gmail.com" className="text-gray-500 hover:text-gray-300 transition">gitiseternal@gmail.com</a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs mt-4">
              <button onClick={() => setLegalModal({ type: 'privacy' })} className="text-gray-600 hover:text-gray-400 transition">Privacy</button>
              <span className="text-gray-600">•</span>
              <button onClick={() => setLegalModal({ type: 'terms' })} className="text-gray-600 hover:text-gray-400 transition">Terms</button>
              <span className="text-gray-600">•</span>
              <button onClick={() => setLegalModal({ type: 'gdpr' })} className="text-gray-600 hover:text-gray-400 transition">GDPR</button>
              <span className="text-gray-600">•</span>
              <a href="/admin" className="text-gray-600 hover:text-gray-400 transition">Admin</a>
            </div>
          </div>
        </footer>

        <LegalModal isOpen={legalModal.type === 'privacy'} onClose={() => setLegalModal({ type: null })} title="Privacy Policy" content={<PrivacyContent />} />
        <LegalModal isOpen={legalModal.type === 'terms'} onClose={() => setLegalModal({ type: null })} title="Terms of Use" content={<TermsContent />} />
        <LegalModal isOpen={legalModal.type === 'gdpr'} onClose={() => setLegalModal({ type: null })} title="GDPR Compliance" content={<GDPRContent />} />
        <CookieConsent />
      </main>
    </>
  )
}
