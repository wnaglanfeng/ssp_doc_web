export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('zh-CN');
}

export function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}