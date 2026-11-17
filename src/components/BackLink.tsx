import Link from "next/link";

interface BackLinkProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function BackLink({
  href = "/",
  label = "Back to Home",
  className = "",
}: BackLinkProps) {
  return (
    <nav aria-label="Breadcrumb" className={`back-link-nav ${className}`}>
      <Link href={href} className="back-link">
        <span className="back-arrow" aria-hidden="true">
          &larr;
        </span>
        <span>{label}</span>
      </Link>
    </nav>
  );
}
