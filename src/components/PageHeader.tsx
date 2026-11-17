import BackLink from "@/components/BackLink";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
  backHref?: string;
  backLabel?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  tag,
  backHref = "/",
  backLabel = "Back to Home",
  children,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <BackLink href={backHref} label={backLabel} />
      <div className="page-header-content">
        {tag ? (
          <div className="hero-spec-tag">
            <span className="spec-dot" aria-hidden="true" />
            <span>{tag}</span>
          </div>
        ) : null}
        <h1 className="page-title">{title}</h1>
        {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
        {children}
      </div>
    </header>
  );
}
