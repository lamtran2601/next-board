import Link from 'next/link';

export default function NavLink({ href, name, children }) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  );
}
