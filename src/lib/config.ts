export const STREAM_DOMAIN = 'watchsportsurgenew.arkhangaming648.workers.dev'

export const MAIN_DOMAIN = 'sportsurgenew.arkhangaming648.workers.dev'

export const SOURCE_NAMES: Record<string, string> = {
  echo: 'Echo',
  delta: 'Delta',
  golf: 'Golf',
  admin: 'Admin',
}

export function formatStreamLabel(source: string, streamNo: number): string {
  const name = SOURCE_NAMES[source] || source.charAt(0).toUpperCase() + source.slice(1)
  return `${name} #${streamNo}`
}
