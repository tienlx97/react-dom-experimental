/* eslint-disable no-sequences */
/* eslint-disable no-return-assign */
/* eslint-disable no-eq-null */
import ReactDom from "./ReactDOM-profiling.classic"

let h = typeof WeakMap === "function" ? new WeakMap() : new Map();
function a(a, b) {
  let c = h.get(b);
  c == null && (c = ReactDom.createRoot(b),
  h.set(b, c));
  b = null;
  let e = a.props.ref;
  ReactDom.flushSync(() => {
    let d;
    return (d = c) == null ? void 0 : d.render(typeof a.type === "string" || (d = a.type) != null && (d = d.prototype) != null && d.isReactComponent ? ({ ...a, props: { ...a.props, ref: function(a) {
      typeof e === "function" ? e(a) : e != null && (e.current = a),
      b = a
    }}}) : a)
  });
  return b
}
function b(a) {
  if (a == null)
    return !1;
  let b = h.get(a);
  if (b) {
    ReactDom.flushSync(() => {
      b.unmount()
    });
    h["delete"](a);
    return !0
  }
  return !1
}


export default {
  render_DEPRECATED : a,
  unmountComponentAtNode_DEPRECATED : b
}
