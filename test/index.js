"use strict";

const assert = require("node:assert/strict");
const { describe, it } = require("node:test");
const isSameGuy = require("..");

assert.that = (actual) => {
  return {
    lessThan: (expected) => assert.ok(actual < expected),
    greaterThan: (expected) => assert.ok(actual > expected),
    greaterOrEqualThan: (expected) => assert.ok(actual >= expected),
  };
};

describe("is-same-guy", () => {
  it("should not perceive two different identities same with unique typing", () => {
    const expected = 0.67;
    const chat1 = ["hello world", "world test", "tset"];
    const chat2 = ["chat2 test", "hello ", "chat 1"];

    const actual = isSameGuy(chat1, chat2);

    assert.that(actual).lessThan(expected);
  });

  it("should not perceive two same identities same even with unique words", () => {
    const expected = 0.7;
    const chat1 = ["hello wolrd", "      world te_st", "test"];
    const chat2 = ["chat2 test", "  hello  wolrd", "chat 1"];

    const actual = isSameGuy(chat1, chat2);

    assert.that(actual).greaterThan(expected);
  });

  it("should perceive two same identities same with frequent unique words", () => {
    const expected = 0.8;
    const chat1 = ["hello wolrd", "     world test  ", " test"];
    const chat2 = [
      "chat2    test",
      "hello wolrd",
      "chat 1          :):):):)    ",
      "test2 wolrd",
    ];

    const actual = isSameGuy(chat1, chat2);

    assert.that(actual).greaterOrEqualThan(expected);
  });
});
