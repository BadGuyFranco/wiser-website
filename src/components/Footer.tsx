import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold">
              WISER Method
            </Link>
            <p className="mt-4 text-secondary max-w-md">
              {/* Footer description goes here */}
              A framework for effective AI collaboration.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/method" className="text-secondary hover:text-foreground">
                  The Method
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-secondary hover:text-foreground">
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
                <Link href="/waitlist" className="text-secondary hover:text-foreground">
                  Join Waitlist
                </Link>
              </li>
              {/* Add social links here */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} The WISER Method. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
