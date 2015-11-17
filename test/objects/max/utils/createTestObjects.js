import sinon from "sinon";
import MaxObject from "../../../../src/objects/MaxObject";

export default function createTestObjects(Klass, opts) {
  let patcher = { emit: sinon.spy(), sendMessage: sinon.spy() };
  let target = new Klass(patcher, opts);
  let sender = new MaxObject(patcher, { numOfInlets: 0, numOfOutlets: target.numOfInlets });
  let receiver = new MaxObject(patcher, { numOfInlets: target.numOfOutlets, numOfOutlets: 0 });

  for (let i = 0; i < target.numOfInlets; i++) {
    sender.connect(target, i, i);
  }
  for (let i = 0; i < target.numOfOutlets; i++) {
    target.connect(receiver, i, i);
  }

  return { patcher, target, sender, receiver };
}
