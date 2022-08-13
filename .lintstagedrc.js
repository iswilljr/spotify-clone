module.exports = {
  "*.{js,jsx,ts,tsx}": (filenames) => ["yarn typecheck", `yarn lint --fix ${filenames.join(" ")}`],
  "*": (filenames) => `yarn prettier:write ${filenames.join(" ")}`,
};
