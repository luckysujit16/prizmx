import { expect } from "chai";
import { add } from "../Add.mjs";

describe("Add function", function () {
  it("should add two numbers correctly", function () {
    expect(add(2, 3)).to.equal(5);
  });
});
