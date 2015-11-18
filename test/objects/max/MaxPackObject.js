import assert from "power-assert";
import createTestObjects from "./utils/createTestObjects";
import MaxPackObject from "../../../src/objects/max/MaxPackObject";
import { $i, $f, $s } from "../../../src/TypedValue";

describe("MaxPackObject", () => {
  describe("[ pack ]", () => {
    const opts = {
      "numOfInlets": 2,
      "numOfOutlets": 1,
      "outletTypes": [ "" ],
      "args": [],
      "attrs": {}
    };
    describe("/bang", () => {
      it("Output currently stored list", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $i(0) ] ]);
      });
    });
  });
  describe("[ pack 0 0. sym ]", () => {
    const opts = {
      "numOfInlets": 3,
      "numOfOutlets": 1,
      "outletTypes": [ "" ],
      "args": [ $i(0), $f(0), $s("sym") ],
      "attrs": {}
    };
    describe("/bang", () => {
      it("Output currently stored list", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(0), $s("sym") ] ]);
      });
    });
    describe("/int", () => {
      it("1st inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(0, $i(10));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(10), $f(0), $s("sym") ] ]);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(10), $f(0), $s("sym") ] ]);
      });
      it("2nd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(1, $i(20));
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(20), $s("sym") ] ]);
      });
      it("3rd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(2, $i(30));
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(0), $s("30") ] ]);
      });
    });
    describe("/float", () => {
      it("1st inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(0, $f(10));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(10), $f(0), $s("sym") ] ]);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(10), $f(0), $s("sym") ] ]);
      });
      it("2nd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(1, $f(20));
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(20), $s("sym") ] ]);
      });
      it("3rd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(2, $f(30));
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(0), $s("30") ] ]);
      });
    });
    describe("/symbol", () => {
      it("1st inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(0, $s("foo"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(0), $s("sym") ] ]);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(0), $s("sym") ] ]);
      });
      it("2nd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(1, $s("bar"));
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(0), $s("sym") ] ]);
      });
      it("3rd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(2, $s("baz"));
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(0), $s("baz") ] ]);
      });
    });
    describe("/list", () => {
      it("1st inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(0, [ $i(10), $f(20) ]);
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(10), $f(20), $s("sym") ] ]);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(10), $f(20), $s("sym") ] ]);
      });
      it("2nd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(1, [ $i(10), $f(20) ]);
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(10), $s("20") ] ]);
      });
      it("3rd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(2, [ $i(10), $f(20) ]);
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(0), $s("10") ] ]);
      });
    });
    describe("/set", () => {
      it("1st inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(0, [ $s("set"), $i(10) ]);
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(10), $f(0), $s("sym") ] ]);
      });
      it("2nd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(1, [ $s("set"), $i(20) ]);
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(20), $s("sym") ] ]);
      });
      it("3rd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(2, [ $s("set"), $i(30) ]);
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, $s("bang"));
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $i(0), $f(0), $s("30") ] ]);
      });
    });
    describe("/nth", () => {
      it("1st inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(0, [ $s("nth"), $i(0) ]);
        assert(receiverSpy.callCount === 0);
        receiverSpy.reset();

        sender.sendMessage(0, [ $s("nth"), $i(1) ]);
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, $i(0) ]);
      });
      it("2nd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(1, [ $s("nth"), $i(2) ]);
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, $f(0) ]);
      });
      it("3rd inlet", () => {
        let { sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(2, [ $s("nth"), $i(3) ]);
        assert(receiverSpy.callCount === 1);
        assert.deepEqual(receiverSpy.args[0], [ 0, [ $s("sym") ] ]);
      });
    });
    describe("/send", () => {
      it("In left inlet", () => {
        let { patcher, sender, receiverSpy } = createTestObjects(MaxPackObject, opts);

        sender.sendMessage(0, [ $s("send"), $s("goom") ]);
        assert(receiverSpy.callCount === 0);
        assert(patcher.sendMessage.callCount === 1);
        assert.deepEqual(patcher.sendMessage.args[0], [ "goom", [ $i(0), $f(0), $s("sym") ] ]);
      });
    });
  });
});
