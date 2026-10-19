export function asset(path: string): string {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${prefix}${path.startsWith('/') ? path : `/${path}`}`;
}
