interface OmikujiResult {
  title: string;
  message: string;
}

export function pickOmikuji(candidates: OmikujiResult[]): OmikujiResult {
  const index = Math.floor(Math.random() * candidates.length);
  const result = candidates[index];
  return result;
}
