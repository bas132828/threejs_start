const rewire = require("rewire");
const script = rewire("./script");
const updateSphere = script.__get__("updateSphere");
// @ponicode
describe("updateSphere", () => {
  test("0", () => {
    updateSphere(-5.48);
  });
});
