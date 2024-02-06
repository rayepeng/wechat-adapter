import {canvas} from './canvas'

export class Element {
  style = {cursor: null}

  appendChild() {}

  removeChild() {}

  addEventListener() {}

  removeEventListener() {}
}

export const HTMLCanvasElement = canvas.constructor

export const HTMLImageElement = wx.createImage().constructor

export class HTMLVideoElement extends Element {

}
