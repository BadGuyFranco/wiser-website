import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background-alt border-t border-gray-200">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold text-primary">
              WISER Method
            </Link>
            <p className="mt-4 text-foreground-muted max-w-md">
              A framework for effective AI collaboration.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/method" className="text-foreground-muted hover:text-foreground transition-colors">
                  The Method
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground-muted hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-foreground-muted hover:text-foreground transition-colors">
                  Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/waitlist" className="text-foreground-muted hover:text-foreground transition-colors">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-foreground-muted text-sm">
          <p>&copy; {new Date().getFullYear()} The WISER Method. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
