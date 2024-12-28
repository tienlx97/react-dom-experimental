
 function addEventBubbleListener(
  target,
  eventType,
  listener,
) {
  target.addEventListener(eventType, listener, false);
  return listener;
}

 function addEventCaptureListener(
  target,
  eventType,
  listener,
) {
  target.addEventListener(eventType, listener, true);
  return listener;
}

 function addEventCaptureListenerWithPassiveFlag(
  target,
  eventType,
  listener,
  passive,
) {
  target.addEventListener(eventType, listener, {
    capture: true,
    passive,
  });
  return listener;
}

 function addEventBubbleListenerWithPassiveFlag(
  target,
  eventType,
  listener,
  passive,
) {
  target.addEventListener(eventType, listener, {
    passive,
  });
  return listener;
}

 function removeEventListener(
  target,
  eventType,
  listener,
  capture,
) {
  target.removeEventListener(eventType, listener, capture);
}


function h(a, b, d, e) {
  if (a.addEventListener) {
      a.addEventListener(b, d, e);
      return {
          remove: function() {
              a.removeEventListener(b, d, e)
          }
      }
  } else
      throw Error('Attempted to listen to eventType "' + b + '" on a target that does not have addEventListener.', "comet_ui")
}

function captureWithPassiveFlag(
  a, 
  b, 
  c, 
  d
) {
  return h(a, b, c, {
    capture: !0,
    passive: d
  });
}

 function bubbleWithPassiveFlag(a, b, c, d) {
            return h(a, b, c, {
                capture: !1,
                passive: d
            })
        }

        function listen(a, b, c) {
            return h(a, b, c, !1)
        }

          function capture(a, b, c) {
            return h(a, b, c, !0)
        }


module.exports = {
  addEventBubbleListener,
  addEventCaptureListener,
  addEventCaptureListenerWithPassiveFlag,
  addEventBubbleListenerWithPassiveFlag,
  removeEventListener,captureWithPassiveFlag,bubbleWithPassiveFlag,listen, capture
};
