

export function styleText(style: string, text: string): string {
  return `\x1b[${style}m${text}\x1b[0m`;
}
