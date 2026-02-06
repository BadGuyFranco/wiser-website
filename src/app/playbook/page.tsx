import Link from "next/link";

export default function PlaybookPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                The Book
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                WISER Method<br />Master Playbook
              </h1>
              <p className="text-xl text-accent font-medium mb-6">
                Build What Matters with AI First Principles
              </p>
              <p className="text-lg text-foreground-muted mb-8">
                By Robb Wilson and Anthony Franco
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#get-the-book"
                  className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all"
                >
                  Get the Book
                </a>
                <Link
                  href="/method"
                  className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all"
                >
                  Read the Method
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              {/* Book cover placeholder */}
              <div className="w-64 h-80 bg-background-elevated border-2 border-accent rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-2xl font-bold mb-2 text-foreground">WISER Method</p>
                  <p className="text-lg text-foreground-muted">Master Playbook</p>
                  <p className="text-sm mt-4 text-foreground-subtle">Cover Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              About the Book
            </h2>
            <p className="text-lg text-foreground-muted mb-6">
              You&apos;re about to learn a method for building AI systems. But the method won&apos;t stick if we just hand it to you. You need the thinking that makes it work.
            </p>
            <p className="text-lg text-foreground-muted mb-6">
              This book is structured using cognitive layering. Each chapter introduces one concept that the next chapter builds on. By the time you reach the WISER Method, you&apos;ll have the mental models to actually use it. By the time you reach the case study, you&apos;ll recognize the patterns. By the time you finish, you won&apos;t just know what to do. You&apos;ll know why it works.
            </p>
            <p className="text-lg text-foreground-muted">
              The book serves as the workbook for the WISER Method course, but it stands on its own. Everything you need to understand and apply WISER is here.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28 bg-background-alt border-b border-border">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Who This Book Is For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-background-elevated rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-accent mb-4">Leaders</h3>
              <p className="text-foreground-muted mb-4">
                CAIOs, CTOs, COOs, and CEOs who need to understand what good AI implementation looks like so they can sponsor it, fund it, and recognize when it&apos;s going wrong.
              </p>
              <p className="text-sm text-foreground-subtle">
                <strong className="text-foreground-muted">Your path:</strong> Parts I, II, and III (roughly 80 pages). Enough to sponsor well and recognize when things go wrong.
              </p>
            </div>
            
            <div className="p-8 bg-background-elevated rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-accent mb-4">Practitioners</h3>
              <p className="text-foreground-muted mb-4">
                Consultants, internal champions, process improvement leads, scrum masters, and anyone tired of watching promising pilots die in production.
              </p>
              <p className="text-sm text-foreground-subtle">
                <strong className="text-foreground-muted">Your path:</strong> The entire book is your workbook. Part IV is where you&apos;ll spend most of your time in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What&apos;s Inside
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Part I */}
              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">Part I: The Problem</h3>
                <ul className="text-foreground-muted space-y-2 text-sm mb-8">
                  <li>Chapter 1: The Jungle</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-accent mb-4">Part II: The Worldview</h3>
                <ul className="text-foreground-muted space-y-2 text-sm mb-8">
                  <li>Chapter 2: Why AI Is Different</li>
                  <li>Chapter 3: The WISER Perspective</li>
                  <li>Chapter 4: The WISER Method</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-accent mb-4">Part III: The Case Study</h3>
                <ul className="text-foreground-muted space-y-2 text-sm mb-8">
                  <li>Chapter 5: Witness</li>
                  <li>Chapter 6: Interrogate</li>
                  <li>Chapter 7: Solve</li>
                  <li>Chapter 8: Expand</li>
                  <li>Chapter 9: Refine</li>
                </ul>
              </div>
              
              {/* Part IV & V */}
              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">Part IV: Starter Plays</h3>
                <ul className="text-foreground-muted space-y-2 text-sm mb-8">
                  <li>Chapter 10: Team Setup</li>
                  <li>Chapter 11: Playbook System</li>
                  <li>Chapter 12: Witness Phase Plays</li>
                  <li>Chapter 13: Interrogate Phase Plays</li>
                  <li>Chapter 14: Solve Phase Plays</li>
                  <li>Chapter 15: Expand Phase Plays</li>
                  <li>Chapter 16: Refine Phase Plays</li>
                  <li>Chapter 17: Rhythm Plays</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-accent mb-4">Part V: Mastery</h3>
                <ul className="text-foreground-muted space-y-2 text-sm">
                  <li>Chapter 18: Advanced Frameworks</li>
                  <li>Chapter 19: Creating Your Own Plays</li>
                  <li>Chapter 20: When WISER Fails</li>
                  <li>Chapter 21: Integrating Methods</li>
                  <li>Chapter 22: The Journey Continues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="py-20 md:py-28 bg-background-alt border-b border-border">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            About the Authors
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-background-elevated border border-border rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Robb Wilson</h3>
              <p className="text-foreground-muted text-sm">
                Author of the bestselling <em>Age of Invisible Machines</em> (Wiley). Co-creator of the WISER Method and AI First Principles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-background-elevated border border-border rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Anthony Franco</h3>
              <p className="text-foreground-muted text-sm">
                Co-creator of the WISER Method. Book design and illustrations.
              </p>
            </div>
          </div>
          
          <p className="text-center text-foreground-muted mt-12 max-w-2xl mx-auto">
            The WISER Method was created after years helping Fortune 100 companies and federal institutions deploy transformative technology. Now they&apos;re training the next generation of practitioners.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Reader Resources
          </h2>
          <p className="text-center text-foreground-muted mb-12 max-w-2xl mx-auto">
            Everything referenced in the book, plus additional materials to support your implementation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold mb-3 text-foreground">The Full Method</h3>
              <p className="text-sm text-foreground-muted mb-4">
                Read the complete WISER Method online. Nothing hidden.
              </p>
              <Link href="/method" className="text-accent font-medium text-sm hover:text-accent-light">
                Read Method
              </Link>
            </div>
            
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold mb-3 text-foreground">AI First Principles</h3>
              <p className="text-sm text-foreground-muted mb-4">
                The open-source governance framework underlying WISER.
              </p>
              <a 
                href="https://aifirstprinciples.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent font-medium text-sm hover:text-accent-light"
              >
                Visit aifirstprinciples.org
              </a>
            </div>
            
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold mb-3 text-foreground">WISER Fit Assessment</h3>
              <p className="text-sm text-foreground-muted mb-4">
                See if WISER aligns with how you naturally work.
              </p>
              <Link href="/assessment" className="text-accent font-medium text-sm hover:text-accent-light">
                Take Assessment
              </Link>
            </div>
            
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold mb-3 text-foreground">Practitioner Community</h3>
              <p className="text-sm text-foreground-muted mb-4">
                Connect with practitioners running WISER implementations worldwide.
              </p>
              <Link href="/waitlist" className="text-accent font-medium text-sm hover:text-accent-light">
                Join Waitlist
              </Link>
            </div>
            
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold mb-3 text-foreground">Facilitated Cohorts</h3>
              <p className="text-sm text-foreground-muted mb-4">
                Structured practice with experienced practitioners.
              </p>
              <Link href="/waitlist" className="text-accent font-medium text-sm hover:text-accent-light">
                Learn More
              </Link>
            </div>
            
            <div className="p-6 border border-border rounded-xl bg-background-elevated">
              <h3 className="font-semibold mb-3 text-foreground">Full Reviews</h3>
              <p className="text-sm text-foreground-muted mb-4">
                Read the complete reviews from the back cover.
              </p>
              <a href="#reviews" className="text-accent font-medium text-sm hover:text-accent-light">
                View Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Get the Book CTA */}
      <section id="get-the-book" className="py-20 md:py-28 bg-background-alt border-b border-border">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get the Book
          </h2>
          <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto">
            The WISER Method Master Playbook is available now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all min-w-[200px]"
            >
              Amazon
            </a>
            <a
              href="#"
              className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all min-w-[200px]"
            >
              Barnes &amp; Noble
            </a>
            <a
              href="#"
              className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all min-w-[200px]"
            >
              Bookshop.org
            </a>
          </div>
          
          <p className="text-foreground-subtle text-sm">
            ISBN: 979-8-218-93145-2
          </p>
        </div>
      </section>

      {/* Publisher Info */}
      <section className="py-12">
        <div className="container-wide text-center">
          <p className="text-foreground-subtle text-sm mb-2">
            Published by First Strategy in association with UX MAG
          </p>
          <p className="text-foreground-subtle text-sm">
            <a href="https://firststrategy.ai" target="_blank" rel="noopener noreferrer" className="hover:text-accent">firststrategy.ai</a>
            {" | "}
            <a href="https://uxmag.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">uxmag.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
