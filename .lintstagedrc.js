module.exports = {
  "*.{js,jsx,ts,tsx}": (filenames) => ["pnpm typecheck", `pnpm eslint --cache --fix ${filenames.join(" ")}`],
  "*": (filenames) => `pnpm prettier -wu ${filenames.join(" ")}`,
};
