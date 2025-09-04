/* eslint-disable no-func-assign */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-use-before-define */
/* eslint-disable valid-typeof */
/* eslint-disable getter-return */
/* eslint-disable new-cap */
/* eslint-disable no-invalid-this */
/* eslint-disable react-compiler/react-compiler */
/* eslint-disable no-empty */
/* eslint-disable no-self-compare */
/* eslint-disable no-labels */
/* eslint-disable guard-for-in */
/* eslint-disable eqeqeq */
/* eslint-disable no-misleading-character-class */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-implicit-coercion */
/* eslint-disable no-eq-null */
/* eslint-disable no-fallthrough */
/* eslint-disable accessor-pairs */
/* eslint-disable max-depth */
/* eslint-disable no-cond-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable max-params */
/* eslint-disable no-return-assign */
/* eslint-disable no-var */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-sequences */
/* eslint-disable complexity */
/* eslint-disable no-undef */
// /* eslint-disable no-use-before-define */
// /* eslint-disable valid-typeof */
// /* eslint-disable getter-return */
// /* eslint-disable no-func-assign */
// /* eslint-disable new-cap */
// /* eslint-disable no-self-assign */
// /* eslint-disable no-unmodified-loop-condition */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-empty */
// /* eslint-disable no-invalid-this */
// /* eslint-disable no-self-compare */
// /* eslint-disable no-labels */
// /* eslint-disable guard-for-in */
// /* eslint-disable eqeqeq */
// /* eslint-disable no-implicit-coercion */
// /* eslint-disable prefer-regex-literals */
// /* eslint-disable no-eq-null */
// /* eslint-disable no-fallthrough */
// /* eslint-disable max-depth */
// /* eslint-disable accessor-pairs */
// /* eslint-disable no-cond-assign */
// /* eslint-disable no-sequences */
// /* eslint-disable no-return-assign */
// /* eslint-disable max-params */
// /* eslint-disable no-var */
// /* eslint-disable no-inner-declarations */
// /* eslint-disable complexity */
// /* eslint-disable no-undef */

import React from "react"
import Scheduler from "scheduler"

import {CometEventListener as EventListenerWWW}  from "./EventListener"
import {ReactFeatureFlags as dynamicFeatureFlags} from "./ReactFeatureFlags"
import {ReactFiberErrorDialog as ReactFiberErrorDialogWWW} from "./ReactFiberErrorDialog";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
"use strict";
"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    "function" &&
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());

let  assign = Object.assign;

function formatProdErrorMessage(code) {
  let url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (let i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}

let  alwaysThrottleRetries = dynamicFeatureFlags.alwaysThrottleRetries;
let disableLegacyContextForFunctionComponents =
    dynamicFeatureFlags.disableLegacyContextForFunctionComponents;
let disableSchedulerTimeoutInWorkLoop =
    dynamicFeatureFlags.disableSchedulerTimeoutInWorkLoop;
let enableHiddenSubtreeInsertionEffectCleanup =
    dynamicFeatureFlags.enableHiddenSubtreeInsertionEffectCleanup;
let enableInfiniteRenderLoopDetection =
    dynamicFeatureFlags.enableInfiniteRenderLoopDetection;
let enableNoCloningMemoCache = dynamicFeatureFlags.enableNoCloningMemoCache;
let enableObjectFiber = dynamicFeatureFlags.enableObjectFiber;
let enableRetryLaneExpiration = dynamicFeatureFlags.enableRetryLaneExpiration;
let enableTransitionTracing = dynamicFeatureFlags.enableTransitionTracing;
let enableTrustedTypesIntegration =
    dynamicFeatureFlags.enableTrustedTypesIntegration;
let renameElementSymbol = dynamicFeatureFlags.renameElementSymbol;
let retryLaneExpirationMs = dynamicFeatureFlags.retryLaneExpirationMs;
let syncLaneExpirationMs = dynamicFeatureFlags.syncLaneExpirationMs;
let transitionLaneExpirationMs = dynamicFeatureFlags.transitionLaneExpirationMs;
let enableViewTransition = dynamicFeatureFlags.enableViewTransition;
let enableComponentPerformanceTrack =
    dynamicFeatureFlags.enableComponentPerformanceTrack;
let enableScrollEndPolyfill = dynamicFeatureFlags.enableScrollEndPolyfill;
let enableFragmentRefs = dynamicFeatureFlags.enableFragmentRefs;
let enableFragmentRefsScrollIntoView =
    dynamicFeatureFlags.enableFragmentRefsScrollIntoView;
let enableSchedulingProfiler = dynamicFeatureFlags.enableSchedulingProfiler;
function getNearestMountedFiber(fiber) {
  let node = fiber;
  let nearestMounted = fiber;
  if (fiber.alternate) for (; node.return; ) node = node.return;
  else {
    fiber = node;
    do
      (node = fiber),
      0 !== (node.flags & 4098) && (nearestMounted = node.return),
      (fiber = node.return);
    while (fiber);
  }
  return node.tag === 3 ? nearestMounted : null;
}
function getSuspenseInstanceFromFiber(fiber) {
  if (fiber.tag === 13) {
    let suspenseState = fiber.memoizedState;
    suspenseState === null &&
      ((fiber = fiber.alternate),
      null !== fiber && (suspenseState = fiber.memoizedState));
    if (null !== suspenseState) return suspenseState.dehydrated;
  }
  return null;
}
function getActivityInstanceFromFiber(fiber) {
  if (fiber.tag === 31) {
    let activityState = fiber.memoizedState;
    activityState === null &&
      ((fiber = fiber.alternate),
      null !== fiber && (activityState = fiber.memoizedState));
    if (null !== activityState) return activityState.dehydrated;
  }
  return null;
}
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error(formatProdErrorMessage(188));
}
function findCurrentFiberUsingSlowPath(fiber) {
  let alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (alternate === null) throw Error(formatProdErrorMessage(188));
    return alternate !== fiber ? null : fiber;
  }
  for (var a = fiber, b = alternate; ; ) {
    let parentA = a.return;
    if (parentA === null) break;
    let parentB = parentA.alternate;
    if (parentB === null) {
      b = parentA.return;
      if (null !== b) {
        a = b;
        continue;
      }
      break;
    }
    if (parentA.child === parentB.child) {
      for (parentB = parentA.child; parentB; ) {
        if (parentB === a) return assertIsMounted(parentA), fiber;
        if (parentB === b) return assertIsMounted(parentA), alternate;
        parentB = parentB.sibling;
      }
      throw Error(formatProdErrorMessage(188));
    }
    if (a.return !== b.return) (a = parentA), (b = parentB);
    else {
      for (var didFindChild = !1, child$0 = parentA.child; child$0; ) {
        if (child$0 === a) {
          didFindChild = !0;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$0 === b) {
          didFindChild = !0;
          b = parentA;
          a = parentB;
          break;
        }
        child$0 = child$0.sibling;
      }
      if (!didFindChild) {
        for (child$0 = parentB.child; child$0; ) {
          if (child$0 === a) {
            didFindChild = !0;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$0 === b) {
            didFindChild = !0;
            b = parentB;
            a = parentA;
            break;
          }
          child$0 = child$0.sibling;
        }
        if (!didFindChild) throw Error(formatProdErrorMessage(189));
      }
    }
    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
  }
  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
  return a.stateNode.current === a ? fiber : alternate;
}
function findCurrentHostFiberImpl(node) {
  let tag = node.tag;
  if (tag === 5 || tag === 26 || tag === 27 || tag === 6) return node;
  for (node = node.child; null !== node; ) {
    tag = findCurrentHostFiberImpl(node);
    if (null !== tag) return tag;
    node = node.sibling;
  }
  return null;
}
function isFiberSuspenseAndTimedOut(fiber) {
  let memoizedState = fiber.memoizedState;
  return (
    fiber.tag === 13 &&
    null !== memoizedState &&
    memoizedState.dehydrated === null
  );
}
function doesFiberContain(parentFiber, childFiber) {
  for (
    let parentFiberAlternate = parentFiber.alternate;
    null !== childFiber;

  ) {
    if (childFiber === parentFiber || childFiber === parentFiberAlternate)
      return !0;
    childFiber = childFiber.return;
  }
  return !1;
}
function traverseVisibleHostChildren(child, searchWithinHosts, fn, a, b, c) {
  for (; null !== child; ) {
    if (
      (child.tag === 5 && fn(child, a, b, c)) ||
      ((22 !== child.tag || child.memoizedState === null) &&
        (searchWithinHosts || 5 !== child.tag) &&
        traverseVisibleHostChildren(
          child.child,
          searchWithinHosts,
          fn,
          a,
          b,
          c
        ))
    )
      return !0;
    child = child.sibling;
  }
  return !1;
}
function getFragmentParentHostFiber(fiber) {
  for (fiber = fiber.return; null !== fiber; ) {
    if (fiber.tag === 3 || fiber.tag === 5) return fiber;
    fiber = fiber.return;
  }
  return null;
}
function findFragmentInstanceSiblings(result, self, child) {
  for (
    let foundSelf =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
    null !== child;

  ) {
    if (child === self)
      if (((foundSelf = !0), child.sibling)) child = child.sibling;
      else return !0;
    if (child.tag === 5) {
      if (foundSelf) return (result[1] = child), !0;
      result[0] = child;
    } else if (
      (22 !== child.tag || child.memoizedState === null) &&
      findFragmentInstanceSiblings(result, self, child.child, foundSelf)
    )
      return !0;
    child = child.sibling;
  }
  return !1;
}
function getInstanceFromHostFiber(fiber) {
  switch (fiber.tag) {
  case 5:
    return fiber.stateNode;
  case 3:
    return fiber.stateNode.containerInfo;
  default:
    throw Error(formatProdErrorMessage(559));
  }
}
let searchTarget = null;
let searchBoundary = null;
function findNextSibling(child) {
  searchTarget = child;
  return !0;
}
function isFiberPrecedingCheck(child, target, boundary) {
  return child === boundary
    ? !0
    : child === target
      ? ((searchTarget = child), !0)
      : !1;
}
function isFiberFollowingCheck(child, target, boundary) {
  return child === boundary
    ? ((searchBoundary = child), !1)
    : child === target
      ? (null !== searchBoundary && (searchTarget = child), !0)
      : !1;
}
function getParentForFragmentAncestors(inst) {
  if (inst === null) return null;
  do inst = inst === null ? null : inst.return;
  while (inst && 5 !== inst.tag && 27 !== inst.tag && 3 !== inst.tag);
  return inst ? inst : null;
}
function getLowestCommonAncestor(instA, instB, getParent) {
  for (var depthA = 0, tempA = instA; tempA; tempA = getParent(tempA)) depthA++;
  tempA = 0;
  for (let tempB = instB; tempB; tempB = getParent(tempB)) tempA++;
  for (; 0 < depthA - tempA; ) (instA = getParent(instA)), depthA--;
  for (; 0 < tempA - depthA; ) (instB = getParent(instB)), tempA--;
  for (; depthA--; ) {
    if (instA === instB || (null !== instB && instA === instB.alternate))
      return instA;
    instA = getParent(instA);
    instB = getParent(instB);
  }
  return null;
}
let currentReplayingEvent = null;
let ReactSharedInternals =
    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
let scheduleCallback$3 = Scheduler.unstable_scheduleCallback;
let cancelCallback$1 = Scheduler.unstable_cancelCallback;
let shouldYield = Scheduler.unstable_shouldYield;
let requestPaint = Scheduler.unstable_requestPaint;
let now$1 = Scheduler.unstable_now;
let getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
let ImmediatePriority = Scheduler.unstable_ImmediatePriority;
let UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
let NormalPriority$1 = Scheduler.unstable_NormalPriority;
let LowPriority = Scheduler.unstable_LowPriority;
let IdlePriority = Scheduler.unstable_IdlePriority;
let log$1 = Scheduler.log;
let unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;
let rendererID = null;
let injectedHook = null;
let injectedProfilingHooks = null;
let isDevToolsPresent = "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;
function onCommitRoot(root, eventPriority) {
  if (injectedHook && typeof injectedHook.onCommitFiberRoot === "function")
    try {
      let didError = (root.current.flags & 128) === 128;
      switch (eventPriority) {
      case 2:
        var schedulerPriority = ImmediatePriority;
        break;
      case 8:
        schedulerPriority = UserBlockingPriority;
        break;
      case 32:
        schedulerPriority = NormalPriority$1;
        break;
      case 268435456:
        schedulerPriority = IdlePriority;
        break;
      default:
        schedulerPriority = NormalPriority$1;
      }
      injectedHook.onCommitFiberRoot(
        rendererID,
        root,
        schedulerPriority,
        didError
      );
    } catch (err) {}
}
function setIsStrictModeForDevtools(newIsStrictMode) {
  typeof log$1 === "function" && unstable_setDisableYieldValue(newIsStrictMode);
  if (injectedHook && typeof injectedHook.setStrictMode === "function")
    try {
      injectedHook.setStrictMode(rendererID, newIsStrictMode);
    } catch (err) {}
}
function injectProfilingHooks(profilingHooks) {
  injectedProfilingHooks = profilingHooks;
}
function markCommitStopped() {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markCommitStopped === "function" &&
    injectedProfilingHooks.markCommitStopped();
}
function markComponentRenderStarted(fiber) {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markComponentRenderStarted === "function" &&
    injectedProfilingHooks.markComponentRenderStarted(fiber);
}
function markComponentRenderStopped() {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markComponentRenderStopped === "function" &&
    injectedProfilingHooks.markComponentRenderStopped();
}
function markRenderStarted(lanes) {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markRenderStarted === "function" &&
    injectedProfilingHooks.markRenderStarted(lanes);
}
function markRenderStopped() {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markRenderStopped === "function" &&
    injectedProfilingHooks.markRenderStopped();
}
function markStateUpdateScheduled(fiber, lane) {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markStateUpdateScheduled === "function" &&
    injectedProfilingHooks.markStateUpdateScheduled(fiber, lane);
}
let clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
let log = Math.log;
let LN2 = Math.LN2;
function clz32Fallback(x) {
  x >>>= 0;
  return x === 0 ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
}
function getLabelForLane(lane) {
  if (enableSchedulingProfiler) {
    if (lane & 1) return "SyncHydrationLane";
    if (lane & 2) return "Sync";
    if (lane & 4) return "InputContinuousHydration";
    if (lane & 8) return "InputContinuous";
    if (lane & 16) return "DefaultHydration";
    if (lane & 32) return "Default";
    if (lane & 128) return "TransitionHydration";
    if (lane & 4194048) return "Transition";
    if (lane & 62914560) return "Retry";
    if (lane & 67108864) return "SelectiveHydration";
    if (lane & 134217728) return "IdleHydration";
    if (lane & 268435456) return "Idle";
    if (lane & 536870912) return "Offscreen";
    if (lane & 1073741824) return "Deferred";
  }
}
let nextTransitionUpdateLane = 256;
let nextTransitionDeferredLane = 262144;
let nextRetryLane = 4194304;
function getHighestPriorityLanes(lanes) {
  let pendingSyncLanes = lanes & 42;
  if (0 !== pendingSyncLanes) return pendingSyncLanes;
  switch (lanes & -lanes) {
  case 1:
    return 1;
  case 2:
    return 2;
  case 4:
    return 4;
  case 8:
    return 8;
  case 16:
    return 16;
  case 32:
    return 32;
  case 64:
    return 64;
  case 128:
    return 128;
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
    return lanes & 261888;
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
    return lanes & 3932160;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
    return lanes & 62914560;
  case 67108864:
    return 67108864;
  case 134217728:
    return 134217728;
  case 268435456:
    return 268435456;
  case 536870912:
    return 536870912;
  case 1073741824:
    return 0;
  default:
    return lanes;
  }
}
function getNextLanes(root, wipLanes, rootHasPendingCommit) {
  let pendingLanes = root.pendingLanes;
  if (pendingLanes === 0) return 0;
  let nextLanes = 0;
  let suspendedLanes = root.suspendedLanes;
  let pingedLanes = root.pingedLanes;
  root = root.warmLanes;
  let nonIdlePendingLanes = pendingLanes & 134217727;
  0 !== nonIdlePendingLanes
    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
    0 !== pendingLanes
      ? (nextLanes = getHighestPriorityLanes(pendingLanes))
      : ((pingedLanes &= nonIdlePendingLanes),
      0 !== pingedLanes
        ? (nextLanes = getHighestPriorityLanes(pingedLanes))
        : rootHasPendingCommit ||
              ((rootHasPendingCommit = nonIdlePendingLanes & ~root),
              0 !== rootHasPendingCommit &&
                (nextLanes = getHighestPriorityLanes(rootHasPendingCommit)))))
    : ((nonIdlePendingLanes = pendingLanes & ~suspendedLanes),
    0 !== nonIdlePendingLanes
      ? (nextLanes = getHighestPriorityLanes(nonIdlePendingLanes))
      : 0 !== pingedLanes
        ? (nextLanes = getHighestPriorityLanes(pingedLanes))
        : rootHasPendingCommit ||
            ((rootHasPendingCommit = pendingLanes & ~root),
            0 !== rootHasPendingCommit &&
              (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
  return nextLanes === 0
    ? 0
    : 0 !== wipLanes &&
        wipLanes !== nextLanes &&
        (wipLanes & suspendedLanes) === 0 &&
        ((suspendedLanes = nextLanes & -nextLanes),
        (rootHasPendingCommit = wipLanes & -wipLanes),
        suspendedLanes >= rootHasPendingCommit ||
          (suspendedLanes === 32 && 0 !== (rootHasPendingCommit & 4194048)))
      ? wipLanes
      : nextLanes;
}
function checkIfRootIsPrerendering(root, renderLanes) {
  return (
    (root.pendingLanes &
      ~(root.suspendedLanes & ~root.pingedLanes) &
      renderLanes) ===
    0
  );
}
function computeExpirationTime(lane, currentTime) {
  switch (lane) {
  case 1:
  case 2:
  case 4:
  case 8:
  case 64:
    return currentTime + syncLaneExpirationMs;
  case 16:
  case 32:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
    return currentTime + transitionLaneExpirationMs;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
    return enableRetryLaneExpiration
      ? currentTime + retryLaneExpirationMs
      : -1;
  case 67108864:
  case 134217728:
  case 268435456:
  case 536870912:
  case 1073741824:
    return -1;
  default:
    return -1;
  }
}
function claimNextRetryLane() {
  let lane = nextRetryLane;
  nextRetryLane <<= 1;
  (nextRetryLane & 62914560) === 0 && (nextRetryLane = 4194304);
  return lane;
}
function createLaneMap(initial) {
  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
  return laneMap;
}
function markRootFinished(
  root,
  finishedLanes,
  remainingLanes,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes
) {
  let previouslyPendingLanes = root.pendingLanes;
  root.pendingLanes = remainingLanes;
  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.warmLanes = 0;
  root.indicatorLanes &= remainingLanes;
  root.expiredLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  root.errorRecoveryDisabledLanes &= remainingLanes;
  root.shellSuspendCounter = 0;
  let entanglements = root.entanglements;
  let expirationTimes = root.expirationTimes;
  let hiddenUpdates = root.hiddenUpdates;
  for (
    remainingLanes = previouslyPendingLanes & ~remainingLanes;
    0 < remainingLanes;

  ) {
    let index$5 = 31 - clz32(remainingLanes);
    let lane = 1 << index$5;
    entanglements[index$5] = 0;
    expirationTimes[index$5] = -1;
    let hiddenUpdatesForLane = hiddenUpdates[index$5];
    if (null !== hiddenUpdatesForLane)
      for (
        hiddenUpdates[index$5] = null, index$5 = 0;
        index$5 < hiddenUpdatesForLane.length;
        index$5++
      ) {
        let update = hiddenUpdatesForLane[index$5];
        null !== update && (update.lane &= -536870913);
      }
    remainingLanes &= ~lane;
  }
  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
  0 !== suspendedRetryLanes &&
    updatedLanes === 0 &&
    0 !== root.tag &&
    (root.suspendedLanes |=
      suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
}
function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
  root.pendingLanes |= spawnedLane;
  root.suspendedLanes &= ~spawnedLane;
  let spawnedLaneIndex = 31 - clz32(spawnedLane);
  root.entangledLanes |= spawnedLane;
  root.entanglements[spawnedLaneIndex] =
    root.entanglements[spawnedLaneIndex] |
    1073741824 |
    (entangledLanes & 261930);
}
function markRootEntangled(root, entangledLanes) {
  let rootEntangledLanes = (root.entangledLanes |= entangledLanes);
  for (root = root.entanglements; rootEntangledLanes; ) {
    let index$6 = 31 - clz32(rootEntangledLanes);
    let lane = 1 << index$6;
    (lane & entangledLanes) | (root[index$6] & entangledLanes) &&
      (root[index$6] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
function getBumpedLaneForHydration(root, renderLanes) {
  let renderLane = renderLanes & -renderLanes;
  renderLane =
    0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
  return 0 !== (renderLane & (root.suspendedLanes | renderLanes))
    ? 0
    : renderLane;
}
function getBumpedLaneForHydrationByLane(lane) {
  switch (lane) {
  case 2:
    lane = 1;
    break;
  case 8:
    lane = 4;
    break;
  case 32:
    lane = 16;
    break;
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
    lane = 128;
    break;
  case 268435456:
    lane = 134217728;
    break;
  default:
    lane = 0;
  }
  return lane;
}
function addFiberToLanesMap(root, fiber, lanes) {
  if (isDevToolsPresent)
    for (root = root.pendingUpdatersLaneMap; 0 < lanes; ) {
      let index$8 = 31 - clz32(lanes);
      let lane = 1 << index$8;
      root[index$8].add(fiber);
      lanes &= ~lane;
    }
}
function movePendingFibersToMemoized(root, lanes) {
  if (isDevToolsPresent)
    for (
      var pendingUpdatersLaneMap = root.pendingUpdatersLaneMap,
        memoizedUpdaters = root.memoizedUpdaters;
      0 < lanes;

    ) {
      let index$9 = 31 - clz32(lanes);
      root = 1 << index$9;
      index$9 = pendingUpdatersLaneMap[index$9];
      0 < index$9.size &&
        (index$9.forEach((fiber) => {
          let alternate = fiber.alternate;
          (null !== alternate && memoizedUpdaters.has(alternate)) ||
            memoizedUpdaters.add(fiber);
        }),
        index$9.clear());
      lanes &= ~root;
    }
}
function getTransitionsForLanes(root, lanes) {
  if (!enableTransitionTracing) return null;
  for (var transitionsForLanes = []; 0 < lanes; ) {
    let index$11 = 31 - clz32(lanes);
    let lane = 1 << index$11;
    index$11 = root.transitionLanes[index$11];
    null !== index$11 &&
      index$11.forEach((transition) => {
        transitionsForLanes.push(transition);
      });
    lanes &= ~lane;
  }
  return transitionsForLanes.length === 0 ? null : transitionsForLanes;
}
function clearTransitionsForLanes(root, lanes) {
  if (enableTransitionTracing)
    for (; 0 < lanes; ) {
      let index$12 = 31 - clz32(lanes);
      let lane = 1 << index$12;
      null !== root.transitionLanes[index$12] &&
        (root.transitionLanes[index$12] = null);
      lanes &= ~lane;
    }
}
function lanesToEventPriority(lanes) {
  lanes &= -lanes;
  return 2 < lanes
    ? 8 < lanes
      ? 0 !== (lanes & 134217727)
        ? 32
        : 268435456
      : 8
    : 2;
}
function noop$1() {}
let Internals = {
  Events: null,
  d: {
    f: noop$1,
    r: noop$1,
    D: noop$1,
    C: noop$1,
    L: noop$1,
    m: noop$1,
    X: noop$1,
    S: noop$1,
    M: noop$1
  },
  p: 0,
  findDOMNode: null
};
let sharedNotPendingObject = {
  pending: !1,
  data: null,
  method: null,
  action: null
};
let valueStack = [];
let index = -1;
function createCursor(defaultValue) {
  return { current: defaultValue };
}
function pop(cursor) {
  0 > index ||
    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
}
function push(cursor, value) {
  index++;
  valueStack[index] = cursor.current;
  cursor.current = value;
}
let contextStackCursor$1 = createCursor(null);
let contextFiberStackCursor = createCursor(null);
let rootInstanceStackCursor = createCursor(null);
let hostTransitionProviderCursor = createCursor(null);
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor$1, null);
  fiber = nextRootInstance.nodeType;
  switch (fiber) {
  case 9:
  case 11:
    nextRootInstance = (nextRootInstance = nextRootInstance.documentElement)
      ? (nextRootInstance = nextRootInstance.namespaceURI)
        ? getOwnHostContext(nextRootInstance)
        : 0
      : 0;
    break;
  default:
    if (
      ((fiber = fiber === 8 ? nextRootInstance.parentNode : nextRootInstance),
      (nextRootInstance = fiber.tagName),
      (fiber = fiber.namespaceURI))
    )
      (fiber = getOwnHostContext(fiber)),
      (nextRootInstance = getChildHostContextProd(fiber, nextRootInstance));
    else
      switch (nextRootInstance) {
      case "svg":
        nextRootInstance = 1;
        break;
      case "math":
        nextRootInstance = 2;
        break;
      default:
        nextRootInstance = 0;
      }
  }
  pop(contextStackCursor$1);
  push(contextStackCursor$1, nextRootInstance);
}
function popHostContainer() {
  pop(contextStackCursor$1);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
  let context = contextStackCursor$1.current;
  let JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
  context !== JSCompiler_inline_result &&
    (push(contextFiberStackCursor, fiber),
    push(contextStackCursor$1, JSCompiler_inline_result));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber &&
    (pop(contextStackCursor$1), pop(contextFiberStackCursor));
  hostTransitionProviderCursor.current === fiber &&
    (pop(hostTransitionProviderCursor),
    (HostTransitionContext._currentValue = sharedNotPendingObject));
}
let prefix; let suffix;
function describeBuiltInComponentFrame(name) {
  if (void 0 === prefix)
    try {
      throw Error();
    } catch (x) {
      let match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = (match && match[1]) || "";
      suffix =
        -1 < x.stack.indexOf("\n    at")
          ? " (<anonymous>)"
          : -1 < x.stack.indexOf("@")
            ? "@unknown:0:0"
            : "";
    }
  return "\n" + prefix + name + suffix;
}
let reentry = !1;
function describeNativeComponentFrame(fn, construct) {
  if (!fn || reentry) return "";
  reentry = !0;
  let previousPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    let RunInRootFrame = {
      DetermineComponentFrameRoot: function () {
        try {
          if (construct) {
            var Fake = function () {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function () {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                var control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x$13) {
                control = x$13;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x$14) {
              control = x$14;
            }
            (Fake = fn()) &&
              typeof Fake.catch === "function" &&
              Fake.catch(() => {});
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string")
            return [sample.stack, control.stack];
        }
        return [null, null];
      }
    };
    RunInRootFrame.DetermineComponentFrameRoot.displayName =
      "DetermineComponentFrameRoot";
    let namePropDescriptor = Object.getOwnPropertyDescriptor(
      RunInRootFrame.DetermineComponentFrameRoot,
      "name"
    );
    namePropDescriptor &&
      namePropDescriptor.configurable &&
      Object.defineProperty(
        RunInRootFrame.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
    let _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot();
    let sampleStack = _RunInRootFrame$Deter[0];
    let controlStack = _RunInRootFrame$Deter[1];
    if (sampleStack && controlStack) {
      let sampleLines = sampleStack.split("\n");
      let controlLines = controlStack.split("\n");
      for (
        namePropDescriptor = RunInRootFrame = 0;
        RunInRootFrame < sampleLines.length &&
        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

      )
        RunInRootFrame++;
      for (
        ;
        namePropDescriptor < controlLines.length &&
        !controlLines[namePropDescriptor].includes(
          "DetermineComponentFrameRoot"
        );

      )
        namePropDescriptor++;
      if (
        RunInRootFrame === sampleLines.length ||
        namePropDescriptor === controlLines.length
      )
        for (
          RunInRootFrame = sampleLines.length - 1,
          namePropDescriptor = controlLines.length - 1;
          1 <= RunInRootFrame &&
          0 <= namePropDescriptor &&
          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

        )
          namePropDescriptor--;
      for (
        ;
        1 <= RunInRootFrame && 0 <= namePropDescriptor;
        RunInRootFrame--, namePropDescriptor--
      )
        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
            do
              if (
                (RunInRootFrame--,
                namePropDescriptor--,
                0 > namePropDescriptor ||
                  sampleLines[RunInRootFrame] !==
                    controlLines[namePropDescriptor])
              ) {
                let frame =
                  "\n" +
                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
                fn.displayName &&
                  frame.includes("<anonymous>") &&
                  (frame = frame.replace("<anonymous>", fn.displayName));
                return frame;
              }
            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
          }
          break;
        }
    }
  } finally {
    (reentry = !1), (Error.prepareStackTrace = previousPrepareStackTrace);
  }
  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
    : "";
}
function describeFiber(fiber, childFiber) {
  switch (fiber.tag) {
  case 26:
  case 27:
  case 5:
    return describeBuiltInComponentFrame(fiber.type);
  case 16:
    return describeBuiltInComponentFrame("Lazy");
  case 13:
    return fiber.child !== childFiber && null !== childFiber
      ? describeBuiltInComponentFrame("Suspense Fallback")
      : describeBuiltInComponentFrame("Suspense");
  case 19:
    return describeBuiltInComponentFrame("SuspenseList");
  case 0:
  case 15:
    return describeNativeComponentFrame(fiber.type, !1);
  case 11:
    return describeNativeComponentFrame(fiber.type.render, !1);
  case 1:
    return describeNativeComponentFrame(fiber.type, !0);
  case 31:
    return describeBuiltInComponentFrame("Activity");
  case 30:
    if (enableViewTransition)
      return describeBuiltInComponentFrame("ViewTransition");
  default:
    return "";
  }
}
function getStackByFiberInDevAndProd(workInProgress) {
  try {
    let info = "";
    let previous = null;
    do
      (info += describeFiber(workInProgress, previous)),
      (previous = workInProgress),
      (workInProgress = workInProgress.return);
    while (workInProgress);
    return info;
  } catch (x) {
    return "\nError generating stack: " + x.message + "\n" + x.stack;
  }
}
let REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element");
let REACT_ELEMENT_TYPE = renameElementSymbol
  ? Symbol.for("react.transitional.element")
  : REACT_LEGACY_ELEMENT_TYPE;
let REACT_PORTAL_TYPE = Symbol.for("react.portal");
let REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
let REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
let REACT_PROFILER_TYPE = Symbol.for("react.profiler");
let REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
let REACT_CONTEXT_TYPE = Symbol.for("react.context");
let REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
let REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
let REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
let REACT_MEMO_TYPE = Symbol.for("react.memo");
let REACT_LAZY_TYPE = Symbol.for("react.lazy");
let REACT_SCOPE_TYPE = Symbol.for("react.scope");
let REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
let REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
let REACT_TRACING_MARKER_TYPE = Symbol.for("react.tracing_marker");
let REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
let REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
let MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return typeof maybeIterable === "function" ? maybeIterable : null;
}
let REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
function getComponentNameFromType(type) {
  if (type == null) return null;
  if (typeof type === "function")
    return type.$$typeof === REACT_CLIENT_REFERENCE
      ? null
      : type.displayName || type.name || null;
  if (typeof type === "string") return type;
  switch (type) {
  case REACT_FRAGMENT_TYPE:
    return "Fragment";
  case REACT_PROFILER_TYPE:
    return "Profiler";
  case REACT_STRICT_MODE_TYPE:
    return "StrictMode";
  case REACT_SUSPENSE_TYPE:
    return "Suspense";
  case REACT_SUSPENSE_LIST_TYPE:
    return "SuspenseList";
  case REACT_ACTIVITY_TYPE:
    return "Activity";
  case REACT_VIEW_TRANSITION_TYPE:
    if (enableViewTransition) return "ViewTransition";
  case REACT_TRACING_MARKER_TYPE:
    if (enableTransitionTracing) return "TracingMarker";
  }
  if (typeof type === "object")
    switch (type.$$typeof) {
    case REACT_PORTAL_TYPE:
      return "Portal";
    case REACT_CONTEXT_TYPE:
      return type.displayName || "Context";
    case REACT_CONSUMER_TYPE:
      return (type._context.displayName || "Context") + ".Consumer";
    case REACT_FORWARD_REF_TYPE:
      var innerType = type.render;
      type = type.displayName;
      type ||
          ((type = innerType.displayName || innerType.name || ""),
          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
      return type;
    case REACT_MEMO_TYPE:
      return (
        (innerType = type.displayName || null),
        null !== innerType
          ? innerType
          : getComponentNameFromType(type.type) || "Memo"
      );
    case REACT_LAZY_TYPE:
      innerType = type._payload;
      type = type._init;
      try {
        return getComponentNameFromType(type(innerType));
      } catch (x) {}
    }
  return null;
}
function getComponentNameFromFiber(fiber) {
  let type = fiber.type;
  switch (fiber.tag) {
  case 31:
    return "Activity";
  case 24:
    return "Cache";
  case 9:
    return (type._context.displayName || "Context") + ".Consumer";
  case 10:
    return type.displayName || "Context";
  case 18:
    return "DehydratedFragment";
  case 11:
    return (
      (fiber = type.render),
      (fiber = fiber.displayName || fiber.name || ""),
      type.displayName ||
          ("" !== fiber ? "ForwardRef(" + fiber + ")" : "ForwardRef")
    );
  case 7:
    return "Fragment";
  case 26:
  case 27:
  case 5:
    return type;
  case 4:
    return "Portal";
  case 3:
    return "Root";
  case 6:
    return "Text";
  case 16:
    return getComponentNameFromType(type);
  case 8:
    return type === REACT_STRICT_MODE_TYPE ? "StrictMode" : "Mode";
  case 22:
    return "Offscreen";
  case 12:
    return "Profiler";
  case 21:
    return "Scope";
  case 13:
    return "Suspense";
  case 19:
    return "SuspenseList";
  case 25:
    return "TracingMarker";
  case 30:
    if (enableViewTransition) return "ViewTransition";
  case 17:
  case 28:
    break;
  case 1:
  case 0:
  case 14:
  case 15:
    if (typeof type === "function")
      return type.displayName || type.name || null;
    if (typeof type === "string") return type;
    break;
  case 23:
    return "LegacyHidden";
  }
  return null;
}
let hasOwnProperty = Object.prototype.hasOwnProperty;
function resolveUpdatePriority() {
  let updatePriority = Internals.p;
  if (0 !== updatePriority) return updatePriority;
  updatePriority = window.event;
  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
}
function runWithPriority(priority, fn) {
  let previousPriority = Internals.p;
  try {
    return (Internals.p = priority), fn();
  } finally {
    Internals.p = previousPriority;
  }
}
let allNativeEvents = new Set();
allNativeEvents.add("beforeblur");
allNativeEvents.add("afterblur");
let registrationNameDependencies = {};
function registerTwoPhaseEvent(registrationName, dependencies) {
  registerDirectEvent(registrationName, dependencies);
  registerDirectEvent(registrationName + "Capture", dependencies);
}
function registerDirectEvent(registrationName, dependencies) {
  registrationNameDependencies[registrationName] = dependencies;
  for (
    registrationName = 0;
    registrationName < dependencies.length;
    registrationName++
  )
    allNativeEvents.add(dependencies[registrationName]);
}
let VALID_ATTRIBUTE_NAME_REGEX = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
);
let illegalAttributeNameCache = {};
let validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
    return !0;
  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
    return (validatedAttributeNameCache[attributeName] = !0);
  illegalAttributeNameCache[attributeName] = !0;
  return !1;
}
let rootMutationContext = !1;
let viewTransitionMutationContext = !1;
function pushMutationContext() {
  if (!enableViewTransition) return !1;
  let prev = viewTransitionMutationContext;
  viewTransitionMutationContext = !1;
  return prev;
}
function popMutationContext(prev) {
  enableViewTransition &&
    (viewTransitionMutationContext && (rootMutationContext = !0),
    (viewTransitionMutationContext = prev));
}
function trackHostMutation() {
  enableViewTransition
    ? (viewTransitionMutationContext = !0)
    : (rootMutationContext = !0);
}
function setValueForAttribute(node, name, value) {
  if (isAttributeNameSafe(name))
    if (value === null) node.removeAttribute(name);
    else {
      switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
        node.removeAttribute(name);
        return;
      case "boolean":
        var prefix$15 = name.toLowerCase().slice(0, 5);
        if ("data-" !== prefix$15 && "aria-" !== prefix$15) {
          node.removeAttribute(name);
          return;
        }
      }
      node.setAttribute(
        name,
        enableTrustedTypesIntegration ? value : "" + value
      );
    }
}
function setValueForKnownAttribute(node, name, value) {
  if (value === null) node.removeAttribute(name);
  else {
    switch (typeof value) {
    case "undefined":
    case "function":
    case "symbol":
    case "boolean":
      node.removeAttribute(name);
      return;
    }
    node.setAttribute(name, enableTrustedTypesIntegration ? value : "" + value);
  }
}
function setValueForNamespacedAttribute(node, namespace, name, value) {
  if (value === null) node.removeAttribute(name);
  else {
    switch (typeof value) {
    case "undefined":
    case "function":
    case "symbol":
    case "boolean":
      node.removeAttribute(name);
      return;
    }
    node.setAttributeNS(
      namespace,
      name,
      enableTrustedTypesIntegration ? value : "" + value
    );
  }
}
function getToStringValue(value) {
  switch (typeof value) {
  case "bigint":
  case "boolean":
  case "number":
  case "string":
  case "undefined":
    return value;
  case "object":
    return value;
  default:
    return "";
  }
}
function isCheckable(elem) {
  let type = elem.type;
  return (
    (elem = elem.nodeName) &&
    elem.toLowerCase() === "input" &&
    (type === "checkbox" || type === "radio")
  );
}
function trackValueOnNode(node, valueField, currentValue) {
  let descriptor = Object.getOwnPropertyDescriptor(
    node.constructor.prototype,
    valueField
  );
  if (
    !node.hasOwnProperty(valueField) &&
    "undefined" !== typeof descriptor &&
    typeof descriptor.get === "function" &&
    typeof descriptor.set === "function"
  ) {
    let get = descriptor.get;
    let set = descriptor.set;
    Object.defineProperty(node, valueField, {
      configurable: !0,
      get: function () {
        return get.call(this);
      },
      set: function (value) {
        currentValue = "" + value;
        set.call(this, value);
      }
    });
    Object.defineProperty(node, valueField, {
      enumerable: descriptor.enumerable
    });
    return {
      getValue: function () {
        return currentValue;
      },
      setValue: function (value) {
        currentValue = "" + value;
      },
      stopTracking: function () {
        node._valueTracker = null;
        delete node[valueField];
      }
    };
  }
}
function track(node) {
  if (!node._valueTracker) {
    let valueField = isCheckable(node) ? "checked" : "value";
    node._valueTracker = trackValueOnNode(
      node,
      valueField,
      "" + node[valueField]
    );
  }
}
function updateValueIfChanged(node) {
  if (!node) return !1;
  let tracker = node._valueTracker;
  if (!tracker) return !0;
  let lastValue = tracker.getValue();
  let value = "";
  node &&
    (value = isCheckable(node)
      ? node.checked
        ? "true"
        : "false"
      : node.value);
  node = value;
  return node !== lastValue ? (tracker.setValue(node), !0) : !1;
}
function getActiveElement(doc) {
  doc = doc || ("undefined" !== typeof document ? document : void 0);
  if (typeof doc === "undefined") return null;
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
let escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
  return value.replace(
    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
    (ch) => {
      return "\\" + ch.charCodeAt(0).toString(16) + " ";
    }
  );
}
function updateInput(
  element,
  value,
  defaultValue,
  lastDefaultValue,
  checked,
  defaultChecked,
  type,
  name
) {
  element.name = "";
  null != type &&
  "function" !== typeof type &&
  "symbol" !== typeof type &&
  "boolean" !== typeof type
    ? (element.type = type)
    : element.removeAttribute("type");
  if (null != value)
    if (type === "number") {
      if ((value === 0 && element.value === "") || element.value != value)
        element.value = "" + getToStringValue(value);
    } else
      element.value !== "" + getToStringValue(value) &&
        (element.value = "" + getToStringValue(value));
  else
    ("submit" !== type && "reset" !== type) || element.removeAttribute("value");
  null != value
    ? setDefaultValue(element, type, getToStringValue(value))
    : null != defaultValue
      ? setDefaultValue(element, type, getToStringValue(defaultValue))
      : null != lastDefaultValue && element.removeAttribute("value");
  checked == null &&
    null != defaultChecked &&
    (element.defaultChecked = !!defaultChecked);
  null != checked &&
    (element.checked =
      checked && "function" !== typeof checked && "symbol" !== typeof checked);
  null != name &&
  "function" !== typeof name &&
  "symbol" !== typeof name &&
  "boolean" !== typeof name
    ? (element.name = "" + getToStringValue(name))
    : element.removeAttribute("name");
}
function initInput(
  element,
  value,
  defaultValue,
  checked,
  defaultChecked,
  type,
  name,
  isHydrating
) {
  null != type &&
    "function" !== typeof type &&
    "symbol" !== typeof type &&
    "boolean" !== typeof type &&
    (element.type = type);
  if (null != value || null != defaultValue) {
    if (
      !(
        ("submit" !== type && "reset" !== type) ||
        (void 0 !== value && null !== value)
      )
    ) {
      track(element);
      return;
    }
    defaultValue =
      null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    value = null != value ? "" + getToStringValue(value) : defaultValue;
    isHydrating || value === element.value || (element.value = value);
    element.defaultValue = value;
  }
  checked = null != checked ? checked : defaultChecked;
  checked =
    "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
  element.checked = isHydrating ? element.checked : !!checked;
  element.defaultChecked = !!checked;
  null != name &&
    "function" !== typeof name &&
    "symbol" !== typeof name &&
    "boolean" !== typeof name &&
    (element.name = name);
  track(element);
}
function setDefaultValue(node, type, value) {
  (type === "number" && getActiveElement(node.ownerDocument) === node) ||
    node.defaultValue === "" + value ||
    (node.defaultValue = "" + value);
}
let isArrayImpl = Array.isArray;
function updateOptions(node, multiple, propValue, setDefaultSelected) {
  node = node.options;
  if (multiple) {
    multiple = {};
    for (var i = 0; i < propValue.length; i++)
      multiple["$" + propValue[i]] = !0;
    for (propValue = 0; propValue < node.length; propValue++)
      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
      node[propValue].selected !== i && (node[propValue].selected = i),
      i && setDefaultSelected && (node[propValue].defaultSelected = !0);
  } else {
    propValue = "" + getToStringValue(propValue);
    multiple = null;
    for (i = 0; i < node.length; i++) {
      if (node[i].value === propValue) {
        node[i].selected = !0;
        setDefaultSelected && (node[i].defaultSelected = !0);
        return;
      }
      null !== multiple || node[i].disabled || (multiple = node[i]);
    }
    null !== multiple && (multiple.selected = !0);
  }
}
function updateTextarea(element, value, defaultValue) {
  if (
    null != value &&
    ((value = "" + getToStringValue(value)),
    value !== element.value && (element.value = value),
    defaultValue == null)
  ) {
    element.defaultValue !== value && (element.defaultValue = value);
    return;
  }
  element.defaultValue =
    null != defaultValue ? "" + getToStringValue(defaultValue) : "";
}
function initTextarea(element, value, defaultValue, children) {
  if (value == null) {
    if (null != children) {
      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
      if (isArrayImpl(children)) {
        if (1 < children.length) throw Error(formatProdErrorMessage(93));
        children = children[0];
      }
      defaultValue = children;
    }
    defaultValue == null && (defaultValue = "");
    value = defaultValue;
  }
  defaultValue = getToStringValue(value);
  element.defaultValue = defaultValue;
  children = element.textContent;
  children === defaultValue &&
    "" !== children &&
    null !== children &&
    (element.value = children);
  track(element);
}
function setTextContent(node, text) {
  if (text) {
    let firstChild = node.firstChild;
    if (
      firstChild &&
      firstChild === node.lastChild &&
      firstChild.nodeType === 3
    ) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
}
let unitlessNumbers = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function setValueForStyle(style, styleName, value) {
  let isCustomProperty = styleName.indexOf("--") === 0;
  value == null || typeof value === "boolean" || value === ""
    ? isCustomProperty
      ? style.setProperty(styleName, "")
      : styleName === "float"
        ? (style.cssFloat = "")
        : (style[styleName] = "")
    : isCustomProperty
      ? style.setProperty(styleName, value)
      : "number" !== typeof value ||
          value === 0 ||
          unitlessNumbers.has(styleName)
        ? styleName === "float"
          ? (style.cssFloat = value)
          : (style[styleName] = ("" + value).trim())
        : (style[styleName] = value + "px");
}
function setValueForStyles(node, styles, prevStyles) {
  if (null != styles && "object" !== typeof styles)
    throw Error(formatProdErrorMessage(62));
  node = node.style;
  if (null != prevStyles) {
    for (var styleName in prevStyles)
      !prevStyles.hasOwnProperty(styleName) ||
        (null != styles && styles.hasOwnProperty(styleName)) ||
        (styleName.indexOf("--") === 0
          ? node.setProperty(styleName, "")
          : styleName === "float"
            ? (node.cssFloat = "")
            : (node[styleName] = ""),
        trackHostMutation());
    for (let styleName$21 in styles)
      (styleName = styles[styleName$21]),
      styles.hasOwnProperty(styleName$21) &&
          prevStyles[styleName$21] !== styleName &&
          (setValueForStyle(node, styleName$21, styleName),
          trackHostMutation());
  } else
    for (let styleName$22 in styles)
      styles.hasOwnProperty(styleName$22) &&
        setValueForStyle(node, styleName$22, styles[styleName$22]);
}
function isCustomElement(tagName) {
  if (tagName.indexOf("-") === -1) return !1;
  switch (tagName) {
  case "annotation-xml":
  case "color-profile":
  case "font-face":
  case "font-face-src":
  case "font-face-uri":
  case "font-face-format":
  case "font-face-name":
  case "missing-glyph":
    return !1;
  default:
    return !0;
  }
}
let aliases = new Map([
  ["acceptCharset", "accept-charset"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
  ["crossOrigin", "crossorigin"],
  ["accentHeight", "accent-height"],
  ["alignmentBaseline", "alignment-baseline"],
  ["arabicForm", "arabic-form"],
  ["baselineShift", "baseline-shift"],
  ["capHeight", "cap-height"],
  ["clipPath", "clip-path"],
  ["clipRule", "clip-rule"],
  ["colorInterpolation", "color-interpolation"],
  ["colorInterpolationFilters", "color-interpolation-filters"],
  ["colorProfile", "color-profile"],
  ["colorRendering", "color-rendering"],
  ["dominantBaseline", "dominant-baseline"],
  ["enableBackground", "enable-background"],
  ["fillOpacity", "fill-opacity"],
  ["fillRule", "fill-rule"],
  ["floodColor", "flood-color"],
  ["floodOpacity", "flood-opacity"],
  ["fontFamily", "font-family"],
  ["fontSize", "font-size"],
  ["fontSizeAdjust", "font-size-adjust"],
  ["fontStretch", "font-stretch"],
  ["fontStyle", "font-style"],
  ["fontVariant", "font-variant"],
  ["fontWeight", "font-weight"],
  ["glyphName", "glyph-name"],
  ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
  ["glyphOrientationVertical", "glyph-orientation-vertical"],
  ["horizAdvX", "horiz-adv-x"],
  ["horizOriginX", "horiz-origin-x"],
  ["imageRendering", "image-rendering"],
  ["letterSpacing", "letter-spacing"],
  ["lightingColor", "lighting-color"],
  ["markerEnd", "marker-end"],
  ["markerMid", "marker-mid"],
  ["markerStart", "marker-start"],
  ["overlinePosition", "overline-position"],
  ["overlineThickness", "overline-thickness"],
  ["paintOrder", "paint-order"],
  ["panose-1", "panose-1"],
  ["pointerEvents", "pointer-events"],
  ["renderingIntent", "rendering-intent"],
  ["shapeRendering", "shape-rendering"],
  ["stopColor", "stop-color"],
  ["stopOpacity", "stop-opacity"],
  ["strikethroughPosition", "strikethrough-position"],
  ["strikethroughThickness", "strikethrough-thickness"],
  ["strokeDasharray", "stroke-dasharray"],
  ["strokeDashoffset", "stroke-dashoffset"],
  ["strokeLinecap", "stroke-linecap"],
  ["strokeLinejoin", "stroke-linejoin"],
  ["strokeMiterlimit", "stroke-miterlimit"],
  ["strokeOpacity", "stroke-opacity"],
  ["strokeWidth", "stroke-width"],
  ["textAnchor", "text-anchor"],
  ["textDecoration", "text-decoration"],
  ["textRendering", "text-rendering"],
  ["transformOrigin", "transform-origin"],
  ["underlinePosition", "underline-position"],
  ["underlineThickness", "underline-thickness"],
  ["unicodeBidi", "unicode-bidi"],
  ["unicodeRange", "unicode-range"],
  ["unitsPerEm", "units-per-em"],
  ["vAlphabetic", "v-alphabetic"],
  ["vHanging", "v-hanging"],
  ["vIdeographic", "v-ideographic"],
  ["vMathematical", "v-mathematical"],
  ["vectorEffect", "vector-effect"],
  ["vertAdvY", "vert-adv-y"],
  ["vertOriginX", "vert-origin-x"],
  ["vertOriginY", "vert-origin-y"],
  ["wordSpacing", "word-spacing"],
  ["writingMode", "writing-mode"],
  ["xmlnsXlink", "xmlns:xlink"],
  ["xHeight", "x-height"]
]);
let isJavaScriptProtocol =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function sanitizeURL(url) {
  return isJavaScriptProtocol.test("" + url)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : url;
}
function getEventTarget(nativeEvent) {
  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
  nativeEvent.correspondingUseElement &&
    (nativeEvent = nativeEvent.correspondingUseElement);
  return nativeEvent.nodeType === 3 ? nativeEvent.parentNode : nativeEvent;
}
let restoreTarget = null;
let restoreQueue = null;
function restoreStateOfTarget(target) {
  let internalInstance = getInstanceFromNode(target);
  if (internalInstance && (target = internalInstance.stateNode)) {
    let props = getFiberCurrentPropsFromNode(target);
    a: switch (((target = internalInstance.stateNode), internalInstance.type)) {
    case "input":
      updateInput(
        target,
        props.value,
        props.defaultValue,
        props.defaultValue,
        props.checked,
        props.defaultChecked,
        props.type,
        props.name
      );
      internalInstance = props.name;
      if (props.type === "radio" && null != internalInstance) {
        for (props = target; props.parentNode; ) props = props.parentNode;
        props = props.querySelectorAll(
          'input[name="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                "" + internalInstance
              ) +
              '"][type="radio"]'
        );
        for (
          internalInstance = 0;
          internalInstance < props.length;
          internalInstance++
        ) {
          var otherNode = props[internalInstance];
          if (otherNode !== target && otherNode.form === target.form) {
            let otherProps = getFiberCurrentPropsFromNode(otherNode);
            if (!otherProps) throw Error(formatProdErrorMessage(90));
            updateInput(
              otherNode,
              otherProps.value,
              otherProps.defaultValue,
              otherProps.defaultValue,
              otherProps.checked,
              otherProps.defaultChecked,
              otherProps.type,
              otherProps.name
            );
          }
        }
        for (
          internalInstance = 0;
          internalInstance < props.length;
          internalInstance++
        )
          (otherNode = props[internalInstance]),
          otherNode.form === target.form && updateValueIfChanged(otherNode);
      }
      break a;
    case "textarea":
      updateTextarea(target, props.value, props.defaultValue);
      break a;
    case "select":
      (internalInstance = props.value),
      null != internalInstance &&
            updateOptions(target, !!props.multiple, internalInstance, !1);
    }
  }
}
function enqueueStateRestore(target) {
  restoreTarget
    ? restoreQueue
      ? restoreQueue.push(target)
      : (restoreQueue = [target])
    : (restoreTarget = target);
}
function restoreStateIfNeeded() {
  if (restoreTarget) {
    let target = restoreTarget;
    let queuedTargets = restoreQueue;
    restoreQueue = restoreTarget = null;
    restoreStateOfTarget(target);
    if (queuedTargets)
      for (target = 0; target < queuedTargets.length; target++)
        restoreStateOfTarget(queuedTargets[target]);
  }
}
let emptyContextObject = {};
let contextStackCursor = createCursor(emptyContextObject);
let didPerformWorkStackCursor = createCursor(!1);
let previousContext = emptyContextObject;
function getMaskedContext(workInProgress, unmaskedContext) {
  let contextTypes = workInProgress.type.contextTypes;
  if (!contextTypes) return emptyContextObject;
  let instance = workInProgress.stateNode;
  if (
    instance &&
    instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext
  )
    return instance.__reactInternalMemoizedMaskedChildContext;
  let context = {};
  let key;
  for (key in contextTypes) context[key] = unmaskedContext[key];
  instance &&
    ((workInProgress = workInProgress.stateNode),
    (workInProgress.__reactInternalMemoizedUnmaskedChildContext =
      unmaskedContext),
    (workInProgress.__reactInternalMemoizedMaskedChildContext = context));
  return context;
}
function isContextProvider(type) {
  type = type.childContextTypes;
  return null !== type && void 0 !== type;
}
function pushTopLevelContextObject(fiber, context, didChange) {
  if (contextStackCursor.current !== emptyContextObject)
    throw Error(formatProdErrorMessage(168));
  push(contextStackCursor, context);
  push(didPerformWorkStackCursor, didChange);
}
function processChildContext(fiber, type, parentContext) {
  let instance = fiber.stateNode;
  type = type.childContextTypes;
  if ("function" !== typeof instance.getChildContext) return parentContext;
  instance = instance.getChildContext();
  for (let contextKey in instance)
    if (!(contextKey in type))
      throw Error(
        formatProdErrorMessage(
          108,
          getComponentNameFromFiber(fiber) || "Unknown",
          contextKey
        )
      );
  return { ...parentContext, ...instance};
}
function pushContextProvider(workInProgress) {
  workInProgress =
    ((workInProgress = workInProgress.stateNode) &&
      workInProgress.__reactInternalMemoizedMergedChildContext) ||
    emptyContextObject;
  previousContext = contextStackCursor.current;
  push(contextStackCursor, workInProgress);
  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current);
  return !0;
}
function invalidateContextProvider(workInProgress, type, didChange) {
  let instance = workInProgress.stateNode;
  if (!instance) throw Error(formatProdErrorMessage(169));
  didChange
    ? ((workInProgress = processChildContext(
      workInProgress,
      type,
      previousContext
    )),
    (instance.__reactInternalMemoizedMergedChildContext = workInProgress),
    pop(didPerformWorkStackCursor),
    pop(contextStackCursor),
    push(contextStackCursor, workInProgress))
    : pop(didPerformWorkStackCursor);
  push(didPerformWorkStackCursor, didChange);
}
let globalClientIdCounter$1 = 0;
function getViewTransitionName(props, instance) {
  if (null != props.name && "auto" !== props.name) return props.name;
  if (null !== instance.autoName) return instance.autoName;
  props = pendingEffectsRoot.identifierPrefix;
  let globalClientId = globalClientIdCounter$1++;
  props = "_" + props + "t_" + globalClientId.toString(32) + "_";
  return (instance.autoName = props);
}
function getClassNameByType(classByType) {
  if (classByType == null || typeof classByType === "string")
    return classByType;
  let className = null;
  let activeTypes = pendingTransitionTypes;
  if (null !== activeTypes)
    for (let i = 0; i < activeTypes.length; i++) {
      let match = classByType[activeTypes[i]];
      if (null != match) {
        if (match === "none") return "none";
        className = className == null ? match : className + (" " + match);
      }
    }
  return className == null ? classByType.default : className;
}
function getViewTransitionClassName(defaultClass, eventClass) {
  defaultClass = getClassNameByType(defaultClass);
  eventClass = getClassNameByType(eventClass);
  return eventClass == null
    ? defaultClass === "auto"
      ? null
      : defaultClass
    : eventClass === "auto"
      ? null
      : eventClass;
}
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
let objectIs = typeof Object.is === "function" ? Object.is : is;
let reportGlobalError =
    typeof reportError === "function"
      ? reportError
      : function (error) {
        if (
          typeof window === "object" &&
            typeof window.ErrorEvent === "function"
        ) {
          let event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
                typeof error === "object" &&
                null !== error &&
                typeof error.message === "string"
                  ? String(error.message)
                  : String(error),
            error: error
          });
          if (!window.dispatchEvent(event)) return;
        } else if (
          typeof process === "object" &&
            typeof process.emit === "function"
        ) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
let supportsUserTiming =
    "undefined" !== typeof console &&
    typeof console.timeStamp === "function" &&
    !0;
let currentTrack = "Blocking";
function setCurrentTrackFromLanes(lanes) {
  currentTrack =
    lanes & 127
      ? "Blocking"
      : lanes & 4194176
        ? "Transition"
        : lanes & 62914560
          ? "Suspense"
          : lanes & 2080374784
            ? "Idle"
            : "Other";
}
function logComponentTrigger(fiber, startTime, endTime, trigger) {
  supportsUserTiming &&
    ((reusableComponentOptions.start = startTime),
    (reusableComponentOptions.end = endTime),
    (reusableComponentDevToolDetails.color = "warning"),
    (reusableComponentDevToolDetails.tooltipText = trigger),
    (reusableComponentDevToolDetails.properties = null),
    performance.measure(trigger, reusableComponentOptions));
}
function logComponentReappeared(fiber, startTime, endTime) {
  logComponentTrigger(fiber, startTime, endTime, "Reconnect");
}
var reusableComponentDevToolDetails = {
  color: "primary",
  properties: null,
  tooltipText: "",
  track: "Components \u269b"
};
var reusableComponentOptions = {
  start: -0,
  end: -0,
  detail: { devtools: reusableComponentDevToolDetails }
};
function logComponentRender(fiber, startTime, endTime, wasHydrated) {
  let name = getComponentNameFromFiber(fiber);
  if (null !== name && supportsUserTiming) {
    let alternate = fiber.alternate;
    let selfTime = fiber.actualDuration;
    if (alternate === null || alternate.child !== fiber.child)
      for (fiber = fiber.child; null !== fiber; fiber = fiber.sibling)
        selfTime -= fiber.actualDuration;
    console.timeStamp(
      name,
      startTime,
      endTime,
      "Components \u269b",
      void 0,
      0.5 > selfTime
        ? wasHydrated
          ? "tertiary-light"
          : "primary-light"
        : 10 > selfTime
          ? wasHydrated
            ? "tertiary"
            : "primary"
          : 100 > selfTime
            ? wasHydrated
              ? "tertiary-dark"
              : "primary-dark"
            : "error"
    );
  }
}
function logComponentErrored(fiber, startTime, endTime) {
  supportsUserTiming &&
    ((fiber = getComponentNameFromFiber(fiber)),
    null !== fiber &&
      console.timeStamp(
        fiber,
        startTime,
        endTime,
        "Components \u269b",
        void 0,
        "error"
      ));
}
function logComponentEffect(fiber, startTime, endTime, selfTime, errors) {
  null !== errors
    ? supportsUserTiming &&
      ((selfTime = getComponentNameFromFiber(fiber)),
      null !== selfTime &&
        console.timeStamp(
          selfTime,
          startTime,
          endTime,
          "Components \u269b",
          void 0,
          "error"
        ))
    : ((fiber = getComponentNameFromFiber(fiber)),
    null !== fiber &&
        supportsUserTiming &&
        console.timeStamp(
          fiber,
          startTime,
          endTime,
          "Components \u269b",
          void 0,
          1 > selfTime
            ? "secondary-light"
            : 100 > selfTime
              ? "secondary"
              : 500 > selfTime
                ? "secondary-dark"
                : "error"
        ));
}
function logSuspendedRenderPhase(startTime, endTime, lanes) {
  !supportsUserTiming ||
    endTime <= startTime ||
    console.timeStamp(
      "Prewarm",
      startTime,
      endTime,
      currentTrack,
      "Scheduler \u269b",
      (lanes & 738197653) === lanes ? "tertiary-dark" : "primary-dark"
    );
}
function logSuspendedWithDelayPhase(startTime, endTime, lanes) {
  !supportsUserTiming ||
    endTime <= startTime ||
    console.timeStamp(
      "Suspended",
      startTime,
      endTime,
      currentTrack,
      "Scheduler \u269b",
      (lanes & 738197653) === lanes ? "tertiary-dark" : "primary-dark"
    );
}
function logErroredRenderPhase(startTime, endTime) {
  !supportsUserTiming ||
    endTime <= startTime ||
    console.timeStamp(
      "Errored",
      startTime,
      endTime,
      currentTrack,
      "Scheduler \u269b",
      "error"
    );
}
function logCommitErrored(startTime, endTime) {
  !supportsUserTiming ||
    endTime <= startTime ||
    console.timeStamp(
      "Errored",
      startTime,
      endTime,
      currentTrack,
      "Scheduler \u269b",
      "error"
    );
}
function logCommitPhase(startTime, endTime, errors) {
  null !== errors
    ? logCommitErrored(startTime, endTime)
    : !supportsUserTiming ||
      endTime <= startTime ||
      console.timeStamp(
        "Commit",
        startTime,
        endTime,
        currentTrack,
        "Scheduler \u269b",
        "secondary-dark"
      );
}
function logPassiveCommitPhase(startTime, endTime, errors) {
  null !== errors
    ? logCommitErrored(startTime, endTime)
    : !supportsUserTiming ||
      endTime <= startTime ||
      console.timeStamp(
        "Remaining Effects",
        startTime,
        endTime,
        currentTrack,
        "Scheduler \u269b",
        "secondary-dark"
      );
}
let CapturedStacks = new WeakMap();
function createCapturedValueAtFiber(value, source) {
  if (typeof value === "object" && null !== value) {
    let existing = CapturedStacks.get(value);
    if (void 0 !== existing) return existing;
    source = {
      value: value,
      source: source,
      stack: getStackByFiberInDevAndProd(source)
    };
    CapturedStacks.set(value, source);
    return source;
  }
  return {
    value: value,
    source: source,
    stack: getStackByFiberInDevAndProd(source)
  };
}
let forkStack = [];
let forkStackIndex = 0;
let treeForkProvider = null;
let treeForkCount = 0;
let idStack = [];
let idStackIndex = 0;
let treeContextProvider = null;
let treeContextId = 1;
let treeContextOverflow = "";
function pushTreeFork(workInProgress, totalChildren) {
  forkStack[forkStackIndex++] = treeForkCount;
  forkStack[forkStackIndex++] = treeForkProvider;
  treeForkProvider = workInProgress;
  treeForkCount = totalChildren;
}
function pushTreeId(workInProgress, totalChildren, index) {
  idStack[idStackIndex++] = treeContextId;
  idStack[idStackIndex++] = treeContextOverflow;
  idStack[idStackIndex++] = treeContextProvider;
  treeContextProvider = workInProgress;
  let baseIdWithLeadingBit = treeContextId;
  workInProgress = treeContextOverflow;
  let baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
  baseIdWithLeadingBit &= ~(1 << baseLength);
  index += 1;
  let length = 32 - clz32(totalChildren) + baseLength;
  if (30 < length) {
    let numberOfOverflowBits = baseLength - (baseLength % 5);
    length = (
      baseIdWithLeadingBit &
      ((1 << numberOfOverflowBits) - 1)
    ).toString(32);
    baseIdWithLeadingBit >>= numberOfOverflowBits;
    baseLength -= numberOfOverflowBits;
    treeContextId =
      (1 << (32 - clz32(totalChildren) + baseLength)) |
      (index << baseLength) |
      baseIdWithLeadingBit;
    treeContextOverflow = length + workInProgress;
  } else
    (treeContextId =
      (1 << length) | (index << baseLength) | baseIdWithLeadingBit),
    (treeContextOverflow = workInProgress);
}
function pushMaterializedTreeId(workInProgress) {
  null !== workInProgress.return &&
    (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
}
function popTreeContext(workInProgress) {
  for (; workInProgress === treeForkProvider; )
    (treeForkProvider = forkStack[--forkStackIndex]),
    (forkStack[forkStackIndex] = null),
    (treeForkCount = forkStack[--forkStackIndex]),
    (forkStack[forkStackIndex] = null);
  for (; workInProgress === treeContextProvider; )
    (treeContextProvider = idStack[--idStackIndex]),
    (idStack[idStackIndex] = null),
    (treeContextOverflow = idStack[--idStackIndex]),
    (idStack[idStackIndex] = null),
    (treeContextId = idStack[--idStackIndex]),
    (idStack[idStackIndex] = null);
}
function restoreSuspendedTreeContext(workInProgress, suspendedContext) {
  idStack[idStackIndex++] = treeContextId;
  idStack[idStackIndex++] = treeContextOverflow;
  idStack[idStackIndex++] = treeContextProvider;
  treeContextId = suspendedContext.id;
  treeContextOverflow = suspendedContext.overflow;
  treeContextProvider = workInProgress;
}
let hydrationParentFiber = null;
let nextHydratableInstance = null;
let isHydrating = !1;
let hydrationErrors = null;
let rootOrSingletonContext = !1;
let HydrationMismatchException = Error(formatProdErrorMessage(519));
function throwOnHydrationMismatch(fiber) {
  let error = Error(
    formatProdErrorMessage(
      418,
      1 < arguments.length && void 0 !== arguments[1] && arguments[1]
        ? "text"
        : "HTML",
      ""
    )
  );
  queueHydrationError(createCapturedValueAtFiber(error, fiber));
  throw HydrationMismatchException;
}
function prepareToHydrateHostInstance(fiber) {
  let instance = fiber.stateNode;
  let type = fiber.type;
  let props = fiber.memoizedProps;
  instance[internalInstanceKey] = fiber;
  instance[internalPropsKey] = props;
  switch (type) {
  case "dialog":
    listenToNonDelegatedEvent("cancel", instance);
    listenToNonDelegatedEvent("close", instance);
    break;
  case "iframe":
  case "object":
  case "embed":
    listenToNonDelegatedEvent("load", instance);
    break;
  case "video":
  case "audio":
    for (type = 0; type < mediaEventTypes.length; type++)
      listenToNonDelegatedEvent(mediaEventTypes[type], instance);
    break;
  case "source":
    listenToNonDelegatedEvent("error", instance);
    break;
  case "img":
  case "image":
  case "link":
    listenToNonDelegatedEvent("error", instance);
    listenToNonDelegatedEvent("load", instance);
    break;
  case "details":
    listenToNonDelegatedEvent("toggle", instance);
    break;
  case "input":
    listenToNonDelegatedEvent("invalid", instance);
    initInput(
      instance,
      props.value,
      props.defaultValue,
      props.checked,
      props.defaultChecked,
      props.type,
      props.name,
      !0
    );
    break;
  case "select":
    listenToNonDelegatedEvent("invalid", instance);
    break;
  case "textarea":
    listenToNonDelegatedEvent("invalid", instance),
    initTextarea(instance, props.value, props.defaultValue, props.children);
  }
  type = props.children;
  ("string" !== typeof type &&
    "number" !== typeof type &&
    "bigint" !== typeof type) ||
  instance.textContent === "" + type ||
  !0 === props.suppressHydrationWarning ||
  checkForUnmatchedText(instance.textContent, type)
    ? (null != props.popover &&
        (listenToNonDelegatedEvent("beforetoggle", instance),
        listenToNonDelegatedEvent("toggle", instance)),
    null != props.onScroll && listenToNonDelegatedEvent("scroll", instance),
    null != props.onScrollEnd &&
        (listenToNonDelegatedEvent("scrollend", instance),
        enableScrollEndPolyfill &&
          listenToNonDelegatedEvent("scroll", instance)),
    null != props.onClick && (instance.onclick = noop$1),
    (instance = !0))
    : (instance = !1);
  instance || throwOnHydrationMismatch(fiber, !0);
}
function popToNextHostParent(fiber) {
  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
    switch (hydrationParentFiber.tag) {
    case 5:
    case 31:
    case 13:
      rootOrSingletonContext = !1;
      return;
    case 27:
    case 3:
      rootOrSingletonContext = !0;
      return;
    default:
      hydrationParentFiber = hydrationParentFiber.return;
    }
}
function popHydrationState(fiber) {
  if (fiber !== hydrationParentFiber) return !1;
  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = !0), !1;
  let tag = fiber.tag;
  let JSCompiler_temp;
  if ((JSCompiler_temp = 3 !== tag && 27 !== tag)) {
    if ((JSCompiler_temp = tag === 5))
      (JSCompiler_temp = fiber.type),
      (JSCompiler_temp =
          !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) ||
          shouldSetTextContent(fiber.type, fiber.memoizedProps));
    JSCompiler_temp = !JSCompiler_temp;
  }
  JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
  popToNextHostParent(fiber);
  if (tag === 13) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    nextHydratableInstance =
      getNextHydratableInstanceAfterHydrationBoundary(fiber);
  } else if (tag === 31) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    nextHydratableInstance =
      getNextHydratableInstanceAfterHydrationBoundary(fiber);
  } else
    tag === 27
      ? ((tag = nextHydratableInstance),
      isSingletonScope(fiber.type)
        ? ((fiber = previousHydratableOnEnteringScopedSingleton),
        (previousHydratableOnEnteringScopedSingleton = null),
        (nextHydratableInstance = fiber))
        : (nextHydratableInstance = tag))
      : (nextHydratableInstance = hydrationParentFiber
        ? getNextHydratable(fiber.stateNode.nextSibling)
        : null);
  return !0;
}
function resetHydrationState() {
  nextHydratableInstance = hydrationParentFiber = null;
  isHydrating = !1;
}
function upgradeHydrationErrorsToRecoverable() {
  let queuedErrors = hydrationErrors;
  null !== queuedErrors &&
    (workInProgressRootRecoverableErrors === null
      ? (workInProgressRootRecoverableErrors = queuedErrors)
      : workInProgressRootRecoverableErrors.push.apply(
        workInProgressRootRecoverableErrors,
        queuedErrors
      ),
    (hydrationErrors = null));
  return queuedErrors;
}
function queueHydrationError(error) {
  hydrationErrors === null
    ? (hydrationErrors = [error])
    : hydrationErrors.push(error);
}
let valueCursor = createCursor(null);
let currentlyRenderingFiber$1 = null;
let lastContextDependency = null;
function pushProvider(providerFiber, context, nextValue) {
  push(valueCursor, context._currentValue);
  context._currentValue = nextValue;
}
function popProvider(context) {
  context._currentValue = valueCursor.current;
  pop(valueCursor);
}
function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
  for (; null !== parent; ) {
    let alternate = parent.alternate;
    (parent.childLanes & renderLanes) !== renderLanes
      ? ((parent.childLanes |= renderLanes),
      null !== alternate && (alternate.childLanes |= renderLanes))
      : null !== alternate &&
        (alternate.childLanes & renderLanes) !== renderLanes &&
        (alternate.childLanes |= renderLanes);
    if (parent === propagationRoot) break;
    parent = parent.return;
  }
}
function propagateContextChanges(
  workInProgress,
  contexts,
  renderLanes,
  forcePropagateEntireTree
) {
  let fiber = workInProgress.child;
  null !== fiber && (fiber.return = workInProgress);
  for (; null !== fiber; ) {
    let list = fiber.dependencies;
    if (null !== list) {
      var nextFiber = fiber.child;
      list = list.firstContext;
      a: for (; null !== list; ) {
        let dependency = list;
        list = fiber;
        for (let i = 0; i < contexts.length; i++)
          if (dependency.context === contexts[i]) {
            list.lanes |= renderLanes;
            dependency = list.alternate;
            null !== dependency && (dependency.lanes |= renderLanes);
            scheduleContextWorkOnParentPath(
              list.return,
              renderLanes,
              workInProgress
            );
            forcePropagateEntireTree || (nextFiber = null);
            break a;
          }
        list = dependency.next;
      }
    } else if (fiber.tag === 18) {
      nextFiber = fiber.return;
      if (nextFiber === null) throw Error(formatProdErrorMessage(341));
      nextFiber.lanes |= renderLanes;
      list = nextFiber.alternate;
      null !== list && (list.lanes |= renderLanes);
      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
      nextFiber = null;
    } else nextFiber = fiber.child;
    if (null !== nextFiber) nextFiber.return = fiber;
    else
      for (nextFiber = fiber; null !== nextFiber; ) {
        if (nextFiber === workInProgress) {
          nextFiber = null;
          break;
        }
        fiber = nextFiber.sibling;
        if (null !== fiber) {
          fiber.return = nextFiber.return;
          nextFiber = fiber;
          break;
        }
        nextFiber = nextFiber.return;
      }
    fiber = nextFiber;
  }
}
function propagateParentContextChanges(
  current,
  workInProgress,
  renderLanes,
  forcePropagateEntireTree
) {
  current = null;
  for (
    let parent = workInProgress, isInsidePropagationBailout = !1;
    null !== parent;

  ) {
    if (!isInsidePropagationBailout)
      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
      else if (0 !== (parent.flags & 262144)) break;
    if (parent.tag === 10) {
      var currentParent = parent.alternate;
      if (currentParent === null) throw Error(formatProdErrorMessage(387));
      currentParent = currentParent.memoizedProps;
      if (null !== currentParent) {
        let context = parent.type;
        objectIs(parent.pendingProps.value, currentParent.value) ||
          (null !== current ? current.push(context) : (current = [context]));
      }
    } else if (parent === hostTransitionProviderCursor.current) {
      currentParent = parent.alternate;
      if (currentParent === null) throw Error(formatProdErrorMessage(387));
      currentParent.memoizedState.memoizedState !==
        parent.memoizedState.memoizedState &&
        (null !== current
          ? current.push(HostTransitionContext)
          : (current = [HostTransitionContext]));
    }
    parent = parent.return;
  }
  null !== current &&
    propagateContextChanges(
      workInProgress,
      current,
      renderLanes,
      forcePropagateEntireTree
    );
  workInProgress.flags |= 262144;
}
function checkIfContextChanged(currentDependencies) {
  for (
    currentDependencies = currentDependencies.firstContext;
    null !== currentDependencies;

  ) {
    if (
      !objectIs(
        currentDependencies.context._currentValue,
        currentDependencies.memoizedValue
      )
    )
      return !0;
    currentDependencies = currentDependencies.next;
  }
  return !1;
}
function prepareToReadContext(workInProgress) {
  currentlyRenderingFiber$1 = workInProgress;
  lastContextDependency = null;
  workInProgress = workInProgress.dependencies;
  null !== workInProgress && (workInProgress.firstContext = null);
}
function readContext(context) {
  return readContextForConsumer(currentlyRenderingFiber$1, context);
}
function readContextDuringReconciliation(consumer, context) {
  currentlyRenderingFiber$1 === null && prepareToReadContext(consumer);
  return readContextForConsumer(consumer, context);
}
function readContextForConsumer(consumer, context) {
  let value = context._currentValue;
  context = { context: context, memoizedValue: value, next: null };
  if (lastContextDependency === null) {
    if (consumer === null) throw Error(formatProdErrorMessage(308));
    lastContextDependency = context;
    consumer.dependencies = { lanes: 0, firstContext: context };
    consumer.flags |= 524288;
  } else lastContextDependency = lastContextDependency.next = context;
  return value;
}
let AbortControllerLocal =
    "undefined" !== typeof AbortController
      ? AbortController
      : function () {
        let listeners = [];
        let signal = (this.signal = {
          aborted: !1,
          addEventListener: function (type, listener) {
            listeners.push(listener);
          }
        });
        this.abort = function () {
          signal.aborted = !0;
          listeners.forEach((listener) => {
            return listener();
          });
        };
      };
let scheduleCallback$2 = Scheduler.unstable_scheduleCallback;
let NormalPriority = Scheduler.unstable_NormalPriority;
let CacheContext = {
  $$typeof: REACT_CONTEXT_TYPE,
  Consumer: null,
  Provider: null,
  _currentValue: null,
  _currentValue2: null,
  _threadCount: 0
};
function createCache() {
  return {
    controller: new AbortControllerLocal(),
    data: new Map(),
    refCount: 0
  };
}
function releaseCache(cache) {
  cache.refCount--;
  cache.refCount === 0 &&
    scheduleCallback$2(NormalPriority, () => {
      cache.controller.abort();
    });
}
function queueTransitionTypes(root, transitionTypes) {
  if (enableViewTransition && 0 !== (root.pendingLanes & 4194048)) {
    let queued = root.transitionTypes;
    queued === null && (queued = root.transitionTypes = []);
    for (root = 0; root < transitionTypes.length; root++) {
      let transitionType = transitionTypes[root];
      queued.indexOf(transitionType) === -1 && queued.push(transitionType);
    }
  }
}
let entangledTransitionTypes = null;
function claimQueuedTransitionTypes(root) {
  let claimed = root.transitionTypes;
  root.transitionTypes = null;
  return claimed;
}
let now = Scheduler.unstable_now;
let renderStartTime = -0;
let commitStartTime = -0;
let commitEndTime = -0;
let commitErrors = null;
let profilerStartTime = -1.1;
let profilerEffectDuration = -0;
let componentEffectDuration = -0;
let componentEffectStartTime = -1.1;
let componentEffectEndTime = -1.1;
let componentEffectErrors = null;
let blockingClampTime = -0;
let blockingUpdateTime = -1.1;
let blockingUpdateType = 0;
let blockingEventTime = -1.1;
let blockingEventType = null;
let blockingEventIsRepeat = !1;
let blockingSuspendedTime = -1.1;
let transitionClampTime = -0;
let transitionStartTime = -1.1;
let transitionUpdateTime = -1.1;
let transitionUpdateType = 0;
let transitionEventTime = -1.1;
let transitionEventType = null;
let transitionEventIsRepeat = !1;
let transitionSuspendedTime = -1.1;
let yieldReason = 0;
let yieldStartTime = -1.1;
function startUpdateTimerByLane(lane) {
  if (enableComponentPerformanceTrack) {
    let JSCompiler_temp;
    (JSCompiler_temp = 0 !== (lane & 3)) ||
      (JSCompiler_temp = 0 !== (lane & 60));
    if (JSCompiler_temp)
      0 > blockingUpdateTime &&
        ((blockingUpdateTime = now()),
        0 !== (executionContext & 6) && (blockingUpdateType = 1),
        (lane = resolveEventTimeStamp()),
        (JSCompiler_temp = resolveEventType()),
        lane !== blockingEventTime || JSCompiler_temp !== blockingEventType
          ? (blockingEventIsRepeat = !1)
          : null !== JSCompiler_temp && (blockingUpdateType = 1),
        (blockingEventTime = lane),
        (blockingEventType = JSCompiler_temp));
    else if (
      0 !== (lane & 4194048) &&
      0 > transitionUpdateTime &&
      ((transitionUpdateTime = now()), 0 > transitionStartTime)
    ) {
      lane = resolveEventTimeStamp();
      JSCompiler_temp = resolveEventType();
      if (
        lane !== transitionEventTime ||
        JSCompiler_temp !== transitionEventType
      )
        transitionEventIsRepeat = !1;
      transitionEventTime = lane;
      transitionEventType = JSCompiler_temp;
    }
  }
}
function startHostActionTimer() {
  if (enableComponentPerformanceTrack) {
    if (0 > blockingUpdateTime) {
      blockingUpdateTime = now();
      0 !== (executionContext & 6) && (blockingUpdateType = 1);
      var newEventTime = resolveEventTimeStamp();
      var newEventType = resolveEventType();
      newEventTime !== blockingEventTime || newEventType !== blockingEventType
        ? (blockingEventIsRepeat = !1)
        : null !== newEventType && (blockingUpdateType = 1);
      blockingEventTime = newEventTime;
      blockingEventType = newEventType;
    }
    if (
      0 > transitionUpdateTime &&
      ((transitionUpdateTime = now()), 0 > transitionStartTime)
    ) {
      newEventTime = resolveEventTimeStamp();
      newEventType = resolveEventType();
      if (
        newEventTime !== transitionEventTime ||
        newEventType !== transitionEventType
      )
        transitionEventIsRepeat = !1;
      transitionEventTime = newEventTime;
      transitionEventType = newEventType;
    }
  }
}
function pushNestedEffectDurations() {
  let prevEffectDuration = profilerEffectDuration;
  profilerEffectDuration = 0;
  return prevEffectDuration;
}
function popNestedEffectDurations(prevEffectDuration) {
  let elapsedTime = profilerEffectDuration;
  profilerEffectDuration = prevEffectDuration;
  return elapsedTime;
}
function bubbleNestedEffectDurations(prevEffectDuration) {
  let elapsedTime = profilerEffectDuration;
  profilerEffectDuration += prevEffectDuration;
  return elapsedTime;
}
function resetComponentEffectTimers() {
  componentEffectEndTime = componentEffectStartTime = -1.1;
}
function pushComponentEffectStart() {
  let prevEffectStart = componentEffectStartTime;
  componentEffectStartTime = -1.1;
  return prevEffectStart;
}
function popComponentEffectStart(prevEffectStart) {
  0 <= prevEffectStart && (componentEffectStartTime = prevEffectStart);
}
function pushComponentEffectDuration() {
  let prevEffectDuration = componentEffectDuration;
  componentEffectDuration = -0;
  return prevEffectDuration;
}
function popComponentEffectDuration(prevEffectDuration) {
  0 <= prevEffectDuration && (componentEffectDuration = prevEffectDuration);
}
function pushComponentEffectErrors() {
  let prevErrors = componentEffectErrors;
  componentEffectErrors = null;
  return prevErrors;
}
let currentUpdateIsNested = !1;
let nestedUpdateScheduled = !1;
function startProfilerTimer(fiber) {
  profilerStartTime = now();
  0 > fiber.actualStartTime && (fiber.actualStartTime = profilerStartTime);
}
function stopProfilerTimerIfRunningAndRecordDuration(fiber) {
  if (0 <= profilerStartTime) {
    let elapsedTime = now() - profilerStartTime;
    fiber.actualDuration += elapsedTime;
    fiber.selfBaseDuration = elapsedTime;
    profilerStartTime = -1;
  }
}
function stopProfilerTimerIfRunningAndRecordIncompleteDuration(fiber) {
  if (0 <= profilerStartTime) {
    let elapsedTime = now() - profilerStartTime;
    fiber.actualDuration += elapsedTime;
    profilerStartTime = -1;
  }
}
function recordEffectDuration() {
  if (0 <= profilerStartTime) {
    let endTime = now();
    let elapsedTime = endTime - profilerStartTime;
    profilerStartTime = -1;
    profilerEffectDuration += elapsedTime;
    componentEffectDuration += elapsedTime;
    componentEffectEndTime = endTime;
  }
}
function recordEffectError(errorInfo) {
  componentEffectErrors === null && (componentEffectErrors = []);
  componentEffectErrors.push(errorInfo);
  commitErrors === null && (commitErrors = []);
  commitErrors.push(errorInfo);
}
function startEffectTimer() {
  profilerStartTime = now();
  0 > componentEffectStartTime &&
    (componentEffectStartTime = profilerStartTime);
}
function transferActualDuration(fiber) {
  for (let child = fiber.child; child; )
    (fiber.actualDuration += child.actualDuration), (child = child.sibling);
}
let firstScheduledRoot = null;
let lastScheduledRoot = null;
let didScheduleMicrotask = !1;
let mightHavePendingSyncWork = !1;
let isFlushingWork = !1;
let currentEventTransitionLane = 0;
function ensureRootIsScheduled(root) {
  root !== lastScheduledRoot &&
    root.next === null &&
    (lastScheduledRoot === null
      ? (firstScheduledRoot = lastScheduledRoot = root)
      : (lastScheduledRoot = lastScheduledRoot.next = root));
  mightHavePendingSyncWork = !0;
  didScheduleMicrotask ||
    ((didScheduleMicrotask = !0), scheduleImmediateRootScheduleTask());
}
function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
  if (!isFlushingWork && mightHavePendingSyncWork) {
    isFlushingWork = !0;
    do {
      var didPerformSomeWork = !1;
      for (let root$33 = firstScheduledRoot; null !== root$33; ) {
        if (!onlyLegacy)
          if (0 !== syncTransitionLanes) {
            let pendingLanes = root$33.pendingLanes;
            if (pendingLanes === 0) var JSCompiler_inline_result = 0;
            else {
              let suspendedLanes = root$33.suspendedLanes;
              let pingedLanes = root$33.pingedLanes;
              JSCompiler_inline_result =
                (1 << (31 - clz32(42 | syncTransitionLanes) + 1)) - 1;
              JSCompiler_inline_result &=
                pendingLanes & ~(suspendedLanes & ~pingedLanes);
              JSCompiler_inline_result =
                JSCompiler_inline_result & 201326741
                  ? (JSCompiler_inline_result & 201326741) | 1
                  : JSCompiler_inline_result
                    ? JSCompiler_inline_result | 2
                    : 0;
            }
            0 !== JSCompiler_inline_result &&
              ((didPerformSomeWork = !0),
              performSyncWorkOnRoot(root$33, JSCompiler_inline_result));
          } else
            (JSCompiler_inline_result = workInProgressRootRenderLanes),
            (JSCompiler_inline_result = getNextLanes(
              root$33,
              root$33 === workInProgressRoot ? JSCompiler_inline_result : 0,
              null !== root$33.cancelPendingCommit ||
                  -1 !== root$33.timeoutHandle
            )),
            (JSCompiler_inline_result & 3) === 0 ||
                checkIfRootIsPrerendering(root$33, JSCompiler_inline_result) ||
                ((didPerformSomeWork = !0),
                performSyncWorkOnRoot(root$33, JSCompiler_inline_result));
        root$33 = root$33.next;
      }
    } while (didPerformSomeWork);
    isFlushingWork = !1;
  }
}
function processRootScheduleInImmediateTask() {
  enableComponentPerformanceTrack && (schedulerEvent = window.event);
  processRootScheduleInMicrotask();
}
function processRootScheduleInMicrotask() {
  mightHavePendingSyncWork = didScheduleMicrotask = !1;
  let syncTransitionLanes = 0;
  0 !== currentEventTransitionLane &&
    (syncTransitionLanes = shouldAttemptEagerTransition()
      ? currentEventTransitionLane
      : 32);
  for (
    var currentTime = now$1(), prev = null, root = firstScheduledRoot;
    null !== root;

  ) {
    let next = root.next;
    let nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
    if (nextLanes === 0)
      (root.next = null),
      prev === null ? (firstScheduledRoot = next) : (prev.next = next),
      next === null && (lastScheduledRoot = prev);
    else if (
      ((prev = root), 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
    )
      mightHavePendingSyncWork = !0;
    root = next;
  }
  (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus) ||
    flushSyncWorkAcrossRoots_impl(syncTransitionLanes, !1);
  if (0 !== currentEventTransitionLane) {
    currentEventTransitionLane = 0;
    if (
      needsIsomorphicIndicator &&
      null != isomorphicDefaultTransitionIndicator &&
      pendingIsomorphicIndicator === null
    )
      try {
        pendingIsomorphicIndicator =
          isomorphicDefaultTransitionIndicator() || noop$1;
      } catch (x) {
        (pendingIsomorphicIndicator = noop$1), reportGlobalError(x);
      }
    for (
      syncTransitionLanes = firstScheduledRoot;
      null !== syncTransitionLanes;

    ) {
      if (
        0 !== syncTransitionLanes.indicatorLanes &&
        syncTransitionLanes.pendingIndicator === null
      )
        if (null !== pendingIsomorphicIndicator)
          (currentTime = syncTransitionLanes),
          pendingEntangledRoots++,
          (currentTime.pendingIndicator = releaseIsomorphicIndicator);
        else
          try {
            let onDefaultTransitionIndicator =
              syncTransitionLanes.onDefaultTransitionIndicator;
            syncTransitionLanes.pendingIndicator =
              onDefaultTransitionIndicator() || noop$1;
          } catch (x) {
            (syncTransitionLanes.pendingIndicator = noop$1),
            reportGlobalError(x);
          }
      syncTransitionLanes = syncTransitionLanes.next;
    }
  }
}
function scheduleTaskForRootDuringMicrotask(root, currentTime) {
  let pendingLanes = root.pendingLanes;
  let suspendedLanes = root.suspendedLanes;
  let pingedLanes = root.pingedLanes;
  let expirationTimes = root.expirationTimes;
  for (
    pendingLanes = enableRetryLaneExpiration
      ? pendingLanes
      : pendingLanes & -62914561;
    0 < pendingLanes;

  ) {
    let index$3 = 31 - clz32(pendingLanes);
    let lane = 1 << index$3;
    let expirationTime = expirationTimes[index$3];
    if (expirationTime === -1) {
      if ((lane & suspendedLanes) === 0 || 0 !== (lane & pingedLanes))
        expirationTimes[index$3] = computeExpirationTime(lane, currentTime);
    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
    pendingLanes &= ~lane;
  }
  currentTime = workInProgressRoot;
  suspendedLanes = workInProgressRootRenderLanes;
  suspendedLanes = getNextLanes(
    root,
    root === currentTime ? suspendedLanes : 0,
    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
  );
  pingedLanes = root.callbackNode;
  if (
    suspendedLanes === 0 ||
    (root === currentTime &&
      (workInProgressSuspendedReason === 2 ||
        workInProgressSuspendedReason === 9)) ||
    null !== root.cancelPendingCommit
  )
    return (
      null !== pingedLanes &&
        null !== pingedLanes &&
        cancelCallback$1(pingedLanes),
      (root.callbackNode = null),
      (root.callbackPriority = 0)
    );
  if (
    0 !== (suspendedLanes & 3) &&
    !checkIfRootIsPrerendering(root, suspendedLanes)
  )
    return (
      null !== pingedLanes &&
        null !== pingedLanes &&
        cancelCallback$1(pingedLanes),
      (root.callbackPriority = 2),
      (root.callbackNode = null),
      2
    );
  currentTime = suspendedLanes & -suspendedLanes;
  if (currentTime === root.callbackPriority) return currentTime;
  null !== pingedLanes && cancelCallback$1(pingedLanes);
  switch (lanesToEventPriority(suspendedLanes)) {
  case 2:
  case 8:
    suspendedLanes = UserBlockingPriority;
    break;
  case 32:
    suspendedLanes = NormalPriority$1;
    break;
  case 268435456:
    suspendedLanes = IdlePriority;
    break;
  default:
    suspendedLanes = NormalPriority$1;
  }
  pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
  suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
  root.callbackPriority = currentTime;
  root.callbackNode = suspendedLanes;
  return currentTime;
}
function performWorkOnRootViaSchedulerTask(root, didTimeout) {
  nestedUpdateScheduled = currentUpdateIsNested = !1;
  enableComponentPerformanceTrack && (schedulerEvent = window.event);
  if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
    return (root.callbackNode = null), (root.callbackPriority = 0), null;
  let originalCallbackNode = root.callbackNode;
  if (flushPendingEffects(!0) && root.callbackNode !== originalCallbackNode)
    return null;
  let workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
  );
  if (workInProgressRootRenderLanes$jscomp$0 === 0) return null;
  performWorkOnRoot(
    root,
    workInProgressRootRenderLanes$jscomp$0,
    !disableSchedulerTimeoutInWorkLoop && didTimeout
  );
  scheduleTaskForRootDuringMicrotask(root, now$1());
  return null != root.callbackNode && root.callbackNode === originalCallbackNode
    ? performWorkOnRootViaSchedulerTask.bind(null, root)
    : null;
}
function performSyncWorkOnRoot(root, lanes) {
  if (flushPendingEffects()) return null;
  currentUpdateIsNested = nestedUpdateScheduled;
  nestedUpdateScheduled = !1;
  performWorkOnRoot(root, lanes, !0);
}
function scheduleImmediateRootScheduleTask() {
  scheduleMicrotask(() => {
    0 !== (executionContext & 6)
      ? scheduleCallback$3(
        ImmediatePriority,
        processRootScheduleInImmediateTask
      )
      : processRootScheduleInMicrotask();
  });
}
function requestTransitionLane() {
  if (currentEventTransitionLane === 0) {
    let actionScopeLane = currentEntangledLane;
    actionScopeLane === 0 &&
      ((actionScopeLane = nextTransitionUpdateLane),
      (nextTransitionUpdateLane <<= 1),
      (nextTransitionUpdateLane & 261888) === 0 &&
        (nextTransitionUpdateLane = 256));
    currentEventTransitionLane = actionScopeLane;
  }
  return currentEventTransitionLane;
}
let currentEntangledListeners = null;
let currentEntangledPendingCount = 0;
var currentEntangledLane = 0;
let currentEntangledActionThenable = null;
var isomorphicDefaultTransitionIndicator = void 0;
var pendingIsomorphicIndicator = null;
var pendingEntangledRoots = 0;
var needsIsomorphicIndicator = !1;
function entangleAsyncAction(transition, thenable) {
  if (currentEntangledListeners === null) {
    let entangledListeners = (currentEntangledListeners = []);
    currentEntangledPendingCount = 0;
    currentEntangledLane = requestTransitionLane();
    currentEntangledActionThenable = {
      status: "pending",
      value: void 0,
      then: function (resolve) {
        entangledListeners.push(resolve);
      }
    };
    needsIsomorphicIndicator = !0;
    didScheduleMicrotask ||
      ((didScheduleMicrotask = !0), scheduleImmediateRootScheduleTask());
  }
  currentEntangledPendingCount++;
  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
  return thenable;
}
function pingEngtangledActionScope() {
  if (
    --currentEntangledPendingCount === 0 &&
    (enableComponentPerformanceTrack &&
      (-1 < transitionUpdateTime || (transitionStartTime = -1.1)),
    (entangledTransitionTypes = null),
    pendingEntangledRoots === 0 && stopIsomorphicDefaultIndicator(),
    null !== currentEntangledListeners)
  ) {
    null !== currentEntangledActionThenable &&
      (currentEntangledActionThenable.status = "fulfilled");
    let listeners = currentEntangledListeners;
    currentEntangledListeners = null;
    currentEntangledLane = 0;
    currentEntangledActionThenable = null;
    needsIsomorphicIndicator = !1;
    for (let i = 0; i < listeners.length; i++) (0, listeners[i])();
  }
}
function chainThenableValue(thenable, result) {
  let listeners = [];
  let thenableWithOverride = {
    status: "pending",
    value: null,
    reason: null,
    then: function (resolve) {
      listeners.push(resolve);
    }
  };
  thenable.then(
    () => {
      thenableWithOverride.status = "fulfilled";
      thenableWithOverride.value = result;
      for (let i = 0; i < listeners.length; i++) (0, listeners[i])(result);
    },
    (error) => {
      thenableWithOverride.status = "rejected";
      thenableWithOverride.reason = error;
      for (error = 0; error < listeners.length; error++)
        (0, listeners[error])(void 0);
    }
  );
  return thenableWithOverride;
}
function registerDefaultIndicator(onDefaultTransitionIndicator) {
  void 0 === isomorphicDefaultTransitionIndicator
    ? (isomorphicDefaultTransitionIndicator = onDefaultTransitionIndicator)
    : isomorphicDefaultTransitionIndicator !== onDefaultTransitionIndicator &&
      ((isomorphicDefaultTransitionIndicator = null),
      stopIsomorphicDefaultIndicator());
}
function stopIsomorphicDefaultIndicator() {
  if (null !== pendingIsomorphicIndicator) {
    let cleanup = pendingIsomorphicIndicator;
    pendingIsomorphicIndicator = null;
    cleanup();
  }
}
function releaseIsomorphicIndicator() {
  --pendingEntangledRoots === 0 && stopIsomorphicDefaultIndicator();
}
let prevOnStartTransitionFinish = ReactSharedInternals.S;
ReactSharedInternals.S = function (transition, returnValue) {
  if (
    typeof returnValue === "object" &&
    null !== returnValue &&
    typeof returnValue.then === "function"
  ) {
    if (
      enableComponentPerformanceTrack &&
      0 > transitionStartTime &&
      0 > transitionUpdateTime
    ) {
      transitionStartTime = now();
      var newEventTime = resolveEventTimeStamp();
      var newEventType = resolveEventType();
      if (
        newEventTime !== transitionEventTime ||
        newEventType !== transitionEventType
      )
        transitionEventIsRepeat = !1;
      transitionEventTime = newEventTime;
      transitionEventType = newEventType;
    }
    entangleAsyncAction(transition, returnValue);
  }
  if (enableViewTransition) {
    if (null !== entangledTransitionTypes)
      for (newEventTime = firstScheduledRoot; null !== newEventTime; )
        queueTransitionTypes(newEventTime, entangledTransitionTypes),
        (newEventTime = newEventTime.next);
    newEventTime = transition.types;
    if (null !== newEventTime) {
      for (newEventType = firstScheduledRoot; null !== newEventType; )
        queueTransitionTypes(newEventType, newEventTime),
        (newEventType = newEventType.next);
      if (0 !== currentEntangledLane && enableViewTransition) {
        newEventType = entangledTransitionTypes;
        newEventType === null && (newEventType = entangledTransitionTypes = []);
        for (let i = 0; i < newEventTime.length; i++) {
          let transitionType = newEventTime[i];
          newEventType.indexOf(transitionType) === -1 &&
            newEventType.push(transitionType);
        }
      }
    }
  }
  null !== prevOnStartTransitionFinish &&
    prevOnStartTransitionFinish(transition, returnValue);
};
let resumedCache = createCursor(null);
let transitionStack = createCursor(null);
function peekCacheFromPool() {
  let cacheResumedFromPreviousRender = resumedCache.current;
  return null !== cacheResumedFromPreviousRender
    ? cacheResumedFromPreviousRender
    : workInProgressRoot.pooledCache;
}
function pushTransition(
  offscreenWorkInProgress,
  prevCachePool,
  newTransitions
) {
  prevCachePool === null
    ? push(resumedCache, resumedCache.current)
    : push(resumedCache, prevCachePool.pool);
  enableTransitionTracing &&
    (transitionStack.current === null
      ? push(transitionStack, newTransitions)
      : newTransitions === null
        ? push(transitionStack, transitionStack.current)
        : push(
          transitionStack,
          transitionStack.current.concat(newTransitions)
        ));
}
function popTransition(workInProgress, current) {
  null !== current &&
    (enableTransitionTracing && pop(transitionStack), pop(resumedCache));
}
function getSuspendedCache() {
  let cacheFromPool = peekCacheFromPool();
  return cacheFromPool === null
    ? null
    : { parent: CacheContext._currentValue, pool: cacheFromPool };
}
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return !0;
  if (
    "object" !== typeof objA ||
    objA === null ||
    "object" !== typeof objB ||
    objB === null
  )
    return !1;
  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return !1;
  for (keysB = 0; keysB < keysA.length; keysB++) {
    let currentKey = keysA[keysB];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !objectIs(objA[currentKey], objB[currentKey])
    )
      return !1;
  }
  return !0;
}
let SuspenseException = Error(formatProdErrorMessage(460));
let SuspenseyCommitException = Error(formatProdErrorMessage(474));
let SuspenseActionException = Error(formatProdErrorMessage(542));
let noopSuspenseyCommitThenable = { then: function () {} };
function isThenableResolved(thenable) {
  thenable = thenable.status;
  return thenable === "fulfilled" || thenable === "rejected";
}
function trackUsedThenable(thenableState, thenable, index) {
  index = thenableState[index];
  void 0 === index
    ? thenableState.push(thenable)
    : index !== thenable && (thenable.then(noop$1, noop$1), (thenable = index));
  switch (thenable.status) {
  case "fulfilled":
    return thenable.value;
  case "rejected":
    throw (
      ((thenableState = thenable.reason),
      checkIfUseWrappedInAsyncCatch(thenableState),
      thenableState)
    );
  default:
    if (typeof thenable.status === "string") thenable.then(noop$1, noop$1);
    else {
      thenableState = workInProgressRoot;
      if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
        throw Error(formatProdErrorMessage(482));
      thenableState = thenable;
      thenableState.status = "pending";
      thenableState.then(
        (fulfilledValue) => {
          if (thenable.status === "pending") {
            let fulfilledThenable = thenable;
            fulfilledThenable.status = "fulfilled";
            fulfilledThenable.value = fulfilledValue;
          }
        },
        (error) => {
          if (thenable.status === "pending") {
            let rejectedThenable = thenable;
            rejectedThenable.status = "rejected";
            rejectedThenable.reason = error;
          }
        }
      );
    }
    switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw (
        ((thenableState = thenable.reason),
        checkIfUseWrappedInAsyncCatch(thenableState),
        thenableState)
      );
    }
    suspendedThenable = thenable;
    throw SuspenseException;
  }
}
function resolveLazy(lazyType) {
  try {
    let init = lazyType._init;
    return init(lazyType._payload);
  } catch (x) {
    if (null !== x && typeof x === "object" && typeof x.then === "function")
      throw ((suspendedThenable = x), SuspenseException);
    throw x;
  }
}
var suspendedThenable = null;
function getSuspendedThenable() {
  if (suspendedThenable === null) throw Error(formatProdErrorMessage(459));
  let thenable = suspendedThenable;
  suspendedThenable = null;
  return thenable;
}
function checkIfUseWrappedInAsyncCatch(rejectedReason) {
  if (
    rejectedReason === SuspenseException ||
    rejectedReason === SuspenseActionException
  )
    throw Error(formatProdErrorMessage(483));
}
let thenableState$1 = null;
let thenableIndexCounter$1 = 0;
function unwrapThenable(thenable) {
  let index = thenableIndexCounter$1;
  thenableIndexCounter$1 += 1;
  thenableState$1 === null && (thenableState$1 = []);
  return trackUsedThenable(thenableState$1, thenable, index);
}
function coerceRef(workInProgress, element) {
  element = element.props.ref;
  workInProgress.ref = void 0 !== element ? element : null;
}
function throwOnInvalidObjectType(returnFiber, newChild) {
  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
    throw Error(formatProdErrorMessage(525));
  returnFiber = Object.prototype.toString.call(newChild);
  throw Error(
    formatProdErrorMessage(
      31,
      returnFiber === "[object Object]"
        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
        : returnFiber
    )
  );
}
function createChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (shouldTrackSideEffects) {
      let deletions = returnFiber.deletions;
      deletions === null
        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
        : deletions.push(childToDelete);
    }
  }
  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) return null;
    for (; null !== currentFirstChild; )
      deleteChild(returnFiber, currentFirstChild),
      (currentFirstChild = currentFirstChild.sibling);
    return null;
  }
  function mapRemainingChildren(currentFirstChild) {
    for (var existingChildren = new Map(); null !== currentFirstChild; )
      null !== currentFirstChild.key
        ? existingChildren.set(currentFirstChild.key, currentFirstChild)
        : existingChildren.set(currentFirstChild.index, currentFirstChild),
      (currentFirstChild = currentFirstChild.sibling);
    return existingChildren;
  }
  function useFiber(fiber, pendingProps) {
    fiber = createWorkInProgress(fiber, pendingProps);
    fiber.index = 0;
    fiber.sibling = null;
    return fiber;
  }
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects)
      return (newFiber.flags |= 1048576), lastPlacedIndex;
    newIndex = newFiber.alternate;
    if (null !== newIndex)
      return (
        (newIndex = newIndex.index),
        newIndex < lastPlacedIndex
          ? ((newFiber.flags |= 67108866), lastPlacedIndex)
          : newIndex
      );
    newFiber.flags |= 67108866;
    return lastPlacedIndex;
  }
  function placeSingleChild(newFiber) {
    shouldTrackSideEffects &&
      newFiber.alternate === null &&
      (newFiber.flags |= 67108866);
    return newFiber;
  }
  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (current === null || 6 !== current.tag)
      return (
        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, textContent);
    current.return = returnFiber;
    return current;
  }
  function updateElement(returnFiber, current, element, lanes) {
    let elementType = element.type;
    if (elementType === REACT_FRAGMENT_TYPE)
      return (
        (returnFiber = updateFragment(
          returnFiber,
          current,
          element.props.children,
          lanes,
          element.key
        )),
        enableFragmentRefs && coerceRef(returnFiber, element),
        returnFiber
      );
    if (
      null !== current &&
      (current.elementType === elementType ||
        (typeof elementType === "object" &&
          null !== elementType &&
          elementType.$$typeof === REACT_LAZY_TYPE &&
          resolveLazy(elementType) === current.type))
    )
      return (
        (current = useFiber(current, element.props)),
        coerceRef(current, element),
        (current.return = returnFiber),
        current
      );
    current = createFiberFromTypeAndProps(
      element.type,
      element.key,
      element.props,
      null,
      returnFiber.mode,
      lanes
    );
    coerceRef(current, element);
    current.return = returnFiber;
    return current;
  }
  function updatePortal(returnFiber, current, portal, lanes) {
    if (
      current === null ||
      4 !== current.tag ||
      current.stateNode.containerInfo !== portal.containerInfo ||
      current.stateNode.implementation !== portal.implementation
    )
      return (
        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, portal.children || []);
    current.return = returnFiber;
    return current;
  }
  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (current === null || 7 !== current.tag)
      return (
        (current = createFiberFromFragment(
          fragment,
          returnFiber.mode,
          lanes,
          key
        )),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, fragment);
    current.return = returnFiber;
    return current;
  }
  function createChild(returnFiber, newChild, lanes) {
    if (
      (typeof newChild === "string" && "" !== newChild) ||
      typeof newChild === "number" ||
      typeof newChild === "bigint"
    )
      return (
        (newChild = createFiberFromText(
          "" + newChild,
          returnFiber.mode,
          lanes
        )),
        (newChild.return = returnFiber),
        newChild
      );
    if (typeof newChild === "object" && null !== newChild) {
      switch (newChild.$$typeof) {
      case REACT_ELEMENT_TYPE:
        return (
          (lanes = createFiberFromTypeAndProps(
            newChild.type,
            newChild.key,
            newChild.props,
            null,
            returnFiber.mode,
            lanes
          )),
          coerceRef(lanes, newChild),
          (lanes.return = returnFiber),
          lanes
        );
      case REACT_PORTAL_TYPE:
        return (
          (newChild = createFiberFromPortal(
            newChild,
            returnFiber.mode,
            lanes
          )),
          (newChild.return = returnFiber),
          newChild
        );
      case REACT_LAZY_TYPE:
        return (
          (newChild = resolveLazy(newChild)),
          createChild(returnFiber, newChild, lanes)
        );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (newChild = createFiberFromFragment(
            newChild,
            returnFiber.mode,
            lanes,
            null
          )),
          (newChild.return = returnFiber),
          newChild
        );
      if (typeof newChild.then === "function")
        return createChild(returnFiber, unwrapThenable(newChild), lanes);
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return createChild(
          returnFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    let key = null !== oldFiber ? oldFiber.key : null;
    if (
      (typeof newChild === "string" && "" !== newChild) ||
      typeof newChild === "number" ||
      typeof newChild === "bigint"
    )
      return null !== key
        ? null
        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
    if (typeof newChild === "object" && null !== newChild) {
      switch (newChild.$$typeof) {
      case REACT_ELEMENT_TYPE:
        return newChild.key === key
          ? updateElement(returnFiber, oldFiber, newChild, lanes)
          : null;
      case REACT_PORTAL_TYPE:
        return newChild.key === key
          ? updatePortal(returnFiber, oldFiber, newChild, lanes)
          : null;
      case REACT_LAZY_TYPE:
        return (
          (newChild = resolveLazy(newChild)),
          updateSlot(returnFiber, oldFiber, newChild, lanes)
        );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return null !== key
          ? null
          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      if (typeof newChild.then === "function")
        return updateSlot(
          returnFiber,
          oldFiber,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateSlot(
          returnFiber,
          oldFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateFromMap(
    existingChildren,
    returnFiber,
    newIdx,
    newChild,
    lanes
  ) {
    if (
      (typeof newChild === "string" && "" !== newChild) ||
      typeof newChild === "number" ||
      typeof newChild === "bigint"
    )
      return (
        (existingChildren = existingChildren.get(newIdx) || null),
        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
      );
    if (typeof newChild === "object" && null !== newChild) {
      switch (newChild.$$typeof) {
      case REACT_ELEMENT_TYPE:
        return (
          (existingChildren =
              existingChildren.get(
                newChild.key === null ? newIdx : newChild.key
              ) || null),
          updateElement(returnFiber, existingChildren, newChild, lanes)
        );
      case REACT_PORTAL_TYPE:
        return (
          (existingChildren =
              existingChildren.get(
                newChild.key === null ? newIdx : newChild.key
              ) || null),
          updatePortal(returnFiber, existingChildren, newChild, lanes)
        );
      case REACT_LAZY_TYPE:
        return (
          (newChild = resolveLazy(newChild)),
          updateFromMap(
            existingChildren,
            returnFiber,
            newIdx,
            newChild,
            lanes
          )
        );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (existingChildren = existingChildren.get(newIdx) || null),
          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
        );
      if (typeof newChild.then === "function")
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function reconcileChildrenArray(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null;
      null !== oldFiber && newIdx < newChildren.length;
      newIdx++
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      let newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes
      );
      if (newFiber === null) {
        oldFiber === null && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        newFiber.alternate === null &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      previousNewFiber === null
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (newIdx === newChildren.length)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        resultingFirstChild
      );
    if (oldFiber === null) {
      for (; newIdx < newChildren.length; newIdx++)
        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
        null !== oldFiber &&
            ((currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            )),
            previousNewFiber === null
              ? (resultingFirstChild = oldFiber)
              : (previousNewFiber.sibling = oldFiber),
            (previousNewFiber = oldFiber));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      newIdx < newChildren.length;
      newIdx++
    )
      (nextOldFiber = updateFromMap(
        oldFiber,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes
      )),
      null !== nextOldFiber &&
          (shouldTrackSideEffects &&
            null !== nextOldFiber.alternate &&
            oldFiber.delete(
              nextOldFiber.key === null ? newIdx : nextOldFiber.key
            ),
          (currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          )),
          previousNewFiber === null
            ? (resultingFirstChild = nextOldFiber)
            : (previousNewFiber.sibling = nextOldFiber),
          (previousNewFiber = nextOldFiber));
    shouldTrackSideEffects &&
      oldFiber.forEach((child) => {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildrenIterator(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    if (newChildren == null) throw Error(formatProdErrorMessage(151));
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null,
        step = newChildren.next();
      null !== oldFiber && !step.done;
      newIdx++, step = newChildren.next()
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      let newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
      if (newFiber === null) {
        oldFiber === null && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        newFiber.alternate === null &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      previousNewFiber === null
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (step.done)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        resultingFirstChild
      );
    if (oldFiber === null) {
      for (; !step.done; newIdx++, step = newChildren.next())
        (step = createChild(returnFiber, step.value, lanes)),
        null !== step &&
            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
            previousNewFiber === null
              ? (resultingFirstChild = step)
              : (previousNewFiber.sibling = step),
            (previousNewFiber = step));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      !step.done;
      newIdx++, step = newChildren.next()
    )
      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
      null !== step &&
          (shouldTrackSideEffects &&
            null !== step.alternate &&
            oldFiber.delete(step.key === null ? newIdx : step.key),
          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
          previousNewFiber === null
            ? (resultingFirstChild = step)
            : (previousNewFiber.sibling = step),
          (previousNewFiber = step));
    shouldTrackSideEffects &&
      oldFiber.forEach((child) => {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildFibersImpl(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes
  ) {
    typeof newChild === "object" &&
      null !== newChild &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      newChild.key === null &&
      (enableFragmentRefs ? void 0 === newChild.props.ref : 1) &&
      (newChild = newChild.props.children);
    if (typeof newChild === "object" && null !== newChild) {
      switch (newChild.$$typeof) {
      case REACT_ELEMENT_TYPE:
        a: {
          for (var key = newChild.key; null !== currentFirstChild; ) {
            if (currentFirstChild.key === key) {
              key = newChild.type;
              if (key === REACT_FRAGMENT_TYPE) {
                if (currentFirstChild.tag === 7) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  lanes = useFiber(
                    currentFirstChild,
                    newChild.props.children
                  );
                  enableFragmentRefs && coerceRef(lanes, newChild);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                  break a;
                }
              } else if (
                currentFirstChild.elementType === key ||
                  (typeof key === "object" &&
                    null !== key &&
                    key.$$typeof === REACT_LAZY_TYPE &&
                    resolveLazy(key) === currentFirstChild.type)
              ) {
                deleteRemainingChildren(
                  returnFiber,
                  currentFirstChild.sibling
                );
                lanes = useFiber(currentFirstChild, newChild.props);
                coerceRef(lanes, newChild);
                lanes.return = returnFiber;
                returnFiber = lanes;
                break a;
              }
              deleteRemainingChildren(returnFiber, currentFirstChild);
              break;
            } else deleteChild(returnFiber, currentFirstChild);
            currentFirstChild = currentFirstChild.sibling;
          }
          newChild.type === REACT_FRAGMENT_TYPE
            ? ((lanes = createFiberFromFragment(
              newChild.props.children,
              returnFiber.mode,
              lanes,
              newChild.key
            )),
            enableFragmentRefs && coerceRef(lanes, newChild),
            (lanes.return = returnFiber),
            (returnFiber = lanes))
            : ((lanes = createFiberFromTypeAndProps(
              newChild.type,
              newChild.key,
              newChild.props,
              null,
              returnFiber.mode,
              lanes
            )),
            coerceRef(lanes, newChild),
            (lanes.return = returnFiber),
            (returnFiber = lanes));
        }
        return placeSingleChild(returnFiber);
      case REACT_PORTAL_TYPE:
        a: {
          for (key = newChild.key; null !== currentFirstChild; ) {
            if (currentFirstChild.key === key)
              if (
                currentFirstChild.tag === 4 &&
                  currentFirstChild.stateNode.containerInfo ===
                    newChild.containerInfo &&
                  currentFirstChild.stateNode.implementation ===
                    newChild.implementation
              ) {
                deleteRemainingChildren(
                  returnFiber,
                  currentFirstChild.sibling
                );
                lanes = useFiber(currentFirstChild, newChild.children || []);
                lanes.return = returnFiber;
                returnFiber = lanes;
                break a;
              } else {
                deleteRemainingChildren(returnFiber, currentFirstChild);
                break;
              }
            else deleteChild(returnFiber, currentFirstChild);
            currentFirstChild = currentFirstChild.sibling;
          }
          lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
          lanes.return = returnFiber;
          returnFiber = lanes;
        }
        return placeSingleChild(returnFiber);
      case REACT_LAZY_TYPE:
        return (
          (newChild = resolveLazy(newChild)),
          reconcileChildFibersImpl(
            returnFiber,
            currentFirstChild,
            newChild,
            lanes
          )
        );
      }
      if (isArrayImpl(newChild))
        return reconcileChildrenArray(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      if (getIteratorFn(newChild)) {
        key = getIteratorFn(newChild);
        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
        newChild = key.call(newChild);
        return reconcileChildrenIterator(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      }
      if (typeof newChild.then === "function")
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return (typeof newChild === "string" && "" !== newChild) ||
      typeof newChild === "number" ||
      typeof newChild === "bigint"
      ? ((newChild = "" + newChild),
      null !== currentFirstChild && currentFirstChild.tag === 6
        ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
        (lanes = useFiber(currentFirstChild, newChild)),
        (lanes.return = returnFiber),
        (returnFiber = lanes))
        : (deleteRemainingChildren(returnFiber, currentFirstChild),
        (lanes = createFiberFromText(newChild, returnFiber.mode, lanes)),
        (lanes.return = returnFiber),
        (returnFiber = lanes)),
      placeSingleChild(returnFiber))
      : deleteRemainingChildren(returnFiber, currentFirstChild);
  }
  return function (returnFiber, currentFirstChild, newChild, lanes) {
    try {
      thenableIndexCounter$1 = 0;
      let firstChildFiber = reconcileChildFibersImpl(
        returnFiber,
        currentFirstChild,
        newChild,
        lanes
      );
      thenableState$1 = null;
      return firstChildFiber;
    } catch (x) {
      if (x === SuspenseException || x === SuspenseActionException) throw x;
      let fiber = createFiber(29, x, null, returnFiber.mode);
      fiber.lanes = lanes;
      fiber.return = returnFiber;
      return fiber;
    } finally {
    }
  };
}
let reconcileChildFibers = createChildReconciler(!0);
let mountChildFibers = createChildReconciler(!1);
let concurrentQueues = [];
let concurrentQueuesIndex = 0;
let concurrentlyUpdatedLanes = 0;
function finishQueueingConcurrentUpdates() {
  for (
    let endIndex = concurrentQueuesIndex,
      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
    i < endIndex;

  ) {
    let fiber = concurrentQueues[i];
    concurrentQueues[i++] = null;
    let queue = concurrentQueues[i];
    concurrentQueues[i++] = null;
    let update = concurrentQueues[i];
    concurrentQueues[i++] = null;
    let lane = concurrentQueues[i];
    concurrentQueues[i++] = null;
    if (null !== queue && null !== update) {
      let pending = queue.pending;
      pending === null
        ? (update.next = update)
        : ((update.next = pending.next), (pending.next = update));
      queue.pending = update;
    }
    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
  }
}
function enqueueUpdate$1(fiber, queue, update, lane) {
  concurrentQueues[concurrentQueuesIndex++] = fiber;
  concurrentQueues[concurrentQueuesIndex++] = queue;
  concurrentQueues[concurrentQueuesIndex++] = update;
  concurrentQueues[concurrentQueuesIndex++] = lane;
  concurrentlyUpdatedLanes |= lane;
  fiber.lanes |= lane;
  fiber = fiber.alternate;
  null !== fiber && (fiber.lanes |= lane);
}
function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
  enqueueUpdate$1(fiber, queue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function enqueueConcurrentRenderForLane(fiber, lane) {
  enqueueUpdate$1(fiber, null, null, lane);
  return getRootForUpdatedFiber(fiber);
}
function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
  sourceFiber.lanes |= lane;
  let alternate = sourceFiber.alternate;
  null !== alternate && (alternate.lanes |= lane);
  for (var isHidden = !1, parent = sourceFiber.return; null !== parent; )
    (parent.childLanes |= lane),
    (alternate = parent.alternate),
    null !== alternate && (alternate.childLanes |= lane),
    parent.tag === 22 &&
        ((sourceFiber = parent.stateNode),
        sourceFiber === null || sourceFiber._visibility & 1 || (isHidden = !0)),
    (sourceFiber = parent),
    (parent = parent.return);
  return sourceFiber.tag === 3
    ? ((parent = sourceFiber.stateNode),
    isHidden &&
        null !== update &&
        ((isHidden = 31 - clz32(lane)),
        (sourceFiber = parent.hiddenUpdates),
        (alternate = sourceFiber[isHidden]),
        alternate === null
          ? (sourceFiber[isHidden] = [update])
          : alternate.push(update),
        (update.lane = lane | 536870912)),
    parent)
    : null;
}
function getRootForUpdatedFiber(sourceFiber) {
  throwIfInfiniteUpdateLoopDetected();
  for (let parent = sourceFiber.return; null !== parent; )
    (sourceFiber = parent), (parent = sourceFiber.return);
  return sourceFiber.tag === 3 ? sourceFiber.stateNode : null;
}
let hasForceUpdate = !1;
function initializeUpdateQueue(fiber) {
  fiber.updateQueue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function cloneUpdateQueue(current, workInProgress) {
  current = current.updateQueue;
  workInProgress.updateQueue === current &&
    (workInProgress.updateQueue = {
      baseState: current.baseState,
      firstBaseUpdate: current.firstBaseUpdate,
      lastBaseUpdate: current.lastBaseUpdate,
      shared: current.shared,
      callbacks: null
    });
}
function createUpdate(lane) {
  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
}
function enqueueUpdate(fiber, update, lane) {
  let updateQueue = fiber.updateQueue;
  if (updateQueue === null) return null;
  updateQueue = updateQueue.shared;
  if (0 !== (executionContext & 2)) {
    let pending = updateQueue.pending;
    pending === null
      ? (update.next = update)
      : ((update.next = pending.next), (pending.next = update));
    updateQueue.pending = update;
    update = getRootForUpdatedFiber(fiber);
    markUpdateLaneFromFiberToRoot(fiber, null, lane);
    return update;
  }
  enqueueUpdate$1(fiber, updateQueue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function entangleTransitions(root, fiber, lane) {
  fiber = fiber.updateQueue;
  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194048))) {
    let queueLanes = fiber.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    fiber.lanes = lane;
    markRootEntangled(root, lane);
  }
}
function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
  let queue = workInProgress.updateQueue;
  let current = workInProgress.alternate;
  if (
    null !== current &&
    ((current = current.updateQueue), queue === current)
  ) {
    let newFirst = null;
    let newLast = null;
    queue = queue.firstBaseUpdate;
    if (null !== queue) {
      do {
        let clone = {
          lane: queue.lane,
          tag: queue.tag,
          payload: queue.payload,
          callback: null,
          next: null
        };
        newLast === null
          ? (newFirst = newLast = clone)
          : (newLast = newLast.next = clone);
        queue = queue.next;
      } while (null !== queue);
      newLast === null
        ? (newFirst = newLast = capturedUpdate)
        : (newLast = newLast.next = capturedUpdate);
    } else newFirst = newLast = capturedUpdate;
    queue = {
      baseState: current.baseState,
      firstBaseUpdate: newFirst,
      lastBaseUpdate: newLast,
      shared: current.shared,
      callbacks: current.callbacks
    };
    workInProgress.updateQueue = queue;
    return;
  }
  workInProgress = queue.lastBaseUpdate;
  workInProgress === null
    ? (queue.firstBaseUpdate = capturedUpdate)
    : (workInProgress.next = capturedUpdate);
  queue.lastBaseUpdate = capturedUpdate;
}
let didReadFromEntangledAsyncAction = !1;
function suspendIfUpdateReadFromEntangledAsyncAction() {
  if (didReadFromEntangledAsyncAction) {
    let entangledActionThenable = currentEntangledActionThenable;
    if (null !== entangledActionThenable) throw entangledActionThenable;
  }
}
function processUpdateQueue(
  workInProgress$jscomp$0,
  props,
  instance$jscomp$0,
  renderLanes
) {
  didReadFromEntangledAsyncAction = !1;
  let queue = workInProgress$jscomp$0.updateQueue;
  hasForceUpdate = !1;
  let firstBaseUpdate = queue.firstBaseUpdate;
  let lastBaseUpdate = queue.lastBaseUpdate;
  let pendingQueue = queue.shared.pending;
  if (null !== pendingQueue) {
    queue.shared.pending = null;
    var lastPendingUpdate = pendingQueue;
    var firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null;
    lastBaseUpdate === null
      ? (firstBaseUpdate = firstPendingUpdate)
      : (lastBaseUpdate.next = firstPendingUpdate);
    lastBaseUpdate = lastPendingUpdate;
    var current = workInProgress$jscomp$0.alternate;
    null !== current &&
      ((current = current.updateQueue),
      (pendingQueue = current.lastBaseUpdate),
      pendingQueue !== lastBaseUpdate &&
        (pendingQueue === null
          ? (current.firstBaseUpdate = firstPendingUpdate)
          : (pendingQueue.next = firstPendingUpdate),
        (current.lastBaseUpdate = lastPendingUpdate)));
  }
  if (null !== firstBaseUpdate) {
    let newState = queue.baseState;
    lastBaseUpdate = 0;
    current = firstPendingUpdate = lastPendingUpdate = null;
    pendingQueue = firstBaseUpdate;
    do {
      let updateLane = pendingQueue.lane & -536870913;
      let isHiddenUpdate = updateLane !== pendingQueue.lane;
      if (
        isHiddenUpdate
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        0 !== updateLane &&
          updateLane === currentEntangledLane &&
          (didReadFromEntangledAsyncAction = !0);
        null !== current &&
          (current = current.next =
            {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
        a: {
          let workInProgress = workInProgress$jscomp$0;
          let update = pendingQueue;
          updateLane = props;
          let instance = instance$jscomp$0;
          switch (update.tag) {
          case 1:
            workInProgress = update.payload;
            if (typeof workInProgress === "function") {
              newState = workInProgress.call(instance, newState, updateLane);
              break a;
            }
            newState = workInProgress;
            break a;
          case 3:
            workInProgress.flags = (workInProgress.flags & -65537) | 128;
          case 0:
            workInProgress = update.payload;
            updateLane =
                typeof workInProgress === "function"
                  ? workInProgress.call(instance, newState, updateLane)
                  : workInProgress;
            if (updateLane === null || void 0 === updateLane) break a;
            newState = { ...newState, ...updateLane};
            break a;
          case 2:
            hasForceUpdate = !0;
          }
        }
        updateLane = pendingQueue.callback;
        null !== updateLane &&
          ((workInProgress$jscomp$0.flags |= 64),
          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
          (isHiddenUpdate = queue.callbacks),
          isHiddenUpdate === null
            ? (queue.callbacks = [updateLane])
            : isHiddenUpdate.push(updateLane));
      } else
        (isHiddenUpdate = {
          lane: updateLane,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: pendingQueue.callback,
          next: null
        }),
        current === null
          ? ((firstPendingUpdate = current = isHiddenUpdate),
          (lastPendingUpdate = newState))
          : (current = current.next = isHiddenUpdate),
        (lastBaseUpdate |= updateLane);
      pendingQueue = pendingQueue.next;
      if (pendingQueue === null)
        if (((pendingQueue = queue.shared.pending), pendingQueue === null))
          break;
        else
          (isHiddenUpdate = pendingQueue),
          (pendingQueue = isHiddenUpdate.next),
          (isHiddenUpdate.next = null),
          (queue.lastBaseUpdate = isHiddenUpdate),
          (queue.shared.pending = null);
    } while (1);
    current === null && (lastPendingUpdate = newState);
    queue.baseState = lastPendingUpdate;
    queue.firstBaseUpdate = firstPendingUpdate;
    queue.lastBaseUpdate = current;
    firstBaseUpdate === null && (queue.shared.lanes = 0);
    workInProgressRootSkippedLanes |= lastBaseUpdate;
    workInProgress$jscomp$0.lanes = lastBaseUpdate;
    workInProgress$jscomp$0.memoizedState = newState;
  }
}
function callCallback(callback, context) {
  if ("function" !== typeof callback)
    throw Error(formatProdErrorMessage(191, callback));
  callback.call(context);
}
function commitCallbacks(updateQueue, context) {
  let callbacks = updateQueue.callbacks;
  if (null !== callbacks)
    for (
      updateQueue.callbacks = null, updateQueue = 0;
      updateQueue < callbacks.length;
      updateQueue++
    )
      callCallback(callbacks[updateQueue], context);
}
let currentTreeHiddenStackCursor = createCursor(null);
let prevEntangledRenderLanesCursor = createCursor(0);
function pushHiddenContext(fiber, context) {
  fiber = entangledRenderLanes;
  push(prevEntangledRenderLanesCursor, fiber);
  push(currentTreeHiddenStackCursor, context);
  entangledRenderLanes = fiber | context.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
}
function popHiddenContext() {
  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
  pop(currentTreeHiddenStackCursor);
  pop(prevEntangledRenderLanesCursor);
}
let suspenseHandlerStackCursor = createCursor(null);
let shellBoundary = null;
function pushPrimaryTreeSuspenseHandler(handler) {
  let current = handler.alternate;
  let props = handler.pendingProps;
  push(suspenseStackCursor, suspenseStackCursor.current & 1);
  !0 !== props.unstable_avoidThisFallback ||
  (null !== current && currentTreeHiddenStackCursor.current === null)
    ? (push(suspenseHandlerStackCursor, handler),
    shellBoundary === null &&
        (current === null || null !== currentTreeHiddenStackCursor.current
          ? (shellBoundary = handler)
          : null !== current.memoizedState && (shellBoundary = handler)))
    : shellBoundary === null
      ? push(suspenseHandlerStackCursor, handler)
      : push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function pushDehydratedActivitySuspenseHandler(fiber) {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, fiber);
  shellBoundary === null && (shellBoundary = fiber);
}
function pushOffscreenSuspenseHandler(fiber) {
  fiber.tag === 22
    ? (push(suspenseStackCursor, suspenseStackCursor.current),
    push(suspenseHandlerStackCursor, fiber),
    shellBoundary === null && (shellBoundary = fiber))
    : reuseSuspenseHandlerOnStack(fiber);
}
function reuseSuspenseHandlerOnStack() {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function popSuspenseHandler(fiber) {
  pop(suspenseHandlerStackCursor);
  shellBoundary === fiber && (shellBoundary = null);
  pop(suspenseStackCursor);
}
var suspenseStackCursor = createCursor(0);
function findFirstSuspended(row) {
  for (let node = row; null !== node; ) {
    if (node.tag === 13) {
      let state = node.memoizedState;
      if (
        null !== state &&
        ((state = state.dehydrated),
        state === null ||
          isSuspenseInstancePending(state) ||
          isSuspenseInstanceFallback(state))
      )
        return node;
    } else if (
      node.tag === 19 &&
      (node.memoizedProps.revealOrder === "forwards" ||
        node.memoizedProps.revealOrder === "backwards" ||
        node.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
        node.memoizedProps.revealOrder === "together")
    ) {
      if (0 !== (node.flags & 128)) return node;
    } else if (null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === row) break;
    for (; node.sibling === null; ) {
      if (node.return === null || node.return === row) return null;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  return null;
}
let renderLanes = 0;
let currentlyRenderingFiber = null;
let currentHook = null;
let workInProgressHook = null;
let didScheduleRenderPhaseUpdate = !1;
let didScheduleRenderPhaseUpdateDuringThisPass = !1;
let shouldDoubleInvokeUserFnsInHooksDEV = !1;
let localIdCounter = 0;
let thenableIndexCounter = 0;
let thenableState = null;
let globalClientIdCounter = 0;
function throwInvalidHookError() {
  throw Error(formatProdErrorMessage(321));
}
function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) return !1;
  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++)
    if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
  return !0;
}
function renderWithHooks(
  current,
  workInProgress,
  Component,
  props,
  secondArg,
  nextRenderLanes
) {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber = workInProgress;
  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = 0;
  ReactSharedInternals.H =
    current === null || current.memoizedState === null
      ? HooksDispatcherOnMount
      : HooksDispatcherOnUpdate;
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  nextRenderLanes = Component(props, secondArg);
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  didScheduleRenderPhaseUpdateDuringThisPass &&
    (nextRenderLanes = renderWithHooksAgain(
      workInProgress,
      Component,
      props,
      secondArg
    ));
  finishRenderingHooks(current);
  return nextRenderLanes;
}
function finishRenderingHooks(current) {
  ReactSharedInternals.H = ContextOnlyDispatcher;
  let didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdate = !1;
  thenableIndexCounter = 0;
  thenableState = null;
  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
  current === null ||
    didReceiveUpdate ||
    ((current = current.dependencies),
    null !== current &&
      checkIfContextChanged(current) &&
      (didReceiveUpdate = !0));
}
function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
  currentlyRenderingFiber = workInProgress;
  let numberOfReRenders = 0;
  do {
    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
    thenableIndexCounter = 0;
    didScheduleRenderPhaseUpdateDuringThisPass = !1;
    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
    numberOfReRenders += 1;
    workInProgressHook = currentHook = null;
    if (null != workInProgress.updateQueue) {
      var children = workInProgress.updateQueue;
      children.lastEffect = null;
      children.events = null;
      children.stores = null;
      null != children.memoCache && (children.memoCache.index = 0);
    }
    ReactSharedInternals.H = HooksDispatcherOnRerender;
    children = Component(props, secondArg);
  } while (didScheduleRenderPhaseUpdateDuringThisPass);
  return children;
}
function TransitionAwareHostComponent() {
  let dispatcher = ReactSharedInternals.H;
  let maybeThenable = dispatcher.useState()[0];
  maybeThenable =
    typeof maybeThenable.then === "function"
      ? useThenable(maybeThenable)
      : maybeThenable;
  dispatcher = dispatcher.useState()[0];
  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher &&
    (currentlyRenderingFiber.flags |= 1024);
  return maybeThenable;
}
function checkDidRenderIdHook() {
  let didRenderIdHook = 0 !== localIdCounter;
  localIdCounter = 0;
  return didRenderIdHook;
}
function bailoutHooks(current, workInProgress, lanes) {
  workInProgress.updateQueue = current.updateQueue;
  workInProgress.flags &= -2053;
  current.lanes &= ~lanes;
}
function resetHooksOnUnwind(workInProgress) {
  if (didScheduleRenderPhaseUpdate) {
    for (
      workInProgress = workInProgress.memoizedState;
      null !== workInProgress;

    ) {
      let queue = workInProgress.queue;
      null !== queue && (queue.pending = null);
      workInProgress = workInProgress.next;
    }
    didScheduleRenderPhaseUpdate = !1;
  }
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdateDuringThisPass = !1;
  thenableIndexCounter = localIdCounter = 0;
  thenableState = null;
}
function mountWorkInProgressHook() {
  let hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  workInProgressHook === null
    ? (currentlyRenderingFiber.memoizedState = workInProgressHook = hook)
    : (workInProgressHook = workInProgressHook.next = hook);
  return workInProgressHook;
}
function updateWorkInProgressHook() {
  if (currentHook === null) {
    var nextCurrentHook = currentlyRenderingFiber.alternate;
    nextCurrentHook =
      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
  } else nextCurrentHook = currentHook.next;
  let nextWorkInProgressHook =
    workInProgressHook === null
      ? currentlyRenderingFiber.memoizedState
      : workInProgressHook.next;
  if (null !== nextWorkInProgressHook)
    (workInProgressHook = nextWorkInProgressHook),
    (currentHook = nextCurrentHook);
  else {
    if (nextCurrentHook === null) {
      if (currentlyRenderingFiber.alternate === null)
        throw Error(formatProdErrorMessage(467));
      throw Error(formatProdErrorMessage(310));
    }
    currentHook = nextCurrentHook;
    nextCurrentHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };
    workInProgressHook === null
      ? (currentlyRenderingFiber.memoizedState = workInProgressHook =
          nextCurrentHook)
      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
  }
  return workInProgressHook;
}
function createFunctionComponentUpdateQueue() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function useThenable(thenable) {
  let index = thenableIndexCounter;
  thenableIndexCounter += 1;
  thenableState === null && (thenableState = []);
  thenable = trackUsedThenable(thenableState, thenable, index);
  index = currentlyRenderingFiber;
  (workInProgressHook === null
    ? index.memoizedState
    : workInProgressHook.next) ===
    null &&
    ((index = index.alternate),
    (ReactSharedInternals.H =
      index === null || index.memoizedState === null
        ? HooksDispatcherOnMount
        : HooksDispatcherOnUpdate));
  return thenable;
}
function use(usable) {
  if (null !== usable && typeof usable === "object") {
    if (typeof usable.then === "function") return useThenable(usable);
    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
  }
  throw Error(formatProdErrorMessage(438, String(usable)));
}
function useMemoCache(size) {
  let memoCache = null;
  let updateQueue = currentlyRenderingFiber.updateQueue;
  null !== updateQueue && (memoCache = updateQueue.memoCache);
  if (memoCache == null) {
    var current = currentlyRenderingFiber.alternate;
    null !== current &&
      ((current = current.updateQueue),
      null !== current &&
        ((current = current.memoCache),
        null != current &&
          (memoCache = {
            data: enableNoCloningMemoCache
              ? current.data
              : current.data.map((array) => {
                return array.slice();
              }),
            index: 0
          })));
  }
  memoCache == null && (memoCache = { data: [], index: 0 });
  updateQueue === null &&
    ((updateQueue = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = updateQueue));
  updateQueue.memoCache = memoCache;
  updateQueue = memoCache.data[memoCache.index];
  if (void 0 === updateQueue)
    for (
      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
      current < size;
      current++
    )
      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
  memoCache.index++;
  return updateQueue;
}
function basicStateReducer(state, action) {
  return typeof action === "function" ? action(state) : action;
}
function updateReducer(reducer) {
  let hook = updateWorkInProgressHook();
  return updateReducerImpl(hook, currentHook, reducer);
}
function updateReducerImpl(hook, current, reducer) {
  let queue = hook.queue;
  if (queue === null) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  let baseQueue = hook.baseQueue;
  let pendingQueue = queue.pending;
  if (null !== pendingQueue) {
    if (null !== baseQueue) {
      var baseFirst = baseQueue.next;
      baseQueue.next = pendingQueue.next;
      pendingQueue.next = baseFirst;
    }
    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }
  pendingQueue = hook.baseState;
  if (baseQueue === null) hook.memoizedState = pendingQueue;
  else {
    current = baseQueue.next;
    let newBaseQueueFirst = (baseFirst = null);
    let newBaseQueueLast = null;
    let update = current;
    let didReadFromEntangledAsyncAction$75 = !1;
    do {
      let updateLane = update.lane & -536870913;
      if (
        updateLane !== update.lane
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        var revertLane = update.revertLane;
        if (revertLane === 0)
          null !== newBaseQueueLast &&
            (newBaseQueueLast = newBaseQueueLast.next =
              {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }),
          updateLane === currentEntangledLane &&
              (didReadFromEntangledAsyncAction$75 = !0);
        else if ((renderLanes & revertLane) === revertLane) {
          update = update.next;
          revertLane === currentEntangledLane &&
            (didReadFromEntangledAsyncAction$75 = !0);
          continue;
        } else
          (updateLane = {
            lane: 0,
            revertLane: update.revertLane,
            gesture: null,
            action: update.action,
            hasEagerState: update.hasEagerState,
            eagerState: update.eagerState,
            next: null
          }),
          newBaseQueueLast === null
            ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
            (baseFirst = pendingQueue))
            : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
          (currentlyRenderingFiber.lanes |= revertLane),
          (workInProgressRootSkippedLanes |= revertLane);
        updateLane = update.action;
        shouldDoubleInvokeUserFnsInHooksDEV &&
          reducer(pendingQueue, updateLane);
        pendingQueue = update.hasEagerState
          ? update.eagerState
          : reducer(pendingQueue, updateLane);
      } else
        (revertLane = {
          lane: updateLane,
          revertLane: update.revertLane,
          gesture: update.gesture,
          action: update.action,
          hasEagerState: update.hasEagerState,
          eagerState: update.eagerState,
          next: null
        }),
        newBaseQueueLast === null
          ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
          (baseFirst = pendingQueue))
          : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
        (currentlyRenderingFiber.lanes |= updateLane),
        (workInProgressRootSkippedLanes |= updateLane);
      update = update.next;
    } while (null !== update && update !== current);
    newBaseQueueLast === null
      ? (baseFirst = pendingQueue)
      : (newBaseQueueLast.next = newBaseQueueFirst);
    if (
      !objectIs(pendingQueue, hook.memoizedState) &&
      ((didReceiveUpdate = !0),
      didReadFromEntangledAsyncAction$75 &&
        ((reducer = currentEntangledActionThenable), null !== reducer))
    )
      throw reducer;
    hook.memoizedState = pendingQueue;
    hook.baseState = baseFirst;
    hook.baseQueue = newBaseQueueLast;
    queue.lastRenderedState = pendingQueue;
  }
  baseQueue === null && (queue.lanes = 0);
  return [hook.memoizedState, queue.dispatch];
}
function rerenderReducer(reducer) {
  let hook = updateWorkInProgressHook();
  let queue = hook.queue;
  if (queue === null) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  let dispatch = queue.dispatch;
  let lastRenderPhaseUpdate = queue.pending;
  let newState = hook.memoizedState;
  if (null !== lastRenderPhaseUpdate) {
    queue.pending = null;
    let update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
    do (newState = reducer(newState, update.action)), (update = update.next);
    while (update !== lastRenderPhaseUpdate);
    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = newState;
    hook.baseQueue === null && (hook.baseState = newState);
    queue.lastRenderedState = newState;
  }
  return [newState, dispatch];
}
function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  let fiber = currentlyRenderingFiber;
  let hook = updateWorkInProgressHook();
  let isHydrating$jscomp$0 = isHydrating;
  if (isHydrating$jscomp$0) {
    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
    getServerSnapshot = getServerSnapshot();
  } else getServerSnapshot = getSnapshot();
  let snapshotChanged = !objectIs(
    (currentHook || hook).memoizedState,
    getServerSnapshot
  );
  snapshotChanged &&
    ((hook.memoizedState = getServerSnapshot), (didReceiveUpdate = !0));
  hook = hook.queue;
  updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
    subscribe
  ]);
  if (
    hook.getSnapshot !== getSnapshot ||
    snapshotChanged ||
    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
  ) {
    fiber.flags |= 2048;
    pushSimpleEffect(
      9,
      { destroy: void 0 },
      updateStoreInstance.bind(
        null,
        fiber,
        hook,
        getServerSnapshot,
        getSnapshot
      ),
      null
    );
    if (workInProgressRoot === null) throw Error(formatProdErrorMessage(349));
    isHydrating$jscomp$0 ||
      0 !== (renderLanes & 124) ||
      pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
  }
  return getServerSnapshot;
}
function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
  fiber.flags |= 16384;
  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
  getSnapshot = currentlyRenderingFiber.updateQueue;
  getSnapshot === null
    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = getSnapshot),
    (getSnapshot.stores = [fiber]))
    : ((renderedSnapshot = getSnapshot.stores),
    renderedSnapshot === null
      ? (getSnapshot.stores = [fiber])
      : renderedSnapshot.push(fiber));
}
function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
  inst.value = nextSnapshot;
  inst.getSnapshot = getSnapshot;
  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
}
function subscribeToStore(fiber, inst, subscribe) {
  return subscribe(() => {
    checkIfSnapshotChanged(inst) &&
      (startUpdateTimerByLane(2), forceStoreRerender(fiber));
  });
}
function checkIfSnapshotChanged(inst) {
  let latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    let nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function forceStoreRerender(fiber) {
  let root = enqueueConcurrentRenderForLane(fiber, 2);
  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
}
function mountStateImpl(initialState) {
  let hook = mountWorkInProgressHook();
  if (typeof initialState === "function") {
    let initialStateInitializer = initialState;
    initialState = initialStateInitializer();
    if (shouldDoubleInvokeUserFnsInHooksDEV) {
      setIsStrictModeForDevtools(!0);
      try {
        initialStateInitializer();
      } finally {
        setIsStrictModeForDevtools(!1);
      }
    }
  }
  hook.memoizedState = hook.baseState = initialState;
  hook.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  return hook;
}
function updateOptimisticImpl(hook, current, passthrough, reducer) {
  hook.baseState = passthrough;
  return updateReducerImpl(
    hook,
    currentHook,
    typeof reducer === "function" ? reducer : basicStateReducer
  );
}
function dispatchActionState(
  fiber,
  actionQueue,
  setPendingState,
  setState,
  payload
) {
  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
  fiber = actionQueue.action;
  if (null !== fiber) {
    var actionNode = {
      payload: payload,
      action: fiber,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function (listener) {
        actionNode.listeners.push(listener);
      }
    };
    null !== ReactSharedInternals.T
      ? setPendingState(!0)
      : (actionNode.isTransition = !1);
    setState(actionNode);
    setPendingState = actionQueue.pending;
    setPendingState === null
      ? ((actionNode.next = actionQueue.pending = actionNode),
      runActionStateAction(actionQueue, actionNode))
      : ((actionNode.next = setPendingState.next),
      (actionQueue.pending = setPendingState.next = actionNode));
  }
}
function runActionStateAction(actionQueue, node) {
  let action = node.action;
  let payload = node.payload;
  let prevState = actionQueue.state;
  if (node.isTransition) {
    var prevTransition = ReactSharedInternals.T;
    let currentTransition = {};
    enableViewTransition &&
      (currentTransition.types =
        null !== prevTransition ? prevTransition.types : null);
    enableTransitionTracing &&
      ((currentTransition.name = null), (currentTransition.startTime = -1));
    ReactSharedInternals.T = currentTransition;
    try {
      let returnValue = action(prevState, payload);
      let onStartTransitionFinish = ReactSharedInternals.S;
      null !== onStartTransitionFinish &&
        onStartTransitionFinish(currentTransition, returnValue);
      handleActionReturnValue(actionQueue, node, returnValue);
    } catch (error) {
      onActionError(actionQueue, node, error);
    } finally {
      null !== prevTransition &&
        null !== currentTransition.types &&
        (prevTransition.types = currentTransition.types),
      (ReactSharedInternals.T = prevTransition);
    }
  } else
    try {
      (prevTransition = action(prevState, payload)),
      handleActionReturnValue(actionQueue, node, prevTransition);
    } catch (error$81) {
      onActionError(actionQueue, node, error$81);
    }
}
function handleActionReturnValue(actionQueue, node, returnValue) {
  null !== returnValue &&
  typeof returnValue === "object" &&
  typeof returnValue.then === "function"
    ? returnValue.then(
      (nextState) => {
        onActionSuccess(actionQueue, node, nextState);
      },
      (error) => {
        return onActionError(actionQueue, node, error);
      }
    )
    : onActionSuccess(actionQueue, node, returnValue);
}
function onActionSuccess(actionQueue, actionNode, nextState) {
  actionNode.status = "fulfilled";
  actionNode.value = nextState;
  notifyActionListeners(actionNode);
  actionQueue.state = nextState;
  actionNode = actionQueue.pending;
  null !== actionNode &&
    ((nextState = actionNode.next),
    nextState === actionNode
      ? (actionQueue.pending = null)
      : ((nextState = nextState.next),
      (actionNode.next = nextState),
      runActionStateAction(actionQueue, nextState)));
}
function onActionError(actionQueue, actionNode, error) {
  let last = actionQueue.pending;
  actionQueue.pending = null;
  if (null !== last) {
    last = last.next;
    do
      (actionNode.status = "rejected"),
      (actionNode.reason = error),
      notifyActionListeners(actionNode),
      (actionNode = actionNode.next);
    while (actionNode !== last);
  }
  actionQueue.action = null;
}
function notifyActionListeners(actionNode) {
  actionNode = actionNode.listeners;
  for (let i = 0; i < actionNode.length; i++) (0, actionNode[i])();
}
function actionStateReducer(oldState, newState) {
  return newState;
}
function mountActionState(action, initialStateProp) {
  if (isHydrating) {
    var ssrFormState = workInProgressRoot.formState;
    if (null !== ssrFormState) {
      a: {
        var JSCompiler_inline_result = currentlyRenderingFiber;
        if (isHydrating) {
          if (nextHydratableInstance) {
            b: {
              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
              for (
                var inRootOrSingleton = rootOrSingletonContext;
                8 !== JSCompiler_inline_result$jscomp$0.nodeType;

              ) {
                if (!inRootOrSingleton) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                  JSCompiler_inline_result$jscomp$0.nextSibling
                );
                if (JSCompiler_inline_result$jscomp$0 === null) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
              }
              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
              JSCompiler_inline_result$jscomp$0 =
                inRootOrSingleton === "F!" || inRootOrSingleton === "F"
                  ? JSCompiler_inline_result$jscomp$0
                  : null;
            }
            if (JSCompiler_inline_result$jscomp$0) {
              nextHydratableInstance = getNextHydratable(
                JSCompiler_inline_result$jscomp$0.nextSibling
              );
              JSCompiler_inline_result =
                JSCompiler_inline_result$jscomp$0.data === "F!";
              break a;
            }
          }
          throwOnHydrationMismatch(JSCompiler_inline_result);
        }
        JSCompiler_inline_result = !1;
      }
      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
    }
  }
  ssrFormState = mountWorkInProgressHook();
  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
  JSCompiler_inline_result = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: actionStateReducer,
    lastRenderedState: initialStateProp
  };
  ssrFormState.queue = JSCompiler_inline_result;
  ssrFormState = dispatchSetState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result
  );
  JSCompiler_inline_result.dispatch = ssrFormState;
  JSCompiler_inline_result = mountStateImpl(!1);
  inRootOrSingleton = dispatchOptimisticSetState.bind(
    null,
    currentlyRenderingFiber,
    !1,
    JSCompiler_inline_result.queue
  );
  JSCompiler_inline_result = mountWorkInProgressHook();
  JSCompiler_inline_result$jscomp$0 = {
    state: initialStateProp,
    dispatch: null,
    action: action,
    pending: null
  };
  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
  ssrFormState = dispatchActionState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result$jscomp$0,
    inRootOrSingleton,
    ssrFormState
  );
  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
  JSCompiler_inline_result.memoizedState = action;
  return [initialStateProp, ssrFormState, !1];
}
function updateActionState(action) {
  let stateHook = updateWorkInProgressHook();
  return updateActionStateImpl(stateHook, currentHook, action);
}
function updateActionStateImpl(stateHook, currentStateHook, action) {
  currentStateHook = updateReducerImpl(
    stateHook,
    currentStateHook,
    actionStateReducer
  )[0];
  stateHook = updateReducer(basicStateReducer)[0];
  if (
    typeof currentStateHook === "object" &&
    null !== currentStateHook &&
    typeof currentStateHook.then === "function"
  )
    try {
      var state = useThenable(currentStateHook);
    } catch (x) {
      if (x === SuspenseException) throw SuspenseActionException;
      throw x;
    }
  else state = currentStateHook;
  currentStateHook = updateWorkInProgressHook();
  let actionQueue = currentStateHook.queue;
  let dispatch = actionQueue.dispatch;
  action !== currentStateHook.memoizedState &&
    ((currentlyRenderingFiber.flags |= 2048),
    pushSimpleEffect(
      9,
      { destroy: void 0 },
      actionStateActionEffect.bind(null, actionQueue, action),
      null
    ));
  return [state, dispatch, stateHook];
}
function actionStateActionEffect(actionQueue, action) {
  actionQueue.action = action;
}
function rerenderActionState(action) {
  let stateHook = updateWorkInProgressHook();
  let currentStateHook = currentHook;
  if (null !== currentStateHook)
    return updateActionStateImpl(stateHook, currentStateHook, action);
  updateWorkInProgressHook();
  stateHook = stateHook.memoizedState;
  currentStateHook = updateWorkInProgressHook();
  let dispatch = currentStateHook.queue.dispatch;
  currentStateHook.memoizedState = action;
  return [stateHook, dispatch, !1];
}
function pushSimpleEffect(tag, inst, create, deps) {
  tag = { tag: tag, create: create, deps: deps, inst: inst, next: null };
  inst = currentlyRenderingFiber.updateQueue;
  inst === null &&
    ((inst = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = inst));
  create = inst.lastEffect;
  create === null
    ? (inst.lastEffect = tag.next = tag)
    : ((deps = create.next),
    (create.next = tag),
    (tag.next = deps),
    (inst.lastEffect = tag));
  return tag;
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
  let hook = mountWorkInProgressHook();
  currentlyRenderingFiber.flags |= fiberFlags;
  hook.memoizedState = pushSimpleEffect(
    1 | hookFlags,
    { destroy: void 0 },
    create,
    void 0 === deps ? null : deps
  );
}
function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  let hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  let inst = hook.memoizedState.inst;
  null !== currentHook &&
  null !== deps &&
  areHookInputsEqual(deps, currentHook.memoizedState.deps)
    ? (hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps))
    : ((currentlyRenderingFiber.flags |= fiberFlags),
    (hook.memoizedState = pushSimpleEffect(
      1 | hookFlags,
      inst,
      create,
      deps
    )));
}
function mountEffect(create, deps) {
  mountEffectImpl(8390656, 8, create, deps);
}
function updateEffect(create, deps) {
  updateEffectImpl(2048, 8, create, deps);
}
function useEffectEventImpl(payload) {
  currentlyRenderingFiber.flags |= 4;
  let componentUpdateQueue = currentlyRenderingFiber.updateQueue;
  if (componentUpdateQueue === null)
    (componentUpdateQueue = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = componentUpdateQueue),
    (componentUpdateQueue.events = [payload]);
  else {
    let events = componentUpdateQueue.events;
    events === null
      ? (componentUpdateQueue.events = [payload])
      : events.push(payload);
  }
}
function updateEvent(callback) {
  let ref = updateWorkInProgressHook().memoizedState;
  useEffectEventImpl({ ref: ref, nextImpl: callback });
  return function () {
    if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
    return ref.impl.apply(void 0, arguments);
  };
}
function updateInsertionEffect(create, deps) {
  return updateEffectImpl(4, 2, create, deps);
}
function updateLayoutEffect(create, deps) {
  return updateEffectImpl(4, 4, create, deps);
}
function imperativeHandleEffect(create, ref) {
  if (typeof ref === "function") {
    create = create();
    let refCleanup = ref(create);
    return function () {
      typeof refCleanup === "function" ? refCleanup() : ref(null);
    };
  }
  if (null !== ref && void 0 !== ref)
    return (
      (create = create()),
      (ref.current = create),
      function () {
        ref.current = null;
      }
    );
}
function updateImperativeHandle(ref, create, deps) {
  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
}
function mountDebugValue() {}
function updateCallback(callback, deps) {
  let hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  let prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  hook.memoizedState = [callback, deps];
  return callback;
}
function updateMemo(nextCreate, deps) {
  let hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  let prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  prevState = nextCreate();
  if (shouldDoubleInvokeUserFnsInHooksDEV) {
    setIsStrictModeForDevtools(!0);
    try {
      nextCreate();
    } finally {
      setIsStrictModeForDevtools(!1);
    }
  }
  hook.memoizedState = [prevState, deps];
  return prevState;
}
function mountDeferredValueImpl(hook, value, initialValue) {
  if (
    void 0 === initialValue ||
    (0 !== (renderLanes & 1073741824) &&
      (workInProgressRootRenderLanes & 261930) === 0)
  )
    return (hook.memoizedState = value);
  hook.memoizedState = initialValue;
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return initialValue;
}
function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
  if (objectIs(value, prevValue)) return value;
  if (null !== currentTreeHiddenStackCursor.current)
    return (
      (hook = mountDeferredValueImpl(hook, value, initialValue)),
      objectIs(hook, prevValue) || (didReceiveUpdate = !0),
      hook
    );
  if (
    (renderLanes & 42) === 0 ||
    (0 !== (renderLanes & 1073741824) &&
      (workInProgressRootRenderLanes & 261930) === 0)
  )
    return (didReceiveUpdate = !0), (hook.memoizedState = value);
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return prevValue;
}
function startTransition(
  fiber,
  queue,
  pendingState,
  finishedState,
  callback,
  options
) {
  let previousPriority = Internals.p;
  Internals.p =
    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
  let prevTransition = ReactSharedInternals.T;
  let currentTransition = {};
  enableViewTransition &&
    (currentTransition.types =
      null !== prevTransition ? prevTransition.types : null);
  enableTransitionTracing &&
    ((currentTransition.name =
      void 0 !== options && void 0 !== options.name ? options.name : null),
    (currentTransition.startTime = now$1()));
  ReactSharedInternals.T = currentTransition;
  dispatchOptimisticSetState(fiber, !1, queue, pendingState);
  try {
    let returnValue = callback();
    let onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    if (
      null !== returnValue &&
      typeof returnValue === "object" &&
      typeof returnValue.then === "function"
    ) {
      let thenableForFinishedState = chainThenableValue(
        returnValue,
        finishedState
      );
      dispatchSetStateInternal(
        fiber,
        queue,
        thenableForFinishedState,
        requestUpdateLane(fiber)
      );
    } else
      dispatchSetStateInternal(
        fiber,
        queue,
        finishedState,
        requestUpdateLane(fiber)
      );
  } catch (error) {
    dispatchSetStateInternal(
      fiber,
      queue,
      { then: function () {}, status: "rejected", reason: error },
      requestUpdateLane()
    );
  } finally {
    (Internals.p = previousPriority),
    null !== prevTransition &&
        null !== currentTransition.types &&
        (prevTransition.types = currentTransition.types),
    (ReactSharedInternals.T = prevTransition);
  }
}
function noop() {}
function startHostTransition(formFiber, pendingState, action, formData) {
  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
  let queue = ensureFormComponentIsStateful(formFiber).queue;
  startHostActionTimer();
  startTransition(
    formFiber,
    queue,
    pendingState,
    sharedNotPendingObject,
    action === null
      ? noop
      : () => {
        requestFormReset$1(formFiber);
        return action(formData);
      }
  );
}
function ensureFormComponentIsStateful(formFiber) {
  let existingStateHook = formFiber.memoizedState;
  if (null !== existingStateHook) return existingStateHook;
  existingStateHook = {
    memoizedState: sharedNotPendingObject,
    baseState: sharedNotPendingObject,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: sharedNotPendingObject
    },
    next: null
  };
  let initialResetState = {};
  existingStateHook.next = {
    memoizedState: initialResetState,
    baseState: initialResetState,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: initialResetState
    },
    next: null
  };
  formFiber.memoizedState = existingStateHook;
  formFiber = formFiber.alternate;
  null !== formFiber && (formFiber.memoizedState = existingStateHook);
  return existingStateHook;
}
function requestFormReset$1(formFiber) {
  let stateHook = ensureFormComponentIsStateful(formFiber);
  stateHook.next === null && (stateHook = formFiber.alternate.memoizedState);
  dispatchSetStateInternal(
    formFiber,
    stateHook.next.queue,
    {},
    requestUpdateLane()
  );
}
function useHostTransitionStatus() {
  return readContext(HostTransitionContext);
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(fiber, seedKey, seedValue) {
  for (let provider = fiber.return; null !== provider; ) {
    switch (provider.tag) {
    case 24:
    case 3:
      var lane = requestUpdateLane();
      fiber = createUpdate(lane);
      var root$84 = enqueueUpdate(provider, fiber, lane);
      null !== root$84 &&
          (startUpdateTimerByLane(lane),
          scheduleUpdateOnFiber(root$84, provider, lane),
          entangleTransitions(root$84, provider, lane));
      provider = createCache();
      null !== seedKey &&
          void 0 !== seedKey &&
          null !== root$84 &&
          provider.data.set(seedKey, seedValue);
      fiber.payload = { cache: provider };
      return;
    }
    provider = provider.return;
  }
}
function dispatchReducerAction(fiber, queue, action) {
  let lane = requestUpdateLane();
  action = {
    lane: lane,
    revertLane: 0,
    gesture: null,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  isRenderPhaseUpdate(fiber)
    ? enqueueRenderPhaseUpdate(queue, action)
    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
    null !== action &&
        (startUpdateTimerByLane(lane),
        scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane)));
  enableSchedulingProfiler && markStateUpdateScheduled(fiber, lane);
}
function dispatchSetState(fiber, queue, action) {
  let lane = requestUpdateLane();
  dispatchSetStateInternal(fiber, queue, action, lane) &&
    startUpdateTimerByLane(lane);
  enableSchedulingProfiler && markStateUpdateScheduled(fiber, lane);
}
function dispatchSetStateInternal(fiber, queue, action, lane) {
  let update = {
    lane: lane,
    revertLane: 0,
    gesture: null,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
  else {
    let alternate = fiber.alternate;
    if (
      fiber.lanes === 0 &&
      (alternate === null || alternate.lanes === 0) &&
      ((alternate = queue.lastRenderedReducer), null !== alternate)
    )
      try {
        let currentState = queue.lastRenderedState;
        let eagerState = alternate(currentState, action);
        update.hasEagerState = !0;
        update.eagerState = eagerState;
        if (objectIs(eagerState, currentState))
          return (
            enqueueUpdate$1(fiber, queue, update, 0),
            workInProgressRoot === null && finishQueueingConcurrentUpdates(),
            !1
          );
      } catch (error) {
      } finally {
      }
    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
    if (null !== action)
      return (
        scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane),
        !0
      );
  }
  return !1;
}
function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
  action = {
    lane: 2,
    revertLane: requestTransitionLane(),
    gesture: null,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) {
    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
  } else
    (throwIfDuringRender = enqueueConcurrentHookUpdate(
      fiber,
      queue,
      action,
      2
    )),
    null !== throwIfDuringRender &&
        (startUpdateTimerByLane(2),
        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2));
  enableSchedulingProfiler && markStateUpdateScheduled(fiber, 2);
}
function isRenderPhaseUpdate(fiber) {
  let alternate = fiber.alternate;
  return (
    fiber === currentlyRenderingFiber ||
    (null !== alternate && alternate === currentlyRenderingFiber)
  );
}
function enqueueRenderPhaseUpdate(queue, update) {
  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
    !0;
  let pending = queue.pending;
  pending === null
    ? (update.next = update)
    : ((update.next = pending.next), (pending.next = update));
  queue.pending = update;
}
function entangleTransitionUpdate(root, queue, lane) {
  if (0 !== (lane & 4194048)) {
    let queueLanes = queue.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    queue.lanes = lane;
    markRootEntangled(root, lane);
  }
}
var ContextOnlyDispatcher = {
  readContext: readContext,
  use: use,
  useCallback: throwInvalidHookError,
  useContext: throwInvalidHookError,
  useEffect: throwInvalidHookError,
  useImperativeHandle: throwInvalidHookError,
  useLayoutEffect: throwInvalidHookError,
  useInsertionEffect: throwInvalidHookError,
  useMemo: throwInvalidHookError,
  useReducer: throwInvalidHookError,
  useRef: throwInvalidHookError,
  useState: throwInvalidHookError,
  useDebugValue: throwInvalidHookError,
  useDeferredValue: throwInvalidHookError,
  useTransition: throwInvalidHookError,
  useSyncExternalStore: throwInvalidHookError,
  useId: throwInvalidHookError,
  useHostTransitionStatus: throwInvalidHookError,
  useFormState: throwInvalidHookError,
  useActionState: throwInvalidHookError,
  useOptimistic: throwInvalidHookError,
  useMemoCache: throwInvalidHookError,
  useCacheRefresh: throwInvalidHookError
};
ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
var HooksDispatcherOnMount = {
  readContext: readContext,
  use: use,
  useCallback: function (callback, deps) {
    mountWorkInProgressHook().memoizedState = [
      callback,
      void 0 === deps ? null : deps
    ];
    return callback;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle: function (ref, create, deps) {
    deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
    mountEffectImpl(
      4194308,
      4,
      imperativeHandleEffect.bind(null, create, ref),
      deps
    );
  },
  useLayoutEffect: function (create, deps) {
    return mountEffectImpl(4194308, 4, create, deps);
  },
  useInsertionEffect: function (create, deps) {
    mountEffectImpl(4, 2, create, deps);
  },
  useMemo: function (nextCreate, deps) {
    let hook = mountWorkInProgressHook();
    deps = void 0 === deps ? null : deps;
    let nextValue = nextCreate();
    if (shouldDoubleInvokeUserFnsInHooksDEV) {
      setIsStrictModeForDevtools(!0);
      try {
        nextCreate();
      } finally {
        setIsStrictModeForDevtools(!1);
      }
    }
    hook.memoizedState = [nextValue, deps];
    return nextValue;
  },
  useReducer: function (reducer, initialArg, init) {
    let hook = mountWorkInProgressHook();
    if (void 0 !== init) {
      var initialState = init(initialArg);
      if (shouldDoubleInvokeUserFnsInHooksDEV) {
        setIsStrictModeForDevtools(!0);
        try {
          init(initialArg);
        } finally {
          setIsStrictModeForDevtools(!1);
        }
      }
    } else initialState = initialArg;
    hook.memoizedState = hook.baseState = initialState;
    reducer = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: reducer,
      lastRenderedState: initialState
    };
    hook.queue = reducer;
    reducer = reducer.dispatch = dispatchReducerAction.bind(
      null,
      currentlyRenderingFiber,
      reducer
    );
    return [hook.memoizedState, reducer];
  },
  useRef: function (initialValue) {
    let hook = mountWorkInProgressHook();
    initialValue = { current: initialValue };
    return (hook.memoizedState = initialValue);
  },
  useState: function (initialState) {
    initialState = mountStateImpl(initialState);
    let queue = initialState.queue;
    let dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
    queue.dispatch = dispatch;
    return [initialState.memoizedState, dispatch];
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value, initialValue) {
    let hook = mountWorkInProgressHook();
    return mountDeferredValueImpl(hook, value, initialValue);
  },
  useTransition: function () {
    let stateHook = mountStateImpl(!1);
    stateHook = startTransition.bind(
      null,
      currentlyRenderingFiber,
      stateHook.queue,
      !0,
      !1
    );
    mountWorkInProgressHook().memoizedState = stateHook;
    return [!1, stateHook];
  },
  useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
    let fiber = currentlyRenderingFiber;
    let hook = mountWorkInProgressHook();
    if (isHydrating) {
      if (void 0 === getServerSnapshot)
        throw Error(formatProdErrorMessage(407));
      getServerSnapshot = getServerSnapshot();
    } else {
      getServerSnapshot = getSnapshot();
      if (workInProgressRoot === null)
        throw Error(formatProdErrorMessage(349));
      0 !== (workInProgressRootRenderLanes & 124) ||
          pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
    }
    hook.memoizedState = getServerSnapshot;
    let inst = { value: getServerSnapshot, getSnapshot: getSnapshot };
    hook.queue = inst;
    mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
      subscribe
    ]);
    fiber.flags |= 2048;
    pushSimpleEffect(
      9,
      { destroy: void 0 },
      updateStoreInstance.bind(
        null,
        fiber,
        inst,
        getServerSnapshot,
        getSnapshot
      ),
      null
    );
    return getServerSnapshot;
  },
  useId: function () {
    let hook = mountWorkInProgressHook();
    let identifierPrefix = workInProgressRoot.identifierPrefix;
    if (isHydrating) {
      var JSCompiler_inline_result = treeContextOverflow;
      let idWithLeadingBit = treeContextId;
      JSCompiler_inline_result =
          (
            idWithLeadingBit & ~(1 << (32 - clz32(idWithLeadingBit) - 1))
          ).toString(32) + JSCompiler_inline_result;
      identifierPrefix =
          "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
      JSCompiler_inline_result = localIdCounter++;
      0 < JSCompiler_inline_result &&
          (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
      identifierPrefix += "_";
    } else
      (JSCompiler_inline_result = globalClientIdCounter++),
      (identifierPrefix =
            "_" +
            identifierPrefix +
            "r_" +
            JSCompiler_inline_result.toString(32) +
            "_");
    return (hook.memoizedState = identifierPrefix);
  },
  useHostTransitionStatus: useHostTransitionStatus,
  useFormState: mountActionState,
  useActionState: mountActionState,
  useOptimistic: function (passthrough) {
    let hook = mountWorkInProgressHook();
    hook.memoizedState = hook.baseState = passthrough;
    let queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    hook.queue = queue;
    hook = dispatchOptimisticSetState.bind(
      null,
      currentlyRenderingFiber,
      !0,
      queue
    );
    queue.dispatch = hook;
    return [passthrough, hook];
  },
  useMemoCache: useMemoCache,
  useCacheRefresh: function () {
    return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
      null,
      currentlyRenderingFiber
    ));
  },
  useEffectEvent: function (callback) {
    let hook = mountWorkInProgressHook();
    let ref = { impl: callback };
    hook.memoizedState = ref;
    return function () {
      if (0 !== (executionContext & 2))
        throw Error(formatProdErrorMessage(440));
      return ref.impl.apply(void 0, arguments);
    };
  }
};
var HooksDispatcherOnUpdate = {
  readContext: readContext,
  use: use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState: function () {
    return updateReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value, initialValue) {
    let hook = updateWorkInProgressHook();
    return updateDeferredValueImpl(
      hook,
      currentHook.memoizedState,
      value,
      initialValue
    );
  },
  useTransition: function () {
    let booleanOrThenable = updateReducer(basicStateReducer)[0];
    let start = updateWorkInProgressHook().memoizedState;
    return [
      typeof booleanOrThenable === "boolean"
        ? booleanOrThenable
        : useThenable(booleanOrThenable),
      start
    ];
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useHostTransitionStatus: useHostTransitionStatus,
  useFormState: updateActionState,
  useActionState: updateActionState,
  useOptimistic: function (passthrough, reducer) {
    let hook = updateWorkInProgressHook();
    return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
  },
  useMemoCache: useMemoCache,
  useCacheRefresh: updateRefresh
};
HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
var HooksDispatcherOnRerender = {
  readContext: readContext,
  use: use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState: function () {
    return rerenderReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value, initialValue) {
    let hook = updateWorkInProgressHook();
    return currentHook === null
      ? mountDeferredValueImpl(hook, value, initialValue)
      : updateDeferredValueImpl(
        hook,
        currentHook.memoizedState,
        value,
        initialValue
      );
  },
  useTransition: function () {
    let booleanOrThenable = rerenderReducer(basicStateReducer)[0];
    let start = updateWorkInProgressHook().memoizedState;
    return [
      typeof booleanOrThenable === "boolean"
        ? booleanOrThenable
        : useThenable(booleanOrThenable),
      start
    ];
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useHostTransitionStatus: useHostTransitionStatus,
  useFormState: rerenderActionState,
  useActionState: rerenderActionState,
  useOptimistic: function (passthrough, reducer) {
    let hook = updateWorkInProgressHook();
    if (null !== currentHook)
      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
    hook.baseState = passthrough;
    return [passthrough, hook.queue.dispatch];
  },
  useMemoCache: useMemoCache,
  useCacheRefresh: updateRefresh
};
HooksDispatcherOnRerender.useEffectEvent = updateEvent;
function applyDerivedStateFromProps(
  workInProgress,
  ctor,
  getDerivedStateFromProps,
  nextProps
) {
  ctor = workInProgress.memoizedState;
  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
  getDerivedStateFromProps =
    getDerivedStateFromProps === null || void 0 === getDerivedStateFromProps
      ? ctor
      : ({ ...ctor, ...getDerivedStateFromProps});
  workInProgress.memoizedState = getDerivedStateFromProps;
  workInProgress.lanes === 0 &&
    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
}
let classComponentUpdater = {
  enqueueSetState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    let lane = requestUpdateLane();
    let update = createUpdate(lane);
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (startUpdateTimerByLane(lane),
      scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
    enableSchedulingProfiler && markStateUpdateScheduled(inst, lane);
  },
  enqueueReplaceState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    let lane = requestUpdateLane();
    let update = createUpdate(lane);
    update.tag = 1;
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (startUpdateTimerByLane(lane),
      scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
    enableSchedulingProfiler && markStateUpdateScheduled(inst, lane);
  },
  enqueueForceUpdate: function (inst, callback) {
    inst = inst._reactInternals;
    let lane = requestUpdateLane();
    let update = createUpdate(lane);
    update.tag = 2;
    void 0 !== callback && null !== callback && (update.callback = callback);
    callback = enqueueUpdate(inst, update, lane);
    null !== callback &&
      (startUpdateTimerByLane(lane),
      scheduleUpdateOnFiber(callback, inst, lane),
      entangleTransitions(callback, inst, lane));
    enableSchedulingProfiler &&
      enableSchedulingProfiler &&
      null !== injectedProfilingHooks &&
      typeof injectedProfilingHooks.markForceUpdateScheduled === "function" &&
      injectedProfilingHooks.markForceUpdateScheduled(inst, lane);
  }
};
function checkShouldComponentUpdate(
  workInProgress,
  ctor,
  oldProps,
  newProps,
  oldState,
  newState,
  nextContext
) {
  workInProgress = workInProgress.stateNode;
  return typeof workInProgress.shouldComponentUpdate === "function"
    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
    : ctor.prototype && ctor.prototype.isPureReactComponent
      ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
      : !0;
}
function callComponentWillReceiveProps(
  workInProgress,
  instance,
  newProps,
  nextContext
) {
  workInProgress = instance.state;
  typeof instance.componentWillReceiveProps === "function" &&
    instance.componentWillReceiveProps(newProps, nextContext);
  typeof instance.UNSAFE_componentWillReceiveProps === "function" &&
    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  instance.state !== workInProgress &&
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
}
function resolveClassComponentProps(Component, baseProps) {
  let newProps = baseProps;
  if ("ref" in baseProps) {
    newProps = {};
    for (let propName in baseProps)
      "ref" !== propName && (newProps[propName] = baseProps[propName]);
  }
  if ((Component = Component.defaultProps)) {
    newProps === baseProps && (newProps = { ...newProps});
    for (let propName$88 in Component)
      void 0 === newProps[propName$88] &&
        (newProps[propName$88] = Component[propName$88]);
  }
  return newProps;
}
function defaultOnUncaughtError(error) {
  reportGlobalError(error);
}
function defaultOnCaughtError(error) {
  console.error(error);
}
function defaultOnRecoverableError(error) {
  reportGlobalError(error);
}
function logUncaughtError(root, errorInfo) {
  try {
    let onUncaughtError = root.onUncaughtError;
    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
  } catch (e) {
    setTimeout(() => {
      throw e;
    });
  }
}
function logCaughtError(root, boundary, errorInfo) {
  try {
    let onCaughtError = root.onCaughtError;
    onCaughtError(errorInfo.value, {
      componentStack: errorInfo.stack,
      errorBoundary: boundary.tag === 1 ? boundary.stateNode : null
    });
  } catch (e) {
    setTimeout(() => {
      throw e;
    });
  }
}
function createRootErrorUpdate(root, errorInfo, lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  lane.payload = { element: null };
  lane.callback = function () {
    logUncaughtError(root, errorInfo);
  };
  return lane;
}
function createClassErrorUpdate(lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  return lane;
}
function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
  let getDerivedStateFromError = fiber.type.getDerivedStateFromError;
  if (typeof getDerivedStateFromError === "function") {
    let error = errorInfo.value;
    update.payload = function () {
      return getDerivedStateFromError(error);
    };
    update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
    };
  }
  let inst = fiber.stateNode;
  null !== inst &&
    typeof inst.componentDidCatch === "function" &&
    (update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
      "function" !== typeof getDerivedStateFromError &&
        (legacyErrorBoundariesThatAlreadyFailed === null
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
          : legacyErrorBoundariesThatAlreadyFailed.add(this));
      let stack = errorInfo.stack;
      this.componentDidCatch(errorInfo.value, {
        componentStack: null !== stack ? stack : ""
      });
    });
}
function throwException(
  root,
  returnFiber,
  sourceFiber,
  value,
  rootRenderLanes
) {
  sourceFiber.flags |= 32768;
  isDevToolsPresent && restorePendingUpdaters(root, rootRenderLanes);
  if (
    null !== value &&
    typeof value === "object" &&
    typeof value.then === "function"
  ) {
    returnFiber = sourceFiber.alternate;
    null !== returnFiber &&
      propagateParentContextChanges(
        returnFiber,
        sourceFiber,
        rootRenderLanes,
        !0
      );
    sourceFiber = suspenseHandlerStackCursor.current;
    if (null !== sourceFiber) {
      switch (sourceFiber.tag) {
      case 31:
      case 13:
        return (
          shellBoundary === null
            ? renderDidSuspendDelayIfPossible()
            : sourceFiber.alternate === null &&
                workInProgressRootExitStatus === 0 &&
                (workInProgressRootExitStatus = 3),
          (sourceFiber.flags &= -257),
          (sourceFiber.flags |= 65536),
          (sourceFiber.lanes = rootRenderLanes),
          value === noopSuspenseyCommitThenable
            ? (sourceFiber.flags |= 16384)
            : ((returnFiber = sourceFiber.updateQueue),
            returnFiber === null
              ? (sourceFiber.updateQueue = new Set([value]))
              : returnFiber.add(value),
            attachPingListener(root, value, rootRenderLanes)),
          !1
        );
      case 22:
        return (
          (sourceFiber.flags |= 65536),
          value === noopSuspenseyCommitThenable
            ? (sourceFiber.flags |= 16384)
            : ((returnFiber = sourceFiber.updateQueue),
            returnFiber === null
              ? ((returnFiber = {
                transitions: null,
                markerInstances: null,
                retryQueue: new Set([value])
              }),
              (sourceFiber.updateQueue = returnFiber))
              : ((sourceFiber = returnFiber.retryQueue),
              sourceFiber === null
                ? (returnFiber.retryQueue = new Set([value]))
                : sourceFiber.add(value)),
            attachPingListener(root, value, rootRenderLanes)),
          !1
        );
      }
      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
    }
    attachPingListener(root, value, rootRenderLanes);
    renderDidSuspendDelayIfPossible();
    return !1;
  }
  if (isHydrating)
    return (
      (returnFiber = suspenseHandlerStackCursor.current),
      null !== returnFiber
        ? ((returnFiber.flags & 65536) === 0 && (returnFiber.flags |= 256),
        (returnFiber.flags |= 65536),
        (returnFiber.lanes = rootRenderLanes),
        value !== HydrationMismatchException &&
            ((root = Error(formatProdErrorMessage(422), { cause: value })),
            queueHydrationError(createCapturedValueAtFiber(root, sourceFiber))))
        : (value !== HydrationMismatchException &&
            ((returnFiber = Error(formatProdErrorMessage(423), {
              cause: value
            })),
            queueHydrationError(
              createCapturedValueAtFiber(returnFiber, sourceFiber)
            )),
        (root = root.current.alternate),
        (root.flags |= 65536),
        (rootRenderLanes &= -rootRenderLanes),
        (root.lanes |= rootRenderLanes),
        (value = createCapturedValueAtFiber(value, sourceFiber)),
        (rootRenderLanes = createRootErrorUpdate(
          root.stateNode,
          value,
          rootRenderLanes
        )),
        enqueueCapturedUpdate(root, rootRenderLanes),
        4 !== workInProgressRootExitStatus &&
            (workInProgressRootExitStatus = 2)),
      !1
    );
  let wrapperError = Error(formatProdErrorMessage(520), { cause: value });
  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
  workInProgressRootConcurrentErrors === null
    ? (workInProgressRootConcurrentErrors = [wrapperError])
    : workInProgressRootConcurrentErrors.push(wrapperError);
  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
  if (returnFiber === null) return !0;
  value = createCapturedValueAtFiber(value, sourceFiber);
  sourceFiber = returnFiber;
  do {
    switch (sourceFiber.tag) {
    case 3:
      return (
        (sourceFiber.flags |= 65536),
        (root = rootRenderLanes & -rootRenderLanes),
        (sourceFiber.lanes |= root),
        (root = createRootErrorUpdate(sourceFiber.stateNode, value, root)),
        enqueueCapturedUpdate(sourceFiber, root),
        !1
      );
    case 1:
      if (
        ((returnFiber = sourceFiber.type),
        (wrapperError = sourceFiber.stateNode),
        (sourceFiber.flags & 128) === 0 &&
            (typeof returnFiber.getDerivedStateFromError === "function" ||
              (null !== wrapperError &&
                typeof wrapperError.componentDidCatch === "function" &&
                (legacyErrorBoundariesThatAlreadyFailed === null ||
                  !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))))
      )
        return (
          (sourceFiber.flags |= 65536),
          (rootRenderLanes &= -rootRenderLanes),
          (sourceFiber.lanes |= rootRenderLanes),
          (rootRenderLanes = createClassErrorUpdate(rootRenderLanes)),
          initializeClassErrorUpdate(
            rootRenderLanes,
            root,
            sourceFiber,
            value
          ),
          enqueueCapturedUpdate(sourceFiber, rootRenderLanes),
          !1
        );
    }
    sourceFiber = sourceFiber.return;
  } while (null !== sourceFiber);
  return !1;
}
function processTransitionCallbacks(pendingTransitions, endTime, callbacks) {
  if (enableTransitionTracing && null !== pendingTransitions) {
    let transitionStart = pendingTransitions.transitionStart;
    let onTransitionStart = callbacks.onTransitionStart;
    null !== transitionStart &&
      null != onTransitionStart &&
      transitionStart.forEach((transition) => {
        null != transition.name &&
          onTransitionStart(transition.name, transition.startTime);
      });
    transitionStart = pendingTransitions.markerProgress;
    let onMarkerProgress = callbacks.onMarkerProgress;
    null != onMarkerProgress &&
      null !== transitionStart &&
      transitionStart.forEach((markerInstance, markerName) => {
        if (null !== markerInstance.transitions) {
          let pending =
            null !== markerInstance.pendingBoundaries
              ? Array.from(markerInstance.pendingBoundaries.values())
              : [];
          markerInstance.transitions.forEach((transition) => {
            null != transition.name &&
              onMarkerProgress(
                transition.name,
                markerName,
                transition.startTime,
                endTime,
                pending
              );
          });
        }
      });
    transitionStart = pendingTransitions.markerComplete;
    let onMarkerComplete = callbacks.onMarkerComplete;
    null !== transitionStart &&
      null != onMarkerComplete &&
      transitionStart.forEach((transitions, markerName) => {
        transitions.forEach((transition) => {
          null != transition.name &&
            onMarkerComplete(
              transition.name,
              markerName,
              transition.startTime,
              endTime
            );
        });
      });
    transitionStart = pendingTransitions.markerIncomplete;
    let onMarkerIncomplete = callbacks.onMarkerIncomplete;
    null != onMarkerIncomplete &&
      null !== transitionStart &&
      transitionStart.forEach((_ref, markerName) => {
        let aborts = _ref.aborts;
        _ref.transitions.forEach((transition) => {
          let filteredAborts = [];
          aborts.forEach((abort) => {
            switch (abort.reason) {
            case "marker":
              filteredAborts.push({
                type: "marker",
                name: abort.name,
                endTime: endTime
              });
              break;
            case "suspense":
              filteredAborts.push({
                type: "suspense",
                name: abort.name,
                endTime: endTime
              });
            }
          });
          0 < filteredAborts.length &&
            null != transition.name &&
            onMarkerIncomplete(
              transition.name,
              markerName,
              transition.startTime,
              filteredAborts
            );
        });
      });
    transitionStart = pendingTransitions.transitionProgress;
    let onTransitionProgress = callbacks.onTransitionProgress;
    null != onTransitionProgress &&
      null !== transitionStart &&
      transitionStart.forEach((pending, transition) => {
        null != transition.name &&
          onTransitionProgress(
            transition.name,
            transition.startTime,
            endTime,
            Array.from(pending.values())
          );
      });
    pendingTransitions = pendingTransitions.transitionComplete;
    let onTransitionComplete = callbacks.onTransitionComplete;
    null !== pendingTransitions &&
      null != onTransitionComplete &&
      pendingTransitions.forEach((transition) => {
        null != transition.name &&
          onTransitionComplete(transition.name, transition.startTime, endTime);
      });
  }
}
let markerInstanceStack = createCursor(null);
function pushRootMarkerInstance(workInProgress) {
  if (enableTransitionTracing) {
    let transitions = workInProgressTransitions;
    let root$99 = workInProgress.stateNode;
    null !== transitions &&
      transitions.forEach((transition) => {
        if (!root$99.incompleteTransitions.has(transition)) {
          let markerInstance = {
            tag: 0,
            transitions: new Set([transition]),
            pendingBoundaries: null,
            aborts: null,
            name: null
          };
          root$99.incompleteTransitions.set(transition, markerInstance);
        }
      });
    let markerInstances = [];
    root$99.incompleteTransitions.forEach((markerInstance) => {
      markerInstances.push(markerInstance);
    });
    push(markerInstanceStack, markerInstances);
  }
}
function pushMarkerInstance(workInProgress, markerInstance) {
  enableTransitionTracing &&
    (markerInstanceStack.current === null
      ? push(markerInstanceStack, [markerInstance])
      : push(
        markerInstanceStack,
        markerInstanceStack.current.concat(markerInstance)
      ));
}
let SelectiveHydrationException = Error(formatProdErrorMessage(461));
var didReceiveUpdate = !1;
function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  workInProgress.child =
    current === null
      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
      : reconcileChildFibers(
        workInProgress,
        current.child,
        nextChildren,
        renderLanes
      );
}
function updateForwardRef(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  Component = Component.render;
  let ref = workInProgress.ref;
  if ("ref" in nextProps) {
    var propsWithoutRef = {};
    for (var key in nextProps)
      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
  } else propsWithoutRef = nextProps;
  prepareToReadContext(workInProgress);
  enableSchedulingProfiler && markComponentRenderStarted(workInProgress);
  nextProps = renderWithHooks(
    current,
    workInProgress,
    Component,
    propsWithoutRef,
    ref,
    renderLanes
  );
  key = checkDidRenderIdHook();
  enableSchedulingProfiler && markComponentRenderStopped();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && key && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (current === null) {
    var type = Component.type;
    if (
      typeof type === "function" &&
      !shouldConstruct(type) &&
      void 0 === type.defaultProps &&
      Component.compare === null
    )
      return (
        (workInProgress.tag = 15),
        (workInProgress.type = type),
        updateSimpleMemoComponent(
          current,
          workInProgress,
          type,
          nextProps,
          renderLanes
        )
      );
    current = createFiberFromTypeAndProps(
      Component.type,
      null,
      nextProps,
      workInProgress,
      workInProgress.mode,
      renderLanes
    );
    current.ref = workInProgress.ref;
    current.return = workInProgress;
    return (workInProgress.child = current);
  }
  type = current.child;
  if (!checkScheduledUpdateOrContext(current, renderLanes)) {
    let prevProps = type.memoizedProps;
    Component = Component.compare;
    Component = null !== Component ? Component : shallowEqual;
    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  }
  workInProgress.flags |= 1;
  current = createWorkInProgress(type, nextProps);
  current.ref = workInProgress.ref;
  current.return = workInProgress;
  return (workInProgress.child = current);
}
function updateSimpleMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null !== current) {
    let prevProps = current.memoizedProps;
    if (
      shallowEqual(prevProps, nextProps) &&
      current.ref === workInProgress.ref
    )
      if (
        ((didReceiveUpdate = !1),
        (workInProgress.pendingProps = nextProps = prevProps),
        checkScheduledUpdateOrContext(current, renderLanes))
      )
        0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
      else
        return (
          (workInProgress.lanes = current.lanes),
          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
        );
  }
  return updateFunctionComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    renderLanes
  );
}
function updateOffscreenComponent(
  current,
  workInProgress,
  renderLanes,
  nextProps
) {
  let nextChildren = nextProps.children;
  let prevState = null !== current ? current.memoizedState : null;
  current === null &&
    workInProgress.stateNode === null &&
    (workInProgress.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    });
  if (
    nextProps.mode === "hidden" ||
    nextProps.mode === "unstable-defer-without-hiding"
  ) {
    if (0 !== (workInProgress.flags & 128)) {
      nextChildren =
        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
      if (null !== current) {
        prevState = workInProgress.child = current.child;
        for (nextProps = 0; null !== prevState; )
          (nextProps = nextProps | prevState.lanes | prevState.childLanes),
          (prevState = prevState.sibling);
        workInProgress.childLanes = nextProps & ~nextChildren;
      } else (workInProgress.childLanes = 0), (workInProgress.child = null);
      return deferHiddenOffscreenComponent(
        current,
        workInProgress,
        nextChildren,
        renderLanes
      );
    }
    if (0 !== (renderLanes & 536870912))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
      null !== current &&
          pushTransition(
            workInProgress,
            null !== prevState ? prevState.cachePool : null,
            null
          ),
      null !== prevState
        ? pushHiddenContext(workInProgress, prevState)
        : reuseHiddenContextOnStack(),
      pushOffscreenSuspenseHandler(workInProgress);
    else
      return (
        (workInProgress.lanes = workInProgress.childLanes = 536870912),
        deferHiddenOffscreenComponent(
          current,
          workInProgress,
          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes,
          renderLanes
        )
      );
  } else if (null !== prevState) {
    nextProps = prevState.cachePool;
    let transitions = null;
    if (enableTransitionTracing) {
      let instance = workInProgress.stateNode;
      null !== instance &&
        null != instance._transitions &&
        (transitions = Array.from(instance._transitions));
    }
    pushTransition(workInProgress, nextProps, transitions);
    pushHiddenContext(workInProgress, prevState);
    reuseSuspenseHandlerOnStack(workInProgress);
    workInProgress.memoizedState = null;
  } else
    null !== current && pushTransition(workInProgress, null, null),
    reuseHiddenContextOnStack(),
    reuseSuspenseHandlerOnStack(workInProgress);
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
function bailoutOffscreenComponent(current, workInProgress) {
  (null !== current && current.tag === 22) ||
    null !== workInProgress.stateNode ||
    (workInProgress.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    });
  return workInProgress.sibling;
}
function deferHiddenOffscreenComponent(
  current,
  workInProgress,
  nextBaseLanes,
  renderLanes
) {
  let JSCompiler_inline_result = peekCacheFromPool();
  JSCompiler_inline_result =
    JSCompiler_inline_result === null
      ? null
      : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
  workInProgress.memoizedState = {
    baseLanes: nextBaseLanes,
    cachePool: JSCompiler_inline_result
  };
  null !== current && pushTransition(workInProgress, null, null);
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(workInProgress);
  null !== current &&
    propagateParentContextChanges(current, workInProgress, renderLanes, !0);
  return null;
}
function mountActivityChildren(workInProgress, nextProps) {
  nextProps = mountWorkInProgressOffscreenFiber(
    { mode: nextProps.mode, children: nextProps.children },
    workInProgress.mode
  );
  nextProps.ref = workInProgress.ref;
  workInProgress.child = nextProps;
  nextProps.return = workInProgress;
  return nextProps;
}
function retryActivityComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes
) {
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountActivityChildren(workInProgress, workInProgress.pendingProps);
  current.flags |= 2;
  popSuspenseHandler(workInProgress);
  workInProgress.memoizedState = null;
  return current;
}
function updateActivityComponent(current, workInProgress, renderLanes) {
  let nextProps = workInProgress.pendingProps;
  let didSuspend = 0 !== (workInProgress.flags & 128);
  workInProgress.flags &= -129;
  if (current === null) {
    if (isHydrating) {
      if (nextProps.mode === "hidden")
        return (
          (current = mountActivityChildren(workInProgress, nextProps)),
          (workInProgress.lanes = 536870912),
          bailoutOffscreenComponent(null, current)
        );
      pushDehydratedActivitySuspenseHandler(workInProgress);
      (current = nextHydratableInstance)
        ? ((current = canHydrateHydrationBoundary(
          current,
          rootOrSingletonContext
        )),
        (current = null !== current && current.data === "&" ? current : null),
        null !== current &&
            ((workInProgress.memoizedState = {
              dehydrated: current,
              treeContext:
                null !== treeContextProvider
                  ? { id: treeContextId, overflow: treeContextOverflow }
                  : null,
              retryLane: 536870912,
              hydrationErrors: null
            }),
            (renderLanes = createFiberFromDehydratedFragment(current)),
            (renderLanes.return = workInProgress),
            (workInProgress.child = renderLanes),
            (hydrationParentFiber = workInProgress),
            (nextHydratableInstance = null)))
        : (current = null);
      if (current === null) throw throwOnHydrationMismatch(workInProgress);
      workInProgress.lanes = 536870912;
      return null;
    }
    return mountActivityChildren(workInProgress, nextProps);
  }
  let prevState = current.memoizedState;
  if (null !== prevState) {
    let dehydrated = prevState.dehydrated;
    pushDehydratedActivitySuspenseHandler(workInProgress);
    if (didSuspend)
      if (workInProgress.flags & 256)
        (workInProgress.flags &= -257),
        (workInProgress = retryActivityComponentWithoutHydrating(
          current,
          workInProgress,
          renderLanes
        ));
      else if (null !== workInProgress.memoizedState)
        (workInProgress.child = current.child),
        (workInProgress.flags |= 128),
        (workInProgress = null);
      else throw Error(formatProdErrorMessage(558));
    else if (
      (didReceiveUpdate ||
        propagateParentContextChanges(current, workInProgress, renderLanes, !1),
      (didSuspend = 0 !== (renderLanes & current.childLanes)),
      didReceiveUpdate || didSuspend)
    ) {
      nextProps = workInProgressRoot;
      if (
        null !== nextProps &&
        ((dehydrated = getBumpedLaneForHydration(nextProps, renderLanes)),
        0 !== dehydrated && dehydrated !== prevState.retryLane)
      )
        throw (
          ((prevState.retryLane = dehydrated),
          enqueueConcurrentRenderForLane(current, dehydrated),
          scheduleUpdateOnFiber(nextProps, current, dehydrated),
          SelectiveHydrationException)
        );
      renderDidSuspendDelayIfPossible();
      workInProgress = retryActivityComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else
      (current = prevState.treeContext),
      (nextHydratableInstance = getNextHydratable(dehydrated.nextSibling)),
      (hydrationParentFiber = workInProgress),
      (isHydrating = !0),
      (hydrationErrors = null),
      (rootOrSingletonContext = !1),
      null !== current &&
          restoreSuspendedTreeContext(workInProgress, current),
      (workInProgress = mountActivityChildren(workInProgress, nextProps)),
      (workInProgress.flags |= 4096);
    return workInProgress;
  }
  current = createWorkInProgress(current.child, {
    mode: nextProps.mode,
    children: nextProps.children
  });
  current.ref = workInProgress.ref;
  workInProgress.child = current;
  current.return = workInProgress;
  return current;
}
function markRef(current, workInProgress) {
  let ref = workInProgress.ref;
  if (ref === null)
    null !== current &&
      null !== current.ref &&
      (workInProgress.flags |= 4194816);
  else {
    if ("function" !== typeof ref && "object" !== typeof ref)
      throw Error(formatProdErrorMessage(284));
    if (current === null || current.ref !== ref)
      workInProgress.flags |= 4194816;
  }
}
function updateFunctionComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (!disableLegacyContextForFunctionComponents) {
    var context = isContextProvider(Component)
      ? previousContext
      : contextStackCursor.current;
    context = getMaskedContext(workInProgress, context);
  }
  prepareToReadContext(workInProgress);
  enableSchedulingProfiler && markComponentRenderStarted(workInProgress);
  Component = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    context,
    renderLanes
  );
  nextProps = checkDidRenderIdHook();
  enableSchedulingProfiler && markComponentRenderStopped();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, Component, renderLanes);
  return workInProgress.child;
}
function replayFunctionComponent(
  current,
  workInProgress,
  nextProps,
  Component,
  secondArg,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  enableSchedulingProfiler && markComponentRenderStarted(workInProgress);
  workInProgress.updateQueue = null;
  nextProps = renderWithHooksAgain(
    workInProgress,
    Component,
    nextProps,
    secondArg
  );
  finishRenderingHooks(current);
  Component = checkDidRenderIdHook();
  enableSchedulingProfiler && markComponentRenderStopped();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && Component && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateClassComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (isContextProvider(Component)) {
    var hasContext = !0;
    pushContextProvider(workInProgress);
  } else hasContext = !1;
  prepareToReadContext(workInProgress);
  if (workInProgress.stateNode === null) {
    var isLegacyContextConsumer = !1;
    var unmaskedContext = emptyContextObject;
    var context = Component.contextType;
    typeof context === "object" && null !== context
      ? (context = readContext(context))
      : ((unmaskedContext = isContextProvider(Component)
        ? previousContext
        : contextStackCursor.current),
      (isLegacyContextConsumer = Component.contextTypes),
      (context = (isLegacyContextConsumer =
          null !== isLegacyContextConsumer &&
          void 0 !== isLegacyContextConsumer)
        ? getMaskedContext(workInProgress, unmaskedContext)
        : emptyContextObject));
    var instance = new Component(nextProps, context);
    workInProgress.memoizedState =
      null !== instance.state && void 0 !== instance.state
        ? instance.state
        : null;
    instance.updater = classComponentUpdater;
    workInProgress.stateNode = instance;
    instance._reactInternals = workInProgress;
    isLegacyContextConsumer &&
      ((isLegacyContextConsumer = workInProgress.stateNode),
      (isLegacyContextConsumer.__reactInternalMemoizedUnmaskedChildContext =
        unmaskedContext),
      (isLegacyContextConsumer.__reactInternalMemoizedMaskedChildContext =
        context));
    unmaskedContext = workInProgress.stateNode;
    unmaskedContext.props = nextProps;
    unmaskedContext.state = workInProgress.memoizedState;
    unmaskedContext.refs = {};
    initializeUpdateQueue(workInProgress);
    isLegacyContextConsumer = Component.contextType;
    typeof isLegacyContextConsumer === "object" &&
    null !== isLegacyContextConsumer
      ? (unmaskedContext.context = readContext(isLegacyContextConsumer))
      : ((isLegacyContextConsumer = isContextProvider(Component)
        ? previousContext
        : contextStackCursor.current),
      (unmaskedContext.context = getMaskedContext(
        workInProgress,
        isLegacyContextConsumer
      )));
    unmaskedContext.state = workInProgress.memoizedState;
    isLegacyContextConsumer = Component.getDerivedStateFromProps;
    typeof isLegacyContextConsumer === "function" &&
      (applyDerivedStateFromProps(
        workInProgress,
        Component,
        isLegacyContextConsumer,
        nextProps
      ),
      (unmaskedContext.state = workInProgress.memoizedState));
    typeof Component.getDerivedStateFromProps === "function" ||
      typeof unmaskedContext.getSnapshotBeforeUpdate === "function" ||
      ("function" !== typeof unmaskedContext.UNSAFE_componentWillMount &&
        "function" !== typeof unmaskedContext.componentWillMount) ||
      ((isLegacyContextConsumer = unmaskedContext.state),
      typeof unmaskedContext.componentWillMount === "function" &&
        unmaskedContext.componentWillMount(),
      typeof unmaskedContext.UNSAFE_componentWillMount === "function" &&
        unmaskedContext.UNSAFE_componentWillMount(),
      isLegacyContextConsumer !== unmaskedContext.state &&
        classComponentUpdater.enqueueReplaceState(
          unmaskedContext,
          unmaskedContext.state,
          null
        ),
      processUpdateQueue(
        workInProgress,
        nextProps,
        unmaskedContext,
        renderLanes
      ),
      suspendIfUpdateReadFromEntangledAsyncAction(),
      (unmaskedContext.state = workInProgress.memoizedState));
    typeof unmaskedContext.componentDidMount === "function" &&
      (workInProgress.flags |= 4194308);
    nextProps = !0;
  } else if (current === null) {
    unmaskedContext = workInProgress.stateNode;
    var unresolvedOldProps = workInProgress.memoizedProps;
    isLegacyContextConsumer = resolveClassComponentProps(
      Component,
      unresolvedOldProps
    );
    unmaskedContext.props = isLegacyContextConsumer;
    var oldContext = unmaskedContext.context;
    context = Component.contextType;
    typeof context === "object" && null !== context
      ? (context = readContext(context))
      : ((context = isContextProvider(Component)
        ? previousContext
        : contextStackCursor.current),
      (context = getMaskedContext(workInProgress, context)));
    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
    instance =
      typeof getDerivedStateFromProps === "function" ||
      typeof unmaskedContext.getSnapshotBeforeUpdate === "function";
    unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
    instance ||
      ("function" !== typeof unmaskedContext.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof unmaskedContext.componentWillReceiveProps) ||
      ((unresolvedOldProps || oldContext !== context) &&
        callComponentWillReceiveProps(
          workInProgress,
          unmaskedContext,
          nextProps,
          context
        ));
    hasForceUpdate = !1;
    var oldState = workInProgress.memoizedState;
    unmaskedContext.state = oldState;
    processUpdateQueue(workInProgress, nextProps, unmaskedContext, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    oldContext = workInProgress.memoizedState;
    unresolvedOldProps ||
    oldState !== oldContext ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate
      ? (typeof getDerivedStateFromProps === "function" &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps,
            nextProps
          ),
          (oldContext = workInProgress.memoizedState)),
      (isLegacyContextConsumer =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            isLegacyContextConsumer,
            nextProps,
            oldState,
            oldContext,
            context
          ))
        ? (instance ||
              ("function" !==
                typeof unmaskedContext.UNSAFE_componentWillMount &&
                "function" !== typeof unmaskedContext.componentWillMount) ||
              (typeof unmaskedContext.componentWillMount === "function" &&
                unmaskedContext.componentWillMount(),
              typeof unmaskedContext.UNSAFE_componentWillMount === "function" &&
                unmaskedContext.UNSAFE_componentWillMount()),
        typeof unmaskedContext.componentDidMount === "function" &&
              (workInProgress.flags |= 4194308))
        : (typeof unmaskedContext.componentDidMount === "function" &&
              (workInProgress.flags |= 4194308),
        (workInProgress.memoizedProps = nextProps),
        (workInProgress.memoizedState = oldContext)),
      (unmaskedContext.props = nextProps),
      (unmaskedContext.state = oldContext),
      (unmaskedContext.context = context),
      (nextProps = isLegacyContextConsumer))
      : (typeof unmaskedContext.componentDidMount === "function" &&
          (workInProgress.flags |= 4194308),
      (nextProps = !1));
  } else {
    unmaskedContext = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    isLegacyContextConsumer = workInProgress.memoizedProps;
    context = resolveClassComponentProps(Component, isLegacyContextConsumer);
    unmaskedContext.props = context;
    instance = workInProgress.pendingProps;
    unresolvedOldProps = unmaskedContext.context;
    oldContext = Component.contextType;
    typeof oldContext === "object" && null !== oldContext
      ? (oldContext = readContext(oldContext))
      : ((oldContext = isContextProvider(Component)
        ? previousContext
        : contextStackCursor.current),
      (oldContext = getMaskedContext(workInProgress, oldContext)));
    oldState = Component.getDerivedStateFromProps;
    (getDerivedStateFromProps =
      typeof oldState === "function" ||
      typeof unmaskedContext.getSnapshotBeforeUpdate === "function") ||
      ("function" !== typeof unmaskedContext.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof unmaskedContext.componentWillReceiveProps) ||
      ((isLegacyContextConsumer !== instance ||
        unresolvedOldProps !== oldContext) &&
        callComponentWillReceiveProps(
          workInProgress,
          unmaskedContext,
          nextProps,
          oldContext
        ));
    hasForceUpdate = !1;
    unresolvedOldProps = workInProgress.memoizedState;
    unmaskedContext.state = unresolvedOldProps;
    processUpdateQueue(workInProgress, nextProps, unmaskedContext, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    let newState = workInProgress.memoizedState;
    isLegacyContextConsumer !== instance ||
    unresolvedOldProps !== newState ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate ||
    (null !== current &&
      null !== current.dependencies &&
      checkIfContextChanged(current.dependencies))
      ? (typeof oldState === "function" &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            oldState,
            nextProps
          ),
          (newState = workInProgress.memoizedState)),
      (context =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            context,
            nextProps,
            unresolvedOldProps,
            newState,
            oldContext
          ) ||
          (null !== current &&
            null !== current.dependencies &&
            checkIfContextChanged(current.dependencies)))
        ? (getDerivedStateFromProps ||
              ("function" !==
                typeof unmaskedContext.UNSAFE_componentWillUpdate &&
                "function" !== typeof unmaskedContext.componentWillUpdate) ||
              (typeof unmaskedContext.componentWillUpdate === "function" &&
                unmaskedContext.componentWillUpdate(
                  nextProps,
                  newState,
                  oldContext
                ),
              typeof unmaskedContext.UNSAFE_componentWillUpdate ===
                "function" &&
                unmaskedContext.UNSAFE_componentWillUpdate(
                  nextProps,
                  newState,
                  oldContext
                )),
        typeof unmaskedContext.componentDidUpdate === "function" &&
              (workInProgress.flags |= 4),
        typeof unmaskedContext.getSnapshotBeforeUpdate === "function" &&
              (workInProgress.flags |= 1024))
        : ("function" !== typeof unmaskedContext.componentDidUpdate ||
              (isLegacyContextConsumer === current.memoizedProps &&
                unresolvedOldProps === current.memoizedState) ||
              (workInProgress.flags |= 4),
        "function" !== typeof unmaskedContext.getSnapshotBeforeUpdate ||
              (isLegacyContextConsumer === current.memoizedProps &&
                unresolvedOldProps === current.memoizedState) ||
              (workInProgress.flags |= 1024),
        (workInProgress.memoizedProps = nextProps),
        (workInProgress.memoizedState = newState)),
      (unmaskedContext.props = nextProps),
      (unmaskedContext.state = newState),
      (unmaskedContext.context = oldContext),
      (nextProps = context))
      : ("function" !== typeof unmaskedContext.componentDidUpdate ||
          (isLegacyContextConsumer === current.memoizedProps &&
            unresolvedOldProps === current.memoizedState) ||
          (workInProgress.flags |= 4),
      "function" !== typeof unmaskedContext.getSnapshotBeforeUpdate ||
          (isLegacyContextConsumer === current.memoizedProps &&
            unresolvedOldProps === current.memoizedState) ||
          (workInProgress.flags |= 1024),
      (nextProps = !1));
  }
  unmaskedContext = nextProps;
  markRef(current, workInProgress);
  nextProps = 0 !== (workInProgress.flags & 128);
  unmaskedContext || nextProps
    ? ((unmaskedContext = workInProgress.stateNode),
    nextProps && "function" !== typeof Component.getDerivedStateFromError
      ? ((isLegacyContextConsumer = null), (profilerStartTime = -1))
      : (enableSchedulingProfiler &&
            markComponentRenderStarted(workInProgress),
      (isLegacyContextConsumer = unmaskedContext.render()),
      enableSchedulingProfiler && markComponentRenderStopped()),
    (workInProgress.flags |= 1),
    null !== current && nextProps
      ? ((nextProps = isLegacyContextConsumer),
      (workInProgress.child = reconcileChildFibers(
        workInProgress,
        current.child,
        null,
        renderLanes
      )),
      (workInProgress.child = reconcileChildFibers(
        workInProgress,
        null,
        nextProps,
        renderLanes
      )))
      : reconcileChildren(
        current,
        workInProgress,
        isLegacyContextConsumer,
        renderLanes
      ),
    (workInProgress.memoizedState = unmaskedContext.state),
    hasContext && invalidateContextProvider(workInProgress, Component, !0),
    (current = workInProgress.child))
    : (hasContext && invalidateContextProvider(workInProgress, Component, !1),
    (current = bailoutOnAlreadyFinishedWork(
      current,
      workInProgress,
      renderLanes
    )));
  return current;
}
function pushHostRootContext(workInProgress) {
  let root = workInProgress.stateNode;
  root.pendingContext
    ? pushTopLevelContextObject(
      workInProgress,
      root.pendingContext,
      root.pendingContext !== root.context
    )
    : root.context &&
      pushTopLevelContextObject(workInProgress, root.context, !1);
  pushHostContainer(workInProgress, root.containerInfo);
}
function mountHostRootWithoutHydrating(
  current,
  workInProgress,
  nextChildren,
  renderLanes
) {
  resetHydrationState();
  workInProgress.flags |= 256;
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
let SUSPENDED_MARKER = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null
};
function mountSuspenseOffscreenState(renderLanes) {
  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
}
function getRemainingWorkInPrimaryTree(
  current,
  primaryTreeDidDefer,
  renderLanes
) {
  current = null !== current ? current.childLanes & ~renderLanes : 0;
  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
  return current;
}
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  let nextProps = workInProgress.pendingProps;
  let showFallback = !1;
  let didSuspend = 0 !== (workInProgress.flags & 128);
  let JSCompiler_temp;
  (JSCompiler_temp = didSuspend) ||
    (JSCompiler_temp =
      null !== current && current.memoizedState === null
        ? !1
        : 0 !== (suspenseStackCursor.current & 2));
  JSCompiler_temp && ((showFallback = !0), (workInProgress.flags &= -129));
  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
  workInProgress.flags &= -33;
  if (current === null) {
    if (isHydrating) {
      showFallback
        ? pushPrimaryTreeSuspenseHandler(workInProgress)
        : reuseSuspenseHandlerOnStack(workInProgress);
      (current = nextHydratableInstance)
        ? ((current = canHydrateHydrationBoundary(
          current,
          rootOrSingletonContext
        )),
        (current = null !== current && "&" !== current.data ? current : null),
        null !== current &&
            ((workInProgress.memoizedState = {
              dehydrated: current,
              treeContext:
                null !== treeContextProvider
                  ? { id: treeContextId, overflow: treeContextOverflow }
                  : null,
              retryLane: 536870912,
              hydrationErrors: null
            }),
            (renderLanes = createFiberFromDehydratedFragment(current)),
            (renderLanes.return = workInProgress),
            (workInProgress.child = renderLanes),
            (hydrationParentFiber = workInProgress),
            (nextHydratableInstance = null)))
        : (current = null);
      if (current === null) throw throwOnHydrationMismatch(workInProgress);
      isSuspenseInstanceFallback(current)
        ? (workInProgress.lanes = 32)
        : (workInProgress.lanes = 536870912);
      return null;
    }
    var nextPrimaryChildren = nextProps.children;
    var nextFallbackChildren = nextProps.fallback;
    if (showFallback)
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        mountSuspenseFallbackChildren(
          workInProgress,
          nextPrimaryChildren,
          nextFallbackChildren,
          renderLanes
        ),
        (nextProps = workInProgress.child),
        (nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes)),
        (nextProps.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        enableTransitionTracing &&
          ((workInProgress = enableTransitionTracing
            ? transitionStack.current
            : null),
          null !== workInProgress &&
            ((current = enableTransitionTracing
              ? markerInstanceStack.current
              : null),
            (renderLanes = nextProps.updateQueue),
            renderLanes === null
              ? (nextProps.updateQueue = {
                transitions: workInProgress,
                markerInstances: current,
                retryQueue: null
              })
              : ((renderLanes.transitions = workInProgress),
              (renderLanes.markerInstances = current)))),
        bailoutOffscreenComponent(null, nextProps)
      );
    if (typeof nextProps.unstable_expectedLoadTime === "number")
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        mountSuspenseFallbackChildren(
          workInProgress,
          nextPrimaryChildren,
          nextFallbackChildren,
          renderLanes
        ),
        (nextProps = workInProgress.child),
        (nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes)),
        (nextProps.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        (workInProgress.lanes = 4194304),
        bailoutOffscreenComponent(null, nextProps)
      );
    pushPrimaryTreeSuspenseHandler(workInProgress);
    return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren);
  }
  nextFallbackChildren = current.memoizedState;
  if (
    null !== nextFallbackChildren &&
    ((nextPrimaryChildren = nextFallbackChildren.dehydrated),
    null !== nextPrimaryChildren)
  ) {
    if (didSuspend)
      workInProgress.flags & 256
        ? (pushPrimaryTreeSuspenseHandler(workInProgress),
        (workInProgress.flags &= -257),
        (workInProgress = retrySuspenseComponentWithoutHydrating(
          current,
          workInProgress,
          renderLanes
        )))
        : null !== workInProgress.memoizedState
          ? (reuseSuspenseHandlerOnStack(workInProgress),
          (workInProgress.child = current.child),
          (workInProgress.flags |= 128),
          (workInProgress = null))
          : (reuseSuspenseHandlerOnStack(workInProgress),
          (nextPrimaryChildren = nextProps.fallback),
          (showFallback = workInProgress.mode),
          (nextProps = mountWorkInProgressOffscreenFiber(
            { mode: "visible", children: nextProps.children },
            showFallback
          )),
          (nextPrimaryChildren = createFiberFromFragment(
            nextPrimaryChildren,
            showFallback,
            renderLanes,
            null
          )),
          (nextPrimaryChildren.flags |= 2),
          (nextProps.return = workInProgress),
          (nextPrimaryChildren.return = workInProgress),
          (nextProps.sibling = nextPrimaryChildren),
          (workInProgress.child = nextProps),
          reconcileChildFibers(
            workInProgress,
            current.child,
            null,
            renderLanes
          ),
          (nextProps = workInProgress.child),
          (nextProps.memoizedState =
              mountSuspenseOffscreenState(renderLanes)),
          (nextProps.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes
          )),
          (workInProgress.memoizedState = SUSPENDED_MARKER),
          (workInProgress = bailoutOffscreenComponent(null, nextProps)));
    else if (
      (pushPrimaryTreeSuspenseHandler(workInProgress),
      isSuspenseInstanceFallback(nextPrimaryChildren))
    ) {
      JSCompiler_temp =
        nextPrimaryChildren.nextSibling &&
        nextPrimaryChildren.nextSibling.dataset;
      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
      JSCompiler_temp = digest;
      nextProps = Error(formatProdErrorMessage(419));
      nextProps.stack = "";
      nextProps.digest = JSCompiler_temp;
      queueHydrationError({ value: nextProps, source: null, stack: null });
      workInProgress = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else if (
      (didReceiveUpdate ||
        propagateParentContextChanges(current, workInProgress, renderLanes, !1),
      (JSCompiler_temp = 0 !== (renderLanes & current.childLanes)),
      didReceiveUpdate || JSCompiler_temp)
    ) {
      JSCompiler_temp = workInProgressRoot;
      if (
        null !== JSCompiler_temp &&
        ((nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes)),
        0 !== nextProps && nextProps !== nextFallbackChildren.retryLane)
      )
        throw (
          ((nextFallbackChildren.retryLane = nextProps),
          enqueueConcurrentRenderForLane(current, nextProps),
          scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps),
          SelectiveHydrationException)
        );
      isSuspenseInstancePending(nextPrimaryChildren) ||
        renderDidSuspendDelayIfPossible();
      workInProgress = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else
      isSuspenseInstancePending(nextPrimaryChildren)
        ? ((workInProgress.flags |= 192),
        (workInProgress.child = current.child),
        (workInProgress = null))
        : ((current = nextFallbackChildren.treeContext),
        (nextHydratableInstance = getNextHydratable(
          nextPrimaryChildren.nextSibling
        )),
        (hydrationParentFiber = workInProgress),
        (isHydrating = !0),
        (hydrationErrors = null),
        (rootOrSingletonContext = !1),
        null !== current &&
            restoreSuspendedTreeContext(workInProgress, current),
        (workInProgress = mountSuspensePrimaryChildren(
          workInProgress,
          nextProps.children
        )),
        (workInProgress.flags |= 4096));
    return workInProgress;
  }
  if (showFallback)
    return (
      reuseSuspenseHandlerOnStack(workInProgress),
      (nextPrimaryChildren = nextProps.fallback),
      (showFallback = workInProgress.mode),
      (nextFallbackChildren = current.child),
      (digest = nextFallbackChildren.sibling),
      (nextProps = createWorkInProgress(nextFallbackChildren, {
        mode: "hidden",
        children: nextProps.children
      })),
      (nextProps.subtreeFlags = nextFallbackChildren.subtreeFlags & 65011712),
      null !== digest
        ? (nextPrimaryChildren = createWorkInProgress(
          digest,
          nextPrimaryChildren
        ))
        : ((nextPrimaryChildren = createFiberFromFragment(
          nextPrimaryChildren,
          showFallback,
          renderLanes,
          null
        )),
        (nextPrimaryChildren.flags |= 2)),
      (nextPrimaryChildren.return = workInProgress),
      (nextProps.return = workInProgress),
      (nextProps.sibling = nextPrimaryChildren),
      (workInProgress.child = nextProps),
      bailoutOffscreenComponent(null, nextProps),
      (nextProps = workInProgress.child),
      (nextPrimaryChildren = current.child.memoizedState),
      nextPrimaryChildren === null
        ? (nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes))
        : ((showFallback = nextPrimaryChildren.cachePool),
        null !== showFallback
          ? ((nextFallbackChildren = CacheContext._currentValue),
          (showFallback =
                showFallback.parent !== nextFallbackChildren
                  ? { parent: nextFallbackChildren, pool: nextFallbackChildren }
                  : showFallback))
          : (showFallback = getSuspendedCache()),
        (nextPrimaryChildren = {
          baseLanes: nextPrimaryChildren.baseLanes | renderLanes,
          cachePool: showFallback
        })),
      (nextProps.memoizedState = nextPrimaryChildren),
      enableTransitionTracing &&
        ((nextPrimaryChildren = enableTransitionTracing
          ? transitionStack.current
          : null),
        null !== nextPrimaryChildren &&
          ((showFallback = enableTransitionTracing
            ? markerInstanceStack.current
            : null),
          (nextFallbackChildren = nextProps.updateQueue),
          (digest = current.updateQueue),
          nextFallbackChildren === null
            ? (nextProps.updateQueue = {
              transitions: nextPrimaryChildren,
              markerInstances: showFallback,
              retryQueue: null
            })
            : nextFallbackChildren === digest
              ? (nextProps.updateQueue = {
                transitions: nextPrimaryChildren,
                markerInstances: showFallback,
                retryQueue: null !== digest ? digest.retryQueue : null
              })
              : ((nextFallbackChildren.transitions = nextPrimaryChildren),
              (nextFallbackChildren.markerInstances = showFallback)))),
      (nextProps.childLanes = getRemainingWorkInPrimaryTree(
        current,
        JSCompiler_temp,
        renderLanes
      )),
      (workInProgress.memoizedState = SUSPENDED_MARKER),
      bailoutOffscreenComponent(current.child, nextProps)
    );
  pushPrimaryTreeSuspenseHandler(workInProgress);
  renderLanes = current.child;
  current = renderLanes.sibling;
  renderLanes = createWorkInProgress(renderLanes, {
    mode: "visible",
    children: nextProps.children
  });
  renderLanes.return = workInProgress;
  renderLanes.sibling = null;
  null !== current &&
    ((JSCompiler_temp = workInProgress.deletions),
    JSCompiler_temp === null
      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
      : JSCompiler_temp.push(current));
  workInProgress.child = renderLanes;
  workInProgress.memoizedState = null;
  return renderLanes;
}
function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
  primaryChildren = mountWorkInProgressOffscreenFiber(
    { mode: "visible", children: primaryChildren },
    workInProgress.mode
  );
  primaryChildren.return = workInProgress;
  return (workInProgress.child = primaryChildren);
}
function mountSuspenseFallbackChildren(
  workInProgress,
  primaryChildren,
  fallbackChildren,
  renderLanes
) {
  let mode = workInProgress.mode;
  primaryChildren = mountWorkInProgressOffscreenFiber(
    { mode: "hidden", children: primaryChildren },
    mode
  );
  fallbackChildren = createFiberFromFragment(
    fallbackChildren,
    mode,
    renderLanes,
    null
  );
  primaryChildren.return = workInProgress;
  fallbackChildren.return = workInProgress;
  primaryChildren.sibling = fallbackChildren;
  workInProgress.child = primaryChildren;
  return fallbackChildren;
}
function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
  offscreenProps = createFiber(22, offscreenProps, null, mode);
  offscreenProps.lanes = 0;
  return offscreenProps;
}
function retrySuspenseComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes
) {
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountSuspensePrimaryChildren(
    workInProgress,
    workInProgress.pendingProps.children
  );
  current.flags |= 2;
  workInProgress.memoizedState = null;
  return current;
}
function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
  fiber.lanes |= renderLanes;
  let alternate = fiber.alternate;
  null !== alternate && (alternate.lanes |= renderLanes);
  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
}
function initSuspenseListRenderState(
  workInProgress,
  isBackwards,
  tail,
  lastContentRow,
  tailMode,
  treeForkCount
) {
  let renderState = workInProgress.memoizedState;
  renderState === null
    ? (workInProgress.memoizedState = {
      isBackwards: isBackwards,
      rendering: null,
      renderingStartTime: 0,
      last: lastContentRow,
      tail: tail,
      tailMode: tailMode,
      treeForkCount: treeForkCount
    })
    : ((renderState.isBackwards = isBackwards),
    (renderState.rendering = null),
    (renderState.renderingStartTime = 0),
    (renderState.last = lastContentRow),
    (renderState.tail = tail),
    (renderState.tailMode = tailMode),
    (renderState.treeForkCount = treeForkCount));
}
function updateSuspenseListComponent(current, workInProgress, renderLanes) {
  let nextProps = workInProgress.pendingProps;
  let revealOrder = nextProps.revealOrder;
  let tailMode = nextProps.tail;
  nextProps = nextProps.children;
  let suspenseContext = suspenseStackCursor.current;
  let shouldForceFallback = 0 !== (suspenseContext & 2);
  shouldForceFallback
    ? ((suspenseContext = (suspenseContext & 1) | 2),
    (workInProgress.flags |= 128))
    : (suspenseContext &= 1);
  push(suspenseStackCursor, suspenseContext);
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  nextProps = isHydrating ? treeForkCount : 0;
  if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128))
    a: for (current = workInProgress.child; null !== current; ) {
      if (current.tag === 13)
        null !== current.memoizedState &&
          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
      else if (current.tag === 19)
        scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
      else if (null !== current.child) {
        current.child.return = current;
        current = current.child;
        continue;
      }
      if (current === workInProgress) break a;
      for (; current.sibling === null; ) {
        if (current.return === null || current.return === workInProgress)
          break a;
        current = current.return;
      }
      current.sibling.return = current.return;
      current = current.sibling;
    }
  switch (revealOrder) {
  case "forwards":
    renderLanes = workInProgress.child;
    for (revealOrder = null; null !== renderLanes; )
      (current = renderLanes.alternate),
      null !== current &&
            findFirstSuspended(current) === null &&
            (revealOrder = renderLanes),
      (renderLanes = renderLanes.sibling);
    renderLanes = revealOrder;
    renderLanes === null
      ? ((revealOrder = workInProgress.child), (workInProgress.child = null))
      : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
    initSuspenseListRenderState(
      workInProgress,
      !1,
      revealOrder,
      renderLanes,
      tailMode,
      nextProps
    );
    break;
  case "backwards":
  case "unstable_legacy-backwards":
    renderLanes = null;
    revealOrder = workInProgress.child;
    for (workInProgress.child = null; null !== revealOrder; ) {
      current = revealOrder.alternate;
      if (null !== current && findFirstSuspended(current) === null) {
        workInProgress.child = revealOrder;
        break;
      }
      current = revealOrder.sibling;
      revealOrder.sibling = renderLanes;
      renderLanes = revealOrder;
      revealOrder = current;
    }
    initSuspenseListRenderState(
      workInProgress,
      !0,
      renderLanes,
      null,
      tailMode,
      nextProps
    );
    break;
  case "together":
    initSuspenseListRenderState(
      workInProgress,
      !1,
      null,
      null,
      void 0,
      nextProps
    );
    break;
  default:
    workInProgress.memoizedState = null;
  }
  return workInProgress.child;
}
function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
  null !== current && (workInProgress.dependencies = current.dependencies);
  profilerStartTime = -1;
  workInProgressRootSkippedLanes |= workInProgress.lanes;
  if ((renderLanes & workInProgress.childLanes) === 0)
    if (null !== current) {
      if (
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        (renderLanes & workInProgress.childLanes) === 0)
      )
        return null;
    } else return null;
  if (null !== current && workInProgress.child !== current.child)
    throw Error(formatProdErrorMessage(153));
  if (null !== workInProgress.child) {
    current = workInProgress.child;
    renderLanes = createWorkInProgress(current, current.pendingProps);
    workInProgress.child = renderLanes;
    for (renderLanes.return = workInProgress; null !== current.sibling; )
      (current = current.sibling),
      (renderLanes = renderLanes.sibling =
          createWorkInProgress(current, current.pendingProps)),
      (renderLanes.return = workInProgress);
    renderLanes.sibling = null;
  }
  return workInProgress.child;
}
function checkScheduledUpdateOrContext(current, renderLanes) {
  if (0 !== (current.lanes & renderLanes)) return !0;
  current = current.dependencies;
  return null !== current && checkIfContextChanged(current) ? !0 : !1;
}
function attemptEarlyBailoutIfNoScheduledUpdate(
  current,
  workInProgress,
  renderLanes
) {
  switch (workInProgress.tag) {
  case 3:
    pushHostRootContext(workInProgress);
    enableTransitionTracing &&
        push(transitionStack, workInProgressTransitions);
    enableTransitionTracing && pushRootMarkerInstance(workInProgress);
    pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
    resetHydrationState();
    break;
  case 27:
  case 5:
    pushHostContext(workInProgress);
    break;
  case 1:
    isContextProvider(workInProgress.type) &&
        pushContextProvider(workInProgress);
    break;
  case 4:
    pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
    break;
  case 10:
    pushProvider(
      workInProgress,
      workInProgress.type,
      workInProgress.memoizedProps.value
    );
    break;
  case 12:
    0 !== (renderLanes & workInProgress.childLanes) &&
        (workInProgress.flags |= 4);
    workInProgress.flags |= 2048;
    var stateNode = workInProgress.stateNode;
    stateNode.effectDuration = -0;
    stateNode.passiveEffectDuration = -0;
    break;
  case 31:
    if (null !== workInProgress.memoizedState)
      return (
        (workInProgress.flags |= 128),
        pushDehydratedActivitySuspenseHandler(workInProgress),
        null
      );
    break;
  case 13:
    stateNode = workInProgress.memoizedState;
    if (null !== stateNode) {
      if (null !== stateNode.dehydrated)
        return (
          pushPrimaryTreeSuspenseHandler(workInProgress),
          (workInProgress.flags |= 128),
          null
        );
      if (0 !== (renderLanes & workInProgress.child.childLanes))
        return updateSuspenseComponent(current, workInProgress, renderLanes);
      pushPrimaryTreeSuspenseHandler(workInProgress);
      current = bailoutOnAlreadyFinishedWork(
        current,
        workInProgress,
        renderLanes
      );
      return null !== current ? current.sibling : null;
    }
    pushPrimaryTreeSuspenseHandler(workInProgress);
    break;
  case 19:
    var didSuspendBefore = 0 !== (current.flags & 128);
    stateNode = 0 !== (renderLanes & workInProgress.childLanes);
    stateNode ||
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        (stateNode = 0 !== (renderLanes & workInProgress.childLanes)));
    if (didSuspendBefore) {
      if (stateNode)
        return updateSuspenseListComponent(
          current,
          workInProgress,
          renderLanes
        );
      workInProgress.flags |= 128;
    }
    didSuspendBefore = workInProgress.memoizedState;
    null !== didSuspendBefore &&
        ((didSuspendBefore.rendering = null),
        (didSuspendBefore.tail = null),
        (didSuspendBefore.lastEffect = null));
    push(suspenseStackCursor, suspenseStackCursor.current);
    if (stateNode) break;
    else return null;
  case 22:
    return (
      (workInProgress.lanes = 0),
      updateOffscreenComponent(
        current,
        workInProgress,
        renderLanes,
        workInProgress.pendingProps
      )
    );
  case 24:
    pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
    break;
  case 25:
    if (enableTransitionTracing) {
      stateNode = workInProgress.stateNode;
      null !== stateNode && pushMarkerInstance(workInProgress, stateNode);
      break;
    }
  case 23:
    return (
      (workInProgress.lanes = 0),
      updateOffscreenComponent(
        current,
        workInProgress,
        renderLanes,
        workInProgress.pendingProps
      )
    );
  }
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}
function beginWork(current, workInProgress, renderLanes) {
  if (null !== current)
    if (
      current.memoizedProps !== workInProgress.pendingProps ||
      didPerformWorkStackCursor.current
    )
      didReceiveUpdate = !0;
    else {
      if (
        !checkScheduledUpdateOrContext(current, renderLanes) &&
        (workInProgress.flags & 128) === 0
      )
        return (
          (didReceiveUpdate = !1),
          attemptEarlyBailoutIfNoScheduledUpdate(
            current,
            workInProgress,
            renderLanes
          )
        );
      didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
    }
  else
    (didReceiveUpdate = !1),
    isHydrating &&
        0 !== (workInProgress.flags & 1048576) &&
        pushTreeId(workInProgress, treeForkCount, workInProgress.index);
  workInProgress.lanes = 0;
  switch (workInProgress.tag) {
  case 16:
    a: {
      var props = workInProgress.pendingProps;
      current = resolveLazy(workInProgress.elementType);
      workInProgress.type = current;
      if (typeof current === "function")
        shouldConstruct(current)
          ? ((props = resolveClassComponentProps(current, props)),
          (workInProgress.tag = 1),
          (workInProgress = updateClassComponent(
            null,
            workInProgress,
            current,
            props,
            renderLanes
          )))
          : ((workInProgress.tag = 0),
          (workInProgress = updateFunctionComponent(
            null,
            workInProgress,
            current,
            props,
            renderLanes
          )));
      else {
        if (void 0 !== current && null !== current) {
          var $$typeof = current.$$typeof;
          if ($$typeof === REACT_FORWARD_REF_TYPE) {
            workInProgress.tag = 11;
            workInProgress = updateForwardRef(
              null,
              workInProgress,
              current,
              props,
              renderLanes
            );
            break a;
          } else if ($$typeof === REACT_MEMO_TYPE) {
            workInProgress.tag = 14;
            workInProgress = updateMemoComponent(
              null,
              workInProgress,
              current,
              props,
              renderLanes
            );
            break a;
          }
        }
        workInProgress = getComponentNameFromType(current) || current;
        throw Error(formatProdErrorMessage(306, workInProgress, ""));
      }
    }
    return workInProgress;
  case 0:
    return updateFunctionComponent(
      current,
      workInProgress,
      workInProgress.type,
      workInProgress.pendingProps,
      renderLanes
    );
  case 1:
    return (
      (props = workInProgress.type),
      ($$typeof = resolveClassComponentProps(
        props,
        workInProgress.pendingProps
      )),
      updateClassComponent(
        current,
        workInProgress,
        props,
        $$typeof,
        renderLanes
      )
    );
  case 3:
    a: {
      pushHostRootContext(workInProgress);
      if (current === null) throw Error(formatProdErrorMessage(387));
      props = workInProgress.pendingProps;
      var prevState = workInProgress.memoizedState;
      $$typeof = prevState.element;
      cloneUpdateQueue(current, workInProgress);
      processUpdateQueue(workInProgress, props, null, renderLanes);
      var nextState = workInProgress.memoizedState;
      enableTransitionTracing &&
          push(transitionStack, workInProgressTransitions);
      enableTransitionTracing && pushRootMarkerInstance(workInProgress);
      props = nextState.cache;
      pushProvider(workInProgress, CacheContext, props);
      props !== prevState.cache &&
          propagateContextChanges(
            workInProgress,
            [CacheContext],
            renderLanes,
            !0
          );
      suspendIfUpdateReadFromEntangledAsyncAction();
      props = nextState.element;
      if (prevState.isDehydrated)
        if (
          ((prevState = {
            element: props,
            isDehydrated: !1,
            cache: nextState.cache
          }),
          (workInProgress.updateQueue.baseState = prevState),
          (workInProgress.memoizedState = prevState),
          workInProgress.flags & 256)
        ) {
          workInProgress = mountHostRootWithoutHydrating(
            current,
            workInProgress,
            props,
            renderLanes
          );
          break a;
        } else if (props !== $$typeof) {
          $$typeof = createCapturedValueAtFiber(
            Error(formatProdErrorMessage(424)),
            workInProgress
          );
          queueHydrationError($$typeof);
          workInProgress = mountHostRootWithoutHydrating(
            current,
            workInProgress,
            props,
            renderLanes
          );
          break a;
        } else {
          current = workInProgress.stateNode.containerInfo;
          switch (current.nodeType) {
          case 9:
            current = current.body;
            break;
          default:
            current =
                  current.nodeName === "HTML"
                    ? current.ownerDocument.body
                    : current;
          }
          nextHydratableInstance = getNextHydratable(current.firstChild);
          hydrationParentFiber = workInProgress;
          isHydrating = !0;
          hydrationErrors = null;
          rootOrSingletonContext = !0;
          renderLanes = mountChildFibers(
            workInProgress,
            null,
            props,
            renderLanes
          );
          for (workInProgress.child = renderLanes; renderLanes; )
            (renderLanes.flags = (renderLanes.flags & -3) | 4096),
            (renderLanes = renderLanes.sibling);
        }
      else {
        resetHydrationState();
        if (props === $$typeof) {
          workInProgress = bailoutOnAlreadyFinishedWork(
            current,
            workInProgress,
            renderLanes
          );
          break a;
        }
        reconcileChildren(current, workInProgress, props, renderLanes);
      }
      workInProgress = workInProgress.child;
    }
    return workInProgress;
  case 26:
    return (
      markRef(current, workInProgress),
      current === null
        ? (renderLanes = getResource(
          workInProgress.type,
          null,
          workInProgress.pendingProps,
          null
        ))
          ? (workInProgress.memoizedState = renderLanes)
          : isHydrating ||
              ((renderLanes = workInProgress.type),
              (current = workInProgress.pendingProps),
              (props = getOwnerDocumentFromRootContainer(
                rootInstanceStackCursor.current
              ).createElement(renderLanes)),
              (props[internalInstanceKey] = workInProgress),
              (props[internalPropsKey] = current),
              setInitialProperties(props, renderLanes, current),
              markNodeAsHoistable(props),
              (workInProgress.stateNode = props))
        : (workInProgress.memoizedState = getResource(
          workInProgress.type,
          current.memoizedProps,
          workInProgress.pendingProps,
          current.memoizedState
        )),
      null
    );
  case 27:
    return (
      pushHostContext(workInProgress),
      current === null &&
          isHydrating &&
          ((props = workInProgress.stateNode =
            resolveSingletonInstance(
              workInProgress.type,
              workInProgress.pendingProps,
              rootInstanceStackCursor.current
            )),
          (hydrationParentFiber = workInProgress),
          (rootOrSingletonContext = !0),
          ($$typeof = nextHydratableInstance),
          isSingletonScope(workInProgress.type)
            ? ((previousHydratableOnEnteringScopedSingleton = $$typeof),
            (nextHydratableInstance = getNextHydratable(props.firstChild)))
            : (nextHydratableInstance = $$typeof)),
      reconcileChildren(
        current,
        workInProgress,
        workInProgress.pendingProps.children,
        renderLanes
      ),
      markRef(current, workInProgress),
      current === null && (workInProgress.flags |= 4194304),
      workInProgress.child
    );
  case 5:
    if (current === null && isHydrating) {
      if (($$typeof = props = nextHydratableInstance))
        (props = canHydrateInstance(
          props,
          workInProgress.type,
          workInProgress.pendingProps,
          rootOrSingletonContext
        )),
        null !== props
          ? ((workInProgress.stateNode = props),
          (hydrationParentFiber = workInProgress),
          (nextHydratableInstance = getNextHydratable(props.firstChild)),
          (rootOrSingletonContext = !1),
          ($$typeof = !0))
          : ($$typeof = !1);
      $$typeof || throwOnHydrationMismatch(workInProgress);
    }
    pushHostContext(workInProgress);
    $$typeof = workInProgress.type;
    prevState = workInProgress.pendingProps;
    nextState = null !== current ? current.memoizedProps : null;
    props = prevState.children;
    shouldSetTextContent($$typeof, prevState)
      ? (props = null)
      : null !== nextState &&
          shouldSetTextContent($$typeof, nextState) &&
          (workInProgress.flags |= 32);
    null !== workInProgress.memoizedState &&
        (($$typeof = renderWithHooks(
          current,
          workInProgress,
          TransitionAwareHostComponent,
          null,
          null,
          renderLanes
        )),
        (HostTransitionContext._currentValue = $$typeof));
    markRef(current, workInProgress);
    reconcileChildren(current, workInProgress, props, renderLanes);
    return workInProgress.child;
  case 6:
    if (current === null && isHydrating) {
      if ((current = renderLanes = nextHydratableInstance))
        (renderLanes = canHydrateTextInstance(
          renderLanes,
          workInProgress.pendingProps,
          rootOrSingletonContext
        )),
        null !== renderLanes
          ? ((workInProgress.stateNode = renderLanes),
          (hydrationParentFiber = workInProgress),
          (nextHydratableInstance = null),
          (current = !0))
          : (current = !1);
      current || throwOnHydrationMismatch(workInProgress);
    }
    return null;
  case 13:
    return updateSuspenseComponent(current, workInProgress, renderLanes);
  case 4:
    return (
      pushHostContainer(
        workInProgress,
        workInProgress.stateNode.containerInfo
      ),
      (props = workInProgress.pendingProps),
      current === null
        ? (workInProgress.child = reconcileChildFibers(
          workInProgress,
          null,
          props,
          renderLanes
        ))
        : reconcileChildren(current, workInProgress, props, renderLanes),
      workInProgress.child
    );
  case 11:
    return updateForwardRef(
      current,
      workInProgress,
      workInProgress.type,
      workInProgress.pendingProps,
      renderLanes
    );
  case 7:
    return (
      (props = workInProgress.pendingProps),
      enableFragmentRefs && markRef(current, workInProgress),
      reconcileChildren(current, workInProgress, props, renderLanes),
      workInProgress.child
    );
  case 8:
    return (
      reconcileChildren(
        current,
        workInProgress,
        workInProgress.pendingProps.children,
        renderLanes
      ),
      workInProgress.child
    );
  case 12:
    return (
      (workInProgress.flags |= 4),
      (workInProgress.flags |= 2048),
      (props = workInProgress.stateNode),
      (props.effectDuration = -0),
      (props.passiveEffectDuration = -0),
      reconcileChildren(
        current,
        workInProgress,
        workInProgress.pendingProps.children,
        renderLanes
      ),
      workInProgress.child
    );
  case 10:
    return (
      (props = workInProgress.pendingProps),
      pushProvider(workInProgress, workInProgress.type, props.value),
      reconcileChildren(current, workInProgress, props.children, renderLanes),
      workInProgress.child
    );
  case 9:
    return (
      ($$typeof = workInProgress.type._context),
      (props = workInProgress.pendingProps.children),
      prepareToReadContext(workInProgress),
      ($$typeof = readContext($$typeof)),
      enableSchedulingProfiler && markComponentRenderStarted(workInProgress),
      (props = props($$typeof)),
      enableSchedulingProfiler && markComponentRenderStopped(),
      (workInProgress.flags |= 1),
      reconcileChildren(current, workInProgress, props, renderLanes),
      workInProgress.child
    );
  case 14:
    return updateMemoComponent(
      current,
      workInProgress,
      workInProgress.type,
      workInProgress.pendingProps,
      renderLanes
    );
  case 15:
    return updateSimpleMemoComponent(
      current,
      workInProgress,
      workInProgress.type,
      workInProgress.pendingProps,
      renderLanes
    );
  case 19:
    return updateSuspenseListComponent(current, workInProgress, renderLanes);
  case 21:
    return (
      (props = workInProgress.pendingProps.children),
      markRef(current, workInProgress),
      reconcileChildren(current, workInProgress, props, renderLanes),
      workInProgress.child
    );
  case 31:
    return updateActivityComponent(current, workInProgress, renderLanes);
  case 22:
    return updateOffscreenComponent(
      current,
      workInProgress,
      renderLanes,
      workInProgress.pendingProps
    );
  case 23:
    return updateOffscreenComponent(
      current,
      workInProgress,
      renderLanes,
      workInProgress.pendingProps
    );
  case 24:
    return (
      prepareToReadContext(workInProgress),
      (props = readContext(CacheContext)),
      current === null
        ? (($$typeof = peekCacheFromPool()),
        $$typeof === null &&
              (($$typeof = workInProgressRoot),
              (prevState = createCache()),
              ($$typeof.pooledCache = prevState),
              prevState.refCount++,
              null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes),
              ($$typeof = prevState)),
        (workInProgress.memoizedState = { parent: props, cache: $$typeof }),
        initializeUpdateQueue(workInProgress),
        pushProvider(workInProgress, CacheContext, $$typeof))
        : (0 !== (current.lanes & renderLanes) &&
              (cloneUpdateQueue(current, workInProgress),
              processUpdateQueue(workInProgress, null, null, renderLanes),
              suspendIfUpdateReadFromEntangledAsyncAction()),
        ($$typeof = current.memoizedState),
        (prevState = workInProgress.memoizedState),
        $$typeof.parent !== props
          ? (($$typeof = { parent: props, cache: props }),
          (workInProgress.memoizedState = $$typeof),
          workInProgress.lanes === 0 &&
                  (workInProgress.memoizedState =
                    workInProgress.updateQueue.baseState =
                      $$typeof),
          pushProvider(workInProgress, CacheContext, props))
          : ((props = prevState.cache),
          pushProvider(workInProgress, CacheContext, props),
          props !== $$typeof.cache &&
                  propagateContextChanges(
                    workInProgress,
                    [CacheContext],
                    renderLanes,
                    !0
                  ))),
      reconcileChildren(
        current,
        workInProgress,
        workInProgress.pendingProps.children,
        renderLanes
      ),
      workInProgress.child
    );
  case 25:
    if (enableTransitionTracing)
      return (
        enableTransitionTracing
          ? ((props = workInProgress.pendingProps),
          current === null &&
                (($$typeof = enableTransitionTracing
                  ? transitionStack.current
                  : null),
                null !== $$typeof &&
                  (($$typeof = {
                    tag: 1,
                    transitions: new Set($$typeof),
                    pendingBoundaries: null,
                    name: props.name,
                    aborts: null
                  }),
                  (workInProgress.stateNode = $$typeof),
                  (workInProgress.flags |= 2048))),
          ($$typeof = workInProgress.stateNode),
          null !== $$typeof && pushMarkerInstance(workInProgress, $$typeof),
          reconcileChildren(
            current,
            workInProgress,
            props.children,
            renderLanes
          ),
          (workInProgress = workInProgress.child))
          : (workInProgress = null),
        workInProgress
      );
    break;
  case 30:
    if (enableViewTransition)
      return (
        (props = workInProgress.pendingProps),
        null != props.name && "auto" !== props.name
          ? (workInProgress.flags |= current === null ? 18882560 : 18874368)
          : isHydrating && pushMaterializedTreeId(workInProgress),
        null !== current && current.memoizedProps.name !== props.name
          ? (workInProgress.flags |= 4194816)
          : markRef(current, workInProgress),
        reconcileChildren(
          current,
          workInProgress,
          props.children,
          renderLanes
        ),
        workInProgress.child
      );
    break;
  case 29:
    throw workInProgress.pendingProps;
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
let emptyObject = {};
function collectScopedNodesFromChildren(
  startingChild,
  fn$jscomp$0,
  scopedNodes$jscomp$0
) {
  for (; null !== startingChild; ) {
    let node = startingChild;
    let fn = fn$jscomp$0;
    let scopedNodes = scopedNodes$jscomp$0;
    if (node.tag === 5) {
      var type = node.type;
      let memoizedProps = node.memoizedProps;
      let instance = node.stateNode;
      null !== instance &&
        !0 === fn(type, memoizedProps || emptyObject, instance) &&
        scopedNodes.push(instance);
    }
    type = node.child;
    isFiberSuspenseAndTimedOut(node) && (type = node.child.sibling.child);
    null !== type && collectScopedNodesFromChildren(type, fn, scopedNodes);
    startingChild = startingChild.sibling;
  }
}
function collectFirstScopedNodeFromChildren(startingChild, fn$jscomp$0) {
  for (; null !== startingChild; ) {
    a: {
      var JSCompiler_inline_result = startingChild;
      let fn = fn$jscomp$0;
      if (JSCompiler_inline_result.tag === 5) {
        var type = JSCompiler_inline_result.type;
        let memoizedProps = JSCompiler_inline_result.memoizedProps;
        let instance = JSCompiler_inline_result.stateNode;
        if (null !== instance && !0 === fn(type, memoizedProps, instance)) {
          JSCompiler_inline_result = instance;
          break a;
        }
      }
      type = JSCompiler_inline_result.child;
      isFiberSuspenseAndTimedOut(JSCompiler_inline_result) &&
        (type = JSCompiler_inline_result.child.sibling.child);
      JSCompiler_inline_result =
        null !== type ? collectFirstScopedNodeFromChildren(type, fn) : null;
    }
    if (null !== JSCompiler_inline_result) return JSCompiler_inline_result;
    startingChild = startingChild.sibling;
  }
  return null;
}
function collectNearestChildContextValues(
  startingChild,
  context$jscomp$0,
  childContextValues$jscomp$0
) {
  for (; null !== startingChild; ) {
    let node = startingChild;
    let context = context$jscomp$0;
    let childContextValues = childContextValues$jscomp$0;
    if (node.tag === 10 && node.type === context)
      childContextValues.push(node.memoizedProps.value);
    else {
      let child = node.child;
      isFiberSuspenseAndTimedOut(node) && (child = node.child.sibling.child);
      null !== child &&
        collectNearestChildContextValues(child, context, childContextValues);
    }
    startingChild = startingChild.sibling;
  }
}
function DO_NOT_USE_queryAllNodes(fn) {
  let currentFiber = getInstanceFromScope(this);
  if (currentFiber === null) return null;
  currentFiber = currentFiber.child;
  let scopedNodes = [];
  null !== currentFiber &&
    collectScopedNodesFromChildren(currentFiber, fn, scopedNodes);
  return scopedNodes.length === 0 ? null : scopedNodes;
}
function DO_NOT_USE_queryFirstNode(fn) {
  let currentFiber = getInstanceFromScope(this);
  if (currentFiber === null) return null;
  currentFiber = currentFiber.child;
  return null !== currentFiber
    ? collectFirstScopedNodeFromChildren(currentFiber, fn)
    : null;
}
function containsNode$1(node) {
  for (node = getClosestInstanceFromNode(node); null !== node; ) {
    if (node.tag === 21 && node.stateNode === this) return !0;
    node = node.return;
  }
  return !1;
}
function getChildContextValues(context) {
  let currentFiber = getInstanceFromScope(this);
  if (currentFiber === null) return [];
  currentFiber = currentFiber.child;
  let childContextValues = [];
  null !== currentFiber &&
    collectNearestChildContextValues(currentFiber, context, childContextValues);
  return childContextValues;
}
function markUpdate(workInProgress) {
  workInProgress.flags |= 4;
}
function preloadInstanceAndSuspendIfNeeded(
  workInProgress,
  type,
  oldProps,
  newProps,
  renderLanes
) {
  let JSCompiler_temp;
  if ((JSCompiler_temp = 0 !== (workInProgress.mode & 32)))
    JSCompiler_temp =
      oldProps === null
        ? maySuspendCommit(type, newProps)
        : maySuspendCommit(type, newProps) &&
          (newProps.src !== oldProps.src ||
            newProps.srcSet !== oldProps.srcSet);
  if (JSCompiler_temp) {
    if (
      ((workInProgress.flags |= 16777216),
      (renderLanes & 335544128) === renderLanes)
    )
      if (workInProgress.stateNode.complete) workInProgress.flags |= 8192;
      else if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
      else
        throw (
          ((suspendedThenable = noopSuspenseyCommitThenable),
          SuspenseyCommitException)
        );
  } else workInProgress.flags &= -16777217;
}
function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
    workInProgress.flags &= -16777217;
  else if (((workInProgress.flags |= 16777216), !preloadResource(resource)))
    if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
    else
      throw (
        ((suspendedThenable = noopSuspenseyCommitThenable),
        SuspenseyCommitException)
      );
}
function scheduleRetryEffect(workInProgress, retryQueue) {
  null !== retryQueue && (workInProgress.flags |= 4);
  workInProgress.flags & 16384 &&
    ((retryQueue =
      22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
    (workInProgress.lanes |= retryQueue),
    (workInProgressSuspendedRetryLanes |= retryQueue));
}
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
  if (!isHydrating)
    switch (renderState.tailMode) {
    case "hidden":
      hasRenderedATailFallback = renderState.tail;
      for (var lastTailNode = null; null !== hasRenderedATailFallback; )
        null !== hasRenderedATailFallback.alternate &&
            (lastTailNode = hasRenderedATailFallback),
        (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
      lastTailNode === null
        ? (renderState.tail = null)
        : (lastTailNode.sibling = null);
      break;
    case "collapsed":
      lastTailNode = renderState.tail;
      for (var lastTailNode$126 = null; null !== lastTailNode; )
        null !== lastTailNode.alternate && (lastTailNode$126 = lastTailNode),
        (lastTailNode = lastTailNode.sibling);
      lastTailNode$126 === null
        ? hasRenderedATailFallback || renderState.tail === null
          ? (renderState.tail = null)
          : (renderState.tail.sibling = null)
        : (lastTailNode$126.sibling = null);
    }
}
function bubbleProperties(completedWork) {
  let didBailout =
      null !== completedWork.alternate &&
      completedWork.alternate.child === completedWork.child;
  let newChildLanes = 0;
  let subtreeFlags = 0;
  if (didBailout)
    if (0 !== (completedWork.mode & 2)) {
      for (
        var treeBaseDuration$128 = completedWork.selfBaseDuration,
          child$129 = completedWork.child;
        null !== child$129;

      )
        (newChildLanes |= child$129.lanes | child$129.childLanes),
        (subtreeFlags |= child$129.subtreeFlags & 65011712),
        (subtreeFlags |= child$129.flags & 65011712),
        (treeBaseDuration$128 += child$129.treeBaseDuration),
        (child$129 = child$129.sibling);
      completedWork.treeBaseDuration = treeBaseDuration$128;
    } else
      for (
        treeBaseDuration$128 = completedWork.child;
        null !== treeBaseDuration$128;

      )
        (newChildLanes |=
          treeBaseDuration$128.lanes | treeBaseDuration$128.childLanes),
        (subtreeFlags |= treeBaseDuration$128.subtreeFlags & 65011712),
        (subtreeFlags |= treeBaseDuration$128.flags & 65011712),
        (treeBaseDuration$128.return = completedWork),
        (treeBaseDuration$128 = treeBaseDuration$128.sibling);
  else if (0 !== (completedWork.mode & 2)) {
    treeBaseDuration$128 = completedWork.actualDuration;
    child$129 = completedWork.selfBaseDuration;
    for (let child = completedWork.child; null !== child; )
      (newChildLanes |= child.lanes | child.childLanes),
      (subtreeFlags |= child.subtreeFlags),
      (subtreeFlags |= child.flags),
      (treeBaseDuration$128 += child.actualDuration),
      (child$129 += child.treeBaseDuration),
      (child = child.sibling);
    completedWork.actualDuration = treeBaseDuration$128;
    completedWork.treeBaseDuration = child$129;
  } else
    for (
      treeBaseDuration$128 = completedWork.child;
      null !== treeBaseDuration$128;

    )
      (newChildLanes |=
        treeBaseDuration$128.lanes | treeBaseDuration$128.childLanes),
      (subtreeFlags |= treeBaseDuration$128.subtreeFlags),
      (subtreeFlags |= treeBaseDuration$128.flags),
      (treeBaseDuration$128.return = completedWork),
      (treeBaseDuration$128 = treeBaseDuration$128.sibling);
  completedWork.subtreeFlags |= subtreeFlags;
  completedWork.childLanes = newChildLanes;
  return didBailout;
}
function completeWork(current, workInProgress, renderLanes) {
  let newProps = workInProgress.pendingProps;
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
  case 16:
  case 15:
  case 0:
  case 11:
  case 7:
  case 8:
  case 12:
  case 9:
  case 14:
    return bubbleProperties(workInProgress), null;
  case 1:
    return (
      isContextProvider(workInProgress.type) &&
          (pop(didPerformWorkStackCursor), pop(contextStackCursor)),
      bubbleProperties(workInProgress),
      null
    );
  case 3:
    renderLanes = workInProgress.stateNode;
    enableTransitionTracing &&
        null !== workInProgressTransitions &&
        (workInProgress.flags |= 2048);
    newProps = null;
    null !== current && (newProps = current.memoizedState.cache);
    workInProgress.memoizedState.cache !== newProps &&
        (workInProgress.flags |= 2048);
    popProvider(CacheContext);
    enableTransitionTracing &&
        enableTransitionTracing &&
        pop(markerInstanceStack);
    enableTransitionTracing && pop(transitionStack);
    popHostContainer();
    pop(didPerformWorkStackCursor);
    pop(contextStackCursor);
    renderLanes.pendingContext &&
        ((renderLanes.context = renderLanes.pendingContext),
        (renderLanes.pendingContext = null));
    if (current === null || current.child === null)
      popHydrationState(workInProgress)
        ? markUpdate(workInProgress)
        : current === null ||
            (current.memoizedState.isDehydrated &&
              (workInProgress.flags & 256) === 0) ||
            ((workInProgress.flags |= 1024),
            upgradeHydrationErrorsToRecoverable());
    bubbleProperties(workInProgress);
    enableTransitionTracing &&
        0 !== (workInProgress.subtreeFlags & 8192) &&
        (workInProgress.flags |= 2048);
    return null;
  case 26:
    var type = workInProgress.type;
    var nextResource = workInProgress.memoizedState;
    current === null
      ? (markUpdate(workInProgress),
      null !== nextResource
        ? (bubbleProperties(workInProgress),
        preloadResourceAndSuspendIfNeeded(workInProgress, nextResource))
        : (bubbleProperties(workInProgress),
        preloadInstanceAndSuspendIfNeeded(
          workInProgress,
          type,
          null,
          newProps,
          renderLanes
        )))
      : nextResource
        ? nextResource !== current.memoizedState
          ? (markUpdate(workInProgress),
          bubbleProperties(workInProgress),
          preloadResourceAndSuspendIfNeeded(workInProgress, nextResource))
          : (bubbleProperties(workInProgress),
          (workInProgress.flags &= -16777217))
        : ((current = current.memoizedProps),
        current !== newProps && markUpdate(workInProgress),
        bubbleProperties(workInProgress),
        preloadInstanceAndSuspendIfNeeded(
          workInProgress,
          type,
          current,
          newProps,
          renderLanes
        ));
    return null;
  case 27:
    popHostContext(workInProgress);
    renderLanes = rootInstanceStackCursor.current;
    type = workInProgress.type;
    if (null !== current && null != workInProgress.stateNode)
      current.memoizedProps !== newProps && markUpdate(workInProgress);
    else {
      if (!newProps) {
        if (workInProgress.stateNode === null)
          throw Error(formatProdErrorMessage(166));
        bubbleProperties(workInProgress);
        enableViewTransition && (workInProgress.subtreeFlags &= -33554433);
        return null;
      }
      current = contextStackCursor$1.current;
      popHydrationState(workInProgress)
        ? prepareToHydrateHostInstance(workInProgress, current)
        : ((current = resolveSingletonInstance(type, newProps, renderLanes)),
        (workInProgress.stateNode = current),
        markUpdate(workInProgress));
    }
    bubbleProperties(workInProgress);
    enableViewTransition && (workInProgress.subtreeFlags &= -33554433);
    return null;
  case 5:
    popHostContext(workInProgress);
    type = workInProgress.type;
    if (null !== current && null != workInProgress.stateNode)
      current.memoizedProps !== newProps && markUpdate(workInProgress);
    else {
      if (!newProps) {
        if (workInProgress.stateNode === null)
          throw Error(formatProdErrorMessage(166));
        bubbleProperties(workInProgress);
        enableViewTransition && (workInProgress.subtreeFlags &= -33554433);
        return null;
      }
      nextResource = contextStackCursor$1.current;
      if (popHydrationState(workInProgress))
        prepareToHydrateHostInstance(workInProgress, nextResource);
      else {
        let ownerDocument = getOwnerDocumentFromRootContainer(
          rootInstanceStackCursor.current
        );
        switch (nextResource) {
        case 1:
          nextResource = ownerDocument.createElementNS(
            "http://www.w3.org/2000/svg",
            type
          );
          break;
        case 2:
          nextResource = ownerDocument.createElementNS(
            "http://www.w3.org/1998/Math/MathML",
            type
          );
          break;
        default:
          switch (type) {
          case "svg":
            nextResource = ownerDocument.createElementNS(
              "http://www.w3.org/2000/svg",
              type
            );
            break;
          case "math":
            nextResource = ownerDocument.createElementNS(
              "http://www.w3.org/1998/Math/MathML",
              type
            );
            break;
          case "script":
            nextResource = ownerDocument.createElement("div");
            nextResource.innerHTML = "<script>\x3c/script>";
            nextResource = nextResource.removeChild(
              nextResource.firstChild
            );
            break;
          case "select":
            nextResource =
                    typeof newProps.is === "string"
                      ? ownerDocument.createElement("select", {
                        is: newProps.is
                      })
                      : ownerDocument.createElement("select");
            newProps.multiple
              ? (nextResource.multiple = !0)
              : newProps.size && (nextResource.size = newProps.size);
            break;
          default:
            nextResource =
                    typeof newProps.is === "string"
                      ? ownerDocument.createElement(type, { is: newProps.is })
                      : ownerDocument.createElement(type);
          }
        }
        nextResource[internalInstanceKey] = workInProgress;
        nextResource[internalPropsKey] = newProps;
        a: for (
          ownerDocument = workInProgress.child;
          null !== ownerDocument;

        ) {
          if (ownerDocument.tag === 5 || ownerDocument.tag === 6)
            nextResource.appendChild(ownerDocument.stateNode);
          else if (
            4 !== ownerDocument.tag &&
              27 !== ownerDocument.tag &&
              null !== ownerDocument.child
          ) {
            ownerDocument.child.return = ownerDocument;
            ownerDocument = ownerDocument.child;
            continue;
          }
          if (ownerDocument === workInProgress) break a;
          for (; ownerDocument.sibling === null; ) {
            if (
              ownerDocument.return === null ||
                ownerDocument.return === workInProgress
            )
              break a;
            ownerDocument = ownerDocument.return;
          }
          ownerDocument.sibling.return = ownerDocument.return;
          ownerDocument = ownerDocument.sibling;
        }
        workInProgress.stateNode = nextResource;
        a: switch (
          (setInitialProperties(nextResource, type, newProps), type)
        ) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          newProps = !!newProps.autoFocus;
          break a;
        case "img":
          newProps = !0;
          break a;
        default:
          newProps = !1;
        }
        newProps && markUpdate(workInProgress);
      }
    }
    bubbleProperties(workInProgress);
    enableViewTransition && (workInProgress.subtreeFlags &= -33554433);
    preloadInstanceAndSuspendIfNeeded(
      workInProgress,
      workInProgress.type,
      current === null ? null : current.memoizedProps,
      workInProgress.pendingProps,
      renderLanes
    );
    return null;
  case 6:
    if (current && null != workInProgress.stateNode)
      current.memoizedProps !== newProps && markUpdate(workInProgress);
    else {
      if ("string" !== typeof newProps && workInProgress.stateNode === null)
        throw Error(formatProdErrorMessage(166));
      current = rootInstanceStackCursor.current;
      if (popHydrationState(workInProgress)) {
        current = workInProgress.stateNode;
        renderLanes = workInProgress.memoizedProps;
        newProps = null;
        type = hydrationParentFiber;
        if (null !== type)
          switch (type.tag) {
          case 27:
          case 5:
            newProps = type.memoizedProps;
          }
        current[internalInstanceKey] = workInProgress;
        current =
            current.nodeValue === renderLanes ||
            (null !== newProps && !0 === newProps.suppressHydrationWarning) ||
            checkForUnmatchedText(current.nodeValue, renderLanes)
              ? !0
              : !1;
        current || throwOnHydrationMismatch(workInProgress, !0);
      } else
        (current =
            getOwnerDocumentFromRootContainer(current).createTextNode(
              newProps
            )),
        (current[internalInstanceKey] = workInProgress),
        (workInProgress.stateNode = current);
    }
    bubbleProperties(workInProgress);
    return null;
  case 31:
    renderLanes = workInProgress.memoizedState;
    if (current === null || null !== current.memoizedState) {
      newProps = popHydrationState(workInProgress);
      if (null !== renderLanes) {
        if (current === null) {
          if (!newProps) throw Error(formatProdErrorMessage(318));
          current = workInProgress.memoizedState;
          current = null !== current ? current.dehydrated : null;
          if (!current) throw Error(formatProdErrorMessage(557));
          current[internalInstanceKey] = workInProgress;
          bubbleProperties(workInProgress);
          0 !== (workInProgress.mode & 2) &&
              null !== renderLanes &&
              ((current = workInProgress.child),
              null !== current &&
                (workInProgress.treeBaseDuration -= current.treeBaseDuration));
        } else
          resetHydrationState(),
          (workInProgress.flags & 128) === 0 &&
                (renderLanes = workInProgress.memoizedState = null),
          (workInProgress.flags |= 4),
          bubbleProperties(workInProgress),
          0 !== (workInProgress.mode & 2) &&
                null !== renderLanes &&
                ((current = workInProgress.child),
                null !== current &&
                  (workInProgress.treeBaseDuration -=
                    current.treeBaseDuration));
        current = !1;
      } else
        (renderLanes = upgradeHydrationErrorsToRecoverable()),
        null !== current &&
              null !== current.memoizedState &&
              (current.memoizedState.hydrationErrors = renderLanes),
        (current = !0);
      if (!current) {
        if (workInProgress.flags & 256)
          return popSuspenseHandler(workInProgress), workInProgress;
        popSuspenseHandler(workInProgress);
        return null;
      }
      if (0 !== (workInProgress.flags & 128))
        throw Error(formatProdErrorMessage(558));
    }
    bubbleProperties(workInProgress);
    return null;
  case 13:
    newProps = workInProgress.memoizedState;
    if (
      current === null ||
        (null !== current.memoizedState &&
          null !== current.memoizedState.dehydrated)
    ) {
      type = newProps;
      nextResource = popHydrationState(workInProgress);
      if (null !== type && null !== type.dehydrated) {
        if (current === null) {
          if (!nextResource) throw Error(formatProdErrorMessage(318));
          nextResource = workInProgress.memoizedState;
          nextResource =
              null !== nextResource ? nextResource.dehydrated : null;
          if (!nextResource) throw Error(formatProdErrorMessage(317));
          nextResource[internalInstanceKey] = workInProgress;
          bubbleProperties(workInProgress);
          0 !== (workInProgress.mode & 2) &&
              null !== type &&
              ((type = workInProgress.child),
              null !== type &&
                (workInProgress.treeBaseDuration -= type.treeBaseDuration));
        } else
          resetHydrationState(),
          (workInProgress.flags & 128) === 0 &&
                (type = workInProgress.memoizedState = null),
          (workInProgress.flags |= 4),
          bubbleProperties(workInProgress),
          0 !== (workInProgress.mode & 2) &&
                null !== type &&
                ((type = workInProgress.child),
                null !== type &&
                  (workInProgress.treeBaseDuration -= type.treeBaseDuration));
        type = !1;
      } else
        (type = upgradeHydrationErrorsToRecoverable()),
        null !== current &&
              null !== current.memoizedState &&
              (current.memoizedState.hydrationErrors = type),
        (type = !0);
      if (!type) {
        if (workInProgress.flags & 256)
          return popSuspenseHandler(workInProgress), workInProgress;
        popSuspenseHandler(workInProgress);
        return null;
      }
    }
    popSuspenseHandler(workInProgress);
    if (0 !== (workInProgress.flags & 128))
      return (
        (workInProgress.lanes = renderLanes),
        0 !== (workInProgress.mode & 2) &&
            transferActualDuration(workInProgress),
        workInProgress
      );
    renderLanes = null !== newProps;
    current = null !== current && null !== current.memoizedState;
    renderLanes &&
        ((newProps = workInProgress.child),
        (type = null),
        null !== newProps.alternate &&
          null !== newProps.alternate.memoizedState &&
          null !== newProps.alternate.memoizedState.cachePool &&
          (type = newProps.alternate.memoizedState.cachePool.pool),
        (nextResource = null),
        null !== newProps.memoizedState &&
          null !== newProps.memoizedState.cachePool &&
          (nextResource = newProps.memoizedState.cachePool.pool),
        nextResource !== type && (newProps.flags |= 2048));
    renderLanes !== current &&
        (enableTransitionTracing && (workInProgress.child.flags |= 2048),
        renderLanes && (workInProgress.child.flags |= 8192));
    scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
    null !== workInProgress.updateQueue &&
        null != workInProgress.memoizedProps.suspenseCallback &&
        (workInProgress.flags |= 4);
    bubbleProperties(workInProgress);
    0 !== (workInProgress.mode & 2) &&
        renderLanes &&
        ((current = workInProgress.child),
        null !== current &&
          (workInProgress.treeBaseDuration -= current.treeBaseDuration));
    return null;
  case 4:
    return (
      popHostContainer(),
      current === null &&
          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
      bubbleProperties(workInProgress),
      null
    );
  case 10:
    return (
      popProvider(workInProgress.type), bubbleProperties(workInProgress), null
    );
  case 19:
    pop(suspenseStackCursor);
    newProps = workInProgress.memoizedState;
    if (newProps === null) return bubbleProperties(workInProgress), null;
    type = 0 !== (workInProgress.flags & 128);
    nextResource = newProps.rendering;
    if (nextResource === null)
      if (type) cutOffTailIfNeeded(newProps, !1);
      else {
        if (
          0 !== workInProgressRootExitStatus ||
            (null !== current && 0 !== (current.flags & 128))
        )
          for (current = workInProgress.child; null !== current; ) {
            nextResource = findFirstSuspended(current);
            if (null !== nextResource) {
              workInProgress.flags |= 128;
              cutOffTailIfNeeded(newProps, !1);
              current = nextResource.updateQueue;
              workInProgress.updateQueue = current;
              scheduleRetryEffect(workInProgress, current);
              workInProgress.subtreeFlags = 0;
              current = renderLanes;
              for (renderLanes = workInProgress.child; null !== renderLanes; )
                resetWorkInProgress(renderLanes, current),
                (renderLanes = renderLanes.sibling);
              push(
                suspenseStackCursor,
                (suspenseStackCursor.current & 1) | 2
              );
              isHydrating &&
                  pushTreeFork(workInProgress, newProps.treeForkCount);
              return workInProgress.child;
            }
            current = current.sibling;
          }
        null !== newProps.tail &&
            now$1() > workInProgressRootRenderTargetTime &&
            ((workInProgress.flags |= 128),
            (type = !0),
            cutOffTailIfNeeded(newProps, !1),
            (workInProgress.lanes = 4194304));
      }
    else {
      if (!type)
        if (
          ((current = findFirstSuspended(nextResource)), null !== current)
        ) {
          if (
            ((workInProgress.flags |= 128),
            (type = !0),
            (current = current.updateQueue),
            (workInProgress.updateQueue = current),
            scheduleRetryEffect(workInProgress, current),
            cutOffTailIfNeeded(newProps, !0),
            newProps.tail === null &&
                newProps.tailMode === "hidden" &&
                !nextResource.alternate &&
                !isHydrating)
          )
            return bubbleProperties(workInProgress), null;
        } else
          2 * now$1() - newProps.renderingStartTime >
              workInProgressRootRenderTargetTime &&
              536870912 !== renderLanes &&
              ((workInProgress.flags |= 128),
              (type = !0),
              cutOffTailIfNeeded(newProps, !1),
              (workInProgress.lanes = 4194304));
      newProps.isBackwards
        ? ((nextResource.sibling = workInProgress.child),
        (workInProgress.child = nextResource))
        : ((current = newProps.last),
        null !== current
          ? (current.sibling = nextResource)
          : (workInProgress.child = nextResource),
        (newProps.last = nextResource));
    }
    if (null !== newProps.tail)
      return (
        (current = newProps.tail),
        (newProps.rendering = current),
        (newProps.tail = current.sibling),
        (newProps.renderingStartTime = now$1()),
        (current.sibling = null),
        (renderLanes = suspenseStackCursor.current),
        push(
          suspenseStackCursor,
          type ? (renderLanes & 1) | 2 : renderLanes & 1
        ),
        isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount),
        current
      );
    bubbleProperties(workInProgress);
    return null;
  case 21:
    return (
      current === null &&
          ((current = {
            DO_NOT_USE_queryAllNodes: DO_NOT_USE_queryAllNodes,
            DO_NOT_USE_queryFirstNode: DO_NOT_USE_queryFirstNode,
            containsNode: containsNode$1,
            getChildContextValues: getChildContextValues
          }),
          (workInProgress.stateNode = current),
          (current[internalInstanceKey] = workInProgress)),
      null !== workInProgress.ref && markUpdate(workInProgress),
      bubbleProperties(workInProgress),
      null
    );
  case 22:
  case 23:
    return (
      popSuspenseHandler(workInProgress),
      popHiddenContext(),
      (newProps = null !== workInProgress.memoizedState),
      23 !== workInProgress.tag &&
          (null !== current
            ? (null !== current.memoizedState) !== newProps &&
              (workInProgress.flags |= 8192)
            : newProps && (workInProgress.flags |= 8192)),
      newProps
        ? 0 !== (renderLanes & 536870912) &&
            (workInProgress.flags & 128) === 0 &&
            (bubbleProperties(workInProgress),
            23 !== workInProgress.tag &&
              workInProgress.subtreeFlags & 6 &&
              (workInProgress.flags |= 8192))
        : bubbleProperties(workInProgress),
      (renderLanes = workInProgress.updateQueue),
      null !== renderLanes &&
          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
      (renderLanes = null),
      null !== current &&
          null !== current.memoizedState &&
          null !== current.memoizedState.cachePool &&
          (renderLanes = current.memoizedState.cachePool.pool),
      (newProps = null),
      null !== workInProgress.memoizedState &&
          null !== workInProgress.memoizedState.cachePool &&
          (newProps = workInProgress.memoizedState.cachePool.pool),
      newProps !== renderLanes && (workInProgress.flags |= 2048),
      popTransition(workInProgress, current),
      null
    );
  case 24:
    return (
      (renderLanes = null),
      null !== current && (renderLanes = current.memoizedState.cache),
      workInProgress.memoizedState.cache !== renderLanes &&
          (workInProgress.flags |= 2048),
      popProvider(CacheContext),
      bubbleProperties(workInProgress),
      null
    );
  case 25:
    return (
      enableTransitionTracing &&
          (null !== workInProgress.stateNode &&
            enableTransitionTracing &&
            pop(markerInstanceStack),
          bubbleProperties(workInProgress)),
      null
    );
  case 30:
    return (
      enableViewTransition &&
          ((workInProgress.flags |= 33554432),
          bubbleProperties(workInProgress)),
      null
    );
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
function unwindWork(current, workInProgress) {
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
  case 1:
    return (
      isContextProvider(workInProgress.type) &&
          (pop(didPerformWorkStackCursor), pop(contextStackCursor)),
      (current = workInProgress.flags),
      current & 65536
        ? ((workInProgress.flags = (current & -65537) | 128),
        0 !== (workInProgress.mode & 2) &&
              transferActualDuration(workInProgress),
        workInProgress)
        : null
    );
  case 3:
    return (
      popProvider(CacheContext),
      enableTransitionTracing &&
          enableTransitionTracing &&
          pop(markerInstanceStack),
      enableTransitionTracing && pop(transitionStack),
      popHostContainer(),
      pop(didPerformWorkStackCursor),
      pop(contextStackCursor),
      (current = workInProgress.flags),
      0 !== (current & 65536) && (current & 128) === 0
        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
        : null
    );
  case 26:
  case 27:
  case 5:
    return popHostContext(workInProgress), null;
  case 31:
    if (null !== workInProgress.memoizedState) {
      popSuspenseHandler(workInProgress);
      if (workInProgress.alternate === null)
        throw Error(formatProdErrorMessage(340));
      resetHydrationState();
    }
    current = workInProgress.flags;
    return current & 65536
      ? ((workInProgress.flags = (current & -65537) | 128),
      0 !== (workInProgress.mode & 2) &&
            transferActualDuration(workInProgress),
      workInProgress)
      : null;
  case 13:
    popSuspenseHandler(workInProgress);
    current = workInProgress.memoizedState;
    if (null !== current && null !== current.dehydrated) {
      if (workInProgress.alternate === null)
        throw Error(formatProdErrorMessage(340));
      resetHydrationState();
    }
    current = workInProgress.flags;
    return current & 65536
      ? ((workInProgress.flags = (current & -65537) | 128),
      0 !== (workInProgress.mode & 2) &&
            transferActualDuration(workInProgress),
      workInProgress)
      : null;
  case 19:
    return pop(suspenseStackCursor), null;
  case 4:
    return popHostContainer(), null;
  case 10:
    return popProvider(workInProgress.type), null;
  case 22:
  case 23:
    return (
      popSuspenseHandler(workInProgress),
      popHiddenContext(),
      popTransition(workInProgress, current),
      (current = workInProgress.flags),
      current & 65536
        ? ((workInProgress.flags = (current & -65537) | 128),
        0 !== (workInProgress.mode & 2) &&
              transferActualDuration(workInProgress),
        workInProgress)
        : null
    );
  case 24:
    return popProvider(CacheContext), null;
  case 25:
    return (
      enableTransitionTracing &&
          null !== workInProgress.stateNode &&
          enableTransitionTracing &&
          pop(markerInstanceStack),
      null
    );
  default:
    return null;
  }
}
function unwindInterruptedWork(current, interruptedWork) {
  popTreeContext(interruptedWork);
  switch (interruptedWork.tag) {
  case 1:
    current = interruptedWork.type.childContextTypes;
    null !== current &&
        void 0 !== current &&
        (pop(didPerformWorkStackCursor), pop(contextStackCursor));
    break;
  case 3:
    popProvider(CacheContext);
    enableTransitionTracing &&
        enableTransitionTracing &&
        pop(markerInstanceStack);
    enableTransitionTracing && pop(transitionStack);
    popHostContainer();
    pop(didPerformWorkStackCursor);
    pop(contextStackCursor);
    break;
  case 26:
  case 27:
  case 5:
    popHostContext(interruptedWork);
    break;
  case 4:
    popHostContainer();
    break;
  case 31:
    null !== interruptedWork.memoizedState &&
        popSuspenseHandler(interruptedWork);
    break;
  case 13:
    popSuspenseHandler(interruptedWork);
    break;
  case 19:
    pop(suspenseStackCursor);
    break;
  case 10:
    popProvider(interruptedWork.type);
    break;
  case 22:
  case 23:
    popSuspenseHandler(interruptedWork);
    popHiddenContext();
    popTransition(interruptedWork, current);
    break;
  case 24:
    popProvider(CacheContext);
    break;
  case 25:
    enableTransitionTracing &&
        null !== interruptedWork.stateNode &&
        enableTransitionTracing &&
        pop(markerInstanceStack);
  }
}
function shouldProfile(current) {
  return 0 !== (current.mode & 2);
}
function commitHookLayoutEffects(finishedWork, hookFlags) {
  shouldProfile(finishedWork)
    ? (startEffectTimer(),
    commitHookEffectListMount(hookFlags, finishedWork),
    recordEffectDuration())
    : commitHookEffectListMount(hookFlags, finishedWork);
}
function commitHookLayoutUnmountEffects(
  finishedWork,
  nearestMountedAncestor,
  hookFlags
) {
  shouldProfile(finishedWork)
    ? (startEffectTimer(),
    commitHookEffectListUnmount(
      hookFlags,
      finishedWork,
      nearestMountedAncestor
    ),
    recordEffectDuration())
    : commitHookEffectListUnmount(
      hookFlags,
      finishedWork,
      nearestMountedAncestor
    );
}
function commitHookEffectListMount(flags, finishedWork) {
  try {
    let updateQueue = finishedWork.updateQueue;
    let lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      let firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          enableSchedulingProfiler &&
            (0 !== (flags & 8)
              ? enableSchedulingProfiler &&
                null !== injectedProfilingHooks &&
                typeof injectedProfilingHooks.markComponentPassiveEffectMountStarted ===
                  "function" &&
                injectedProfilingHooks.markComponentPassiveEffectMountStarted(
                  finishedWork
                )
              : 0 !== (flags & 4) &&
                enableSchedulingProfiler &&
                null !== injectedProfilingHooks &&
                typeof injectedProfilingHooks.markComponentLayoutEffectMountStarted ===
                  "function" &&
                injectedProfilingHooks.markComponentLayoutEffectMountStarted(
                  finishedWork
                ));
          lastEffect = void 0;
          let create = updateQueue.create;
          let inst = updateQueue.inst;
          lastEffect = create();
          inst.destroy = lastEffect;
          enableSchedulingProfiler &&
            (0 !== (flags & 8)
              ? enableSchedulingProfiler &&
                null !== injectedProfilingHooks &&
                typeof injectedProfilingHooks.markComponentPassiveEffectMountStopped ===
                  "function" &&
                injectedProfilingHooks.markComponentPassiveEffectMountStopped()
              : 0 !== (flags & 4) &&
                enableSchedulingProfiler &&
                null !== injectedProfilingHooks &&
                typeof injectedProfilingHooks.markComponentLayoutEffectMountStopped ===
                  "function" &&
                injectedProfilingHooks.markComponentLayoutEffectMountStopped());
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHookEffectListUnmount(
  flags,
  finishedWork,
  nearestMountedAncestor$jscomp$0
) {
  try {
    let updateQueue = finishedWork.updateQueue;
    let lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      let firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          let inst = updateQueue.inst;
          let destroy = inst.destroy;
          if (void 0 !== destroy) {
            inst.destroy = void 0;
            enableSchedulingProfiler &&
              (0 !== (flags & 8)
                ? enableSchedulingProfiler &&
                  null !== injectedProfilingHooks &&
                  typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStarted ===
                    "function" &&
                  injectedProfilingHooks.markComponentPassiveEffectUnmountStarted(
                    finishedWork
                  )
                : 0 !== (flags & 4) &&
                  enableSchedulingProfiler &&
                  null !== injectedProfilingHooks &&
                  typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStarted ===
                    "function" &&
                  injectedProfilingHooks.markComponentLayoutEffectUnmountStarted(
                    finishedWork
                  ));
            lastEffect = finishedWork;
            let nearestMountedAncestor = nearestMountedAncestor$jscomp$0;
            let destroy_ = destroy;
            try {
              destroy_();
            } catch (error) {
              captureCommitPhaseError(
                lastEffect,
                nearestMountedAncestor,
                error
              );
            }
            enableSchedulingProfiler &&
              (0 !== (flags & 8)
                ? enableSchedulingProfiler &&
                  null !== injectedProfilingHooks &&
                  typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStopped ===
                    "function" &&
                  injectedProfilingHooks.markComponentPassiveEffectUnmountStopped()
                : 0 !== (flags & 4) &&
                  enableSchedulingProfiler &&
                  null !== injectedProfilingHooks &&
                  typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStopped ===
                    "function" &&
                  injectedProfilingHooks.markComponentLayoutEffectUnmountStopped());
          }
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHookPassiveMountEffects(finishedWork, hookFlags) {
  shouldProfile(finishedWork)
    ? (startEffectTimer(),
    commitHookEffectListMount(hookFlags, finishedWork),
    recordEffectDuration())
    : commitHookEffectListMount(hookFlags, finishedWork);
}
function commitHookPassiveUnmountEffects(
  finishedWork,
  nearestMountedAncestor,
  hookFlags
) {
  shouldProfile(finishedWork)
    ? (startEffectTimer(),
    commitHookEffectListUnmount(
      hookFlags,
      finishedWork,
      nearestMountedAncestor
    ),
    recordEffectDuration())
    : commitHookEffectListUnmount(
      hookFlags,
      finishedWork,
      nearestMountedAncestor
    );
}
function commitClassCallbacks(finishedWork) {
  let updateQueue = finishedWork.updateQueue;
  if (null !== updateQueue) {
    let instance = finishedWork.stateNode;
    try {
      commitCallbacks(updateQueue, instance);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function safelyCallComponentWillUnmount(
  current,
  nearestMountedAncestor,
  instance
) {
  instance.props = resolveClassComponentProps(
    current.type,
    current.memoizedProps
  );
  instance.state = current.memoizedState;
  if (shouldProfile(current)) {
    startEffectTimer();
    try {
      instance.componentWillUnmount();
    } catch (error) {
      captureCommitPhaseError(current, nearestMountedAncestor, error);
    }
    recordEffectDuration();
  } else
    try {
      instance.componentWillUnmount();
    } catch (error$171) {
      captureCommitPhaseError(current, nearestMountedAncestor, error$171);
    }
}
function safelyAttachRef(current, nearestMountedAncestor) {
  try {
    let ref = current.ref;
    if (null !== ref) {
      switch (current.tag) {
      case 26:
      case 27:
      case 5:
        var instanceToUse = current.stateNode;
        break;
      case 30:
        if (enableViewTransition) {
          let instance = current.stateNode;
          let name = getViewTransitionName(current.memoizedProps, instance);
          if (instance.ref === null || instance.ref.name !== name)
            instance.ref = createViewTransitionInstance(name);
          instanceToUse = instance.ref;
          break;
        }
        instanceToUse = current.stateNode;
        break;
      case 7:
        if (enableFragmentRefs) {
          current.stateNode === null &&
              (current.stateNode = new FragmentInstance(current));
          instanceToUse = current.stateNode;
          break;
        }
      default:
        instanceToUse = current.stateNode;
      }
      if (typeof ref === "function")
        if (shouldProfile(current))
          try {
            startEffectTimer(), (current.refCleanup = ref(instanceToUse));
          } finally {
            recordEffectDuration();
          }
        else current.refCleanup = ref(instanceToUse);
      else ref.current = instanceToUse;
    }
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyDetachRef(current, nearestMountedAncestor) {
  let ref = current.ref;
  let refCleanup = current.refCleanup;
  if (null !== ref)
    if (typeof refCleanup === "function")
      try {
        if (shouldProfile(current))
          try {
            startEffectTimer(), refCleanup();
          } finally {
            recordEffectDuration(current);
          }
        else refCleanup();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      } finally {
        (current.refCleanup = null),
        (current = current.alternate),
        null != current && (current.refCleanup = null);
      }
    else if (typeof ref === "function")
      try {
        if (shouldProfile(current))
          try {
            startEffectTimer(), ref(null);
          } finally {
            recordEffectDuration(current);
          }
        else ref(null);
      } catch (error$173) {
        captureCommitPhaseError(current, nearestMountedAncestor, error$173);
      }
    else ref.current = null;
}
function commitProfilerUpdate(
  finishedWork,
  current,
  commitStartTime,
  effectDuration
) {
  try {
    let _finishedWork$memoize = finishedWork.memoizedProps;
    let id = _finishedWork$memoize.id;
    let onCommit = _finishedWork$memoize.onCommit;
    let onRender = _finishedWork$memoize.onRender;
    current = current === null ? "mount" : "update";
    currentUpdateIsNested && (current = "nested-update");
    typeof onRender === "function" &&
      onRender(
        id,
        current,
        finishedWork.actualDuration,
        finishedWork.treeBaseDuration,
        finishedWork.actualStartTime,
        commitStartTime
      );
    typeof onCommit === "function" &&
      onCommit(id, current, effectDuration, commitStartTime);
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitProfilerPostCommit(
  finishedWork,
  current,
  commitStartTime,
  passiveEffectDuration
) {
  try {
    let _finishedWork$memoize2 = finishedWork.memoizedProps;
    let id = _finishedWork$memoize2.id;
    let onPostCommit = _finishedWork$memoize2.onPostCommit;
    current = current === null ? "mount" : "update";
    currentUpdateIsNested && (current = "nested-update");
    typeof onPostCommit === "function" &&
      onPostCommit(id, current, passiveEffectDuration, commitStartTime);
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHostMount(finishedWork) {
  let type = finishedWork.type;
  let props = finishedWork.memoizedProps;
  let instance = finishedWork.stateNode;
  try {
    a: switch (type) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      props.autoFocus && instance.focus();
      break a;
    case "img":
      props.src
        ? (instance.src = props.src)
        : props.srcSet && (instance.srcset = props.srcSet);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHostUpdate(finishedWork, newProps, oldProps) {
  try {
    let domElement = finishedWork.stateNode;
    updateProperties(domElement, finishedWork.type, oldProps, newProps);
    domElement[internalPropsKey] = newProps;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitNewChildToFragmentInstances(fiber, parentFragmentInstances) {
  if (
    fiber.tag === 5 &&
    fiber.alternate === null &&
    null !== parentFragmentInstances
  )
    for (let i = 0; i < parentFragmentInstances.length; i++)
      commitNewChildToFragmentInstance(
        fiber.stateNode,
        parentFragmentInstances[i]
      );
}
function commitFragmentInstanceDeletionEffects(fiber) {
  for (let parent = fiber.return; null !== parent; ) {
    if (isFragmentInstanceParent(parent)) {
      let childElement = fiber.stateNode;
      let eventListeners = parent.stateNode._eventListeners;
      if (null !== eventListeners)
        for (let i = 0; i < eventListeners.length; i++) {
          let _eventListeners$i4 = eventListeners[i];
          childElement.removeEventListener(
            _eventListeners$i4.type,
            _eventListeners$i4.listener,
            _eventListeners$i4.optionsOrUseCapture
          );
        }
    }
    if (isHostParent(parent)) break;
    parent = parent.return;
  }
}
function isHostParent(fiber) {
  return (
    fiber.tag === 5 ||
    fiber.tag === 3 ||
    fiber.tag === 26 ||
    (fiber.tag === 27 && isSingletonScope(fiber.type)) ||
    fiber.tag === 4
  );
}
function isFragmentInstanceParent(fiber) {
  return fiber && fiber.tag === 7 && null !== fiber.stateNode;
}
function getHostSibling(fiber) {
  a: for (;;) {
    for (; fiber.sibling === null; ) {
      if (fiber.return === null || isHostParent(fiber.return)) return null;
      fiber = fiber.return;
    }
    fiber.sibling.return = fiber.return;
    for (
      fiber = fiber.sibling;
      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

    ) {
      if (fiber.tag === 27 && isSingletonScope(fiber.type)) continue a;
      if (fiber.flags & 2) continue a;
      if (fiber.child === null || fiber.tag === 4) continue a;
      else (fiber.child.return = fiber), (fiber = fiber.child);
    }
    if (!(fiber.flags & 2)) return fiber.stateNode;
  }
}
function insertOrAppendPlacementNodeIntoContainer(
  node,
  before,
  parent,
  parentFragmentInstances
) {
  let tag = node.tag;
  if (tag === 5 || tag === 6) {
    tag = node.stateNode;
    if (before)
      (parent.nodeType === 9
        ? parent.body
        : parent.nodeType === 8
          ? parent.parentNode
          : parent.nodeName === "HTML"
            ? parent.ownerDocument.body
            : parent
      ).insertBefore(tag, before);
    else
      a: {
        if (parent.nodeType === 9) before = parent.body;
        else if (parent.nodeType === 8) {
          before = parent.parentNode;
          before.insertBefore(tag, parent);
          break a;
        } else
          before =
            parent.nodeName === "HTML" ? parent.ownerDocument.body : parent;
        before.appendChild(tag);
        parent = parent._reactRootContainer;
        (null !== parent && void 0 !== parent) ||
          null !== before.onclick ||
          (before.onclick = noop$1);
      }
    enableFragmentRefs &&
      commitNewChildToFragmentInstances(node, parentFragmentInstances);
    trackHostMutation();
  } else if (
    4 !== tag &&
    (tag === 27 &&
      isSingletonScope(node.type) &&
      ((parent = node.stateNode), (before = null)),
    (node = node.child),
    null !== node)
  )
    for (
      insertOrAppendPlacementNodeIntoContainer(
        node,
        before,
        parent,
        parentFragmentInstances
      ),
      node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNodeIntoContainer(
        node,
        before,
        parent,
        parentFragmentInstances
      ),
      (node = node.sibling);
}
function insertOrAppendPlacementNode(
  node,
  before,
  parent,
  parentFragmentInstances
) {
  let tag = node.tag;
  if (tag === 5 || tag === 6)
    (tag = node.stateNode),
    before ? parent.insertBefore(tag, before) : parent.appendChild(tag),
    enableFragmentRefs &&
        commitNewChildToFragmentInstances(node, parentFragmentInstances),
    trackHostMutation();
  else if (
    4 !== tag &&
    (tag === 27 && isSingletonScope(node.type) && (parent = node.stateNode),
    (node = node.child),
    null !== node)
  )
    for (
      insertOrAppendPlacementNode(
        node,
        before,
        parent,
        parentFragmentInstances
      ),
      node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNode(
        node,
        before,
        parent,
        parentFragmentInstances
      ),
      (node = node.sibling);
}
function commitHostSingletonAcquisition(finishedWork) {
  let singleton = finishedWork.stateNode;
  let props = finishedWork.memoizedProps;
  try {
    for (
      var type = finishedWork.type, attributes = singleton.attributes;
      attributes.length;

    )
      singleton.removeAttributeNode(attributes[0]);
    setInitialProperties(singleton, type, props);
    singleton[internalInstanceKey] = finishedWork;
    singleton[internalPropsKey] = props;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
let shouldStartViewTransition = !1;
let appearingViewTransitions = null;
function trackEnterViewTransitions(placement) {
  if (placement.tag === 30 || 0 !== (placement.subtreeFlags & 33554432))
    shouldStartViewTransition = !0;
}
let viewTransitionCancelableChildren = null;
function pushViewTransitionCancelableScope() {
  let prevChildren = viewTransitionCancelableChildren;
  viewTransitionCancelableChildren = null;
  return prevChildren;
}
let viewTransitionHostInstanceIdx = 0;
function applyViewTransitionToHostInstances(
  child,
  name,
  className,
  collectMeasurements,
  stopAtNestedViewTransitions
) {
  viewTransitionHostInstanceIdx = 0;
  return applyViewTransitionToHostInstancesRecursive(
    child,
    name,
    className,
    collectMeasurements,
    stopAtNestedViewTransitions
  );
}
function applyViewTransitionToHostInstancesRecursive(
  child,
  name,
  className,
  collectMeasurements,
  stopAtNestedViewTransitions
) {
  for (var inViewport = !1; null !== child; ) {
    if (child.tag === 5) {
      let instance = child.stateNode;
      if (null !== collectMeasurements) {
        let measurement = measureInstance(instance);
        collectMeasurements.push(measurement);
        measurement.view && (inViewport = !0);
      } else
        inViewport || (measureInstance(instance).view && (inViewport = !0));
      shouldStartViewTransition = !0;
      applyViewTransitionName(
        instance,
        viewTransitionHostInstanceIdx === 0
          ? name
          : name + "_" + viewTransitionHostInstanceIdx,
        className
      );
      viewTransitionHostInstanceIdx++;
    } else if (22 !== child.tag || child.memoizedState === null)
      (child.tag === 30 && stopAtNestedViewTransitions) ||
        (applyViewTransitionToHostInstancesRecursive(
          child.child,
          name,
          className,
          collectMeasurements,
          stopAtNestedViewTransitions
        ) &&
          (inViewport = !0));
    child = child.sibling;
  }
  return inViewport;
}
function restoreViewTransitionOnHostInstances(
  child,
  stopAtNestedViewTransitions
) {
  for (; null !== child; ) {
    if (child.tag === 5)
      restoreViewTransitionName(child.stateNode, child.memoizedProps);
    else if (22 !== child.tag || child.memoizedState === null)
      (child.tag === 30 && stopAtNestedViewTransitions) ||
        restoreViewTransitionOnHostInstances(
          child.child,
          stopAtNestedViewTransitions
        );
    child = child.sibling;
  }
}
function commitAppearingPairViewTransitions(placement) {
  if (0 !== (placement.subtreeFlags & 18874368))
    for (placement = placement.child; null !== placement; ) {
      if (22 !== placement.tag || null !== placement.memoizedState)
        if (
          (commitAppearingPairViewTransitions(placement),
          placement.tag === 30 &&
            0 !== (placement.flags & 18874368) &&
            placement.stateNode.paired)
        ) {
          let props = placement.memoizedProps;
          if (props.name == null || props.name === "auto")
            throw Error(formatProdErrorMessage(544));
          let name = props.name;
          props = getViewTransitionClassName(props.default, props.share);
          "none" !== props &&
            (applyViewTransitionToHostInstances(
              placement.child,
              name,
              props,
              null,
              !1
            ) ||
              restoreViewTransitionOnHostInstances(placement.child, !1));
        }
      placement = placement.sibling;
    }
}
function commitEnterViewTransitions(placement, gesture) {
  if (placement.tag === 30) {
    let state = placement.stateNode;
    let props = placement.memoizedProps;
    let name = getViewTransitionName(props, state);
    let className = getViewTransitionClassName(
      props.default,
      state.paired ? props.share : props.enter
    );
    "none" !== className
      ? applyViewTransitionToHostInstances(
        placement.child,
        name,
        className,
        null,
        !1
      )
        ? (commitAppearingPairViewTransitions(placement),
        state.paired ||
            gesture ||
            scheduleViewTransitionEvent(placement, props.onEnter))
        : restoreViewTransitionOnHostInstances(placement.child, !1)
      : commitAppearingPairViewTransitions(placement);
  } else if (0 !== (placement.subtreeFlags & 33554432))
    for (placement = placement.child; null !== placement; )
      commitEnterViewTransitions(placement, gesture),
      (placement = placement.sibling);
  else commitAppearingPairViewTransitions(placement);
}
function commitDeletedPairViewTransitions(deletion) {
  if (
    null !== appearingViewTransitions &&
    0 !== appearingViewTransitions.size
  ) {
    let pairs = appearingViewTransitions;
    if (0 !== (deletion.subtreeFlags & 18874368))
      for (deletion = deletion.child; null !== deletion; ) {
        if (22 !== deletion.tag || null !== deletion.memoizedState) {
          if (deletion.tag === 30 && 0 !== (deletion.flags & 18874368)) {
            let props = deletion.memoizedProps;
            let name = props.name;
            if (null != name && "auto" !== name) {
              let pair = pairs.get(name);
              if (void 0 !== pair) {
                let className = getViewTransitionClassName(
                  props.default,
                  props.share
                );
                "none" !== className &&
                  (applyViewTransitionToHostInstances(
                    deletion.child,
                    name,
                    className,
                    null,
                    !1
                  )
                    ? ((className = deletion.stateNode),
                    (pair.paired = className),
                    (className.paired = pair),
                    scheduleViewTransitionEvent(deletion, props.onShare))
                    : restoreViewTransitionOnHostInstances(deletion.child, !1));
                pairs.delete(name);
                if (pairs.size === 0) break;
              }
            }
          }
          commitDeletedPairViewTransitions(deletion);
        }
        deletion = deletion.sibling;
      }
  }
}
function commitExitViewTransitions(deletion) {
  if (deletion.tag === 30) {
    let props = deletion.memoizedProps;
    let name = getViewTransitionName(props, deletion.stateNode);
    let pair =
        null !== appearingViewTransitions
          ? appearingViewTransitions.get(name)
          : void 0;
    let className = getViewTransitionClassName(
      props.default,
      void 0 !== pair ? props.share : props.exit
    );
    "none" !== className &&
      (applyViewTransitionToHostInstances(
        deletion.child,
        name,
        className,
        null,
        !1
      )
        ? void 0 !== pair
          ? ((className = deletion.stateNode),
          (pair.paired = className),
          (className.paired = pair),
          appearingViewTransitions.delete(name),
          scheduleViewTransitionEvent(deletion, props.onShare))
          : scheduleViewTransitionEvent(deletion, props.onExit)
        : restoreViewTransitionOnHostInstances(deletion.child, !1));
    null !== appearingViewTransitions &&
      commitDeletedPairViewTransitions(deletion);
  } else if (0 !== (deletion.subtreeFlags & 33554432))
    for (deletion = deletion.child; null !== deletion; )
      commitExitViewTransitions(deletion), (deletion = deletion.sibling);
  else
    null !== appearingViewTransitions &&
      commitDeletedPairViewTransitions(deletion);
}
function commitNestedViewTransitions(changedParent) {
  for (changedParent = changedParent.child; null !== changedParent; ) {
    if (changedParent.tag === 30) {
      let props = changedParent.memoizedProps;
      let name = getViewTransitionName(props, changedParent.stateNode);
      props = getViewTransitionClassName(props.default, props.update);
      changedParent.flags &= -5;
      "none" !== props &&
        applyViewTransitionToHostInstances(
          changedParent.child,
          name,
          props,
          (changedParent.memoizedState = []),
          !1
        );
    } else
      0 !== (changedParent.subtreeFlags & 33554432) &&
        commitNestedViewTransitions(changedParent);
    changedParent = changedParent.sibling;
  }
}
function restorePairedViewTransitions(parent) {
  if (0 !== (parent.subtreeFlags & 18874368))
    for (parent = parent.child; null !== parent; ) {
      if (22 !== parent.tag || null !== parent.memoizedState) {
        if (parent.tag === 30 && 0 !== (parent.flags & 18874368)) {
          let instance = parent.stateNode;
          null !== instance.paired &&
            ((instance.paired = null),
            restoreViewTransitionOnHostInstances(parent.child, !1));
        }
        restorePairedViewTransitions(parent);
      }
      parent = parent.sibling;
    }
}
function restoreEnterOrExitViewTransitions(fiber) {
  if (fiber.tag === 30)
    (fiber.stateNode.paired = null),
    restoreViewTransitionOnHostInstances(fiber.child, !1),
    restorePairedViewTransitions(fiber);
  else if (0 !== (fiber.subtreeFlags & 33554432))
    for (fiber = fiber.child; null !== fiber; )
      restoreEnterOrExitViewTransitions(fiber), (fiber = fiber.sibling);
  else restorePairedViewTransitions(fiber);
}
function restoreUpdateViewTransition(current, finishedWork) {
  restoreViewTransitionOnHostInstances(current.child, !0);
  restoreViewTransitionOnHostInstances(finishedWork.child, !0);
}
function restoreNestedViewTransitions(changedParent) {
  for (changedParent = changedParent.child; null !== changedParent; )
    changedParent.tag === 30
      ? restoreViewTransitionOnHostInstances(changedParent.child, !1)
      : 0 !== (changedParent.subtreeFlags & 33554432) &&
        restoreNestedViewTransitions(changedParent),
    (changedParent = changedParent.sibling);
}
function measureViewTransitionHostInstancesRecursive(
  parentViewTransition,
  child,
  newName,
  oldName,
  className,
  previousMeasurements,
  stopAtNestedViewTransitions
) {
  for (var inViewport = !1; null !== child; ) {
    if (child.tag === 5) {
      let instance = child.stateNode;
      if (
        null !== previousMeasurements &&
        viewTransitionHostInstanceIdx < previousMeasurements.length
      ) {
        let previousMeasurement =
            previousMeasurements[viewTransitionHostInstanceIdx];
        let nextMeasurement = measureInstance(instance);
        if (previousMeasurement.view || nextMeasurement.view) inViewport = !0;
        var JSCompiler_temp;
        if ((JSCompiler_temp = (parentViewTransition.flags & 4) === 0))
          if (nextMeasurement.clip) JSCompiler_temp = !0;
          else {
            JSCompiler_temp = previousMeasurement.rect;
            let newRect = nextMeasurement.rect;
            JSCompiler_temp =
              JSCompiler_temp.y !== newRect.y ||
              JSCompiler_temp.x !== newRect.x ||
              JSCompiler_temp.height !== newRect.height ||
              JSCompiler_temp.width !== newRect.width;
          }
        JSCompiler_temp && (parentViewTransition.flags |= 4);
        nextMeasurement.abs
          ? (nextMeasurement = !previousMeasurement.abs)
          : ((previousMeasurement = previousMeasurement.rect),
          (nextMeasurement = nextMeasurement.rect),
          (nextMeasurement =
              previousMeasurement.height !== nextMeasurement.height ||
              previousMeasurement.width !== nextMeasurement.width));
        nextMeasurement && (parentViewTransition.flags |= 32);
      } else parentViewTransition.flags |= 32;
      0 !== (parentViewTransition.flags & 4) &&
        applyViewTransitionName(
          instance,
          viewTransitionHostInstanceIdx === 0
            ? newName
            : newName + "_" + viewTransitionHostInstanceIdx,
          className
        );
      (inViewport && 0 !== (parentViewTransition.flags & 4)) ||
        (viewTransitionCancelableChildren === null &&
          (viewTransitionCancelableChildren = []),
        viewTransitionCancelableChildren.push(
          instance,
          oldName,
          child.memoizedProps
        ));
      viewTransitionHostInstanceIdx++;
    } else if (22 !== child.tag || child.memoizedState === null)
      child.tag === 30 && stopAtNestedViewTransitions
        ? (parentViewTransition.flags |= child.flags & 32)
        : measureViewTransitionHostInstancesRecursive(
          parentViewTransition,
          child.child,
          newName,
          oldName,
          className,
          previousMeasurements,
          stopAtNestedViewTransitions
        ) && (inViewport = !0);
    child = child.sibling;
  }
  return inViewport;
}
function measureNestedViewTransitions(changedParent, gesture) {
  for (changedParent = changedParent.child; null !== changedParent; ) {
    if (changedParent.tag === 30) {
      let props = changedParent.memoizedProps;
      let state = changedParent.stateNode;
      let name = getViewTransitionName(props, state);
      let className = getViewTransitionClassName(props.default, props.update);
      if (gesture) {
        state = state.clones;
        var previousMeasurements =
          state === null ? null : state.map(measureClonedInstance);
      } else
        (previousMeasurements = changedParent.memoizedState),
        (changedParent.memoizedState = null);
      state = changedParent;
      let child = changedParent.child;
      viewTransitionHostInstanceIdx = 0;
      name = measureViewTransitionHostInstancesRecursive(
        state,
        child,
        name,
        name,
        className,
        previousMeasurements,
        !1
      );
      0 !== (changedParent.flags & 4) &&
        name &&
        (gesture || scheduleViewTransitionEvent(changedParent, props.onUpdate));
    } else
      0 !== (changedParent.subtreeFlags & 33554432) &&
        measureNestedViewTransitions(changedParent, gesture);
    changedParent = changedParent.sibling;
  }
}
let offscreenSubtreeIsHidden = !1;
let offscreenSubtreeWasHidden = !1;
let needsFormReset = !1;
let PossiblyWeakSet = typeof WeakSet === "function" ? WeakSet : Set;
let nextEffect = null;
let inProgressLanes = null;
let inProgressRoot = null;
let focusedInstanceHandle = null;
let shouldFireAfterActiveInstanceBlur = !1;
let viewTransitionContextChanged = !1;
let inUpdateViewTransition = !1;
let rootViewTransitionAffected = !1;
let rootViewTransitionNameCanceled = !1;
function isHydratingParent(current, finishedWork) {
  return finishedWork.tag === 31
    ? ((finishedWork = finishedWork.memoizedState),
    null !== current.memoizedState && finishedWork === null)
    : finishedWork.tag === 13
      ? ((current = current.memoizedState),
      (finishedWork = finishedWork.memoizedState),
      null !== current &&
          null !== current.dehydrated &&
          (finishedWork === null || finishedWork.dehydrated === null))
      : finishedWork.tag === 3
        ? current.memoizedState.isDehydrated && (finishedWork.flags & 256) === 0
        : !1;
}
function commitBeforeMutationEffects(root, firstChild, committedLanes) {
  root = root.containerInfo;
  eventsEnabled = _enabled;
  root = getActiveElementDeep(root);
  if (hasSelectionCapabilities(root)) {
    if ("selectionStart" in root)
      var JSCompiler_temp = {
        start: root.selectionStart,
        end: root.selectionEnd
      };
    else
      a: {
        JSCompiler_temp =
          ((JSCompiler_temp = root.ownerDocument) &&
            JSCompiler_temp.defaultView) ||
          window;
        let selection =
          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
        if (selection && 0 !== selection.rangeCount) {
          JSCompiler_temp = selection.anchorNode;
          var anchorOffset = selection.anchorOffset;
          var focusNode = selection.focusNode;
          selection = selection.focusOffset;
          try {
            JSCompiler_temp.nodeType, focusNode.nodeType;
          } catch (e$243) {
            JSCompiler_temp = null;
            break a;
          }
          let length = 0;
          let start = -1;
          let end = -1;
          let indexWithinAnchor = 0;
          let indexWithinFocus = 0;
          let node = root;
          let parentNode = null;
          b: for (;;) {
            for (var next; ; ) {
              node !== JSCompiler_temp ||
                (0 !== anchorOffset && 3 !== node.nodeType) ||
                (start = length + anchorOffset);
              node !== focusNode ||
                (0 !== selection && 3 !== node.nodeType) ||
                (end = length + selection);
              node.nodeType === 3 && (length += node.nodeValue.length);
              if ((next = node.firstChild) === null) break;
              parentNode = node;
              node = next;
            }
            for (;;) {
              if (node === root) break b;
              parentNode === JSCompiler_temp &&
                ++indexWithinAnchor === anchorOffset &&
                (start = length);
              parentNode === focusNode &&
                ++indexWithinFocus === selection &&
                (end = length);
              if (null !== (next = node.nextSibling)) break;
              node = parentNode;
              parentNode = node.parentNode;
            }
            node = next;
          }
          JSCompiler_temp =
            start === -1 || end === -1 ? null : { start: start, end: end };
        } else JSCompiler_temp = null;
      }
    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
  } else JSCompiler_temp = null;
  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
  root = null;
  JSCompiler_temp = selectionInformation.focusedElem;
  null !== JSCompiler_temp &&
    (root = getClosestInstanceFromNode(JSCompiler_temp));
  _enabled = !1;
  focusedInstanceHandle = root;
  shouldFireAfterActiveInstanceBlur = !1;
  committedLanes =
    enableViewTransition && (committedLanes & 335544064) === committedLanes;
  nextEffect = firstChild;
  for (firstChild = committedLanes ? 9270 : 9236; null !== nextEffect; ) {
    root = nextEffect;
    JSCompiler_temp = root.deletions;
    if (null !== JSCompiler_temp)
      for (
        anchorOffset = 0;
        anchorOffset < JSCompiler_temp.length;
        anchorOffset++
      )
        (focusNode = JSCompiler_temp[anchorOffset]),
        doesFiberContain(focusNode, focusedInstanceHandle) &&
            ((shouldFireAfterActiveInstanceBlur = !0),
            beforeActiveInstanceBlur(focusNode)),
        committedLanes && commitExitViewTransitions(focusNode);
    if (
      enableViewTransition &&
      root.alternate === null &&
      0 !== (root.flags & 2)
    )
      committedLanes && trackEnterViewTransitions(root),
      commitBeforeMutationEffects_complete(committedLanes);
    else {
      if (enableViewTransition && root.tag === 22)
        if (((JSCompiler_temp = root.alternate), null !== root.memoizedState)) {
          null !== JSCompiler_temp &&
            JSCompiler_temp.memoizedState === null &&
            committedLanes &&
            commitExitViewTransitions(JSCompiler_temp);
          commitBeforeMutationEffects_complete(committedLanes);
          continue;
        } else if (
          null !== JSCompiler_temp &&
          null !== JSCompiler_temp.memoizedState
        ) {
          committedLanes && trackEnterViewTransitions(root);
          commitBeforeMutationEffects_complete(committedLanes);
          continue;
        }
      JSCompiler_temp = root.child;
      0 !== (root.subtreeFlags & firstChild) && null !== JSCompiler_temp
        ? ((JSCompiler_temp.return = root), (nextEffect = JSCompiler_temp))
        : (committedLanes && commitNestedViewTransitions(root),
        commitBeforeMutationEffects_complete(committedLanes));
    }
  }
  appearingViewTransitions = focusedInstanceHandle = null;
}
function commitBeforeMutationEffects_complete(
  isViewTransitionEligible$jscomp$0
) {
  for (; null !== nextEffect; ) {
    let fiber = nextEffect;
    let isViewTransitionEligible = isViewTransitionEligible$jscomp$0;
    let current = fiber.alternate;
    let flags = fiber.flags;
    var JSCompiler_temp;
    if (
      (JSCompiler_temp =
        !shouldFireAfterActiveInstanceBlur && null !== focusedInstanceHandle)
    ) {
      if ((JSCompiler_temp = fiber.tag === 13))
        a: {
          if (
            null !== current &&
            ((JSCompiler_temp = current.memoizedState),
            JSCompiler_temp === null || null !== JSCompiler_temp.dehydrated)
          ) {
            JSCompiler_temp = fiber.memoizedState;
            JSCompiler_temp =
              null !== JSCompiler_temp && JSCompiler_temp.dehydrated === null;
            break a;
          }
          JSCompiler_temp = !1;
        }
      JSCompiler_temp =
        JSCompiler_temp && doesFiberContain(fiber, focusedInstanceHandle);
    }
    JSCompiler_temp &&
      ((shouldFireAfterActiveInstanceBlur = !0),
      beforeActiveInstanceBlur(fiber));
    switch (fiber.tag) {
    case 0:
      if (
        0 !== (flags & 4) &&
          ((current = fiber.updateQueue),
          (current = null !== current ? current.events : null),
          null !== current)
      )
        for (
          isViewTransitionEligible = 0;
          isViewTransitionEligible < current.length;
          isViewTransitionEligible++
        )
          (flags = current[isViewTransitionEligible]),
          (flags.ref.impl = flags.nextImpl);
      break;
    case 11:
    case 15:
      break;
    case 1:
      if (0 !== (flags & 1024) && null !== current) {
        isViewTransitionEligible = void 0;
        flags = current.memoizedProps;
        current = current.memoizedState;
        JSCompiler_temp = fiber.stateNode;
        try {
          let resolvedPrevProps = resolveClassComponentProps(
            fiber.type,
            flags
          );
          isViewTransitionEligible = JSCompiler_temp.getSnapshotBeforeUpdate(
            resolvedPrevProps,
            current
          );
          JSCompiler_temp.__reactInternalSnapshotBeforeUpdate =
              isViewTransitionEligible;
        } catch (error) {
          captureCommitPhaseError(fiber, fiber.return, error);
        }
      }
      break;
    case 3:
      if (0 !== (flags & 1024))
        if (
          ((current = fiber.stateNode.containerInfo),
          (isViewTransitionEligible = current.nodeType),
          isViewTransitionEligible === 9)
        )
          clearContainerSparingly(current);
        else if (isViewTransitionEligible === 1)
          switch (current.nodeName) {
          case "HEAD":
          case "HTML":
          case "BODY":
            clearContainerSparingly(current);
            break;
          default:
            current.textContent = "";
          }
      break;
    case 5:
    case 26:
    case 27:
    case 6:
    case 4:
    case 17:
      break;
    case 30:
      if (enableViewTransition) {
        isViewTransitionEligible &&
            null !== current &&
            ((isViewTransitionEligible = getViewTransitionName(
              current.memoizedProps,
              current.stateNode
            )),
            (flags = fiber.memoizedProps),
            (flags = getViewTransitionClassName(flags.default, flags.update)),
            "none" !== flags &&
              applyViewTransitionToHostInstances(
                current.child,
                isViewTransitionEligible,
                flags,
                (current.memoizedState = []),
                !0
              ));
        break;
      }
    default:
      if (0 !== (flags & 1024)) throw Error(formatProdErrorMessage(163));
    }
    current = fiber.sibling;
    if (null !== current) {
      current.return = fiber.return;
      nextEffect = current;
      break;
    }
    nextEffect = fiber.return;
  }
}
function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
  let prevEffectStart = pushComponentEffectStart();
  let prevEffectDuration = pushComponentEffectDuration();
  let prevEffectErrors = pushComponentEffectErrors();
  let flags = finishedWork.flags;
  switch (finishedWork.tag) {
  case 0:
  case 11:
  case 15:
    recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
    flags & 4 && commitHookLayoutEffects(finishedWork, 5);
    break;
  case 1:
    recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
    if (flags & 4)
      if (((finishedRoot = finishedWork.stateNode), current === null))
        if (shouldProfile(finishedWork)) {
          startEffectTimer();
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
          recordEffectDuration();
        } else
          try {
            finishedRoot.componentDidMount();
          } catch (error$168) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$168
            );
          }
      else {
        var prevProps = resolveClassComponentProps(
          finishedWork.type,
          current.memoizedProps
        );
        current = current.memoizedState;
        if (shouldProfile(finishedWork)) {
          startEffectTimer();
          try {
            finishedRoot.componentDidUpdate(
              prevProps,
              current,
              finishedRoot.__reactInternalSnapshotBeforeUpdate
            );
          } catch (error$169) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$169
            );
          }
          recordEffectDuration();
        } else
          try {
            finishedRoot.componentDidUpdate(
              prevProps,
              current,
              finishedRoot.__reactInternalSnapshotBeforeUpdate
            );
          } catch (error$170) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$170
            );
          }
      }
    flags & 64 && commitClassCallbacks(finishedWork);
    flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
    break;
  case 3:
    current = pushNestedEffectDurations();
    recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
    if (flags & 64 && ((flags = finishedWork.updateQueue), null !== flags)) {
      prevProps = null;
      if (null !== finishedWork.child)
        switch (finishedWork.child.tag) {
        case 27:
        case 5:
          prevProps = finishedWork.child.stateNode;
          break;
        case 1:
          prevProps = finishedWork.child.stateNode;
        }
      try {
        commitCallbacks(flags, prevProps);
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    finishedRoot.effectDuration += popNestedEffectDurations(current);
    break;
  case 27:
    current === null &&
        flags & 4 &&
        commitHostSingletonAcquisition(finishedWork);
  case 26:
  case 5:
    recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
    current === null && flags & 4 && commitHostMount(finishedWork);
    flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
    break;
  case 12:
    flags & 4
      ? ((flags = pushNestedEffectDurations()),
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork),
      (finishedRoot = finishedWork.stateNode),
      (finishedRoot.effectDuration += bubbleNestedEffectDurations(flags)),
      commitProfilerUpdate(
        finishedWork,
        current,
        commitStartTime,
        finishedRoot.effectDuration
      ))
      : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
    break;
  case 31:
    recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
    flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
    break;
  case 13:
    recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
    flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
    flags & 64 &&
        ((finishedRoot = finishedWork.memoizedState),
        null !== finishedRoot &&
          ((finishedRoot = finishedRoot.dehydrated),
          null !== finishedRoot &&
            ((current = retryDehydratedSuspenseBoundary.bind(
              null,
              finishedWork
            )),
            registerSuspenseInstanceRetry(finishedRoot, current))));
    break;
  case 22:
    flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
    if (!flags) {
      current =
          (null !== current && null !== current.memoizedState) ||
          offscreenSubtreeWasHidden;
      prevProps = offscreenSubtreeIsHidden;
      let prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
      offscreenSubtreeIsHidden = flags;
      (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden
        ? (recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          0 !== (finishedWork.subtreeFlags & 8772)
        ),
        enableComponentPerformanceTrack &&
              0 !== (finishedWork.mode & 2) &&
              0 <= componentEffectStartTime &&
              0 <= componentEffectEndTime &&
              0.05 < componentEffectEndTime - componentEffectStartTime &&
              logComponentReappeared(
                finishedWork,
                componentEffectStartTime,
                componentEffectEndTime
              ))
        : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      offscreenSubtreeIsHidden = prevProps;
      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
    }
    break;
  case 30:
    enableViewTransition &&
        (recursivelyTraverseLayoutEffects(finishedRoot, finishedWork),
        flags & 512 && safelyAttachRef(finishedWork, finishedWork.return));
    break;
  case 7:
    enableFragmentRefs &&
        flags & 512 &&
        safelyAttachRef(finishedWork, finishedWork.return);
  default:
    recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
  }
  enableComponentPerformanceTrack &&
    0 !== (finishedWork.mode & 2) &&
    0 <= componentEffectStartTime &&
    0 <= componentEffectEndTime &&
    (0.05 < componentEffectDuration &&
      logComponentEffect(
        finishedWork,
        componentEffectStartTime,
        componentEffectEndTime,
        componentEffectDuration,
        componentEffectErrors
      ),
    finishedWork.alternate === null &&
      null !== finishedWork.return &&
      null !== finishedWork.return.alternate &&
      0.05 < componentEffectEndTime - componentEffectStartTime &&
      (isHydratingParent(finishedWork.return.alternate, finishedWork.return) ||
        logComponentTrigger(
          finishedWork,
          componentEffectStartTime,
          componentEffectEndTime,
          "Mount"
        )));
  popComponentEffectStart(prevEffectStart);
  popComponentEffectDuration(prevEffectDuration);
  componentEffectErrors = prevEffectErrors;
}
function abortRootTransitions(
  root,
  abort,
  deletedTransitions,
  deletedOffscreenInstance
) {
  if (enableTransitionTracing) {
    let rootTransitions = root.incompleteTransitions;
    deletedTransitions.forEach((transition) => {
      rootTransitions.has(transition) &&
        ((transition = rootTransitions.get(transition)),
        transition.aborts === null && (transition.aborts = []),
        transition.aborts.push(abort),
        null !== deletedOffscreenInstance &&
          null !== transition.pendingBoundaries &&
          transition.pendingBoundaries.has(deletedOffscreenInstance) &&
          transition.pendingBoundaries.delete(deletedOffscreenInstance));
    });
  }
}
function abortTracingMarkerTransitions(
  abortedFiber,
  abort,
  deletedTransitions,
  deletedOffscreenInstance,
  isInDeletedTree
) {
  if (enableTransitionTracing) {
    let markerInstance = abortedFiber.stateNode;
    let markerTransitions = markerInstance.transitions;
    let pendingBoundaries = markerInstance.pendingBoundaries;
    null !== markerTransitions &&
      deletedTransitions.forEach((transition) => {
        if (
          null !== abortedFiber &&
          markerTransitions.has(transition) &&
          (markerInstance.aborts === null ||
            !markerInstance.aborts.includes(abort)) &&
          null !== markerInstance.transitions
        ) {
          if (markerInstance.aborts === null) {
            markerInstance.aborts = [abort];
            transition = abortedFiber.memoizedProps.name;
            let transitions = markerInstance.transitions;
            let aborts = markerInstance.aborts;
            enableTransitionTracing &&
              (currentPendingTransitionCallbacks === null &&
                (currentPendingTransitionCallbacks = {
                  transitionStart: null,
                  transitionProgress: null,
                  transitionComplete: null,
                  markerProgress: null,
                  markerIncomplete: new Map(),
                  markerComplete: null
                }),
              currentPendingTransitionCallbacks.markerIncomplete === null &&
                (currentPendingTransitionCallbacks.markerIncomplete =
                  new Map()),
              currentPendingTransitionCallbacks.markerIncomplete.set(
                transition,
                { transitions: transitions, aborts: aborts }
              ));
          } else markerInstance.aborts.push(abort);
          null !== deletedOffscreenInstance &&
            !isInDeletedTree &&
            null !== pendingBoundaries &&
            pendingBoundaries.has(deletedOffscreenInstance) &&
            (pendingBoundaries.delete(deletedOffscreenInstance),
            addMarkerProgressCallbackToPendingTransition(
              abortedFiber.memoizedProps.name,
              deletedTransitions,
              pendingBoundaries
            ));
        }
      });
  }
}
function abortParentMarkerTransitionsForDeletedFiber(
  abortedFiber,
  abort,
  deletedTransitions,
  deletedOffscreenInstance,
  isInDeletedTree
) {
  if (enableTransitionTracing)
    for (; null !== abortedFiber; ) {
      switch (abortedFiber.tag) {
      case 25:
        abortTracingMarkerTransitions(
          abortedFiber,
          abort,
          deletedTransitions,
          deletedOffscreenInstance,
          isInDeletedTree
        );
        break;
      case 3:
        abortRootTransitions(
          abortedFiber.stateNode,
          abort,
          deletedTransitions,
          deletedOffscreenInstance
        );
      }
      abortedFiber = abortedFiber.return;
    }
}
function commitTransitionProgress(offscreenFiber) {
  if (enableTransitionTracing) {
    let offscreenInstance = offscreenFiber.stateNode;
    let prevState = null;
    let previousFiber = offscreenFiber.alternate;
    null !== previousFiber &&
      null !== previousFiber.memoizedState &&
      (prevState = previousFiber.memoizedState);
    prevState = null !== prevState;
    previousFiber = null !== offscreenFiber.memoizedState;
    let pendingMarkers = offscreenInstance._pendingMarkers;
    let name = null;
    offscreenFiber = offscreenFiber.return;
    null !== offscreenFiber &&
      offscreenFiber.tag === 13 &&
      offscreenFiber.memoizedProps.name &&
      (name = offscreenFiber.memoizedProps.name);
    !prevState && previousFiber
      ? null !== pendingMarkers &&
        pendingMarkers.forEach((markerInstance) => {
          let pendingBoundaries = markerInstance.pendingBoundaries;
          let transitions = markerInstance.transitions;
          let markerName = markerInstance.name;
          pendingBoundaries === null ||
            pendingBoundaries.has(offscreenInstance) ||
            (pendingBoundaries.set(offscreenInstance, { name: name }),
            null !== transitions &&
              (markerInstance.tag === 1 && null !== markerName
                ? addMarkerProgressCallbackToPendingTransition(
                  markerName,
                  transitions,
                  pendingBoundaries
                )
                : markerInstance.tag === 0 &&
                  transitions.forEach((transition) => {
                    addTransitionProgressCallbackToPendingTransition(
                      transition,
                      pendingBoundaries
                    );
                  })));
        })
      : prevState &&
        !previousFiber &&
        null !== pendingMarkers &&
        pendingMarkers.forEach((markerInstance) => {
          let pendingBoundaries = markerInstance.pendingBoundaries;
          let transitions = markerInstance.transitions;
          let markerName = markerInstance.name;
          null !== pendingBoundaries &&
            pendingBoundaries.has(offscreenInstance) &&
            (pendingBoundaries.delete(offscreenInstance),
            null !== transitions &&
              (markerInstance.tag === 1 && null !== markerName
                ? (addMarkerProgressCallbackToPendingTransition(
                  markerName,
                  transitions,
                  pendingBoundaries
                ),
                pendingBoundaries.size === 0 &&
                    (markerInstance.aborts === null &&
                      addMarkerCompleteCallbackToPendingTransition(
                        markerName,
                        transitions
                      ),
                    (markerInstance.transitions = null),
                    (markerInstance.pendingBoundaries = null),
                    (markerInstance.aborts = null)))
                : markerInstance.tag === 0 &&
                  transitions.forEach((transition) => {
                    addTransitionProgressCallbackToPendingTransition(
                      transition,
                      pendingBoundaries
                    );
                  })));
        });
  }
}
function detachFiberAfterEffects(fiber) {
  let alternate = fiber.alternate;
  null !== alternate &&
    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
  fiber.child = null;
  fiber.deletions = null;
  fiber.sibling = null;
  fiber.tag === 5 &&
    ((alternate = fiber.stateNode),
    null !== alternate && detachDeletedInstance(alternate));
  fiber.stateNode = null;
  fiber.return = null;
  fiber.dependencies = null;
  fiber.memoizedProps = null;
  fiber.memoizedState = null;
  fiber.pendingProps = null;
  fiber.stateNode = null;
  fiber.updateQueue = null;
}
let hostParent = null;
let hostParentIsContainer = !1;
function recursivelyTraverseDeletionEffects(
  finishedRoot,
  nearestMountedAncestor,
  parent
) {
  for (parent = parent.child; null !== parent; )
    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
    (parent = parent.sibling);
}
function commitDeletionEffectsOnFiber(
  finishedRoot,
  nearestMountedAncestor,
  deletedFiber
) {
  if (injectedHook && typeof injectedHook.onCommitFiberUnmount === "function")
    try {
      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
    } catch (err) {}
  let prevEffectStart = pushComponentEffectStart();
  let prevEffectDuration = pushComponentEffectDuration();
  let prevEffectErrors = pushComponentEffectErrors();
  switch (deletedFiber.tag) {
  case 26:
    offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
    recursivelyTraverseDeletionEffects(
      finishedRoot,
      nearestMountedAncestor,
      deletedFiber
    );
    deletedFiber.memoizedState
      ? deletedFiber.memoizedState.count--
      : deletedFiber.stateNode &&
          ((nearestMountedAncestor = deletedFiber.stateNode),
          nearestMountedAncestor.parentNode.removeChild(
            nearestMountedAncestor
          ));
    break;
  case 27:
    offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
    var prevHostParent = hostParent;
    var prevHostParentIsContainer = hostParentIsContainer;
    isSingletonScope(deletedFiber.type) &&
        ((hostParent = deletedFiber.stateNode), (hostParentIsContainer = !1));
    recursivelyTraverseDeletionEffects(
      finishedRoot,
      nearestMountedAncestor,
      deletedFiber
    );
    releaseSingletonInstance(deletedFiber.stateNode);
    hostParent = prevHostParent;
    hostParentIsContainer = prevHostParentIsContainer;
    break;
  case 5:
    offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor),
    enableFragmentRefs &&
          deletedFiber.tag === 5 &&
          commitFragmentInstanceDeletionEffects(deletedFiber);
  case 6:
    prevHostParent = hostParent;
    prevHostParentIsContainer = hostParentIsContainer;
    hostParent = null;
    recursivelyTraverseDeletionEffects(
      finishedRoot,
      nearestMountedAncestor,
      deletedFiber
    );
    hostParent = prevHostParent;
    hostParentIsContainer = prevHostParentIsContainer;
    if (null !== hostParent)
      if (hostParentIsContainer)
        try {
          (hostParent.nodeType === 9
            ? hostParent.body
            : hostParent.nodeType === 8
              ? hostParent.parentNode
              : hostParent.nodeName === "HTML"
                ? hostParent.ownerDocument.body
                : hostParent
          ).removeChild(deletedFiber.stateNode),
          trackHostMutation();
        } catch (error) {
          captureCommitPhaseError(
            deletedFiber,
            nearestMountedAncestor,
            error
          );
        }
      else
        try {
          hostParent.removeChild(deletedFiber.stateNode), trackHostMutation();
        } catch (error) {
          captureCommitPhaseError(
            deletedFiber,
            nearestMountedAncestor,
            error
          );
        }
    break;
  case 18:
    finishedRoot = finishedRoot.hydrationCallbacks;
    if (null !== finishedRoot)
      try {
        (prevHostParent = finishedRoot.onDeleted) &&
            prevHostParent(deletedFiber.stateNode);
      } catch (error) {
        captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
      }
    null !== hostParent &&
        (hostParentIsContainer
          ? ((nearestMountedAncestor = hostParent),
          clearHydrationBoundary(
            nearestMountedAncestor.nodeType === 9
              ? nearestMountedAncestor.body
              : nearestMountedAncestor.nodeType === 8
                ? nearestMountedAncestor.parentNode
                : nearestMountedAncestor.nodeName === "HTML"
                  ? nearestMountedAncestor.ownerDocument.body
                  : nearestMountedAncestor,
            deletedFiber.stateNode
          ),
          retryIfBlockedOn(nearestMountedAncestor))
          : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
    break;
  case 4:
    prevHostParent = hostParent;
    prevHostParentIsContainer = hostParentIsContainer;
    hostParent = deletedFiber.stateNode.containerInfo;
    hostParentIsContainer = !0;
    recursivelyTraverseDeletionEffects(
      finishedRoot,
      nearestMountedAncestor,
      deletedFiber
    );
    hostParent = prevHostParent;
    hostParentIsContainer = prevHostParentIsContainer;
    break;
  case 0:
  case 11:
  case 14:
  case 15:
    (!enableHiddenSubtreeInsertionEffectCleanup &&
        offscreenSubtreeWasHidden) ||
        commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
    offscreenSubtreeWasHidden ||
        commitHookLayoutUnmountEffects(deletedFiber, nearestMountedAncestor, 4);
    recursivelyTraverseDeletionEffects(
      finishedRoot,
      nearestMountedAncestor,
      deletedFiber
    );
    break;
  case 1:
    offscreenSubtreeWasHidden ||
        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
        (prevHostParent = deletedFiber.stateNode),
        typeof prevHostParent.componentWillUnmount === "function" &&
          safelyCallComponentWillUnmount(
            deletedFiber,
            nearestMountedAncestor,
            prevHostParent
          ));
    recursivelyTraverseDeletionEffects(
      finishedRoot,
      nearestMountedAncestor,
      deletedFiber
    );
    break;
  case 21:
    offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
    recursivelyTraverseDeletionEffects(
      finishedRoot,
      nearestMountedAncestor,
      deletedFiber
    );
    break;
  case 22:
    offscreenSubtreeWasHidden =
        (prevHostParent = offscreenSubtreeWasHidden) ||
        null !== deletedFiber.memoizedState;
    recursivelyTraverseDeletionEffects(
      finishedRoot,
      nearestMountedAncestor,
      deletedFiber
    );
    offscreenSubtreeWasHidden = prevHostParent;
    break;
  case 30:
    if (enableViewTransition) {
      safelyDetachRef(deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    }
  case 7:
    if (enableFragmentRefs) {
      offscreenSubtreeWasHidden ||
          safelyDetachRef(deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    }
  default:
    recursivelyTraverseDeletionEffects(
      finishedRoot,
      nearestMountedAncestor,
      deletedFiber
    );
  }
  enableComponentPerformanceTrack &&
    0 !== (deletedFiber.mode & 2) &&
    0 <= componentEffectStartTime &&
    0 <= componentEffectEndTime &&
    0.05 < componentEffectDuration &&
    logComponentEffect(
      deletedFiber,
      componentEffectStartTime,
      componentEffectEndTime,
      componentEffectDuration,
      componentEffectErrors
    );
  popComponentEffectStart(prevEffectStart);
  popComponentEffectDuration(prevEffectDuration);
  componentEffectErrors = prevEffectErrors;
}
function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
  if (finishedWork.memoizedState === null) {
    let current = finishedWork.alternate;
    if (
      null !== current &&
      ((current = current.memoizedState), null !== current)
    ) {
      current = current.dehydrated;
      try {
        retryIfBlockedOn(current);
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
      try {
        let hydrationCallbacks = finishedRoot.hydrationCallbacks;
        if (null !== hydrationCallbacks) {
          let onHydrated = hydrationCallbacks.onHydrated;
          onHydrated && onHydrated(current);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
  }
}
function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
  if (finishedWork.memoizedState === null) {
    let current = finishedWork.alternate;
    if (
      null !== current &&
      ((current = current.memoizedState),
      null !== current && ((current = current.dehydrated), null !== current))
    ) {
      try {
        retryIfBlockedOn(current);
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
      try {
        let hydrationCallbacks = finishedRoot.hydrationCallbacks;
        if (null !== hydrationCallbacks) {
          let onHydrated = hydrationCallbacks.onHydrated;
          onHydrated && onHydrated(current);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
  }
}
function getRetryCache(finishedWork) {
  switch (finishedWork.tag) {
  case 31:
  case 13:
  case 19:
    var retryCache = finishedWork.stateNode;
    retryCache === null &&
        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
    return retryCache;
  case 22:
    return (
      (finishedWork = finishedWork.stateNode),
      (retryCache = finishedWork._retryCache),
      retryCache === null &&
          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
      retryCache
    );
  default:
    throw Error(formatProdErrorMessage(435, finishedWork.tag));
  }
}
function attachSuspenseRetryListeners(finishedWork, wakeables) {
  let retryCache = getRetryCache(finishedWork);
  wakeables.forEach((wakeable) => {
    if (!retryCache.has(wakeable)) {
      retryCache.add(wakeable);
      if (isDevToolsPresent)
        if (null !== inProgressLanes && null !== inProgressRoot)
          restorePendingUpdaters(inProgressRoot, inProgressLanes);
        else throw Error(formatProdErrorMessage(413));
      let retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
      wakeable.then(retry, retry);
    }
  });
}
function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber, lanes) {
  let deletions = parentFiber.deletions;
  if (null !== deletions)
    for (let i = 0; i < deletions.length; i++) {
      let childToDelete = deletions[i];
      let root = root$jscomp$0;
      let returnFiber = parentFiber;
      let prevEffectStart = pushComponentEffectStart();
      let parent = returnFiber;
      a: for (; null !== parent; ) {
        switch (parent.tag) {
        case 27:
          if (isSingletonScope(parent.type)) {
            hostParent = parent.stateNode;
            hostParentIsContainer = !1;
            break a;
          }
          break;
        case 5:
          hostParent = parent.stateNode;
          hostParentIsContainer = !1;
          break a;
        case 3:
        case 4:
          hostParent = parent.stateNode.containerInfo;
          hostParentIsContainer = !0;
          break a;
        }
        parent = parent.return;
      }
      if (hostParent === null) throw Error(formatProdErrorMessage(160));
      commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
      hostParent = null;
      hostParentIsContainer = !1;
      enableComponentPerformanceTrack &&
        0 !== (childToDelete.mode & 2) &&
        0 <= componentEffectStartTime &&
        0 <= componentEffectEndTime &&
        0.05 < componentEffectEndTime - componentEffectStartTime &&
        logComponentTrigger(
          childToDelete,
          componentEffectStartTime,
          componentEffectEndTime,
          "Unmount"
        );
      popComponentEffectStart(prevEffectStart);
      root = childToDelete.alternate;
      null !== root && (root.return = null);
      childToDelete.return = null;
    }
  if (parentFiber.subtreeFlags & 13878)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0, lanes),
      (parentFiber = parentFiber.sibling);
}
let currentHoistableRoot = null;
function commitMutationEffectsOnFiber(finishedWork, root, lanes) {
  let prevEffectStart = pushComponentEffectStart();
  let prevEffectDuration = pushComponentEffectDuration();
  let prevEffectErrors = pushComponentEffectErrors();
  let current = finishedWork.alternate;
  let flags = finishedWork.flags;
  switch (finishedWork.tag) {
  case 0:
  case 11:
  case 14:
  case 15:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    flags & 4 &&
        (commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
        commitHookEffectListMount(3, finishedWork),
        commitHookLayoutUnmountEffects(finishedWork, finishedWork.return, 5));
    break;
  case 1:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    flags & 512 &&
        (offscreenSubtreeWasHidden ||
          current === null ||
          safelyDetachRef(current, current.return));
    flags & 64 &&
        offscreenSubtreeIsHidden &&
        ((current = finishedWork.updateQueue),
        null !== current &&
          ((flags = current.callbacks),
          null !== flags &&
            ((root = current.shared.hiddenCallbacks),
            (current.shared.hiddenCallbacks =
              root === null ? flags : root.concat(flags)))));
    break;
  case 26:
    var hoistableRoot = currentHoistableRoot;
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    flags & 512 &&
        (offscreenSubtreeWasHidden ||
          current === null ||
          safelyDetachRef(current, current.return));
    if (flags & 4)
      if (
        ((root = null !== current ? current.memoizedState : null),
        (flags = finishedWork.memoizedState),
        current === null)
      )
        if (flags === null)
          if (finishedWork.stateNode === null) {
            a: {
              current = finishedWork.type;
              flags = finishedWork.memoizedProps;
              root = hoistableRoot.ownerDocument || hoistableRoot;
              b: switch (current) {
              case "title":
                lanes = root.getElementsByTagName("title")[0];
                if (
                  !lanes ||
                      lanes[internalHoistableMarker] ||
                      lanes[internalInstanceKey] ||
                      lanes.namespaceURI === "http://www.w3.org/2000/svg" ||
                      lanes.hasAttribute("itemprop")
                )
                  (lanes = root.createElement(current)),
                  root.head.insertBefore(
                    lanes,
                    root.querySelector("head > title")
                  );
                setInitialProperties(lanes, current, flags);
                lanes[internalInstanceKey] = finishedWork;
                markNodeAsHoistable(lanes);
                current = lanes;
                break a;
              case "link":
                if (
                  (hoistableRoot = getHydratableHoistableCache(
                    "link",
                    "href",
                    root
                  ).get(current + (flags.href || "")))
                )
                  for (var i = 0; i < hoistableRoot.length; i++)
                    if (
                      ((lanes = hoistableRoot[i]),
                      lanes.getAttribute("href") ===
                            (flags.href == null || flags.href === ""
                              ? null
                              : flags.href) &&
                            lanes.getAttribute("rel") ===
                              (flags.rel == null ? null : flags.rel) &&
                            lanes.getAttribute("title") ===
                              (flags.title == null ? null : flags.title) &&
                            lanes.getAttribute("crossorigin") ===
                              (flags.crossOrigin == null
                                ? null
                                : flags.crossOrigin))
                    ) {
                      hoistableRoot.splice(i, 1);
                      break b;
                    }
                lanes = root.createElement(current);
                setInitialProperties(lanes, current, flags);
                root.head.appendChild(lanes);
                break;
              case "meta":
                if (
                  (hoistableRoot = getHydratableHoistableCache(
                    "meta",
                    "content",
                    root
                  ).get(current + (flags.content || "")))
                )
                  for (i = 0; i < hoistableRoot.length; i++)
                    if (
                      ((lanes = hoistableRoot[i]),
                      lanes.getAttribute("content") ===
                            (flags.content == null
                              ? null
                              : "" + flags.content) &&
                            lanes.getAttribute("name") ===
                              (flags.name == null ? null : flags.name) &&
                            lanes.getAttribute("property") ===
                              (flags.property == null
                                ? null
                                : flags.property) &&
                            lanes.getAttribute("http-equiv") ===
                              (flags.httpEquiv == null
                                ? null
                                : flags.httpEquiv) &&
                            lanes.getAttribute("charset") ===
                              (flags.charSet == null ? null : flags.charSet))
                    ) {
                      hoistableRoot.splice(i, 1);
                      break b;
                    }
                lanes = root.createElement(current);
                setInitialProperties(lanes, current, flags);
                root.head.appendChild(lanes);
                break;
              default:
                throw Error(formatProdErrorMessage(468, current));
              }
              lanes[internalInstanceKey] = finishedWork;
              markNodeAsHoistable(lanes);
              current = lanes;
            }
            finishedWork.stateNode = current;
          } else
            mountHoistable(
              hoistableRoot,
              finishedWork.type,
              finishedWork.stateNode
            );
        else
          finishedWork.stateNode = acquireResource(
            hoistableRoot,
            flags,
            finishedWork.memoizedProps
          );
      else
        root !== flags
          ? (root === null
            ? null !== current.stateNode &&
                  ((current = current.stateNode),
                  current.parentNode.removeChild(current))
            : root.count--,
          flags === null
            ? mountHoistable(
              hoistableRoot,
              finishedWork.type,
              finishedWork.stateNode
            )
            : acquireResource(
              hoistableRoot,
              flags,
              finishedWork.memoizedProps
            ))
          : flags === null &&
              null !== finishedWork.stateNode &&
              commitHostUpdate(
                finishedWork,
                finishedWork.memoizedProps,
                current.memoizedProps
              );
    break;
  case 27:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    flags & 512 &&
        (offscreenSubtreeWasHidden ||
          current === null ||
          safelyDetachRef(current, current.return));
    null !== current &&
        flags & 4 &&
        commitHostUpdate(
          finishedWork,
          finishedWork.memoizedProps,
          current.memoizedProps
        );
    break;
  case 5:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    flags & 512 &&
        (offscreenSubtreeWasHidden ||
          current === null ||
          safelyDetachRef(current, current.return));
    if (finishedWork.flags & 32) {
      root = finishedWork.stateNode;
      try {
        setTextContent(root, ""), trackHostMutation();
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    flags & 4 &&
        null != finishedWork.stateNode &&
        ((root = finishedWork.memoizedProps),
        commitHostUpdate(
          finishedWork,
          root,
          null !== current ? current.memoizedProps : root
        ));
    flags & 1024 && (needsFormReset = !0);
    break;
  case 6:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    if (flags & 4) {
      if (finishedWork.stateNode === null)
        throw Error(formatProdErrorMessage(162));
      current = finishedWork.memoizedProps;
      flags = finishedWork.stateNode;
      try {
        (flags.nodeValue = current), trackHostMutation();
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    break;
  case 3:
    hoistableRoot = pushNestedEffectDurations();
    rootMutationContext = !1;
    enableViewTransition && (viewTransitionMutationContext = !1);
    tagCaches = null;
    i = currentHoistableRoot;
    currentHoistableRoot = getHoistableRoot(root.containerInfo);
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    currentHoistableRoot = i;
    commitReconciliationEffects(finishedWork);
    if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
      try {
        retryIfBlockedOn(root.containerInfo);
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    needsFormReset &&
        ((needsFormReset = !1), recursivelyResetForms(finishedWork));
    root.effectDuration += popNestedEffectDurations(hoistableRoot);
    popMutationContext(!1);
    rootMutationContext &&
        0 !== (lanes & 34) &&
        ((root.indicatorLanes &= ~currentEventTransitionLane),
        (needsIsomorphicIndicator = !1));
    break;
  case 4:
    current = pushMutationContext();
    flags = currentHoistableRoot;
    currentHoistableRoot = getHoistableRoot(
      finishedWork.stateNode.containerInfo
    );
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    currentHoistableRoot = flags;
    viewTransitionMutationContext &&
        inUpdateViewTransition &&
        (rootViewTransitionAffected = !0);
    popMutationContext(current);
    break;
  case 12:
    current = pushNestedEffectDurations();
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    finishedWork.stateNode.effectDuration +=
        bubbleNestedEffectDurations(current);
    break;
  case 31:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    flags & 4 &&
        ((current = finishedWork.updateQueue),
        null !== current &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, current)));
    break;
  case 13:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    finishedWork.child.flags & 8192 &&
        ((root = null !== finishedWork.memoizedState),
        (current = null !== current && null !== current.memoizedState),
        alwaysThrottleRetries
          ? root !== current && (globalMostRecentFallbackTime = now$1())
          : root && !current && (globalMostRecentFallbackTime = now$1()));
    if (flags & 4) {
      try {
        if (null !== finishedWork.memoizedState) {
          var suspenseCallback = finishedWork.memoizedProps.suspenseCallback;
          if (typeof suspenseCallback === "function") {
            var retryQueue = finishedWork.updateQueue;
            null !== retryQueue && suspenseCallback(new Set(retryQueue));
          }
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
      current = finishedWork.updateQueue;
      null !== current &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, current));
    }
    break;
  case 22:
    suspenseCallback = null !== finishedWork.memoizedState;
    retryQueue = null !== current && null !== current.memoizedState;
    var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden;
    var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
    offscreenSubtreeIsHidden =
        prevOffscreenSubtreeIsHidden || suspenseCallback;
    offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || retryQueue;
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
    offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
    retryQueue &&
        !suspenseCallback &&
        !prevOffscreenSubtreeIsHidden &&
        !prevOffscreenSubtreeWasHidden &&
        enableComponentPerformanceTrack &&
        0 !== (finishedWork.mode & 2) &&
        0 <= componentEffectStartTime &&
        0 <= componentEffectEndTime &&
        0.05 < componentEffectEndTime - componentEffectStartTime &&
        logComponentReappeared(
          finishedWork,
          componentEffectStartTime,
          componentEffectEndTime
        );
    commitReconciliationEffects(finishedWork);
    if (flags & 8192)
      a: for (
        root = finishedWork.stateNode,
        root._visibility = suspenseCallback
          ? root._visibility & -2
          : root._visibility | 1,
        !suspenseCallback ||
              current === null ||
              retryQueue ||
              offscreenSubtreeIsHidden ||
              offscreenSubtreeWasHidden ||
              (recursivelyTraverseDisappearLayoutEffects(finishedWork),
              enableComponentPerformanceTrack &&
                0 !== (finishedWork.mode & 2) &&
                0 <= componentEffectStartTime &&
                0 <= componentEffectEndTime &&
                0.05 < componentEffectEndTime - componentEffectStartTime &&
                logComponentTrigger(
                  finishedWork,
                  componentEffectStartTime,
                  componentEffectEndTime,
                  "Disconnect"
                )),
        current = null,
        root = finishedWork;
        ;

      ) {
        if (root.tag === 5 || root.tag === 26) {
          if (current === null) {
            lanes = current = root;
            try {
              if (((hoistableRoot = lanes.stateNode), suspenseCallback))
                (i = hoistableRoot.style),
                typeof i.setProperty === "function"
                  ? i.setProperty("display", "none", "important")
                  : (i.display = "none");
              else {
                var instance = lanes.stateNode;
                let styleProp = lanes.memoizedProps.style;
                let display =
                      void 0 !== styleProp &&
                      null !== styleProp &&
                      styleProp.hasOwnProperty("display")
                        ? styleProp.display
                        : null;
                instance.style.display =
                    display == null || typeof display === "boolean"
                      ? ""
                      : ("" + display).trim();
              }
            } catch (error) {
              captureCommitPhaseError(lanes, lanes.return, error);
            }
          }
        } else if (root.tag === 6) {
          if (current === null) {
            lanes = root;
            try {
              (lanes.stateNode.nodeValue = suspenseCallback
                ? ""
                : lanes.memoizedProps),
              trackHostMutation();
            } catch (error) {
              captureCommitPhaseError(lanes, lanes.return, error);
            }
          }
        } else if (root.tag === 18) {
          if (current === null) {
            lanes = root;
            try {
              let instance$jscomp$0 = lanes.stateNode;
              suspenseCallback
                ? hideOrUnhideDehydratedBoundary(instance$jscomp$0, !0)
                : hideOrUnhideDehydratedBoundary(lanes.stateNode, !1);
            } catch (error) {
              captureCommitPhaseError(lanes, lanes.return, error);
            }
          }
        } else if (
          ((22 !== root.tag && 23 !== root.tag) ||
              root.memoizedState === null ||
              root === finishedWork) &&
            null !== root.child
        ) {
          root.child.return = root;
          root = root.child;
          continue;
        }
        if (root === finishedWork) break a;
        for (; root.sibling === null; ) {
          if (root.return === null || root.return === finishedWork) break a;
          current === root && (current = null);
          root = root.return;
        }
        current === root && (current = null);
        root.sibling.return = root.return;
        root = root.sibling;
      }
    flags & 4 &&
        ((current = finishedWork.updateQueue),
        null !== current &&
          ((flags = current.retryQueue),
          null !== flags &&
            ((current.retryQueue = null),
            attachSuspenseRetryListeners(finishedWork, flags))));
    break;
  case 19:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    flags & 4 &&
        ((current = finishedWork.updateQueue),
        null !== current &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, current)));
    break;
  case 30:
    enableViewTransition &&
        (flags & 512 &&
          (offscreenSubtreeWasHidden ||
            current === null ||
            safelyDetachRef(current, current.return)),
        (flags = pushMutationContext()),
        (hoistableRoot = inUpdateViewTransition),
        (i = enableViewTransition && (lanes & 335544064) === lanes),
        (instance = finishedWork.memoizedProps),
        (inUpdateViewTransition =
          i &&
          "none" !==
            getViewTransitionClassName(instance.default, instance.update)),
        recursivelyTraverseMutationEffects(root, finishedWork, lanes),
        commitReconciliationEffects(finishedWork),
        i &&
          null !== current &&
          viewTransitionMutationContext &&
          (finishedWork.flags |= 4),
        (inUpdateViewTransition = hoistableRoot),
        popMutationContext(flags));
    break;
  case 21:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes);
    commitReconciliationEffects(finishedWork);
    flags & 512 &&
        (offscreenSubtreeWasHidden ||
          current === null ||
          safelyDetachRef(finishedWork, finishedWork.return),
        offscreenSubtreeIsHidden ||
          safelyAttachRef(finishedWork, finishedWork.return));
    flags & 4 && (finishedWork.stateNode[internalInstanceKey] = finishedWork);
    break;
  case 7:
    enableFragmentRefs &&
        current &&
        null !== current.stateNode &&
        (current.stateNode._fragmentFiber = finishedWork);
  default:
    recursivelyTraverseMutationEffects(root, finishedWork, lanes),
    commitReconciliationEffects(finishedWork);
  }
  enableComponentPerformanceTrack &&
    0 !== (finishedWork.mode & 2) &&
    0 <= componentEffectStartTime &&
    0 <= componentEffectEndTime &&
    (0.05 < componentEffectDuration &&
      logComponentEffect(
        finishedWork,
        componentEffectStartTime,
        componentEffectEndTime,
        componentEffectDuration,
        componentEffectErrors
      ),
    finishedWork.alternate === null &&
      null !== finishedWork.return &&
      null !== finishedWork.return.alternate &&
      0.05 < componentEffectEndTime - componentEffectStartTime &&
      (isHydratingParent(finishedWork.return.alternate, finishedWork.return) ||
        logComponentTrigger(
          finishedWork,
          componentEffectStartTime,
          componentEffectEndTime,
          "Mount"
        )));
  popComponentEffectStart(prevEffectStart);
  popComponentEffectDuration(prevEffectDuration);
  componentEffectErrors = prevEffectErrors;
}
function commitReconciliationEffects(finishedWork) {
  let flags = finishedWork.flags;
  if (flags & 2) {
    try {
      for (
        var hostParentFiber,
          parentFragmentInstances = null,
          parentFiber = finishedWork.return;
        null !== parentFiber;

      ) {
        if (enableFragmentRefs && isFragmentInstanceParent(parentFiber)) {
          let fragmentInstance = parentFiber.stateNode;
          parentFragmentInstances === null
            ? (parentFragmentInstances = [fragmentInstance])
            : parentFragmentInstances.push(fragmentInstance);
        }
        if (isHostParent(parentFiber)) {
          hostParentFiber = parentFiber;
          break;
        }
        parentFiber = parentFiber.return;
      }
      if (hostParentFiber == null) throw Error(formatProdErrorMessage(160));
      switch (hostParentFiber.tag) {
      case 27:
        var parent = hostParentFiber.stateNode;
        var before = getHostSibling(finishedWork);
        insertOrAppendPlacementNode(
          finishedWork,
          before,
          parent,
          parentFragmentInstances
        );
        break;
      case 5:
        var parent$174 = hostParentFiber.stateNode;
        hostParentFiber.flags & 32 &&
            (setTextContent(parent$174, ""), (hostParentFiber.flags &= -33));
        var before$175 = getHostSibling(finishedWork);
        insertOrAppendPlacementNode(
          finishedWork,
          before$175,
          parent$174,
          parentFragmentInstances
        );
        break;
      case 3:
      case 4:
        var parent$176 = hostParentFiber.stateNode.containerInfo;
        var before$177 = getHostSibling(finishedWork);
        insertOrAppendPlacementNodeIntoContainer(
          finishedWork,
          before$177,
          parent$176,
          parentFragmentInstances
        );
        break;
      default:
        throw Error(formatProdErrorMessage(161));
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    finishedWork.flags &= -3;
  }
  flags & 4096 && (finishedWork.flags &= -4097);
}
function recursivelyResetForms(parentFiber) {
  if (parentFiber.subtreeFlags & 1024)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      let fiber = parentFiber;
      recursivelyResetForms(fiber);
      fiber.tag === 5 && fiber.flags & 1024 && fiber.stateNode.reset();
      parentFiber = parentFiber.sibling;
    }
}
function recursivelyTraverseAfterMutationEffects(root, parentFiber) {
  if (parentFiber.subtreeFlags & 9270)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitAfterMutationEffectsOnFiber(parentFiber, root),
      (parentFiber = parentFiber.sibling);
  else measureNestedViewTransitions(parentFiber, !1);
}
function commitAfterMutationEffectsOnFiber(finishedWork, root) {
  let current = finishedWork.alternate;
  if (current === null) commitEnterViewTransitions(finishedWork, !1);
  else
    switch (finishedWork.tag) {
    case 3:
      rootViewTransitionNameCanceled = viewTransitionContextChanged = !1;
      pushViewTransitionCancelableScope();
      recursivelyTraverseAfterMutationEffects(root, finishedWork);
      if (!viewTransitionContextChanged && !rootViewTransitionAffected) {
        finishedWork = viewTransitionCancelableChildren;
        if (null !== finishedWork)
          for (var i = 0; i < finishedWork.length; i += 3) {
            current = finishedWork[i];
            var oldName = finishedWork[i + 1];
            restoreViewTransitionName(current, finishedWork[i + 2]);
            current = current.ownerDocument.documentElement;
            null !== current &&
                current.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + oldName + ")"
                  }
                );
          }
        finishedWork = root.containerInfo;
        i =
            finishedWork.nodeType === 9
              ? finishedWork.documentElement
              : finishedWork.ownerDocument.documentElement;
        8 !== finishedWork.nodeType &&
            null !== i &&
            i.style.viewTransitionName === "" &&
            ((i.style.viewTransitionName = "none"),
            i.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ),
            i.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            ));
        rootViewTransitionNameCanceled = !0;
      }
      viewTransitionCancelableChildren = null;
      break;
    case 5:
      recursivelyTraverseAfterMutationEffects(root, finishedWork);
      break;
    case 4:
      i = viewTransitionContextChanged;
      viewTransitionContextChanged = !1;
      recursivelyTraverseAfterMutationEffects(root, finishedWork);
      viewTransitionContextChanged && (rootViewTransitionAffected = !0);
      viewTransitionContextChanged = i;
      break;
    case 22:
      finishedWork.memoizedState === null &&
          (null !== current.memoizedState
            ? commitEnterViewTransitions(finishedWork, !1)
            : recursivelyTraverseAfterMutationEffects(root, finishedWork));
      break;
    case 30:
      i = viewTransitionContextChanged;
      oldName = pushViewTransitionCancelableScope();
      viewTransitionContextChanged = !1;
      recursivelyTraverseAfterMutationEffects(root, finishedWork);
      viewTransitionContextChanged && (finishedWork.flags |= 4);
      var props = finishedWork.memoizedProps;
      var state = finishedWork.stateNode;
      root = getViewTransitionName(props, state);
      state = getViewTransitionName(current.memoizedProps, state);
      var className = getViewTransitionClassName(props.default, props.update);
      className === "none"
        ? (root = !1)
        : ((props = current.memoizedState),
        (current.memoizedState = null),
        (current = finishedWork.child),
        (viewTransitionHostInstanceIdx = 0),
        (root = measureViewTransitionHostInstancesRecursive(
          finishedWork,
          current,
          root,
          state,
          className,
          props,
          !0
        )),
        viewTransitionHostInstanceIdx !==
              (props === null ? 0 : props.length) &&
              (finishedWork.flags |= 32));
      0 !== (finishedWork.flags & 4) && root
        ? (scheduleViewTransitionEvent(
          finishedWork,
          finishedWork.memoizedProps.onUpdate
        ),
        (viewTransitionCancelableChildren = oldName))
        : null !== oldName &&
            (oldName.push.apply(oldName, viewTransitionCancelableChildren),
            (viewTransitionCancelableChildren = oldName));
      viewTransitionContextChanged = 0 !== (finishedWork.flags & 32) ? !0 : i;
      break;
    default:
      recursivelyTraverseAfterMutationEffects(root, finishedWork);
    }
}
function recursivelyTraverseLayoutEffects(root, parentFiber) {
  if (parentFiber.subtreeFlags & 8772)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
      (parentFiber = parentFiber.sibling);
}
function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    let finishedWork = parentFiber;
    let prevEffectStart = pushComponentEffectStart();
    let prevEffectDuration = pushComponentEffectDuration();
    let prevEffectErrors = pushComponentEffectErrors();
    switch (finishedWork.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      commitHookLayoutUnmountEffects(finishedWork, finishedWork.return, 4);
      recursivelyTraverseDisappearLayoutEffects(finishedWork);
      break;
    case 1:
      safelyDetachRef(finishedWork, finishedWork.return);
      var instance = finishedWork.stateNode;
      typeof instance.componentWillUnmount === "function" &&
          safelyCallComponentWillUnmount(
            finishedWork,
            finishedWork.return,
            instance
          );
      recursivelyTraverseDisappearLayoutEffects(finishedWork);
      break;
    case 27:
      releaseSingletonInstance(finishedWork.stateNode);
    case 26:
    case 5:
      safelyDetachRef(finishedWork, finishedWork.return);
      enableFragmentRefs &&
          finishedWork.tag === 5 &&
          commitFragmentInstanceDeletionEffects(finishedWork);
      recursivelyTraverseDisappearLayoutEffects(finishedWork);
      break;
    case 22:
      finishedWork.memoizedState === null &&
          recursivelyTraverseDisappearLayoutEffects(finishedWork);
      break;
    case 30:
      enableViewTransition &&
          safelyDetachRef(finishedWork, finishedWork.return);
      recursivelyTraverseDisappearLayoutEffects(finishedWork);
      break;
    case 7:
      enableFragmentRefs &&
          safelyDetachRef(finishedWork, finishedWork.return);
    default:
      recursivelyTraverseDisappearLayoutEffects(finishedWork);
    }
    enableComponentPerformanceTrack &&
      0 !== (finishedWork.mode & 2) &&
      0 <= componentEffectStartTime &&
      0 <= componentEffectEndTime &&
      0.05 < componentEffectDuration &&
      logComponentEffect(
        finishedWork,
        componentEffectStartTime,
        componentEffectEndTime,
        componentEffectDuration,
        componentEffectErrors
      );
    popComponentEffectStart(prevEffectStart);
    popComponentEffectDuration(prevEffectDuration);
    componentEffectErrors = prevEffectErrors;
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseReappearLayoutEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    let current = parentFiber.alternate;
    let finishedRoot = finishedRoot$jscomp$0;
    let finishedWork = parentFiber;
    let prevEffectStart = pushComponentEffectStart();
    let prevEffectDuration = pushComponentEffectDuration();
    let prevEffectErrors = pushComponentEffectErrors();
    let flags = finishedWork.flags;
    switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraverseReappearLayoutEffects(
        finishedRoot,
        finishedWork,
        includeWorkInProgressEffects
      );
      commitHookLayoutEffects(finishedWork, 4);
      break;
    case 1:
      recursivelyTraverseReappearLayoutEffects(
        finishedRoot,
        finishedWork,
        includeWorkInProgressEffects
      );
      current = finishedWork;
      finishedRoot = current.stateNode;
      if (typeof finishedRoot.componentDidMount === "function")
        try {
          finishedRoot.componentDidMount();
        } catch (error) {
          captureCommitPhaseError(current, current.return, error);
        }
      current = finishedWork;
      finishedRoot = current.updateQueue;
      if (null !== finishedRoot) {
        var instance = current.stateNode;
        try {
          let hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
          if (null !== hiddenCallbacks)
            for (
              finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0;
              finishedRoot < hiddenCallbacks.length;
              finishedRoot++
            )
              callCallback(hiddenCallbacks[finishedRoot], instance);
        } catch (error) {
          captureCommitPhaseError(current, current.return, error);
        }
      }
      includeWorkInProgressEffects &&
          flags & 64 &&
          commitClassCallbacks(finishedWork);
      safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 27:
      commitHostSingletonAcquisition(finishedWork);
    case 26:
    case 5:
      if (enableFragmentRefs && finishedWork.tag === 5) {
        instance = finishedWork;
        for (let parent = instance.return; null !== parent; ) {
          isFragmentInstanceParent(parent) &&
              commitNewChildToFragmentInstance(
                instance.stateNode,
                parent.stateNode
              );
          if (isHostParent(parent)) break;
          parent = parent.return;
        }
      }
      recursivelyTraverseReappearLayoutEffects(
        finishedRoot,
        finishedWork,
        includeWorkInProgressEffects
      );
      includeWorkInProgressEffects &&
          current === null &&
          flags & 4 &&
          commitHostMount(finishedWork);
      safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 12:
      includeWorkInProgressEffects && flags & 4
        ? ((flags = pushNestedEffectDurations()),
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        ),
        (finishedRoot = finishedWork.stateNode),
        (finishedRoot.effectDuration += bubbleNestedEffectDurations(flags)),
        commitProfilerUpdate(
          finishedWork,
          current,
          commitStartTime,
          finishedRoot.effectDuration
        ))
        : recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
      break;
    case 31:
      recursivelyTraverseReappearLayoutEffects(
        finishedRoot,
        finishedWork,
        includeWorkInProgressEffects
      );
      includeWorkInProgressEffects &&
          flags & 4 &&
          commitActivityHydrationCallbacks(finishedRoot, finishedWork);
      break;
    case 13:
      recursivelyTraverseReappearLayoutEffects(
        finishedRoot,
        finishedWork,
        includeWorkInProgressEffects
      );
      includeWorkInProgressEffects &&
          flags & 4 &&
          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
      break;
    case 22:
      finishedWork.memoizedState === null &&
          recursivelyTraverseReappearLayoutEffects(
            finishedRoot,
            finishedWork,
            includeWorkInProgressEffects
          );
      safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 30:
      enableViewTransition &&
          (recursivelyTraverseReappearLayoutEffects(
            finishedRoot,
            finishedWork,
            includeWorkInProgressEffects
          ),
          safelyAttachRef(finishedWork, finishedWork.return));
      break;
    case 7:
      enableFragmentRefs &&
          safelyAttachRef(finishedWork, finishedWork.return);
    default:
      recursivelyTraverseReappearLayoutEffects(
        finishedRoot,
        finishedWork,
        includeWorkInProgressEffects
      );
    }
    enableComponentPerformanceTrack &&
      0 !== (finishedWork.mode & 2) &&
      0 <= componentEffectStartTime &&
      0 <= componentEffectEndTime &&
      0.05 < componentEffectDuration &&
      logComponentEffect(
        finishedWork,
        componentEffectStartTime,
        componentEffectEndTime,
        componentEffectDuration,
        componentEffectErrors
      );
    popComponentEffectStart(prevEffectStart);
    popComponentEffectDuration(prevEffectDuration);
    componentEffectErrors = prevEffectErrors;
    parentFiber = parentFiber.sibling;
  }
}
function commitOffscreenPassiveMountEffects(current, finishedWork, instance) {
  let previousCache = null;
  null !== current &&
    null !== current.memoizedState &&
    null !== current.memoizedState.cachePool &&
    (previousCache = current.memoizedState.cachePool.pool);
  current = null;
  null !== finishedWork.memoizedState &&
    null !== finishedWork.memoizedState.cachePool &&
    (current = finishedWork.memoizedState.cachePool.pool);
  current !== previousCache &&
    (null != current && current.refCount++,
    null != previousCache && releaseCache(previousCache));
  if (enableTransitionTracing) {
    current = finishedWork.updateQueue;
    previousCache = null !== finishedWork.memoizedState;
    if (null !== current) {
      if (previousCache) {
        let transitions = current.transitions;
        null !== transitions &&
          transitions.forEach((transition) => {
            instance._transitions === null &&
              (instance._transitions = new Set());
            instance._transitions.add(transition);
          });
        current = current.markerInstances;
        null !== current &&
          current.forEach((markerInstance) => {
            let markerTransitions = markerInstance.transitions;
            null !== markerTransitions &&
              markerTransitions.forEach((transition) => {
                instance._transitions === null
                  ? (instance._transitions = new Set())
                  : instance._transitions.has(transition) &&
                    (markerInstance.pendingBoundaries === null &&
                      (markerInstance.pendingBoundaries = new Map()),
                    instance._pendingMarkers === null &&
                      (instance._pendingMarkers = new Set()),
                    instance._pendingMarkers.add(markerInstance));
              });
          });
      }
      finishedWork.updateQueue = null;
    }
    commitTransitionProgress(finishedWork);
    previousCache ||
      ((instance._transitions = null), (instance._pendingMarkers = null));
  }
}
function commitCachePassiveMountEffect(current, finishedWork) {
  current = null;
  null !== finishedWork.alternate &&
    (current = finishedWork.alternate.memoizedState.cache);
  finishedWork = finishedWork.memoizedState.cache;
  finishedWork !== current &&
    (finishedWork.refCount++, null != current && releaseCache(current));
}
function commitTracingMarkerPassiveMountEffect(finishedWork) {
  let instance = finishedWork.stateNode;
  null !== instance.transitions &&
    instance.pendingBoundaries === null &&
    (addMarkerCompleteCallbackToPendingTransition(
      finishedWork.memoizedProps.name,
      instance.transitions
    ),
    (instance.transitions = null),
    (instance.pendingBoundaries = null),
    (instance.aborts = null),
    (instance.name = null));
}
function commitPassiveMountEffects(
  root,
  finishedWork,
  committedLanes,
  committedTransitions,
  renderEndTime
) {
  resetComponentEffectTimers();
  commitPassiveMountOnFiber(
    root,
    finishedWork,
    committedLanes,
    committedTransitions,
    enableComponentPerformanceTrack ? renderEndTime : 0
  );
}
function recursivelyTraversePassiveMountEffects(
  root,
  parentFiber,
  committedLanes,
  committedTransitions,
  endTime
) {
  let isViewTransitionEligible =
    enableViewTransition && (committedLanes & 335544064) === committedLanes;
  if (
    parentFiber.subtreeFlags & (isViewTransitionEligible ? 10262 : 10256) ||
    (enableComponentPerformanceTrack &&
      0 !== parentFiber.actualDuration &&
      (parentFiber.alternate === null ||
        parentFiber.alternate.child !== parentFiber.child))
  )
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      enableComponentPerformanceTrack
        ? ((isViewTransitionEligible = parentFiber.sibling),
        commitPassiveMountOnFiber(
          root,
          parentFiber,
          committedLanes,
          committedTransitions,
          null !== isViewTransitionEligible
            ? isViewTransitionEligible.actualStartTime
            : endTime
        ),
        (parentFiber = isViewTransitionEligible))
        : (commitPassiveMountOnFiber(
          root,
          parentFiber,
          committedLanes,
          committedTransitions,
          0
        ),
        (parentFiber = parentFiber.sibling));
  else isViewTransitionEligible && restoreNestedViewTransitions(parentFiber);
}
let inHydratedSubtree = !1;
function commitPassiveMountOnFiber(
  finishedRoot,
  finishedWork,
  committedLanes,
  committedTransitions,
  endTime
) {
  let prevEffectStart = pushComponentEffectStart();
  let prevEffectDuration = pushComponentEffectDuration();
  let prevEffectErrors = pushComponentEffectErrors();
  let isViewTransitionEligible = enableViewTransition
    ? (committedLanes & 335544064) === committedLanes
    : !1;
  isViewTransitionEligible &&
    finishedWork.alternate === null &&
    null !== finishedWork.return &&
    null !== finishedWork.return.alternate &&
    restoreEnterOrExitViewTransitions(finishedWork);
  let flags = finishedWork.flags;
  switch (finishedWork.tag) {
  case 0:
  case 11:
  case 15:
    enableComponentPerformanceTrack &&
        0 !== (finishedWork.mode & 2) &&
        0 < finishedWork.actualStartTime &&
        0 !== (finishedWork.flags & 1) &&
        logComponentRender(
          finishedWork,
          finishedWork.actualStartTime,
          endTime,
          inHydratedSubtree
        );
    recursivelyTraversePassiveMountEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
    flags & 2048 && commitHookPassiveMountEffects(finishedWork, 9);
    break;
  case 1:
    enableComponentPerformanceTrack &&
        0 !== (finishedWork.mode & 2) &&
        0 < finishedWork.actualStartTime &&
        (0 !== (finishedWork.flags & 128)
          ? logComponentErrored(
            finishedWork,
            finishedWork.actualStartTime,
            endTime
          )
          : 0 !== (finishedWork.flags & 1) &&
            logComponentRender(
              finishedWork,
              finishedWork.actualStartTime,
              endTime,
              inHydratedSubtree
            ));
    recursivelyTraversePassiveMountEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
    break;
  case 3:
    var prevProfilerEffectDuration = pushNestedEffectDurations();
    var wasInHydratedSubtree = inHydratedSubtree;
    enableComponentPerformanceTrack &&
        (inHydratedSubtree =
          null !== finishedWork.alternate &&
          finishedWork.alternate.memoizedState.isDehydrated &&
          (finishedWork.flags & 256) === 0);
    recursivelyTraversePassiveMountEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
    enableComponentPerformanceTrack &&
        (inHydratedSubtree = wasInHydratedSubtree);
    isViewTransitionEligible &&
        rootViewTransitionNameCanceled &&
        restoreRootViewTransitionName(finishedRoot.containerInfo);
    if (
      flags & 2048 &&
        ((flags = null),
        null !== finishedWork.alternate &&
          (flags = finishedWork.alternate.memoizedState.cache),
        (isViewTransitionEligible = finishedWork.memoizedState.cache),
        isViewTransitionEligible !== flags &&
          (isViewTransitionEligible.refCount++,
          null != flags && releaseCache(flags)),
        enableTransitionTracing)
    ) {
      let incompleteTransitions =
          finishedWork.stateNode.incompleteTransitions;
      null !== committedTransitions &&
          (committedTransitions.forEach((transition) => {
            enableTransitionTracing &&
              (currentPendingTransitionCallbacks === null &&
                (currentPendingTransitionCallbacks = {
                  transitionStart: [],
                  transitionProgress: null,
                  transitionComplete: null,
                  markerProgress: null,
                  markerIncomplete: null,
                  markerComplete: null
                }),
              currentPendingTransitionCallbacks.transitionStart === null &&
                (currentPendingTransitionCallbacks.transitionStart = []),
              currentPendingTransitionCallbacks.transitionStart.push(
                transition
              ));
          }),
          clearTransitionsForLanes(finishedRoot, committedLanes));
      incompleteTransitions.forEach((markerInstance, transition) => {
        let pendingBoundaries = markerInstance.pendingBoundaries;
        if (pendingBoundaries === null || pendingBoundaries.size === 0)
          markerInstance.aborts === null &&
              enableTransitionTracing &&
              (currentPendingTransitionCallbacks === null &&
                (currentPendingTransitionCallbacks = {
                  transitionStart: null,
                  transitionProgress: null,
                  transitionComplete: [],
                  markerProgress: null,
                  markerIncomplete: null,
                  markerComplete: null
                }),
              currentPendingTransitionCallbacks.transitionComplete === null &&
                (currentPendingTransitionCallbacks.transitionComplete = []),
              currentPendingTransitionCallbacks.transitionComplete.push(
                transition
              )),
          incompleteTransitions.delete(transition);
      });
      clearTransitionsForLanes(finishedRoot, committedLanes);
    }
    finishedRoot.passiveEffectDuration += popNestedEffectDurations(
      prevProfilerEffectDuration
    );
    break;
  case 12:
    flags & 2048
      ? ((flags = pushNestedEffectDurations()),
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions,
        endTime
      ),
      (finishedRoot = finishedWork.stateNode),
      (finishedRoot.passiveEffectDuration +=
            bubbleNestedEffectDurations(flags)),
      commitProfilerPostCommit(
        finishedWork,
        finishedWork.alternate,
        commitStartTime,
        finishedRoot.passiveEffectDuration
      ))
      : recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions,
        endTime
      );
    break;
  case 31:
    flags = inHydratedSubtree;
    enableComponentPerformanceTrack &&
        ((isViewTransitionEligible =
          null !== finishedWork.alternate
            ? finishedWork.alternate.memoizedState
            : null),
        (prevProfilerEffectDuration = finishedWork.memoizedState),
        null !== isViewTransitionEligible && prevProfilerEffectDuration === null
          ? ((prevProfilerEffectDuration = finishedWork.deletions),
          null !== prevProfilerEffectDuration &&
            0 < prevProfilerEffectDuration.length &&
            prevProfilerEffectDuration[0].tag === 18
            ? ((inHydratedSubtree = !1),
            null !== isViewTransitionEligible.hydrationErrors &&
                  logComponentErrored(
                    finishedWork,
                    finishedWork.actualStartTime,
                    endTime
                  ))
            : (inHydratedSubtree = !0))
          : (inHydratedSubtree = !1));
    recursivelyTraversePassiveMountEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
    enableComponentPerformanceTrack && (inHydratedSubtree = flags);
    break;
  case 13:
    flags = inHydratedSubtree;
    enableComponentPerformanceTrack &&
        ((isViewTransitionEligible =
          null !== finishedWork.alternate
            ? finishedWork.alternate.memoizedState
            : null),
        (prevProfilerEffectDuration = finishedWork.memoizedState),
        isViewTransitionEligible === null ||
        isViewTransitionEligible.dehydrated === null ||
        (null !== prevProfilerEffectDuration &&
          null !== prevProfilerEffectDuration.dehydrated)
          ? (inHydratedSubtree = !1)
          : ((prevProfilerEffectDuration = finishedWork.deletions),
          null !== prevProfilerEffectDuration &&
            0 < prevProfilerEffectDuration.length &&
            prevProfilerEffectDuration[0].tag === 18
            ? ((inHydratedSubtree = !1),
            null !== isViewTransitionEligible.hydrationErrors &&
                  logComponentErrored(
                    finishedWork,
                    finishedWork.actualStartTime,
                    endTime
                  ))
            : (inHydratedSubtree = !0)));
    recursivelyTraversePassiveMountEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
    enableComponentPerformanceTrack && (inHydratedSubtree = flags);
    break;
  case 23:
    recursivelyTraversePassiveMountEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
    flags & 2048 &&
        commitOffscreenPassiveMountEffects(
          finishedWork.alternate,
          finishedWork,
          finishedWork.stateNode
        );
    break;
  case 22:
    prevProfilerEffectDuration = finishedWork.stateNode;
    wasInHydratedSubtree = finishedWork.alternate;
    null !== finishedWork.memoizedState
      ? (isViewTransitionEligible &&
            null !== wasInHydratedSubtree &&
            wasInHydratedSubtree.memoizedState === null &&
            restoreEnterOrExitViewTransitions(wasInHydratedSubtree),
      prevProfilerEffectDuration._visibility & 2
        ? recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          endTime
        )
        : recursivelyTraverseAtomicPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          endTime
        ))
      : (isViewTransitionEligible &&
            null !== wasInHydratedSubtree &&
            null !== wasInHydratedSubtree.memoizedState &&
            restoreEnterOrExitViewTransitions(finishedWork),
      prevProfilerEffectDuration._visibility & 2
        ? recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          endTime
        )
        : ((prevProfilerEffectDuration._visibility |= 2),
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          0 !== (finishedWork.subtreeFlags & 10256),
          endTime
        ),
        enableComponentPerformanceTrack &&
                0 !== (finishedWork.mode & 2) &&
                !inHydratedSubtree &&
                ((finishedRoot = finishedWork.actualStartTime),
                0 <= finishedRoot &&
                  0.05 < endTime - finishedRoot &&
                  logComponentReappeared(finishedWork, finishedRoot, endTime),
                0 <= componentEffectStartTime &&
                  0 <= componentEffectEndTime &&
                  0.05 < componentEffectEndTime - componentEffectStartTime &&
                  logComponentReappeared(
                    finishedWork,
                    componentEffectStartTime,
                    componentEffectEndTime
                  ))));
    flags & 2048 &&
        commitOffscreenPassiveMountEffects(
          wasInHydratedSubtree,
          finishedWork,
          prevProfilerEffectDuration
        );
    break;
  case 24:
    recursivelyTraversePassiveMountEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
    flags & 2048 &&
        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
    break;
  case 30:
    if (enableViewTransition) {
      isViewTransitionEligible &&
          ((flags = finishedWork.alternate),
          null !== flags && restoreUpdateViewTransition(flags, finishedWork));
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions,
        endTime
      );
      break;
    }
  case 25:
    if (enableTransitionTracing) {
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions,
        endTime
      );
      flags & 2048 && commitTracingMarkerPassiveMountEffect(finishedWork);
      break;
    }
  default:
    recursivelyTraversePassiveMountEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
  }
  if (enableComponentPerformanceTrack && 0 !== (finishedWork.mode & 2)) {
    if (
      (finishedRoot =
        !inHydratedSubtree &&
        finishedWork.alternate === null &&
        null !== finishedWork.return &&
        null !== finishedWork.return.alternate)
    )
      (committedLanes = finishedWork.actualStartTime),
      0 <= committedLanes &&
          0.05 < endTime - committedLanes &&
          logComponentTrigger(finishedWork, committedLanes, endTime, "Mount");
    0 <= componentEffectStartTime &&
      0 <= componentEffectEndTime &&
      (0.05 < componentEffectDuration &&
        logComponentEffect(
          finishedWork,
          componentEffectStartTime,
          componentEffectEndTime,
          componentEffectDuration,
          componentEffectErrors
        ),
      finishedRoot &&
        0.05 < componentEffectEndTime - componentEffectStartTime &&
        logComponentTrigger(
          finishedWork,
          componentEffectStartTime,
          componentEffectEndTime,
          "Mount"
        ));
  }
  popComponentEffectStart(prevEffectStart);
  popComponentEffectDuration(prevEffectDuration);
  componentEffectErrors = prevEffectErrors;
}
function recursivelyTraverseReconnectPassiveEffects(
  finishedRoot,
  parentFiber,
  committedLanes,
  committedTransitions,
  includeWorkInProgressEffects,
  endTime
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
  for (parentFiber = parentFiber.child; null !== parentFiber; )
    if (enableComponentPerformanceTrack) {
      let nextSibling = parentFiber.sibling;
      reconnectPassiveEffects(
        finishedRoot,
        parentFiber,
        committedLanes,
        committedTransitions,
        includeWorkInProgressEffects,
        null !== nextSibling ? nextSibling.actualStartTime : endTime
      );
      parentFiber = nextSibling;
    } else
      reconnectPassiveEffects(
        finishedRoot,
        parentFiber,
        committedLanes,
        committedTransitions,
        includeWorkInProgressEffects,
        endTime
      ),
      (parentFiber = parentFiber.sibling);
}
function reconnectPassiveEffects(
  finishedRoot,
  finishedWork,
  committedLanes,
  committedTransitions,
  includeWorkInProgressEffects,
  endTime
) {
  let prevEffectStart = pushComponentEffectStart();
  let prevEffectDuration = pushComponentEffectDuration();
  let prevEffectErrors = pushComponentEffectErrors();
  enableComponentPerformanceTrack &&
    includeWorkInProgressEffects &&
    0 !== (finishedWork.mode & 2) &&
    0 < finishedWork.actualStartTime &&
    0 !== (finishedWork.flags & 1) &&
    logComponentRender(
      finishedWork,
      finishedWork.actualStartTime,
      endTime,
      inHydratedSubtree
    );
  let flags = finishedWork.flags;
  switch (finishedWork.tag) {
  case 0:
  case 11:
  case 15:
    recursivelyTraverseReconnectPassiveEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      includeWorkInProgressEffects,
      endTime
    );
    commitHookPassiveMountEffects(finishedWork, 8);
    break;
  case 23:
    recursivelyTraverseReconnectPassiveEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      includeWorkInProgressEffects,
      endTime
    );
    includeWorkInProgressEffects &&
        flags & 2048 &&
        commitOffscreenPassiveMountEffects(
          finishedWork.alternate,
          finishedWork,
          finishedWork.stateNode
        );
    break;
  case 22:
    var instance$214 = finishedWork.stateNode;
    null !== finishedWork.memoizedState
      ? instance$214._visibility & 2
        ? recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects,
          endTime
        )
        : recursivelyTraverseAtomicPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          endTime
        )
      : ((instance$214._visibility |= 2),
      recursivelyTraverseReconnectPassiveEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions,
        includeWorkInProgressEffects,
        endTime
      ));
    includeWorkInProgressEffects &&
        flags & 2048 &&
        commitOffscreenPassiveMountEffects(
          finishedWork.alternate,
          finishedWork,
          instance$214
        );
    break;
  case 24:
    recursivelyTraverseReconnectPassiveEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      includeWorkInProgressEffects,
      endTime
    );
    includeWorkInProgressEffects &&
        flags & 2048 &&
        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
    break;
  case 25:
    if (enableTransitionTracing) {
      recursivelyTraverseReconnectPassiveEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions,
        includeWorkInProgressEffects,
        endTime
      );
      includeWorkInProgressEffects &&
          flags & 2048 &&
          commitTracingMarkerPassiveMountEffect(finishedWork);
      break;
    }
  default:
    recursivelyTraverseReconnectPassiveEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      includeWorkInProgressEffects,
      endTime
    );
  }
  enableComponentPerformanceTrack &&
    0 !== (finishedWork.mode & 2) &&
    0 <= componentEffectStartTime &&
    0 <= componentEffectEndTime &&
    0.05 < componentEffectDuration &&
    logComponentEffect(
      finishedWork,
      componentEffectStartTime,
      componentEffectEndTime,
      componentEffectDuration,
      componentEffectErrors
    );
  popComponentEffectStart(prevEffectStart);
  popComponentEffectDuration(prevEffectDuration);
  componentEffectErrors = prevEffectErrors;
}
function recursivelyTraverseAtomicPassiveEffects(
  finishedRoot,
  parentFiber,
  committedLanes,
  committedTransitions,
  endTime
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      if (enableComponentPerformanceTrack) {
        let nextSibling = parentFiber.sibling;
        commitAtomicPassiveEffects(
          finishedRoot,
          parentFiber,
          committedLanes,
          committedTransitions,
          null !== nextSibling ? nextSibling.actualStartTime : endTime
        );
        parentFiber = nextSibling;
      } else
        commitAtomicPassiveEffects(
          finishedRoot,
          parentFiber,
          committedLanes,
          committedTransitions,
          endTime
        ),
        (parentFiber = parentFiber.sibling);
}
function commitAtomicPassiveEffects(
  finishedRoot,
  finishedWork,
  committedLanes,
  committedTransitions,
  endTime
) {
  enableComponentPerformanceTrack &&
    0 !== (finishedWork.mode & 2) &&
    0 < finishedWork.actualStartTime &&
    0 !== (finishedWork.flags & 1) &&
    logComponentRender(
      finishedWork,
      finishedWork.actualStartTime,
      endTime,
      inHydratedSubtree
    );
  let flags = finishedWork.flags;
  switch (finishedWork.tag) {
  case 22:
    recursivelyTraverseAtomicPassiveEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
    flags & 2048 &&
        commitOffscreenPassiveMountEffects(
          finishedWork.alternate,
          finishedWork,
          finishedWork.stateNode
        );
    break;
  case 24:
    recursivelyTraverseAtomicPassiveEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
    flags & 2048 &&
        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
    break;
  default:
    recursivelyTraverseAtomicPassiveEffects(
      finishedRoot,
      finishedWork,
      committedLanes,
      committedTransitions,
      endTime
    );
  }
}
function commitPassiveUnmountEffects(finishedWork) {
  resetComponentEffectTimers();
  commitPassiveUnmountOnFiber(finishedWork);
}
let suspenseyCommitFlag = 8192;
function recursivelyAccumulateSuspenseyCommit(parentFiber, committedLanes) {
  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      accumulateSuspenseyCommitOnFiber(parentFiber, committedLanes),
      (parentFiber = parentFiber.sibling);
}
function accumulateSuspenseyCommitOnFiber(fiber, committedLanes) {
  switch (fiber.tag) {
  case 26:
    recursivelyAccumulateSuspenseyCommit(fiber, committedLanes);
    fiber.flags & suspenseyCommitFlag &&
        (null !== fiber.memoizedState
          ? suspendResource(
            currentHoistableRoot,
            fiber.memoizedState,
            fiber.memoizedProps
          )
          : ((fiber = fiber.stateNode),
          (committedLanes & 335544128) === committedLanes &&
              suspendInstance(fiber)));
    break;
  case 5:
    recursivelyAccumulateSuspenseyCommit(fiber, committedLanes);
    fiber.flags & suspenseyCommitFlag &&
        ((fiber = fiber.stateNode),
        (committedLanes & 335544128) === committedLanes &&
          suspendInstance(fiber));
    break;
  case 3:
  case 4:
    var previousHoistableRoot = currentHoistableRoot;
    currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
    recursivelyAccumulateSuspenseyCommit(fiber, committedLanes);
    currentHoistableRoot = previousHoistableRoot;
    break;
  case 22:
    fiber.memoizedState === null &&
        ((previousHoistableRoot = fiber.alternate),
        null !== previousHoistableRoot &&
        null !== previousHoistableRoot.memoizedState
          ? ((previousHoistableRoot = suspenseyCommitFlag),
          (suspenseyCommitFlag = 16777216),
          recursivelyAccumulateSuspenseyCommit(fiber, committedLanes),
          (suspenseyCommitFlag = previousHoistableRoot))
          : recursivelyAccumulateSuspenseyCommit(fiber, committedLanes));
    break;
  case 30:
    if (enableViewTransition) {
      if (
        0 !== (fiber.flags & suspenseyCommitFlag) &&
          ((previousHoistableRoot = fiber.memoizedProps.name),
          null != previousHoistableRoot && "auto" !== previousHoistableRoot)
      ) {
        let state = fiber.stateNode;
        state.paired = null;
        appearingViewTransitions === null &&
            (appearingViewTransitions = new Map());
        appearingViewTransitions.set(previousHoistableRoot, state);
      }
      recursivelyAccumulateSuspenseyCommit(fiber, committedLanes);
      break;
    }
  default:
    recursivelyAccumulateSuspenseyCommit(fiber, committedLanes);
  }
}
function detachAlternateSiblings(parentFiber) {
  let previousFiber = parentFiber.alternate;
  if (
    null !== previousFiber &&
    ((parentFiber = previousFiber.child), null !== parentFiber)
  ) {
    previousFiber.child = null;
    do
      (previousFiber = parentFiber.sibling),
      (parentFiber.sibling = null),
      (parentFiber = previousFiber);
    while (null !== parentFiber);
  }
}
function recursivelyTraversePassiveUnmountEffects(parentFiber) {
  let deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (let i = 0; i < deletions.length; i++) {
        let childToDelete = deletions[i];
        let prevEffectStart = pushComponentEffectStart();
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
        enableComponentPerformanceTrack &&
          0 !== (childToDelete.mode & 2) &&
          0 <= componentEffectStartTime &&
          0 <= componentEffectEndTime &&
          0.05 < componentEffectEndTime - componentEffectStartTime &&
          logComponentTrigger(
            childToDelete,
            componentEffectStartTime,
            componentEffectEndTime,
            "Unmount"
          );
        popComponentEffectStart(prevEffectStart);
      }
    detachAlternateSiblings(parentFiber);
  }
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveUnmountOnFiber(parentFiber),
      (parentFiber = parentFiber.sibling);
}
function commitPassiveUnmountOnFiber(finishedWork) {
  let prevEffectStart = pushComponentEffectStart();
  let prevEffectDuration = pushComponentEffectDuration();
  let prevEffectErrors = pushComponentEffectErrors();
  switch (finishedWork.tag) {
  case 0:
  case 11:
  case 15:
    recursivelyTraversePassiveUnmountEffects(finishedWork);
    finishedWork.flags & 2048 &&
        commitHookPassiveUnmountEffects(finishedWork, finishedWork.return, 9);
    break;
  case 3:
    var prevProfilerEffectDuration = pushNestedEffectDurations();
    recursivelyTraversePassiveUnmountEffects(finishedWork);
    finishedWork.stateNode.passiveEffectDuration += popNestedEffectDurations(
      prevProfilerEffectDuration
    );
    break;
  case 12:
    prevProfilerEffectDuration = pushNestedEffectDurations();
    recursivelyTraversePassiveUnmountEffects(finishedWork);
    finishedWork.stateNode.passiveEffectDuration +=
        bubbleNestedEffectDurations(prevProfilerEffectDuration);
    break;
  case 22:
    prevProfilerEffectDuration = finishedWork.stateNode;
    null !== finishedWork.memoizedState &&
      prevProfilerEffectDuration._visibility & 2 &&
      (finishedWork.return === null || 13 !== finishedWork.return.tag)
      ? ((prevProfilerEffectDuration._visibility &= -3),
      recursivelyTraverseDisconnectPassiveEffects(finishedWork),
      enableComponentPerformanceTrack &&
            0 !== (finishedWork.mode & 2) &&
            0 <= componentEffectStartTime &&
            0 <= componentEffectEndTime &&
            0.05 < componentEffectEndTime - componentEffectStartTime &&
            logComponentTrigger(
              finishedWork,
              componentEffectStartTime,
              componentEffectEndTime,
              "Disconnect"
            ))
      : recursivelyTraversePassiveUnmountEffects(finishedWork);
    break;
  default:
    recursivelyTraversePassiveUnmountEffects(finishedWork);
  }
  enableComponentPerformanceTrack &&
    0 !== (finishedWork.mode & 2) &&
    0 <= componentEffectStartTime &&
    0 <= componentEffectEndTime &&
    0.05 < componentEffectDuration &&
    logComponentEffect(
      finishedWork,
      componentEffectStartTime,
      componentEffectEndTime,
      componentEffectDuration,
      componentEffectErrors
    );
  popComponentEffectStart(prevEffectStart);
  popComponentEffectDuration(prevEffectDuration);
  componentEffectErrors = prevEffectErrors;
}
function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
  let deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        var prevEffectStart = pushComponentEffectStart();
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
        enableComponentPerformanceTrack &&
          0 !== (childToDelete.mode & 2) &&
          0 <= componentEffectStartTime &&
          0 <= componentEffectEndTime &&
          0.05 < componentEffectEndTime - componentEffectStartTime &&
          logComponentTrigger(
            childToDelete,
            componentEffectStartTime,
            componentEffectEndTime,
            "Unmount"
          );
        popComponentEffectStart(prevEffectStart);
      }
    detachAlternateSiblings(parentFiber);
  }
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    deletions = parentFiber;
    i = pushComponentEffectStart();
    childToDelete = pushComponentEffectDuration();
    prevEffectStart = pushComponentEffectErrors();
    switch (deletions.tag) {
    case 0:
    case 11:
    case 15:
      commitHookPassiveUnmountEffects(deletions, deletions.return, 8);
      recursivelyTraverseDisconnectPassiveEffects(deletions);
      break;
    case 22:
      var instance = deletions.stateNode;
      instance._visibility & 2 &&
          ((instance._visibility &= -3),
          recursivelyTraverseDisconnectPassiveEffects(deletions));
      break;
    default:
      recursivelyTraverseDisconnectPassiveEffects(deletions);
    }
    enableComponentPerformanceTrack &&
      0 !== (deletions.mode & 2) &&
      0 <= componentEffectStartTime &&
      0 <= componentEffectEndTime &&
      0.05 < componentEffectDuration &&
      logComponentEffect(
        deletions,
        componentEffectStartTime,
        componentEffectEndTime,
        componentEffectDuration,
        componentEffectErrors
      );
    popComponentEffectStart(i);
    popComponentEffectDuration(childToDelete);
    componentEffectErrors = prevEffectStart;
    parentFiber = parentFiber.sibling;
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
  deletedSubtreeRoot,
  nearestMountedAncestor$jscomp$0
) {
  for (; null !== nextEffect; ) {
    let fiber = nextEffect;
    let nearestMountedAncestor = nearestMountedAncestor$jscomp$0;
    let prevEffectStart = pushComponentEffectStart();
    let prevEffectDuration = pushComponentEffectDuration();
    let prevEffectErrors = pushComponentEffectErrors();
    switch (fiber.tag) {
    case 0:
    case 11:
    case 15:
      commitHookPassiveUnmountEffects(fiber, nearestMountedAncestor, 8);
      break;
    case 23:
    case 22:
      null !== fiber.memoizedState &&
          null !== fiber.memoizedState.cachePool &&
          ((nearestMountedAncestor = fiber.memoizedState.cachePool.pool),
          null != nearestMountedAncestor && nearestMountedAncestor.refCount++);
      break;
    case 13:
      if (enableTransitionTracing) {
        var offscreenFiber = fiber.child;
        var instance = offscreenFiber.stateNode;
        let transitions = instance._transitions;
        if (null !== transitions) {
          let abortReason = {
            reason: "suspense",
            name: fiber.memoizedProps.name || null
          };
          if (
            fiber.memoizedState === null ||
              fiber.memoizedState.dehydrated === null
          )
            abortParentMarkerTransitionsForDeletedFiber(
              offscreenFiber,
              abortReason,
              transitions,
              instance,
              !0
            ),
            null !== nearestMountedAncestor &&
                  abortParentMarkerTransitionsForDeletedFiber(
                    nearestMountedAncestor,
                    abortReason,
                    transitions,
                    instance,
                    !1
                  );
        }
      }
      break;
    case 24:
      releaseCache(fiber.memoizedState.cache);
      break;
    case 25:
      enableTransitionTracing &&
          ((offscreenFiber = fiber.stateNode.transitions),
          null !== offscreenFiber &&
            ((instance = { reason: "marker", name: fiber.memoizedProps.name }),
            abortParentMarkerTransitionsForDeletedFiber(
              fiber,
              instance,
              offscreenFiber,
              null,
              !0
            ),
            null !== nearestMountedAncestor &&
              abortParentMarkerTransitionsForDeletedFiber(
                nearestMountedAncestor,
                instance,
                offscreenFiber,
                null,
                !1
              )));
    }
    enableComponentPerformanceTrack &&
      0 !== (fiber.mode & 2) &&
      0 <= componentEffectStartTime &&
      0 <= componentEffectEndTime &&
      0.05 < componentEffectDuration &&
      logComponentEffect(
        fiber,
        componentEffectStartTime,
        componentEffectEndTime,
        componentEffectDuration,
        componentEffectErrors
      );
    popComponentEffectStart(prevEffectStart);
    popComponentEffectDuration(prevEffectDuration);
    componentEffectErrors = prevEffectErrors;
    prevEffectStart = fiber.child;
    if (null !== prevEffectStart)
      (prevEffectStart.return = fiber), (nextEffect = prevEffectStart);
    else
      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
        prevEffectStart = nextEffect;
        prevEffectDuration = prevEffectStart.sibling;
        prevEffectErrors = prevEffectStart.return;
        detachFiberAfterEffects(prevEffectStart);
        if (prevEffectStart === fiber) {
          nextEffect = null;
          break a;
        }
        if (null !== prevEffectDuration) {
          prevEffectDuration.return = prevEffectErrors;
          nextEffect = prevEffectDuration;
          break a;
        }
        nextEffect = prevEffectErrors;
      }
  }
}
let DefaultAsyncDispatcher = {
  getCacheForType: function (resourceType) {
    let cache = readContext(CacheContext);
    let cacheForType = cache.data.get(resourceType);
    void 0 === cacheForType &&
        ((cacheForType = resourceType()),
        cache.data.set(resourceType, cacheForType));
    return cacheForType;
  },
  cacheSignal: function () {
    return readContext(CacheContext).controller.signal;
  }
};
let postPaintCallbackScheduled = !1;
let callbacks = [];
function schedulePostPaintCallback(callback) {
  callbacks.push(callback);
  postPaintCallbackScheduled ||
    ((postPaintCallbackScheduled = !0),
    requestPostPaintCallback((endTime) => {
      for (let i = 0; i < callbacks.length; i++) callbacks[i](endTime);
      postPaintCallbackScheduled = !1;
      callbacks = [];
    }));
}
let PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
var executionContext = 0;
var workInProgressRoot = null;
let workInProgress = null;
var workInProgressRootRenderLanes = 0;
var workInProgressSuspendedReason = 0;
let workInProgressThrownValue = null;
let workInProgressRootDidSkipSuspendedSiblings = !1;
let workInProgressRootIsPrerendering = !1;
let workInProgressRootDidAttachPingListener = !1;
var entangledRenderLanes = 0;
var workInProgressRootExitStatus = 0;
var workInProgressRootSkippedLanes = 0;
let workInProgressRootInterleavedUpdatedLanes = 0;
let workInProgressRootPingedLanes = 0;
var workInProgressDeferredLane = 0;
var workInProgressSuspendedRetryLanes = 0;
var workInProgressRootConcurrentErrors = null;
var workInProgressRootRecoverableErrors = null;
let workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
let didIncludeCommitPhaseUpdate = !1;
var globalMostRecentFallbackTime = 0;
var workInProgressRootRenderTargetTime = Infinity;
var workInProgressTransitions = null;
var currentPendingTransitionCallbacks = null;
let currentEndTime = null;
function addMarkerProgressCallbackToPendingTransition(
  markerName,
  transitions,
  pendingBoundaries
) {
  enableTransitionTracing &&
    (currentPendingTransitionCallbacks === null &&
      (currentPendingTransitionCallbacks = {
        transitionStart: null,
        transitionProgress: null,
        transitionComplete: null,
        markerProgress: new Map(),
        markerIncomplete: null,
        markerComplete: null
      }),
    currentPendingTransitionCallbacks.markerProgress === null &&
      (currentPendingTransitionCallbacks.markerProgress = new Map()),
    currentPendingTransitionCallbacks.markerProgress.set(markerName, {
      pendingBoundaries: pendingBoundaries,
      transitions: transitions
    }));
}
function addMarkerCompleteCallbackToPendingTransition(markerName, transitions) {
  enableTransitionTracing &&
    (currentPendingTransitionCallbacks === null &&
      (currentPendingTransitionCallbacks = {
        transitionStart: null,
        transitionProgress: null,
        transitionComplete: null,
        markerProgress: null,
        markerIncomplete: null,
        markerComplete: new Map()
      }),
    currentPendingTransitionCallbacks.markerComplete === null &&
      (currentPendingTransitionCallbacks.markerComplete = new Map()),
    currentPendingTransitionCallbacks.markerComplete.set(
      markerName,
      transitions
    ));
}
function addTransitionProgressCallbackToPendingTransition(
  transition,
  boundaries
) {
  enableTransitionTracing &&
    (currentPendingTransitionCallbacks === null &&
      (currentPendingTransitionCallbacks = {
        transitionStart: null,
        transitionProgress: new Map(),
        transitionComplete: null,
        markerProgress: null,
        markerIncomplete: null,
        markerComplete: null
      }),
    currentPendingTransitionCallbacks.transitionProgress === null &&
      (currentPendingTransitionCallbacks.transitionProgress = new Map()),
    currentPendingTransitionCallbacks.transitionProgress.set(
      transition,
      boundaries
    ));
}
var legacyErrorBoundariesThatAlreadyFailed = null;
var pendingEffectsStatus = 0;
var pendingEffectsRoot = null;
let pendingFinishedWork = null;
let pendingEffectsLanes = 0;
let pendingEffectsRemainingLanes = 0;
let pendingEffectsRenderEndTime = -0;
let pendingPassiveTransitions = null;
let pendingRecoverableErrors = null;
let pendingViewTransition = null;
let pendingViewTransitionEvents = null;
var pendingTransitionTypes = null;
let pendingDidIncludeRenderPhaseUpdate = !1;
let pendingSuspendedCommitReason = 0;
let nestedUpdateCount = 0;
let rootWithNestedUpdates = null;
function requestUpdateLane() {
  return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes
    ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes
    : null !== ReactSharedInternals.T
      ? requestTransitionLane()
      : resolveUpdatePriority();
}
function requestDeferredLane() {
  if (workInProgressDeferredLane === 0)
    if ((workInProgressRootRenderLanes & 536870912) === 0 || isHydrating) {
      var lane = nextTransitionDeferredLane;
      nextTransitionDeferredLane <<= 1;
      (nextTransitionDeferredLane & 3932160) === 0 &&
        (nextTransitionDeferredLane = 262144);
      workInProgressDeferredLane = lane;
    } else workInProgressDeferredLane = 536870912;
  lane = suspenseHandlerStackCursor.current;
  null !== lane && (lane.flags |= 32);
  return workInProgressDeferredLane;
}
function scheduleViewTransitionEvent(fiber, callback) {
  if (enableViewTransition && null != callback) {
    let state = fiber.stateNode;
    let instance = state.ref;
    instance === null &&
      (instance = state.ref =
        createViewTransitionInstance(
          getViewTransitionName(fiber.memoizedProps, state)
        ));
    pendingViewTransitionEvents === null && (pendingViewTransitionEvents = []);
    pendingViewTransitionEvents.push(callback.bind(null, instance));
  }
}
function scheduleUpdateOnFiber(root, fiber, lane) {
  if (
    (root === workInProgressRoot &&
      (workInProgressSuspendedReason === 2 ||
        workInProgressSuspendedReason === 9)) ||
    null !== root.cancelPendingCommit
  )
    prepareFreshStack(root, 0),
    markRootSuspended(
      root,
      workInProgressRootRenderLanes,
      workInProgressDeferredLane,
      !1
    );
  markRootUpdated(root, lane);
  if ((executionContext & 2) === 0 || root !== workInProgressRoot) {
    isDevToolsPresent && addFiberToLanesMap(root, fiber, lane);
    if (
      enableTransitionTracing &&
      ((fiber = ReactSharedInternals.T),
      null !== fiber &&
        null != fiber.name &&
        (fiber.startTime === -1 && (fiber.startTime = now$1()),
        enableTransitionTracing))
    ) {
      let transitionLanesMap = root.transitionLanes;
      let index$10 = 31 - clz32(lane);
      let transitions = transitionLanesMap[index$10];
      transitions === null && (transitions = new Set());
      transitions.add(fiber);
      transitionLanesMap[index$10] = transitions;
    }
    root === workInProgressRoot &&
      ((executionContext & 2) === 0 &&
        (workInProgressRootInterleavedUpdatedLanes |= lane),
      workInProgressRootExitStatus === 4 &&
        markRootSuspended(
          root,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          !1
        ));
    ensureRootIsScheduled(root);
  }
}
function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  if (
    enableComponentPerformanceTrack &&
    0 !== workInProgressRootRenderLanes &&
    null !== workInProgress
  ) {
    var yieldEndTime = now$1();
    switch (yieldReason) {
    case 3:
    case 2:
      supportsUserTiming &&
          console.timeStamp(
            "Suspended",
            yieldStartTime,
            yieldEndTime,
            "Components \u269b",
            void 0,
            "primary-light"
          );
      break;
    case 9:
      supportsUserTiming &&
          console.timeStamp(
            "Action",
            yieldStartTime,
            yieldEndTime,
            "Components \u269b",
            void 0,
            "primary-light"
          );
      break;
    default:
      if (supportsUserTiming) {
        var yieldDuration = yieldEndTime - yieldStartTime;
        3 > yieldDuration ||
            console.timeStamp(
              "Blocked",
              yieldStartTime,
              yieldEndTime,
              "Components \u269b",
              void 0,
              5 > yieldDuration
                ? "primary-light"
                : 10 > yieldDuration
                  ? "primary"
                  : 100 > yieldDuration
                    ? "primary-dark"
                    : "error"
            );
      }
    }
  }
  let exitStatus = (yieldDuration =
      (!forceSync &&
        (lanes & 124) === 0 &&
        (lanes & root$jscomp$0.expiredLanes) === 0) ||
      checkIfRootIsPrerendering(root$jscomp$0, lanes))
    ? renderRootConcurrent(root$jscomp$0, lanes)
    : renderRootSync(root$jscomp$0, lanes, !0);
  let renderWasConcurrent = yieldDuration;
  do {
    if (exitStatus === 0) {
      workInProgressRootIsPrerendering &&
        !yieldDuration &&
        markRootSuspended(root$jscomp$0, lanes, 0, !1);
      enableComponentPerformanceTrack &&
        ((lanes = workInProgressSuspendedReason),
        enableComponentPerformanceTrack &&
          ((yieldStartTime = now()), (yieldReason = lanes)));
      break;
    } else {
      yieldEndTime = 0;
      enableComponentPerformanceTrack && (yieldEndTime = now$1());
      forceSync = root$jscomp$0.current.alternate;
      if (
        renderWasConcurrent &&
        !isRenderConsistentWithExternalStores(forceSync)
      ) {
        enableComponentPerformanceTrack &&
          (setCurrentTrackFromLanes(lanes),
          !supportsUserTiming ||
            yieldEndTime <= renderStartTime ||
            console.timeStamp(
              "Teared Render",
              renderStartTime,
              yieldEndTime,
              currentTrack,
              "Scheduler \u269b",
              "error"
            ),
          finalizeRender(lanes, yieldEndTime));
        exitStatus = renderRootSync(root$jscomp$0, lanes, !1);
        renderWasConcurrent = !1;
        continue;
      }
      if (exitStatus === 2) {
        renderWasConcurrent = lanes;
        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
          var JSCompiler_inline_result = 0;
        else
          (JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913),
          (JSCompiler_inline_result =
              0 !== JSCompiler_inline_result
                ? JSCompiler_inline_result
                : JSCompiler_inline_result & 536870912
                  ? 536870912
                  : 0);
        if (0 !== JSCompiler_inline_result) {
          enableComponentPerformanceTrack &&
            (setCurrentTrackFromLanes(lanes),
            logErroredRenderPhase(renderStartTime, yieldEndTime),
            finalizeRender(lanes, yieldEndTime));
          lanes = JSCompiler_inline_result;
          a: {
            let root = root$jscomp$0;
            exitStatus = workInProgressRootConcurrentErrors;
            let wasRootDehydrated = root.current.memoizedState.isDehydrated;
            wasRootDehydrated &&
              (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
            JSCompiler_inline_result = renderRootSync(
              root,
              JSCompiler_inline_result,
              !1
            );
            if (2 !== JSCompiler_inline_result) {
              if (
                workInProgressRootDidAttachPingListener &&
                !wasRootDehydrated
              ) {
                root.errorRecoveryDisabledLanes |= renderWasConcurrent;
                workInProgressRootInterleavedUpdatedLanes |=
                  renderWasConcurrent;
                exitStatus = 4;
                break a;
              }
              renderWasConcurrent = workInProgressRootRecoverableErrors;
              workInProgressRootRecoverableErrors = exitStatus;
              null !== renderWasConcurrent &&
                (workInProgressRootRecoverableErrors === null
                  ? (workInProgressRootRecoverableErrors = renderWasConcurrent)
                  : workInProgressRootRecoverableErrors.push.apply(
                    workInProgressRootRecoverableErrors,
                    renderWasConcurrent
                  ));
            }
            exitStatus = JSCompiler_inline_result;
          }
          renderWasConcurrent = !1;
          if (2 !== exitStatus) continue;
          else enableComponentPerformanceTrack && (yieldEndTime = now$1());
        }
      }
      if (exitStatus === 1) {
        enableComponentPerformanceTrack &&
          (setCurrentTrackFromLanes(lanes),
          logErroredRenderPhase(renderStartTime, yieldEndTime),
          finalizeRender(lanes, yieldEndTime));
        prepareFreshStack(root$jscomp$0, 0);
        markRootSuspended(root$jscomp$0, lanes, 0, !0);
        break;
      }
      a: {
        yieldDuration = root$jscomp$0;
        renderWasConcurrent = exitStatus;
        switch (renderWasConcurrent) {
        case 0:
        case 1:
          throw Error(formatProdErrorMessage(345));
        case 4:
          if ((lanes & 4194048) !== lanes) break;
        case 6:
          enableComponentPerformanceTrack &&
              (setCurrentTrackFromLanes(lanes),
              logSuspendedRenderPhase(renderStartTime, yieldEndTime, lanes),
              finalizeRender(lanes, yieldEndTime),
              (forceSync = lanes),
              enableComponentPerformanceTrack &&
                (0 !== (forceSync & 3) || 0 !== (forceSync & 124)
                  ? (blockingSuspendedTime = yieldEndTime)
                  : 0 !== (forceSync & 4194048) &&
                    (transitionSuspendedTime = yieldEndTime)));
          markRootSuspended(
            yieldDuration,
            lanes,
            workInProgressDeferredLane,
            !workInProgressRootDidSkipSuspendedSiblings
          );
          break a;
        case 2:
          workInProgressRootRecoverableErrors = null;
          break;
        case 3:
        case 5:
          break;
        default:
          throw Error(formatProdErrorMessage(329));
        }
        if (
          (lanes & 62914560) === lanes &&
          (alwaysThrottleRetries || renderWasConcurrent === 3) &&
          ((exitStatus = globalMostRecentFallbackTime + 300 - now$1()),
          10 < exitStatus)
        ) {
          markRootSuspended(
            yieldDuration,
            lanes,
            workInProgressDeferredLane,
            !workInProgressRootDidSkipSuspendedSiblings
          );
          if (0 !== getNextLanes(yieldDuration, 0, !0)) break a;
          yieldDuration.timeoutHandle = scheduleTimeout(
            commitRootWhenReady.bind(
              null,
              yieldDuration,
              forceSync,
              workInProgressRootRecoverableErrors,
              workInProgressTransitions,
              workInProgressRootDidIncludeRecursiveRenderUpdate,
              lanes,
              workInProgressDeferredLane,
              workInProgressRootInterleavedUpdatedLanes,
              workInProgressSuspendedRetryLanes,
              workInProgressRootDidSkipSuspendedSiblings,
              renderWasConcurrent,
              2,
              renderStartTime,
              yieldEndTime
            ),
            exitStatus
          );
          break a;
        }
        commitRootWhenReady(
          yieldDuration,
          forceSync,
          workInProgressRootRecoverableErrors,
          workInProgressTransitions,
          workInProgressRootDidIncludeRecursiveRenderUpdate,
          lanes,
          workInProgressDeferredLane,
          workInProgressRootInterleavedUpdatedLanes,
          workInProgressSuspendedRetryLanes,
          workInProgressRootDidSkipSuspendedSiblings,
          renderWasConcurrent,
          0,
          renderStartTime,
          yieldEndTime
        );
      }
    }
    break;
  } while (1);
  ensureRootIsScheduled(root$jscomp$0);
}
function commitRootWhenReady(
  root,
  finishedWork,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  lanes,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes,
  didSkipSuspendedSiblings,
  exitStatus,
  suspendedCommitReason,
  completedRenderStartTime,
  completedRenderEndTime
) {
  root.timeoutHandle = -1;
  let subtreeFlags = finishedWork.subtreeFlags;
  let isViewTransitionEligible =
      enableViewTransition && (lanes & 335544064) === lanes;
  if (
    isViewTransitionEligible ||
    subtreeFlags & 8192 ||
    (subtreeFlags & 16785408) === 16785408
  ) {
    suspendedState = { stylesheets: null, count: 0, unsuspend: noop$1 };
    appearingViewTransitions = null;
    accumulateSuspenseyCommitOnFiber(finishedWork, lanes);
    if (isViewTransitionEligible) {
      isViewTransitionEligible = root.containerInfo;
      if (suspendedState === null) throw Error(formatProdErrorMessage(475));
      subtreeFlags = suspendedState;
      isViewTransitionEligible = (
        isViewTransitionEligible.nodeType === 9
          ? isViewTransitionEligible
          : isViewTransitionEligible.ownerDocument
      ).__reactViewTransition;
      null != isViewTransitionEligible &&
        (subtreeFlags.count++,
        (subtreeFlags = onUnsuspend.bind(subtreeFlags)),
        isViewTransitionEligible.finished.then(subtreeFlags, subtreeFlags));
    }
    subtreeFlags = waitForCommitToBeReady();
    if (null !== subtreeFlags) {
      root.cancelPendingCommit = subtreeFlags(
        commitRoot.bind(
          null,
          root,
          finishedWork,
          lanes,
          recoverableErrors,
          transitions,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes,
          exitStatus,
          1,
          completedRenderStartTime,
          completedRenderEndTime
        )
      );
      markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
      return;
    }
  }
  commitRoot(
    root,
    finishedWork,
    lanes,
    recoverableErrors,
    transitions,
    didIncludeRenderPhaseUpdate,
    spawnedLane,
    updatedLanes,
    suspendedRetryLanes,
    exitStatus,
    suspendedCommitReason,
    completedRenderStartTime,
    completedRenderEndTime
  );
}
function isRenderConsistentWithExternalStores(finishedWork) {
  for (let node = finishedWork; ; ) {
    let tag = node.tag;
    if (
      (tag === 0 || tag === 11 || tag === 15) &&
      node.flags & 16384 &&
      ((tag = node.updateQueue),
      null !== tag && ((tag = tag.stores), null !== tag))
    )
      for (let i = 0; i < tag.length; i++) {
        let check = tag[i];
        let getSnapshot = check.getSnapshot;
        check = check.value;
        try {
          if (!objectIs(getSnapshot(), check)) return !1;
        } catch (error) {
          return !1;
        }
      }
    tag = node.child;
    if (node.subtreeFlags & 16384 && null !== tag)
      (tag.return = node), (node = tag);
    else {
      if (node === finishedWork) break;
      for (; node.sibling === null; ) {
        if (node.return === null || node.return === finishedWork) return !0;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return !0;
}
function markRootUpdated(root, updatedLanes) {
  root.pendingLanes |= updatedLanes;
  root.indicatorLanes |= updatedLanes & 4194048;
  268435456 !== updatedLanes &&
    ((root.suspendedLanes = 0), (root.pingedLanes = 0), (root.warmLanes = 0));
  enableInfiniteRenderLoopDetection &&
    (executionContext & 2
      ? (workInProgressRootDidIncludeRecursiveRenderUpdate = !0)
      : executionContext & 4 && (didIncludeCommitPhaseUpdate = !0),
    throwIfInfiniteUpdateLoopDetected());
}
function markRootSuspended(
  root,
  suspendedLanes,
  spawnedLane,
  didAttemptEntireTree
) {
  suspendedLanes &= ~workInProgressRootPingedLanes;
  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
  root.suspendedLanes |= suspendedLanes;
  root.pingedLanes &= ~suspendedLanes;
  didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
  didAttemptEntireTree = root.expirationTimes;
  for (let lanes = suspendedLanes; 0 < lanes; ) {
    let index$4 = 31 - clz32(lanes);
    let lane = 1 << index$4;
    didAttemptEntireTree[index$4] = -1;
    lanes &= ~lane;
  }
  0 !== spawnedLane &&
    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
}
function flushSyncWork$1() {
  return (executionContext & 6) === 0
    ? (flushSyncWorkAcrossRoots_impl(0, !1), !1)
    : !0;
}
function resetWorkInProgressStack() {
  if (null !== workInProgress) {
    if (workInProgressSuspendedReason === 0)
      var interruptedWork = workInProgress.return;
    else
      (interruptedWork = workInProgress),
      (lastContextDependency = currentlyRenderingFiber$1 = null),
      resetHooksOnUnwind(interruptedWork),
      (thenableState$1 = null),
      (thenableIndexCounter$1 = 0),
      (interruptedWork = workInProgress);
    for (; null !== interruptedWork; )
      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
      (interruptedWork = interruptedWork.return);
    workInProgress = null;
  }
}
function finalizeRender(lanes, finalizationTime) {
  enableComponentPerformanceTrack &&
    ((0 !== (lanes & 3) || 0 !== (lanes & 124)) &&
      enableComponentPerformanceTrack &&
      (blockingClampTime = finalizationTime),
    0 !== (lanes & 4194048) &&
      enableComponentPerformanceTrack &&
      (transitionClampTime = finalizationTime));
}
function prepareFreshStack(root, lanes) {
  if (enableComponentPerformanceTrack) {
    supportsUserTiming &&
      (console.timeStamp(
        "Blocking Track",
        0.003,
        0.003,
        "Blocking",
        "Scheduler \u269b",
        "primary-light"
      ),
      console.timeStamp(
        "Transition Track",
        0.003,
        0.003,
        "Transition",
        "Scheduler \u269b",
        "primary-light"
      ),
      console.timeStamp(
        "Suspense Track",
        0.003,
        0.003,
        "Suspense",
        "Scheduler \u269b",
        "primary-light"
      ),
      console.timeStamp(
        "Idle Track",
        0.003,
        0.003,
        "Idle",
        "Scheduler \u269b",
        "primary-light"
      ));
    var previousRenderStartTime = renderStartTime;
    enableComponentPerformanceTrack && (renderStartTime = now());
    if (0 !== workInProgressRootRenderLanes && 0 < previousRenderStartTime) {
      setCurrentTrackFromLanes(workInProgressRootRenderLanes);
      if (
        workInProgressRootExitStatus === 3 ||
        workInProgressRootExitStatus === 4
      )
        logSuspendedRenderPhase(
          previousRenderStartTime,
          renderStartTime,
          lanes
        );
      else {
        var endTime = renderStartTime;
        !supportsUserTiming ||
          endTime <= previousRenderStartTime ||
          console.timeStamp(
            (lanes & 536870912) === lanes
              ? "Prewarm"
              : (lanes & 201326741) === lanes
                ? "Interrupted Hydration"
                : "Interrupted Render",
            previousRenderStartTime,
            endTime,
            currentTrack,
            "Scheduler \u269b",
            (lanes & 738197653) === lanes ? "tertiary-dark" : "primary-dark"
          );
      }
      finalizeRender(workInProgressRootRenderLanes, renderStartTime);
    }
    if (0 !== (lanes & 3) || 0 !== (lanes & 124)) {
      previousRenderStartTime =
        0 <= blockingUpdateTime && blockingUpdateTime < blockingClampTime
          ? blockingClampTime
          : blockingUpdateTime;
      endTime =
        0 <= blockingEventTime && blockingEventTime < blockingClampTime
          ? blockingClampTime
          : blockingEventTime;
      0 <= blockingSuspendedTime &&
        (setCurrentTrackFromLanes(lanes),
        logSuspendedWithDelayPhase(
          blockingSuspendedTime,
          0 <= endTime
            ? endTime
            : 0 <= previousRenderStartTime
              ? previousRenderStartTime
              : renderStartTime,
          lanes
        ));
      var eventType = blockingEventType;
      var eventIsRepeat = blockingEventIsRepeat;
      var isSpawnedUpdate = blockingUpdateType === 1;
      var isPingedUpdate = blockingUpdateType === 2;
      var renderStartTime$jscomp$0 = renderStartTime;
      if (supportsUserTiming) {
        currentTrack = "Blocking";
        var eventEndTime =
          0 < previousRenderStartTime
            ? previousRenderStartTime
            : renderStartTime$jscomp$0;
        0 < endTime &&
          null !== eventType &&
          eventEndTime > endTime &&
          console.timeStamp(
            eventIsRepeat ? "" : "Event: " + eventType,
            endTime,
            eventEndTime,
            currentTrack,
            "Scheduler \u269b",
            eventIsRepeat ? "secondary-light" : "warning"
          );
        0 < previousRenderStartTime &&
          renderStartTime$jscomp$0 > previousRenderStartTime &&
          console.timeStamp(
            isPingedUpdate
              ? "Promise Resolved"
              : isSpawnedUpdate
                ? "Cascading Update"
                : 5 < renderStartTime$jscomp$0 - previousRenderStartTime
                  ? "Update Blocked"
                  : "Update",
            previousRenderStartTime,
            renderStartTime$jscomp$0,
            currentTrack,
            "Scheduler \u269b",
            isSpawnedUpdate
              ? "error"
              : (lanes & 738197653) === lanes
                ? "tertiary-light"
                : "primary-light"
          );
      }
      blockingUpdateTime = -1.1;
      blockingUpdateType = 0;
      blockingSuspendedTime = -1.1;
      blockingEventIsRepeat = !0;
    }
    0 !== (lanes & 4194048) &&
      ((previousRenderStartTime =
        0 <= transitionStartTime && transitionStartTime < transitionClampTime
          ? transitionClampTime
          : transitionStartTime),
      (endTime =
        0 <= transitionUpdateTime && transitionUpdateTime < transitionClampTime
          ? transitionClampTime
          : transitionUpdateTime),
      (isSpawnedUpdate =
        0 <= transitionEventTime && transitionEventTime < transitionClampTime
          ? transitionClampTime
          : transitionEventTime),
      0 <= transitionSuspendedTime &&
        (setCurrentTrackFromLanes(lanes),
        logSuspendedWithDelayPhase(
          transitionSuspendedTime,
          0 <= isSpawnedUpdate
            ? isSpawnedUpdate
            : 0 <= endTime
              ? endTime
              : renderStartTime,
          lanes
        )),
      (isPingedUpdate = transitionEventType),
      (renderStartTime$jscomp$0 = transitionEventIsRepeat),
      (eventType = transitionUpdateType === 2),
      (eventIsRepeat = renderStartTime),
      supportsUserTiming &&
        ((currentTrack = "Transition"),
        (eventEndTime =
          0 < previousRenderStartTime
            ? previousRenderStartTime
            : 0 < endTime
              ? endTime
              : eventIsRepeat),
        0 < isSpawnedUpdate &&
          eventEndTime > isSpawnedUpdate &&
          null !== isPingedUpdate &&
          console.timeStamp(
            renderStartTime$jscomp$0 ? "" : "Event: " + isPingedUpdate,
            isSpawnedUpdate,
            eventEndTime,
            currentTrack,
            "Scheduler \u269b",
            renderStartTime$jscomp$0 ? "secondary-light" : "warning"
          ),
        (isSpawnedUpdate = 0 < endTime ? endTime : eventIsRepeat),
        0 < previousRenderStartTime &&
          isSpawnedUpdate > previousRenderStartTime &&
          console.timeStamp(
            "Action",
            previousRenderStartTime,
            isSpawnedUpdate,
            currentTrack,
            "Scheduler \u269b",
            "primary-dark"
          ),
        0 < endTime &&
          eventIsRepeat > endTime &&
          console.timeStamp(
            eventType
              ? "Promise Resolved"
              : 5 < eventIsRepeat - endTime
                ? "Update Blocked"
                : "Update",
            endTime,
            eventIsRepeat,
            currentTrack,
            "Scheduler \u269b",
            "primary-light"
          )),
      (transitionUpdateTime = transitionStartTime = -1.1),
      (transitionUpdateType = 0),
      (transitionSuspendedTime = -1.1),
      (transitionEventIsRepeat = !0));
  }
  previousRenderStartTime = root.timeoutHandle;
  -1 !== previousRenderStartTime &&
    ((root.timeoutHandle = -1), cancelTimeout(previousRenderStartTime));
  previousRenderStartTime = root.cancelPendingCommit;
  null !== previousRenderStartTime &&
    ((root.cancelPendingCommit = null), previousRenderStartTime());
  resetWorkInProgressStack();
  workInProgressRoot = root;
  workInProgress = previousRenderStartTime = createWorkInProgress(
    root.current,
    null
  );
  workInProgressRootRenderLanes = lanes;
  workInProgressSuspendedReason = 0;
  workInProgressThrownValue = null;
  workInProgressRootDidSkipSuspendedSiblings = !1;
  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
  workInProgressRootDidAttachPingListener = !1;
  workInProgressSuspendedRetryLanes =
    workInProgressDeferredLane =
    workInProgressRootPingedLanes =
    workInProgressRootInterleavedUpdatedLanes =
    workInProgressRootSkippedLanes =
    workInProgressRootExitStatus =
      0;
  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
    null;
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
  0 !== (lanes & 8) && (lanes |= lanes & 32);
  endTime = root.entangledLanes;
  if (0 !== endTime)
    for (root = root.entanglements, endTime &= lanes; 0 < endTime; )
      (eventType = 31 - clz32(endTime)),
      (eventIsRepeat = 1 << eventType),
      (lanes |= root[eventType]),
      (endTime &= ~eventIsRepeat);
  entangledRenderLanes = lanes;
  finishQueueingConcurrentUpdates();
  return previousRenderStartTime;
}
function handleThrow(root, thrownValue) {
  currentlyRenderingFiber = null;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  thrownValue === SuspenseException || thrownValue === SuspenseActionException
    ? ((thrownValue = getSuspendedThenable()),
    (workInProgressSuspendedReason = 3))
    : thrownValue === SuspenseyCommitException
      ? ((thrownValue = getSuspendedThenable()),
      (workInProgressSuspendedReason = 4))
      : (workInProgressSuspendedReason =
          thrownValue === SelectiveHydrationException
            ? 8
            : null !== thrownValue &&
                typeof thrownValue === "object" &&
                typeof thrownValue.then === "function"
              ? 6
              : 1);
  workInProgressThrownValue = thrownValue;
  let erroredWork = workInProgress;
  if (erroredWork === null)
    (workInProgressRootExitStatus = 1),
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    );
  else if (
    (erroredWork.mode & 2 &&
      stopProfilerTimerIfRunningAndRecordDuration(erroredWork),
    enableSchedulingProfiler)
  )
    switch ((markComponentRenderStopped(), workInProgressSuspendedReason)) {
    case 1:
      enableSchedulingProfiler &&
          null !== injectedProfilingHooks &&
          typeof injectedProfilingHooks.markComponentErrored === "function" &&
          injectedProfilingHooks.markComponentErrored(
            erroredWork,
            thrownValue,
            workInProgressRootRenderLanes
          );
      break;
    case 2:
    case 9:
    case 3:
    case 6:
    case 7:
      enableSchedulingProfiler &&
          null !== injectedProfilingHooks &&
          typeof injectedProfilingHooks.markComponentSuspended === "function" &&
          injectedProfilingHooks.markComponentSuspended(
            erroredWork,
            thrownValue,
            workInProgressRootRenderLanes
          );
    }
}
function shouldRemainOnPreviousScreen() {
  let handler = suspenseHandlerStackCursor.current;
  return handler === null
    ? !0
    : (workInProgressRootRenderLanes & 4194048) ===
        workInProgressRootRenderLanes
      ? shellBoundary === null
        ? !0
        : !1
      : (workInProgressRootRenderLanes & 62914560) ===
            workInProgressRootRenderLanes ||
          0 !== (workInProgressRootRenderLanes & 536870912)
        ? handler === shellBoundary
        : !1;
}
function pushDispatcher() {
  let prevDispatcher = ReactSharedInternals.H;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  return prevDispatcher === null ? ContextOnlyDispatcher : prevDispatcher;
}
function pushAsyncDispatcher() {
  let prevAsyncDispatcher = ReactSharedInternals.A;
  ReactSharedInternals.A = DefaultAsyncDispatcher;
  return prevAsyncDispatcher;
}
function renderDidSuspendDelayIfPossible() {
  workInProgressRootExitStatus = 4;
  workInProgressRootDidSkipSuspendedSiblings ||
    ((workInProgressRootRenderLanes & 4194048) !==
      workInProgressRootRenderLanes &&
      null !== suspenseHandlerStackCursor.current) ||
    (workInProgressRootIsPrerendering = !0);
  ((workInProgressRootSkippedLanes & 134217727) === 0 &&
    (workInProgressRootInterleavedUpdatedLanes & 134217727) === 0) ||
    workInProgressRoot === null ||
    markRootSuspended(
      workInProgressRoot,
      workInProgressRootRenderLanes,
      workInProgressDeferredLane,
      !1
    );
}
function renderRootSync(root, lanes, shouldYieldForPrerendering) {
  let prevExecutionContext = executionContext;
  executionContext |= 2;
  let prevDispatcher = pushDispatcher();
  let prevAsyncDispatcher = pushAsyncDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
    if (isDevToolsPresent) {
      var memoizedUpdaters = root.memoizedUpdaters;
      0 < memoizedUpdaters.size &&
        (restorePendingUpdaters(root, workInProgressRootRenderLanes),
        memoizedUpdaters.clear());
      movePendingFibersToMemoized(root, lanes);
    }
    workInProgressTransitions = getTransitionsForLanes(root, lanes);
    prepareFreshStack(root, lanes);
  }
  enableSchedulingProfiler && markRenderStarted(lanes);
  lanes = !1;
  memoizedUpdaters = workInProgressRootExitStatus;
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        let unitOfWork = workInProgress;
        let thrownValue = workInProgressThrownValue;
        switch (workInProgressSuspendedReason) {
        case 8:
          resetWorkInProgressStack();
          memoizedUpdaters = 6;
          break a;
        case 3:
        case 2:
        case 9:
        case 6:
          suspenseHandlerStackCursor.current === null && (lanes = !0);
          var reason = workInProgressSuspendedReason;
          workInProgressSuspendedReason = 0;
          workInProgressThrownValue = null;
          throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
          if (
            shouldYieldForPrerendering &&
              workInProgressRootIsPrerendering
          ) {
            memoizedUpdaters = 0;
            break a;
          }
          break;
        default:
          (reason = workInProgressSuspendedReason),
          (workInProgressSuspendedReason = 0),
          (workInProgressThrownValue = null),
          throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
        }
      }
      workLoopSync();
      memoizedUpdaters = workInProgressRootExitStatus;
      break;
    } catch (thrownValue$230) {
      handleThrow(root, thrownValue$230);
    }
  while (1);
  lanes && root.shellSuspendCounter++;
  lastContextDependency = currentlyRenderingFiber$1 = null;
  executionContext = prevExecutionContext;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  enableSchedulingProfiler && markRenderStopped();
  workInProgress === null &&
    ((workInProgressRoot = null),
    (workInProgressRootRenderLanes = 0),
    finishQueueingConcurrentUpdates());
  return memoizedUpdaters;
}
function workLoopSync() {
  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
}
function renderRootConcurrent(root, lanes) {
  let prevExecutionContext = executionContext;
  executionContext |= 2;
  let prevDispatcher = pushDispatcher();
  let prevAsyncDispatcher = pushAsyncDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
    if (isDevToolsPresent) {
      var memoizedUpdaters = root.memoizedUpdaters;
      0 < memoizedUpdaters.size &&
        (restorePendingUpdaters(root, workInProgressRootRenderLanes),
        memoizedUpdaters.clear());
      movePendingFibersToMemoized(root, lanes);
    }
    workInProgressTransitions = getTransitionsForLanes(root, lanes);
    workInProgressRootRenderTargetTime = now$1() + 500;
    prepareFreshStack(root, lanes);
  } else
    workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
  enableSchedulingProfiler && markRenderStarted(lanes);
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress)
        b: switch (
          ((lanes = workInProgress),
          (memoizedUpdaters = workInProgressThrownValue),
          workInProgressSuspendedReason)
        ) {
        case 1:
          workInProgressSuspendedReason = 0;
          workInProgressThrownValue = null;
          throwAndUnwindWorkLoop(root, lanes, memoizedUpdaters, 1);
          break;
        case 2:
        case 9:
          if (isThenableResolved(memoizedUpdaters)) {
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            replaySuspendedUnitOfWork(lanes);
            break;
          }
          lanes = function () {
            (2 !== workInProgressSuspendedReason &&
                9 !== workInProgressSuspendedReason) ||
                workInProgressRoot !== root ||
                (workInProgressSuspendedReason = 7);
            ensureRootIsScheduled(root);
          };
          memoizedUpdaters.then(lanes, lanes);
          break a;
        case 3:
          workInProgressSuspendedReason = 7;
          break a;
        case 4:
          workInProgressSuspendedReason = 5;
          break a;
        case 7:
          isThenableResolved(memoizedUpdaters)
            ? ((workInProgressSuspendedReason = 0),
            (workInProgressThrownValue = null),
            replaySuspendedUnitOfWork(lanes))
            : ((workInProgressSuspendedReason = 0),
            (workInProgressThrownValue = null),
            throwAndUnwindWorkLoop(root, lanes, memoizedUpdaters, 7));
          break;
        case 5:
          var resource = null;
          switch (workInProgress.tag) {
          case 26:
            resource = workInProgress.memoizedState;
          case 5:
          case 27:
            var hostFiber = workInProgress;
            if (
              resource
                ? preloadResource(resource)
                : hostFiber.stateNode.complete
            ) {
              workInProgressSuspendedReason = 0;
              workInProgressThrownValue = null;
              let sibling = hostFiber.sibling;
              if (null !== sibling) workInProgress = sibling;
              else {
                let returnFiber = hostFiber.return;
                null !== returnFiber
                  ? ((workInProgress = returnFiber),
                  completeUnitOfWork(returnFiber))
                  : (workInProgress = null);
              }
              break b;
            }
          }
          workInProgressSuspendedReason = 0;
          workInProgressThrownValue = null;
          throwAndUnwindWorkLoop(root, lanes, memoizedUpdaters, 5);
          break;
        case 6:
          workInProgressSuspendedReason = 0;
          workInProgressThrownValue = null;
          throwAndUnwindWorkLoop(root, lanes, memoizedUpdaters, 6);
          break;
        case 8:
          resetWorkInProgressStack();
          workInProgressRootExitStatus = 6;
          break a;
        default:
          throw Error(formatProdErrorMessage(462));
        }
      workLoopConcurrentByScheduler();
      break;
    } catch (thrownValue$232) {
      handleThrow(root, thrownValue$232);
    }
  while (1);
  lastContextDependency = currentlyRenderingFiber$1 = null;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  executionContext = prevExecutionContext;
  if (null !== workInProgress)
    return (
      enableSchedulingProfiler &&
        enableSchedulingProfiler &&
        null !== injectedProfilingHooks &&
        typeof injectedProfilingHooks.markRenderYielded === "function" &&
        injectedProfilingHooks.markRenderYielded(),
      0
    );
  enableSchedulingProfiler && markRenderStopped();
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopConcurrentByScheduler() {
  for (; null !== workInProgress && !shouldYield(); )
    performUnitOfWork(workInProgress);
}
function performUnitOfWork(unitOfWork) {
  let current = unitOfWork.alternate;
  0 !== (unitOfWork.mode & 2)
    ? (startProfilerTimer(unitOfWork),
    (current = beginWork(current, unitOfWork, entangledRenderLanes)),
    stopProfilerTimerIfRunningAndRecordDuration(unitOfWork))
    : (current = beginWork(current, unitOfWork, entangledRenderLanes));
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  current === null
    ? completeUnitOfWork(unitOfWork)
    : (workInProgress = current);
}
function replaySuspendedUnitOfWork(unitOfWork) {
  let next = unitOfWork;
  let current = next.alternate;
  let isProfilingMode = 0 !== (next.mode & 2);
  isProfilingMode && startProfilerTimer(next);
  switch (next.tag) {
  case 15:
  case 0:
    var Component = next.type;
    var context = isContextProvider(Component)
      ? previousContext
      : contextStackCursor.current;
    context = getMaskedContext(next, context);
    current = replayFunctionComponent(
      current,
      next,
      next.pendingProps,
      Component,
      context,
      workInProgressRootRenderLanes
    );
    break;
  case 11:
    current = replayFunctionComponent(
      current,
      next,
      next.pendingProps,
      next.type.render,
      next.ref,
      workInProgressRootRenderLanes
    );
    break;
  case 5:
    resetHooksOnUnwind(next);
  default:
    unwindInterruptedWork(current, next),
    (next = workInProgress =
          resetWorkInProgress(next, entangledRenderLanes)),
    (current = beginWork(current, next, entangledRenderLanes));
  }
  isProfilingMode && stopProfilerTimerIfRunningAndRecordDuration(next);
  next = current;
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  next === null ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
}
function throwAndUnwindWorkLoop(
  root,
  unitOfWork,
  thrownValue,
  suspendedReason
) {
  lastContextDependency = currentlyRenderingFiber$1 = null;
  resetHooksOnUnwind(unitOfWork);
  thenableState$1 = null;
  thenableIndexCounter$1 = 0;
  let returnFiber = unitOfWork.return;
  try {
    if (
      throwException(
        root,
        returnFiber,
        unitOfWork,
        thrownValue,
        workInProgressRootRenderLanes
      )
    ) {
      workInProgressRootExitStatus = 1;
      logUncaughtError(
        root,
        createCapturedValueAtFiber(thrownValue, root.current)
      );
      workInProgress = null;
      return;
    }
  } catch (error) {
    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
    workInProgressRootExitStatus = 1;
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    );
    workInProgress = null;
    return;
  }
  if (unitOfWork.flags & 32768) {
    if (isHydrating || suspendedReason === 1) root = !0;
    else if (
      workInProgressRootIsPrerendering ||
      0 !== (workInProgressRootRenderLanes & 536870912)
    )
      root = !1;
    else if (
      ((workInProgressRootDidSkipSuspendedSiblings = root = !0),
      suspendedReason === 2 ||
        suspendedReason === 9 ||
        suspendedReason === 3 ||
        suspendedReason === 6)
    )
      (suspendedReason = suspenseHandlerStackCursor.current),
      null !== suspendedReason &&
          suspendedReason.tag === 13 &&
          (suspendedReason.flags |= 16384);
    unwindUnitOfWork(unitOfWork, root);
  } else completeUnitOfWork(unitOfWork);
}
function completeUnitOfWork(unitOfWork) {
  let completedWork = unitOfWork;
  do {
    if (0 !== (completedWork.flags & 32768)) {
      unwindUnitOfWork(
        completedWork,
        workInProgressRootDidSkipSuspendedSiblings
      );
      return;
    }
    let current = completedWork.alternate;
    unitOfWork = completedWork.return;
    startProfilerTimer(completedWork);
    current = completeWork(current, completedWork, entangledRenderLanes);
    0 !== (completedWork.mode & 2) &&
      stopProfilerTimerIfRunningAndRecordIncompleteDuration(completedWork);
    if (null !== current) {
      workInProgress = current;
      return;
    }
    completedWork = completedWork.sibling;
    if (null !== completedWork) {
      workInProgress = completedWork;
      return;
    }
    workInProgress = completedWork = unitOfWork;
  } while (null !== completedWork);
  workInProgressRootExitStatus === 0 && (workInProgressRootExitStatus = 5);
}
function unwindUnitOfWork(unitOfWork, skipSiblings) {
  do {
    let next = unwindWork(unitOfWork.alternate, unitOfWork);
    if (null !== next) {
      next.flags &= 32767;
      workInProgress = next;
      return;
    }
    if (0 !== (unitOfWork.mode & 2)) {
      stopProfilerTimerIfRunningAndRecordIncompleteDuration(unitOfWork);
      next = unitOfWork.actualDuration;
      for (let child = unitOfWork.child; null !== child; )
        (next += child.actualDuration), (child = child.sibling);
      unitOfWork.actualDuration = next;
    }
    next = unitOfWork.return;
    null !== next &&
      ((next.flags |= 32768), (next.subtreeFlags = 0), (next.deletions = null));
    if (
      !skipSiblings &&
      ((unitOfWork = unitOfWork.sibling), null !== unitOfWork)
    ) {
      workInProgress = unitOfWork;
      return;
    }
    workInProgress = unitOfWork = next;
  } while (null !== unitOfWork);
  workInProgressRootExitStatus = 6;
  workInProgress = null;
}
function commitRoot(
  root,
  finishedWork,
  lanes,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes,
  exitStatus,
  suspendedCommitReason,
  completedRenderStartTime,
  completedRenderEndTime
) {
  root.cancelPendingCommit = null;
  do flushPendingEffects();
  while (0 !== pendingEffectsStatus);
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  enableComponentPerformanceTrack &&
    (setCurrentTrackFromLanes(lanes),
    exitStatus === 2
      ? logErroredRenderPhase(completedRenderStartTime, completedRenderEndTime)
      : null !== recoverableErrors
        ? !supportsUserTiming ||
          completedRenderEndTime <= completedRenderStartTime ||
          console.timeStamp(
            "Recovered",
            completedRenderStartTime,
            completedRenderEndTime,
            currentTrack,
            "Scheduler \u269b",
            "error"
          )
        : !supportsUserTiming ||
          completedRenderEndTime <= completedRenderStartTime ||
          console.timeStamp(
            (lanes & 536870912) === lanes
              ? "Prepared"
              : (lanes & 201326741) === lanes
                ? "Hydrated"
                : "Render",
            completedRenderStartTime,
            completedRenderEndTime,
            currentTrack,
            "Scheduler \u269b",
            (lanes & 738197653) === lanes ? "tertiary-dark" : "primary-dark"
          ));
  enableSchedulingProfiler &&
    enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markCommitStarted === "function" &&
    injectedProfilingHooks.markCommitStarted(lanes);
  if (finishedWork === null) enableSchedulingProfiler && markCommitStopped();
  else {
    if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
    exitStatus = finishedWork.lanes | finishedWork.childLanes;
    exitStatus |= concurrentlyUpdatedLanes;
    markRootFinished(
      root,
      lanes,
      exitStatus,
      spawnedLane,
      updatedLanes,
      suspendedRetryLanes
    );
    didIncludeCommitPhaseUpdate = !1;
    root === workInProgressRoot &&
      ((workInProgress = workInProgressRoot = null),
      (workInProgressRootRenderLanes = 0));
    pendingFinishedWork = finishedWork;
    pendingEffectsRoot = root;
    pendingEffectsLanes = lanes;
    pendingEffectsRemainingLanes = exitStatus;
    pendingPassiveTransitions = transitions;
    pendingRecoverableErrors = recoverableErrors;
    pendingDidIncludeRenderPhaseUpdate = didIncludeRenderPhaseUpdate;
    pendingEffectsRenderEndTime = completedRenderEndTime;
    pendingSuspendedCommitReason = suspendedCommitReason;
    enableViewTransition
      ? ((pendingViewTransitionEvents = null),
      (lanes & 335544064) === lanes
        ? ((pendingTransitionTypes = claimQueuedTransitionTypes(root)),
        (recoverableErrors = 10262))
        : ((pendingTransitionTypes = null), (recoverableErrors = 10256)))
      : (recoverableErrors = 10256);
    (enableComponentPerformanceTrack && 0 !== finishedWork.actualDuration) ||
    0 !== (finishedWork.subtreeFlags & recoverableErrors) ||
    0 !== (finishedWork.flags & recoverableErrors)
      ? ((root.callbackNode = null),
      (root.callbackPriority = 0),
      scheduleCallback(NormalPriority$1, () => {
        enableComponentPerformanceTrack && (schedulerEvent = window.event);
        flushPassiveEffects(!0);
        return null;
      }))
      : ((root.callbackNode = null), (root.callbackPriority = 0));
    commitErrors = null;
    commitStartTime = now();
    enableComponentPerformanceTrack &&
      (suspendedCommitReason === 1
        ? !supportsUserTiming ||
          commitStartTime <= completedRenderEndTime ||
          console.timeStamp(
            "Suspended on CSS or Images",
            completedRenderEndTime,
            commitStartTime,
            currentTrack,
            "Scheduler \u269b",
            "secondary-light"
          )
        : suspendedCommitReason === 2 &&
          (!supportsUserTiming ||
            commitStartTime <= completedRenderEndTime ||
            console.timeStamp(
              "Throttled",
              completedRenderEndTime,
              commitStartTime,
              currentTrack,
              "Scheduler \u269b",
              "secondary-light"
            )));
    shouldStartViewTransition = !1;
    suspendedCommitReason = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || suspendedCommitReason) {
      suspendedCommitReason = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      completedRenderEndTime = Internals.p;
      Internals.p = 2;
      recoverableErrors = executionContext;
      executionContext |= 4;
      try {
        commitBeforeMutationEffects(root, finishedWork, lanes);
      } finally {
        (executionContext = recoverableErrors),
        (Internals.p = completedRenderEndTime),
        (ReactSharedInternals.T = suspendedCommitReason);
      }
    }
    finishedWork = shouldStartViewTransition;
    pendingEffectsStatus = 1;
    enableViewTransition && finishedWork
      ? (pendingViewTransition = startViewTransition(
        root.containerInfo,
        pendingTransitionTypes,
        flushMutationEffects,
        flushLayoutEffects,
        flushAfterMutationEffects,
        flushSpawnedWork,
        flushPassiveEffects,
        reportViewTransitionError
      ))
      : (flushMutationEffects(), flushLayoutEffects(), flushSpawnedWork());
  }
}
function reportViewTransitionError(error) {
  if (0 !== pendingEffectsStatus) {
    let onRecoverableError = pendingEffectsRoot.onRecoverableError;
    onRecoverableError(error, { componentStack: null });
  }
}
function flushAfterMutationEffects() {
  pendingEffectsStatus === 3 &&
    ((pendingEffectsStatus = 0),
    enableViewTransition &&
      commitAfterMutationEffectsOnFiber(
        pendingFinishedWork,
        pendingEffectsRoot
      ),
    (pendingEffectsStatus = 4));
}
function flushMutationEffects() {
  if (pendingEffectsStatus === 1) {
    pendingEffectsStatus = 0;
    let root = pendingEffectsRoot;
    let finishedWork = pendingFinishedWork;
    let lanes = pendingEffectsLanes;
    let rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
      rootMutationHasEffect = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      let previousPriority = Internals.p;
      Internals.p = 2;
      let prevExecutionContext = executionContext;
      executionContext |= 4;
      try {
        inProgressLanes = lanes;
        inProgressRoot = root;
        inUpdateViewTransition = rootViewTransitionAffected = !1;
        resetComponentEffectTimers();
        commitMutationEffectsOnFiber(finishedWork, root, lanes);
        inProgressRoot = inProgressLanes = null;
        if (shouldFireAfterActiveInstanceBlur) {
          _enabled = !0;
          let target = selectionInformation.focusedElem;
          let event = createEvent("afterblur", !1);
          event.relatedTarget = target;
          document.dispatchEvent(event);
          _enabled = !1;
        }
        lanes = selectionInformation;
        let curFocusedElem = getActiveElementDeep(root.containerInfo);
        let priorFocusedElem = lanes.focusedElem;
        let priorSelectionRange = lanes.selectionRange;
        if (
          curFocusedElem !== priorFocusedElem &&
          priorFocusedElem &&
          priorFocusedElem.ownerDocument &&
          containsNode(
            priorFocusedElem.ownerDocument.documentElement,
            priorFocusedElem
          )
        ) {
          if (
            null !== priorSelectionRange &&
            hasSelectionCapabilities(priorFocusedElem)
          ) {
            let start = priorSelectionRange.start;
            let end = priorSelectionRange.end;
            void 0 === end && (end = start);
            if ("selectionStart" in priorFocusedElem)
              (priorFocusedElem.selectionStart = start),
              (priorFocusedElem.selectionEnd = Math.min(
                end,
                priorFocusedElem.value.length
              ));
            else {
              var doc = priorFocusedElem.ownerDocument || document;
              let win = (doc && doc.defaultView) || window;
              if (win.getSelection) {
                var selection = win.getSelection();
                let length = priorFocusedElem.textContent.length;
                let start$jscomp$0 = Math.min(priorSelectionRange.start, length);
                let end$jscomp$0 =
                    void 0 === priorSelectionRange.end
                      ? start$jscomp$0
                      : Math.min(priorSelectionRange.end, length);
                !selection.extend &&
                  start$jscomp$0 > end$jscomp$0 &&
                  ((curFocusedElem = end$jscomp$0),
                  (end$jscomp$0 = start$jscomp$0),
                  (start$jscomp$0 = curFocusedElem));
                let startMarker = getNodeForCharacterOffset(
                  priorFocusedElem,
                  start$jscomp$0
                );
                let endMarker = getNodeForCharacterOffset(
                  priorFocusedElem,
                  end$jscomp$0
                );
                if (
                  startMarker &&
                  endMarker &&
                  (1 !== selection.rangeCount ||
                    selection.anchorNode !== startMarker.node ||
                    selection.anchorOffset !== startMarker.offset ||
                    selection.focusNode !== endMarker.node ||
                    selection.focusOffset !== endMarker.offset)
                ) {
                  let range = doc.createRange();
                  range.setStart(startMarker.node, startMarker.offset);
                  selection.removeAllRanges();
                  start$jscomp$0 > end$jscomp$0
                    ? (selection.addRange(range),
                    selection.extend(endMarker.node, endMarker.offset))
                    : (range.setEnd(endMarker.node, endMarker.offset),
                    selection.addRange(range));
                }
              }
            }
          }
          doc = [];
          for (
            selection = priorFocusedElem;
            (selection = selection.parentNode);

          )
            selection.nodeType === 1 &&
              doc.push({
                element: selection,
                left: selection.scrollLeft,
                top: selection.scrollTop
              });
          typeof priorFocusedElem.focus === "function" &&
            priorFocusedElem.focus();
          for (
            priorFocusedElem = 0;
            priorFocusedElem < doc.length;
            priorFocusedElem++
          ) {
            let info = doc[priorFocusedElem];
            info.element.scrollLeft = info.left;
            info.element.scrollTop = info.top;
          }
        }
        _enabled = !!eventsEnabled;
        selectionInformation = eventsEnabled = null;
      } finally {
        (executionContext = prevExecutionContext),
        (Internals.p = previousPriority),
        (ReactSharedInternals.T = rootMutationHasEffect);
      }
    }
    root.current = finishedWork;
    pendingEffectsStatus = 2;
  }
}
function flushLayoutEffects() {
  if (pendingEffectsStatus === 2) {
    pendingEffectsStatus = 0;
    let root = pendingEffectsRoot;
    let finishedWork = pendingFinishedWork;
    let lanes = pendingEffectsLanes;
    let cleanUpIndicator = root.pendingIndicator;
    if (null !== cleanUpIndicator && root.indicatorLanes === 0) {
      var prevTransition = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = Internals.p;
      Internals.p = 2;
      let prevExecutionContext = executionContext;
      executionContext |= 4;
      root.pendingIndicator = null;
      try {
        cleanUpIndicator();
      } catch (x) {
        reportGlobalError(x);
      } finally {
        (executionContext = prevExecutionContext),
        (Internals.p = previousPriority),
        (ReactSharedInternals.T = prevTransition);
      }
    }
    cleanUpIndicator = 0 !== (finishedWork.flags & 8772);
    if (0 !== (finishedWork.subtreeFlags & 8772) || cleanUpIndicator) {
      cleanUpIndicator = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      prevTransition = Internals.p;
      Internals.p = 2;
      previousPriority = executionContext;
      executionContext |= 4;
      try {
        enableSchedulingProfiler &&
          enableSchedulingProfiler &&
          null !== injectedProfilingHooks &&
          typeof injectedProfilingHooks.markLayoutEffectsStarted ===
            "function" &&
          injectedProfilingHooks.markLayoutEffectsStarted(lanes),
        (inProgressLanes = lanes),
        (inProgressRoot = root),
        resetComponentEffectTimers(),
        commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork),
        (inProgressRoot = inProgressLanes = null),
        enableSchedulingProfiler &&
            enableSchedulingProfiler &&
            null !== injectedProfilingHooks &&
            typeof injectedProfilingHooks.markLayoutEffectsStopped ===
              "function" &&
            injectedProfilingHooks.markLayoutEffectsStopped();
      } finally {
        (executionContext = previousPriority),
        (Internals.p = prevTransition),
        (ReactSharedInternals.T = cleanUpIndicator);
      }
    }
    pendingEffectsStatus = 3;
  }
}
function flushSpawnedWork() {
  if (pendingEffectsStatus === 4 || pendingEffectsStatus === 3) {
    pendingEffectsStatus = 0;
    pendingViewTransition = null;
    requestPaint();
    let root = pendingEffectsRoot;
    let finishedWork = pendingFinishedWork;
    let lanes = pendingEffectsLanes;
    let completedRenderEndTime = pendingEffectsRenderEndTime;
    let recoverableErrors = pendingRecoverableErrors;
    let didIncludeRenderPhaseUpdate = pendingDidIncludeRenderPhaseUpdate;
    let suspendedCommitReason = pendingSuspendedCommitReason;
    enableComponentPerformanceTrack &&
      ((commitEndTime = now()),
      logCommitPhase(
        suspendedCommitReason === 0 ? completedRenderEndTime : commitStartTime,
        commitEndTime,
        commitErrors
      ));
    completedRenderEndTime =
      enableViewTransition && (lanes & 335544064) === lanes ? 10262 : 10256;
    (completedRenderEndTime =
      (enableComponentPerformanceTrack && 0 !== finishedWork.actualDuration) ||
      0 !== (finishedWork.subtreeFlags & completedRenderEndTime) ||
      0 !== (finishedWork.flags & completedRenderEndTime))
      ? (pendingEffectsStatus = 5)
      : ((pendingEffectsStatus = 0),
      (pendingFinishedWork = pendingEffectsRoot = null),
      releaseRootPooledCache(root, root.pendingLanes));
    suspendedCommitReason = root.pendingLanes;
    suspendedCommitReason === 0 &&
      (legacyErrorBoundariesThatAlreadyFailed = null);
    suspendedCommitReason = lanesToEventPriority(lanes);
    onCommitRoot(finishedWork.stateNode, suspendedCommitReason);
    isDevToolsPresent && root.memoizedUpdaters.clear();
    if (null !== recoverableErrors) {
      finishedWork = ReactSharedInternals.T;
      suspendedCommitReason = Internals.p;
      Internals.p = 2;
      ReactSharedInternals.T = null;
      try {
        for (
          var onRecoverableError = root.onRecoverableError, i = 0;
          i < recoverableErrors.length;
          i++
        ) {
          var recoverableError = recoverableErrors[i];
          onRecoverableError(recoverableError.value, {
            componentStack: recoverableError.stack
          });
        }
      } finally {
        (ReactSharedInternals.T = finishedWork),
        (Internals.p = suspendedCommitReason);
      }
    }
    if (
      enableViewTransition &&
      ((recoverableErrors = pendingViewTransitionEvents),
      (onRecoverableError = pendingTransitionTypes),
      (pendingTransitionTypes = null),
      null !== recoverableErrors)
    )
      for (
        pendingViewTransitionEvents = null,
        onRecoverableError === null && (onRecoverableError = []),
        recoverableError = 0;
        recoverableError < recoverableErrors.length;
        recoverableError++
      )
        (0, recoverableErrors[recoverableError])(onRecoverableError);
    0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
    ensureRootIsScheduled(root);
    suspendedCommitReason = root.pendingLanes;
    (enableInfiniteRenderLoopDetection &&
      (didIncludeRenderPhaseUpdate || didIncludeCommitPhaseUpdate)) ||
    (0 !== (lanes & 261930) && 0 !== (suspendedCommitReason & 42))
      ? ((nestedUpdateScheduled = !0),
      root === rootWithNestedUpdates
        ? nestedUpdateCount++
        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root)))
      : (nestedUpdateCount = 0);
    enableComponentPerformanceTrack &&
      (completedRenderEndTime || finalizeRender(lanes, commitEndTime));
    flushSyncWorkAcrossRoots_impl(0, !1);
    enableSchedulingProfiler && markCommitStopped();
    if (enableTransitionTracing) {
      let prevRootTransitionCallbacks = root.transitionCallbacks;
      null !== prevRootTransitionCallbacks &&
        schedulePostPaintCallback((endTime) => {
          let prevPendingTransitionCallbacks =
            currentPendingTransitionCallbacks;
          null !== prevPendingTransitionCallbacks
            ? ((currentPendingTransitionCallbacks = null),
            scheduleCallback(IdlePriority, () => {
              processTransitionCallbacks(
                prevPendingTransitionCallbacks,
                endTime,
                prevRootTransitionCallbacks
              );
            }))
            : (currentEndTime = endTime);
        });
    }
  }
}
function releaseRootPooledCache(root, remainingLanes) {
  (root.pooledCacheLanes &= remainingLanes) === 0 &&
    ((remainingLanes = root.pooledCache),
    null != remainingLanes &&
      ((root.pooledCache = null), releaseCache(remainingLanes)));
}
function flushPendingEffects(wasDelayedCommit) {
  enableViewTransition &&
    null !== pendingViewTransition &&
    (pendingViewTransition.skipTransition(), (pendingViewTransition = null));
  flushMutationEffects();
  flushLayoutEffects();
  flushSpawnedWork();
  return flushPassiveEffects(wasDelayedCommit);
}
function flushPassiveEffects(wasDelayedCommit) {
  if (5 !== pendingEffectsStatus) return !1;
  let root = pendingEffectsRoot;
  let remainingLanes = pendingEffectsRemainingLanes;
  pendingEffectsRemainingLanes = 0;
  let renderPriority = lanesToEventPriority(pendingEffectsLanes);
  let prevTransition = ReactSharedInternals.T;
  let previousPriority = Internals.p;
  try {
    return (
      (Internals.p = 32 > renderPriority ? 32 : renderPriority),
      (ReactSharedInternals.T = null),
      flushPassiveEffectsImpl(wasDelayedCommit)
    );
  } finally {
    (Internals.p = previousPriority),
    (ReactSharedInternals.T = prevTransition),
    releaseRootPooledCache(root, remainingLanes);
  }
}
function flushPassiveEffectsImpl(wasDelayedCommit) {
  let transitions = pendingPassiveTransitions;
  pendingPassiveTransitions = null;
  let root = pendingEffectsRoot;
  let lanes = pendingEffectsLanes;
  pendingEffectsStatus = 0;
  pendingFinishedWork = pendingEffectsRoot = null;
  pendingEffectsLanes = 0;
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
  enableComponentPerformanceTrack && setCurrentTrackFromLanes(lanes);
  let passiveEffectStartTime = 0;
  enableComponentPerformanceTrack &&
    ((commitErrors = null),
    (passiveEffectStartTime = now$1()),
    !supportsUserTiming ||
      passiveEffectStartTime <= commitEndTime ||
      console.timeStamp(
        wasDelayedCommit ? "Waiting for Paint" : "",
        commitEndTime,
        passiveEffectStartTime,
        currentTrack,
        "Scheduler \u269b",
        "secondary-light"
      ));
  enableSchedulingProfiler &&
    enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markPassiveEffectsStarted === "function" &&
    injectedProfilingHooks.markPassiveEffectsStarted(lanes);
  wasDelayedCommit = executionContext;
  executionContext |= 4;
  commitPassiveUnmountEffects(root.current);
  commitPassiveMountEffects(
    root,
    root.current,
    lanes,
    transitions,
    pendingEffectsRenderEndTime
  );
  enableSchedulingProfiler &&
    enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markPassiveEffectsStopped === "function" &&
    injectedProfilingHooks.markPassiveEffectsStopped();
  executionContext = wasDelayedCommit;
  enableComponentPerformanceTrack &&
    ((transitions = now$1()),
    logPassiveCommitPhase(passiveEffectStartTime, transitions, commitErrors),
    finalizeRender(lanes, transitions));
  flushSyncWorkAcrossRoots_impl(0, !1);
  if (enableTransitionTracing) {
    let prevPendingTransitionCallbacks = currentPendingTransitionCallbacks;
    let prevRootTransitionCallbacks = root.transitionCallbacks;
    let prevEndTime = currentEndTime;
    null !== prevPendingTransitionCallbacks &&
      null !== prevRootTransitionCallbacks &&
      null !== prevEndTime &&
      ((currentEndTime = currentPendingTransitionCallbacks = null),
      scheduleCallback(IdlePriority, () => {
        processTransitionCallbacks(
          prevPendingTransitionCallbacks,
          prevEndTime,
          prevRootTransitionCallbacks
        );
      }));
  }
  if (injectedHook && typeof injectedHook.onPostCommitFiberRoot === "function")
    try {
      injectedHook.onPostCommitFiberRoot(rendererID, root);
    } catch (err) {}
  root = root.current.stateNode;
  root.effectDuration = 0;
  root.passiveEffectDuration = 0;
  return !0;
}
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
  enableComponentPerformanceTrack && recordEffectError(sourceFiber);
  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
  null !== rootFiber &&
    (markRootUpdated(rootFiber, 2), ensureRootIsScheduled(rootFiber));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (sourceFiber.tag === 3)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (; null !== nearestMountedAncestor; ) {
      if (nearestMountedAncestor.tag === 3) {
        captureCommitPhaseErrorOnRoot(
          nearestMountedAncestor,
          sourceFiber,
          error
        );
        break;
      } else if (nearestMountedAncestor.tag === 1) {
        let instance = nearestMountedAncestor.stateNode;
        if (
          typeof nearestMountedAncestor.type.getDerivedStateFromError ===
            "function" ||
          (typeof instance.componentDidCatch === "function" &&
            (legacyErrorBoundariesThatAlreadyFailed === null ||
              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
        ) {
          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
          enableComponentPerformanceTrack && recordEffectError(sourceFiber);
          error = createClassErrorUpdate(2);
          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
          null !== instance &&
            (initializeClassErrorUpdate(
              error,
              instance,
              nearestMountedAncestor,
              sourceFiber
            ),
            markRootUpdated(instance, 2),
            ensureRootIsScheduled(instance));
          break;
        }
      }
      nearestMountedAncestor = nearestMountedAncestor.return;
    }
}
function attachPingListener(root, wakeable, lanes) {
  let pingCache = root.pingCache;
  if (pingCache === null) {
    pingCache = root.pingCache = new PossiblyWeakMap();
    var threadIDs = new Set();
    pingCache.set(wakeable, threadIDs);
  } else
    (threadIDs = pingCache.get(wakeable)),
    void 0 === threadIDs &&
        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
  threadIDs.has(lanes) ||
    ((workInProgressRootDidAttachPingListener = !0),
    threadIDs.add(lanes),
    (pingCache = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
    isDevToolsPresent && restorePendingUpdaters(root, lanes),
    wakeable.then(pingCache, pingCache));
}
function pingSuspendedRoot(root, wakeable, pingedLanes) {
  let pingCache = root.pingCache;
  null !== pingCache && pingCache.delete(wakeable);
  root.pingedLanes |= root.suspendedLanes & pingedLanes;
  root.warmLanes &= ~pingedLanes;
  enableInfiniteRenderLoopDetection &&
    (executionContext & 2
      ? (workInProgressRootDidIncludeRecursiveRenderUpdate = !0)
      : executionContext & 4 && (didIncludeCommitPhaseUpdate = !0),
    throwIfInfiniteUpdateLoopDetected());
  enableComponentPerformanceTrack &&
    enableComponentPerformanceTrack &&
    (0 !== (pingedLanes & 3) || 0 !== (pingedLanes & 124)
      ? 0 > blockingUpdateTime &&
        ((blockingClampTime = blockingUpdateTime = now()),
        (blockingUpdateType = 2))
      : 0 !== (pingedLanes & 4194048) &&
        0 > transitionUpdateTime &&
        ((transitionClampTime = transitionUpdateTime = now()),
        (transitionUpdateType = 2)));
  workInProgressRoot === root &&
    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
    (workInProgressRootExitStatus === 4 ||
    (workInProgressRootExitStatus === 3 &&
      (workInProgressRootRenderLanes & 62914560) ===
        workInProgressRootRenderLanes &&
      300 > now$1() - globalMostRecentFallbackTime)
      ? (executionContext & 2) === 0 && prepareFreshStack(root, 0)
      : (workInProgressRootPingedLanes |= pingedLanes),
    workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes &&
      (workInProgressSuspendedRetryLanes = 0));
  ensureRootIsScheduled(root);
}
function retryTimedOutBoundary(boundaryFiber, retryLane) {
  retryLane === 0 && (retryLane = claimNextRetryLane());
  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
  null !== boundaryFiber &&
    (markRootUpdated(boundaryFiber, retryLane),
    ensureRootIsScheduled(boundaryFiber));
}
function retryDehydratedSuspenseBoundary(boundaryFiber) {
  let suspenseState = boundaryFiber.memoizedState;
  let retryLane = 0;
  null !== suspenseState && (retryLane = suspenseState.retryLane);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  let retryLane = 0;
  switch (boundaryFiber.tag) {
  case 31:
  case 13:
    var retryCache = boundaryFiber.stateNode;
    var suspenseState = boundaryFiber.memoizedState;
    null !== suspenseState && (retryLane = suspenseState.retryLane);
    break;
  case 19:
    retryCache = boundaryFiber.stateNode;
    break;
  case 22:
    retryCache = boundaryFiber.stateNode._retryCache;
    break;
  default:
    throw Error(formatProdErrorMessage(314));
  }
  null !== retryCache && retryCache.delete(wakeable);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function throwIfInfiniteUpdateLoopDetected() {
  if (50 < nestedUpdateCount)
    throw (
      ((nestedUpdateCount = 0),
      (rootWithNestedUpdates = null),
      enableInfiniteRenderLoopDetection &&
        executionContext & 2 &&
        null !== workInProgressRoot &&
        (workInProgressRoot.errorRecoveryDisabledLanes |=
          workInProgressRootRenderLanes),
      Error(formatProdErrorMessage(185)))
    );
}
function restorePendingUpdaters(root, lanes) {
  isDevToolsPresent &&
    root.memoizedUpdaters.forEach((schedulingFiber) => {
      addFiberToLanesMap(root, schedulingFiber, lanes);
    });
}
function scheduleCallback(priorityLevel, callback) {
  return scheduleCallback$3(priorityLevel, callback);
}
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.sibling =
    this.child =
    this.return =
    this.stateNode =
    this.type =
    this.elementType =
      null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = pendingProps;
  this.dependencies =
    this.memoizedState =
    this.updateQueue =
    this.memoizedProps =
      null;
  this.mode = mode;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
  this.actualDuration = -0;
  this.actualStartTime = -1.1;
  this.treeBaseDuration = this.selfBaseDuration = -0;
}
function createFiberImplClass(tag, pendingProps, key, mode) {
  return new FiberNode(tag, pendingProps, key, mode);
}
function createFiberImplObject(tag, pendingProps, key, mode) {
  return {
    elementType: null,
    type: null,
    stateNode: null,
    return: null,
    child: null,
    sibling: null,
    index: 0,
    ref: null,
    refCleanup: null,
    memoizedProps: null,
    updateQueue: null,
    memoizedState: null,
    dependencies: null,
    flags: 0,
    subtreeFlags: 0,
    deletions: null,
    lanes: 0,
    childLanes: 0,
    alternate: null,
    tag: tag,
    key: key,
    pendingProps: pendingProps,
    mode: mode,
    actualDuration: -0,
    actualStartTime: -1.1,
    selfBaseDuration: -0,
    treeBaseDuration: -0
  };
}
var createFiber = enableObjectFiber
  ? createFiberImplObject
  : createFiberImplClass;
function shouldConstruct(Component) {
  Component = Component.prototype;
  return !(!Component || !Component.isReactComponent);
}
function createWorkInProgress(current, pendingProps) {
  let workInProgress = current.alternate;
  workInProgress === null
    ? ((workInProgress = createFiber(
      current.tag,
      pendingProps,
      current.key,
      current.mode
    )),
    (workInProgress.elementType = current.elementType),
    (workInProgress.type = current.type),
    (workInProgress.stateNode = current.stateNode),
    (workInProgress.alternate = current),
    (current.alternate = workInProgress))
    : ((workInProgress.pendingProps = pendingProps),
    (workInProgress.type = current.type),
    (workInProgress.flags = 0),
    (workInProgress.subtreeFlags = 0),
    (workInProgress.deletions = null),
    (workInProgress.actualDuration = -0),
    (workInProgress.actualStartTime = -1.1));
  workInProgress.flags = current.flags & 65011712;
  workInProgress.childLanes = current.childLanes;
  workInProgress.lanes = current.lanes;
  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;
  pendingProps = current.dependencies;
  workInProgress.dependencies =
    pendingProps === null
      ? null
      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;
  workInProgress.refCleanup = current.refCleanup;
  workInProgress.selfBaseDuration = current.selfBaseDuration;
  workInProgress.treeBaseDuration = current.treeBaseDuration;
  return workInProgress;
}
function resetWorkInProgress(workInProgress, renderLanes) {
  workInProgress.flags &= 65011714;
  let current = workInProgress.alternate;
  current === null
    ? ((workInProgress.childLanes = 0),
    (workInProgress.lanes = renderLanes),
    (workInProgress.child = null),
    (workInProgress.subtreeFlags = 0),
    (workInProgress.memoizedProps = null),
    (workInProgress.memoizedState = null),
    (workInProgress.updateQueue = null),
    (workInProgress.dependencies = null),
    (workInProgress.stateNode = null),
    (workInProgress.selfBaseDuration = 0),
    (workInProgress.treeBaseDuration = 0))
    : ((workInProgress.childLanes = current.childLanes),
    (workInProgress.lanes = current.lanes),
    (workInProgress.child = current.child),
    (workInProgress.subtreeFlags = 0),
    (workInProgress.deletions = null),
    (workInProgress.memoizedProps = current.memoizedProps),
    (workInProgress.memoizedState = current.memoizedState),
    (workInProgress.updateQueue = current.updateQueue),
    (workInProgress.type = current.type),
    (renderLanes = current.dependencies),
    (workInProgress.dependencies =
        renderLanes === null
          ? null
          : {
            lanes: renderLanes.lanes,
            firstContext: renderLanes.firstContext
          }),
    (workInProgress.selfBaseDuration = current.selfBaseDuration),
    (workInProgress.treeBaseDuration = current.treeBaseDuration));
  return workInProgress;
}
function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes
) {
  let fiberTag = 0;
  owner = type;
  if (typeof type === "function") shouldConstruct(type) && (fiberTag = 1);
  else if (typeof type === "string")
    fiberTag = isHostHoistableType(
      type,
      pendingProps,
      contextStackCursor$1.current
    )
      ? 26
      : type === "html" || type === "head" || type === "body"
        ? 27
        : 5;
  else
    a: switch (type) {
    case REACT_ACTIVITY_TYPE:
      return (
        (type = createFiber(31, pendingProps, key, mode)),
        (type.elementType = REACT_ACTIVITY_TYPE),
        (type.lanes = lanes),
        type
      );
    case REACT_FRAGMENT_TYPE:
      return createFiberFromFragment(pendingProps.children, mode, lanes, key);
    case REACT_STRICT_MODE_TYPE:
      fiberTag = 8;
      mode |= 24;
      break;
    case REACT_PROFILER_TYPE:
      return (
        (type = createFiber(12, pendingProps, key, mode | 2)),
        (type.elementType = REACT_PROFILER_TYPE),
        (type.lanes = lanes),
        (type.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
        type
      );
    case REACT_SUSPENSE_TYPE:
      return (
        (type = createFiber(13, pendingProps, key, mode)),
        (type.elementType = REACT_SUSPENSE_TYPE),
        (type.lanes = lanes),
        type
      );
    case REACT_SUSPENSE_LIST_TYPE:
      return (
        (type = createFiber(19, pendingProps, key, mode)),
        (type.elementType = REACT_SUSPENSE_LIST_TYPE),
        (type.lanes = lanes),
        type
      );
    case REACT_LEGACY_HIDDEN_TYPE:
      return (
        (type = createFiber(23, pendingProps, key, mode)),
        (type.elementType = REACT_LEGACY_HIDDEN_TYPE),
        (type.lanes = lanes),
        type
      );
    case REACT_VIEW_TRANSITION_TYPE:
      if (enableViewTransition)
        return (
          (type = mode | 32),
          (type = createFiber(30, pendingProps, key, type)),
          (type.elementType = REACT_VIEW_TRANSITION_TYPE),
          (type.lanes = lanes),
          (type.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }),
          type
        );
    case REACT_SCOPE_TYPE:
      return (
        (key = createFiber(21, pendingProps, key, mode)),
        (key.type = type),
        (key.elementType = type),
        (key.lanes = lanes),
        key
      );
    case REACT_TRACING_MARKER_TYPE:
      if (enableTransitionTracing)
        return (
          (type = pendingProps),
          (key = createFiber(25, type, key, mode)),
          (key.elementType = REACT_TRACING_MARKER_TYPE),
          (key.lanes = lanes),
          (key.stateNode = {
            tag: 1,
            transitions: null,
            pendingBoundaries: null,
            aborts: null,
            name: type.name
          }),
          key
        );
    default:
      if (typeof type === "object" && null !== type)
        switch (type.$$typeof) {
        case REACT_CONTEXT_TYPE:
          fiberTag = 10;
          break a;
        case REACT_CONSUMER_TYPE:
          fiberTag = 9;
          break a;
        case REACT_FORWARD_REF_TYPE:
          fiberTag = 11;
          break a;
        case REACT_MEMO_TYPE:
          fiberTag = 14;
          break a;
        case REACT_LAZY_TYPE:
          fiberTag = 16;
          owner = null;
          break a;
        }
      fiberTag = 29;
      pendingProps = Error(
        formatProdErrorMessage(130, type === null ? "null" : typeof type, "")
      );
      owner = null;
    }
  key = createFiber(fiberTag, pendingProps, key, mode);
  key.elementType = type;
  key.type = owner;
  key.lanes = lanes;
  return key;
}
function createFiberFromFragment(elements, mode, lanes, key) {
  elements = createFiber(7, elements, key, mode);
  elements.lanes = lanes;
  return elements;
}
function createFiberFromText(content, mode, lanes) {
  content = createFiber(6, content, null, mode);
  content.lanes = lanes;
  return content;
}
function createFiberFromDehydratedFragment(dehydratedNode) {
  let fiber = createFiber(18, null, null, 0);
  fiber.stateNode = dehydratedNode;
  return fiber;
}
function createFiberFromPortal(portal, mode, lanes) {
  mode = createFiber(
    4,
    null !== portal.children ? portal.children : [],
    portal.key,
    mode
  );
  mode.lanes = lanes;
  mode.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null,
    implementation: portal.implementation
  };
  return mode;
}
function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  onDefaultTransitionIndicator,
  formState
) {
  this.tag = 1;
  this.containerInfo = containerInfo;
  this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode =
    this.next =
    this.pendingContext =
    this.context =
    this.cancelPendingCommit =
      null;
  this.callbackPriority = 0;
  this.expirationTimes = createLaneMap(-1);
  this.entangledLanes =
    this.shellSuspendCounter =
    this.errorRecoveryDisabledLanes =
    this.indicatorLanes =
    this.expiredLanes =
    this.warmLanes =
    this.pingedLanes =
    this.suspendedLanes =
    this.pendingLanes =
      0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onUncaughtError = onUncaughtError;
  this.onCaughtError = onCaughtError;
  this.onRecoverableError = onRecoverableError;
  this.onDefaultTransitionIndicator = onDefaultTransitionIndicator;
  this.pooledCache = this.pendingIndicator = null;
  this.pooledCacheLanes = 0;
  this.hydrationCallbacks = null;
  this.formState = formState;
  enableViewTransition && (this.transitionTypes = null);
  this.incompleteTransitions = new Map();
  enableTransitionTracing &&
    ((this.transitionCallbacks = null),
    (this.transitionLanes = createLaneMap(null)));
  this.passiveEffectDuration = this.effectDuration = -0;
  this.memoizedUpdaters = new Set();
  containerInfo = this.pendingUpdatersLaneMap = [];
  for (tag = 0; 31 > tag; tag++) containerInfo.push(new Set());
}
function createFiberRoot(
  containerInfo,
  tag,
  hydrate,
  initialChildren,
  hydrationCallbacks,
  isStrictMode,
  identifierPrefix,
  formState,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  onDefaultTransitionIndicator,
  transitionCallbacks
) {
  containerInfo = new FiberRootNode(
    containerInfo,
    tag,
    hydrate,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    onDefaultTransitionIndicator,
    formState
  );
  containerInfo.hydrationCallbacks = hydrationCallbacks;
  enableTransitionTracing &&
    (containerInfo.transitionCallbacks = transitionCallbacks);
  hydrationCallbacks = 1;
  !0 === isStrictMode && (hydrationCallbacks |= 24);
  isDevToolsPresent && (hydrationCallbacks |= 2);
  isStrictMode = createFiber(3, null, null, hydrationCallbacks);
  containerInfo.current = isStrictMode;
  isStrictMode.stateNode = containerInfo;
  hydrationCallbacks = createCache();
  hydrationCallbacks.refCount++;
  containerInfo.pooledCache = hydrationCallbacks;
  hydrationCallbacks.refCount++;
  isStrictMode.memoizedState = {
    element: initialChildren,
    isDehydrated: hydrate,
    cache: hydrationCallbacks
  };
  initializeUpdateQueue(isStrictMode);
  return containerInfo;
}
function createPortal$1(children, containerInfo, implementation) {
  let key =
    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : "" + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation
  };
}
function getContextForSubtree(parentComponent) {
  if (!parentComponent) return emptyContextObject;
  parentComponent = parentComponent._reactInternals;
  a: {
    var JSCompiler_inline_result = parentComponent;
    do {
      switch (JSCompiler_inline_result.tag) {
      case 3:
        JSCompiler_inline_result = JSCompiler_inline_result.stateNode.context;
        break a;
      case 1:
        if (isContextProvider(JSCompiler_inline_result.type)) {
          JSCompiler_inline_result =
              JSCompiler_inline_result.stateNode
                .__reactInternalMemoizedMergedChildContext;
          break a;
        }
      }
      JSCompiler_inline_result = JSCompiler_inline_result.return;
    } while (null !== JSCompiler_inline_result);
    throw Error(formatProdErrorMessage(171));
  }
  if (parentComponent.tag === 1) {
    let Component = parentComponent.type;
    if (isContextProvider(Component))
      return processChildContext(
        parentComponent,
        Component,
        JSCompiler_inline_result
      );
  }
  return JSCompiler_inline_result;
}
function findHostInstance(component) {
  let fiber = component._reactInternals;
  if (void 0 === fiber) {
    if (typeof component.render === "function")
      throw Error(formatProdErrorMessage(188));
    component = Object.keys(component).join(",");
    throw Error(formatProdErrorMessage(268, component));
  }
  component = findCurrentFiberUsingSlowPath(fiber);
  component = null !== component ? findCurrentHostFiberImpl(component) : null;
  return component === null ? null : component.stateNode;
}
function updateContainerImpl(
  rootFiber,
  lane,
  element,
  container,
  parentComponent,
  callback
) {
  enableSchedulingProfiler &&
    enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    typeof injectedProfilingHooks.markRenderScheduled === "function" &&
    injectedProfilingHooks.markRenderScheduled(lane);
  parentComponent = getContextForSubtree(parentComponent);
  container.context === null
    ? (container.context = parentComponent)
    : (container.pendingContext = parentComponent);
  container = createUpdate(lane);
  container.payload = { element: element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  element = enqueueUpdate(rootFiber, container, lane);
  null !== element &&
    (startUpdateTimerByLane(lane),
    scheduleUpdateOnFiber(element, rootFiber, lane),
    entangleTransitions(element, rootFiber, lane));
}
function markRetryLaneImpl(fiber, retryLane) {
  fiber = fiber.memoizedState;
  if (null !== fiber && null !== fiber.dehydrated) {
    let a = fiber.retryLane;
    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
  }
}
function markRetryLaneIfNotHydrated(fiber, retryLane) {
  markRetryLaneImpl(fiber, retryLane);
  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
}
function attemptContinuousHydration(fiber) {
  if (fiber.tag === 13 || fiber.tag === 31) {
    let root = enqueueConcurrentRenderForLane(fiber, 67108864);
    null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
    markRetryLaneIfNotHydrated(fiber, 67108864);
  }
}
function attemptHydrationAtCurrentPriority(fiber) {
  if (fiber.tag === 13 || fiber.tag === 31) {
    let lane = requestUpdateLane();
    lane = getBumpedLaneForHydrationByLane(lane);
    let root = enqueueConcurrentRenderForLane(fiber, lane);
    null !== root && scheduleUpdateOnFiber(root, fiber, lane);
    markRetryLaneIfNotHydrated(fiber, lane);
  }
}
function getLaneLabelMap() {
  if (enableSchedulingProfiler) {
    for (
      var map = new Map(), lane = 1, index$241 = 0;
      31 > index$241;
      index$241++
    ) {
      let label = getLabelForLane(lane);
      map.set(lane, label);
      lane *= 2;
    }
    return map;
  }
  return null;
}
let isInsideEventHandler = !1;
function batchedUpdates(fn, a, b) {
  if (isInsideEventHandler) return fn(a, b);
  isInsideEventHandler = !0;
  try {
    return fn(a);
  } finally {
    if (
      ((isInsideEventHandler = !1),
      null !== restoreTarget || null !== restoreQueue)
    )
      flushSyncWork$1(), restoreStateIfNeeded();
  }
}
function getListener(inst, registrationName) {
  let stateNode = inst.stateNode;
  if (stateNode === null) return null;
  let props = getFiberCurrentPropsFromNode(stateNode);
  if (props === null) return null;
  stateNode = props[registrationName];
  a: switch (registrationName) {
  case "onClick":
  case "onClickCapture":
  case "onDoubleClick":
  case "onDoubleClickCapture":
  case "onMouseDown":
  case "onMouseDownCapture":
  case "onMouseMove":
  case "onMouseMoveCapture":
  case "onMouseUp":
  case "onMouseUpCapture":
  case "onMouseEnter":
    (props = !props.disabled) ||
        ((inst = inst.type),
        (props = !(
          inst === "button" ||
          inst === "input" ||
          inst === "select" ||
          inst === "textarea"
        )));
    inst = !props;
    break a;
  default:
    inst = !1;
  }
  if (inst) return null;
  if (stateNode && "function" !== typeof stateNode)
    throw Error(
      formatProdErrorMessage(231, registrationName, typeof stateNode)
    );
  return stateNode;
}
let canUseDOM = !(
  typeof window === "undefined" ||
    typeof window.document === "undefined" ||
    typeof window.document.createElement === "undefined"
);
let passiveBrowserEventsSupported = !1;
if (canUseDOM)
  try {
    let options = {};
    Object.defineProperty(options, "passive", {
      get: function () {
        passiveBrowserEventsSupported = !0;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (e) {
    passiveBrowserEventsSupported = !1;
  }

let  root = null;
let startText = null;
let fallbackText = null;
function getData() {
  if (fallbackText) return fallbackText;
  let start;
  let startValue = startText;
  let startLength = startValue.length;
  let end;
  let endValue = "value" in root ? root.value : root.textContent;
  let endLength = endValue.length;
  for (
    start = 0;
    start < startLength && startValue[start] === endValue[start];
    start++
  );
  let minEnd = startLength - start;
  for (
    end = 1;
    end <= minEnd &&
    startValue[startLength - end] === endValue[endLength - end];
    end++
  );
  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
}
function getEventCharCode(nativeEvent) {
  let keyCode = nativeEvent.keyCode;
  "charCode" in nativeEvent
    ? ((nativeEvent = nativeEvent.charCode),
    nativeEvent === 0 && keyCode === 13 && (nativeEvent = 13))
    : (nativeEvent = keyCode);
  nativeEvent === 10 && (nativeEvent = 13);
  return 32 <= nativeEvent || nativeEvent === 13 ? nativeEvent : 0;
}
function functionThatReturnsTrue() {
  return !0;
}
function functionThatReturnsFalse() {
  return !1;
}
function createSyntheticEvent(Interface) {
  function SyntheticBaseEvent(
    reactName,
    reactEventType,
    targetInst,
    nativeEvent,
    nativeEventTarget
  ) {
    this._reactName = reactName;
    this._targetInst = targetInst;
    this.type = reactEventType;
    this.nativeEvent = nativeEvent;
    this.target = nativeEventTarget;
    this.currentTarget = null;
    for (let propName in Interface)
      Interface.hasOwnProperty(propName) &&
        ((reactName = Interface[propName]),
        (this[propName] = reactName
          ? reactName(nativeEvent)
          : nativeEvent[propName]));
    this.isDefaultPrevented = (
      null != nativeEvent.defaultPrevented
        ? nativeEvent.defaultPrevented
        : !1 === nativeEvent.returnValue
    )
      ? functionThatReturnsTrue
      : functionThatReturnsFalse;
    this.isPropagationStopped = functionThatReturnsFalse;
    return this;
  }
  assign(SyntheticBaseEvent.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      let event = this.nativeEvent;
      event &&
        (event.preventDefault
          ? event.preventDefault()
          : "unknown" !== typeof event.returnValue && (event.returnValue = !1),
        (this.isDefaultPrevented = functionThatReturnsTrue));
    },
    stopPropagation: function () {
      let event = this.nativeEvent;
      event &&
        (event.stopPropagation
          ? event.stopPropagation()
          : "unknown" !== typeof event.cancelBubble &&
            (event.cancelBubble = !0),
        (this.isPropagationStopped = functionThatReturnsTrue));
    },
    persist: function () {},
    isPersistent: functionThatReturnsTrue
  });
  return SyntheticBaseEvent;
}
let EventInterface = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
};
let SyntheticEvent = createSyntheticEvent(EventInterface);
let UIEventInterface = { ...EventInterface, view: 0, detail: 0};
let SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
let lastMovementX;
let lastMovementY;
let lastMouseEvent;
let MouseEventInterface = { ...UIEventInterface, screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: getEventModifierState,
  button: 0,
  buttons: 0,
  relatedTarget: function (event) {
    return void 0 === event.relatedTarget
      ? event.fromElement === event.srcElement
        ? event.toElement
        : event.fromElement
      : event.relatedTarget;
  },
  movementX: function (event) {
    if ("movementX" in event) return event.movementX;
    event !== lastMouseEvent &&
        (lastMouseEvent && event.type === "mousemove"
          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
          (lastMovementY = event.screenY - lastMouseEvent.screenY))
          : (lastMovementY = lastMovementX = 0),
        (lastMouseEvent = event));
    return lastMovementX;
  },
  movementY: function (event) {
    return "movementY" in event ? event.movementY : lastMovementY;
  }};
let SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
let DragEventInterface = { ...MouseEventInterface, dataTransfer: 0};
let SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
let FocusEventInterface = { ...UIEventInterface, relatedTarget: 0};
let SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
let AnimationEventInterface = { ...EventInterface, animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0};
let SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
let ClipboardEventInterface = { ...EventInterface, clipboardData: function (event) {
  return "clipboardData" in event
    ? event.clipboardData
    : window.clipboardData;
}};
let SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
let CompositionEventInterface = { ...EventInterface, data: 0};
let SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
let normalizeKey = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
let translateToKey = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
let modifierKeyToProp = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function modifierStateGetter(keyArg) {
  let nativeEvent = this.nativeEvent;
  return nativeEvent.getModifierState
    ? nativeEvent.getModifierState(keyArg)
    : (keyArg = modifierKeyToProp[keyArg])
      ? !!nativeEvent[keyArg]
      : !1;
}
function getEventModifierState() {
  return modifierStateGetter;
}
let KeyboardEventInterface = { ...UIEventInterface, key: function (nativeEvent) {
  if (nativeEvent.key) {
    let key = normalizeKey[nativeEvent.key] || nativeEvent.key;
    if ("Unidentified" !== key) return key;
  }
  return nativeEvent.type === "keypress"
    ? ((nativeEvent = getEventCharCode(nativeEvent)),
    nativeEvent === 13 ? "Enter" : String.fromCharCode(nativeEvent))
    : nativeEvent.type === "keydown" || nativeEvent.type === "keyup"
      ? translateToKey[nativeEvent.keyCode] || "Unidentified"
      : "";
},
code: 0,
location: 0,
ctrlKey: 0,
shiftKey: 0,
altKey: 0,
metaKey: 0,
repeat: 0,
locale: 0,
getModifierState: getEventModifierState,
charCode: function (event) {
  return event.type === "keypress" ? getEventCharCode(event) : 0;
},
keyCode: function (event) {
  return event.type === "keydown" || event.type === "keyup"
    ? event.keyCode
    : 0;
},
which: function (event) {
  return event.type === "keypress"
    ? getEventCharCode(event)
    : event.type === "keydown" || event.type === "keyup"
      ? event.keyCode
      : 0;
}};
let SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
let PointerEventInterface = { ...MouseEventInterface, pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0};
let SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
let TouchEventInterface = { ...UIEventInterface, touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: getEventModifierState};
let SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
let TransitionEventInterface = { ...EventInterface, propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0};
let SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
let WheelEventInterface = { ...MouseEventInterface, deltaX: function (event) {
  return "deltaX" in event
    ? event.deltaX
    : "wheelDeltaX" in event
      ? -event.wheelDeltaX
      : 0;
},
deltaY: function (event) {
  return "deltaY" in event
    ? event.deltaY
    : "wheelDeltaY" in event
      ? -event.wheelDeltaY
      : "wheelDelta" in event
        ? -event.wheelDelta
        : 0;
},
deltaZ: 0,
deltaMode: 0};
let SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);
let ToggleEventInterface = { ...EventInterface, newState: 0,
  oldState: 0};
let SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface);
let END_KEYCODES = [9, 13, 27, 32];
let canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
let documentMode = null;
canUseDOM &&
  "documentMode" in document &&
  (documentMode = document.documentMode);
let canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
let useFallbackCompositionData =
    canUseDOM &&
    (!canUseCompositionEvent ||
      (documentMode && 8 < documentMode && 11 >= documentMode));
let SPACEBAR_CHAR = String.fromCharCode(32);
let hasSpaceKeypress = !1;
function isFallbackCompositionEnd(domEventName, nativeEvent) {
  switch (domEventName) {
  case "keyup":
    return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
  case "keydown":
    return 229 !== nativeEvent.keyCode;
  case "keypress":
  case "mousedown":
  case "focusout":
    return !0;
  default:
    return !1;
  }
}
function getDataFromCustomEvent(nativeEvent) {
  nativeEvent = nativeEvent.detail;
  return typeof nativeEvent === "object" && "data" in nativeEvent
    ? nativeEvent.data
    : null;
}
let isComposing = !1;
function getNativeBeforeInputChars(domEventName, nativeEvent) {
  switch (domEventName) {
  case "compositionend":
    return getDataFromCustomEvent(nativeEvent);
  case "keypress":
    if (32 !== nativeEvent.which) return null;
    hasSpaceKeypress = !0;
    return SPACEBAR_CHAR;
  case "textInput":
    return (
      (domEventName = nativeEvent.data),
      domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
    );
  default:
    return null;
  }
}
function getFallbackBeforeInputChars(domEventName, nativeEvent) {
  if (isComposing)
    return domEventName === "compositionend" ||
      (!canUseCompositionEvent &&
        isFallbackCompositionEnd(domEventName, nativeEvent))
      ? ((domEventName = getData()),
      (fallbackText = startText = root = null),
      (isComposing = !1),
      domEventName)
      : null;
  switch (domEventName) {
  case "paste":
    return null;
  case "keypress":
    if (
      !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
        (nativeEvent.ctrlKey && nativeEvent.altKey)
    ) {
      if (nativeEvent.char && 1 < nativeEvent.char.length)
        return nativeEvent.char;
      if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
    }
    return null;
  case "compositionend":
    return useFallbackCompositionData && "ko" !== nativeEvent.locale
      ? null
      : nativeEvent.data;
  default:
    return null;
  }
}
let supportedInputTypes = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function isTextInputElement(elem) {
  let nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName === "input"
    ? !!supportedInputTypes[elem.type]
    : nodeName === "textarea"
      ? !0
      : !1;
}
function isEventSupported(eventNameSuffix) {
  if (!canUseDOM) return !1;
  eventNameSuffix = "on" + eventNameSuffix;
  let isSupported = eventNameSuffix in document;
  isSupported ||
    ((isSupported = document.createElement("div")),
    isSupported.setAttribute(eventNameSuffix, "return;"),
    (isSupported = typeof isSupported[eventNameSuffix] === "function"));
  return isSupported;
}
function createAndAccumulateChangeEvent(
  dispatchQueue,
  inst,
  nativeEvent,
  target
) {
  enqueueStateRestore(target);
  inst = accumulateTwoPhaseListeners(inst, "onChange");
  0 < inst.length &&
    ((nativeEvent = new SyntheticEvent(
      "onChange",
      "change",
      null,
      nativeEvent,
      target
    )),
    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
}
let activeElement$1 = null;
let activeElementInst$1 = null;
function runEventInBatch$1(dispatchQueue) {
  processDispatchQueue(dispatchQueue, 0);
}
function getInstIfValueChanged(targetInst) {
  let targetNode = getNodeFromInstance(targetInst);
  if (updateValueIfChanged(targetNode)) return targetInst;
}
function getTargetInstForChangeEvent(domEventName, targetInst) {
  if (domEventName === "change") return targetInst;
}
let isInputEventSupported = !1;
canUseDOM &&
  (isInputEventSupported =
    isEventSupported("input") &&
    (!document.documentMode || 9 < document.documentMode));
function stopWatchingForValueChange() {
  activeElement$1 &&
    (activeElement$1.detachEvent("onpropertychange", handlePropertyChange),
    (activeElementInst$1 = activeElement$1 = null));
}
function handlePropertyChange(nativeEvent) {
  if (
    nativeEvent.propertyName === "value" &&
    getInstIfValueChanged(activeElementInst$1)
  ) {
    let dispatchQueue = [];
    createAndAccumulateChangeEvent(
      dispatchQueue,
      activeElementInst$1,
      nativeEvent,
      getEventTarget(nativeEvent)
    );
    batchedUpdates(runEventInBatch$1, dispatchQueue);
  }
}
function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
  domEventName === "focusin"
    ? (stopWatchingForValueChange(),
    (activeElement$1 = target),
    (activeElementInst$1 = targetInst),
    activeElement$1.attachEvent("onpropertychange", handlePropertyChange))
    : domEventName === "focusout" && stopWatchingForValueChange();
}
function getTargetInstForInputEventPolyfill(domEventName) {
  if (
    domEventName === "selectionchange" ||
    domEventName === "keyup" ||
    domEventName === "keydown"
  )
    return getInstIfValueChanged(activeElementInst$1);
}
function getTargetInstForClickEvent(domEventName, targetInst) {
  if (domEventName === "click") return getInstIfValueChanged(targetInst);
}
function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
  if (domEventName === "input" || domEventName === "change")
    return getInstIfValueChanged(targetInst);
}
function getLeafNode(node) {
  for (; node && node.firstChild; ) node = node.firstChild;
  return node;
}
function getNodeForCharacterOffset(root, offset) {
  let node = getLeafNode(root);
  root = 0;
  for (var nodeEnd; node; ) {
    if (node.nodeType === 3) {
      nodeEnd = root + node.textContent.length;
      if (root <= offset && nodeEnd >= offset)
        return { node: node, offset: offset - root };
      root = nodeEnd;
    }
    a: {
      for (; node; ) {
        if (node.nextSibling) {
          node = node.nextSibling;
          break a;
        }
        node = node.parentNode;
      }
      node = void 0;
    }
    node = getLeafNode(node);
  }
}
function containsNode(outerNode, innerNode) {
  return outerNode && innerNode
    ? outerNode === innerNode
      ? !0
      : outerNode && outerNode.nodeType === 3
        ? !1
        : innerNode && innerNode.nodeType === 3
          ? containsNode(outerNode, innerNode.parentNode)
          : "contains" in outerNode
            ? outerNode.contains(innerNode)
            : outerNode.compareDocumentPosition
              ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
              : !1
    : !1;
}
function getActiveElementDeep(containerInfo) {
  containerInfo =
    null != containerInfo &&
    null != containerInfo.ownerDocument &&
    null != containerInfo.ownerDocument.defaultView
      ? containerInfo.ownerDocument.defaultView
      : window;
  for (
    var element = getActiveElement(containerInfo.document);
    element instanceof containerInfo.HTMLIFrameElement;

  ) {
    try {
      var JSCompiler_inline_result =
        typeof element.contentWindow.location.href === "string";
    } catch (err) {
      JSCompiler_inline_result = !1;
    }
    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
    else break;
    element = getActiveElement(containerInfo.document);
  }
  return element;
}
function hasSelectionCapabilities(elem) {
  let nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return (
    nodeName &&
    ((nodeName === "input" &&
      (elem.type === "text" ||
        elem.type === "search" ||
        elem.type === "tel" ||
        elem.type === "url" ||
        elem.type === "password")) ||
      nodeName === "textarea" ||
      elem.contentEditable === "true")
  );
}
let skipSelectionChangeEvent =
    canUseDOM && "documentMode" in document && 11 >= document.documentMode;
let activeElement = null;
let activeElementInst = null;
let lastSelection = null;
let mouseDown = !1;
function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
  let doc =
    nativeEventTarget.window === nativeEventTarget
      ? nativeEventTarget.document
      : nativeEventTarget.nodeType === 9
        ? nativeEventTarget
        : nativeEventTarget.ownerDocument;
  mouseDown ||
    activeElement == null ||
    activeElement !== getActiveElement(doc) ||
    ((doc = activeElement),
    "selectionStart" in doc && hasSelectionCapabilities(doc)
      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
      : ((doc = (
        (doc.ownerDocument && doc.ownerDocument.defaultView) ||
          window
      ).getSelection()),
      (doc = {
        anchorNode: doc.anchorNode,
        anchorOffset: doc.anchorOffset,
        focusNode: doc.focusNode,
        focusOffset: doc.focusOffset
      })),
    (lastSelection && shallowEqual(lastSelection, doc)) ||
      ((lastSelection = doc),
      (doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect")),
      0 < doc.length &&
        ((nativeEvent = new SyntheticEvent(
          "onSelect",
          "select",
          null,
          nativeEvent,
          nativeEventTarget
        )),
        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
        (nativeEvent.target = activeElement))));
}
function makePrefixMap(styleProp, eventName) {
  let prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit" + styleProp] = "webkit" + eventName;
  prefixes["Moz" + styleProp] = "moz" + eventName;
  return prefixes;
}
let vendorPrefixes = {
  animationend: makePrefixMap("Animation", "AnimationEnd"),
  animationiteration: makePrefixMap("Animation", "AnimationIteration"),
  animationstart: makePrefixMap("Animation", "AnimationStart"),
  transitionrun: makePrefixMap("Transition", "TransitionRun"),
  transitionstart: makePrefixMap("Transition", "TransitionStart"),
  transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
  transitionend: makePrefixMap("Transition", "TransitionEnd")
};
let prefixedEventNames = {};
let style = {};
canUseDOM &&
  ((style = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vendorPrefixes.animationend.animation,
    delete vendorPrefixes.animationiteration.animation,
    delete vendorPrefixes.animationstart.animation),
  "TransitionEvent" in window ||
    delete vendorPrefixes.transitionend.transition);
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
  if (!vendorPrefixes[eventName]) return eventName;
  let prefixMap = vendorPrefixes[eventName];
  let styleProp;
  for (styleProp in prefixMap)
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
  return eventName;
}
let ANIMATION_END = getVendorPrefixedEventName("animationend");
let ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration");
let ANIMATION_START = getVendorPrefixedEventName("animationstart");
let TRANSITION_RUN = getVendorPrefixedEventName("transitionrun");
let TRANSITION_START = getVendorPrefixedEventName("transitionstart");
let TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel");
let TRANSITION_END = getVendorPrefixedEventName("transitionend");
let topLevelEventsToReactNames = new Map();
let simpleEventPluginEvents =
    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
enableScrollEndPolyfill || simpleEventPluginEvents.push("scrollEnd");
topLevelEventsToReactNames.set("beforeblur", null);
topLevelEventsToReactNames.set("afterblur", null);
function registerSimpleEvent(domEventName, reactName) {
  topLevelEventsToReactNames.set(domEventName, reactName);
  registerTwoPhaseEvent(reactName, [domEventName]);
}
function coerceFormActionProp(actionProp) {
  return actionProp == null ||
    typeof actionProp === "symbol" ||
    typeof actionProp === "boolean"
    ? null
    : typeof actionProp === "function"
      ? actionProp
      : sanitizeURL(
        enableTrustedTypesIntegration ? actionProp : "" + actionProp
      );
}
function createFormDataWithSubmitter(form, submitter) {
  let temp = submitter.ownerDocument.createElement("input");
  temp.name = submitter.name;
  temp.value = submitter.value;
  form.id && temp.setAttribute("form", form.id);
  submitter.parentNode.insertBefore(temp, submitter);
  form = new FormData(form);
  temp.parentNode.removeChild(temp);
  return form;
}
function extractEvents$2(
  dispatchQueue,
  domEventName,
  maybeTargetInst,
  nativeEvent,
  nativeEventTarget
) {
  if (
    domEventName === "submit" &&
    maybeTargetInst &&
    maybeTargetInst.stateNode === nativeEventTarget
  ) {
    let action = coerceFormActionProp(
      getFiberCurrentPropsFromNode(nativeEventTarget).action
    );
    let submitter = nativeEvent.submitter;
    submitter &&
      ((domEventName = (domEventName = getFiberCurrentPropsFromNode(submitter))
        ? coerceFormActionProp(domEventName.formAction)
        : submitter.getAttribute("formAction")),
      null !== domEventName && ((action = domEventName), (submitter = null)));
    let event = new SyntheticEvent(
      "action",
      "action",
      null,
      nativeEvent,
      nativeEventTarget
    );
    dispatchQueue.push({
      event: event,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (nativeEvent.defaultPrevented) {
              if (0 !== currentEventTransitionLane) {
                var formData = submitter
                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
                  : new FormData(nativeEventTarget);
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: !0,
                    data: formData,
                    method: nativeEventTarget.method,
                    action: action
                  },
                  null,
                  formData
                );
              }
            } else
              typeof action === "function" &&
                (event.preventDefault(),
                (formData = submitter
                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
                  : new FormData(nativeEventTarget)),
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: !0,
                    data: formData,
                    method: nativeEventTarget.method,
                    action: action
                  },
                  action,
                  formData
                ));
          },
          currentTarget: nativeEventTarget
        }
      ]
    });
  }
}
let isScrollEndEventSupported =
    enableScrollEndPolyfill && canUseDOM && isEventSupported("scrollend");
let isTouchStarted = !1;
let isMouseDown = !1;
function runEventInBatch(dispatchQueue) {
  processDispatchQueue(dispatchQueue, 0);
}
function fireScrollEnd(targetInst, nativeEvent, nativeEventTarget) {
  nativeEventTarget[internalScrollTimer] = void 0;
  if (isMouseDown || isTouchStarted)
    debounceScrollEnd(targetInst, nativeEvent, nativeEventTarget);
  else {
    let dispatchQueue = [];
    targetInst = accumulateTwoPhaseListeners(targetInst, "onScrollEnd");
    0 < targetInst.length &&
      ((nativeEvent = new SyntheticUIEvent(
        "onScrollEnd",
        "scrollend",
        null,
        nativeEvent,
        nativeEventTarget
      )),
      dispatchQueue.push({ event: nativeEvent, listeners: targetInst }));
    batchedUpdates(runEventInBatch, dispatchQueue);
  }
}
function debounceScrollEnd(targetInst, nativeEvent, nativeEventTarget) {
  let existingTimer = nativeEventTarget[internalScrollTimer];
  null != existingTimer && clearTimeout(existingTimer);
  null !== targetInst &&
    ((targetInst = setTimeout(
      fireScrollEnd.bind(null, targetInst, nativeEvent, nativeEventTarget),
      200
    )),
    (nativeEventTarget[internalScrollTimer] = targetInst));
}
for (
  let i$jscomp$inline_2081 = 0;
  i$jscomp$inline_2081 < simpleEventPluginEvents.length;
  i$jscomp$inline_2081++
) {
  let eventName$jscomp$inline_2082 =
      simpleEventPluginEvents[i$jscomp$inline_2081];
  let domEventName$jscomp$inline_2083 =
      eventName$jscomp$inline_2082.toLowerCase();
  let capitalizedEvent$jscomp$inline_2084 =
      eventName$jscomp$inline_2082[0].toUpperCase() +
      eventName$jscomp$inline_2082.slice(1);
  registerSimpleEvent(
    domEventName$jscomp$inline_2083,
    "on" + capitalizedEvent$jscomp$inline_2084
  );
}
registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
registerSimpleEvent(ANIMATION_START, "onAnimationStart");
registerSimpleEvent("dblclick", "onDoubleClick");
registerSimpleEvent("focusin", "onFocus");
registerSimpleEvent("focusout", "onBlur");
registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
registerSimpleEvent(TRANSITION_START, "onTransitionStart");
registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
registerTwoPhaseEvent(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
registerTwoPhaseEvent(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
registerTwoPhaseEvent("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]);
registerTwoPhaseEvent(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
enableScrollEndPolyfill &&
  registerTwoPhaseEvent(
    "onScrollEnd",
    "scroll scrollend touchstart touchcancel touchend mousedown mouseup".split(
      " "
    )
  );
var mediaEventTypes =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    );
let nonDelegatedEvents = new Set(
  "beforetoggle cancel close invalid load scroll scrollend toggle"
    .split(" ")
    .concat(mediaEventTypes)
);
function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  eventSystemFlags = 0 !== (eventSystemFlags & 4);
  for (let i = 0; i < dispatchQueue.length; i++) {
    let _dispatchQueue$i = dispatchQueue[i];
    let event = _dispatchQueue$i.event;
    _dispatchQueue$i = _dispatchQueue$i.listeners;
    a: {
      let previousInstance = void 0;
      if (eventSystemFlags)
        for (
          var i$jscomp$0 = _dispatchQueue$i.length - 1;
          0 <= i$jscomp$0;
          i$jscomp$0--
        ) {
          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
          var instance = _dispatchListeners$i.instance;
          var currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
      else
        for (
          i$jscomp$0 = 0;
          i$jscomp$0 < _dispatchQueue$i.length;
          i$jscomp$0++
        ) {
          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
          instance = _dispatchListeners$i.instance;
          currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
    }
  }
}
function listenToNonDelegatedEvent(domEventName, targetElement) {
  let listenerSet = getEventListenerSet(targetElement);
  let listenerSetKey = domEventName + "__bubble";
  listenerSet.has(listenerSetKey) ||
    (addTrappedEventListener(targetElement, domEventName, 2, !1),
    listenerSet.add(listenerSetKey));
}
function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
  let eventSystemFlags = 0;
  isCapturePhaseListener && (eventSystemFlags |= 4);
  addTrappedEventListener(
    target,
    domEventName,
    eventSystemFlags,
    isCapturePhaseListener
  );
}
let listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
function listenToAllSupportedEvents(rootContainerElement) {
  if (!rootContainerElement[listeningMarker]) {
    rootContainerElement[listeningMarker] = !0;
    allNativeEvents.forEach((domEventName) => {
      "selectionchange" !== domEventName &&
        (nonDelegatedEvents.has(domEventName) ||
          listenToNativeEvent(domEventName, !1, rootContainerElement),
        listenToNativeEvent(domEventName, !0, rootContainerElement));
    });
    let ownerDocument =
      rootContainerElement.nodeType === 9
        ? rootContainerElement
        : rootContainerElement.ownerDocument;
    ownerDocument === null ||
      ownerDocument[listeningMarker] ||
      ((ownerDocument[listeningMarker] = !0),
      listenToNativeEvent("selectionchange", !1, ownerDocument));
  }
}
function addTrappedEventListener(
  targetContainer,
  domEventName,
  eventSystemFlags,
  isCapturePhaseListener,
  isDeferredListenerForLegacyFBSupport
) {
  eventSystemFlags = createEventListenerWrapperWithPriority(
    targetContainer,
    domEventName,
    eventSystemFlags
  );
  let isPassiveListener = void 0;
  !passiveBrowserEventsSupported ||
    ("touchstart" !== domEventName &&
      "touchmove" !== domEventName &&
      "wheel" !== domEventName) ||
    (isPassiveListener = !0);
  targetContainer = isDeferredListenerForLegacyFBSupport
    ? targetContainer.ownerDocument
    : targetContainer;
  if (isDeferredListenerForLegacyFBSupport) {
    let originalListener = eventSystemFlags;
    eventSystemFlags = function () {
      unsubscribeListener.remove();
      for (
        var _len = arguments.length, p = Array(_len), _key = 0;
        _key < _len;
        _key++
      )
        p[_key] = arguments[_key];
      return originalListener.apply(this, p);
    };
  }
  var unsubscribeListener = isCapturePhaseListener
    ? void 0 !== isPassiveListener
      ? EventListenerWWW.captureWithPassiveFlag(
        targetContainer,
        domEventName,
        eventSystemFlags,
        isPassiveListener
      )
      : EventListenerWWW.capture(
        targetContainer,
        domEventName,
        eventSystemFlags
      )
    : void 0 !== isPassiveListener
      ? EventListenerWWW.bubbleWithPassiveFlag(
        targetContainer,
        domEventName,
        eventSystemFlags,
        isPassiveListener
      )
      : EventListenerWWW.listen(
        targetContainer,
        domEventName,
        eventSystemFlags
      );
}
function dispatchEventForPluginEventSystem(
  domEventName,
  eventSystemFlags,
  nativeEvent,
  targetInst$jscomp$0,
  targetContainer
) {
  let ancestorInst = targetInst$jscomp$0;
  if ((eventSystemFlags & 1) === 0 && (eventSystemFlags & 2) === 0) {
    if (
      domEventName === "click" &&
      (eventSystemFlags & 20) === 0 &&
      nativeEvent !== currentReplayingEvent
    ) {
      addTrappedEventListener(targetContainer, domEventName, 16, !1, !0);
      return;
    }
    if (null !== targetInst$jscomp$0)
      a: for (;;) {
        if (targetInst$jscomp$0 === null) return;
        let nodeTag = targetInst$jscomp$0.tag;
        if (nodeTag === 3 || nodeTag === 4) {
          let container = targetInst$jscomp$0.stateNode.containerInfo;
          if (
            container === targetContainer ||
            (container.nodeType === 8 &&
              container.parentNode === targetContainer)
          )
            break;
          if (nodeTag === 4)
            for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
              var grandTag = nodeTag.tag;
              if (grandTag === 3 || grandTag === 4)
                if (
                  ((grandTag = nodeTag.stateNode.containerInfo),
                  grandTag === targetContainer ||
                    (grandTag.nodeType === 8 &&
                      grandTag.parentNode === targetContainer))
                )
                  return;
              nodeTag = nodeTag.return;
            }
          for (; null !== container; ) {
            nodeTag = getClosestInstanceFromNode(container);
            if (nodeTag === null) return;
            grandTag = nodeTag.tag;
            if (
              grandTag === 5 ||
              grandTag === 6 ||
              grandTag === 26 ||
              grandTag === 27
            ) {
              targetInst$jscomp$0 = ancestorInst = nodeTag;
              continue a;
            }
            container = container.parentNode;
          }
        }
        targetInst$jscomp$0 = targetInst$jscomp$0.return;
      }
  }
  batchedUpdates(() => {
    let targetInst = ancestorInst;
    let nativeEventTarget = getEventTarget(nativeEvent);
    let dispatchQueue = [];
    a: {
      var reactName = topLevelEventsToReactNames.get(domEventName);
      if (void 0 !== reactName) {
        var SyntheticEventCtor = SyntheticEvent;
        var reactEventType = domEventName;
        switch (domEventName) {
        case "keypress":
          if (getEventCharCode(nativeEvent) === 0) break a;
        case "keydown":
        case "keyup":
          SyntheticEventCtor = SyntheticKeyboardEvent;
          break;
        case "focusin":
          reactEventType = "focus";
          SyntheticEventCtor = SyntheticFocusEvent;
          break;
        case "focusout":
          reactEventType = "blur";
          SyntheticEventCtor = SyntheticFocusEvent;
          break;
        case "beforeblur":
        case "afterblur":
          SyntheticEventCtor = SyntheticFocusEvent;
          break;
        case "click":
          if (nativeEvent.button === 2) break a;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          SyntheticEventCtor = SyntheticMouseEvent;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          SyntheticEventCtor = SyntheticDragEvent;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          SyntheticEventCtor = SyntheticTouchEvent;
          break;
        case ANIMATION_END:
        case ANIMATION_ITERATION:
        case ANIMATION_START:
          SyntheticEventCtor = SyntheticAnimationEvent;
          break;
        case TRANSITION_END:
          SyntheticEventCtor = SyntheticTransitionEvent;
          break;
        case "scroll":
        case "scrollend":
          SyntheticEventCtor = SyntheticUIEvent;
          break;
        case "wheel":
          SyntheticEventCtor = SyntheticWheelEvent;
          break;
        case "copy":
        case "cut":
        case "paste":
          SyntheticEventCtor = SyntheticClipboardEvent;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          SyntheticEventCtor = SyntheticPointerEvent;
          break;
        case "toggle":
        case "beforetoggle":
          SyntheticEventCtor = SyntheticToggleEvent;
        }
        var inCapturePhase = 0 !== (eventSystemFlags & 4);
        eventSystemFlags & 1
          ? ((inCapturePhase = accumulateEventHandleNonManagedNodeListeners(
            reactEventType,
            targetContainer,
            inCapturePhase
          )),
          0 < inCapturePhase.length &&
              ((reactName = new SyntheticEventCtor(
                reactName,
                reactEventType,
                null,
                nativeEvent,
                nativeEventTarget
              )),
              dispatchQueue.push({
                event: reactName,
                listeners: inCapturePhase
              })))
          : ((inCapturePhase = accumulateSinglePhaseListeners(
            targetInst,
            reactName,
            nativeEvent.type,
            inCapturePhase,
            !inCapturePhase &&
                (domEventName === "scroll" || domEventName === "scrollend"),
            nativeEvent
          )),
          0 < inCapturePhase.length &&
              ((reactName = new SyntheticEventCtor(
                reactName,
                reactEventType,
                null,
                nativeEvent,
                nativeEventTarget
              )),
              dispatchQueue.push({
                event: reactName,
                listeners: inCapturePhase
              })));
      }
    }
    if ((eventSystemFlags & 7) === 0) {
      a: {
        SyntheticEventCtor =
          domEventName === "mouseover" || domEventName === "pointerover";
        reactName =
          domEventName === "mouseout" || domEventName === "pointerout";
        if (
          SyntheticEventCtor &&
          nativeEvent !== currentReplayingEvent &&
          (reactEventType =
            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
          (getClosestInstanceFromNode(reactEventType) ||
            reactEventType[internalContainerInstanceKey])
        )
          break a;
        if (reactName || SyntheticEventCtor) {
          reactEventType =
            nativeEventTarget.window === nativeEventTarget
              ? nativeEventTarget
              : (SyntheticEventCtor = nativeEventTarget.ownerDocument)
                ? SyntheticEventCtor.defaultView ||
                  SyntheticEventCtor.parentWindow
                : window;
          if (reactName) {
            if (
              ((SyntheticEventCtor =
                nativeEvent.relatedTarget || nativeEvent.toElement),
              (reactName = targetInst),
              (SyntheticEventCtor = SyntheticEventCtor
                ? getClosestInstanceFromNode(SyntheticEventCtor)
                : null),
              null !== SyntheticEventCtor)
            ) {
              inCapturePhase = getNearestMountedFiber(SyntheticEventCtor);
              var tag = SyntheticEventCtor.tag;
              if (
                SyntheticEventCtor !== inCapturePhase ||
                (5 !== tag && 27 !== tag && 6 !== tag)
              )
                SyntheticEventCtor = null;
            }
          } else (reactName = null), (SyntheticEventCtor = targetInst);
          if (reactName !== SyntheticEventCtor) {
            tag = SyntheticMouseEvent;
            let leaveEventType = "onMouseLeave";
            let enterEventType = "onMouseEnter";
            let eventTypePrefix = "mouse";
            if (domEventName === "pointerout" || domEventName === "pointerover")
              (tag = SyntheticPointerEvent),
              (leaveEventType = "onPointerLeave"),
              (enterEventType = "onPointerEnter"),
              (eventTypePrefix = "pointer");
            inCapturePhase =
              reactName == null
                ? reactEventType
                : getNodeFromInstance(reactName);
            let toNode =
              SyntheticEventCtor == null
                ? reactEventType
                : getNodeFromInstance(SyntheticEventCtor);
            reactEventType = new tag(
              leaveEventType,
              eventTypePrefix + "leave",
              reactName,
              nativeEvent,
              nativeEventTarget
            );
            reactEventType.target = inCapturePhase;
            reactEventType.relatedTarget = toNode;
            leaveEventType = null;
            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
              ((tag = new tag(
                enterEventType,
                eventTypePrefix + "enter",
                SyntheticEventCtor,
                nativeEvent,
                nativeEventTarget
              )),
              (tag.target = toNode),
              (tag.relatedTarget = inCapturePhase),
              (leaveEventType = tag));
            inCapturePhase = leaveEventType;
            tag =
              reactName && SyntheticEventCtor
                ? getLowestCommonAncestor(
                  reactName,
                  SyntheticEventCtor,
                  getParent
                )
                : null;
            null !== reactName &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                reactEventType,
                reactName,
                tag,
                !1
              );
            null !== SyntheticEventCtor &&
              null !== inCapturePhase &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                inCapturePhase,
                SyntheticEventCtor,
                tag,
                !0
              );
          }
        }
      }
      a: {
        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
        SyntheticEventCtor =
          reactName.nodeName && reactName.nodeName.toLowerCase();
        if (
          SyntheticEventCtor === "select" ||
          (SyntheticEventCtor === "input" && reactName.type === "file")
        )
          var getTargetInstFunc = getTargetInstForChangeEvent;
        else if (isTextInputElement(reactName))
          if (isInputEventSupported)
            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
          else {
            getTargetInstFunc = getTargetInstForInputEventPolyfill;
            var handleEventFunc = handleEventsForInputEventPolyfill;
          }
        else
          (SyntheticEventCtor = reactName.nodeName),
          !SyntheticEventCtor ||
            "input" !== SyntheticEventCtor.toLowerCase() ||
            ("checkbox" !== reactName.type && "radio" !== reactName.type)
            ? targetInst &&
                isCustomElement(targetInst.elementType) &&
                (getTargetInstFunc = getTargetInstForChangeEvent)
            : (getTargetInstFunc = getTargetInstForClickEvent);
        if (
          getTargetInstFunc &&
          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
        ) {
          createAndAccumulateChangeEvent(
            dispatchQueue,
            getTargetInstFunc,
            nativeEvent,
            nativeEventTarget
          );
          break a;
        }
        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
        domEventName === "focusout" &&
          targetInst &&
          reactName.type === "number" &&
          null != targetInst.memoizedProps.value &&
          setDefaultValue(reactName, "number", reactName.value);
      }
      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
      switch (domEventName) {
      case "focusin":
        if (
          isTextInputElement(handleEventFunc) ||
            handleEventFunc.contentEditable === "true"
        )
          (activeElement = handleEventFunc),
          (activeElementInst = targetInst),
          (lastSelection = null);
        break;
      case "focusout":
        lastSelection = activeElementInst = activeElement = null;
        break;
      case "mousedown":
        mouseDown = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        mouseDown = !1;
        constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
        break;
      case "selectionchange":
        if (skipSelectionChangeEvent) break;
      case "keydown":
      case "keyup":
        constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
      }
      var fallbackData;
      if (canUseCompositionEvent)
        b: {
          switch (domEventName) {
          case "compositionstart":
            var eventType = "onCompositionStart";
            break b;
          case "compositionend":
            eventType = "onCompositionEnd";
            break b;
          case "compositionupdate":
            eventType = "onCompositionUpdate";
            break b;
          }
          eventType = void 0;
        }
      else
        isComposing
          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
            (eventType = "onCompositionEnd")
          : domEventName === "keydown" &&
            nativeEvent.keyCode === 229 &&
            (eventType = "onCompositionStart");
      eventType &&
        (useFallbackCompositionData &&
          "ko" !== nativeEvent.locale &&
          (isComposing || "onCompositionStart" !== eventType
            ? eventType === "onCompositionEnd" &&
              isComposing &&
              (fallbackData = getData())
            : ((root = nativeEventTarget),
            (startText = "value" in root ? root.value : root.textContent),
            (isComposing = !0))),
        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
        0 < handleEventFunc.length &&
          ((eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          )),
          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
          fallbackData
            ? (eventType.data = fallbackData)
            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
            null !== fallbackData && (eventType.data = fallbackData))));
      if (
        (fallbackData = canUseTextInputEvent
          ? getNativeBeforeInputChars(domEventName, nativeEvent)
          : getFallbackBeforeInputChars(domEventName, nativeEvent))
      )
        (eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
        0 < eventType.length &&
            ((handleEventFunc = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            )),
            dispatchQueue.push({
              event: handleEventFunc,
              listeners: eventType
            }),
            (handleEventFunc.data = fallbackData));
      extractEvents$2(
        dispatchQueue,
        domEventName,
        targetInst,
        nativeEvent,
        nativeEventTarget
      );
    }
    if (enableScrollEndPolyfill)
      a: if (enableScrollEndPolyfill)
        if (
          ((fallbackData = 0 !== (eventSystemFlags & 4)),
          "scrollend" !== domEventName)
        ) {
          if (!isScrollEndEventSupported && fallbackData)
            switch (domEventName) {
            case "scroll":
              null !== nativeEventTarget &&
                  debounceScrollEnd(targetInst, nativeEvent, nativeEventTarget);
              break;
            case "touchstart":
              isTouchStarted = !0;
              break;
            case "touchcancel":
            case "touchend":
              isTouchStarted = !1;
              break;
            case "mousedown":
              isMouseDown = !0;
              break;
            case "mouseup":
              isMouseDown = !1;
            }
        } else {
          if (!isScrollEndEventSupported && null !== nativeEventTarget)
            if (
              ((eventType = nativeEventTarget[internalScrollTimer]),
              null != eventType)
            )
              clearTimeout(eventType),
              (nativeEventTarget[internalScrollTimer] = void 0);
            else break a;
          targetInst = accumulateSinglePhaseListeners(
            targetInst,
            "onScrollEnd",
            "scrollend",
            fallbackData,
            !fallbackData,
            nativeEvent
          );
          0 < targetInst.length &&
            ((nativeEventTarget = new SyntheticUIEvent(
              "onScrollEnd",
              "scrollend",
              null,
              nativeEvent,
              nativeEventTarget
            )),
            dispatchQueue.push({
              event: nativeEventTarget,
              listeners: targetInst
            }));
        }
    processDispatchQueue(dispatchQueue, eventSystemFlags);
  });
}
function createDispatchListener(instance, listener, currentTarget) {
  return {
    instance: instance,
    listener: listener,
    currentTarget: currentTarget
  };
}
function accumulateSinglePhaseListeners(
  targetFiber,
  reactName,
  nativeEventType,
  inCapturePhase,
  accumulateTargetOnly,
  nativeEvent
) {
  reactName = inCapturePhase
    ? null !== reactName
      ? reactName + "Capture"
      : null
    : reactName;
  for (
    var listeners = [], instance = targetFiber, lastHostComponent = null;
    null !== instance;

  ) {
    let _instance = instance;
    targetFiber = _instance.stateNode;
    _instance = _instance.tag;
    (5 !== _instance && 26 !== _instance && 27 !== _instance) ||
    targetFiber === null
      ? _instance === 21 &&
        null !== lastHostComponent &&
        null !== targetFiber &&
        ((targetFiber = targetFiber[internalEventHandlerListenersKey] || null),
        null !== targetFiber &&
          targetFiber.forEach((entry) => {
            entry.type === nativeEventType &&
              entry.capture === inCapturePhase &&
              listeners.push(
                createDispatchListener(
                  instance,
                  entry.callback,
                  lastHostComponent
                )
              );
          }))
      : ((lastHostComponent = targetFiber),
      (targetFiber =
          lastHostComponent[internalEventHandlerListenersKey] || null),
      null !== targetFiber &&
          targetFiber.forEach((entry) => {
            entry.type === nativeEventType &&
              entry.capture === inCapturePhase &&
              listeners.push(
                createDispatchListener(
                  instance,
                  entry.callback,
                  lastHostComponent
                )
              );
          }),
      null !== reactName &&
          ((targetFiber = getListener(instance, reactName)),
          null != targetFiber &&
            listeners.push(
              createDispatchListener(instance, targetFiber, lastHostComponent)
            )));
    if (accumulateTargetOnly) break;
    nativeEvent.type === "beforeblur" &&
      ((targetFiber = nativeEvent._detachedInterceptFiber),
      targetFiber === null ||
        (targetFiber !== instance && targetFiber !== instance.alternate) ||
        (listeners = []));
    instance = instance.return;
  }
  return listeners;
}
function accumulateTwoPhaseListeners(targetFiber, reactName) {
  for (
    let captureName = reactName + "Capture", listeners = [];
    null !== targetFiber;

  ) {
    let _instance2 = targetFiber;
    let stateNode = _instance2.stateNode;
    _instance2 = _instance2.tag;
    (5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2) ||
      stateNode === null ||
      ((_instance2 = getListener(targetFiber, captureName)),
      null != _instance2 &&
        listeners.unshift(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ),
      (_instance2 = getListener(targetFiber, reactName)),
      null != _instance2 &&
        listeners.push(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ));
    if (targetFiber.tag === 3) return listeners;
    targetFiber = targetFiber.return;
  }
  return [];
}
function getParent(inst) {
  if (inst === null) return null;
  do inst = inst.return;
  while (inst && 5 !== inst.tag && 27 !== inst.tag);
  return inst ? inst : null;
}
function accumulateEnterLeaveListenersForEvent(
  dispatchQueue,
  event,
  target,
  common,
  inCapturePhase
) {
  for (
    var registrationName = event._reactName, listeners = [];
    null !== target && target !== common;

  ) {
    let _instance3 = target;
    let alternate = _instance3.alternate;
    let stateNode = _instance3.stateNode;
    _instance3 = _instance3.tag;
    if (null !== alternate && alternate === common) break;
    (5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3) ||
      stateNode === null ||
      ((alternate = stateNode),
      inCapturePhase
        ? ((stateNode = getListener(target, registrationName)),
        null != stateNode &&
            listeners.unshift(
              createDispatchListener(target, stateNode, alternate)
            ))
        : inCapturePhase ||
          ((stateNode = getListener(target, registrationName)),
          null != stateNode &&
            listeners.push(
              createDispatchListener(target, stateNode, alternate)
            )));
    target = target.return;
  }
  0 !== listeners.length &&
    dispatchQueue.push({ event: event, listeners: listeners });
}
function accumulateEventHandleNonManagedNodeListeners(
  reactEventType,
  currentTarget,
  inCapturePhase
) {
  let listeners = [];
  let eventListeners = currentTarget[internalEventHandlerListenersKey] || null;
  null !== eventListeners &&
    eventListeners.forEach((entry) => {
      entry.type === reactEventType &&
        entry.capture === inCapturePhase &&
        listeners.push(
          createDispatchListener(null, entry.callback, currentTarget)
        );
    });
  return listeners;
}
let NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
let NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
function normalizeMarkupForTextOrAttribute(markup) {
  return (typeof markup === "string" ? markup : "" + markup)
    .replace(NORMALIZE_NEWLINES_REGEX, "\n")
    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
}
function checkForUnmatchedText(serverText, clientText) {
  clientText = normalizeMarkupForTextOrAttribute(clientText);
  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? !0 : !1;
}
function setProp(domElement, tag, key, value, props, prevValue) {
  switch (key) {
  case "children":
    if (typeof value === "string")
      tag === "body" ||
          (tag === "textarea" && value === "") ||
          setTextContent(domElement, value);
    else if (typeof value === "number" || typeof value === "bigint")
      "body" !== tag && setTextContent(domElement, "" + value);
    else return;
    break;
  case "className":
    setValueForKnownAttribute(domElement, "class", value);
    break;
  case "tabIndex":
    setValueForKnownAttribute(domElement, "tabindex", value);
    break;
  case "dir":
  case "role":
  case "viewBox":
  case "width":
  case "height":
    setValueForKnownAttribute(domElement, key, value);
    break;
  case "style":
    setValueForStyles(domElement, value, prevValue);
    return;
  case "data":
    if ("object" !== tag) {
      setValueForKnownAttribute(domElement, "data", value);
      break;
    }
  case "src":
  case "href":
    if (value === "" && ("a" !== tag || "href" !== key)) {
      domElement.removeAttribute(key);
      break;
    }
    if (
      value == null ||
        typeof value === "function" ||
        typeof value === "symbol" ||
        typeof value === "boolean"
    ) {
      domElement.removeAttribute(key);
      break;
    }
    value = sanitizeURL(enableTrustedTypesIntegration ? value : "" + value);
    domElement.setAttribute(key, value);
    break;
  case "action":
  case "formAction":
    if (typeof value === "function") {
      domElement.setAttribute(
        key,
        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
      );
      break;
    } else
      typeof prevValue === "function" &&
          (key === "formAction"
            ? ("input" !== tag &&
                setProp(domElement, tag, "name", props.name, props, null),
            setProp(
              domElement,
              tag,
              "formEncType",
              props.formEncType,
              props,
              null
            ),
            setProp(
              domElement,
              tag,
              "formMethod",
              props.formMethod,
              props,
              null
            ),
            setProp(
              domElement,
              tag,
              "formTarget",
              props.formTarget,
              props,
              null
            ))
            : (setProp(domElement, tag, "encType", props.encType, props, null),
            setProp(domElement, tag, "method", props.method, props, null),
            setProp(domElement, tag, "target", props.target, props, null)));
    if (
      value == null ||
        typeof value === "symbol" ||
        typeof value === "boolean"
    ) {
      domElement.removeAttribute(key);
      break;
    }
    value = sanitizeURL(enableTrustedTypesIntegration ? value : "" + value);
    domElement.setAttribute(key, value);
    break;
  case "onClick":
    null != value && (domElement.onclick = noop$1);
    return;
  case "onScroll":
    null != value && listenToNonDelegatedEvent("scroll", domElement);
    return;
  case "onScrollEnd":
    null != value &&
        (listenToNonDelegatedEvent("scrollend", domElement),
        enableScrollEndPolyfill &&
          listenToNonDelegatedEvent("scroll", domElement));
    return;
  case "dangerouslySetInnerHTML":
    if (null != value) {
      if ("object" !== typeof value || !("__html" in value))
        throw Error(formatProdErrorMessage(61));
      key = value.__html;
      if (null != key) {
        if (null != props.children) throw Error(formatProdErrorMessage(60));
        domElement.innerHTML = key;
      }
    }
    break;
  case "multiple":
    domElement.multiple =
        value && "function" !== typeof value && "symbol" !== typeof value;
    break;
  case "muted":
    domElement.muted =
        value && "function" !== typeof value && "symbol" !== typeof value;
    break;
  case "suppressContentEditableWarning":
  case "suppressHydrationWarning":
  case "defaultValue":
  case "defaultChecked":
  case "innerHTML":
  case "ref":
    break;
  case "autoFocus":
    break;
  case "xlinkHref":
    if (
      value == null ||
        typeof value === "function" ||
        typeof value === "boolean" ||
        typeof value === "symbol"
    ) {
      domElement.removeAttribute("xlink:href");
      break;
    }
    key = sanitizeURL(enableTrustedTypesIntegration ? value : "" + value);
    domElement.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      key
    );
    break;
  case "contentEditable":
  case "spellCheck":
  case "draggable":
  case "value":
  case "autoReverse":
  case "externalResourcesRequired":
  case "focusable":
  case "preserveAlpha":
    null != value && "function" !== typeof value && "symbol" !== typeof value
      ? domElement.setAttribute(
        key,
        enableTrustedTypesIntegration ? value : "" + value
      )
      : domElement.removeAttribute(key);
    break;
  case "inert":
  case "allowFullScreen":
  case "async":
  case "autoPlay":
  case "controls":
  case "default":
  case "defer":
  case "disabled":
  case "disablePictureInPicture":
  case "disableRemotePlayback":
  case "formNoValidate":
  case "hidden":
  case "loop":
  case "noModule":
  case "noValidate":
  case "open":
  case "playsInline":
  case "readOnly":
  case "required":
  case "reversed":
  case "scoped":
  case "seamless":
  case "itemScope":
    value && "function" !== typeof value && "symbol" !== typeof value
      ? domElement.setAttribute(key, "")
      : domElement.removeAttribute(key);
    break;
  case "capture":
  case "download":
    !0 === value
      ? domElement.setAttribute(key, "")
      : !1 !== value &&
            null != value &&
            "function" !== typeof value &&
            "symbol" !== typeof value
        ? domElement.setAttribute(key, value)
        : domElement.removeAttribute(key);
    break;
  case "cols":
  case "rows":
  case "size":
  case "span":
    null != value &&
      "function" !== typeof value &&
      "symbol" !== typeof value &&
      !isNaN(value) &&
      1 <= value
      ? domElement.setAttribute(key, value)
      : domElement.removeAttribute(key);
    break;
  case "rowSpan":
  case "start":
    value == null ||
      typeof value === "function" ||
      typeof value === "symbol" ||
      isNaN(value)
      ? domElement.removeAttribute(key)
      : domElement.setAttribute(key, value);
    break;
  case "popover":
    listenToNonDelegatedEvent("beforetoggle", domElement);
    listenToNonDelegatedEvent("toggle", domElement);
    setValueForAttribute(domElement, "popover", value);
    break;
  case "xlinkActuate":
    setValueForNamespacedAttribute(
      domElement,
      "http://www.w3.org/1999/xlink",
      "xlink:actuate",
      value
    );
    break;
  case "xlinkArcrole":
    setValueForNamespacedAttribute(
      domElement,
      "http://www.w3.org/1999/xlink",
      "xlink:arcrole",
      value
    );
    break;
  case "xlinkRole":
    setValueForNamespacedAttribute(
      domElement,
      "http://www.w3.org/1999/xlink",
      "xlink:role",
      value
    );
    break;
  case "xlinkShow":
    setValueForNamespacedAttribute(
      domElement,
      "http://www.w3.org/1999/xlink",
      "xlink:show",
      value
    );
    break;
  case "xlinkTitle":
    setValueForNamespacedAttribute(
      domElement,
      "http://www.w3.org/1999/xlink",
      "xlink:title",
      value
    );
    break;
  case "xlinkType":
    setValueForNamespacedAttribute(
      domElement,
      "http://www.w3.org/1999/xlink",
      "xlink:type",
      value
    );
    break;
  case "xmlBase":
    setValueForNamespacedAttribute(
      domElement,
      "http://www.w3.org/XML/1998/namespace",
      "xml:base",
      value
    );
    break;
  case "xmlLang":
    setValueForNamespacedAttribute(
      domElement,
      "http://www.w3.org/XML/1998/namespace",
      "xml:lang",
      value
    );
    break;
  case "xmlSpace":
    setValueForNamespacedAttribute(
      domElement,
      "http://www.w3.org/XML/1998/namespace",
      "xml:space",
      value
    );
    break;
  case "is":
    setValueForAttribute(domElement, "is", value);
    break;
  case "innerText":
  case "textContent":
    return;
  default:
    if (
      !(2 < key.length) ||
        ("o" !== key[0] && "O" !== key[0]) ||
        ("n" !== key[1] && "N" !== key[1])
    )
      (key = aliases.get(key) || key),
      setValueForAttribute(domElement, key, value);
    else return;
  }
  trackHostMutation();
}
function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
  switch (key) {
  case "style":
    setValueForStyles(domElement, value, prevValue);
    return;
  case "dangerouslySetInnerHTML":
    if (null != value) {
      if ("object" !== typeof value || !("__html" in value))
        throw Error(formatProdErrorMessage(61));
      key = value.__html;
      if (null != key) {
        if (null != props.children) throw Error(formatProdErrorMessage(60));
        domElement.innerHTML = key;
      }
    }
    break;
  case "children":
    if (typeof value === "string") setTextContent(domElement, value);
    else if (typeof value === "number" || typeof value === "bigint")
      setTextContent(domElement, "" + value);
    else return;
    break;
  case "onScroll":
    null != value && listenToNonDelegatedEvent("scroll", domElement);
    return;
  case "onScrollEnd":
    null != value &&
        (listenToNonDelegatedEvent("scrollend", domElement),
        enableScrollEndPolyfill &&
          listenToNonDelegatedEvent("scroll", domElement));
    return;
  case "onClick":
    null != value && (domElement.onclick = noop$1);
    return;
  case "suppressContentEditableWarning":
  case "suppressHydrationWarning":
  case "innerHTML":
  case "ref":
    return;
  case "innerText":
  case "textContent":
    return;
  default:
    if (!registrationNameDependencies.hasOwnProperty(key))
      a: {
        if (
          key[0] === "o" &&
            key[1] === "n" &&
            ((props = key.endsWith("Capture")),
            (tag = key.slice(2, props ? key.length - 7 : void 0)),
            (prevValue = getFiberCurrentPropsFromNode(domElement)),
            (prevValue = null != prevValue ? prevValue[key] : null),
            typeof prevValue === "function" &&
              domElement.removeEventListener(tag, prevValue, props),
            typeof value === "function")
        ) {
          "function" !== typeof prevValue &&
              null !== prevValue &&
              (key in domElement
                ? (domElement[key] = null)
                : domElement.hasAttribute(key) &&
                  domElement.removeAttribute(key));
          domElement.addEventListener(tag, value, props);
          break a;
        }
        trackHostMutation();
        key in domElement
          ? (domElement[key] = value)
          : !0 === value
            ? domElement.setAttribute(key, "")
            : setValueForAttribute(domElement, key, value);
      }
    return;
  }
  trackHostMutation();
}
function setInitialProperties(domElement, tag, props) {
  switch (tag) {
  case "div":
  case "span":
  case "svg":
  case "path":
  case "a":
  case "g":
  case "p":
  case "li":
    break;
  case "img":
    listenToNonDelegatedEvent("error", domElement);
    listenToNonDelegatedEvent("load", domElement);
    var hasSrc = !1;
    var hasSrcSet = !1;
    var propKey;
    for (propKey in props)
      if (props.hasOwnProperty(propKey)) {
        var propValue = props[propKey];
        if (null != propValue)
          switch (propKey) {
          case "src":
            hasSrc = !0;
            break;
          case "srcSet":
            hasSrcSet = !0;
            break;
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(formatProdErrorMessage(137, tag));
          default:
            setProp(domElement, tag, propKey, propValue, props, null);
          }
      }
    hasSrcSet &&
        setProp(domElement, tag, "srcSet", props.srcSet, props, null);
    hasSrc && setProp(domElement, tag, "src", props.src, props, null);
    return;
  case "input":
    listenToNonDelegatedEvent("invalid", domElement);
    var defaultValue = (propKey = propValue = hasSrcSet = null);
    var checked = null;
    var defaultChecked = null;
    for (hasSrc in props)
      if (props.hasOwnProperty(hasSrc)) {
        var propValue$257 = props[hasSrc];
        if (null != propValue$257)
          switch (hasSrc) {
          case "name":
            hasSrcSet = propValue$257;
            break;
          case "type":
            propValue = propValue$257;
            break;
          case "checked":
            checked = propValue$257;
            break;
          case "defaultChecked":
            defaultChecked = propValue$257;
            break;
          case "value":
            propKey = propValue$257;
            break;
          case "defaultValue":
            defaultValue = propValue$257;
            break;
          case "children":
          case "dangerouslySetInnerHTML":
            if (null != propValue$257)
              throw Error(formatProdErrorMessage(137, tag));
            break;
          default:
            setProp(domElement, tag, hasSrc, propValue$257, props, null);
          }
      }
    initInput(
      domElement,
      propKey,
      defaultValue,
      checked,
      defaultChecked,
      propValue,
      hasSrcSet,
      !1
    );
    return;
  case "select":
    listenToNonDelegatedEvent("invalid", domElement);
    hasSrc = propValue = propKey = null;
    for (hasSrcSet in props)
      if (
        props.hasOwnProperty(hasSrcSet) &&
          ((defaultValue = props[hasSrcSet]), null != defaultValue)
      )
        switch (hasSrcSet) {
        case "value":
          propKey = defaultValue;
          break;
        case "defaultValue":
          propValue = defaultValue;
          break;
        case "multiple":
          hasSrc = defaultValue;
        default:
          setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
        }
    tag = propKey;
    props = propValue;
    domElement.multiple = !!hasSrc;
    null != tag
      ? updateOptions(domElement, !!hasSrc, tag, !1)
      : null != props && updateOptions(domElement, !!hasSrc, props, !0);
    return;
  case "textarea":
    listenToNonDelegatedEvent("invalid", domElement);
    propKey = hasSrcSet = hasSrc = null;
    for (propValue in props)
      if (
        props.hasOwnProperty(propValue) &&
          ((defaultValue = props[propValue]), null != defaultValue)
      )
        switch (propValue) {
        case "value":
          hasSrc = defaultValue;
          break;
        case "defaultValue":
          hasSrcSet = defaultValue;
          break;
        case "children":
          propKey = defaultValue;
          break;
        case "dangerouslySetInnerHTML":
          if (null != defaultValue) throw Error(formatProdErrorMessage(91));
          break;
        default:
          setProp(domElement, tag, propValue, defaultValue, props, null);
        }
    initTextarea(domElement, hasSrc, hasSrcSet, propKey);
    return;
  case "option":
    for (checked in props)
      if (
        props.hasOwnProperty(checked) &&
          ((hasSrc = props[checked]), null != hasSrc)
      )
        switch (checked) {
        case "selected":
          domElement.selected =
                hasSrc &&
                "function" !== typeof hasSrc &&
                "symbol" !== typeof hasSrc;
          break;
        default:
          setProp(domElement, tag, checked, hasSrc, props, null);
        }
    return;
  case "dialog":
    listenToNonDelegatedEvent("beforetoggle", domElement);
    listenToNonDelegatedEvent("toggle", domElement);
    listenToNonDelegatedEvent("cancel", domElement);
    listenToNonDelegatedEvent("close", domElement);
    break;
  case "iframe":
  case "object":
    listenToNonDelegatedEvent("load", domElement);
    break;
  case "video":
  case "audio":
    for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
      listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
    break;
  case "image":
    listenToNonDelegatedEvent("error", domElement);
    listenToNonDelegatedEvent("load", domElement);
    break;
  case "details":
    listenToNonDelegatedEvent("toggle", domElement);
    break;
  case "embed":
  case "source":
  case "link":
    listenToNonDelegatedEvent("error", domElement),
    listenToNonDelegatedEvent("load", domElement);
  case "area":
  case "base":
  case "br":
  case "col":
  case "hr":
  case "keygen":
  case "meta":
  case "param":
  case "track":
  case "wbr":
  case "menuitem":
    for (defaultChecked in props)
      if (
        props.hasOwnProperty(defaultChecked) &&
          ((hasSrc = props[defaultChecked]), null != hasSrc)
      )
        switch (defaultChecked) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(formatProdErrorMessage(137, tag));
        default:
          setProp(domElement, tag, defaultChecked, hasSrc, props, null);
        }
    return;
  default:
    if (isCustomElement(tag)) {
      for (propValue$257 in props)
        props.hasOwnProperty(propValue$257) &&
            ((hasSrc = props[propValue$257]),
            void 0 !== hasSrc &&
              setPropOnCustomElement(
                domElement,
                tag,
                propValue$257,
                hasSrc,
                props,
                void 0
              ));
      return;
    }
  }
  for (defaultValue in props)
    props.hasOwnProperty(defaultValue) &&
      ((hasSrc = props[defaultValue]),
      null != hasSrc &&
        setProp(domElement, tag, defaultValue, hasSrc, props, null));
}
function updateProperties(domElement, tag, lastProps, nextProps) {
  switch (tag) {
  case "div":
  case "span":
  case "svg":
  case "path":
  case "a":
  case "g":
  case "p":
  case "li":
    break;
  case "input":
    var name = null;
    var type = null;
    var value = null;
    var defaultValue = null;
    var lastDefaultValue = null;
    var checked = null;
    var defaultChecked = null;
    for (propKey in lastProps) {
      var lastProp = lastProps[propKey];
      if (lastProps.hasOwnProperty(propKey) && null != lastProp)
        switch (propKey) {
        case "checked":
          break;
        case "value":
          break;
        case "defaultValue":
          lastDefaultValue = lastProp;
        default:
          nextProps.hasOwnProperty(propKey) ||
                setProp(domElement, tag, propKey, null, nextProps, lastProp);
        }
    }
    for (var propKey$274 in nextProps) {
      var propKey = nextProps[propKey$274];
      lastProp = lastProps[propKey$274];
      if (
        nextProps.hasOwnProperty(propKey$274) &&
          (null != propKey || null != lastProp)
      )
        switch (propKey$274) {
        case "type":
          propKey !== lastProp && trackHostMutation();
          type = propKey;
          break;
        case "name":
          propKey !== lastProp && trackHostMutation();
          name = propKey;
          break;
        case "checked":
          propKey !== lastProp && trackHostMutation();
          checked = propKey;
          break;
        case "defaultChecked":
          propKey !== lastProp && trackHostMutation();
          defaultChecked = propKey;
          break;
        case "value":
          propKey !== lastProp && trackHostMutation();
          value = propKey;
          break;
        case "defaultValue":
          propKey !== lastProp && trackHostMutation();
          defaultValue = propKey;
          break;
        case "children":
        case "dangerouslySetInnerHTML":
          if (null != propKey)
            throw Error(formatProdErrorMessage(137, tag));
          break;
        default:
          propKey !== lastProp &&
                setProp(
                  domElement,
                  tag,
                  propKey$274,
                  propKey,
                  nextProps,
                  lastProp
                );
        }
    }
    updateInput(
      domElement,
      value,
      defaultValue,
      lastDefaultValue,
      checked,
      defaultChecked,
      type,
      name
    );
    return;
  case "select":
    propKey = value = defaultValue = propKey$274 = null;
    for (type in lastProps)
      if (
        ((lastDefaultValue = lastProps[type]),
        lastProps.hasOwnProperty(type) && null != lastDefaultValue)
      )
        switch (type) {
        case "value":
          break;
        case "multiple":
          propKey = lastDefaultValue;
        default:
          nextProps.hasOwnProperty(type) ||
                setProp(
                  domElement,
                  tag,
                  type,
                  null,
                  nextProps,
                  lastDefaultValue
                );
        }
    for (name in nextProps)
      if (
        ((type = nextProps[name]),
        (lastDefaultValue = lastProps[name]),
        nextProps.hasOwnProperty(name) &&
            (null != type || null != lastDefaultValue))
      )
        switch (name) {
        case "value":
          type !== lastDefaultValue && trackHostMutation();
          propKey$274 = type;
          break;
        case "defaultValue":
          type !== lastDefaultValue && trackHostMutation();
          defaultValue = type;
          break;
        case "multiple":
          type !== lastDefaultValue && trackHostMutation(), (value = type);
        default:
          type !== lastDefaultValue &&
                setProp(
                  domElement,
                  tag,
                  name,
                  type,
                  nextProps,
                  lastDefaultValue
                );
        }
    tag = defaultValue;
    lastProps = value;
    nextProps = propKey;
    null != propKey$274
      ? updateOptions(domElement, !!lastProps, propKey$274, !1)
      : !!nextProps !== !!lastProps &&
          (null != tag
            ? updateOptions(domElement, !!lastProps, tag, !0)
            : updateOptions(domElement, !!lastProps, lastProps ? [] : "", !1));
    return;
  case "textarea":
    propKey = propKey$274 = null;
    for (defaultValue in lastProps)
      if (
        ((name = lastProps[defaultValue]),
        lastProps.hasOwnProperty(defaultValue) &&
            null != name &&
            !nextProps.hasOwnProperty(defaultValue))
      )
        switch (defaultValue) {
        case "value":
          break;
        case "children":
          break;
        default:
          setProp(domElement, tag, defaultValue, null, nextProps, name);
        }
    for (value in nextProps)
      if (
        ((name = nextProps[value]),
        (type = lastProps[value]),
        nextProps.hasOwnProperty(value) && (null != name || null != type))
      )
        switch (value) {
        case "value":
          name !== type && trackHostMutation();
          propKey$274 = name;
          break;
        case "defaultValue":
          name !== type && trackHostMutation();
          propKey = name;
          break;
        case "children":
          break;
        case "dangerouslySetInnerHTML":
          if (null != name) throw Error(formatProdErrorMessage(91));
          break;
        default:
          name !== type &&
                setProp(domElement, tag, value, name, nextProps, type);
        }
    updateTextarea(domElement, propKey$274, propKey);
    return;
  case "option":
    for (let propKey$290 in lastProps)
      if (
        ((propKey$274 = lastProps[propKey$290]),
        lastProps.hasOwnProperty(propKey$290) &&
            null != propKey$274 &&
            !nextProps.hasOwnProperty(propKey$290))
      )
        switch (propKey$290) {
        case "selected":
          domElement.selected = !1;
          break;
        default:
          setProp(
            domElement,
            tag,
            propKey$290,
            null,
            nextProps,
            propKey$274
          );
        }
    for (lastDefaultValue in nextProps)
      if (
        ((propKey$274 = nextProps[lastDefaultValue]),
        (propKey = lastProps[lastDefaultValue]),
        nextProps.hasOwnProperty(lastDefaultValue) &&
            propKey$274 !== propKey &&
            (null != propKey$274 || null != propKey))
      )
        switch (lastDefaultValue) {
        case "selected":
          propKey$274 !== propKey && trackHostMutation();
          domElement.selected =
                propKey$274 &&
                "function" !== typeof propKey$274 &&
                "symbol" !== typeof propKey$274;
          break;
        default:
          setProp(
            domElement,
            tag,
            lastDefaultValue,
            propKey$274,
            nextProps,
            propKey
          );
        }
    return;
  case "img":
  case "link":
  case "area":
  case "base":
  case "br":
  case "col":
  case "embed":
  case "hr":
  case "keygen":
  case "meta":
  case "param":
  case "source":
  case "track":
  case "wbr":
  case "menuitem":
    for (let propKey$295 in lastProps)
      (propKey$274 = lastProps[propKey$295]),
      lastProps.hasOwnProperty(propKey$295) &&
            null != propKey$274 &&
            !nextProps.hasOwnProperty(propKey$295) &&
            setProp(domElement, tag, propKey$295, null, nextProps, propKey$274);
    for (checked in nextProps)
      if (
        ((propKey$274 = nextProps[checked]),
        (propKey = lastProps[checked]),
        nextProps.hasOwnProperty(checked) &&
            propKey$274 !== propKey &&
            (null != propKey$274 || null != propKey))
      )
        switch (checked) {
        case "children":
        case "dangerouslySetInnerHTML":
          if (null != propKey$274)
            throw Error(formatProdErrorMessage(137, tag));
          break;
        default:
          setProp(
            domElement,
            tag,
            checked,
            propKey$274,
            nextProps,
            propKey
          );
        }
    return;
  default:
    if (isCustomElement(tag)) {
      for (let propKey$300 in lastProps)
        (propKey$274 = lastProps[propKey$300]),
        lastProps.hasOwnProperty(propKey$300) &&
              void 0 !== propKey$274 &&
              !nextProps.hasOwnProperty(propKey$300) &&
              setPropOnCustomElement(
                domElement,
                tag,
                propKey$300,
                void 0,
                nextProps,
                propKey$274
              );
      for (defaultChecked in nextProps)
        (propKey$274 = nextProps[defaultChecked]),
        (propKey = lastProps[defaultChecked]),
        !nextProps.hasOwnProperty(defaultChecked) ||
              propKey$274 === propKey ||
              (void 0 === propKey$274 && void 0 === propKey) ||
              setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey$274,
                nextProps,
                propKey
              );
      return;
    }
  }
  for (let propKey$305 in lastProps)
    (propKey$274 = lastProps[propKey$305]),
    lastProps.hasOwnProperty(propKey$305) &&
        null != propKey$274 &&
        !nextProps.hasOwnProperty(propKey$305) &&
        setProp(domElement, tag, propKey$305, null, nextProps, propKey$274);
  for (lastProp in nextProps)
    (propKey$274 = nextProps[lastProp]),
    (propKey = lastProps[lastProp]),
    !nextProps.hasOwnProperty(lastProp) ||
        propKey$274 === propKey ||
        (propKey$274 == null && propKey == null) ||
        setProp(domElement, tag, lastProp, propKey$274, nextProps, propKey);
}
var eventsEnabled = null;
var selectionInformation = null;
function getOwnerDocumentFromRootContainer(rootContainerElement) {
  return rootContainerElement.nodeType === 9
    ? rootContainerElement
    : rootContainerElement.ownerDocument;
}
function getOwnHostContext(namespaceURI) {
  switch (namespaceURI) {
  case "http://www.w3.org/2000/svg":
    return 1;
  case "http://www.w3.org/1998/Math/MathML":
    return 2;
  default:
    return 0;
  }
}
function getChildHostContextProd(parentNamespace, type) {
  if (parentNamespace === 0)
    switch (type) {
    case "svg":
      return 1;
    case "math":
      return 2;
    default:
      return 0;
    }
  return parentNamespace === 1 && type === "foreignObject"
    ? 0
    : parentNamespace;
}
function beforeActiveInstanceBlur(internalInstanceHandle) {
  _enabled = !0;
  let target = selectionInformation.focusedElem;
  let event = createEvent("beforeblur", !0);
  event._detachedInterceptFiber = internalInstanceHandle;
  target.dispatchEvent(event);
  _enabled = !1;
}
function shouldSetTextContent(type, props) {
  return (
    type === "textarea" ||
    type === "noscript" ||
    typeof props.children === "string" ||
    typeof props.children === "number" ||
    typeof props.children === "bigint" ||
    (typeof props.dangerouslySetInnerHTML === "object" &&
      null !== props.dangerouslySetInnerHTML &&
      null != props.dangerouslySetInnerHTML.__html)
  );
}
let currentPopstateTransitionEvent = null;
function shouldAttemptEagerTransition() {
  let event = window.event;
  if (event && event.type === "popstate") {
    if (event === currentPopstateTransitionEvent) return !1;
    currentPopstateTransitionEvent = event;
    return !0;
  }
  currentPopstateTransitionEvent = null;
  return !1;
}
var schedulerEvent = void 0;
function resolveEventType() {
  let event = window.event;
  return event && event !== schedulerEvent ? event.type : null;
}
function resolveEventTimeStamp() {
  let event = window.event;
  return event && event !== schedulerEvent ? event.timeStamp : -1.1;
}
var scheduleTimeout = typeof setTimeout === "function" ? setTimeout : void 0;
var cancelTimeout = typeof clearTimeout === "function" ? clearTimeout : void 0;
let localPromise = typeof Promise === "function" ? Promise : void 0;
let localRequestAnimationFrame =
    typeof requestAnimationFrame === "function"
      ? requestAnimationFrame
      : scheduleTimeout;
function getInstanceFromScope(scopeInstance) {
  scopeInstance = scopeInstance[internalInstanceKey] || null;
  return scopeInstance;
}
var scheduleMicrotask =
  typeof queueMicrotask === "function"
    ? queueMicrotask
    : "undefined" !== typeof localPromise
      ? function (callback) {
        return localPromise
          .resolve(null)
          .then(callback)
          .catch(handleErrorInNextTick);
      }
      : scheduleTimeout;
function handleErrorInNextTick(error) {
  setTimeout(() => {
    throw error;
  });
}
function isSingletonScope(type) {
  return type === "head";
}
function createEvent(type, bubbles) {
  let event = document.createEvent("Event");
  event.initEvent(type, bubbles, !1);
  return event;
}
function clearHydrationBoundary(parentInstance, hydrationInstance) {
  let node = hydrationInstance;
  let depth = 0;
  do {
    let nextNode = node.nextSibling;
    parentInstance.removeChild(node);
    if (nextNode && nextNode.nodeType === 8)
      if (((node = nextNode.data), node === "/$" || node === "/&")) {
        if (depth === 0) {
          parentInstance.removeChild(nextNode);
          retryIfBlockedOn(hydrationInstance);
          return;
        }
        depth--;
      } else if (
        node === "$" ||
        node === "$?" ||
        node === "$~" ||
        node === "$!" ||
        node === "&"
      )
        depth++;
      else if (node === "html")
        releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
      else if (node === "head") {
        node = parentInstance.ownerDocument.head;
        releaseSingletonInstance(node);
        for (let node$jscomp$0 = node.firstChild; node$jscomp$0; ) {
          let nextNode$jscomp$0 = node$jscomp$0.nextSibling;
          let nodeName = node$jscomp$0.nodeName;
          node$jscomp$0[internalHoistableMarker] ||
            nodeName === "SCRIPT" ||
            nodeName === "STYLE" ||
            (nodeName === "LINK" &&
              node$jscomp$0.rel.toLowerCase() === "stylesheet") ||
            node.removeChild(node$jscomp$0);
          node$jscomp$0 = nextNode$jscomp$0;
        }
      } else
        node === "body" &&
          releaseSingletonInstance(parentInstance.ownerDocument.body);
    node = nextNode;
  } while (node);
  retryIfBlockedOn(hydrationInstance);
}
function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
  let node = suspenseInstance;
  suspenseInstance = 0;
  do {
    let nextNode = node.nextSibling;
    node.nodeType === 1
      ? isHidden
        ? ((node._stashedDisplay = node.style.display),
        (node.style.display = "none"))
        : ((node.style.display = node._stashedDisplay || ""),
        node.getAttribute("style") === "" && node.removeAttribute("style"))
      : node.nodeType === 3 &&
        (isHidden
          ? ((node._stashedText = node.nodeValue), (node.nodeValue = ""))
          : (node.nodeValue = node._stashedText || ""));
    if (nextNode && nextNode.nodeType === 8)
      if (((node = nextNode.data), node === "/$"))
        if (suspenseInstance === 0) break;
        else suspenseInstance--;
      else
        ("$" !== node && "$?" !== node && "$~" !== node && "$!" !== node) ||
          suspenseInstance++;
    node = nextNode;
  } while (node);
}
function applyViewTransitionName(instance, name, className) {
  instance.style.viewTransitionName = name;
  null != className && (instance.style.viewTransitionClass = className);
  name = getComputedStyle(instance);
  if (name.display === "inline") {
    className = instance.getClientRects();
    if (className.length === 1) var JSCompiler_inline_result = 1;
    else
      for (let i = (JSCompiler_inline_result = 0); i < className.length; i++) {
        let rect = className[i];
        0 < rect.width && 0 < rect.height && JSCompiler_inline_result++;
      }
    JSCompiler_inline_result === 1 &&
      ((instance = instance.style),
      (instance.display = className.length === 1 ? "inline-block" : "block"),
      (instance.marginTop = "-" + name.paddingTop),
      (instance.marginBottom = "-" + name.paddingBottom));
  }
}
function restoreViewTransitionName(instance, props) {
  instance = instance.style;
  props = props.style;
  let viewTransitionName =
    null != props
      ? props.hasOwnProperty("viewTransitionName")
        ? props.viewTransitionName
        : props.hasOwnProperty("view-transition-name")
          ? props["view-transition-name"]
          : null
      : null;
  instance.viewTransitionName =
    viewTransitionName == null || typeof viewTransitionName === "boolean"
      ? ""
      : ("" + viewTransitionName).trim();
  viewTransitionName =
    null != props
      ? props.hasOwnProperty("viewTransitionClass")
        ? props.viewTransitionClass
        : props.hasOwnProperty("view-transition-class")
          ? props["view-transition-class"]
          : null
      : null;
  instance.viewTransitionClass =
    viewTransitionName == null || typeof viewTransitionName === "boolean"
      ? ""
      : ("" + viewTransitionName).trim();
  instance.display === "inline-block" &&
    (props == null
      ? (instance.display = instance.margin = "")
      : ((viewTransitionName = props.display),
      (instance.display =
          viewTransitionName == null || typeof viewTransitionName === "boolean"
            ? ""
            : viewTransitionName),
      (viewTransitionName = props.margin),
      null != viewTransitionName
        ? (instance.margin = viewTransitionName)
        : ((viewTransitionName = props.hasOwnProperty("marginTop")
          ? props.marginTop
          : props["margin-top"]),
        (instance.marginTop =
              viewTransitionName == null ||
              typeof viewTransitionName === "boolean"
                ? ""
                : viewTransitionName),
        (props = props.hasOwnProperty("marginBottom")
          ? props.marginBottom
          : props["margin-bottom"]),
        (instance.marginBottom =
              props == null || typeof props === "boolean" ? "" : props))));
}
function restoreRootViewTransitionName(rootContainer) {
  rootContainer =
    rootContainer.nodeType === 9
      ? rootContainer.body
      : rootContainer.nodeName === "HTML"
        ? rootContainer.ownerDocument.body
        : rootContainer;
  8 !== rootContainer.nodeType &&
    (rootContainer.style.viewTransitionName === "root" &&
      (rootContainer.style.viewTransitionName = ""),
    (rootContainer = rootContainer.ownerDocument.documentElement),
    null !== rootContainer &&
      rootContainer.style.viewTransitionName === "none" &&
      (rootContainer.style.viewTransitionName = ""));
}
function createMeasurement(rect, computedStyle, element) {
  element = element.ownerDocument.defaultView;
  return {
    rect: rect,
    abs:
      computedStyle.position === "absolute" ||
      computedStyle.position === "fixed",
    clip:
      "none" !== computedStyle.clipPath ||
      "visible" !== computedStyle.overflow ||
      "none" !== computedStyle.filter ||
      "none" !== computedStyle.mask ||
      "none" !== computedStyle.mask ||
      "0px" !== computedStyle.borderRadius,
    view:
      0 <= rect.bottom &&
      0 <= rect.right &&
      rect.top <= element.innerHeight &&
      rect.left <= element.innerWidth
  };
}
function measureInstance(instance) {
  let rect = instance.getBoundingClientRect();
  let computedStyle = getComputedStyle(instance);
  return createMeasurement(rect, computedStyle, instance);
}
function measureClonedInstance(instance) {
  let measuredRect = instance.getBoundingClientRect();
  measuredRect = new DOMRect(
    measuredRect.x + 2e4,
    measuredRect.y + 2e4,
    measuredRect.width,
    measuredRect.height
  );
  let computedStyle = getComputedStyle(instance);
  return createMeasurement(measuredRect, computedStyle, instance);
}
function forceLayout(ownerDocument) {
  return ownerDocument.documentElement.clientHeight;
}
function startViewTransition(
  rootContainer,
  transitionTypes,
  mutationCallback,
  layoutCallback,
  afterMutationCallback,
  spawnedWorkCallback,
  passiveCallback,
  errorCallback
) {
  let ownerDocument =
    rootContainer.nodeType === 9 ? rootContainer : rootContainer.ownerDocument;
  try {
    let transition = ownerDocument.startViewTransition({
      update: function () {
        let ownerWindow = ownerDocument.defaultView;
        ownerWindow =
          ownerWindow.navigation && ownerWindow.navigation.transition;
        let previousFontLoadingStatus = ownerDocument.fonts.status;
        mutationCallback();
        if (
          previousFontLoadingStatus === "loaded" &&
          (forceLayout(ownerDocument), ownerDocument.fonts.status === "loading")
        )
          return (
            (previousFontLoadingStatus = Promise.race([
              ownerDocument.fonts.ready,
              new Promise((resolve) => {
                return setTimeout(resolve, 500);
              })
            ]).then(layoutCallback, layoutCallback)),
            (ownerWindow
              ? Promise.allSettled([
                ownerWindow.finished,
                previousFontLoadingStatus
              ])
              : previousFontLoadingStatus
            ).then(afterMutationCallback, afterMutationCallback)
          );
        layoutCallback();
        if (ownerWindow)
          return ownerWindow.finished.then(
            afterMutationCallback,
            afterMutationCallback
          );
        afterMutationCallback();
      },
      types: transitionTypes
    });
    ownerDocument.__reactViewTransition = transition;
    transition.ready.then(
      () => {
        for (
          let animations = ownerDocument.documentElement.getAnimations({
              subtree: !0
            }),
            i = 0;
          i < animations.length;
          i++
        ) {
          let effect = animations[i].effect;
          let pseudoElement = effect.pseudoElement;
          if (
            null != pseudoElement &&
            pseudoElement.startsWith("::view-transition")
          ) {
            pseudoElement = effect.getKeyframes();
            for (
              var width = void 0,
                height = void 0,
                unchangedDimensions = !0,
                j = 0;
              j < pseudoElement.length;
              j++
            ) {
              let keyframe = pseudoElement[j];
              let w = keyframe.width;
              if (void 0 === width) width = w;
              else if (width !== w) {
                unchangedDimensions = !1;
                break;
              }
              w = keyframe.height;
              if (void 0 === height) height = w;
              else if (height !== w) {
                unchangedDimensions = !1;
                break;
              }
              delete keyframe.width;
              delete keyframe.height;
              keyframe.transform === "none" && delete keyframe.transform;
            }
            unchangedDimensions &&
              void 0 !== width &&
              void 0 !== height &&
              (effect.setKeyframes(pseudoElement),
              (unchangedDimensions = getComputedStyle(
                effect.target,
                effect.pseudoElement
              )),
              unchangedDimensions.width !== width ||
                unchangedDimensions.height !== height) &&
              ((unchangedDimensions = pseudoElement[0]),
              (unchangedDimensions.width = width),
              (unchangedDimensions.height = height),
              (unchangedDimensions = pseudoElement[pseudoElement.length - 1]),
              (unchangedDimensions.width = width),
              (unchangedDimensions.height = height),
              effect.setKeyframes(pseudoElement));
          }
        }
        spawnedWorkCallback();
      },
      (error) => {
        try {
          if (typeof error === "object" && null !== error)
            switch (error.name) {
            case "InvalidStateError":
              if (
                error.message ===
                    "View transition was skipped because document visibility state is hidden." ||
                  error.message ===
                    "Skipping view transition because document visibility state has become hidden." ||
                  error.message ===
                    "Skipping view transition because viewport size changed."
              )
                error = null;
            }
          null !== error && errorCallback(error);
        } finally {
          mutationCallback(), layoutCallback(), spawnedWorkCallback();
        }
      }
    );
    transition.finished.finally(() => {
      for (
        let scope = ownerDocument.documentElement,
          animations = scope.getAnimations({ subtree: !0 }),
          i = 0;
        i < animations.length;
        i++
      ) {
        let anim = animations[i];
        let effect = anim.effect;
        let pseudo = effect.pseudoElement;
        null != pseudo &&
          pseudo.startsWith("::view-transition") &&
          effect.target === scope &&
          anim.cancel();
      }
      ownerDocument.__reactViewTransition === transition &&
        (ownerDocument.__reactViewTransition = null);
      passiveCallback();
    });
    return transition;
  } catch (x) {
    return mutationCallback(), layoutCallback(), spawnedWorkCallback(), null;
  }
}
function ViewTransitionPseudoElement(pseudo, name) {
  this._scope = document.documentElement;
  this._selector = "::view-transition-" + pseudo + "(" + name + ")";
}
ViewTransitionPseudoElement.prototype.animate = function (keyframes, options) {
  options =
    typeof options === "number" ? { duration: options } : ({ ...options});
  options.pseudoElement = this._selector;
  return this._scope.animate(keyframes, options);
};
ViewTransitionPseudoElement.prototype.getAnimations = function () {
  for (
    var scope = this._scope,
      selector = this._selector,
      animations = scope.getAnimations({ subtree: !0 }),
      result = [],
      i = 0;
    i < animations.length;
    i++
  ) {
    let effect = animations[i].effect;
    null !== effect &&
      effect.target === scope &&
      effect.pseudoElement === selector &&
      result.push(animations[i]);
  }
  return result;
};
ViewTransitionPseudoElement.prototype.getComputedStyle = function () {
  return getComputedStyle(this._scope, this._selector);
};
function createViewTransitionInstance(name) {
  return {
    name: name,
    group: new ViewTransitionPseudoElement("group", name),
    imagePair: new ViewTransitionPseudoElement("image-pair", name),
    old: new ViewTransitionPseudoElement("old", name),
    new: new ViewTransitionPseudoElement("new", name)
  };
}
function FragmentInstance(fragmentFiber) {
  this._fragmentFiber = fragmentFiber;
  this._observers = this._eventListeners = null;
}
FragmentInstance.prototype.addEventListener = function (
  type,
  listener,
  optionsOrUseCapture
) {
  this._eventListeners === null && (this._eventListeners = []);
  let listeners = this._eventListeners;
  indexOfEventListener(listeners, type, listener, optionsOrUseCapture) === -1 &&
    (listeners.push({
      type: type,
      listener: listener,
      optionsOrUseCapture: optionsOrUseCapture
    }),
    traverseVisibleHostChildren(
      this._fragmentFiber.child,
      !1,
      addEventListenerToChild,
      type,
      listener,
      optionsOrUseCapture
    ));
  this._eventListeners = listeners;
};
function addEventListenerToChild(child, type, listener, optionsOrUseCapture) {
  getInstanceFromHostFiber(child).addEventListener(
    type,
    listener,
    optionsOrUseCapture
  );
  return !1;
}
FragmentInstance.prototype.removeEventListener = function (
  type,
  listener,
  optionsOrUseCapture
) {
  let listeners = this._eventListeners;
  null !== listeners &&
    "undefined" !== typeof listeners &&
    0 < listeners.length &&
    (traverseVisibleHostChildren(
      this._fragmentFiber.child,
      !1,
      removeEventListenerFromChild,
      type,
      listener,
      optionsOrUseCapture
    ),
    (type = indexOfEventListener(
      listeners,
      type,
      listener,
      optionsOrUseCapture
    )),
    null !== this._eventListeners && this._eventListeners.splice(type, 1));
};
function removeEventListenerFromChild(
  child,
  type,
  listener,
  optionsOrUseCapture
) {
  getInstanceFromHostFiber(child).removeEventListener(
    type,
    listener,
    optionsOrUseCapture
  );
  return !1;
}
function normalizeListenerOptions(opts) {
  return opts == null
    ? "0"
    : typeof opts === "boolean"
      ? "c=" + (opts ? "1" : "0")
      : "c=" +
        (opts.capture ? "1" : "0") +
        "&o=" +
        (opts.once ? "1" : "0") +
        "&p=" +
        (opts.passive ? "1" : "0");
}
function indexOfEventListener(
  eventListeners,
  type,
  listener,
  optionsOrUseCapture
) {
  for (let i = 0; i < eventListeners.length; i++) {
    let item = eventListeners[i];
    if (
      item.type === type &&
      item.listener === listener &&
      normalizeListenerOptions(item.optionsOrUseCapture) ===
        normalizeListenerOptions(optionsOrUseCapture)
    )
      return i;
  }
  return -1;
}
FragmentInstance.prototype.dispatchEvent = function (event) {
  let parentHostFiber = getFragmentParentHostFiber(this._fragmentFiber);
  if (parentHostFiber === null) return !0;
  parentHostFiber = getInstanceFromHostFiber(parentHostFiber);
  let eventListeners = this._eventListeners;
  if (
    (null !== eventListeners && 0 < eventListeners.length) ||
    !event.bubbles
  ) {
    let temp = document.createTextNode("");
    if (eventListeners)
      for (var i = 0; i < eventListeners.length; i++) {
        var _eventListeners$i = eventListeners[i];
        temp.addEventListener(
          _eventListeners$i.type,
          _eventListeners$i.listener,
          _eventListeners$i.optionsOrUseCapture
        );
      }
    parentHostFiber.appendChild(temp);
    event = temp.dispatchEvent(event);
    if (eventListeners)
      for (i = 0; i < eventListeners.length; i++)
        (_eventListeners$i = eventListeners[i]),
        temp.removeEventListener(
          _eventListeners$i.type,
          _eventListeners$i.listener,
          _eventListeners$i.optionsOrUseCapture
        );
    parentHostFiber.removeChild(temp);
    return event;
  }
  return parentHostFiber.dispatchEvent(event);
};
FragmentInstance.prototype.focus = function (focusOptions) {
  traverseVisibleHostChildren(
    this._fragmentFiber.child,
    !0,
    setFocusOnFiberIfFocusable,
    focusOptions,
    void 0,
    void 0
  );
};
function setFocusOnFiberIfFocusable(fiber, focusOptions) {
  fiber = getInstanceFromHostFiber(fiber);
  return setFocusIfFocusable(fiber, focusOptions);
}
FragmentInstance.prototype.focusLast = function (focusOptions) {
  let children = [];
  traverseVisibleHostChildren(
    this._fragmentFiber.child,
    !0,
    collectChildren,
    children,
    void 0,
    void 0
  );
  for (
    let i = children.length - 1;
    0 <= i && !setFocusOnFiberIfFocusable(children[i], focusOptions);
    i--
  );
};
function collectChildren(child, collection) {
  collection.push(child);
  return !1;
}
FragmentInstance.prototype.blur = function () {
  traverseVisibleHostChildren(
    this._fragmentFiber.child,
    !1,
    blurActiveElementWithinFragment,
    void 0,
    void 0,
    void 0
  );
};
function blurActiveElementWithinFragment(child) {
  child = getInstanceFromHostFiber(child);
  return child === child.ownerDocument.activeElement ? (child.blur(), !0) : !1;
}
FragmentInstance.prototype.observeUsing = function (observer) {
  this._observers === null && (this._observers = new Set());
  this._observers.add(observer);
  traverseVisibleHostChildren(
    this._fragmentFiber.child,
    !1,
    observeChild,
    observer,
    void 0,
    void 0
  );
};
function observeChild(child, observer) {
  child = getInstanceFromHostFiber(child);
  observer.observe(child);
  return !1;
}
FragmentInstance.prototype.unobserveUsing = function (observer) {
  let observers = this._observers;
  null !== observers &&
    observers.has(observer) &&
    (observers.delete(observer),
    traverseVisibleHostChildren(
      this._fragmentFiber.child,
      !1,
      unobserveChild,
      observer,
      void 0,
      void 0
    ));
};
function unobserveChild(child, observer) {
  child = getInstanceFromHostFiber(child);
  observer.unobserve(child);
  return !1;
}
FragmentInstance.prototype.getClientRects = function () {
  let rects = [];
  traverseVisibleHostChildren(
    this._fragmentFiber.child,
    !1,
    collectClientRects,
    rects,
    void 0,
    void 0
  );
  return rects;
};
function collectClientRects(child, rects) {
  child = getInstanceFromHostFiber(child);
  rects.push.apply(rects, child.getClientRects());
  return !1;
}
FragmentInstance.prototype.getRootNode = function (getRootNodeOptions) {
  let parentHostFiber = getFragmentParentHostFiber(this._fragmentFiber);
  return parentHostFiber === null
    ? this
    : getInstanceFromHostFiber(parentHostFiber).getRootNode(getRootNodeOptions);
};
FragmentInstance.prototype.compareDocumentPosition = function (otherNode) {
  let parentHostFiber = getFragmentParentHostFiber(this._fragmentFiber);
  if (parentHostFiber === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
  let children = [];
  traverseVisibleHostChildren(
    this._fragmentFiber.child,
    !1,
    collectChildren,
    children,
    void 0,
    void 0
  );
  let parentHostInstance = getInstanceFromHostFiber(parentHostFiber);
  if (children.length === 0) {
    children = this._fragmentFiber;
    var parentResult = parentHostInstance.compareDocumentPosition(otherNode);
    parentHostFiber = parentResult;
    parentHostInstance === otherNode
      ? (parentHostFiber = Node.DOCUMENT_POSITION_CONTAINS)
      : parentResult & Node.DOCUMENT_POSITION_CONTAINED_BY &&
        (traverseVisibleHostChildren(children.sibling, !1, findNextSibling),
        (children = searchTarget),
        (searchTarget = null),
        children === null
          ? (parentHostFiber = Node.DOCUMENT_POSITION_PRECEDING)
          : ((otherNode =
              getInstanceFromHostFiber(children).compareDocumentPosition(
                otherNode
              )),
          (parentHostFiber =
              otherNode === 0 || otherNode & Node.DOCUMENT_POSITION_FOLLOWING
                ? Node.DOCUMENT_POSITION_FOLLOWING
                : Node.DOCUMENT_POSITION_PRECEDING)));
    return (parentHostFiber |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC);
  }
  parentHostFiber = getInstanceFromHostFiber(children[0]);
  parentResult = getInstanceFromHostFiber(children[children.length - 1]);
  for (
    var firstInstance = getInstanceFromHostFiber(children[0]),
      foundPortalParent = !1,
      parent = this._fragmentFiber.return;
    null !== parent;

  ) {
    parent.tag === 4 && (foundPortalParent = !0);
    if (parent.tag === 3 || parent.tag === 5) break;
    parent = parent.return;
  }
  firstInstance = foundPortalParent
    ? firstInstance.parentElement
    : parentHostInstance;
  if (firstInstance == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
  parentHostInstance =
    firstInstance.compareDocumentPosition(parentHostFiber) &
    Node.DOCUMENT_POSITION_CONTAINED_BY;
  firstInstance =
    firstInstance.compareDocumentPosition(parentResult) &
    Node.DOCUMENT_POSITION_CONTAINED_BY;
  foundPortalParent = parentHostFiber.compareDocumentPosition(otherNode);
  let lastResult = parentResult.compareDocumentPosition(otherNode);
  parent =
    foundPortalParent & Node.DOCUMENT_POSITION_CONTAINED_BY ||
    lastResult & Node.DOCUMENT_POSITION_CONTAINED_BY;
  lastResult =
    parentHostInstance &&
    firstInstance &&
    foundPortalParent & Node.DOCUMENT_POSITION_FOLLOWING &&
    lastResult & Node.DOCUMENT_POSITION_PRECEDING;
  parentHostFiber =
    (parentHostInstance && parentHostFiber === otherNode) ||
    (firstInstance && parentResult === otherNode) ||
    parent ||
    lastResult
      ? Node.DOCUMENT_POSITION_CONTAINED_BY
      : (!parentHostInstance && parentHostFiber === otherNode) ||
          (!firstInstance && parentResult === otherNode)
        ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        : foundPortalParent;
  return parentHostFiber & Node.DOCUMENT_POSITION_DISCONNECTED ||
    parentHostFiber & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
    validateDocumentPositionWithFiberTree(
      parentHostFiber,
      this._fragmentFiber,
      children[0],
      children[children.length - 1],
      otherNode
    )
    ? parentHostFiber
    : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
};
function validateDocumentPositionWithFiberTree(
  documentPosition,
  fragmentFiber,
  precedingBoundaryFiber,
  followingBoundaryFiber,
  otherNode
) {
  let otherFiber = getClosestInstanceFromNode(otherNode);
  if (documentPosition & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    if ((precedingBoundaryFiber = !!otherFiber))
      a: {
        for (; null !== otherFiber; ) {
          if (
            otherFiber.tag === 7 &&
            (otherFiber === fragmentFiber ||
              otherFiber.alternate === fragmentFiber)
          ) {
            precedingBoundaryFiber = !0;
            break a;
          }
          otherFiber = otherFiber.return;
        }
        precedingBoundaryFiber = !1;
      }
    return precedingBoundaryFiber;
  }
  if (documentPosition & Node.DOCUMENT_POSITION_CONTAINS) {
    if (otherFiber === null)
      return (
        (otherFiber = otherNode.ownerDocument),
        otherNode === otherFiber || otherNode === otherFiber.body
      );
    a: {
      otherFiber = fragmentFiber;
      for (
        fragmentFiber = getFragmentParentHostFiber(fragmentFiber);
        null !== otherFiber;

      ) {
        if (
          !(
            (5 !== otherFiber.tag && 3 !== otherFiber.tag) ||
            (otherFiber !== fragmentFiber &&
              otherFiber.alternate !== fragmentFiber)
          )
        ) {
          otherFiber = !0;
          break a;
        }
        otherFiber = otherFiber.return;
      }
      otherFiber = !1;
    }
    return otherFiber;
  }
  return documentPosition & Node.DOCUMENT_POSITION_PRECEDING
    ? ((fragmentFiber = !!otherFiber) &&
        !(fragmentFiber = otherFiber === precedingBoundaryFiber) &&
        ((fragmentFiber = getLowestCommonAncestor(
          precedingBoundaryFiber,
          otherFiber,
          getParentForFragmentAncestors
        )),
        fragmentFiber === null
          ? (fragmentFiber = !1)
          : (traverseVisibleHostChildren(
            fragmentFiber,
            !0,
            isFiberPrecedingCheck,
            otherFiber,
            precedingBoundaryFiber
          ),
          (otherFiber = searchTarget),
          (searchTarget = null),
          (fragmentFiber = null !== otherFiber))),
    fragmentFiber)
    : documentPosition & Node.DOCUMENT_POSITION_FOLLOWING
      ? ((fragmentFiber = !!otherFiber) &&
          !(fragmentFiber = otherFiber === followingBoundaryFiber) &&
          ((fragmentFiber = getLowestCommonAncestor(
            followingBoundaryFiber,
            otherFiber,
            getParentForFragmentAncestors
          )),
          fragmentFiber === null
            ? (fragmentFiber = !1)
            : (traverseVisibleHostChildren(
              fragmentFiber,
              !0,
              isFiberFollowingCheck,
              otherFiber,
              followingBoundaryFiber
            ),
            (otherFiber = searchTarget),
            (searchBoundary = searchTarget = null),
            (fragmentFiber = null !== otherFiber))),
      fragmentFiber)
      : !1;
}
enableFragmentRefsScrollIntoView &&
  (FragmentInstance.prototype.experimental_scrollIntoView = function (
    alignToTop
  ) {
    if (typeof alignToTop === "object")
      throw Error(formatProdErrorMessage(566));
    let children = [];
    traverseVisibleHostChildren(
      this._fragmentFiber.child,
      !1,
      collectChildren,
      children,
      void 0,
      void 0
    );
    let resolvedAlignToTop = !1 !== alignToTop;
    if (children.length === 0) {
      children = this._fragmentFiber;
      var result = [null, null];
      let parentHostFiber = getFragmentParentHostFiber(children);
      null !== parentHostFiber &&
        findFragmentInstanceSiblings(result, children, parentHostFiber.child);
      resolvedAlignToTop = resolvedAlignToTop
        ? result[1] ||
          result[0] ||
          getFragmentParentHostFiber(this._fragmentFiber)
        : result[0] || result[1];
      null !== resolvedAlignToTop &&
        getInstanceFromHostFiber(resolvedAlignToTop).scrollIntoView(alignToTop);
    } else
      for (
        result = resolvedAlignToTop ? children.length - 1 : 0;
        result !== (resolvedAlignToTop ? -1 : children.length);

      )
        getInstanceFromHostFiber(children[result]).scrollIntoView(alignToTop),
        (result += resolvedAlignToTop ? -1 : 1);
  });
function commitNewChildToFragmentInstance(childInstance, fragmentInstance) {
  let eventListeners = fragmentInstance._eventListeners;
  if (null !== eventListeners)
    for (let i = 0; i < eventListeners.length; i++) {
      let _eventListeners$i3 = eventListeners[i];
      childInstance.addEventListener(
        _eventListeners$i3.type,
        _eventListeners$i3.listener,
        _eventListeners$i3.optionsOrUseCapture
      );
    }
  null !== fragmentInstance._observers &&
    fragmentInstance._observers.forEach((observer) => {
      observer.observe(childInstance);
    });
}
function clearContainerSparingly(container) {
  let nextNode = container.firstChild;
  nextNode && nextNode.nodeType === 10 && (nextNode = nextNode.nextSibling);
  for (; nextNode; ) {
    let node = nextNode;
    nextNode = nextNode.nextSibling;
    switch (node.nodeName) {
    case "HTML":
    case "HEAD":
    case "BODY":
      clearContainerSparingly(node);
      detachDeletedInstance(node);
      continue;
    case "SCRIPT":
    case "STYLE":
      continue;
    case "LINK":
      if (node.rel.toLowerCase() === "stylesheet") continue;
    }
    container.removeChild(node);
  }
}
function canHydrateInstance(instance, type, props, inRootOrSingleton) {
  for (; instance.nodeType === 1; ) {
    let anyProps = props;
    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
      if (
        !inRootOrSingleton &&
        ("INPUT" !== instance.nodeName || "hidden" !== instance.type)
      )
        break;
    } else if (!inRootOrSingleton)
      if (type === "input" && instance.type === "hidden") {
        var name = anyProps.name == null ? null : "" + anyProps.name;
        if (
          anyProps.type === "hidden" &&
          instance.getAttribute("name") === name
        )
          return instance;
      } else return instance;
    else if (!instance[internalHoistableMarker])
      switch (type) {
      case "meta":
        if (!instance.hasAttribute("itemprop")) break;
        return instance;
      case "link":
        name = instance.getAttribute("rel");
        if (name === "stylesheet" && instance.hasAttribute("data-precedence"))
          break;
        else if (
          name !== anyProps.rel ||
            instance.getAttribute("href") !==
              (anyProps.href == null || anyProps.href === ""
                ? null
                : anyProps.href) ||
            instance.getAttribute("crossorigin") !==
              (anyProps.crossOrigin == null ? null : anyProps.crossOrigin) ||
            instance.getAttribute("title") !==
              (anyProps.title == null ? null : anyProps.title)
        )
          break;
        return instance;
      case "style":
        if (instance.hasAttribute("data-precedence")) break;
        return instance;
      case "script":
        name = instance.getAttribute("src");
        if (
          (name !== (anyProps.src == null ? null : anyProps.src) ||
              instance.getAttribute("type") !==
                (anyProps.type == null ? null : anyProps.type) ||
              instance.getAttribute("crossorigin") !==
                (anyProps.crossOrigin == null ? null : anyProps.crossOrigin)) &&
            name &&
            instance.hasAttribute("async") &&
            !instance.hasAttribute("itemprop")
        )
          break;
        return instance;
      default:
        return instance;
      }
    instance = getNextHydratable(instance.nextSibling);
    if (instance === null) break;
  }
  return null;
}
function canHydrateTextInstance(instance, text, inRootOrSingleton) {
  if (text === "") return null;
  for (; 3 !== instance.nodeType; ) {
    if (
      (1 !== instance.nodeType ||
        "INPUT" !== instance.nodeName ||
        "hidden" !== instance.type) &&
      !inRootOrSingleton
    )
      return null;
    instance = getNextHydratable(instance.nextSibling);
    if (instance === null) return null;
  }
  return instance;
}
function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
  for (; 8 !== instance.nodeType; ) {
    if (
      (1 !== instance.nodeType ||
        "INPUT" !== instance.nodeName ||
        "hidden" !== instance.type) &&
      !inRootOrSingleton
    )
      return null;
    instance = getNextHydratable(instance.nextSibling);
    if (instance === null) return null;
  }
  return instance;
}
function isSuspenseInstancePending(instance) {
  return instance.data === "$?" || instance.data === "$~";
}
function isSuspenseInstanceFallback(instance) {
  return (
    instance.data === "$!" ||
    (instance.data === "$?" && "loading" !== instance.ownerDocument.readyState)
  );
}
function registerSuspenseInstanceRetry(instance, callback) {
  let ownerDocument = instance.ownerDocument;
  if (instance.data === "$~") instance._reactRetry = callback;
  else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState)
    callback();
  else {
    let listener = function () {
      callback();
      ownerDocument.removeEventListener("DOMContentLoaded", listener);
    };
    ownerDocument.addEventListener("DOMContentLoaded", listener);
    instance._reactRetry = listener;
  }
}
function getNextHydratable(node) {
  for (; null != node; node = node.nextSibling) {
    let nodeType = node.nodeType;
    if (nodeType === 1 || nodeType === 3) break;
    if (nodeType === 8) {
      nodeType = node.data;
      if (
        nodeType === "$" ||
        nodeType === "$!" ||
        nodeType === "$?" ||
        nodeType === "$~" ||
        nodeType === "&" ||
        nodeType === "F!" ||
        nodeType === "F"
      )
        break;
      if (nodeType === "/$" || nodeType === "/&") return null;
    }
  }
  return node;
}
var previousHydratableOnEnteringScopedSingleton = null;
function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
  hydrationInstance = hydrationInstance.nextSibling;
  for (let depth = 0; hydrationInstance; ) {
    if (hydrationInstance.nodeType === 8) {
      let data = hydrationInstance.data;
      if (data === "/$" || data === "/&") {
        if (depth === 0)
          return getNextHydratable(hydrationInstance.nextSibling);
        depth--;
      } else
        ("$" !== data &&
          "$!" !== data &&
          "$?" !== data &&
          "$~" !== data &&
          "&" !== data) ||
          depth++;
    }
    hydrationInstance = hydrationInstance.nextSibling;
  }
  return null;
}
function getParentHydrationBoundary(targetInstance) {
  targetInstance = targetInstance.previousSibling;
  for (let depth = 0; targetInstance; ) {
    if (targetInstance.nodeType === 8) {
      let data = targetInstance.data;
      if (
        data === "$" ||
        data === "$!" ||
        data === "$?" ||
        data === "$~" ||
        data === "&"
      ) {
        if (depth === 0) return targetInstance;
        depth--;
      } else ("/$" !== data && "/&" !== data) || depth++;
    }
    targetInstance = targetInstance.previousSibling;
  }
  return null;
}
function setFocusIfFocusable(node, focusOptions) {
  function handleFocus() {
    didFocus = !0;
  }
  var didFocus = !1;
  try {
    node.addEventListener("focus", handleFocus),
    (node.focus || HTMLElement.prototype.focus).call(node, focusOptions);
  } finally {
    node.removeEventListener("focus", handleFocus);
  }
  return didFocus;
}
function requestPostPaintCallback(callback) {
  localRequestAnimationFrame(() => {
    localRequestAnimationFrame((time) => {
      return callback(time);
    });
  });
}
function resolveSingletonInstance(type, props, rootContainerInstance) {
  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
  switch (type) {
  case "html":
    type = props.documentElement;
    if (!type) throw Error(formatProdErrorMessage(452));
    return type;
  case "head":
    type = props.head;
    if (!type) throw Error(formatProdErrorMessage(453));
    return type;
  case "body":
    type = props.body;
    if (!type) throw Error(formatProdErrorMessage(454));
    return type;
  default:
    throw Error(formatProdErrorMessage(451));
  }
}
function releaseSingletonInstance(instance) {
  for (let attributes = instance.attributes; attributes.length; )
    instance.removeAttributeNode(attributes[0]);
  detachDeletedInstance(instance);
}
let preloadPropsMap = new Map();
let preconnectsSet = new Set();
function getHoistableRoot(container) {
  return typeof container.getRootNode === "function"
    ? container.getRootNode()
    : container.nodeType === 9
      ? container
      : container.ownerDocument;
}
let previousDispatcher = Internals.d;
Internals.d = {
  f: flushSyncWork,
  r: requestFormReset,
  D: prefetchDNS$1,
  C: preconnect$1,
  L: preload$1,
  m: preloadModule$1,
  X: preinitScript,
  S: preinitStyle,
  M: preinitModuleScript
};
function flushSyncWork() {
  let previousWasRendering = previousDispatcher.f();
  let wasRendering = flushSyncWork$1();
  return previousWasRendering || wasRendering;
}
export function requestFormReset(form) {
  let formInst = getInstanceFromNode(form); 
  null !== formInst && formInst.tag === 5 && formInst.type === "form"
    ? requestFormReset$1(formInst)
    : previousDispatcher.r(form);
}
let globalDocument = typeof document === "undefined" ? null : document;
function preconnectAs(rel, href, crossOrigin) {
  let ownerDocument = globalDocument;
  if (ownerDocument && typeof href === "string" && href) {
    let limitedEscapedHref =
      escapeSelectorAttributeValueInsideDoubleQuotes(href);
    limitedEscapedHref =
      'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
    typeof crossOrigin === "string" &&
      (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
    preconnectsSet.has(limitedEscapedHref) ||
      (preconnectsSet.add(limitedEscapedHref),
      (rel = { rel: rel, crossOrigin: crossOrigin, href: href }),
      ownerDocument.querySelector(limitedEscapedHref) === null &&
        ((href = ownerDocument.createElement("link")),
        setInitialProperties(href, "link", rel),
        markNodeAsHoistable(href),
        ownerDocument.head.appendChild(href)));
  }
}
function prefetchDNS$1(href) {
  previousDispatcher.D(href);
  preconnectAs("dns-prefetch", href, null);
}
function preconnect$1(href, crossOrigin) {
  previousDispatcher.C(href, crossOrigin);
  preconnectAs("preconnect", href, crossOrigin);
}
function preload$1(href, as, options) {
  previousDispatcher.L(href, as, options);
  let ownerDocument = globalDocument;
  if (ownerDocument && href && as) {
    let preloadSelector =
      'link[rel="preload"][as="' +
      escapeSelectorAttributeValueInsideDoubleQuotes(as) +
      '"]';
    as === "image"
      ? options && options.imageSrcSet
        ? ((preloadSelector +=
            '[imagesrcset="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(
              options.imageSrcSet
            ) +
            '"]'),
        typeof options.imageSizes === "string" &&
            (preloadSelector +=
              '[imagesizes="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                options.imageSizes
              ) +
              '"]'))
        : (preloadSelector +=
            '[href="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(href) +
            '"]')
      : (preloadSelector +=
          '[href="' +
          escapeSelectorAttributeValueInsideDoubleQuotes(href) +
          '"]');
    let key = preloadSelector;
    switch (as) {
    case "style":
      key = getStyleKey(href);
      break;
    case "script":
      key = getScriptKey(href);
    }
    preloadPropsMap.has(key) ||
      ((href = {
        rel: "preload",
        href:
            as === "image" && options && options.imageSrcSet ? void 0 : href,
        as: as,
        ...options
      }),
      preloadPropsMap.set(key, href),
      null !== ownerDocument.querySelector(preloadSelector) ||
        (as === "style" &&
          ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) ||
        (as === "script" &&
          ownerDocument.querySelector(getScriptSelectorFromKey(key))) ||
        ((as = ownerDocument.createElement("link")),
        setInitialProperties(as, "link", href),
        markNodeAsHoistable(as),
        ownerDocument.head.appendChild(as)));
  }
}
function preloadModule$1(href, options) {
  previousDispatcher.m(href, options);
  let ownerDocument = globalDocument;
  if (ownerDocument && href) {
    let as = options && typeof options.as === "string" ? options.as : "script";
    let preloadSelector =
        'link[rel="modulepreload"][as="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(as) +
        '"][href="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(href) +
        '"]';
    let key = preloadSelector;
    switch (as) {
    case "audioworklet":
    case "paintworklet":
    case "serviceworker":
    case "sharedworker":
    case "worker":
    case "script":
      key = getScriptKey(href);
    }
    if (
      !preloadPropsMap.has(key) &&
      ((href = {rel: "modulepreload", href: href, ...options}),
      preloadPropsMap.set(key, href),
      ownerDocument.querySelector(preloadSelector) === null)
    ) {
      switch (as) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
          return;
      }
      as = ownerDocument.createElement("link");
      setInitialProperties(as, "link", href);
      markNodeAsHoistable(as);
      ownerDocument.head.appendChild(as);
    }
  }
}
function preinitStyle(href, precedence, options) {
  previousDispatcher.S(href, precedence, options);
  let ownerDocument = globalDocument;
  if (ownerDocument && href) {
    let styles = getResourcesFromRoot(ownerDocument).hoistableStyles;
    let key = getStyleKey(href);
    precedence = precedence || "default";
    let resource = styles.get(key);
    if (!resource) {
      let state = { loading: 0, preload: null };
      if (
        (resource = ownerDocument.querySelector(
          getStylesheetSelectorFromKey(key)
        ))
      )
        state.loading = 5;
      else {
        href = {
          rel: "stylesheet", href: href, "data-precedence": precedence,
          ...options
        };
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForStylesheet(href, options);
        let link = (resource = ownerDocument.createElement("link"));
        markNodeAsHoistable(link);
        setInitialProperties(link, "link", href);
        link._p = new Promise((resolve, reject) => {
          link.onload = resolve;
          link.onerror = reject;
        });
        link.addEventListener("load", () => {
          state.loading |= 1;
        });
        link.addEventListener("error", () => {
          state.loading |= 2;
        });
        state.loading |= 4;
        insertStylesheet(resource, precedence, ownerDocument);
      }
      resource = {
        type: "stylesheet",
        instance: resource,
        count: 1,
        state: state
      };
      styles.set(key, resource);
    }
  }
}
function preinitScript(src, options) {
  previousDispatcher.X(src, options);
  let ownerDocument = globalDocument;
  if (ownerDocument && src) {
    let scripts = getResourcesFromRoot(ownerDocument).hoistableScripts;
    let key = getScriptKey(src);
    let resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = {src: src, async: !0, ...options}),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function preinitModuleScript(src, options) {
  previousDispatcher.M(src, options);
  let ownerDocument = globalDocument;
  if (ownerDocument && src) {
    let scripts = getResourcesFromRoot(ownerDocument).hoistableScripts;
    let key = getScriptKey(src);
    let resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = {src: src, async: !0, type: "module", ...options}),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function getResource(type, currentProps, pendingProps, currentResource) {
  var JSCompiler_inline_result = (JSCompiler_inline_result =
    rootInstanceStackCursor.current)
    ? getHoistableRoot(JSCompiler_inline_result)
    : null;
  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
  switch (type) {
  case "meta":
  case "title":
    return null;
  case "style":
    return typeof pendingProps.precedence === "string" &&
        typeof pendingProps.href === "string"
      ? ((currentProps = getStyleKey(pendingProps.href)),
      (pendingProps = getResourcesFromRoot(
        JSCompiler_inline_result
      ).hoistableStyles),
      (currentResource = pendingProps.get(currentProps)),
      currentResource ||
            ((currentResource = {
              type: "style",
              instance: null,
              count: 0,
              state: null
            }),
            pendingProps.set(currentProps, currentResource)),
      currentResource)
      : { type: "void", instance: null, count: 0, state: null };
  case "link":
    if (
      pendingProps.rel === "stylesheet" &&
        typeof pendingProps.href === "string" &&
        typeof pendingProps.precedence === "string"
    ) {
      type = getStyleKey(pendingProps.href);
      let styles$321 = getResourcesFromRoot(
        JSCompiler_inline_result
      ).hoistableStyles;
      let resource$322 = styles$321.get(type);
      resource$322 ||
          ((JSCompiler_inline_result =
            JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result),
          (resource$322 = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }),
          styles$321.set(type, resource$322),
          (styles$321 = JSCompiler_inline_result.querySelector(
            getStylesheetSelectorFromKey(type)
          )) &&
            !styles$321._p &&
            ((resource$322.instance = styles$321),
            (resource$322.state.loading = 5)),
          preloadPropsMap.has(type) ||
            ((pendingProps = {
              rel: "preload",
              as: "style",
              href: pendingProps.href,
              crossOrigin: pendingProps.crossOrigin,
              integrity: pendingProps.integrity,
              media: pendingProps.media,
              hrefLang: pendingProps.hrefLang,
              referrerPolicy: pendingProps.referrerPolicy
            }),
            preloadPropsMap.set(type, pendingProps),
            styles$321 ||
              preloadStylesheet(
                JSCompiler_inline_result,
                type,
                pendingProps,
                resource$322.state
              )));
      if (currentProps && currentResource === null)
        throw Error(formatProdErrorMessage(528, ""));
      return resource$322;
    }
    if (currentProps && null !== currentResource)
      throw Error(formatProdErrorMessage(529, ""));
    return null;
  case "script":
    return (
      (currentProps = pendingProps.async),
      (pendingProps = pendingProps.src),
      typeof pendingProps === "string" &&
        currentProps &&
        "function" !== typeof currentProps &&
        "symbol" !== typeof currentProps
        ? ((currentProps = getScriptKey(pendingProps)),
        (pendingProps = getResourcesFromRoot(
          JSCompiler_inline_result
        ).hoistableScripts),
        (currentResource = pendingProps.get(currentProps)),
        currentResource ||
              ((currentResource = {
                type: "script",
                instance: null,
                count: 0,
                state: null
              }),
              pendingProps.set(currentProps, currentResource)),
        currentResource)
        : { type: "void", instance: null, count: 0, state: null }
    );
  default:
    throw Error(formatProdErrorMessage(444, type));
  }
}
function getStyleKey(href) {
  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
}
function getStylesheetSelectorFromKey(key) {
  return 'link[rel="stylesheet"][' + key + "]";
}
function stylesheetPropsFromRawProps(rawProps) {
  return { ...rawProps, "data-precedence": rawProps.precedence,
    precedence: null};
}
function preloadStylesheet(ownerDocument, key, preloadProps, state) {
  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]")
    ? (state.loading = 1)
    : ((key = ownerDocument.createElement("link")),
    (state.preload = key),
    key.addEventListener("load", () => {
      return (state.loading |= 1);
    }),
    key.addEventListener("error", () => {
      return (state.loading |= 2);
    }),
    setInitialProperties(key, "link", preloadProps),
    markNodeAsHoistable(key),
    ownerDocument.head.appendChild(key));
}
function getScriptKey(src) {
  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
}
function getScriptSelectorFromKey(key) {
  return "script[async]" + key;
}
function acquireResource(hoistableRoot, resource, props) {
  resource.count++;
  if (resource.instance === null)
    switch (resource.type) {
    case "style":
      var instance = hoistableRoot.querySelector(
        'style[data-href~="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(props.href) +
            '"]'
      );
      if (instance)
        return (
          (resource.instance = instance),
          markNodeAsHoistable(instance),
          instance
        );
      var styleProps = { ...props, "data-href": props.href,
        "data-precedence": props.precedence,
        href: null,
        precedence: null};
      instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
        "style"
      );
      markNodeAsHoistable(instance);
      setInitialProperties(instance, "style", styleProps);
      insertStylesheet(instance, props.precedence, hoistableRoot);
      return (resource.instance = instance);
    case "stylesheet":
      styleProps = getStyleKey(props.href);
      var instance$327 = hoistableRoot.querySelector(
        getStylesheetSelectorFromKey(styleProps)
      );
      if (instance$327)
        return (
          (resource.state.loading |= 4),
          (resource.instance = instance$327),
          markNodeAsHoistable(instance$327),
          instance$327
        );
      instance = stylesheetPropsFromRawProps(props);
      (styleProps = preloadPropsMap.get(styleProps)) &&
          adoptPreloadPropsForStylesheet(instance, styleProps);
      instance$327 = (
        hoistableRoot.ownerDocument || hoistableRoot
      ).createElement("link");
      markNodeAsHoistable(instance$327);
      var linkInstance = instance$327;
      linkInstance._p = new Promise((resolve, reject) => {
        linkInstance.onload = resolve;
        linkInstance.onerror = reject;
      });
      setInitialProperties(instance$327, "link", instance);
      resource.state.loading |= 4;
      insertStylesheet(instance$327, props.precedence, hoistableRoot);
      return (resource.instance = instance$327);
    case "script":
      instance$327 = getScriptKey(props.src);
      if (
        (styleProps = hoistableRoot.querySelector(
          getScriptSelectorFromKey(instance$327)
        ))
      )
        return (
          (resource.instance = styleProps),
          markNodeAsHoistable(styleProps),
          styleProps
        );
      instance = props;
      if ((styleProps = preloadPropsMap.get(instance$327)))
        (instance = { ...props}),
        adoptPreloadPropsForScript(instance, styleProps);
      hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
      styleProps = hoistableRoot.createElement("script");
      markNodeAsHoistable(styleProps);
      setInitialProperties(styleProps, "link", instance);
      hoistableRoot.head.appendChild(styleProps);
      return (resource.instance = styleProps);
    case "void":
      return null;
    default:
      throw Error(formatProdErrorMessage(443, resource.type));
    }
  else
    resource.type === "stylesheet" &&
      (resource.state.loading & 4) === 0 &&
      ((instance = resource.instance),
      (resource.state.loading |= 4),
      insertStylesheet(instance, props.precedence, hoistableRoot));
  return resource.instance;
}
function insertStylesheet(instance, precedence, root) {
  for (
    var nodes = root.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      last = nodes.length ? nodes[nodes.length - 1] : null,
      prior = last,
      i = 0;
    i < nodes.length;
    i++
  ) {
    let node = nodes[i];
    if (node.dataset.precedence === precedence) prior = node;
    else if (prior !== last) break;
  }
  prior
    ? prior.parentNode.insertBefore(instance, prior.nextSibling)
    : ((precedence = root.nodeType === 9 ? root.head : root),
    precedence.insertBefore(instance, precedence.firstChild));
}
function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
  stylesheetProps.crossOrigin == null &&
    (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
  stylesheetProps.referrerPolicy == null &&
    (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
  stylesheetProps.title == null && (stylesheetProps.title = preloadProps.title);
}
function adoptPreloadPropsForScript(scriptProps, preloadProps) {
  scriptProps.crossOrigin == null &&
    (scriptProps.crossOrigin = preloadProps.crossOrigin);
  scriptProps.referrerPolicy == null &&
    (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
  scriptProps.integrity == null &&
    (scriptProps.integrity = preloadProps.integrity);
}
var tagCaches = null;
function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
  if (tagCaches === null) {
    var cache = new Map();
    var caches = (tagCaches = new Map());
    caches.set(ownerDocument, cache);
  } else
    (caches = tagCaches),
    (cache = caches.get(ownerDocument)),
    cache || ((cache = new Map()), caches.set(ownerDocument, cache));
  if (cache.has(type)) return cache;
  cache.set(type, null);
  ownerDocument = ownerDocument.getElementsByTagName(type);
  for (caches = 0; caches < ownerDocument.length; caches++) {
    let node = ownerDocument[caches];
    if (
      !(
        node[internalHoistableMarker] ||
        node[internalInstanceKey] ||
        (type === "link" && node.getAttribute("rel") === "stylesheet")
      ) &&
      "http://www.w3.org/2000/svg" !== node.namespaceURI
    ) {
      let nodeKey = node.getAttribute(keyAttribute) || "";
      nodeKey = type + nodeKey;
      let existing = cache.get(nodeKey);
      existing ? existing.push(node) : cache.set(nodeKey, [node]);
    }
  }
  return cache;
}
function mountHoistable(hoistableRoot, type, instance) {
  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
  hoistableRoot.head.insertBefore(
    instance,
    type === "title" ? hoistableRoot.querySelector("head > title") : null
  );
}
function isHostHoistableType(type, props, hostContext) {
  if (hostContext === 1 || null != props.itemProp) return !1;
  switch (type) {
  case "meta":
  case "title":
    return !0;
  case "style":
    if (
      "string" !== typeof props.precedence ||
        "string" !== typeof props.href ||
        props.href === ""
    )
      break;
    return !0;
  case "link":
    if (
      "string" !== typeof props.rel ||
        "string" !== typeof props.href ||
        props.href === "" ||
        props.onLoad ||
        props.onError
    )
      break;
    switch (props.rel) {
    case "stylesheet":
      return (
        (type = props.disabled),
        typeof props.precedence === "string" && type == null
      );
    default:
      return !0;
    }
  case "script":
    if (
      props.async &&
        "function" !== typeof props.async &&
        "symbol" !== typeof props.async &&
        !props.onLoad &&
        !props.onError &&
        props.src &&
        typeof props.src === "string"
    )
      return !0;
  }
  return !1;
}
function maySuspendCommit(type, props) {
  return enableViewTransition
    ? type === "img" &&
        null != props.src &&
        "" !== props.src &&
        props.onLoad == null &&
        "lazy" !== props.loading
    : !1;
}
function preloadResource(resource) {
  return resource.type === "stylesheet" && (resource.state.loading & 3) === 0
    ? !1
    : !0;
}
var suspendedState = null;
function suspendInstance(instance) {
  if (enableViewTransition) {
    if (suspendedState === null) throw Error(formatProdErrorMessage(475));
    let state = suspendedState;
    typeof instance.decode === "function" &&
      typeof setTimeout === "function" &&
      (state.count++,
      (state = onUnsuspend.bind(state)),
      Promise.race([
        instance.decode(),
        new Promise((resolve) => {
          return setTimeout(resolve, 500);
        })
      ]).then(state, state));
  }
}
function suspendResource(hoistableRoot, resource, props) {
  if (suspendedState === null) throw Error(formatProdErrorMessage(475));
  let state = suspendedState;
  if (
    resource.type === "stylesheet" &&
    ("string" !== typeof props.media ||
      !1 !== matchMedia(props.media).matches) &&
    (resource.state.loading & 4) === 0
  ) {
    if (resource.instance === null) {
      let key = getStyleKey(props.href);
      let instance = hoistableRoot.querySelector(
        getStylesheetSelectorFromKey(key)
      );
      if (instance) {
        hoistableRoot = instance._p;
        null !== hoistableRoot &&
          typeof hoistableRoot === "object" &&
          typeof hoistableRoot.then === "function" &&
          (state.count++,
          (state = onUnsuspend.bind(state)),
          hoistableRoot.then(state, state));
        resource.state.loading |= 4;
        resource.instance = instance;
        markNodeAsHoistable(instance);
        return;
      }
      instance = hoistableRoot.ownerDocument || hoistableRoot;
      props = stylesheetPropsFromRawProps(props);
      (key = preloadPropsMap.get(key)) &&
        adoptPreloadPropsForStylesheet(props, key);
      instance = instance.createElement("link");
      markNodeAsHoistable(instance);
      let linkInstance = instance;
      linkInstance._p = new Promise((resolve, reject) => {
        linkInstance.onload = resolve;
        linkInstance.onerror = reject;
      });
      setInitialProperties(instance, "link", props);
      resource.instance = instance;
    }
    state.stylesheets === null && (state.stylesheets = new Map());
    state.stylesheets.set(resource, hoistableRoot);
    (hoistableRoot = resource.state.preload) &&
      (resource.state.loading & 3) === 0 &&
      (state.count++,
      (resource = onUnsuspend.bind(state)),
      hoistableRoot.addEventListener("load", resource),
      hoistableRoot.addEventListener("error", resource));
  }
}
function waitForCommitToBeReady() {
  if (suspendedState === null) throw Error(formatProdErrorMessage(475));
  let state = suspendedState;
  state.stylesheets &&
    state.count === 0 &&
    insertSuspendedStylesheets(state, state.stylesheets);
  return 0 < state.count
    ? function (commit) {
      let stylesheetTimer = setTimeout(() => {
        state.stylesheets &&
            insertSuspendedStylesheets(state, state.stylesheets);
        if (state.unsuspend) {
          let unsuspend = state.unsuspend;
          state.unsuspend = null;
          unsuspend();
        }
      }, 6e4);
      state.unsuspend = commit;
      return function () {
        state.unsuspend = null;
        clearTimeout(stylesheetTimer);
      };
    }
    : null;
}
function onUnsuspend() {
  this.count--;
  if (this.count === 0)
    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
    else if (this.unsuspend) {
      let unsuspend = this.unsuspend;
      this.unsuspend = null;
      unsuspend();
    }
}
let precedencesByRoot = null;
function insertSuspendedStylesheets(state, resources) {
  state.stylesheets = null;
  null !== state.unsuspend &&
    (state.count++,
    (precedencesByRoot = new Map()),
    resources.forEach(insertStylesheetIntoRoot, state),
    (precedencesByRoot = null),
    onUnsuspend.call(state));
}
function insertStylesheetIntoRoot(root, resource) {
  if (!(resource.state.loading & 4)) {
    let precedences = precedencesByRoot.get(root);
    if (precedences) var last = precedences.get(null);
    else {
      precedences = new Map();
      precedencesByRoot.set(root, precedences);
      for (
        var nodes = root.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ),
          i = 0;
        i < nodes.length;
        i++
      ) {
        var node = nodes[i];
        if (
          node.nodeName === "LINK" ||
          "not all" !== node.getAttribute("media")
        )
          precedences.set(node.dataset.precedence, node), (last = node);
      }
      last && precedences.set(null, last);
    }
    nodes = resource.instance;
    node = nodes.getAttribute("data-precedence");
    i = precedences.get(node) || last;
    i === last && precedences.set(null, nodes);
    precedences.set(node, nodes);
    this.count++;
    last = onUnsuspend.bind(this);
    nodes.addEventListener("load", last);
    nodes.addEventListener("error", last);
    i
      ? i.parentNode.insertBefore(nodes, i.nextSibling)
      : ((root = root.nodeType === 9 ? root.head : root),
      root.insertBefore(nodes, root.firstChild));
    resource.state.loading |= 4;
  }
}
var HostTransitionContext = {
  $$typeof: REACT_CONTEXT_TYPE,
  Provider: null,
  Consumer: null,
  _currentValue: sharedNotPendingObject,
  _currentValue2: sharedNotPendingObject,
  _threadCount: 0
};
let randomKey = Math.random().toString(36).slice(2);
var internalInstanceKey = "__reactFiber$" + randomKey;
var internalPropsKey = "__reactProps$" + randomKey;
var internalContainerInstanceKey = "__reactContainer$" + randomKey;
let internalEventHandlersKey = "__reactEvents$" + randomKey;
var internalEventHandlerListenersKey = "__reactListeners$" + randomKey;
let internalEventHandlesSetKey = "__reactHandles$" + randomKey;
let internalRootNodeResourcesKey = "__reactResources$" + randomKey;
var internalHoistableMarker = "__reactMarker$" + randomKey;
var internalScrollTimer = "__reactScroll$" + randomKey;
function detachDeletedInstance(node) {
  delete node[internalInstanceKey];
  delete node[internalPropsKey];
  delete node[internalEventHandlersKey];
  delete node[internalEventHandlerListenersKey];
  delete node[internalEventHandlesSetKey];
}
function getClosestInstanceFromNode(targetNode) {
  let targetInst = targetNode[internalInstanceKey];
  if (targetInst) return targetInst;
  for (let parentNode = targetNode.parentNode; parentNode; ) {
    if (
      (targetInst =
        parentNode[internalContainerInstanceKey] ||
        parentNode[internalInstanceKey])
    ) {
      parentNode = targetInst.alternate;
      if (
        null !== targetInst.child ||
        (null !== parentNode && null !== parentNode.child)
      )
        for (
          targetNode = getParentHydrationBoundary(targetNode);
          null !== targetNode;

        ) {
          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
          targetNode = getParentHydrationBoundary(targetNode);
        }
      return targetInst;
    }
    targetNode = parentNode;
    parentNode = targetNode.parentNode;
  }
  return null;
}
function getInstanceFromNode(node) {
  if (
    (node = node[internalInstanceKey] || node[internalContainerInstanceKey])
  ) {
    let tag = node.tag;
    if (
      tag === 5 ||
      tag === 6 ||
      tag === 13 ||
      tag === 31 ||
      tag === 26 ||
      tag === 27 ||
      tag === 3
    )
      return node;
  }
  return null;
}
function getNodeFromInstance(inst) {
  let tag = inst.tag;
  if (tag === 5 || tag === 26 || tag === 27 || tag === 6) return inst.stateNode;
  throw Error(formatProdErrorMessage(33));
}
function getFiberCurrentPropsFromNode(node) {
  return node[internalPropsKey] || null;
}
function getEventListenerSet(node) {
  let elementListenerSet = node[internalEventHandlersKey];
  void 0 === elementListenerSet &&
    (elementListenerSet = node[internalEventHandlersKey] = new Set());
  return elementListenerSet;
}
function addEventHandleToTarget(target, eventHandle) {
  let eventHandles = target[internalEventHandlesSetKey];
  void 0 === eventHandles &&
    (eventHandles = target[internalEventHandlesSetKey] = new Set());
  eventHandles.add(eventHandle);
}
function doesTargetHaveEventHandle(target, eventHandle) {
  target = target[internalEventHandlesSetKey];
  return void 0 === target ? !1 : target.has(eventHandle);
}
function getResourcesFromRoot(root) {
  let resources = root[internalRootNodeResourcesKey];
  resources ||
    (resources = root[internalRootNodeResourcesKey] =
      { hoistableStyles: new Map(), hoistableScripts: new Map() });
  return resources;
}
function markNodeAsHoistable(node) {
  node[internalHoistableMarker] = !0;
}
let hasScheduledReplayAttempt = !1;
let queuedFocus = null;
let queuedDrag = null;
let queuedMouse = null;
let queuedPointers = new Map();
let queuedPointerCaptures = new Map();
let queuedExplicitHydrationTargets = [];
let discreteReplayableEvents =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
function clearIfContinuousEvent(domEventName, nativeEvent) {
  switch (domEventName) {
  case "focusin":
  case "focusout":
    queuedFocus = null;
    break;
  case "dragenter":
  case "dragleave":
    queuedDrag = null;
    break;
  case "mouseover":
  case "mouseout":
    queuedMouse = null;
    break;
  case "pointerover":
  case "pointerout":
    queuedPointers.delete(nativeEvent.pointerId);
    break;
  case "gotpointercapture":
  case "lostpointercapture":
    queuedPointerCaptures.delete(nativeEvent.pointerId);
  }
}
function accumulateOrCreateContinuousQueuedReplayableEvent(
  existingQueuedEvent,
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (
    existingQueuedEvent === null ||
    existingQueuedEvent.nativeEvent !== nativeEvent
  )
    return (
      (existingQueuedEvent = {
        blockedOn: blockedOn,
        domEventName: domEventName,
        eventSystemFlags: eventSystemFlags,
        nativeEvent: nativeEvent,
        targetContainers: [targetContainer]
      }),
      null !== blockedOn &&
        ((blockedOn = getInstanceFromNode(blockedOn)),
        null !== blockedOn && attemptContinuousHydration(blockedOn)),
      existingQueuedEvent
    );
  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
  blockedOn = existingQueuedEvent.targetContainers;
  null !== targetContainer &&
    blockedOn.indexOf(targetContainer) === -1 &&
    blockedOn.push(targetContainer);
  return existingQueuedEvent;
}
function queueIfContinuousEvent(
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  switch (domEventName) {
  case "focusin":
    return (
      (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
        queuedFocus,
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )),
      !0
    );
  case "dragenter":
    return (
      (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
        queuedDrag,
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )),
      !0
    );
  case "mouseover":
    return (
      (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
        queuedMouse,
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )),
      !0
    );
  case "pointerover":
    var pointerId = nativeEvent.pointerId;
    queuedPointers.set(
      pointerId,
      accumulateOrCreateContinuousQueuedReplayableEvent(
        queuedPointers.get(pointerId) || null,
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )
    );
    return !0;
  case "gotpointercapture":
    return (
      (pointerId = nativeEvent.pointerId),
      queuedPointerCaptures.set(
        pointerId,
        accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedPointerCaptures.get(pointerId) || null,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )
      ),
      !0
    );
  }
  return !1;
}
function attemptExplicitHydrationTarget(queuedTarget) {
  let targetInst = getClosestInstanceFromNode(queuedTarget.target);
  if (null !== targetInst) {
    let nearestMounted = getNearestMountedFiber(targetInst);
    if (null !== nearestMounted)
      if (((targetInst = nearestMounted.tag), targetInst === 13)) {
        if (
          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
          null !== targetInst)
        ) {
          queuedTarget.blockedOn = targetInst;
          runWithPriority(queuedTarget.priority, () => {
            attemptHydrationAtCurrentPriority(nearestMounted);
          });
          return;
        }
      } else if (targetInst === 31) {
        if (
          ((targetInst = getActivityInstanceFromFiber(nearestMounted)),
          null !== targetInst)
        ) {
          queuedTarget.blockedOn = targetInst;
          runWithPriority(queuedTarget.priority, () => {
            attemptHydrationAtCurrentPriority(nearestMounted);
          });
          return;
        }
      } else if (
        targetInst === 3 &&
        nearestMounted.stateNode.current.memoizedState.isDehydrated
      ) {
        queuedTarget.blockedOn =
          nearestMounted.tag === 3
            ? nearestMounted.stateNode.containerInfo
            : null;
        return;
      }
  }
  queuedTarget.blockedOn = null;
}
function attemptReplayContinuousQueuedEvent(queuedEvent) {
  if (null !== queuedEvent.blockedOn) return !1;
  for (
    let targetContainers = queuedEvent.targetContainers;
    0 < targetContainers.length;

  ) {
    let nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
    if (nextBlockedOn === null) {
      nextBlockedOn = queuedEvent.nativeEvent;
      let nativeEventClone = new nextBlockedOn.constructor(
        nextBlockedOn.type,
        nextBlockedOn
      );
      currentReplayingEvent = nativeEventClone;
      nextBlockedOn.target.dispatchEvent(nativeEventClone);
      currentReplayingEvent = null;
    } else
      return (
        (targetContainers = getInstanceFromNode(nextBlockedOn)),
        null !== targetContainers &&
          attemptContinuousHydration(targetContainers),
        (queuedEvent.blockedOn = nextBlockedOn),
        !1
      );
    targetContainers.shift();
  }
  return !0;
}
function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
}
function replayUnblockedEvents() {
  hasScheduledReplayAttempt = !1;
  null !== queuedFocus &&
    attemptReplayContinuousQueuedEvent(queuedFocus) &&
    (queuedFocus = null);
  null !== queuedDrag &&
    attemptReplayContinuousQueuedEvent(queuedDrag) &&
    (queuedDrag = null);
  null !== queuedMouse &&
    attemptReplayContinuousQueuedEvent(queuedMouse) &&
    (queuedMouse = null);
  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
}
function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
  queuedEvent.blockedOn === unblocked &&
    ((queuedEvent.blockedOn = null),
    hasScheduledReplayAttempt ||
      ((hasScheduledReplayAttempt = !0),
      Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
}
let lastScheduledReplayQueue = null;
function scheduleReplayQueueIfNeeded(formReplayingQueue) {
  lastScheduledReplayQueue !== formReplayingQueue &&
    ((lastScheduledReplayQueue = formReplayingQueue),
    Scheduler.unstable_scheduleCallback(
      Scheduler.unstable_NormalPriority,
      () => {
        lastScheduledReplayQueue === formReplayingQueue &&
          (lastScheduledReplayQueue = null);
        for (let i = 0; i < formReplayingQueue.length; i += 3) {
          let form = formReplayingQueue[i];
          let submitterOrAction = formReplayingQueue[i + 1];
          let formData = formReplayingQueue[i + 2];
          if ("function" !== typeof submitterOrAction)
            if (findInstanceBlockingTarget(submitterOrAction || form) === null)
              continue;
            else break;
          let formInst = getInstanceFromNode(form);
          null !== formInst &&
            (formReplayingQueue.splice(i, 3),
            (i -= 3),
            startHostTransition(
              formInst,
              {
                pending: !0,
                data: formData,
                method: form.method,
                action: submitterOrAction
              },
              submitterOrAction,
              formData
            ));
        }
      }
    ));
}
function retryIfBlockedOn(unblocked) {
  function unblock(queuedEvent) {
    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
  }
  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
  queuedPointers.forEach(unblock);
  queuedPointerCaptures.forEach(unblock);
  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
    var queuedTarget = queuedExplicitHydrationTargets[i];
    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
  }
  for (
    ;
    0 < queuedExplicitHydrationTargets.length &&
    ((i = queuedExplicitHydrationTargets[0]), i.blockedOn === null);

  )
    attemptExplicitHydrationTarget(i),
    i.blockedOn === null && queuedExplicitHydrationTargets.shift();
  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
  if (null != i)
    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
      let form = i[queuedTarget];
      let submitterOrAction = i[queuedTarget + 1];
      let formProps = getFiberCurrentPropsFromNode(form);
      if (typeof submitterOrAction === "function")
        formProps || scheduleReplayQueueIfNeeded(i);
      else if (formProps) {
        let action = null;
        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
          if (
            ((form = submitterOrAction),
            (formProps = getFiberCurrentPropsFromNode(submitterOrAction)))
          )
            action = formProps.formAction;
          else {
            if (null !== findInstanceBlockingTarget(form)) continue;
          }
        else action = formProps.action;
        typeof action === "function"
          ? (i[queuedTarget + 1] = action)
          : (i.splice(queuedTarget, 3), (queuedTarget -= 3));
        scheduleReplayQueueIfNeeded(i);
      }
    }
}
var _enabled = !0;
function createEventListenerWrapperWithPriority(
  targetContainer,
  domEventName,
  eventSystemFlags
) {
  switch (getEventPriority(domEventName)) {
  case 2:
    var listenerWrapper = dispatchDiscreteEvent;
    break;
  case 8:
    listenerWrapper = dispatchContinuousEvent;
    break;
  default:
    listenerWrapper = dispatchEvent;
  }
  return listenerWrapper.bind(
    null,
    domEventName,
    eventSystemFlags,
    targetContainer
  );
}
function dispatchDiscreteEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  let prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  let previousPriority = Internals.p;
  try {
    (Internals.p = 2),
    dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (Internals.p = previousPriority), (ReactSharedInternals.T = prevTransition);
  }
}
function dispatchContinuousEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  let prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  let previousPriority = Internals.p;
  try {
    (Internals.p = 8),
    dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (Internals.p = previousPriority), (ReactSharedInternals.T = prevTransition);
  }
}
function dispatchEvent(
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (_enabled) {
    let blockedOn = findInstanceBlockingEvent(nativeEvent);
    if (blockedOn === null)
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        return_targetInst,
        targetContainer
      ),
      clearIfContinuousEvent(domEventName, nativeEvent);
    else if (
      queueIfContinuousEvent(
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )
    )
      nativeEvent.stopPropagation();
    else if (
      (clearIfContinuousEvent(domEventName, nativeEvent),
      eventSystemFlags & 4 &&
        -1 < discreteReplayableEvents.indexOf(domEventName))
    ) {
      for (; null !== blockedOn; ) {
        let fiber = getInstanceFromNode(blockedOn);
        if (null !== fiber)
          switch (fiber.tag) {
          case 3:
            fiber = fiber.stateNode;
            if (fiber.current.memoizedState.isDehydrated) {
              let lanes = getHighestPriorityLanes(fiber.pendingLanes);
              if (0 !== lanes) {
                var root = fiber;
                root.pendingLanes |= 2;
                for (root.entangledLanes |= 2; lanes; ) {
                  let lane = 1 << (31 - clz32(lanes));
                  root.entanglements[1] |= lane;
                  lanes &= ~lane;
                }
                ensureRootIsScheduled(fiber);
                (executionContext & 6) === 0 &&
                    ((workInProgressRootRenderTargetTime = now$1() + 500),
                    flushSyncWorkAcrossRoots_impl(0, !1));
              }
            }
            break;
          case 31:
          case 13:
            (root = enqueueConcurrentRenderForLane(fiber, 2)),
            null !== root && scheduleUpdateOnFiber(root, fiber, 2),
            flushSyncWork$1(),
            markRetryLaneIfNotHydrated(fiber, 2);
          }
        fiber = findInstanceBlockingEvent(nativeEvent);
        fiber === null &&
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            return_targetInst,
            targetContainer
          );
        if (fiber === blockedOn) break;
        blockedOn = fiber;
      }
      null !== blockedOn && nativeEvent.stopPropagation();
    } else
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        null,
        targetContainer
      );
  }
}
function findInstanceBlockingEvent(nativeEvent) {
  nativeEvent = getEventTarget(nativeEvent);
  return findInstanceBlockingTarget(nativeEvent);
}
var return_targetInst = null;
function findInstanceBlockingTarget(targetNode) {
  return_targetInst = null;
  targetNode = getClosestInstanceFromNode(targetNode);
  if (null !== targetNode) {
    let nearestMounted = getNearestMountedFiber(targetNode);
    if (nearestMounted === null) targetNode = null;
    else {
      let tag = nearestMounted.tag;
      if (tag === 13) {
        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
        if (null !== targetNode) return targetNode;
        targetNode = null;
      } else if (tag === 31) {
        targetNode = getActivityInstanceFromFiber(nearestMounted);
        if (null !== targetNode) return targetNode;
        targetNode = null;
      } else if (tag === 3) {
        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
          return nearestMounted.tag === 3
            ? nearestMounted.stateNode.containerInfo
            : null;
        targetNode = null;
      } else nearestMounted !== targetNode && (targetNode = null);
    }
  }
  return_targetInst = targetNode;
  return null;
}
function getEventPriority(domEventName) {
  switch (domEventName) {
  case "beforetoggle":
  case "cancel":
  case "click":
  case "close":
  case "contextmenu":
  case "copy":
  case "cut":
  case "auxclick":
  case "dblclick":
  case "dragend":
  case "dragstart":
  case "drop":
  case "focusin":
  case "focusout":
  case "input":
  case "invalid":
  case "keydown":
  case "keypress":
  case "keyup":
  case "mousedown":
  case "mouseup":
  case "paste":
  case "pause":
  case "play":
  case "pointercancel":
  case "pointerdown":
  case "pointerup":
  case "ratechange":
  case "reset":
  case "resize":
  case "seeked":
  case "submit":
  case "toggle":
  case "touchcancel":
  case "touchend":
  case "touchstart":
  case "volumechange":
  case "change":
  case "selectionchange":
  case "textInput":
  case "compositionstart":
  case "compositionend":
  case "compositionupdate":
  case "beforeblur":
  case "afterblur":
  case "beforeinput":
  case "blur":
  case "fullscreenchange":
  case "focus":
  case "hashchange":
  case "popstate":
  case "select":
  case "selectstart":
    return 2;
  case "drag":
  case "dragenter":
  case "dragexit":
  case "dragleave":
  case "dragover":
  case "mousemove":
  case "mouseout":
  case "mouseover":
  case "pointermove":
  case "pointerout":
  case "pointerover":
  case "scroll":
  case "touchmove":
  case "wheel":
  case "mouseenter":
  case "mouseleave":
  case "pointerenter":
  case "pointerleave":
    return 8;
  case "message":
    switch (getCurrentPriorityLevel()) {
    case ImmediatePriority:
      return 2;
    case UserBlockingPriority:
      return 8;
    case NormalPriority$1:
    case LowPriority:
      return 32;
    case IdlePriority:
      return 268435456;
    default:
      return 32;
    }
  default:
    return 32;
  }
}
function isValidContainer(node) {
  return !(
    !node ||
    (1 !== node.nodeType &&
      9 !== node.nodeType &&
      11 !== node.nodeType &&
      (8 !== node.nodeType ||
        " react-mount-point-unstable " !== node.nodeValue))
  );
}
function registerReactDOMEvent(target, domEventName, isCapturePhaseListener) {
  if (
    1 !== target.nodeType &&
    "function" !== typeof target.getChildContextValues
  )
    if (typeof target.addEventListener === "function") {
      let eventSystemFlags = 1;
      let listenerSet = getEventListenerSet(target);
      let listenerSetKey =
          domEventName + "__" + (isCapturePhaseListener ? "capture" : "bubble");
      listenerSet.has(listenerSetKey) ||
        (isCapturePhaseListener && (eventSystemFlags |= 4),
        addTrappedEventListener(
          target,
          domEventName,
          eventSystemFlags,
          isCapturePhaseListener
        ),
        listenerSet.add(listenerSetKey));
    } else throw Error(formatProdErrorMessage(369));
}
function getCrossOriginStringAs(as, input) {
  if (as === "font") return "";
  if (typeof input === "string")
    return input === "use-credentials" ? input : "";
}
let isomorphicReactPackageVersion$jscomp$inline_2361 = React.version;
if (
  "19.2.0-www-classic-2710795a-20250903" !==
  isomorphicReactPackageVersion$jscomp$inline_2361
)
  throw Error(
    formatProdErrorMessage(
      527,
      isomorphicReactPackageVersion$jscomp$inline_2361,
      "19.2.0-www-classic-2710795a-20250903"
    )
  );
Internals.findDOMNode = function (componentOrElement) {
  return findHostInstance(componentOrElement);
};
Internals.Events = [
  getInstanceFromNode,
  getNodeFromInstance,
  getFiberCurrentPropsFromNode,
  enqueueStateRestore,
  restoreStateIfNeeded,
  function (fn, a) {
    return fn(a);
  }
];
let internals$jscomp$inline_2363 = {
  bundleType: 0,
  version: "19.2.0-www-classic-2710795a-20250903",
  rendererPackageName: "react-dom",
  currentDispatcherRef: ReactSharedInternals,
  reconcilerVersion: "19.2.0-www-classic-2710795a-20250903"
};
enableSchedulingProfiler &&
  ((internals$jscomp$inline_2363.getLaneLabelMap = getLaneLabelMap),
  (internals$jscomp$inline_2363.injectProfilingHooks = injectProfilingHooks));
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  let hook$jscomp$inline_2981 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (
    !hook$jscomp$inline_2981.isDisabled &&
    hook$jscomp$inline_2981.supportsFiber
  )
    try {
      (rendererID = hook$jscomp$inline_2981.inject(
        internals$jscomp$inline_2363
      )),
      (injectedHook = hook$jscomp$inline_2981);
    } catch (err) {}
}
function defaultOnDefaultTransitionIndicator() {
  function handleNavigate(event) {
    event.canIntercept &&
      event.info === "react-transition" &&
      event.intercept({
        handler: function () {
          return new Promise((resolve) => {
            return (pendingResolve = resolve);
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
  }
  function handleNavigateComplete() {
    null !== pendingResolve && (pendingResolve(), (pendingResolve = null));
    isCancelled || setTimeout(startFakeNavigation, 20);
  }
  function startFakeNavigation() {
    if (!isCancelled && !navigation.transition) {
      let currentEntry = navigation.currentEntry;
      currentEntry &&
        null != currentEntry.url &&
        navigation.navigate(currentEntry.url, {
          state: currentEntry.getState(),
          info: "react-transition",
          history: "replace"
        });
    }
  }
  if (typeof navigation === "object") {
    var isCancelled = !1;
    var pendingResolve = null;
    navigation.addEventListener("navigate", handleNavigate);
    navigation.addEventListener("navigatesuccess", handleNavigateComplete);
    navigation.addEventListener("navigateerror", handleNavigateComplete);
    setTimeout(startFakeNavigation, 100);
    return function () {
      isCancelled = !0;
      navigation.removeEventListener("navigate", handleNavigate);
      navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
      navigation.removeEventListener("navigateerror", handleNavigateComplete);
      null !== pendingResolve && (pendingResolve(), (pendingResolve = null));
    };
  }
}
function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
  function (children) {
    let root = this._internalRoot;
    if (root === null) throw Error(formatProdErrorMessage(409));
    let current = root.current;
    let lane = requestUpdateLane();
    updateContainerImpl(current, lane, children, root, null, null);
  };
ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount =
  function () {
    let root = this._internalRoot;
    if (null !== root) {
      this._internalRoot = null;
      let container = root.containerInfo;
      updateContainerImpl(root.current, 2, null, root, null, null);
      flushSyncWork$1();
      container[internalContainerInstanceKey] = null;
    }
  };
function ReactDOMHydrationRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function (target) {
  if (target) {
    let updatePriority = resolveUpdatePriority();
    target = { blockedOn: null, target: target, priority: updatePriority };
    for (
      var i = 0;
      i < queuedExplicitHydrationTargets.length &&
      0 !== updatePriority &&
      updatePriority < queuedExplicitHydrationTargets[i].priority;
      i++
    );
    queuedExplicitHydrationTargets.splice(i, 0, target);
    i === 0 && attemptExplicitHydrationTarget(target);
  }
};

if ("function" !== typeof ReactFiberErrorDialogWWW.showErrorDialog)
  throw Error(formatProdErrorMessage(320));
function wwwOnUncaughtError(error, errorInfo) {
  !1 !==
    ReactFiberErrorDialogWWW.showErrorDialog({
      errorBoundary: null,
      error: error,
      componentStack:
        null != errorInfo.componentStack ? errorInfo.componentStack : ""
    }) && reportGlobalError(error);
}
function wwwOnCaughtError(error, errorInfo) {
  !1 !==
    ReactFiberErrorDialogWWW.showErrorDialog({
      errorBoundary: errorInfo.errorBoundary,
      error: error,
      componentStack:
        null != errorInfo.componentStack ? errorInfo.componentStack : ""
    }) && defaultOnCaughtError(error);
}
assign(Internals, {
  ReactBrowserEventEmitter: {
    isEnabled: function () {
      return _enabled;
    }
  }
});
export const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  Internals;
export const createPortal = function (children, container) {
  let key =
    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  return createPortal$1(children, container, null, key);
};
export const createRoot = function (container, options$jscomp$0) {
  let options = {
    onUncaughtError: wwwOnUncaughtError,
    onCaughtError: wwwOnCaughtError,
    onDefaultTransitionIndicator: noop$1,
    ...options$jscomp$0
  };
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  options$jscomp$0 = !1;
  let identifierPrefix = "";
  let onUncaughtError = defaultOnUncaughtError;
  let onCaughtError = defaultOnCaughtError;
  let onRecoverableError = defaultOnRecoverableError;
  let onDefaultTransitionIndicator = defaultOnDefaultTransitionIndicator;
  let transitionCallbacks = null;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (options$jscomp$0 = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onUncaughtError &&
      (onUncaughtError = options.onUncaughtError),
    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError),
    void 0 !== options.onDefaultTransitionIndicator &&
      (onDefaultTransitionIndicator = options.onDefaultTransitionIndicator),
    void 0 !== options.unstable_transitionCallbacks &&
      (transitionCallbacks = options.unstable_transitionCallbacks));
  options = onDefaultTransitionIndicator;
  options$jscomp$0 = createFiberRoot(
    container,
    1,
    !1,
    null,
    null,
    options$jscomp$0,
    identifierPrefix,
    null,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    options,
    transitionCallbacks
  );
  registerDefaultIndicator(options);
  container[internalContainerInstanceKey] = options$jscomp$0.current;
  listenToAllSupportedEvents(
    container.nodeType === 8 ? container.parentNode : container
  );
  return new ReactDOMRoot(options$jscomp$0);
};
export const findDOMNode = function (componentOrElement) {
  return componentOrElement == null
    ? null
    : componentOrElement.nodeType === 1
      ? componentOrElement
      : findHostInstance(componentOrElement);
};
export const flushSync = function (fn) {
  let previousTransition = ReactSharedInternals.T;
  let previousUpdatePriority = Internals.p;
  try {
    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
  } finally {
    (ReactSharedInternals.T = previousTransition),
    (Internals.p = previousUpdatePriority),
    Internals.d.f();
  }
};
export const hydrateRoot = function (container, initialChildren, options) {
  options = {
    onUncaughtError: wwwOnUncaughtError,
    onCaughtError: wwwOnCaughtError,
    onDefaultTransitionIndicator: noop$1,
    ...options
  };
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  let isStrictMode = !1;
  let identifierPrefix = "";
  let onUncaughtError = defaultOnUncaughtError;
  let onCaughtError = defaultOnCaughtError;
  let onRecoverableError = defaultOnRecoverableError;
  let onDefaultTransitionIndicator = defaultOnDefaultTransitionIndicator;
  let transitionCallbacks = null;
  let formState = null;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (isStrictMode = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onUncaughtError &&
      (onUncaughtError = options.onUncaughtError),
    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError),
    void 0 !== options.onDefaultTransitionIndicator &&
      (onDefaultTransitionIndicator = options.onDefaultTransitionIndicator),
    void 0 !== options.unstable_transitionCallbacks &&
      (transitionCallbacks = options.unstable_transitionCallbacks),
    void 0 !== options.formState && (formState = options.formState));
  initialChildren = createFiberRoot(
    container,
    1,
    !0,
    initialChildren,
    null != options ? options : null,
    isStrictMode,
    identifierPrefix,
    formState,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    onDefaultTransitionIndicator,
    transitionCallbacks
  );
  registerDefaultIndicator(onDefaultTransitionIndicator);
  initialChildren.context = getContextForSubtree(null);
  options = initialChildren.current;
  isStrictMode = requestUpdateLane();
  isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
  identifierPrefix = createUpdate(isStrictMode);
  identifierPrefix.callback = null;
  enqueueUpdate(options, identifierPrefix, isStrictMode);
  startUpdateTimerByLane(isStrictMode);
  options = isStrictMode;
  initialChildren.current.lanes = options;
  markRootUpdated(initialChildren, options);
  ensureRootIsScheduled(initialChildren);
  container[internalContainerInstanceKey] = initialChildren.current;
  listenToAllSupportedEvents(container);
  return new ReactDOMHydrationRoot(initialChildren);
};
export const preconnect = function (href, options) {
  typeof href === "string" &&
    (options
      ? ((options = options.crossOrigin),
      (options =
          typeof options === "string"
            ? options === "use-credentials"
              ? options
              : ""
            : void 0))
      : (options = null),
    Internals.d.C(href, options));
};
export const prefetchDNS = function (href) {
  typeof href === "string" && Internals.d.D(href);
};
export const preinit = function (href, options) {
  if (typeof href === "string" && options && typeof options.as === "string") {
    let as = options.as;
    let crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    let integrity =
        typeof options.integrity === "string" ? options.integrity : void 0;
    let fetchPriority =
        typeof options.fetchPriority === "string"
          ? options.fetchPriority
          : void 0;
    as === "style"
      ? Internals.d.S(
        href,
        typeof options.precedence === "string" ? options.precedence : void 0,
        {
          crossOrigin: crossOrigin,
          integrity: integrity,
          fetchPriority: fetchPriority
        }
      )
      : as === "script" &&
        Internals.d.X(href, {
          crossOrigin: crossOrigin,
          integrity: integrity,
          fetchPriority: fetchPriority,
          nonce: typeof options.nonce === "string" ? options.nonce : void 0
        });
  }
};
export const preinitModule = function (href, options) {
  if (typeof href === "string")
    if (typeof options === "object" && null !== options) {
      if (options.as == null || options.as === "script") {
        let crossOrigin = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        );
        Internals.d.M(href, {
          crossOrigin: crossOrigin,
          integrity:
            typeof options.integrity === "string" ? options.integrity : void 0,
          nonce: typeof options.nonce === "string" ? options.nonce : void 0
        });
      }
    } else options == null && Internals.d.M(href);
};
export const preload = function (href, options) {
  if (
    typeof href === "string" &&
    typeof options === "object" &&
    null !== options &&
    typeof options.as === "string"
  ) {
    let as = options.as;
    let crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    Internals.d.L(href, as, {
      crossOrigin: crossOrigin,
      integrity:
        typeof options.integrity === "string" ? options.integrity : void 0,
      nonce: typeof options.nonce === "string" ? options.nonce : void 0,
      type: typeof options.type === "string" ? options.type : void 0,
      fetchPriority:
        typeof options.fetchPriority === "string"
          ? options.fetchPriority
          : void 0,
      referrerPolicy:
        typeof options.referrerPolicy === "string"
          ? options.referrerPolicy
          : void 0,
      imageSrcSet:
        typeof options.imageSrcSet === "string" ? options.imageSrcSet : void 0,
      imageSizes:
        typeof options.imageSizes === "string" ? options.imageSizes : void 0,
      media: typeof options.media === "string" ? options.media : void 0
    });
  }
};
export const preloadModule = function (href, options) {
  if (typeof href === "string")
    if (options) {
      let crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      Internals.d.m(href, {
        as:
          typeof options.as === "string" && "script" !== options.as
            ? options.as
            : void 0,
        crossOrigin: crossOrigin,
        integrity:
          typeof options.integrity === "string" ? options.integrity : void 0
      });
    } else Internals.d.m(href);
};
export const render = function () {
  throw Error(formatProdErrorMessage(509));
};
requestFormReset = function (form) {
  Internals.d.r(form);
};
export const unmountComponentAtNode = function () {
  throw Error(formatProdErrorMessage(509));
};
export const unstable_batchedUpdates = function (fn, a) {
  return fn(a);
};
export const unstable_createEventHandle = function (type, options) {
  function eventHandle(target, callback) {
    if ("function" !== typeof callback)
      throw Error(formatProdErrorMessage(370));
    doesTargetHaveEventHandle(target, eventHandle) ||
      (addEventHandleToTarget(target, eventHandle),
      registerReactDOMEvent(target, type, isCapturePhaseListener));
    let listener = {
      callback: callback,
      capture: isCapturePhaseListener,
      type: type
    };
    let targetListeners = target[internalEventHandlerListenersKey] || null;
    targetListeners === null &&
      ((targetListeners = new Set()),
      (target[internalEventHandlerListenersKey] = targetListeners));
    targetListeners.add(listener);
    return function () {
      targetListeners.delete(listener);
    };
  }
  if (!allNativeEvents.has(type))
    throw Error(formatProdErrorMessage(372, type));
  var isCapturePhaseListener = !1;
  null != options &&
    ((options = options.capture),
    typeof options === "boolean" && (isCapturePhaseListener = options));
  return eventHandle;
};
export const unstable_runWithPriority = runWithPriority;
export const useFormState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
};
export const useFormStatus = function () {
  return ReactSharedInternals.H.useHostTransitionStatus();
};
export const version = "19.2.0-www-classic-2710795a-20250903";
"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    "function" &&
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());

export default {
  version,
  useFormStatus,
  useFormState,
  unstable_runWithPriority,
  unstable_createEventHandle,
  unstable_batchedUpdates,
  unmountComponentAtNode,
  requestFormReset,
  render,
  preloadModule,
  preload,
  preinitModule,
  preinit,
  prefetchDNS,
  preconnect,
  hydrateRoot,
  flushSync,
  findDOMNode,
  createRoot,
  createPortal,
  __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
}
