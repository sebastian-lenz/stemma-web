import { readFileSync, writeFileSync } from "fs";

const indent = (line) => {
  const spaces = /^( )+/.exec(line);
  return spaces ? spaces[0].length : 0;
};

(function (fileName) {
  const interfaces = [];
  let content = readFileSync(fileName, { encoding: "utf-8" });

  content = content.replaceAll(/\/\*\*[\s\S]*?\*\//g, function (match) {
    const lines = match.split("\n");
    const exports = lines
      .map((line) => /\* @exports (I[^\n\s]+)/.exec(line))
      .find((line) => line !== null);

    const iface = lines
      .map((line) => /\* @interface (I[^\n\s]+)/.exec(line))
      .find((line) => line !== null);

    if (!exports || !iface || exports[1] !== iface[1]) return match;

    const spaces =
      lines.reduce(
        (spaces, line, index) =>
          index < 2 ? indent(line) : Math.min(spaces, indent(line)),
        0,
      ) - 1;

    if (spaces > 0) {
      match = lines
        .map((line, index) => (index > 0 ? line.substring(spaces) : line))
        .join("\n");
    }

    interfaces.push(match);

    return "";
  });

  writeFileSync(fileName, interfaces.join("\n\n") + content, {
    encoding: "utf-8",
  });
})(process.argv[2]);
