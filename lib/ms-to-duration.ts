export const msToDuration = (ms?: number | null) => {
  const _ms = ms ?? 0;
  const sign = _ms < 0 ? "-" : "";
  const abs = Math.abs(_ms);
  const seconds = `0${Math.floor(abs / 1000) % 60}`.slice(-2);
  const minutes = `0${Math.floor(abs / 60000) % 60}`.slice(-2);
  const hours = Math.floor(abs / 3600000);

  return `${sign}${hours ? `${hours}:` : ""}${minutes}:${seconds}`;
};
