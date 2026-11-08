export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-[31px] font-medium leading-[41px] tracking-[0.01em] ${className}`}>{children}</h2>;
}
