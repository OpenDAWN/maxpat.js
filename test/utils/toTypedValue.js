import assert from "power-assert";
import toTypedValue from "../../src/utils/toTypedValue";

describe("utils", () => {
  describe("toTypedValue(value: any): { type: string, value: any }", () => {
    it("works", () => {
      assert.deepEqual(toTypedValue(null), { type: "int", value: 0 });
      assert.deepEqual(toTypedValue(1), { type: "float", value: 1 });
      assert.deepEqual(toTypedValue(false), { type: "int", value: 0 });
      assert.deepEqual(toTypedValue(true), { type: "int", value: 1 });
      assert.deepEqual(toTypedValue("bang"), { type: "bang", value: "bang" });
      assert.deepEqual(toTypedValue("1."), { type: "float", value: 1 });
      assert.deepEqual(toTypedValue("1.5"), { type: "float", value: 1.5 });
      assert.deepEqual(toTypedValue("-1."), { type: "float", value: -1 });
      assert.deepEqual(toTypedValue("1"), { type: "int", value: 1 });
      assert.deepEqual(toTypedValue("-1"), { type: "int", value: -1 });
      assert.deepEqual(toTypedValue("foo"), { type: "symbol", value: "foo" });
      assert.deepEqual(toTypedValue('"bar baz"'), { type: "symbol", value: "bar baz" });
      assert.deepEqual(toTypedValue({ type: "float", value: 1.5 }), { type: "float", value: 1.5 });
      assert.deepEqual(toTypedValue([ 1, 2, 3 ]), { type: "list", value: [
        { type: "float", value: 1 }, { type: "float", value: 2 }, { type: "float", value: 3 }
      ] });
    });
  });
});
