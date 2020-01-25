function openConf(t) {
  $("#ms-configurator").animate({ right: "0px" }, 400),
    $(".ms-configurator-btn").animate({ right: "-60px" }, 200);
}

function closeConf() {
  $("#ms-configurator").animate({ right: "-310px" }, 200),
    $(".ms-configurator-btn").animate({ right: "20px" }, 400);
}

function slidebar() {
  var t = $(".ms-slidebar"),
    o = $(".ms-site-container"),
    n = $(".ms-toggle-left"),
    e = !1,
    i = !1;
  n.click(function() {
    (i = i ? (t.removeClass("open"), !1) : (t.addClass("open"), !0)), (e = !0);
  }),
    o.click(function() {
      !e && i && (t.removeClass("open"), (i = !1)), (e = !1);
    });
}

$(document).ready(function() {
  //document.addEventListener("touchstart", function() {}, !0), $.material.init();
  //new SmoothScroll("[data-scroll]");
  //$('[data-toggle="tooltip"]').tooltip(),
  //$('[data-toggle="popover"]').popover(),
    //$("#status").fadeOut(),
    //$("#ms-preload")
    //  .delay(350)
    //  .fadeOut("slow"),
    //$("body")
    //  .delay(350)
    //  .css({ overflow: "visible" }),
    //new WOW().init();
  //Array.from(document.querySelectorAll(".js-player")).map(function(t) {
  //  return new Plyr(t);
  //});
  //$(".counter").counterUp({ delay: 10, time: 2e3 }), slidebar();
  //$(".ms-slider").slider();
  $(".nav-link").click(function(evt) {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    //$("ul li").addClass(function(index) {
    //  return "item-" + index;
    //});
    });

  var t,
    o = $(".btn-back-top");
  $(window).scroll(function() {
    400 < $(this).scrollTop()
      ? o.addClass("back-show")
      : o.removeClass("back-show");
  }),
    (t = jQuery)(function() {
      t(document).off("click.bs.tab.data-api", '[data-hover="tab"]'),
        t(document).on(
          "mouseenter.bs.tab.data-api",
          '[data-hover="tab"]',
          function() {
            t(this).tab("show");
          }
        );
    }),
    $(".navbar").on(
      "click mousedown mouseup touchstart",
      "a.has_children",
      function() {
        return (
          $(this)
            .next("ul")
            .hasClass("open_t") &&
          !$(this)
            .parents("ul")
            .hasClass("open_t")
            ? $(".open_t").removeClass("open_t")
            : ($(".open_t")
                .not($(this).parents("ul"))
                .removeClass("open_t"),
              $(this)
                .next("ul")
                .addClass("open_t")),
          !1
        );
      }
    ),
    $(document).on("click", ":not(.has_children, .has_children *)", function() {
      if (0 < $(".open_t").length)
        return (
          $(".open_t").removeClass("open_t"),
          $(".open_t")
            .parent()
            .removeClass("open"),
          !1
        );
    });
  var n = $(".ms-navbar"),
    e = ($(".navbar-nav"), $("body")),
    i = $(".ms-site-container").hasClass("ms-nav-fixed");
  $(window).scroll(function() {
    i ||
      (120 < $(window).scrollTop() &&
        (n.addClass("shrink"),
        e.addClass("bd-scroll"),
        n.addClass("fixed-top")),
      $(window).scrollTop() < 121 &&
        (n.removeClass("shrink"),
        e.removeClass("bd-scroll"),
        n.removeClass("fixed-top")));
  });
//,
//    $("#datePicker").datepicker({
//      orientation: "bottom left",
//      autoclose: !0,
//      todayHighlight: !0
//    });
//  var a = $(".masonry-container");
//  a.imagesLoaded(function() {
//    a.masonry({ columnWidth: ".masonry-item", itemSelector: ".masonry-item" });
//  });
  var s = !1;
  $(".ms-conf-btn").click(function() {
    s ? ((s = !1), closeConf()) : ((s = !0), openConf());
  }),
    $(".ms-site-container").click(function() {
      s && ((s = !1), closeConf());
    });
}),
  (function(t) {
    t(".input-number .btn-circle:first-of-type").on("click", function() {
      t(".input-number input").val(
        parseInt(t(".input-number input").val(), 10) - 1
      );
    }),
      t(".input-number .btn-circle:last-of-type").on("click", function() {
        t(".input-number input").val(
          parseInt(t(".input-number input").val(), 10) + 1
        );
      });
  })(jQuery),
  (function(c, p, t) {
    var u = c();
    (c.fn.dropdownHover = function(l) {
      return "ontouchstart" in document
        ? this
        : ((u = u.add(this.parent())),
          this.each(function() {
            var o,
              n,
              e = c(this),
              i = e.parent(),
              t = {
                delay: c(this).data("delay"),
                hoverDelay: c(this).data("hover-delay"),
                instantlyCloseOthers: c(this).data("close-others")
              },
              a = "show.bs.dropdown",
              s = c.extend(
                !0,
                {},
                { delay: 0, hoverDelay: 0, instantlyCloseOthers: !0 },
                l,
                t
              );
            function r(t) {
              p.clearTimeout(o),
                p.clearTimeout(n),
                (n = p.setTimeout(function() {
                  u.find(":focus").blur(),
                    !0 === s.instantlyCloseOthers && u.removeClass("show"),
                    p.clearTimeout(n),
                    e.attr("aria-expanded", "true"),
                    i.addClass("show"),
                    e.trigger(a);
                }, s.hoverDelay));
            }
            i.hover(
              function(t) {
                if (!i.hasClass("show") && !e.is(t.target)) return !0;
                767 < c(p).width() && r(t);
              },
              function() {
                767 < c(p).width() &&
                  (p.clearTimeout(n),
                  (o = p.setTimeout(function() {
                    e.attr("aria-expanded", "false"),
                      i.removeClass("show"),
                      e.trigger("hide.bs.dropdown");
                  }, s.delay)));
              }
            ),
              e.hover(function(t) {
                if (
                  !i.hasClass("show") &&
                  !i.is(t.target) &&
                  767 < c(p).width()
                )
                  return !0;
                767 < c(p).width() && r(t);
              }),
              i.find(".dropdown-submenu").each(function() {
                var o,
                  n = c(this);
                n.hover(
                  function() {
                    p.clearTimeout(o),
                      n.children(".dropdown-menu").show(),
                      n
                        .siblings()
                        .children(".dropdown-menu")
                        .hide();
                  },
                  function() {
                    var t = n.children(".dropdown-menu");
                    o = p.setTimeout(function() {
                      t.hide();
                    }, s.delay);
                  }
                );
              });
          }));
    }),
      c(document).ready(function() {
        c('[data-hover="dropdown"]').dropdownHover();
      });
  })(jQuery, window),
  (function(a) {
    function s(t) {
      var o = a(t);
      o.prop("disabled") || o.closest(".form-group").addClass("is-focused");
    }
    function o(t) {
      var i = !1;
      (t.is(a.material.options.checkboxElements) ||
        t.is(a.material.options.radioElements)) &&
        (i = !0),
        t.closest("label").hover(
          function() {
            var t,
              o,
              n = a(this).find("input"),
              e = n.prop("disabled");
            i &&
              ((t = a(this)),
              (o = e),
              (t.hasClass("checkbox-inline") || t.hasClass("radio-inline")
                ? t
                : t.closest(".checkbox").length
                ? t.closest(".checkbox")
                : t.closest(".radio")
              ).toggleClass("disabled", o)),
              e || s(n);
          },
          function() {
            n(a(this).find("input"));
          }
        );
    }
    function n(t) {
      a(t)
        .closest(".form-group")
        .removeClass("is-focused");
    }
    (a.expr[":"].notmdproc = function(t) {
      return !a(t).data("mdproc");
    }),
      (a.material = {
        options: {
          validate: !0,
          input: !0,
          ripples: !0,
          checkbox: !0,
          togglebutton: !0,
          radio: !0,
          arrive: !0,
          autofill: !1,
          withRipples: [
            ".btn:not(.btn-link)",
            ".card-image",
            ".navbar a:not(.withoutripple)",
            ".dropdown-menu a",
            ".nav-tabs a:not(.withoutripple)",
            ".withripple",
            ".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"
          ].join(","),
          inputElements:
            "input.form-control, textarea.form-control, select.form-control",
          checkboxElements:
            ".checkbox > label > input[type=checkbox], label.checkbox-inline > input[type=checkbox]",
          togglebuttonElements: ".togglebutton > label > input[type=checkbox]",
          radioElements:
            ".radio > label > input[type=radio], label.radio-inline > input[type=radio]"
        },
        checkbox: function(t) {
          o(
            a(t || this.options.checkboxElements)
              .filter(":notmdproc")
              .data("mdproc", !0)
              .after(
                "<span class='checkbox-material'><span class='check'></span></span>"
              )
          );
        },
        togglebutton: function(t) {
          o(
            a(t || this.options.togglebuttonElements)
              .filter(":notmdproc")
              .data("mdproc", !0)
              .after("<span class='toggle'></span>")
          );
        },
        radio: function(t) {
          o(
            a(t || this.options.radioElements)
              .filter(":notmdproc")
              .data("mdproc", !0)
              .after("<span class='circle'></span><span class='check'></span>")
          );
        },
        input: function(t) {
          a(t || this.options.inputElements)
            .filter(":notmdproc")
            .data("mdproc", !0)
            .each(function() {
              var n = a(this),
                e = n.closest(".form-group");
              0 !== e.length ||
                "hidden" === n.attr("type") ||
                n.attr("hidden") ||
                (n.wrap("<div class='form-group'></div>"),
                (e = n.closest(".form-group"))),
                n.attr("data-hint") &&
                  (n.after(
                    "<p class='help-block'>" + n.attr("data-hint") + "</p>"
                  ),
                  n.removeAttr("data-hint"));
              if (
                (a.each(
                  { "input-lg": "form-group-lg", "input-sm": "form-group-sm" },
                  function(t, o) {
                    n.hasClass(t) && (n.removeClass(t), e.addClass(o));
                  }
                ),
                n.hasClass("floating-label"))
              ) {
                var t = n.attr("placeholder");
                n.attr("placeholder", null).removeClass("floating-label");
                var o = n.attr("id"),
                  i = "";
                o && (i = "for='" + o + "'"),
                  e.addClass("label-floating"),
                  n.after(
                    "<label " + i + "class='control-label'>" + t + "</label>"
                  );
              }
              (null !== n.val() && "undefined" != n.val() && "" !== n.val()) ||
                e.addClass("is-empty"),
                0 < e.find("input[type=file]").length &&
                  e.addClass("is-fileinput");
            });
        },
        attachInputEventHandlers: function() {
          var e = this.options.validate;
          a(document)
            .on("keydown paste", ".form-control", function(t) {
              var o;
              (void 0 === (o = t).which ||
                ("number" == typeof o.which &&
                  0 < o.which &&
                  !o.ctrlKey &&
                  !o.metaKey &&
                  !o.altKey &&
                  8 != o.which &&
                  9 != o.which &&
                  13 != o.which &&
                  16 != o.which &&
                  17 != o.which &&
                  20 != o.which &&
                  27 != o.which)) &&
                a(this)
                  .closest(".form-group")
                  .removeClass("is-empty");
            })
            .on("keyup change", ".form-control", function() {
              var t = a(this),
                o = t.closest(".form-group"),
                n = void 0 === t[0].checkValidity || t[0].checkValidity();
              "" === t.val()
                ? o.addClass("is-empty")
                : o.removeClass("is-empty"),
                e && (n ? o.removeClass("has-error") : o.addClass("has-error"));
            })
            .on("focus", ".form-control, .form-group.is-fileinput", function() {
              s(this);
            })
            .on("blur", ".form-control, .form-group.is-fileinput", function() {
              n(this);
            })
            .on("change", ".form-group input", function() {
              var t = a(this);
              if ("file" != t.attr("type")) {
                var o = t.closest(".form-group");
                t.val() ? o.removeClass("is-empty") : o.addClass("is-empty");
              }
            })
            .on(
              "change",
              ".form-group.is-fileinput input[type='file']",
              function() {
                var t = a(this).closest(".form-group"),
                  n = "";
                a.each(this.files, function(t, o) {
                  n += o.name + ", ";
                }),
                  (n = n.substring(0, n.length - 2))
                    ? t.removeClass("is-empty")
                    : t.addClass("is-empty"),
                  t.find("input.form-control[readonly]").val(n);
              }
            );
        },
        ripples: function(t) {
          a(t || this.options.withRipples).ripples();
        },
        autofill: function() {
          var t = setInterval(function() {
            a("input[type!=checkbox]").each(function() {
              var t = a(this);
              t.val() && t.val() !== t.attr("value") && t.trigger("change");
            });
          }, 100);
          setTimeout(function() {
            clearInterval(t);
          }, 1e4);
        },
        attachAutofillEventHandlers: function() {
          var o;
          a(document)
            .on("focus", "input", function() {
              var t = a(this)
                .parents("form")
                .find("input")
                .not("[type=file]");
              o = setInterval(function() {
                t.each(function() {
                  var t = a(this);
                  t.val() !== t.attr("value") && t.trigger("change");
                });
              }, 100);
            })
            .on("blur", ".form-group input", function() {
              clearInterval(o);
            });
        },
        init: function(t) {
          (this.options = a.extend({}, this.options, t)),
            a.fn.ripples && this.options.ripples && this.ripples(),
            this.options.input &&
              (this.input(), this.attachInputEventHandlers()),
            this.options.checkbox && this.checkbox(),
            this.options.togglebutton && this.togglebutton(),
            this.options.radio && this.radio(),
            this.options.autofill &&
              (this.autofill(), this.attachAutofillEventHandlers()),
            document.arrive &&
              this.options.arrive &&
              (a.fn.ripples &&
                this.options.ripples &&
                document.arrive(this.options.withRipples, function() {
                  a.material.ripples(a(this));
                }),
              this.options.input &&
                document.arrive(this.options.inputElements, function() {
                  a.material.input(a(this));
                }),
              this.options.checkbox &&
                document.arrive(this.options.checkboxElements, function() {
                  a.material.checkbox(a(this));
                }),
              this.options.radio &&
                document.arrive(this.options.radioElements, function() {
                  a.material.radio(a(this));
                }),
              this.options.togglebutton &&
                document.arrive(this.options.togglebuttonElements, function() {
                  a.material.togglebutton(a(this));
                }));
        }
      });
  })(jQuery),
  (function(r, l, o, n) {
    "use strict";
    var e = "ripples",
      c = null,
      i = {};
    function a(t, o) {
      ((c = this).element = r(t)),
        (this.options = r.extend({}, i, o)),
        (this._defaults = i),
        (this._name = e),
        this.init();
    }
    (a.prototype.init = function() {
      var s = this.element;
      s.on("mousedown touchstart", function(t) {
        if (!c.isTouch() || "mousedown" !== t.type) {
          s.find(".ripple-container").length ||
            s.append('<div class="ripple-container"></div>');
          var o = s.children(".ripple-container"),
            n = c.getRelY(o, t),
            e = c.getRelX(o, t);
          if (n || e) {
            var i = c.getRipplesColor(s),
              a = r("<div></div>");
            a
              .addClass("ripple")
              .css({ left: e, top: n, "background-color": i }),
              o.append(a),
              l.getComputedStyle(a[0]).opacity,
              c.rippleOn(s, a),
              setTimeout(function() {
                c.rippleEnd(a);
              }, 500),
              s.on("mouseup mouseleave touchend", function() {
                a.data("mousedown", "off"),
                  "off" === a.data("animating") && c.rippleOut(a);
              });
          }
        }
      });
    }),
      (a.prototype.getNewSize = function(t, o) {
        return (
          (Math.max(t.outerWidth(), t.outerHeight()) / o.outerWidth()) * 2.5
        );
      }),
      (a.prototype.getRelX = function(t, o) {
        var n = t.offset();
        return c.isTouch()
          ? 1 === (o = o.originalEvent).touches.length &&
              o.touches[0].pageX - n.left
          : o.pageX - n.left;
      }),
      (a.prototype.getRelY = function(t, o) {
        var n = t.offset();
        return c.isTouch()
          ? 1 === (o = o.originalEvent).touches.length &&
              o.touches[0].pageY - n.top
          : o.pageY - n.top;
      }),
      (a.prototype.getRipplesColor = function(t) {
        return t.data("ripple-color")
          ? t.data("ripple-color")
          : l.getComputedStyle(t[0]).color;
      }),
      (a.prototype.hasTransitionSupport = function() {
        var t = (o.body || o.documentElement).style;
        return (
          t.transition !== n ||
          t.WebkitTransition !== n ||
          t.MozTransition !== n ||
          t.MsTransition !== n ||
          t.OTransition !== n
        );
      }),
      (a.prototype.isTouch = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      }),
      (a.prototype.rippleEnd = function(t) {
        t.data("animating", "off"),
          "off" === t.data("mousedown") && c.rippleOut(t);
      }),
      (a.prototype.rippleOut = function(t) {
        t.off(),
          c.hasTransitionSupport()
            ? t.addClass("ripple-out")
            : t.animate({ opacity: 0 }, 100, function() {
                t.trigger("transitionend");
              }),
          t.on(
            "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            function() {
              t.remove();
            }
          );
      }),
      (a.prototype.rippleOn = function(t, o) {
        var n = c.getNewSize(t, o);
        c.hasTransitionSupport()
          ? o
              .css({
                "-ms-transform": "scale(" + n + ")",
                "-moz-transform": "scale(" + n + ")",
                "-webkit-transform": "scale(" + n + ")",
                transform: "scale(" + n + ")"
              })
              .addClass("ripple-on")
              .data("animating", "on")
              .data("mousedown", "on")
          : o.animate(
              {
                width: 2 * Math.max(t.outerWidth(), t.outerHeight()),
                height: 2 * Math.max(t.outerWidth(), t.outerHeight()),
                "margin-left": -1 * Math.max(t.outerWidth(), t.outerHeight()),
                "margin-top": -1 * Math.max(t.outerWidth(), t.outerHeight()),
                opacity: 0.2
              },
              500,
              function() {
                o.trigger("transitionend");
              }
            );
      }),
      (r.fn.ripples = function(t) {
        return this.each(function() {
          r.data(this, "plugin_" + e) ||
            r.data(this, "plugin_" + e, new a(this, t));
        });
      });
  })(jQuery, window, document),
  (window.onresize = tabs);
var handler = window.onresize;
function tabs() {
  for (var t = $(".nav.nav-tabs"), i = {}, a = {}, o = 0; o < t.length; o++) {
    var n = o + 1,
      s = $(t[o]).children(),
      e = $(t[o]).children().length;
    $(s[s.length - 1]).hasClass("ms-tabs-indicator") ||
      ($(t[o]).data("id", n),
      $(t[o]).append(
        '<span id="i' + n + '" class="ms-tabs-indicator"></span>'
      ));
    var r = $("#i" + n);
    (i["tabW" + n] = []), (a["tabL" + n] = []);
    var l = i["tabW" + n],
      c = a["tabL" + n],
      p = 0;
    for (m = 0; m < e; m++)
      (c[m] = p),
        (l[m] = $(s[m]).width()),
        $(s[m])
          .children()
          .hasClass("active") &&
          r.css({ left: c[m] + "px", width: l[m] + "px" }),
        (p += l[m]);
  }
  $(".nav.nav-tabs > li").click(function(t) {
    var o = (s = $(this).parent()).data("id");
    s.children().removeClass("current"), $(this).addClass("current");
    for (var n = s.children(), e = 0; e < n.length - 1; e++)
      $(n[e]).hasClass("current") &&
        $("#i" + o).css({
          left: a["tabL" + o][e] + "px",
          width: i["tabW" + o][e] + "px"
        });
  });
}
handler.apply(window, [" On"]),
  $("#ms-account-modal").on("shown.bs.modal", function(t) {
    setTimeout(tabs, 700);
  });


function submitFormToHubSpot(form)
{  
    this.preventDefault();
    /*d47cfea0-1bc7-4de1-b2cd-68a12bc37a47*/

    var xhr = new XMLHttpRequest();
    var url =
      "https://api.hsforms.com/submissions/v3/integration/submit/62515/4072f3c9-130a-4281-8b4f-3c85ab3e1a88?hapikey=d47cfea0-1bc7-4de1-b2cd-68a12bc37a47";
    var epoch = Date.now()

    // Example request JSON:
    var data = {
      submittedAt: epoch,
      fields: [
        {
          name: "email",
          value: "chrisandrew@outlook.com"
        },
        {
          name: "Chris",
          value: "Jeff"
        }
      ],
      legalConsentOptions: {
        // Include this object when GDPR options are enabled
        consent: {
          consentToProcess: true,
          text:
            "I agree to allow Healthcare Environment to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text:
                "I agree to receive marketing communications from Healthcare Environment."
            }
          ]
        }
      }
    };

    var final_data = JSON.stringify(data);
    alert(final_data);

    xhr.open("POST", url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        alert(xhr.responseText); // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState == 4 && xhr.status == 403) {
        alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState == 4 && xhr.status == 404) {
        alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    };

    // Sends the request

    xhr.send(final_data);    

}