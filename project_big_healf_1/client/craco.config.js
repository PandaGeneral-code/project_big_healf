const path = require("path");

const alias = (prefix = "src") => ({
  "@components": `${prefix}/components`,
  "@hooks": `${prefix}/hooks`,
  "@store": `${prefix}/store`,
  "@theme": `${prefix}/utils/theme`,
});

const resolvedAliases = Object.fromEntries(
  Object.entries(alias("src")).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = { webpack: { alias: resolvedAliases } };
