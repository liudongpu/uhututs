import { TnodeIoPath, TnodeIoFile } from "../../../src/tnode/index";





test('upResourcePath', () => {

    let aArr=TnodeIoPath.upResourcePath().split(TnodeIoFile.upPathSeq());

    expect(aArr[aArr.length-1]).toBe('resource');
});