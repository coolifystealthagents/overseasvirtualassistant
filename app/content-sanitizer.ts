const INTERNAL_STRING_KEYS = new Set(['slug', 'url', 'href', 'src', 'id']);

export function sanitizeVisibleText(value: string) {
  return value
    .replace(/\s*—\s*/g, ', ')
    .replace(/–/g, '-')
    .replace(/\s+--\s+/g, ': ');
}

export function sanitizeVisibleContent<T>(value: T, key = ''): T {
  if (typeof value === 'string') {
    return (INTERNAL_STRING_KEYS.has(key) ? value : sanitizeVisibleText(value)) as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeVisibleContent(item)) as T;
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([childKey, childValue]) => [
        childKey,
        sanitizeVisibleContent(childValue, childKey),
      ]),
    ) as T;
  }
  return value;
}
