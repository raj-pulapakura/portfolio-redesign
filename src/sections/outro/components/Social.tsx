import { ReactNode } from 'react';

export default function Social({
  icon,
  url,
}: {
  icon: ReactNode;
  url: string;
}) {
  return <a href={url}>{icon}</a>;
}
