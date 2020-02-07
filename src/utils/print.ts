import { SourceMapConsumer } from "source-map";
import fs from "fs";

const error = (message: string): void => {
  console.error("Error: " + message);
  console.error("");
};

const message = (message: string): void => {
  console.log(message);
  console.log("");
};

const debug = (message: string): void => {
  const e = new Error();
  console.log("e", e);

  if (e.stack) {
    const regObj = new RegExp(/\/.+[0-9]+/).exec(e.stack.split("\n")[2]);
    // console.log('e.stack.split("\n")', e.stack.split("\n"));
    // console.log("regObj", regObj);

    if (regObj) {
      const sourcemapPath = regObj[0].split(":")[0] + ".map";
      const sm = JSON.parse(fs.readFileSync(sourcemapPath).toString());
      SourceMapConsumer.with(sm, null, consumer => {
        console.log("sources", consumer.sources);
        console.log(
          consumer.generatedPositionFor({
            line: 5,
            column: 5,
            source: consumer.sources[0]
          })
        );
        console.log(
          consumer.originalPositionFor({
            line: 1,
            column: 225
          })
        );
      });
    }
  }
  // const originalFile = new RegExp(.test(e.stack))
  // const consumer = new SourceMapConsumer(fs.readFileSync());
};

export default { error, message, debug };
