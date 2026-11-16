import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-section">
      <div className="not-found-code">404</div>
      <h1>Page Not Found</h1>
      <p>
        The page you are looking for doesn&apos;t exist, has been moved, or is
        temporarily unavailable.
      </p>
      <Link href="/" className="btn btn-primary">
        Return to Homepage &rarr;
      </Link>
    </main>
  );
}
