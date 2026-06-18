export function isNew(createdAt: string, days = 14): boolean {
  const created = new Date(createdAt);
  const now = new Date();

  const diffTime = now.getTime() - created.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays <= days;
}