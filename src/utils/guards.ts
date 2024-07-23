export function isString(value?: unknown): value is string {
  return typeof value === 'string';
}

// This will only be true when value === NaN.
export function isNotANumber(value?: unknown): boolean {
  return value !== value;
}

export function isNumber(value?: unknown): value is number {
  return typeof value === 'number' && !isNotANumber(value);
}
