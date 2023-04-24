(self.webpackChunkmedium_ng = self.webpackChunkmedium_ng || []).push([
  [179],
  {
    4064: (V, R, E) => {
      'use strict';
      var M = {};
      E.r(M),
        E.d(M, {
          exclude: () => lD,
          extract: () => Tl,
          parse: () => bu,
          parseUrl: () => Wh,
          pick: () => Pl,
          stringify: () => Il,
          stringifyUrl: () => Ol,
        });
      var a = E(4650);
      let G = null;
      function Z() {
        return G;
      }
      class H {}
      const k = new a.OlP('DocumentToken');
      let x = (() => {
        class e {
          historyGo(t) {
            throw new Error('Not implemented');
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = a.Yz7({
            token: e,
            factory: function () {
              return (function P() {
                return (0, a.LFG)(O);
              })();
            },
            providedIn: 'platform',
          })),
          e
        );
      })();
      const b = new a.OlP('Location Initialized');
      let O = (() => {
        class e extends x {
          constructor(t) {
            super(),
              (this._doc = t),
              (this._location = window.location),
              (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return Z().getBaseHref(this._doc);
          }
          onPopState(t) {
            const i = Z().getGlobalEventTarget(this._doc, 'window');
            return (
              i.addEventListener('popstate', t, !1), () => i.removeEventListener('popstate', t)
            );
          }
          onHashChange(t) {
            const i = Z().getGlobalEventTarget(this._doc, 'window');
            return (
              i.addEventListener('hashchange', t, !1), () => i.removeEventListener('hashchange', t)
            );
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(t) {
            this._location.pathname = t;
          }
          pushState(t, i, u) {
            I() ? this._history.pushState(t, i, u) : (this._location.hash = u);
          }
          replaceState(t, i, u) {
            I() ? this._history.replaceState(t, i, u) : (this._location.hash = u);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(t = 0) {
            this._history.go(t);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(k));
          }),
          (e.ɵprov = a.Yz7({
            token: e,
            factory: function () {
              return (function W() {
                return new O((0, a.LFG)(k));
              })();
            },
            providedIn: 'platform',
          })),
          e
        );
      })();
      function I() {
        return !!window.history.pushState;
      }
      function q(e, n) {
        if (0 == e.length) return n;
        if (0 == n.length) return e;
        let t = 0;
        return (
          e.endsWith('/') && t++,
          n.startsWith('/') && t++,
          2 == t ? e + n.substring(1) : 1 == t ? e + n : e + '/' + n
        );
      }
      function ie(e) {
        const n = e.match(/#|\?|$/),
          t = (n && n.index) || e.length;
        return e.slice(0, t - ('/' === e[t - 1] ? 1 : 0)) + e.slice(t);
      }
      function ye(e) {
        return e && '?' !== e[0] ? '?' + e : e;
      }
      let ee = (() => {
        class e {
          historyGo(t) {
            throw new Error('Not implemented');
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = a.Yz7({
            token: e,
            factory: function () {
              return (0, a.f3M)(ae);
            },
            providedIn: 'root',
          })),
          e
        );
      })();
      const Ee = new a.OlP('appBaseHref');
      let ae = (() => {
          class e extends ee {
            constructor(t, i) {
              super(),
                (this._platformLocation = t),
                (this._removeListenerFns = []),
                (this._baseHref =
                  i ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, a.f3M)(k).location?.origin ??
                  '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return q(this._baseHref, t);
            }
            path(t = !1) {
              const i = this._platformLocation.pathname + ye(this._platformLocation.search),
                u = this._platformLocation.hash;
              return u && t ? `${i}${u}` : i;
            }
            pushState(t, i, u, f) {
              const h = this.prepareExternalUrl(u + ye(f));
              this._platformLocation.pushState(t, i, h);
            }
            replaceState(t, i, u, f) {
              const h = this.prepareExternalUrl(u + ye(f));
              this._platformLocation.replaceState(t, i, h);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(x), a.LFG(Ee, 8));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        ge = (() => {
          class e extends ee {
            constructor(t, i) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != i && (this._baseHref = i);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let i = this._platformLocation.hash;
              return null == i && (i = '#'), i.length > 0 ? i.substring(1) : i;
            }
            prepareExternalUrl(t) {
              const i = q(this._baseHref, t);
              return i.length > 0 ? '#' + i : i;
            }
            pushState(t, i, u, f) {
              let h = this.prepareExternalUrl(u + ye(f));
              0 == h.length && (h = this._platformLocation.pathname),
                this._platformLocation.pushState(t, i, h);
            }
            replaceState(t, i, u, f) {
              let h = this.prepareExternalUrl(u + ye(f));
              0 == h.length && (h = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, i, h);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(x), a.LFG(Ee, 8));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        ce = (() => {
          class e {
            constructor(t) {
              (this._subject = new a.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = t);
              const i = this._locationStrategy.getBaseHref();
              (this._basePath = (function be(e) {
                if (new RegExp('^(https?:)?//').test(e)) {
                  const [, t] = e.split(/\/\/[^\/]+/);
                  return t;
                }
                return e;
              })(ie(me(i)))),
                this._locationStrategy.onPopState((u) => {
                  this._subject.emit({ url: this.path(!0), pop: !0, state: u.state, type: u.type });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(), (this._urlChangeListeners = []);
            }
            path(t = !1) {
              return this.normalize(this._locationStrategy.path(t));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(t, i = '') {
              return this.path() == this.normalize(t + ye(i));
            }
            normalize(t) {
              return e.stripTrailingSlash(
                (function Me(e, n) {
                  if (!e || !n.startsWith(e)) return n;
                  const t = n.substring(e.length);
                  return '' === t || ['/', ';', '?', '#'].includes(t[0]) ? t : n;
                })(this._basePath, me(t))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && '/' !== t[0] && (t = '/' + t), this._locationStrategy.prepareExternalUrl(t)
              );
            }
            go(t, i = '', u = null) {
              this._locationStrategy.pushState(u, '', t, i),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + ye(i)), u);
            }
            replaceState(t, i = '', u = null) {
              this._locationStrategy.replaceState(u, '', t, i),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + ye(i)), u);
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(t = 0) {
              this._locationStrategy.historyGo?.(t);
            }
            onUrlChange(t) {
              return (
                this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((i) => {
                    this._notifyUrlChangeListeners(i.url, i.state);
                  })),
                () => {
                  const i = this._urlChangeListeners.indexOf(t);
                  this._urlChangeListeners.splice(i, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(t = '', i) {
              this._urlChangeListeners.forEach((u) => u(t, i));
            }
            subscribe(t, i, u) {
              return this._subject.subscribe({ next: t, error: i, complete: u });
            }
          }
          return (
            (e.normalizeQueryParams = ye),
            (e.joinWithSlash = q),
            (e.stripTrailingSlash = ie),
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(ee));
            }),
            (e.ɵprov = a.Yz7({
              token: e,
              factory: function () {
                return (function re() {
                  return new ce((0, a.LFG)(ee));
                })();
              },
              providedIn: 'root',
            })),
            e
          );
        })();
      function me(e) {
        return e.replace(/\/index.html$/, '');
      }
      var ft = (() => (
          ((ft = ft || {})[(ft.Format = 0)] = 'Format'),
          (ft[(ft.Standalone = 1)] = 'Standalone'),
          ft
        ))(),
        Qe = (() => (
          ((Qe = Qe || {})[(Qe.Narrow = 0)] = 'Narrow'),
          (Qe[(Qe.Abbreviated = 1)] = 'Abbreviated'),
          (Qe[(Qe.Wide = 2)] = 'Wide'),
          (Qe[(Qe.Short = 3)] = 'Short'),
          Qe
        ))(),
        St = (() => (
          ((St = St || {})[(St.Short = 0)] = 'Short'),
          (St[(St.Medium = 1)] = 'Medium'),
          (St[(St.Long = 2)] = 'Long'),
          (St[(St.Full = 3)] = 'Full'),
          St
        ))(),
        j = (() => (
          ((j = j || {})[(j.Decimal = 0)] = 'Decimal'),
          (j[(j.Group = 1)] = 'Group'),
          (j[(j.List = 2)] = 'List'),
          (j[(j.PercentSign = 3)] = 'PercentSign'),
          (j[(j.PlusSign = 4)] = 'PlusSign'),
          (j[(j.MinusSign = 5)] = 'MinusSign'),
          (j[(j.Exponential = 6)] = 'Exponential'),
          (j[(j.SuperscriptingExponent = 7)] = 'SuperscriptingExponent'),
          (j[(j.PerMille = 8)] = 'PerMille'),
          (j[(j.Infinity = 9)] = 'Infinity'),
          (j[(j.NaN = 10)] = 'NaN'),
          (j[(j.TimeSeparator = 11)] = 'TimeSeparator'),
          (j[(j.CurrencyDecimal = 12)] = 'CurrencyDecimal'),
          (j[(j.CurrencyGroup = 13)] = 'CurrencyGroup'),
          j
        ))();
      function Le(e, n) {
        return An((0, a.cg1)(e)[a.wAp.DateFormat], n);
      }
      function Dt(e, n) {
        return An((0, a.cg1)(e)[a.wAp.TimeFormat], n);
      }
      function st(e, n) {
        return An((0, a.cg1)(e)[a.wAp.DateTimeFormat], n);
      }
      function ht(e, n) {
        const t = (0, a.cg1)(e),
          i = t[a.wAp.NumberSymbols][n];
        if (typeof i > 'u') {
          if (n === j.CurrencyDecimal) return t[a.wAp.NumberSymbols][j.Decimal];
          if (n === j.CurrencyGroup) return t[a.wAp.NumberSymbols][j.Group];
        }
        return i;
      }
      function Qo(e) {
        if (!e[a.wAp.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              e[a.wAp.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function An(e, n) {
        for (let t = n; t > -1; t--) if (typeof e[t] < 'u') return e[t];
        throw new Error('Locale data API: locale data undefined');
      }
      function Re(e) {
        const [n, t] = e.split(':');
        return { hours: +n, minutes: +t };
      }
      const ea =
          /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        kr = {},
        zt =
          /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      var xt = (() => (
          ((xt = xt || {})[(xt.Short = 0)] = 'Short'),
          (xt[(xt.ShortGMT = 1)] = 'ShortGMT'),
          (xt[(xt.Long = 2)] = 'Long'),
          (xt[(xt.Extended = 3)] = 'Extended'),
          xt
        ))(),
        ke = (() => (
          ((ke = ke || {})[(ke.FullYear = 0)] = 'FullYear'),
          (ke[(ke.Month = 1)] = 'Month'),
          (ke[(ke.Date = 2)] = 'Date'),
          (ke[(ke.Hours = 3)] = 'Hours'),
          (ke[(ke.Minutes = 4)] = 'Minutes'),
          (ke[(ke.Seconds = 5)] = 'Seconds'),
          (ke[(ke.FractionalSeconds = 6)] = 'FractionalSeconds'),
          (ke[(ke.Day = 7)] = 'Day'),
          ke
        ))(),
        We = (() => (
          ((We = We || {})[(We.DayPeriods = 0)] = 'DayPeriods'),
          (We[(We.Days = 1)] = 'Days'),
          (We[(We.Months = 2)] = 'Months'),
          (We[(We.Eras = 3)] = 'Eras'),
          We
        ))();
      function So(e, n, t, i) {
        let u = (function Wn(e) {
          if (Zi(e)) return e;
          if ('number' == typeof e && !isNaN(e)) return new Date(e);
          if ('string' == typeof e) {
            if (((e = e.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e))) {
              const [u, f = 1, h = 1] = e.split('-').map((_) => +_);
              return bo(u, f - 1, h);
            }
            const t = parseFloat(e);
            if (!isNaN(e - t)) return new Date(t);
            let i;
            if ((i = e.match(ea)))
              return (function mt(e) {
                const n = new Date(0);
                let t = 0,
                  i = 0;
                const u = e[8] ? n.setUTCFullYear : n.setFullYear,
                  f = e[8] ? n.setUTCHours : n.setHours;
                e[9] && ((t = Number(e[9] + e[10])), (i = Number(e[9] + e[11]))),
                  u.call(n, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
                const h = Number(e[4] || 0) - t,
                  _ = Number(e[5] || 0) - i,
                  v = Number(e[6] || 0),
                  C = Math.floor(1e3 * parseFloat('0.' + (e[7] || 0)));
                return f.call(n, h, _, v, C), n;
              })(i);
          }
          const n = new Date(e);
          if (!Zi(n)) throw new Error(`Unable to convert "${e}" into a date`);
          return n;
        })(e);
        n = Ln(t, n) || n;
        let _,
          h = [];
        for (; n; ) {
          if (((_ = zt.exec(n)), !_)) {
            h.push(n);
            break;
          }
          {
            h = h.concat(_.slice(1));
            const w = h.pop();
            if (!w) break;
            n = w;
          }
        }
        let v = u.getTimezoneOffset();
        i &&
          ((v = Zn(i, v)),
          (u = (function ar(e, n, t) {
            const i = t ? -1 : 1,
              u = e.getTimezoneOffset();
            return (function Er(e, n) {
              return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + n), e;
            })(e, i * (Zn(n, u) - u));
          })(u, i, !0)));
        let C = '';
        return (
          h.forEach((w) => {
            const F = (function ld(e) {
              if (ta[e]) return ta[e];
              let n;
              switch (e) {
                case 'G':
                case 'GG':
                case 'GGG':
                  n = pt(We.Eras, Qe.Abbreviated);
                  break;
                case 'GGGG':
                  n = pt(We.Eras, Qe.Wide);
                  break;
                case 'GGGGG':
                  n = pt(We.Eras, Qe.Narrow);
                  break;
                case 'y':
                  n = Tt(ke.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  n = Tt(ke.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  n = Tt(ke.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  n = Tt(ke.FullYear, 4, 0, !1, !0);
                  break;
                case 'Y':
                  n = Mo(1);
                  break;
                case 'YY':
                  n = Mo(2, !0);
                  break;
                case 'YYY':
                  n = Mo(3);
                  break;
                case 'YYYY':
                  n = Mo(4);
                  break;
                case 'M':
                case 'L':
                  n = Tt(ke.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  n = Tt(ke.Month, 2, 1);
                  break;
                case 'MMM':
                  n = pt(We.Months, Qe.Abbreviated);
                  break;
                case 'MMMM':
                  n = pt(We.Months, Qe.Wide);
                  break;
                case 'MMMMM':
                  n = pt(We.Months, Qe.Narrow);
                  break;
                case 'LLL':
                  n = pt(We.Months, Qe.Abbreviated, ft.Standalone);
                  break;
                case 'LLLL':
                  n = pt(We.Months, Qe.Wide, ft.Standalone);
                  break;
                case 'LLLLL':
                  n = pt(We.Months, Qe.Narrow, ft.Standalone);
                  break;
                case 'w':
                  n = Vr(1);
                  break;
                case 'ww':
                  n = Vr(2);
                  break;
                case 'W':
                  n = Vr(1, !0);
                  break;
                case 'd':
                  n = Tt(ke.Date, 1);
                  break;
                case 'dd':
                  n = Tt(ke.Date, 2);
                  break;
                case 'c':
                case 'cc':
                  n = Tt(ke.Day, 1);
                  break;
                case 'ccc':
                  n = pt(We.Days, Qe.Abbreviated, ft.Standalone);
                  break;
                case 'cccc':
                  n = pt(We.Days, Qe.Wide, ft.Standalone);
                  break;
                case 'ccccc':
                  n = pt(We.Days, Qe.Narrow, ft.Standalone);
                  break;
                case 'cccccc':
                  n = pt(We.Days, Qe.Short, ft.Standalone);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  n = pt(We.Days, Qe.Abbreviated);
                  break;
                case 'EEEE':
                  n = pt(We.Days, Qe.Wide);
                  break;
                case 'EEEEE':
                  n = pt(We.Days, Qe.Narrow);
                  break;
                case 'EEEEEE':
                  n = pt(We.Days, Qe.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  n = pt(We.DayPeriods, Qe.Abbreviated);
                  break;
                case 'aaaa':
                  n = pt(We.DayPeriods, Qe.Wide);
                  break;
                case 'aaaaa':
                  n = pt(We.DayPeriods, Qe.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  n = pt(We.DayPeriods, Qe.Abbreviated, ft.Standalone, !0);
                  break;
                case 'bbbb':
                  n = pt(We.DayPeriods, Qe.Wide, ft.Standalone, !0);
                  break;
                case 'bbbbb':
                  n = pt(We.DayPeriods, Qe.Narrow, ft.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  n = pt(We.DayPeriods, Qe.Abbreviated, ft.Format, !0);
                  break;
                case 'BBBB':
                  n = pt(We.DayPeriods, Qe.Wide, ft.Format, !0);
                  break;
                case 'BBBBB':
                  n = pt(We.DayPeriods, Qe.Narrow, ft.Format, !0);
                  break;
                case 'h':
                  n = Tt(ke.Hours, 1, -12);
                  break;
                case 'hh':
                  n = Tt(ke.Hours, 2, -12);
                  break;
                case 'H':
                  n = Tt(ke.Hours, 1);
                  break;
                case 'HH':
                  n = Tt(ke.Hours, 2);
                  break;
                case 'm':
                  n = Tt(ke.Minutes, 1);
                  break;
                case 'mm':
                  n = Tt(ke.Minutes, 2);
                  break;
                case 's':
                  n = Tt(ke.Seconds, 1);
                  break;
                case 'ss':
                  n = Tt(ke.Seconds, 2);
                  break;
                case 'S':
                  n = Tt(ke.FractionalSeconds, 1);
                  break;
                case 'SS':
                  n = Tt(ke.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  n = Tt(ke.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  n = It(xt.Short);
                  break;
                case 'ZZZZZ':
                  n = It(xt.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  n = It(xt.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  n = It(xt.Long);
                  break;
                default:
                  return null;
              }
              return (ta[e] = n), n;
            })(w);
            C += F ? F(u, t, v) : "''" === w ? "'" : w.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          C
        );
      }
      function bo(e, n, t) {
        const i = new Date(0);
        return i.setFullYear(e, n, t), i.setHours(0, 0, 0), i;
      }
      function Ln(e, n) {
        const t = (function ne(e) {
          return (0, a.cg1)(e)[a.wAp.LocaleId];
        })(e);
        if (((kr[t] = kr[t] || {}), kr[t][n])) return kr[t][n];
        let i = '';
        switch (n) {
          case 'shortDate':
            i = Le(e, St.Short);
            break;
          case 'mediumDate':
            i = Le(e, St.Medium);
            break;
          case 'longDate':
            i = Le(e, St.Long);
            break;
          case 'fullDate':
            i = Le(e, St.Full);
            break;
          case 'shortTime':
            i = Dt(e, St.Short);
            break;
          case 'mediumTime':
            i = Dt(e, St.Medium);
            break;
          case 'longTime':
            i = Dt(e, St.Long);
            break;
          case 'fullTime':
            i = Dt(e, St.Full);
            break;
          case 'short':
            const u = Ln(e, 'shortTime'),
              f = Ln(e, 'shortDate');
            i = Ur(st(e, St.Short), [u, f]);
            break;
          case 'medium':
            const h = Ln(e, 'mediumTime'),
              _ = Ln(e, 'mediumDate');
            i = Ur(st(e, St.Medium), [h, _]);
            break;
          case 'long':
            const v = Ln(e, 'longTime'),
              C = Ln(e, 'longDate');
            i = Ur(st(e, St.Long), [v, C]);
            break;
          case 'full':
            const w = Ln(e, 'fullTime'),
              F = Ln(e, 'fullDate');
            i = Ur(st(e, St.Full), [w, F]);
        }
        return i && (kr[t][n] = i), i;
      }
      function Ur(e, n) {
        return (
          n &&
            (e = e.replace(/\{([^}]+)}/g, function (t, i) {
              return null != n && i in n ? n[i] : t;
            })),
          e
        );
      }
      function zn(e, n, t = '-', i, u) {
        let f = '';
        (e < 0 || (u && e <= 0)) && (u ? (e = 1 - e) : ((e = -e), (f = t)));
        let h = String(e);
        for (; h.length < n; ) h = '0' + h;
        return i && (h = h.slice(h.length - n)), f + h;
      }
      function Tt(e, n, t = 0, i = !1, u = !1) {
        return function (f, h) {
          let _ = (function Ao(e, n) {
            switch (e) {
              case ke.FullYear:
                return n.getFullYear();
              case ke.Month:
                return n.getMonth();
              case ke.Date:
                return n.getDate();
              case ke.Hours:
                return n.getHours();
              case ke.Minutes:
                return n.getMinutes();
              case ke.Seconds:
                return n.getSeconds();
              case ke.FractionalSeconds:
                return n.getMilliseconds();
              case ke.Day:
                return n.getDay();
              default:
                throw new Error(`Unknown DateType value "${e}".`);
            }
          })(e, f);
          if (((t > 0 || _ > -t) && (_ += t), e === ke.Hours)) 0 === _ && -12 === t && (_ = 12);
          else if (e === ke.FractionalSeconds)
            return (function ku(e, n) {
              return zn(e, 3).substring(0, n);
            })(_, n);
          const v = ht(h, j.MinusSign);
          return zn(_, n, v, i, u);
        };
      }
      function pt(e, n, t = ft.Format, i = !1) {
        return function (u, f) {
          return (function Uu(e, n, t, i, u, f) {
            switch (t) {
              case We.Months:
                return (function pe(e, n, t) {
                  const i = (0, a.cg1)(e),
                    f = An([i[a.wAp.MonthsFormat], i[a.wAp.MonthsStandalone]], n);
                  return An(f, t);
                })(n, u, i)[e.getMonth()];
              case We.Days:
                return (function _e(e, n, t) {
                  const i = (0, a.cg1)(e),
                    f = An([i[a.wAp.DaysFormat], i[a.wAp.DaysStandalone]], n);
                  return An(f, t);
                })(n, u, i)[e.getDay()];
              case We.DayPeriods:
                const h = e.getHours(),
                  _ = e.getMinutes();
                if (f) {
                  const C = (function Xo(e) {
                      const n = (0, a.cg1)(e);
                      return (
                        Qo(n),
                        (n[a.wAp.ExtraData][2] || []).map((i) =>
                          'string' == typeof i ? Re(i) : [Re(i[0]), Re(i[1])]
                        )
                      );
                    })(n),
                    w = (function ei(e, n, t) {
                      const i = (0, a.cg1)(e);
                      Qo(i);
                      const f = An([i[a.wAp.ExtraData][0], i[a.wAp.ExtraData][1]], n) || [];
                      return An(f, t) || [];
                    })(n, u, i),
                    F = C.findIndex((Q) => {
                      if (Array.isArray(Q)) {
                        const [z, X] = Q,
                          Te = h >= z.hours && _ >= z.minutes,
                          xe = h < X.hours || (h === X.hours && _ < X.minutes);
                        if (z.hours < X.hours) {
                          if (Te && xe) return !0;
                        } else if (Te || xe) return !0;
                      } else if (Q.hours === h && Q.minutes === _) return !0;
                      return !1;
                    });
                  if (-1 !== F) return w[F];
                }
                return (function se(e, n, t) {
                  const i = (0, a.cg1)(e),
                    f = An([i[a.wAp.DayPeriodsFormat], i[a.wAp.DayPeriodsStandalone]], n);
                  return An(f, t);
                })(n, u, i)[h < 12 ? 0 : 1];
              case We.Eras:
                return (function Oe(e, n) {
                  return An((0, a.cg1)(e)[a.wAp.Eras], n);
                })(n, i)[e.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${t}`);
            }
          })(u, f, e, n, t, i);
        };
      }
      function It(e) {
        return function (n, t, i) {
          const u = -1 * i,
            f = ht(t, j.MinusSign),
            h = u > 0 ? Math.floor(u / 60) : Math.ceil(u / 60);
          switch (e) {
            case xt.Short:
              return (u >= 0 ? '+' : '') + zn(h, 2, f) + zn(Math.abs(u % 60), 2, f);
            case xt.ShortGMT:
              return 'GMT' + (u >= 0 ? '+' : '') + zn(h, 1, f);
            case xt.Long:
              return 'GMT' + (u >= 0 ? '+' : '') + zn(h, 2, f) + ':' + zn(Math.abs(u % 60), 2, f);
            case xt.Extended:
              return 0 === i
                ? 'Z'
                : (u >= 0 ? '+' : '') + zn(h, 2, f) + ':' + zn(Math.abs(u % 60), 2, f);
            default:
              throw new Error(`Unknown zone width "${e}"`);
          }
        };
      }
      const Vu = 0,
        ni = 4;
      function zi(e) {
        return bo(e.getFullYear(), e.getMonth(), e.getDate() + (ni - e.getDay()));
      }
      function Vr(e, n = !1) {
        return function (t, i) {
          let u;
          if (n) {
            const f = new Date(t.getFullYear(), t.getMonth(), 1).getDay() - 1,
              h = t.getDate();
            u = 1 + Math.floor((h + f) / 7);
          } else {
            const f = zi(t),
              h = (function ri(e) {
                const n = bo(e, Vu, 1).getDay();
                return bo(e, 0, 1 + (n <= ni ? ni : ni + 7) - n);
              })(f.getFullYear()),
              _ = f.getTime() - h.getTime();
            u = 1 + Math.round(_ / 6048e5);
          }
          return zn(u, e, ht(i, j.MinusSign));
        };
      }
      function Mo(e, n = !1) {
        return function (t, i) {
          return zn(zi(t).getFullYear(), e, ht(i, j.MinusSign), n);
        };
      }
      const ta = {};
      function Zn(e, n) {
        e = e.replace(/:/g, '');
        const t = Date.parse('Jan 01, 1970 00:00:00 ' + e) / 6e4;
        return isNaN(t) ? n : t;
      }
      function Zi(e) {
        return e instanceof Date && !isNaN(e.valueOf());
      }
      function si(e, n) {
        n = encodeURIComponent(n);
        for (const t of e.split(';')) {
          const i = t.indexOf('='),
            [u, f] = -1 == i ? [t, ''] : [t.slice(0, i), t.slice(i + 1)];
          if (u.trim() === n) return decodeURIComponent(f);
        }
        return null;
      }
      const Yn = /\s+/,
        De = [];
      let Ue = (() => {
        class e {
          constructor(t, i, u, f) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = i),
              (this._ngEl = u),
              (this._renderer = f),
              (this.initialClasses = De),
              (this.stateMap = new Map());
          }
          set klass(t) {
            this.initialClasses = null != t ? t.trim().split(Yn) : De;
          }
          set ngClass(t) {
            this.rawClass = 'string' == typeof t ? t.trim().split(Yn) : t;
          }
          ngDoCheck() {
            for (const i of this.initialClasses) this._updateState(i, !0);
            const t = this.rawClass;
            if (Array.isArray(t) || t instanceof Set) for (const i of t) this._updateState(i, !0);
            else if (null != t) for (const i of Object.keys(t)) this._updateState(i, Boolean(t[i]));
            this._applyStateDiff();
          }
          _updateState(t, i) {
            const u = this.stateMap.get(t);
            void 0 !== u
              ? (u.enabled !== i && ((u.changed = !0), (u.enabled = i)), (u.touched = !0))
              : this.stateMap.set(t, { enabled: i, changed: !0, touched: !0 });
          }
          _applyStateDiff() {
            for (const t of this.stateMap) {
              const i = t[0],
                u = t[1];
              u.changed
                ? (this._toggleClass(i, u.enabled), (u.changed = !1))
                : u.touched || (u.enabled && this._toggleClass(i, !1), this.stateMap.delete(i)),
                (u.touched = !1);
            }
          }
          _toggleClass(t, i) {
            (t = t.trim()).length > 0 &&
              t.split(Yn).forEach((u) => {
                i
                  ? this._renderer.addClass(this._ngEl.nativeElement, u)
                  : this._renderer.removeClass(this._ngEl.nativeElement, u);
              });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Y36(a.ZZ4), a.Y36(a.aQg), a.Y36(a.SBq), a.Y36(a.Qsj));
          }),
          (e.ɵdir = a.lG2({
            type: e,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
            standalone: !0,
          })),
          e
        );
      })();
      class on {
        constructor(n, t, i, u) {
          (this.$implicit = n), (this.ngForOf = t), (this.index = i), (this.count = u);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Kn = (() => {
        class e {
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(t, i, u) {
            (this._viewContainer = t),
              (this._template = i),
              (this._differs = u),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const t = this._ngForOf;
              !this._differ &&
                t &&
                (this._differ = this._differs.find(t).create(this.ngForTrackBy));
            }
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const i = this._viewContainer;
            t.forEachOperation((u, f, h) => {
              if (null == u.previousIndex)
                i.createEmbeddedView(
                  this._template,
                  new on(u.item, this._ngForOf, -1, -1),
                  null === h ? void 0 : h
                );
              else if (null == h) i.remove(null === f ? void 0 : f);
              else if (null !== f) {
                const _ = i.get(f);
                i.move(_, h), Ut(_, u);
              }
            });
            for (let u = 0, f = i.length; u < f; u++) {
              const _ = i.get(u).context;
              (_.index = u), (_.count = f), (_.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((u) => {
              Ut(i.get(u.currentIndex), u);
            });
          }
          static ngTemplateContextGuard(t, i) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Y36(a.s_b), a.Y36(a.Rgc), a.Y36(a.ZZ4));
          }),
          (e.ɵdir = a.lG2({
            type: e,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
            standalone: !0,
          })),
          e
        );
      })();
      function Ut(e, n) {
        e.context.$implicit = n.item;
      }
      let sn = (() => {
        class e {
          constructor(t, i) {
            (this._viewContainer = t),
              (this._context = new nt()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = i);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t), this._updateView();
          }
          set ngIfThen(t) {
            sa('ngIfThen', t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            sa('ngIfElse', t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(t, i) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Y36(a.s_b), a.Y36(a.Rgc));
          }),
          (e.ɵdir = a.lG2({
            type: e,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
            standalone: !0,
          })),
          e
        );
      })();
      class nt {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function sa(e, n) {
        if (n && !n.createEmbeddedView)
          throw new Error(`${e} must be a TemplateRef, but received '${(0, a.AaK)(n)}'.`);
      }
      function U(e, n) {
        return new a.vHH(2100, !1);
      }
      class Y {
        createSubscription(n, t) {
          return n.subscribe({
            next: t,
            error: (i) => {
              throw i;
            },
          });
        }
        dispose(n) {
          n.unsubscribe();
        }
      }
      class de {
        createSubscription(n, t) {
          return n.then(t, (i) => {
            throw i;
          });
        }
        dispose(n) {}
      }
      const he = new de(),
        Ye = new Y();
      let He = (() => {
          class e {
            constructor(t) {
              (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null),
                (this._ref = t);
            }
            ngOnDestroy() {
              this._subscription && this._dispose(), (this._ref = null);
            }
            transform(t) {
              return this._obj
                ? t !== this._obj
                  ? (this._dispose(), this.transform(t))
                  : this._latestValue
                : (t && this._subscribe(t), this._latestValue);
            }
            _subscribe(t) {
              (this._obj = t),
                (this._strategy = this._selectStrategy(t)),
                (this._subscription = this._strategy.createSubscription(t, (i) =>
                  this._updateLatestValue(t, i)
                ));
            }
            _selectStrategy(t) {
              if ((0, a.QGY)(t)) return he;
              if ((0, a.F4k)(t)) return Ye;
              throw U();
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(t, i) {
              t === this._obj && ((this._latestValue = i), this._ref.markForCheck());
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(a.sBO, 16));
            }),
            (e.ɵpipe = a.Yjl({ name: 'async', type: e, pure: !1, standalone: !0 })),
            e
          );
        })(),
        Ot = (() => {
          class e {
            transform(t) {
              if (null == t) return null;
              if ('string' != typeof t) throw U();
              return t.toUpperCase();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵpipe = a.Yjl({ name: 'uppercase', type: e, pure: !0, standalone: !0 })),
            e
          );
        })();
      const Po = new a.OlP('DATE_PIPE_DEFAULT_TIMEZONE'),
        ci = new a.OlP('DATE_PIPE_DEFAULT_OPTIONS');
      let Jn = (() => {
          class e {
            constructor(t, i, u) {
              (this.locale = t), (this.defaultTimezone = i), (this.defaultOptions = u);
            }
            transform(t, i, u, f) {
              if (null == t || '' === t || t != t) return null;
              try {
                return So(
                  t,
                  i ?? this.defaultOptions?.dateFormat ?? 'mediumDate',
                  f || this.locale,
                  u ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0
                );
              } catch (h) {
                throw U();
              }
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(a.soG, 16), a.Y36(Po, 24), a.Y36(ci, 24));
            }),
            (e.ɵpipe = a.Yjl({ name: 'date', type: e, pure: !0, standalone: !0 })),
            e
          );
        })(),
        Zt = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({})),
            e
          );
        })();
      let Ap = (() => {
        class e {}
        return (
          (e.ɵprov = (0, a.Yz7)({
            token: e,
            providedIn: 'root',
            factory: () => new pv((0, a.LFG)(k), window),
          })),
          e
        );
      })();
      class pv {
        constructor(n, t) {
          (this.document = n), (this.window = t), (this.offset = () => [0, 0]);
        }
        setOffset(n) {
          this.offset = Array.isArray(n) ? () => n : n;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(n) {
          this.supportsScrolling() && this.window.scrollTo(n[0], n[1]);
        }
        scrollToAnchor(n) {
          if (!this.supportsScrolling()) return;
          const t = (function Tp(e, n) {
            const t = e.getElementById(n) || e.getElementsByName(n)[0];
            if (t) return t;
            if (
              'function' == typeof e.createTreeWalker &&
              e.body &&
              (e.body.createShadowRoot || e.body.attachShadow)
            ) {
              const i = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
              let u = i.currentNode;
              for (; u; ) {
                const f = u.shadowRoot;
                if (f) {
                  const h = f.getElementById(n) || f.querySelector(`[name="${n}"]`);
                  if (h) return h;
                }
                u = i.nextNode();
              }
            }
            return null;
          })(this.document, n);
          t && (this.scrollToElement(t), t.focus());
        }
        setHistoryScrollRestoration(n) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = n);
          }
        }
        scrollToElement(n) {
          const t = n.getBoundingClientRect(),
            i = t.left + this.window.pageXOffset,
            u = t.top + this.window.pageYOffset,
            f = this.offset();
          this.window.scrollTo(i - f[0], u - f[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const n = Mp(this.window.history) || Mp(Object.getPrototypeOf(this.window.history));
            return !(!n || (!n.writable && !n.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return !!this.window && !!this.window.scrollTo && 'pageXOffset' in this.window;
          } catch {
            return !1;
          }
        }
      }
      function Mp(e) {
        return Object.getOwnPropertyDescriptor(e, 'scrollRestoration');
      }
      class Ip {}
      class Cd extends H {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class Wu extends Cd {
        static makeCurrent() {
          !(function L(e) {
            G || (G = e);
          })(new Wu());
        }
        onAndCancel(n, t, i) {
          return (
            n.addEventListener(t, i, !1),
            () => {
              n.removeEventListener(t, i, !1);
            }
          );
        }
        dispatchEvent(n, t) {
          n.dispatchEvent(t);
        }
        remove(n) {
          n.parentNode && n.parentNode.removeChild(n);
        }
        createElement(n, t) {
          return (t = t || this.getDefaultDocument()).createElement(n);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(n) {
          return n.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(n) {
          return n instanceof DocumentFragment;
        }
        getGlobalEventTarget(n, t) {
          return 'window' === t ? window : 'document' === t ? n : 'body' === t ? n.body : null;
        }
        getBaseHref(n) {
          const t = (function Qi() {
            return (la = la || document.querySelector('base')), la ? la.getAttribute('href') : null;
          })();
          return null == t
            ? null
            : (function Fv(e) {
                (Ro = Ro || document.createElement('a')), Ro.setAttribute('href', e);
                const n = Ro.pathname;
                return '/' === n.charAt(0) ? n : `/${n}`;
              })(t);
        }
        resetBaseElement() {
          la = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(n) {
          return si(document.cookie, n);
        }
      }
      let Ro,
        la = null;
      const Nv = new a.OlP('TRANSITION_ID'),
        kC = [
          {
            provide: a.ip1,
            useFactory: function wd(e, n, t) {
              return () => {
                t.get(a.CZH).donePromise.then(() => {
                  const i = Z(),
                    u = n.querySelectorAll(`style[ng-transition="${e}"]`);
                  for (let f = 0; f < u.length; f++) i.remove(u[f]);
                });
              };
            },
            deps: [Nv, k, a.zs3],
            multi: !0,
          },
        ];
      let kv = (() => {
        class e {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Sd = new a.OlP('EventManagerPlugins');
      let bd = (() => {
        class e {
          constructor(t, i) {
            (this._zone = i),
              (this._eventNameToPlugin = new Map()),
              t.forEach((u) => {
                u.manager = this;
              }),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, i, u) {
            return this._findPluginFor(i).addEventListener(t, i, u);
          }
          addGlobalEventListener(t, i, u) {
            return this._findPluginFor(i).addGlobalEventListener(t, i, u);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const i = this._eventNameToPlugin.get(t);
            if (i) return i;
            const u = this._plugins;
            for (let f = 0; f < u.length; f++) {
              const h = u[f];
              if (h.supports(t)) return this._eventNameToPlugin.set(t, h), h;
            }
            throw new Error(`No event manager plugin found for event ${t}`);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(Sd), a.LFG(a.R0b));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Yu {
        constructor(n) {
          this._doc = n;
        }
        addGlobalEventListener(n, t, i) {
          const u = Z().getGlobalEventTarget(this._doc, n);
          if (!u) throw new Error(`Unsupported event target ${u} for event ${t}`);
          return this.addEventListener(u, t, i);
        }
      }
      let Ad = (() => {
          class e {
            constructor() {
              this.usageCount = new Map();
            }
            addStyles(t) {
              for (const i of t) 1 === this.changeUsageCount(i, 1) && this.onStyleAdded(i);
            }
            removeStyles(t) {
              for (const i of t) 0 === this.changeUsageCount(i, -1) && this.onStyleRemoved(i);
            }
            onStyleRemoved(t) {}
            onStyleAdded(t) {}
            getAllStyles() {
              return this.usageCount.keys();
            }
            changeUsageCount(t, i) {
              const u = this.usageCount;
              let f = u.get(t) ?? 0;
              return (f += i), f > 0 ? u.set(t, f) : u.delete(t), f;
            }
            ngOnDestroy() {
              for (const t of this.getAllStyles()) this.onStyleRemoved(t);
              this.usageCount.clear();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Xi = (() => {
          class e extends Ad {
            constructor(t) {
              super(),
                (this.doc = t),
                (this.styleRef = new Map()),
                (this.hostNodes = new Set()),
                this.resetHostNodes();
            }
            onStyleAdded(t) {
              for (const i of this.hostNodes) this.addStyleToHost(i, t);
            }
            onStyleRemoved(t) {
              const i = this.styleRef;
              i.get(t)?.forEach((f) => f.remove()), i.delete(t);
            }
            ngOnDestroy() {
              super.ngOnDestroy(), this.styleRef.clear(), this.resetHostNodes();
            }
            addHost(t) {
              this.hostNodes.add(t);
              for (const i of this.getAllStyles()) this.addStyleToHost(t, i);
            }
            removeHost(t) {
              this.hostNodes.delete(t);
            }
            addStyleToHost(t, i) {
              const u = this.doc.createElement('style');
              (u.textContent = i), t.appendChild(u);
              const f = this.styleRef.get(i);
              f ? f.push(u) : this.styleRef.set(i, [u]);
            }
            resetHostNodes() {
              const t = this.hostNodes;
              t.clear(), t.add(this.doc.head);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(k));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const fi = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        Ku = /%COMP%/g,
        fa = new a.OlP('RemoveStylesOnCompDestory', { providedIn: 'root', factory: () => !1 });
      function Id(e, n) {
        return n.flat(100).map((t) => t.replace(Ku, e));
      }
      function zp(e) {
        return (n) => {
          if ('__ngUnwrap__' === n) return e;
          !1 === e(n) && (n.preventDefault(), (n.returnValue = !1));
        };
      }
      let ur = (() => {
        class e {
          constructor(t, i, u, f) {
            (this.eventManager = t),
              (this.sharedStylesHost = i),
              (this.appId = u),
              (this.removeStylesOnCompDestory = f),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Od(t));
          }
          createRenderer(t, i) {
            if (!t || !i) return this.defaultRenderer;
            const u = this.getOrCreateRenderer(t, i);
            return u instanceof Zp ? u.applyToHost(t) : u instanceof ha && u.applyStyles(), u;
          }
          getOrCreateRenderer(t, i) {
            const u = this.rendererByCompId;
            let f = u.get(i.id);
            if (!f) {
              const h = this.eventManager,
                _ = this.sharedStylesHost,
                v = this.removeStylesOnCompDestory;
              switch (i.encapsulation) {
                case a.ifc.Emulated:
                  f = new Zp(h, _, i, this.appId, v);
                  break;
                case a.ifc.ShadowDom:
                  return new xd(h, _, t, i);
                default:
                  f = new ha(h, _, i, v);
              }
              (f.onDestroy = () => u.delete(i.id)), u.set(i.id, f);
            }
            return f;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          begin() {}
          end() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(bd), a.LFG(Xi), a.LFG(a.AFp), a.LFG(fa));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Od {
        constructor(n) {
          (this.eventManager = n), (this.data = Object.create(null)), (this.destroyNode = null);
        }
        destroy() {}
        createElement(n, t) {
          return t ? document.createElementNS(fi[t] || t, n) : document.createElement(n);
        }
        createComment(n) {
          return document.createComment(n);
        }
        createText(n) {
          return document.createTextNode(n);
        }
        appendChild(n, t) {
          (Pd(n) ? n.content : n).appendChild(t);
        }
        insertBefore(n, t, i) {
          n && (Pd(n) ? n.content : n).insertBefore(t, i);
        }
        removeChild(n, t) {
          n && n.removeChild(t);
        }
        selectRootElement(n, t) {
          let i = 'string' == typeof n ? document.querySelector(n) : n;
          if (!i) throw new Error(`The selector "${n}" did not match any elements`);
          return t || (i.textContent = ''), i;
        }
        parentNode(n) {
          return n.parentNode;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        setAttribute(n, t, i, u) {
          if (u) {
            t = u + ':' + t;
            const f = fi[u];
            f ? n.setAttributeNS(f, t, i) : n.setAttribute(t, i);
          } else n.setAttribute(t, i);
        }
        removeAttribute(n, t, i) {
          if (i) {
            const u = fi[i];
            u ? n.removeAttributeNS(u, t) : n.removeAttribute(`${i}:${t}`);
          } else n.removeAttribute(t);
        }
        addClass(n, t) {
          n.classList.add(t);
        }
        removeClass(n, t) {
          n.classList.remove(t);
        }
        setStyle(n, t, i, u) {
          u & (a.JOm.DashCase | a.JOm.Important)
            ? n.style.setProperty(t, i, u & a.JOm.Important ? 'important' : '')
            : (n.style[t] = i);
        }
        removeStyle(n, t, i) {
          i & a.JOm.DashCase ? n.style.removeProperty(t) : (n.style[t] = '');
        }
        setProperty(n, t, i) {
          n[t] = i;
        }
        setValue(n, t) {
          n.nodeValue = t;
        }
        listen(n, t, i) {
          return 'string' == typeof n
            ? this.eventManager.addGlobalEventListener(n, t, zp(i))
            : this.eventManager.addEventListener(n, t, zp(i));
        }
      }
      function Pd(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class xd extends Od {
        constructor(n, t, i, u) {
          super(n),
            (this.sharedStylesHost = t),
            (this.hostEl = i),
            (this.shadowRoot = i.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const f = Id(u.id, u.styles);
          for (const h of f) {
            const _ = document.createElement('style');
            (_.textContent = h), this.shadowRoot.appendChild(_);
          }
        }
        nodeOrShadowRoot(n) {
          return n === this.hostEl ? this.shadowRoot : n;
        }
        appendChild(n, t) {
          return super.appendChild(this.nodeOrShadowRoot(n), t);
        }
        insertBefore(n, t, i) {
          return super.insertBefore(this.nodeOrShadowRoot(n), t, i);
        }
        removeChild(n, t) {
          return super.removeChild(this.nodeOrShadowRoot(n), t);
        }
        parentNode(n) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class ha extends Od {
        constructor(n, t, i, u, f = i.id) {
          super(n),
            (this.sharedStylesHost = t),
            (this.removeStylesOnCompDestory = u),
            (this.rendererUsageCount = 0),
            (this.styles = Id(f, i.styles));
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles), this.rendererUsageCount++;
        }
        destroy() {
          this.removeStylesOnCompDestory &&
            (this.sharedStylesHost.removeStyles(this.styles),
            this.rendererUsageCount--,
            0 === this.rendererUsageCount && this.onDestroy?.());
        }
      }
      class Zp extends ha {
        constructor(n, t, i, u, f) {
          const h = u + '-' + i.id;
          super(n, t, i, f, h),
            (this.contentAttr = (function UC(e) {
              return '_ngcontent-%COMP%'.replace(Ku, e);
            })(h)),
            (this.hostAttr = (function Gp(e) {
              return '_nghost-%COMP%'.replace(Ku, e);
            })(h));
        }
        applyToHost(n) {
          this.applyStyles(), this.setAttribute(n, this.hostAttr, '');
        }
        createElement(n, t) {
          const i = super.createElement(n, t);
          return super.setAttribute(i, this.contentAttr, ''), i;
        }
      }
      let Wp = (() => {
        class e extends Yu {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, i, u) {
            return t.addEventListener(i, u, !1), () => this.removeEventListener(t, i, u);
          }
          removeEventListener(t, i, u) {
            return t.removeEventListener(i, u);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(k));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Rd = ['alt', 'control', 'meta', 'shift'],
        Yp = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        Kp = {
          alt: (e) => e.altKey,
          control: (e) => e.ctrlKey,
          meta: (e) => e.metaKey,
          shift: (e) => e.shiftKey,
        };
      let Vv = (() => {
        class e extends Yu {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, i, u) {
            const f = e.parseEventName(i),
              h = e.eventCallback(f.fullKey, u, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => Z().onAndCancel(t, f.domEventName, h));
          }
          static parseEventName(t) {
            const i = t.toLowerCase().split('.'),
              u = i.shift();
            if (0 === i.length || ('keydown' !== u && 'keyup' !== u)) return null;
            const f = e._normalizeKey(i.pop());
            let h = '',
              _ = i.indexOf('code');
            if (
              (_ > -1 && (i.splice(_, 1), (h = 'code.')),
              Rd.forEach((C) => {
                const w = i.indexOf(C);
                w > -1 && (i.splice(w, 1), (h += C + '.'));
              }),
              (h += f),
              0 != i.length || 0 === f.length)
            )
              return null;
            const v = {};
            return (v.domEventName = u), (v.fullKey = h), v;
          }
          static matchEventFullKeyCode(t, i) {
            let u = Yp[t.key] || t.key,
              f = '';
            return (
              i.indexOf('code.') > -1 && ((u = t.code), (f = 'code.')),
              !(null == u || !u) &&
                ((u = u.toLowerCase()),
                ' ' === u ? (u = 'space') : '.' === u && (u = 'dot'),
                Rd.forEach((h) => {
                  h !== u && (0, Kp[h])(t) && (f += h + '.');
                }),
                (f += u),
                f === i)
            );
          }
          static eventCallback(t, i, u) {
            return (f) => {
              e.matchEventFullKeyCode(f, t) && u.runGuarded(() => i(f));
            };
          }
          static _normalizeKey(t) {
            return 'esc' === t ? 'escape' : t;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(k));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const $v = (0, a.eFA)(a._c5, 'browser', [
          { provide: a.Lbi, useValue: 'browser' },
          {
            provide: a.g9A,
            useValue: function ns() {
              Wu.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: k,
            useFactory: function qp() {
              return (0, a.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        Nd = new a.OlP(''),
        ec = [
          {
            provide: a.rWj,
            useClass: class Lv {
              addToWindow(n) {
                (a.dqk.getAngularTestability = (i, u = !0) => {
                  const f = n.findTestabilityInTree(i, u);
                  if (null == f) throw new Error('Could not find testability for element.');
                  return f;
                }),
                  (a.dqk.getAllAngularTestabilities = () => n.getAllTestabilities()),
                  (a.dqk.getAllAngularRootElements = () => n.getAllRootElements()),
                  a.dqk.frameworkStabilizers || (a.dqk.frameworkStabilizers = []),
                  a.dqk.frameworkStabilizers.push((i) => {
                    const u = a.dqk.getAllAngularTestabilities();
                    let f = u.length,
                      h = !1;
                    const _ = function (v) {
                      (h = h || v), f--, 0 == f && i(h);
                    };
                    u.forEach(function (v) {
                      v.whenStable(_);
                    });
                  });
              }
              findTestabilityInTree(n, t, i) {
                return null == t
                  ? null
                  : n.getTestability(t) ??
                      (i
                        ? Z().isShadowRoot(t)
                          ? this.findTestabilityInTree(n, t.host, !0)
                          : this.findTestabilityInTree(n, t.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: a.lri, useClass: a.dDg, deps: [a.R0b, a.eoX, a.rWj] },
          { provide: a.dDg, useClass: a.dDg, deps: [a.R0b, a.eoX, a.rWj] },
        ],
        hi = [
          { provide: a.zSh, useValue: 'root' },
          {
            provide: a.qLn,
            useFactory: function Bv() {
              return new a.qLn();
            },
            deps: [],
          },
          { provide: Sd, useClass: Wp, multi: !0, deps: [k, a.R0b, a.Lbi] },
          { provide: Sd, useClass: Vv, multi: !0, deps: [k] },
          { provide: ur, useClass: ur, deps: [bd, Xi, a.AFp, fa] },
          { provide: a.FYo, useExisting: ur },
          { provide: Ad, useExisting: Xi },
          { provide: Xi, useClass: Xi, deps: [k] },
          { provide: bd, useClass: bd, deps: [Sd, a.R0b] },
          { provide: Ip, useClass: kv, deps: [] },
          [],
        ];
      let rs = (() => {
          class e {
            constructor(t) {}
            static withServerTransition(t) {
              return {
                ngModule: e,
                providers: [
                  { provide: a.AFp, useValue: t.appId },
                  { provide: Nv, useExisting: a.AFp },
                  kC,
                ],
              };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(Nd, 12));
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ providers: [...hi, ...ec], imports: [Zt, a.hGG] })),
            e
          );
        })(),
        Hv = (() => {
          class e {
            constructor(t) {
              this._doc = t;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(t) {
              this._doc.title = t || '';
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(k));
            }),
            (e.ɵprov = a.Yz7({
              token: e,
              factory: function (t) {
                let i = null;
                return (
                  (i = t
                    ? new t()
                    : (function os() {
                        return new Hv((0, a.LFG)(k));
                      })()),
                  i
                );
              },
              providedIn: 'root',
            })),
            e
          );
        })();
      typeof window < 'u' && window;
      var we = E(9646),
        Un = E(9751),
        pi = E(4351),
        Wt = E(9300),
        le = E(4004);
      class rc {}
      class kd {}
      class so {
        constructor(n) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            n
              ? (this.lazyInit =
                  'string' == typeof n
                    ? () => {
                        (this.headers = new Map()),
                          n.split('\n').forEach((t) => {
                            const i = t.indexOf(':');
                            if (i > 0) {
                              const u = t.slice(0, i),
                                f = u.toLowerCase(),
                                h = t.slice(i + 1).trim();
                              this.maybeSetNormalizedName(u, f),
                                this.headers.has(f)
                                  ? this.headers.get(f).push(h)
                                  : this.headers.set(f, [h]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(n).forEach((t) => {
                            let i = n[t];
                            const u = t.toLowerCase();
                            'string' == typeof i && (i = [i]),
                              i.length > 0 &&
                                (this.headers.set(u, i), this.maybeSetNormalizedName(t, u));
                          });
                      })
              : (this.headers = new Map());
        }
        has(n) {
          return this.init(), this.headers.has(n.toLowerCase());
        }
        get(n) {
          this.init();
          const t = this.headers.get(n.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(n) {
          return this.init(), this.headers.get(n.toLowerCase()) || null;
        }
        append(n, t) {
          return this.clone({ name: n, value: t, op: 'a' });
        }
        set(n, t) {
          return this.clone({ name: n, value: t, op: 's' });
        }
        delete(n, t) {
          return this.clone({ name: n, value: t, op: 'd' });
        }
        maybeSetNormalizedName(n, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, n);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof so ? this.copyFrom(this.lazyInit) : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((n) => this.applyUpdate(n)), (this.lazyUpdate = null)));
        }
        copyFrom(n) {
          n.init(),
            Array.from(n.headers.keys()).forEach((t) => {
              this.headers.set(t, n.headers.get(t)),
                this.normalizedNames.set(t, n.normalizedNames.get(t));
            });
        }
        clone(n) {
          const t = new so();
          return (
            (t.lazyInit = this.lazyInit && this.lazyInit instanceof so ? this.lazyInit : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([n])),
            t
          );
        }
        applyUpdate(n) {
          const t = n.name.toLowerCase();
          switch (n.op) {
            case 'a':
            case 's':
              let i = n.value;
              if (('string' == typeof i && (i = [i]), 0 === i.length)) return;
              this.maybeSetNormalizedName(n.name, t);
              const u = ('a' === n.op ? this.headers.get(t) : void 0) || [];
              u.push(...i), this.headers.set(t, u);
              break;
            case 'd':
              const f = n.value;
              if (f) {
                let h = this.headers.get(t);
                if (!h) return;
                (h = h.filter((_) => -1 === f.indexOf(_))),
                  0 === h.length
                    ? (this.headers.delete(t), this.normalizedNames.delete(t))
                    : this.headers.set(t, h);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        forEach(n) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((t) =>
              n(this.normalizedNames.get(t), this.headers.get(t))
            );
        }
      }
      class Wv {
        encodeKey(n) {
          return ss(n);
        }
        encodeValue(n) {
          return ss(n);
        }
        decodeKey(n) {
          return decodeURIComponent(n);
        }
        decodeValue(n) {
          return decodeURIComponent(n);
        }
      }
      const oc = /%(\d[a-f0-9])/gi,
        ic = { 40: '@', '3A': ':', 24: '$', '2C': ',', '3B': ';', '3D': '=', '3F': '?', '2F': '/' };
      function ss(e) {
        return encodeURIComponent(e).replace(oc, (n, t) => ic[t] ?? n);
      }
      function ma(e) {
        return `${e}`;
      }
      class lr {
        constructor(n = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = n.encoder || new Wv()),
            n.fromString)
          ) {
            if (n.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function Ud(e, n) {
              const t = new Map();
              return (
                e.length > 0 &&
                  e
                    .replace(/^\?/, '')
                    .split('&')
                    .forEach((u) => {
                      const f = u.indexOf('='),
                        [h, _] =
                          -1 == f
                            ? [n.decodeKey(u), '']
                            : [n.decodeKey(u.slice(0, f)), n.decodeValue(u.slice(f + 1))],
                        v = t.get(h) || [];
                      v.push(_), t.set(h, v);
                    }),
                t
              );
            })(n.fromString, this.encoder);
          } else
            n.fromObject
              ? ((this.map = new Map()),
                Object.keys(n.fromObject).forEach((t) => {
                  const i = n.fromObject[t],
                    u = Array.isArray(i) ? i.map(ma) : [ma(i)];
                  this.map.set(t, u);
                }))
              : (this.map = null);
        }
        has(n) {
          return this.init(), this.map.has(n);
        }
        get(n) {
          this.init();
          const t = this.map.get(n);
          return t ? t[0] : null;
        }
        getAll(n) {
          return this.init(), this.map.get(n) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(n, t) {
          return this.clone({ param: n, value: t, op: 'a' });
        }
        appendAll(n) {
          const t = [];
          return (
            Object.keys(n).forEach((i) => {
              const u = n[i];
              Array.isArray(u)
                ? u.forEach((f) => {
                    t.push({ param: i, value: f, op: 'a' });
                  })
                : t.push({ param: i, value: u, op: 'a' });
            }),
            this.clone(t)
          );
        }
        set(n, t) {
          return this.clone({ param: n, value: t, op: 's' });
        }
        delete(n, t) {
          return this.clone({ param: n, value: t, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((n) => {
                const t = this.encoder.encodeKey(n);
                return this.map
                  .get(n)
                  .map((i) => t + '=' + this.encoder.encodeValue(i))
                  .join('&');
              })
              .filter((n) => '' !== n)
              .join('&')
          );
        }
        clone(n) {
          const t = new lr({ encoder: this.encoder });
          return (
            (t.cloneFrom = this.cloneFrom || this), (t.updates = (this.updates || []).concat(n)), t
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom.keys().forEach((n) => this.map.set(n, this.cloneFrom.map.get(n))),
              this.updates.forEach((n) => {
                switch (n.op) {
                  case 'a':
                  case 's':
                    const t = ('a' === n.op ? this.map.get(n.param) : void 0) || [];
                    t.push(ma(n.value)), this.map.set(n.param, t);
                    break;
                  case 'd':
                    if (void 0 === n.value) {
                      this.map.delete(n.param);
                      break;
                    }
                    {
                      let i = this.map.get(n.param) || [];
                      const u = i.indexOf(ma(n.value));
                      -1 !== u && i.splice(u, 1),
                        i.length > 0 ? this.map.set(n.param, i) : this.map.delete(n.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class ng {
        constructor() {
          this.map = new Map();
        }
        set(n, t) {
          return this.map.set(n, t), this;
        }
        get(n) {
          return this.map.has(n) || this.map.set(n, n.defaultValue()), this.map.get(n);
        }
        delete(n) {
          return this.map.delete(n), this;
        }
        has(n) {
          return this.map.has(n);
        }
        keys() {
          return this.map.keys();
        }
      }
      function ya(e) {
        return typeof ArrayBuffer < 'u' && e instanceof ArrayBuffer;
      }
      function Vd(e) {
        return typeof Blob < 'u' && e instanceof Blob;
      }
      function rg(e) {
        return typeof FormData < 'u' && e instanceof FormData;
      }
      class $r {
        constructor(n, t, i, u) {
          let f;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = n.toUpperCase()),
            (function _a(e) {
              switch (e) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || u
              ? ((this.body = void 0 !== i ? i : null), (f = u))
              : (f = i),
            f &&
              ((this.reportProgress = !!f.reportProgress),
              (this.withCredentials = !!f.withCredentials),
              f.responseType && (this.responseType = f.responseType),
              f.headers && (this.headers = f.headers),
              f.context && (this.context = f.context),
              f.params && (this.params = f.params)),
            this.headers || (this.headers = new so()),
            this.context || (this.context = new ng()),
            this.params)
          ) {
            const h = this.params.toString();
            if (0 === h.length) this.urlWithParams = t;
            else {
              const _ = t.indexOf('?');
              this.urlWithParams = t + (-1 === _ ? '?' : _ < t.length - 1 ? '&' : '') + h;
            }
          } else (this.params = new lr()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : ya(this.body) ||
              Vd(this.body) ||
              rg(this.body) ||
              (function Yv(e) {
                return typeof URLSearchParams < 'u' && e instanceof URLSearchParams;
              })(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof lr
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || rg(this.body)
            ? null
            : Vd(this.body)
            ? this.body.type || null
            : ya(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof lr
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              'boolean' == typeof this.body
            ? 'application/json'
            : null;
        }
        clone(n = {}) {
          const t = n.method || this.method,
            i = n.url || this.url,
            u = n.responseType || this.responseType,
            f = void 0 !== n.body ? n.body : this.body,
            h = void 0 !== n.withCredentials ? n.withCredentials : this.withCredentials,
            _ = void 0 !== n.reportProgress ? n.reportProgress : this.reportProgress;
          let v = n.headers || this.headers,
            C = n.params || this.params;
          const w = n.context ?? this.context;
          return (
            void 0 !== n.setHeaders &&
              (v = Object.keys(n.setHeaders).reduce((F, Q) => F.set(Q, n.setHeaders[Q]), v)),
            n.setParams &&
              (C = Object.keys(n.setParams).reduce((F, Q) => F.set(Q, n.setParams[Q]), C)),
            new $r(t, i, f, {
              params: C,
              headers: v,
              context: w,
              reportProgress: _,
              responseType: u,
              withCredentials: h,
            })
          );
        }
      }
      var Ft = (() => (
        ((Ft = Ft || {})[(Ft.Sent = 0)] = 'Sent'),
        (Ft[(Ft.UploadProgress = 1)] = 'UploadProgress'),
        (Ft[(Ft.ResponseHeader = 2)] = 'ResponseHeader'),
        (Ft[(Ft.DownloadProgress = 3)] = 'DownloadProgress'),
        (Ft[(Ft.Response = 4)] = 'Response'),
        (Ft[(Ft.User = 5)] = 'User'),
        Ft
      ))();
      class jd {
        constructor(n, t = 200, i = 'OK') {
          (this.headers = n.headers || new so()),
            (this.status = void 0 !== n.status ? n.status : t),
            (this.statusText = n.statusText || i),
            (this.url = n.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class og extends jd {
        constructor(n = {}) {
          super(n), (this.type = Ft.ResponseHeader);
        }
        clone(n = {}) {
          return new og({
            headers: n.headers || this.headers,
            status: void 0 !== n.status ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0,
          });
        }
      }
      class va extends jd {
        constructor(n = {}) {
          super(n), (this.type = Ft.Response), (this.body = void 0 !== n.body ? n.body : null);
        }
        clone(n = {}) {
          return new va({
            body: void 0 !== n.body ? n.body : this.body,
            headers: n.headers || this.headers,
            status: void 0 !== n.status ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0,
          });
        }
      }
      class ig extends jd {
        constructor(n) {
          super(n, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${n.url || '(unknown url)'}`
                : `Http failure response for ${n.url || '(unknown url)'}: ${n.status} ${
                    n.statusText
                  }`),
            (this.error = n.error || null);
        }
      }
      function sg(e, n) {
        return {
          body: n,
          headers: e.headers,
          context: e.context,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      let Ar = (() => {
        class e {
          constructor(t) {
            this.handler = t;
          }
          request(t, i, u = {}) {
            let f;
            if (t instanceof $r) f = t;
            else {
              let v, C;
              (v = u.headers instanceof so ? u.headers : new so(u.headers)),
                u.params &&
                  (C = u.params instanceof lr ? u.params : new lr({ fromObject: u.params })),
                (f = new $r(t, i, void 0 !== u.body ? u.body : null, {
                  headers: v,
                  context: u.context,
                  params: C,
                  reportProgress: u.reportProgress,
                  responseType: u.responseType || 'json',
                  withCredentials: u.withCredentials,
                }));
            }
            const h = (0, we.of)(f).pipe((0, pi.b)((v) => this.handler.handle(v)));
            if (t instanceof $r || 'events' === u.observe) return h;
            const _ = h.pipe((0, Wt.h)((v) => v instanceof va));
            switch (u.observe || 'body') {
              case 'body':
                switch (f.responseType) {
                  case 'arraybuffer':
                    return _.pipe(
                      (0, le.U)((v) => {
                        if (null !== v.body && !(v.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return v.body;
                      })
                    );
                  case 'blob':
                    return _.pipe(
                      (0, le.U)((v) => {
                        if (null !== v.body && !(v.body instanceof Blob))
                          throw new Error('Response is not a Blob.');
                        return v.body;
                      })
                    );
                  case 'text':
                    return _.pipe(
                      (0, le.U)((v) => {
                        if (null !== v.body && 'string' != typeof v.body)
                          throw new Error('Response is not a string.');
                        return v.body;
                      })
                    );
                  default:
                    return _.pipe((0, le.U)((v) => v.body));
                }
              case 'response':
                return _;
              default:
                throw new Error(`Unreachable: unhandled observe type ${u.observe}}`);
            }
          }
          delete(t, i = {}) {
            return this.request('DELETE', t, i);
          }
          get(t, i = {}) {
            return this.request('GET', t, i);
          }
          head(t, i = {}) {
            return this.request('HEAD', t, i);
          }
          jsonp(t, i) {
            return this.request('JSONP', t, {
              params: new lr().append(i, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options(t, i = {}) {
            return this.request('OPTIONS', t, i);
          }
          patch(t, i, u = {}) {
            return this.request('PATCH', t, sg(u, i));
          }
          post(t, i, u = {}) {
            return this.request('POST', t, sg(u, i));
          }
          put(t, i, u = {}) {
            return this.request('PUT', t, sg(u, i));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(rc));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function ag(e, n) {
        return n(e);
      }
      function Kv(e, n) {
        return (t, i) => n.intercept(t, { handle: (u) => e(u, i) });
      }
      const Bd = new a.OlP('HTTP_INTERCEPTORS'),
        Ea = new a.OlP('HTTP_INTERCEPTOR_FNS');
      function ug() {
        let e = null;
        return (n, t) => (
          null === e && (e = ((0, a.f3M)(Bd, { optional: !0 }) ?? []).reduceRight(Kv, ag)), e(n, t)
        );
      }
      let qv = (() => {
        class e extends rc {
          constructor(t, i) {
            super(), (this.backend = t), (this.injector = i), (this.chain = null);
          }
          handle(t) {
            if (null === this.chain) {
              const i = Array.from(new Set(this.injector.get(Ea)));
              this.chain = i.reduceRight(
                (u, f) =>
                  (function sc(e, n, t) {
                    return (i, u) => t.runInContext(() => n(i, (f) => e(f, u)));
                  })(u, f, this.injector),
                ag
              );
            }
            return this.chain(t, (i) => this.backend.handle(i));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(kd), a.LFG(a.lqb));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const JC = /^\)\]\}',?\n/;
      let lg = (() => {
        class e {
          constructor(t) {
            this.xhrFactory = t;
          }
          handle(t) {
            if ('JSONP' === t.method)
              throw new Error(
                'Attempted to construct Jsonp request without HttpClientJsonpModule installed.'
              );
            return new Un.y((i) => {
              const u = this.xhrFactory.build();
              if (
                (u.open(t.method, t.urlWithParams),
                t.withCredentials && (u.withCredentials = !0),
                t.headers.forEach((z, X) => u.setRequestHeader(z, X.join(','))),
                t.headers.has('Accept') ||
                  u.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                !t.headers.has('Content-Type'))
              ) {
                const z = t.detectContentTypeHeader();
                null !== z && u.setRequestHeader('Content-Type', z);
              }
              if (t.responseType) {
                const z = t.responseType.toLowerCase();
                u.responseType = 'json' !== z ? z : 'text';
              }
              const f = t.serializeBody();
              let h = null;
              const _ = () => {
                  if (null !== h) return h;
                  const z = u.statusText || 'OK',
                    X = new so(u.getAllResponseHeaders()),
                    Te =
                      (function QC(e) {
                        return 'responseURL' in e && e.responseURL
                          ? e.responseURL
                          : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                          ? e.getResponseHeader('X-Request-URL')
                          : null;
                      })(u) || t.url;
                  return (h = new og({ headers: X, status: u.status, statusText: z, url: Te })), h;
                },
                v = () => {
                  let { headers: z, status: X, statusText: Te, url: xe } = _(),
                    Be = null;
                  204 !== X && (Be = typeof u.response > 'u' ? u.responseText : u.response),
                    0 === X && (X = Be ? 200 : 0);
                  let it = X >= 200 && X < 300;
                  if ('json' === t.responseType && 'string' == typeof Be) {
                    const Xt = Be;
                    Be = Be.replace(JC, '');
                    try {
                      Be = '' !== Be ? JSON.parse(Be) : null;
                    } catch (wn) {
                      (Be = Xt), it && ((it = !1), (Be = { error: wn, text: Be }));
                    }
                  }
                  it
                    ? (i.next(
                        new va({
                          body: Be,
                          headers: z,
                          status: X,
                          statusText: Te,
                          url: xe || void 0,
                        })
                      ),
                      i.complete())
                    : i.error(
                        new ig({
                          error: Be,
                          headers: z,
                          status: X,
                          statusText: Te,
                          url: xe || void 0,
                        })
                      );
                },
                C = (z) => {
                  const { url: X } = _(),
                    Te = new ig({
                      error: z,
                      status: u.status || 0,
                      statusText: u.statusText || 'Unknown Error',
                      url: X || void 0,
                    });
                  i.error(Te);
                };
              let w = !1;
              const F = (z) => {
                  w || (i.next(_()), (w = !0));
                  let X = { type: Ft.DownloadProgress, loaded: z.loaded };
                  z.lengthComputable && (X.total = z.total),
                    'text' === t.responseType && u.responseText && (X.partialText = u.responseText),
                    i.next(X);
                },
                Q = (z) => {
                  let X = { type: Ft.UploadProgress, loaded: z.loaded };
                  z.lengthComputable && (X.total = z.total), i.next(X);
                };
              return (
                u.addEventListener('load', v),
                u.addEventListener('error', C),
                u.addEventListener('timeout', C),
                u.addEventListener('abort', C),
                t.reportProgress &&
                  (u.addEventListener('progress', F),
                  null !== f && u.upload && u.upload.addEventListener('progress', Q)),
                u.send(f),
                i.next({ type: Ft.Sent }),
                () => {
                  u.removeEventListener('error', C),
                    u.removeEventListener('abort', C),
                    u.removeEventListener('load', v),
                    u.removeEventListener('timeout', C),
                    t.reportProgress &&
                      (u.removeEventListener('progress', F),
                      null !== f && u.upload && u.upload.removeEventListener('progress', Q)),
                    u.readyState !== u.DONE && u.abort();
                }
              );
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(Ip));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const ac = new a.OlP('XSRF_ENABLED'),
        Gd = new a.OlP('XSRF_COOKIE_NAME', { providedIn: 'root', factory: () => 'XSRF-TOKEN' }),
        zd = new a.OlP('XSRF_HEADER_NAME', { providedIn: 'root', factory: () => 'X-XSRF-TOKEN' });
      class Mr {}
      let Xv = (() => {
        class e {
          constructor(t, i, u) {
            (this.doc = t),
              (this.platform = i),
              (this.cookieName = u),
              (this.lastCookieString = ''),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          getToken() {
            if ('server' === this.platform) return null;
            const t = this.doc.cookie || '';
            return (
              t !== this.lastCookieString &&
                (this.parseCount++,
                (this.lastToken = si(t, this.cookieName)),
                (this.lastCookieString = t)),
              this.lastToken
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(k), a.LFG(a.Lbi), a.LFG(Gd));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function eE(e, n) {
        const t = e.url.toLowerCase();
        if (
          !(0, a.f3M)(ac) ||
          'GET' === e.method ||
          'HEAD' === e.method ||
          t.startsWith('http://') ||
          t.startsWith('https://')
        )
          return n(e);
        const i = (0, a.f3M)(Mr).getToken(),
          u = (0, a.f3M)(zd);
        return (
          null != i && !e.headers.has(u) && (e = e.clone({ headers: e.headers.set(u, i) })), n(e)
        );
      }
      var $t = (() => (
        (($t = $t || {})[($t.Interceptors = 0)] = 'Interceptors'),
        ($t[($t.LegacyInterceptors = 1)] = 'LegacyInterceptors'),
        ($t[($t.CustomXsrfConfiguration = 2)] = 'CustomXsrfConfiguration'),
        ($t[($t.NoXsrfProtection = 3)] = 'NoXsrfProtection'),
        ($t[($t.JsonpSupport = 4)] = 'JsonpSupport'),
        ($t[($t.RequestsMadeViaParent = 5)] = 'RequestsMadeViaParent'),
        $t
      ))();
      function Fo(e, n) {
        return { ɵkind: e, ɵproviders: n };
      }
      function tE(...e) {
        const n = [
          Ar,
          lg,
          qv,
          { provide: rc, useExisting: qv },
          { provide: kd, useExisting: lg },
          { provide: Ea, useValue: eE, multi: !0 },
          { provide: ac, useValue: !0 },
          { provide: Mr, useClass: Xv },
        ];
        for (const t of e) n.push(...t.ɵproviders);
        return (0, a.MR2)(n);
      }
      const fg = new a.OlP('LEGACY_INTERCEPTOR_FN');
      let Da = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({
            providers: [
              tE(
                Fo($t.LegacyInterceptors, [
                  { provide: fg, useFactory: ug },
                  { provide: Ea, useExisting: fg, multi: !0 },
                ])
              ),
            ],
          })),
          e
        );
      })();
      var Ca = E(6451),
        No = E(7579),
        Vn = E(4482),
        fn = E(5403),
        rE = E(5032),
        Lo = E(515),
        cc = E(576);
      function as(e, n) {
        const t = (0, cc.m)(e) ? e : () => e,
          i = (u) => u.error(t());
        return new Un.y(n ? (u) => n.schedule(i, 0, u) : i);
      }
      class Tr {
        constructor(n, t, i) {
          (this.kind = n), (this.value = t), (this.error = i), (this.hasValue = 'N' === n);
        }
        observe(n) {
          return lc(this, n);
        }
        do(n, t, i) {
          const { kind: u, value: f, error: h } = this;
          return 'N' === u ? n?.(f) : 'E' === u ? t?.(h) : i?.();
        }
        accept(n, t, i) {
          var u;
          return (0, cc.m)(null === (u = n) || void 0 === u ? void 0 : u.next)
            ? this.observe(n)
            : this.do(n, t, i);
        }
        toObservable() {
          const { kind: n, value: t, error: i } = this,
            u = 'N' === n ? (0, we.of)(t) : 'E' === n ? as(() => i) : 'C' === n ? Lo.E : 0;
          if (!u) throw new TypeError(`Unexpected notification kind ${n}`);
          return u;
        }
        static createNext(n) {
          return new Tr('N', n);
        }
        static createError(n) {
          return new Tr('E', void 0, n);
        }
        static createComplete() {
          return Tr.completeNotification;
        }
      }
      function lc(e, n) {
        var t, i, u;
        const { kind: f, value: h, error: _ } = e;
        if ('string' != typeof f) throw new TypeError('Invalid notification, missing "kind"');
        'N' === f
          ? null === (t = n.next) || void 0 === t || t.call(n, h)
          : 'E' === f
          ? null === (i = n.error) || void 0 === i || i.call(n, _)
          : null === (u = n.complete) || void 0 === u || u.call(n);
      }
      Tr.completeNotification = new Tr('C');
      var bt = E(262),
        wa = E(8421);
      function mg(e, n, t, i) {
        return (0, Vn.e)((u, f) => {
          let h;
          n && 'function' != typeof n ? ({ duration: t, element: h, connector: i } = n) : (h = n);
          const _ = new Map(),
            v = (X) => {
              _.forEach(X), X(f);
            },
            C = (X) => v((Te) => Te.error(X));
          let w = 0,
            F = !1;
          const Q = new fn.Q(
            f,
            (X) => {
              try {
                const Te = e(X);
                let xe = _.get(Te);
                if (!xe) {
                  _.set(Te, (xe = i ? i() : new No.x()));
                  const Be = (function z(X, Te) {
                    const xe = new Un.y((Be) => {
                      w++;
                      const it = Te.subscribe(Be);
                      return () => {
                        it.unsubscribe(), 0 == --w && F && Q.unsubscribe();
                      };
                    });
                    return (xe.key = X), xe;
                  })(Te, xe);
                  if ((f.next(Be), t)) {
                    const it = (0, fn.x)(
                      xe,
                      () => {
                        xe.complete(), it?.unsubscribe();
                      },
                      void 0,
                      void 0,
                      () => _.delete(Te)
                    );
                    Q.add((0, wa.Xf)(t(Be)).subscribe(it));
                  }
                }
                xe.next(h ? h(X) : X);
              } catch (Te) {
                C(Te);
              }
            },
            () => v((X) => X.complete()),
            C,
            () => _.clear(),
            () => ((F = !0), 0 === w)
          );
          u.subscribe(Q);
        });
      }
      var hn = E(5577);
      function un(e, n) {
        return n
          ? (t) =>
              t.pipe(un((i, u) => (0, wa.Xf)(e(i, u)).pipe((0, le.U)((f, h) => n(i, f, u, h)))))
          : (0, Vn.e)((t, i) => {
              let u = 0,
                f = null,
                h = !1;
              t.subscribe(
                (0, fn.x)(
                  i,
                  (_) => {
                    f ||
                      ((f = (0, fn.x)(i, void 0, () => {
                        (f = null), h && i.complete();
                      })),
                      (0, wa.Xf)(e(_, u++)).subscribe(f));
                  },
                  () => {
                    (h = !0), !f && i.complete();
                  }
                )
              );
            });
      }
      var dr = E(5698),
        T = E(2997);
      const yg = { dispatch: !0, functional: !1, useEffectsErrorHandler: !0 },
        dc = '__@ngrx/effects_create__';
      function Nt(e, n = {}) {
        const t = n.functional ? e : e(),
          i = { ...yg, ...n };
        return Object.defineProperty(t, dc, { value: i }), t;
      }
      function Eg(e) {
        return Object.getPrototypeOf(e);
      }
      function Zd(e) {
        return 'function' == typeof e;
      }
      function fc(e) {
        return e.filter(Zd);
      }
      function Wd(e, n, t) {
        const i = Eg(e).constructor.name,
          u = (function vg(e) {
            return (function iE(e) {
              return Object.getOwnPropertyNames(e)
                .filter(
                  (i) => !(!e[i] || !e[i].hasOwnProperty(dc)) && e[i][dc].hasOwnProperty('dispatch')
                )
                .map((i) => ({ propertyName: i, ...e[i][dc] }));
            })(e);
          })(e).map(({ propertyName: f, dispatch: h, useEffectsErrorHandler: _ }) => {
            const v = 'function' == typeof e[f] ? e[f]() : e[f],
              C = _ ? t(v, n) : v;
            return !1 === h
              ? C.pipe(
                  (function gg() {
                    return (0, Vn.e)((e, n) => {
                      e.subscribe((0, fn.x)(n, rE.Z));
                    });
                  })()
                )
              : C.pipe(
                  (function oE() {
                    return (0, Vn.e)((e, n) => {
                      e.subscribe(
                        (0, fn.x)(
                          n,
                          (t) => {
                            n.next(Tr.createNext(t));
                          },
                          () => {
                            n.next(Tr.createComplete()), n.complete();
                          },
                          (t) => {
                            n.next(Tr.createError(t)), n.complete();
                          }
                        )
                      );
                    });
                  })()
                ).pipe(
                  (0, le.U)((F) => ({
                    effect: e[f],
                    notification: F,
                    propertyName: f,
                    sourceName: i,
                    sourceInstance: e,
                  }))
                );
          });
        return (0, Ca.T)(...u);
      }
      const Dg = 10;
      function hc(e, n, t = Dg) {
        return e.pipe((0, bt.K)((i) => (n && n.handleError(i), t <= 1 ? e : hc(e, n, t - 1))));
      }
      let vn = (() => {
        class e extends Un.y {
          constructor(t) {
            super(), t && (this.source = t);
          }
          lift(t) {
            const i = new e();
            return (i.source = this), (i.operator = t), i;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(T.Y$));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function Ht(...e) {
        return (0, Wt.h)((n) =>
          e.some((t) => ('string' == typeof t ? t === n.type : t.type === n.type))
        );
      }
      const Yd = new a.OlP('@ngrx/effects Internal Root Guard'),
        Sa = new a.OlP('@ngrx/effects User Provided Effects'),
        ao = new a.OlP('@ngrx/effects Internal Root Effects'),
        Kd = new a.OlP('@ngrx/effects Internal Root Effects Instances'),
        qd = new a.OlP('@ngrx/effects Internal Feature Effects'),
        Cg = new a.OlP('@ngrx/effects Internal Feature Effects Instance Groups'),
        iw = new a.OlP('@ngrx/effects Effects Error Handler', {
          providedIn: 'root',
          factory: () => hc,
        }),
        ba = '@ngrx/effects/init';
      (0, T.PH)(ba);
      const Ag = 'ngrxOnIdentifyEffects',
        Qd = 'ngrxOnInitEffects';
      function Xd(e) {
        return Aa(e, Qd);
      }
      function Aa(e, n) {
        return e && n in e && 'function' == typeof e[n];
      }
      let gi = (() => {
        class e extends No.x {
          constructor(t, i) {
            super(), (this.errorHandler = t), (this.effectsErrorHandler = i);
          }
          addEffects(t) {
            this.next(t);
          }
          toActions() {
            return this.pipe(
              mg((t) =>
                (function sE(e) {
                  return 'Object' !== e.constructor.name && 'Function' !== e.constructor.name;
                })(t)
                  ? Eg(t)
                  : t
              ),
              (0, hn.z)((t) => t.pipe(mg(uE))),
              (0, hn.z)((t) => {
                const i = t.pipe(
                    un((f) =>
                      (function Tg(e, n) {
                        return (t) => {
                          const i = Wd(t, e, n);
                          return (function Mg(e) {
                            return Aa(e, 'ngrxOnRunEffects');
                          })(t)
                            ? t.ngrxOnRunEffects(i)
                            : i;
                        };
                      })(
                        this.errorHandler,
                        this.effectsErrorHandler
                      )(f)
                    ),
                    (0, le.U)(
                      (f) => (
                        (function wg(e, n) {
                          if ('N' === e.notification.kind) {
                            const t = e.notification.value;
                            !(function Sg(e) {
                              return (
                                'function' != typeof e && e && e.type && 'string' == typeof e.type
                              );
                            })(t) &&
                              n.handleError(
                                new Error(
                                  `Effect ${(function bg({
                                    propertyName: e,
                                    sourceInstance: n,
                                    sourceName: t,
                                  }) {
                                    const i = 'function' == typeof n[e];
                                    return `"${t}.${String(e)}${i ? '()' : ''}"`;
                                  })(e)} dispatched an invalid action: ${(function Jd(e) {
                                    try {
                                      return JSON.stringify(e);
                                    } catch {
                                      return e;
                                    }
                                  })(t)}`
                                )
                              );
                          }
                        })(f, this.errorHandler),
                        f.notification
                      )
                    ),
                    (0, Wt.h)((f) => 'N' === f.kind && null != f.value),
                    (function _g() {
                      return (0, Vn.e)((e, n) => {
                        e.subscribe((0, fn.x)(n, (t) => lc(t, n)));
                      });
                    })()
                  ),
                  u = t.pipe(
                    (0, dr.q)(1),
                    (0, Wt.h)(Xd),
                    (0, le.U)((f) => f.ngrxOnInitEffects())
                  );
                return (0, Ca.T)(i, u);
              })
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(a.qLn), a.LFG(iw));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function uE(e) {
        return (function pc(e) {
          return Aa(e, Ag);
        })(e)
          ? e.ngrxOnIdentifyEffects()
          : '';
      }
      let ef = (() => {
          class e {
            constructor(t, i) {
              (this.effectSources = t), (this.store = i), (this.effectsSubscription = null);
            }
            get isStarted() {
              return !!this.effectsSubscription;
            }
            start() {
              this.effectsSubscription ||
                (this.effectsSubscription = this.effectSources.toActions().subscribe(this.store));
            }
            ngOnDestroy() {
              this.effectsSubscription &&
                (this.effectsSubscription.unsubscribe(), (this.effectsSubscription = null));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(gi), a.LFG(T.yh));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        Ig = (() => {
          class e {
            constructor(t, i, u, f, h, _, v) {
              (this.sources = t), i.start();
              for (const C of f) t.addEffects(C);
              u.dispatch({ type: ba });
            }
            addEffects(t) {
              this.sources.addEffects(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                a.LFG(gi),
                a.LFG(ef),
                a.LFG(T.yh),
                a.LFG(Kd),
                a.LFG(T.cr, 8),
                a.LFG(T.CK, 8),
                a.LFG(Yd, 8)
              );
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({})),
            e
          );
        })(),
        cE = (() => {
          class e {
            constructor(t, i, u, f) {
              const h = i.flat();
              for (const _ of h) t.addEffects(_);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(Ig), a.LFG(Cg), a.LFG(T.cr, 8), a.LFG(T.CK, 8));
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({})),
            e
          );
        })(),
        Ir = (() => {
          class e {
            static forFeature(...t) {
              const i = t.flat(),
                u = fc(i);
              return {
                ngModule: cE,
                providers: [
                  u,
                  { provide: qd, multi: !0, useValue: i },
                  { provide: Sa, multi: !0, useValue: [] },
                  { provide: Cg, multi: !0, useFactory: tf, deps: [qd, Sa] },
                ],
              };
            }
            static forRoot(...t) {
              const i = t.flat(),
                u = fc(i);
              return {
                ngModule: Ig,
                providers: [
                  u,
                  { provide: ao, useValue: [i] },
                  { provide: Yd, useFactory: mc },
                  { provide: Sa, multi: !0, useValue: [] },
                  { provide: Kd, useFactory: tf, deps: [ao, Sa] },
                ],
              };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({})),
            e
          );
        })();
      function tf(e, n) {
        const t = [];
        for (const i of e) t.push(...i);
        for (const i of n) t.push(...i);
        return t.map((i) => (Zd(i) ? (0, a.f3M)(i) : i));
      }
      function mc() {
        const e = (0, a.f3M)(ef, { optional: !0, skipSelf: !0 }),
          n = (0, a.f3M)(ao, { self: !0 });
        if ((1 !== n.length || 0 !== n[0].length) && e)
          throw new TypeError(
            'EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.'
          );
        return 'guarded';
      }
      var cn = E(457),
        Or = E(1135);
      const mi = (0, E(3888).d)(
          (e) =>
            function () {
              e(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence');
            }
        ),
        { isArray: dE } = Array,
        { getPrototypeOf: Pg, prototype: _c, keys: nf } = Object;
      function rf(e) {
        if (1 === e.length) {
          const n = e[0];
          if (dE(n)) return { args: n, keys: null };
          if (
            (function xg(e) {
              return e && 'object' == typeof e && Pg(e) === _c;
            })(n)
          ) {
            const t = nf(n);
            return { args: t.map((i) => n[i]), keys: t };
          }
        }
        return { args: e, keys: null };
      }
      var us = E(4671);
      const { isArray: Rg } = Array;
      function Fg(e) {
        return (0, le.U)((n) =>
          (function fE(e, n) {
            return Rg(n) ? e(...n) : e(n);
          })(e, n)
        );
      }
      var Ta = E(7669);
      function Ng(e, n) {
        return e.reduce((t, i, u) => ((t[i] = n[u]), t), {});
      }
      var hE = E(9672);
      function er(...e) {
        const n = (0, Ta.yG)(e),
          t = (0, Ta.jO)(e),
          { args: i, keys: u } = rf(e);
        if (0 === i.length) return (0, cn.D)([], n);
        const f = new Un.y(
          (function Ia(e, n, t = us.y) {
            return (i) => {
              Lg(
                n,
                () => {
                  const { length: u } = e,
                    f = new Array(u);
                  let h = u,
                    _ = u;
                  for (let v = 0; v < u; v++)
                    Lg(
                      n,
                      () => {
                        const C = (0, cn.D)(e[v], n);
                        let w = !1;
                        C.subscribe(
                          (0, fn.x)(
                            i,
                            (F) => {
                              (f[v] = F), w || ((w = !0), _--), _ || i.next(t(f.slice()));
                            },
                            () => {
                              --h || i.complete();
                            }
                          )
                        );
                      },
                      i
                    );
                },
                i
              );
            };
          })(i, n, u ? (h) => Ng(u, h) : us.y)
        );
        return t ? f.pipe(Fg(t)) : f;
      }
      function Lg(e, n, t) {
        e ? (0, hE.f)(t, e, n) : n();
      }
      var yc = E(8189);
      function kg(...e) {
        return (function aw() {
          return (0, yc.J)(1);
        })()((0, cn.D)(e, (0, Ta.yG)(e)));
      }
      function pE(e) {
        return new Un.y((n) => {
          (0, wa.Xf)(e()).subscribe(n);
        });
      }
      var uw = E(9635),
        sf = E(727);
      function af() {
        return (0, Vn.e)((e, n) => {
          let t = null;
          e._refCount++;
          const i = (0, fn.x)(n, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) return void (t = null);
            const u = e._connection,
              f = t;
            (t = null), u && (!f || u === f) && u.unsubscribe(), n.unsubscribe();
          });
          e.subscribe(i), i.closed || (t = e.connect());
        });
      }
      class Ug extends Un.y {
        constructor(n, t) {
          super(),
            (this.source = n),
            (this.subjectFactory = t),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, Vn.A)(n) && (this.lift = n.lift);
        }
        _subscribe(n) {
          return this.getSubject().subscribe(n);
        }
        getSubject() {
          const n = this._subject;
          return (!n || n.isStopped) && (this._subject = this.subjectFactory()), this._subject;
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: n } = this;
          (this._subject = this._connection = null), n?.unsubscribe();
        }
        connect() {
          let n = this._connection;
          if (!n) {
            n = this._connection = new sf.w0();
            const t = this.getSubject();
            n.add(
              this.source.subscribe(
                (0, fn.x)(
                  t,
                  void 0,
                  () => {
                    this._teardown(), t.complete();
                  },
                  (i) => {
                    this._teardown(), t.error(i);
                  },
                  () => this._teardown()
                )
              )
            ),
              n.closed && ((this._connection = null), (n = sf.w0.EMPTY));
          }
          return n;
        }
        refCount() {
          return af()(this);
        }
      }
      var Hr = E(3900);
      function cs(e) {
        return (0, Vn.e)((n, t) => {
          let i = !1;
          n.subscribe(
            (0, fn.x)(
              t,
              (u) => {
                (i = !0), t.next(u);
              },
              () => {
                i || t.next(e), t.complete();
              }
            )
          );
        });
      }
      function Gr(e = Oa) {
        return (0, Vn.e)((n, t) => {
          let i = !1;
          n.subscribe(
            (0, fn.x)(
              t,
              (u) => {
                (i = !0), t.next(u);
              },
              () => (i ? t.complete() : t.error(e()))
            )
          );
        });
      }
      function Oa() {
        return new mi();
      }
      function uo(e, n) {
        const t = arguments.length >= 2;
        return (i) =>
          i.pipe(
            e ? (0, Wt.h)((u, f) => e(u, f, i)) : us.y,
            (0, dr.q)(1),
            t ? cs(n) : Gr(() => new mi())
          );
      }
      function Pt(e, n, t) {
        const i = (0, cc.m)(e) || n || t ? { next: e, error: n, complete: t } : e;
        return i
          ? (0, Vn.e)((u, f) => {
              var h;
              null === (h = i.subscribe) || void 0 === h || h.call(i);
              let _ = !0;
              u.subscribe(
                (0, fn.x)(
                  f,
                  (v) => {
                    var C;
                    null === (C = i.next) || void 0 === C || C.call(i, v), f.next(v);
                  },
                  () => {
                    var v;
                    (_ = !1), null === (v = i.complete) || void 0 === v || v.call(i), f.complete();
                  },
                  (v) => {
                    var C;
                    (_ = !1), null === (C = i.error) || void 0 === C || C.call(i, v), f.error(v);
                  },
                  () => {
                    var v, C;
                    _ && (null === (v = i.unsubscribe) || void 0 === v || v.call(i)),
                      null === (C = i.finalize) || void 0 === C || C.call(i);
                  }
                )
              );
            })
          : us.y;
      }
      var uf = E(5026);
      function Vg(e) {
        return e <= 0
          ? () => Lo.E
          : (0, Vn.e)((n, t) => {
              let i = [];
              n.subscribe(
                (0, fn.x)(
                  t,
                  (u) => {
                    i.push(u), e < i.length && i.shift();
                  },
                  () => {
                    for (const u of i) t.next(u);
                    t.complete();
                  },
                  void 0,
                  () => {
                    i = null;
                  }
                )
              );
            });
      }
      function mE(e, n) {
        const t = arguments.length >= 2;
        return (i) =>
          i.pipe(e ? (0, Wt.h)((u, f) => e(u, f, i)) : us.y, Vg(1), t ? cs(n) : Gr(() => new mi()));
      }
      function Pa(e) {
        return (0, Vn.e)((n, t) => {
          try {
            n.subscribe(t);
          } finally {
            t.add(e);
          }
        });
      }
      const rt = 'primary',
        vc = Symbol('RouteTitle');
      class jg {
        constructor(n) {
          this.params = n || {};
        }
        has(n) {
          return Object.prototype.hasOwnProperty.call(this.params, n);
        }
        get(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function ls(e) {
        return new jg(e);
      }
      function _E(e, n, t) {
        const i = t.path.split('/');
        if (
          i.length > e.length ||
          ('full' === t.pathMatch && (n.hasChildren() || i.length < e.length))
        )
          return null;
        const u = {};
        for (let f = 0; f < i.length; f++) {
          const h = i[f],
            _ = e[f];
          if (h.startsWith(':')) u[h.substring(1)] = _;
          else if (h !== _.path) return null;
        }
        return { consumed: e.slice(0, i.length), posParams: u };
      }
      function zr(e, n) {
        const t = e ? Object.keys(e) : void 0,
          i = n ? Object.keys(n) : void 0;
        if (!t || !i || t.length != i.length) return !1;
        let u;
        for (let f = 0; f < t.length; f++) if (((u = t[f]), !lf(e[u], n[u]))) return !1;
        return !0;
      }
      function lf(e, n) {
        if (Array.isArray(e) && Array.isArray(n)) {
          if (e.length !== n.length) return !1;
          const t = [...e].sort(),
            i = [...n].sort();
          return t.every((u, f) => i[f] === u);
        }
        return e === n;
      }
      function xa(e) {
        return Array.prototype.concat.apply([], e);
      }
      function Bg(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function pn(e, n) {
        for (const t in e) e.hasOwnProperty(t) && n(e[t], t);
      }
      function Ct(e) {
        return (0, a.CqO)(e) ? e : (0, a.QGY)(e) ? (0, cn.D)(Promise.resolve(e)) : (0, we.of)(e);
      }
      const Ec = !1,
        vE = {
          exact: function Hg(e, n, t) {
            if (
              !ko(e.segments, n.segments) ||
              !hf(e.segments, n.segments, t) ||
              e.numberOfChildren !== n.numberOfChildren
            )
              return !1;
            for (const i in n.children)
              if (!e.children[i] || !Hg(e.children[i], n.children[i], t)) return !1;
            return !0;
          },
          subset: Gg,
        },
        Dc = {
          exact: function EE(e, n) {
            return zr(e, n);
          },
          subset: function DE(e, n) {
            return (
              Object.keys(n).length <= Object.keys(e).length &&
              Object.keys(n).every((t) => lf(e[t], n[t]))
            );
          },
          ignored: () => !0,
        };
      function df(e, n, t) {
        return (
          vE[t.paths](e.root, n.root, t.matrixParams) &&
          Dc[t.queryParams](e.queryParams, n.queryParams) &&
          !('exact' === t.fragment && e.fragment !== n.fragment)
        );
      }
      function Gg(e, n, t) {
        return ff(e, n, n.segments, t);
      }
      function ff(e, n, t, i) {
        if (e.segments.length > t.length) {
          const u = e.segments.slice(0, t.length);
          return !(!ko(u, t) || n.hasChildren() || !hf(u, t, i));
        }
        if (e.segments.length === t.length) {
          if (!ko(e.segments, t) || !hf(e.segments, t, i)) return !1;
          for (const u in n.children)
            if (!e.children[u] || !Gg(e.children[u], n.children[u], i)) return !1;
          return !0;
        }
        {
          const u = t.slice(0, e.segments.length),
            f = t.slice(e.segments.length);
          return (
            !!(ko(e.segments, u) && hf(e.segments, u, i) && e.children[rt]) &&
            ff(e.children[rt], n, f, i)
          );
        }
      }
      function hf(e, n, t) {
        return n.every((i, u) => Dc[t](e[u].parameters, i.parameters));
      }
      class _i {
        constructor(n = new Xe([], {}), t = {}, i = null) {
          (this.root = n), (this.queryParams = t), (this.fragment = i);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = ls(this.queryParams)), this._queryParamMap
          );
        }
        toString() {
          return Wg.serialize(this);
        }
      }
      class Xe {
        constructor(n, t) {
          (this.segments = n),
            (this.children = t),
            (this.parent = null),
            pn(t, (i, u) => (i.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Fa(this);
        }
      }
      class yi {
        constructor(n, t) {
          (this.path = n), (this.parameters = t);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = ls(this.parameters)), this._parameterMap
          );
        }
        toString() {
          return Uo(this);
        }
      }
      function ko(e, n) {
        return e.length === n.length && e.every((t, i) => t.path === n[i].path);
      }
      let Ra = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = a.Yz7({
            token: e,
            factory: function () {
              return new pf();
            },
            providedIn: 'root',
          })),
          e
        );
      })();
      class pf {
        parse(n) {
          const t = new yf(n);
          return new _i(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
        }
        serialize(n) {
          const t = `/${vi(n.root, !0)}`,
            i = (function mf(e) {
              const n = Object.keys(e)
                .map((t) => {
                  const i = e[t];
                  return Array.isArray(i)
                    ? i.map((u) => `${ds(t)}=${ds(u)}`).join('&')
                    : `${ds(t)}=${ds(i)}`;
                })
                .filter((t) => !!t);
              return n.length ? `?${n.join('&')}` : '';
            })(n.queryParams);
          return `${t}${i}${
            'string' == typeof n.fragment
              ? `#${(function wE(e) {
                  return encodeURI(e);
                })(n.fragment)}`
              : ''
          }`;
        }
      }
      const Wg = new pf();
      function Fa(e) {
        return e.segments.map((n) => Uo(n)).join('/');
      }
      function vi(e, n) {
        if (!e.hasChildren()) return Fa(e);
        if (n) {
          const t = e.children[rt] ? vi(e.children[rt], !1) : '',
            i = [];
          return (
            pn(e.children, (u, f) => {
              f !== rt && i.push(`${f}:${vi(u, !1)}`);
            }),
            i.length > 0 ? `${t}(${i.join('//')})` : t
          );
        }
        {
          const t = (function Zg(e, n) {
            let t = [];
            return (
              pn(e.children, (i, u) => {
                u === rt && (t = t.concat(n(i, u)));
              }),
              pn(e.children, (i, u) => {
                u !== rt && (t = t.concat(n(i, u)));
              }),
              t
            );
          })(e, (i, u) => (u === rt ? [vi(e.children[rt], !1)] : [`${u}:${vi(i, !1)}`]));
          return 1 === Object.keys(e.children).length && null != e.children[rt]
            ? `${Fa(e)}/${t[0]}`
            : `${Fa(e)}/(${t.join('//')})`;
        }
      }
      function CE(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function ds(e) {
        return CE(e).replace(/%3B/gi, ';');
      }
      function Na(e) {
        return CE(e).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function La(e) {
        return decodeURIComponent(e);
      }
      function gf(e) {
        return La(e.replace(/\+/g, '%20'));
      }
      function Uo(e) {
        return `${Na(e.path)}${(function SE(e) {
          return Object.keys(e)
            .map((n) => `;${Na(n)}=${Na(e[n])}`)
            .join('');
        })(e.parameters)}`;
      }
      const Cc = /^[^\/()?;=#]+/;
      function wc(e) {
        const n = e.match(Cc);
        return n ? n[0] : '';
      }
      const _f = /^[^=?&#]+/,
        Ei = /^[^&#]+/;
      class yf {
        constructor(n) {
          (this.url = n), (this.remaining = n);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new Xe([], {})
              : new Xe([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const n = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(n);
            } while (this.consumeOptional('&'));
          return n;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const n = [];
          for (
            this.peekStartsWith('(') || n.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), n.push(this.parseSegment());
          let t = {};
          this.peekStartsWith('/(') && (this.capture('/'), (t = this.parseParens(!0)));
          let i = {};
          return (
            this.peekStartsWith('(') && (i = this.parseParens(!1)),
            (n.length > 0 || Object.keys(t).length > 0) && (i[rt] = new Xe(n, t)),
            i
          );
        }
        parseSegment() {
          const n = wc(this.remaining);
          if ('' === n && this.peekStartsWith(';')) throw new a.vHH(4009, Ec);
          return this.capture(n), new yi(La(n), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const n = {};
          for (; this.consumeOptional(';'); ) this.parseParam(n);
          return n;
        }
        parseParam(n) {
          const t = wc(this.remaining);
          if (!t) return;
          this.capture(t);
          let i = '';
          if (this.consumeOptional('=')) {
            const u = wc(this.remaining);
            u && ((i = u), this.capture(i));
          }
          n[La(t)] = La(i);
        }
        parseQueryParam(n) {
          const t = (function Sc(e) {
            const n = e.match(_f);
            return n ? n[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let i = '';
          if (this.consumeOptional('=')) {
            const h = (function Yg(e) {
              const n = e.match(Ei);
              return n ? n[0] : '';
            })(this.remaining);
            h && ((i = h), this.capture(i));
          }
          const u = gf(t),
            f = gf(i);
          if (n.hasOwnProperty(u)) {
            let h = n[u];
            Array.isArray(h) || ((h = [h]), (n[u] = h)), h.push(f);
          } else n[u] = f;
        }
        parseParens(n) {
          const t = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const i = wc(this.remaining),
              u = this.remaining[i.length];
            if ('/' !== u && ')' !== u && ';' !== u) throw new a.vHH(4010, Ec);
            let f;
            i.indexOf(':') > -1
              ? ((f = i.slice(0, i.indexOf(':'))), this.capture(f), this.capture(':'))
              : n && (f = rt);
            const h = this.parseChildren();
            (t[f] = 1 === Object.keys(h).length ? h[rt] : new Xe([], h)),
              this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(n) {
          return this.remaining.startsWith(n);
        }
        consumeOptional(n) {
          return (
            !!this.peekStartsWith(n) && ((this.remaining = this.remaining.substring(n.length)), !0)
          );
        }
        capture(n) {
          if (!this.consumeOptional(n)) throw new a.vHH(4011, Ec);
        }
      }
      function vf(e) {
        return e.segments.length > 0 ? new Xe([], { [rt]: e }) : e;
      }
      function bc(e) {
        const n = {};
        for (const i of Object.keys(e.children)) {
          const f = bc(e.children[i]);
          (f.segments.length > 0 || f.hasChildren()) && (n[i] = f);
        }
        return (function Kg(e) {
          if (1 === e.numberOfChildren && e.children[rt]) {
            const n = e.children[rt];
            return new Xe(e.segments.concat(n.segments), n.children);
          }
          return e;
        })(new Xe(e.segments, n));
      }
      function fr(e) {
        return e instanceof _i;
      }
      const Ef = !1;
      function bE(e, n, t, i, u) {
        if (0 === t.length) return Di(n.root, n.root, n.root, i, u);
        const f = (function hs(e) {
          if ('string' == typeof e[0] && 1 === e.length && '/' === e[0]) return new Jg(!0, 0, e);
          let n = 0,
            t = !1;
          const i = e.reduce((u, f, h) => {
            if ('object' == typeof f && null != f) {
              if (f.outlets) {
                const _ = {};
                return (
                  pn(f.outlets, (v, C) => {
                    _[C] = 'string' == typeof v ? v.split('/') : v;
                  }),
                  [...u, { outlets: _ }]
                );
              }
              if (f.segmentPath) return [...u, f.segmentPath];
            }
            return 'string' != typeof f
              ? [...u, f]
              : 0 === h
              ? (f.split('/').forEach((_, v) => {
                  (0 == v && '.' === _) ||
                    (0 == v && '' === _ ? (t = !0) : '..' === _ ? n++ : '' != _ && u.push(_));
                }),
                u)
              : [...u, f];
          }, []);
          return new Jg(t, n, i);
        })(t);
        return f.toRoot()
          ? Di(n.root, n.root, new Xe([], {}), i, u)
          : (function h(v) {
              const C = (function Ua(e, n, t, i) {
                  if (e.isAbsolute) return new ps(n.root, !0, 0);
                  if (-1 === i) return new ps(t, t === n.root, 0);
                  return (function Qg(e, n, t) {
                    let i = e,
                      u = n,
                      f = t;
                    for (; f > u; ) {
                      if (((f -= u), (i = i.parent), !i))
                        throw new a.vHH(4005, Ef && "Invalid number of '../'");
                      u = i.segments.length;
                    }
                    return new ps(i, !1, u - f);
                  })(t, i + (fs(e.commands[0]) ? 0 : 1), e.numberOfDoubleDots);
                })(f, n, e.snapshot?._urlSegment, v),
                w = C.processChildren
                  ? ms(C.segmentGroup, C.index, f.commands)
                  : Df(C.segmentGroup, C.index, f.commands);
              return Di(n.root, C.segmentGroup, w, i, u);
            })(e.snapshot?._lastPathIndex);
      }
      function fs(e) {
        return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
      }
      function ka(e) {
        return 'object' == typeof e && null != e && e.outlets;
      }
      function Di(e, n, t, i, u) {
        let h,
          f = {};
        i &&
          pn(i, (v, C) => {
            f[C] = Array.isArray(v) ? v.map((w) => `${w}`) : `${v}`;
          }),
          (h = e === n ? t : AE(e, n, t));
        const _ = vf(bc(h));
        return new _i(_, f, u);
      }
      function AE(e, n, t) {
        const i = {};
        return (
          pn(e.children, (u, f) => {
            i[f] = u === n ? t : AE(u, n, t);
          }),
          new Xe(e.segments, i)
        );
      }
      class Jg {
        constructor(n, t, i) {
          if (
            ((this.isAbsolute = n),
            (this.numberOfDoubleDots = t),
            (this.commands = i),
            n && i.length > 0 && fs(i[0]))
          )
            throw new a.vHH(4003, Ef && 'Root segment cannot have matrix parameters');
          const u = i.find(ka);
          if (u && u !== Bg(i))
            throw new a.vHH(4004, Ef && '{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class ps {
        constructor(n, t, i) {
          (this.segmentGroup = n), (this.processChildren = t), (this.index = i);
        }
      }
      function Df(e, n, t) {
        if ((e || (e = new Xe([], {})), 0 === e.segments.length && e.hasChildren()))
          return ms(e, n, t);
        const i = (function ME(e, n, t) {
            let i = 0,
              u = n;
            const f = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; u < e.segments.length; ) {
              if (i >= t.length) return f;
              const h = e.segments[u],
                _ = t[i];
              if (ka(_)) break;
              const v = `${_}`,
                C = i < t.length - 1 ? t[i + 1] : null;
              if (u > 0 && void 0 === v) break;
              if (v && C && 'object' == typeof C && void 0 === C.outlets) {
                if (!Ic(v, C, h)) return f;
                i += 2;
              } else {
                if (!Ic(v, {}, h)) return f;
                i++;
              }
              u++;
            }
            return { match: !0, pathIndex: u, commandIndex: i };
          })(e, n, t),
          u = t.slice(i.commandIndex);
        if (i.match && i.pathIndex < e.segments.length) {
          const f = new Xe(e.segments.slice(0, i.pathIndex), {});
          return (f.children[rt] = new Xe(e.segments.slice(i.pathIndex), e.children)), ms(f, 0, u);
        }
        return i.match && 0 === u.length
          ? new Xe(e.segments, {})
          : i.match && !e.hasChildren()
          ? Mc(e, n, t)
          : i.match
          ? ms(e, 0, u)
          : Mc(e, n, t);
      }
      function ms(e, n, t) {
        if (0 === t.length) return new Xe(e.segments, {});
        {
          const i = (function Xg(e) {
              return ka(e[0]) ? e[0].outlets : { [rt]: e };
            })(t),
            u = {};
          if (
            !i[rt] &&
            e.children[rt] &&
            1 === e.numberOfChildren &&
            0 === e.children[rt].segments.length
          ) {
            const f = ms(e.children[rt], n, t);
            return new Xe(e.segments, f.children);
          }
          return (
            pn(i, (f, h) => {
              'string' == typeof f && (f = [f]), null !== f && (u[h] = Df(e.children[h], n, f));
            }),
            pn(e.children, (f, h) => {
              void 0 === i[h] && (u[h] = f);
            }),
            new Xe(e.segments, u)
          );
        }
      }
      function Mc(e, n, t) {
        const i = e.segments.slice(0, n);
        let u = 0;
        for (; u < t.length; ) {
          const f = t[u];
          if (ka(f)) {
            const v = TE(f.outlets);
            return new Xe(i, v);
          }
          if (0 === u && fs(t[0])) {
            i.push(new yi(e.segments[n].path, Tc(t[0]))), u++;
            continue;
          }
          const h = ka(f) ? f.outlets[rt] : `${f}`,
            _ = u < t.length - 1 ? t[u + 1] : null;
          h && _ && fs(_) ? (i.push(new yi(h, Tc(_))), (u += 2)) : (i.push(new yi(h, {})), u++);
        }
        return new Xe(i, {});
      }
      function TE(e) {
        const n = {};
        return (
          pn(e, (t, i) => {
            'string' == typeof t && (t = [t]), null !== t && (n[i] = Mc(new Xe([], {}), 0, t));
          }),
          n
        );
      }
      function Tc(e) {
        const n = {};
        return pn(e, (t, i) => (n[i] = `${t}`)), n;
      }
      function Ic(e, n, t) {
        return e == t.path && zr(n, t.parameters);
      }
      const Va = 'imperative';
      class hr {
        constructor(n, t) {
          (this.id = n), (this.url = t);
        }
      }
      class co extends hr {
        constructor(n, t, i = 'imperative', u = null) {
          super(n, t), (this.type = 0), (this.navigationTrigger = i), (this.restoredState = u);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Vo extends hr {
        constructor(n, t, i) {
          super(n, t), (this.urlAfterRedirects = i), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class ja extends hr {
        constructor(n, t, i, u) {
          super(n, t), (this.reason = i), (this.code = u), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Oc extends hr {
        constructor(n, t, i, u) {
          super(n, t), (this.reason = i), (this.code = u), (this.type = 16);
        }
      }
      class Ba extends hr {
        constructor(n, t, i, u) {
          super(n, t), (this.error = i), (this.target = u), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Cf extends hr {
        constructor(n, t, i, u) {
          super(n, t), (this.urlAfterRedirects = i), (this.state = u), (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class IE extends hr {
        constructor(n, t, i, u) {
          super(n, t), (this.urlAfterRedirects = i), (this.state = u), (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class OE extends hr {
        constructor(n, t, i, u, f) {
          super(n, t),
            (this.urlAfterRedirects = i),
            (this.state = u),
            (this.shouldActivate = f),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class _s extends hr {
        constructor(n, t, i, u) {
          super(n, t), (this.urlAfterRedirects = i), (this.state = u), (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Zr extends hr {
        constructor(n, t, i, u) {
          super(n, t), (this.urlAfterRedirects = i), (this.state = u), (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class PE {
        constructor(n) {
          (this.route = n), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class xE {
        constructor(n) {
          (this.route = n), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class dw {
        constructor(n) {
          (this.snapshot = n), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class fw {
        constructor(n) {
          (this.snapshot = n), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class em {
        constructor(n) {
          (this.snapshot = n), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class hw {
        constructor(n) {
          (this.snapshot = n), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class wf {
        constructor(n, t, i) {
          (this.routerEvent = n), (this.position = t), (this.anchor = i), (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let nm = (() => {
          class e {
            createUrlTree(t, i, u, f, h, _) {
              return bE(t || i.root, u, f, h, _);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        NE = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({
              token: e,
              factory: function (n) {
                return nm.ɵfac(n);
              },
              providedIn: 'root',
            })),
            e
          );
        })();
      class pr {
        constructor(n) {
          this._root = n;
        }
        get root() {
          return this._root.value;
        }
        parent(n) {
          const t = this.pathFromRoot(n);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(n) {
          const t = Sf(n, this._root);
          return t ? t.children.map((i) => i.value) : [];
        }
        firstChild(n) {
          const t = Sf(n, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(n) {
          const t = Pc(n, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children.map((u) => u.value).filter((u) => u !== n);
        }
        pathFromRoot(n) {
          return Pc(n, this._root).map((t) => t.value);
        }
      }
      function Sf(e, n) {
        if (e === n.value) return n;
        for (const t of n.children) {
          const i = Sf(e, t);
          if (i) return i;
        }
        return null;
      }
      function Pc(e, n) {
        if (e === n.value) return [n];
        for (const t of n.children) {
          const i = Pc(e, t);
          if (i.length) return i.unshift(n), i;
        }
        return [];
      }
      class lo {
        constructor(n, t) {
          (this.value = n), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function ys(e) {
        const n = {};
        return e && e.children.forEach((t) => (n[t.value.outlet] = t)), n;
      }
      class rm extends pr {
        constructor(n, t) {
          super(n), (this.snapshot = t), xc(this, n);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function om(e, n) {
        const t = (function im(e, n) {
            const h = new $e([], {}, {}, '', {}, rt, n, null, e.root, -1, {});
            return new bf('', new lo(h, []));
          })(e, n),
          i = new Or.X([new yi('', {})]),
          u = new Or.X({}),
          f = new Or.X({}),
          h = new Or.X({}),
          _ = new Or.X(''),
          v = new gr(i, u, h, _, f, rt, n, t.root);
        return (v.snapshot = t.root), new rm(new lo(v, []), t);
      }
      class gr {
        constructor(n, t, i, u, f, h, _, v) {
          (this.url = n),
            (this.params = t),
            (this.queryParams = i),
            (this.fragment = u),
            (this.data = f),
            (this.outlet = h),
            (this.component = _),
            (this.title = this.data?.pipe((0, le.U)((C) => C[vc])) ?? (0, we.of)(void 0)),
            (this._futureSnapshot = v);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = this.params.pipe((0, le.U)((n) => ls(n)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe((0, le.U)((n) => ls(n)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function sm(e, n = 'emptyOnly') {
        const t = e.pathFromRoot;
        let i = 0;
        if ('always' !== n)
          for (i = t.length - 1; i >= 1; ) {
            const u = t[i],
              f = t[i - 1];
            if (u.routeConfig && '' === u.routeConfig.path) i--;
            else {
              if (f.component) break;
              i--;
            }
          }
        return (function LE(e) {
          return e.reduce(
            (n, t) => ({
              params: { ...n.params, ...t.params },
              data: { ...n.data, ...t.data },
              resolve: { ...t.data, ...n.resolve, ...t.routeConfig?.data, ...t._resolvedData },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(t.slice(i));
      }
      class $e {
        get title() {
          return this.data?.[vc];
        }
        constructor(n, t, i, u, f, h, _, v, C, w, F) {
          (this.url = n),
            (this.params = t),
            (this.queryParams = i),
            (this.fragment = u),
            (this.data = f),
            (this.outlet = h),
            (this.component = _),
            (this.routeConfig = v),
            (this._urlSegment = C),
            (this._lastPathIndex = w),
            (this._resolve = F);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = ls(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = ls(this.queryParams)), this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url.map((i) => i.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class bf extends pr {
        constructor(n, t) {
          super(t), (this.url = n), xc(this, t);
        }
        toString() {
          return Af(this._root);
        }
      }
      function xc(e, n) {
        (n.value._routerState = e), n.children.forEach((t) => xc(e, t));
      }
      function Af(e) {
        const n = e.children.length > 0 ? ` { ${e.children.map(Af).join(', ')} } ` : '';
        return `${e.value}${n}`;
      }
      function Mf(e) {
        if (e.snapshot) {
          const n = e.snapshot,
            t = e._futureSnapshot;
          (e.snapshot = t),
            zr(n.queryParams, t.queryParams) || e.queryParams.next(t.queryParams),
            n.fragment !== t.fragment && e.fragment.next(t.fragment),
            zr(n.params, t.params) || e.params.next(t.params),
            (function yE(e, n) {
              if (e.length !== n.length) return !1;
              for (let t = 0; t < e.length; ++t) if (!zr(e[t], n[t])) return !1;
              return !0;
            })(n.url, t.url) || e.url.next(t.url),
            zr(n.data, t.data) || e.data.next(t.data);
        } else (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function Tf(e, n) {
        const t =
          zr(e.params, n.params) &&
          (function zg(e, n) {
            return ko(e, n) && e.every((t, i) => zr(t.parameters, n[i].parameters));
          })(e.url, n.url);
        return t && !(!e.parent != !n.parent) && (!e.parent || Tf(e.parent, n.parent));
      }
      function $a(e, n, t) {
        if (t && e.shouldReuseRoute(n.value, t.value.snapshot)) {
          const i = t.value;
          i._futureSnapshot = n.value;
          const u = (function um(e, n, t) {
            return n.children.map((i) => {
              for (const u of t.children)
                if (e.shouldReuseRoute(i.value, u.value.snapshot)) return $a(e, i, u);
              return $a(e, i);
            });
          })(e, n, t);
          return new lo(i, u);
        }
        {
          if (e.shouldAttach(n.value)) {
            const f = e.retrieve(n.value);
            if (null !== f) {
              const h = f.route;
              return (
                (h.value._futureSnapshot = n.value),
                (h.children = n.children.map((_) => $a(e, _))),
                h
              );
            }
          }
          const i = (function kE(e) {
              return new gr(
                new Or.X(e.url),
                new Or.X(e.params),
                new Or.X(e.queryParams),
                new Or.X(e.fragment),
                new Or.X(e.data),
                e.outlet,
                e.component,
                e
              );
            })(n.value),
            u = n.children.map((f) => $a(e, f));
          return new lo(i, u);
        }
      }
      const If = 'ngNavigationCancelingError';
      function UE(e, n) {
        const { redirectTo: t, navigationBehaviorOptions: i } = fr(n)
            ? { redirectTo: n, navigationBehaviorOptions: void 0 }
            : n,
          u = Of(!1, 0, n);
        return (u.url = t), (u.navigationBehaviorOptions = i), u;
      }
      function Of(e, n, t) {
        const i = new Error('NavigationCancelingError: ' + (e || ''));
        return (i[If] = !0), (i.cancellationCode = n), t && (i.url = t), i;
      }
      function Pf(e) {
        return jo(e) && fr(e.url);
      }
      function jo(e) {
        return e && e[If];
      }
      class VE {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new Ci()),
            (this.attachRef = null);
        }
      }
      let Ci = (() => {
        class e {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(t, i) {
            const u = this.getOrCreateContext(t);
            (u.outlet = i), this.contexts.set(t, u);
          }
          onChildOutletDestroyed(t) {
            const i = this.getContext(t);
            i && ((i.outlet = null), (i.attachRef = null));
          }
          onOutletDeactivated() {
            const t = this.contexts;
            return (this.contexts = new Map()), t;
          }
          onOutletReAttached(t) {
            this.contexts = t;
          }
          getOrCreateContext(t) {
            let i = this.getContext(t);
            return i || ((i = new VE()), this.contexts.set(t, i)), i;
          }
          getContext(t) {
            return this.contexts.get(t) || null;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const vs = !1;
      let xf = (() => {
        class e {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = rt),
              (this.activateEvents = new a.vpe()),
              (this.deactivateEvents = new a.vpe()),
              (this.attachEvents = new a.vpe()),
              (this.detachEvents = new a.vpe()),
              (this.parentContexts = (0, a.f3M)(Ci)),
              (this.location = (0, a.f3M)(a.s_b)),
              (this.changeDetector = (0, a.f3M)(a.sBO)),
              (this.environmentInjector = (0, a.f3M)(a.lqb));
          }
          ngOnChanges(t) {
            if (t.name) {
              const { firstChange: i, previousValue: u } = t.name;
              if (i) return;
              this.isTrackedInParentContexts(u) &&
                (this.deactivate(), this.parentContexts.onChildOutletDestroyed(u)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          isTrackedInParentContexts(t) {
            return this.parentContexts.getContext(t)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if ((this.parentContexts.onChildOutletCreated(this.name, this), this.activated)) return;
            const t = this.parentContexts.getContext(this.name);
            t?.route &&
              (t.attachRef
                ? this.attach(t.attachRef, t.route)
                : this.activateWith(t.route, t.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new a.vHH(4012, vs);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new a.vHH(4012, vs);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new a.vHH(4012, vs);
            this.location.detach();
            const t = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(t.instance),
              t
            );
          }
          attach(t, i) {
            (this.activated = t),
              (this._activatedRoute = i),
              this.location.insert(t.hostView),
              this.attachEvents.emit(t.instance);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, i) {
            if (this.isActivated) throw new a.vHH(4013, vs);
            this._activatedRoute = t;
            const u = this.location,
              h = t.snapshot.component,
              _ = this.parentContexts.getOrCreateContext(this.name).children,
              v = new pw(t, _, u.injector);
            if (
              i &&
              (function gw(e) {
                return !!e.resolveComponentFactory;
              })(i)
            ) {
              const C = i.resolveComponentFactory(h);
              this.activated = u.createComponent(C, u.length, v);
            } else
              this.activated = u.createComponent(h, {
                index: u.length,
                injector: v,
                environmentInjector: i ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵdir = a.lG2({
            type: e,
            selectors: [['router-outlet']],
            inputs: { name: 'name' },
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
              attachEvents: 'attach',
              detachEvents: 'detach',
            },
            exportAs: ['outlet'],
            standalone: !0,
            features: [a.TTD],
          })),
          e
        );
      })();
      class pw {
        constructor(n, t, i) {
          (this.route = n), (this.childContexts = t), (this.parent = i);
        }
        get(n, t) {
          return n === gr ? this.route : n === Ci ? this.childContexts : this.parent.get(n, t);
        }
      }
      let cm = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ng-component']],
            standalone: !0,
            features: [a.jDz],
            decls: 1,
            vars: 0,
            template: function (t, i) {
              1 & t && a._UZ(0, 'router-outlet');
            },
            dependencies: [xf],
            encapsulation: 2,
          })),
          e
        );
      })();
      function lm(e, n) {
        return (
          e.providers &&
            !e._injector &&
            (e._injector = (0, a.MMx)(e.providers, n, `Route: ${e.path}`)),
          e._injector ?? n
        );
      }
      function Fc(e) {
        const n = e.children && e.children.map(Fc),
          t = n ? { ...e, children: n } : { ...e };
        return (
          !t.component &&
            !t.loadComponent &&
            (n || t.loadChildren) &&
            t.outlet &&
            t.outlet !== rt &&
            (t.component = cm),
          t
        );
      }
      function mr(e) {
        return e.outlet || rt;
      }
      function fm(e, n) {
        const t = e.filter((i) => mr(i) === n);
        return t.push(...e.filter((i) => mr(i) !== n)), t;
      }
      function Ga(e) {
        if (!e) return null;
        if (e.routeConfig?._injector) return e.routeConfig._injector;
        for (let n = e.parent; n; n = n.parent) {
          const t = n.routeConfig;
          if (t?._loadedInjector) return t._loadedInjector;
          if (t?._injector) return t._injector;
        }
        return null;
      }
      class HE {
        constructor(n, t, i, u) {
          (this.routeReuseStrategy = n),
            (this.futureState = t),
            (this.currState = i),
            (this.forwardEvent = u);
        }
        activate(n) {
          const t = this.futureState._root,
            i = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, i, n),
            Mf(this.futureState.root),
            this.activateChildRoutes(t, i, n);
        }
        deactivateChildRoutes(n, t, i) {
          const u = ys(t);
          n.children.forEach((f) => {
            const h = f.value.outlet;
            this.deactivateRoutes(f, u[h], i), delete u[h];
          }),
            pn(u, (f, h) => {
              this.deactivateRouteAndItsChildren(f, i);
            });
        }
        deactivateRoutes(n, t, i) {
          const u = n.value,
            f = t ? t.value : null;
          if (u === f)
            if (u.component) {
              const h = i.getContext(u.outlet);
              h && this.deactivateChildRoutes(n, t, h.children);
            } else this.deactivateChildRoutes(n, t, i);
          else f && this.deactivateRouteAndItsChildren(t, i);
        }
        deactivateRouteAndItsChildren(n, t) {
          n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot)
            ? this.detachAndStoreRouteSubtree(n, t)
            : this.deactivateRouteAndOutlet(n, t);
        }
        detachAndStoreRouteSubtree(n, t) {
          const i = t.getContext(n.value.outlet),
            u = i && n.value.component ? i.children : t,
            f = ys(n);
          for (const h of Object.keys(f)) this.deactivateRouteAndItsChildren(f[h], u);
          if (i && i.outlet) {
            const h = i.outlet.detach(),
              _ = i.children.onOutletDeactivated();
            this.routeReuseStrategy.store(n.value.snapshot, {
              componentRef: h,
              route: n,
              contexts: _,
            });
          }
        }
        deactivateRouteAndOutlet(n, t) {
          const i = t.getContext(n.value.outlet),
            u = i && n.value.component ? i.children : t,
            f = ys(n);
          for (const h of Object.keys(f)) this.deactivateRouteAndItsChildren(f[h], u);
          i &&
            (i.outlet && (i.outlet.deactivate(), i.children.onOutletDeactivated()),
            (i.attachRef = null),
            (i.resolver = null),
            (i.route = null));
        }
        activateChildRoutes(n, t, i) {
          const u = ys(t);
          n.children.forEach((f) => {
            this.activateRoutes(f, u[f.value.outlet], i),
              this.forwardEvent(new hw(f.value.snapshot));
          }),
            n.children.length && this.forwardEvent(new fw(n.value.snapshot));
        }
        activateRoutes(n, t, i) {
          const u = n.value,
            f = t ? t.value : null;
          if ((Mf(u), u === f))
            if (u.component) {
              const h = i.getOrCreateContext(u.outlet);
              this.activateChildRoutes(n, t, h.children);
            } else this.activateChildRoutes(n, t, i);
          else if (u.component) {
            const h = i.getOrCreateContext(u.outlet);
            if (this.routeReuseStrategy.shouldAttach(u.snapshot)) {
              const _ = this.routeReuseStrategy.retrieve(u.snapshot);
              this.routeReuseStrategy.store(u.snapshot, null),
                h.children.onOutletReAttached(_.contexts),
                (h.attachRef = _.componentRef),
                (h.route = _.route.value),
                h.outlet && h.outlet.attach(_.componentRef, _.route.value),
                Mf(_.route.value),
                this.activateChildRoutes(n, null, h.children);
            } else {
              const _ = Ga(u.snapshot),
                v = _?.get(a._Vd) ?? null;
              (h.attachRef = null),
                (h.route = u),
                (h.resolver = v),
                (h.injector = _),
                h.outlet && h.outlet.activateWith(u, h.injector),
                this.activateChildRoutes(n, null, h.children);
            }
          } else this.activateChildRoutes(n, null, i);
        }
      }
      class Ff {
        constructor(n) {
          (this.path = n), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Nc {
        constructor(n, t) {
          (this.component = n), (this.route = t);
        }
      }
      function hm(e, n, t) {
        const i = e._root;
        return Lc(i, n ? n._root : null, t, [i.value]);
      }
      function Bo(e, n) {
        const t = Symbol(),
          i = n.get(e, t);
        return i === t ? ('function' != typeof e || (0, a.Z0I)(e) ? n.get(e) : e) : i;
      }
      function Lc(e, n, t, i, u = { canDeactivateChecks: [], canActivateChecks: [] }) {
        const f = ys(n);
        return (
          e.children.forEach((h) => {
            (function Nf(e, n, t, i, u = { canDeactivateChecks: [], canActivateChecks: [] }) {
              const f = e.value,
                h = n ? n.value : null,
                _ = t ? t.getContext(e.value.outlet) : null;
              if (h && f.routeConfig === h.routeConfig) {
                const v = (function GE(e, n, t) {
                  if ('function' == typeof t) return t(e, n);
                  switch (t) {
                    case 'pathParamsChange':
                      return !ko(e.url, n.url);
                    case 'pathParamsOrQueryParamsChange':
                      return !ko(e.url, n.url) || !zr(e.queryParams, n.queryParams);
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Tf(e, n) || !zr(e.queryParams, n.queryParams);
                    default:
                      return !Tf(e, n);
                  }
                })(h, f, f.routeConfig.runGuardsAndResolvers);
                v
                  ? u.canActivateChecks.push(new Ff(i))
                  : ((f.data = h.data), (f._resolvedData = h._resolvedData)),
                  Lc(e, n, f.component ? (_ ? _.children : null) : t, i, u),
                  v &&
                    _ &&
                    _.outlet &&
                    _.outlet.isActivated &&
                    u.canDeactivateChecks.push(new Nc(_.outlet.component, h));
              } else
                h && kc(n, _, u),
                  u.canActivateChecks.push(new Ff(i)),
                  Lc(e, null, f.component ? (_ ? _.children : null) : t, i, u);
            })(h, f[h.value.outlet], t, i.concat([h.value]), u),
              delete f[h.value.outlet];
          }),
          pn(f, (h, _) => kc(h, t.getContext(_), u)),
          u
        );
      }
      function kc(e, n, t) {
        const i = ys(e),
          u = e.value;
        pn(i, (f, h) => {
          kc(f, u.component ? (n ? n.children.getContext(h) : null) : n, t);
        }),
          t.canDeactivateChecks.push(
            new Nc(
              u.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null,
              u
            )
          );
      }
      function Wr(e) {
        return 'function' == typeof e;
      }
      function wi(e) {
        return e instanceof mi || 'EmptyError' === e?.name;
      }
      const Es = Symbol('INITIAL_VALUE');
      function fo() {
        return (0, Hr.w)((e) =>
          er(
            e.map((n) =>
              n.pipe(
                (0, dr.q)(1),
                (function gE(...e) {
                  const n = (0, Ta.yG)(e);
                  return (0, Vn.e)((t, i) => {
                    (n ? kg(e, t, n) : kg(e, t)).subscribe(i);
                  });
                })(Es)
              )
            )
          ).pipe(
            (0, le.U)((n) => {
              for (const t of n)
                if (!0 !== t) {
                  if (t === Es) return Es;
                  if (!1 === t || t instanceof _i) return t;
                }
              return !0;
            }),
            (0, Wt.h)((n) => n !== Es),
            (0, dr.q)(1)
          )
        );
      }
      function Em(e) {
        return (0, uw.z)(
          Pt((n) => {
            if (fr(n)) throw UE(0, n);
          }),
          (0, le.U)((n) => !0 === n)
        );
      }
      const Vc = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Cm(e, n, t, i, u) {
        const f = Bf(e, n, t);
        return f.matched
          ? (function Dm(e, n, t, i) {
              const u = n.canMatch;
              if (!u || 0 === u.length) return (0, we.of)(!0);
              const f = u.map((h) => {
                const _ = Bo(h, e);
                return Ct(
                  (function Uc(e) {
                    return e && Wr(e.canMatch);
                  })(_)
                    ? _.canMatch(n, t)
                    : e.runInContext(() => _(n, t))
                );
              });
              return (0, we.of)(f).pipe(fo(), Em());
            })((i = lm(n, i)), n, t).pipe((0, le.U)((h) => (!0 === h ? f : { ...Vc })))
          : (0, we.of)(f);
      }
      function Bf(e, n, t) {
        if ('' === n.path)
          return 'full' === n.pathMatch && (e.hasChildren() || t.length > 0)
            ? { ...Vc }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: t,
                parameters: {},
                positionalParamSegments: {},
              };
        const u = (n.matcher || _E)(t, e, n);
        if (!u) return { ...Vc };
        const f = {};
        pn(u.posParams, (_, v) => {
          f[v] = _.path;
        });
        const h =
          u.consumed.length > 0 ? { ...f, ...u.consumed[u.consumed.length - 1].parameters } : f;
        return {
          matched: !0,
          consumedSegments: u.consumed,
          remainingSegments: t.slice(u.consumed.length),
          parameters: h,
          positionalParamSegments: u.posParams ?? {},
        };
      }
      function En(e, n, t, i) {
        if (
          t.length > 0 &&
          (function _w(e, n, t) {
            return t.some((i) => Za(e, n, i) && mr(i) !== rt);
          })(e, t, i)
        ) {
          const f = new Xe(
            n,
            (function qE(e, n, t, i) {
              const u = {};
              (u[rt] = i), (i._sourceSegment = e), (i._segmentIndexShift = n.length);
              for (const f of t)
                if ('' === f.path && mr(f) !== rt) {
                  const h = new Xe([], {});
                  (h._sourceSegment = e), (h._segmentIndexShift = n.length), (u[mr(f)] = h);
                }
              return u;
            })(e, n, i, new Xe(t, e.children))
          );
          return (
            (f._sourceSegment = e),
            (f._segmentIndexShift = n.length),
            { segmentGroup: f, slicedSegments: [] }
          );
        }
        if (
          0 === t.length &&
          (function $f(e, n, t) {
            return t.some((i) => Za(e, n, i));
          })(e, t, i)
        ) {
          const f = new Xe(
            e.segments,
            (function wm(e, n, t, i, u) {
              const f = {};
              for (const h of i)
                if (Za(e, t, h) && !u[mr(h)]) {
                  const _ = new Xe([], {});
                  (_._sourceSegment = e), (_._segmentIndexShift = n.length), (f[mr(h)] = _);
                }
              return { ...u, ...f };
            })(e, n, t, i, e.children)
          );
          return (
            (f._sourceSegment = e),
            (f._segmentIndexShift = n.length),
            { segmentGroup: f, slicedSegments: t }
          );
        }
        const u = new Xe(e.segments, e.children);
        return (
          (u._sourceSegment = e),
          (u._segmentIndexShift = n.length),
          { segmentGroup: u, slicedSegments: t }
        );
      }
      function Za(e, n, t) {
        return (!(e.hasChildren() || n.length > 0) || 'full' !== t.pathMatch) && '' === t.path;
      }
      function Sm(e, n, t, i) {
        return (
          !!(mr(e) === i || (i !== rt && Za(n, t, e))) && ('**' === e.path || Bf(n, e, t).matched)
        );
      }
      function bm(e, n, t) {
        return 0 === n.length && !e.children[t];
      }
      const jc = !1;
      class Wa {
        constructor(n) {
          this.segmentGroup = n || null;
        }
      }
      class Am {
        constructor(n) {
          this.urlTree = n;
        }
      }
      function Ya(e) {
        return as(new Wa(e));
      }
      function Bc(e) {
        return as(new Am(e));
      }
      class e0 {
        constructor(n, t, i, u, f) {
          (this.injector = n),
            (this.configLoader = t),
            (this.urlSerializer = i),
            (this.urlTree = u),
            (this.config = f),
            (this.allowRedirects = !0);
        }
        apply() {
          const n = En(this.urlTree.root, [], [], this.config).segmentGroup,
            t = new Xe(n.segments, n.children);
          return this.expandSegmentGroup(this.injector, this.config, t, rt)
            .pipe(
              (0, le.U)((f) =>
                this.createUrlTree(bc(f), this.urlTree.queryParams, this.urlTree.fragment)
              )
            )
            .pipe(
              (0, bt.K)((f) => {
                if (f instanceof Am) return (this.allowRedirects = !1), this.match(f.urlTree);
                throw f instanceof Wa ? this.noMatchError(f) : f;
              })
            );
        }
        match(n) {
          return this.expandSegmentGroup(this.injector, this.config, n.root, rt)
            .pipe((0, le.U)((u) => this.createUrlTree(bc(u), n.queryParams, n.fragment)))
            .pipe(
              (0, bt.K)((u) => {
                throw u instanceof Wa ? this.noMatchError(u) : u;
              })
            );
        }
        noMatchError(n) {
          return new a.vHH(4002, jc);
        }
        createUrlTree(n, t, i) {
          const u = vf(n);
          return new _i(u, t, i);
        }
        expandSegmentGroup(n, t, i, u) {
          return 0 === i.segments.length && i.hasChildren()
            ? this.expandChildren(n, t, i).pipe((0, le.U)((f) => new Xe([], f)))
            : this.expandSegment(n, i, t, i.segments, u, !0);
        }
        expandChildren(n, t, i) {
          const u = [];
          for (const f of Object.keys(i.children)) 'primary' === f ? u.unshift(f) : u.push(f);
          return (0, cn.D)(u).pipe(
            (0, pi.b)((f) => {
              const h = i.children[f],
                _ = fm(t, f);
              return this.expandSegmentGroup(n, _, h, f).pipe(
                (0, le.U)((v) => ({ segment: v, outlet: f }))
              );
            }),
            (0, uf.R)((f, h) => ((f[h.outlet] = h.segment), f), {}),
            mE()
          );
        }
        expandSegment(n, t, i, u, f, h) {
          return (0, cn.D)(i).pipe(
            (0, pi.b)((_) =>
              this.expandSegmentAgainstRoute(n, t, i, _, u, f, h).pipe(
                (0, bt.K)((C) => {
                  if (C instanceof Wa) return (0, we.of)(null);
                  throw C;
                })
              )
            ),
            uo((_) => !!_),
            (0, bt.K)((_, v) => {
              if (wi(_)) return bm(t, u, f) ? (0, we.of)(new Xe([], {})) : Ya(t);
              throw _;
            })
          );
        }
        expandSegmentAgainstRoute(n, t, i, u, f, h, _) {
          return Sm(u, t, f, h)
            ? void 0 === u.redirectTo
              ? this.matchSegmentAgainstRoute(n, t, u, f, h)
              : _ && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(n, t, i, u, f, h)
              : Ya(t)
            : Ya(t);
        }
        expandSegmentAgainstRouteUsingRedirect(n, t, i, u, f, h) {
          return '**' === u.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(n, i, u, h)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(n, t, i, u, f, h);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(n, t, i, u) {
          const f = this.applyRedirectCommands([], i.redirectTo, {});
          return i.redirectTo.startsWith('/')
            ? Bc(f)
            : this.lineralizeSegments(i, f).pipe(
                (0, hn.z)((h) => {
                  const _ = new Xe(h, {});
                  return this.expandSegment(n, _, t, h, u, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(n, t, i, u, f, h) {
          const {
            matched: _,
            consumedSegments: v,
            remainingSegments: C,
            positionalParamSegments: w,
          } = Bf(t, u, f);
          if (!_) return Ya(t);
          const F = this.applyRedirectCommands(v, u.redirectTo, w);
          return u.redirectTo.startsWith('/')
            ? Bc(F)
            : this.lineralizeSegments(u, F).pipe(
                (0, hn.z)((Q) => this.expandSegment(n, t, i, Q.concat(C), h, !1))
              );
        }
        matchSegmentAgainstRoute(n, t, i, u, f) {
          return '**' === i.path
            ? ((n = lm(i, n)),
              i.loadChildren
                ? (i._loadedRoutes
                    ? (0, we.of)({ routes: i._loadedRoutes, injector: i._loadedInjector })
                    : this.configLoader.loadChildren(n, i)
                  ).pipe(
                    (0, le.U)(
                      (_) => (
                        (i._loadedRoutes = _.routes),
                        (i._loadedInjector = _.injector),
                        new Xe(u, {})
                      )
                    )
                  )
                : (0, we.of)(new Xe(u, {})))
            : Cm(t, i, u, n).pipe(
                (0, Hr.w)(({ matched: h, consumedSegments: _, remainingSegments: v }) =>
                  h
                    ? this.getChildConfig((n = i._injector ?? n), i, u).pipe(
                        (0, hn.z)((w) => {
                          const F = w.injector ?? n,
                            Q = w.routes,
                            { segmentGroup: z, slicedSegments: X } = En(t, _, v, Q),
                            Te = new Xe(z.segments, z.children);
                          if (0 === X.length && Te.hasChildren())
                            return this.expandChildren(F, Q, Te).pipe(
                              (0, le.U)((Xt) => new Xe(_, Xt))
                            );
                          if (0 === Q.length && 0 === X.length) return (0, we.of)(new Xe(_, {}));
                          const xe = mr(i) === f;
                          return this.expandSegment(F, Te, Q, X, xe ? rt : f, !0).pipe(
                            (0, le.U)((it) => new Xe(_.concat(it.segments), it.children))
                          );
                        })
                      )
                    : Ya(t)
                )
              );
        }
        getChildConfig(n, t, i) {
          return t.children
            ? (0, we.of)({ routes: t.children, injector: n })
            : t.loadChildren
            ? void 0 !== t._loadedRoutes
              ? (0, we.of)({ routes: t._loadedRoutes, injector: t._loadedInjector })
              : (function vm(e, n, t, i) {
                  const u = n.canLoad;
                  if (void 0 === u || 0 === u.length) return (0, we.of)(!0);
                  const f = u.map((h) => {
                    const _ = Bo(h, e);
                    return Ct(
                      (function zE(e) {
                        return e && Wr(e.canLoad);
                      })(_)
                        ? _.canLoad(n, t)
                        : e.runInContext(() => _(n, t))
                    );
                  });
                  return (0, we.of)(f).pipe(fo(), Em());
                })(n, t, i).pipe(
                  (0, hn.z)((u) =>
                    u
                      ? this.configLoader.loadChildren(n, t).pipe(
                          Pt((f) => {
                            (t._loadedRoutes = f.routes), (t._loadedInjector = f.injector);
                          })
                        )
                      : (function QE(e) {
                          return as(Of(jc, 3));
                        })()
                  )
                )
            : (0, we.of)({ routes: [], injector: n });
        }
        lineralizeSegments(n, t) {
          let i = [],
            u = t.root;
          for (;;) {
            if (((i = i.concat(u.segments)), 0 === u.numberOfChildren)) return (0, we.of)(i);
            if (u.numberOfChildren > 1 || !u.children[rt])
              return n.redirectTo, as(new a.vHH(4e3, jc));
            u = u.children[rt];
          }
        }
        applyRedirectCommands(n, t, i) {
          return this.applyRedirectCreateUrlTree(t, this.urlSerializer.parse(t), n, i);
        }
        applyRedirectCreateUrlTree(n, t, i, u) {
          const f = this.createSegmentGroup(n, t.root, i, u);
          return new _i(
            f,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(n, t) {
          const i = {};
          return (
            pn(n, (u, f) => {
              if ('string' == typeof u && u.startsWith(':')) {
                const _ = u.substring(1);
                i[f] = t[_];
              } else i[f] = u;
            }),
            i
          );
        }
        createSegmentGroup(n, t, i, u) {
          const f = this.createSegments(n, t.segments, i, u);
          let h = {};
          return (
            pn(t.children, (_, v) => {
              h[v] = this.createSegmentGroup(n, _, i, u);
            }),
            new Xe(f, h)
          );
        }
        createSegments(n, t, i, u) {
          return t.map((f) =>
            f.path.startsWith(':') ? this.findPosParam(n, f, u) : this.findOrReturn(f, i)
          );
        }
        findPosParam(n, t, i) {
          const u = i[t.path.substring(1)];
          if (!u) throw new a.vHH(4001, jc);
          return u;
        }
        findOrReturn(n, t) {
          let i = 0;
          for (const u of t) {
            if (u.path === n.path) return t.splice(i), u;
            i++;
          }
          return n;
        }
      }
      class Hf {}
      class Mm {
        constructor(n, t, i, u, f, h, _) {
          (this.injector = n),
            (this.rootComponentType = t),
            (this.config = i),
            (this.urlTree = u),
            (this.url = f),
            (this.paramsInheritanceStrategy = h),
            (this.urlSerializer = _);
        }
        recognize() {
          const n = En(
            this.urlTree.root,
            [],
            [],
            this.config.filter((t) => void 0 === t.redirectTo)
          ).segmentGroup;
          return this.processSegmentGroup(this.injector, this.config, n, rt).pipe(
            (0, le.U)((t) => {
              if (null === t) return null;
              const i = new $e(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  rt,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {}
                ),
                u = new lo(i, t),
                f = new bf(this.url, u);
              return this.inheritParamsAndData(f._root), f;
            })
          );
        }
        inheritParamsAndData(n) {
          const t = n.value,
            i = sm(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(i.params)),
            (t.data = Object.freeze(i.data)),
            n.children.forEach((u) => this.inheritParamsAndData(u));
        }
        processSegmentGroup(n, t, i, u) {
          return 0 === i.segments.length && i.hasChildren()
            ? this.processChildren(n, t, i)
            : this.processSegment(n, t, i, i.segments, u);
        }
        processChildren(n, t, i) {
          return (0, cn.D)(Object.keys(i.children)).pipe(
            (0, pi.b)((u) => {
              const f = i.children[u],
                h = fm(t, u);
              return this.processSegmentGroup(n, h, f, u);
            }),
            (0, uf.R)((u, f) => (u && f ? (u.push(...f), u) : null)),
            (function cw(e, n = !1) {
              return (0, Vn.e)((t, i) => {
                let u = 0;
                t.subscribe(
                  (0, fn.x)(i, (f) => {
                    const h = e(f, u++);
                    (h || n) && i.next(f), !h && i.complete();
                  })
                );
              });
            })((u) => null !== u),
            cs(null),
            mE(),
            (0, le.U)((u) => {
              if (null === u) return null;
              const f = $c(u);
              return (
                (function o0(e) {
                  e.sort((n, t) =>
                    n.value.outlet === rt
                      ? -1
                      : t.value.outlet === rt
                      ? 1
                      : n.value.outlet.localeCompare(t.value.outlet)
                  );
                })(f),
                f
              );
            })
          );
        }
        processSegment(n, t, i, u, f) {
          return (0, cn.D)(t).pipe(
            (0, pi.b)((h) => this.processSegmentAgainstRoute(h._injector ?? n, h, i, u, f)),
            uo((h) => !!h),
            (0, bt.K)((h) => {
              if (wi(h)) return bm(i, u, f) ? (0, we.of)([]) : (0, we.of)(null);
              throw h;
            })
          );
        }
        processSegmentAgainstRoute(n, t, i, u, f) {
          if (t.redirectTo || !Sm(t, i, u, f)) return (0, we.of)(null);
          let h;
          if ('**' === t.path) {
            const _ = u.length > 0 ? Bg(u).parameters : {},
              v = Ka(i) + u.length,
              C = new $e(
                u,
                _,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                qa(t),
                mr(t),
                t.component ?? t._loadedComponent ?? null,
                t,
                Tm(i),
                v,
                c0(t)
              );
            h = (0, we.of)({ snapshot: C, consumedSegments: [], remainingSegments: [] });
          } else
            h = Cm(i, t, u, n).pipe(
              (0, le.U)(
                ({ matched: _, consumedSegments: v, remainingSegments: C, parameters: w }) => {
                  if (!_) return null;
                  const F = Ka(i) + v.length;
                  return {
                    snapshot: new $e(
                      v,
                      w,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      qa(t),
                      mr(t),
                      t.component ?? t._loadedComponent ?? null,
                      t,
                      Tm(i),
                      F,
                      c0(t)
                    ),
                    consumedSegments: v,
                    remainingSegments: C,
                  };
                }
              )
            );
          return h.pipe(
            (0, Hr.w)((_) => {
              if (null === _) return (0, we.of)(null);
              const { snapshot: v, consumedSegments: C, remainingSegments: w } = _;
              n = t._injector ?? n;
              const F = t._loadedInjector ?? n,
                Q = (function s0(e) {
                  return e.children ? e.children : e.loadChildren ? e._loadedRoutes : [];
                })(t),
                { segmentGroup: z, slicedSegments: X } = En(
                  i,
                  C,
                  w,
                  Q.filter((xe) => void 0 === xe.redirectTo)
                );
              if (0 === X.length && z.hasChildren())
                return this.processChildren(F, Q, z).pipe(
                  (0, le.U)((xe) => (null === xe ? null : [new lo(v, xe)]))
                );
              if (0 === Q.length && 0 === X.length) return (0, we.of)([new lo(v, [])]);
              const Te = mr(t) === f;
              return this.processSegment(F, Q, z, X, Te ? rt : f).pipe(
                (0, le.U)((xe) => (null === xe ? null : [new lo(v, xe)]))
              );
            })
          );
        }
      }
      function a0(e) {
        const n = e.value.routeConfig;
        return n && '' === n.path && void 0 === n.redirectTo;
      }
      function $c(e) {
        const n = [],
          t = new Set();
        for (const i of e) {
          if (!a0(i)) {
            n.push(i);
            continue;
          }
          const u = n.find((f) => i.value.routeConfig === f.value.routeConfig);
          void 0 !== u ? (u.children.push(...i.children), t.add(u)) : n.push(i);
        }
        for (const i of t) {
          const u = $c(i.children);
          n.push(new lo(i.value, u));
        }
        return n.filter((i) => !t.has(i));
      }
      function Tm(e) {
        let n = e;
        for (; n._sourceSegment; ) n = n._sourceSegment;
        return n;
      }
      function Ka(e) {
        let n = e,
          t = n._segmentIndexShift ?? 0;
        for (; n._sourceSegment; ) (n = n._sourceSegment), (t += n._segmentIndexShift ?? 0);
        return t - 1;
      }
      function qa(e) {
        return e.data || {};
      }
      function c0(e) {
        return e.resolve || {};
      }
      function Hc(e) {
        return 'string' == typeof e.title || null === e.title;
      }
      function xr(e) {
        return (0, Hr.w)((n) => {
          const t = e(n);
          return t ? (0, cn.D)(t).pipe((0, le.U)(() => n)) : (0, we.of)(n);
        });
      }
      const ho = new a.OlP('ROUTES');
      let Si = (() => {
        class e {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = (0, a.f3M)(a.Sil));
          }
          loadComponent(t) {
            if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
            if (t._loadedComponent) return (0, we.of)(t._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(t);
            const i = Ct(t.loadComponent()).pipe(
                (0, le.U)(zf),
                Pt((f) => {
                  this.onLoadEndListener && this.onLoadEndListener(t), (t._loadedComponent = f);
                }),
                Pa(() => {
                  this.componentLoaders.delete(t);
                })
              ),
              u = new Ug(i, () => new No.x()).pipe(af());
            return this.componentLoaders.set(t, u), u;
          }
          loadChildren(t, i) {
            if (this.childrenLoaders.get(i)) return this.childrenLoaders.get(i);
            if (i._loadedRoutes)
              return (0, we.of)({ routes: i._loadedRoutes, injector: i._loadedInjector });
            this.onLoadStartListener && this.onLoadStartListener(i);
            const f = this.loadModuleFactoryOrRoutes(i.loadChildren).pipe(
                (0, le.U)((_) => {
                  this.onLoadEndListener && this.onLoadEndListener(i);
                  let v,
                    C,
                    w = !1;
                  Array.isArray(_)
                    ? (C = _)
                    : ((v = _.create(t).injector),
                      (C = xa(v.get(ho, [], a.XFs.Self | a.XFs.Optional))));
                  return { routes: C.map(Fc), injector: v };
                }),
                Pa(() => {
                  this.childrenLoaders.delete(i);
                })
              ),
              h = new Ug(f, () => new No.x()).pipe(af());
            return this.childrenLoaders.set(i, h), h;
          }
          loadModuleFactoryOrRoutes(t) {
            return Ct(t()).pipe(
              (0, le.U)(zf),
              (0, hn.z)((i) =>
                i instanceof a.YKP || Array.isArray(i)
                  ? (0, we.of)(i)
                  : (0, cn.D)(this.compiler.compileModuleAsync(i))
              )
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function zf(e) {
        return (function l0(e) {
          return e && 'object' == typeof e && 'default' in e;
        })(e)
          ? e.default
          : e;
      }
      let Gc = (() => {
        class e {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new No.x()),
              (this.configLoader = (0, a.f3M)(Si)),
              (this.environmentInjector = (0, a.f3M)(a.lqb)),
              (this.urlSerializer = (0, a.f3M)(Ra)),
              (this.rootContexts = (0, a.f3M)(Ci)),
              (this.navigationId = 0),
              (this.afterPreactivation = () => (0, we.of)(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = (u) => this.events.next(new xE(u))),
              (this.configLoader.onLoadStartListener = (u) => this.events.next(new PE(u)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(t) {
            const i = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...t, id: i });
          }
          setupNavigations(t) {
            return (
              (this.transitions = new Or.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: t.currentUrlTree,
                currentRawUrl: t.currentUrlTree,
                extractedUrl: t.urlHandlingStrategy.extract(t.currentUrlTree),
                urlAfterRedirects: t.urlHandlingStrategy.extract(t.currentUrlTree),
                rawUrl: t.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: Va,
                restoredState: null,
                currentSnapshot: t.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: t.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                (0, Wt.h)((i) => 0 !== i.id),
                (0, le.U)((i) => ({ ...i, extractedUrl: t.urlHandlingStrategy.extract(i.rawUrl) })),
                (0, Hr.w)((i) => {
                  let u = !1,
                    f = !1;
                  return (0, we.of)(i).pipe(
                    Pt((h) => {
                      this.currentNavigation = {
                        id: h.id,
                        initialUrl: h.rawUrl,
                        extractedUrl: h.extractedUrl,
                        trigger: h.source,
                        extras: h.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? { ...this.lastSuccessfulNavigation, previousNavigation: null }
                          : null,
                      };
                    }),
                    (0, Hr.w)((h) => {
                      const _ = t.browserUrlTree.toString(),
                        v =
                          !t.navigated ||
                          h.extractedUrl.toString() !== _ ||
                          _ !== t.currentUrlTree.toString();
                      if (
                        !v &&
                        'reload' !== (h.extras.onSameUrlNavigation ?? t.onSameUrlNavigation)
                      ) {
                        const w = '';
                        return (
                          this.events.next(new Oc(h.id, t.serializeUrl(i.rawUrl), w, 0)),
                          (t.rawUrlTree = h.rawUrl),
                          h.resolve(null),
                          Lo.E
                        );
                      }
                      if (t.urlHandlingStrategy.shouldProcessUrl(h.rawUrl))
                        return (
                          Fm(h.source) && (t.browserUrlTree = h.extractedUrl),
                          (0, we.of)(h).pipe(
                            (0, Hr.w)((w) => {
                              const F = this.transitions?.getValue();
                              return (
                                this.events.next(
                                  new co(
                                    w.id,
                                    this.urlSerializer.serialize(w.extractedUrl),
                                    w.source,
                                    w.restoredState
                                  )
                                ),
                                F !== this.transitions?.getValue() ? Lo.E : Promise.resolve(w)
                              );
                            }),
                            (function t0(e, n, t, i) {
                              return (0, Hr.w)((u) =>
                                (function XE(e, n, t, i, u) {
                                  return new e0(e, n, t, i, u).apply();
                                })(e, n, t, u.extractedUrl, i).pipe(
                                  (0, le.U)((f) => ({ ...u, urlAfterRedirects: f }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.configLoader,
                              this.urlSerializer,
                              t.config
                            ),
                            Pt((w) => {
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: w.urlAfterRedirects,
                              }),
                                (i.urlAfterRedirects = w.urlAfterRedirects);
                            }),
                            (function Gf(e, n, t, i, u) {
                              return (0, hn.z)((f) =>
                                (function r0(e, n, t, i, u, f, h = 'emptyOnly') {
                                  return new Mm(e, n, t, i, u, h, f).recognize().pipe(
                                    (0, Hr.w)((_) =>
                                      null === _
                                        ? (function n0(e) {
                                            return new Un.y((n) => n.error(e));
                                          })(new Hf())
                                        : (0, we.of)(_)
                                    )
                                  );
                                })(
                                  e,
                                  n,
                                  t,
                                  f.urlAfterRedirects,
                                  i.serialize(f.urlAfterRedirects),
                                  i,
                                  u
                                ).pipe((0, le.U)((h) => ({ ...f, targetSnapshot: h })))
                              );
                            })(
                              this.environmentInjector,
                              this.rootComponentType,
                              t.config,
                              this.urlSerializer,
                              t.paramsInheritanceStrategy
                            ),
                            Pt((w) => {
                              if (
                                ((i.targetSnapshot = w.targetSnapshot),
                                'eager' === t.urlUpdateStrategy)
                              ) {
                                if (!w.extras.skipLocationChange) {
                                  const Q = t.urlHandlingStrategy.merge(
                                    w.urlAfterRedirects,
                                    w.rawUrl
                                  );
                                  t.setBrowserUrl(Q, w);
                                }
                                t.browserUrlTree = w.urlAfterRedirects;
                              }
                              const F = new Cf(
                                w.id,
                                this.urlSerializer.serialize(w.extractedUrl),
                                this.urlSerializer.serialize(w.urlAfterRedirects),
                                w.targetSnapshot
                              );
                              this.events.next(F);
                            })
                          )
                        );
                      if (v && t.urlHandlingStrategy.shouldProcessUrl(t.rawUrlTree)) {
                        const {
                            id: w,
                            extractedUrl: F,
                            source: Q,
                            restoredState: z,
                            extras: X,
                          } = h,
                          Te = new co(w, this.urlSerializer.serialize(F), Q, z);
                        this.events.next(Te);
                        const xe = om(F, this.rootComponentType).snapshot;
                        return (
                          (i = {
                            ...h,
                            targetSnapshot: xe,
                            urlAfterRedirects: F,
                            extras: { ...X, skipLocationChange: !1, replaceUrl: !1 },
                          }),
                          (0, we.of)(i)
                        );
                      }
                      {
                        const w = '';
                        return (
                          this.events.next(new Oc(h.id, t.serializeUrl(i.extractedUrl), w, 1)),
                          (t.rawUrlTree = h.rawUrl),
                          h.resolve(null),
                          Lo.E
                        );
                      }
                    }),
                    Pt((h) => {
                      const _ = new IE(
                        h.id,
                        this.urlSerializer.serialize(h.extractedUrl),
                        this.urlSerializer.serialize(h.urlAfterRedirects),
                        h.targetSnapshot
                      );
                      this.events.next(_);
                    }),
                    (0, le.U)(
                      (h) =>
                        (i = {
                          ...h,
                          guards: hm(h.targetSnapshot, h.currentSnapshot, this.rootContexts),
                        })
                    ),
                    (function _m(e, n) {
                      return (0, hn.z)((t) => {
                        const {
                          targetSnapshot: i,
                          currentSnapshot: u,
                          guards: { canActivateChecks: f, canDeactivateChecks: h },
                        } = t;
                        return 0 === h.length && 0 === f.length
                          ? (0, we.of)({ ...t, guardsResult: !0 })
                          : (function kf(e, n, t, i) {
                              return (0, cn.D)(e).pipe(
                                (0, hn.z)((u) =>
                                  (function KE(e, n, t, i, u) {
                                    const f =
                                      n && n.routeConfig ? n.routeConfig.canDeactivate : null;
                                    if (!f || 0 === f.length) return (0, we.of)(!0);
                                    const h = f.map((_) => {
                                      const v = Ga(n) ?? u,
                                        C = Bo(_, v);
                                      return Ct(
                                        (function WE(e) {
                                          return e && Wr(e.canDeactivate);
                                        })(C)
                                          ? C.canDeactivate(e, n, t, i)
                                          : v.runInContext(() => C(e, n, t, i))
                                      ).pipe(uo());
                                    });
                                    return (0, we.of)(h).pipe(fo());
                                  })(u.component, u.route, t, n, i)
                                ),
                                uo((u) => !0 !== u, !0)
                              );
                            })(h, i, u, e).pipe(
                              (0, hn.z)((_) =>
                                _ &&
                                (function gm(e) {
                                  return 'boolean' == typeof e;
                                })(_)
                                  ? (function Uf(e, n, t, i) {
                                      return (0, cn.D)(n).pipe(
                                        (0, pi.b)((u) =>
                                          kg(
                                            (function ym(e, n) {
                                              return (
                                                null !== e && n && n(new dw(e)), (0, we.of)(!0)
                                              );
                                            })(u.route.parent, i),
                                            (function Vf(e, n) {
                                              return (
                                                null !== e && n && n(new em(e)), (0, we.of)(!0)
                                              );
                                            })(u.route, i),
                                            (function YE(e, n, t) {
                                              const i = n[n.length - 1],
                                                f = n
                                                  .slice(0, n.length - 1)
                                                  .reverse()
                                                  .map((h) =>
                                                    (function pm(e) {
                                                      const n = e.routeConfig
                                                        ? e.routeConfig.canActivateChild
                                                        : null;
                                                      return n && 0 !== n.length
                                                        ? { node: e, guards: n }
                                                        : null;
                                                    })(h)
                                                  )
                                                  .filter((h) => null !== h)
                                                  .map((h) =>
                                                    pE(() => {
                                                      const _ = h.guards.map((v) => {
                                                        const C = Ga(h.node) ?? t,
                                                          w = Bo(v, C);
                                                        return Ct(
                                                          (function ZE(e) {
                                                            return e && Wr(e.canActivateChild);
                                                          })(w)
                                                            ? w.canActivateChild(i, e)
                                                            : C.runInContext(() => w(i, e))
                                                        ).pipe(uo());
                                                      });
                                                      return (0, we.of)(_).pipe(fo());
                                                    })
                                                  );
                                              return (0, we.of)(f).pipe(fo());
                                            })(e, u.path, t),
                                            (function jf(e, n, t) {
                                              const i = n.routeConfig
                                                ? n.routeConfig.canActivate
                                                : null;
                                              if (!i || 0 === i.length) return (0, we.of)(!0);
                                              const u = i.map((f) =>
                                                pE(() => {
                                                  const h = Ga(n) ?? t,
                                                    _ = Bo(f, h);
                                                  return Ct(
                                                    (function mm(e) {
                                                      return e && Wr(e.canActivate);
                                                    })(_)
                                                      ? _.canActivate(n, e)
                                                      : h.runInContext(() => _(n, e))
                                                  ).pipe(uo());
                                                })
                                              );
                                              return (0, we.of)(u).pipe(fo());
                                            })(e, u.route, t)
                                          )
                                        ),
                                        uo((u) => !0 !== u, !0)
                                      );
                                    })(i, f, e, n)
                                  : (0, we.of)(_)
                              ),
                              (0, le.U)((_) => ({ ...t, guardsResult: _ }))
                            );
                      });
                    })(this.environmentInjector, (h) => this.events.next(h)),
                    Pt((h) => {
                      if (((i.guardsResult = h.guardsResult), fr(h.guardsResult)))
                        throw UE(0, h.guardsResult);
                      const _ = new OE(
                        h.id,
                        this.urlSerializer.serialize(h.extractedUrl),
                        this.urlSerializer.serialize(h.urlAfterRedirects),
                        h.targetSnapshot,
                        !!h.guardsResult
                      );
                      this.events.next(_);
                    }),
                    (0, Wt.h)(
                      (h) =>
                        !!h.guardsResult ||
                        (t.restoreHistory(h), this.cancelNavigationTransition(h, '', 3), !1)
                    ),
                    xr((h) => {
                      if (h.guards.canActivateChecks.length)
                        return (0, we.of)(h).pipe(
                          Pt((_) => {
                            const v = new _s(
                              _.id,
                              this.urlSerializer.serialize(_.extractedUrl),
                              this.urlSerializer.serialize(_.urlAfterRedirects),
                              _.targetSnapshot
                            );
                            this.events.next(v);
                          }),
                          (0, Hr.w)((_) => {
                            let v = !1;
                            return (0, we.of)(_).pipe(
                              (function yw(e, n) {
                                return (0, hn.z)((t) => {
                                  const {
                                    targetSnapshot: i,
                                    guards: { canActivateChecks: u },
                                  } = t;
                                  if (!u.length) return (0, we.of)(t);
                                  let f = 0;
                                  return (0, cn.D)(u).pipe(
                                    (0, pi.b)((h) =>
                                      (function Om(e, n, t, i) {
                                        const u = e.routeConfig,
                                          f = e._resolve;
                                        return (
                                          void 0 !== u?.title && !Hc(u) && (f[vc] = u.title),
                                          (function Pm(e, n, t, i) {
                                            const u = (function xm(e) {
                                              return [
                                                ...Object.keys(e),
                                                ...Object.getOwnPropertySymbols(e),
                                              ];
                                            })(e);
                                            if (0 === u.length) return (0, we.of)({});
                                            const f = {};
                                            return (0, cn.D)(u).pipe(
                                              (0, hn.z)((h) =>
                                                (function Rm(e, n, t, i) {
                                                  const u = Ga(n) ?? i,
                                                    f = Bo(e, u);
                                                  return Ct(
                                                    f.resolve
                                                      ? f.resolve(n, t)
                                                      : u.runInContext(() => f(n, t))
                                                  );
                                                })(e[h], n, t, i).pipe(
                                                  uo(),
                                                  Pt((_) => {
                                                    f[h] = _;
                                                  })
                                                )
                                              ),
                                              Vg(1),
                                              (function cf(e) {
                                                return (0, le.U)(() => e);
                                              })(f),
                                              (0, bt.K)((h) => (wi(h) ? Lo.E : as(h)))
                                            );
                                          })(f, e, n, i).pipe(
                                            (0, le.U)(
                                              (h) => (
                                                (e._resolvedData = h),
                                                (e.data = sm(e, t).resolve),
                                                u && Hc(u) && (e.data[vc] = u.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(h.route, i, e, n)
                                    ),
                                    Pt(() => f++),
                                    Vg(1),
                                    (0, hn.z)((h) => (f === u.length ? (0, we.of)(t) : Lo.E))
                                  );
                                });
                              })(t.paramsInheritanceStrategy, this.environmentInjector),
                              Pt({
                                next: () => (v = !0),
                                complete: () => {
                                  v ||
                                    (t.restoreHistory(_),
                                    this.cancelNavigationTransition(_, '', 2));
                                },
                              })
                            );
                          }),
                          Pt((_) => {
                            const v = new Zr(
                              _.id,
                              this.urlSerializer.serialize(_.extractedUrl),
                              this.urlSerializer.serialize(_.urlAfterRedirects),
                              _.targetSnapshot
                            );
                            this.events.next(v);
                          })
                        );
                    }),
                    xr((h) => {
                      const _ = (v) => {
                        const C = [];
                        v.routeConfig?.loadComponent &&
                          !v.routeConfig._loadedComponent &&
                          C.push(
                            this.configLoader.loadComponent(v.routeConfig).pipe(
                              Pt((w) => {
                                v.component = w;
                              }),
                              (0, le.U)(() => {})
                            )
                          );
                        for (const w of v.children) C.push(..._(w));
                        return C;
                      };
                      return er(_(h.targetSnapshot.root)).pipe(cs(), (0, dr.q)(1));
                    }),
                    xr(() => this.afterPreactivation()),
                    (0, le.U)((h) => {
                      const _ = (function am(e, n, t) {
                        const i = $a(e, n._root, t ? t._root : void 0);
                        return new rm(i, n);
                      })(t.routeReuseStrategy, h.targetSnapshot, h.currentRouterState);
                      return (i = { ...h, targetRouterState: _ });
                    }),
                    Pt((h) => {
                      (t.currentUrlTree = h.urlAfterRedirects),
                        (t.rawUrlTree = t.urlHandlingStrategy.merge(h.urlAfterRedirects, h.rawUrl)),
                        (t.routerState = h.targetRouterState),
                        'deferred' === t.urlUpdateStrategy &&
                          (h.extras.skipLocationChange || t.setBrowserUrl(t.rawUrlTree, h),
                          (t.browserUrlTree = h.urlAfterRedirects));
                    }),
                    ((e, n, t) =>
                      (0, le.U)(
                        (i) => (
                          new HE(n, i.targetRouterState, i.currentRouterState, t).activate(e), i
                        )
                      ))(this.rootContexts, t.routeReuseStrategy, (h) => this.events.next(h)),
                    (0, dr.q)(1),
                    Pt({
                      next: (h) => {
                        (u = !0),
                          (this.lastSuccessfulNavigation = this.currentNavigation),
                          (t.navigated = !0),
                          this.events.next(
                            new Vo(
                              h.id,
                              this.urlSerializer.serialize(h.extractedUrl),
                              this.urlSerializer.serialize(t.currentUrlTree)
                            )
                          ),
                          t.titleStrategy?.updateTitle(h.targetRouterState.snapshot),
                          h.resolve(!0);
                      },
                      complete: () => {
                        u = !0;
                      },
                    }),
                    Pa(() => {
                      u || f || this.cancelNavigationTransition(i, '', 1),
                        this.currentNavigation?.id === i.id && (this.currentNavigation = null);
                    }),
                    (0, bt.K)((h) => {
                      if (((f = !0), jo(h))) {
                        Pf(h) || ((t.navigated = !0), t.restoreHistory(i, !0));
                        const _ = new ja(
                          i.id,
                          this.urlSerializer.serialize(i.extractedUrl),
                          h.message,
                          h.cancellationCode
                        );
                        if ((this.events.next(_), Pf(h))) {
                          const v = t.urlHandlingStrategy.merge(h.url, t.rawUrlTree),
                            C = {
                              skipLocationChange: i.extras.skipLocationChange,
                              replaceUrl: 'eager' === t.urlUpdateStrategy || Fm(i.source),
                            };
                          t.scheduleNavigation(v, Va, null, C, {
                            resolve: i.resolve,
                            reject: i.reject,
                            promise: i.promise,
                          });
                        } else i.resolve(!1);
                      } else {
                        t.restoreHistory(i, !0);
                        const _ = new Ba(
                          i.id,
                          this.urlSerializer.serialize(i.extractedUrl),
                          h,
                          i.targetSnapshot ?? void 0
                        );
                        this.events.next(_);
                        try {
                          i.resolve(t.errorHandler(h));
                        } catch (v) {
                          i.reject(v);
                        }
                      }
                      return Lo.E;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(t, i, u) {
            const f = new ja(t.id, this.urlSerializer.serialize(t.extractedUrl), i, u);
            this.events.next(f), t.resolve(!1);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function Fm(e) {
        return e !== Va;
      }
      let Ds = (() => {
          class e {
            buildTitle(t) {
              let i,
                u = t.root;
              for (; void 0 !== u; )
                (i = this.getResolvedTitleForRoute(u) ?? i),
                  (u = u.children.find((f) => f.outlet === rt));
              return i;
            }
            getResolvedTitleForRoute(t) {
              return t.data[vc];
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({
              token: e,
              factory: function () {
                return (0, a.f3M)(d0);
              },
              providedIn: 'root',
            })),
            e
          );
        })(),
        d0 = (() => {
          class e extends Ds {
            constructor(t) {
              super(), (this.title = t);
            }
            updateTitle(t) {
              const i = this.buildTitle(t);
              void 0 !== i && this.title.setTitle(i);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(Hv));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        vw = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({
              token: e,
              factory: function () {
                return (0, a.f3M)(h0);
              },
              providedIn: 'root',
            })),
            e
          );
        })();
      class f0 {
        shouldDetach(n) {
          return !1;
        }
        store(n, t) {}
        shouldAttach(n) {
          return !1;
        }
        retrieve(n) {
          return null;
        }
        shouldReuseRoute(n, t) {
          return n.routeConfig === t.routeConfig;
        }
      }
      let h0 = (() => {
        class e extends f0 {}
        return (
          (e.ɵfac = (function () {
            let n;
            return function (i) {
              return (n || (n = a.n5z(e)))(i || e);
            };
          })()),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const zc = new a.OlP('', { providedIn: 'root', factory: () => ({}) });
      let g0 = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({
              token: e,
              factory: function () {
                return (0, a.f3M)(m0);
              },
              providedIn: 'root',
            })),
            e
          );
        })(),
        m0 = (() => {
          class e {
            shouldProcessUrl(t) {
              return !0;
            }
            extract(t) {
              return t;
            }
            merge(t, i) {
              return t;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })();
      function Nm(e) {
        throw e;
      }
      function Wf(e, n, t) {
        return n.parse('/');
      }
      const _0 = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        Yf = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let At = (() => {
          class e {
            get navigationId() {
              return this.navigationTransitions.navigationId;
            }
            get browserPageId() {
              return this.location.getState()?.ɵrouterPageId;
            }
            get events() {
              return this.navigationTransitions.events;
            }
            constructor() {
              (this.disposed = !1),
                (this.currentPageId = 0),
                (this.console = (0, a.f3M)(a.c2e)),
                (this.isNgZoneEnabled = !1),
                (this.options = (0, a.f3M)(zc, { optional: !0 }) || {}),
                (this.errorHandler = this.options.errorHandler || Nm),
                (this.malformedUriErrorHandler = this.options.malformedUriErrorHandler || Wf),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.urlHandlingStrategy = (0, a.f3M)(g0)),
                (this.routeReuseStrategy = (0, a.f3M)(vw)),
                (this.urlCreationStrategy = (0, a.f3M)(NE)),
                (this.titleStrategy = (0, a.f3M)(Ds)),
                (this.onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore'),
                (this.paramsInheritanceStrategy =
                  this.options.paramsInheritanceStrategy || 'emptyOnly'),
                (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || 'replace'),
                (this.config = xa((0, a.f3M)(ho, { optional: !0 }) ?? [])),
                (this.navigationTransitions = (0, a.f3M)(Gc)),
                (this.urlSerializer = (0, a.f3M)(Ra)),
                (this.location = (0, a.f3M)(ce)),
                (this.isNgZoneEnabled =
                  (0, a.f3M)(a.R0b) instanceof a.R0b && a.R0b.isInAngularZone()),
                this.resetConfig(this.config),
                (this.currentUrlTree = new _i()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.routerState = om(this.currentUrlTree, null)),
                this.navigationTransitions.setupNavigations(this).subscribe(
                  (t) => {
                    (this.lastSuccessfulId = t.id), (this.currentPageId = t.targetPageId);
                  },
                  (t) => {
                    this.console.warn(`Unhandled Navigation Error: ${t}`);
                  }
                );
            }
            resetRootComponentType(t) {
              (this.routerState.root.component = t),
                (this.navigationTransitions.rootComponentType = t);
            }
            initialNavigation() {
              if (
                (this.setUpLocationChangeListener(),
                !this.navigationTransitions.hasRequestedNavigation)
              ) {
                const t = this.location.getState();
                this.navigateToSyncWithBrowser(this.location.path(!0), Va, t);
              }
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((t) => {
                  const i = 'popstate' === t.type ? 'popstate' : 'hashchange';
                  'popstate' === i &&
                    setTimeout(() => {
                      this.navigateToSyncWithBrowser(t.url, i, t.state);
                    }, 0);
                }));
            }
            navigateToSyncWithBrowser(t, i, u) {
              const f = { replaceUrl: !0 },
                h = u?.navigationId ? u : null;
              if (u) {
                const v = { ...u };
                delete v.navigationId,
                  delete v.ɵrouterPageId,
                  0 !== Object.keys(v).length && (f.state = v);
              }
              const _ = this.parseUrl(t);
              this.scheduleNavigation(_, i, h, f);
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            resetConfig(t) {
              (this.config = t.map(Fc)), (this.navigated = !1), (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(), (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(t, i = {}) {
              const {
                  relativeTo: u,
                  queryParams: f,
                  fragment: h,
                  queryParamsHandling: _,
                  preserveFragment: v,
                } = i,
                C = v ? this.currentUrlTree.fragment : h;
              let w = null;
              switch (_) {
                case 'merge':
                  w = { ...this.currentUrlTree.queryParams, ...f };
                  break;
                case 'preserve':
                  w = this.currentUrlTree.queryParams;
                  break;
                default:
                  w = f || null;
              }
              return (
                null !== w && (w = this.removeEmptyProps(w)),
                this.urlCreationStrategy.createUrlTree(
                  u,
                  this.routerState,
                  this.currentUrlTree,
                  t,
                  w,
                  C ?? null
                )
              );
            }
            navigateByUrl(t, i = { skipLocationChange: !1 }) {
              const u = fr(t) ? t : this.parseUrl(t),
                f = this.urlHandlingStrategy.merge(u, this.rawUrlTree);
              return this.scheduleNavigation(f, Va, null, i);
            }
            navigate(t, i = { skipLocationChange: !1 }) {
              return (
                (function y0(e) {
                  for (let n = 0; n < e.length; n++) {
                    const t = e[n];
                    if (null == t) throw new a.vHH(4008, false);
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, i), i)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let i;
              try {
                i = this.urlSerializer.parse(t);
              } catch (u) {
                i = this.malformedUriErrorHandler(u, this.urlSerializer, t);
              }
              return i;
            }
            isActive(t, i) {
              let u;
              if (((u = !0 === i ? { ..._0 } : !1 === i ? { ...Yf } : i), fr(t)))
                return df(this.currentUrlTree, t, u);
              const f = this.parseUrl(t);
              return df(this.currentUrlTree, f, u);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((i, u) => {
                const f = t[u];
                return null != f && (i[u] = f), i;
              }, {});
            }
            scheduleNavigation(t, i, u, f, h) {
              if (this.disposed) return Promise.resolve(!1);
              let _, v, C, w;
              return (
                h
                  ? ((_ = h.resolve), (v = h.reject), (C = h.promise))
                  : (C = new Promise((F, Q) => {
                      (_ = F), (v = Q);
                    })),
                (w =
                  'computed' === this.canceledNavigationResolution
                    ? u && u.ɵrouterPageId
                      ? u.ɵrouterPageId
                      : f.replaceUrl || f.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1
                    : 0),
                this.navigationTransitions.handleNavigationRequest({
                  targetPageId: w,
                  source: i,
                  restoredState: u,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: t,
                  extras: f,
                  resolve: _,
                  reject: v,
                  promise: C,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                C.catch((F) => Promise.reject(F))
              );
            }
            setBrowserUrl(t, i) {
              const u = this.urlSerializer.serialize(t),
                f = { ...i.extras.state, ...this.generateNgRouterState(i.id, i.targetPageId) };
              this.location.isCurrentPathEqualTo(u) || i.extras.replaceUrl
                ? this.location.replaceState(u, '', f)
                : this.location.go(u, '', f);
            }
            restoreHistory(t, i = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const u = this.currentPageId - t.targetPageId;
                ('popstate' !== t.source &&
                  'eager' !== this.urlUpdateStrategy &&
                  this.currentUrlTree !== this.getCurrentNavigation()?.finalUrl) ||
                0 === u
                  ? this.currentUrlTree === this.getCurrentNavigation()?.finalUrl &&
                    0 === u &&
                    (this.resetState(t),
                    (this.browserUrlTree = t.currentUrlTree),
                    this.resetUrlToCurrentUrlTree())
                  : this.location.historyGo(u);
              } else
                'replace' === this.canceledNavigationResolution &&
                  (i && this.resetState(t), this.resetUrlToCurrentUrlTree());
            }
            resetState(t) {
              (this.routerState = t.currentRouterState),
                (this.currentUrlTree = t.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
              );
            }
            generateNgRouterState(t, i) {
              return 'computed' === this.canceledNavigationResolution
                ? { navigationId: t, ɵrouterPageId: i }
                : { navigationId: t };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        jn = (() => {
          class e {
            constructor(t, i, u, f, h, _) {
              (this.router = t),
                (this.route = i),
                (this.tabIndexAttribute = u),
                (this.renderer = f),
                (this.el = h),
                (this.locationStrategy = _),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new No.x());
              const v = h.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === v || 'area' === v),
                this.isAnchorElement
                  ? (this.subscription = t.events.subscribe((C) => {
                      C instanceof Vo && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl('0');
            }
            set preserveFragment(t) {
              this._preserveFragment = (0, a.D6c)(t);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(t) {
              this._skipLocationChange = (0, a.D6c)(t);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(t) {
              this._replaceUrl = (0, a.D6c)(t);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            setTabIndexIfNotOnNativeEl(t) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue('tabindex', t);
            }
            ngOnChanges(t) {
              this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
            }
            set routerLink(t) {
              null != t
                ? ((this.commands = Array.isArray(t) ? t : [t]),
                  this.setTabIndexIfNotOnNativeEl('0'))
                : ((this.commands = null), this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(t, i, u, f, h) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== t ||
                      i ||
                      u ||
                      f ||
                      h ||
                      ('string' == typeof this.target && '_self' != this.target)))
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              this.href =
                null !== this.urlTree && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    )
                  : null;
              const t =
                null === this.href
                  ? null
                  : (0, a.P3R)(this.href, this.el.nativeElement.tagName.toLowerCase(), 'href');
              this.applyAttributeValue('href', t);
            }
            applyAttributeValue(t, i) {
              const u = this.renderer,
                f = this.el.nativeElement;
              null !== i ? u.setAttribute(f, t, i) : u.removeAttribute(f, t);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                a.Y36(At),
                a.Y36(gr),
                a.$8M('tabindex'),
                a.Y36(a.Qsj),
                a.Y36(a.SBq),
                a.Y36(ee)
              );
            }),
            (e.ɵdir = a.lG2({
              type: e,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (t, i) {
                1 & t &&
                  a.NdJ('click', function (f) {
                    return i.onClick(f.button, f.ctrlKey, f.shiftKey, f.altKey, f.metaKey);
                  }),
                  2 & t && a.uIk('target', i.target);
              },
              inputs: {
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                relativeTo: 'relativeTo',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [a.TTD],
            })),
            e
          );
        })(),
        Lm = (() => {
          class e {
            get isActive() {
              return this._isActive;
            }
            constructor(t, i, u, f, h) {
              (this.router = t),
                (this.element = i),
                (this.renderer = u),
                (this.cdr = f),
                (this.link = h),
                (this.classes = []),
                (this._isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new a.vpe()),
                (this.routerEventsSubscription = t.events.subscribe((_) => {
                  _ instanceof Vo && this.update();
                }));
            }
            ngAfterContentInit() {
              (0, we.of)(this.links.changes, (0, we.of)(null))
                .pipe((0, yc.J)())
                .subscribe((t) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              this.linkInputChangesSubscription?.unsubscribe();
              const t = [...this.links.toArray(), this.link]
                .filter((i) => !!i)
                .map((i) => i.onChanges);
              this.linkInputChangesSubscription = (0, cn.D)(t)
                .pipe((0, yc.J)())
                .subscribe((i) => {
                  this._isActive !== this.isLinkActive(this.router)(i) && this.update();
                });
            }
            set routerLinkActive(t) {
              const i = Array.isArray(t) ? t : t.split(' ');
              this.classes = i.filter((u) => !!u);
            }
            ngOnChanges(t) {
              this.update();
            }
            ngOnDestroy() {
              this.routerEventsSubscription.unsubscribe(),
                this.linkInputChangesSubscription?.unsubscribe();
            }
            update() {
              !this.links ||
                !this.router.navigated ||
                Promise.resolve().then(() => {
                  const t = this.hasActiveLinks();
                  this._isActive !== t &&
                    ((this._isActive = t),
                    this.cdr.markForCheck(),
                    this.classes.forEach((i) => {
                      t
                        ? this.renderer.addClass(this.element.nativeElement, i)
                        : this.renderer.removeClass(this.element.nativeElement, i);
                    }),
                    t && void 0 !== this.ariaCurrentWhenActive
                      ? this.renderer.setAttribute(
                          this.element.nativeElement,
                          'aria-current',
                          this.ariaCurrentWhenActive.toString()
                        )
                      : this.renderer.removeAttribute(this.element.nativeElement, 'aria-current'),
                    this.isActiveChange.emit(t));
                });
            }
            isLinkActive(t) {
              const i = (function v0(e) {
                return !!e.paths;
              })(this.routerLinkActiveOptions)
                ? this.routerLinkActiveOptions
                : this.routerLinkActiveOptions.exact || !1;
              return (u) => !!u.urlTree && t.isActive(u.urlTree, i);
            }
            hasActiveLinks() {
              const t = this.isLinkActive(this.router);
              return (this.link && t(this.link)) || this.links.some(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                a.Y36(At),
                a.Y36(a.SBq),
                a.Y36(a.Qsj),
                a.Y36(a.sBO),
                a.Y36(jn, 8)
              );
            }),
            (e.ɵdir = a.lG2({
              type: e,
              selectors: [['', 'routerLinkActive', '']],
              contentQueries: function (t, i, u) {
                if ((1 & t && a.Suo(u, jn, 5), 2 & t)) {
                  let f;
                  a.iGM((f = a.CRH())) && (i.links = f);
                }
              },
              inputs: {
                routerLinkActiveOptions: 'routerLinkActiveOptions',
                ariaCurrentWhenActive: 'ariaCurrentWhenActive',
                routerLinkActive: 'routerLinkActive',
              },
              outputs: { isActiveChange: 'isActiveChange' },
              exportAs: ['routerLinkActive'],
              standalone: !0,
              features: [a.TTD],
            })),
            e
          );
        })();
      class km {}
      let Um = (() => {
        class e {
          constructor(t, i, u, f, h) {
            (this.router = t),
              (this.injector = u),
              (this.preloadingStrategy = f),
              (this.loader = h);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                (0, Wt.h)((t) => t instanceof Vo),
                (0, pi.b)(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(t, i) {
            const u = [];
            for (const f of i) {
              f.providers &&
                !f._injector &&
                (f._injector = (0, a.MMx)(f.providers, t, `Route: ${f.path}`));
              const h = f._injector ?? t,
                _ = f._loadedInjector ?? h;
              ((f.loadChildren && !f._loadedRoutes && void 0 === f.canLoad) ||
                (f.loadComponent && !f._loadedComponent)) &&
                u.push(this.preloadConfig(h, f)),
                (f.children || f._loadedRoutes) &&
                  u.push(this.processRoutes(_, f.children ?? f._loadedRoutes));
            }
            return (0, cn.D)(u).pipe((0, yc.J)());
          }
          preloadConfig(t, i) {
            return this.preloadingStrategy.preload(i, () => {
              let u;
              u =
                i.loadChildren && void 0 === i.canLoad
                  ? this.loader.loadChildren(t, i)
                  : (0, we.of)(null);
              const f = u.pipe(
                (0, hn.z)((h) =>
                  null === h
                    ? (0, we.of)(void 0)
                    : ((i._loadedRoutes = h.routes),
                      (i._loadedInjector = h.injector),
                      this.processRoutes(h.injector ?? t, h.routes))
                )
              );
              if (i.loadComponent && !i._loadedComponent) {
                const h = this.loader.loadComponent(i);
                return (0, cn.D)([f, h]).pipe((0, yc.J)());
              }
              return f;
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(At), a.LFG(a.Sil), a.LFG(a.lqb), a.LFG(km), a.LFG(Si));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const Kf = new a.OlP('');
      let D0 = (() => {
        class e {
          constructor(t, i, u, f, h = {}) {
            (this.urlSerializer = t),
              (this.transitions = i),
              (this.viewportScroller = u),
              (this.zone = f),
              (this.options = h),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (h.scrollPositionRestoration = h.scrollPositionRestoration || 'disabled'),
              (h.anchorScrolling = h.anchorScrolling || 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe((t) => {
              t instanceof co
                ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                  (this.lastSource = t.navigationTrigger),
                  (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
                : t instanceof Vo &&
                  ((this.lastId = t.id),
                  this.scheduleScrollEvent(
                    t,
                    this.urlSerializer.parse(t.urlAfterRedirects).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe((t) => {
              t instanceof wf &&
                (t.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(t.position)
                  : t.anchor && 'enabled' === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(t.anchor)
                  : 'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(t, i) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new wf(
                      t,
                      'popstate' === this.lastSource ? this.store[this.restoredId] : null,
                      i
                    )
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
        }
        return (
          (e.ɵfac = function (t) {
            a.$Z();
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      var Bn = (() => (
        ((Bn = Bn || {})[(Bn.COMPLETE = 0)] = 'COMPLETE'),
        (Bn[(Bn.FAILED = 1)] = 'FAILED'),
        (Bn[(Bn.REDIRECTING = 2)] = 'REDIRECTING'),
        Bn
      ))();
      const po = !1;
      function Yr(e, n) {
        return { ɵkind: e, ɵproviders: n };
      }
      const qf = new a.OlP('', { providedIn: 'root', factory: () => !1 });
      function $o() {
        const e = (0, a.f3M)(a.zs3);
        return (n) => {
          const t = e.get(a.z2F);
          if (n !== t.components[0]) return;
          const i = e.get(At),
            u = e.get(Xa);
          1 === e.get($n) && i.initialNavigation(),
            e.get(bi, null, a.XFs.Optional)?.setUpPreloading(),
            e.get(Kf, null, a.XFs.Optional)?.init(),
            i.resetRootComponentType(t.componentTypes[0]),
            u.closed || (u.next(), u.complete(), u.unsubscribe());
        };
      }
      const Xa = new a.OlP(po ? 'bootstrap done indicator' : '', { factory: () => new No.x() }),
        $n = new a.OlP(po ? 'initial navigation' : '', { providedIn: 'root', factory: () => 1 });
      function ws() {
        let e = [];
        return (
          (e = po
            ? [
                {
                  provide: a.Xts,
                  multi: !0,
                  useFactory: () => {
                    const n = (0, a.f3M)(At);
                    return () =>
                      n.events.subscribe((t) => {
                        console.group?.(`Router Event: ${t.constructor.name}`),
                          console.log(
                            (function tm(e) {
                              if (!('type' in e))
                                return `Unknown Router Event: ${e.constructor.name}`;
                              switch (e.type) {
                                case 14:
                                  return `ActivationEnd(path: '${
                                    e.snapshot.routeConfig?.path || ''
                                  }')`;
                                case 13:
                                  return `ActivationStart(path: '${
                                    e.snapshot.routeConfig?.path || ''
                                  }')`;
                                case 12:
                                  return `ChildActivationEnd(path: '${
                                    e.snapshot.routeConfig?.path || ''
                                  }')`;
                                case 11:
                                  return `ChildActivationStart(path: '${
                                    e.snapshot.routeConfig?.path || ''
                                  }')`;
                                case 8:
                                  return `GuardsCheckEnd(id: ${e.id}, url: '${e.url}', urlAfterRedirects: '${e.urlAfterRedirects}', state: ${e.state}, shouldActivate: ${e.shouldActivate})`;
                                case 7:
                                  return `GuardsCheckStart(id: ${e.id}, url: '${e.url}', urlAfterRedirects: '${e.urlAfterRedirects}', state: ${e.state})`;
                                case 2:
                                  return `NavigationCancel(id: ${e.id}, url: '${e.url}')`;
                                case 16:
                                  return `NavigationSkipped(id: ${e.id}, url: '${e.url}')`;
                                case 1:
                                  return `NavigationEnd(id: ${e.id}, url: '${e.url}', urlAfterRedirects: '${e.urlAfterRedirects}')`;
                                case 3:
                                  return `NavigationError(id: ${e.id}, url: '${e.url}', error: ${e.error})`;
                                case 0:
                                  return `NavigationStart(id: ${e.id}, url: '${e.url}')`;
                                case 6:
                                  return `ResolveEnd(id: ${e.id}, url: '${e.url}', urlAfterRedirects: '${e.urlAfterRedirects}', state: ${e.state})`;
                                case 5:
                                  return `ResolveStart(id: ${e.id}, url: '${e.url}', urlAfterRedirects: '${e.urlAfterRedirects}', state: ${e.state})`;
                                case 10:
                                  return `RouteConfigLoadEnd(path: ${e.route.path})`;
                                case 9:
                                  return `RouteConfigLoadStart(path: ${e.route.path})`;
                                case 4:
                                  return `RoutesRecognized(id: ${e.id}, url: '${e.url}', urlAfterRedirects: '${e.urlAfterRedirects}', state: ${e.state})`;
                                case 15:
                                  return `Scroll(anchor: '${e.anchor}', position: '${
                                    e.position ? `${e.position[0]}, ${e.position[1]}` : null
                                  }')`;
                              }
                            })(t)
                          ),
                          console.log(t),
                          console.groupEnd?.();
                      });
                  },
                },
              ]
            : []),
          Yr(1, e)
        );
      }
      const bi = new a.OlP(po ? 'router preloader' : '');
      function Ss(e) {
        return Yr(0, [
          { provide: bi, useExisting: Um },
          { provide: km, useExisting: e },
        ]);
      }
      const qr = !1,
        Qf = new a.OlP(qr ? 'router duplicate forRoot guard' : 'ROUTER_FORROOT_GUARD'),
        jm = [
          ce,
          { provide: Ra, useClass: pf },
          At,
          Ci,
          {
            provide: gr,
            useFactory: function Vm(e) {
              return e.routerState.root;
            },
            deps: [At],
          },
          Si,
          qr ? { provide: qf, useValue: !0 } : [],
        ];
      function Bm() {
        return new a.PXZ('Router', At);
      }
      let wt = (() => {
        class e {
          constructor(t) {}
          static forRoot(t, i) {
            return {
              ngModule: e,
              providers: [
                jm,
                qr && i?.enableTracing ? ws().ɵproviders : [],
                { provide: ho, multi: !0, useValue: t },
                { provide: Qf, useFactory: zm, deps: [[At, new a.FiY(), new a.tp0()]] },
                { provide: zc, useValue: i || {} },
                i?.useHash ? { provide: ee, useClass: ge } : { provide: ee, useClass: ae },
                {
                  provide: Kf,
                  useFactory: () => {
                    const e = (0, a.f3M)(Ap),
                      n = (0, a.f3M)(a.R0b),
                      t = (0, a.f3M)(zc),
                      i = (0, a.f3M)(Gc),
                      u = (0, a.f3M)(Ra);
                    return t.scrollOffset && e.setOffset(t.scrollOffset), new D0(u, i, e, n, t);
                  },
                },
                i?.preloadingStrategy ? Ss(i.preloadingStrategy).ɵproviders : [],
                { provide: a.PXZ, multi: !0, useFactory: Bm },
                i?.initialNavigation ? Zm(i) : [],
                [
                  { provide: Wm, useFactory: $o },
                  { provide: a.tb, multi: !0, useExisting: Wm },
                ],
              ],
            };
          }
          static forChild(t) {
            return { ngModule: e, providers: [{ provide: ho, multi: !0, useValue: t }] };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(Qf, 8));
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({ imports: [cm] })),
          e
        );
      })();
      function zm(e) {
        if (qr && e)
          throw new a.vHH(
            4007,
            "The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return 'guarded';
      }
      function Zm(e) {
        return [
          'disabled' === e.initialNavigation
            ? Yr(3, [
                {
                  provide: a.ip1,
                  multi: !0,
                  useFactory: () => {
                    const n = (0, a.f3M)(At);
                    return () => {
                      n.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: $n, useValue: 2 },
              ]).ɵproviders
            : [],
          'enabledBlocking' === e.initialNavigation
            ? Yr(2, [
                { provide: $n, useValue: 0 },
                {
                  provide: a.ip1,
                  multi: !0,
                  deps: [a.zs3],
                  useFactory: (n) => {
                    const t = n.get(b, Promise.resolve());
                    return () =>
                      t.then(
                        () =>
                          new Promise((i) => {
                            const u = n.get(At),
                              f = n.get(Xa);
                            (function Dw(e, n) {
                              e.events
                                .pipe(
                                  (0, Wt.h)(
                                    (t) =>
                                      t instanceof Vo ||
                                      t instanceof ja ||
                                      t instanceof Ba ||
                                      t instanceof Oc
                                  ),
                                  (0, le.U)((t) =>
                                    t instanceof Vo || t instanceof Oc
                                      ? Bn.COMPLETE
                                      : t instanceof ja && (0 === t.code || 1 === t.code)
                                      ? Bn.REDIRECTING
                                      : Bn.FAILED
                                  ),
                                  (0, Wt.h)((t) => t !== Bn.REDIRECTING),
                                  (0, dr.q)(1)
                                )
                                .subscribe(() => {
                                  n();
                                });
                            })(u, () => {
                              i(!0);
                            }),
                              (n.get(Gc).afterPreactivation = () => (
                                i(!0), f.closed ? (0, we.of)(void 0) : f
                              )),
                              u.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const Wm = new a.OlP(qr ? 'Router Initializer' : '');
      var Ym = E(1365);
      const Xf = '@ngrx/router-store/request',
        ou = ((0, T.PH)(Xf, (0, T.Ky)()), '@ngrx/router-store/navigation'),
        S0 = (0, T.PH)(ou, (0, T.Ky)()),
        bs = '@ngrx/router-store/cancel',
        iu = ((0, T.PH)(bs, (0, T.Ky)()), '@ngrx/router-store/error'),
        su = ((0, T.PH)(iu, (0, T.Ky)()), '@ngrx/router-store/navigated'),
        Wc = (0, T.PH)(su, (0, T.Ky)());
      function qm(e, n) {
        const t = n;
        switch (t.type) {
          case ou:
          case iu:
          case bs:
            return { state: t.payload.routerState, navigationId: t.payload.event.id };
          default:
            return e;
        }
      }
      class th {
        serialize(n) {
          return { root: this.serializeRoute(n.root), url: n.url };
        }
        serializeRoute(n) {
          const t = n.children.map((i) => this.serializeRoute(i));
          return {
            params: n.params,
            data: n.data,
            url: n.url,
            outlet: n.outlet,
            title: n.title,
            routeConfig: n.routeConfig
              ? {
                  path: n.routeConfig.path,
                  pathMatch: n.routeConfig.pathMatch,
                  redirectTo: n.routeConfig.redirectTo,
                  outlet: n.routeConfig.outlet,
                  title: 'string' == typeof n.routeConfig.title ? n.routeConfig.title : void 0,
                }
              : null,
            queryParams: n.queryParams,
            fragment: n.fragment,
            firstChild: t[0],
            children: t,
          };
        }
      }
      var Ai = (() => {
        return (
          ((e = Ai || (Ai = {}))[(e.PreActivation = 1)] = 'PreActivation'),
          (e[(e.PostActivation = 2)] = 'PostActivation'),
          Ai
        );
        var e;
      })();
      const nh = 'router',
        rh = new a.OlP('@ngrx/router-store Internal Configuration'),
        Yc = new a.OlP('@ngrx/router-store Configuration');
      function Jm(e) {
        return { stateKey: nh, serializer: th, navigationActionTiming: Ai.PreActivation, ...e };
      }
      class Qm {
        serialize(n) {
          return { root: this.serializeRoute(n.root), url: n.url };
        }
        serializeRoute(n) {
          const t = n.children.map((i) => this.serializeRoute(i));
          return {
            params: n.params,
            paramMap: n.paramMap,
            data: n.data,
            url: n.url,
            outlet: n.outlet,
            title: n.title,
            routeConfig: n.routeConfig
              ? {
                  component: n.routeConfig.component,
                  path: n.routeConfig.path,
                  pathMatch: n.routeConfig.pathMatch,
                  redirectTo: n.routeConfig.redirectTo,
                  outlet: n.routeConfig.outlet,
                  title: n.routeConfig.title,
                }
              : null,
            queryParams: n.queryParams,
            queryParamMap: n.queryParamMap,
            fragment: n.fragment,
            component: n.routeConfig ? n.routeConfig.component : void 0,
            root: void 0,
            parent: void 0,
            firstChild: t[0],
            pathFromRoot: void 0,
            children: t,
          };
        }
      }
      class oh {}
      var tr = (() => {
        return (
          ((e = tr || (tr = {}))[(e.NONE = 1)] = 'NONE'),
          (e[(e.ROUTER = 2)] = 'ROUTER'),
          (e[(e.STORE = 3)] = 'STORE'),
          tr
        );
        var e;
      })();
      let ih = (() => {
        class e {
          constructor(t, i, u, f, h, _) {
            (this.store = t),
              (this.router = i),
              (this.serializer = u),
              (this.errorHandler = f),
              (this.config = h),
              (this.activeRuntimeChecks = _),
              (this.lastEvent = null),
              (this.routerState = null),
              (this.trigger = tr.NONE),
              (this.stateKey = this.config.stateKey),
              !(0, T.rM)() &&
                (0, a.X6Q)() &&
                (_?.strictActionSerializability || _?.strictStateSerializability) &&
                this.serializer instanceof Qm &&
                console.warn(
                  '@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer.'
                ),
              this.setUpStoreStateListener(),
              this.setUpRouterEventsListener();
          }
          setUpStoreStateListener() {
            this.store.pipe((0, T.Ys)(this.stateKey), (0, Ym.M)(this.store)).subscribe(([t, i]) => {
              this.navigateIfNeeded(t, i);
            });
          }
          navigateIfNeeded(t, i) {
            if (!t || !t.state || this.trigger === tr.ROUTER || this.lastEvent instanceof co)
              return;
            const u = t.state.url;
            (function Xm(e, n) {
              return e_(e) === e_(n);
            })(this.router.url, u) ||
              ((this.storeState = i),
              (this.trigger = tr.STORE),
              this.router.navigateByUrl(u).catch((f) => {
                this.errorHandler.handleError(f);
              }));
          }
          setUpRouterEventsListener() {
            const t = this.config.navigationActionTiming === Ai.PostActivation;
            let i;
            this.router.events.pipe((0, Ym.M)(this.store)).subscribe(([u, f]) => {
              (this.lastEvent = u),
                u instanceof co
                  ? ((this.routerState = this.serializer.serialize(
                      this.router.routerState.snapshot
                    )),
                    this.trigger !== tr.STORE &&
                      ((this.storeState = f), this.dispatchRouterRequest(u)))
                  : u instanceof Cf
                  ? ((i = u), !t && this.trigger !== tr.STORE && this.dispatchRouterNavigation(u))
                  : u instanceof ja
                  ? (this.dispatchRouterCancel(u), this.reset())
                  : u instanceof Ba
                  ? (this.dispatchRouterError(u), this.reset())
                  : u instanceof Vo &&
                    (this.trigger !== tr.STORE &&
                      (t && this.dispatchRouterNavigation(i), this.dispatchRouterNavigated(u)),
                    this.reset());
            });
          }
          dispatchRouterRequest(t) {
            this.dispatchRouterAction(Xf, { event: t });
          }
          dispatchRouterNavigation(t) {
            const i = this.serializer.serialize(t.state);
            this.dispatchRouterAction(ou, {
              routerState: i,
              event: new Cf(t.id, t.url, t.urlAfterRedirects, i),
            });
          }
          dispatchRouterCancel(t) {
            this.dispatchRouterAction(bs, { storeState: this.storeState, event: t });
          }
          dispatchRouterError(t) {
            this.dispatchRouterAction(iu, {
              storeState: this.storeState,
              event: new Ba(t.id, t.url, `${t}`),
            });
          }
          dispatchRouterNavigated(t) {
            const i = this.serializer.serialize(this.router.routerState.snapshot);
            this.dispatchRouterAction(su, { event: t, routerState: i });
          }
          dispatchRouterAction(t, i) {
            this.trigger = tr.ROUTER;
            try {
              this.store.dispatch({
                type: t,
                payload: {
                  routerState: this.routerState,
                  ...i,
                  event:
                    0 === this.config.routerState
                      ? i.event
                      : {
                          id: i.event.id,
                          url: i.event.url,
                          urlAfterRedirects: i.event.urlAfterRedirects,
                        },
                },
              });
            } finally {
              this.trigger = tr.NONE;
            }
          }
          reset() {
            (this.trigger = tr.NONE), (this.storeState = null), (this.routerState = null);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              a.LFG(T.yh),
              a.LFG(At),
              a.LFG(oh),
              a.LFG(a.qLn),
              a.LFG(Yc),
              a.LFG(T.hg)
            );
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function e_(e) {
        return e?.length > 0 && '/' === e[e.length - 1] ? e.substring(0, e.length - 1) : e;
      }
      function t_(e = {}) {
        return (0, a.MR2)([
          { provide: rh, useValue: e },
          { provide: Yc, useFactory: Jm, deps: [rh] },
          { provide: oh, useClass: e.serializer ? e.serializer : 0 === e.routerState ? Qm : th },
          { provide: a.Xts, multi: !0, useFactory: () => () => (0, a.f3M)(ih) },
          ih,
        ]);
      }
      let n_ = (() => {
        class e {
          static forRoot(t = {}) {
            return { ngModule: e, providers: [t_(t)] };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({})),
          e
        );
      })();
      var i_ = E(825);
      const s_ = [];
      let a_ = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [wt.forRoot(s_), wt] })),
            e
          );
        })(),
        go = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [Zt] })),
            e
          );
        })();
      function Lt(e, n, t) {
        (function u_(e, n) {
          if (n.has(e))
            throw new TypeError('Cannot initialize the same private elements twice on an object');
        })(e, n),
          n.set(e, t);
      }
      function au(e, n, t) {
        if (!n.has(e)) throw new TypeError('attempted to ' + t + ' private field on non-instance');
        return n.get(e);
      }
      function Et(e, n, t) {
        return (
          (function c_(e, n, t) {
            if (n.set) n.set.call(e, t);
            else {
              if (!n.writable) throw new TypeError('attempted to set read only private field');
              n.value = t;
            }
          })(e, au(e, n, 'set'), t),
          t
        );
      }
      function qe(e, n) {
        return (function A0(e, n) {
          return n.get ? n.get.call(e) : n.value;
        })(e, au(e, n, 'get'));
      }
      function Kc(e, n, t, i, u, f, h) {
        try {
          var _ = e[f](h),
            v = _.value;
        } catch (C) {
          return void t(C);
        }
        _.done ? n(v) : Promise.resolve(v).then(i, u);
      }
      function qt(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (i, u) {
            var f = e.apply(n, t);
            function h(v) {
              Kc(f, i, u, h, _, 'next', v);
            }
            function _(v) {
              Kc(f, i, u, h, _, 'throw', v);
            }
            h(void 0);
          });
        };
      }
      var gt, e;
      ((e = gt || (gt = {})).assertEqual = (u) => u),
        (e.assertIs = function n(u) {}),
        (e.assertNever = function t(u) {
          throw new Error();
        }),
        (e.arrayToEnum = (u) => {
          const f = {};
          for (const h of u) f[h] = h;
          return f;
        }),
        (e.getValidEnumValues = (u) => {
          const f = e.objectKeys(u).filter((_) => 'number' != typeof u[u[_]]),
            h = {};
          for (const _ of f) h[_] = u[_];
          return e.objectValues(h);
        }),
        (e.objectValues = (u) =>
          e.objectKeys(u).map(function (f) {
            return u[f];
          })),
        (e.objectKeys =
          'function' == typeof Object.keys
            ? (u) => Object.keys(u)
            : (u) => {
                const f = [];
                for (const h in u) Object.prototype.hasOwnProperty.call(u, h) && f.push(h);
                return f;
              }),
        (e.find = (u, f) => {
          for (const h of u) if (f(h)) return h;
        }),
        (e.isInteger =
          'function' == typeof Number.isInteger
            ? (u) => Number.isInteger(u)
            : (u) => 'number' == typeof u && isFinite(u) && Math.floor(u) === u),
        (e.joinValues = function i(u, f = ' | ') {
          return u.map((h) => ('string' == typeof h ? `'${h}'` : h)).join(f);
        }),
        (e.jsonStringifyReplacer = (u, f) => ('bigint' == typeof f ? f.toString() : f));
      var qc = (() => (
        (function (e) {
          e.mergeShapes = (n, t) => ({ ...n, ...t });
        })(qc || (qc = {})),
        qc
      ))();
      const Ce = gt.arrayToEnum([
          'string',
          'nan',
          'number',
          'integer',
          'float',
          'boolean',
          'date',
          'bigint',
          'symbol',
          'function',
          'undefined',
          'null',
          'array',
          'object',
          'unknown',
          'promise',
          'void',
          'never',
          'map',
          'set',
        ]),
        Mi = (e) => {
          switch (typeof e) {
            case 'undefined':
              return Ce.undefined;
            case 'string':
              return Ce.string;
            case 'number':
              return isNaN(e) ? Ce.nan : Ce.number;
            case 'boolean':
              return Ce.boolean;
            case 'function':
              return Ce.function;
            case 'bigint':
              return Ce.bigint;
            case 'symbol':
              return Ce.symbol;
            case 'object':
              return Array.isArray(e)
                ? Ce.array
                : null === e
                ? Ce.null
                : e.then && 'function' == typeof e.then && e.catch && 'function' == typeof e.catch
                ? Ce.promise
                : typeof Map < 'u' && e instanceof Map
                ? Ce.map
                : typeof Set < 'u' && e instanceof Set
                ? Ce.set
                : typeof Date < 'u' && e instanceof Date
                ? Ce.date
                : Ce.object;
            default:
              return Ce.unknown;
          }
        },
        fe = gt.arrayToEnum([
          'invalid_type',
          'invalid_literal',
          'custom',
          'invalid_union',
          'invalid_union_discriminator',
          'invalid_enum_value',
          'unrecognized_keys',
          'invalid_arguments',
          'invalid_return_type',
          'invalid_date',
          'invalid_string',
          'too_small',
          'too_big',
          'invalid_intersection_types',
          'not_multiple_of',
          'not_finite',
        ]);
      let mo = (() => {
        class e extends Error {
          constructor(t) {
            super(),
              (this.issues = []),
              (this.addIssue = (u) => {
                this.issues = [...this.issues, u];
              }),
              (this.addIssues = (u = []) => {
                this.issues = [...this.issues, ...u];
              });
            const i = new.target.prototype;
            Object.setPrototypeOf ? Object.setPrototypeOf(this, i) : (this.__proto__ = i),
              (this.name = 'ZodError'),
              (this.issues = t);
          }
          get errors() {
            return this.issues;
          }
          format(t) {
            const i =
                t ||
                function (h) {
                  return h.message;
                },
              u = { _errors: [] },
              f = (h) => {
                for (const _ of h.issues)
                  if ('invalid_union' === _.code) _.unionErrors.map(f);
                  else if ('invalid_return_type' === _.code) f(_.returnTypeError);
                  else if ('invalid_arguments' === _.code) f(_.argumentsError);
                  else if (0 === _.path.length) u._errors.push(i(_));
                  else {
                    let v = u,
                      C = 0;
                    for (; C < _.path.length; ) {
                      const w = _.path[C];
                      C === _.path.length - 1
                        ? ((v[w] = v[w] || { _errors: [] }), v[w]._errors.push(i(_)))
                        : (v[w] = v[w] || { _errors: [] }),
                        (v = v[w]),
                        C++;
                    }
                  }
              };
            return f(this), u;
          }
          toString() {
            return this.message;
          }
          get message() {
            return JSON.stringify(this.issues, gt.jsonStringifyReplacer, 2);
          }
          get isEmpty() {
            return 0 === this.issues.length;
          }
          flatten(t = (i) => i.message) {
            const i = {},
              u = [];
            for (const f of this.issues)
              f.path.length > 0
                ? ((i[f.path[0]] = i[f.path[0]] || []), i[f.path[0]].push(t(f)))
                : u.push(t(f));
            return { formErrors: u, fieldErrors: i };
          }
          get formErrors() {
            return this.flatten();
          }
        }
        return (e.create = (n) => new e(n)), e;
      })();
      const As = (e, n) => {
        let t;
        switch (e.code) {
          case fe.invalid_type:
            t =
              e.received === Ce.undefined
                ? 'Required'
                : `Expected ${e.expected}, received ${e.received}`;
            break;
          case fe.invalid_literal:
            t = `Invalid literal value, expected ${JSON.stringify(
              e.expected,
              gt.jsonStringifyReplacer
            )}`;
            break;
          case fe.unrecognized_keys:
            t = `Unrecognized key(s) in object: ${gt.joinValues(e.keys, ', ')}`;
            break;
          case fe.invalid_union:
            t = 'Invalid input';
            break;
          case fe.invalid_union_discriminator:
            t = `Invalid discriminator value. Expected ${gt.joinValues(e.options)}`;
            break;
          case fe.invalid_enum_value:
            t = `Invalid enum value. Expected ${gt.joinValues(e.options)}, received '${
              e.received
            }'`;
            break;
          case fe.invalid_arguments:
            t = 'Invalid function arguments';
            break;
          case fe.invalid_return_type:
            t = 'Invalid function return type';
            break;
          case fe.invalid_date:
            t = 'Invalid date';
            break;
          case fe.invalid_string:
            'object' == typeof e.validation
              ? 'includes' in e.validation
                ? ((t = `Invalid input: must include "${e.validation.includes}"`),
                  'number' == typeof e.validation.position &&
                    (t = `${t} at one or more positions greater than or equal to ${e.validation.position}`))
                : 'startsWith' in e.validation
                ? (t = `Invalid input: must start with "${e.validation.startsWith}"`)
                : 'endsWith' in e.validation
                ? (t = `Invalid input: must end with "${e.validation.endsWith}"`)
                : gt.assertNever(e.validation)
              : (t = 'regex' !== e.validation ? `Invalid ${e.validation}` : 'Invalid');
            break;
          case fe.too_small:
            t =
              'array' === e.type
                ? `Array must contain ${
                    e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'
                  } ${e.minimum} element(s)`
                : 'string' === e.type
                ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${
                    e.minimum
                  } character(s)`
                : 'number' === e.type
                ? `Number must be ${
                    e.exact
                      ? 'exactly equal to '
                      : e.inclusive
                      ? 'greater than or equal to '
                      : 'greater than '
                  }${e.minimum}`
                : 'date' === e.type
                ? `Date must be ${
                    e.exact
                      ? 'exactly equal to '
                      : e.inclusive
                      ? 'greater than or equal to '
                      : 'greater than '
                  }${new Date(Number(e.minimum))}`
                : 'Invalid input';
            break;
          case fe.too_big:
            t =
              'array' === e.type
                ? `Array must contain ${
                    e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'
                  } ${e.maximum} element(s)`
                : 'string' === e.type
                ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${
                    e.maximum
                  } character(s)`
                : 'number' === e.type
                ? `Number must be ${
                    e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'
                  } ${e.maximum}`
                : 'bigint' === e.type
                ? `BigInt must be ${
                    e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'
                  } ${e.maximum}`
                : 'date' === e.type
                ? `Date must be ${
                    e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'
                  } ${new Date(Number(e.maximum))}`
                : 'Invalid input';
            break;
          case fe.custom:
            t = 'Invalid input';
            break;
          case fe.invalid_intersection_types:
            t = 'Intersection results could not be merged';
            break;
          case fe.not_multiple_of:
            t = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case fe.not_finite:
            t = 'Number must be finite';
            break;
          default:
            (t = n.defaultError), gt.assertNever(e);
        }
        return { message: t };
      };
      let l_ = As;
      function uu() {
        return l_;
      }
      const Jc = (e) => {
        const { data: n, path: t, errorMaps: i, issueData: u } = e,
          f = [...t, ...(u.path || [])],
          h = { ...u, path: f };
        let _ = '';
        const v = i
          .filter((C) => !!C)
          .slice()
          .reverse();
        for (const C of v) _ = C(h, { data: n, defaultError: _ }).message;
        return { ...u, path: f, message: u.message || _ };
      };
      function Se(e, n) {
        const t = Jc({
          issueData: n,
          data: e.data,
          path: e.path,
          errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, uu(), As].filter((i) => !!i),
        });
        e.common.issues.push(t);
      }
      class Dn {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          'valid' === this.value && (this.value = 'dirty');
        }
        abort() {
          'aborted' !== this.value && (this.value = 'aborted');
        }
        static mergeArray(n, t) {
          const i = [];
          for (const u of t) {
            if ('aborted' === u.status) return ze;
            'dirty' === u.status && n.dirty(), i.push(u.value);
          }
          return { status: n.value, value: i };
        }
        static mergeObjectAsync(n, t) {
          return qt(function* () {
            const i = [];
            for (const u of t) i.push({ key: yield u.key, value: yield u.value });
            return Dn.mergeObjectSync(n, i);
          })();
        }
        static mergeObjectSync(n, t) {
          const i = {};
          for (const u of t) {
            const { key: f, value: h } = u;
            if ('aborted' === f.status || 'aborted' === h.status) return ze;
            'dirty' === f.status && n.dirty(),
              'dirty' === h.status && n.dirty(),
              (typeof h.value < 'u' || u.alwaysSet) && (i[f.value] = h.value);
          }
          return { status: n.value, value: i };
        }
      }
      const ze = Object.freeze({ status: 'aborted' }),
        sh = (e) => ({ status: 'dirty', value: e }),
        Jt = (e) => ({ status: 'valid', value: e }),
        ah = (e) => 'aborted' === e.status,
        uh = (e) => 'dirty' === e.status,
        cu = (e) => 'valid' === e.status,
        Qc = (e) => typeof Promise < 'u' && e instanceof Promise;
      var Pe = (() => (
        (function (e) {
          (e.errToObj = (n) => ('string' == typeof n ? { message: n } : n || {})),
            (e.toString = (n) => ('string' == typeof n ? n : n?.message));
        })(Pe || (Pe = {})),
        Pe
      ))();
      class _o {
        constructor(n, t, i, u) {
          (this._cachedPath = []),
            (this.parent = n),
            (this.data = t),
            (this._path = i),
            (this._key = u);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      const ch = (e, n) => {
        if (cu(n)) return { success: !0, data: n.value };
        if (!e.common.issues.length) throw new Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            const t = new mo(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function et(e) {
        if (!e) return {};
        const { errorMap: n, invalid_type_error: t, required_error: i, description: u } = e;
        if (n && (t || i))
          throw new Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        return n
          ? { errorMap: n, description: u }
          : {
              errorMap: (h, _) =>
                'invalid_type' !== h.code
                  ? { message: _.defaultError }
                  : typeof _.data > 'u'
                  ? { message: i ?? _.defaultError }
                  : { message: t ?? _.defaultError },
              description: u,
            };
      }
      class je {
        constructor(n) {
          (this.spa = this.safeParseAsync),
            (this._def = n),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(n) {
          return Mi(n.data);
        }
        _getOrReturnCtx(n, t) {
          return (
            t || {
              common: n.parent.common,
              data: n.data,
              parsedType: Mi(n.data),
              schemaErrorMap: this._def.errorMap,
              path: n.path,
              parent: n.parent,
            }
          );
        }
        _processInputParams(n) {
          return {
            status: new Dn(),
            ctx: {
              common: n.parent.common,
              data: n.data,
              parsedType: Mi(n.data),
              schemaErrorMap: this._def.errorMap,
              path: n.path,
              parent: n.parent,
            },
          };
        }
        _parseSync(n) {
          const t = this._parse(n);
          if (Qc(t)) throw new Error('Synchronous parse encountered promise.');
          return t;
        }
        _parseAsync(n) {
          const t = this._parse(n);
          return Promise.resolve(t);
        }
        parse(n, t) {
          const i = this.safeParse(n, t);
          if (i.success) return i.data;
          throw i.error;
        }
        safeParse(n, t) {
          var i;
          const u = {
              common: {
                issues: [],
                async: null !== (i = t?.async) && void 0 !== i && i,
                contextualErrorMap: t?.errorMap,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: n,
              parsedType: Mi(n),
            },
            f = this._parseSync({ data: n, path: u.path, parent: u });
          return ch(u, f);
        }
        parseAsync(n, t) {
          var i = this;
          return qt(function* () {
            const u = yield i.safeParseAsync(n, t);
            if (u.success) return u.data;
            throw u.error;
          })();
        }
        safeParseAsync(n, t) {
          var i = this;
          return qt(function* () {
            const u = {
                common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
                path: t?.path || [],
                schemaErrorMap: i._def.errorMap,
                parent: null,
                data: n,
                parsedType: Mi(n),
              },
              f = i._parse({ data: n, path: u.path, parent: u }),
              h = yield Qc(f) ? f : Promise.resolve(f);
            return ch(u, h);
          })();
        }
        refine(n, t) {
          const i = (u) =>
            'string' == typeof t || typeof t > 'u'
              ? { message: t }
              : 'function' == typeof t
              ? t(u)
              : t;
          return this._refinement((u, f) => {
            const h = n(u),
              _ = () => f.addIssue({ code: fe.custom, ...i(u) });
            return typeof Promise < 'u' && h instanceof Promise
              ? h.then((v) => !!v || (_(), !1))
              : !!h || (_(), !1);
          });
        }
        refinement(n, t) {
          return this._refinement(
            (i, u) => !!n(i) || (u.addIssue('function' == typeof t ? t(i, u) : t), !1)
          );
        }
        _refinement(n) {
          return new Pi({
            schema: this,
            typeName: Ve.ZodEffects,
            effect: { type: 'refinement', refinement: n },
          });
        }
        superRefine(n) {
          return this._refinement(n);
        }
        optional() {
          return xi.create(this, this._def);
        }
        nullable() {
          return hu.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return Go.create(this, this._def);
        }
        promise() {
          return ul.create(this, this._def);
        }
        or(n) {
          return ol.create([this, n], this._def);
        }
        and(n) {
          return sl.create(this, n, this._def);
        }
        transform(n) {
          return new Pi({
            ...et(this._def),
            schema: this,
            typeName: Ve.ZodEffects,
            effect: { type: 'transform', transform: n },
          });
        }
        default(n) {
          const t = 'function' == typeof n ? n : () => n;
          return new _h({
            ...et(this._def),
            innerType: this,
            defaultValue: t,
            typeName: Ve.ZodDefault,
          });
        }
        brand() {
          return new y_({ typeName: Ve.ZodBranded, type: this, ...et(this._def) });
        }
        catch(n) {
          const t = 'function' == typeof n ? n : () => n;
          return new m_({
            ...et(this._def),
            innerType: this,
            catchValue: t,
            typeName: Ve.ZodCatch,
          });
        }
        describe(n) {
          return new (0, this.constructor)({ ...this._def, description: n });
        }
        pipe(n) {
          return Os.create(this, n);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      const I0 = /^c[^\s-]{8,}$/i,
        O0 = /^[a-z][a-z0-9]*$/,
        Jr = /[0-9A-HJKMNP-TV-Z]{26}/,
        Rr =
          /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
        Fr =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,
        d_ = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
        f_ =
          /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
        P0 =
          /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
        x0 = (e) =>
          e.precision
            ? e.offset
              ? new RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
                )
              : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`)
            : 0 === e.precision
            ? e.offset
              ? new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$')
              : new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$')
            : e.offset
            ? new RegExp(
                '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$'
              )
            : new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$');
      function R0(e, n) {
        return !((('v4' !== n && n) || !f_.test(e)) && (('v6' !== n && n) || !P0.test(e)));
      }
      let Xc = (() => {
        class e extends je {
          constructor() {
            super(...arguments),
              (this._regex = (t, i, u) =>
                this.refinement((f) => t.test(f), {
                  validation: i,
                  code: fe.invalid_string,
                  ...Pe.errToObj(u),
                })),
              (this.nonempty = (t) => this.min(1, Pe.errToObj(t))),
              (this.trim = () =>
                new e({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] })),
              (this.toLowerCase = () =>
                new e({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] })),
              (this.toUpperCase = () =>
                new e({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] }));
          }
          _parse(t) {
            if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== Ce.string)) {
              const h = this._getOrReturnCtx(t);
              return (
                Se(h, { code: fe.invalid_type, expected: Ce.string, received: h.parsedType }), ze
              );
            }
            const u = new Dn();
            let f;
            for (const h of this._def.checks)
              if ('min' === h.kind)
                t.data.length < h.value &&
                  ((f = this._getOrReturnCtx(t, f)),
                  Se(f, {
                    code: fe.too_small,
                    minimum: h.value,
                    type: 'string',
                    inclusive: !0,
                    exact: !1,
                    message: h.message,
                  }),
                  u.dirty());
              else if ('max' === h.kind)
                t.data.length > h.value &&
                  ((f = this._getOrReturnCtx(t, f)),
                  Se(f, {
                    code: fe.too_big,
                    maximum: h.value,
                    type: 'string',
                    inclusive: !0,
                    exact: !1,
                    message: h.message,
                  }),
                  u.dirty());
              else if ('length' === h.kind) {
                const _ = t.data.length > h.value,
                  v = t.data.length < h.value;
                (_ || v) &&
                  ((f = this._getOrReturnCtx(t, f)),
                  _
                    ? Se(f, {
                        code: fe.too_big,
                        maximum: h.value,
                        type: 'string',
                        inclusive: !0,
                        exact: !0,
                        message: h.message,
                      })
                    : v &&
                      Se(f, {
                        code: fe.too_small,
                        minimum: h.value,
                        type: 'string',
                        inclusive: !0,
                        exact: !0,
                        message: h.message,
                      }),
                  u.dirty());
              } else if ('email' === h.kind)
                Fr.test(t.data) ||
                  ((f = this._getOrReturnCtx(t, f)),
                  Se(f, { validation: 'email', code: fe.invalid_string, message: h.message }),
                  u.dirty());
              else if ('emoji' === h.kind)
                d_.test(t.data) ||
                  ((f = this._getOrReturnCtx(t, f)),
                  Se(f, { validation: 'emoji', code: fe.invalid_string, message: h.message }),
                  u.dirty());
              else if ('uuid' === h.kind)
                Rr.test(t.data) ||
                  ((f = this._getOrReturnCtx(t, f)),
                  Se(f, { validation: 'uuid', code: fe.invalid_string, message: h.message }),
                  u.dirty());
              else if ('cuid' === h.kind)
                I0.test(t.data) ||
                  ((f = this._getOrReturnCtx(t, f)),
                  Se(f, { validation: 'cuid', code: fe.invalid_string, message: h.message }),
                  u.dirty());
              else if ('cuid2' === h.kind)
                O0.test(t.data) ||
                  ((f = this._getOrReturnCtx(t, f)),
                  Se(f, { validation: 'cuid2', code: fe.invalid_string, message: h.message }),
                  u.dirty());
              else if ('ulid' === h.kind)
                Jr.test(t.data) ||
                  ((f = this._getOrReturnCtx(t, f)),
                  Se(f, { validation: 'ulid', code: fe.invalid_string, message: h.message }),
                  u.dirty());
              else if ('url' === h.kind)
                try {
                  new URL(t.data);
                } catch {
                  (f = this._getOrReturnCtx(t, f)),
                    Se(f, { validation: 'url', code: fe.invalid_string, message: h.message }),
                    u.dirty();
                }
              else
                'regex' === h.kind
                  ? ((h.regex.lastIndex = 0),
                    h.regex.test(t.data) ||
                      ((f = this._getOrReturnCtx(t, f)),
                      Se(f, { validation: 'regex', code: fe.invalid_string, message: h.message }),
                      u.dirty()))
                  : 'trim' === h.kind
                  ? (t.data = t.data.trim())
                  : 'includes' === h.kind
                  ? t.data.includes(h.value, h.position) ||
                    ((f = this._getOrReturnCtx(t, f)),
                    Se(f, {
                      code: fe.invalid_string,
                      validation: { includes: h.value, position: h.position },
                      message: h.message,
                    }),
                    u.dirty())
                  : 'toLowerCase' === h.kind
                  ? (t.data = t.data.toLowerCase())
                  : 'toUpperCase' === h.kind
                  ? (t.data = t.data.toUpperCase())
                  : 'startsWith' === h.kind
                  ? t.data.startsWith(h.value) ||
                    ((f = this._getOrReturnCtx(t, f)),
                    Se(f, {
                      code: fe.invalid_string,
                      validation: { startsWith: h.value },
                      message: h.message,
                    }),
                    u.dirty())
                  : 'endsWith' === h.kind
                  ? t.data.endsWith(h.value) ||
                    ((f = this._getOrReturnCtx(t, f)),
                    Se(f, {
                      code: fe.invalid_string,
                      validation: { endsWith: h.value },
                      message: h.message,
                    }),
                    u.dirty())
                  : 'datetime' === h.kind
                  ? x0(h).test(t.data) ||
                    ((f = this._getOrReturnCtx(t, f)),
                    Se(f, { code: fe.invalid_string, validation: 'datetime', message: h.message }),
                    u.dirty())
                  : 'ip' === h.kind
                  ? R0(t.data, h.version) ||
                    ((f = this._getOrReturnCtx(t, f)),
                    Se(f, { validation: 'ip', code: fe.invalid_string, message: h.message }),
                    u.dirty())
                  : gt.assertNever(h);
            return { status: u.value, value: t.data };
          }
          _addCheck(t) {
            return new e({ ...this._def, checks: [...this._def.checks, t] });
          }
          email(t) {
            return this._addCheck({ kind: 'email', ...Pe.errToObj(t) });
          }
          url(t) {
            return this._addCheck({ kind: 'url', ...Pe.errToObj(t) });
          }
          emoji(t) {
            return this._addCheck({ kind: 'emoji', ...Pe.errToObj(t) });
          }
          uuid(t) {
            return this._addCheck({ kind: 'uuid', ...Pe.errToObj(t) });
          }
          cuid(t) {
            return this._addCheck({ kind: 'cuid', ...Pe.errToObj(t) });
          }
          cuid2(t) {
            return this._addCheck({ kind: 'cuid2', ...Pe.errToObj(t) });
          }
          ulid(t) {
            return this._addCheck({ kind: 'ulid', ...Pe.errToObj(t) });
          }
          ip(t) {
            return this._addCheck({ kind: 'ip', ...Pe.errToObj(t) });
          }
          datetime(t) {
            var i;
            return this._addCheck(
              'string' == typeof t
                ? { kind: 'datetime', precision: null, offset: !1, message: t }
                : {
                    kind: 'datetime',
                    precision: typeof t?.precision > 'u' ? null : t?.precision,
                    offset: null !== (i = t?.offset) && void 0 !== i && i,
                    ...Pe.errToObj(t?.message),
                  }
            );
          }
          regex(t, i) {
            return this._addCheck({ kind: 'regex', regex: t, ...Pe.errToObj(i) });
          }
          includes(t, i) {
            return this._addCheck({
              kind: 'includes',
              value: t,
              position: i?.position,
              ...Pe.errToObj(i?.message),
            });
          }
          startsWith(t, i) {
            return this._addCheck({ kind: 'startsWith', value: t, ...Pe.errToObj(i) });
          }
          endsWith(t, i) {
            return this._addCheck({ kind: 'endsWith', value: t, ...Pe.errToObj(i) });
          }
          min(t, i) {
            return this._addCheck({ kind: 'min', value: t, ...Pe.errToObj(i) });
          }
          max(t, i) {
            return this._addCheck({ kind: 'max', value: t, ...Pe.errToObj(i) });
          }
          length(t, i) {
            return this._addCheck({ kind: 'length', value: t, ...Pe.errToObj(i) });
          }
          get isDatetime() {
            return !!this._def.checks.find((t) => 'datetime' === t.kind);
          }
          get isEmail() {
            return !!this._def.checks.find((t) => 'email' === t.kind);
          }
          get isURL() {
            return !!this._def.checks.find((t) => 'url' === t.kind);
          }
          get isEmoji() {
            return !!this._def.checks.find((t) => 'emoji' === t.kind);
          }
          get isUUID() {
            return !!this._def.checks.find((t) => 'uuid' === t.kind);
          }
          get isCUID() {
            return !!this._def.checks.find((t) => 'cuid' === t.kind);
          }
          get isCUID2() {
            return !!this._def.checks.find((t) => 'cuid2' === t.kind);
          }
          get isULID() {
            return !!this._def.checks.find((t) => 'ulid' === t.kind);
          }
          get isIP() {
            return !!this._def.checks.find((t) => 'ip' === t.kind);
          }
          get minLength() {
            let t = null;
            for (const i of this._def.checks)
              'min' === i.kind && (null === t || i.value > t) && (t = i.value);
            return t;
          }
          get maxLength() {
            let t = null;
            for (const i of this._def.checks)
              'max' === i.kind && (null === t || i.value < t) && (t = i.value);
            return t;
          }
        }
        return (
          (e.create = (n) => {
            var t;
            return new e({
              checks: [],
              typeName: Ve.ZodString,
              coerce: null !== (t = n?.coerce) && void 0 !== t && t,
              ...et(n),
            });
          }),
          e
        );
      })();
      function lh(e, n) {
        const t = (e.toString().split('.')[1] || '').length,
          i = (n.toString().split('.')[1] || '').length,
          u = t > i ? t : i;
        return (
          (parseInt(e.toFixed(u).replace('.', '')) % parseInt(n.toFixed(u).replace('.', ''))) /
          Math.pow(10, u)
        );
      }
      let Ti = (() => {
          class e extends je {
            constructor() {
              super(...arguments),
                (this.min = this.gte),
                (this.max = this.lte),
                (this.step = this.multipleOf);
            }
            _parse(t) {
              if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== Ce.number)) {
                const h = this._getOrReturnCtx(t);
                return (
                  Se(h, { code: fe.invalid_type, expected: Ce.number, received: h.parsedType }), ze
                );
              }
              let u;
              const f = new Dn();
              for (const h of this._def.checks)
                'int' === h.kind
                  ? gt.isInteger(t.data) ||
                    ((u = this._getOrReturnCtx(t, u)),
                    Se(u, {
                      code: fe.invalid_type,
                      expected: 'integer',
                      received: 'float',
                      message: h.message,
                    }),
                    f.dirty())
                  : 'min' === h.kind
                  ? (h.inclusive ? t.data < h.value : t.data <= h.value) &&
                    ((u = this._getOrReturnCtx(t, u)),
                    Se(u, {
                      code: fe.too_small,
                      minimum: h.value,
                      type: 'number',
                      inclusive: h.inclusive,
                      exact: !1,
                      message: h.message,
                    }),
                    f.dirty())
                  : 'max' === h.kind
                  ? (h.inclusive ? t.data > h.value : t.data >= h.value) &&
                    ((u = this._getOrReturnCtx(t, u)),
                    Se(u, {
                      code: fe.too_big,
                      maximum: h.value,
                      type: 'number',
                      inclusive: h.inclusive,
                      exact: !1,
                      message: h.message,
                    }),
                    f.dirty())
                  : 'multipleOf' === h.kind
                  ? 0 !== lh(t.data, h.value) &&
                    ((u = this._getOrReturnCtx(t, u)),
                    Se(u, { code: fe.not_multiple_of, multipleOf: h.value, message: h.message }),
                    f.dirty())
                  : 'finite' === h.kind
                  ? Number.isFinite(t.data) ||
                    ((u = this._getOrReturnCtx(t, u)),
                    Se(u, { code: fe.not_finite, message: h.message }),
                    f.dirty())
                  : gt.assertNever(h);
              return { status: f.value, value: t.data };
            }
            gte(t, i) {
              return this.setLimit('min', t, !0, Pe.toString(i));
            }
            gt(t, i) {
              return this.setLimit('min', t, !1, Pe.toString(i));
            }
            lte(t, i) {
              return this.setLimit('max', t, !0, Pe.toString(i));
            }
            lt(t, i) {
              return this.setLimit('max', t, !1, Pe.toString(i));
            }
            setLimit(t, i, u, f) {
              return new e({
                ...this._def,
                checks: [
                  ...this._def.checks,
                  { kind: t, value: i, inclusive: u, message: Pe.toString(f) },
                ],
              });
            }
            _addCheck(t) {
              return new e({ ...this._def, checks: [...this._def.checks, t] });
            }
            int(t) {
              return this._addCheck({ kind: 'int', message: Pe.toString(t) });
            }
            positive(t) {
              return this._addCheck({
                kind: 'min',
                value: 0,
                inclusive: !1,
                message: Pe.toString(t),
              });
            }
            negative(t) {
              return this._addCheck({
                kind: 'max',
                value: 0,
                inclusive: !1,
                message: Pe.toString(t),
              });
            }
            nonpositive(t) {
              return this._addCheck({
                kind: 'max',
                value: 0,
                inclusive: !0,
                message: Pe.toString(t),
              });
            }
            nonnegative(t) {
              return this._addCheck({
                kind: 'min',
                value: 0,
                inclusive: !0,
                message: Pe.toString(t),
              });
            }
            multipleOf(t, i) {
              return this._addCheck({ kind: 'multipleOf', value: t, message: Pe.toString(i) });
            }
            finite(t) {
              return this._addCheck({ kind: 'finite', message: Pe.toString(t) });
            }
            safe(t) {
              return this._addCheck({
                kind: 'min',
                inclusive: !0,
                value: Number.MIN_SAFE_INTEGER,
                message: Pe.toString(t),
              })._addCheck({
                kind: 'max',
                inclusive: !0,
                value: Number.MAX_SAFE_INTEGER,
                message: Pe.toString(t),
              });
            }
            get minValue() {
              let t = null;
              for (const i of this._def.checks)
                'min' === i.kind && (null === t || i.value > t) && (t = i.value);
              return t;
            }
            get maxValue() {
              let t = null;
              for (const i of this._def.checks)
                'max' === i.kind && (null === t || i.value < t) && (t = i.value);
              return t;
            }
            get isInt() {
              return !!this._def.checks.find(
                (t) => 'int' === t.kind || ('multipleOf' === t.kind && gt.isInteger(t.value))
              );
            }
            get isFinite() {
              let t = null,
                i = null;
              for (const u of this._def.checks) {
                if ('finite' === u.kind || 'int' === u.kind || 'multipleOf' === u.kind) return !0;
                'min' === u.kind
                  ? (null === i || u.value > i) && (i = u.value)
                  : 'max' === u.kind && (null === t || u.value < t) && (t = u.value);
              }
              return Number.isFinite(i) && Number.isFinite(t);
            }
          }
          return (
            (e.create = (n) =>
              new e({ checks: [], typeName: Ve.ZodNumber, coerce: n?.coerce || !1, ...et(n) })),
            e
          );
        })(),
        dh = (() => {
          class e extends je {
            constructor() {
              super(...arguments), (this.min = this.gte), (this.max = this.lte);
            }
            _parse(t) {
              if ((this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== Ce.bigint)) {
                const h = this._getOrReturnCtx(t);
                return (
                  Se(h, { code: fe.invalid_type, expected: Ce.bigint, received: h.parsedType }), ze
                );
              }
              let u;
              const f = new Dn();
              for (const h of this._def.checks)
                'min' === h.kind
                  ? (h.inclusive ? t.data < h.value : t.data <= h.value) &&
                    ((u = this._getOrReturnCtx(t, u)),
                    Se(u, {
                      code: fe.too_small,
                      type: 'bigint',
                      minimum: h.value,
                      inclusive: h.inclusive,
                      message: h.message,
                    }),
                    f.dirty())
                  : 'max' === h.kind
                  ? (h.inclusive ? t.data > h.value : t.data >= h.value) &&
                    ((u = this._getOrReturnCtx(t, u)),
                    Se(u, {
                      code: fe.too_big,
                      type: 'bigint',
                      maximum: h.value,
                      inclusive: h.inclusive,
                      message: h.message,
                    }),
                    f.dirty())
                  : 'multipleOf' === h.kind
                  ? t.data % h.value !== BigInt(0) &&
                    ((u = this._getOrReturnCtx(t, u)),
                    Se(u, { code: fe.not_multiple_of, multipleOf: h.value, message: h.message }),
                    f.dirty())
                  : gt.assertNever(h);
              return { status: f.value, value: t.data };
            }
            gte(t, i) {
              return this.setLimit('min', t, !0, Pe.toString(i));
            }
            gt(t, i) {
              return this.setLimit('min', t, !1, Pe.toString(i));
            }
            lte(t, i) {
              return this.setLimit('max', t, !0, Pe.toString(i));
            }
            lt(t, i) {
              return this.setLimit('max', t, !1, Pe.toString(i));
            }
            setLimit(t, i, u, f) {
              return new e({
                ...this._def,
                checks: [
                  ...this._def.checks,
                  { kind: t, value: i, inclusive: u, message: Pe.toString(f) },
                ],
              });
            }
            _addCheck(t) {
              return new e({ ...this._def, checks: [...this._def.checks, t] });
            }
            positive(t) {
              return this._addCheck({
                kind: 'min',
                value: BigInt(0),
                inclusive: !1,
                message: Pe.toString(t),
              });
            }
            negative(t) {
              return this._addCheck({
                kind: 'max',
                value: BigInt(0),
                inclusive: !1,
                message: Pe.toString(t),
              });
            }
            nonpositive(t) {
              return this._addCheck({
                kind: 'max',
                value: BigInt(0),
                inclusive: !0,
                message: Pe.toString(t),
              });
            }
            nonnegative(t) {
              return this._addCheck({
                kind: 'min',
                value: BigInt(0),
                inclusive: !0,
                message: Pe.toString(t),
              });
            }
            multipleOf(t, i) {
              return this._addCheck({ kind: 'multipleOf', value: t, message: Pe.toString(i) });
            }
            get minValue() {
              let t = null;
              for (const i of this._def.checks)
                'min' === i.kind && (null === t || i.value > t) && (t = i.value);
              return t;
            }
            get maxValue() {
              let t = null;
              for (const i of this._def.checks)
                'max' === i.kind && (null === t || i.value < t) && (t = i.value);
              return t;
            }
          }
          return (
            (e.create = (n) => {
              var t;
              return new e({
                checks: [],
                typeName: Ve.ZodBigInt,
                coerce: null !== (t = n?.coerce) && void 0 !== t && t,
                ...et(n),
              });
            }),
            e
          );
        })(),
        el = (() => {
          class e extends je {
            _parse(t) {
              if (
                (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== Ce.boolean)
              ) {
                const u = this._getOrReturnCtx(t);
                return (
                  Se(u, { code: fe.invalid_type, expected: Ce.boolean, received: u.parsedType }), ze
                );
              }
              return Jt(t.data);
            }
          }
          return (
            (e.create = (n) =>
              new e({ typeName: Ve.ZodBoolean, coerce: n?.coerce || !1, ...et(n) })),
            e
          );
        })(),
        fh = (() => {
          class e extends je {
            _parse(t) {
              if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== Ce.date)) {
                const h = this._getOrReturnCtx(t);
                return (
                  Se(h, { code: fe.invalid_type, expected: Ce.date, received: h.parsedType }), ze
                );
              }
              if (isNaN(t.data.getTime()))
                return Se(this._getOrReturnCtx(t), { code: fe.invalid_date }), ze;
              const u = new Dn();
              let f;
              for (const h of this._def.checks)
                'min' === h.kind
                  ? t.data.getTime() < h.value &&
                    ((f = this._getOrReturnCtx(t, f)),
                    Se(f, {
                      code: fe.too_small,
                      message: h.message,
                      inclusive: !0,
                      exact: !1,
                      minimum: h.value,
                      type: 'date',
                    }),
                    u.dirty())
                  : 'max' === h.kind
                  ? t.data.getTime() > h.value &&
                    ((f = this._getOrReturnCtx(t, f)),
                    Se(f, {
                      code: fe.too_big,
                      message: h.message,
                      inclusive: !0,
                      exact: !1,
                      maximum: h.value,
                      type: 'date',
                    }),
                    u.dirty())
                  : gt.assertNever(h);
              return { status: u.value, value: new Date(t.data.getTime()) };
            }
            _addCheck(t) {
              return new e({ ...this._def, checks: [...this._def.checks, t] });
            }
            min(t, i) {
              return this._addCheck({ kind: 'min', value: t.getTime(), message: Pe.toString(i) });
            }
            max(t, i) {
              return this._addCheck({ kind: 'max', value: t.getTime(), message: Pe.toString(i) });
            }
            get minDate() {
              let t = null;
              for (const i of this._def.checks)
                'min' === i.kind && (null === t || i.value > t) && (t = i.value);
              return null != t ? new Date(t) : null;
            }
            get maxDate() {
              let t = null;
              for (const i of this._def.checks)
                'max' === i.kind && (null === t || i.value < t) && (t = i.value);
              return null != t ? new Date(t) : null;
            }
          }
          return (
            (e.create = (n) =>
              new e({ checks: [], coerce: n?.coerce || !1, typeName: Ve.ZodDate, ...et(n) })),
            e
          );
        })(),
        hh = (() => {
          class e extends je {
            _parse(t) {
              if (this._getType(t) !== Ce.symbol) {
                const u = this._getOrReturnCtx(t);
                return (
                  Se(u, { code: fe.invalid_type, expected: Ce.symbol, received: u.parsedType }), ze
                );
              }
              return Jt(t.data);
            }
          }
          return (e.create = (n) => new e({ typeName: Ve.ZodSymbol, ...et(n) })), e;
        })(),
        tl = (() => {
          class e extends je {
            _parse(t) {
              if (this._getType(t) !== Ce.undefined) {
                const u = this._getOrReturnCtx(t);
                return (
                  Se(u, { code: fe.invalid_type, expected: Ce.undefined, received: u.parsedType }),
                  ze
                );
              }
              return Jt(t.data);
            }
          }
          return (e.create = (n) => new e({ typeName: Ve.ZodUndefined, ...et(n) })), e;
        })(),
        Ms = (() => {
          class e extends je {
            _parse(t) {
              if (this._getType(t) !== Ce.null) {
                const u = this._getOrReturnCtx(t);
                return (
                  Se(u, { code: fe.invalid_type, expected: Ce.null, received: u.parsedType }), ze
                );
              }
              return Jt(t.data);
            }
          }
          return (e.create = (n) => new e({ typeName: Ve.ZodNull, ...et(n) })), e;
        })(),
        nl = (() => {
          class e extends je {
            constructor() {
              super(...arguments), (this._any = !0);
            }
            _parse(t) {
              return Jt(t.data);
            }
          }
          return (e.create = (n) => new e({ typeName: Ve.ZodAny, ...et(n) })), e;
        })(),
        Ts = (() => {
          class e extends je {
            constructor() {
              super(...arguments), (this._unknown = !0);
            }
            _parse(t) {
              return Jt(t.data);
            }
          }
          return (e.create = (n) => new e({ typeName: Ve.ZodUnknown, ...et(n) })), e;
        })(),
        Ho = (() => {
          class e extends je {
            _parse(t) {
              const i = this._getOrReturnCtx(t);
              return (
                Se(i, { code: fe.invalid_type, expected: Ce.never, received: i.parsedType }), ze
              );
            }
          }
          return (e.create = (n) => new e({ typeName: Ve.ZodNever, ...et(n) })), e;
        })(),
        rl = (() => {
          class e extends je {
            _parse(t) {
              if (this._getType(t) !== Ce.undefined) {
                const u = this._getOrReturnCtx(t);
                return (
                  Se(u, { code: fe.invalid_type, expected: Ce.void, received: u.parsedType }), ze
                );
              }
              return Jt(t.data);
            }
          }
          return (e.create = (n) => new e({ typeName: Ve.ZodVoid, ...et(n) })), e;
        })(),
        Go = (() => {
          class e extends je {
            _parse(t) {
              const { ctx: i, status: u } = this._processInputParams(t),
                f = this._def;
              if (i.parsedType !== Ce.array)
                return (
                  Se(i, { code: fe.invalid_type, expected: Ce.array, received: i.parsedType }), ze
                );
              if (null !== f.exactLength) {
                const _ = i.data.length > f.exactLength.value,
                  v = i.data.length < f.exactLength.value;
                (_ || v) &&
                  (Se(i, {
                    code: _ ? fe.too_big : fe.too_small,
                    minimum: v ? f.exactLength.value : void 0,
                    maximum: _ ? f.exactLength.value : void 0,
                    type: 'array',
                    inclusive: !0,
                    exact: !0,
                    message: f.exactLength.message,
                  }),
                  u.dirty());
              }
              if (
                (null !== f.minLength &&
                  i.data.length < f.minLength.value &&
                  (Se(i, {
                    code: fe.too_small,
                    minimum: f.minLength.value,
                    type: 'array',
                    inclusive: !0,
                    exact: !1,
                    message: f.minLength.message,
                  }),
                  u.dirty()),
                null !== f.maxLength &&
                  i.data.length > f.maxLength.value &&
                  (Se(i, {
                    code: fe.too_big,
                    maximum: f.maxLength.value,
                    type: 'array',
                    inclusive: !0,
                    exact: !1,
                    message: f.maxLength.message,
                  }),
                  u.dirty()),
                i.common.async)
              )
                return Promise.all(
                  [...i.data].map((_, v) => f.type._parseAsync(new _o(i, _, i.path, v)))
                ).then((_) => Dn.mergeArray(u, _));
              const h = [...i.data].map((_, v) => f.type._parseSync(new _o(i, _, i.path, v)));
              return Dn.mergeArray(u, h);
            }
            get element() {
              return this._def.type;
            }
            min(t, i) {
              return new e({ ...this._def, minLength: { value: t, message: Pe.toString(i) } });
            }
            max(t, i) {
              return new e({ ...this._def, maxLength: { value: t, message: Pe.toString(i) } });
            }
            length(t, i) {
              return new e({ ...this._def, exactLength: { value: t, message: Pe.toString(i) } });
            }
            nonempty(t) {
              return this.min(1, t);
            }
          }
          return (
            (e.create = (n, t) =>
              new e({
                type: n,
                minLength: null,
                maxLength: null,
                exactLength: null,
                typeName: Ve.ZodArray,
                ...et(t),
              })),
            e
          );
        })();
      function zo(e) {
        if (e instanceof Ii) {
          const n = {};
          for (const t in e.shape) n[t] = xi.create(zo(e.shape[t]));
          return new Ii({ ...e._def, shape: () => n });
        }
        return e instanceof Go
          ? new Go({ ...e._def, type: zo(e.element) })
          : e instanceof xi
          ? xi.create(zo(e.unwrap()))
          : e instanceof hu
          ? hu.create(zo(e.unwrap()))
          : e instanceof Oi
          ? Oi.create(e.items.map((n) => zo(n)))
          : e;
      }
      let Ii = (() => {
          class e extends je {
            constructor() {
              super(...arguments),
                (this._cached = null),
                (this.nonstrict = this.passthrough),
                (this.augment = this.extend);
            }
            _getCached() {
              if (null !== this._cached) return this._cached;
              const t = this._def.shape(),
                i = gt.objectKeys(t);
              return (this._cached = { shape: t, keys: i });
            }
            _parse(t) {
              if (this._getType(t) !== Ce.object) {
                const w = this._getOrReturnCtx(t);
                return (
                  Se(w, { code: fe.invalid_type, expected: Ce.object, received: w.parsedType }), ze
                );
              }
              const { status: u, ctx: f } = this._processInputParams(t),
                { shape: h, keys: _ } = this._getCached(),
                v = [];
              if (!(this._def.catchall instanceof Ho && 'strip' === this._def.unknownKeys))
                for (const w in f.data) _.includes(w) || v.push(w);
              const C = [];
              for (const w of _)
                C.push({
                  key: { status: 'valid', value: w },
                  value: h[w]._parse(new _o(f, f.data[w], f.path, w)),
                  alwaysSet: w in f.data,
                });
              if (this._def.catchall instanceof Ho) {
                const w = this._def.unknownKeys;
                if ('passthrough' === w)
                  for (const F of v)
                    C.push({
                      key: { status: 'valid', value: F },
                      value: { status: 'valid', value: f.data[F] },
                    });
                else if ('strict' === w)
                  v.length > 0 && (Se(f, { code: fe.unrecognized_keys, keys: v }), u.dirty());
                else if ('strip' !== w)
                  throw new Error('Internal ZodObject error: invalid unknownKeys value.');
              } else {
                const w = this._def.catchall;
                for (const F of v)
                  C.push({
                    key: { status: 'valid', value: F },
                    value: w._parse(new _o(f, f.data[F], f.path, F)),
                    alwaysSet: F in f.data,
                  });
              }
              return f.common.async
                ? Promise.resolve()
                    .then(
                      qt(function* () {
                        const w = [];
                        for (const F of C) {
                          const Q = yield F.key;
                          w.push({ key: Q, value: yield F.value, alwaysSet: F.alwaysSet });
                        }
                        return w;
                      })
                    )
                    .then((w) => Dn.mergeObjectSync(u, w))
                : Dn.mergeObjectSync(u, C);
            }
            get shape() {
              return this._def.shape();
            }
            strict(t) {
              return new e({
                ...this._def,
                unknownKeys: 'strict',
                ...(void 0 !== t
                  ? {
                      errorMap: (i, u) => {
                        var f, h, _, v;
                        const C =
                          null !==
                            (_ =
                              null === (h = (f = this._def).errorMap) || void 0 === h
                                ? void 0
                                : h.call(f, i, u).message) && void 0 !== _
                            ? _
                            : u.defaultError;
                        return 'unrecognized_keys' === i.code
                          ? {
                              message:
                                null !== (v = Pe.errToObj(t).message) && void 0 !== v ? v : C,
                            }
                          : { message: C };
                      },
                    }
                  : {}),
              });
            }
            strip() {
              return new e({ ...this._def, unknownKeys: 'strip' });
            }
            passthrough() {
              return new e({ ...this._def, unknownKeys: 'passthrough' });
            }
            extend(t) {
              return new e({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
            }
            merge(t) {
              return new e({
                unknownKeys: t._def.unknownKeys,
                catchall: t._def.catchall,
                shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
                typeName: Ve.ZodObject,
              });
            }
            setKey(t, i) {
              return this.augment({ [t]: i });
            }
            catchall(t) {
              return new e({ ...this._def, catchall: t });
            }
            pick(t) {
              const i = {};
              return (
                gt.objectKeys(t).forEach((u) => {
                  t[u] && this.shape[u] && (i[u] = this.shape[u]);
                }),
                new e({ ...this._def, shape: () => i })
              );
            }
            omit(t) {
              const i = {};
              return (
                gt.objectKeys(this.shape).forEach((u) => {
                  t[u] || (i[u] = this.shape[u]);
                }),
                new e({ ...this._def, shape: () => i })
              );
            }
            deepPartial() {
              return zo(this);
            }
            partial(t) {
              const i = {};
              return (
                gt.objectKeys(this.shape).forEach((u) => {
                  const f = this.shape[u];
                  i[u] = t && !t[u] ? f : f.optional();
                }),
                new e({ ...this._def, shape: () => i })
              );
            }
            required(t) {
              const i = {};
              return (
                gt.objectKeys(this.shape).forEach((u) => {
                  if (t && !t[u]) i[u] = this.shape[u];
                  else {
                    let h = this.shape[u];
                    for (; h instanceof xi; ) h = h._def.innerType;
                    i[u] = h;
                  }
                }),
                new e({ ...this._def, shape: () => i })
              );
            }
            keyof() {
              return g_(gt.objectKeys(this.shape));
            }
          }
          return (
            (e.create = (n, t) =>
              new e({
                shape: () => n,
                unknownKeys: 'strip',
                catchall: Ho.create(),
                typeName: Ve.ZodObject,
                ...et(t),
              })),
            (e.strictCreate = (n, t) =>
              new e({
                shape: () => n,
                unknownKeys: 'strict',
                catchall: Ho.create(),
                typeName: Ve.ZodObject,
                ...et(t),
              })),
            (e.lazycreate = (n, t) =>
              new e({
                shape: n,
                unknownKeys: 'strip',
                catchall: Ho.create(),
                typeName: Ve.ZodObject,
                ...et(t),
              })),
            e
          );
        })(),
        ol = (() => {
          class e extends je {
            _parse(t) {
              const { ctx: i } = this._processInputParams(t),
                u = this._def.options;
              if (i.common.async)
                return Promise.all(
                  u.map(
                    (function () {
                      var h = qt(function* (_) {
                        const v = { ...i, common: { ...i.common, issues: [] }, parent: null };
                        return {
                          result: yield _._parseAsync({ data: i.data, path: i.path, parent: v }),
                          ctx: v,
                        };
                      });
                      return function (_) {
                        return h.apply(this, arguments);
                      };
                    })()
                  )
                ).then(function f(h) {
                  for (const v of h) if ('valid' === v.result.status) return v.result;
                  for (const v of h)
                    if ('dirty' === v.result.status)
                      return i.common.issues.push(...v.ctx.common.issues), v.result;
                  const _ = h.map((v) => new mo(v.ctx.common.issues));
                  return Se(i, { code: fe.invalid_union, unionErrors: _ }), ze;
                });
              {
                let h;
                const _ = [];
                for (const C of u) {
                  const w = { ...i, common: { ...i.common, issues: [] }, parent: null },
                    F = C._parseSync({ data: i.data, path: i.path, parent: w });
                  if ('valid' === F.status) return F;
                  'dirty' === F.status && !h && (h = { result: F, ctx: w }),
                    w.common.issues.length && _.push(w.common.issues);
                }
                if (h) return i.common.issues.push(...h.ctx.common.issues), h.result;
                const v = _.map((C) => new mo(C));
                return Se(i, { code: fe.invalid_union, unionErrors: v }), ze;
              }
            }
            get options() {
              return this._def.options;
            }
          }
          return (e.create = (n, t) => new e({ options: n, typeName: Ve.ZodUnion, ...et(t) })), e;
        })();
      const lu = (e) =>
        e instanceof ph
          ? lu(e.schema)
          : e instanceof Pi
          ? lu(e.innerType())
          : e instanceof gh
          ? [e.value]
          : e instanceof al
          ? e.options
          : e instanceof mh
          ? Object.keys(e.enum)
          : e instanceof _h
          ? lu(e._def.innerType)
          : e instanceof tl
          ? [void 0]
          : e instanceof Ms
          ? [null]
          : null;
      class du extends je {
        _parse(n) {
          const { ctx: t } = this._processInputParams(n);
          if (t.parsedType !== Ce.object)
            return (
              Se(t, { code: fe.invalid_type, expected: Ce.object, received: t.parsedType }), ze
            );
          const i = this.discriminator,
            f = this.optionsMap.get(t.data[i]);
          return f
            ? t.common.async
              ? f._parseAsync({ data: t.data, path: t.path, parent: t })
              : f._parseSync({ data: t.data, path: t.path, parent: t })
            : (Se(t, {
                code: fe.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [i],
              }),
              ze);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(n, t, i) {
          const u = new Map();
          for (const f of t) {
            const h = lu(f.shape[n]);
            if (!h)
              throw new Error(
                `A discriminator value for key \`${n}\` could not be extracted from all schema options`
              );
            for (const _ of h) {
              if (u.has(_))
                throw new Error(
                  `Discriminator property ${String(n)} has duplicate value ${String(_)}`
                );
              u.set(_, f);
            }
          }
          return new du({
            typeName: Ve.ZodDiscriminatedUnion,
            discriminator: n,
            options: t,
            optionsMap: u,
            ...et(i),
          });
        }
      }
      function il(e, n) {
        const t = Mi(e),
          i = Mi(n);
        if (e === n) return { valid: !0, data: e };
        if (t === Ce.object && i === Ce.object) {
          const u = gt.objectKeys(n),
            f = gt.objectKeys(e).filter((_) => -1 !== u.indexOf(_)),
            h = { ...e, ...n };
          for (const _ of f) {
            const v = il(e[_], n[_]);
            if (!v.valid) return { valid: !1 };
            h[_] = v.data;
          }
          return { valid: !0, data: h };
        }
        if (t === Ce.array && i === Ce.array) {
          if (e.length !== n.length) return { valid: !1 };
          const u = [];
          for (let f = 0; f < e.length; f++) {
            const v = il(e[f], n[f]);
            if (!v.valid) return { valid: !1 };
            u.push(v.data);
          }
          return { valid: !0, data: u };
        }
        return t === Ce.date && i === Ce.date && +e == +n ? { valid: !0, data: e } : { valid: !1 };
      }
      let sl = (() => {
          class e extends je {
            _parse(t) {
              const { status: i, ctx: u } = this._processInputParams(t),
                f = (h, _) => {
                  if (ah(h) || ah(_)) return ze;
                  const v = il(h.value, _.value);
                  return v.valid
                    ? ((uh(h) || uh(_)) && i.dirty(), { status: i.value, value: v.data })
                    : (Se(u, { code: fe.invalid_intersection_types }), ze);
                };
              return u.common.async
                ? Promise.all([
                    this._def.left._parseAsync({ data: u.data, path: u.path, parent: u }),
                    this._def.right._parseAsync({ data: u.data, path: u.path, parent: u }),
                  ]).then(([h, _]) => f(h, _))
                : f(
                    this._def.left._parseSync({ data: u.data, path: u.path, parent: u }),
                    this._def.right._parseSync({ data: u.data, path: u.path, parent: u })
                  );
            }
          }
          return (
            (e.create = (n, t, i) =>
              new e({ left: n, right: t, typeName: Ve.ZodIntersection, ...et(i) })),
            e
          );
        })(),
        Oi = (() => {
          class e extends je {
            _parse(t) {
              const { status: i, ctx: u } = this._processInputParams(t);
              if (u.parsedType !== Ce.array)
                return (
                  Se(u, { code: fe.invalid_type, expected: Ce.array, received: u.parsedType }), ze
                );
              if (u.data.length < this._def.items.length)
                return (
                  Se(u, {
                    code: fe.too_small,
                    minimum: this._def.items.length,
                    inclusive: !0,
                    exact: !1,
                    type: 'array',
                  }),
                  ze
                );
              !this._def.rest &&
                u.data.length > this._def.items.length &&
                (Se(u, {
                  code: fe.too_big,
                  maximum: this._def.items.length,
                  inclusive: !0,
                  exact: !1,
                  type: 'array',
                }),
                i.dirty());
              const h = [...u.data]
                .map((_, v) => {
                  const C = this._def.items[v] || this._def.rest;
                  return C ? C._parse(new _o(u, _, u.path, v)) : null;
                })
                .filter((_) => !!_);
              return u.common.async
                ? Promise.all(h).then((_) => Dn.mergeArray(i, _))
                : Dn.mergeArray(i, h);
            }
            get items() {
              return this._def.items;
            }
            rest(t) {
              return new e({ ...this._def, rest: t });
            }
          }
          return (
            (e.create = (n, t) => {
              if (!Array.isArray(n))
                throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
              return new e({ items: n, typeName: Ve.ZodTuple, rest: null, ...et(t) });
            }),
            e
          );
        })();
      class fu extends je {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(n) {
          const { status: t, ctx: i } = this._processInputParams(n);
          if (i.parsedType !== Ce.object)
            return (
              Se(i, { code: fe.invalid_type, expected: Ce.object, received: i.parsedType }), ze
            );
          const u = [],
            f = this._def.keyType,
            h = this._def.valueType;
          for (const _ in i.data)
            u.push({
              key: f._parse(new _o(i, _, i.path, _)),
              value: h._parse(new _o(i, i.data[_], i.path, _)),
            });
          return i.common.async ? Dn.mergeObjectAsync(t, u) : Dn.mergeObjectSync(t, u);
        }
        get element() {
          return this._def.valueType;
        }
        static create(n, t, i) {
          return new fu(
            t instanceof je
              ? { keyType: n, valueType: t, typeName: Ve.ZodRecord, ...et(i) }
              : { keyType: Xc.create(), valueType: n, typeName: Ve.ZodRecord, ...et(t) }
          );
        }
      }
      let h_ = (() => {
          class e extends je {
            _parse(t) {
              const { status: i, ctx: u } = this._processInputParams(t);
              if (u.parsedType !== Ce.map)
                return (
                  Se(u, { code: fe.invalid_type, expected: Ce.map, received: u.parsedType }), ze
                );
              const f = this._def.keyType,
                h = this._def.valueType,
                _ = [...u.data.entries()].map(([v, C], w) => ({
                  key: f._parse(new _o(u, v, u.path, [w, 'key'])),
                  value: h._parse(new _o(u, C, u.path, [w, 'value'])),
                }));
              if (u.common.async) {
                const v = new Map();
                return Promise.resolve().then(
                  qt(function* () {
                    for (const C of _) {
                      const w = yield C.key,
                        F = yield C.value;
                      if ('aborted' === w.status || 'aborted' === F.status) return ze;
                      ('dirty' === w.status || 'dirty' === F.status) && i.dirty(),
                        v.set(w.value, F.value);
                    }
                    return { status: i.value, value: v };
                  })
                );
              }
              {
                const v = new Map();
                for (const C of _) {
                  const w = C.key,
                    F = C.value;
                  if ('aborted' === w.status || 'aborted' === F.status) return ze;
                  ('dirty' === w.status || 'dirty' === F.status) && i.dirty(),
                    v.set(w.value, F.value);
                }
                return { status: i.value, value: v };
              }
            }
          }
          return (
            (e.create = (n, t, i) =>
              new e({ valueType: t, keyType: n, typeName: Ve.ZodMap, ...et(i) })),
            e
          );
        })(),
        p_ = (() => {
          class e extends je {
            _parse(t) {
              const { status: i, ctx: u } = this._processInputParams(t);
              if (u.parsedType !== Ce.set)
                return (
                  Se(u, { code: fe.invalid_type, expected: Ce.set, received: u.parsedType }), ze
                );
              const f = this._def;
              null !== f.minSize &&
                u.data.size < f.minSize.value &&
                (Se(u, {
                  code: fe.too_small,
                  minimum: f.minSize.value,
                  type: 'set',
                  inclusive: !0,
                  exact: !1,
                  message: f.minSize.message,
                }),
                i.dirty()),
                null !== f.maxSize &&
                  u.data.size > f.maxSize.value &&
                  (Se(u, {
                    code: fe.too_big,
                    maximum: f.maxSize.value,
                    type: 'set',
                    inclusive: !0,
                    exact: !1,
                    message: f.maxSize.message,
                  }),
                  i.dirty());
              const h = this._def.valueType;
              function _(C) {
                const w = new Set();
                for (const F of C) {
                  if ('aborted' === F.status) return ze;
                  'dirty' === F.status && i.dirty(), w.add(F.value);
                }
                return { status: i.value, value: w };
              }
              const v = [...u.data.values()].map((C, w) => h._parse(new _o(u, C, u.path, w)));
              return u.common.async ? Promise.all(v).then((C) => _(C)) : _(v);
            }
            min(t, i) {
              return new e({ ...this._def, minSize: { value: t, message: Pe.toString(i) } });
            }
            max(t, i) {
              return new e({ ...this._def, maxSize: { value: t, message: Pe.toString(i) } });
            }
            size(t, i) {
              return this.min(t, i).max(t, i);
            }
            nonempty(t) {
              return this.min(1, t);
            }
          }
          return (
            (e.create = (n, t) =>
              new e({ valueType: n, minSize: null, maxSize: null, typeName: Ve.ZodSet, ...et(t) })),
            e
          );
        })();
      class Is extends je {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(n) {
          var t = this;
          const { ctx: i } = this._processInputParams(n);
          if (i.parsedType !== Ce.function)
            return (
              Se(i, { code: fe.invalid_type, expected: Ce.function, received: i.parsedType }), ze
            );
          function u(v, C) {
            return Jc({
              data: v,
              path: i.path,
              errorMaps: [i.common.contextualErrorMap, i.schemaErrorMap, uu(), As].filter(
                (w) => !!w
              ),
              issueData: { code: fe.invalid_arguments, argumentsError: C },
            });
          }
          function f(v, C) {
            return Jc({
              data: v,
              path: i.path,
              errorMaps: [i.common.contextualErrorMap, i.schemaErrorMap, uu(), As].filter(
                (w) => !!w
              ),
              issueData: { code: fe.invalid_return_type, returnTypeError: C },
            });
          }
          const h = { errorMap: i.common.contextualErrorMap },
            _ = i.data;
          return Jt(
            this._def.returns instanceof ul
              ? qt(function* (...v) {
                  const C = new mo([]),
                    w = yield t._def.args.parseAsync(v, h).catch((z) => {
                      throw (C.addIssue(u(v, z)), C);
                    }),
                    F = yield _(...w);
                  return yield t._def.returns._def.type.parseAsync(F, h).catch((z) => {
                    throw (C.addIssue(f(F, z)), C);
                  });
                })
              : (...v) => {
                  const C = this._def.args.safeParse(v, h);
                  if (!C.success) throw new mo([u(v, C.error)]);
                  const w = _(...C.data),
                    F = this._def.returns.safeParse(w, h);
                  if (!F.success) throw new mo([f(w, F.error)]);
                  return F.data;
                }
          );
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...n) {
          return new Is({ ...this._def, args: Oi.create(n).rest(Ts.create()) });
        }
        returns(n) {
          return new Is({ ...this._def, returns: n });
        }
        implement(n) {
          return this.parse(n);
        }
        strictImplement(n) {
          return this.parse(n);
        }
        static create(n, t, i) {
          return new Is({
            args: n || Oi.create([]).rest(Ts.create()),
            returns: t || Ts.create(),
            typeName: Ve.ZodFunction,
            ...et(i),
          });
        }
      }
      let ph = (() => {
          class e extends je {
            get schema() {
              return this._def.getter();
            }
            _parse(t) {
              const { ctx: i } = this._processInputParams(t);
              return this._def.getter()._parse({ data: i.data, path: i.path, parent: i });
            }
          }
          return (e.create = (n, t) => new e({ getter: n, typeName: Ve.ZodLazy, ...et(t) })), e;
        })(),
        gh = (() => {
          class e extends je {
            _parse(t) {
              if (t.data !== this._def.value) {
                const i = this._getOrReturnCtx(t);
                return (
                  Se(i, { received: i.data, code: fe.invalid_literal, expected: this._def.value }),
                  ze
                );
              }
              return { status: 'valid', value: t.data };
            }
            get value() {
              return this._def.value;
            }
          }
          return (e.create = (n, t) => new e({ value: n, typeName: Ve.ZodLiteral, ...et(t) })), e;
        })();
      function g_(e, n) {
        return new al({ values: e, typeName: Ve.ZodEnum, ...et(n) });
      }
      let al = (() => {
          class e extends je {
            _parse(t) {
              if ('string' != typeof t.data) {
                const i = this._getOrReturnCtx(t);
                return (
                  Se(i, {
                    expected: gt.joinValues(this._def.values),
                    received: i.parsedType,
                    code: fe.invalid_type,
                  }),
                  ze
                );
              }
              if (-1 === this._def.values.indexOf(t.data)) {
                const i = this._getOrReturnCtx(t);
                return (
                  Se(i, {
                    received: i.data,
                    code: fe.invalid_enum_value,
                    options: this._def.values,
                  }),
                  ze
                );
              }
              return Jt(t.data);
            }
            get options() {
              return this._def.values;
            }
            get enum() {
              const t = {};
              for (const i of this._def.values) t[i] = i;
              return t;
            }
            get Values() {
              const t = {};
              for (const i of this._def.values) t[i] = i;
              return t;
            }
            get Enum() {
              const t = {};
              for (const i of this._def.values) t[i] = i;
              return t;
            }
            extract(t) {
              return e.create(t);
            }
            exclude(t) {
              return e.create(this.options.filter((i) => !t.includes(i)));
            }
          }
          return (e.create = g_), e;
        })(),
        mh = (() => {
          class e extends je {
            _parse(t) {
              const i = gt.getValidEnumValues(this._def.values),
                u = this._getOrReturnCtx(t);
              if (u.parsedType !== Ce.string && u.parsedType !== Ce.number) {
                const f = gt.objectValues(i);
                return (
                  Se(u, {
                    expected: gt.joinValues(f),
                    received: u.parsedType,
                    code: fe.invalid_type,
                  }),
                  ze
                );
              }
              if (-1 === i.indexOf(t.data)) {
                const f = gt.objectValues(i);
                return Se(u, { received: u.data, code: fe.invalid_enum_value, options: f }), ze;
              }
              return Jt(t.data);
            }
            get enum() {
              return this._def.values;
            }
          }
          return (
            (e.create = (n, t) => new e({ values: n, typeName: Ve.ZodNativeEnum, ...et(t) })), e
          );
        })(),
        ul = (() => {
          class e extends je {
            unwrap() {
              return this._def.type;
            }
            _parse(t) {
              const { ctx: i } = this._processInputParams(t);
              if (i.parsedType !== Ce.promise && !1 === i.common.async)
                return (
                  Se(i, { code: fe.invalid_type, expected: Ce.promise, received: i.parsedType }), ze
                );
              const u = i.parsedType === Ce.promise ? i.data : Promise.resolve(i.data);
              return Jt(
                u.then((f) =>
                  this._def.type.parseAsync(f, {
                    path: i.path,
                    errorMap: i.common.contextualErrorMap,
                  })
                )
              );
            }
          }
          return (e.create = (n, t) => new e({ type: n, typeName: Ve.ZodPromise, ...et(t) })), e;
        })(),
        Pi = (() => {
          class e extends je {
            innerType() {
              return this._def.schema;
            }
            sourceType() {
              return this._def.schema._def.typeName === Ve.ZodEffects
                ? this._def.schema.sourceType()
                : this._def.schema;
            }
            _parse(t) {
              const { status: i, ctx: u } = this._processInputParams(t),
                f = this._def.effect || null;
              if ('preprocess' === f.type) {
                const _ = f.transform(u.data);
                return u.common.async
                  ? Promise.resolve(_).then((v) =>
                      this._def.schema._parseAsync({ data: v, path: u.path, parent: u })
                    )
                  : this._def.schema._parseSync({ data: _, path: u.path, parent: u });
              }
              const h = {
                addIssue: (_) => {
                  Se(u, _), _.fatal ? i.abort() : i.dirty();
                },
                get path() {
                  return u.path;
                },
              };
              if (((h.addIssue = h.addIssue.bind(h)), 'refinement' === f.type)) {
                const _ = (v) => {
                  const C = f.refinement(v, h);
                  if (u.common.async) return Promise.resolve(C);
                  if (C instanceof Promise)
                    throw new Error(
                      'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
                    );
                  return v;
                };
                if (!1 === u.common.async) {
                  const v = this._def.schema._parseSync({ data: u.data, path: u.path, parent: u });
                  return 'aborted' === v.status
                    ? ze
                    : ('dirty' === v.status && i.dirty(),
                      _(v.value),
                      { status: i.value, value: v.value });
                }
                return this._def.schema
                  ._parseAsync({ data: u.data, path: u.path, parent: u })
                  .then((v) =>
                    'aborted' === v.status
                      ? ze
                      : ('dirty' === v.status && i.dirty(),
                        _(v.value).then(() => ({ status: i.value, value: v.value })))
                  );
              }
              if ('transform' === f.type) {
                if (!1 === u.common.async) {
                  const _ = this._def.schema._parseSync({ data: u.data, path: u.path, parent: u });
                  if (!cu(_)) return _;
                  const v = f.transform(_.value, h);
                  if (v instanceof Promise)
                    throw new Error(
                      'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
                    );
                  return { status: i.value, value: v };
                }
                return this._def.schema
                  ._parseAsync({ data: u.data, path: u.path, parent: u })
                  .then((_) =>
                    cu(_)
                      ? Promise.resolve(f.transform(_.value, h)).then((v) => ({
                          status: i.value,
                          value: v,
                        }))
                      : _
                  );
              }
              gt.assertNever(f);
            }
          }
          return (
            (e.create = (n, t, i) =>
              new e({ schema: n, typeName: Ve.ZodEffects, effect: t, ...et(i) })),
            (e.createWithPreprocess = (n, t, i) =>
              new e({
                schema: t,
                effect: { type: 'preprocess', transform: n },
                typeName: Ve.ZodEffects,
                ...et(i),
              })),
            e
          );
        })(),
        xi = (() => {
          class e extends je {
            _parse(t) {
              return this._getType(t) === Ce.undefined ? Jt(void 0) : this._def.innerType._parse(t);
            }
            unwrap() {
              return this._def.innerType;
            }
          }
          return (
            (e.create = (n, t) => new e({ innerType: n, typeName: Ve.ZodOptional, ...et(t) })), e
          );
        })(),
        hu = (() => {
          class e extends je {
            _parse(t) {
              return this._getType(t) === Ce.null ? Jt(null) : this._def.innerType._parse(t);
            }
            unwrap() {
              return this._def.innerType;
            }
          }
          return (
            (e.create = (n, t) => new e({ innerType: n, typeName: Ve.ZodNullable, ...et(t) })), e
          );
        })(),
        _h = (() => {
          class e extends je {
            _parse(t) {
              const { ctx: i } = this._processInputParams(t);
              let u = i.data;
              return (
                i.parsedType === Ce.undefined && (u = this._def.defaultValue()),
                this._def.innerType._parse({ data: u, path: i.path, parent: i })
              );
            }
            removeDefault() {
              return this._def.innerType;
            }
          }
          return (
            (e.create = (n, t) =>
              new e({
                innerType: n,
                typeName: Ve.ZodDefault,
                defaultValue: 'function' == typeof t.default ? t.default : () => t.default,
                ...et(t),
              })),
            e
          );
        })(),
        m_ = (() => {
          class e extends je {
            _parse(t) {
              const { ctx: i } = this._processInputParams(t),
                u = { ...i, common: { ...i.common, issues: [] } },
                f = this._def.innerType._parse({ data: u.data, path: u.path, parent: { ...u } });
              return Qc(f)
                ? f.then((h) => ({
                    status: 'valid',
                    value:
                      'valid' === h.status
                        ? h.value
                        : this._def.catchValue({
                            get error() {
                              return new mo(u.common.issues);
                            },
                            input: u.data,
                          }),
                  }))
                : {
                    status: 'valid',
                    value:
                      'valid' === f.status
                        ? f.value
                        : this._def.catchValue({
                            get error() {
                              return new mo(u.common.issues);
                            },
                            input: u.data,
                          }),
                  };
            }
            removeCatch() {
              return this._def.innerType;
            }
          }
          return (
            (e.create = (n, t) =>
              new e({
                innerType: n,
                typeName: Ve.ZodCatch,
                catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
                ...et(t),
              })),
            e
          );
        })(),
        __ = (() => {
          class e extends je {
            _parse(t) {
              if (this._getType(t) !== Ce.nan) {
                const u = this._getOrReturnCtx(t);
                return (
                  Se(u, { code: fe.invalid_type, expected: Ce.nan, received: u.parsedType }), ze
                );
              }
              return { status: 'valid', value: t.data };
            }
          }
          return (e.create = (n) => new e({ typeName: Ve.ZodNaN, ...et(n) })), e;
        })();
      const F0 = Symbol('zod_brand');
      class y_ extends je {
        _parse(n) {
          const { ctx: t } = this._processInputParams(n);
          return this._def.type._parse({ data: t.data, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class Os extends je {
        _parse(n) {
          var t = this;
          const { status: i, ctx: u } = this._processInputParams(n);
          if (u.common.async)
            return (function () {
              var h = qt(function* () {
                const _ = yield t._def.in._parseAsync({ data: u.data, path: u.path, parent: u });
                return 'aborted' === _.status
                  ? ze
                  : 'dirty' === _.status
                  ? (i.dirty(), sh(_.value))
                  : t._def.out._parseAsync({ data: _.value, path: u.path, parent: u });
              });
              return function () {
                return h.apply(this, arguments);
              };
            })()();
          {
            const f = this._def.in._parseSync({ data: u.data, path: u.path, parent: u });
            return 'aborted' === f.status
              ? ze
              : 'dirty' === f.status
              ? (i.dirty(), { status: 'dirty', value: f.value })
              : this._def.out._parseSync({ data: f.value, path: u.path, parent: u });
          }
        }
        static create(n, t) {
          return new Os({ in: n, out: t, typeName: Ve.ZodPipeline });
        }
      }
      const yh = (e, n = {}, t) =>
          e
            ? nl.create().superRefine((i, u) => {
                var f, h;
                if (!e(i)) {
                  const _ =
                      'function' == typeof n ? n(i) : 'string' == typeof n ? { message: n } : n,
                    v =
                      null === (h = null !== (f = _.fatal) && void 0 !== f ? f : t) ||
                      void 0 === h ||
                      h;
                  u.addIssue({
                    code: 'custom',
                    ...('string' == typeof _ ? { message: _ } : _),
                    fatal: v,
                  });
                }
              })
            : nl.create(),
        v_ = { object: Ii.lazycreate };
      var Ve = (() => (
        (function (e) {
          (e.ZodString = 'ZodString'),
            (e.ZodNumber = 'ZodNumber'),
            (e.ZodNaN = 'ZodNaN'),
            (e.ZodBigInt = 'ZodBigInt'),
            (e.ZodBoolean = 'ZodBoolean'),
            (e.ZodDate = 'ZodDate'),
            (e.ZodSymbol = 'ZodSymbol'),
            (e.ZodUndefined = 'ZodUndefined'),
            (e.ZodNull = 'ZodNull'),
            (e.ZodAny = 'ZodAny'),
            (e.ZodUnknown = 'ZodUnknown'),
            (e.ZodNever = 'ZodNever'),
            (e.ZodVoid = 'ZodVoid'),
            (e.ZodArray = 'ZodArray'),
            (e.ZodObject = 'ZodObject'),
            (e.ZodUnion = 'ZodUnion'),
            (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
            (e.ZodIntersection = 'ZodIntersection'),
            (e.ZodTuple = 'ZodTuple'),
            (e.ZodRecord = 'ZodRecord'),
            (e.ZodMap = 'ZodMap'),
            (e.ZodSet = 'ZodSet'),
            (e.ZodFunction = 'ZodFunction'),
            (e.ZodLazy = 'ZodLazy'),
            (e.ZodLiteral = 'ZodLiteral'),
            (e.ZodEnum = 'ZodEnum'),
            (e.ZodEffects = 'ZodEffects'),
            (e.ZodNativeEnum = 'ZodNativeEnum'),
            (e.ZodOptional = 'ZodOptional'),
            (e.ZodNullable = 'ZodNullable'),
            (e.ZodDefault = 'ZodDefault'),
            (e.ZodCatch = 'ZodCatch'),
            (e.ZodPromise = 'ZodPromise'),
            (e.ZodBranded = 'ZodBranded'),
            (e.ZodPipeline = 'ZodPipeline');
        })(Ve || (Ve = {})),
        Ve
      ))();
      const vh = Xc.create,
        Eh = Ti.create,
        Dh = el.create,
        wh = Pi.create;
      var ot = Object.freeze({
          __proto__: null,
          defaultErrorMap: As,
          setErrorMap: function en(e) {
            l_ = e;
          },
          getErrorMap: uu,
          makeIssue: Jc,
          EMPTY_PATH: [],
          addIssueToContext: Se,
          ParseStatus: Dn,
          INVALID: ze,
          DIRTY: sh,
          OK: Jt,
          isAborted: ah,
          isDirty: uh,
          isValid: cu,
          isAsync: Qc,
          get util() {
            return gt;
          },
          get objectUtil() {
            return qc;
          },
          ZodParsedType: Ce,
          getParsedType: Mi,
          ZodType: je,
          ZodString: Xc,
          ZodNumber: Ti,
          ZodBigInt: dh,
          ZodBoolean: el,
          ZodDate: fh,
          ZodSymbol: hh,
          ZodUndefined: tl,
          ZodNull: Ms,
          ZodAny: nl,
          ZodUnknown: Ts,
          ZodNever: Ho,
          ZodVoid: rl,
          ZodArray: Go,
          ZodObject: Ii,
          ZodUnion: ol,
          ZodDiscriminatedUnion: du,
          ZodIntersection: sl,
          ZodTuple: Oi,
          ZodRecord: fu,
          ZodMap: h_,
          ZodSet: p_,
          ZodFunction: Is,
          ZodLazy: ph,
          ZodLiteral: gh,
          ZodEnum: al,
          ZodNativeEnum: mh,
          ZodPromise: ul,
          ZodEffects: Pi,
          ZodTransformer: Pi,
          ZodOptional: xi,
          ZodNullable: hu,
          ZodDefault: _h,
          ZodCatch: m_,
          ZodNaN: __,
          BRAND: F0,
          ZodBranded: y_,
          ZodPipeline: Os,
          custom: yh,
          Schema: je,
          ZodSchema: je,
          late: v_,
          get ZodFirstPartyTypeKind() {
            return Ve;
          },
          coerce: {
            string: (e) => Xc.create({ ...e, coerce: !0 }),
            number: (e) => Ti.create({ ...e, coerce: !0 }),
            boolean: (e) => el.create({ ...e, coerce: !0 }),
            bigint: (e) => dh.create({ ...e, coerce: !0 }),
            date: (e) => fh.create({ ...e, coerce: !0 }),
          },
          any: nl.create,
          array: Go.create,
          bigint: dh.create,
          boolean: Dh,
          date: fh.create,
          discriminatedUnion: du.create,
          effect: wh,
          enum: al.create,
          function: Is.create,
          instanceof: (e, n = { message: `Input not instance of ${e.name}` }) =>
            yh((t) => t instanceof e, n),
          intersection: sl.create,
          lazy: ph.create,
          literal: gh.create,
          map: h_.create,
          nan: __.create,
          nativeEnum: mh.create,
          never: Ho.create,
          null: Ms.create,
          nullable: hu.create,
          number: Eh,
          object: Ii.create,
          oboolean: () => Dh().optional(),
          onumber: () => Eh().optional(),
          optional: xi.create,
          ostring: () => vh().optional(),
          pipeline: Os.create,
          preprocess: Pi.createWithPreprocess,
          promise: ul.create,
          record: fu.create,
          set: p_.create,
          strictObject: Ii.strictCreate,
          string: vh,
          symbol: hh.create,
          transformer: wh,
          tuple: Oi.create,
          undefined: tl.create,
          union: ol.create,
          unknown: Ts.create,
          void: rl.create,
          NEVER: ze,
          ZodIssueCode: fe,
          quotelessJson: (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:'),
          ZodError: mo,
        }),
        Qr = (() => (
          (function (e) {
            (e[(e.isImageUrl = 0)] = 'isImageUrl'),
              (e[(e.isCorrectPassword = 1)] = 'isCorrectPassword');
          })(Qr || (Qr = {})),
          Qr
        ))();
      const Sh = {
          [Qr.isImageUrl]: (e) => /^https(.*)\.(jpg|jpeg|png)$/i.test(e),
          [Qr.isCorrectPassword]: (e) => /^(?=.*[a-zA-Z])(?=.*\d).+/.test(e),
        },
        pu = ot.object({
          token: ot.string(),
          username: ot.string().min(5, 'Min username length 5 characters'),
          bio: ot.string().nullable(),
          email: ot.string().email('Invalid email'),
          image: ot
            .string()
            .nullable()
            .refine((e) => !e || Sh[Qr.isImageUrl](e), { message: 'Invalid image URL' }),
        }),
        Rs = pu.extend({
          password: ot
            .string()
            .min(8, 'Min password length 8 characters')
            .refine((e) => !!e && Sh[Qr.isCorrectPassword](e), {
              message: 'password must contain letters and numbers',
            }),
        }),
        gu = pu
          .pick({ username: !0, bio: !0, image: !0 })
          .merge(ot.object({ following: ot.boolean() })),
        _r = ot.object({
          author: gu,
          slug: ot.string(),
          title: ot.string(),
          body: ot.string(),
          createdAt: ot.string(),
          updatedAt: ot.string(),
          description: ot.string(),
          tagList: ot.array(ot.string()),
          favorited: ot.boolean(),
          favoritesCount: ot.number(),
        }),
        yo = _r.pick({ title: !0, description: !0, body: !0, tagList: !0 });
      var xn = (() => (
        (function (e) {
          (e.ALL_FEEDS = '/articles'),
            (e.YOUR_FEEDS = '/articles/feed'),
            (e.POPULAR_TAGS = '/tags'),
            (e.PROFILES = '/profiles');
        })(xn || (xn = {})),
        xn
      ))();
      const nr_apiUrl = 'https://api.realworld.io/api';
      let P_ = (() => {
        var e = new WeakMap();
        class n {
          getArticle(i) {
            return _r.parse(i.article);
          }
          addToFavorites(i) {
            const u = qe(this, e).replace('slug', i);
            return this.http.post(u, {}).pipe((0, le.U)(this.getArticle));
          }
          removeFromFavorites(i) {
            const u = qe(this, e).replace('slug', i);
            return this.http.delete(u).pipe((0, le.U)(this.getArticle));
          }
          constructor(i) {
            Lt(this, e, { writable: !0, value: void 0 }),
              (this.http = i),
              Et(this, e, `${nr_apiUrl}${xn.ALL_FEEDS}/slug/favorite`);
          }
        }
        return (
          (n.ɵfac = function (i) {
            return new (i || n)(a.LFG(Ar));
          }),
          (n.ɵprov = a.Yz7({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var Fi = (() => (
        (function (e) {
          (e.ADD_TO_FAVORITE = '[Favorite] Add to favorite'),
            (e.ADD_TO_FAVORITE_SUCCESS = '[Favorite] Add to favorite success'),
            (e.ADD_TO_FAVORITE_FAILURE = '[Favorite] Add to favorite failure');
        })(Fi || (Fi = {})),
        Fi
      ))();
      const bh = (0, T.PH)(Fi.ADD_TO_FAVORITE, (0, T.Ky)()),
        x_ = (0, T.PH)(Fi.ADD_TO_FAVORITE_SUCCESS, (0, T.Ky)()),
        H0 = (0, T.PH)(Fi.ADD_TO_FAVORITE_FAILURE);
      let R_ = (() => {
          class e {
            constructor(t, i, u) {
              (this.actions$ = t),
                (this.store = i),
                (this.favoritesService = u),
                (this.updateFavoriteStatus$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(bh),
                    un(({ slug: f, isFavorited: h }) =>
                      (h
                        ? this.favoritesService.removeFromFavorites(f)
                        : this.favoritesService.addToFavorites(f)
                      ).pipe(
                        (0, le.U)((v) => {
                          const C = _r.parse(v);
                          return x_({ article: C });
                        }),
                        (0, bt.K)(() => (0, we.of)(H0()))
                      )
                    )
                  )
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(T.yh), a.LFG(P_));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        F_ = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ providers: [P_], imports: [Zt, Ir.forFeature([R_])] })),
            e
          );
        })();
      const G0 = ot.object({ profile: gu });
      let z0 = (() => {
        var e = new WeakMap();
        class n {
          getProfile(i) {
            return G0.parse(i).profile;
          }
          addFollow(i) {
            const u = qe(this, e).replace('slug', i);
            return this.http.post(u, {}).pipe((0, le.U)(this.getProfile));
          }
          removeFollow(i) {
            const u = qe(this, e).replace('slug', i);
            return this.http.delete(u).pipe((0, le.U)(this.getProfile));
          }
          constructor(i) {
            Lt(this, e, { writable: !0, value: void 0 }),
              (this.http = i),
              Et(this, e, `${nr_apiUrl}${xn.PROFILES}/slug/follow`);
          }
        }
        return (
          (n.ɵfac = function (i) {
            return new (i || n)(a.LFG(Ar));
          }),
          (n.ɵprov = a.Yz7({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var mu = (() => (
        (function (e) {
          (e.ADD_FOLLOW = '[Follow] Add follow'),
            (e.ADD_FOLLOW_SUCCESS = '[Follow] Add follow success'),
            (e.ADD_FOLLOW_FAILURE = '[Follow] Add follow failure');
        })(mu || (mu = {})),
        mu
      ))();
      const Z0 = (0, T.PH)(mu.ADD_FOLLOW, (0, T.Ky)()),
        xw = (0, T.PH)(mu.ADD_FOLLOW_SUCCESS, (0, T.Ky)()),
        N_ = (0, T.PH)(mu.ADD_FOLLOW_FAILURE);
      let fl = (() => {
          class e {
            constructor(t, i) {
              (this.actions$ = t),
                (this.followButtonService = i),
                (this.follow$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(Z0),
                    un(({ slug: u, isFollow: f }) =>
                      (f
                        ? this.followButtonService.removeFollow(u)
                        : this.followButtonService.addFollow(u)
                      ).pipe(
                        (0, le.U)((_) => {
                          const v = gu.parse(_);
                          return xw({ profile: v });
                        }),
                        (0, bt.K)(() => (0, we.of)(N_()))
                      )
                    )
                  )
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(z0));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        L_ = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ providers: [z0], imports: [Zt, Ir.forFeature([fl])] })),
            e
          );
        })(),
        Fs = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [Zt] })),
            e
          );
        })(),
        Ah = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [Zt, wt] })),
            e
          );
        })();
      var rr = (() => (
        (function (e) {
          (e.GET_ARTICLE = '[Article] Get article'),
            (e.GET_ARTICLE_SUCCESS = '[Article] Get article success'),
            (e.GET_ARTICLE_FAILURE = '[Article] Get article failure'),
            (e.DELETE_ARTICLE = '[Article] Delete article'),
            (e.DELETE_ARTICLE_SUCCESS = '[Article] Delete article success'),
            (e.DELETE_ARTICLE_FAILURE = '[Article] Delete article failure');
        })(rr || (rr = {})),
        rr
      ))();
      const k_ = (0, T.PH)(rr.DELETE_ARTICLE, (0, T.Ky)()),
        U_ = (0, T.PH)(rr.DELETE_ARTICLE_SUCCESS),
        W0 = (0, T.PH)(rr.DELETE_ARTICLE_FAILURE),
        Mh = (0, T.PH)(rr.GET_ARTICLE, (0, T.Ky)()),
        Y0 = (0, T.PH)(rr.GET_ARTICLE_SUCCESS, (0, T.Ky)()),
        V_ = (0, T.PH)(rr.GET_ARTICLE_FAILURE);
      function Qt(e) {
        for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
          t[i - 1] = arguments[i];
        throw Error(
          '[Immer] minified error nr: ' +
            e +
            (t.length
              ? ' ' +
                t
                  .map(function (h) {
                    return "'" + h + "'";
                  })
                  .join(',')
              : '') +
            '. Find the full error at: https://bit.ly/3cXEKWf'
        );
      }
      function vo(e) {
        return !!e && !!e[tt];
      }
      function Xr(e) {
        var n;
        return (
          !!e &&
          ((function (t) {
            if (!t || 'object' != typeof t) return !1;
            var i = Object.getPrototypeOf(t);
            if (null === i) return !0;
            var u = Object.hasOwnProperty.call(i, 'constructor') && i.constructor;
            return u === Object || ('function' == typeof u && Function.toString.call(u) === Vh);
          })(e) ||
            Array.isArray(e) ||
            !!e[Cl] ||
            !(null === (n = e.constructor) || void 0 === n || !n[Cl]) ||
            pl(e) ||
            Ns(e))
        );
      }
      function Eo(e, n, t) {
        void 0 === t && (t = !1),
          0 === Do(e)
            ? (t ? Object.keys : Vs)(e).forEach(function (i) {
                (t && 'symbol' == typeof i) || n(i, e[i], e);
              })
            : e.forEach(function (i, u) {
                return n(u, i, e);
              });
      }
      function Do(e) {
        var n = e[tt];
        return n ? (n.i > 3 ? n.i - 4 : n.i) : Array.isArray(e) ? 1 : pl(e) ? 2 : Ns(e) ? 3 : 0;
      }
      function Zo(e, n) {
        return 2 === Do(e) ? e.has(n) : Object.prototype.hasOwnProperty.call(e, n);
      }
      function j_(e, n, t) {
        var i = Do(e);
        2 === i ? e.set(n, t) : 3 === i ? e.add(t) : (e[n] = t);
      }
      function pl(e) {
        return Z_ && e instanceof Map;
      }
      function Ns(e) {
        return ks && e instanceof Set;
      }
      function tn(e) {
        return e.o || e.t;
      }
      function gl(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var n = jh(e);
        delete n[tt];
        for (var t = Vs(n), i = 0; i < t.length; i++) {
          var u = t[i],
            f = n[u];
          !1 === f.writable && ((f.writable = !0), (f.configurable = !0)),
            (f.get || f.set) &&
              (n[u] = { configurable: !0, writable: !0, enumerable: f.enumerable, value: e[u] });
        }
        return Object.create(Object.getPrototypeOf(e), n);
      }
      function ml(e, n) {
        return (
          void 0 === n && (n = !1),
          Ih(e) ||
            vo(e) ||
            !Xr(e) ||
            (Do(e) > 1 && (e.set = e.add = e.clear = e.delete = K0),
            Object.freeze(e),
            n &&
              Eo(
                e,
                function (t, i) {
                  return ml(i, !0);
                },
                !0
              )),
          e
        );
      }
      function K0() {
        Qt(2);
      }
      function Ih(e) {
        return null == e || 'object' != typeof e || Object.isFrozen(e);
      }
      function eo(e) {
        var n = Eu[e];
        return n || Qt(18, e), n;
      }
      function vu() {
        return Ni;
      }
      function _l(e, n) {
        n && (eo('Patches'), (e.u = []), (e.s = []), (e.v = n));
      }
      function yl(e) {
        Oh(e), e.p.forEach(q0), (e.p = null);
      }
      function Oh(e) {
        e === Ni && (Ni = e.l);
      }
      function B_(e) {
        return (Ni = { p: [], l: Ni, h: e, m: !0, _: 0 });
      }
      function q0(e) {
        var n = e[tt];
        0 === n.i || 1 === n.i ? n.j() : (n.g = !0);
      }
      function Ph(e, n) {
        n._ = n.p.length;
        var t = n.p[0],
          i = void 0 !== e && e !== t;
        return (
          n.h.O || eo('ES5').S(n, e, i),
          i
            ? (t[tt].P && (yl(n), Qt(4)),
              Xr(e) && ((e = vl(n, e)), n.l || El(n, e)),
              n.u && eo('Patches').M(t[tt].t, e, n.u, n.s))
            : (e = vl(n, t, [])),
          yl(n),
          n.u && n.v(n.u, n.s),
          e !== Uh ? e : void 0
        );
      }
      function vl(e, n, t) {
        if (Ih(n)) return n;
        var i = n[tt];
        if (!i)
          return (
            Eo(
              n,
              function (_, v) {
                return $_(e, i, n, _, v, t);
              },
              !0
            ),
            n
          );
        if (i.A !== e) return n;
        if (!i.P) return El(e, i.t, !0), i.t;
        if (!i.I) {
          (i.I = !0), i.A._--;
          var u = 4 === i.i || 5 === i.i ? (i.o = gl(i.k)) : i.o,
            f = u,
            h = !1;
          3 === i.i && ((f = new Set(u)), u.clear(), (h = !0)),
            Eo(f, function (_, v) {
              return $_(e, i, u, _, v, t, h);
            }),
            El(e, u, !1),
            t && e.u && eo('Patches').N(i, t, e.u, e.s);
        }
        return i.o;
      }
      function $_(e, n, t, i, u, f, h) {
        if (vo(u)) {
          var _ = vl(e, u, f && n && 3 !== n.i && !Zo(n.R, i) ? f.concat(i) : void 0);
          if ((j_(t, i, _), !vo(_))) return;
          e.m = !1;
        } else h && t.add(u);
        if (Xr(u) && !Ih(u)) {
          if (!e.h.D && e._ < 1) return;
          vl(e, u), (n && n.A.l) || El(e, u);
        }
      }
      function El(e, n, t) {
        void 0 === t && (t = !1), !e.l && e.h.D && e.m && ml(n, t);
      }
      function Dl(e, n) {
        var t = e[tt];
        return (t ? tn(t) : e)[n];
      }
      function xh(e, n) {
        if (n in e)
          for (var t = Object.getPrototypeOf(e); t; ) {
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (i) return i;
            t = Object.getPrototypeOf(t);
          }
      }
      function Hn(e) {
        e.P || ((e.P = !0), e.l && Hn(e.l));
      }
      function Rh(e) {
        e.o || (e.o = gl(e.t));
      }
      function Ls(e, n, t) {
        var i = pl(n)
          ? eo('MapSet').F(n, t)
          : Ns(n)
          ? eo('MapSet').T(n, t)
          : e.O
          ? (function (u, f) {
              var h = Array.isArray(u),
                _ = {
                  i: h ? 1 : 0,
                  A: f ? f.A : vu(),
                  P: !1,
                  I: !1,
                  R: {},
                  l: f,
                  t: u,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                v = _,
                C = js;
              h && ((v = [_]), (C = Bs));
              var w = Proxy.revocable(v, C),
                F = w.revoke,
                Q = w.proxy;
              return (_.k = Q), (_.j = F), Q;
            })(n, t)
          : eo('ES5').J(n, t);
        return (t ? t.A : vu()).p.push(i), i;
      }
      function H_(e, n) {
        switch (n) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return gl(e);
      }
      var z_,
        Ni,
        Lh = typeof Symbol < 'u' && 'symbol' == typeof Symbol('x'),
        Z_ = typeof Map < 'u',
        ks = typeof Set < 'u',
        kh = typeof Proxy < 'u' && void 0 !== Proxy.revocable && typeof Reflect < 'u',
        Uh = Lh ? Symbol.for('immer-nothing') : (((z_ = {})['immer-nothing'] = !0), z_),
        Cl = Lh ? Symbol.for('immer-draftable') : '__$immer_draftable',
        tt = Lh ? Symbol.for('immer-state') : '__$immer_state',
        Vh = (typeof Symbol < 'u' && Symbol, '' + Object.prototype.constructor),
        Vs =
          typeof Reflect < 'u' && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : Object.getOwnPropertyNames,
        jh =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var n = {};
            return (
              Vs(e).forEach(function (t) {
                n[t] = Object.getOwnPropertyDescriptor(e, t);
              }),
              n
            );
          },
        Eu = {},
        js = {
          get: function (e, n) {
            if (n === tt) return e;
            var u,
              _,
              v,
              t = tn(e);
            if (!Zo(t, n))
              return (
                (u = e),
                (v = xh(t, n))
                  ? 'value' in v
                    ? v.value
                    : null === (_ = v.get) || void 0 === _
                    ? void 0
                    : _.call(u.k)
                  : void 0
              );
            var i = t[n];
            return e.I || !Xr(i) ? i : i === Dl(e.t, n) ? (Rh(e), (e.o[n] = Ls(e.A.h, i, e))) : i;
          },
          has: function (e, n) {
            return n in tn(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(tn(e));
          },
          set: function (e, n, t) {
            var i = xh(tn(e), n);
            if (i?.set) return i.set.call(e.k, t), !0;
            if (!e.P) {
              var u = Dl(tn(e), n),
                f = u?.[tt];
              if (f && f.t === t) return (e.o[n] = t), (e.R[n] = !1), !0;
              if (
                (function Th(e, n) {
                  return e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n;
                })(t, u) &&
                (void 0 !== t || Zo(e.t, n))
              )
                return !0;
              Rh(e), Hn(e);
            }
            return (
              (e.o[n] === t && (void 0 !== t || n in e.o)) ||
                (Number.isNaN(t) && Number.isNaN(e.o[n])) ||
                ((e.o[n] = t), (e.R[n] = !0)),
              !0
            );
          },
          deleteProperty: function (e, n) {
            return (
              void 0 !== Dl(e.t, n) || n in e.t ? ((e.R[n] = !1), Rh(e), Hn(e)) : delete e.R[n],
              e.o && delete e.o[n],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, n) {
            var t = tn(e),
              i = Reflect.getOwnPropertyDescriptor(t, n);
            return (
              i && {
                writable: !0,
                configurable: 1 !== e.i || 'length' !== n,
                enumerable: i.enumerable,
                value: t[n],
              }
            );
          },
          defineProperty: function () {
            Qt(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            Qt(12);
          },
        },
        Bs = {};
      Eo(js, function (e, n) {
        Bs[e] = function () {
          return (arguments[0] = arguments[0][0]), n.apply(this, arguments);
        };
      }),
        (Bs.deleteProperty = function (e, n) {
          return Bs.set.call(this, e, n, void 0);
        }),
        (Bs.set = function (e, n, t) {
          return js.set.call(this, e[0], n, t, e[0]);
        });
      var W_ = (function () {
          function e(t) {
            var i = this;
            (this.O = kh),
              (this.D = !0),
              (this.produce = function (u, f, h) {
                if ('function' == typeof u && 'function' != typeof f) {
                  var _ = f;
                  f = u;
                  var v = i;
                  return function (Te) {
                    var xe = this;
                    void 0 === Te && (Te = _);
                    for (
                      var Be = arguments.length, it = Array(Be > 1 ? Be - 1 : 0), Xt = 1;
                      Xt < Be;
                      Xt++
                    )
                      it[Xt - 1] = arguments[Xt];
                    return v.produce(Te, function (wn) {
                      var Ep;
                      return (Ep = f).call.apply(Ep, [xe, wn].concat(it));
                    });
                  };
                }
                var C;
                if (
                  ('function' != typeof f && Qt(6),
                  void 0 !== h && 'function' != typeof h && Qt(7),
                  Xr(u))
                ) {
                  var w = B_(i),
                    F = Ls(i, u, void 0),
                    Q = !0;
                  try {
                    (C = f(F)), (Q = !1);
                  } finally {
                    Q ? yl(w) : Oh(w);
                  }
                  return typeof Promise < 'u' && C instanceof Promise
                    ? C.then(
                        function (Te) {
                          return _l(w, h), Ph(Te, w);
                        },
                        function (Te) {
                          throw (yl(w), Te);
                        }
                      )
                    : (_l(w, h), Ph(C, w));
                }
                if (!u || 'object' != typeof u) {
                  if (
                    (void 0 === (C = f(u)) && (C = u),
                    C === Uh && (C = void 0),
                    i.D && ml(C, !0),
                    h)
                  ) {
                    var z = [],
                      X = [];
                    eo('Patches').M(u, C, z, X), h(z, X);
                  }
                  return C;
                }
                Qt(21, u);
              }),
              (this.produceWithPatches = function (u, f) {
                if ('function' == typeof u)
                  return function (C) {
                    for (var w = arguments.length, F = Array(w > 1 ? w - 1 : 0), Q = 1; Q < w; Q++)
                      F[Q - 1] = arguments[Q];
                    return i.produceWithPatches(C, function (z) {
                      return u.apply(void 0, [z].concat(F));
                    });
                  };
                var h,
                  _,
                  v = i.produce(u, f, function (C, w) {
                    (h = C), (_ = w);
                  });
                return typeof Promise < 'u' && v instanceof Promise
                  ? v.then(function (C) {
                      return [C, h, _];
                    })
                  : [v, h, _];
              }),
              'boolean' == typeof t?.useProxies && this.setUseProxies(t.useProxies),
              'boolean' == typeof t?.autoFreeze && this.setAutoFreeze(t.autoFreeze);
          }
          var n = e.prototype;
          return (
            (n.createDraft = function (t) {
              Xr(t) || Qt(8),
                vo(t) &&
                  (t = (function J0(e) {
                    return (
                      vo(e) || Qt(22, e),
                      (function n(t) {
                        if (!Xr(t)) return t;
                        var i,
                          u = t[tt],
                          f = Do(t);
                        if (u) {
                          if (!u.P && (u.i < 4 || !eo('ES5').K(u))) return u.t;
                          (u.I = !0), (i = H_(t, f)), (u.I = !1);
                        } else i = H_(t, f);
                        return (
                          Eo(i, function (h, _) {
                            (u &&
                              (function _u(e, n) {
                                return 2 === Do(e) ? e.get(n) : e[n];
                              })(u.t, h) === _) ||
                              j_(i, h, n(_));
                          }),
                          3 === f ? new Set(i) : i
                        );
                      })(e)
                    );
                  })(t));
              var i = B_(this),
                u = Ls(this, t, void 0);
              return (u[tt].C = !0), Oh(i), u;
            }),
            (n.finishDraft = function (t, i) {
              var f = (t && t[tt]).A;
              return _l(f, i), Ph(void 0, f);
            }),
            (n.setAutoFreeze = function (t) {
              this.D = t;
            }),
            (n.setUseProxies = function (t) {
              t && !kh && Qt(20), (this.O = t);
            }),
            (n.applyPatches = function (t, i) {
              var u;
              for (u = i.length - 1; u >= 0; u--) {
                var f = i[u];
                if (0 === f.path.length && 'replace' === f.op) {
                  t = f.value;
                  break;
                }
              }
              u > -1 && (i = i.slice(u + 1));
              var h = eo('Patches').$;
              return vo(t)
                ? h(t, i)
                : this.produce(t, function (_) {
                    return h(_, i);
                  });
            }),
            e
          );
        })(),
        Gn = new W_(),
        eD = Gn.produce;
      Gn.produceWithPatches.bind(Gn),
        Gn.setAutoFreeze.bind(Gn),
        Gn.setUseProxies.bind(Gn),
        Gn.applyPatches.bind(Gn),
        Gn.createDraft.bind(Gn),
        Gn.finishDraft.bind(Gn);
      const dt = eD;
      var ln = (() => (
        (function (e) {
          (e.AUTH = 'auth'),
            (e.FEED = 'feed'),
            (e.POPULAR_TAGS = 'popular_tags'),
            (e.ARTICLE = 'article'),
            (e.ARTICLE_FORM = 'article_form'),
            (e.ARTICLE_EDIT = 'article_edit'),
            (e.PROFILE_SETTINGS = 'profile_settings'),
            (e.USER_PROFILE = 'user_profile');
        })(ln || (ln = {})),
        ln
      ))();
      const rD = { isLoading: !1, error: null, data: null },
        oD = (0, T.Lq)(
          rD,
          (0, T.on)(Mh, (e) =>
            dt(e, (n) => {
              n.isLoading = !0;
            })
          ),
          (0, T.on)(Y0, (e, { article: n }) =>
            dt(e, (t) => {
              (t.isLoading = !1), (t.data = n);
            })
          ),
          (0, T.on)(V_, (e) =>
            dt(e, (n) => {
              (n.isLoading = !1), (n.error = 'some error');
            })
          ),
          (0, T.on)(Wc, () => rD)
        ),
        Y_ = (0, T.Tz)({ name: ln.ARTICLE, reducer: oD }),
        wl = (0, T.ZF)(Y_.name),
        K_ = (0, T.P1)(wl, (e) => e.isLoading),
        q_ = (0, T.P1)(wl, (e) => e.error),
        J_ = (0, T.P1)(wl, (e) => e.data),
        Sl = (0, T.ZF)(ln.AUTH),
        Q_ = (0, T.P1)(Sl, (e) => e),
        X_ = (0, T.P1)(Q_, (e) => e.isSubmitting),
        ey = (0, T.P1)(Q_, (e) => e.validationErrors),
        ty = (0, T.P1)(Sl, (e) => !0 === e.isLoggedIn),
        Bh = (0, T.P1)(Sl, (e) => !1 === e.isLoggedIn),
        Wo = (0, T.P1)(Sl, (e) => e.currentUser);
      var ct = (() => (
        (function (e) {
          (e.Root = ''),
            (e.Home = '/'),
            (e.Register = 'register'),
            (e.Login = 'login'),
            (e.Posts = 'articles'),
            (e.NewPost = 'new'),
            (e.Settings = 'settings'),
            (e.Profiles = 'profiles'),
            (e.Tags = 'tags'),
            (e.Your_Feed = 'feed'),
            (e.Edit = 'edit'),
            (e.Favorites = 'favorites');
        })(ct || (ct = {})),
        ct
      ))();
      let Li = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ma-loader']],
            decls: 2,
            vars: 0,
            consts: [[1, 'loader']],
            template: function (t, i) {
              1 & t && (a.TgZ(0, 'div', 0), a._UZ(1, 'time'), a.qZA());
            },
            styles: [
              '.loader[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.loader[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;border:5px solid rgb(134,190,48);border-top-color:transparent;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}',
            ],
          })),
          e
        );
      })();
      var ny = E(8073),
        ry = E.n(ny);
      let Du = (() => {
        var e = new WeakMap();
        class n {
          constructor() {
            Lt(this, e, { writable: !0, value: void 0 }),
              Et(this, e, [
                'Connection lost',
                'empty data',
                'Some error...',
                'Access denied',
                'check the correctness',
                '404',
                'reload the page',
                'Oops...',
                'Internal server error',
              ]);
          }
          ngOnInit() {
            this.initializeValues();
          }
          initializeValues() {
            const i = document.getElementById('ma-error-sphere');
            if (!i) return;
            let u = qe(this, e);
            this.errorMessagesProps && (u = this.errorMessagesProps),
              ry()(i, u, { maxSpeed: 'fast', initSpeed: 'slow', radius: 180 });
          }
        }
        return (
          (n.ɵfac = function (i) {
            return new (i || n)();
          }),
          (n.ɵcmp = a.Xpm({
            type: n,
            selectors: [['ma-error-sphere']],
            inputs: { errorMessagesProps: ['errorMessages', 'errorMessagesProps'] },
            decls: 2,
            vars: 0,
            consts: [
              [1, 'container', 'sphere'],
              ['id', 'ma-error-sphere'],
            ],
            template: function (i, u) {
              1 & i && (a.TgZ(0, 'section', 0), a._UZ(1, 'div', 1), a.qZA());
            },
            styles: [
              '.sphere[_ngcontent-%COMP%]{border-radius:50%;font-weight:600;width:min-content;background:rgba(163,14,14,.158);box-shadow:0 0 5px #0000001a,0 0 10px #0003,0 0 15px #0000004d;animation:_ngcontent-%COMP%_shadow 1.5s infinite linear}@keyframes _ngcontent-%COMP%_shadow{0%{box-shadow:0 0 5px #0000001a,0 0 10px #0003,0 0 15px #0000004d}25%{box-shadow:0 0 5px #0000000d,0 0 15px #00000040,0 0 25px #00000026}50%{box-shadow:0 0 5px #0000001a,0 0 10px #0003,0 0 15px #00000059}75%{box-shadow:0 0 5px #0000000d,0 0 15px #00000040,0 0 25px #00000026}to{box-shadow:0 0 5px #0000001a,0 0 10px #0003,0 0 15px #0000004d}}',
            ],
          })),
          n
        );
      })();
      var oy = E(4707),
        iD = E(3099);
      function bl(e, n, t) {
        let i,
          u = !1;
        return (
          e && 'object' == typeof e
            ? ({ bufferSize: i = 1 / 0, windowTime: n = 1 / 0, refCount: u = !1, scheduler: t } = e)
            : (i = e ?? 1 / 0),
          (0, iD.B)({
            connector: () => new oy.t(i, n, t),
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: u,
          })
        );
      }
      const $h = '%[a-f0-9]{2}',
        iy = new RegExp('(' + $h + ')|([^%]+?)', 'gi'),
        sy = new RegExp('(' + $h + ')+', 'gi');
      function Hh(e, n) {
        try {
          return [decodeURIComponent(e.join(''))];
        } catch {}
        if (1 === e.length) return e;
        const t = e.slice(0, (n = n || 1)),
          i = e.slice(n);
        return Array.prototype.concat.call([], Hh(t), Hh(i));
      }
      function sD(e) {
        try {
          return decodeURIComponent(e);
        } catch {
          let n = e.match(iy) || [];
          for (let t = 1; t < n.length; t++) n = (e = Hh(n, t).join('')).match(iy) || [];
          return e;
        }
      }
      function Al(e, n) {
        if ('string' != typeof e || 'string' != typeof n)
          throw new TypeError('Expected the arguments to be of type `string`');
        if ('' === e || '' === n) return [];
        const t = e.indexOf(n);
        return -1 === t ? [] : [e.slice(0, t), e.slice(t + n.length)];
      }
      function yr(e, n) {
        const t = {};
        if (Array.isArray(n))
          for (const i of n) {
            const u = Object.getOwnPropertyDescriptor(e, i);
            u?.enumerable && Object.defineProperty(t, i, u);
          }
        else
          for (const i of Reflect.ownKeys(e)) {
            const u = Object.getOwnPropertyDescriptor(e, i);
            u.enumerable && n(i, e[i], e) && Object.defineProperty(t, i, u);
          }
        return t;
      }
      const Gh = (e) => null == e,
        wu = (e) =>
          encodeURIComponent(e).replace(
            /[!'()*]/g,
            (n) => `%${n.charCodeAt(0).toString(16).toUpperCase()}`
          ),
        zh = Symbol('encodeFragmentIdentifier');
      function Su(e) {
        if ('string' != typeof e || 1 !== e.length)
          throw new TypeError('arrayFormatSeparator must be single character string');
      }
      function Vt(e, n) {
        return n.encode ? (n.strict ? wu(e) : encodeURIComponent(e)) : e;
      }
      function Co(e, n) {
        return n.decode
          ? (function aD(e) {
              if ('string' != typeof e)
                throw new TypeError(
                  'Expected `encodedURI` to be of type `string`, got `' + typeof e + '`'
                );
              try {
                return decodeURIComponent(e);
              } catch {
                return (function Cu(e) {
                  const n = { '%FE%FF': '\ufffd\ufffd', '%FF%FE': '\ufffd\ufffd' };
                  let t = sy.exec(e);
                  for (; t; ) {
                    try {
                      n[t[0]] = decodeURIComponent(t[0]);
                    } catch {
                      const u = sD(t[0]);
                      u !== t[0] && (n[t[0]] = u);
                    }
                    t = sy.exec(e);
                  }
                  n['%C2'] = '\ufffd';
                  const i = Object.keys(n);
                  for (const u of i) e = e.replace(new RegExp(u, 'g'), n[u]);
                  return e;
                })(e);
              }
            })(e)
          : e;
      }
      function ay(e) {
        return Array.isArray(e)
          ? e.sort()
          : 'object' == typeof e
          ? ay(Object.keys(e))
              .sort((n, t) => Number(n) - Number(t))
              .map((n) => e[n])
          : e;
      }
      function Zh(e) {
        const n = e.indexOf('#');
        return -1 !== n && (e = e.slice(0, n)), e;
      }
      function Ml(e, n) {
        return (
          n.parseNumbers && !Number.isNaN(Number(e)) && 'string' == typeof e && '' !== e.trim()
            ? (e = Number(e))
            : n.parseBooleans &&
              null !== e &&
              ('true' === e.toLowerCase() || 'false' === e.toLowerCase()) &&
              (e = 'true' === e.toLowerCase()),
          e
        );
      }
      function Tl(e) {
        const n = (e = Zh(e)).indexOf('?');
        return -1 === n ? '' : e.slice(n + 1);
      }
      function bu(e, n) {
        Su(
          (n = {
            decode: !0,
            sort: !0,
            arrayFormat: 'none',
            arrayFormatSeparator: ',',
            parseNumbers: !1,
            parseBooleans: !1,
            ...n,
          }).arrayFormatSeparator
        );
        const t = (function cD(e) {
            let n;
            switch (e.arrayFormat) {
              case 'index':
                return (t, i, u) => {
                  (n = /\[(\d*)]$/.exec(t)),
                    (t = t.replace(/\[\d*]$/, '')),
                    n ? (void 0 === u[t] && (u[t] = {}), (u[t][n[1]] = i)) : (u[t] = i);
                };
              case 'bracket':
                return (t, i, u) => {
                  (n = /(\[])$/.exec(t)),
                    (u[(t = t.replace(/\[]$/, ''))] = n
                      ? void 0 !== u[t]
                        ? [...u[t], i]
                        : [i]
                      : i);
                };
              case 'colon-list-separator':
                return (t, i, u) => {
                  (n = /(:list)$/.exec(t)),
                    (u[(t = t.replace(/:list$/, ''))] = n
                      ? void 0 !== u[t]
                        ? [...u[t], i]
                        : [i]
                      : i);
                };
              case 'comma':
              case 'separator':
                return (t, i, u) => {
                  const f = 'string' == typeof i && i.includes(e.arrayFormatSeparator),
                    h = 'string' == typeof i && !f && Co(i, e).includes(e.arrayFormatSeparator);
                  i = h ? Co(i, e) : i;
                  const _ =
                    f || h
                      ? i.split(e.arrayFormatSeparator).map((v) => Co(v, e))
                      : null === i
                      ? i
                      : Co(i, e);
                  u[t] = _;
                };
              case 'bracket-separator':
                return (t, i, u) => {
                  const f = /(\[])$/.test(t);
                  if (((t = t.replace(/\[]$/, '')), !f)) return void (u[t] = i && Co(i, e));
                  const h = null === i ? [] : i.split(e.arrayFormatSeparator).map((_) => Co(_, e));
                  u[t] = void 0 !== u[t] ? [...u[t], ...h] : h;
                };
              default:
                return (t, i, u) => {
                  u[t] = void 0 !== u[t] ? [...[u[t]].flat(), i] : i;
                };
            }
          })(n),
          i = Object.create(null);
        if ('string' != typeof e || !(e = e.trim().replace(/^[?#&]/, ''))) return i;
        for (const u of e.split('&')) {
          if ('' === u) continue;
          const f = n.decode ? u.replace(/\+/g, ' ') : u;
          let [h, _] = Al(f, '=');
          void 0 === h && (h = f),
            (_ =
              void 0 === _
                ? null
                : ['comma', 'separator', 'bracket-separator'].includes(n.arrayFormat)
                ? _
                : Co(_, n)),
            t(Co(h, n), _, i);
        }
        for (const [u, f] of Object.entries(i))
          if ('object' == typeof f && null !== f)
            for (const [h, _] of Object.entries(f)) f[h] = Ml(_, n);
          else i[u] = Ml(f, n);
        return !1 === n.sort
          ? i
          : (!0 === n.sort ? Object.keys(i).sort() : Object.keys(i).sort(n.sort)).reduce((u, f) => {
              const h = i[f];
              return (
                (u[f] = Boolean(h) && 'object' == typeof h && !Array.isArray(h) ? ay(h) : h), u
              );
            }, Object.create(null));
      }
      function Il(e, n) {
        if (!e) return '';
        Su(
          (n = { encode: !0, strict: !0, arrayFormat: 'none', arrayFormatSeparator: ',', ...n })
            .arrayFormatSeparator
        );
        const t = (h) => (n.skipNull && Gh(e[h])) || (n.skipEmptyString && '' === e[h]),
          i = (function uD(e) {
            switch (e.arrayFormat) {
              case 'index':
                return (n) => (t, i) => {
                  const u = t.length;
                  return void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && '' === i)
                    ? t
                    : null === i
                    ? [...t, [Vt(n, e), '[', u, ']'].join('')]
                    : [...t, [Vt(n, e), '[', Vt(u, e), ']=', Vt(i, e)].join('')];
                };
              case 'bracket':
                return (n) => (t, i) =>
                  void 0 === i || (e.skipNull && null === i) || (e.skipEmptyString && '' === i)
                    ? t
                    : null === i
                    ? [...t, [Vt(n, e), '[]'].join('')]
                    : [...t, [Vt(n, e), '[]=', Vt(i, e)].join('')];
              case 'colon-list-separator':
                return (n) => (t, i) =>
                  void 0 === i || (e.skipNull && null === i) || (e.skipEmptyString && '' === i)
                    ? t
                    : null === i
                    ? [...t, [Vt(n, e), ':list='].join('')]
                    : [...t, [Vt(n, e), ':list=', Vt(i, e)].join('')];
              case 'comma':
              case 'separator':
              case 'bracket-separator': {
                const n = 'bracket-separator' === e.arrayFormat ? '[]=' : '=';
                return (t) => (i, u) =>
                  void 0 === u || (e.skipNull && null === u) || (e.skipEmptyString && '' === u)
                    ? i
                    : ((u = null === u ? '' : u),
                      0 === i.length
                        ? [[Vt(t, e), n, Vt(u, e)].join('')]
                        : [[i, Vt(u, e)].join(e.arrayFormatSeparator)]);
              }
              default:
                return (n) => (t, i) =>
                  void 0 === i || (e.skipNull && null === i) || (e.skipEmptyString && '' === i)
                    ? t
                    : null === i
                    ? [...t, Vt(n, e)]
                    : [...t, [Vt(n, e), '=', Vt(i, e)].join('')];
            }
          })(n),
          u = {};
        for (const [h, _] of Object.entries(e)) t(h) || (u[h] = _);
        const f = Object.keys(u);
        return (
          !1 !== n.sort && f.sort(n.sort),
          f
            .map((h) => {
              const _ = e[h];
              return void 0 === _
                ? ''
                : null === _
                ? Vt(h, n)
                : Array.isArray(_)
                ? 0 === _.length && 'bracket-separator' === n.arrayFormat
                  ? Vt(h, n) + '[]'
                  : _.reduce(i(h), []).join('&')
                : Vt(h, n) + '=' + Vt(_, n);
            })
            .filter((h) => h.length > 0)
            .join('&')
        );
      }
      function Wh(e, n) {
        n = { decode: !0, ...n };
        let [t, i] = Al(e, '#');
        return (
          void 0 === t && (t = e),
          {
            url: t?.split('?')?.[0] ?? '',
            query: bu(Tl(e), n),
            ...(n && n.parseFragmentIdentifier && i ? { fragmentIdentifier: Co(i, n) } : {}),
          }
        );
      }
      function Ol(e, n) {
        n = { encode: !0, strict: !0, [zh]: !0, ...n };
        const t = Zh(e.url).split('?')[0] || '';
        let f = Il({ ...bu(Tl(e.url), { sort: !1 }), ...e.query }, n);
        f && (f = `?${f}`);
        let h = (function uy(e) {
          let n = '';
          const t = e.indexOf('#');
          return -1 !== t && (n = e.slice(t)), n;
        })(e.url);
        if (e.fragmentIdentifier) {
          const _ = new URL(t);
          (_.hash = e.fragmentIdentifier), (h = n[zh] ? _.hash : `#${e.fragmentIdentifier}`);
        }
        return `${t}${f}${h}`;
      }
      function Pl(e, n, t) {
        t = { parseFragmentIdentifier: !0, [zh]: !1, ...t };
        const { url: i, query: u, fragmentIdentifier: f } = Wh(e, t);
        return Ol({ url: i, query: yr(u, n), fragmentIdentifier: f }, t);
      }
      function lD(e, n, t) {
        return Pl(e, Array.isArray(n) ? (u) => !n.includes(u) : (u, f) => !n(u, f), t);
      }
      const Au = M;
      var $s = (() => (
        (function (e) {
          (e.GET_FEED = '[Feed] Get feed'),
            (e.GET_FEED_SUCCESS = '[Feed] Get feed success'),
            (e.GET_FEED_FAILURE = '[Feed] Get feed failure');
        })($s || ($s = {})),
        $s
      ))();
      const Yh = (0, T.PH)($s.GET_FEED, (0, T.Ky)()),
        Kh = (0, T.PH)($s.GET_FEED_SUCCESS, (0, T.Ky)()),
        xl = (0, T.PH)($s.GET_FEED_FAILURE),
        Rl = (0, T.ZF)(ln.FEED),
        dD = (0, T.P1)(Rl, (e) => e.isLoading),
        cy = (0, T.P1)(Rl, (e) => e.error),
        ly = (0, T.P1)(Rl, (e) => e.data);
      function fD(e, n) {
        1 & e && a._UZ(0, 'ma-loader');
      }
      const Fl = function (e, n) {
        return ['/', e, n];
      };
      function dy(e, n) {
        if (
          (1 & e &&
            (a.TgZ(0, 'article', 5)(1, 'div', 6)(2, 'a', 7),
            a._UZ(3, 'img', 8),
            a.qZA(),
            a.TgZ(4, 'div', 9)(5, 'a', 7),
            a._uU(6),
            a.qZA(),
            a.TgZ(7, 'span', 10),
            a._uU(8),
            a.ALo(9, 'date'),
            a.qZA()(),
            a.TgZ(10, 'div', 11),
            a._UZ(11, 'ma-favorite-button', 12),
            a.qZA()(),
            a.TgZ(12, 'a', 13)(13, 'h1'),
            a._uU(14),
            a.qZA(),
            a.TgZ(15, 'p'),
            a._uU(16),
            a.qZA()(),
            a._UZ(17, 'ma-tag-list', 14),
            a.qZA()),
          2 & e)
        ) {
          const t = n.$implicit,
            i = a.oxw(3);
          a.xp6(2),
            a.Q6J('routerLink', a.WLB(14, Fl, i.HttpLinks.Profiles, t.author.username)),
            a.xp6(1),
            a.Q6J('src', t.author.image, a.LSH),
            a.xp6(2),
            a.Q6J('routerLink', a.WLB(17, Fl, i.HttpLinks.Profiles, t.author.username)),
            a.xp6(1),
            a.hij(' ', t.author.username, ' '),
            a.xp6(2),
            a.Oqu(a.lcZ(9, 12, t.createdAt)),
            a.xp6(3),
            a.Q6J('articleSlug', t.slug)('isFavorited', t.favorited)(
              'favoritesCount',
              t.favoritesCount
            ),
            a.xp6(1),
            a.Q6J('routerLink', a.WLB(20, Fl, i.HttpLinks.Posts, t.slug)),
            a.xp6(2),
            a.Oqu(t.title),
            a.xp6(2),
            a.Oqu(t.description),
            a.xp6(1),
            a.Q6J('tags', t.tagList);
        }
      }
      function hD(e, n) {
        if (
          (1 & e &&
            (a.ynx(0),
            a.YNc(1, dy, 18, 23, 'article', 3),
            a.ALo(2, 'async'),
            a._UZ(3, 'ma-pagination', 4),
            a.ALo(4, 'async'),
            a.BQk()),
          2 & e)
        ) {
          const t = a.oxw(2);
          a.xp6(1),
            a.Q6J('ngForOf', a.lcZ(2, 3, t.feed$).articles),
            a.xp6(2),
            a.Q6J('total', a.lcZ(4, 5, t.feed$).articlesCount)('currentPage', t.currentPage);
        }
      }
      function fy(e, n) {
        1 & e && (a.TgZ(0, 'div', 17)(1, 'p'), a._uU(2, 'Posts are empty'), a.qZA()());
      }
      function hy(e, n) {
        1 & e && a._UZ(0, 'ma-error-message', 18),
          2 & e && a.Q6J('errorMessage', 'Posts are empty. Something went wrong...');
      }
      function Rn(e, n) {
        if (
          (1 & e &&
            (a.YNc(0, fy, 3, 0, 'div', 15),
            a.ALo(1, 'async'),
            a.YNc(2, hy, 1, 1, 'ma-error-message', 16),
            a.ALo(3, 'async')),
          2 & e)
        ) {
          const t = a.oxw(2);
          a.Q6J('ngIf', !a.lcZ(1, 2, t.error$)), a.xp6(2), a.Q6J('ngIf', a.lcZ(3, 4, t.error$));
        }
      }
      function Hs(e, n) {
        if (
          (1 & e &&
            (a.YNc(0, hD, 5, 7, 'ng-container', 0),
            a.ALo(1, 'async'),
            a.ALo(2, 'async'),
            a.YNc(3, Rn, 4, 6, 'ng-template', null, 2, a.W1O)),
          2 & e)
        ) {
          const t = a.MAs(4),
            i = a.oxw();
          a.Q6J('ngIf', !!a.lcZ(1, 2, i.feed$) && a.lcZ(2, 4, i.feed$).articles.length)(
            'ngIfElse',
            t
          );
        }
      }
      let Mu = (() => {
        var e = new WeakMap(),
          n = new WeakMap();
        class t {
          constructor(u, f) {
            Lt(this, e, { writable: !0, value: void 0 }),
              Lt(this, n, { writable: !0, value: void 0 }),
              (this.store = u),
              (this.route = f),
              (this.currentPage = 1),
              (this.HttpLinks = ct),
              Et(this, e, 10);
          }
          ngOnInit() {
            this.initializeValues(), this.initializeListeners();
          }
          ngOnChanges(u) {
            const f = u.apiUrlProps;
            !f.firstChange && f.currentValue !== f.previousValue && this.fetchFeedData();
          }
          initializeListeners() {
            var u = this;
            return qt(function* () {
              Et(
                u,
                n,
                u.route.queryParams
                  .pipe(
                    (0, le.U)((f) => Number(f.page || '1')),
                    (0, le.U)((f) => {
                      (u.currentPage = f), u.fetchFeedData(f);
                    }),
                    bl({ bufferSize: 1, refCount: !0 })
                  )
                  .subscribe()
              );
            })();
          }
          initializeValues() {
            (this.isLoading$ = this.store.pipe((0, T.Ys)(dD))),
              (this.error$ = this.store.pipe((0, T.Ys)(cy))),
              (this.feed$ = this.store.pipe((0, T.Ys)(ly)));
          }
          fetchFeedData(u = 1) {
            const f = Au.parseUrl(this.apiUrlProps),
              h = Math.max(u * qe(this, e) - qe(this, e), 0),
              _ = Au.stringify({ limit: qe(this, e), offset: h, ...f.query });
            this.store.dispatch(Yh({ shortUrl: `${f.url}?${_}` }));
          }
          ngOnDestroy() {
            qe(this, n).unsubscribe();
          }
        }
        return (
          (t.ɵfac = function (u) {
            return new (u || t)(a.Y36(T.yh), a.Y36(gr));
          }),
          (t.ɵcmp = a.Xpm({
            type: t,
            selectors: [['ma-feed']],
            inputs: { apiUrlProps: ['apiUrl', 'apiUrlProps'] },
            features: [a.TTD],
            decls: 4,
            vars: 4,
            consts: [
              [4, 'ngIf', 'ngIfElse'],
              ['feedContent', ''],
              ['emptyFeed', ''],
              ['class', 'article-preview', 4, 'ngFor', 'ngForOf'],
              [3, 'total', 'currentPage'],
              [1, 'article-preview'],
              [1, 'article-meta'],
              [3, 'routerLink'],
              [3, 'src'],
              [1, 'info'],
              [1, 'date'],
              [1, 'pull-xs-right'],
              [3, 'articleSlug', 'isFavorited', 'favoritesCount'],
              [1, 'preview-link', 3, 'routerLink'],
              [1, 'pull-xs-right', 3, 'tags'],
              ['class', 'empty-container', 4, 'ngIf'],
              [3, 'errorMessage', 4, 'ngIf'],
              [1, 'empty-container'],
              [3, 'errorMessage'],
            ],
            template: function (u, f) {
              if (
                (1 & u &&
                  (a.YNc(0, fD, 1, 0, 'ma-loader', 0),
                  a.ALo(1, 'async'),
                  a.YNc(2, Hs, 5, 6, 'ng-template', null, 1, a.W1O)),
                2 & u)
              ) {
                const h = a.MAs(3);
                a.Q6J('ngIf', a.lcZ(1, 2, f.isLoading$))('ngIfElse', h);
              }
            },
            styles: [
              '.empty-container[_ngcontent-%COMP%]{background-color:#8080805b;background-blend-mode:color-burn;background-image:url(/assets/images/black_hole.jpg);background-repeat:no-repeat;background-size:cover;height:150px;border-radius:15px;transform:translateY(10px);color:#fff;font-weight:600;font-size:38px;line-height:42px}.empty-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;-webkit-user-select:none;user-select:none;transform:translateY(calc(75px - 50%))}',
            ],
          })),
          t
        );
      })();
      const pD = ['bannerChild'];
      function Vw(e, n) {
        1 & e && a.Hsn(0, 0, ['*ngIf', 'isChildExists']);
      }
      function jw(e, n) {
        1 & e &&
          (a.TgZ(0, 'div')(1, 'h1'),
          a._uU(2, 'Medium clone'),
          a.qZA(),
          a.TgZ(3, 'p'),
          a._uU(4, 'A place to share your Angular knowledge.'),
          a.qZA()());
      }
      const py = ['*'];
      let Gs = (() => {
        class e {
          constructor() {
            this.isChildExists = !1;
          }
          set bannerChildSetter(t) {
            this.isChildExists = !!t;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ma-banner']],
            contentQueries: function (t, i, u) {
              if ((1 & t && a.Suo(u, pD, 5), 2 & t)) {
                let f;
                a.iGM((f = a.CRH())) && (i.bannerChildSetter = f.first);
              }
            },
            ngContentSelectors: py,
            decls: 4,
            vars: 2,
            consts: [
              [1, 'banner', 'banner-img'],
              [1, 'container'],
              [4, 'ngIf'],
            ],
            template: function (t, i) {
              1 & t &&
                (a.F$t(),
                a.TgZ(0, 'div', 0)(1, 'div', 1),
                a.YNc(2, Vw, 1, 0, 'ng-content', 2),
                a.YNc(3, jw, 5, 0, 'div', 2),
                a.qZA()()),
                2 & t &&
                  (a.xp6(2),
                  a.Q6J('ngIf', i.isChildExists),
                  a.xp6(1),
                  a.Q6J('ngIf', !i.isChildExists));
            },
            dependencies: [sn],
            styles: [
              '.banner-img[_ngcontent-%COMP%]{height:auto;background-image:url(/assets/images/banner.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}.banner-img[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-shadow:4px 4px 4px rgba(0,0,0,.8)}',
            ],
          })),
          e
        );
      })();
      var to = (() => (
        (function (e) {
          (e.GET_POPULAR_TAGS = '[Popular_Tags] Get popular tags'),
            (e.GET_POPULAR_TAGS_SUCCESS = '[Popular_Tags] Get popular tags success'),
            (e.GET_POPULAR_TAGS_FAILURE = '[Popular_Tags] Get popular tags failure');
        })(to || (to = {})),
        to
      ))();
      const qh = (0, T.PH)(to.GET_POPULAR_TAGS),
        Nl = (0, T.PH)(to.GET_POPULAR_TAGS_SUCCESS, (0, T.Ky)()),
        gy = (0, T.PH)(to.GET_POPULAR_TAGS_FAILURE),
        Ll = (0, T.ZF)(ln.POPULAR_TAGS),
        gD = (0, T.P1)(Ll, (e) => e.data),
        mD = (0, T.P1)(Ll, (e) => e.isLoading),
        _D = (0, T.P1)(Ll, (e) => e.error);
      let kl = (() => {
        class e {
          constructor() {
            this.errorMessageProps = 'Something went wrong';
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ma-error-message']],
            inputs: { errorMessageProps: ['errorMessage', 'errorMessageProps'] },
            decls: 4,
            vars: 1,
            consts: [
              [1, 'alert', 'alert-danger'],
              [1, 'ion-alert-circled', 'alert-dismissible'],
            ],
            template: function (t, i) {
              1 & t &&
                (a.TgZ(0, 'div', 0), a._UZ(1, 'i', 1), a.TgZ(2, 'strong'), a._uU(3), a.qZA()()),
                2 & t && (a.xp6(3), a.Oqu(i.errorMessageProps));
            },
            encapsulation: 2,
          })),
          e
        );
      })();
      function my(e, n) {
        1 & e && a._UZ(0, 'ma-loader');
      }
      const _y = function (e, n) {
        return ['/', e, n];
      };
      function Ul(e, n) {
        if ((1 & e && (a.TgZ(0, 'a', 6), a._uU(1), a.qZA()), 2 & e)) {
          const t = n.$implicit,
            i = a.oxw(3);
          a.Q6J('routerLink', a.WLB(2, _y, i.HttpLinks.Tags, t)), a.xp6(1), a.hij(' ', t, ' ');
        }
      }
      function Jh(e, n) {
        if (
          (1 & e &&
            (a.ynx(0),
            a.TgZ(1, 'section', 3)(2, 'p')(3, 'strong'),
            a._uU(4, ' Popular Tags'),
            a.qZA()(),
            a.TgZ(5, 'div', 4),
            a.YNc(6, Ul, 2, 5, 'a', 5),
            a.ALo(7, 'async'),
            a.qZA()(),
            a.BQk()),
          2 & e)
        ) {
          const t = a.oxw(2);
          a.xp6(6), a.Q6J('ngForOf', a.lcZ(7, 1, t.tags$));
        }
      }
      function Bw(e, n) {
        if ((1 & e && (a._UZ(0, 'ma-error-message', 8), a.ALo(1, 'async')), 2 & e)) {
          const t = a.oxw(3);
          a.Q6J('errorMessage', a.lcZ(1, 1, t.error$));
        }
      }
      function yy(e, n) {
        if ((1 & e && (a.YNc(0, Bw, 2, 3, 'ma-error-message', 7), a.ALo(1, 'async')), 2 & e)) {
          const t = a.oxw(2);
          a.Q6J('ngIf', a.lcZ(1, 1, t.error$));
        }
      }
      function yD(e, n) {
        if (
          (1 & e &&
            (a.YNc(0, Jh, 8, 3, 'ng-container', 0),
            a.ALo(1, 'async'),
            a.YNc(2, yy, 2, 3, 'ng-template', null, 2, a.W1O)),
          2 & e)
        ) {
          const t = a.MAs(3),
            i = a.oxw();
          a.Q6J('ngIf', !!a.lcZ(1, 2, i.tags$))('ngIfElse', t);
        }
      }
      let Vl = (() => {
          class e {
            constructor(t) {
              (this.store = t), (this.HttpLinks = ct);
            }
            ngOnInit() {
              this.initializeValues(), this.fetchData();
            }
            initializeValues() {
              (this.tags$ = this.store.pipe((0, T.Ys)(gD))),
                (this.isLoading$ = this.store.pipe((0, T.Ys)(mD))),
                (this.error$ = this.store.pipe((0, T.Ys)(_D)));
            }
            fetchData() {
              this.store.dispatch(qh());
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(T.yh));
            }),
            (e.ɵcmp = a.Xpm({
              type: e,
              selectors: [['ma-popular-tags']],
              decls: 4,
              vars: 4,
              consts: [
                [4, 'ngIf', 'ngIfElse'],
                ['popularTagsContent', ''],
                ['popularTagsEmpty', ''],
                [1, 'sidebar'],
                [1, 'tag-list'],
                ['class', 'tag-default tag-pill', 3, 'routerLink', 4, 'ngFor', 'ngForOf'],
                [1, 'tag-default', 'tag-pill', 3, 'routerLink'],
                [3, 'errorMessage', 4, 'ngIf'],
                [3, 'errorMessage'],
              ],
              template: function (t, i) {
                if (
                  (1 & t &&
                    (a.YNc(0, my, 1, 0, 'ma-loader', 0),
                    a.ALo(1, 'async'),
                    a.YNc(2, yD, 4, 4, 'ng-template', null, 1, a.W1O)),
                  2 & t)
                ) {
                  const u = a.MAs(3);
                  a.Q6J('ngIf', a.lcZ(1, 2, i.isLoading$))('ngIfElse', u);
                }
              },
              dependencies: [Kn, sn, jn, Li, kl, He],
            })),
            e
          );
        })(),
        vD = (() => {
          var e = new WeakMap(),
            n = new WeakMap();
          class t {
            constructor(u, f) {
              Lt(this, e, { writable: !0, value: void 0 }),
                Lt(this, n, { writable: !0, value: void 0 }),
                (this.el = u),
                (this.router = f);
            }
            ngOnInit() {
              this.checkUrl(this.router.url),
                Et(
                  this,
                  e,
                  this.router.events.subscribe((u) => {
                    u instanceof Zr && this.checkUrl(u.url);
                  })
                );
            }
            checkUrl(u) {
              const f = Au.parseUrl(u);
              Et(
                this,
                n,
                Array.isArray(this.linkPathProps)
                  ? this.linkPathProps.join('') === f.url
                  : this.linkPathProps === f.url
              );
            }
            ngOnDestroy() {
              qe(this, e).unsubscribe();
            }
            ngDoCheck() {
              const u = this.el.nativeElement;
              qe(this, n) ? u.classList.add('active') : u.classList.remove('active');
            }
          }
          return (
            (t.ɵfac = function (u) {
              return new (u || t)(a.Y36(a.SBq), a.Y36(At));
            }),
            (t.ɵdir = a.lG2({
              type: t,
              selectors: [['', 'routerLinkActiveWithoutQuery', '']],
              inputs: { linkPathProps: ['routerLinkActiveWithoutQuery', 'linkPathProps'] },
            })),
            t
          );
        })();
      const vy = function (e) {
        return ['/', e];
      };
      function Qh(e, n) {
        if ((1 & e && (a.TgZ(0, 'li', 3)(1, 'a', 5), a._uU(2, ' Your Feed '), a.qZA()()), 2 & e)) {
          const t = a.oxw();
          a.xp6(1), a.Q6J('routerLink', a.VKq(1, vy, t.HttpLinks.Your_Feed));
        }
      }
      const $w = function (e, n) {
        return ['/', e, n];
      };
      function ED(e, n) {
        if (
          (1 & e && (a.TgZ(0, 'li', 3)(1, 'a', 5), a._UZ(2, 'i', 6), a._uU(3), a.qZA()()), 2 & e)
        ) {
          const t = a.oxw();
          a.xp6(1),
            a.Q6J('routerLink', a.WLB(2, $w, t.HttpLinks.Tags, t.tagNameProps)),
            a.xp6(2),
            a.hij(' ', t.tagNameProps, ' ');
        }
      }
      const Hw = function () {
        return ['/'];
      };
      let Xh = (() => {
          class e {
            constructor(t) {
              (this.store = t), (this.HttpLinks = ct);
            }
            ngOnInit() {
              this.initializeValues();
            }
            initializeValues() {
              this.isLoggedIn$ = this.store.pipe((0, T.Ys)(ty));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(T.yh));
            }),
            (e.ɵcmp = a.Xpm({
              type: e,
              selectors: [['ma-feed-toggler']],
              inputs: { tagNameProps: ['tagName', 'tagNameProps'] },
              decls: 8,
              vars: 6,
              consts: [
                [1, 'feed-toggle'],
                [1, 'nav', 'nav-pills', 'outline-active'],
                ['class', 'nav-item', 4, 'ngIf'],
                [1, 'nav-item'],
                ['routerLinkActiveWithoutQuery', '/', 1, 'nav-link', 3, 'routerLink'],
                ['routerLinkActive', 'active', 1, 'nav-link', 3, 'routerLink'],
                [1, 'ion-pound'],
              ],
              template: function (t, i) {
                1 & t &&
                  (a.TgZ(0, 'nav', 0)(1, 'ul', 1),
                  a.YNc(2, Qh, 3, 3, 'li', 2),
                  a.ALo(3, 'async'),
                  a.TgZ(4, 'li', 3)(5, 'a', 4),
                  a._uU(6, ' Global Feed '),
                  a.qZA()(),
                  a.YNc(7, ED, 4, 5, 'li', 2),
                  a.qZA()()),
                  2 & t &&
                    (a.xp6(2),
                    a.Q6J('ngIf', a.lcZ(3, 3, i.isLoggedIn$)),
                    a.xp6(3),
                    a.Q6J('routerLink', a.DdM(5, Hw)),
                    a.xp6(2),
                    a.Q6J('ngIf', i.tagNameProps));
              },
              dependencies: [sn, jn, Lm, vD, He],
            })),
            e
          );
        })(),
        DD = (() => {
          var e = new WeakMap();
          class n {
            constructor(i) {
              Lt(this, e, { writable: !0, value: void 0 }), (this.route = i);
            }
            ngOnInit() {
              this.initializeValues();
            }
            initializeValues() {
              Et(
                this,
                e,
                this.route.params.subscribe((i) => {
                  const u = i[ep];
                  u && ((this.tagName = u), (this.apiUrl = `${xn.ALL_FEEDS}?tag=${u}`));
                })
              );
            }
            ngOnDestroy() {
              qe(this, e).unsubscribe();
            }
          }
          return (
            (n.ɵfac = function (i) {
              return new (i || n)(a.Y36(gr));
            }),
            (n.ɵcmp = a.Xpm({
              type: n,
              selectors: [['ma-tag-feed']],
              decls: 9,
              vars: 2,
              consts: [
                [1, 'home-page'],
                [1, 'container', 'page'],
                [1, 'row'],
                [1, 'col-md-9'],
                [3, 'tagName'],
                [3, 'apiUrl'],
                [1, 'col-md-3'],
              ],
              template: function (i, u) {
                1 & i &&
                  (a.TgZ(0, 'div', 0),
                  a._UZ(1, 'ma-banner'),
                  a.TgZ(2, 'div', 1)(3, 'div', 2)(4, 'div', 3),
                  a._UZ(5, 'ma-feed-toggler', 4)(6, 'ma-feed', 5),
                  a.qZA(),
                  a.TgZ(7, 'div', 6),
                  a._UZ(8, 'ma-popular-tags'),
                  a.qZA()()()()),
                  2 & i &&
                    (a.xp6(5), a.Q6J('tagName', u.tagName), a.xp6(1), a.Q6J('apiUrl', u.apiUrl));
              },
              dependencies: [Mu, Gs, Vl, Xh],
            })),
            n
          );
        })();
      const ep = 'slug',
        Ey = [{ path: `${ct.Tags}/:${ep}`, component: DD }];
      let Dy = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({ imports: [wt.forChild(Ey), wt] })),
          e
        );
      })();
      const CD = function (e, n) {
          return ['/', e, n];
        },
        Cy = function (e) {
          return { 'tag-outline': e };
        };
      function wy(e, n) {
        if ((1 & e && (a.TgZ(0, 'li')(1, 'a', 2), a.ALo(2, 'async'), a._uU(3), a.qZA()()), 2 & e)) {
          const t = n.$implicit,
            i = a.oxw();
          a.xp6(1),
            a.Q6J('routerLink', a.WLB(5, CD, i.HttpLinks.Tags, t))(
              'ngClass',
              a.VKq(8, Cy, a.lcZ(2, 3, i.currentRouteTag$) !== t)
            ),
            a.xp6(2),
            a.hij(' ', t, ' ');
        }
      }
      let Sy = (() => {
        class e {
          constructor(t) {
            (this.router = t), (this.HttpLinks = ct);
          }
          ngOnInit() {
            this.currentRouteTag$ = this.router.params.pipe((0, le.U)((t) => t[ep]));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Y36(gr));
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ma-tag-list']],
            inputs: { tagsProps: ['tags', 'tagsProps'] },
            decls: 2,
            vars: 1,
            consts: [
              [1, 'tag-list'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'tag-default', 'tag-pill', 3, 'routerLink', 'ngClass'],
            ],
            template: function (t, i) {
              1 & t && (a.TgZ(0, 'ul', 0), a.YNc(1, wy, 4, 10, 'li', 1), a.qZA()),
                2 & t && (a.xp6(1), a.Q6J('ngForOf', i.tagsProps));
            },
            dependencies: [Ue, Kn, jn, He],
          })),
          e
        );
      })();
      var wD = E(930);
      function zs(e, n) {
        const t = 'object' == typeof n;
        return new Promise((i, u) => {
          const f = new wD.Hp({
            next: (h) => {
              i(h), f.unsubscribe();
            },
            error: u,
            complete: () => {
              t ? i(n.defaultValue) : u(new mi());
            },
          });
          e.subscribe(f);
        });
      }
      var gn = (() => (
        (function (e) {
          (e.REGISTER = '[Auth] Register'),
            (e.REGISTER_SUCCESS = '[Auth] Register success'),
            (e.REGISTER_FAILURE = '[Auth] Register failure'),
            (e.LOGIN = '[Auth] Login'),
            (e.LOGIN_SUCCESS = '[Auth] Login success'),
            (e.LOGIN_FAILURE = '[Auth] Login failure'),
            (e.FETCH_USER_BY_TOKEN = '[Auth] fetch user by token'),
            (e.FETCH_USER_BY_TOKEN_SUCCESS = '[Auth] fetch user by token success'),
            (e.FETCH_USER_BY_TOKEN_FAILURE = '[Auth] fetch user by token failure'),
            (e.UPDATE_USER = '[Auth] update user'),
            (e.UPDATE_USER_SUCCESS = '[Auth] update user success'),
            (e.UPDATE_USER_FAILURE = '[Auth] update user failure'),
            (e.LOGOUT_USER = '[Auth] Logout user'),
            (e.CHECK_TO_LOGGED_IN = '[Auth] check to logged in');
        })(gn || (gn = {})),
        gn
      ))();
      const jl = (0, T.PH)(gn.LOGOUT_USER),
        Bl = (0, T.PH)(gn.CHECK_TO_LOGGED_IN, (0, T.Ky)()),
        by = function (e, n) {
          return { 'btn-primary': e, 'btn-outline-primary': n };
        };
      let tp = (() => {
        var e = new WeakMap();
        class n {
          set _favoritesCountSetter(i) {
            this.favoritesCount = i;
          }
          set _isFavoritedSetter(i) {
            this.isFavorited = i;
          }
          constructor(i) {
            Lt(this, e, { writable: !0, value: void 0 }), (this.store = i);
          }
          ngOnInit() {
            this.initializeValues();
          }
          initializeValues() {
            var i = this;
            return qt(function* () {
              yield zs(
                i.store.pipe(
                  (0, T.Ys)(Bh),
                  (0, le.U)((u) => {
                    Et(i, e, u);
                  }),
                  (0, Wt.h)(() => !1)
                )
              );
            })();
          }
          onLike() {
            if (qe(this, e)) return this.store.dispatch(Bl({ isAnonymous: !0 }));
            this.store.dispatch(bh({ slug: this.articleSlugProps, isFavorited: this.isFavorited })),
              this.isFavorited ? --this.favoritesCount : ++this.favoritesCount,
              (this.isFavorited = !this.isFavorited);
          }
        }
        return (
          (n.ɵfac = function (i) {
            return new (i || n)(a.Y36(T.yh));
          }),
          (n.ɵcmp = a.Xpm({
            type: n,
            selectors: [['ma-favorite-button']],
            inputs: {
              articleSlugProps: ['articleSlug', 'articleSlugProps'],
              _favoritesCountSetter: ['favoritesCount', '_favoritesCountSetter'],
              _isFavoritedSetter: ['isFavorited', '_isFavoritedSetter'],
            },
            decls: 3,
            vars: 5,
            consts: [
              [1, 'btn', 'btn-sm', 3, 'ngClass', 'click'],
              [1, 'ion-heart'],
            ],
            template: function (i, u) {
              1 & i &&
                (a.TgZ(0, 'button', 0),
                a.NdJ('click', function () {
                  return u.onLike();
                }),
                a._UZ(1, 'i', 1),
                a._uU(2),
                a.qZA()),
                2 & i &&
                  (a.Q6J('ngClass', a.WLB(2, by, u.isFavorited, !u.isFavorited)),
                  a.xp6(2),
                  a.hij(' \xa0', u.favoritesCount, '\n'));
            },
            dependencies: [Ue],
          })),
          n
        );
      })();
      const SD = function (e, n) {
        return { 'btn-secondary': e, 'btn-outline-secondary': n };
      };
      let Ay = (() => {
        var e = new WeakMap();
        class n {
          set _followingSetter(i) {
            this.isFollowing = i;
          }
          constructor(i) {
            Lt(this, e, { writable: !0, value: void 0 }), (this.store = i);
          }
          ngOnInit() {
            this.initializeValues();
          }
          initializeValues() {
            var i = this;
            return qt(function* () {
              yield zs(
                i.store
                  .pipe(
                    (0, T.Ys)(Bh),
                    (0, le.U)((f) => {
                      Et(i, e, f);
                    })
                  )
                  .pipe((0, Wt.h)(() => !1))
              );
            })();
          }
          onFollow() {
            if (qe(this, e)) return this.store.dispatch(Bl({ isAnonymous: !0 }));
            this.store.dispatch(Z0({ slug: this.usernameProps, isFollow: this.isFollowing })),
              (this.isFollowing = !this.isFollowing);
          }
        }
        return (
          (n.ɵfac = function (i) {
            return new (i || n)(a.Y36(T.yh));
          }),
          (n.ɵcmp = a.Xpm({
            type: n,
            selectors: [['ma-follow-button']],
            inputs: {
              usernameProps: ['username', 'usernameProps'],
              _followingSetter: ['isFollowing', '_followingSetter'],
            },
            decls: 3,
            vars: 6,
            consts: [
              [1, 'btn', 'btn-sm', 'action-btn', 3, 'ngClass', 'click'],
              [1, 'ion-plus-round'],
            ],
            template: function (i, u) {
              1 & i &&
                (a.TgZ(0, 'button', 0),
                a.NdJ('click', function () {
                  return u.onFollow();
                }),
                a._UZ(1, 'i', 1),
                a._uU(2),
                a.qZA()),
                2 & i &&
                  (a.Q6J('ngClass', a.WLB(3, SD, u.isFollowing, !u.isFollowing)),
                  a.xp6(2),
                  a.AsE(
                    ' \xa0 ',
                    u.isFollowing ? 'Unfollow' : 'Follow',
                    ' ',
                    u.usernameProps,
                    '\n'
                  ));
            },
            dependencies: [Ue],
          })),
          n
        );
      })();
      function Gw(e, n) {
        1 & e && (a.TgZ(0, 'div', 2), a._UZ(1, 'ma-loader'), a.qZA());
      }
      function My(e, n) {
        if (
          (1 & e &&
            (a.TgZ(0, 'span'),
            a._UZ(1, 'ma-favorite-button', 18)(2, 'ma-follow-button', 19),
            a.qZA()),
          2 & e)
        ) {
          const t = a.oxw(3);
          a.xp6(1),
            a.Q6J('articleSlug', t.article.slug)('favoritesCount', t.article.favoritesCount)(
              'isFavorited',
              t.article.favorited
            ),
            a.xp6(1),
            a.Q6J('username', t.article.author.username)('isFollowing', t.article.author.following);
        }
      }
      const zw = function (e, n, t) {
        return ['/', e, n, t];
      };
      function Zw(e, n) {
        if (1 & e) {
          const t = a.EpF();
          a.TgZ(0, 'span')(1, 'a', 20),
            a._UZ(2, 'i', 21),
            a._uU(3, ' Edit Post '),
            a.qZA(),
            a.TgZ(4, 'button', 22),
            a.NdJ('click', function () {
              a.CHM(t);
              const u = a.oxw(3);
              return a.KtG(u.deleteArticle());
            }),
            a._UZ(5, 'i', 23),
            a._uU(6, ' Delete Post '),
            a.qZA()();
        }
        if (2 & e) {
          const t = a.oxw(3);
          a.xp6(1),
            a.Q6J('routerLink', a.kEZ(1, zw, t.HttpLinks.Posts, t.article.slug, t.HttpLinks.Edit));
        }
      }
      const bD = function (e, n) {
        return ['/', e, n];
      };
      function Ww(e, n) {
        if (
          (1 & e &&
            (a.ynx(0),
            a.TgZ(1, 'section', 5),
            a.ynx(2),
            a.TgZ(3, 'div', 6)(4, 'div', 7)(5, 'h1'),
            a._uU(6),
            a.qZA(),
            a.TgZ(7, 'div', 8)(8, 'a', 9),
            a._UZ(9, 'img', 10),
            a.qZA(),
            a.TgZ(10, 'div', 11)(11, 'a', 12),
            a._uU(12),
            a.qZA(),
            a.TgZ(13, 'span', 13),
            a._uU(14),
            a.ALo(15, 'date'),
            a.qZA()(),
            a.YNc(16, My, 3, 5, 'span', 14),
            a.YNc(17, Zw, 7, 5, 'span', 14),
            a.qZA()()(),
            a.TgZ(18, 'div', 7)(19, 'div', 15)(20, 'div', 16)(21, 'p'),
            a._uU(22),
            a.qZA(),
            a._UZ(23, 'ma-tag-list', 17),
            a.qZA()()(),
            a.BQk(),
            a.qZA(),
            a.BQk()),
          2 & e)
        ) {
          const t = a.oxw(2);
          a.xp6(6),
            a.Oqu(t.article.title),
            a.xp6(2),
            a.Q6J('routerLink', a.WLB(12, bD, t.HttpLinks.Profiles, t.article.author.username)),
            a.xp6(1),
            a.Q6J('src', t.article.author.image, a.LSH),
            a.xp6(2),
            a.Q6J('routerLink', a.WLB(15, bD, t.HttpLinks.Profiles, t.article.author.username)),
            a.xp6(1),
            a.hij(' ', t.article.author.username, ' '),
            a.xp6(2),
            a.hij(' ', a.lcZ(15, 10, t.article.createdAt), ' '),
            a.xp6(2),
            a.Q6J('ngIf', !t.isAuthor),
            a.xp6(1),
            a.Q6J('ngIf', t.isAuthor),
            a.xp6(5),
            a.Oqu(t.article.body),
            a.xp6(1),
            a.Q6J('tags', t.article.tagList);
        }
      }
      function Yw(e, n) {
        1 & e && a._UZ(0, 'ma-error-sphere');
      }
      function Kw(e, n) {
        if (
          (1 & e &&
            (a.YNc(0, Ww, 24, 18, 'ng-container', 3),
            a.ALo(1, 'async'),
            a.YNc(2, Yw, 1, 0, 'ng-template', null, 4, a.W1O)),
          2 & e)
        ) {
          const t = a.MAs(3),
            i = a.oxw();
          a.Q6J('ngIf', !!i.article && !a.lcZ(1, 2, i.error$))('ngIfElse', t);
        }
      }
      let qw = (() => {
        var e = new WeakMap(),
          n = new WeakMap();
        class t {
          constructor(u, f) {
            Lt(this, e, { writable: !0, value: void 0 }),
              Lt(this, n, { writable: !0, value: void 0 }),
              (this.store = u),
              (this.route = f),
              (this.isAuthor = !1),
              (this.HttpLinks = ct),
              Et(this, e, null);
          }
          ngOnInit() {
            this.initializeValues(), this.initializeListeners(), this.fetchData();
          }
          initializeValues() {
            var u = this;
            return qt(function* () {
              Et(u, e, u.route.snapshot.paramMap.get(AD)),
                (u.isLoading$ = u.store.pipe((0, T.Ys)(K_))),
                (u.error$ = u.store.pipe((0, T.Ys)(q_)));
            })();
          }
          initializeListeners() {
            var u = this;
            return qt(function* () {
              const f = u.store.pipe((0, T.Ys)(J_)),
                h = u.store.pipe((0, T.Ys)(Wo));
              Et(
                u,
                n,
                er([f, h])
                  .pipe(
                    (0, le.U)(([_, v]) => {
                      (u.article = _),
                        _ &&
                          v &&
                          (u.isAuthor =
                            v.username === _.author.username &&
                            v.bio === _.author.bio &&
                            v.image === _.author.image);
                    })
                  )
                  .subscribe()
              );
            })();
          }
          fetchData() {
            qe(this, e) && this.store.dispatch(Mh({ slug: qe(this, e) }));
          }
          deleteArticle() {
            qe(this, e) && this.store.dispatch(k_({ slug: qe(this, e) }));
          }
          ngOnDestroy() {
            qe(this, n).unsubscribe();
          }
        }
        return (
          (t.ɵfac = function (u) {
            return new (u || t)(a.Y36(T.yh), a.Y36(gr));
          }),
          (t.ɵcmp = a.Xpm({
            type: t,
            selectors: [['ma-article']],
            decls: 4,
            vars: 4,
            consts: [
              ['class', 'loader-container', 4, 'ngIf', 'ngIfElse'],
              ['articleData', ''],
              [1, 'loader-container'],
              [4, 'ngIf', 'ngIfElse'],
              ['emptyData', ''],
              [1, 'article-page'],
              [1, 'banner'],
              [1, 'container'],
              [1, 'article-meta'],
              [3, 'routerLink'],
              [3, 'src'],
              [1, 'info'],
              [1, 'author', 3, 'routerLink'],
              [1, 'date'],
              [4, 'ngIf'],
              [1, 'row', 'article-content'],
              [1, 'col-xs-12'],
              [3, 'tags'],
              [3, 'articleSlug', 'favoritesCount', 'isFavorited'],
              [3, 'username', 'isFollowing'],
              [1, 'btn', 'btn-outline-secondary', 'btn-sm', 'm-r-1', 3, 'routerLink'],
              [1, 'ion-edit'],
              [1, 'btn', 'btn-sm', 'btn-outline-danger', 3, 'click'],
              [1, 'ion-trash-a'],
            ],
            template: function (u, f) {
              if (
                (1 & u &&
                  (a.YNc(0, Gw, 2, 0, 'div', 0),
                  a.ALo(1, 'async'),
                  a.YNc(2, Kw, 4, 4, 'ng-template', null, 1, a.W1O)),
                2 & u)
              ) {
                const h = a.MAs(3);
                a.Q6J('ngIf', a.lcZ(1, 2, f.isLoading$))('ngIfElse', h);
              }
            },
            dependencies: [sn, jn, Li, Du, Sy, tp, Ay, He, Jn],
            styles: ['.loader-container[_ngcontent-%COMP%]{height:calc(100vh - 56px)}'],
          })),
          t
        );
      })();
      const AD = 'slug',
        $l = [{ path: `${ct.Posts}/:${AD}`, component: qw }];
      let Jw = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({ imports: [wt.forChild($l), wt] })),
          e
        );
      })();
      const Hl = ot.object({ article: _r });
      let ki = (() => {
          var e = new WeakMap();
          class n {
            constructor(i) {
              Lt(this, e, { writable: !0, value: void 0 }), (this.http = i), Et(this, e, nr_apiUrl);
            }
            fetchArticle(i) {
              const u = `${qe(this, e)}${xn.ALL_FEEDS}/${i}`;
              return this.http.get(u).pipe((0, le.U)((f) => Hl.parse(f)));
            }
          }
          return (
            (n.ɵfac = function (i) {
              return new (i || n)(a.LFG(Ar));
            }),
            (n.ɵprov = a.Yz7({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        np = (() => {
          var e = new WeakMap();
          class n {
            constructor(i) {
              Lt(this, e, { writable: !0, value: void 0 }), (this.http = i), Et(this, e, nr_apiUrl);
            }
            deleteArticle(i) {
              const u = `${qe(this, e)}${xn.ALL_FEEDS}/${i}`;
              return this.http.delete(u);
            }
          }
          return (
            (n.ɵfac = function (i) {
              return new (i || n)(a.LFG(Ar));
            }),
            (n.ɵprov = a.Yz7({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        Ty = (() => {
          class e {
            constructor(t, i, u) {
              var f = this;
              (this.actions$ = t),
                (this.articleService = i),
                (this.router = u),
                (this.deleteArticle$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(k_),
                    un(({ slug: h }) =>
                      this.articleService.deleteArticle(h).pipe(
                        (0, le.U)(() => U_()),
                        (0, bt.K)(() => (0, we.of)(W0()))
                      )
                    )
                  )
                )),
                (this.redirectAfterDelete$ = Nt(
                  () =>
                    this.actions$.pipe(
                      Ht(U_),
                      Pt(
                        qt(function* () {
                          return yield f.router.navigateByUrl(ct.Home);
                        })
                      )
                    ),
                  { dispatch: !1 }
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(np), a.LFG(At));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Qw = (() => {
          class e {
            constructor(t, i) {
              (this.actions$ = t),
                (this.sharedArticleService = i),
                (this.getArticle$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(Mh),
                    un(({ slug: u }) =>
                      this.sharedArticleService.fetchArticle(u).pipe(
                        (0, le.U)(({ article: f }) => Y0({ article: f })),
                        (0, bt.K)(() => (0, we.of)(V_()))
                      )
                    )
                  )
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(ki));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        rp = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({
              providers: [ki, np],
              imports: [Zt, T.Aw.forFeature(Y_), Ir.forFeature([Qw, Ty]), Jw, Fs, go, Ah, F_, L_],
            })),
            e
          );
        })(),
        Oy = (() => {
          class e {
            constructor(t, i) {
              (this._renderer = t),
                (this._elementRef = i),
                (this.onChange = (u) => {}),
                (this.onTouched = () => {});
            }
            setProperty(t, i) {
              this._renderer.setProperty(this._elementRef.nativeElement, t, i);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            setDisabledState(t) {
              this.setProperty('disabled', t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(a.Qsj), a.Y36(a.SBq));
            }),
            (e.ɵdir = a.lG2({ type: e })),
            e
          );
        })(),
        Zs = (() => {
          class e extends Oy {}
          return (
            (e.ɵfac = (function () {
              let n;
              return function (i) {
                return (n || (n = a.n5z(e)))(i || e);
              };
            })()),
            (e.ɵdir = a.lG2({ type: e, features: [a.qOj] })),
            e
          );
        })();
      const wo = new a.OlP('NgValueAccessor'),
        Gl = { provide: wo, useExisting: (0, a.Gpc)(() => Ws), multi: !0 },
        Xw = new a.OlP('CompositionEventMode');
      let Ws = (() => {
        class e extends Oy {
          constructor(t, i, u) {
            super(t, i),
              (this._compositionMode = u),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function TD() {
                  const e = Z() ? Z().getUserAgent() : '';
                  return /android (\d+)/.test(e.toLowerCase());
                })());
          }
          writeValue(t) {
            this.setProperty('value', t ?? '');
          }
          _handleInput(t) {
            (!this._compositionMode || (this._compositionMode && !this._composing)) &&
              this.onChange(t);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(t) {
            (this._composing = !1), this._compositionMode && this.onChange(t);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Y36(a.Qsj), a.Y36(a.SBq), a.Y36(Xw, 8));
          }),
          (e.ɵdir = a.lG2({
            type: e,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (t, i) {
              1 & t &&
                a.NdJ('input', function (f) {
                  return i._handleInput(f.target.value);
                })('blur', function () {
                  return i.onTouched();
                })('compositionstart', function () {
                  return i._compositionStart();
                })('compositionend', function (f) {
                  return i._compositionEnd(f.target.value);
                });
            },
            features: [a._Bn([Gl]), a.qOj],
          })),
          e
        );
      })();
      const eS = !1;
      function Yo(e) {
        return null == e || (('string' == typeof e || Array.isArray(e)) && 0 === e.length);
      }
      function xy(e) {
        return null != e && 'number' == typeof e.length;
      }
      const Cn = new a.OlP('NgValidators'),
        Ui = new a.OlP('NgAsyncValidators'),
        ID =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class no {
        static min(n) {
          return (function op(e) {
            return (n) => {
              if (Yo(n.value) || Yo(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t < e ? { min: { min: e, actual: n.value } } : null;
            };
          })(n);
        }
        static max(n) {
          return (function OD(e) {
            return (n) => {
              if (Yo(n.value) || Yo(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t > e ? { max: { max: e, actual: n.value } } : null;
            };
          })(n);
        }
        static required(n) {
          return (function vr(e) {
            return Yo(e.value) ? { required: !0 } : null;
          })(n);
        }
        static requiredTrue(n) {
          return (function Ry(e) {
            return !0 === e.value ? null : { required: !0 };
          })(n);
        }
        static email(n) {
          return (function zl(e) {
            return Yo(e.value) || ID.test(e.value) ? null : { email: !0 };
          })(n);
        }
        static minLength(n) {
          return (function Fy(e) {
            return (n) =>
              Yo(n.value) || !xy(n.value)
                ? null
                : n.value.length < e
                ? { minlength: { requiredLength: e, actualLength: n.value.length } }
                : null;
          })(n);
        }
        static maxLength(n) {
          return (function PD(e) {
            return (n) =>
              xy(n.value) && n.value.length > e
                ? { maxlength: { requiredLength: e, actualLength: n.value.length } }
                : null;
          })(n);
        }
        static pattern(n) {
          return (function or(e) {
            if (!e) return Zl;
            let n, t;
            return (
              'string' == typeof e
                ? ((t = ''),
                  '^' !== e.charAt(0) && (t += '^'),
                  (t += e),
                  '$' !== e.charAt(e.length - 1) && (t += '$'),
                  (n = new RegExp(t)))
                : ((t = e.toString()), (n = e)),
              (i) => {
                if (Yo(i.value)) return null;
                const u = i.value;
                return n.test(u) ? null : { pattern: { requiredPattern: t, actualValue: u } };
              }
            );
          })(n);
        }
        static nullValidator(n) {
          return null;
        }
        static compose(n) {
          return Uy(n);
        }
        static composeAsync(n) {
          return sp(n);
        }
      }
      function Zl(e) {
        return null;
      }
      function Wl(e) {
        return null != e;
      }
      function Ny(e) {
        const n = (0, a.QGY)(e) ? (0, cn.D)(e) : e;
        if (eS && !(0, a.CqO)(n)) {
          let t = 'Expected async validator to return Promise or Observable.';
          throw (
            ('object' == typeof e &&
              (t += ' Are you using a synchronous validator where an async validator is expected?'),
            new a.vHH(-1101, t))
          );
        }
        return n;
      }
      function Ly(e) {
        let n = {};
        return (
          e.forEach((t) => {
            n = null != t ? { ...n, ...t } : n;
          }),
          0 === Object.keys(n).length ? null : n
        );
      }
      function Yl(e, n) {
        return n.map((t) => t(e));
      }
      function ip(e) {
        return e.map((n) =>
          (function ky(e) {
            return !e.validate;
          })(n)
            ? n
            : (t) => n.validate(t)
        );
      }
      function Uy(e) {
        if (!e) return null;
        const n = e.filter(Wl);
        return 0 == n.length
          ? null
          : function (t) {
              return Ly(Yl(t, n));
            };
      }
      function Kl(e) {
        return null != e ? Uy(ip(e)) : null;
      }
      function sp(e) {
        if (!e) return null;
        const n = e.filter(Wl);
        return 0 == n.length
          ? null
          : function (t) {
              return (function Iy(...e) {
                const n = (0, Ta.jO)(e),
                  { args: t, keys: i } = rf(e),
                  u = new Un.y((f) => {
                    const { length: h } = t;
                    if (!h) return void f.complete();
                    const _ = new Array(h);
                    let v = h,
                      C = h;
                    for (let w = 0; w < h; w++) {
                      let F = !1;
                      (0, wa.Xf)(t[w]).subscribe(
                        (0, fn.x)(
                          f,
                          (Q) => {
                            F || ((F = !0), C--), (_[w] = Q);
                          },
                          () => v--,
                          void 0,
                          () => {
                            (!v || !F) && (C || f.next(i ? Ng(i, _) : _), f.complete());
                          }
                        )
                      );
                    }
                  });
                return n ? u.pipe(Fg(n)) : u;
              })(Yl(t, n).map(Ny)).pipe((0, le.U)(Ly));
            };
      }
      function ap(e) {
        return null != e ? sp(ip(e)) : null;
      }
      function up(e, n) {
        return null === e ? [n] : Array.isArray(e) ? [...e, n] : [e, n];
      }
      function Vy(e) {
        return e._rawValidators;
      }
      function ql(e) {
        return e._rawAsyncValidators;
      }
      function Nr(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function Lr(e, n) {
        return Array.isArray(e) ? e.includes(n) : e === n;
      }
      function cp(e, n) {
        const t = Nr(n);
        return (
          Nr(e).forEach((u) => {
            Lr(t, u) || t.push(u);
          }),
          t
        );
      }
      function Jl(e, n) {
        return Nr(n).filter((t) => !Lr(e, t));
      }
      class lp {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(n) {
          (this._rawValidators = n || []), (this._composedValidatorFn = Kl(this._rawValidators));
        }
        _setAsyncValidators(n) {
          (this._rawAsyncValidators = n || []),
            (this._composedAsyncValidatorFn = ap(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(n) {
          this._onDestroyCallbacks.push(n);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((n) => n()), (this._onDestroyCallbacks = []);
        }
        reset(n) {
          this.control && this.control.reset(n);
        }
        hasError(n, t) {
          return !!this.control && this.control.hasError(n, t);
        }
        getError(n, t) {
          return this.control ? this.control.getError(n, t) : null;
        }
      }
      class Fn extends lp {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Vi extends lp {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class jy {
        constructor(n) {
          this._cd = n;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let Iu = (() => {
          class e extends jy {
            constructor(t) {
              super(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(Vi, 2));
            }),
            (e.ɵdir = a.lG2({
              type: e,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (t, i) {
                2 & t &&
                  a.ekj('ng-untouched', i.isUntouched)('ng-touched', i.isTouched)(
                    'ng-pristine',
                    i.isPristine
                  )('ng-dirty', i.isDirty)('ng-valid', i.isValid)('ng-invalid', i.isInvalid)(
                    'ng-pending',
                    i.isPending
                  );
              },
              features: [a.qOj],
            })),
            e
          );
        })(),
        Ys = (() => {
          class e extends jy {
            constructor(t) {
              super(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(Fn, 10));
            }),
            (e.ɵdir = a.lG2({
              type: e,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', ''],
              ],
              hostVars: 16,
              hostBindings: function (t, i) {
                2 & t &&
                  a.ekj('ng-untouched', i.isUntouched)('ng-touched', i.isTouched)(
                    'ng-pristine',
                    i.isPristine
                  )('ng-dirty', i.isDirty)('ng-valid', i.isValid)('ng-invalid', i.isInvalid)(
                    'ng-pending',
                    i.isPending
                  )('ng-submitted', i.isSubmitted);
              },
              features: [a.qOj],
            })),
            e
          );
        })();
      function fp(e, n) {
        return e ? `with name: '${n}'` : `at index: ${n}`;
      }
      const Hy = !1,
        ed = 'VALID',
        Pu = 'INVALID',
        Ks = 'PENDING',
        xu = 'DISABLED';
      function hp(e) {
        return (pp(e) ? e.validators : e) || null;
      }
      function Gy(e, n) {
        return (pp(n) ? n.asyncValidators : e) || null;
      }
      function pp(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      function jD(e, n, t) {
        const i = e.controls;
        if (!(n ? Object.keys(i) : i).length)
          throw new a.vHH(
            1e3,
            Hy
              ? (function UD(e) {
                  return `\n    There are no form controls registered with this ${
                    e ? 'group' : 'array'
                  } yet. If you're using ngModel,\n    you may want to check next tick (e.g. use setTimeout).\n  `;
                })(n)
              : ''
          );
        if (!i[t])
          throw new a.vHH(
            1001,
            Hy
              ? (function VD(e, n) {
                  return `Cannot find form control ${fp(e, n)}`;
                })(n, t)
              : ''
          );
      }
      function zy(e, n, t) {
        e._forEachChild((i, u) => {
          if (void 0 === t[u])
            throw new a.vHH(
              1002,
              Hy
                ? (function oS(e, n) {
                    return `Must supply a value for form control ${fp(e, n)}`;
                  })(n, u)
                : ''
            );
        });
      }
      class ji {
        constructor(n, t) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(n),
            this._assignAsyncValidators(t);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(n) {
          this._rawValidators = this._composedValidatorFn = n;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(n) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = n;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === ed;
        }
        get invalid() {
          return this.status === Pu;
        }
        get pending() {
          return this.status == Ks;
        }
        get disabled() {
          return this.status === xu;
        }
        get enabled() {
          return this.status !== xu;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(n) {
          this._assignValidators(n);
        }
        setAsyncValidators(n) {
          this._assignAsyncValidators(n);
        }
        addValidators(n) {
          this.setValidators(cp(n, this._rawValidators));
        }
        addAsyncValidators(n) {
          this.setAsyncValidators(cp(n, this._rawAsyncValidators));
        }
        removeValidators(n) {
          this.setValidators(Jl(n, this._rawValidators));
        }
        removeAsyncValidators(n) {
          this.setAsyncValidators(Jl(n, this._rawAsyncValidators));
        }
        hasValidator(n) {
          return Lr(this._rawValidators, n);
        }
        hasAsyncValidator(n) {
          return Lr(this._rawAsyncValidators, n);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(n = {}) {
          (this.touched = !0), this._parent && !n.onlySelf && this._parent.markAsTouched(n);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild((n) => n.markAllAsTouched());
        }
        markAsUntouched(n = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        markAsDirty(n = {}) {
          (this.pristine = !1), this._parent && !n.onlySelf && this._parent.markAsDirty(n);
        }
        markAsPristine(n = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        markAsPending(n = {}) {
          (this.status = Ks),
            !1 !== n.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !n.onlySelf && this._parent.markAsPending(n);
        }
        disable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = xu),
            (this.errors = null),
            this._forEachChild((i) => {
              i.disable({ ...n, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== n.emitEvent &&
              (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...n, skipPristineCheck: t }),
            this._onDisabledChange.forEach((i) => i(!0));
        }
        enable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = ed),
            this._forEachChild((i) => {
              i.enable({ ...n, onlySelf: !0 });
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent }),
            this._updateAncestors({ ...n, skipPristineCheck: t }),
            this._onDisabledChange.forEach((i) => i(!1));
        }
        _updateAncestors(n) {
          this._parent &&
            !n.onlySelf &&
            (this._parent.updateValueAndValidity(n),
            n.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(n) {
          this._parent = n;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(n = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === ed || this.status === Ks) && this._runAsyncValidator(n.emitEvent)),
            !1 !== n.emitEvent &&
              (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._parent && !n.onlySelf && this._parent.updateValueAndValidity(n);
        }
        _updateTreeValidity(n = { emitEvent: !0 }) {
          this._forEachChild((t) => t._updateTreeValidity(n)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? xu : ed;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(n) {
          if (this.asyncValidator) {
            (this.status = Ks), (this._hasOwnPendingAsyncValidator = !0);
            const t = Ny(this.asyncValidator(this));
            this._asyncValidationSubscription = t.subscribe((i) => {
              (this._hasOwnPendingAsyncValidator = !1), this.setErrors(i, { emitEvent: n });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(n, t = {}) {
          (this.errors = n), this._updateControlsErrors(!1 !== t.emitEvent);
        }
        get(n) {
          let t = n;
          return null == t || (Array.isArray(t) || (t = t.split('.')), 0 === t.length)
            ? null
            : t.reduce((i, u) => i && i._find(u), this);
        }
        getError(n, t) {
          const i = t ? this.get(t) : this;
          return i && i.errors ? i.errors[n] : null;
        }
        hasError(n, t) {
          return !!this.getError(n, t);
        }
        get root() {
          let n = this;
          for (; n._parent; ) n = n._parent;
          return n;
        }
        _updateControlsErrors(n) {
          (this.status = this._calculateStatus()),
            n && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(n);
        }
        _initObservables() {
          (this.valueChanges = new a.vpe()), (this.statusChanges = new a.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? xu
            : this.errors
            ? Pu
            : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Ks)
            ? Ks
            : this._anyControlsHaveStatus(Pu)
            ? Pu
            : ed;
        }
        _anyControlsHaveStatus(n) {
          return this._anyControls((t) => t.status === n);
        }
        _anyControlsDirty() {
          return this._anyControls((n) => n.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((n) => n.touched);
        }
        _updatePristine(n = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        _updateTouched(n = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        _registerOnCollectionChange(n) {
          this._onCollectionChange = n;
        }
        _setUpdateStrategy(n) {
          pp(n) && null != n.updateOn && (this._updateOn = n.updateOn);
        }
        _parentMarkedDirty(n) {
          return !n && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty();
        }
        _find(n) {
          return null;
        }
        _assignValidators(n) {
          (this._rawValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedValidatorFn = (function iS(e) {
              return Array.isArray(e) ? Kl(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(n) {
          (this._rawAsyncValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedAsyncValidatorFn = (function sS(e) {
              return Array.isArray(e) ? ap(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class Ru extends ji {
        constructor(n, t, i) {
          super(hp(t), Gy(i, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator });
        }
        registerControl(n, t) {
          return this.controls[n]
            ? this.controls[n]
            : ((this.controls[n] = t),
              t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange),
              t);
        }
        addControl(n, t, i = {}) {
          this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: i.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(n, t = {}) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        setControl(n, t, i = {}) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            t && this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: i.emitEvent }),
            this._onCollectionChange();
        }
        contains(n) {
          return this.controls.hasOwnProperty(n) && this.controls[n].enabled;
        }
        setValue(n, t = {}) {
          zy(this, !0, n),
            Object.keys(n).forEach((i) => {
              jD(this, !0, i),
                this.controls[i].setValue(n[i], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (Object.keys(n).forEach((i) => {
              const u = this.controls[i];
              u && u.patchValue(n[i], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = {}, t = {}) {
          this._forEachChild((i, u) => {
            i.reset(n[u], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren({}, (n, t, i) => ((n[i] = t.getRawValue()), n));
        }
        _syncPendingControls() {
          let n = this._reduceChildren(!1, (t, i) => !!i._syncPendingControls() || t);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _forEachChild(n) {
          Object.keys(this.controls).forEach((t) => {
            const i = this.controls[t];
            i && n(i, t);
          });
        }
        _setUpControls() {
          this._forEachChild((n) => {
            n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(n) {
          for (const [t, i] of Object.entries(this.controls))
            if (this.contains(t) && n(i)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, i, u) => ((i.enabled || this.disabled) && (t[u] = i.value), t)
          );
        }
        _reduceChildren(n, t) {
          let i = n;
          return (
            this._forEachChild((u, f) => {
              i = t(i, u, f);
            }),
            i
          );
        }
        _allControlsDisabled() {
          for (const n of Object.keys(this.controls)) if (this.controls[n].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(n) {
          return this.controls.hasOwnProperty(n) ? this.controls[n] : null;
        }
      }
      class Ko extends Ru {}
      const qo = new a.OlP('CallSetDisabledState', { providedIn: 'root', factory: () => qs }),
        qs = 'always';
      function Bi(e, n, t = qs) {
        Zy(e, n),
          n.valueAccessor.writeValue(e.value),
          (e.disabled || 'always' === t) && n.valueAccessor.setDisabledState?.(e.disabled),
          (function cS(e, n) {
            n.valueAccessor.registerOnChange((t) => {
              (e._pendingValue = t),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && Yy(e, n);
            });
          })(e, n),
          (function HD(e, n) {
            const t = (i, u) => {
              n.valueAccessor.writeValue(i), u && n.viewToModelUpdate(i);
            };
            e.registerOnChange(t),
              n._registerOnDestroy(() => {
                e._unregisterOnChange(t);
              });
          })(e, n),
          (function Wy(e, n) {
            n.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && Yy(e, n),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, n),
          (function uS(e, n) {
            if (n.valueAccessor.setDisabledState) {
              const t = (i) => {
                n.valueAccessor.setDisabledState(i);
              };
              e.registerOnDisabledChange(t),
                n._registerOnDestroy(() => {
                  e._unregisterOnDisabledChange(t);
                });
            }
          })(e, n);
      }
      function Js(e, n, t = !0) {
        const i = () => {};
        n.valueAccessor &&
          (n.valueAccessor.registerOnChange(i), n.valueAccessor.registerOnTouched(i)),
          gp(e, n),
          e && (n._invokeOnDestroyCallbacks(), e._registerOnCollectionChange(() => {}));
      }
      function $i(e, n) {
        e.forEach((t) => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(n);
        });
      }
      function Zy(e, n) {
        const t = Vy(e);
        null !== n.validator
          ? e.setValidators(up(t, n.validator))
          : 'function' == typeof t && e.setValidators([t]);
        const i = ql(e);
        null !== n.asyncValidator
          ? e.setAsyncValidators(up(i, n.asyncValidator))
          : 'function' == typeof i && e.setAsyncValidators([i]);
        const u = () => e.updateValueAndValidity();
        $i(n._rawValidators, u), $i(n._rawAsyncValidators, u);
      }
      function gp(e, n) {
        let t = !1;
        if (null !== e) {
          if (null !== n.validator) {
            const u = Vy(e);
            if (Array.isArray(u) && u.length > 0) {
              const f = u.filter((h) => h !== n.validator);
              f.length !== u.length && ((t = !0), e.setValidators(f));
            }
          }
          if (null !== n.asyncValidator) {
            const u = ql(e);
            if (Array.isArray(u) && u.length > 0) {
              const f = u.filter((h) => h !== n.asyncValidator);
              f.length !== u.length && ((t = !0), e.setAsyncValidators(f));
            }
          }
        }
        const i = () => {};
        return $i(n._rawValidators, i), $i(n._rawAsyncValidators, i), t;
      }
      function Yy(e, n) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          n.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function Qy(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      function Xy(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          'value' in e &&
          'disabled' in e
        );
      }
      const Fu = class extends ji {
        constructor(n = null, t, i) {
          super(hp(t), Gy(i, t)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(n),
            this._setUpdateStrategy(t),
            this._initObservables(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator }),
            pp(t) &&
              (t.nonNullable || t.initialValueIsDefault) &&
              (this.defaultValue = Xy(n) ? n.value : n);
        }
        setValue(n, t = {}) {
          (this.value = this._pendingValue = n),
            this._onChange.length &&
              !1 !== t.emitModelToViewChange &&
              this._onChange.forEach((i) => i(this.value, !1 !== t.emitViewToModelChange)),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          this.setValue(n, t);
        }
        reset(n = this.defaultValue, t = {}) {
          this._applyFormState(n),
            this.markAsPristine(t),
            this.markAsUntouched(t),
            this.setValue(this.value, t),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(n) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(n) {
          this._onChange.push(n);
        }
        _unregisterOnChange(n) {
          Qy(this._onChange, n);
        }
        registerOnDisabledChange(n) {
          this._onDisabledChange.push(n);
        }
        _unregisterOnDisabledChange(n) {
          Qy(this._onDisabledChange, n);
        }
        _forEachChild(n) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(n) {
          Xy(n)
            ? ((this.value = this._pendingValue = n.value),
              n.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = n);
        }
      };
      let o = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = a.lG2({
              type: e,
              selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
              hostAttrs: ['novalidate', ''],
            })),
            e
          );
        })(),
        p = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({})),
            e
          );
        })();
      const S = new a.OlP('NgModelWithFormControlWarning'),
        J = { provide: Fn, useExisting: (0, a.Gpc)(() => ue) };
      let ue = (() => {
        class e extends Fn {
          constructor(t, i, u) {
            super(),
              (this.callSetDisabledState = u),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new a.vpe()),
              this._setValidators(t),
              this._setAsyncValidators(i);
          }
          ngOnChanges(t) {
            this._checkFormPresent(),
              t.hasOwnProperty('form') &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (gp(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(t) {
            const i = this.form.get(t.path);
            return (
              Bi(i, t, this.callSetDisabledState),
              i.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(t),
              i
            );
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            Js(t.control || null, t, !1),
              (function _p(e, n) {
                const t = e.indexOf(n);
                t > -1 && e.splice(t, 1);
              })(this.directives, t);
          }
          addFormGroup(t) {
            this._setUpFormContainer(t);
          }
          removeFormGroup(t) {
            this._cleanUpFormContainer(t);
          }
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          addFormArray(t) {
            this._setUpFormContainer(t);
          }
          removeFormArray(t) {
            this._cleanUpFormContainer(t);
          }
          getFormArray(t) {
            return this.form.get(t.path);
          }
          updateModel(t, i) {
            this.form.get(t.path).setValue(i);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              (function ZD(e, n) {
                e._syncPendingControls(),
                  n.forEach((t) => {
                    const i = t.control;
                    'submit' === i.updateOn &&
                      i._pendingChange &&
                      (t.viewToModelUpdate(i._pendingValue), (i._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(t),
              'dialog' === t?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((t) => {
              const i = t.control,
                u = this.form.get(t.path);
              i !== u &&
                (Js(i || null, t),
                ((e) => e instanceof Fu)(u) &&
                  (Bi(u, t, this.callSetDisabledState), (t.control = u)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(t) {
            const i = this.form.get(t.path);
            (function Ky(e, n) {
              Zy(e, n);
            })(i, t),
              i.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(t) {
            if (this.form) {
              const i = this.form.get(t.path);
              i &&
                (function GD(e, n) {
                  return gp(e, n);
                })(i, t) &&
                i.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            Zy(this.form, this), this._oldForm && gp(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Y36(Cn, 10), a.Y36(Ui, 10), a.Y36(qo, 8));
          }),
          (e.ɵdir = a.lG2({
            type: e,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (t, i) {
              1 & t &&
                a.NdJ('submit', function (f) {
                  return i.onSubmit(f);
                })('reset', function () {
                  return i.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [a._Bn([J]), a.qOj, a.TTD],
          })),
          e
        );
      })();
      const kt = { provide: Vi, useExisting: (0, a.Gpc)(() => Mt) };
      let Mt = (() => {
          class e extends Vi {
            set isDisabled(t) {}
            constructor(t, i, u, f, h) {
              super(),
                (this._ngModelWarningConfig = h),
                (this._added = !1),
                (this.update = new a.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = t),
                this._setValidators(i),
                this._setAsyncValidators(u),
                (this.valueAccessor = (function od(e, n) {
                  if (!n) return null;
                  let t, i, u;
                  return (
                    Array.isArray(n),
                    n.forEach((f) => {
                      f.constructor === Ws
                        ? (t = f)
                        : (function mp(e) {
                            return Object.getPrototypeOf(e.constructor) === Zs;
                          })(f)
                        ? (i = f)
                        : (u = f);
                    }),
                    u || i || t || null
                  );
                })(0, f));
            }
            ngOnChanges(t) {
              this._added || this._setUpControl(),
                (function rd(e, n) {
                  if (!e.hasOwnProperty('model')) return !1;
                  const t = e.model;
                  return !!t.isFirstChange() || !Object.is(n, t.currentValue);
                })(t, this.viewModel) &&
                  ((this.viewModel = this.model), this.formDirective.updateModel(this, this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            viewToModelUpdate(t) {
              (this.viewModel = t), this.update.emit(t);
            }
            get path() {
              return (function td(e, n) {
                return [...n.path, e];
              })(null == this.name ? this.name : this.name.toString(), this._parent);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
            _setUpControl() {
              this._checkParentType(),
                (this.control = this.formDirective.addControl(this)),
                (this._added = !0);
            }
          }
          return (
            (e._ngModelWarningSentOnce = !1),
            (e.ɵfac = function (t) {
              return new (t || e)(
                a.Y36(Fn, 13),
                a.Y36(Cn, 10),
                a.Y36(Ui, 10),
                a.Y36(wo, 10),
                a.Y36(S, 8)
              );
            }),
            (e.ɵdir = a.lG2({
              type: e,
              selectors: [['', 'formControlName', '']],
              inputs: {
                name: ['formControlName', 'name'],
                isDisabled: ['disabled', 'isDisabled'],
                model: ['ngModel', 'model'],
              },
              outputs: { update: 'ngModelChange' },
              features: [a._Bn([kt]), a.qOj, a.TTD],
            })),
            e
          );
        })(),
        jb = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [p] })),
            e
          );
        })();
      class IS extends ji {
        constructor(n, t, i) {
          super(hp(t), Gy(i, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator });
        }
        at(n) {
          return this.controls[this._adjustIndex(n)];
        }
        push(n, t = {}) {
          this.controls.push(n),
            this._registerControl(n),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        insert(n, t, i = {}) {
          this.controls.splice(n, 0, t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: i.emitEvent });
        }
        removeAt(n, t = {}) {
          let i = this._adjustIndex(n);
          i < 0 && (i = 0),
            this.controls[i] && this.controls[i]._registerOnCollectionChange(() => {}),
            this.controls.splice(i, 1),
            this.updateValueAndValidity({ emitEvent: t.emitEvent });
        }
        setControl(n, t, i = {}) {
          let u = this._adjustIndex(n);
          u < 0 && (u = 0),
            this.controls[u] && this.controls[u]._registerOnCollectionChange(() => {}),
            this.controls.splice(u, 1),
            t && (this.controls.splice(u, 0, t), this._registerControl(t)),
            this.updateValueAndValidity({ emitEvent: i.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(n, t = {}) {
          zy(this, !1, n),
            n.forEach((i, u) => {
              jD(this, !1, u), this.at(u).setValue(i, { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (n.forEach((i, u) => {
              this.at(u) && this.at(u).patchValue(i, { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = [], t = {}) {
          this._forEachChild((i, u) => {
            i.reset(n[u], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map((n) => n.getRawValue());
        }
        clear(n = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }));
        }
        _adjustIndex(n) {
          return n < 0 ? n + this.length : n;
        }
        _syncPendingControls() {
          let n = this.controls.reduce((t, i) => !!i._syncPendingControls() || t, !1);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _forEachChild(n) {
          this.controls.forEach((t, i) => {
            n(t, i);
          });
        }
        _updateValue() {
          this.value = this.controls.filter((n) => n.enabled || this.disabled).map((n) => n.value);
        }
        _anyControls(n) {
          return this.controls.some((t) => t.enabled && n(t));
        }
        _setUpControls() {
          this._forEachChild((n) => this._registerControl(n));
        }
        _allControlsDisabled() {
          for (const n of this.controls) if (n.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(n) {
          n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(n) {
          return this.at(n) ?? null;
        }
      }
      function OS(e) {
        return (
          !!e && (void 0 !== e.asyncValidators || void 0 !== e.validators || void 0 !== e.updateOn)
        );
      }
      let ev = (() => {
          class e {
            constructor() {
              this.useNonNullable = !1;
            }
            get nonNullable() {
              const t = new e();
              return (t.useNonNullable = !0), t;
            }
            group(t, i = null) {
              const u = this._reduceControls(t);
              let f = {};
              return (
                OS(i)
                  ? (f = i)
                  : null !== i &&
                    ((f.validators = i.validator), (f.asyncValidators = i.asyncValidator)),
                new Ru(u, f)
              );
            }
            record(t, i = null) {
              const u = this._reduceControls(t);
              return new Ko(u, i);
            }
            control(t, i, u) {
              let f = {};
              return this.useNonNullable
                ? (OS(i) ? (f = i) : ((f.validators = i), (f.asyncValidators = u)),
                  new Fu(t, { ...f, nonNullable: !0 }))
                : new Fu(t, i, u);
            }
            array(t, i, u) {
              const f = t.map((h) => this._createControl(h));
              return new IS(f, i, u);
            }
            _reduceControls(t) {
              const i = {};
              return (
                Object.keys(t).forEach((u) => {
                  i[u] = this._createControl(t[u]);
                }),
                i
              );
            }
            _createControl(t) {
              return t instanceof Fu || t instanceof ji
                ? t
                : Array.isArray(t)
                ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null)
                : this.control(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        eC = (() => {
          class e {
            static withConfig(t) {
              return {
                ngModule: e,
                providers: [
                  { provide: S, useValue: t.warnOnNgModelWithFormControl ?? 'always' },
                  { provide: qo, useValue: t.callSetDisabledState ?? qs },
                ],
              };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [jb] })),
            e
          );
        })();
      var tv = E(8372);
      const tC = (0, T.PH)(gn.LOGIN, (0, T.Ky)()),
        nC = (0, T.PH)(gn.LOGIN_SUCCESS, (0, T.Ky)()),
        PS = (0, T.PH)(gn.REGISTER_FAILURE, (0, T.Ky)()),
        xS = Rs.pick({ email: !0, password: !0 }),
        Bb = ot.object({ user: xS });
      let Lu = (() => {
          class e {
            constructor() {}
            getErrorsMap(t) {
              return t.success
                ? null
                : Object.entries(t.error.formErrors.fieldErrors).reduce(
                    (f, [h, _]) => ((f[h] = _.filter(Boolean)), f),
                    {}
                  );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        nv = (() => {
          class e {
            constructor() {}
            getActiveFormErrors(t) {
              return t.pipe(
                (0, le.U)((i) =>
                  Object.fromEntries(Object.entries(i).filter(([u, f]) => Boolean(f)))
                )
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      function $b(e, n) {
        if ((1 & e && (a.TgZ(0, 'li'), a._uU(1), a.qZA()), 2 & e)) {
          const t = n.$implicit;
          a.xp6(1), a.Oqu(t);
        }
      }
      let yp = (() => {
        class e {
          ngOnChanges() {
            this.errorMessagesProps &&
              (this.errorMessages = Object.keys(this.errorMessagesProps).map(
                (t) => `${t}: ${this.errorMessagesProps[t].join(', ')}`
              ));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ma-error-messages']],
            inputs: { errorMessagesProps: ['errorMessages', 'errorMessagesProps'] },
            features: [a.TTD],
            decls: 2,
            vars: 1,
            consts: [
              [1, 'error-messages'],
              [4, 'ngFor', 'ngForOf'],
            ],
            template: function (t, i) {
              1 & t && (a.TgZ(0, 'ul', 0), a.YNc(1, $b, 2, 1, 'li', 1), a.qZA()),
                2 & t && (a.xp6(1), a.Q6J('ngForOf', i.errorMessages));
            },
            dependencies: [Kn],
          })),
          e
        );
      })();
      function Hb(e, n) {
        if (
          (1 & e && (a.ynx(0), a._UZ(1, 'ma-error-messages', 12), a.ALo(2, 'async'), a.BQk()),
          2 & e)
        ) {
          const t = a.oxw();
          a.xp6(1), a.Q6J('errorMessages', a.lcZ(2, 1, t.errorMessages$));
        }
      }
      const Gb = function (e) {
        return ['/', e];
      };
      let zb = (() => {
        class e {
          constructor(t, i, u, f) {
            (this.fb = t),
              (this.store = i),
              (this.zodService = u),
              (this.controlFormService = f),
              (this.HttpLinks = ct);
          }
          ngOnInit() {
            this.initializeValues(), this.initializeForm();
          }
          initializeValues() {
            this.isSubmitting$ = this.store.select(X_);
          }
          initializeForm() {
            (this.form = this.fb.group({ email: ['', no.required], password: ['', no.required] })),
              this.bindErrorsStream();
          }
          bindErrorsStream() {
            const t = this.store.pipe((0, T.Ys)(ey)),
              i = this.form.valueChanges.pipe(
                (0, tv.b)(300),
                this.controlFormService.getActiveFormErrors,
                (0, le.U)((u) => this.zodService.getErrorsMap(xS.safeParse(u)))
              );
            this.errorMessages$ = er([t, i]).pipe(
              (0, le.U)(([u, f]) => {
                const h = { ...(u ?? {}), ...(f ?? {}) };
                return Object.keys(h).length ? h : null;
              }),
              bl({ refCount: !0 })
            );
          }
          onSubmit(t) {
            const i = Bb.parse({ user: this.form.value });
            this.store.dispatch(tC({ request: i }));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Y36(ev), a.Y36(T.yh), a.Y36(Lu), a.Y36(nv));
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ma-login']],
            decls: 20,
            vars: 10,
            consts: [
              [1, 'auth-page'],
              [1, 'container', 'page'],
              [1, 'row'],
              [1, 'col', 'col-xs-12', 'col-md-6', 'offset-md-3'],
              [1, 'text-xs-center'],
              [3, 'routerLink'],
              [4, 'ngIf'],
              [3, 'formGroup', 'ngSubmit'],
              [1, 'form-group'],
              [
                'type',
                'email',
                'placeholder',
                'Email',
                'formControlName',
                'email',
                1,
                'form-control',
                'form-control-lg',
              ],
              [
                'type',
                'password',
                'placeholder',
                'Password',
                'formControlName',
                'password',
                1,
                'form-control',
                'form-control-lg',
              ],
              ['type', 'submit', 1, 'btn', 'btn-primary', 'pull-xs-right', 3, 'disabled'],
              [3, 'errorMessages'],
            ],
            template: function (t, i) {
              1 & t &&
                (a.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3)(4, 'h1', 4),
                a._uU(5, 'Sign In'),
                a.qZA(),
                a.TgZ(6, 'p', 4)(7, 'a', 5),
                a._uU(8, 'Need an account?'),
                a.qZA()(),
                a.YNc(9, Hb, 3, 3, 'ng-container', 6),
                a.ALo(10, 'async'),
                a.TgZ(11, 'form', 7),
                a.NdJ('ngSubmit', function (f) {
                  return i.onSubmit(f);
                }),
                a.TgZ(12, 'fieldset')(13, 'fieldset', 8),
                a._UZ(14, 'input', 9),
                a.qZA(),
                a.TgZ(15, 'fieldset', 8),
                a._UZ(16, 'input', 10),
                a.qZA(),
                a.TgZ(17, 'button', 11),
                a.ALo(18, 'async'),
                a._uU(19, ' Sign In '),
                a.qZA()()()()()()()),
                2 & t &&
                  (a.xp6(7),
                  a.Q6J('routerLink', a.VKq(8, Gb, i.HttpLinks.Register)),
                  a.xp6(2),
                  a.Q6J('ngIf', a.lcZ(10, 4, i.errorMessages$)),
                  a.xp6(2),
                  a.Q6J('formGroup', i.form),
                  a.xp6(6),
                  a.Q6J('disabled', a.lcZ(18, 6, i.isSubmitting$)));
            },
            dependencies: [sn, o, Ws, Iu, Ys, ue, Mt, jn, yp, He],
          })),
          e
        );
      })();
      const rC = (0, T.PH)(gn.REGISTER, (0, T.Ky)()),
        oC = (0, T.PH)(gn.REGISTER_SUCCESS, (0, T.Ky)()),
        RS = (0, T.PH)(gn.REGISTER_FAILURE, (0, T.Ky)()),
        FS = Rs.pick({ email: !0, username: !0, password: !0 }),
        Zb = ot.object({ user: FS });
      function Wb(e, n) {
        if (
          (1 & e && (a.ynx(0), a._UZ(1, 'ma-error-messages', 13), a.ALo(2, 'async'), a.BQk()),
          2 & e)
        ) {
          const t = a.oxw();
          a.xp6(1), a.Q6J('errorMessages', a.lcZ(2, 1, t.errorMessages$));
        }
      }
      const Yb = function (e) {
        return ['/', e];
      };
      let Kb = (() => {
        class e {
          constructor(t, i, u) {
            (this.fb = t), (this.store = i), (this.zodService = u), (this.HttpLinks = ct);
          }
          ngOnInit() {
            this.initializeForm(), this.initializeValues();
          }
          initializeForm() {
            (this.form = this.fb.group({
              username: ['', no.required],
              email: ['', no.required],
              password: ['', no.required],
            })),
              this.bindErrorsStream();
          }
          initializeValues() {
            this.isSubmitting$ = this.store.pipe((0, T.Ys)(X_));
          }
          bindErrorsStream() {
            const t = this.store.pipe((0, T.Ys)(ey)),
              i = this.form.valueChanges.pipe(
                (0, tv.b)(300),
                (0, le.U)((u) =>
                  Object.fromEntries(Object.entries(u).filter(([f, h]) => Boolean(h)))
                ),
                (0, le.U)((u) => this.zodService.getErrorsMap(FS.safeParse(u)))
              );
            this.errorMessages$ = er([t, i]).pipe(
              (0, le.U)(([u, f]) => {
                const h = { ...(u ?? {}), ...(f ?? {}) };
                return Object.keys(h).length ? h : null;
              }),
              bl({ refCount: !0 })
            );
          }
          formSubmit(t) {
            const i = Zb.parse({ user: this.form.value });
            this.store.dispatch(rC({ request: i }));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Y36(ev), a.Y36(T.yh), a.Y36(Lu));
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ma-register']],
            decls: 22,
            vars: 10,
            consts: [
              [1, 'auth-page'],
              [1, 'container', 'page'],
              [1, 'row'],
              [1, 'col-md-6', 'col-xs-12', 'offset-md-3'],
              [1, 'text-xs-center'],
              [3, 'routerLink'],
              [4, 'ngIf'],
              [3, 'formGroup', 'ngSubmit'],
              [1, 'form-group'],
              [
                'type',
                'text',
                'placeholder',
                'Username',
                'formControlName',
                'username',
                1,
                'form-control',
                'form-control-lg',
              ],
              [
                'type',
                'email',
                'placeholder',
                'Email',
                'formControlName',
                'email',
                1,
                'form-control',
                'form-control-lg',
              ],
              [
                'type',
                'password',
                'placeholder',
                'Password',
                'formControlName',
                'password',
                1,
                'form-control',
                'form-control-lg',
              ],
              ['type', 'submit', 1, 'btn', 'btn-primary', 'pull-xs-right', 3, 'disabled'],
              [3, 'errorMessages'],
            ],
            template: function (t, i) {
              1 & t &&
                (a.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3)(4, 'h1', 4),
                a._uU(5, 'Sign Up'),
                a.qZA(),
                a.TgZ(6, 'p', 4)(7, 'a', 5),
                a._uU(8, 'Have an account?'),
                a.qZA()(),
                a.YNc(9, Wb, 3, 3, 'ng-container', 6),
                a.ALo(10, 'async'),
                a.TgZ(11, 'form', 7),
                a.NdJ('ngSubmit', function (f) {
                  return i.formSubmit(f);
                }),
                a.TgZ(12, 'fieldset')(13, 'fieldset', 8),
                a._UZ(14, 'input', 9),
                a.qZA(),
                a.TgZ(15, 'fieldset', 8),
                a._UZ(16, 'input', 10),
                a.qZA(),
                a.TgZ(17, 'fieldset', 8),
                a._UZ(18, 'input', 11),
                a.qZA(),
                a.TgZ(19, 'button', 12),
                a.ALo(20, 'async'),
                a._uU(21, ' Sign Up '),
                a.qZA()()()()()()()),
                2 & t &&
                  (a.xp6(7),
                  a.Q6J('routerLink', a.VKq(8, Yb, i.HttpLinks.Login)),
                  a.xp6(2),
                  a.Q6J('ngIf', a.lcZ(10, 4, i.errorMessages$)),
                  a.xp6(2),
                  a.Q6J('formGroup', i.form),
                  a.xp6(8),
                  a.Q6J('disabled', a.lcZ(20, 6, i.isSubmitting$)));
            },
            dependencies: [sn, o, Ws, Iu, Ys, ue, Mt, jn, yp, He],
          })),
          e
        );
      })();
      const qb = [
        { path: ct.Register, component: Kb },
        { path: ct.Login, component: zb },
      ];
      let Jb = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [wt.forChild(qb), wt] })),
            e
          );
        })(),
        Qs = (() => {
          class e {
            set(t, i) {
              try {
                localStorage.setItem(t, JSON.stringify(i));
              } catch (u) {
                console.error('Error saving to localStorage: ', u);
              }
            }
            get(t) {
              try {
                const i = localStorage.getItem(t);
                return null === i ? null : JSON.parse(i);
              } catch (i) {
                return console.error('Error getting data from localStorage: ', i), null;
              }
            }
            remove(t) {
              try {
                localStorage.removeItem(t);
              } catch (i) {
                console.error(`Error removing ${t} item from localStorage: `, i);
              }
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        vp = (() => {
          var e = new WeakMap();
          class n {
            constructor(i) {
              Lt(this, e, { writable: !0, value: void 0 }), (this.http = i), Et(this, e, nr_apiUrl);
            }
            getUser(i) {
              return pu.parse(i.user);
            }
            register(i) {
              const u = qe(this, e) + '/users';
              return this.http.post(u, i).pipe((0, le.U)(this.getUser));
            }
            login(i) {
              const u = qe(this, e) + '/users/login';
              return this.http.post(u, i).pipe((0, le.U)(this.getUser));
            }
            fetchUserByToken() {
              const i = qe(this, e) + '/user';
              return this.http.get(i).pipe((0, le.U)(this.getUser));
            }
            updateUserData(i) {
              const u = qe(this, e) + '/user';
              return this.http.put(u, i).pipe((0, le.U)(this.getUser));
            }
          }
          return (
            (n.ɵfac = function (i) {
              return new (i || n)(a.LFG(Ar));
            }),
            (n.ɵprov = a.Yz7({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        Qb = (() => {
          class e {
            constructor(t, i) {
              (this.actions$ = t),
                (this.router = i),
                (this.redirectIfAnonymous$ = Nt(
                  () =>
                    this.actions$.pipe(
                      Ht(Bl),
                      Pt(({ isAnonymous: u }) => {
                        u && this.router.navigateByUrl(ct.Login);
                      })
                    ),
                  { dispatch: !1 }
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(At));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const iC = (0, T.PH)(gn.FETCH_USER_BY_TOKEN),
        NS = (0, T.PH)(gn.FETCH_USER_BY_TOKEN_SUCCESS, (0, T.Ky)()),
        sC = (0, T.PH)(gn.FETCH_USER_BY_TOKEN_FAILURE);
      var Hi = (() => (
        (function (e) {
          e.Token = '[ma]-accessToken';
        })(Hi || (Hi = {})),
        Hi
      ))();
      let Xb = (() => {
        class e {
          constructor(t, i, u) {
            (this.actions$ = t),
              (this.authService = i),
              (this.persistentService = u),
              (this.fetchUser$ = Nt(() =>
                this.actions$.pipe(
                  Ht(iC),
                  un(() =>
                    this.persistentService.get(Hi.Token)
                      ? this.authService.fetchUserByToken().pipe(
                          (0, le.U)((h) => {
                            const _ = pu.parse(h);
                            return NS({ currentUser: _ });
                          }),
                          (0, bt.K)((h) => (0, we.of)(sC()))
                        )
                      : (0, we.of)(sC())
                  )
                )
              ));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(vn), a.LFG(vp), a.LFG(Qs));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const eA = ot.record(ot.array(ot.string())),
        sd = ot.object({ errors: eA }),
        tA = ot.object({ error: ot.object({ message: ot.string() }) });
      let nA = (() => {
          class e {
            constructor(t, i, u, f) {
              (this.actions$ = t),
                (this.authService = i),
                (this.persistentService = u),
                (this.router = f),
                (this.login$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(tC),
                    un(({ request: h }) =>
                      this.authService.login(h).pipe(
                        (0, le.U)(
                          (_) => (
                            this.persistentService.set(Hi.Token, _.token), nC({ currentUser: _ })
                          )
                        ),
                        (0, bt.K)((_) => {
                          const v = sd.parse(_.error);
                          return (0, we.of)(PS(v));
                        })
                      )
                    )
                  )
                )),
                (this.redirectToHome$ = Nt(
                  () =>
                    this.actions$.pipe(
                      Ht(nC),
                      Pt(() => {
                        this.router.navigateByUrl(ct.Home);
                      })
                    ),
                  { dispatch: !1 }
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(vp), a.LFG(Qs), a.LFG(At));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        rA = (() => {
          class e {
            constructor(t, i, u) {
              (this.actions$ = t),
                (this.persistentService = i),
                (this.router = u),
                (this.logout$ = Nt(
                  () =>
                    this.actions$.pipe(
                      Ht(jl),
                      Pt(() => {
                        this.persistentService.remove(Hi.Token), this.router.navigateByUrl(ct.Home);
                      })
                    ),
                  { dispatch: !1 }
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(Qs), a.LFG(At));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        oA = (() => {
          class e {
            constructor(t, i, u, f) {
              (this.actions$ = t),
                (this.authService = i),
                (this.persistentService = u),
                (this.router = f),
                (this.register$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(rC),
                    un(({ request: h }) =>
                      this.authService.register(h).pipe(
                        (0, le.U)(
                          (_) => (
                            this.persistentService.set(Hi.Token, _.token), oC({ currentUser: _ })
                          )
                        ),
                        (0, bt.K)((_) => {
                          const v = sd.parse(_.error);
                          return (0, we.of)(RS(v));
                        })
                      )
                    )
                  )
                )),
                (this.redirectToHome$ = Nt(
                  () =>
                    this.actions$.pipe(
                      Ht(oC),
                      Pt(() => {
                        this.router.navigateByUrl(ct.Home);
                      })
                    ),
                  { dispatch: !1 }
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(vp), a.LFG(Qs), a.LFG(At));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const aC = (0, T.PH)(gn.UPDATE_USER, (0, T.Ky)()),
        rv = (0, T.PH)(gn.UPDATE_USER_SUCCESS, (0, T.Ky)()),
        LS = (0, T.PH)(gn.UPDATE_USER_FAILURE, (0, T.Ky)());
      let iA = (() => {
        class e {
          constructor(t, i, u, f) {
            (this.actions$ = t),
              (this.authService = i),
              (this.router = u),
              (this.persistentService = f),
              (this.updateUser$ = Nt(() =>
                this.actions$.pipe(
                  Ht(aC),
                  un(({ request: h }) =>
                    this.authService.updateUserData(h).pipe(
                      (0, le.U)((_) => rv({ currentUser: _ })),
                      (0, bt.K)((_) => {
                        const v = sd.parse(_.error);
                        return (0, we.of)(LS(v));
                      })
                    )
                  )
                )
              )),
              (this.updateTokenAfterChanges$ = Nt(
                () =>
                  this.actions$.pipe(
                    Ht(rv),
                    Pt(({ currentUser: { username: h, token: _ } }) => {
                      this.persistentService.set(Hi.Token, _),
                        this.router.navigateByUrl(`/${ct.Profiles}/${h}`);
                    })
                  ),
                { dispatch: !1 }
              ));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.LFG(vn), a.LFG(vp), a.LFG(At), a.LFG(Qs));
          }),
          (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const kS = {
          isSubmitting: !1,
          isLoading: !1,
          currentUser: null,
          isLoggedIn: null,
          validationErrors: null,
        },
        sA = (0, T.Lq)(
          kS,
          (0, T.on)(rC, (e) =>
            dt(e, (n) => {
              (n.isSubmitting = !0), (n.validationErrors = null);
            })
          ),
          (0, T.on)(oC, (e, { currentUser: n }) =>
            dt(e, (t) => {
              (t.isLoggedIn = !0), (t.isSubmitting = !1), (t.currentUser = n);
            })
          ),
          (0, T.on)(RS, (e, { errors: n }) =>
            dt(e, (t) => {
              (t.isSubmitting = !1), (t.validationErrors = n);
            })
          ),
          (0, T.on)(tC, (e) =>
            dt(e, (n) => {
              (n.isSubmitting = !0), (n.validationErrors = null);
            })
          ),
          (0, T.on)(nC, (e, { currentUser: n }) =>
            dt(e, (t) => {
              (t.isLoggedIn = !0), (t.isSubmitting = !1), (t.currentUser = n);
            })
          ),
          (0, T.on)(PS, (e, { errors: n }) =>
            dt(e, (t) => {
              (t.isSubmitting = !1), (t.validationErrors = n);
            })
          ),
          (0, T.on)(iC, (e) =>
            dt(e, (n) => {
              n.isLoading = !0;
            })
          ),
          (0, T.on)(NS, (e, { currentUser: n }) =>
            dt(e, (t) => {
              (t.isLoading = !1), (t.isLoggedIn = !0), (t.currentUser = n);
            })
          ),
          (0, T.on)(sC, (e) =>
            dt(e, (n) => {
              (n.isLoading = !1), (n.isLoggedIn = !1), (n.currentUser = null);
            })
          ),
          (0, T.on)(rv, (e, { currentUser: n }) =>
            dt(e, (t) => {
              t.currentUser = n;
            })
          ),
          (0, T.on)(jl, () =>
            dt(kS, (e) => {
              e.isLoggedIn = !1;
            })
          )
        );
      function aA(e, n) {
        return sA(e, n);
      }
      let uA = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({
              providers: [vp, Lu, Qs, nv],
              imports: [
                Zt,
                eC,
                T.Aw.forFeature(ln.AUTH, aA),
                Ir.forFeature([oA, nA, Xb, iA, rA, Qb]),
                Jb,
                go,
              ],
            })),
            e
          );
        })(),
        US = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ providers: [nv, Lu], imports: [Zt, go, eC] })),
            e
          );
        })();
      var ad = (() => (
        (function (e) {
          (e.CREATE_ARTICLE = '[Create Article] Create article'),
            (e.CREATE_ARTICLE_SUCCESS = '[Create Article] Create article success'),
            (e.CREATE_ARTICLE_FAILURE = '[Create Article] Create article failure');
        })(ad || (ad = {})),
        ad
      ))();
      const uC = (0, T.PH)(ad.CREATE_ARTICLE, (0, T.Ky)()),
        cC = (0, T.PH)(ad.CREATE_ARTICLE_SUCCESS, (0, T.Ky)()),
        VS = (0, T.PH)(ad.CREATE_ARTICLE_FAILURE, (0, T.Ky)()),
        jS = (0, T.ZF)(ln.ARTICLE_FORM),
        cA = (0, T.P1)(jS, (e) => e.isSubmitting),
        lA = (0, T.P1)(jS, (e) => e.validationErrors),
        dA = yo.extend({ tagList: ot.string() });
      function fA(e, n) {
        if ((1 & e && (a._UZ(0, 'ma-error-messages', 12), a.ALo(1, 'async')), 2 & e)) {
          const t = a.oxw();
          a.Q6J('errorMessages', a.lcZ(1, 1, t.errors$));
        }
      }
      let BS = (() => {
          class e {
            set _errorsMapSetter(t) {
              this.errorsMapProps$.next(t);
            }
            constructor(t, i, u) {
              (this.fb = t),
                (this.controlFormService = i),
                (this.zodService = u),
                (this.errorsMapProps$ = new Or.X(null)),
                (this.articleSubmitEvent = new a.vpe());
            }
            ngOnInit() {
              this.initializeForm(), this.initializeListeners();
            }
            initializeForm() {
              const { title: t, description: i, body: u, tagList: f } = this.initialValuesProps;
              this.form = this.fb.group({
                title: [t, no.required],
                description: [i, no.required],
                body: [u, no.required],
                tagList: [f.join(' '), no.required],
              });
            }
            initializeListeners() {
              const t = this.form.valueChanges.pipe(
                (0, tv.b)(300),
                this.controlFormService.getActiveFormErrors,
                (0, le.U)((i) => this.zodService.getErrorsMap(dA.safeParse(i)))
              );
              this.errors$ = (0, Ca.T)(this.errorsMapProps$.asObservable(), t).pipe(
                bl({ refCount: !0 })
              );
            }
            onFormSubmit() {
              const t = this.form.value,
                i = Object.entries(t).some(([_, v]) => !v.trim());
              if (this.form.invalid || i)
                return this.errorsMapProps$.next({ 'empty form': ['fields are required'] });
              const { tagList: u, ...f } = t,
                h = yo.parse({ ...f, tagList: u.trim().split(' ') });
              this.articleSubmitEvent.emit(h);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(ev), a.Y36(nv), a.Y36(Lu));
            }),
            (e.ɵcmp = a.Xpm({
              type: e,
              selectors: [['ma-article-form']],
              inputs: {
                _errorsMapSetter: ['errorsMap', '_errorsMapSetter'],
                initialValuesProps: ['initialValues', 'initialValuesProps'],
                isSubmittingProps: ['isSubmitting', 'isSubmittingProps'],
              },
              outputs: { articleSubmitEvent: 'articleSubmit' },
              decls: 19,
              vars: 7,
              consts: [
                [1, 'editor-page'],
                [1, 'container', 'page'],
                [1, 'row'],
                [1, 'col-md-10', 'offset-md-1', 'col-xs-12'],
                [3, 'errorMessages', 4, 'ngIf'],
                [3, 'formGroup', 'ngSubmit'],
                [1, 'form-group'],
                [
                  'type',
                  'text',
                  'formControlName',
                  'title',
                  'placeholder',
                  'Title',
                  1,
                  'form-control',
                  'form-control-lg',
                ],
                [
                  'type',
                  'text',
                  'formControlName',
                  'description',
                  'placeholder',
                  'What is the post about?',
                  1,
                  'form-control',
                  'form-control-lg',
                ],
                [
                  'formControlName',
                  'body',
                  'placeholder',
                  'Write your post',
                  'rows',
                  '6',
                  1,
                  'form-control',
                  'form-control-lg',
                ],
                [
                  'type',
                  'text',
                  'formControlName',
                  'tagList',
                  'placeholder',
                  'Enter Tags',
                  1,
                  'form-control',
                  'form-control-lg',
                ],
                [
                  'type',
                  'submit',
                  1,
                  'btn',
                  'btn-lg',
                  'pull-xs-right',
                  'btn-primary',
                  3,
                  'disabled',
                ],
                [3, 'errorMessages'],
              ],
              template: function (t, i) {
                1 & t &&
                  (a.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3),
                  a.YNc(4, fA, 2, 3, 'ma-error-messages', 4),
                  a.ALo(5, 'async'),
                  a.TgZ(6, 'form', 5),
                  a.NdJ('ngSubmit', function () {
                    return i.onFormSubmit();
                  }),
                  a.TgZ(7, 'fieldset')(8, 'fieldset', 6),
                  a._UZ(9, 'input', 7),
                  a.qZA(),
                  a.TgZ(10, 'fieldset', 6),
                  a._UZ(11, 'input', 8),
                  a.qZA(),
                  a.TgZ(12, 'fieldset', 6),
                  a._UZ(13, 'textarea', 9),
                  a.qZA(),
                  a.TgZ(14, 'fieldset', 6),
                  a._UZ(15, 'input', 10),
                  a.qZA(),
                  a.TgZ(16, 'button', 11),
                  a.ALo(17, 'async'),
                  a._uU(18, ' Publish Post '),
                  a.qZA()()()()()()()),
                  2 & t &&
                    (a.xp6(4),
                    a.Q6J('ngIf', !!a.lcZ(5, 3, i.errors$)),
                    a.xp6(2),
                    a.Q6J('formGroup', i.form),
                    a.xp6(10),
                    a.Q6J('disabled', !!a.lcZ(17, 5, i.errors$) || i.isSubmittingProps));
              },
              dependencies: [sn, yp, o, Ws, Iu, Ys, ue, Mt, He],
            })),
            e
          );
        })(),
        hA = (() => {
          class e {
            constructor(t) {
              (this.store = t),
                (this.initialFormValues = { title: '', description: '', body: '', tagList: [] });
            }
            ngOnInit() {
              this.initializeValues();
            }
            initializeValues() {
              (this.isSubmitting$ = this.store.pipe((0, T.Ys)(cA))),
                (this.errorMessagesMap$ = this.store.pipe((0, T.Ys)(lA)));
            }
            onFormSubmit(t) {
              this.store.dispatch(uC({ articleFormData: t }));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(T.yh));
            }),
            (e.ɵcmp = a.Xpm({
              type: e,
              selectors: [['ma-create-article']],
              decls: 3,
              vars: 7,
              consts: [[3, 'initialValues', 'isSubmitting', 'errorsMap', 'articleSubmit']],
              template: function (t, i) {
                1 & t &&
                  (a.TgZ(0, 'ma-article-form', 0),
                  a.NdJ('articleSubmit', function (f) {
                    return i.onFormSubmit(f);
                  }),
                  a.ALo(1, 'async'),
                  a.ALo(2, 'async'),
                  a.qZA()),
                  2 & t &&
                    a.Q6J('initialValues', i.initialFormValues)(
                      'isSubmitting',
                      a.lcZ(1, 3, i.isSubmitting$)
                    )('errorsMap', a.lcZ(2, 5, i.errorMessagesMap$));
              },
              dependencies: [BS, He],
            })),
            e
          );
        })();
      const pA = [{ path: `${ct.Posts}/${ct.NewPost}`, component: hA }];
      let gA = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({ imports: [wt.forChild(pA), wt] })),
          e
        );
      })();
      const mA = ot.object({ article: yo });
      let $S = (() => {
          var e = new WeakMap();
          class n {
            constructor(i) {
              Lt(this, e, { writable: !0, value: void 0 }), (this.http = i), Et(this, e, nr_apiUrl);
            }
            createArticle(i) {
              const u = `${qe(this, e)}${xn.ALL_FEEDS}`,
                f = mA.parse({ article: i });
              return this.http.post(u, f).pipe((0, le.U)((h) => Hl.parse(h).article));
            }
          }
          return (
            (n.ɵfac = function (i) {
              return new (i || n)(a.LFG(Ar));
            }),
            (n.ɵprov = a.Yz7({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        _A = (() => {
          class e {
            constructor(t, i, u) {
              (this.actions$ = t),
                (this.createArticleService = i),
                (this.router = u),
                (this.createArticle$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(uC),
                    un(({ articleFormData: f }) =>
                      this.createArticleService.createArticle(f).pipe(
                        (0, le.U)((h) => {
                          const _ = _r.parse(h);
                          return cC({ article: _ });
                        }),
                        (0, bt.K)((h) => {
                          const { errors: _ } = sd.parse(h.error);
                          return (0, we.of)(VS({ errors: _ }));
                        })
                      )
                    )
                  )
                )),
                (this.redirectAfterCreate$ = Nt(
                  () =>
                    this.actions$.pipe(
                      Ht(cC),
                      Pt(({ article: { slug: f } }) => {
                        this.router.navigate(['/', ct.Posts, f]);
                      })
                    ),
                  { dispatch: !1 }
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG($S), a.LFG(At));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const vA = (0, T.Lq)(
          { isSubmitting: !1, validationErrors: null },
          (0, T.on)(uC, (e) =>
            dt(e, (n) => {
              (n.isSubmitting = !0), (n.validationErrors = null);
            })
          ),
          (0, T.on)(cC, (e) =>
            dt(e, (n) => {
              n.isSubmitting = !1;
            })
          ),
          (0, T.on)(VS, (e, { errors: n }) =>
            dt(e, (t) => {
              (t.isSubmitting = !1), (t.validationErrors = n);
            })
          )
        ),
        EA = (0, T.Tz)({ name: ln.ARTICLE_FORM, reducer: vA });
      let DA = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({
            providers: [$S],
            imports: [Zt, T.Aw.forFeature(EA), Ir.forFeature([_A]), gA, US],
          })),
          e
        );
      })();
      var Gi = (() => (
        (function (e) {
          (e.EDIT_ARTICLE = '[Edit Article] Edit article'),
            (e.EDIT_ARTICLE_SUCCESS = '[Edit Article] Edit article success'),
            (e.EDIT_ARTICLE_FAILURE = '[Edit Article] Edit article failure'),
            (e.GET_ARTICLE = '[Edit Article] get article'),
            (e.GET_ARTICLE_SUCCESS = '[Edit Article] get article success'),
            (e.GET_ARTICLE_FAILURE = '[Edit Article] get article failure');
        })(Gi || (Gi = {})),
        Gi
      ))();
      const lC = (0, T.PH)(Gi.EDIT_ARTICLE, (0, T.Ky)()),
        dC = (0, T.PH)(Gi.EDIT_ARTICLE_SUCCESS, (0, T.Ky)()),
        HS = (0, T.PH)(Gi.EDIT_ARTICLE_FAILURE, (0, T.Ky)()),
        fC = (0, T.PH)(Gi.GET_ARTICLE, (0, T.Ky)()),
        GS = (0, T.PH)(Gi.GET_ARTICLE_SUCCESS, (0, T.Ky)()),
        zS = (0, T.PH)(Gi.GET_ARTICLE_FAILURE),
        ov = (0, T.ZF)(ln.ARTICLE_EDIT),
        CA = (0, T.P1)(ov, (e) => e.isLoading),
        wA = (0, T.P1)(ov, (e) => e.article),
        SA = (0, T.P1)(ov, (e) => e.isSubmitting),
        bA = (0, T.P1)(ov, (e) => e.validationErrors);
      function AA(e, n) {
        1 & e && (a.TgZ(0, 'div', 2), a._UZ(1, 'ma-loader'), a.qZA());
      }
      function MA(e, n) {
        if (1 & e) {
          const t = a.EpF();
          a.ynx(0),
            a.TgZ(1, 'ma-article-form', 5),
            a.NdJ('articleSubmit', function (u) {
              a.CHM(t);
              const f = a.oxw(2);
              return a.KtG(f.onFormSubmit(u));
            }),
            a.ALo(2, 'async'),
            a.ALo(3, 'async'),
            a.ALo(4, 'async'),
            a.qZA(),
            a.BQk();
        }
        if (2 & e) {
          const t = a.oxw(2);
          a.xp6(1),
            a.Q6J('initialValues', a.lcZ(2, 3, t.initialArticleValues$))(
              'isSubmitting',
              a.lcZ(3, 5, t.isSubmitting$)
            )('errorsMap', a.lcZ(4, 7, t.errorMessagesMap$));
        }
      }
      function TA(e, n) {
        1 & e && a._UZ(0, 'ma-error-sphere');
      }
      function IA(e, n) {
        if (
          (1 & e &&
            (a.YNc(0, MA, 5, 9, 'ng-container', 3),
            a.ALo(1, 'async'),
            a.YNc(2, TA, 1, 0, 'ng-template', null, 4, a.W1O)),
          2 & e)
        ) {
          const t = a.MAs(3),
            i = a.oxw();
          a.Q6J('ngIf', !!a.lcZ(1, 2, i.initialArticleValues$))('ngIfElse', t);
        }
      }
      let OA = (() => {
        var e = new WeakMap();
        class n {
          constructor(i, u) {
            Lt(this, e, { writable: !0, value: void 0 }), (this.store = i), (this.route = u);
          }
          ngOnInit() {
            this.initializeValues(), this.fetchData();
          }
          initializeValues() {
            Et(this, e, this.route.snapshot.paramMap.get(ZS)),
              (this.isLoading$ = this.store.pipe((0, T.Ys)(CA))),
              (this.isSubmitting$ = this.store.pipe((0, T.Ys)(SA))),
              (this.errorMessagesMap$ = this.store.pipe((0, T.Ys)(bA))),
              (this.initialArticleValues$ = this.store.pipe(
                (0, T.Ys)(wA),
                (0, Wt.h)(Boolean),
                (0, le.U)(({ title: i, body: u, description: f, tagList: h }) =>
                  yo.parse({ title: i, body: u, description: f, tagList: h })
                )
              ));
          }
          fetchData() {
            qe(this, e) && this.store.dispatch(fC({ slug: qe(this, e) }));
          }
          onFormSubmit(i) {
            qe(this, e) && this.store.dispatch(lC({ articleFormData: i, slug: qe(this, e) }));
          }
        }
        return (
          (n.ɵfac = function (i) {
            return new (i || n)(a.Y36(T.yh), a.Y36(gr));
          }),
          (n.ɵcmp = a.Xpm({
            type: n,
            selectors: [['ma-edit-article']],
            decls: 4,
            vars: 4,
            consts: [
              ['class', 'loader-container', 4, 'ngIf', 'ngIfElse'],
              ['editContent', ''],
              [1, 'loader-container'],
              [4, 'ngIf', 'ngIfElse'],
              ['editEmptyContent', ''],
              [3, 'initialValues', 'isSubmitting', 'errorsMap', 'articleSubmit'],
            ],
            template: function (i, u) {
              if (
                (1 & i &&
                  (a.YNc(0, AA, 2, 0, 'div', 0),
                  a.ALo(1, 'async'),
                  a.YNc(2, IA, 4, 4, 'ng-template', null, 1, a.W1O)),
                2 & i)
              ) {
                const f = a.MAs(3);
                a.Q6J('ngIf', a.lcZ(1, 2, u.isLoading$))('ngIfElse', f);
              }
            },
            dependencies: [sn, Du, BS, Li, He],
            styles: ['.loader-container[_ngcontent-%COMP%]{height:calc(100vh - 56px)}'],
          })),
          n
        );
      })();
      const ZS = 'slug',
        PA = [{ path: `${ct.Posts}/:${ZS}/${ct.Edit}`, component: OA }];
      let xA = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({ imports: [wt.forChild(PA), wt] })),
          e
        );
      })();
      const RA = ot.object({ article: yo });
      let WS = (() => {
          var e = new WeakMap();
          class n {
            constructor(i) {
              Lt(this, e, { writable: !0, value: void 0 }), (this.http = i), Et(this, e, nr_apiUrl);
            }
            updateArticle(i, u) {
              const f = `${qe(this, e)}${xn.ALL_FEEDS}/${i}`,
                h = RA.parse({ article: u });
              return this.http.put(f, h).pipe((0, le.U)((_) => Hl.parse(_).article));
            }
          }
          return (
            (n.ɵfac = function (i) {
              return new (i || n)(a.LFG(Ar));
            }),
            (n.ɵprov = a.Yz7({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        FA = (() => {
          class e {
            constructor(t, i, u) {
              (this.actions$ = t),
                (this.editArticleService = i),
                (this.router = u),
                (this.editArticle$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(lC),
                    un(({ articleFormData: f, slug: h }) =>
                      this.editArticleService.updateArticle(h, f).pipe(
                        (0, le.U)((_) => {
                          const v = _r.parse(_);
                          return dC({ article: v });
                        }),
                        (0, bt.K)((_) => {
                          const v = sd.safeParse(_.error),
                            C = tA.safeParse({ error: _.error });
                          return (0, we.of)(
                            HS({
                              errors: v.success
                                ? v.data.errors
                                : {
                                    error: C.success
                                      ? [C.data.error.message]
                                      : ['something went wrong'],
                                  },
                            })
                          );
                        })
                      )
                    )
                  )
                )),
                (this.redirectAfterEdit$ = Nt(
                  () =>
                    this.actions$.pipe(
                      Ht(dC),
                      Pt(({ article: { slug: f } }) => {
                        this.router.navigate(['/', ct.Posts, f]);
                      })
                    ),
                  { dispatch: !1 }
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(WS), a.LFG(At));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        NA = (() => {
          class e {
            constructor(t, i, u) {
              (this.actions$ = t),
                (this.sharedArticleService = i),
                (this.router = u),
                (this.getArticle$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(fC),
                    un(({ slug: f }) =>
                      this.sharedArticleService.fetchArticle(f).pipe(
                        (0, le.U)((h) => {
                          const _ = _r.parse(h.article);
                          return GS({ article: _ });
                        }),
                        (0, bt.K)(() => (0, we.of)(zS()))
                      )
                    )
                  )
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(ki), a.LFG(At));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const kA = (0, T.Lq)(
          { isLoading: !1, article: null, isSubmitting: !1, validationErrors: null },
          (0, T.on)(lC, (e) =>
            dt(e, (n) => {
              (n.isSubmitting = !0), (n.validationErrors = null);
            })
          ),
          (0, T.on)(dC, (e) =>
            dt(e, (n) => {
              n.isSubmitting = !1;
            })
          ),
          (0, T.on)(HS, (e, { errors: n }) =>
            dt(e, (t) => {
              (t.isSubmitting = !1), (t.validationErrors = n);
            })
          ),
          (0, T.on)(fC, (e) =>
            dt(e, (n) => {
              n.isLoading = !0;
            })
          ),
          (0, T.on)(GS, (e, { article: n }) =>
            dt(e, (t) => {
              (t.isLoading = !1), (t.article = n);
            })
          ),
          (0, T.on)(zS, (e) =>
            dt(e, (n) => {
              n.isLoading = !1;
            })
          )
        ),
        UA = (0, T.Tz)({ name: ln.ARTICLE_EDIT, reducer: kA });
      let VA = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({
              providers: [WS, ki],
              imports: [Zt, T.Aw.forFeature(UA), Ir.forFeature([FA, NA]), xA, go, US, Fs],
            })),
            e
          );
        })(),
        iv = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [Zt] })),
            e
          );
        })(),
        YS = (() => {
          class e {
            range(t, i) {
              return Array.from({ length: i }, (u, f) => f + t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        jA = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ providers: [YS], imports: [Zt, wt] })),
            e
          );
        })();
      const BA = ot.object({ articles: ot.array(_r), articlesCount: ot.number() });
      let KS = (() => {
          class e {
            constructor(t) {
              this.http = t;
            }
            getFeed(t) {
              return this.http.get(nr_apiUrl + t).pipe((0, le.U)((u) => BA.parse(u)));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(Ar));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        $A = (() => {
          class e {
            constructor(t, i) {
              (this.actions$ = t),
                (this.feedService = i),
                (this.getFeed$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(Yh),
                    un(({ shortUrl: u }) =>
                      this.feedService.getFeed(u).pipe(
                        (0, le.U)((f) => Kh({ feed: f })),
                        (0, bt.K)(() => (0, we.of)(xl()))
                      )
                    )
                  )
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(KS));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const qS = { isLoading: !1, error: null, data: null },
        HA = (0, T.Lq)(
          qS,
          (0, T.on)(Yh, (e) =>
            dt(e, (n) => {
              n.isLoading = !0;
            })
          ),
          (0, T.on)(Kh, (e, { feed: n }) =>
            dt(e, (t) => {
              (t.isLoading = !1), (t.data = n);
            })
          ),
          (0, T.on)(xl, (e) =>
            dt(e, (n) => {
              (n.isLoading = !1), (n.error = 'some error');
            })
          ),
          (0, T.on)(S0, () => qS)
        );
      function GA(e, n) {
        return HA(e, n);
      }
      const zA = function (e) {
          return { active: e };
        },
        ZA = function (e) {
          return [e];
        },
        WA = function (e) {
          return { page: e };
        };
      function YA(e, n) {
        if ((1 & e && (a.TgZ(0, 'li', 6)(1, 'a', 7), a._uU(2), a.qZA()()), 2 & e)) {
          const t = n.$implicit,
            i = a.oxw();
          a.Q6J('ngClass', a.VKq(4, zA, i.currentPageProps === t)),
            a.xp6(1),
            a.Q6J('routerLink', a.VKq(6, ZA, i.baseUrl))('queryParams', a.VKq(8, WA, t)),
            a.xp6(1),
            a.Oqu(t);
        }
      }
      let KA = (() => {
          var e = new WeakMap(),
            n = new WeakMap();
          class t {
            constructor(u, f) {
              Lt(this, e, { writable: !0, value: void 0 }),
                Lt(this, n, { writable: !0, value: void 0 }),
                (this.utilsService = u),
                (this.router = f),
                (this.baseUrl = Au.parseUrl(this.router.url).url),
                Et(this, e, 5),
                (this.limitProps = 10);
            }
            ngOnInit() {
              this.initializeValues();
            }
            initializeValues() {
              Et(this, n, Math.ceil(this.totalProps / this.limitProps));
              const u = Math.min(
                Math.max(this.currentPageProps - qe(this, e), 0),
                qe(this, n) - this.limitProps
              );
              let f = this.currentPageProps + qe(this, e);
              0 === u && (f = this.limitProps), this.calculatePagePagination(u, f);
            }
            calculatePagePagination(u, f) {
              const h = this.utilsService.range(1, qe(this, n));
              this.pages = h.slice(u, f);
            }
            onSlideLeft() {
              const u = Math.max(this.pages.at(0) - 2, 0),
                f = Math.max(this.pages.at(this.pages.length - 1) - 1, this.limitProps);
              this.calculatePagePagination(u, f);
            }
            onSlideRight() {
              const u = Math.min(this.pages.at(0), qe(this, n) - this.limitProps),
                f = Math.min(this.pages.at(this.pages.length - 1) + 1, qe(this, n));
              this.calculatePagePagination(u, f);
            }
          }
          return (
            (t.ɵfac = function (u) {
              return new (u || t)(a.Y36(YS), a.Y36(At));
            }),
            (t.ɵcmp = a.Xpm({
              type: t,
              selectors: [['ma-pagination']],
              inputs: {
                totalProps: ['total', 'totalProps'],
                currentPageProps: ['currentPage', 'currentPageProps'],
                limitProps: ['limit', 'limitProps'],
              },
              decls: 7,
              vars: 1,
              consts: [
                [1, 'ma-pagination'],
                [1, 'btn', 'btn-success', 3, 'click'],
                [1, 'ion-arrow-left-b'],
                [1, 'pagination'],
                ['class', 'page-item w-10', 3, 'ngClass', 4, 'ngFor', 'ngForOf'],
                [1, 'ion-arrow-right-b'],
                [1, 'page-item', 'w-10', 3, 'ngClass'],
                [1, 'page-link', 3, 'routerLink', 'queryParams'],
              ],
              template: function (u, f) {
                1 & u &&
                  (a.TgZ(0, 'section', 0)(1, 'button', 1),
                  a.NdJ('click', function () {
                    return f.onSlideLeft();
                  }),
                  a._UZ(2, 'i', 2),
                  a.qZA(),
                  a.TgZ(3, 'ul', 3),
                  a.YNc(4, YA, 3, 10, 'li', 4),
                  a.qZA(),
                  a.TgZ(5, 'button', 1),
                  a.NdJ('click', function () {
                    return f.onSlideRight();
                  }),
                  a._UZ(6, 'i', 5),
                  a.qZA()()),
                  2 & u && (a.xp6(4), a.Q6J('ngForOf', f.pages));
              },
              dependencies: [Ue, Kn, jn],
              styles: [
                '.ma-pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.ma-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-right:15px}.ma-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-left:15px}',
              ],
            })),
            t
          );
        })(),
        sv = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({
              providers: [KS],
              imports: [
                Zt,
                wt,
                Ir.forFeature([$A]),
                T.Aw.forFeature(ln.FEED, GA),
                go,
                Fs,
                jA,
                Ah,
                F_,
              ],
            })),
            e
          );
        })();
      a.B6R(
        Mu,
        function () {
          return [Kn, sn, jn, kl, Li, KA, Sy, tp];
        },
        function () {
          return [He, Jn];
        }
      );
      let av = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({ imports: [Zt, Da, wt] })),
          e
        );
      })();
      const qA = ot.string(),
        JA = ot.array(qA),
        QA = ot.object({ tags: JA });
      let JS = (() => {
          var e = new WeakMap();
          class n {
            constructor(i) {
              Lt(this, e, { writable: !0, value: void 0 }), (this.http = i), Et(this, e, nr_apiUrl);
            }
            getPopularTags() {
              const i = qe(this, e) + xn.POPULAR_TAGS;
              return this.http.get(i).pipe((0, le.U)((u) => QA.parse(u).tags));
            }
          }
          return (
            (n.ɵfac = function (i) {
              return new (i || n)(a.LFG(Ar));
            }),
            (n.ɵprov = a.Yz7({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        XA = (() => {
          class e {
            constructor(t, i) {
              (this.actions$ = t),
                (this.popularTagsService = i),
                (this.getPopularTags$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(qh),
                    un(() =>
                      this.popularTagsService.getPopularTags().pipe(
                        (0, le.U)((u) => {
                          const f = u.filter(Boolean);
                          return Nl({ popularTags: f });
                        }),
                        (0, bt.K)(() => (0, we.of)(gy()))
                      )
                    )
                  )
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(JS));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const tM = (0, T.Lq)(
        { isLoading: !1, error: null, data: null },
        (0, T.on)(qh, (e) =>
          dt(e, (n) => {
            n.isLoading = !0;
          })
        ),
        (0, T.on)(Nl, (e, { popularTags: n }) =>
          dt(e, (t) => {
            (t.isLoading = !1), (t.data = n);
          })
        ),
        (0, T.on)(gy, (e) =>
          dt(e, (n) => {
            (n.isLoading = !1), (n.error = 'some error');
          })
        )
      );
      function nM(e, n) {
        return tM(e, n);
      }
      let hC = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({
              providers: [JS],
              imports: [
                Zt,
                Da,
                wt,
                T.Aw.forFeature(ln.POPULAR_TAGS, nM),
                Ir.forFeature([XA]),
                Fs,
                go,
              ],
            })),
            e
          );
        })(),
        rM = (() => {
          class e {
            constructor() {
              this.StoreEndpoints = xn;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = a.Xpm({
              type: e,
              selectors: [['ma-global-feed']],
              decls: 9,
              vars: 1,
              consts: [
                [1, 'home-page'],
                [1, 'container', 'page'],
                [1, 'row'],
                [1, 'col-md-9'],
                [3, 'apiUrl'],
                [1, 'col-md-3'],
              ],
              template: function (t, i) {
                1 & t &&
                  (a.TgZ(0, 'div', 0),
                  a._UZ(1, 'ma-banner'),
                  a.TgZ(2, 'div', 1)(3, 'div', 2)(4, 'div', 3),
                  a._UZ(5, 'ma-feed-toggler')(6, 'ma-feed', 4),
                  a.qZA(),
                  a.TgZ(7, 'div', 5),
                  a._UZ(8, 'ma-popular-tags'),
                  a.qZA()()()()),
                  2 & t && (a.xp6(6), a.Q6J('apiUrl', i.StoreEndpoints.ALL_FEEDS));
              },
              dependencies: [Mu, Gs, Vl, Xh],
            })),
            e
          );
        })();
      const oM = [{ path: ct.Root, component: rM }];
      let iM = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [wt.forChild(oM), wt] })),
            e
          );
        })(),
        sM = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [Zt, iM, sv, iv, hC, av] })),
            e
          );
        })();
      const aM = Rs.omit({ token: !0 }),
        uM = ot.object({ user: Rs }),
        QS = (0, T.ZF)(ln.PROFILE_SETTINGS),
        cM = (0, T.P1)(QS, (e) => e.isSubmitting),
        lM = (0, T.P1)(QS, (e) => e.validationErrors);
      function dM(e, n) {
        1 & e && (a.TgZ(0, 'div', 2), a._UZ(1, 'ma-loader'), a.qZA());
      }
      function fM(e, n) {
        if ((1 & e && (a._UZ(0, 'ma-error-messages', 20), a.ALo(1, 'async')), 2 & e)) {
          const t = a.oxw(3);
          a.Q6J('errorMessages', a.lcZ(1, 1, t.errorMessages$));
        }
      }
      function hM(e, n) {
        if (1 & e) {
          const t = a.EpF();
          a.TgZ(0, 'section', 5)(1, 'div', 6)(2, 'div', 7)(3, 'h1', 8),
            a._uU(4, 'Your Settings'),
            a.qZA(),
            a.YNc(5, fM, 2, 3, 'ma-error-messages', 9),
            a.ALo(6, 'async'),
            a.TgZ(7, 'form', 10),
            a.NdJ('ngSubmit', function () {
              a.CHM(t);
              const u = a.oxw(2);
              return a.KtG(u.onFormSubmit());
            }),
            a.TgZ(8, 'fieldset', 11),
            a.ALo(9, 'async'),
            a.TgZ(10, 'fieldset', 12),
            a._UZ(11, 'input', 13),
            a.qZA(),
            a.TgZ(12, 'fieldset', 12),
            a._UZ(13, 'input', 14),
            a.qZA(),
            a.TgZ(14, 'fieldset', 12),
            a._UZ(15, 'textarea', 15),
            a.qZA(),
            a.TgZ(16, 'fieldset', 12),
            a._UZ(17, 'input', 16),
            a.qZA(),
            a.TgZ(18, 'fieldset', 12),
            a._UZ(19, 'input', 17),
            a.qZA(),
            a.TgZ(20, 'button', 18),
            a.ALo(21, 'async'),
            a._uU(22, ' Update Profile '),
            a.qZA()()(),
            a._UZ(23, 'hr'),
            a.TgZ(24, 'button', 19),
            a.NdJ('click', function () {
              a.CHM(t);
              const u = a.oxw(2);
              return a.KtG(u.logoutUser());
            }),
            a._uU(25, ' Click to logout '),
            a.qZA()()()();
        }
        if (2 & e) {
          const t = a.oxw(2);
          a.xp6(5),
            a.Q6J('ngIf', !!a.lcZ(6, 4, t.errorMessages$)),
            a.xp6(2),
            a.Q6J('formGroup', t.form),
            a.xp6(1),
            a.Q6J('disabled', a.lcZ(9, 6, t.isSubmitting$)),
            a.xp6(12),
            a.Q6J('disabled', !!a.lcZ(21, 8, t.errorMessages$));
        }
      }
      function pM(e, n) {
        1 & e && a._UZ(0, 'ma-error-sphere');
      }
      function gM(e, n) {
        if (
          (1 & e &&
            (a.YNc(0, hM, 26, 10, 'section', 3), a.YNc(1, pM, 1, 0, 'ng-template', null, 4, a.W1O)),
          2 & e)
        ) {
          const t = a.MAs(2),
            i = a.oxw();
          a.Q6J('ngIf', !!i.currentUser)('ngIfElse', t);
        }
      }
      let mM = (() => {
        class e {
          constructor(t, i, u) {
            (this.store = t),
              (this.fb = i),
              (this.zodService = u),
              (this.isLoading = !0),
              (this.currentUser = null);
          }
          ngOnInit() {
            this.initializeValues();
          }
          initializeValues() {
            zs(
              this.store.pipe(
                (0, T.Ys)(Wo),
                (0, Wt.h)(Boolean),
                (0, le.U)(
                  (t) => (
                    (this.isLoading = !1), (this.currentUser = t), this.initializeForm(), null
                  )
                )
              )
            ),
              (this.isSubmitting$ = this.store.pipe((0, T.Ys)(cM)));
          }
          initializeForm() {
            if (!this.currentUser) return;
            const { token: t, ...i } = this.currentUser;
            (this.form = this.fb.group({ ...i, password: '' })), this.bindErrorsStream();
          }
          bindErrorsStream() {
            const t = this.form.valueChanges.pipe(
                (0, tv.b)(300),
                (0, le.U)((u) => this.zodService.getErrorsMap(aM.safeParse(u)))
              ),
              i = this.store.pipe((0, T.Ys)(lM));
            this.errorMessages$ = (0, Ca.T)(t, i).pipe(bl({ refCount: !0 }));
          }
          onFormSubmit() {
            if (this.form.invalid) return;
            const t = Rs.parse({ ...this.currentUser, ...this.form.value }),
              i = uM.parse({ user: t });
            this.store.dispatch(aC({ request: i }));
          }
          logoutUser() {
            this.store.dispatch(jl());
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Y36(T.yh), a.Y36(ev), a.Y36(Lu));
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ma-settings']],
            decls: 3,
            vars: 2,
            consts: [
              ['class', 'loader-container', 4, 'ngIf', 'ngIfElse'],
              ['settingsContent', ''],
              [1, 'loader-container'],
              ['class', 'container page m-b-2', 4, 'ngIf', 'ngIfElse'],
              ['settingsEmptyContent', ''],
              [1, 'container', 'page', 'm-b-2'],
              [1, 'row'],
              [1, 'col-md-6', 'offset-md-3', 'col-xs-12'],
              [1, 'text-xs-center'],
              [3, 'errorMessages', 4, 'ngIf'],
              [3, 'formGroup', 'ngSubmit'],
              [3, 'disabled'],
              [1, 'form-group'],
              [
                'type',
                'text',
                'formControlName',
                'image',
                'placeholder',
                'URL of profile picture',
                1,
                'form-control',
              ],
              [
                'type',
                'text',
                'formControlName',
                'username',
                'placeholder',
                'Username',
                1,
                'form-control',
                'form-control-lg',
              ],
              [
                'formControlName',
                'bio',
                'placeholder',
                'Short biography about you',
                'rows',
                '6',
                1,
                'form-control',
                'form-control-lg',
              ],
              [
                'type',
                'text',
                'formControlName',
                'email',
                'placeholder',
                'Email',
                1,
                'form-control',
                'form-control-lg',
              ],
              [
                'type',
                'password',
                'formControlName',
                'password',
                'placeholder',
                'Password',
                1,
                'form-control',
                'form-control-lg',
              ],
              ['type', 'submit', 1, 'btn', 'btn-primary', 'btn-lg', 'pull-xs-right', 3, 'disabled'],
              ['type', 'text', 1, 'btn', 'btn-outline-danger', 3, 'click'],
              [3, 'errorMessages'],
            ],
            template: function (t, i) {
              if (
                (1 & t &&
                  (a.YNc(0, dM, 2, 0, 'div', 0), a.YNc(1, gM, 3, 2, 'ng-template', null, 1, a.W1O)),
                2 & t)
              ) {
                const u = a.MAs(2);
                a.Q6J('ngIf', i.isLoading)('ngIfElse', u);
              }
            },
            dependencies: [sn, o, Ws, Iu, Ys, ue, Mt, Li, yp, Du, He],
            styles: ['.loader-container[_ngcontent-%COMP%]{height:calc(100vh - 56px)}'],
          })),
          e
        );
      })();
      const _M = [{ path: `${ct.Settings}`, component: mM }];
      let yM = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({ imports: [wt.forChild(_M), wt] })),
          e
        );
      })();
      const EM = (0, T.Lq)(
          { isSubmitting: !1, validationErrors: null },
          (0, T.on)(aC, (e) =>
            dt(e, (n) => {
              (n.isSubmitting = !0), (n.validationErrors = null);
            })
          ),
          (0, T.on)(rv, (e) =>
            dt(e, (n) => {
              n.isSubmitting = !1;
            })
          ),
          (0, T.on)(LS, (e, { errors: n }) =>
            dt(e, (t) => {
              (t.isSubmitting = !1), (t.validationErrors = n);
            })
          )
        ),
        DM = (0, T.Tz)({ name: ln.PROFILE_SETTINGS, reducer: EM });
      let CM = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({
              providers: [Lu],
              imports: [Zt, eC, T.Aw.forFeature(DM), yM, Fs, go],
            })),
            e
          );
        })(),
        wM = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [Zt, wt] })),
            e
          );
        })(),
        SM = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [Zt, Dy, sv, iv, hC, av] })),
            e
          );
        })();
      var ud = (() => (
        (function (e) {
          (e.GET_USER_PROFILE = '[Profile] Get user profile'),
            (e.GET_USER_PROFILE_SUCCESS = '[Profile] Get user profile success'),
            (e.GET_USER_PROFILE_FAILURE = '[Profile] Get user profile failure');
        })(ud || (ud = {})),
        ud
      ))();
      const pC = (0, T.PH)(ud.GET_USER_PROFILE, (0, T.Ky)()),
        XS = (0, T.PH)(ud.GET_USER_PROFILE_SUCCESS, (0, T.Ky)()),
        eb = (0, T.PH)(ud.GET_USER_PROFILE_FAILURE, (0, T.Ky)()),
        gC = (0, T.ZF)(ln.USER_PROFILE),
        bM = (0, T.P1)(gC, (e) => e.isLoading),
        AM = (0, T.P1)(gC, (e) => e.validationErrors),
        tb = (0, T.P1)(gC, (e) => e.profile),
        MM = function (e, n) {
          return ['/', e, n];
        },
        nb = function (e) {
          return { active: e };
        },
        TM = function (e, n, t) {
          return ['/', e, n, t];
        };
      let IM = (() => {
        class e {
          constructor() {
            this.HttpLinks = ct;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = a.Xpm({
            type: e,
            selectors: [['ma-profile-toggler']],
            inputs: {
              authorProps: ['author', 'authorProps'],
              isFavoriteProps: ['isFavorite', 'isFavoriteProps'],
            },
            decls: 9,
            vars: 18,
            consts: [
              [1, 'articles-toggle'],
              [1, 'nav', 'nav-pills', 'outline-active'],
              [1, 'nav-item'],
              [1, 'nav-link', 3, 'routerLink', 'ngClass'],
            ],
            template: function (t, i) {
              1 & t &&
                (a.TgZ(0, 'nav', 0)(1, 'ul', 1)(2, 'li', 2)(3, 'a', 3),
                a._uU(4),
                a.ALo(5, 'uppercase'),
                a.qZA()(),
                a.TgZ(6, 'li', 2)(7, 'a', 3),
                a._uU(8, ' Favorited Posts '),
                a.qZA()()()()),
                2 & t &&
                  (a.xp6(3),
                  a.Q6J('routerLink', a.WLB(7, MM, i.HttpLinks.Profiles, i.authorProps.username))(
                    'ngClass',
                    a.VKq(10, nb, !i.isFavoriteProps)
                  ),
                  a.xp6(1),
                  a.hij(' ', a.lcZ(5, 5, i.authorProps.username), ' Posts '),
                  a.xp6(3),
                  a.Q6J(
                    'routerLink',
                    a.kEZ(
                      12,
                      TM,
                      i.HttpLinks.Profiles,
                      i.authorProps.username,
                      i.HttpLinks.Favorites
                    )
                  )('ngClass', a.VKq(16, nb, i.isFavoriteProps)));
            },
            dependencies: [Ue, jn, Ot],
          })),
          e
        );
      })();
      function OM(e, n) {
        1 & e && (a.TgZ(0, 'div', 2), a._UZ(1, 'ma-loader'), a.qZA());
      }
      function PM(e, n) {
        if ((1 & e && (a.TgZ(0, 'p'), a._uU(1), a.qZA()), 2 & e)) {
          const t = a.oxw(4);
          a.xp6(1), a.Oqu(t.userProfile.bio);
        }
      }
      const xM = function (e) {
        return ['/', e];
      };
      function RM(e, n) {
        if (
          (1 & e &&
            (a.TgZ(0, 'ma-banner')(1, 'div', 13)(2, 'div', 14, 15)(4, 'div', 10),
            a._UZ(5, 'img', 16),
            a.TgZ(6, 'h2'),
            a._uU(7),
            a.qZA(),
            a.YNc(8, PM, 2, 1, 'p', 17),
            a.TgZ(9, 'div')(10, 'a', 18),
            a._UZ(11, 'i', 19),
            a._uU(12, ' Edit Profile Settings '),
            a.qZA()()()()()()),
          2 & e)
        ) {
          const t = a.oxw(3);
          a.xp6(5),
            a.Q6J('src', t.userProfile.image, a.LSH),
            a.xp6(2),
            a.Oqu(t.userProfile.username),
            a.xp6(1),
            a.Q6J('ngIf', t.userProfile.bio),
            a.xp6(2),
            a.Q6J('routerLink', a.VKq(4, xM, t.HttpLinks.Settings));
        }
      }
      function FM(e, n) {
        if ((1 & e && (a.TgZ(0, 'p'), a._uU(1), a.qZA()), 2 & e)) {
          const t = a.oxw(4);
          a.xp6(1), a.Oqu(t.userProfile.bio);
        }
      }
      function NM(e, n) {
        if (
          (1 & e &&
            (a.TgZ(0, 'div', 20)(1, 'div', 8)(2, 'div', 9)(3, 'div', 10),
            a._UZ(4, 'img', 16),
            a.TgZ(5, 'h4'),
            a._uU(6),
            a.qZA(),
            a.YNc(7, FM, 2, 1, 'p', 17),
            a._UZ(8, 'ma-follow-button', 21),
            a.qZA()()()()),
          2 & e)
        ) {
          const t = a.oxw(3);
          a.xp6(4),
            a.Q6J('src', t.userProfile.image, a.LSH),
            a.xp6(2),
            a.Oqu(t.userProfile.username),
            a.xp6(1),
            a.Q6J('ngIf', t.userProfile.bio),
            a.xp6(1),
            a.Q6J('username', t.userProfile.username)('isFollowing', t.userProfile.following);
        }
      }
      function LM(e, n) {
        if (
          (1 & e &&
            (a.TgZ(0, 'section', 5),
            a.YNc(1, RM, 13, 6, 'ma-banner', 6),
            a.ALo(2, 'async'),
            a.YNc(3, NM, 9, 5, 'ng-template', null, 7, a.W1O),
            a.TgZ(5, 'div', 8)(6, 'div', 9)(7, 'div', 10),
            a._UZ(8, 'ma-profile-toggler', 11)(9, 'ma-feed', 12),
            a.qZA()()()()),
          2 & e)
        ) {
          const t = a.MAs(4),
            i = a.oxw(2);
          a.xp6(1),
            a.Q6J('ngIf', a.lcZ(2, 5, i.isUserProfile$))('ngIfElse', t),
            a.xp6(7),
            a.Q6J('author', i.userProfile)('isFavorite', i.isFavoritesPage),
            a.xp6(1),
            a.Q6J('apiUrl', i.apiUrl);
        }
      }
      function kM(e, n) {
        1 & e && a._UZ(0, 'ma-error-sphere');
      }
      function UM(e, n) {
        if ((1 & e && (a._UZ(0, 'ma-error-messages', 23), a.ALo(1, 'async')), 2 & e)) {
          const t = a.oxw(3);
          a.Q6J('errorMessages', a.lcZ(1, 1, t.errorMessages$));
        }
      }
      function VM(e, n) {
        if (
          (1 & e &&
            (a.YNc(0, kM, 1, 0, 'ma-error-sphere', 17),
            a.ALo(1, 'async'),
            a.YNc(2, UM, 2, 3, 'ma-error-messages', 22),
            a.ALo(3, 'async')),
          2 & e)
        ) {
          const t = a.oxw(2);
          a.Q6J('ngIf', !a.lcZ(1, 2, t.errorMessages$)),
            a.xp6(2),
            a.Q6J('ngIf', a.lcZ(3, 4, t.errorMessages$));
        }
      }
      function jM(e, n) {
        if (
          (1 & e &&
            (a.YNc(0, LM, 10, 7, 'section', 3), a.YNc(1, VM, 4, 6, 'ng-template', null, 4, a.W1O)),
          2 & e)
        ) {
          const t = a.MAs(2),
            i = a.oxw();
          a.Q6J('ngIf', !!i.userProfile)('ngIfElse', t);
        }
      }
      let rb = (() => {
        var e = new WeakMap();
        class n {
          constructor(i, u, f) {
            Lt(this, e, { writable: !0, value: void 0 }),
              (this.store = i),
              (this.route = u),
              (this.router = f),
              Et(this, e, this.route.snapshot.paramMap.get(uv)),
              (this.HttpLinks = ct);
          }
          ngOnInit() {
            this.initializeListeners(), this.initializeValues();
          }
          initializeValues() {
            (this.isLoading$ = this.store.pipe((0, T.Ys)(bM))),
              (this.errorMessages$ = this.store.pipe((0, T.Ys)(AM))),
              (this.isFavoritesPage = Au.parseUrl(this.router.url).url.includes(ct.Favorites));
            const i = `?${this.isFavoritesPage ? 'favorited' : 'author'}=${qe(this, e)}`;
            this.apiUrl = `${xn.ALL_FEEDS}/${i}`;
          }
          initializeListeners() {
            zs(
              this.store
                .pipe(
                  (0, T.Ys)(tb),
                  (0, le.U)((u) => {
                    this.userProfile = u;
                  })
                )
                .pipe((0, Wt.h)(() => !1))
            ),
              zs(
                this.route.params
                  .pipe(
                    (0, le.U)((u) => {
                      const f = u[uv];
                      qe(this, e) !== f && Et(this, e, f),
                        (!this.userProfile || this.userProfile.username !== qe(this, e)) &&
                          this.fetchProfile();
                    })
                  )
                  .pipe((0, Wt.h)(() => !1))
              ),
              (this.isUserProfile$ = er([
                this.store.pipe((0, T.Ys)(Wo), (0, Wt.h)(Boolean)),
                this.store.pipe((0, T.Ys)(tb), (0, Wt.h)(Boolean)),
              ]).pipe(
                (0, le.U)(
                  ([u, { username: f, bio: h, image: _ }]) =>
                    u.username === f && u.bio === h && u.image === _
                )
              ));
          }
          fetchProfile() {
            qe(this, e) && this.store.dispatch(pC({ userSlug: qe(this, e) }));
          }
        }
        return (
          (n.ɵfac = function (i) {
            return new (i || n)(a.Y36(T.yh), a.Y36(gr), a.Y36(At));
          }),
          (n.ɵcmp = a.Xpm({
            type: n,
            selectors: [['ma-user-profile']],
            decls: 4,
            vars: 4,
            consts: [
              ['class', 'loader-container', 4, 'ngIf', 'ngIfElse'],
              ['profileContent', ''],
              [1, 'loader-container'],
              ['class', 'profile-page', 4, 'ngIf', 'ngIfElse'],
              ['profileEmptyContent', ''],
              [1, 'profile-page'],
              [4, 'ngIf', 'ngIfElse'],
              ['anotherAuthor', ''],
              [1, 'container'],
              [1, 'row'],
              [1, 'col-xs-12', 'col-md-10', 'offset-md-1'],
              [3, 'author', 'isFavorite'],
              [3, 'apiUrl'],
              [1, 'user-info', 2, 'background', 'transparent'],
              [1, 'row', 'text-xs-center'],
              ['bannerChild', ''],
              [1, 'user-img', 3, 'src'],
              [4, 'ngIf'],
              [1, 'pull-xs-right', 'btn', 'btn-sm', 'btn-outline-secondary', 3, 'routerLink'],
              [1, 'ion-gear-b'],
              [1, 'user-info'],
              [3, 'username', 'isFollowing'],
              [3, 'errorMessages', 4, 'ngIf'],
              [3, 'errorMessages'],
            ],
            template: function (i, u) {
              if (
                (1 & i &&
                  (a.YNc(0, OM, 2, 0, 'div', 0),
                  a.ALo(1, 'async'),
                  a.YNc(2, jM, 3, 2, 'ng-template', null, 1, a.W1O)),
                2 & i)
              ) {
                const f = a.MAs(3);
                a.Q6J('ngIf', a.lcZ(1, 2, u.isLoading$))('ngIfElse', f);
              }
            },
            dependencies: [sn, jn, Li, yp, Du, Gs, IM, Mu, Ay, He],
            styles: ['.loader-container[_ngcontent-%COMP%]{height:calc(100vh - 56px)}'],
          })),
          n
        );
      })();
      const uv = 'slug',
        BM = [
          { path: `${ct.Profiles}/:${uv}`, component: rb },
          { path: `${ct.Profiles}/:${uv}/${ct.Favorites}`, component: rb },
        ];
      let $M = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({ imports: [wt.forChild(BM), wt] })),
          e
        );
      })();
      const HM = ot.object({ profile: gu });
      let ob = (() => {
          var e = new WeakMap();
          class n {
            constructor(i) {
              Lt(this, e, { writable: !0, value: void 0 }), (this.http = i), Et(this, e, nr_apiUrl);
            }
            getProfile(i) {
              const { profile: u } = HM.parse(i);
              return gu.parse(u);
            }
            getUserProfile(i) {
              const u = `${qe(this, e)}${xn.PROFILES}/${i}`;
              return this.http.get(u).pipe((0, le.U)(this.getProfile));
            }
          }
          return (
            (n.ɵfac = function (i) {
              return new (i || n)(a.LFG(Ar));
            }),
            (n.ɵprov = a.Yz7({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        GM = (() => {
          class e {
            constructor(t, i) {
              (this.actions$ = t),
                (this.userProfileService = i),
                (this.login$ = Nt(() =>
                  this.actions$.pipe(
                    Ht(pC),
                    un(({ userSlug: u }) =>
                      this.userProfileService.getUserProfile(u).pipe(
                        (0, le.U)((f) => XS({ userProfile: f })),
                        (0, bt.K)((f) => {
                          const h = sd.parse(f.error);
                          return (0, we.of)(eb(h));
                        })
                      )
                    )
                  )
                ));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(vn), a.LFG(ob));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const ZM = (0, T.Lq)(
          { isLoading: !1, profile: null, validationErrors: null },
          (0, T.on)(pC, (e) =>
            dt(e, (n) => {
              (n.isLoading = !0), (n.validationErrors = null);
            })
          ),
          (0, T.on)(XS, (e, { userProfile: n }) =>
            dt(e, (t) => {
              (t.isLoading = !1), (t.profile = n);
            })
          ),
          (0, T.on)(eb, (e, { errors: n }) =>
            dt(e, (t) => {
              (t.isLoading = !1), (t.validationErrors = n);
            })
          )
        ),
        WM = (0, T.Tz)({ name: ln.USER_PROFILE, reducer: ZM });
      let YM = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({
              providers: [ob],
              imports: [Zt, T.Aw.forFeature(WM), Ir.forFeature([GM]), $M, Fs, go, iv, av, sv, L_],
            })),
            e
          );
        })(),
        KM = (() => {
          class e {
            constructor() {
              this.StoreEndpoints = xn;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = a.Xpm({
              type: e,
              selectors: [['ma-your-feed']],
              decls: 9,
              vars: 1,
              consts: [
                [1, 'home-page'],
                [1, 'container', 'page'],
                [1, 'row'],
                [1, 'col-md-9'],
                [3, 'apiUrl'],
                [1, 'col-md-3'],
              ],
              template: function (t, i) {
                1 & t &&
                  (a.TgZ(0, 'div', 0),
                  a._UZ(1, 'ma-banner'),
                  a.TgZ(2, 'div', 1)(3, 'div', 2)(4, 'div', 3),
                  a._UZ(5, 'ma-feed-toggler')(6, 'ma-feed', 4),
                  a.qZA(),
                  a.TgZ(7, 'div', 5),
                  a._UZ(8, 'ma-popular-tags'),
                  a.qZA()()()()),
                  2 & t && (a.xp6(6), a.Q6J('apiUrl', i.StoreEndpoints.YOUR_FEEDS));
              },
              dependencies: [Mu, Gs, Vl, Xh],
            })),
            e
          );
        })();
      const qM = [{ path: ct.Your_Feed, component: KM }];
      let JM = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [wt.forChild(qM), wt] })),
            e
          );
        })(),
        QM = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e })),
            (e.ɵinj = a.cJS({ imports: [Zt, JM, sv, iv, hC, av] })),
            e
          );
        })();
      const ib = function (e, n) {
          return ['/', e, n];
        },
        mC = function (e) {
          return ['/', e];
        };
      function XM(e, n) {
        if (
          (1 & e &&
            (a.ynx(0),
            a.TgZ(1, 'li', 4)(2, 'a', 5),
            a._UZ(3, 'i', 7),
            a._uU(4, ' New Post '),
            a.qZA()(),
            a.TgZ(5, 'li', 4)(6, 'a', 5),
            a._UZ(7, 'i', 8),
            a._uU(8, ' Settings '),
            a.qZA()(),
            a.TgZ(9, 'li', 4)(10, 'a', 5),
            a.ALo(11, 'async'),
            a._UZ(12, 'img', 9),
            a.ALo(13, 'async'),
            a._uU(14),
            a.ALo(15, 'async'),
            a.qZA()(),
            a.BQk()),
          2 & e)
        ) {
          const t = a.oxw();
          a.xp6(2),
            a.Q6J('routerLink', a.WLB(11, ib, t.HttpLinks.Posts, t.HttpLinks.NewPost)),
            a.xp6(4),
            a.Q6J('routerLink', a.VKq(14, mC, t.HttpLinks.Settings)),
            a.xp6(4),
            a.Q6J(
              'routerLink',
              a.WLB(16, ib, t.HttpLinks.Profiles, a.lcZ(11, 5, t.currentUser$).username)
            ),
            a.xp6(2),
            a.Q6J('src', a.lcZ(13, 7, t.currentUser$).image, a.LSH),
            a.xp6(2),
            a.hij(' ', a.lcZ(15, 9, t.currentUser$).username, ' ');
        }
      }
      function eT(e, n) {
        if (
          (1 & e &&
            (a.ynx(0),
            a.TgZ(1, 'li', 4)(2, 'a', 5),
            a._UZ(3, 'i', 10),
            a._uU(4, ' Sign In '),
            a.qZA()(),
            a.TgZ(5, 'li', 4)(6, 'a', 5),
            a._UZ(7, 'i', 11),
            a._uU(8, ' Sign Up '),
            a.qZA()(),
            a.BQk()),
          2 & e)
        ) {
          const t = a.oxw();
          a.xp6(2),
            a.Q6J('routerLink', a.VKq(2, mC, t.HttpLinks.Login)),
            a.xp6(4),
            a.Q6J('routerLink', a.VKq(4, mC, t.HttpLinks.Register));
        }
      }
      const sb = function (e) {
        return [e];
      };
      let tT = (() => {
          class e {
            constructor(t) {
              (this.store = t), (this.brand = 'Medium'), (this.HttpLinks = ct);
            }
            ngOnInit() {
              this.initializeValues();
            }
            initializeValues() {
              (this.isLoggedIn$ = this.store.pipe((0, T.Ys)(ty))),
                (this.isAnonymous$ = this.store.pipe((0, T.Ys)(Bh))),
                (this.currentUser$ = this.store.pipe((0, T.Ys)(Wo)));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(T.yh));
            }),
            (e.ɵcmp = a.Xpm({
              type: e,
              selectors: [['ma-topBar']],
              decls: 13,
              vars: 15,
              consts: [
                [1, 'navbar', 'navbar-container'],
                [1, 'container'],
                [1, 'navbar-brand', 3, 'routerLink'],
                [1, 'nav', 'navbar-nav', 'pull-xs-right'],
                [1, 'nav-item'],
                [1, 'nav-link', 3, 'routerLink'],
                [4, 'ngIf'],
                [1, 'ion-compose'],
                [1, 'ion-gear-a'],
                [1, 'user-pic', 3, 'src'],
                [1, 'ion-log-in'],
                [1, 'ion-person-stalker'],
              ],
              template: function (t, i) {
                1 & t &&
                  (a.TgZ(0, 'nav', 0)(1, 'section', 1)(2, 'a', 2),
                  a._uU(3),
                  a.ALo(4, 'uppercase'),
                  a.qZA(),
                  a.TgZ(5, 'ul', 3)(6, 'li', 4)(7, 'a', 5),
                  a._uU(8, ' Home '),
                  a.qZA()(),
                  a.YNc(9, XM, 16, 19, 'ng-container', 6),
                  a.ALo(10, 'async'),
                  a.YNc(11, eT, 9, 6, 'ng-container', 6),
                  a.ALo(12, 'async'),
                  a.qZA()()()),
                  2 & t &&
                    (a.xp6(2),
                    a.Q6J('routerLink', a.VKq(11, sb, i.HttpLinks.Home)),
                    a.xp6(1),
                    a.Oqu(a.lcZ(4, 5, i.brand)),
                    a.xp6(4),
                    a.Q6J('routerLink', a.VKq(13, sb, i.HttpLinks.Home)),
                    a.xp6(2),
                    a.Q6J('ngIf', a.lcZ(10, 7, i.isLoggedIn$)),
                    a.xp6(2),
                    a.Q6J('ngIf', a.lcZ(12, 9, i.isAnonymous$)));
              },
              dependencies: [sn, jn, He, Ot],
              styles: ['.navbar-container[_ngcontent-%COMP%]{height:56px}'],
            })),
            e
          );
        })(),
        nT = (() => {
          class e {
            constructor(t) {
              this.store = t;
            }
            ngOnInit() {
              this.store.dispatch(iC());
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.Y36(T.yh));
            }),
            (e.ɵcmp = a.Xpm({
              type: e,
              selectors: [['app-root']],
              decls: 2,
              vars: 0,
              template: function (t, i) {
                1 & t && a._UZ(0, 'ma-topBar')(1, 'router-outlet');
              },
              dependencies: [xf, tT],
              encapsulation: 2,
            })),
            e
          );
        })(),
        rT = (() => {
          class e {
            constructor(t) {
              this.persistentService = t;
            }
            intercept(t, i) {
              const u = this.persistentService.get(Hi.Token);
              return (
                (t = t.clone({
                  headers: u ? t.headers.set('Authorization', `Bearer ${u}`) : t.headers,
                })),
                i.handle(t)
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(a.LFG(Qs));
            }),
            (e.ɵprov = a.Yz7({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        oT = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = a.oAB({ type: e, bootstrap: [nT] })),
            (e.ɵinj = a.cJS({
              providers: [Qs, { provide: Bd, useClass: rT, multi: !0 }],
              imports: [
                rs,
                Da,
                T.Aw.forRoot({ router: qm }),
                Ir.forRoot([]),
                n_.forRoot({}),
                i_.FT.instrument({ maxAge: 25, logOnly: true }),
                a_,
                uA,
                wM,
                sM,
                QM,
                SM,
                DA,
                VA,
                rp,
                CM,
                YM,
              ],
            })),
            e
          );
        })();
      $v()
        .bootstrapModule(oT)
        .catch((e) => console.error(e));
    },
    8073: function (V) {
      V.exports = (function () {
        'use strict';
        function E(x, P) {
          for (var b = 0; b < P.length; b++) {
            var O = P[b];
            (O.enumerable = O.enumerable || !1),
              (O.configurable = !0),
              'value' in O && (O.writable = !0),
              Object.defineProperty(x, O.key, O);
          }
        }
        function a(x, P, b) {
          return (
            P in x
              ? Object.defineProperty(x, P, {
                  value: b,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (x[P] = b),
            x
          );
        }
        function G() {
          return (
            (G =
              Object.assign ||
              function (x) {
                for (var P = 1; P < arguments.length; P++) {
                  var b = arguments[P];
                  for (var O in b) Object.prototype.hasOwnProperty.call(b, O) && (x[O] = b[O]);
                }
                return x;
              }),
            G.apply(this, arguments)
          );
        }
        function Z(x, P) {
          var b = Object.keys(x);
          if (Object.getOwnPropertySymbols) {
            var O = Object.getOwnPropertySymbols(x);
            P &&
              (O = O.filter(function (I) {
                return Object.getOwnPropertyDescriptor(x, I).enumerable;
              })),
              b.push.apply(b, O);
          }
          return b;
        }
        function L(x) {
          for (var P = 1; P < arguments.length; P++) {
            var b = null != arguments[P] ? arguments[P] : {};
            P % 2
              ? Z(Object(b), !0).forEach(function (O) {
                  a(x, O, b[O]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(b))
              : Z(Object(b)).forEach(function (O) {
                  Object.defineProperty(x, O, Object.getOwnPropertyDescriptor(b, O));
                });
          }
          return x;
        }
        var H = (function () {
          function x() {
            var P = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
              b = arguments.length > 1 ? arguments[1] : void 0,
              O = arguments.length > 2 ? arguments[2] : void 0;
            !(function R(x, P) {
              if (!(x instanceof P)) throw new TypeError('Cannot call a class as a function');
            })(this, x);
            var I = this;
            if (!P || 1 !== P.nodeType) return new Error('Incorrect element type');
            (I.$container = P),
              (I.texts = b || []),
              (I.config = L(L({}, x._defaultConfig), O || {})),
              (I.radius = I.config.radius),
              (I.depth = 2 * I.radius),
              (I.size = 1.5 * I.radius),
              (I.maxSpeed = x._getMaxSpeed(I.config.maxSpeed)),
              (I.initSpeed = x._getInitSpeed(I.config.initSpeed)),
              (I.direction = I.config.direction),
              (I.keep = I.config.keep),
              (I.paused = !1),
              I._createElment(),
              I._init(),
              x.list.push({ el: I.$el, container: P, instance: I });
          }
          return (
            (function M(x, P, b) {
              return P && E(x.prototype, P), b && E(x, b), x;
            })(
              x,
              [
                {
                  key: '_createElment',
                  value: function () {
                    var b = this,
                      O = document.createElement('div');
                    (O.className = b.config.containerClass),
                      b.config.useContainerInlineStyles &&
                        ((O.style.position = 'relative'),
                        (O.style.width = ''.concat(2 * b.radius, 'px')),
                        (O.style.height = ''.concat(2 * b.radius, 'px'))),
                      (b.items = []),
                      b.texts.forEach(function (I, W) {
                        var q = b._createTextItem(I, W);
                        O.appendChild(q.el), b.items.push(q);
                      }),
                      b.$container.appendChild(O),
                      (b.$el = O);
                  },
                },
                {
                  key: '_createTextItem',
                  value: function (b) {
                    var O = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                      I = this,
                      W = document.createElement('span');
                    if (((W.className = I.config.itemClass), I.config.useItemInlineStyles)) {
                      (W.style.willChange = 'transform, opacity, filter'),
                        (W.style.position = 'absolute'),
                        (W.style.top = '50%'),
                        (W.style.left = '50%'),
                        (W.style.zIndex = O + 1),
                        (W.style.filter = 'alpha(opacity=0)'),
                        (W.style.opacity = 0);
                      var q = '50% 50%';
                      (W.style.WebkitTransformOrigin = q),
                        (W.style.MozTransformOrigin = q),
                        (W.style.OTransformOrigin = q),
                        (W.style.transformOrigin = q);
                      var ie = 'translate3d(-50%, -50%, 0) scale(1)';
                      (W.style.WebkitTransform = ie),
                        (W.style.MozTransform = ie),
                        (W.style.OTransform = ie),
                        (W.style.transform = ie);
                    }
                    return (W.innerText = b), L({ el: W }, I._computePosition(O));
                  },
                },
                {
                  key: '_computePosition',
                  value: function (b) {
                    var I = this,
                      W = I.texts.length;
                    arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1] &&
                      (b = Math.floor(Math.random() * (W + 1)));
                    var q = Math.acos((2 * b + 1) / W - 1),
                      ie = Math.sqrt((W + 1) * Math.PI) * q;
                    return {
                      x: (I.size * Math.cos(ie) * Math.sin(q)) / 2,
                      y: (I.size * Math.sin(ie) * Math.sin(q)) / 2,
                      z: (I.size * Math.cos(q)) / 2,
                    };
                  },
                },
                {
                  key: '_requestInterval',
                  value: function (b, O) {
                    var I = window.requestAnimationFrame,
                      W = new Date().getTime(),
                      q = {};
                    return (
                      (q.value = I(function ie() {
                        (q.value = I(ie)),
                          new Date().getTime() - W >= O && (b.call(), (W = new Date().getTime()));
                      })),
                      q
                    );
                  },
                },
                {
                  key: '_init',
                  value: function () {
                    var b = this;
                    (b.active = !1),
                      (b.mouseX0 = b.initSpeed * Math.sin(b.direction * (Math.PI / 180))),
                      (b.mouseY0 = -b.initSpeed * Math.cos(b.direction * (Math.PI / 180))),
                      (b.mouseX = b.mouseX0),
                      (b.mouseY = b.mouseY0);
                    var O = window.matchMedia('(hover: hover)');
                    (!O || O.matches) &&
                      (x._on(b.$el, 'mouseover', function () {
                        b.active = !0;
                      }),
                      x._on(b.$el, 'mouseout', function () {
                        b.active = !1;
                      }),
                      x._on(b.keep ? window : b.$el, 'mousemove', function (I) {
                        I = I || window.event;
                        var W = b.$el.getBoundingClientRect();
                        (b.mouseX = (I.clientX - (W.left + W.width / 2)) / 5),
                          (b.mouseY = (I.clientY - (W.top + W.height / 2)) / 5);
                      })),
                      b._next(),
                      (b.interval = b._requestInterval(function () {
                        b._next.call(b);
                      }, 10));
                  },
                },
                {
                  key: '_next',
                  value: function () {
                    var b = this;
                    if (!b.paused) {
                      !b.keep &&
                        !b.active &&
                        ((b.mouseX =
                          Math.abs(b.mouseX - b.mouseX0) < 1
                            ? b.mouseX0
                            : (b.mouseX + b.mouseX0) / 2),
                        (b.mouseY =
                          Math.abs(b.mouseY - b.mouseY0) < 1
                            ? b.mouseY0
                            : (b.mouseY + b.mouseY0) / 2));
                      var O =
                          (-Math.min(Math.max(-b.mouseY, -b.size), b.size) / b.radius) * b.maxSpeed,
                        I =
                          (Math.min(Math.max(-b.mouseX, -b.size), b.size) / b.radius) * b.maxSpeed;
                      if (!(Math.abs(O) <= 0.01 && Math.abs(I) <= 0.01)) {
                        var W = Math.PI / 180,
                          q = [Math.sin(O * W), Math.cos(O * W), Math.sin(I * W), Math.cos(I * W)];
                        b.items.forEach(function (ie) {
                          var ye = ie.x,
                            Ee = ie.y * q[0] + ie.z * q[1],
                            ge = ie.y * q[1] + ie.z * -q[0],
                            ce = Ee * q[3] - ye * q[2],
                            re = (2 * b.depth) / (2 * b.depth + ce);
                          (ie.x = ye * q[3] + Ee * q[2]),
                            (ie.y = ge),
                            (ie.z = ce),
                            (ie.scale = re.toFixed(3));
                          var Me = re * re - 0.25;
                          Me = (Me > 1 ? 1 : Me).toFixed(3);
                          var me = ie.el,
                            be = (ie.x - me.offsetWidth / 2).toFixed(2),
                            Ze = (ie.y - me.offsetHeight / 2).toFixed(2),
                            Je = 'translate3d('
                              .concat(be, 'px, ')
                              .concat(Ze, 'px, 0) scale(')
                              .concat(ie.scale, ')');
                          (me.style.WebkitTransform = Je),
                            (me.style.MozTransform = Je),
                            (me.style.OTransform = Je),
                            (me.style.transform = Je),
                            (me.style.filter = 'alpha(opacity='.concat(100 * Me, ')')),
                            (me.style.opacity = Me);
                        });
                      }
                    }
                  },
                },
                {
                  key: 'update',
                  value: function (b) {
                    var O = this;
                    (O.texts = b || []),
                      O.texts.forEach(function (ie, ye) {
                        var ee = O.items[ye];
                        ee ||
                          (G((ee = O._createTextItem(ie, ye)), O._computePosition(ye, !0)),
                          O.$el.appendChild(ee.el),
                          O.items.push(ee)),
                          (ee.el.innerText = ie);
                      });
                    var I = O.texts.length,
                      W = O.items.length;
                    I < W &&
                      O.items.splice(I, W - I).forEach(function (ie) {
                        O.$el.removeChild(ie.el);
                      });
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    var b = this;
                    b.interval = null;
                    var O = x.list.findIndex(function (I) {
                      return I.el === b.$el;
                    });
                    -1 !== O && x.list.splice(O, 1),
                      b.$container && b.$el && b.$container.removeChild(b.$el);
                  },
                },
                {
                  key: 'pause',
                  value: function () {
                    this.paused = !0;
                  },
                },
                {
                  key: 'resume',
                  value: function () {
                    this.paused = !1;
                  },
                },
              ],
              [
                {
                  key: '_on',
                  value: function (b, O, I, W) {
                    b.addEventListener
                      ? b.addEventListener(O, I, W)
                      : b.attachEvent
                      ? b.attachEvent('on'.concat(O), I)
                      : (b['on'.concat(O)] = I);
                  },
                },
              ]
            ),
            x
          );
        })();
        return (
          (H.list = []),
          (H._defaultConfig = {
            radius: 100,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            direction: 135,
            keep: !0,
            useContainerInlineStyles: !0,
            useItemInlineStyles: !0,
            containerClass: 'tagcloud',
            itemClass: 'tagcloud--item',
          }),
          (H._getMaxSpeed = function (x) {
            return { slow: 0.5, normal: 1, fast: 2 }[x] || 1;
          }),
          (H._getInitSpeed = function (x) {
            return { slow: 16, normal: 32, fast: 80 }[x] || 32;
          }),
          function (x, P, b) {
            'string' == typeof x && (x = document.querySelectorAll(x)), x.forEach || (x = [x]);
            var O = [];
            return (
              x.forEach(function (I) {
                I && O.push(new H(I, P, b));
              }),
              O.length <= 1 ? O[0] : O
            );
          }
        );
      })();
    },
    1135: (V, R, E) => {
      'use strict';
      E.d(R, { X: () => a });
      var M = E(7579);
      class a extends M.x {
        constructor(Z) {
          super(), (this._value = Z);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(Z) {
          const L = super._subscribe(Z);
          return !L.closed && Z.next(this._value), L;
        }
        getValue() {
          const { hasError: Z, thrownError: L, _value: H } = this;
          if (Z) throw L;
          return this._throwIfClosed(), H;
        }
        next(Z) {
          super.next((this._value = Z));
        }
      }
    },
    9751: (V, R, E) => {
      'use strict';
      E.d(R, { y: () => x });
      var M = E(930),
        a = E(727),
        G = E(8822),
        Z = E(9635),
        L = E(2416),
        H = E(576),
        k = E(2806);
      let x = (() => {
        class I {
          constructor(q) {
            q && (this._subscribe = q);
          }
          lift(q) {
            const ie = new I();
            return (ie.source = this), (ie.operator = q), ie;
          }
          subscribe(q, ie, ye) {
            const ee = (function O(I) {
              return (
                (I && I instanceof M.Lv) ||
                ((function b(I) {
                  return I && (0, H.m)(I.next) && (0, H.m)(I.error) && (0, H.m)(I.complete);
                })(I) &&
                  (0, a.Nn)(I))
              );
            })(q)
              ? q
              : new M.Hp(q, ie, ye);
            return (
              (0, k.x)(() => {
                const { operator: Ee, source: ae } = this;
                ee.add(Ee ? Ee.call(ee, ae) : ae ? this._subscribe(ee) : this._trySubscribe(ee));
              }),
              ee
            );
          }
          _trySubscribe(q) {
            try {
              return this._subscribe(q);
            } catch (ie) {
              q.error(ie);
            }
          }
          forEach(q, ie) {
            return new (ie = P(ie))((ye, ee) => {
              const Ee = new M.Hp({
                next: (ae) => {
                  try {
                    q(ae);
                  } catch (ge) {
                    ee(ge), Ee.unsubscribe();
                  }
                },
                error: ee,
                complete: ye,
              });
              this.subscribe(Ee);
            });
          }
          _subscribe(q) {
            var ie;
            return null === (ie = this.source) || void 0 === ie ? void 0 : ie.subscribe(q);
          }
          [G.L]() {
            return this;
          }
          pipe(...q) {
            return (0, Z.U)(q)(this);
          }
          toPromise(q) {
            return new (q = P(q))((ie, ye) => {
              let ee;
              this.subscribe(
                (Ee) => (ee = Ee),
                (Ee) => ye(Ee),
                () => ie(ee)
              );
            });
          }
        }
        return (I.create = (W) => new I(W)), I;
      })();
      function P(I) {
        var W;
        return null !== (W = I ?? L.v.Promise) && void 0 !== W ? W : Promise;
      }
    },
    4707: (V, R, E) => {
      'use strict';
      E.d(R, { t: () => G });
      var M = E(7579),
        a = E(6063);
      class G extends M.x {
        constructor(L = 1 / 0, H = 1 / 0, k = a.l) {
          super(),
            (this._bufferSize = L),
            (this._windowTime = H),
            (this._timestampProvider = k),
            (this._buffer = []),
            (this._infiniteTimeWindow = !0),
            (this._infiniteTimeWindow = H === 1 / 0),
            (this._bufferSize = Math.max(1, L)),
            (this._windowTime = Math.max(1, H));
        }
        next(L) {
          const {
            isStopped: H,
            _buffer: k,
            _infiniteTimeWindow: x,
            _timestampProvider: P,
            _windowTime: b,
          } = this;
          H || (k.push(L), !x && k.push(P.now() + b)), this._trimBuffer(), super.next(L);
        }
        _subscribe(L) {
          this._throwIfClosed(), this._trimBuffer();
          const H = this._innerSubscribe(L),
            { _infiniteTimeWindow: k, _buffer: x } = this,
            P = x.slice();
          for (let b = 0; b < P.length && !L.closed; b += k ? 1 : 2) L.next(P[b]);
          return this._checkFinalizedStatuses(L), H;
        }
        _trimBuffer() {
          const {
              _bufferSize: L,
              _timestampProvider: H,
              _buffer: k,
              _infiniteTimeWindow: x,
            } = this,
            P = (x ? 1 : 2) * L;
          if ((L < 1 / 0 && P < k.length && k.splice(0, k.length - P), !x)) {
            const b = H.now();
            let O = 0;
            for (let I = 1; I < k.length && k[I] <= b; I += 2) O = I;
            O && k.splice(0, O + 1);
          }
        }
      }
    },
    7579: (V, R, E) => {
      'use strict';
      E.d(R, { x: () => k });
      var M = E(9751),
        a = E(727);
      const Z = (0, E(3888).d)(
        (P) =>
          function () {
            P(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var L = E(8737),
        H = E(2806);
      let k = (() => {
        class P extends M.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(O) {
            const I = new x(this, this);
            return (I.operator = O), I;
          }
          _throwIfClosed() {
            if (this.closed) throw new Z();
          }
          next(O) {
            (0, H.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers || (this.currentObservers = Array.from(this.observers));
                for (const I of this.currentObservers) I.next(O);
              }
            });
          }
          error(O) {
            (0, H.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = O);
                const { observers: I } = this;
                for (; I.length; ) I.shift().error(O);
              }
            });
          }
          complete() {
            (0, H.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: O } = this;
                for (; O.length; ) O.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null);
          }
          get observed() {
            var O;
            return (null === (O = this.observers) || void 0 === O ? void 0 : O.length) > 0;
          }
          _trySubscribe(O) {
            return this._throwIfClosed(), super._trySubscribe(O);
          }
          _subscribe(O) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(O), this._innerSubscribe(O);
          }
          _innerSubscribe(O) {
            const { hasError: I, isStopped: W, observers: q } = this;
            return I || W
              ? a.Lc
              : ((this.currentObservers = null),
                q.push(O),
                new a.w0(() => {
                  (this.currentObservers = null), (0, L.P)(q, O);
                }));
          }
          _checkFinalizedStatuses(O) {
            const { hasError: I, thrownError: W, isStopped: q } = this;
            I ? O.error(W) : q && O.complete();
          }
          asObservable() {
            const O = new M.y();
            return (O.source = this), O;
          }
        }
        return (P.create = (b, O) => new x(b, O)), P;
      })();
      class x extends k {
        constructor(b, O) {
          super(), (this.destination = b), (this.source = O);
        }
        next(b) {
          var O, I;
          null === (I = null === (O = this.destination) || void 0 === O ? void 0 : O.next) ||
            void 0 === I ||
            I.call(O, b);
        }
        error(b) {
          var O, I;
          null === (I = null === (O = this.destination) || void 0 === O ? void 0 : O.error) ||
            void 0 === I ||
            I.call(O, b);
        }
        complete() {
          var b, O;
          null === (O = null === (b = this.destination) || void 0 === b ? void 0 : b.complete) ||
            void 0 === O ||
            O.call(b);
        }
        _subscribe(b) {
          var O, I;
          return null !==
            (I = null === (O = this.source) || void 0 === O ? void 0 : O.subscribe(b)) &&
            void 0 !== I
            ? I
            : a.Lc;
        }
      }
    },
    930: (V, R, E) => {
      'use strict';
      E.d(R, { Hp: () => ye, Lv: () => I });
      var M = E(576),
        a = E(727),
        G = E(2416),
        Z = E(7849),
        L = E(5032);
      const H = P('C', void 0, void 0);
      function P(ce, re, Me) {
        return { kind: ce, value: re, error: Me };
      }
      var b = E(3410),
        O = E(2806);
      class I extends a.w0 {
        constructor(re) {
          super(),
            (this.isStopped = !1),
            re ? ((this.destination = re), (0, a.Nn)(re) && re.add(this)) : (this.destination = ge);
        }
        static create(re, Me, me) {
          return new ye(re, Me, me);
        }
        next(re) {
          this.isStopped
            ? ae(
                (function x(ce) {
                  return P('N', ce, void 0);
                })(re),
                this
              )
            : this._next(re);
        }
        error(re) {
          this.isStopped
            ? ae(
                (function k(ce) {
                  return P('E', void 0, ce);
                })(re),
                this
              )
            : ((this.isStopped = !0), this._error(re));
        }
        complete() {
          this.isStopped ? ae(H, this) : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
        }
        _next(re) {
          this.destination.next(re);
        }
        _error(re) {
          try {
            this.destination.error(re);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const W = Function.prototype.bind;
      function q(ce, re) {
        return W.call(ce, re);
      }
      class ie {
        constructor(re) {
          this.partialObserver = re;
        }
        next(re) {
          const { partialObserver: Me } = this;
          if (Me.next)
            try {
              Me.next(re);
            } catch (me) {
              ee(me);
            }
        }
        error(re) {
          const { partialObserver: Me } = this;
          if (Me.error)
            try {
              Me.error(re);
            } catch (me) {
              ee(me);
            }
          else ee(re);
        }
        complete() {
          const { partialObserver: re } = this;
          if (re.complete)
            try {
              re.complete();
            } catch (Me) {
              ee(Me);
            }
        }
      }
      class ye extends I {
        constructor(re, Me, me) {
          let be;
          if ((super(), (0, M.m)(re) || !re))
            be = { next: re ?? void 0, error: Me ?? void 0, complete: me ?? void 0 };
          else {
            let Ze;
            this && G.v.useDeprecatedNextContext
              ? ((Ze = Object.create(re)),
                (Ze.unsubscribe = () => this.unsubscribe()),
                (be = {
                  next: re.next && q(re.next, Ze),
                  error: re.error && q(re.error, Ze),
                  complete: re.complete && q(re.complete, Ze),
                }))
              : (be = re);
          }
          this.destination = new ie(be);
        }
      }
      function ee(ce) {
        G.v.useDeprecatedSynchronousErrorHandling ? (0, O.O)(ce) : (0, Z.h)(ce);
      }
      function ae(ce, re) {
        const { onStoppedNotification: Me } = G.v;
        Me && b.z.setTimeout(() => Me(ce, re));
      }
      const ge = {
        closed: !0,
        next: L.Z,
        error: function Ee(ce) {
          throw ce;
        },
        complete: L.Z,
      };
    },
    727: (V, R, E) => {
      'use strict';
      E.d(R, { Lc: () => H, w0: () => L, Nn: () => k });
      var M = E(576);
      const G = (0, E(3888).d)(
        (P) =>
          function (O) {
            P(this),
              (this.message = O
                ? `${O.length} errors occurred during unsubscription:\n${O.map(
                    (I, W) => `${W + 1}) ${I.toString()}`
                  ).join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = O);
          }
      );
      var Z = E(8737);
      class L {
        constructor(b) {
          (this.initialTeardown = b),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let b;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: O } = this;
            if (O)
              if (((this._parentage = null), Array.isArray(O))) for (const q of O) q.remove(this);
              else O.remove(this);
            const { initialTeardown: I } = this;
            if ((0, M.m)(I))
              try {
                I();
              } catch (q) {
                b = q instanceof G ? q.errors : [q];
              }
            const { _finalizers: W } = this;
            if (W) {
              this._finalizers = null;
              for (const q of W)
                try {
                  x(q);
                } catch (ie) {
                  (b = b ?? []), ie instanceof G ? (b = [...b, ...ie.errors]) : b.push(ie);
                }
            }
            if (b) throw new G(b);
          }
        }
        add(b) {
          var O;
          if (b && b !== this)
            if (this.closed) x(b);
            else {
              if (b instanceof L) {
                if (b.closed || b._hasParent(this)) return;
                b._addParent(this);
              }
              (this._finalizers = null !== (O = this._finalizers) && void 0 !== O ? O : []).push(b);
            }
        }
        _hasParent(b) {
          const { _parentage: O } = this;
          return O === b || (Array.isArray(O) && O.includes(b));
        }
        _addParent(b) {
          const { _parentage: O } = this;
          this._parentage = Array.isArray(O) ? (O.push(b), O) : O ? [O, b] : b;
        }
        _removeParent(b) {
          const { _parentage: O } = this;
          O === b ? (this._parentage = null) : Array.isArray(O) && (0, Z.P)(O, b);
        }
        remove(b) {
          const { _finalizers: O } = this;
          O && (0, Z.P)(O, b), b instanceof L && b._removeParent(this);
        }
      }
      L.EMPTY = (() => {
        const P = new L();
        return (P.closed = !0), P;
      })();
      const H = L.EMPTY;
      function k(P) {
        return (
          P instanceof L ||
          (P && 'closed' in P && (0, M.m)(P.remove) && (0, M.m)(P.add) && (0, M.m)(P.unsubscribe))
        );
      }
      function x(P) {
        (0, M.m)(P) ? P() : P.unsubscribe();
      }
    },
    2416: (V, R, E) => {
      'use strict';
      E.d(R, { v: () => M });
      const M = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (V, R, E) => {
      'use strict';
      E.d(R, { E: () => a });
      const a = new (E(9751).y)((L) => L.complete());
    },
    457: (V, R, E) => {
      'use strict';
      E.d(R, { D: () => Me });
      var M = E(8421),
        a = E(5363),
        G = E(4482);
      function Z(me, be = 0) {
        return (0, G.e)((Ze, Je) => {
          Je.add(me.schedule(() => Ze.subscribe(Je), be));
        });
      }
      var k = E(9751),
        P = E(2202),
        b = E(576),
        O = E(9672);
      function W(me, be) {
        if (!me) throw new Error('Iterable cannot be null');
        return new k.y((Ze) => {
          (0, O.f)(Ze, be, () => {
            const Je = me[Symbol.asyncIterator]();
            (0, O.f)(
              Ze,
              be,
              () => {
                Je.next().then((lt) => {
                  lt.done ? Ze.complete() : Ze.next(lt.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var q = E(3670),
        ie = E(8239),
        ye = E(1144),
        ee = E(6495),
        Ee = E(2206),
        ae = E(4532),
        ge = E(3260);
      function Me(me, be) {
        return be
          ? (function re(me, be) {
              if (null != me) {
                if ((0, q.c)(me))
                  return (function L(me, be) {
                    return (0, M.Xf)(me).pipe(Z(be), (0, a.Q)(be));
                  })(me, be);
                if ((0, ye.z)(me))
                  return (function x(me, be) {
                    return new k.y((Ze) => {
                      let Je = 0;
                      return be.schedule(function () {
                        Je === me.length
                          ? Ze.complete()
                          : (Ze.next(me[Je++]), Ze.closed || this.schedule());
                      });
                    });
                  })(me, be);
                if ((0, ie.t)(me))
                  return (function H(me, be) {
                    return (0, M.Xf)(me).pipe(Z(be), (0, a.Q)(be));
                  })(me, be);
                if ((0, Ee.D)(me)) return W(me, be);
                if ((0, ee.T)(me))
                  return (function I(me, be) {
                    return new k.y((Ze) => {
                      let Je;
                      return (
                        (0, O.f)(Ze, be, () => {
                          (Je = me[P.h]()),
                            (0, O.f)(
                              Ze,
                              be,
                              () => {
                                let lt, ft;
                                try {
                                  ({ value: lt, done: ft } = Je.next());
                                } catch (Qe) {
                                  return void Ze.error(Qe);
                                }
                                ft ? Ze.complete() : Ze.next(lt);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, b.m)(Je?.return) && Je.return()
                      );
                    });
                  })(me, be);
                if ((0, ge.L)(me))
                  return (function ce(me, be) {
                    return W((0, ge.Q)(me), be);
                  })(me, be);
              }
              throw (0, ae.z)(me);
            })(me, be)
          : (0, M.Xf)(me);
      }
    },
    8421: (V, R, E) => {
      'use strict';
      E.d(R, { Xf: () => W });
      var M = E(655),
        a = E(1144),
        G = E(8239),
        Z = E(9751),
        L = E(3670),
        H = E(2206),
        k = E(4532),
        x = E(6495),
        P = E(3260),
        b = E(576),
        O = E(7849),
        I = E(8822);
      function W(ce) {
        if (ce instanceof Z.y) return ce;
        if (null != ce) {
          if ((0, L.c)(ce))
            return (function q(ce) {
              return new Z.y((re) => {
                const Me = ce[I.L]();
                if ((0, b.m)(Me.subscribe)) return Me.subscribe(re);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(ce);
          if ((0, a.z)(ce))
            return (function ie(ce) {
              return new Z.y((re) => {
                for (let Me = 0; Me < ce.length && !re.closed; Me++) re.next(ce[Me]);
                re.complete();
              });
            })(ce);
          if ((0, G.t)(ce))
            return (function ye(ce) {
              return new Z.y((re) => {
                ce.then(
                  (Me) => {
                    re.closed || (re.next(Me), re.complete());
                  },
                  (Me) => re.error(Me)
                ).then(null, O.h);
              });
            })(ce);
          if ((0, H.D)(ce)) return Ee(ce);
          if ((0, x.T)(ce))
            return (function ee(ce) {
              return new Z.y((re) => {
                for (const Me of ce) if ((re.next(Me), re.closed)) return;
                re.complete();
              });
            })(ce);
          if ((0, P.L)(ce))
            return (function ae(ce) {
              return Ee((0, P.Q)(ce));
            })(ce);
        }
        throw (0, k.z)(ce);
      }
      function Ee(ce) {
        return new Z.y((re) => {
          (function ge(ce, re) {
            var Me, me, be, Ze;
            return (0, M.mG)(this, void 0, void 0, function* () {
              try {
                for (Me = (0, M.KL)(ce); !(me = yield Me.next()).done; )
                  if ((re.next(me.value), re.closed)) return;
              } catch (Je) {
                be = { error: Je };
              } finally {
                try {
                  me && !me.done && (Ze = Me.return) && (yield Ze.call(Me));
                } finally {
                  if (be) throw be.error;
                }
              }
              re.complete();
            });
          })(ce, re).catch((Me) => re.error(Me));
        });
      }
    },
    6451: (V, R, E) => {
      'use strict';
      E.d(R, { T: () => H });
      var M = E(8189),
        a = E(8421),
        G = E(515),
        Z = E(7669),
        L = E(457);
      function H(...k) {
        const x = (0, Z.yG)(k),
          P = (0, Z._6)(k, 1 / 0),
          b = k;
        return b.length ? (1 === b.length ? (0, a.Xf)(b[0]) : (0, M.J)(P)((0, L.D)(b, x))) : G.E;
      }
    },
    9646: (V, R, E) => {
      'use strict';
      E.d(R, { of: () => G });
      var M = E(7669),
        a = E(457);
      function G(...Z) {
        const L = (0, M.yG)(Z);
        return (0, a.D)(Z, L);
      }
    },
    5403: (V, R, E) => {
      'use strict';
      E.d(R, { Q: () => G, x: () => a });
      var M = E(930);
      function a(Z, L, H, k, x) {
        return new G(Z, L, H, k, x);
      }
      class G extends M.Lv {
        constructor(L, H, k, x, P, b) {
          super(L),
            (this.onFinalize = P),
            (this.shouldUnsubscribe = b),
            (this._next = H
              ? function (O) {
                  try {
                    H(O);
                  } catch (I) {
                    L.error(I);
                  }
                }
              : super._next),
            (this._error = x
              ? function (O) {
                  try {
                    x(O);
                  } catch (I) {
                    L.error(I);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = k
              ? function () {
                  try {
                    k();
                  } catch (O) {
                    L.error(O);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var L;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: H } = this;
            super.unsubscribe(),
              !H && (null === (L = this.onFinalize) || void 0 === L || L.call(this));
          }
        }
      }
    },
    262: (V, R, E) => {
      'use strict';
      E.d(R, { K: () => Z });
      var M = E(8421),
        a = E(5403),
        G = E(4482);
      function Z(L) {
        return (0, G.e)((H, k) => {
          let b,
            x = null,
            P = !1;
          (x = H.subscribe(
            (0, a.x)(k, void 0, void 0, (O) => {
              (b = (0, M.Xf)(L(O, Z(L)(H)))),
                x ? (x.unsubscribe(), (x = null), b.subscribe(k)) : (P = !0);
            })
          )),
            P && (x.unsubscribe(), (x = null), b.subscribe(k));
        });
      }
    },
    4351: (V, R, E) => {
      'use strict';
      E.d(R, { b: () => G });
      var M = E(5577),
        a = E(576);
      function G(Z, L) {
        return (0, a.m)(L) ? (0, M.z)(Z, L, 1) : (0, M.z)(Z, 1);
      }
    },
    8372: (V, R, E) => {
      'use strict';
      E.d(R, { b: () => Z });
      var M = E(4986),
        a = E(4482),
        G = E(5403);
      function Z(L, H = M.z) {
        return (0, a.e)((k, x) => {
          let P = null,
            b = null,
            O = null;
          const I = () => {
            if (P) {
              P.unsubscribe(), (P = null);
              const q = b;
              (b = null), x.next(q);
            }
          };
          function W() {
            const q = O + L,
              ie = H.now();
            if (ie < q) return (P = this.schedule(void 0, q - ie)), void x.add(P);
            I();
          }
          k.subscribe(
            (0, G.x)(
              x,
              (q) => {
                (b = q), (O = H.now()), P || ((P = H.schedule(W, L)), x.add(P));
              },
              () => {
                I(), x.complete();
              },
              void 0,
              () => {
                b = P = null;
              }
            )
          );
        });
      }
    },
    9300: (V, R, E) => {
      'use strict';
      E.d(R, { h: () => G });
      var M = E(4482),
        a = E(5403);
      function G(Z, L) {
        return (0, M.e)((H, k) => {
          let x = 0;
          H.subscribe((0, a.x)(k, (P) => Z.call(L, P, x++) && k.next(P)));
        });
      }
    },
    4004: (V, R, E) => {
      'use strict';
      E.d(R, { U: () => G });
      var M = E(4482),
        a = E(5403);
      function G(Z, L) {
        return (0, M.e)((H, k) => {
          let x = 0;
          H.subscribe(
            (0, a.x)(k, (P) => {
              k.next(Z.call(L, P, x++));
            })
          );
        });
      }
    },
    8189: (V, R, E) => {
      'use strict';
      E.d(R, { J: () => G });
      var M = E(5577),
        a = E(4671);
      function G(Z = 1 / 0) {
        return (0, M.z)(a.y, Z);
      }
    },
    5577: (V, R, E) => {
      'use strict';
      E.d(R, { z: () => x });
      var M = E(4004),
        a = E(8421),
        G = E(4482),
        Z = E(9672),
        L = E(5403),
        k = E(576);
      function x(P, b, O = 1 / 0) {
        return (0, k.m)(b)
          ? x((I, W) => (0, M.U)((q, ie) => b(I, q, W, ie))((0, a.Xf)(P(I, W))), O)
          : ('number' == typeof b && (O = b),
            (0, G.e)((I, W) =>
              (function H(P, b, O, I, W, q, ie, ye) {
                const ee = [];
                let Ee = 0,
                  ae = 0,
                  ge = !1;
                const ce = () => {
                    ge && !ee.length && !Ee && b.complete();
                  },
                  re = (me) => (Ee < I ? Me(me) : ee.push(me)),
                  Me = (me) => {
                    q && b.next(me), Ee++;
                    let be = !1;
                    (0, a.Xf)(O(me, ae++)).subscribe(
                      (0, L.x)(
                        b,
                        (Ze) => {
                          W?.(Ze), q ? re(Ze) : b.next(Ze);
                        },
                        () => {
                          be = !0;
                        },
                        void 0,
                        () => {
                          if (be)
                            try {
                              for (Ee--; ee.length && Ee < I; ) {
                                const Ze = ee.shift();
                                ie ? (0, Z.f)(b, ie, () => Me(Ze)) : Me(Ze);
                              }
                              ce();
                            } catch (Ze) {
                              b.error(Ze);
                            }
                        }
                      )
                    );
                  };
                return (
                  P.subscribe(
                    (0, L.x)(b, re, () => {
                      (ge = !0), ce();
                    })
                  ),
                  () => {
                    ye?.();
                  }
                );
              })(I, W, P, O)
            ));
      }
    },
    5363: (V, R, E) => {
      'use strict';
      E.d(R, { Q: () => Z });
      var M = E(9672),
        a = E(4482),
        G = E(5403);
      function Z(L, H = 0) {
        return (0, a.e)((k, x) => {
          k.subscribe(
            (0, G.x)(
              x,
              (P) => (0, M.f)(x, L, () => x.next(P), H),
              () => (0, M.f)(x, L, () => x.complete(), H),
              (P) => (0, M.f)(x, L, () => x.error(P), H)
            )
          );
        });
      }
    },
    5026: (V, R, E) => {
      'use strict';
      E.d(R, { R: () => Z });
      var M = E(4482),
        a = E(5403);
      function Z(L, H) {
        return (0, M.e)(
          (function G(L, H, k, x, P) {
            return (b, O) => {
              let I = k,
                W = H,
                q = 0;
              b.subscribe(
                (0, a.x)(
                  O,
                  (ie) => {
                    const ye = q++;
                    (W = I ? L(W, ie, ye) : ((I = !0), ie)), x && O.next(W);
                  },
                  P &&
                    (() => {
                      I && O.next(W), O.complete();
                    })
                )
              );
            };
          })(L, H, arguments.length >= 2, !0)
        );
      }
    },
    3099: (V, R, E) => {
      'use strict';
      E.d(R, { B: () => L });
      var M = E(8421),
        a = E(7579),
        G = E(930),
        Z = E(4482);
      function L(k = {}) {
        const {
          connector: x = () => new a.x(),
          resetOnError: P = !0,
          resetOnComplete: b = !0,
          resetOnRefCountZero: O = !0,
        } = k;
        return (I) => {
          let W,
            q,
            ie,
            ye = 0,
            ee = !1,
            Ee = !1;
          const ae = () => {
              q?.unsubscribe(), (q = void 0);
            },
            ge = () => {
              ae(), (W = ie = void 0), (ee = Ee = !1);
            },
            ce = () => {
              const re = W;
              ge(), re?.unsubscribe();
            };
          return (0, Z.e)((re, Me) => {
            ye++, !Ee && !ee && ae();
            const me = (ie = ie ?? x());
            Me.add(() => {
              ye--, 0 === ye && !Ee && !ee && (q = H(ce, O));
            }),
              me.subscribe(Me),
              !W &&
                ye > 0 &&
                ((W = new G.Hp({
                  next: (be) => me.next(be),
                  error: (be) => {
                    (Ee = !0), ae(), (q = H(ge, P, be)), me.error(be);
                  },
                  complete: () => {
                    (ee = !0), ae(), (q = H(ge, b)), me.complete();
                  },
                })),
                (0, M.Xf)(re).subscribe(W));
          })(I);
        };
      }
      function H(k, x, ...P) {
        if (!0 === x) return void k();
        if (!1 === x) return;
        const b = new G.Hp({
          next: () => {
            b.unsubscribe(), k();
          },
        });
        return (0, M.Xf)(x(...P)).subscribe(b);
      }
    },
    5684: (V, R, E) => {
      'use strict';
      E.d(R, { T: () => a });
      var M = E(9300);
      function a(G) {
        return (0, M.h)((Z, L) => G <= L);
      }
    },
    3900: (V, R, E) => {
      'use strict';
      E.d(R, { w: () => Z });
      var M = E(8421),
        a = E(4482),
        G = E(5403);
      function Z(L, H) {
        return (0, a.e)((k, x) => {
          let P = null,
            b = 0,
            O = !1;
          const I = () => O && !P && x.complete();
          k.subscribe(
            (0, G.x)(
              x,
              (W) => {
                P?.unsubscribe();
                let q = 0;
                const ie = b++;
                (0, M.Xf)(L(W, ie)).subscribe(
                  (P = (0, G.x)(
                    x,
                    (ye) => x.next(H ? H(W, ye, ie, q++) : ye),
                    () => {
                      (P = null), I();
                    }
                  ))
                );
              },
              () => {
                (O = !0), I();
              }
            )
          );
        });
      }
    },
    5698: (V, R, E) => {
      'use strict';
      E.d(R, { q: () => Z });
      var M = E(515),
        a = E(4482),
        G = E(5403);
      function Z(L) {
        return L <= 0
          ? () => M.E
          : (0, a.e)((H, k) => {
              let x = 0;
              H.subscribe(
                (0, G.x)(k, (P) => {
                  ++x <= L && (k.next(P), L <= x && k.complete());
                })
              );
            });
      }
    },
    2722: (V, R, E) => {
      'use strict';
      E.d(R, { R: () => L });
      var M = E(4482),
        a = E(5403),
        G = E(8421),
        Z = E(5032);
      function L(H) {
        return (0, M.e)((k, x) => {
          (0, G.Xf)(H).subscribe((0, a.x)(x, () => x.complete(), Z.Z)), !x.closed && k.subscribe(x);
        });
      }
    },
    1749: (V, R, E) => {
      'use strict';
      E.d(R, { V: () => P });
      var M = E(4986),
        G = E(4482),
        Z = E(8421),
        L = E(3888),
        H = E(5403),
        k = E(9672);
      const x = (0, L.d)(
        (O) =>
          function (W = null) {
            O(this),
              (this.message = 'Timeout has occurred'),
              (this.name = 'TimeoutError'),
              (this.info = W);
          }
      );
      function P(O, I) {
        const {
          first: W,
          each: q,
          with: ie = b,
          scheduler: ye = I ?? M.z,
          meta: ee = null,
        } = (function a(O) {
          return O instanceof Date && !isNaN(O);
        })(O)
          ? { first: O }
          : 'number' == typeof O
          ? { each: O }
          : O;
        if (null == W && null == q) throw new TypeError('No timeout provided.');
        return (0, G.e)((Ee, ae) => {
          let ge,
            ce,
            re = null,
            Me = 0;
          const me = (be) => {
            ce = (0, k.f)(
              ae,
              ye,
              () => {
                try {
                  ge.unsubscribe(),
                    (0, Z.Xf)(ie({ meta: ee, lastValue: re, seen: Me })).subscribe(ae);
                } catch (Ze) {
                  ae.error(Ze);
                }
              },
              be
            );
          };
          (ge = Ee.subscribe(
            (0, H.x)(
              ae,
              (be) => {
                ce?.unsubscribe(), Me++, ae.next((re = be)), q > 0 && me(q);
              },
              void 0,
              void 0,
              () => {
                ce?.closed || ce?.unsubscribe(), (re = null);
              }
            )
          )),
            !Me && me(null != W ? ('number' == typeof W ? W : +W - ye.now()) : q);
        });
      }
      function b(O) {
        throw new x(O);
      }
    },
    1365: (V, R, E) => {
      'use strict';
      E.d(R, { M: () => k });
      var M = E(4482),
        a = E(5403),
        G = E(8421),
        Z = E(4671),
        L = E(5032),
        H = E(7669);
      function k(...x) {
        const P = (0, H.jO)(x);
        return (0, M.e)((b, O) => {
          const I = x.length,
            W = new Array(I);
          let q = x.map(() => !1),
            ie = !1;
          for (let ye = 0; ye < I; ye++)
            (0, G.Xf)(x[ye]).subscribe(
              (0, a.x)(
                O,
                (ee) => {
                  (W[ye] = ee), !ie && !q[ye] && ((q[ye] = !0), (ie = q.every(Z.y)) && (q = null));
                },
                L.Z
              )
            );
          b.subscribe(
            (0, a.x)(O, (ye) => {
              if (ie) {
                const ee = [ye, ...W];
                O.next(P ? P(...ee) : ee);
              }
            })
          );
        });
      }
    },
    4408: (V, R, E) => {
      'use strict';
      E.d(R, { o: () => L });
      var M = E(727);
      class a extends M.w0 {
        constructor(k, x) {
          super();
        }
        schedule(k, x = 0) {
          return this;
        }
      }
      const G = {
        setInterval(H, k, ...x) {
          const { delegate: P } = G;
          return P?.setInterval ? P.setInterval(H, k, ...x) : setInterval(H, k, ...x);
        },
        clearInterval(H) {
          const { delegate: k } = G;
          return (k?.clearInterval || clearInterval)(H);
        },
        delegate: void 0,
      };
      var Z = E(8737);
      class L extends a {
        constructor(k, x) {
          super(k, x), (this.scheduler = k), (this.work = x), (this.pending = !1);
        }
        schedule(k, x = 0) {
          var P;
          if (this.closed) return this;
          this.state = k;
          const b = this.id,
            O = this.scheduler;
          return (
            null != b && (this.id = this.recycleAsyncId(O, b, x)),
            (this.pending = !0),
            (this.delay = x),
            (this.id =
              null !== (P = this.id) && void 0 !== P ? P : this.requestAsyncId(O, this.id, x)),
            this
          );
        }
        requestAsyncId(k, x, P = 0) {
          return G.setInterval(k.flush.bind(k, this), P);
        }
        recycleAsyncId(k, x, P = 0) {
          if (null != P && this.delay === P && !1 === this.pending) return x;
          null != x && G.clearInterval(x);
        }
        execute(k, x) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const P = this._execute(k, x);
          if (P) return P;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(k, x) {
          let b,
            P = !1;
          try {
            this.work(k);
          } catch (O) {
            (P = !0), (b = O || new Error('Scheduled action threw falsy error'));
          }
          if (P) return this.unsubscribe(), b;
        }
        unsubscribe() {
          if (!this.closed) {
            const { id: k, scheduler: x } = this,
              { actions: P } = x;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              (0, Z.P)(P, this),
              null != k && (this.id = this.recycleAsyncId(x, k, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
    },
    7565: (V, R, E) => {
      'use strict';
      E.d(R, { v: () => G });
      var M = E(6063);
      class a {
        constructor(L, H = a.now) {
          (this.schedulerActionCtor = L), (this.now = H);
        }
        schedule(L, H = 0, k) {
          return new this.schedulerActionCtor(this, L).schedule(k, H);
        }
      }
      a.now = M.l.now;
      class G extends a {
        constructor(L, H = a.now) {
          super(L, H), (this.actions = []), (this._active = !1);
        }
        flush(L) {
          const { actions: H } = this;
          if (this._active) return void H.push(L);
          let k;
          this._active = !0;
          do {
            if ((k = L.execute(L.state, L.delay))) break;
          } while ((L = H.shift()));
          if (((this._active = !1), k)) {
            for (; (L = H.shift()); ) L.unsubscribe();
            throw k;
          }
        }
      }
    },
    4986: (V, R, E) => {
      'use strict';
      E.d(R, { z: () => G });
      var M = E(4408);
      const G = new (E(7565).v)(M.o);
    },
    6063: (V, R, E) => {
      'use strict';
      E.d(R, { l: () => M });
      const M = { now: () => (M.delegate || Date).now(), delegate: void 0 };
    },
    233: (V, R, E) => {
      'use strict';
      E.d(R, { N: () => L });
      var M = E(4408),
        G = E(7565);
      const L = new (class Z extends G.v {})(
        class a extends M.o {
          constructor(x, P) {
            super(x, P), (this.scheduler = x), (this.work = P);
          }
          schedule(x, P = 0) {
            return P > 0
              ? super.schedule(x, P)
              : ((this.delay = P), (this.state = x), this.scheduler.flush(this), this);
          }
          execute(x, P) {
            return P > 0 || this.closed ? super.execute(x, P) : this._execute(x, P);
          }
          requestAsyncId(x, P, b = 0) {
            return (null != b && b > 0) || (null == b && this.delay > 0)
              ? super.requestAsyncId(x, P, b)
              : (x.flush(this), 0);
          }
        }
      );
    },
    3410: (V, R, E) => {
      'use strict';
      E.d(R, { z: () => M });
      const M = {
        setTimeout(a, G, ...Z) {
          const { delegate: L } = M;
          return L?.setTimeout ? L.setTimeout(a, G, ...Z) : setTimeout(a, G, ...Z);
        },
        clearTimeout(a) {
          const { delegate: G } = M;
          return (G?.clearTimeout || clearTimeout)(a);
        },
        delegate: void 0,
      };
    },
    2202: (V, R, E) => {
      'use strict';
      E.d(R, { h: () => a });
      const a = (function M() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      })();
    },
    8822: (V, R, E) => {
      'use strict';
      E.d(R, { L: () => M });
      const M = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    7669: (V, R, E) => {
      'use strict';
      E.d(R, { _6: () => H, jO: () => Z, yG: () => L });
      var M = E(576);
      function G(k) {
        return k[k.length - 1];
      }
      function Z(k) {
        return (0, M.m)(G(k)) ? k.pop() : void 0;
      }
      function L(k) {
        return (function a(k) {
          return k && (0, M.m)(k.schedule);
        })(G(k))
          ? k.pop()
          : void 0;
      }
      function H(k, x) {
        return 'number' == typeof G(k) ? k.pop() : x;
      }
    },
    8737: (V, R, E) => {
      'use strict';
      function M(a, G) {
        if (a) {
          const Z = a.indexOf(G);
          0 <= Z && a.splice(Z, 1);
        }
      }
      E.d(R, { P: () => M });
    },
    3888: (V, R, E) => {
      'use strict';
      function M(a) {
        const Z = a((L) => {
          Error.call(L), (L.stack = new Error().stack);
        });
        return (Z.prototype = Object.create(Error.prototype)), (Z.prototype.constructor = Z), Z;
      }
      E.d(R, { d: () => M });
    },
    2806: (V, R, E) => {
      'use strict';
      E.d(R, { O: () => Z, x: () => G });
      var M = E(2416);
      let a = null;
      function G(L) {
        if (M.v.useDeprecatedSynchronousErrorHandling) {
          const H = !a;
          if ((H && (a = { errorThrown: !1, error: null }), L(), H)) {
            const { errorThrown: k, error: x } = a;
            if (((a = null), k)) throw x;
          }
        } else L();
      }
      function Z(L) {
        M.v.useDeprecatedSynchronousErrorHandling && a && ((a.errorThrown = !0), (a.error = L));
      }
    },
    9672: (V, R, E) => {
      'use strict';
      function M(a, G, Z, L = 0, H = !1) {
        const k = G.schedule(function () {
          Z(), H ? a.add(this.schedule(null, L)) : this.unsubscribe();
        }, L);
        if ((a.add(k), !H)) return k;
      }
      E.d(R, { f: () => M });
    },
    4671: (V, R, E) => {
      'use strict';
      function M(a) {
        return a;
      }
      E.d(R, { y: () => M });
    },
    1144: (V, R, E) => {
      'use strict';
      E.d(R, { z: () => M });
      const M = (a) => a && 'number' == typeof a.length && 'function' != typeof a;
    },
    2206: (V, R, E) => {
      'use strict';
      E.d(R, { D: () => a });
      var M = E(576);
      function a(G) {
        return Symbol.asyncIterator && (0, M.m)(G?.[Symbol.asyncIterator]);
      }
    },
    576: (V, R, E) => {
      'use strict';
      function M(a) {
        return 'function' == typeof a;
      }
      E.d(R, { m: () => M });
    },
    3670: (V, R, E) => {
      'use strict';
      E.d(R, { c: () => G });
      var M = E(8822),
        a = E(576);
      function G(Z) {
        return (0, a.m)(Z[M.L]);
      }
    },
    6495: (V, R, E) => {
      'use strict';
      E.d(R, { T: () => G });
      var M = E(2202),
        a = E(576);
      function G(Z) {
        return (0, a.m)(Z?.[M.h]);
      }
    },
    8239: (V, R, E) => {
      'use strict';
      E.d(R, { t: () => a });
      var M = E(576);
      function a(G) {
        return (0, M.m)(G?.then);
      }
    },
    3260: (V, R, E) => {
      'use strict';
      E.d(R, { L: () => Z, Q: () => G });
      var M = E(655),
        a = E(576);
      function G(L) {
        return (0, M.FC)(this, arguments, function* () {
          const k = L.getReader();
          try {
            for (;;) {
              const { value: x, done: P } = yield (0, M.qq)(k.read());
              if (P) return yield (0, M.qq)(void 0);
              yield yield (0, M.qq)(x);
            }
          } finally {
            k.releaseLock();
          }
        });
      }
      function Z(L) {
        return (0, a.m)(L?.getReader);
      }
    },
    4482: (V, R, E) => {
      'use strict';
      E.d(R, { A: () => a, e: () => G });
      var M = E(576);
      function a(Z) {
        return (0, M.m)(Z?.lift);
      }
      function G(Z) {
        return (L) => {
          if (a(L))
            return L.lift(function (H) {
              try {
                return Z(H, this);
              } catch (k) {
                this.error(k);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    5032: (V, R, E) => {
      'use strict';
      function M() {}
      E.d(R, { Z: () => M });
    },
    9635: (V, R, E) => {
      'use strict';
      E.d(R, { U: () => G, z: () => a });
      var M = E(4671);
      function a(...Z) {
        return G(Z);
      }
      function G(Z) {
        return 0 === Z.length
          ? M.y
          : 1 === Z.length
          ? Z[0]
          : function (H) {
              return Z.reduce((k, x) => x(k), H);
            };
      }
    },
    7849: (V, R, E) => {
      'use strict';
      E.d(R, { h: () => G });
      var M = E(2416),
        a = E(3410);
      function G(Z) {
        a.z.setTimeout(() => {
          const { onUnhandledError: L } = M.v;
          if (!L) throw Z;
          L(Z);
        });
      }
    },
    4532: (V, R, E) => {
      'use strict';
      function M(a) {
        return new TypeError(
          `You provided ${
            null !== a && 'object' == typeof a ? 'an invalid object' : `'${a}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      E.d(R, { z: () => M });
    },
    655: (V, R, E) => {
      'use strict';
      function I(j, te, ne, se) {
        return new (ne || (ne = Promise))(function (pe, Oe) {
          function Ie(Dt) {
            try {
              Le(se.next(Dt));
            } catch (st) {
              Oe(st);
            }
          }
          function Sn(Dt) {
            try {
              Le(se.throw(Dt));
            } catch (st) {
              Oe(st);
            }
          }
          function Le(Dt) {
            Dt.done
              ? pe(Dt.value)
              : (function _e(pe) {
                  return pe instanceof ne
                    ? pe
                    : new ne(function (Oe) {
                        Oe(pe);
                      });
                })(Dt.value).then(Ie, Sn);
          }
          Le((se = se.apply(j, te || [])).next());
        });
      }
      function ce(j) {
        return this instanceof ce ? ((this.v = j), this) : new ce(j);
      }
      function re(j, te, ne) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var _e,
          se = ne.apply(j, te || []),
          pe = [];
        return (
          (_e = {}),
          Oe('next'),
          Oe('throw'),
          Oe('return'),
          (_e[Symbol.asyncIterator] = function () {
            return this;
          }),
          _e
        );
        function Oe(ht) {
          se[ht] &&
            (_e[ht] = function (jt) {
              return new Promise(function (bn, ir) {
                pe.push([ht, jt, bn, ir]) > 1 || Ie(ht, jt);
              });
            });
        }
        function Ie(ht, jt) {
          try {
            !(function Sn(ht) {
              ht.value instanceof ce ? Promise.resolve(ht.value.v).then(Le, Dt) : st(pe[0][2], ht);
            })(se[ht](jt));
          } catch (bn) {
            st(pe[0][3], bn);
          }
        }
        function Le(ht) {
          Ie('next', ht);
        }
        function Dt(ht) {
          Ie('throw', ht);
        }
        function st(ht, jt) {
          ht(jt), pe.shift(), pe.length && Ie(pe[0][0], pe[0][1]);
        }
      }
      function me(j) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var ne,
          te = j[Symbol.asyncIterator];
        return te
          ? te.call(j)
          : ((j = (function ye(j) {
              var te = 'function' == typeof Symbol && Symbol.iterator,
                ne = te && j[te],
                se = 0;
              if (ne) return ne.call(j);
              if (j && 'number' == typeof j.length)
                return {
                  next: function () {
                    return j && se >= j.length && (j = void 0), { value: j && j[se++], done: !j };
                  },
                };
              throw new TypeError(
                te ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
              );
            })(j)),
            (ne = {}),
            se('next'),
            se('throw'),
            se('return'),
            (ne[Symbol.asyncIterator] = function () {
              return this;
            }),
            ne);
        function se(pe) {
          ne[pe] =
            j[pe] &&
            function (Oe) {
              return new Promise(function (Ie, Sn) {
                !(function _e(pe, Oe, Ie, Sn) {
                  Promise.resolve(Sn).then(function (Le) {
                    pe({ value: Le, done: Ie });
                  }, Oe);
                })(Ie, Sn, (Oe = j[pe](Oe)).done, Oe.value);
              });
            };
        }
      }
      E.d(R, { FC: () => re, KL: () => me, mG: () => I, qq: () => ce });
    },
    4650: (V, R, E) => {
      'use strict';
      E.d(R, {
        $8M: () => ec,
        $WT: () => jr,
        $Z: () => gm,
        AFp: () => np,
        ALo: () => oy,
        AaK: () => x,
        AsE: () => zo,
        B6R: () => na,
        BQk: () => Wc,
        CHM: () => wv,
        CRH: () => ly,
        CZH: () => ki,
        CqO: () => rh,
        D6c: () => Fu,
        DdM: () => wl,
        EJc: () => TD,
        EpF: () => th,
        F$t: () => t_,
        F4k: () => nh,
        FYo: () => Xg,
        FiY: () => ss,
        GfV: () => Mc,
        Gpc: () => O,
        Hsn: () => n_,
        JOm: () => Mr,
        KtG: () => Sv,
        LFG: () => It,
        LSH: () => Dc,
        Lbi: () => Oy,
        Lck: () => Uh,
        MAs: () => Xf,
        MMx: () => Vh,
        MR2: () => Ra,
        NdJ: () => Yc,
        OlP: () => yt,
        Oqu: () => rl,
        P3R: () => ff,
        PXZ: () => tS,
        Q6J: () => Km,
        QGY: () => Ai,
        Qsj: () => Df,
        R0b: () => or,
        RDi: () => dE,
        Rgc: () => wu,
        SBq: () => Ua,
        Sil: () => xy,
        Suo: () => cy,
        TTD: () => bp,
        TgZ: () => bs,
        VKq: () => K_,
        W1O: () => hy,
        WLB: () => q_,
        X6Q: () => VD,
        XFs: () => Re,
        Xpm: () => Wi,
        Xts: () => yi,
        Y36: () => Wr,
        YKP: () => kh,
        YNc: () => w0,
        Yjl: () => Bu,
        Yz7: () => st,
        Z0I: () => ir,
        ZZ4: () => mp,
        _Bn: () => Z_,
        _UZ: () => iu,
        _Vd: () => hs,
        _c5: () => Qy,
        _uU: () => Ho,
        aQg: () => _p,
        c2e: () => MD,
        cJS: () => jt,
        cg1: () => Ch,
        dDg: () => ap,
        dqk: () => zt,
        eFA: () => Ou,
        eJc: () => Gs,
        ekj: () => et,
        eoX: () => up,
        f3M: () => ni,
        g9A: () => Iy,
        h0i: () => ks,
        hGG: () => Xy,
        hij: () => Go,
        iGM: () => Rl,
        ifc: () => ar,
        ip1: () => Hl,
        jDz: () => jh,
        kEZ: () => J_,
        kL8: () => S_,
        lG2: () => Oo,
        lcZ: () => $h,
        lqb: () => Ei,
        lri: () => Kl,
        n5z: () => qp,
        oAB: () => oa,
        oxw: () => Xm,
        qLn: () => co,
        qOj: () => Wf,
        qZA: () => eh,
        rWj: () => sp,
        sBO: () => Ks,
        s_b: () => Vt,
        soG: () => Gl,
        tBr: () => ic,
        tb: () => lp,
        tp0: () => lr,
        uIk: () => Jf,
        vHH: () => ee,
        vpe: () => yr,
        wAp: () => Fe,
        xp6: () => bf,
        ynx: () => su,
        z2F: () => dp,
        zSh: () => mf,
        zs3: () => jo,
      });
      var M = E(7579),
        a = E(727),
        G = E(9751),
        Z = E(6451),
        L = E(3099);
      function H(r) {
        for (let o in r) if (r[o] === H) return o;
        throw Error('Could not find renamed property on target object.');
      }
      function k(r, o) {
        for (const s in o) o.hasOwnProperty(s) && !r.hasOwnProperty(s) && (r[s] = o[s]);
      }
      function x(r) {
        if ('string' == typeof r) return r;
        if (Array.isArray(r)) return '[' + r.map(x).join(', ') + ']';
        if (null == r) return '' + r;
        if (r.overriddenName) return `${r.overriddenName}`;
        if (r.name) return `${r.name}`;
        const o = r.toString();
        if (null == o) return '' + o;
        const s = o.indexOf('\n');
        return -1 === s ? o : o.substring(0, s);
      }
      function P(r, o) {
        return null == r || '' === r
          ? null === o
            ? ''
            : o
          : null == o || '' === o
          ? r
          : r + ' ' + o;
      }
      const b = H({ __forward_ref__: H });
      function O(r) {
        return (
          (r.__forward_ref__ = O),
          (r.toString = function () {
            return x(this());
          }),
          r
        );
      }
      function I(r) {
        return W(r) ? r() : r;
      }
      function W(r) {
        return 'function' == typeof r && r.hasOwnProperty(b) && r.__forward_ref__ === O;
      }
      function q(r) {
        return r && !!r.ɵproviders;
      }
      const ye = 'https://g.co/ng/security#xss';
      class ee extends Error {
        constructor(o, s) {
          super(Ee(o, s)), (this.code = o);
        }
      }
      function Ee(r, o) {
        return `NG0${Math.abs(r)}${o ? ': ' + o.trim() : ''}`;
      }
      function ae(r) {
        return 'string' == typeof r ? r : null == r ? '' : String(r);
      }
      function me(r, o) {
        throw new ee(-201, !1);
      }
      function Oe(r, o) {
        null == r &&
          (function Ie(r, o, s, c) {
            throw new Error(
              `ASSERTION ERROR: ${r}` + (null == c ? '' : ` [Expected=> ${s} ${c} ${o} <=Actual]`)
            );
          })(o, r, null, '!=');
      }
      function st(r) {
        return {
          token: r.token,
          providedIn: r.providedIn || null,
          factory: r.factory,
          value: void 0,
        };
      }
      function jt(r) {
        return { providers: r.providers || [], imports: r.imports || [] };
      }
      function bn(r) {
        return sr(r, Xo) || sr(r, cd);
      }
      function ir(r) {
        return null !== bn(r);
      }
      function sr(r, o) {
        return r.hasOwnProperty(o) ? r[o] : null;
      }
      function Qo(r) {
        return r && (r.hasOwnProperty(ei) || r.hasOwnProperty(An)) ? r[ei] : null;
      }
      const Xo = H({ ɵprov: H }),
        ei = H({ ɵinj: H }),
        cd = H({ ngInjectableDef: H }),
        An = H({ ngInjectorDef: H });
      var Re = (() => (
        ((Re = Re || {})[(Re.Default = 0)] = 'Default'),
        (Re[(Re.Host = 1)] = 'Host'),
        (Re[(Re.Self = 2)] = 'Self'),
        (Re[(Re.SkipSelf = 4)] = 'SkipSelf'),
        (Re[(Re.Optional = 8)] = 'Optional'),
        Re
      ))();
      let Xs;
      function mn(r) {
        const o = Xs;
        return (Xs = r), o;
      }
      function ea(r, o, s) {
        const c = bn(r);
        return c && 'root' == c.providedIn
          ? void 0 === c.value
            ? (c.value = c.factory())
            : c.value
          : s & Re.Optional
          ? null
          : void 0 !== o
          ? o
          : void me(x(r));
      }
      const zt = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' &&
            typeof WorkerGlobalScope < 'u' &&
            self instanceof WorkerGlobalScope &&
            self))(),
        So = {},
        bo = '__NG_DI_FLAG__',
        Ln = 'ngTempTokenPath',
        Ur = 'ngTokenPath',
        zn = /\n/gm,
        ku = '\u0275',
        Tt = '__source';
      let Ao;
      function pt(r) {
        const o = Ao;
        return (Ao = r), o;
      }
      function Uu(r, o = Re.Default) {
        if (void 0 === Ao) throw new ee(-203, !1);
        return null === Ao ? ea(r, void 0, o) : Ao.get(r, o & Re.Optional ? null : void 0, o);
      }
      function It(r, o = Re.Default) {
        return (
          (function ti() {
            return Xs;
          })() || Uu
        )(I(r), o);
      }
      function ni(r, o = Re.Default) {
        return It(r, ri(o));
      }
      function ri(r) {
        return typeof r > 'u' || 'number' == typeof r
          ? r
          : 0 | (r.optional && 8) | (r.host && 1) | (r.self && 2) | (r.skipSelf && 4);
      }
      function zi(r) {
        const o = [];
        for (let s = 0; s < r.length; s++) {
          const c = I(r[s]);
          if (Array.isArray(c)) {
            if (0 === c.length) throw new ee(900, !1);
            let l,
              d = Re.Default;
            for (let p = 0; p < c.length; p++) {
              const g = c[p],
                m = Mo(g);
              'number' == typeof m ? (-1 === m ? (l = g.token) : (d |= m)) : (l = g);
            }
            o.push(It(l, d));
          } else o.push(It(c));
        }
        return o;
      }
      function Vr(r, o) {
        return (r[bo] = o), (r.prototype[bo] = o), r;
      }
      function Mo(r) {
        return r[bo];
      }
      function Zn(r) {
        return { toString: r }.toString();
      }
      var Er = (() => (
          ((Er = Er || {})[(Er.OnPush = 0)] = 'OnPush'), (Er[(Er.Default = 1)] = 'Default'), Er
        ))(),
        ar = (() => {
          return (
            ((r = ar || (ar = {}))[(r.Emulated = 0)] = 'Emulated'),
            (r[(r.None = 2)] = 'None'),
            (r[(r.ShadowDom = 3)] = 'ShadowDom'),
            ar
          );
          var r;
        })();
      const Wn = {},
        mt = [],
        Zi = H({ ɵcmp: H }),
        oi = H({ ɵdir: H }),
        To = H({ ɵpipe: H }),
        ii = H({ ɵmod: H }),
        Mn = H({ ɵfac: H }),
        Io = H({ __NG_ELEMENT_ID__: H });
      let dd = 0;
      function Wi(r) {
        return Zn(() => {
          const o = ia(r),
            s = {
              ...o,
              decls: r.decls,
              vars: r.vars,
              template: r.template,
              consts: r.consts || null,
              ngContentSelectors: r.ngContentSelectors,
              onPush: r.changeDetection === Er.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (o.standalone && r.dependencies) || null,
              getStandaloneInjector: null,
              data: r.data || {},
              encapsulation: r.encapsulation || ar.Emulated,
              id: 'c' + dd++,
              styles: r.styles || mt,
              _: null,
              schemas: r.schemas || null,
              tView: null,
            };
          pd(s);
          const c = r.dependencies;
          return (s.directiveDefs = si(c, !1)), (s.pipeDefs = si(c, !0)), s;
        });
      }
      function na(r, o, s) {
        const c = r.ɵcmp;
        (c.directiveDefs = si(o, !1)), (c.pipeDefs = si(s, !0));
      }
      function fd(r) {
        return vt(r) || nn(r);
      }
      function ra(r) {
        return null !== r;
      }
      function oa(r) {
        return Zn(() => ({
          type: r.type,
          bootstrap: r.bootstrap || mt,
          declarations: r.declarations || mt,
          imports: r.imports || mt,
          exports: r.exports || mt,
          transitiveCompileScopes: null,
          schemas: r.schemas || null,
          id: r.id || null,
        }));
      }
      function ju(r, o) {
        if (null == r) return Wn;
        const s = {};
        for (const c in r)
          if (r.hasOwnProperty(c)) {
            let l = r[c],
              d = l;
            Array.isArray(l) && ((d = l[1]), (l = l[0])), (s[l] = c), o && (o[l] = d);
          }
        return s;
      }
      function Oo(r) {
        return Zn(() => {
          const o = ia(r);
          return pd(o), o;
        });
      }
      function Bu(r) {
        return {
          type: r.type,
          name: r.name,
          factory: null,
          pure: !1 !== r.pure,
          standalone: !0 === r.standalone,
          onDestroy: r.type.prototype.ngOnDestroy || null,
        };
      }
      function vt(r) {
        return r[Zi] || null;
      }
      function nn(r) {
        return r[oi] || null;
      }
      function Yt(r) {
        return r[To] || null;
      }
      function jr(r) {
        const o = vt(r) || nn(r) || Yt(r);
        return null !== o && o.standalone;
      }
      function rn(r, o) {
        const s = r[ii] || null;
        if (!s && !0 === o) throw new Error(`Type ${x(r)} does not have '\u0275mod' property.`);
        return s;
      }
      function ia(r) {
        const o = {};
        return {
          type: r.type,
          providersResolver: null,
          factory: null,
          hostBindings: r.hostBindings || null,
          hostVars: r.hostVars || 0,
          hostAttrs: r.hostAttrs || null,
          contentQueries: r.contentQueries || null,
          declaredInputs: o,
          exportAs: r.exportAs || null,
          standalone: !0 === r.standalone,
          selectors: r.selectors || mt,
          viewQuery: r.viewQuery || null,
          features: r.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: ju(r.inputs, o),
          outputs: ju(r.outputs),
        };
      }
      function pd(r) {
        r.features?.forEach((o) => o(r));
      }
      function si(r, o) {
        if (!r) return null;
        const s = o ? Yt : fd;
        return () => ('function' == typeof r ? r() : r).map((c) => s(c)).filter(ra);
      }
      const Yn = 0,
        De = 1,
        Ue = 2,
        Rt = 3,
        kn = 4,
        Dr = 5,
        on = 6,
        Kn = 7,
        Ut = 8,
        ai = 9,
        sn = 10,
        nt = 11,
        sa = 12,
        ro = 13,
        Yi = 14,
        oo = 15,
        Kt = 16,
        ui = 17,
        io = 18,
        Cr = 19,
        Ki = 20,
        A = 21,
        B = 22,
        Y = 1,
        de = 2,
        he = 7,
        Ye = 8,
        He = 9,
        ut = 10;
      function at(r) {
        return Array.isArray(r) && 'object' == typeof r[Y];
      }
      function Ot(r) {
        return Array.isArray(r) && !0 === r[Y];
      }
      function aa(r) {
        return 0 != (4 & r.flags);
      }
      function Po(r) {
        return r.componentOffset > -1;
      }
      function ci(r) {
        return 1 == (1 & r.flags);
      }
      function Jn(r) {
        return !!r.template;
      }
      function cv(r) {
        return 0 != (256 & r[Ue]);
      }
      function qi(r, o) {
        return r.hasOwnProperty(Mn) ? r[Mn] : null;
      }
      class SC {
        constructor(o, s, c) {
          (this.previousValue = o), (this.currentValue = s), (this.firstChange = c);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function bp() {
        return Ap;
      }
      function Ap(r) {
        return r.type.prototype.ngOnChanges && (r.setInput = Mp), pv;
      }
      function pv() {
        const r = gv(this),
          o = r?.current;
        if (o) {
          const s = r.previous;
          if (s === Wn) r.previous = o;
          else for (let c in o) s[c] = o[c];
          (r.current = null), this.ngOnChanges(o);
        }
      }
      function Mp(r, o, s, c) {
        const l = this.declaredInputs[s],
          d =
            gv(r) ||
            (function Ip(r, o) {
              return (r[Tp] = o);
            })(r, { previous: Wn, current: null }),
          p = d.current || (d.current = {}),
          g = d.previous,
          m = g[l];
        (p[l] = new SC(m && m.currentValue, o, g === Wn)), (r[c] = o);
      }
      bp.ngInherit = !0;
      const Tp = '__ngSimpleChanges__';
      function gv(r) {
        return r[Tp] || null;
      }
      const wr = function (r, o, s) {};
      function dn(r) {
        for (; Array.isArray(r); ) r = r[Yn];
        return r;
      }
      function Hu(r, o) {
        return dn(o[r]);
      }
      function _n(r, o) {
        return dn(o[r.index]);
      }
      function Rp(r, o) {
        return r.data[o];
      }
      function ua(r, o) {
        return r[o];
      }
      function Qn(r, o) {
        const s = o[r];
        return at(s) ? s : s[Yn];
      }
      function Gu(r) {
        return 64 == (64 & r[Ue]);
      }
      function li(r, o) {
        return null == o ? null : r[o];
      }
      function Fp(r) {
        r[io] = 0;
      }
      function md(r, o) {
        r[Dr] += o;
        let s = r,
          c = r[Rt];
        for (; null !== c && ((1 === o && 1 === s[Dr]) || (-1 === o && 0 === s[Dr])); )
          (c[Dr] += o), (s = c), (c = c[Rt]);
      }
      const Ke = { lFrame: Ov(null), bindingsEnabled: !0 };
      function Lp() {
        return Ke.bindingsEnabled;
      }
      function K() {
        return Ke.lFrame.lView;
      }
      function _t() {
        return Ke.lFrame.tView;
      }
      function wv(r) {
        return (Ke.lFrame.contextLView = r), r[Ut];
      }
      function Sv(r) {
        return (Ke.lFrame.contextLView = null), r;
      }
      function yn() {
        let r = bv();
        for (; null !== r && 64 === r.type; ) r = r.parent;
        return r;
      }
      function bv() {
        return Ke.lFrame.currentTNode;
      }
      function Br(r, o) {
        const s = Ke.lFrame;
        (s.currentTNode = r), (s.isParent = o);
      }
      function kp() {
        return Ke.lFrame.isParent;
      }
      function Up() {
        Ke.lFrame.isParent = !1;
      }
      function Tn() {
        const r = Ke.lFrame;
        let o = r.bindingRootIndex;
        return -1 === o && (o = r.bindingRootIndex = r.tView.bindingStartIndex), o;
      }
      function ca() {
        return Ke.lFrame.bindingIndex++;
      }
      function xo(r) {
        const o = Ke.lFrame,
          s = o.bindingIndex;
        return (o.bindingIndex = o.bindingIndex + r), s;
      }
      function MC(r, o) {
        const s = Ke.lFrame;
        (s.bindingIndex = s.bindingRootIndex = r), yd(o);
      }
      function yd(r) {
        Ke.lFrame.currentDirectiveIndex = r;
      }
      function Mv() {
        return Ke.lFrame.currentQueryIndex;
      }
      function Bp(r) {
        Ke.lFrame.currentQueryIndex = r;
      }
      function IC(r) {
        const o = r[De];
        return 2 === o.type ? o.declTNode : 1 === o.type ? r[on] : null;
      }
      function Tv(r, o, s) {
        if (s & Re.SkipSelf) {
          let l = o,
            d = r;
          for (
            ;
            !((l = l.parent),
            null !== l || s & Re.Host || ((l = IC(d)), null === l || ((d = d[oo]), 10 & l.type)));

          );
          if (null === l) return !1;
          (o = l), (r = d);
        }
        const c = (Ke.lFrame = Iv());
        return (c.currentTNode = o), (c.lView = r), !0;
      }
      function $p(r) {
        const o = Iv(),
          s = r[De];
        (Ke.lFrame = o),
          (o.currentTNode = s.firstChild),
          (o.lView = r),
          (o.tView = s),
          (o.contextLView = r),
          (o.bindingIndex = s.bindingStartIndex),
          (o.inI18n = !1);
      }
      function Iv() {
        const r = Ke.lFrame,
          o = null === r ? null : r.child;
        return null === o ? Ov(r) : o;
      }
      function Ov(r) {
        const o = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: r,
          child: null,
          inI18n: !1,
        };
        return null !== r && (r.child = o), o;
      }
      function Pv() {
        const r = Ke.lFrame;
        return (Ke.lFrame = r.parent), (r.currentTNode = null), (r.lView = null), r;
      }
      const xv = Pv;
      function Hp() {
        const r = Pv();
        (r.isParent = !0),
          (r.tView = null),
          (r.selectedIndex = -1),
          (r.contextLView = null),
          (r.elementDepthCount = 0),
          (r.currentDirectiveIndex = -1),
          (r.currentNamespace = null),
          (r.bindingRootIndex = -1),
          (r.bindingIndex = -1),
          (r.currentQueryIndex = 0);
      }
      function In() {
        return Ke.lFrame.selectedIndex;
      }
      function di(r) {
        Ke.lFrame.selectedIndex = r;
      }
      function Bt() {
        const r = Ke.lFrame;
        return Rp(r.tView, r.selectedIndex);
      }
      function vd(r, o) {
        for (let s = o.directiveStart, c = o.directiveEnd; s < c; s++) {
          const d = r.data[s].type.prototype,
            {
              ngAfterContentInit: p,
              ngAfterContentChecked: g,
              ngAfterViewInit: m,
              ngAfterViewChecked: y,
              ngOnDestroy: D,
            } = d;
          p && (r.contentHooks ?? (r.contentHooks = [])).push(-s, p),
            g &&
              ((r.contentHooks ?? (r.contentHooks = [])).push(s, g),
              (r.contentCheckHooks ?? (r.contentCheckHooks = [])).push(s, g)),
            m && (r.viewHooks ?? (r.viewHooks = [])).push(-s, m),
            y &&
              ((r.viewHooks ?? (r.viewHooks = [])).push(s, y),
              (r.viewCheckHooks ?? (r.viewCheckHooks = [])).push(s, y)),
            null != D && (r.destroyHooks ?? (r.destroyHooks = [])).push(s, D);
        }
      }
      function Ed(r, o, s) {
        Wu(r, o, 3, s);
      }
      function Dd(r, o, s, c) {
        (3 & r[Ue]) === s && Wu(r, o, s, c);
      }
      function Cd(r, o) {
        let s = r[Ue];
        (3 & s) === o && ((s &= 2047), (s += 1), (r[Ue] = s));
      }
      function Wu(r, o, s, c) {
        const d = c ?? -1,
          p = o.length - 1;
        let g = 0;
        for (let m = void 0 !== c ? 65535 & r[io] : 0; m < p; m++)
          if ('number' == typeof o[m + 1]) {
            if (((g = o[m]), null != c && g >= c)) break;
          } else
            o[m] < 0 && (r[io] += 65536),
              (g < d || -1 == d) && (la(r, s, o, m), (r[io] = (4294901760 & r[io]) + m + 2)),
              m++;
      }
      function la(r, o, s, c) {
        const l = s[c] < 0,
          d = s[c + 1],
          g = r[l ? -s[c] : s[c]];
        if (l) {
          if (r[Ue] >> 11 < r[io] >> 16 && (3 & r[Ue]) === o) {
            (r[Ue] += 2048), wr(4, g, d);
            try {
              d.call(g);
            } finally {
              wr(5, g, d);
            }
          }
        } else {
          wr(4, g, d);
          try {
            d.call(g);
          } finally {
            wr(5, g, d);
          }
        }
      }
      const Qi = -1;
      class Ro {
        constructor(o, s, c) {
          (this.factory = o),
            (this.resolving = !1),
            (this.canSeeViewProviders = s),
            (this.injectImpl = c);
        }
      }
      function Yu(r, o, s) {
        let c = 0;
        for (; c < s.length; ) {
          const l = s[c];
          if ('number' == typeof l) {
            if (0 !== l) break;
            c++;
            const d = s[c++],
              p = s[c++],
              g = s[c++];
            r.setAttribute(o, p, g, d);
          } else {
            const d = l,
              p = s[++c];
            Xi(d) ? r.setProperty(o, d, p) : r.setAttribute(o, d, p), c++;
          }
        }
        return c;
      }
      function Ad(r) {
        return 3 === r || 4 === r || 6 === r;
      }
      function Xi(r) {
        return 64 === r.charCodeAt(0);
      }
      function fi(r, o) {
        if (null !== o && 0 !== o.length)
          if (null === r || 0 === r.length) r = o.slice();
          else {
            let s = -1;
            for (let c = 0; c < o.length; c++) {
              const l = o[c];
              'number' == typeof l
                ? (s = l)
                : 0 === s || Ku(r, s, l, null, -1 === s || 2 === s ? o[++c] : null);
            }
          }
        return r;
      }
      function Ku(r, o, s, c, l) {
        let d = 0,
          p = r.length;
        if (-1 === o) p = -1;
        else
          for (; d < r.length; ) {
            const g = r[d++];
            if ('number' == typeof g) {
              if (g === o) {
                p = -1;
                break;
              }
              if (g > o) {
                p = d - 1;
                break;
              }
            }
          }
        for (; d < r.length; ) {
          const g = r[d];
          if ('number' == typeof g) break;
          if (g === s) {
            if (null === c) return void (null !== l && (r[d + 1] = l));
            if (c === r[d + 1]) return void (r[d + 2] = l);
          }
          d++, null !== c && d++, null !== l && d++;
        }
        -1 !== p && (r.splice(p, 0, o), (d = p + 1)),
          r.splice(d++, 0, s),
          null !== c && r.splice(d++, 0, c),
          null !== l && r.splice(d++, 0, l);
      }
      function Md(r) {
        return r !== Qi;
      }
      function da(r) {
        return 32767 & r;
      }
      function qu(r, o) {
        let s = (function Uv(r) {
            return r >> 16;
          })(r),
          c = o;
        for (; s > 0; ) (c = c[oo]), s--;
        return c;
      }
      let Td = !0;
      function fa(r) {
        const o = Td;
        return (Td = r), o;
      }
      const Gp = 255,
        Id = 5;
      let zp = 0;
      const ur = {};
      function Ju(r, o) {
        const s = Pd(r, o);
        if (-1 !== s) return s;
        const c = o[De];
        c.firstCreatePass &&
          ((r.injectorIndex = o.length), Qu(c.data, r), Qu(o, null), Qu(c.blueprint, null));
        const l = xd(r, o),
          d = r.injectorIndex;
        if (Md(l)) {
          const p = da(l),
            g = qu(l, o),
            m = g[De].data;
          for (let y = 0; y < 8; y++) o[d + y] = g[p + y] | m[p + y];
        }
        return (o[d + 8] = l), d;
      }
      function Qu(r, o) {
        r.push(0, 0, 0, 0, 0, 0, 0, 0, o);
      }
      function Pd(r, o) {
        return -1 === r.injectorIndex ||
          (r.parent && r.parent.injectorIndex === r.injectorIndex) ||
          null === o[r.injectorIndex + 8]
          ? -1
          : r.injectorIndex;
      }
      function xd(r, o) {
        if (r.parent && -1 !== r.parent.injectorIndex) return r.parent.injectorIndex;
        let s = 0,
          c = null,
          l = o;
        for (; null !== l; ) {
          if (((c = Nd(l)), null === c)) return Qi;
          if ((s++, (l = l[oo]), -1 !== c.injectorIndex)) return c.injectorIndex | (s << 16);
        }
        return Qi;
      }
      function ha(r, o, s) {
        !(function Od(r, o, s) {
          let c;
          'string' == typeof s ? (c = s.charCodeAt(0) || 0) : s.hasOwnProperty(Io) && (c = s[Io]),
            null == c && (c = s[Io] = zp++);
          const l = c & Gp;
          o.data[r + (l >> Id)] |= 1 << l;
        })(r, o, s);
      }
      function Wp(r, o, s) {
        if (s & Re.Optional || void 0 !== r) return r;
        me();
      }
      function Rd(r, o, s, c) {
        if ((s & Re.Optional && void 0 === c && (c = null), !(s & (Re.Self | Re.Host)))) {
          const l = r[ai],
            d = mn(void 0);
          try {
            return l ? l.get(o, c, s & Re.Optional) : ea(o, c, s & Re.Optional);
          } finally {
            mn(d);
          }
        }
        return Wp(c, 0, s);
      }
      function Yp(r, o, s, c = Re.Default, l) {
        if (null !== r) {
          if (1024 & o[Ue]) {
            const p = (function $v(r, o, s, c, l) {
              let d = r,
                p = o;
              for (; null !== d && null !== p && 1024 & p[Ue] && !(256 & p[Ue]); ) {
                const g = Kp(d, p, s, c | Re.Self, ur);
                if (g !== ur) return g;
                let m = d.parent;
                if (!m) {
                  const y = p[A];
                  if (y) {
                    const D = y.get(s, ur, c);
                    if (D !== ur) return D;
                  }
                  (m = Nd(p)), (p = p[oo]);
                }
                d = m;
              }
              return l;
            })(r, o, s, c, ur);
            if (p !== ur) return p;
          }
          const d = Kp(r, o, s, c, ur);
          if (d !== ur) return d;
        }
        return Rd(o, s, c, l);
      }
      function Kp(r, o, s, c, l) {
        const d = (function VC(r) {
          if ('string' == typeof r) return r.charCodeAt(0) || 0;
          const o = r.hasOwnProperty(Io) ? r[Io] : void 0;
          return 'number' == typeof o ? (o >= 0 ? o & Gp : Bv) : o;
        })(s);
        if ('function' == typeof d) {
          if (!Tv(o, r, c)) return c & Re.Host ? Wp(l, 0, c) : Rd(o, s, c, l);
          try {
            const p = d(c);
            if (null != p || c & Re.Optional) return p;
            me();
          } finally {
            xv();
          }
        } else if ('number' == typeof d) {
          let p = null,
            g = Pd(r, o),
            m = Qi,
            y = c & Re.Host ? o[Kt][on] : null;
          for (
            (-1 === g || c & Re.SkipSelf) &&
            ((m = -1 === g ? xd(r, o) : o[g + 8]),
            m !== Qi && jv(c, !1) ? ((p = o[De]), (g = da(m)), (o = qu(m, o))) : (g = -1));
            -1 !== g;

          ) {
            const D = o[De];
            if (Fd(d, g, D.data)) {
              const S = Vv(g, o, s, p, c, y);
              if (S !== ur) return S;
            }
            (m = o[g + 8]),
              m !== Qi && jv(c, o[De].data[g + 8] === y) && Fd(d, g, o)
                ? ((p = D), (g = da(m)), (o = qu(m, o)))
                : (g = -1);
          }
        }
        return l;
      }
      function Vv(r, o, s, c, l, d) {
        const p = o[De],
          g = p.data[r + 8],
          D = es(
            g,
            p,
            s,
            null == c ? Po(g) && Td : c != p && 0 != (3 & g.type),
            l & Re.Host && d === g
          );
        return null !== D ? ts(o, p, D, g) : ur;
      }
      function es(r, o, s, c, l) {
        const d = r.providerIndexes,
          p = o.data,
          g = 1048575 & d,
          m = r.directiveStart,
          D = d >> 20,
          N = l ? g + D : r.directiveEnd;
        for (let $ = c ? g : g + D; $ < N; $++) {
          const J = p[$];
          if (($ < m && s === J) || ($ >= m && J.type === s)) return $;
        }
        if (l) {
          const $ = p[m];
          if ($ && Jn($) && $.type === s) return m;
        }
        return null;
      }
      function ts(r, o, s, c) {
        let l = r[s];
        const d = o.data;
        if (
          (function Fv(r) {
            return r instanceof Ro;
          })(l)
        ) {
          const p = l;
          p.resolving &&
            (function ce(r, o) {
              const s = o ? `. Dependency path: ${o.join(' > ')} > ${r}` : '';
              throw new ee(-200, `Circular dependency in DI detected for ${r}${s}`);
            })(
              (function ge(r) {
                return 'function' == typeof r
                  ? r.name || r.toString()
                  : 'object' == typeof r && null != r && 'function' == typeof r.type
                  ? r.type.name || r.type.toString()
                  : ae(r);
              })(d[s])
            );
          const g = fa(p.canSeeViewProviders);
          p.resolving = !0;
          const m = p.injectImpl ? mn(p.injectImpl) : null;
          Tv(r, c, Re.Default);
          try {
            (l = r[s] = p.factory(void 0, d, r, c)),
              o.firstCreatePass &&
                s >= c.directiveStart &&
                (function LC(r, o, s) {
                  const { ngOnChanges: c, ngOnInit: l, ngDoCheck: d } = o.type.prototype;
                  if (c) {
                    const p = Ap(o);
                    (s.preOrderHooks ?? (s.preOrderHooks = [])).push(r, p),
                      (s.preOrderCheckHooks ?? (s.preOrderCheckHooks = [])).push(r, p);
                  }
                  l && (s.preOrderHooks ?? (s.preOrderHooks = [])).push(0 - r, l),
                    d &&
                      ((s.preOrderHooks ?? (s.preOrderHooks = [])).push(r, d),
                      (s.preOrderCheckHooks ?? (s.preOrderCheckHooks = [])).push(r, d));
                })(s, d[s], o);
          } finally {
            null !== m && mn(m), fa(g), (p.resolving = !1), xv();
          }
        }
        return l;
      }
      function Fd(r, o, s) {
        return !!(s[o + (r >> Id)] & (1 << r));
      }
      function jv(r, o) {
        return !(r & Re.Self || (r & Re.Host && o));
      }
      class ns {
        constructor(o, s) {
          (this._tNode = o), (this._lView = s);
        }
        get(o, s, c) {
          return Yp(this._tNode, this._lView, o, ri(c), s);
        }
      }
      function Bv() {
        return new ns(yn(), K());
      }
      function qp(r) {
        return Zn(() => {
          const o = r.prototype.constructor,
            s = o[Mn] || Xu(o),
            c = Object.prototype;
          let l = Object.getPrototypeOf(r.prototype).constructor;
          for (; l && l !== c; ) {
            const d = l[Mn] || Xu(l);
            if (d && d !== s) return d;
            l = Object.getPrototypeOf(l);
          }
          return (d) => new d();
        });
      }
      function Xu(r) {
        return W(r)
          ? () => {
              const o = Xu(I(r));
              return o && o();
            }
          : qi(r);
      }
      function Nd(r) {
        const o = r[De],
          s = o.type;
        return 2 === s ? o.declTNode : 1 === s ? r[on] : null;
      }
      function ec(r) {
        return (function Zp(r, o) {
          if ('class' === o) return r.classes;
          if ('style' === o) return r.styles;
          const s = r.attrs;
          if (s) {
            const c = s.length;
            let l = 0;
            for (; l < c; ) {
              const d = s[l];
              if (Ad(d)) break;
              if (0 === d) l += 2;
              else if ('number' == typeof d) for (l++; l < c && 'string' == typeof s[l]; ) l++;
              else {
                if (d === o) return s[l + 1];
                l += 2;
              }
            }
          }
          return null;
        })(yn(), r);
      }
      const rs = '__parameters__';
      function os(r, o, s) {
        return Zn(() => {
          const c = (function Qp(r) {
            return function (...s) {
              if (r) {
                const c = r(...s);
                for (const l in c) this[l] = c[l];
              }
            };
          })(o);
          function l(...d) {
            if (this instanceof l) return c.apply(this, d), this;
            const p = new l(...d);
            return (g.annotation = p), g;
            function g(m, y, D) {
              const S = m.hasOwnProperty(rs)
                ? m[rs]
                : Object.defineProperty(m, rs, { value: [] })[rs];
              for (; S.length <= D; ) S.push(null);
              return (S[D] = S[D] || []).push(p), m;
            }
          }
          return (
            s && (l.prototype = Object.create(s.prototype)),
            (l.prototype.ngMetadataName = r),
            (l.annotationCls = l),
            l
          );
        });
      }
      class yt {
        constructor(o, s) {
          (this._desc = o),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof s
              ? (this.__NG_ELEMENT_ID__ = s)
              : void 0 !== s &&
                (this.ɵprov = st({
                  token: this,
                  providedIn: s.providedIn || 'root',
                  factory: s.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function is(r, o) {
        r.forEach((s) => (Array.isArray(s) ? is(s, o) : o(s)));
      }
      function Zv(r, o, s) {
        o >= r.length ? r.push(s) : r.splice(o, 0, s);
      }
      function Ld(r, o) {
        return o >= r.length - 1 ? r.pop() : r.splice(o, 1)[0];
      }
      function nc(r, o) {
        const s = [];
        for (let c = 0; c < r; c++) s.push(o);
        return s;
      }
      function cr(r, o, s) {
        let c = Un(r, o);
        return (
          c >= 0
            ? (r[1 | c] = s)
            : ((c = ~c),
              (function HC(r, o, s, c) {
                let l = r.length;
                if (l == o) r.push(s, c);
                else if (1 === l) r.push(c, r[0]), (r[0] = s);
                else {
                  for (l--, r.push(r[l - 1], r[l]); l > o; ) (r[l] = r[l - 2]), l--;
                  (r[o] = s), (r[o + 1] = c);
                }
              })(r, c, o, s)),
          c
        );
      }
      function we(r, o) {
        const s = Un(r, o);
        if (s >= 0) return r[1 | s];
      }
      function Un(r, o) {
        return (function Wt(r, o, s) {
          let c = 0,
            l = r.length >> s;
          for (; l !== c; ) {
            const d = c + ((l - c) >> 1),
              p = r[d << s];
            if (o === p) return d << s;
            p > o ? (l = d) : (c = d + 1);
          }
          return ~(l << s);
        })(r, o, 1);
      }
      const ic = Vr(
          os('Inject', (r) => ({ token: r })),
          -1
        ),
        ss = Vr(os('Optional'), 8),
        lr = Vr(os('SkipSelf'), 4);
      var Mr = (() => (
        ((Mr = Mr || {})[(Mr.Important = 1)] = 'Important'),
        (Mr[(Mr.DashCase = 2)] = 'DashCase'),
        Mr
      ))();
      const Fo = new Map();
      let tE = 0;
      const Da = '__ngContext__';
      function On(r, o) {
        at(o)
          ? ((r[Da] = o[Ki]),
            (function fg(r) {
              Fo.set(r[Ki], r);
            })(o))
          : (r[Da] = o);
      }
      let Tr;
      function lc(r, o) {
        return Tr(r, o);
      }
      function bt(r) {
        const o = r[Rt];
        return Ot(o) ? o[Rt] : o;
      }
      function hn(r) {
        return _g(r[ro]);
      }
      function un(r) {
        return _g(r[kn]);
      }
      function _g(r) {
        for (; null !== r && !Ot(r); ) r = r[kn];
        return r;
      }
      function dr(r, o, s, c, l) {
        if (null != c) {
          let d,
            p = !1;
          Ot(c) ? (d = c) : at(c) && ((p = !0), (c = c[Yn]));
          const g = dn(c);
          0 === r && null !== s
            ? null == l
              ? Kd(o, s, g)
              : ao(o, s, g, l || null, !0)
            : 1 === r && null !== s
            ? ao(o, s, g, l || null, !0)
            : 2 === r
            ? (function Xd(r, o, s) {
                const c = ba(r, o);
                c &&
                  (function Cg(r, o, s, c) {
                    r.removeChild(o, s, c);
                  })(r, c, o, s);
              })(o, g, p)
            : 3 === r && o.destroyNode(g),
            null != d &&
              (function ef(r, o, s, c, l) {
                const d = s[he];
                d !== dn(s) && dr(o, r, c, d, l);
                for (let g = ut; g < s.length; g++) {
                  const m = s[g];
                  gi(m[De], m, r, o, c, d);
                }
              })(o, r, d, s, l);
        }
      }
      function Nt(r, o, s) {
        return r.createElement(o, s);
      }
      function fc(r, o) {
        const s = r[He],
          c = s.indexOf(o),
          l = o[Rt];
        512 & o[Ue] && ((o[Ue] &= -513), md(l, -1)), s.splice(c, 1);
      }
      function Wd(r, o) {
        if (r.length <= ut) return;
        const s = ut + o,
          c = r[s];
        if (c) {
          const l = c[ui];
          null !== l && l !== r && fc(l, c), o > 0 && (r[s - 1][kn] = c[kn]);
          const d = Ld(r, ut + o);
          !(function iE(r, o) {
            gi(r, o, o[nt], 2, null, null), (o[Yn] = null), (o[on] = null);
          })(c[De], c);
          const p = d[Cr];
          null !== p && p.detachView(d[De]), (c[Rt] = null), (c[kn] = null), (c[Ue] &= -65);
        }
        return c;
      }
      function Dg(r, o) {
        if (!(128 & o[Ue])) {
          const s = o[nt];
          s.destroyNode && gi(r, o, s, 3, null, null),
            (function Eg(r) {
              let o = r[ro];
              if (!o) return hc(r[De], r);
              for (; o; ) {
                let s = null;
                if (at(o)) s = o[ro];
                else {
                  const c = o[ut];
                  c && (s = c);
                }
                if (!s) {
                  for (; o && !o[kn] && o !== r; ) at(o) && hc(o[De], o), (o = o[Rt]);
                  null === o && (o = r), at(o) && hc(o[De], o), (s = o && o[kn]);
                }
                o = s;
              }
            })(o);
        }
      }
      function hc(r, o) {
        if (!(128 & o[Ue])) {
          (o[Ue] &= -65),
            (o[Ue] |= 128),
            (function Ht(r, o) {
              let s;
              if (null != r && null != (s = r.destroyHooks))
                for (let c = 0; c < s.length; c += 2) {
                  const l = o[s[c]];
                  if (!(l instanceof Ro)) {
                    const d = s[c + 1];
                    if (Array.isArray(d))
                      for (let p = 0; p < d.length; p += 2) {
                        const g = l[d[p]],
                          m = d[p + 1];
                        wr(4, g, m);
                        try {
                          m.call(g);
                        } finally {
                          wr(5, g, m);
                        }
                      }
                    else {
                      wr(4, l, d);
                      try {
                        d.call(l);
                      } finally {
                        wr(5, l, d);
                      }
                    }
                  }
                }
            })(r, o),
            (function vn(r, o) {
              const s = r.cleanup,
                c = o[Kn];
              let l = -1;
              if (null !== s)
                for (let d = 0; d < s.length - 1; d += 2)
                  if ('string' == typeof s[d]) {
                    const p = s[d + 3];
                    p >= 0 ? c[(l = p)]() : c[(l = -p)].unsubscribe(), (d += 2);
                  } else {
                    const p = c[(l = s[d + 1])];
                    s[d].call(p);
                  }
              if (null !== c) {
                for (let d = l + 1; d < c.length; d++) (0, c[d])();
                o[Kn] = null;
              }
            })(r, o),
            1 === o[De].type && o[nt].destroy();
          const s = o[ui];
          if (null !== s && Ot(o[Rt])) {
            s !== o[Rt] && fc(s, o);
            const c = o[Cr];
            null !== c && c.detachView(r);
          }
          !(function tw(r) {
            Fo.delete(r[Ki]);
          })(o);
        }
      }
      function Yd(r, o, s) {
        return (function Sa(r, o, s) {
          let c = o;
          for (; null !== c && 40 & c.type; ) c = (o = c).parent;
          if (null === c) return s[Yn];
          {
            const { componentOffset: l } = c;
            if (l > -1) {
              const { encapsulation: d } = r.data[c.directiveStart + l];
              if (d === ar.None || d === ar.Emulated) return null;
            }
            return _n(c, s);
          }
        })(r, o.parent, s);
      }
      function ao(r, o, s, c, l) {
        r.insertBefore(o, s, c, l);
      }
      function Kd(r, o, s) {
        r.appendChild(o, s);
      }
      function qd(r, o, s, c, l) {
        null !== c ? ao(r, o, s, c, l) : Kd(r, o, s);
      }
      function ba(r, o) {
        return r.parentNode(o);
      }
      function wg(r, o, s) {
        return bg(r, o, s);
      }
      let Jd,
        mi,
        _c,
        bg = function Sg(r, o, s) {
          return 40 & r.type ? _n(r, s) : null;
        };
      function pc(r, o, s, c) {
        const l = Yd(r, c, o),
          d = o[nt],
          g = wg(c.parent || o[on], c, o);
        if (null != l)
          if (Array.isArray(s)) for (let m = 0; m < s.length; m++) qd(d, l, s[m], g, !1);
          else qd(d, l, s, g, !1);
        void 0 !== Jd && Jd(d, c, o, s, l);
      }
      function gc(r, o) {
        if (null !== o) {
          const s = o.type;
          if (3 & s) return _n(o, r);
          if (4 & s) return Qd(-1, r[o.index]);
          if (8 & s) {
            const c = o.child;
            if (null !== c) return gc(r, c);
            {
              const l = r[o.index];
              return Ot(l) ? Qd(-1, l) : dn(l);
            }
          }
          if (32 & s) return lc(o, r)() || dn(r[o.index]);
          {
            const c = Mg(r, o);
            return null !== c ? (Array.isArray(c) ? c[0] : gc(bt(r[Kt]), c)) : gc(r, o.next);
          }
        }
        return null;
      }
      function Mg(r, o) {
        return null !== o ? r[Kt][on].projection[o.projection] : null;
      }
      function Qd(r, o) {
        const s = ut + r + 1;
        if (s < o.length) {
          const c = o[s],
            l = c[De].firstChild;
          if (null !== l) return gc(c, l);
        }
        return o[he];
      }
      function Aa(r, o, s, c, l, d, p) {
        for (; null != s; ) {
          const g = c[s.index],
            m = s.type;
          if ((p && 0 === o && (g && On(dn(g), c), (s.flags |= 2)), 32 != (32 & s.flags)))
            if (8 & m) Aa(r, o, s.child, c, l, d, !1), dr(o, r, l, g, d);
            else if (32 & m) {
              const y = lc(s, c);
              let D;
              for (; (D = y()); ) dr(o, r, l, D, d);
              dr(o, r, l, g, d);
            } else 16 & m ? Tg(r, o, c, s, l, d) : dr(o, r, l, g, d);
          s = p ? s.projectionNext : s.next;
        }
      }
      function gi(r, o, s, c, l, d) {
        Aa(s, c, r.firstChild, o, l, d, !1);
      }
      function Tg(r, o, s, c, l, d) {
        const p = s[Kt],
          m = p[on].projection[c.projection];
        if (Array.isArray(m)) for (let y = 0; y < m.length; y++) dr(o, r, l, m[y], d);
        else Aa(r, o, m, p[Rt], l, d, !0);
      }
      function Ir(r, o, s) {
        '' === s ? r.removeAttribute(o, 'class') : r.setAttribute(o, 'class', s);
      }
      function tf(r, o, s) {
        const { mergedAttrs: c, classes: l, styles: d } = s;
        null !== c && Yu(r, o, c),
          null !== l && Ir(r, o, l),
          null !== d &&
            (function cE(r, o, s) {
              r.setAttribute(o, 'style', s);
            })(r, o, d);
      }
      function dE(r) {
        mi = r;
      }
      function us(r) {
        return (
          (function nf() {
            if (void 0 === _c && ((_c = null), zt.trustedTypes))
              try {
                _c = zt.trustedTypes.createPolicy('angular#unsafe-bypass', {
                  createHTML: (r) => r,
                  createScript: (r) => r,
                  createScriptURL: (r) => r,
                });
              } catch {}
            return _c;
          })()?.createScriptURL(r) || r
        );
      }
      class Rg {
        constructor(o) {
          this.changingThisBreaksApplicationSecurity = o;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ye})`;
        }
      }
      function er(r) {
        return r instanceof Rg ? r.changingThisBreaksApplicationSecurity : r;
      }
      function Ia(r, o) {
        const s = (function Lg(r) {
          return (r instanceof Rg && r.getTypeName()) || null;
        })(r);
        if (null != s && s !== o) {
          if ('ResourceURL' === s && 'URL' === o) return !0;
          throw new Error(`Required a safe ${o}, got a ${s} (see ${ye})`);
        }
        return s === o;
      }
      const gE = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      var Ct = (() => (
        ((Ct = Ct || {})[(Ct.NONE = 0)] = 'NONE'),
        (Ct[(Ct.HTML = 1)] = 'HTML'),
        (Ct[(Ct.STYLE = 2)] = 'STYLE'),
        (Ct[(Ct.SCRIPT = 3)] = 'SCRIPT'),
        (Ct[(Ct.URL = 4)] = 'URL'),
        (Ct[(Ct.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        Ct
      ))();
      function Dc(r) {
        const o = Xe();
        return o
          ? o.sanitize(Ct.URL, r) || ''
          : Ia(r, 'URL')
          ? er(r)
          : (function cs(r) {
              return (r = String(r)).match(gE) ? r : 'unsafe:' + r;
            })(ae(r));
      }
      function df(r) {
        const o = Xe();
        if (o) return us(o.sanitize(Ct.RESOURCE_URL, r) || '');
        if (Ia(r, 'ResourceURL')) return us(er(r));
        throw new ee(904, !1);
      }
      function ff(r, o, s) {
        return (function Gg(r, o) {
          return ('src' === o &&
            ('embed' === r ||
              'frame' === r ||
              'iframe' === r ||
              'media' === r ||
              'script' === r)) ||
            ('href' === o && ('base' === r || 'link' === r))
            ? df
            : Dc;
        })(
          o,
          s
        )(r);
      }
      function Xe() {
        const r = K();
        return r && r[sa];
      }
      const yi = new yt('ENVIRONMENT_INITIALIZER'),
        zg = new yt('INJECTOR', -1),
        ko = new yt('INJECTOR_DEF_TYPES');
      class Zg {
        get(o, s = So) {
          if (s === So) {
            const c = new Error(`NullInjectorError: No provider for ${x(o)}!`);
            throw ((c.name = 'NullInjectorError'), c);
          }
          return s;
        }
      }
      function Ra(r) {
        return { ɵproviders: r };
      }
      function pf(...r) {
        return { ɵproviders: Wg(0, r), ɵfromNgModule: !0 };
      }
      function Wg(r, ...o) {
        const s = [],
          c = new Set();
        let l;
        return (
          is(o, (d) => {
            const p = d;
            vi(p, s, [], c) && (l || (l = []), l.push(p));
          }),
          void 0 !== l && Fa(l, s),
          s
        );
      }
      function Fa(r, o) {
        for (let s = 0; s < r.length; s++) {
          const { providers: l } = r[s];
          ds(l, (d) => {
            o.push(d);
          });
        }
      }
      function vi(r, o, s, c) {
        if (!(r = I(r))) return !1;
        let l = null,
          d = Qo(r);
        const p = !d && vt(r);
        if (d || p) {
          if (p && !p.standalone) return !1;
          l = r;
        } else {
          const m = r.ngModule;
          if (((d = Qo(m)), !d)) return !1;
          l = m;
        }
        const g = c.has(l);
        if (p) {
          if (g) return !1;
          if ((c.add(l), p.dependencies)) {
            const m = 'function' == typeof p.dependencies ? p.dependencies() : p.dependencies;
            for (const y of m) vi(y, o, s, c);
          }
        } else {
          if (!d) return !1;
          {
            if (null != d.imports && !g) {
              let y;
              c.add(l);
              try {
                is(d.imports, (D) => {
                  vi(D, o, s, c) && (y || (y = []), y.push(D));
                });
              } finally {
              }
              void 0 !== y && Fa(y, o);
            }
            if (!g) {
              const y = qi(l) || (() => new l());
              o.push(
                { provide: l, useFactory: y, deps: mt },
                { provide: ko, useValue: l, multi: !0 },
                { provide: yi, useValue: () => It(l), multi: !0 }
              );
            }
            const m = d.providers;
            null == m ||
              g ||
              ds(m, (D) => {
                o.push(D);
              });
          }
        }
        return l !== r && void 0 !== r.providers;
      }
      function ds(r, o) {
        for (let s of r) q(s) && (s = s.ɵproviders), Array.isArray(s) ? ds(s, o) : o(s);
      }
      const wE = H({ provide: String, useValue: H });
      function Na(r) {
        return null !== r && 'object' == typeof r && wE in r;
      }
      function Uo(r) {
        return 'function' == typeof r;
      }
      const mf = new yt('Set Injector scope.'),
        Cc = {},
        wc = {};
      let _f;
      function Sc() {
        return void 0 === _f && (_f = new Zg()), _f;
      }
      class Ei {}
      class Yg extends Ei {
        get destroyed() {
          return this._destroyed;
        }
        constructor(o, s, c, l) {
          super(),
            (this.parent = s),
            (this.source = c),
            (this.scopes = l),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Ac(o, (p) => this.processProvider(p)),
            this.records.set(zg, fr(void 0, this)),
            l.has('environment') && this.records.set(Ei, fr(void 0, this));
          const d = this.records.get(mf);
          null != d && 'string' == typeof d.value && this.scopes.add(d.value),
            (this.injectorDefTypes = new Set(this.get(ko.multi, mt, Re.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const o of this._ngOnDestroyHooks) o.ngOnDestroy();
            for (const o of this._onDestroyHooks) o();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(o) {
          this._onDestroyHooks.push(o);
        }
        runInContext(o) {
          this.assertNotDestroyed();
          const s = pt(this),
            c = mn(void 0);
          try {
            return o();
          } finally {
            pt(s), mn(c);
          }
        }
        get(o, s = So, c = Re.Default) {
          this.assertNotDestroyed(), (c = ri(c));
          const l = pt(this),
            d = mn(void 0);
          try {
            if (!(c & Re.SkipSelf)) {
              let g = this.records.get(o);
              if (void 0 === g) {
                const m =
                  (function qg(r) {
                    return 'function' == typeof r || ('object' == typeof r && r instanceof yt);
                  })(o) && bn(o);
                (g = m && this.injectableDefInScope(m) ? fr(yf(o), Cc) : null),
                  this.records.set(o, g);
              }
              if (null != g) return this.hydrate(o, g);
            }
            return (c & Re.Self ? Sc() : this.parent).get(
              o,
              (s = c & Re.Optional && s === So ? null : s)
            );
          } catch (p) {
            if ('NullInjectorError' === p.name) {
              if (((p[Ln] = p[Ln] || []).unshift(x(o)), l)) throw p;
              return (function ta(r, o, s, c) {
                const l = r[Ln];
                throw (
                  (o[Tt] && l.unshift(o[Tt]),
                  (r.message = (function ld(r, o, s, c = null) {
                    r = r && '\n' === r.charAt(0) && r.charAt(1) == ku ? r.slice(2) : r;
                    let l = x(o);
                    if (Array.isArray(o)) l = o.map(x).join(' -> ');
                    else if ('object' == typeof o) {
                      let d = [];
                      for (let p in o)
                        if (o.hasOwnProperty(p)) {
                          let g = o[p];
                          d.push(p + ':' + ('string' == typeof g ? JSON.stringify(g) : x(g)));
                        }
                      l = `{${d.join(', ')}}`;
                    }
                    return `${s}${c ? '(' + c + ')' : ''}[${l}]: ${r.replace(zn, '\n  ')}`;
                  })('\n' + r.message, l, s, c)),
                  (r[Ur] = l),
                  (r[Ln] = null),
                  r)
                );
              })(p, o, 'R3InjectorError', this.source);
            }
            throw p;
          } finally {
            mn(d), pt(l);
          }
        }
        resolveInjectorInitializers() {
          const o = pt(this),
            s = mn(void 0);
          try {
            const c = this.get(yi.multi, mt, Re.Self);
            for (const l of c) l();
          } finally {
            pt(o), mn(s);
          }
        }
        toString() {
          const o = [],
            s = this.records;
          for (const c of s.keys()) o.push(x(c));
          return `R3Injector[${o.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new ee(205, !1);
        }
        processProvider(o) {
          let s = Uo((o = I(o))) ? o : I(o && o.provide);
          const c = (function bc(r) {
            return Na(r) ? fr(void 0, r.useValue) : fr(Kg(r), Cc);
          })(o);
          if (Uo(o) || !0 !== o.multi) this.records.get(s);
          else {
            let l = this.records.get(s);
            l ||
              ((l = fr(void 0, Cc, !0)), (l.factory = () => zi(l.multi)), this.records.set(s, l)),
              (s = o),
              l.multi.push(o);
          }
          this.records.set(s, c);
        }
        hydrate(o, s) {
          return (
            s.value === Cc && ((s.value = wc), (s.value = s.factory())),
            'object' == typeof s.value &&
              s.value &&
              (function lw(r) {
                return null !== r && 'object' == typeof r && 'function' == typeof r.ngOnDestroy;
              })(s.value) &&
              this._ngOnDestroyHooks.add(s.value),
            s.value
          );
        }
        injectableDefInScope(o) {
          if (!o.providedIn) return !1;
          const s = I(o.providedIn);
          return 'string' == typeof s
            ? 'any' === s || this.scopes.has(s)
            : this.injectorDefTypes.has(s);
        }
      }
      function yf(r) {
        const o = bn(r),
          s = null !== o ? o.factory : qi(r);
        if (null !== s) return s;
        if (r instanceof yt) throw new ee(204, !1);
        if (r instanceof Function)
          return (function vf(r) {
            const o = r.length;
            if (o > 0) throw (nc(o, '?'), new ee(204, !1));
            const s = (function Nn(r) {
              const o = r && (r[Xo] || r[cd]);
              return o
                ? ((function Jo(r) {
                    if (r.hasOwnProperty('name')) return r.name;
                    ('' + r).match(/^function\s*([^\s(]+)/);
                  })(r),
                  o)
                : null;
            })(r);
            return null !== s ? () => s.factory(r) : () => new r();
          })(r);
        throw new ee(204, !1);
      }
      function Kg(r, o, s) {
        let c;
        if (Uo(r)) {
          const l = I(r);
          return qi(l) || yf(l);
        }
        if (Na(r)) c = () => I(r.useValue);
        else if (
          (function gf(r) {
            return !(!r || !r.useFactory);
          })(r)
        )
          c = () => r.useFactory(...zi(r.deps || []));
        else if (
          (function La(r) {
            return !(!r || !r.useExisting);
          })(r)
        )
          c = () => It(I(r.useExisting));
        else {
          const l = I(r && (r.useClass || r.provide));
          if (
            !(function Ef(r) {
              return !!r.deps;
            })(r)
          )
            return qi(l) || yf(l);
          c = () => new l(...zi(r.deps));
        }
        return c;
      }
      function fr(r, o, s = !1) {
        return { factory: r, value: o, multi: s ? [] : void 0 };
      }
      function Ac(r, o) {
        for (const s of r) Array.isArray(s) ? Ac(s, o) : s && q(s) ? Ac(s.ɵproviders, o) : o(s);
      }
      class bE {}
      class fs {}
      class Jg {
        resolveComponentFactory(o) {
          throw (function ka(r) {
            const o = Error(
              `No component factory found for ${x(r)}. Did you add it to @NgModule.entryComponents?`
            );
            return (o.ngComponent = r), o;
          })(o);
        }
      }
      let hs = (() => {
        class r {}
        return (r.NULL = new Jg()), r;
      })();
      function ps() {
        return gs(yn(), K());
      }
      function gs(r, o) {
        return new Ua(_n(r, o));
      }
      let Ua = (() => {
        class r {
          constructor(s) {
            this.nativeElement = s;
          }
        }
        return (r.__NG_ELEMENT_ID__ = ps), r;
      })();
      function Qg(r) {
        return r instanceof Ua ? r.nativeElement : r;
      }
      class Xg {}
      let Df = (() => {
          class r {}
          return (
            (r.__NG_ELEMENT_ID__ = () =>
              (function ms() {
                const r = K(),
                  s = Qn(yn().index, r);
                return (at(s) ? s : r)[nt];
              })()),
            r
          );
        })(),
        ME = (() => {
          class r {}
          return (r.ɵprov = st({ token: r, providedIn: 'root', factory: () => null })), r;
        })();
      class Mc {
        constructor(o) {
          (this.full = o),
            (this.major = o.split('.')[0]),
            (this.minor = o.split('.')[1]),
            (this.patch = o.split('.').slice(2).join('.'));
        }
      }
      const TE = new Mc('15.2.6'),
        Tc = {},
        Ic = 'ngOriginalError';
      function hr(r) {
        return r[Ic];
      }
      class co {
        constructor() {
          this._console = console;
        }
        handleError(o) {
          const s = this._findOriginalError(o);
          this._console.error('ERROR', o), s && this._console.error('ORIGINAL ERROR', s);
        }
        _findOriginalError(o) {
          let s = o && hr(o);
          for (; s && hr(s); ) s = hr(s);
          return s || null;
        }
      }
      function Zr(r) {
        return r instanceof Function ? r() : r;
      }
      function wf(r, o, s) {
        let c = r.length;
        for (;;) {
          const l = r.indexOf(o, s);
          if (-1 === l) return l;
          if (0 === l || r.charCodeAt(l - 1) <= 32) {
            const d = o.length;
            if (l + d === c || r.charCodeAt(l + d) <= 32) return l;
          }
          s = l + 1;
        }
      }
      const tm = 'ng-template';
      function RE(r, o, s) {
        let c = 0,
          l = !0;
        for (; c < r.length; ) {
          let d = r[c++];
          if ('string' == typeof d && l) {
            const p = r[c++];
            if (s && 'class' === d && -1 !== wf(p.toLowerCase(), o, 0)) return !0;
          } else {
            if (1 === d) {
              for (; c < r.length && 'string' == typeof (d = r[c++]); )
                if (d.toLowerCase() === o) return !0;
              return !1;
            }
            'number' == typeof d && (l = !1);
          }
        }
        return !1;
      }
      function nm(r) {
        return 4 === r.type && r.value !== tm;
      }
      function FE(r, o, s) {
        return o === (4 !== r.type || s ? r.value : tm);
      }
      function NE(r, o, s) {
        let c = 4;
        const l = r.attrs || [],
          d = (function ys(r) {
            for (let o = 0; o < r.length; o++) if (Ad(r[o])) return o;
            return r.length;
          })(l);
        let p = !1;
        for (let g = 0; g < o.length; g++) {
          const m = o[g];
          if ('number' != typeof m) {
            if (!p)
              if (4 & c) {
                if (
                  ((c = 2 | (1 & c)), ('' !== m && !FE(r, m, s)) || ('' === m && 1 === o.length))
                ) {
                  if (pr(c)) return !1;
                  p = !0;
                }
              } else {
                const y = 8 & c ? m : o[++g];
                if (8 & c && null !== r.attrs) {
                  if (!RE(r.attrs, y, s)) {
                    if (pr(c)) return !1;
                    p = !0;
                  }
                  continue;
                }
                const S = Sf(8 & c ? 'class' : m, l, nm(r), s);
                if (-1 === S) {
                  if (pr(c)) return !1;
                  p = !0;
                  continue;
                }
                if ('' !== y) {
                  let N;
                  N = S > d ? '' : l[S + 1].toLowerCase();
                  const $ = 8 & c ? N : null;
                  if (($ && -1 !== wf($, y, 0)) || (2 & c && y !== N)) {
                    if (pr(c)) return !1;
                    p = !0;
                  }
                }
              }
          } else {
            if (!p && !pr(c) && !pr(m)) return !1;
            if (p && pr(m)) continue;
            (p = !1), (c = m | (1 & c));
          }
        }
        return pr(c) || p;
      }
      function pr(r) {
        return 0 == (1 & r);
      }
      function Sf(r, o, s, c) {
        if (null === o) return -1;
        let l = 0;
        if (c || !s) {
          let d = !1;
          for (; l < o.length; ) {
            const p = o[l];
            if (p === r) return l;
            if (3 === p || 6 === p) d = !0;
            else {
              if (1 === p || 2 === p) {
                let g = o[++l];
                for (; 'string' == typeof g; ) g = o[++l];
                continue;
              }
              if (4 === p) break;
              if (0 === p) {
                l += 4;
                continue;
              }
            }
            l += d ? 1 : 2;
          }
          return -1;
        }
        return (function rm(r, o) {
          let s = r.indexOf(4);
          if (s > -1)
            for (s++; s < r.length; ) {
              const c = r[s];
              if ('number' == typeof c) return -1;
              if (c === o) return s;
              s++;
            }
          return -1;
        })(o, r);
      }
      function Pc(r, o, s = !1) {
        for (let c = 0; c < o.length; c++) if (NE(r, o[c], s)) return !0;
        return !1;
      }
      function om(r, o) {
        e: for (let s = 0; s < o.length; s++) {
          const c = o[s];
          if (r.length === c.length) {
            for (let l = 0; l < r.length; l++) if (r[l] !== c[l]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function im(r, o) {
        return r ? ':not(' + o.trim() + ')' : o;
      }
      function gr(r) {
        let o = r[0],
          s = 1,
          c = 2,
          l = '',
          d = !1;
        for (; s < r.length; ) {
          let p = r[s];
          if ('string' == typeof p)
            if (2 & c) {
              const g = r[++s];
              l += '[' + p + (g.length > 0 ? '="' + g + '"' : '') + ']';
            } else 8 & c ? (l += '.' + p) : 4 & c && (l += ' ' + p);
          else '' !== l && !pr(p) && ((o += im(d, l)), (l = '')), (c = p), (d = d || !pr(c));
          s++;
        }
        return '' !== l && (o += im(d, l)), o;
      }
      const $e = {};
      function bf(r) {
        xc(_t(), K(), In() + r, !1);
      }
      function xc(r, o, s, c) {
        if (!c)
          if (3 == (3 & o[Ue])) {
            const d = r.preOrderCheckHooks;
            null !== d && Ed(o, d, s);
          } else {
            const d = r.preOrderHooks;
            null !== d && Dd(o, d, 0, s);
          }
        di(s);
      }
      function Of(r, o = null, s = null, c) {
        const l = Pf(r, o, s, c);
        return l.resolveInjectorInitializers(), l;
      }
      function Pf(r, o = null, s = null, c, l = new Set()) {
        const d = [s || mt, pf(r)];
        return (
          (c = c || ('object' == typeof r ? void 0 : x(r))), new Yg(d, o || Sc(), c || null, l)
        );
      }
      let jo = (() => {
        class r {
          static create(s, c) {
            if (Array.isArray(s)) return Of({ name: '' }, c, s, '');
            {
              const l = s.name ?? '';
              return Of({ name: l }, s.parent, s.providers, l);
            }
          }
        }
        return (
          (r.THROW_IF_NOT_FOUND = So),
          (r.NULL = new Zg()),
          (r.ɵprov = st({ token: r, providedIn: 'any', factory: () => It(zg) })),
          (r.__NG_ELEMENT_ID__ = -1),
          r
        );
      })();
      function Wr(r, o = Re.Default) {
        const s = K();
        return null === s ? It(r, o) : Yp(yn(), s, I(r), o);
      }
      function gm() {
        throw new Error('invalid');
      }
      function mm(r, o) {
        const s = r.contentQueries;
        if (null !== s)
          for (let c = 0; c < s.length; c += 2) {
            const d = s[c + 1];
            if (-1 !== d) {
              const p = r.data[d];
              Bp(s[c]), p.contentQueries(2, o[d], d);
            }
          }
      }
      function Uc(r, o, s, c, l, d, p, g, m, y, D) {
        const S = o.blueprint.slice();
        return (
          (S[Yn] = l),
          (S[Ue] = 76 | c),
          (null !== D || (r && 1024 & r[Ue])) && (S[Ue] |= 1024),
          Fp(S),
          (S[Rt] = S[oo] = r),
          (S[Ut] = s),
          (S[sn] = p || (r && r[sn])),
          (S[nt] = g || (r && r[nt])),
          (S[sa] = m || (r && r[sa]) || null),
          (S[ai] = y || (r && r[ai]) || null),
          (S[on] = d),
          (S[Ki] = (function ew() {
            return tE++;
          })()),
          (S[A] = D),
          (S[Kt] = 2 == o.type ? r[Kt] : S),
          S
        );
      }
      function za(r, o, s, c, l) {
        let d = r.data[o];
        if (null === d)
          (d = (function Lf(r, o, s, c, l) {
            const d = bv(),
              p = kp(),
              m = (r.data[o] = (function Em(r, o, s, c, l, d) {
                return {
                  type: s,
                  index: c,
                  insertBeforeIndex: null,
                  injectorIndex: o ? o.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  componentOffset: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: l,
                  attrs: d,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tView: null,
                  next: null,
                  prev: null,
                  projectionNext: null,
                  child: null,
                  parent: o,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, p ? d : d && d.parent, s, o, c, l));
            return (
              null === r.firstChild && (r.firstChild = m),
              null !== d &&
                (p
                  ? null == d.child && null !== m.parent && (d.child = m)
                  : null === d.next && ((d.next = m), (m.prev = d))),
              m
            );
          })(r, o, s, c, l)),
            (function jp() {
              return Ke.lFrame.inI18n;
            })() && (d.flags |= 32);
        else if (64 & d.type) {
          (d.type = s), (d.value = c), (d.attrs = l);
          const p = (function zu() {
            const r = Ke.lFrame,
              o = r.currentTNode;
            return r.isParent ? o : o.parent;
          })();
          d.injectorIndex = null === p ? -1 : p.injectorIndex;
        }
        return Br(d, !0), d;
      }
      function wi(r, o, s, c) {
        if (0 === s) return -1;
        const l = o.length;
        for (let d = 0; d < s; d++) o.push(c), r.blueprint.push(c), r.data.push(null);
        return l;
      }
      function Es(r, o, s) {
        $p(o);
        try {
          const c = r.viewQuery;
          null !== c && Gf(1, c, s);
          const l = r.template;
          null !== l && _m(r, o, l, 1, s),
            r.firstCreatePass && (r.firstCreatePass = !1),
            r.staticContentQueries && mm(r, o),
            r.staticViewQueries && Gf(2, r.viewQuery, s);
          const d = r.components;
          null !== d &&
            (function WE(r, o) {
              for (let s = 0; s < o.length; s++) u0(r, o[s]);
            })(o, d);
        } catch (c) {
          throw (r.firstCreatePass && ((r.incompleteFirstPass = !0), (r.firstCreatePass = !1)), c);
        } finally {
          (o[Ue] &= -5), Hp();
        }
      }
      function fo(r, o, s, c) {
        const l = o[Ue];
        if (128 != (128 & l)) {
          $p(o);
          try {
            Fp(o),
              (function Ji(r) {
                return (Ke.lFrame.bindingIndex = r);
              })(r.bindingStartIndex),
              null !== s && _m(r, o, s, 2, c);
            const p = 3 == (3 & l);
            if (p) {
              const y = r.preOrderCheckHooks;
              null !== y && Ed(o, y, null);
            } else {
              const y = r.preOrderHooks;
              null !== y && Dd(o, y, 0, null), Cd(o, 0);
            }
            if (
              ((function s0(r) {
                for (let o = hn(r); null !== o; o = un(o)) {
                  if (!o[de]) continue;
                  const s = o[He];
                  for (let c = 0; c < s.length; c++) {
                    const l = s[c];
                    512 & l[Ue] || md(l[Rt], 1), (l[Ue] |= 512);
                  }
                }
              })(o),
              (function o0(r) {
                for (let o = hn(r); null !== o; o = un(o))
                  for (let s = ut; s < o.length; s++) {
                    const c = o[s],
                      l = c[De];
                    Gu(c) && fo(l, c, l.template, c[Ut]);
                  }
              })(o),
              null !== r.contentQueries && mm(r, o),
              p)
            ) {
              const y = r.contentCheckHooks;
              null !== y && Ed(o, y);
            } else {
              const y = r.contentHooks;
              null !== y && Dd(o, y, 1), Cd(o, 1);
            }
            !(function zE(r, o) {
              const s = r.hostBindingOpCodes;
              if (null !== s)
                try {
                  for (let c = 0; c < s.length; c++) {
                    const l = s[c];
                    if (l < 0) di(~l);
                    else {
                      const d = l,
                        p = s[++c],
                        g = s[++c];
                      MC(p, d), g(2, o[d]);
                    }
                  }
                } finally {
                  di(-1);
                }
            })(r, o);
            const g = r.components;
            null !== g &&
              (function ZE(r, o) {
                for (let s = 0; s < o.length; s++) a0(r, o[s]);
              })(o, g);
            const m = r.viewQuery;
            if ((null !== m && Gf(2, m, c), p)) {
              const y = r.viewCheckHooks;
              null !== y && Ed(o, y);
            } else {
              const y = r.viewHooks;
              null !== y && Dd(o, y, 2), Cd(o, 2);
            }
            !0 === r.firstUpdatePass && (r.firstUpdatePass = !1),
              (o[Ue] &= -41),
              512 & o[Ue] && ((o[Ue] &= -513), md(o[Rt], -1));
          } finally {
            Hp();
          }
        }
      }
      function _m(r, o, s, c, l) {
        const d = In(),
          p = 2 & c;
        try {
          di(-1), p && o.length > B && xc(r, o, B, !1), wr(p ? 2 : 0, l), s(c, l);
        } finally {
          di(d), wr(p ? 3 : 1, l);
        }
      }
      function kf(r, o, s) {
        if (aa(o)) {
          const l = o.directiveEnd;
          for (let d = o.directiveStart; d < l; d++) {
            const p = r.data[d];
            p.contentQueries && p.contentQueries(1, s[d], d);
          }
        }
      }
      function Uf(r, o, s) {
        Lp() &&
          ((function jc(r, o, s, c) {
            const l = s.directiveStart,
              d = s.directiveEnd;
            Po(s) &&
              (function t0(r, o, s) {
                const c = _n(o, r),
                  l = ym(s),
                  d = r[sn],
                  p = Ka(
                    r,
                    Uc(
                      r,
                      l,
                      null,
                      s.onPush ? 32 : 16,
                      c,
                      o,
                      d,
                      d.createRenderer(c, s),
                      null,
                      null,
                      null
                    )
                  );
                r[o.index] = p;
              })(o, s, r.data[l + s.componentOffset]),
              r.firstCreatePass || Ju(s, o),
              On(c, o);
            const p = s.initialInputs;
            for (let g = l; g < d; g++) {
              const m = r.data[g],
                y = ts(o, r, g, s);
              On(y, o),
                null !== p && n0(0, g - l, y, m, 0, p),
                Jn(m) && (Qn(s.index, o)[Ut] = ts(o, r, g, s));
            }
          })(r, o, s, _n(s, o)),
          64 == (64 & s.flags) && Wa(r, o, s));
      }
      function Vf(r, o, s = _n) {
        const c = o.localNames;
        if (null !== c) {
          let l = o.index + 1;
          for (let d = 0; d < c.length; d += 2) {
            const p = c[d + 1],
              g = -1 === p ? s(o, r) : r[p];
            r[l++] = g;
          }
        }
      }
      function ym(r) {
        const o = r.tView;
        return null === o || o.incompleteFirstPass
          ? (r.tView = jf(
              1,
              null,
              r.template,
              r.decls,
              r.vars,
              r.directiveDefs,
              r.pipeDefs,
              r.viewQuery,
              r.schemas,
              r.consts
            ))
          : o;
      }
      function jf(r, o, s, c, l, d, p, g, m, y) {
        const D = B + c,
          S = D + l,
          N = (function YE(r, o) {
            const s = [];
            for (let c = 0; c < o; c++) s.push(c < r ? null : $e);
            return s;
          })(D, S),
          $ = 'function' == typeof y ? y() : y;
        return (N[De] = {
          type: r,
          blueprint: N,
          template: s,
          queries: null,
          viewQuery: g,
          declTNode: o,
          data: N.slice().fill(null, D),
          bindingStartIndex: D,
          expandoStartIndex: S,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof d ? d() : d,
          pipeRegistry: 'function' == typeof p ? p() : p,
          firstChild: null,
          schemas: m,
          consts: $,
          incompleteFirstPass: !1,
        });
      }
      function vm(r, o, s, c) {
        const l = Om(o);
        null === s ? l.push(c) : (l.push(s), r.firstCreatePass && Pm(r).push(c, l.length - 1));
      }
      function Dm(r, o, s, c) {
        for (let l in r)
          if (r.hasOwnProperty(l)) {
            s = null === s ? {} : s;
            const d = r[l];
            null === c ? Vc(s, o, l, d) : c.hasOwnProperty(l) && Vc(s, o, c[l], d);
          }
        return s;
      }
      function Vc(r, o, s, c) {
        r.hasOwnProperty(s) ? r[s].push(o, c) : (r[s] = [o, c]);
      }
      function wm(r, o) {
        const s = Qn(o, r);
        16 & s[Ue] || (s[Ue] |= 32);
      }
      function $f(r, o, s, c) {
        if (Lp()) {
          const l = null === c ? null : { '': -1 },
            d = (function Ya(r, o) {
              const s = r.directiveRegistry;
              let c = null,
                l = null;
              if (s)
                for (let d = 0; d < s.length; d++) {
                  const p = s[d];
                  if (Pc(o, p.selectors, !1))
                    if ((c || (c = []), Jn(p)))
                      if (null !== p.findHostDirectiveDefs) {
                        const g = [];
                        (l = l || new Map()),
                          p.findHostDirectiveDefs(p, g, l),
                          c.unshift(...g, p),
                          Bc(r, o, g.length);
                      } else c.unshift(p), Bc(r, o, 0);
                    else (l = l || new Map()), p.findHostDirectiveDefs?.(p, c, l), c.push(p);
                }
              return null === c ? null : [c, l];
            })(r, s);
          let p, g;
          null === d ? (p = g = null) : ([p, g] = d),
            null !== p && Za(r, o, s, p, l, g),
            l &&
              (function JE(r, o, s) {
                if (o) {
                  const c = (r.localNames = []);
                  for (let l = 0; l < o.length; l += 2) {
                    const d = s[o[l + 1]];
                    if (null == d) throw new ee(-301, !1);
                    c.push(o[l], d);
                  }
                }
              })(s, c, l);
        }
        s.mergedAttrs = fi(s.mergedAttrs, s.attrs);
      }
      function Za(r, o, s, c, l, d) {
        for (let y = 0; y < c.length; y++) ha(Ju(s, o), r, c[y].type);
        !(function XE(r, o, s) {
          (r.flags |= 1), (r.directiveStart = o), (r.directiveEnd = o + s), (r.providerIndexes = o);
        })(s, r.data.length, c.length);
        for (let y = 0; y < c.length; y++) {
          const D = c[y];
          D.providersResolver && D.providersResolver(D);
        }
        let p = !1,
          g = !1,
          m = wi(r, o, c.length, null);
        for (let y = 0; y < c.length; y++) {
          const D = c[y];
          (s.mergedAttrs = fi(s.mergedAttrs, D.hostAttrs)),
            e0(r, s, o, m, D),
            QE(m, D, l),
            null !== D.contentQueries && (s.flags |= 4),
            (null !== D.hostBindings || null !== D.hostAttrs || 0 !== D.hostVars) &&
              (s.flags |= 64);
          const S = D.type.prototype;
          !p &&
            (S.ngOnChanges || S.ngOnInit || S.ngDoCheck) &&
            ((r.preOrderHooks ?? (r.preOrderHooks = [])).push(s.index), (p = !0)),
            !g &&
              (S.ngOnChanges || S.ngDoCheck) &&
              ((r.preOrderCheckHooks ?? (r.preOrderCheckHooks = [])).push(s.index), (g = !0)),
            m++;
        }
        !(function Cm(r, o, s) {
          const l = o.directiveEnd,
            d = r.data,
            p = o.attrs,
            g = [];
          let m = null,
            y = null;
          for (let D = o.directiveStart; D < l; D++) {
            const S = d[D],
              N = s ? s.get(S) : null,
              J = N ? N.outputs : null;
            (m = Dm(S.inputs, D, m, N ? N.inputs : null)), (y = Dm(S.outputs, D, y, J));
            const ue = null === m || null === p || nm(o) ? null : r0(m, D, p);
            g.push(ue);
          }
          null !== m &&
            (m.hasOwnProperty('class') && (o.flags |= 8),
            m.hasOwnProperty('style') && (o.flags |= 16)),
            (o.initialInputs = g),
            (o.inputs = m),
            (o.outputs = y);
        })(r, s, d);
      }
      function Wa(r, o, s) {
        const c = s.directiveStart,
          l = s.directiveEnd,
          d = s.index,
          p = (function TC() {
            return Ke.lFrame.currentDirectiveIndex;
          })();
        try {
          di(d);
          for (let g = c; g < l; g++) {
            const m = r.data[g],
              y = o[g];
            yd(g),
              (null !== m.hostBindings || 0 !== m.hostVars || null !== m.hostAttrs) && Am(m, y);
          }
        } finally {
          di(-1), yd(p);
        }
      }
      function Am(r, o) {
        null !== r.hostBindings && r.hostBindings(1, o);
      }
      function Bc(r, o, s) {
        (o.componentOffset = s), (r.components ?? (r.components = [])).push(o.index);
      }
      function QE(r, o, s) {
        if (s) {
          if (o.exportAs) for (let c = 0; c < o.exportAs.length; c++) s[o.exportAs[c]] = r;
          Jn(o) && (s[''] = r);
        }
      }
      function e0(r, o, s, c, l) {
        r.data[c] = l;
        const d = l.factory || (l.factory = qi(l.type)),
          p = new Ro(d, Jn(l), Wr);
        (r.blueprint[c] = p),
          (s[c] = p),
          (function Sm(r, o, s, c, l) {
            const d = l.hostBindings;
            if (d) {
              let p = r.hostBindingOpCodes;
              null === p && (p = r.hostBindingOpCodes = []);
              const g = ~o.index;
              (function bm(r) {
                let o = r.length;
                for (; o > 0; ) {
                  const s = r[--o];
                  if ('number' == typeof s && s < 0) return s;
                }
                return 0;
              })(p) != g && p.push(g),
                p.push(s, c, d);
            }
          })(r, o, c, wi(r, s, l.hostVars, $e), l);
      }
      function Pr(r, o, s, c, l, d) {
        const p = _n(r, o);
        !(function Hf(r, o, s, c, l, d, p) {
          if (null == d) r.removeAttribute(o, l, s);
          else {
            const g = null == p ? ae(d) : p(d, c || '', l);
            r.setAttribute(o, l, g, s);
          }
        })(o[nt], p, d, r.value, s, c, l);
      }
      function n0(r, o, s, c, l, d) {
        const p = d[o];
        if (null !== p) {
          const g = c.setInput;
          for (let m = 0; m < p.length; ) {
            const y = p[m++],
              D = p[m++],
              S = p[m++];
            null !== g ? c.setInput(s, S, y, D) : (s[D] = S);
          }
        }
      }
      function r0(r, o, s) {
        let c = null,
          l = 0;
        for (; l < s.length; ) {
          const d = s[l];
          if (0 !== d)
            if (5 !== d) {
              if ('number' == typeof d) break;
              if (r.hasOwnProperty(d)) {
                null === c && (c = []);
                const p = r[d];
                for (let g = 0; g < p.length; g += 2)
                  if (p[g] === o) {
                    c.push(d, p[g + 1], s[l + 1]);
                    break;
                  }
              }
              l += 2;
            } else l += 2;
          else l += 4;
        }
        return c;
      }
      function Mm(r, o, s, c) {
        return [r, !0, !1, o, null, 0, c, s, null, null];
      }
      function a0(r, o) {
        const s = Qn(o, r);
        if (Gu(s)) {
          const c = s[De];
          48 & s[Ue] ? fo(c, s, c.template, s[Ut]) : s[Dr] > 0 && $c(s);
        }
      }
      function $c(r) {
        for (let c = hn(r); null !== c; c = un(c))
          for (let l = ut; l < c.length; l++) {
            const d = c[l];
            if (Gu(d))
              if (512 & d[Ue]) {
                const p = d[De];
                fo(p, d, p.template, d[Ut]);
              } else d[Dr] > 0 && $c(d);
          }
        const s = r[De].components;
        if (null !== s)
          for (let c = 0; c < s.length; c++) {
            const l = Qn(s[c], r);
            Gu(l) && l[Dr] > 0 && $c(l);
          }
      }
      function u0(r, o) {
        const s = Qn(o, r),
          c = s[De];
        (function Tm(r, o) {
          for (let s = o.length; s < r.blueprint.length; s++) o.push(r.blueprint[s]);
        })(c, s),
          Es(c, s, s[Ut]);
      }
      function Ka(r, o) {
        return r[ro] ? (r[Yi][kn] = o) : (r[ro] = o), (r[Yi] = o), o;
      }
      function Im(r) {
        for (; r; ) {
          r[Ue] |= 32;
          const o = bt(r);
          if (cv(r) && !o) return r;
          r = o;
        }
        return null;
      }
      function qa(r, o, s, c = !0) {
        const l = o[sn];
        l.begin && l.begin();
        try {
          fo(r, o, r.template, s);
        } catch (p) {
          throw (c && Rm(o, p), p);
        } finally {
          l.end && l.end();
        }
      }
      function Gf(r, o, s) {
        Bp(0), o(r, s);
      }
      function Om(r) {
        return r[Kn] || (r[Kn] = []);
      }
      function Pm(r) {
        return r.cleanup || (r.cleanup = []);
      }
      function Rm(r, o) {
        const s = r[ai],
          c = s ? s.get(co, null) : null;
        c && c.handleError(o);
      }
      function Hc(r, o, s, c, l) {
        for (let d = 0; d < s.length; ) {
          const p = s[d++],
            g = s[d++],
            m = o[p],
            y = r.data[p];
          null !== y.setInput ? y.setInput(m, l, c, g) : (m[g] = l);
        }
      }
      function xr(r, o, s) {
        const c = Hu(o, r);
        !(function yg(r, o, s) {
          r.setValue(o, s);
        })(r[nt], c, s);
      }
      function Ja(r, o, s) {
        let c = s ? r.styles : null,
          l = s ? r.classes : null,
          d = 0;
        if (null !== o)
          for (let p = 0; p < o.length; p++) {
            const g = o[p];
            'number' == typeof g
              ? (d = g)
              : 1 == d
              ? (l = P(l, g))
              : 2 == d && (c = P(c, g + ': ' + o[++p] + ';'));
          }
        s ? (r.styles = c) : (r.stylesWithoutHost = c),
          s ? (r.classes = l) : (r.classesWithoutHost = l);
      }
      function ho(r, o, s, c, l = !1) {
        for (; null !== s; ) {
          const d = o[s.index];
          if ((null !== d && c.push(dn(d)), Ot(d)))
            for (let g = ut; g < d.length; g++) {
              const m = d[g],
                y = m[De].firstChild;
              null !== y && ho(m[De], m, y, c);
            }
          const p = s.type;
          if (8 & p) ho(r, o, s.child, c);
          else if (32 & p) {
            const g = lc(s, o);
            let m;
            for (; (m = g()); ) c.push(m);
          } else if (16 & p) {
            const g = Mg(o, s);
            if (Array.isArray(g)) c.push(...g);
            else {
              const m = bt(o[Kt]);
              ho(m[De], m, g, c, !0);
            }
          }
          s = l ? s.projectionNext : s.next;
        }
        return c;
      }
      class Si {
        get rootNodes() {
          const o = this._lView,
            s = o[De];
          return ho(s, o, s.firstChild, []);
        }
        constructor(o, s) {
          (this._lView = o),
            (this._cdRefInjectingView = s),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[Ut];
        }
        set context(o) {
          this._lView[Ut] = o;
        }
        get destroyed() {
          return 128 == (128 & this._lView[Ue]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const o = this._lView[Rt];
            if (Ot(o)) {
              const s = o[Ye],
                c = s ? s.indexOf(this) : -1;
              c > -1 && (Wd(o, c), Ld(s, c));
            }
            this._attachedToViewContainer = !1;
          }
          Dg(this._lView[De], this._lView);
        }
        onDestroy(o) {
          vm(this._lView[De], this._lView, null, o);
        }
        markForCheck() {
          Im(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[Ue] &= -65;
        }
        reattach() {
          this._lView[Ue] |= 64;
        }
        detectChanges() {
          qa(this._lView[De], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new ee(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function vg(r, o) {
              gi(r, o, o[nt], 2, null, null);
            })(this._lView[De], this._lView);
        }
        attachToAppRef(o) {
          if (this._attachedToViewContainer) throw new ee(902, !1);
          this._appRef = o;
        }
      }
      class l0 extends Si {
        constructor(o) {
          super(o), (this._view = o);
        }
        detectChanges() {
          const o = this._view;
          qa(o[De], o, o[Ut], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class zf extends hs {
        constructor(o) {
          super(), (this.ngModule = o);
        }
        resolveComponentFactory(o) {
          const s = vt(o);
          return new Ds(s, this.ngModule);
        }
      }
      function Qa(r) {
        const o = [];
        for (let s in r) r.hasOwnProperty(s) && o.push({ propName: r[s], templateName: s });
        return o;
      }
      class Fm {
        constructor(o, s) {
          (this.injector = o), (this.parentInjector = s);
        }
        get(o, s, c) {
          c = ri(c);
          const l = this.injector.get(o, Tc, c);
          return l !== Tc || s === Tc ? l : this.parentInjector.get(o, s, c);
        }
      }
      class Ds extends fs {
        get inputs() {
          return Qa(this.componentDef.inputs);
        }
        get outputs() {
          return Qa(this.componentDef.outputs);
        }
        constructor(o, s) {
          super(),
            (this.componentDef = o),
            (this.ngModule = s),
            (this.componentType = o.type),
            (this.selector = (function sm(r) {
              return r.map(gr).join(',');
            })(o.selectors)),
            (this.ngContentSelectors = o.ngContentSelectors ? o.ngContentSelectors : []),
            (this.isBoundToModule = !!s);
        }
        create(o, s, c, l) {
          let d = (l = l || this.ngModule) instanceof Ei ? l : l?.injector;
          d &&
            null !== this.componentDef.getStandaloneInjector &&
            (d = this.componentDef.getStandaloneInjector(d) || d);
          const p = d ? new Fm(o, d) : o,
            g = p.get(Xg, null);
          if (null === g) throw new ee(407, !1);
          const m = p.get(ME, null),
            y = g.createRenderer(null, this.componentDef),
            D = this.componentDef.selectors[0][0] || 'div',
            S = c
              ? (function KE(r, o, s) {
                  return r.selectRootElement(o, s === ar.ShadowDom);
                })(y, c, this.componentDef.encapsulation)
              : Nt(
                  y,
                  D,
                  (function Gc(r) {
                    const o = r.toLowerCase();
                    return 'svg' === o ? 'svg' : 'math' === o ? 'math' : null;
                  })(D)
                ),
            N = this.componentDef.onPush ? 288 : 272,
            $ = jf(0, null, null, 1, 0, null, null, null, null, null),
            J = Uc(null, $, null, N, null, null, g, y, m, p, null);
          let ue, ve;
          $p(J);
          try {
            const Ae = this.componentDef;
            let Ne,
              oe = null;
            Ae.findHostDirectiveDefs
              ? ((Ne = []), (oe = new Map()), Ae.findHostDirectiveDefs(Ae, Ne, oe), Ne.push(Ae))
              : (Ne = [Ae]);
            const Ge = (function f0(r, o) {
                const s = r[De],
                  c = B;
                return (r[c] = o), za(s, c, 2, '#host', null);
              })(J, S),
              kt = (function h0(r, o, s, c, l, d, p, g) {
                const m = l[De];
                !(function p0(r, o, s, c) {
                  for (const l of r) o.mergedAttrs = fi(o.mergedAttrs, l.hostAttrs);
                  null !== o.mergedAttrs && (Ja(o, o.mergedAttrs, !0), null !== s && tf(c, s, o));
                })(c, r, o, p);
                const y = d.createRenderer(o, s),
                  D = Uc(
                    l,
                    ym(s),
                    null,
                    s.onPush ? 32 : 16,
                    l[r.index],
                    r,
                    d,
                    y,
                    g || null,
                    null,
                    null
                  );
                return m.firstCreatePass && Bc(m, r, c.length - 1), Ka(l, D), (l[r.index] = D);
              })(Ge, S, Ae, Ne, J, g, y);
            (ve = Rp($, B)),
              S &&
                (function g0(r, o, s, c) {
                  if (c) Yu(r, s, ['ng-version', TE.full]);
                  else {
                    const { attrs: l, classes: d } = (function LE(r) {
                      const o = [],
                        s = [];
                      let c = 1,
                        l = 2;
                      for (; c < r.length; ) {
                        let d = r[c];
                        if ('string' == typeof d)
                          2 === l ? '' !== d && o.push(d, r[++c]) : 8 === l && s.push(d);
                        else {
                          if (!pr(l)) break;
                          l = d;
                        }
                        c++;
                      }
                      return { attrs: o, classes: s };
                    })(o.selectors[0]);
                    l && Yu(r, s, l), d && d.length > 0 && Ir(r, s, d.join(' '));
                  }
                })(y, Ae, S, c),
              void 0 !== s &&
                (function m0(r, o, s) {
                  const c = (r.projection = []);
                  for (let l = 0; l < o.length; l++) {
                    const d = s[l];
                    c.push(null != d ? Array.from(d) : null);
                  }
                })(ve, this.ngContentSelectors, s),
              (ue = (function zc(r, o, s, c, l, d) {
                const p = yn(),
                  g = l[De],
                  m = _n(p, l);
                Za(g, l, p, s, null, c);
                for (let D = 0; D < s.length; D++) On(ts(l, g, p.directiveStart + D, p), l);
                Wa(g, l, p), m && On(m, l);
                const y = ts(l, g, p.directiveStart + p.componentOffset, p);
                if (((r[Ut] = l[Ut] = y), null !== d)) for (const D of d) D(y, o);
                return kf(g, p, r), y;
              })(kt, Ae, Ne, oe, J, [Zf])),
              Es($, J, null);
          } finally {
            Hp();
          }
          return new d0(this.componentType, ue, gs(ve, J), J, ve);
        }
      }
      class d0 extends bE {
        constructor(o, s, c, l, d) {
          super(),
            (this.location = c),
            (this._rootLView = l),
            (this._tNode = d),
            (this.instance = s),
            (this.hostView = this.changeDetectorRef = new l0(l)),
            (this.componentType = o);
        }
        setInput(o, s) {
          const c = this._tNode.inputs;
          let l;
          if (null !== c && (l = c[o])) {
            const d = this._rootLView;
            Hc(d[De], d, l, o, s), wm(d, this._tNode.index);
          }
        }
        get injector() {
          return new ns(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(o) {
          this.hostView.onDestroy(o);
        }
      }
      function Zf() {
        const r = yn();
        vd(K()[De], r);
      }
      function Wf(r) {
        let o = (function Nm(r) {
            return Object.getPrototypeOf(r.prototype).constructor;
          })(r.type),
          s = !0;
        const c = [r];
        for (; o; ) {
          let l;
          if (Jn(r)) l = o.ɵcmp || o.ɵdir;
          else {
            if (o.ɵcmp) throw new ee(903, !1);
            l = o.ɵdir;
          }
          if (l) {
            if (s) {
              c.push(l);
              const p = r;
              (p.inputs = Yf(r.inputs)),
                (p.declaredInputs = Yf(r.declaredInputs)),
                (p.outputs = Yf(r.outputs));
              const g = l.hostBindings;
              g && jn(r, g);
              const m = l.viewQuery,
                y = l.contentQueries;
              if (
                (m && At(r, m),
                y && y0(r, y),
                k(r.inputs, l.inputs),
                k(r.declaredInputs, l.declaredInputs),
                k(r.outputs, l.outputs),
                Jn(l) && l.data.animation)
              ) {
                const D = r.data;
                D.animation = (D.animation || []).concat(l.data.animation);
              }
            }
            const d = l.features;
            if (d)
              for (let p = 0; p < d.length; p++) {
                const g = d[p];
                g && g.ngInherit && g(r), g === Wf && (s = !1);
              }
          }
          o = Object.getPrototypeOf(o);
        }
        !(function _0(r) {
          let o = 0,
            s = null;
          for (let c = r.length - 1; c >= 0; c--) {
            const l = r[c];
            (l.hostVars = o += l.hostVars),
              (l.hostAttrs = fi(l.hostAttrs, (s = fi(s, l.hostAttrs))));
          }
        })(c);
      }
      function Yf(r) {
        return r === Wn ? {} : r === mt ? [] : r;
      }
      function At(r, o) {
        const s = r.viewQuery;
        r.viewQuery = s
          ? (c, l) => {
              o(c, l), s(c, l);
            }
          : o;
      }
      function y0(r, o) {
        const s = r.contentQueries;
        r.contentQueries = s
          ? (c, l, d) => {
              o(c, l, d), s(c, l, d);
            }
          : o;
      }
      function jn(r, o) {
        const s = r.hostBindings;
        r.hostBindings = s
          ? (c, l) => {
              o(c, l), s(c, l);
            }
          : o;
      }
      function po(r) {
        return !!Yr(r) && (Array.isArray(r) || (!(r instanceof Map) && Symbol.iterator in r));
      }
      function Yr(r) {
        return null !== r && ('function' == typeof r || 'object' == typeof r);
      }
      function Kr(r, o, s) {
        return (r[o] = s);
      }
      function Pn(r, o, s) {
        return !Object.is(r[o], s) && ((r[o] = s), !0);
      }
      function $o(r, o, s, c) {
        const l = Pn(r, o, s);
        return Pn(r, o + 1, c) || l;
      }
      function Jf(r, o, s, c) {
        const l = K();
        return Pn(l, ca(), o) && (_t(), Pr(Bt(), l, r, o, s, c)), Jf;
      }
      function bi(r, o, s, c, l, d) {
        const g = $o(
          r,
          (function Sr() {
            return Ke.lFrame.bindingIndex;
          })(),
          s,
          l
        );
        return xo(2), g ? o + ae(s) + c + ae(l) + d : $e;
      }
      function w0(r, o, s, c, l, d, p, g) {
        const m = K(),
          y = _t(),
          D = r + B,
          S = y.firstCreatePass
            ? (function C0(r, o, s, c, l, d, p, g, m) {
                const y = o.consts,
                  D = za(o, r, 4, p || null, li(y, g));
                $f(o, s, D, li(y, m)), vd(o, D);
                const S = (D.tView = jf(
                  2,
                  D,
                  c,
                  l,
                  d,
                  o.directiveRegistry,
                  o.pipeRegistry,
                  null,
                  o.schemas,
                  y
                ));
                return (
                  null !== o.queries &&
                    (o.queries.template(o, D), (S.queries = o.queries.embeddedTView(D))),
                  D
                );
              })(D, y, m, o, s, c, l, d, p)
            : y.data[D];
        Br(S, !1);
        const N = m[nt].createComment('');
        pc(y, m, N, S),
          On(N, m),
          Ka(m, (m[D] = Mm(N, m, N, S))),
          ci(S) && Uf(y, m, S),
          null != p && Vf(m, S, g);
      }
      function Xf(r) {
        return ua(
          (function AC() {
            return Ke.lFrame.contextLView;
          })(),
          B + r
        );
      }
      function Km(r, o, s) {
        const c = K();
        return (
          Pn(c, ca(), o) &&
            (function En(r, o, s, c, l, d, p, g) {
              const m = _n(o, s);
              let D,
                y = o.inputs;
              !g && null != y && (D = y[c])
                ? (Hc(r, s, D, c, l), Po(o) && wm(s, o.index))
                : 3 & o.type &&
                  ((c = (function Bf(r) {
                    return 'class' === r
                      ? 'className'
                      : 'for' === r
                      ? 'htmlFor'
                      : 'formaction' === r
                      ? 'formAction'
                      : 'innerHtml' === r
                      ? 'innerHTML'
                      : 'readonly' === r
                      ? 'readOnly'
                      : 'tabindex' === r
                      ? 'tabIndex'
                      : r;
                  })(c)),
                  (l = null != p ? p(l, o.value || '', c) : l),
                  d.setProperty(m, c, l));
            })(_t(), Bt(), c, r, o, c[nt], s, !1),
          Km
        );
      }
      function ou(r, o, s, c, l) {
        const p = l ? 'class' : 'style';
        Hc(r, s, o.inputs[p], p, c);
      }
      function bs(r, o, s, c) {
        const l = K(),
          d = _t(),
          p = B + r,
          g = l[nt],
          m = d.firstCreatePass
            ? (function S0(r, o, s, c, l, d) {
                const p = o.consts,
                  m = za(o, r, 2, c, li(p, l));
                return (
                  $f(o, s, m, li(p, d)),
                  null !== m.attrs && Ja(m, m.attrs, !1),
                  null !== m.mergedAttrs && Ja(m, m.mergedAttrs, !0),
                  null !== o.queries && o.queries.elementStart(o, m),
                  m
                );
              })(p, d, l, o, s, c)
            : d.data[p],
          y = (l[p] = Nt(
            g,
            o,
            (function NC() {
              return Ke.lFrame.currentNamespace;
            })()
          )),
          D = ci(m);
        return (
          Br(m, !0),
          tf(g, y, m),
          32 != (32 & m.flags) && pc(d, l, y, m),
          0 ===
            (function vv() {
              return Ke.lFrame.elementDepthCount;
            })() && On(y, l),
          (function Ev() {
            Ke.lFrame.elementDepthCount++;
          })(),
          D && (Uf(d, l, m), kf(d, m, l)),
          null !== c && Vf(l, m),
          bs
        );
      }
      function eh() {
        let r = yn();
        kp() ? Up() : ((r = r.parent), Br(r, !1));
        const o = r;
        !(function Dv() {
          Ke.lFrame.elementDepthCount--;
        })();
        const s = _t();
        return (
          s.firstCreatePass && (vd(s, r), aa(r) && s.queries.elementEnd(r)),
          null != o.classesWithoutHost &&
            (function Lv(r) {
              return 0 != (8 & r.flags);
            })(o) &&
            ou(s, o, K(), o.classesWithoutHost, !0),
          null != o.stylesWithoutHost &&
            (function kv(r) {
              return 0 != (16 & r.flags);
            })(o) &&
            ou(s, o, K(), o.stylesWithoutHost, !1),
          eh
        );
      }
      function iu(r, o, s, c) {
        return bs(r, o, s, c), eh(), iu;
      }
      function su(r, o, s) {
        const c = K(),
          l = _t(),
          d = r + B,
          p = l.firstCreatePass
            ? (function ww(r, o, s, c, l) {
                const d = o.consts,
                  p = li(d, c),
                  g = za(o, r, 8, 'ng-container', p);
                return (
                  null !== p && Ja(g, p, !0),
                  $f(o, s, g, li(d, l)),
                  null !== o.queries && o.queries.elementStart(o, g),
                  g
                );
              })(d, l, c, o, s)
            : l.data[d];
        Br(p, !0);
        const g = (c[d] = c[nt].createComment(''));
        return (
          pc(l, c, g, p), On(g, c), ci(p) && (Uf(l, c, p), kf(l, p, c)), null != s && Vf(c, p), su
        );
      }
      function Wc() {
        let r = yn();
        const o = _t();
        return (
          kp() ? Up() : ((r = r.parent), Br(r, !1)),
          o.firstCreatePass && (vd(o, r), aa(r) && o.queries.elementEnd(r)),
          Wc
        );
      }
      function th() {
        return K();
      }
      function Ai(r) {
        return !!r && 'function' == typeof r.then;
      }
      function nh(r) {
        return !!r && 'function' == typeof r.subscribe;
      }
      const rh = nh;
      function Yc(r, o, s, c) {
        const l = K(),
          d = _t(),
          p = yn();
        return (
          (function oh(r, o, s, c, l, d, p) {
            const g = ci(c),
              y = r.firstCreatePass && Pm(r),
              D = o[Ut],
              S = Om(o);
            let N = !0;
            if (3 & c.type || p) {
              const ue = _n(c, o),
                ve = p ? p(ue) : ue,
                Ae = S.length,
                Ne = p ? (Ge) => p(dn(Ge[c.index])) : c.index;
              let oe = null;
              if (
                (!p &&
                  g &&
                  (oe = (function Qm(r, o, s, c) {
                    const l = r.cleanup;
                    if (null != l)
                      for (let d = 0; d < l.length - 1; d += 2) {
                        const p = l[d];
                        if (p === s && l[d + 1] === c) {
                          const g = o[Kn],
                            m = l[d + 2];
                          return g.length > m ? g[m] : null;
                        }
                        'string' == typeof p && (d += 2);
                      }
                    return null;
                  })(r, o, l, c.index)),
                null !== oe)
              )
                ((oe.__ngLastListenerFn__ || oe).__ngNextListenerFn__ = d),
                  (oe.__ngLastListenerFn__ = d),
                  (N = !1);
              else {
                d = ih(c, o, D, d, !1);
                const Ge = s.listen(ve, l, d);
                S.push(d, Ge), y && y.push(l, Ne, Ae, Ae + 1);
              }
            } else d = ih(c, o, D, d, !1);
            const $ = c.outputs;
            let J;
            if (N && null !== $ && (J = $[l])) {
              const ue = J.length;
              if (ue)
                for (let ve = 0; ve < ue; ve += 2) {
                  const kt = o[J[ve]][J[ve + 1]].subscribe(d),
                    Mt = S.length;
                  S.push(d, kt), y && y.push(l, c.index, Mt, -(Mt + 1));
                }
            }
          })(d, l, l[nt], p, r, o, c),
          Yc
        );
      }
      function tr(r, o, s, c) {
        try {
          return wr(6, o, s), !1 !== s(c);
        } catch (l) {
          return Rm(r, l), !1;
        } finally {
          wr(7, o, s);
        }
      }
      function ih(r, o, s, c, l) {
        return function d(p) {
          if (p === Function) return c;
          Im(r.componentOffset > -1 ? Qn(r.index, o) : o);
          let m = tr(o, s, c, p),
            y = d.__ngNextListenerFn__;
          for (; y; ) (m = tr(o, s, y, p) && m), (y = y.__ngNextListenerFn__);
          return l && !1 === m && (p.preventDefault(), (p.returnValue = !1)), m;
        };
      }
      function Xm(r = 1) {
        return (function Rv(r) {
          return (Ke.lFrame.contextLView = (function OC(r, o) {
            for (; r > 0; ) (o = o[oo]), r--;
            return o;
          })(r, Ke.lFrame.contextLView))[Ut];
        })(r);
      }
      function e_(r, o) {
        let s = null;
        const c = (function lo(r) {
          const o = r.attrs;
          if (null != o) {
            const s = o.indexOf(5);
            if (!(1 & s)) return o[s + 1];
          }
          return null;
        })(r);
        for (let l = 0; l < o.length; l++) {
          const d = o[l];
          if ('*' !== d) {
            if (null === c ? Pc(r, d, !0) : om(c, d)) return l;
          } else s = l;
        }
        return s;
      }
      function t_(r) {
        const o = K()[Kt][on];
        if (!o.projection) {
          const c = (o.projection = nc(r ? r.length : 1, null)),
            l = c.slice();
          let d = o.child;
          for (; null !== d; ) {
            const p = r ? e_(d, r) : 0;
            null !== p && (l[p] ? (l[p].projectionNext = d) : (c[p] = d), (l[p] = d)), (d = d.next);
          }
        }
      }
      function n_(r, o = 0, s) {
        const c = K(),
          l = _t(),
          d = za(l, B + r, 16, null, s || null);
        null === d.projection && (d.projection = o),
          Up(),
          32 != (32 & d.flags) &&
            (function uE(r, o, s) {
              Tg(o[nt], 0, o, s, Yd(r, s, o), wg(s.parent || o[on], s, o));
            })(l, c, d);
      }
      function au(r, o) {
        return (r << 17) | (o << 2);
      }
      function Et(r) {
        return (r >> 17) & 32767;
      }
      function Kc(r) {
        return 2 | r;
      }
      function qt(r) {
        return (131068 & r) >> 2;
      }
      function gt(r, o) {
        return (-131069 & r) | (o << 2);
      }
      function Ce(r) {
        return 1 | r;
      }
      function As(r, o, s, c, l) {
        const d = r[s + 1],
          p = null === o;
        let g = c ? Et(d) : qt(d),
          m = !1;
        for (; 0 !== g && (!1 === m || p); ) {
          const D = r[g + 1];
          l_(r[g], o) && ((m = !0), (r[g + 1] = c ? Ce(D) : Kc(D))), (g = c ? Et(D) : qt(D));
        }
        m && (r[s + 1] = c ? Kc(d) : Ce(d));
      }
      function l_(r, o) {
        return (
          null === r ||
          null == o ||
          (Array.isArray(r) ? r[1] : r) === o ||
          (!(!Array.isArray(r) || 'string' != typeof o) && Un(r, o) >= 0)
        );
      }
      function et(r, o) {
        return (
          (function Rr(r, o, s, c) {
            const l = K(),
              d = _t(),
              p = xo(2);
            d.firstUpdatePass &&
              (function f_(r, o, s, c) {
                const l = r.data;
                if (null === l[s + 1]) {
                  const d = l[In()],
                    p = (function d_(r, o) {
                      return o >= r.expandoStartIndex;
                    })(r, s);
                  (function Ts(r, o) {
                    return 0 != (r.flags & (o ? 8 : 16));
                  })(d, c) &&
                    null === o &&
                    !p &&
                    (o = !1),
                    (o = (function P0(r, o, s, c) {
                      const l = (function Zu(r) {
                        const o = Ke.lFrame.currentDirectiveIndex;
                        return -1 === o ? null : r[o];
                      })(r);
                      let d = c ? o.residualClasses : o.residualStyles;
                      if (null === l)
                        0 === (c ? o.classBindings : o.styleBindings) &&
                          ((s = Ti((s = lh(null, r, o, s, c)), o.attrs, c)), (d = null));
                      else {
                        const p = o.directiveStylingLast;
                        if (-1 === p || r[p] !== l)
                          if (((s = lh(l, r, o, s, c)), null === d)) {
                            let m = (function x0(r, o, s) {
                              const c = s ? o.classBindings : o.styleBindings;
                              if (0 !== qt(c)) return r[Et(c)];
                            })(r, o, c);
                            void 0 !== m &&
                              Array.isArray(m) &&
                              ((m = lh(null, r, o, m[1], c)),
                              (m = Ti(m, o.attrs, c)),
                              (function R0(r, o, s, c) {
                                r[Et(s ? o.classBindings : o.styleBindings)] = c;
                              })(r, o, c, m));
                          } else
                            d = (function Xc(r, o, s) {
                              let c;
                              const l = o.directiveEnd;
                              for (let d = 1 + o.directiveStylingLast; d < l; d++)
                                c = Ti(c, r[d].hostAttrs, s);
                              return Ti(c, o.attrs, s);
                            })(r, o, c);
                      }
                      return (
                        void 0 !== d && (c ? (o.residualClasses = d) : (o.residualStyles = d)), s
                      );
                    })(l, d, o, c)),
                    (function M0(r, o, s, c, l, d) {
                      let p = d ? o.classBindings : o.styleBindings,
                        g = Et(p),
                        m = qt(p);
                      r[c] = s;
                      let D,
                        y = !1;
                      if (
                        (Array.isArray(s)
                          ? ((D = s[1]), (null === D || Un(s, D) > 0) && (y = !0))
                          : (D = s),
                        l)
                      )
                        if (0 !== m) {
                          const N = Et(r[g + 1]);
                          (r[c + 1] = au(N, g)),
                            0 !== N && (r[N + 1] = gt(r[N + 1], c)),
                            (r[g + 1] = (function qe(r, o) {
                              return (131071 & r) | (o << 17);
                            })(r[g + 1], c));
                        } else
                          (r[c + 1] = au(g, 0)), 0 !== g && (r[g + 1] = gt(r[g + 1], c)), (g = c);
                      else
                        (r[c + 1] = au(m, 0)),
                          0 === g ? (g = c) : (r[m + 1] = gt(r[m + 1], c)),
                          (m = c);
                      y && (r[c + 1] = Kc(r[c + 1])),
                        As(r, D, c, !0),
                        As(r, D, c, !1),
                        (function mo(r, o, s, c, l) {
                          const d = l ? r.residualClasses : r.residualStyles;
                          null != d &&
                            'string' == typeof o &&
                            Un(d, o) >= 0 &&
                            (s[c + 1] = Ce(s[c + 1]));
                        })(o, D, r, c, d),
                        (p = au(g, m)),
                        d ? (o.classBindings = p) : (o.styleBindings = p);
                    })(l, d, o, s, p, c);
                }
              })(d, r, p, c),
              o !== $e &&
                Pn(l, p, o) &&
                (function hh(r, o, s, c, l, d, p, g) {
                  if (!(3 & o.type)) return;
                  const m = r.data,
                    y = m[g + 1],
                    D = (function qc(r) {
                      return 1 == (1 & r);
                    })(y)
                      ? tl(m, o, s, l, qt(y), p)
                      : void 0;
                  Ms(D) ||
                    (Ms(d) ||
                      ((function A0(r) {
                        return 2 == (2 & r);
                      })(y) &&
                        (d = tl(m, null, s, l, g, p))),
                    (function Ig(r, o, s, c, l) {
                      if (o) l ? r.addClass(s, c) : r.removeClass(s, c);
                      else {
                        let d = -1 === c.indexOf('-') ? void 0 : Mr.DashCase;
                        null == l
                          ? r.removeStyle(s, c, d)
                          : ('string' == typeof l &&
                              l.endsWith('!important') &&
                              ((l = l.slice(0, -10)), (d |= Mr.Important)),
                            r.setStyle(s, c, l, d));
                      }
                    })(c, p, Hu(In(), s), l, d));
                })(
                  d,
                  d.data[In()],
                  l,
                  l[nt],
                  r,
                  (l[p + 1] = (function nl(r, o) {
                    return (
                      null == r ||
                        '' === r ||
                        ('string' == typeof o ? (r += o) : 'object' == typeof r && (r = x(er(r)))),
                      r
                    );
                  })(o, s)),
                  c,
                  p
                );
          })(r, o, null, !0),
          et
        );
      }
      function lh(r, o, s, c, l) {
        let d = null;
        const p = s.directiveEnd;
        let g = s.directiveStylingLast;
        for (
          -1 === g ? (g = s.directiveStart) : g++;
          g < p && ((d = o[g]), (c = Ti(c, d.hostAttrs, l)), d !== r);

        )
          g++;
        return null !== r && (s.directiveStylingLast = g), c;
      }
      function Ti(r, o, s) {
        const c = s ? 1 : 2;
        let l = -1;
        if (null !== o)
          for (let d = 0; d < o.length; d++) {
            const p = o[d];
            'number' == typeof p
              ? (l = p)
              : l === c &&
                (Array.isArray(r) || (r = void 0 === r ? [] : ['', r]), cr(r, p, !!s || o[++d]));
          }
        return void 0 === r ? null : r;
      }
      function tl(r, o, s, c, l, d) {
        const p = null === o;
        let g;
        for (; l > 0; ) {
          const m = r[l],
            y = Array.isArray(m),
            D = y ? m[1] : m,
            S = null === D;
          let N = s[l + 1];
          N === $e && (N = S ? mt : void 0);
          let $ = S ? we(N, c) : D === c ? N : void 0;
          if ((y && !Ms($) && ($ = we(m, c)), Ms($) && ((g = $), p))) return g;
          const J = r[l + 1];
          l = p ? Et(J) : qt(J);
        }
        if (null !== o) {
          let m = d ? o.residualClasses : o.residualStyles;
          null != m && (g = we(m, c));
        }
        return g;
      }
      function Ms(r) {
        return void 0 !== r;
      }
      function Ho(r, o = '') {
        const s = K(),
          c = _t(),
          l = r + B,
          d = c.firstCreatePass ? za(c, l, 1, o, null) : c.data[l],
          p = (s[l] = (function T(r, o) {
            return r.createText(o);
          })(s[nt], o));
        pc(c, s, p, d), Br(d, !1);
      }
      function rl(r) {
        return Go('', r, ''), rl;
      }
      function Go(r, o, s) {
        const c = K(),
          l = (function ws(r, o, s, c) {
            return Pn(r, ca(), s) ? o + ae(s) + c : $e;
          })(c, r, o, s);
        return l !== $e && xr(c, In(), l), Go;
      }
      function zo(r, o, s, c, l) {
        const d = K(),
          p = bi(d, r, o, s, c, l);
        return p !== $e && xr(d, In(), p), zo;
      }
      const Ri = void 0;
      var L0 = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Ri],
        [['AM', 'PM'], Ri, Ri],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        Ri,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        Ri,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Ri, "{1} 'at' {0}", Ri],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function N0(r) {
          const s = Math.floor(Math.abs(r)),
            c = r.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === s && 0 === c ? 1 : 5;
        },
      ];
      let Ps = {};
      function Ch(r) {
        const o = (function k0(r) {
          return r.toLowerCase().replace(/_/g, '-');
        })(r);
        let s = b_(o);
        if (s) return s;
        const c = o.split('-')[0];
        if (((s = b_(c)), s)) return s;
        if ('en' === c) return L0;
        throw new ee(701, !1);
      }
      function S_(r) {
        return Ch(r)[Fe.PluralCase];
      }
      function b_(r) {
        return (
          r in Ps ||
            (Ps[r] = zt.ng && zt.ng.common && zt.ng.common.locales && zt.ng.common.locales[r]),
          Ps[r]
        );
      }
      var Fe = (() => (
        ((Fe = Fe || {})[(Fe.LocaleId = 0)] = 'LocaleId'),
        (Fe[(Fe.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (Fe[(Fe.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (Fe[(Fe.DaysFormat = 3)] = 'DaysFormat'),
        (Fe[(Fe.DaysStandalone = 4)] = 'DaysStandalone'),
        (Fe[(Fe.MonthsFormat = 5)] = 'MonthsFormat'),
        (Fe[(Fe.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (Fe[(Fe.Eras = 7)] = 'Eras'),
        (Fe[(Fe.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (Fe[(Fe.WeekendRange = 9)] = 'WeekendRange'),
        (Fe[(Fe.DateFormat = 10)] = 'DateFormat'),
        (Fe[(Fe.TimeFormat = 11)] = 'TimeFormat'),
        (Fe[(Fe.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (Fe[(Fe.NumberSymbols = 13)] = 'NumberSymbols'),
        (Fe[(Fe.NumberFormats = 14)] = 'NumberFormats'),
        (Fe[(Fe.CurrencyCode = 15)] = 'CurrencyCode'),
        (Fe[(Fe.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (Fe[(Fe.CurrencyName = 17)] = 'CurrencyName'),
        (Fe[(Fe.Currencies = 18)] = 'Currencies'),
        (Fe[(Fe.Directionality = 19)] = 'Directionality'),
        (Fe[(Fe.PluralCase = 20)] = 'PluralCase'),
        (Fe[(Fe.ExtraData = 21)] = 'ExtraData'),
        Fe
      ))();
      const xs = 'en-US';
      let A_ = xs;
      function Fh(r, o, s, c, l) {
        if (((r = I(r)), Array.isArray(r))) for (let d = 0; d < r.length; d++) Fh(r[d], o, s, c, l);
        else {
          const d = _t(),
            p = K();
          let g = Uo(r) ? r : I(r.provide),
            m = Kg(r);
          const y = yn(),
            D = 1048575 & y.providerIndexes,
            S = y.directiveStart,
            N = y.providerIndexes >> 20;
          if (Uo(r) || !r.multi) {
            const $ = new Ro(m, l, Wr),
              J = G_(g, o, l ? D : D + N, S);
            -1 === J
              ? (ha(Ju(y, p), d, g),
                Nh(d, r, o.length),
                o.push(g),
                y.directiveStart++,
                y.directiveEnd++,
                l && (y.providerIndexes += 1048576),
                s.push($),
                p.push($))
              : ((s[J] = $), (p[J] = $));
          } else {
            const $ = G_(g, o, D + N, S),
              J = G_(g, o, D, D + N),
              ve = J >= 0 && s[J];
            if ((l && !ve) || (!l && !($ >= 0 && s[$]))) {
              ha(Ju(y, p), d, g);
              const Ae = (function Lh(r, o, s, c, l) {
                const d = new Ro(r, s, Wr);
                return (
                  (d.multi = []), (d.index = o), (d.componentProviders = 0), X0(d, l, c && !s), d
                );
              })(l ? z_ : Rw, s.length, l, c, m);
              !l && ve && (s[J].providerFactory = Ae),
                Nh(d, r, o.length, 0),
                o.push(g),
                y.directiveStart++,
                y.directiveEnd++,
                l && (y.providerIndexes += 1048576),
                s.push(Ae),
                p.push(Ae);
            } else Nh(d, r, $ > -1 ? $ : J, X0(s[l ? J : $], m, !l && c));
            !l && c && ve && s[J].componentProviders++;
          }
        }
      }
      function Nh(r, o, s, c) {
        const l = Uo(o),
          d = (function SE(r) {
            return !!r.useClass;
          })(o);
        if (l || d) {
          const m = (d ? I(o.useClass) : o).prototype.ngOnDestroy;
          if (m) {
            const y = r.destroyHooks || (r.destroyHooks = []);
            if (!l && o.multi) {
              const D = y.indexOf(s);
              -1 === D ? y.push(s, [c, m]) : y[D + 1].push(c, m);
            } else y.push(s, m);
          }
        }
      }
      function X0(r, o, s) {
        return s && r.componentProviders++, r.multi.push(o) - 1;
      }
      function G_(r, o, s, c) {
        for (let l = s; l < c; l++) if (o[l] === r) return l;
        return -1;
      }
      function Rw(r, o, s, c) {
        return Ni(this.multi, []);
      }
      function z_(r, o, s, c) {
        const l = this.multi;
        let d;
        if (this.providerFactory) {
          const p = this.providerFactory.componentProviders,
            g = ts(s, s[De], this.providerFactory.index, c);
          (d = g.slice(0, p)), Ni(l, d);
          for (let m = p; m < g.length; m++) d.push(g[m]);
        } else (d = []), Ni(l, d);
        return d;
      }
      function Ni(r, o) {
        for (let s = 0; s < r.length; s++) o.push((0, r[s])());
        return o;
      }
      function Z_(r, o = []) {
        return (s) => {
          s.providersResolver = (c, l) =>
            (function Q0(r, o, s) {
              const c = _t();
              if (c.firstCreatePass) {
                const l = Jn(r);
                Fh(s, c.data, c.blueprint, l, !0), Fh(o, c.data, c.blueprint, l, !1);
              }
            })(c, l ? l(r) : r, o);
        };
      }
      class ks {}
      class kh {}
      function Uh(r, o) {
        return new tt(r, o ?? null);
      }
      class tt extends ks {
        constructor(o, s) {
          super(),
            (this._parent = s),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new zf(this));
          const c = rn(o);
          (this._bootstrapComponents = Zr(c.bootstrap)),
            (this._r3Injector = Pf(
              o,
              s,
              [
                { provide: ks, useValue: this },
                { provide: hs, useValue: this.componentFactoryResolver },
              ],
              x(o),
              new Set(['environment'])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(o));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const o = this._r3Injector;
          !o.destroyed && o.destroy(),
            this.destroyCbs.forEach((s) => s()),
            (this.destroyCbs = null);
        }
        onDestroy(o) {
          this.destroyCbs.push(o);
        }
      }
      class Us extends kh {
        constructor(o) {
          super(), (this.moduleType = o);
        }
        create(o) {
          return new tt(this.moduleType, o);
        }
      }
      class Fw extends ks {
        constructor(o, s, c) {
          super(), (this.componentFactoryResolver = new zf(this)), (this.instance = null);
          const l = new Yg(
            [
              ...o,
              { provide: ks, useValue: this },
              { provide: hs, useValue: this.componentFactoryResolver },
            ],
            s || Sc(),
            c,
            new Set(['environment'])
          );
          (this.injector = l), l.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(o) {
          this.injector.onDestroy(o);
        }
      }
      function Vh(r, o, s = null) {
        return new Fw(r, o, s).injector;
      }
      let Vs = (() => {
        class r {
          constructor(s) {
            (this._injector = s), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(s) {
            if (!s.standalone) return null;
            if (!this.cachedInjectors.has(s.id)) {
              const c = Wg(0, s.type),
                l = c.length > 0 ? Vh([c], this._injector, `Standalone[${s.type.name}]`) : null;
              this.cachedInjectors.set(s.id, l);
            }
            return this.cachedInjectors.get(s.id);
          }
          ngOnDestroy() {
            try {
              for (const s of this.cachedInjectors.values()) null !== s && s.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          (r.ɵprov = st({ token: r, providedIn: 'environment', factory: () => new r(It(Ei)) })), r
        );
      })();
      function jh(r) {
        r.getStandaloneInjector = (o) => o.get(Vs).getOrCreateStandaloneInjector(r);
      }
      function wl(r, o, s) {
        const c = Tn() + r,
          l = K();
        return l[c] === $e
          ? Kr(l, c, s ? o.call(s) : o())
          : (function Zc(r, o) {
              return r[o];
            })(l, c);
      }
      function K_(r, o, s, c) {
        return ct(K(), Tn(), r, o, s, c);
      }
      function q_(r, o, s, c, l) {
        return (function Li(r, o, s, c, l, d, p) {
          const g = o + s;
          return $o(r, g, l, d) ? Kr(r, g + 2, p ? c.call(p, l, d) : c(l, d)) : Wo(r, g + 2);
        })(K(), Tn(), r, o, s, c, l);
      }
      function J_(r, o, s, c, l, d) {
        return (function ny(r, o, s, c, l, d, p, g) {
          const m = o + s;
          return (function Xa(r, o, s, c, l) {
            const d = $o(r, o, s, c);
            return Pn(r, o + 2, l) || d;
          })(r, m, l, d, p)
            ? Kr(r, m + 3, g ? c.call(g, l, d, p) : c(l, d, p))
            : Wo(r, m + 3);
        })(K(), Tn(), r, o, s, c, l, d);
      }
      function Wo(r, o) {
        const s = r[o];
        return s === $e ? void 0 : s;
      }
      function ct(r, o, s, c, l, d) {
        const p = o + s;
        return Pn(r, p, l) ? Kr(r, p + 1, d ? c.call(d, l) : c(l)) : Wo(r, p + 1);
      }
      function oy(r, o) {
        const s = _t();
        let c;
        const l = r + B;
        s.firstCreatePass
          ? ((c = (function iD(r, o) {
              if (o)
                for (let s = o.length - 1; s >= 0; s--) {
                  const c = o[s];
                  if (r === c.name) return c;
                }
            })(o, s.pipeRegistry)),
            (s.data[l] = c),
            c.onDestroy && (s.destroyHooks ?? (s.destroyHooks = [])).push(l, c.onDestroy))
          : (c = s.data[l]);
        const d = c.factory || (c.factory = qi(c.type)),
          p = mn(Wr);
        try {
          const g = fa(!1),
            m = d();
          return (
            fa(g),
            (function Ym(r, o, s, c) {
              s >= r.data.length && ((r.data[s] = null), (r.blueprint[s] = null)), (o[s] = c);
            })(s, K(), l, m),
            m
          );
        } finally {
          mn(p);
        }
      }
      function $h(r, o, s) {
        const c = r + B,
          l = K(),
          d = ua(l, c);
        return (function Cu(r, o) {
          return r[De].data[o].pure;
        })(l, c)
          ? ct(l, Tn(), o, d.transform, s, d)
          : d.transform(s);
      }
      function Al(r) {
        return (o) => {
          setTimeout(r, void 0, o);
        };
      }
      const yr = class aD extends M.x {
        constructor(o = !1) {
          super(), (this.__isAsync = o);
        }
        emit(o) {
          super.next(o);
        }
        subscribe(o, s, c) {
          let l = o,
            d = s || (() => null),
            p = c;
          if (o && 'object' == typeof o) {
            const m = o;
            (l = m.next?.bind(m)), (d = m.error?.bind(m)), (p = m.complete?.bind(m));
          }
          this.__isAsync && ((d = Al(d)), l && (l = Al(l)), p && (p = Al(p)));
          const g = super.subscribe({ next: l, error: d, complete: p });
          return o instanceof a.w0 && o.add(g), g;
        }
      };
      function Uw() {
        return this._results[Symbol.iterator]();
      }
      class Gh {
        get changes() {
          return this._changes || (this._changes = new yr());
        }
        constructor(o = !1) {
          (this._emitDistinctChangesOnly = o),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const s = Gh.prototype;
          s[Symbol.iterator] || (s[Symbol.iterator] = Uw);
        }
        get(o) {
          return this._results[o];
        }
        map(o) {
          return this._results.map(o);
        }
        filter(o) {
          return this._results.filter(o);
        }
        find(o) {
          return this._results.find(o);
        }
        reduce(o, s) {
          return this._results.reduce(o, s);
        }
        forEach(o) {
          this._results.forEach(o);
        }
        some(o) {
          return this._results.some(o);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(o, s) {
          const c = this;
          c.dirty = !1;
          const l = (function br(r) {
            return r.flat(Number.POSITIVE_INFINITY);
          })(o);
          (this._changesDetected = !(function zv(r, o, s) {
            if (r.length !== o.length) return !1;
            for (let c = 0; c < r.length; c++) {
              let l = r[c],
                d = o[c];
              if ((s && ((l = s(l)), (d = s(d))), d !== l)) return !1;
            }
            return !0;
          })(c._results, l, s)) &&
            ((c._results = l),
            (c.length = l.length),
            (c.last = l[this.length - 1]),
            (c.first = l[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let wu = (() => {
        class r {}
        return (r.__NG_ELEMENT_ID__ = cD), r;
      })();
      const zh = wu,
        uD = class extends zh {
          constructor(o, s, c) {
            super(),
              (this._declarationLView = o),
              (this._declarationTContainer = s),
              (this.elementRef = c);
          }
          createEmbeddedView(o, s) {
            const c = this._declarationTContainer.tView,
              l = Uc(
                this._declarationLView,
                c,
                o,
                16,
                null,
                c.declTNode,
                null,
                null,
                null,
                null,
                s || null
              );
            l[ui] = this._declarationLView[this._declarationTContainer.index];
            const p = this._declarationLView[Cr];
            return null !== p && (l[Cr] = p.createEmbeddedView(c)), Es(c, l, o), new Si(l);
          }
        };
      function cD() {
        return Su(yn(), K());
      }
      function Su(r, o) {
        return 4 & r.type ? new uD(o, r, gs(r, o)) : null;
      }
      let Vt = (() => {
        class r {}
        return (r.__NG_ELEMENT_ID__ = Co), r;
      })();
      function Co() {
        return Tl(yn(), K());
      }
      const ay = Vt,
        Zh = class extends ay {
          constructor(o, s, c) {
            super(), (this._lContainer = o), (this._hostTNode = s), (this._hostLView = c);
          }
          get element() {
            return gs(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new ns(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const o = xd(this._hostTNode, this._hostLView);
            if (Md(o)) {
              const s = qu(o, this._hostLView),
                c = da(o);
              return new ns(s[De].data[c + 8], s);
            }
            return new ns(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(o) {
            const s = uy(this._lContainer);
            return (null !== s && s[o]) || null;
          }
          get length() {
            return this._lContainer.length - ut;
          }
          createEmbeddedView(o, s, c) {
            let l, d;
            'number' == typeof c ? (l = c) : null != c && ((l = c.index), (d = c.injector));
            const p = o.createEmbeddedView(s || {}, d);
            return this.insert(p, l), p;
          }
          createComponent(o, s, c, l, d) {
            const p =
              o &&
              !(function tc(r) {
                return 'function' == typeof r;
              })(o);
            let g;
            if (p) g = s;
            else {
              const S = s || {};
              (g = S.index),
                (c = S.injector),
                (l = S.projectableNodes),
                (d = S.environmentInjector || S.ngModuleRef);
            }
            const m = p ? o : new Ds(vt(o)),
              y = c || this.parentInjector;
            if (!d && null == m.ngModule) {
              const N = (p ? y : this.parentInjector).get(Ei, null);
              N && (d = N);
            }
            const D = m.create(y, l, void 0, d);
            return this.insert(D.hostView, g), D;
          }
          insert(o, s) {
            const c = o._lView,
              l = c[De];
            if (
              (function yv(r) {
                return Ot(r[Rt]);
              })(c)
            ) {
              const D = this.indexOf(o);
              if (-1 !== D) this.detach(D);
              else {
                const S = c[Rt],
                  N = new Zh(S, S[on], S[Rt]);
                N.detach(N.indexOf(o));
              }
            }
            const d = this._adjustIndex(s),
              p = this._lContainer;
            !(function sE(r, o, s, c) {
              const l = ut + c,
                d = s.length;
              c > 0 && (s[l - 1][kn] = o),
                c < d - ut ? ((o[kn] = s[l]), Zv(s, ut + c, o)) : (s.push(o), (o[kn] = null)),
                (o[Rt] = s);
              const p = o[ui];
              null !== p &&
                s !== p &&
                (function Zd(r, o) {
                  const s = r[He];
                  o[Kt] !== o[Rt][Rt][Kt] && (r[de] = !0), null === s ? (r[He] = [o]) : s.push(o);
                })(p, o);
              const g = o[Cr];
              null !== g && g.insertView(r), (o[Ue] |= 64);
            })(l, c, p, d);
            const g = Qd(d, p),
              m = c[nt],
              y = ba(m, p[he]);
            return (
              null !== y &&
                (function ow(r, o, s, c, l, d) {
                  (c[Yn] = l), (c[on] = o), gi(r, c, s, 1, l, d);
                })(l, p[on], m, c, y, g),
              o.attachToViewContainerRef(),
              Zv(Ml(p), d, o),
              o
            );
          }
          move(o, s) {
            return this.insert(o, s);
          }
          indexOf(o) {
            const s = uy(this._lContainer);
            return null !== s ? s.indexOf(o) : -1;
          }
          remove(o) {
            const s = this._adjustIndex(o, -1),
              c = Wd(this._lContainer, s);
            c && (Ld(Ml(this._lContainer), s), Dg(c[De], c));
          }
          detach(o) {
            const s = this._adjustIndex(o, -1),
              c = Wd(this._lContainer, s);
            return c && null != Ld(Ml(this._lContainer), s) ? new Si(c) : null;
          }
          _adjustIndex(o, s = 0) {
            return o ?? this.length + s;
          }
        };
      function uy(r) {
        return r[Ye];
      }
      function Ml(r) {
        return r[Ye] || (r[Ye] = []);
      }
      function Tl(r, o) {
        let s;
        const c = o[r.index];
        if (Ot(c)) s = c;
        else {
          let l;
          if (8 & r.type) l = dn(c);
          else {
            const d = o[nt];
            l = d.createComment('');
            const p = _n(r, o);
            ao(
              d,
              ba(d, p),
              l,
              (function aE(r, o) {
                return r.nextSibling(o);
              })(d, p),
              !1
            );
          }
          (o[r.index] = s = Mm(c, o, l, r)), Ka(o, s);
        }
        return new Zh(s, r, o);
      }
      class bu {
        constructor(o) {
          (this.queryList = o), (this.matches = null);
        }
        clone() {
          return new bu(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Il {
        constructor(o = []) {
          this.queries = o;
        }
        createEmbeddedView(o) {
          const s = o.queries;
          if (null !== s) {
            const c = null !== o.contentQueries ? o.contentQueries[0] : s.length,
              l = [];
            for (let d = 0; d < c; d++) {
              const p = s.getByIndex(d);
              l.push(this.queries[p.indexInDeclarationView].clone());
            }
            return new Il(l);
          }
          return null;
        }
        insertView(o) {
          this.dirtyQueriesWithMatches(o);
        }
        detachView(o) {
          this.dirtyQueriesWithMatches(o);
        }
        dirtyQueriesWithMatches(o) {
          for (let s = 0; s < this.queries.length; s++)
            null !== fy(o, s).matches && this.queries[s].setDirty();
        }
      }
      class Wh {
        constructor(o, s, c = null) {
          (this.predicate = o), (this.flags = s), (this.read = c);
        }
      }
      class Ol {
        constructor(o = []) {
          this.queries = o;
        }
        elementStart(o, s) {
          for (let c = 0; c < this.queries.length; c++) this.queries[c].elementStart(o, s);
        }
        elementEnd(o) {
          for (let s = 0; s < this.queries.length; s++) this.queries[s].elementEnd(o);
        }
        embeddedTView(o) {
          let s = null;
          for (let c = 0; c < this.length; c++) {
            const l = null !== s ? s.length : 0,
              d = this.getByIndex(c).embeddedTView(o, l);
            d && ((d.indexInDeclarationView = c), null !== s ? s.push(d) : (s = [d]));
          }
          return null !== s ? new Ol(s) : null;
        }
        template(o, s) {
          for (let c = 0; c < this.queries.length; c++) this.queries[c].template(o, s);
        }
        getByIndex(o) {
          return this.queries[o];
        }
        get length() {
          return this.queries.length;
        }
        track(o) {
          this.queries.push(o);
        }
      }
      class Pl {
        constructor(o, s = -1) {
          (this.metadata = o),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = s);
        }
        elementStart(o, s) {
          this.isApplyingToNode(s) && this.matchTNode(o, s);
        }
        elementEnd(o) {
          this._declarationNodeIndex === o.index && (this._appliesToNextNode = !1);
        }
        template(o, s) {
          this.elementStart(o, s);
        }
        embeddedTView(o, s) {
          return this.isApplyingToNode(o)
            ? ((this.crossesNgTemplate = !0), this.addMatch(-o.index, s), new Pl(this.metadata))
            : null;
        }
        isApplyingToNode(o) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const s = this._declarationNodeIndex;
            let c = o.parent;
            for (; null !== c && 8 & c.type && c.index !== s; ) c = c.parent;
            return s === (null !== c ? c.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(o, s) {
          const c = this.metadata.predicate;
          if (Array.isArray(c))
            for (let l = 0; l < c.length; l++) {
              const d = c[l];
              this.matchTNodeWithReadOption(o, s, lD(s, d)),
                this.matchTNodeWithReadOption(o, s, es(s, o, d, !1, !1));
            }
          else
            c === wu
              ? 4 & s.type && this.matchTNodeWithReadOption(o, s, -1)
              : this.matchTNodeWithReadOption(o, s, es(s, o, c, !1, !1));
        }
        matchTNodeWithReadOption(o, s, c) {
          if (null !== c) {
            const l = this.metadata.read;
            if (null !== l)
              if (l === Ua || l === Vt || (l === wu && 4 & s.type)) this.addMatch(s.index, -2);
              else {
                const d = es(s, o, l, !1, !1);
                null !== d && this.addMatch(s.index, d);
              }
            else this.addMatch(s.index, c);
          }
        }
        addMatch(o, s) {
          null === this.matches ? (this.matches = [o, s]) : this.matches.push(o, s);
        }
      }
      function lD(r, o) {
        const s = r.localNames;
        if (null !== s) for (let c = 0; c < s.length; c += 2) if (s[c] === o) return s[c + 1];
        return null;
      }
      function $s(r, o, s, c) {
        return -1 === s
          ? (function Au(r, o) {
              return 11 & r.type ? gs(r, o) : 4 & r.type ? Su(r, o) : null;
            })(o, r)
          : -2 === s
          ? (function Yh(r, o, s) {
              return s === Ua ? gs(o, r) : s === wu ? Su(o, r) : s === Vt ? Tl(o, r) : void 0;
            })(r, o, c)
          : ts(r, r[De], s, o);
      }
      function Kh(r, o, s, c) {
        const l = o[Cr].queries[c];
        if (null === l.matches) {
          const d = r.data,
            p = s.matches,
            g = [];
          for (let m = 0; m < p.length; m += 2) {
            const y = p[m];
            g.push(y < 0 ? null : $s(o, d[y], p[m + 1], s.metadata.read));
          }
          l.matches = g;
        }
        return l.matches;
      }
      function xl(r, o, s, c) {
        const l = r.queries.getByIndex(s),
          d = l.matches;
        if (null !== d) {
          const p = Kh(r, o, l, s);
          for (let g = 0; g < d.length; g += 2) {
            const m = d[g];
            if (m > 0) c.push(p[g / 2]);
            else {
              const y = d[g + 1],
                D = o[-m];
              for (let S = ut; S < D.length; S++) {
                const N = D[S];
                N[ui] === N[Rt] && xl(N[De], N, y, c);
              }
              if (null !== D[He]) {
                const S = D[He];
                for (let N = 0; N < S.length; N++) {
                  const $ = S[N];
                  xl($[De], $, y, c);
                }
              }
            }
          }
        }
        return c;
      }
      function Rl(r) {
        const o = K(),
          s = _t(),
          c = Mv();
        Bp(c + 1);
        const l = fy(s, c);
        if (
          r.dirty &&
          (function _v(r) {
            return 4 == (4 & r[Ue]);
          })(o) ===
            (2 == (2 & l.metadata.flags))
        ) {
          if (null === l.matches) r.reset([]);
          else {
            const d = l.crossesNgTemplate ? xl(s, o, c, []) : Kh(s, o, l, c);
            r.reset(d, Qg), r.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function cy(r, o, s, c) {
        const l = _t();
        if (l.firstCreatePass) {
          const d = yn();
          (function dy(r, o, s) {
            null === r.queries && (r.queries = new Ol()), r.queries.track(new Pl(o, s));
          })(l, new Wh(o, s, c), d.index),
            (function hD(r, o) {
              const s = r.contentQueries || (r.contentQueries = []);
              o !== (s.length ? s[s.length - 1] : -1) && s.push(r.queries.length - 1, o);
            })(l, r),
            2 == (2 & s) && (l.staticContentQueries = !0);
        }
        !(function Fl(r, o, s) {
          const c = new Gh(4 == (4 & s));
          vm(r, o, c, c.destroy),
            null === o[Cr] && (o[Cr] = new Il()),
            o[Cr].queries.push(new bu(c));
        })(l, K(), s);
      }
      function ly() {
        return (function fD(r, o) {
          return r[Cr].queries[o].queryList;
        })(K(), Mv());
      }
      function fy(r, o) {
        return r.queries.getByIndex(o);
      }
      function hy(r, o) {
        return Su(r, o);
      }
      function Gs(r) {
        return !!rn(r);
      }
      function $l(...r) {}
      const Hl = new yt('Application Initializer');
      let ki = (() => {
        class r {
          constructor(s) {
            (this.appInits = s),
              (this.resolve = $l),
              (this.reject = $l),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((c, l) => {
                (this.resolve = c), (this.reject = l);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const s = [],
              c = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let l = 0; l < this.appInits.length; l++) {
                const d = this.appInits[l]();
                if (Ai(d)) s.push(d);
                else if (rh(d)) {
                  const p = new Promise((g, m) => {
                    d.subscribe({ complete: g, error: m });
                  });
                  s.push(p);
                }
              }
            Promise.all(s)
              .then(() => {
                c();
              })
              .catch((l) => {
                this.reject(l);
              }),
              0 === s.length && c(),
              (this.initialized = !0);
          }
        }
        return (
          (r.ɵfac = function (s) {
            return new (s || r)(It(Hl, 8));
          }),
          (r.ɵprov = st({ token: r, factory: r.ɵfac, providedIn: 'root' })),
          r
        );
      })();
      const np = new yt('AppId', {
        providedIn: 'root',
        factory: function Ty() {
          return `${rp()}${rp()}${rp()}`;
        },
      });
      function rp() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Iy = new yt('Platform Initializer'),
        Oy = new yt('Platform ID', { providedIn: 'platform', factory: () => 'unknown' });
      let MD = (() => {
        class r {
          log(s) {
            console.log(s);
          }
          warn(s) {
            console.warn(s);
          }
        }
        return (
          (r.ɵfac = function (s) {
            return new (s || r)();
          }),
          (r.ɵprov = st({ token: r, factory: r.ɵfac, providedIn: 'platform' })),
          r
        );
      })();
      const Gl = new yt('LocaleId', {
          providedIn: 'root',
          factory: () =>
            ni(Gl, Re.Optional | Re.SkipSelf) ||
            (function Py() {
              return (typeof $localize < 'u' && $localize.locale) || xs;
            })(),
        }),
        TD = new yt('DefaultCurrencyCode', { providedIn: 'root', factory: () => 'USD' });
      class Yo {
        constructor(o, s) {
          (this.ngModuleFactory = o), (this.componentFactories = s);
        }
      }
      let xy = (() => {
        class r {
          compileModuleSync(s) {
            return new Us(s);
          }
          compileModuleAsync(s) {
            return Promise.resolve(this.compileModuleSync(s));
          }
          compileModuleAndAllComponentsSync(s) {
            const c = this.compileModuleSync(s),
              d = Zr(rn(s).declarations).reduce((p, g) => {
                const m = vt(g);
                return m && p.push(new Ds(m)), p;
              }, []);
            return new Yo(c, d);
          }
          compileModuleAndAllComponentsAsync(s) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(s));
          }
          clearCache() {}
          clearCacheFor(s) {}
          getModuleId(s) {}
        }
        return (
          (r.ɵfac = function (s) {
            return new (s || r)();
          }),
          (r.ɵprov = st({ token: r, factory: r.ɵfac, providedIn: 'root' })),
          r
        );
      })();
      const Ry = (() => Promise.resolve(0))();
      function zl(r) {
        typeof Zone > 'u'
          ? Ry.then(() => {
              r && r.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', r);
      }
      class or {
        constructor({
          enableLongStackTrace: o = !1,
          shouldCoalesceEventChangeDetection: s = !1,
          shouldCoalesceRunChangeDetection: c = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new yr(!1)),
            (this.onMicrotaskEmpty = new yr(!1)),
            (this.onStable = new yr(!1)),
            (this.onError = new yr(!1)),
            typeof Zone > 'u')
          )
            throw new ee(908, !1);
          Zone.assertZonePatched();
          const l = this;
          (l._nesting = 0),
            (l._outer = l._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (l._inner = l._inner.fork(new Zone.TaskTrackingZoneSpec())),
            o &&
              Zone.longStackTraceZoneSpec &&
              (l._inner = l._inner.fork(Zone.longStackTraceZoneSpec)),
            (l.shouldCoalesceEventChangeDetection = !c && s),
            (l.shouldCoalesceRunChangeDetection = c),
            (l.lastRequestAnimationFrameId = -1),
            (l.nativeRequestAnimationFrame = (function Fy() {
              let r = zt.requestAnimationFrame,
                o = zt.cancelAnimationFrame;
              if (typeof Zone < 'u' && r && o) {
                const s = r[Zone.__symbol__('OriginalDelegate')];
                s && (r = s);
                const c = o[Zone.__symbol__('OriginalDelegate')];
                c && (o = c);
              }
              return { nativeRequestAnimationFrame: r, nativeCancelAnimationFrame: o };
            })().nativeRequestAnimationFrame),
            (function Ly(r) {
              const o = () => {
                !(function Ny(r) {
                  r.isCheckStableRunning ||
                    -1 !== r.lastRequestAnimationFrameId ||
                    ((r.lastRequestAnimationFrameId = r.nativeRequestAnimationFrame.call(zt, () => {
                      r.fakeTopEventTask ||
                        (r.fakeTopEventTask = Zone.root.scheduleEventTask(
                          'fakeTopEventTask',
                          () => {
                            (r.lastRequestAnimationFrameId = -1),
                              Yl(r),
                              (r.isCheckStableRunning = !0),
                              Wl(r),
                              (r.isCheckStableRunning = !1);
                          },
                          void 0,
                          () => {},
                          () => {}
                        )),
                        r.fakeTopEventTask.invoke();
                    })),
                    Yl(r));
                })(r);
              };
              r._inner = r._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (s, c, l, d, p, g) => {
                  try {
                    return ky(r), s.invokeTask(l, d, p, g);
                  } finally {
                    ((r.shouldCoalesceEventChangeDetection && 'eventTask' === d.type) ||
                      r.shouldCoalesceRunChangeDetection) &&
                      o(),
                      ip(r);
                  }
                },
                onInvoke: (s, c, l, d, p, g, m) => {
                  try {
                    return ky(r), s.invoke(l, d, p, g, m);
                  } finally {
                    r.shouldCoalesceRunChangeDetection && o(), ip(r);
                  }
                },
                onHasTask: (s, c, l, d) => {
                  s.hasTask(l, d),
                    c === l &&
                      ('microTask' == d.change
                        ? ((r._hasPendingMicrotasks = d.microTask), Yl(r), Wl(r))
                        : 'macroTask' == d.change && (r.hasPendingMacrotasks = d.macroTask));
                },
                onHandleError: (s, c, l, d) => (
                  s.handleError(l, d), r.runOutsideAngular(() => r.onError.emit(d)), !1
                ),
              });
            })(l);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!or.isInAngularZone()) throw new ee(909, !1);
        }
        static assertNotInAngularZone() {
          if (or.isInAngularZone()) throw new ee(909, !1);
        }
        run(o, s, c) {
          return this._inner.run(o, s, c);
        }
        runTask(o, s, c, l) {
          const d = this._inner,
            p = d.scheduleEventTask('NgZoneEvent: ' + l, o, Zl, $l, $l);
          try {
            return d.runTask(p, s, c);
          } finally {
            d.cancelTask(p);
          }
        }
        runGuarded(o, s, c) {
          return this._inner.runGuarded(o, s, c);
        }
        runOutsideAngular(o) {
          return this._outer.run(o);
        }
      }
      const Zl = {};
      function Wl(r) {
        if (0 == r._nesting && !r.hasPendingMicrotasks && !r.isStable)
          try {
            r._nesting++, r.onMicrotaskEmpty.emit(null);
          } finally {
            if ((r._nesting--, !r.hasPendingMicrotasks))
              try {
                r.runOutsideAngular(() => r.onStable.emit(null));
              } finally {
                r.isStable = !0;
              }
          }
      }
      function Yl(r) {
        r.hasPendingMicrotasks = !!(
          r._hasPendingMicrotasks ||
          ((r.shouldCoalesceEventChangeDetection || r.shouldCoalesceRunChangeDetection) &&
            -1 !== r.lastRequestAnimationFrameId)
        );
      }
      function ky(r) {
        r._nesting++, r.isStable && ((r.isStable = !1), r.onUnstable.emit(null));
      }
      function ip(r) {
        r._nesting--, Wl(r);
      }
      class Uy {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new yr()),
            (this.onMicrotaskEmpty = new yr()),
            (this.onStable = new yr()),
            (this.onError = new yr());
        }
        run(o, s, c) {
          return o.apply(s, c);
        }
        runGuarded(o, s, c) {
          return o.apply(s, c);
        }
        runOutsideAngular(o) {
          return o();
        }
        runTask(o, s, c, l) {
          return o.apply(s, c);
        }
      }
      const Kl = new yt(''),
        sp = new yt('');
      let ql,
        ap = (() => {
          class r {
            constructor(s, c, l) {
              (this._ngZone = s),
                (this.registry = c),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                ql ||
                  ((function Vy(r) {
                    ql = r;
                  })(l),
                  l.addToWindow(c)),
                this._watchAngularEvents(),
                s.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > 'u' ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      or.assertNotInAngularZone(),
                        zl(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                zl(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let s = this._callbacks.pop();
                    clearTimeout(s.timeoutId), s.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let s = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (c) => !c.updateCb || !c.updateCb(s) || (clearTimeout(c.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((s) => ({
                    source: s.source,
                    creationLocation: s.creationLocation,
                    data: s.data,
                  }))
                : [];
            }
            addCallback(s, c, l) {
              let d = -1;
              c &&
                c > 0 &&
                (d = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter((p) => p.timeoutId !== d)),
                    s(this._didWork, this.getPendingTasks());
                }, c)),
                this._callbacks.push({ doneCb: s, timeoutId: d, updateCb: l });
            }
            whenStable(s, c, l) {
              if (l && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(s, c, l), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(s) {
              this.registry.registerApplication(s, this);
            }
            unregisterApplication(s) {
              this.registry.unregisterApplication(s);
            }
            findProviders(s, c, l) {
              return [];
            }
          }
          return (
            (r.ɵfac = function (s) {
              return new (s || r)(It(or), It(up), It(sp));
            }),
            (r.ɵprov = st({ token: r, factory: r.ɵfac })),
            r
          );
        })(),
        up = (() => {
          class r {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(s, c) {
              this._applications.set(s, c);
            }
            unregisterApplication(s) {
              this._applications.delete(s);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(s) {
              return this._applications.get(s) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(s, c = !0) {
              return ql?.findTestabilityInTree(this, s, c) ?? null;
            }
          }
          return (
            (r.ɵfac = function (s) {
              return new (s || r)();
            }),
            (r.ɵprov = st({ token: r, factory: r.ɵfac, providedIn: 'platform' })),
            r
          );
        })();
      const Nr = !1;
      let Lr = null;
      const cp = new yt('AllowMultipleToken'),
        Jl = new yt('PlatformDestroyListeners'),
        lp = new yt('appBootstrapListener');
      class tS {
        constructor(o, s) {
          (this.name = o), (this.token = s);
        }
      }
      function Ou(r, o, s = []) {
        const c = `Platform: ${o}`,
          l = new yt(c);
        return (d = []) => {
          let p = $y();
          if (!p || p.injector.get(cp, !1)) {
            const g = [...s, ...d, { provide: l, useValue: !0 }];
            r
              ? r(g)
              : (function nS(r) {
                  if (Lr && !Lr.get(cp, !1)) throw new ee(400, !1);
                  Lr = r;
                  const o = r.get(RD);
                  (function Ys(r) {
                    const o = r.get(Iy, null);
                    o && o.forEach((s) => s());
                  })(r);
                })(
                  (function Ql(r = [], o) {
                    return jo.create({
                      name: o,
                      providers: [
                        { provide: mf, useValue: 'platform' },
                        { provide: Jl, useValue: new Set([() => (Lr = null)]) },
                        ...r,
                      ],
                    });
                  })(g, c)
                );
          }
          return (function xD(r) {
            const o = $y();
            if (!o) throw new ee(401, !1);
            return o;
          })();
        };
      }
      function $y() {
        return Lr?.get(RD) ?? null;
      }
      let RD = (() => {
        class r {
          constructor(s) {
            (this._injector = s),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(s, c) {
            const l = (function ND(r, o) {
                let s;
                return (
                  (s = 'noop' === r ? new Uy() : ('zone.js' === r ? void 0 : r) || new or(o)), s
                );
              })(
                c?.ngZone,
                (function FD(r) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection: !(!r || !r.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection: !(!r || !r.ngZoneRunCoalescing) || !1,
                  };
                })(c)
              ),
              d = [{ provide: or, useValue: l }];
            return l.run(() => {
              const p = jo.create({ providers: d, parent: this.injector, name: s.moduleType.name }),
                g = s.create(p),
                m = g.injector.get(co, null);
              if (!m) throw new ee(402, !1);
              return (
                l.runOutsideAngular(() => {
                  const y = l.onError.subscribe({
                    next: (D) => {
                      m.handleError(D);
                    },
                  });
                  g.onDestroy(() => {
                    Xl(this._modules, g), y.unsubscribe();
                  });
                }),
                (function LD(r, o, s) {
                  try {
                    const c = s();
                    return Ai(c)
                      ? c.catch((l) => {
                          throw (o.runOutsideAngular(() => r.handleError(l)), l);
                        })
                      : c;
                  } catch (c) {
                    throw (o.runOutsideAngular(() => r.handleError(c)), c);
                  }
                })(m, l, () => {
                  const y = g.injector.get(ki);
                  return (
                    y.runInitializers(),
                    y.donePromise.then(
                      () => (
                        (function M_(r) {
                          Oe(r, 'Expected localeId to be defined'),
                            'string' == typeof r && (A_ = r.toLowerCase().replace(/_/g, '-'));
                        })(g.injector.get(Gl, xs) || xs),
                        this._moduleDoBootstrap(g),
                        g
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(s, c = []) {
            const l = kD({}, c);
            return (function Fn(r, o, s) {
              const c = new Us(s);
              return Promise.resolve(c);
            })(0, 0, s).then((d) => this.bootstrapModuleFactory(d, l));
          }
          _moduleDoBootstrap(s) {
            const c = s.injector.get(dp);
            if (s._bootstrapComponents.length > 0)
              s._bootstrapComponents.forEach((l) => c.bootstrap(l));
            else {
              if (!s.instance.ngDoBootstrap) throw new ee(-403, !1);
              s.instance.ngDoBootstrap(c);
            }
            this._modules.push(s);
          }
          onDestroy(s) {
            this._destroyListeners.push(s);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new ee(404, !1);
            this._modules.slice().forEach((c) => c.destroy()),
              this._destroyListeners.forEach((c) => c());
            const s = this._injector.get(Jl, null);
            s && (s.forEach((c) => c()), s.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (r.ɵfac = function (s) {
            return new (s || r)(It(jo));
          }),
          (r.ɵprov = st({ token: r, factory: r.ɵfac, providedIn: 'platform' })),
          r
        );
      })();
      function kD(r, o) {
        return Array.isArray(o) ? o.reduce(kD, r) : { ...r, ...o };
      }
      let dp = (() => {
        class r {
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          constructor(s, c, l) {
            (this._zone = s),
              (this._injector = c),
              (this._exceptionHandler = l),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              }));
            const d = new G.y((g) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    g.next(this._stable), g.complete();
                  });
              }),
              p = new G.y((g) => {
                let m;
                this._zone.runOutsideAngular(() => {
                  m = this._zone.onStable.subscribe(() => {
                    or.assertNotInAngularZone(),
                      zl(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), g.next(!0));
                      });
                  });
                });
                const y = this._zone.onUnstable.subscribe(() => {
                  or.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        g.next(!1);
                      }));
                });
                return () => {
                  m.unsubscribe(), y.unsubscribe();
                };
              });
            this.isStable = (0, Z.T)(d, p.pipe((0, L.B)()));
          }
          bootstrap(s, c) {
            const l = s instanceof fs;
            if (!this._injector.get(ki).done) {
              !l && jr(s);
              throw new ee(405, Nr);
            }
            let p;
            (p = l ? s : this._injector.get(hs).resolveComponentFactory(s)),
              this.componentTypes.push(p.componentType);
            const g = (function jy(r) {
                return r.isBoundToModule;
              })(p)
                ? void 0
                : this._injector.get(ks),
              y = p.create(jo.NULL, [], c || p.selector, g),
              D = y.location.nativeElement,
              S = y.injector.get(Kl, null);
            return (
              S?.registerApplication(D),
              y.onDestroy(() => {
                this.detachView(y.hostView), Xl(this.components, y), S?.unregisterApplication(D);
              }),
              this._loadComponent(y),
              y
            );
          }
          tick() {
            if (this._runningTick) throw new ee(101, !1);
            try {
              this._runningTick = !0;
              for (let s of this._views) s.detectChanges();
            } catch (s) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(s));
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(s) {
            const c = s;
            this._views.push(c), c.attachToAppRef(this);
          }
          detachView(s) {
            const c = s;
            Xl(this._views, c), c.detachFromAppRef();
          }
          _loadComponent(s) {
            this.attachView(s.hostView), this.tick(), this.components.push(s);
            const c = this._injector.get(lp, []);
            c.push(...this._bootstrapListeners), c.forEach((l) => l(s));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((s) => s()),
                  this._views.slice().forEach((s) => s.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(s) {
            return this._destroyListeners.push(s), () => Xl(this._destroyListeners, s);
          }
          destroy() {
            if (this._destroyed) throw new ee(406, !1);
            const s = this._injector;
            s.destroy && !s.destroyed && s.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (r.ɵfac = function (s) {
            return new (s || r)(It(or), It(Ei), It(co));
          }),
          (r.ɵprov = st({ token: r, factory: r.ɵfac, providedIn: 'root' })),
          r
        );
      })();
      function Xl(r, o) {
        const s = r.indexOf(o);
        s > -1 && r.splice(s, 1);
      }
      function VD() {
        return !1;
      }
      let Ks = (() => {
        class r {}
        return (r.__NG_ELEMENT_ID__ = xu), r;
      })();
      function xu(r) {
        return (function hp(r, o, s) {
          if (Po(r) && !s) {
            const c = Qn(r.index, o);
            return new Si(c, c);
          }
          return 47 & r.type ? new Si(o[Kt], o) : null;
        })(yn(), K(), 16 == (16 & r));
      }
      class Wy {
        constructor() {}
        supports(o) {
          return po(o);
        }
        create(o) {
          return new HD(o);
        }
      }
      const Yy = (r, o) => o;
      class HD {
        constructor(o) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = o || Yy);
        }
        forEachItem(o) {
          let s;
          for (s = this._itHead; null !== s; s = s._next) o(s);
        }
        forEachOperation(o) {
          let s = this._itHead,
            c = this._removalsHead,
            l = 0,
            d = null;
          for (; s || c; ) {
            const p = !c || (s && s.currentIndex < qy(c, l, d)) ? s : c,
              g = qy(p, l, d),
              m = p.currentIndex;
            if (p === c) l--, (c = c._nextRemoved);
            else if (((s = s._next), null == p.previousIndex)) l++;
            else {
              d || (d = []);
              const y = g - l,
                D = m - l;
              if (y != D) {
                for (let N = 0; N < y; N++) {
                  const $ = N < d.length ? d[N] : (d[N] = 0),
                    J = $ + N;
                  D <= J && J < y && (d[N] = $ + 1);
                }
                d[p.previousIndex] = D - y;
              }
            }
            g !== m && o(p, g, m);
          }
        }
        forEachPreviousItem(o) {
          let s;
          for (s = this._previousItHead; null !== s; s = s._nextPrevious) o(s);
        }
        forEachAddedItem(o) {
          let s;
          for (s = this._additionsHead; null !== s; s = s._nextAdded) o(s);
        }
        forEachMovedItem(o) {
          let s;
          for (s = this._movesHead; null !== s; s = s._nextMoved) o(s);
        }
        forEachRemovedItem(o) {
          let s;
          for (s = this._removalsHead; null !== s; s = s._nextRemoved) o(s);
        }
        forEachIdentityChange(o) {
          let s;
          for (s = this._identityChangesHead; null !== s; s = s._nextIdentityChange) o(s);
        }
        diff(o) {
          if ((null == o && (o = []), !po(o))) throw new ee(900, !1);
          return this.check(o) ? this : null;
        }
        onDestroy() {}
        check(o) {
          this._reset();
          let l,
            d,
            p,
            s = this._itHead,
            c = !1;
          if (Array.isArray(o)) {
            this.length = o.length;
            for (let g = 0; g < this.length; g++)
              (d = o[g]),
                (p = this._trackByFn(g, d)),
                null !== s && Object.is(s.trackById, p)
                  ? (c && (s = this._verifyReinsertion(s, d, p, g)),
                    Object.is(s.item, d) || this._addIdentityChange(s, d))
                  : ((s = this._mismatch(s, d, p, g)), (c = !0)),
                (s = s._next);
          } else
            (l = 0),
              (function Vm(r, o) {
                if (Array.isArray(r)) for (let s = 0; s < r.length; s++) o(r[s]);
                else {
                  const s = r[Symbol.iterator]();
                  let c;
                  for (; !(c = s.next()).done; ) o(c.value);
                }
              })(o, (g) => {
                (p = this._trackByFn(l, g)),
                  null !== s && Object.is(s.trackById, p)
                    ? (c && (s = this._verifyReinsertion(s, g, p, l)),
                      Object.is(s.item, g) || this._addIdentityChange(s, g))
                    : ((s = this._mismatch(s, g, p, l)), (c = !0)),
                  (s = s._next),
                  l++;
              }),
              (this.length = l);
          return this._truncate(s), (this.collection = o), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let o;
            for (o = this._previousItHead = this._itHead; null !== o; o = o._next)
              o._nextPrevious = o._next;
            for (o = this._additionsHead; null !== o; o = o._nextAdded)
              o.previousIndex = o.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null, o = this._movesHead;
              null !== o;
              o = o._nextMoved
            )
              o.previousIndex = o.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(o, s, c, l) {
          let d;
          return (
            null === o ? (d = this._itTail) : ((d = o._prev), this._remove(o)),
            null !==
            (o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(c, null))
              ? (Object.is(o.item, s) || this._addIdentityChange(o, s),
                this._reinsertAfter(o, d, l))
              : null !== (o = null === this._linkedRecords ? null : this._linkedRecords.get(c, l))
              ? (Object.is(o.item, s) || this._addIdentityChange(o, s), this._moveAfter(o, d, l))
              : (o = this._addAfter(new Ky(s, c), d, l)),
            o
          );
        }
        _verifyReinsertion(o, s, c, l) {
          let d = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(c, null);
          return (
            null !== d
              ? (o = this._reinsertAfter(d, o._prev, l))
              : o.currentIndex != l && ((o.currentIndex = l), this._addToMoves(o, l)),
            o
          );
        }
        _truncate(o) {
          for (; null !== o; ) {
            const s = o._next;
            this._addToRemovals(this._unlink(o)), (o = s);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(o, s, c) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(o);
          const l = o._prevRemoved,
            d = o._nextRemoved;
          return (
            null === l ? (this._removalsHead = d) : (l._nextRemoved = d),
            null === d ? (this._removalsTail = l) : (d._prevRemoved = l),
            this._insertAfter(o, s, c),
            this._addToMoves(o, c),
            o
          );
        }
        _moveAfter(o, s, c) {
          return this._unlink(o), this._insertAfter(o, s, c), this._addToMoves(o, c), o;
        }
        _addAfter(o, s, c) {
          return (
            this._insertAfter(o, s, c),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = o)
                : (this._additionsTail._nextAdded = o)),
            o
          );
        }
        _insertAfter(o, s, c) {
          const l = null === s ? this._itHead : s._next;
          return (
            (o._next = l),
            (o._prev = s),
            null === l ? (this._itTail = o) : (l._prev = o),
            null === s ? (this._itHead = o) : (s._next = o),
            null === this._linkedRecords && (this._linkedRecords = new zD()),
            this._linkedRecords.put(o),
            (o.currentIndex = c),
            o
          );
        }
        _remove(o) {
          return this._addToRemovals(this._unlink(o));
        }
        _unlink(o) {
          null !== this._linkedRecords && this._linkedRecords.remove(o);
          const s = o._prev,
            c = o._next;
          return (
            null === s ? (this._itHead = c) : (s._next = c),
            null === c ? (this._itTail = s) : (c._prev = s),
            o
          );
        }
        _addToMoves(o, s) {
          return (
            o.previousIndex === s ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = o)
                  : (this._movesTail._nextMoved = o)),
            o
          );
        }
        _addToRemovals(o) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new zD()),
            this._unlinkedRecords.put(o),
            (o.currentIndex = null),
            (o._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = o), (o._prevRemoved = null))
              : ((o._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = o)),
            o
          );
        }
        _addIdentityChange(o, s) {
          return (
            (o.item = s),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = o)
                : (this._identityChangesTail._nextIdentityChange = o)),
            o
          );
        }
      }
      class Ky {
        constructor(o, s) {
          (this.item = o),
            (this.trackById = s),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class GD {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(o) {
          null === this._head
            ? ((this._head = this._tail = o), (o._nextDup = null), (o._prevDup = null))
            : ((this._tail._nextDup = o),
              (o._prevDup = this._tail),
              (o._nextDup = null),
              (this._tail = o));
        }
        get(o, s) {
          let c;
          for (c = this._head; null !== c; c = c._nextDup)
            if ((null === s || s <= c.currentIndex) && Object.is(c.trackById, o)) return c;
          return null;
        }
        remove(o) {
          const s = o._prevDup,
            c = o._nextDup;
          return (
            null === s ? (this._head = c) : (s._nextDup = c),
            null === c ? (this._tail = s) : (c._prevDup = s),
            null === this._head
          );
        }
      }
      class zD {
        constructor() {
          this.map = new Map();
        }
        put(o) {
          const s = o.trackById;
          let c = this.map.get(s);
          c || ((c = new GD()), this.map.set(s, c)), c.add(o);
        }
        get(o, s) {
          const l = this.map.get(o);
          return l ? l.get(o, s) : null;
        }
        remove(o) {
          const s = o.trackById;
          return this.map.get(s).remove(o) && this.map.delete(s), o;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function qy(r, o, s) {
        const c = r.previousIndex;
        if (null === c) return c;
        let l = 0;
        return s && c < s.length && (l = s[c]), c + o + l;
      }
      class nd {
        constructor() {}
        supports(o) {
          return o instanceof Map || Yr(o);
        }
        create() {
          return new lS();
        }
      }
      class lS {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(o) {
          let s;
          for (s = this._mapHead; null !== s; s = s._next) o(s);
        }
        forEachPreviousItem(o) {
          let s;
          for (s = this._previousMapHead; null !== s; s = s._nextPrevious) o(s);
        }
        forEachChangedItem(o) {
          let s;
          for (s = this._changesHead; null !== s; s = s._nextChanged) o(s);
        }
        forEachAddedItem(o) {
          let s;
          for (s = this._additionsHead; null !== s; s = s._nextAdded) o(s);
        }
        forEachRemovedItem(o) {
          let s;
          for (s = this._removalsHead; null !== s; s = s._nextRemoved) o(s);
        }
        diff(o) {
          if (o) {
            if (!(o instanceof Map || Yr(o))) throw new ee(900, !1);
          } else o = new Map();
          return this.check(o) ? this : null;
        }
        onDestroy() {}
        check(o) {
          this._reset();
          let s = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(o, (c, l) => {
              if (s && s.key === l)
                this._maybeAddToChanges(s, c), (this._appendAfter = s), (s = s._next);
              else {
                const d = this._getOrCreateRecordForKey(l, c);
                s = this._insertBeforeOrAppend(s, d);
              }
            }),
            s)
          ) {
            s._prev && (s._prev._next = null), (this._removalsHead = s);
            for (let c = s; null !== c; c = c._nextRemoved)
              c === this._mapHead && (this._mapHead = null),
                this._records.delete(c.key),
                (c._nextRemoved = c._next),
                (c.previousValue = c.currentValue),
                (c.currentValue = null),
                (c._prev = null),
                (c._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(o, s) {
          if (o) {
            const c = o._prev;
            return (
              (s._next = o),
              (s._prev = c),
              (o._prev = s),
              c && (c._next = s),
              o === this._mapHead && (this._mapHead = s),
              (this._appendAfter = o),
              o
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = s), (s._prev = this._appendAfter))
              : (this._mapHead = s),
            (this._appendAfter = s),
            null
          );
        }
        _getOrCreateRecordForKey(o, s) {
          if (this._records.has(o)) {
            const l = this._records.get(o);
            this._maybeAddToChanges(l, s);
            const d = l._prev,
              p = l._next;
            return d && (d._next = p), p && (p._prev = d), (l._next = null), (l._prev = null), l;
          }
          const c = new dS(o);
          return this._records.set(o, c), (c.currentValue = s), this._addToAdditions(c), c;
        }
        _reset() {
          if (this.isDirty) {
            let o;
            for (
              this._previousMapHead = this._mapHead, o = this._previousMapHead;
              null !== o;
              o = o._next
            )
              o._nextPrevious = o._next;
            for (o = this._changesHead; null !== o; o = o._nextChanged)
              o.previousValue = o.currentValue;
            for (o = this._additionsHead; null != o; o = o._nextAdded)
              o.previousValue = o.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(o, s) {
          Object.is(s, o.currentValue) ||
            ((o.previousValue = o.currentValue), (o.currentValue = s), this._addToChanges(o));
        }
        _addToAdditions(o) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = o)
            : ((this._additionsTail._nextAdded = o), (this._additionsTail = o));
        }
        _addToChanges(o) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = o)
            : ((this._changesTail._nextChanged = o), (this._changesTail = o));
        }
        _forEach(o, s) {
          o instanceof Map ? o.forEach(s) : Object.keys(o).forEach((c) => s(o[c], c));
        }
      }
      class dS {
        constructor(o) {
          (this.key = o),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function rd() {
        return new mp([new Wy()]);
      }
      let mp = (() => {
        class r {
          constructor(s) {
            this.factories = s;
          }
          static create(s, c) {
            if (null != c) {
              const l = c.factories.slice();
              s = s.concat(l);
            }
            return new r(s);
          }
          static extend(s) {
            return {
              provide: r,
              useFactory: (c) => r.create(s, c || rd()),
              deps: [[r, new lr(), new ss()]],
            };
          }
          find(s) {
            const c = this.factories.find((l) => l.supports(s));
            if (null != c) return c;
            throw new ee(901, !1);
          }
        }
        return (r.ɵprov = st({ token: r, providedIn: 'root', factory: rd })), r;
      })();
      function od() {
        return new _p([new nd()]);
      }
      let _p = (() => {
        class r {
          constructor(s) {
            this.factories = s;
          }
          static create(s, c) {
            if (c) {
              const l = c.factories.slice();
              s = s.concat(l);
            }
            return new r(s);
          }
          static extend(s) {
            return {
              provide: r,
              useFactory: (c) => r.create(s, c || od()),
              deps: [[r, new lr(), new ss()]],
            };
          }
          find(s) {
            const c = this.factories.find((l) => l.supports(s));
            if (c) return c;
            throw new ee(901, !1);
          }
        }
        return (r.ɵprov = st({ token: r, providedIn: 'root', factory: od })), r;
      })();
      const Qy = Ou(null, 'core', []);
      let Xy = (() => {
        class r {
          constructor(s) {}
        }
        return (
          (r.ɵfac = function (s) {
            return new (s || r)(It(dp));
          }),
          (r.ɵmod = oa({ type: r })),
          (r.ɵinj = jt({})),
          r
        );
      })();
      function Fu(r) {
        return 'boolean' == typeof r ? r : null != r && 'false' !== r;
      }
    },
    825: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { FT: () => StoreDevtoolsModule });
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4650),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2997),
        rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(515),
        rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9751),
        rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9646),
        rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6451),
        rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(233),
        rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4707),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3099),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9300),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4004),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4351),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1749),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8372),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(262),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5698),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2722),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3900),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5684),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5363),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1365),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5026);
      const PERFORM_ACTION = 'PERFORM_ACTION',
        REFRESH = 'REFRESH',
        RESET = 'RESET',
        ROLLBACK = 'ROLLBACK',
        COMMIT = 'COMMIT',
        SWEEP = 'SWEEP',
        TOGGLE_ACTION = 'TOGGLE_ACTION',
        SET_ACTIONS_ACTIVE = 'SET_ACTIONS_ACTIVE',
        JUMP_TO_STATE = 'JUMP_TO_STATE',
        JUMP_TO_ACTION = 'JUMP_TO_ACTION',
        IMPORT_STATE = 'IMPORT_STATE',
        LOCK_CHANGES = 'LOCK_CHANGES',
        PAUSE_RECORDING = 'PAUSE_RECORDING';
      class PerformAction {
        constructor(R, E) {
          if (
            ((this.action = R),
            (this.timestamp = E),
            (this.type = PERFORM_ACTION),
            typeof R.type > 'u')
          )
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
        }
      }
      class Refresh {
        constructor() {
          this.type = REFRESH;
        }
      }
      class Reset {
        constructor(R) {
          (this.timestamp = R), (this.type = RESET);
        }
      }
      class Rollback {
        constructor(R) {
          (this.timestamp = R), (this.type = ROLLBACK);
        }
      }
      class Commit {
        constructor(R) {
          (this.timestamp = R), (this.type = COMMIT);
        }
      }
      class Sweep {
        constructor() {
          this.type = SWEEP;
        }
      }
      class ToggleAction {
        constructor(R) {
          (this.id = R), (this.type = TOGGLE_ACTION);
        }
      }
      class SetActionsActive {
        constructor(R, E, M = !0) {
          (this.start = R), (this.end = E), (this.active = M), (this.type = SET_ACTIONS_ACTIVE);
        }
      }
      class JumpToState {
        constructor(R) {
          (this.index = R), (this.type = JUMP_TO_STATE);
        }
      }
      class JumpToAction {
        constructor(R) {
          (this.actionId = R), (this.type = JUMP_TO_ACTION);
        }
      }
      class ImportState {
        constructor(R) {
          (this.nextLiftedState = R), (this.type = IMPORT_STATE);
        }
      }
      class LockChanges {
        constructor(R) {
          (this.status = R), (this.type = LOCK_CHANGES);
        }
      }
      class PauseRecording {
        constructor(R) {
          (this.status = R), (this.type = PAUSE_RECORDING);
        }
      }
      class StoreDevtoolsConfig {
        constructor() {
          this.maxAge = !1;
        }
      }
      const STORE_DEVTOOLS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
          '@ngrx/store-devtools Options'
        ),
        INITIAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
          '@ngrx/store-devtools Initial Config'
        );
      function noMonitor() {
        return null;
      }
      const DEFAULT_NAME = 'NgRx Store DevTools';
      function createConfig(V) {
        const R = {
            maxAge: !1,
            monitor: noMonitor,
            actionSanitizer: void 0,
            stateSanitizer: void 0,
            name: DEFAULT_NAME,
            serialize: !1,
            logOnly: !1,
            autoPause: !1,
            trace: !1,
            traceLimit: 75,
            features: {
              pause: !0,
              lock: !0,
              persist: !0,
              export: !0,
              import: 'custom',
              jump: !0,
              skip: !0,
              reorder: !0,
              dispatch: !0,
              test: !0,
            },
          },
          E = 'function' == typeof V ? V() : V,
          G = Object.assign(
            {},
            R,
            {
              features:
                E.features || (!!E.logOnly && { pause: !0, export: !0, test: !0 }) || R.features,
            },
            E
          );
        if (G.maxAge && G.maxAge < 2)
          throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${G.maxAge}`);
        return G;
      }
      function difference(V, R) {
        return V.filter((E) => R.indexOf(E) < 0);
      }
      function unliftState(V) {
        const { computedStates: R, currentStateIndex: E } = V;
        if (E >= R.length) {
          const { state: a } = R[R.length - 1];
          return a;
        }
        const { state: M } = R[E];
        return M;
      }
      function unliftAction(V) {
        return V.actionsById[V.nextActionId - 1];
      }
      function liftAction(V) {
        return new PerformAction(V, +Date.now());
      }
      function sanitizeActions(V, R) {
        return Object.keys(R).reduce((E, M) => {
          const a = Number(M);
          return (E[a] = sanitizeAction(V, R[a], a)), E;
        }, {});
      }
      function sanitizeAction(V, R, E) {
        return { ...R, action: V(R.action, E) };
      }
      function sanitizeStates(V, R) {
        return R.map((E, M) => ({ state: sanitizeState(V, E.state, M), error: E.error }));
      }
      function sanitizeState(V, R, E) {
        return V(R, E);
      }
      function shouldFilterActions(V) {
        return V.predicate || V.actionsSafelist || V.actionsBlocklist;
      }
      function filterLiftedState(V, R, E, M) {
        const a = [],
          G = {},
          Z = [];
        return (
          V.stagedActionIds.forEach((L, H) => {
            const k = V.actionsById[L];
            k &&
              ((H && isActionFiltered(V.computedStates[H], k, R, E, M)) ||
                ((G[L] = k), a.push(L), Z.push(V.computedStates[H])));
          }),
          { ...V, stagedActionIds: a, actionsById: G, computedStates: Z }
        );
      }
      function isActionFiltered(V, R, E, M, a) {
        const G = E && !E(V, R.action),
          Z = M && !R.action.type.match(M.map((H) => escapeRegExp(H)).join('|')),
          L = a && R.action.type.match(a.map((H) => escapeRegExp(H)).join('|'));
        return G || Z || L;
      }
      function escapeRegExp(V) {
        return V.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }
      let DevtoolsDispatcher = (() => {
        class V extends _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO {}
        return (
          (V.ɵfac = (function () {
            let R;
            return function (M) {
              return (R || (R = _angular_core__WEBPACK_IMPORTED_MODULE_0__.n5z(V)))(M || V);
            };
          })()),
          (V.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({ token: V, factory: V.ɵfac })),
          V
        );
      })();
      const ExtensionActionTypes = {
          START: 'START',
          DISPATCH: 'DISPATCH',
          STOP: 'STOP',
          ACTION: 'ACTION',
        },
        REDUX_DEVTOOLS_EXTENSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
          '@ngrx/store-devtools Redux Devtools Extension'
        );
      let DevtoolsExtension = (() => {
        class DevtoolsExtension {
          constructor(V, R, E) {
            (this.config = R),
              (this.dispatcher = E),
              (this.devtoolsExtension = V),
              this.createActionStreams();
          }
          notify(V, R) {
            if (this.devtoolsExtension)
              if (V.type === PERFORM_ACTION) {
                if (R.isLocked || R.isPaused) return;
                const E = unliftState(R);
                if (
                  shouldFilterActions(this.config) &&
                  isActionFiltered(
                    E,
                    V,
                    this.config.predicate,
                    this.config.actionsSafelist,
                    this.config.actionsBlocklist
                  )
                )
                  return;
                const M = this.config.stateSanitizer
                    ? sanitizeState(this.config.stateSanitizer, E, R.currentStateIndex)
                    : E,
                  a = this.config.actionSanitizer
                    ? sanitizeAction(this.config.actionSanitizer, V, R.nextActionId)
                    : V;
                this.sendToReduxDevtools(() => this.extensionConnection.send(a, M));
              } else {
                const E = {
                  ...R,
                  stagedActionIds: R.stagedActionIds,
                  actionsById: this.config.actionSanitizer
                    ? sanitizeActions(this.config.actionSanitizer, R.actionsById)
                    : R.actionsById,
                  computedStates: this.config.stateSanitizer
                    ? sanitizeStates(this.config.stateSanitizer, R.computedStates)
                    : R.computedStates,
                };
                this.sendToReduxDevtools(() =>
                  this.devtoolsExtension.send(null, E, this.getExtensionConfig(this.config))
                );
              }
          }
          createChangesObservable() {
            return this.devtoolsExtension
              ? new rxjs__WEBPACK_IMPORTED_MODULE_3__.y((V) => {
                  const R = this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
                  return (
                    (this.extensionConnection = R),
                    R.init(),
                    R.subscribe((E) => V.next(E)),
                    R.unsubscribe
                  );
                })
              : rxjs__WEBPACK_IMPORTED_MODULE_2__.E;
          }
          createActionStreams() {
            const V = this.createChangesObservable().pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.B)()
              ),
              R = V.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                  (L) => L.type === ExtensionActionTypes.START
                )
              ),
              E = V.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                  (L) => L.type === ExtensionActionTypes.STOP
                )
              ),
              M = V.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                  (L) => L.type === ExtensionActionTypes.DISPATCH
                ),
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((L) =>
                  this.unwrapAction(L.payload)
                ),
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.b)((L) =>
                  L.type === IMPORT_STATE
                    ? this.dispatcher.pipe(
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                          (H) => H.type === _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb
                        ),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.V)(1e3),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.b)(1e3),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(() => L),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.K)(() =>
                          (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(L)
                        ),
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.q)(1)
                      )
                    : (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(L)
                )
              ),
              G = V.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                  (L) => L.type === ExtensionActionTypes.ACTION
                ),
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((L) =>
                  this.unwrapAction(L.payload)
                )
              ).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(E)),
              Z = M.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(E));
            (this.start$ = R.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(E))),
              (this.actions$ = this.start$.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => G)
              )),
              (this.liftedActions$ = this.start$.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => Z)
              ));
          }
          unwrapAction(action) {
            return 'string' == typeof action ? eval(`(${action})`) : action;
          }
          getExtensionConfig(V) {
            const R = {
              name: V.name,
              features: V.features,
              serialize: V.serialize,
              autoPause: V.autoPause ?? !1,
              trace: V.trace ?? !1,
              traceLimit: V.traceLimit ?? 75,
            };
            return !1 !== V.maxAge && (R.maxAge = V.maxAge), R;
          }
          sendToReduxDevtools(V) {
            try {
              V();
            } catch (R) {
              console.warn(
                '@ngrx/store-devtools: something went wrong inside the redux devtools',
                R
              );
            }
          }
        }
        return (
          (DevtoolsExtension.ɵfac = function V(R) {
            return new (R || DevtoolsExtension)(
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(REDUX_DEVTOOLS_EXTENSION),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(STORE_DEVTOOLS_CONFIG),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsDispatcher)
            );
          }),
          (DevtoolsExtension.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
            token: DevtoolsExtension,
            factory: DevtoolsExtension.ɵfac,
          })),
          DevtoolsExtension
        );
      })();
      const INIT_ACTION = { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg },
        RECOMPUTE = '@ngrx/store-devtools/recompute',
        RECOMPUTE_ACTION = { type: RECOMPUTE };
      function computeNextEntry(V, R, E, M, a) {
        if (M) return { state: E, error: 'Interrupted by an error up the chain' };
        let Z,
          G = E;
        try {
          G = V(E, R);
        } catch (L) {
          (Z = L.toString()), a.handleError(L);
        }
        return { state: G, error: Z };
      }
      function recomputeStates(V, R, E, M, a, G, Z, L, H) {
        if (R >= V.length && V.length === G.length) return V;
        const k = V.slice(0, R),
          x = G.length - (H ? 1 : 0);
        for (let P = R; P < x; P++) {
          const b = G[P],
            O = a[b].action,
            I = k[P - 1],
            W = I ? I.state : M,
            q = I ? I.error : void 0,
            ye = Z.indexOf(b) > -1 ? I : computeNextEntry(E, O, W, q, L);
          k.push(ye);
        }
        return H && k.push(V[V.length - 1]), k;
      }
      function liftInitialState(V, R) {
        return {
          monitorState: R(void 0, {}),
          nextActionId: 1,
          actionsById: { 0: liftAction(INIT_ACTION) },
          stagedActionIds: [0],
          skippedActionIds: [],
          committedState: V,
          currentStateIndex: 0,
          computedStates: [],
          isLocked: !1,
          isPaused: !1,
        };
      }
      function liftReducerWith(V, R, E, M, a = {}) {
        return (G) => (Z, L) => {
          let {
            monitorState: H,
            actionsById: k,
            nextActionId: x,
            stagedActionIds: P,
            skippedActionIds: b,
            committedState: O,
            currentStateIndex: I,
            computedStates: W,
            isLocked: q,
            isPaused: ie,
          } = Z || R;
          function ye(ae) {
            let ge = ae,
              ce = P.slice(1, ge + 1);
            for (let re = 0; re < ce.length; re++) {
              if (W[re + 1].error) {
                (ge = re), (ce = P.slice(1, ge + 1));
                break;
              }
              delete k[ce[re]];
            }
            (b = b.filter((re) => -1 === ce.indexOf(re))),
              (P = [0, ...P.slice(ge + 1)]),
              (O = W[ge].state),
              (W = W.slice(ge)),
              (I = I > ge ? I - ge : 0);
          }
          function ee() {
            (k = { 0: liftAction(INIT_ACTION) }),
              (x = 1),
              (P = [0]),
              (b = []),
              (O = W[I].state),
              (I = 0),
              (W = []);
          }
          Z || (k = Object.create(k));
          let Ee = 0;
          switch (L.type) {
            case LOCK_CHANGES:
              (q = L.status), (Ee = 1 / 0);
              break;
            case PAUSE_RECORDING:
              (ie = L.status),
                ie
                  ? ((P = [...P, x]),
                    (k[x] = new PerformAction({ type: '@ngrx/devtools/pause' }, +Date.now())),
                    x++,
                    (Ee = P.length - 1),
                    (W = W.concat(W[W.length - 1])),
                    I === P.length - 2 && I++,
                    (Ee = 1 / 0))
                  : ee();
              break;
            case RESET:
              (k = { 0: liftAction(INIT_ACTION) }),
                (x = 1),
                (P = [0]),
                (b = []),
                (O = V),
                (I = 0),
                (W = []);
              break;
            case COMMIT:
              ee();
              break;
            case ROLLBACK:
              (k = { 0: liftAction(INIT_ACTION) }), (x = 1), (P = [0]), (b = []), (I = 0), (W = []);
              break;
            case TOGGLE_ACTION: {
              const { id: ae } = L;
              (b = -1 === b.indexOf(ae) ? [ae, ...b] : b.filter((ce) => ce !== ae)),
                (Ee = P.indexOf(ae));
              break;
            }
            case SET_ACTIONS_ACTIVE: {
              const { start: ae, end: ge, active: ce } = L,
                re = [];
              for (let Me = ae; Me < ge; Me++) re.push(Me);
              (b = ce ? difference(b, re) : [...b, ...re]), (Ee = P.indexOf(ae));
              break;
            }
            case JUMP_TO_STATE:
              (I = L.index), (Ee = 1 / 0);
              break;
            case JUMP_TO_ACTION: {
              const ae = P.indexOf(L.actionId);
              -1 !== ae && (I = ae), (Ee = 1 / 0);
              break;
            }
            case SWEEP:
              (P = difference(P, b)), (b = []), (I = Math.min(I, P.length - 1));
              break;
            case PERFORM_ACTION: {
              if (q) return Z || R;
              if (
                ie ||
                (Z &&
                  isActionFiltered(
                    Z.computedStates[I],
                    L,
                    a.predicate,
                    a.actionsSafelist,
                    a.actionsBlocklist
                  ))
              ) {
                const ge = W[W.length - 1];
                (W = [...W.slice(0, -1), computeNextEntry(G, L.action, ge.state, ge.error, E)]),
                  (Ee = 1 / 0);
                break;
              }
              a.maxAge && P.length === a.maxAge && ye(1), I === P.length - 1 && I++;
              const ae = x++;
              (k[ae] = L), (P = [...P, ae]), (Ee = P.length - 1);
              break;
            }
            case IMPORT_STATE:
              ({
                monitorState: H,
                actionsById: k,
                nextActionId: x,
                stagedActionIds: P,
                skippedActionIds: b,
                committedState: O,
                currentStateIndex: I,
                computedStates: W,
                isLocked: q,
                isPaused: ie,
              } = L.nextLiftedState);
              break;
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg:
              (Ee = 0),
                a.maxAge &&
                  P.length > a.maxAge &&
                  ((W = recomputeStates(W, Ee, G, O, k, P, b, E, ie)),
                  ye(P.length - a.maxAge),
                  (Ee = 1 / 0));
              break;
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb:
              if (W.filter((ge) => ge.error).length > 0)
                (Ee = 0),
                  a.maxAge &&
                    P.length > a.maxAge &&
                    ((W = recomputeStates(W, Ee, G, O, k, P, b, E, ie)),
                    ye(P.length - a.maxAge),
                    (Ee = 1 / 0));
              else {
                if (!ie && !q) {
                  I === P.length - 1 && I++;
                  const ge = x++;
                  (k[ge] = new PerformAction(L, +Date.now())),
                    (P = [...P, ge]),
                    (Ee = P.length - 1),
                    (W = recomputeStates(W, Ee, G, O, k, P, b, E, ie));
                }
                (W = W.map((ge) => ({ ...ge, state: G(ge.state, RECOMPUTE_ACTION) }))),
                  (I = P.length - 1),
                  a.maxAge && P.length > a.maxAge && ye(P.length - a.maxAge),
                  (Ee = 1 / 0);
              }
              break;
            default:
              Ee = 1 / 0;
          }
          return (
            (W = recomputeStates(W, Ee, G, O, k, P, b, E, ie)),
            (H = M(H, L)),
            {
              monitorState: H,
              actionsById: k,
              nextActionId: x,
              stagedActionIds: P,
              skippedActionIds: b,
              committedState: O,
              currentStateIndex: I,
              computedStates: W,
              isLocked: q,
              isPaused: ie,
            }
          );
        };
      }
      let StoreDevtools = (() => {
        class V {
          constructor(E, M, a, G, Z, L, H, k) {
            const x = liftInitialState(H, k.monitor),
              P = liftReducerWith(H, x, L, k.monitor, k),
              b = (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(
                (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(
                  M.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.T)(1)),
                  G.actions$
                ).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(liftAction)),
                E,
                G.liftedActions$
              ).pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.Q)(
                  rxjs__WEBPACK_IMPORTED_MODULE_18__.N
                )
              ),
              O = a.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(P)),
              I = new rxjs__WEBPACK_IMPORTED_MODULE_19__.t(1),
              W = b
                .pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.M)(O),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.R)(
                    ({ state: ee }, [Ee, ae]) => {
                      let ge = ae(ee, Ee);
                      return (
                        Ee.type !== PERFORM_ACTION &&
                          shouldFilterActions(k) &&
                          (ge = filterLiftedState(
                            ge,
                            k.predicate,
                            k.actionsSafelist,
                            k.actionsBlocklist
                          )),
                        G.notify(Ee, ge),
                        { state: ge, action: Ee }
                      );
                    },
                    { state: x, action: null }
                  )
                )
                .subscribe(({ state: ee, action: Ee }) => {
                  I.next(ee), Ee.type === PERFORM_ACTION && Z.next(Ee.action);
                }),
              q = G.start$.subscribe(() => {
                this.refresh();
              }),
              ie = I.asObservable(),
              ye = ie.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(unliftState));
            (this.extensionStartSubscription = q),
              (this.stateSubscription = W),
              (this.dispatcher = E),
              (this.liftedState = ie),
              (this.state = ye);
          }
          dispatch(E) {
            this.dispatcher.next(E);
          }
          next(E) {
            this.dispatcher.next(E);
          }
          error(E) {}
          complete() {}
          performAction(E) {
            this.dispatch(new PerformAction(E, +Date.now()));
          }
          refresh() {
            this.dispatch(new Refresh());
          }
          reset() {
            this.dispatch(new Reset(+Date.now()));
          }
          rollback() {
            this.dispatch(new Rollback(+Date.now()));
          }
          commit() {
            this.dispatch(new Commit(+Date.now()));
          }
          sweep() {
            this.dispatch(new Sweep());
          }
          toggleAction(E) {
            this.dispatch(new ToggleAction(E));
          }
          jumpToAction(E) {
            this.dispatch(new JumpToAction(E));
          }
          jumpToState(E) {
            this.dispatch(new JumpToState(E));
          }
          importState(E) {
            this.dispatch(new ImportState(E));
          }
          lockChanges(E) {
            this.dispatch(new LockChanges(E));
          }
          pauseRecording(E) {
            this.dispatch(new PauseRecording(E));
          }
        }
        return (
          (V.ɵfac = function (E) {
            return new (E || V)(
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsDispatcher),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.n$
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsExtension),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y$
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.qLn
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y6
              ),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(STORE_DEVTOOLS_CONFIG)
            );
          }),
          (V.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({ token: V, factory: V.ɵfac })),
          V
        );
      })();
      const IS_EXTENSION_OR_MONITOR_PRESENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
        '@ngrx/store-devtools Is Devtools Extension or Monitor Present'
      );
      function createIsExtensionOrMonitorPresent(V, R) {
        return Boolean(V) || R.monitor !== noMonitor;
      }
      function createReduxDevtoolsExtension() {
        const V = '__REDUX_DEVTOOLS_EXTENSION__';
        return 'object' == typeof window && typeof window[V] < 'u' ? window[V] : null;
      }
      function provideStoreDevtools(V = {}) {
        return (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.MR2)([
          DevtoolsExtension,
          DevtoolsDispatcher,
          StoreDevtools,
          { provide: INITIAL_OPTIONS, useValue: V },
          {
            provide: IS_EXTENSION_OR_MONITOR_PRESENT,
            deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
            useFactory: createIsExtensionOrMonitorPresent,
          },
          { provide: REDUX_DEVTOOLS_EXTENSION, useFactory: createReduxDevtoolsExtension },
          { provide: STORE_DEVTOOLS_CONFIG, deps: [INITIAL_OPTIONS], useFactory: createConfig },
          {
            provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.FR,
            deps: [StoreDevtools],
            useFactory: createStateObservable,
          },
          { provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.mK, useExisting: DevtoolsDispatcher },
        ]);
      }
      function createStateObservable(V) {
        return V.state;
      }
      let StoreDevtoolsModule = (() => {
        class V {
          static instrument(E = {}) {
            return { ngModule: V, providers: [provideStoreDevtools(E)] };
          }
        }
        return (
          (V.ɵfac = function (E) {
            return new (E || V)();
          }),
          (V.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({ type: V })),
          (V.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({})),
          V
        );
      })();
    },
    2997: (V, R, E) => {
      'use strict';
      E.d(R, {
        hg: () => Nn,
        UO: () => lt,
        qg: () => Je,
        Y6: () => j,
        mK: () => mn,
        n$: () => ti,
        Y$: () => xt,
        FR: () => We,
        yh: () => Ur,
        CK: () => ui,
        Aw: () => io,
        cr: () => Kt,
        wb: () => ea,
        PH: () => Ee,
        Tz: () => na,
        ZF: () => Io,
        Lq: () => Ki,
        P1: () => To,
        rM: () => ar,
        on: () => Cr,
        Ky: () => ae,
        Ys: () => ku,
      });
      var M = E(4650),
        a = E(1135),
        G = E(9751),
        Z = E(7579),
        L = E(233),
        H = E(5363),
        k = E(1365),
        x = E(5026),
        P = E(4004),
        O = E(4671),
        I = E(4482),
        W = E(5403);
      function ie(A, B) {
        return A === B;
      }
      const ye = {};
      function Ee(A, B) {
        if (((ye[A] = (ye[A] || 0) + 1), 'function' == typeof B))
          return ce(A, (...Y) => ({ ...B(...Y), type: A }));
        switch (B ? B._as : 'empty') {
          case 'empty':
            return ce(A, () => ({ type: A }));
          case 'props':
            return ce(A, (Y) => ({ ...Y, type: A }));
          default:
            throw new Error('Unexpected config.');
        }
      }
      function ae() {
        return { _as: 'props', _p: void 0 };
      }
      function ce(A, B) {
        return Object.defineProperty(B, 'type', { value: A, writable: !1 });
      }
      function re(A) {
        return A.charAt(0).toUpperCase() + A.substring(1);
      }
      const Je = '@ngrx/store/init';
      let lt = (() => {
        class A extends a.X {
          constructor() {
            super({ type: Je });
          }
          next(U) {
            if ('function' == typeof U)
              throw new TypeError(
                "\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction()."
              );
            if (typeof U > 'u') throw new TypeError('Actions must be objects');
            if (typeof U.type > 'u') throw new TypeError('Actions must have a type property');
            super.next(U);
          }
          complete() {}
          ngOnDestroy() {
            super.complete();
          }
        }
        return (
          (A.ɵfac = function (U) {
            return new (U || A)();
          }),
          (A.ɵprov = M.Yz7({ token: A, factory: A.ɵfac })),
          A
        );
      })();
      const ft = [lt],
        Qe = new M.OlP('@ngrx/store Internal Root Guard'),
        St = new M.OlP('@ngrx/store Internal Initial State'),
        j = new M.OlP('@ngrx/store Initial State'),
        te = new M.OlP('@ngrx/store Reducer Factory'),
        ne = new M.OlP('@ngrx/store Internal Reducer Factory Provider'),
        se = new M.OlP('@ngrx/store Initial Reducers'),
        _e = new M.OlP('@ngrx/store Internal Initial Reducers'),
        pe = new M.OlP('@ngrx/store Store Features'),
        Oe = new M.OlP('@ngrx/store Internal Store Reducers'),
        Ie = new M.OlP('@ngrx/store Internal Feature Reducers'),
        Sn = new M.OlP('@ngrx/store Internal Feature Configs'),
        Le = new M.OlP('@ngrx/store Internal Store Features'),
        Dt = new M.OlP('@ngrx/store Internal Feature Reducers Token'),
        st = new M.OlP('@ngrx/store Feature Reducers'),
        ht = new M.OlP('@ngrx/store User Provided Meta Reducers'),
        jt = new M.OlP('@ngrx/store Meta Reducers'),
        bn = new M.OlP('@ngrx/store Internal Resolved Meta Reducers'),
        ir = new M.OlP('@ngrx/store User Runtime Checks Config'),
        sr = new M.OlP('@ngrx/store Internal User Runtime Checks Config'),
        Nn = new M.OlP('@ngrx/store Internal Runtime Checks'),
        Jo = new M.OlP('@ngrx/store Check if Action types are unique');
      function ei(A, B = {}) {
        const U = Object.keys(A),
          Y = {};
        for (let he = 0; he < U.length; he++) {
          const Ye = U[he];
          'function' == typeof A[Ye] && (Y[Ye] = A[Ye]);
        }
        const de = Object.keys(Y);
        return function (Ye, He) {
          Ye = void 0 === Ye ? B : Ye;
          let ut = !1;
          const qn = {};
          for (let at = 0; at < de.length; at++) {
            const Ot = de[at],
              Po = Ye[Ot],
              ci = (0, Y[Ot])(Po, He);
            (qn[Ot] = ci), (ut = ut || ci !== Po);
          }
          return ut ? qn : Ye;
        };
      }
      function An(...A) {
        return function (B) {
          if (0 === A.length) return B;
          const U = A[A.length - 1];
          return A.slice(0, -1).reduceRight((de, he) => he(de), U(B));
        };
      }
      function Re(A, B) {
        return (
          Array.isArray(B) && B.length > 0 && (A = An.apply(null, [...B, A])),
          (U, Y) => {
            const de = A(U);
            return (he, Ye) => de((he = void 0 === he ? Y : he), Ye);
          }
        );
      }
      new M.OlP('@ngrx/store Root Store Provider'), new M.OlP('@ngrx/store Feature State Provider');
      class ti extends G.y {}
      class mn extends lt {}
      const ea = '@ngrx/store/update-reducers';
      let kr = (() => {
        class A extends a.X {
          constructor(U, Y, de, he) {
            super(he(de, Y)),
              (this.dispatcher = U),
              (this.initialState = Y),
              (this.reducers = de),
              (this.reducerFactory = he);
          }
          get currentReducers() {
            return this.reducers;
          }
          addFeature(U) {
            this.addFeatures([U]);
          }
          addFeatures(U) {
            const Y = U.reduce(
              (
                de,
                { reducers: he, reducerFactory: Ye, metaReducers: He, initialState: ut, key: qn }
              ) => {
                const at =
                  'function' == typeof he
                    ? (function Xs(A) {
                        const B = Array.isArray(A) && A.length > 0 ? An(...A) : (U) => U;
                        return (U, Y) => (
                          (U = B(U)), (de, he) => U((de = void 0 === de ? Y : de), he)
                        );
                      })(He)(he, ut)
                    : Re(Ye, He)(he, ut);
                return (de[qn] = at), de;
              },
              {}
            );
            this.addReducers(Y);
          }
          removeFeature(U) {
            this.removeFeatures([U]);
          }
          removeFeatures(U) {
            this.removeReducers(U.map((Y) => Y.key));
          }
          addReducer(U, Y) {
            this.addReducers({ [U]: Y });
          }
          addReducers(U) {
            (this.reducers = { ...this.reducers, ...U }), this.updateReducers(Object.keys(U));
          }
          removeReducer(U) {
            this.removeReducers([U]);
          }
          removeReducers(U) {
            U.forEach((Y) => {
              this.reducers = (function cd(A, B) {
                return Object.keys(A)
                  .filter((U) => U !== B)
                  .reduce((U, Y) => Object.assign(U, { [Y]: A[Y] }), {});
              })(this.reducers, Y);
            }),
              this.updateReducers(U);
          }
          updateReducers(U) {
            this.next(this.reducerFactory(this.reducers, this.initialState)),
              this.dispatcher.next({ type: ea, features: U });
          }
          ngOnDestroy() {
            this.complete();
          }
        }
        return (
          (A.ɵfac = function (U) {
            return new (U || A)(M.LFG(mn), M.LFG(j), M.LFG(se), M.LFG(te));
          }),
          (A.ɵprov = M.Yz7({ token: A, factory: A.ɵfac })),
          A
        );
      })();
      const zt = [kr, { provide: ti, useExisting: kr }, { provide: mn, useExisting: lt }];
      let xt = (() => {
        class A extends Z.x {
          ngOnDestroy() {
            this.complete();
          }
        }
        return (
          (A.ɵfac = (function () {
            let B;
            return function (Y) {
              return (B || (B = M.n5z(A)))(Y || A);
            };
          })()),
          (A.ɵprov = M.Yz7({ token: A, factory: A.ɵfac })),
          A
        );
      })();
      const ke = [xt];
      class We extends G.y {}
      let So = (() => {
        class A extends a.X {
          constructor(U, Y, de, he) {
            super(he);
            const qn = U.pipe((0, H.Q)(L.N))
              .pipe((0, k.M)(Y))
              .pipe((0, x.R)(bo, { state: he }));
            this.stateSubscription = qn.subscribe(({ state: at, action: Ot }) => {
              this.next(at), de.next(Ot);
            });
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
        }
        return (
          (A.INIT = Je),
          (A.ɵfac = function (U) {
            return new (U || A)(M.LFG(lt), M.LFG(ti), M.LFG(xt), M.LFG(j));
          }),
          (A.ɵprov = M.Yz7({ token: A, factory: A.ɵfac })),
          A
        );
      })();
      function bo(A = { state: void 0 }, [B, U]) {
        const { state: Y } = A;
        return { state: U(Y, B), action: B };
      }
      const Ln = [So, { provide: We, useExisting: So }];
      let Ur = (() => {
        class A extends G.y {
          constructor(U, Y, de) {
            super(), (this.actionsObserver = Y), (this.reducerManager = de), (this.source = U);
          }
          select(U, ...Y) {
            return ku.call(null, U, ...Y)(this);
          }
          lift(U) {
            const Y = new A(this, this.actionsObserver, this.reducerManager);
            return (Y.operator = U), Y;
          }
          dispatch(U) {
            this.actionsObserver.next(U);
          }
          next(U) {
            this.actionsObserver.next(U);
          }
          error(U) {
            this.actionsObserver.error(U);
          }
          complete() {
            this.actionsObserver.complete();
          }
          addReducer(U, Y) {
            this.reducerManager.addReducer(U, Y);
          }
          removeReducer(U) {
            this.reducerManager.removeReducer(U);
          }
        }
        return (
          (A.ɵfac = function (U) {
            return new (U || A)(M.LFG(We), M.LFG(lt), M.LFG(kr));
          }),
          (A.ɵprov = M.Yz7({ token: A, factory: A.ɵfac })),
          A
        );
      })();
      const zn = [Ur];
      function ku(A, B, ...U) {
        return function (de) {
          let he;
          if ('string' == typeof A) {
            const Ye = [B, ...U].filter(Boolean);
            he = de.pipe(
              (function b(...A) {
                const B = A.length;
                if (0 === B) throw new Error('list of properties cannot be empty.');
                return (0, P.U)((U) => {
                  let Y = U;
                  for (let de = 0; de < B; de++) {
                    const he = Y?.[A[de]];
                    if (!(typeof he < 'u')) return;
                    Y = he;
                  }
                  return Y;
                });
              })(A, ...Ye)
            );
          } else {
            if ('function' != typeof A)
              throw new TypeError(
                `Unexpected type '${typeof A}' in select operator, expected 'string' or 'function'`
              );
            he = de.pipe((0, P.U)((Ye) => A(Ye, B)));
          }
          return he.pipe(
            (function q(A, B = O.y) {
              return (
                (A = A ?? ie),
                (0, I.e)((U, Y) => {
                  let de,
                    he = !0;
                  U.subscribe(
                    (0, W.x)(Y, (Ye) => {
                      const He = B(Ye);
                      (he || !A(de, He)) && ((he = !1), (de = He), Y.next(Ye));
                    })
                  );
                })
              );
            })()
          );
        };
      }
      const Tt = 'https://ngrx.io/guide/store/configuration/runtime-checks';
      function Ao(A) {
        return void 0 === A;
      }
      function pt(A) {
        return null === A;
      }
      function Uu(A) {
        return Array.isArray(A);
      }
      function ri(A) {
        return 'object' == typeof A && null !== A;
      }
      function Vr(A) {
        if (
          !(function zi(A) {
            return ri(A) && !Uu(A);
          })(A)
        )
          return !1;
        const B = Object.getPrototypeOf(A);
        return B === Object.prototype || null === B;
      }
      function Mo(A) {
        return 'function' == typeof A;
      }
      let Zn = !1;
      function ar() {
        return Zn;
      }
      function Wn(A, B) {
        return A === B;
      }
      function oi(A, B = Wn, U = Wn) {
        let he,
          Y = null,
          de = null;
        return {
          memoized: function qn() {
            if (void 0 !== he) return he.result;
            if (!Y) return (de = A.apply(null, arguments)), (Y = arguments), de;
            if (
              !(function mt(A, B, U) {
                for (let Y = 0; Y < A.length; Y++) if (!U(A[Y], B[Y])) return !0;
                return !1;
              })(arguments, Y, B)
            )
              return de;
            const at = A.apply(null, arguments);
            return (Y = arguments), U(de, at) ? de : ((de = at), at);
          },
          reset: function Ye() {
            (Y = null), (de = null);
          },
          setResult: function He(at) {
            he = { result: at };
          },
          clearResult: function ut() {
            he = void 0;
          },
        };
      }
      function To(...A) {
        return (function Mn(A, B = { stateFn: ii }) {
          return function (...U) {
            let Y = U;
            if (Array.isArray(Y[0])) {
              const [at, ...Ot] = Y;
              Y = [...at, ...Ot];
            } else
              1 === Y.length &&
                (function dd(A) {
                  return (
                    !!A &&
                    'object' == typeof A &&
                    Object.values(A).every((B) => 'function' == typeof B)
                  );
                })(Y[0]) &&
                (Y = (function Wi(A) {
                  const B = Object.values(A),
                    U = Object.keys(A);
                  return [...B, (...de) => U.reduce((he, Ye, He) => ({ ...he, [Ye]: de[He] }), {})];
                })(Y[0]));
            const de = Y.slice(0, Y.length - 1),
              he = Y[Y.length - 1],
              Ye = de.filter((at) => at.release && 'function' == typeof at.release),
              He = A(function (...at) {
                return he.apply(null, at);
              }),
              ut = oi(function (at, Ot) {
                return B.stateFn.apply(null, [at, de, Ot, He]);
              });
            return Object.assign(ut.memoized, {
              release: function qn() {
                ut.reset(), He.reset(), Ye.forEach((at) => at.release());
              },
              projector: He.memoized,
              setResult: ut.setResult,
              clearResult: ut.clearResult,
            });
          };
        })(oi)(...A);
      }
      function ii(A, B, U, Y) {
        if (void 0 === U) {
          const he = B.map((Ye) => Ye(A));
          return Y.memoized.apply(null, he);
        }
        const de = B.map((he) => he(A, U));
        return Y.memoized.apply(null, [...de, U]);
      }
      function Io(A) {
        return To(
          (B) => {
            const U = B[A];
            return (
              !ar() &&
                (0, M.X6Q)() &&
                !(A in B) &&
                console.warn(
                  `@ngrx/store: The feature name "${A}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${A}', ...) or StoreModule.forFeature('${A}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`
                ),
              U
            );
          },
          (B) => B
        );
      }
      function na(A) {
        const { name: B, reducer: U, extraSelectors: Y } = A,
          de = Io(B),
          he = (function fd(A, B) {
            const U = (function ra(A) {
              return A(void 0, { type: '@ngrx/feature/init' });
            })(B);
            return (Vr(U) ? Object.keys(U) : []).reduce(
              (de, he) => ({ ...de, [`select${re(he)}`]: To(A, (Ye) => Ye?.[he]) }),
              {}
            );
          })(de, U),
          Ye = { [`select${re(B)}State`]: de, ...he },
          He = Y ? Y(Ye) : {};
        return { name: B, reducer: U, ...Ye, ...He };
      }
      function oa(A) {
        return A instanceof M.OlP ? (0, M.f3M)(A) : A;
      }
      function hd(A, B) {
        return B.map((U, Y) => {
          if (A[Y] instanceof M.OlP) {
            const de = (0, M.f3M)(A[Y]);
            return {
              key: U.key,
              reducerFactory: de.reducerFactory ? de.reducerFactory : ei,
              metaReducers: de.metaReducers ? de.metaReducers : [],
              initialState: de.initialState,
            };
          }
          return U;
        });
      }
      function ju(A) {
        return A.map((B) => (B instanceof M.OlP ? (0, M.f3M)(B) : B));
      }
      function Oo(A) {
        return 'function' == typeof A ? A() : A;
      }
      function Bu(A, B) {
        return A.concat(B);
      }
      function vt() {
        if ((0, M.f3M)(Ur, { optional: !0, skipSelf: !0 }))
          throw new TypeError(
            'The root Store has been provided more than once. Feature modules should provide feature states instead.'
          );
        return 'guarded';
      }
      function Yt(A) {
        Object.freeze(A);
        const B = Mo(A);
        return (
          Object.getOwnPropertyNames(A).forEach((U) => {
            if (
              !U.startsWith('\u0275') &&
              (function ld(A, B) {
                return Object.prototype.hasOwnProperty.call(A, B);
              })(A, U) &&
              (!B || ('caller' !== U && 'callee' !== U && 'arguments' !== U))
            ) {
              const Y = A[U];
              (ri(Y) || Mo(Y)) && !Object.isFrozen(Y) && Yt(Y);
            }
          }),
          A
        );
      }
      function rn(A, B = []) {
        return (Ao(A) || pt(A)) && 0 === B.length
          ? { path: ['root'], value: A }
          : Object.keys(A).reduce((Y, de) => {
              if (Y) return Y;
              const he = A[de];
              return (function ta(A) {
                return Mo(A) && A.hasOwnProperty('\u0275cmp');
              })(he)
                ? Y
                : !(
                    Ao(he) ||
                    pt(he) ||
                    (function ni(A) {
                      return 'number' == typeof A;
                    })(he) ||
                    (function Vu(A) {
                      return 'boolean' == typeof A;
                    })(he) ||
                    (function It(A) {
                      return 'string' == typeof A;
                    })(he) ||
                    Uu(he)
                  ) && (Vr(he) ? rn(he, [...B, de]) : { path: [...B, de], value: he });
            }, !1);
      }
      function ia(A, B) {
        if (!1 === A) return;
        const U = A.path.join('.'),
          Y = new Error(`Detected unserializable ${B} at "${U}". ${Tt}#strict${B}serializability`);
        throw ((Y.value = A.value), (Y.unserializablePath = U), Y);
      }
      function si(A) {
        return (0, M.X6Q)()
          ? {
              strictStateSerializability: !1,
              strictActionSerializability: !1,
              strictStateImmutability: !0,
              strictActionImmutability: !0,
              strictActionWithinNgZone: !1,
              strictActionTypeUniqueness: !1,
              ...A,
            }
          : {
              strictStateSerializability: !1,
              strictActionSerializability: !1,
              strictStateImmutability: !1,
              strictActionImmutability: !1,
              strictActionWithinNgZone: !1,
              strictActionTypeUniqueness: !1,
            };
      }
      function Yn({ strictActionSerializability: A, strictStateSerializability: B }) {
        return (U) =>
          A || B
            ? (function jr(A, B) {
                return function (U, Y) {
                  B.action(Y) && ia(rn(Y), 'action');
                  const de = A(U, Y);
                  return B.state() && ia(rn(de), 'state'), de;
                };
              })(U, { action: (Y) => A && !Ue(Y), state: () => B })
            : U;
      }
      function De({ strictActionImmutability: A, strictStateImmutability: B }) {
        return (U) =>
          A || B
            ? (function nn(A, B) {
                return function (U, Y) {
                  const de = B.action(Y) ? Yt(Y) : Y,
                    he = A(U, de);
                  return B.state() ? Yt(he) : he;
                };
              })(U, { action: (Y) => A && !Ue(Y), state: () => B })
            : U;
      }
      function Ue(A) {
        return A.type.startsWith('@ngrx');
      }
      function Rt({ strictActionWithinNgZone: A }) {
        return (B) =>
          A
            ? (function pd(A, B) {
                return function (U, Y) {
                  if (B.action(Y) && !M.R0b.isInAngularZone())
                    throw new Error(
                      `Action '${Y.type}' running outside NgZone. ${Tt}#strictactionwithinngzone`
                    );
                  return A(U, Y);
                };
              })(B, { action: (U) => A && !Ue(U) })
            : B;
      }
      function kn(A) {
        return [
          { provide: sr, useValue: A },
          { provide: ir, useFactory: on, deps: [sr] },
          { provide: Nn, deps: [ir], useFactory: si },
          { provide: jt, multi: !0, deps: [Nn], useFactory: De },
          { provide: jt, multi: !0, deps: [Nn], useFactory: Yn },
          { provide: jt, multi: !0, deps: [Nn], useFactory: Rt },
        ];
      }
      function Dr() {
        return [{ provide: Jo, multi: !0, deps: [Nn], useFactory: Kn }];
      }
      function on(A) {
        return A;
      }
      function Kn(A) {
        if (!A.strictActionTypeUniqueness) return;
        const B = Object.entries(ye)
          .filter(([, U]) => U > 1)
          .map(([U]) => U);
        if (B.length)
          throw new Error(
            `Action types are registered more than once, ${B.map((U) => `"${U}"`).join(
              ', '
            )}. ${Tt}#strictactiontypeuniqueness`
          );
      }
      function ai(A = {}, B = {}) {
        return [
          { provide: Qe, useFactory: vt },
          { provide: St, useValue: B.initialState },
          { provide: j, useFactory: Oo, deps: [St] },
          { provide: _e, useValue: A },
          { provide: Oe, useExisting: A instanceof M.OlP ? A : _e },
          { provide: se, deps: [_e, [new M.tBr(Oe)]], useFactory: oa },
          { provide: ht, useValue: B.metaReducers ? B.metaReducers : [] },
          { provide: bn, deps: [jt, ht], useFactory: Bu },
          { provide: ne, useValue: B.reducerFactory ? B.reducerFactory : ei },
          { provide: te, deps: [ne, bn], useFactory: Re },
          ft,
          zt,
          ke,
          Ln,
          zn,
          kn(B.runtimeChecks),
          Dr(),
        ];
      }
      function oo(A, B, U = {}) {
        return [
          { provide: Sn, multi: !0, useValue: A instanceof Object ? {} : U },
          {
            provide: pe,
            multi: !0,
            useValue: {
              key: A instanceof Object ? A.name : A,
              reducerFactory: U instanceof M.OlP || !U.reducerFactory ? ei : U.reducerFactory,
              metaReducers: U instanceof M.OlP || !U.metaReducers ? [] : U.metaReducers,
              initialState: U instanceof M.OlP || !U.initialState ? void 0 : U.initialState,
            },
          },
          { provide: Le, deps: [Sn, pe], useFactory: hd },
          { provide: Ie, multi: !0, useValue: A instanceof Object ? A.reducer : B },
          { provide: Dt, multi: !0, useExisting: B instanceof M.OlP ? B : Ie },
          { provide: st, multi: !0, deps: [Ie, [new M.tBr(Dt)]], useFactory: ju },
          Dr(),
        ];
      }
      let Kt = (() => {
          class A {
            constructor(U, Y, de, he, Ye, He) {}
          }
          return (
            (A.ɵfac = function (U) {
              return new (U || A)(
                M.LFG(lt),
                M.LFG(ti),
                M.LFG(xt),
                M.LFG(Ur),
                M.LFG(Qe, 8),
                M.LFG(Jo, 8)
              );
            }),
            (A.ɵmod = M.oAB({ type: A })),
            (A.ɵinj = M.cJS({})),
            A
          );
        })(),
        ui = (() => {
          class A {
            constructor(U, Y, de, he, Ye) {
              (this.features = U), (this.featureReducers = Y), (this.reducerManager = de);
              const He = U.map((ut, qn) => {
                const Ot = Y.shift()[qn];
                return { ...ut, reducers: Ot, initialState: Oo(ut.initialState) };
              });
              de.addFeatures(He);
            }
            ngOnDestroy() {
              this.reducerManager.removeFeatures(this.features);
            }
          }
          return (
            (A.ɵfac = function (U) {
              return new (U || A)(M.LFG(Le), M.LFG(st), M.LFG(kr), M.LFG(Kt), M.LFG(Jo, 8));
            }),
            (A.ɵmod = M.oAB({ type: A })),
            (A.ɵinj = M.cJS({})),
            A
          );
        })(),
        io = (() => {
          class A {
            static forRoot(U, Y) {
              return { ngModule: Kt, providers: [...ai(U, Y)] };
            }
            static forFeature(U, Y, de = {}) {
              return { ngModule: ui, providers: [...oo(U, Y, de)] };
            }
          }
          return (
            (A.ɵfac = function (U) {
              return new (U || A)();
            }),
            (A.ɵmod = M.oAB({ type: A })),
            (A.ɵinj = M.cJS({})),
            A
          );
        })();
      function Cr(...A) {
        return { reducer: A.pop(), types: A.map((Y) => Y.type) };
      }
      function Ki(A, ...B) {
        const U = new Map();
        for (const Y of B)
          for (const de of Y.types) {
            const he = U.get(de);
            U.set(de, he ? (He, ut) => Y.reducer(he(He, ut), ut) : Y.reducer);
          }
        return function (Y = A, de) {
          const he = U.get(de.type);
          return he ? he(Y, de) : Y;
        };
      }
    },
  },
  (V) => {
    V((V.s = 4064));
  },
]);
