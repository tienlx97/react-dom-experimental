/* eslint-disable no-eq-null */
import ReactDOMProfiling from "./ReactDOM-profiling.classic"
import ReactDOMCompatibilityLayer from "./ReactDOMCompatibilityLayer"


// b("setupReactRefresh");
// b("consolePatchForReact");
function a() {
  throw Error("This React API is not available on Workplace.")
}

let e = ReactDOMProfiling.createPortal;

function d(a, c, d) {
  return ReactDOMProfiling.hydrateRoot(a, c, {onRecoverableError: function(a) {
    if (a != null && typeof a.message === "string") {
      let b = a.message;
      if (b.indexOf("The server could not finish this Suspense boundary") !== -1 || b.indexOf("Minified React error #419;") !== -1 || b.indexOf("This Suspense boundary received an update") !== -1 || b.indexOf("Minified React error #421;") !== -1)
        return
    }
    typeof reportError === "function" && reportError(a)
  }, ...d})
}

export const createPortal = e;
export const createRoot = ReactDOMProfiling.createRoot;
export const hydrateRoot = d;
export const flushSync = ReactDOMProfiling.flushSync;
export const useFormStatus = ReactDOMProfiling.useFormStatus;
export const useFormState = ReactDOMProfiling.useFormState;
export const version = ReactDOMProfiling.version;
export const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactDOMProfiling.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOMProfiling?.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED ?? null;
export const unstable_batchedUpdates = ReactDOMProfiling.unstable_batchedUpdates;
export const unstable_createEventHandle = ReactDOMProfiling.unstable_createEventHandle;
export const findDOMNode = ReactDOMProfiling.findDOMNode;
export const render = ReactDOMCompatibilityLayer.render_DEPRECATED;
export const unmountComponentAtNode = ReactDOMCompatibilityLayer.unmountComponentAtNode_DEPRECATED

export default {
  createPortal,
  createRoot ,
  hydrateRoot ,
  flushSync ,
  useFormStatus,
  useFormState ,
  version ,
  __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE ,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  unstable_batchedUpdates,
  unstable_createEventHandle,
  findDOMNode,
  render,
  unmountComponentAtNode,
}
