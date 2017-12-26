import { TNodeIoPath, TNodeIoFile } from "../../../src/tnode/index";





test('upResourcePath', () => {

    let aArr=TNodeIoPath.upResourcePath().split(TNodeIoFile.upPathSeq());

    expect(aArr[aArr.length-1]).toBe('resource');
});