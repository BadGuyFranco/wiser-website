import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background-alt border-t border-border">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
              WISER<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-foreground-muted max-w-md">
              Mastering perpetual innovation using AI First Principles.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigate</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/method" className="text-foreground-muted hover:text-accent transition-colors">
                  The Method
                </Link>
              </li>
              <li>
                <Link href="/playbook" className="text-foreground-muted hover:text-accent transition-colors">
                  The Book
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground-muted hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-foreground-muted hover:text-accent transition-colors">
                  Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/waitlist" className="text-foreground-muted hover:text-accent transition-colors">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <a 
                  href="https://aifirstprinciples.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-accent transition-colors"
                >
                  AI First Principles
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-foreground-subtle text-sm">
          <p>&copy; {new Date().getFullYear()} The WISER Method. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
