(function () {
  function jsvm_this_initialization(x) {
    var e = 5;
    x: while (e !== undefined) {
      switch (e % 10) {
        case 0:
          (function (_a_r_g_, a) {
            switch (a) {
              case 0: {
                e = i < 64 ? 70 : 3;
                return;
              }
              case 1: {
                e = i < p ? 6 : 90;
                return;
              }
              case 2: {
                e = i < u ? 31 : 2;
                return;
              }
              case 3: {
                h = -h;
                e = 51;
                return;
              }
              case 4: {
                i += 4;
                e = 60;
                return;
              }
              case 5: {
                b += x.charCodeAt(i);
                e = 1;
                return;
              }
              case 6: {
                e = i < s.length ? 9 : 12;
                return;
              }
              case 7: {
                t[c.charAt(i)] = i;
                e = 91;
                return;
              }
              case 8: {
                e = h == 0 ? 41 : 51;
                return;
              }
              case 9: {
                i = 0;
                e = 60;
                return;
              }
            }
          })(arguments, (e / 10) | 0);
          break;
        case 1:
          (function (_a_r_g_, x) {
            switch (x) {
              case 0: {
                i++;
                e = 11;
                return;
              }
              case 1: {
                e = i < u ? 50 : 7;
                return;
              }
              case 2: {
                i++;
                e = 20;
                return;
              }
              case 3: {
                h = (h * 31 + ~i) >>> 0;
                o[i] = h % u;
                e = 21;
                return;
              }
              case 4: {
                h = 13;
                e = 51;
                return;
              }
              case 5: {
                i = 0;
                e = 20;
                return;
              }
              case 6: {
                i += 4;
                e = 10;
                return;
              }
              case 7: {
                i++;
                e = 81;
                return;
              }
              case 8: {
                e = i < u ? 8 : 4;
                return;
              }
              case 9: {
                i++;
                e = 0;
                return;
              }
            }
          })(arguments, (e / 10) | 0);
          break;
        case 2:
          (function (_a_r_g_, x) {
            switch (x) {
              case 0: {
                i = 0;
                e = 81;
                return;
              }
              case 1: {
                jsvm_this_sdata = n.join('|');
                e = undefined;
                break;
              }
            }
          })(arguments, (e / 10) | 0);
          break;
        case 3: {
          var a = n.pop();
          p = a.length;
          jsvm_this_insns = [];
          i = 0;
          e = 10;
          break;
        }
        case 4: {
          x = n.join('');
          n = x.split('|');
          var s = n.pop();
          var c = n.pop();
          var t = {};
          i = 0;
          e = 0;
          break;
        }
        case 5: {
          var n = x.split('');
          var u = n.length;
          var i;
          var p;
          var o = [];
          var b = 0;
          i = 0;
          e = 11;
          break;
        }
        case 6: {
          var f =
            (t[a.charAt(i + 0)] << 18) |
            (t[a.charAt(i + 1)] << 12) |
            (t[a.charAt(i + 2)] << 6) |
            t[a.charAt(i + 3)];
          jsvm_this_insns.push(f);
          e = 61;
          break;
        }
        case 7: {
          var h = ~(b * u);
          e = h < 0 ? 30 : 80;
          break;
        }
        case 8: {
          var r = o[i];
          var _ = n[r];
          n[r] = n[0];
          n[0] = _;
          e = 71;
          break;
        }
        case 9: {
          var f =
            (t[s.charAt(i + 0)] << 18) |
            (t[s.charAt(i + 1)] << 12) |
            (t[s.charAt(i + 2)] << 6) |
            t[s.charAt(i + 3)];
          jsvm_this_entrances.push(f);
          e = 40;
          break;
        }
      }
    }
  }
  function jsvm_this_run(x, e) {
    function decimalToHex(x, e) {
      var a = 1;
      x: while (a !== undefined) {
        switch (a % 3) {
          case 0:
            (function (_a_r_g_, x) {
              switch (x) {
                case 0: {
                  a = s.length < e ? 3 : 2;
                  return;
                }
                case 1: {
                  s = '0' + s;
                  a = 0;
                  return;
                }
              }
            })(arguments, (a / 3) | 0);
            break;
          case 1: {
            var s = (+x).toString(16);
            e = e || 2;
            a = 0;
            break;
          }
          case 2: {
            return s;
          }
        }
      }
    }
    function loaddata(x) {
      return s[x];
    }
    function storedata(x, e) {
      s[x] = e;
    }
    var a = 3;
    x: while (a !== undefined) {
      switch (a % 7) {
        case 0:
          (function (_a_r_g_, x) {
            switch (x) {
              case 0: {
                a = 35;
                return;
              }
              case 1: {
                _ = false;
                a = h > jsvm_this_insns.length ? 2 : 6;
                return;
              }
              case 2: {
                h += X + 1;
                a = 28;
                return;
              }
              case 3: {
                a = h === undefined ? 1 : 15;
                return;
              }
              case 4: {
                a = 1 ? 7 : 35;
                return;
              }
              case 5: {
                a = undefined;
                break;
              }
              case 6: {
                c = jsvm_this_entrances[e];
                t = [];
                n = [undefined];
                u = [];
                a = 8;
                return;
              }
            }
          })(arguments, (a / 7) | 0);
          break;
        case 1:
          (function (_a_r_g_, x) {
            switch (x) {
              case 0: {
                a = 35;
                return;
              }
              case 1: {
                a = 0 ? 22 : 5;
                return;
              }
              case 2: {
                a = _ === false ? 14 : 28;
                return;
              }
              case 3: {
                s = jsvm_this_sdata.split('\t');
                i = 0;
                a = 29;
                return;
              }
              case 4: {
                a = i < s.length ? 4 : 42;
                return;
              }
              case 5: {
                i++;
                a = 29;
                return;
              }
            }
          })(arguments, (a / 7) | 0);
          break;
        case 2: {
          return;
        }
        case 3: {
          var s, c, t, n, u, i, p, o, b, f;
          a = 22;
          break;
        }
        case 4: {
          try {
            {
              s[i] = x(s[i]);
            }
          } catch (x) {
            s[i] = undefined;
          }
          a = 36;
          break;
        }
        case 5: {
          var h;
          var _;
          var d;
          var v;
          var V = 0;
          var L = 0;
          var k = [];
          var m = [];
          var j = true;
          v = [undefined];
          h = c - 1;
          d = 0;
          a = 7;
          break;
        }
        case 6: {
          var A;
          var T, I;
          var g, W, w, H, E, C, Y;
          var X = 0;
          T = jsvm_this_insns[h];
          var G = 2971014498;
          var y = 0;
          var q = 0;
          var P = 0;
          A = T & 511;
          switch (A) {
            case 1:
            case 65:
            case 129:
            case 193:
            case 257:
            case 321:
            case 385:
            case 449:
              g = (T >> 6) & 1;
              g |= ((T >> 22) & 1) << 1;
              g |= ((T >> 7) & 1) << 2;
              g |= ((T >> 19) & 1) << 3;
              g |= ((T >> 8) & 1) << 4;
              t[0] = t[g];
              L = 3 + V;
              break;
            case 31:
            case 95:
            case 159:
            case 223:
            case 287:
            case 351:
            case 415:
            case 479:
              g = (T >> 6) & 31;
              W = (T >> 11) & 3;
              W |= ((T >> 14) & 1) << 2;
              W |= ((T >> 23) & 1) << 3;
              W |= ((T >> 17) & 1) << 4;
              w = (T >> 13) & 1;
              y = (G & 1) + 2;
              q = (G + 61097) & 1;
              P = y * 2 + q;
              P = P * (y * 1 + q);
              w |= ((T >> P) & 3) << 1;
              w |= ((T >> 20) & 1) << 3;
              w |= ((T >> 18) & 1) << 4;
              t[g] = loaddata(t[W] + t[w]);
              break;
            case 16:
            case 80:
            case 144:
            case 208:
            case 272:
            case 336:
            case 400:
            case 464:
              g = (T >> 6) & 7;
              g |= ((T >> 20) & 1) << 3;
              G |= 4682;
              y = (G & 1) + 2;
              q = (G + 43471) & 1;
              P = y * 1 + q;
              P = P * (y * 1 + q);
              g |= ((T >> P) & 1) << 4;
              W = (T >> 10) & 15;
              W |= ((T >> 16) & 1) << 4;
              w = (T >> 18) & 1;
              G |= 112270;
              y = (G & 1) + 2;
              q = (G + 31363) & 1;
              P = y * 3 + q;
              P = P * (y * 1);
              w |= ((T >> P) & 3) << 1;
              w |= ((T >> 17) & 1) << 3;
              w |= ((T >> 19) & 1) << 4;
              t[g] = t[W] >> t[w];
              break;
            case 48:
            case 112:
            case 176:
            case 240:
            case 304:
            case 368:
            case 432:
            case 496:
              X = 1;
              I = jsvm_this_insns[h + 1];
              y = (G & 1) + 2;
              q = (G + 58023) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g = (T >> P) & 15;
              g |= ((I >> 9) & 1) << 4;
              g |= ((I >> 3) & 1) << 5;
              y = (G & 1) + 2;
              q = (G + 24065) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              g |= ((T >> P) & 3) << 6;
              g |= ((I >> 13) & 1) << 8;
              y = (G & 1) + 2;
              q = (G + 58115) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              g |= ((I >> P) & 1) << 9;
              g |= ((T >> 12) & 3) << 10;
              g |= (I & 1) << 12;
              G |= 42148;
              y = (G & 1) + 2;
              q = (G + 11087) & 1;
              P = y * 3 + q;
              P = P * (y * 1);
              g |= ((T >> P) & 3) << 13;
              y = (G & 1) + 2;
              q = (G + 31789) & 1;
              P = y - q;
              g |= ((I >> P) & 1) << 15;
              y = (G & 1) + 2;
              q = (G + 63737) & 1;
              P = y * 3 + q;
              P = P * (y * 1 + q);
              W = (I >> P) & 1;
              W |= ((T >> 16) & 3) << 1;
              W |= ((I >> 5) & 1) << 3;
              W |= ((T >> 18) & 1) << 4;
              w = (T >> 19) & 7;
              G += 118486;
              y = (G & 1) + 2;
              q = (G + 33941) & 1;
              P = y * 9 + q;
              w |= ((I >> P) & 1) << 3;
              w |= ((T >> 22) & 3) << 4;
              q = (G + 12181) & 1;
              y = (G + 31251) & 1;
              P = y + q;
              w |= ((I >> P) & 1) << 6;
              w |= ((I >> 4) & 1) << 7;
              y = (G & 1) + 2;
              q = (G + 40115) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              w |= ((I >> P) & 1) << 8;
              w |= ((I >> 18) & 1) << 9;
              G += 10792;
              y = (G & 1) + 2;
              q = (G + 34653) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              w |= ((I >> P) & 1) << 10;
              w |= ((I >> 7) & 1) << 11;
              y = (G & 1) + 2;
              q = (G + 1449) & 1;
              P = y * 5 + q;
              w |= ((I >> P) & 3) << 12;
              w |= ((I >> 14) & 3) << 14;
              storedata(g + w, t[W]);
              break;
            case 8:
            case 72:
            case 136:
            case 200:
            case 264:
            case 328:
            case 392:
            case 456:
              g = (T >> 6) & 31;
              W = (T >> 11) & 31;
              w = (T >> 16) & 3;
              w |= ((T >> 21) & 1) << 2;
              y = (G & 1) + 2;
              q = (G + 30767) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1 + q);
              w |= ((T >> P) & 3) << 3;
              t[g] = t[W] < t[w];
              break;
            case 24:
            case 88:
            case 152:
            case 216:
            case 280:
            case 344:
            case 408:
            case 472:
              g = (T >> 6) & 31;
              W = (T >> 11) & 3;
              W |= ((T >> 22) & 3) << 2;
              G |= 85248;
              y = (G & 1) + 2;
              q = (G + 55989) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((T >> P) & 1) << 4;
              w = (T >> 13) & 7;
              w |= ((T >> 17) & 3) << 3;
              t[g] = t[W] > t[w];
              break;
            case 32:
            case 96:
            case 160:
            case 224:
            case 288:
            case 352:
            case 416:
            case 480:
              X = 1;
              I = jsvm_this_insns[h + 1];
              G += 118190;
              G |= 50972;
              y = (G & 1) + 2;
              q = (G + 40981) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g = (T >> P) & 7;
              G += 78128;
              G |= 57514;
              y = (G & 1) + 2;
              q = (G + 63861) & 1;
              P = y * 8 + q;
              g |= ((T >> P) & 1) << 3;
              g |= ((T >> 9) & 1) << 4;
              W = (T >> 10) & 3;
              W |= ((I >> 9) & 1) << 2;
              y = (G & 1) + 2;
              q = (G + 3397) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((T >> P) & 3) << 3;
              w = (T >> 14) & 7;
              G <<= 6;
              y = (G & 1) + 2;
              q = (G + 23783) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1 + q);
              w |= ((T >> P) & 3) << 3;
              w |= ((I >> 1) & 1) << 5;
              G |= 93010;
              y = (G & 1) + 2;
              q = (G + 43975) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              w |= ((T >> P) & 15) << 6;
              w |= (I & 1) << 10;
              w |= ((I >> 2) & 31) << 11;
              storedata(t[g] + w, t[W]);
              break;
            case 56:
            case 120:
            case 184:
            case 248:
            case 312:
            case 376:
            case 440:
            case 504:
              y = (G & 1) + 2;
              q = (G + 25879) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g = (T >> P) & 1;
              y = (G & 1) + 2;
              q = (G + 14651) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1 + q);
              g |= ((T >> P) & 1) << 1;
              g |= ((T >> 7) & 7) << 2;
              G |= 45326;
              y = (G & 1) + 2;
              q = (G + 11371) & 1;
              P = y * 5 + q;
              W = (T >> P) & 1;
              G |= 77978;
              y = (G & 1) + 2;
              q = (G + 17375) & 1;
              P = y * 2 + q;
              P = P * (y * 1 + q);
              W |= ((T >> P) & 1) << 1;
              W |= ((T >> 10) & 1) << 2;
              G |= 48016;
              y = (G & 1) + 2;
              q = (G + 33165) & 1;
              P = y * 11 + q;
              W |= ((T >> P) & 1) << 3;
              y = (G & 1) + 2;
              q = (G + 47653) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((T >> P) & 1) << 4;
              w = (T >> 13) & 3;
              w |= ((T >> 16) & 3) << 2;
              w |= ((T >> 19) & 1) << 4;
              t[g] = t[W] && t[w];
              break;
            case 4:
            case 68:
            case 132:
            case 196:
            case 260:
            case 324:
            case 388:
            case 452:
              y = (G & 1) + 2;
              q = (G + 55017) & 1;
              P = y * 3 + q;
              P = P * (y * 1 + q);
              g = (T >> P) & 1;
              g |= ((T >> 6) & 7) << 1;
              g |= ((T >> 16) & 1) << 4;
              W = (T >> 9) & 31;
              w = (T >> 14) & 3;
              w |= ((T >> 17) & 7) << 2;
              t[g] = t[W] >= t[w];
              break;
            case 36:
            case 100:
            case 164:
            case 228:
            case 292:
            case 356:
            case 420:
            case 484:
              g = (T >> 18) & 3;
              G += 5840;
              G |= 123444;
              y = (G & 1) + 2;
              q = (G + 34843) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g |= ((T >> P) & 7) << 2;
              W = (T >> 9) & 1;
              W |= ((T >> 11) & 1) << 1;
              W |= ((T >> 10) & 1) << 2;
              W |= ((T >> 12) & 3) << 3;
              w = (T >> 14) & 15;
              w |= ((T >> 20) & 1) << 4;
              t[g] = t[W] <= t[w];
              break;
            case 20:
            case 84:
            case 148:
            case 212:
            case 276:
            case 340:
            case 404:
            case 468:
              X = 1;
              I = jsvm_this_insns[h + 1];
              g = (I >> 4) & 1;
              g |= ((T >> 6) & 7) << 1;
              g |= ((T >> 17) & 1) << 4;
              G += 32332;
              y = (G & 1) + 2;
              q = (G + 45315) & 1;
              P = y * 5 + q;
              P = P * (y * 1);
              W = (I >> P) & 1;
              W |= ((I >> 15) & 1) << 1;
              W |= ((T >> 9) & 7) << 2;
              w = (T >> 12) & 31;
              H = (T >> 18) & 31;
              t[g] = n.pop();
              u.push(t[g]);
              t[W] = n.pop();
              u.push(t[W]);
              t[w] = n.pop();
              u.push(t[w]);
              t[H] = n.pop();
              u.push(t[H]);
              break;
            case 40:
            case 104:
            case 168:
            case 232:
            case 296:
            case 360:
            case 424:
            case 488:
              g = (T >> 6) & 31;
              G |= 55240;
              y = (G & 1) + 2;
              q = (G + 4311) & 1;
              P = y * 5 + q;
              W = (T >> P) & 1;
              W |= ((T >> 22) & 1) << 1;
              W |= ((T >> 16) & 1) << 2;
              y = (G & 1) + 2;
              q = (G + 34381) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((T >> P) & 3) << 3;
              w = (T >> 14) & 3;
              w |= ((T >> 17) & 7) << 2;
              t[g] = t[W] || t[w];
              break;
            case 12:
            case 28:
            case 140:
            case 156:
            case 268:
            case 284:
            case 396:
            case 412:
              g = (T >> 14) & 1;
              y = (G & 1) + 2;
              q = (G + 35371) & 1;
              P = y * 1;
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 1;
              g |= ((T >> 7) & 7) << 2;
              t[g] = [];
              break;
            case 44:
            case 60:
            case 172:
            case 188:
            case 300:
            case 316:
            case 428:
            case 444:
              g = (T >> 4) & 1;
              g |= ((T >> 12) & 1) << 1;
              y = (G & 1) + 2;
              q = (G + 26495) & 1;
              P = y * 3 + q;
              g |= ((T >> P) & 7) << 2;
              y = (G & 1) + 2;
              q = (G + 6941) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              W = (T >> P) & 3;
              W |= ((T >> 17) & 1) << 2;
              W |= ((T >> 13) & 3) << 3;
              w = (T >> 15) & 3;
              y = (G & 1) + 2;
              q = (G + 35393) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1 + q);
              w |= ((T >> P) & 1) << 2;
              w |= ((T >> 21) & 3) << 3;
              t[g] = t[W] in t[w];
              break;
            case 76:
            case 92:
            case 108:
            case 124:
            case 204:
            case 220:
            case 236:
            case 252:
              g = (T >> 4) & 3;
              g |= ((T >> 13) & 1) << 2;
              g |= ((T >> 7) & 1) << 3;
              g |= ((T >> 14) & 1) << 4;
              W = (T >> 9) & 15;
              W |= ((T >> 17) & 1) << 4;
              w = (T >> 15) & 3;
              w |= ((T >> 18) & 7) << 2;
              t[g] = t[W] === t[w];
              break;
            case 52:
            case 116:
            case 180:
            case 244:
            case 308:
            case 372:
            case 436:
            case 500:
              G += 97396;
              y = (G & 1) + 2;
              q = (G + 8063) & 1;
              P = y * 6 + q;
              g = (T >> P) & 1;
              g |= ((T >> 6) & 15) << 1;
              W = (T >> 23) & 1;
              y = (G & 1) + 2;
              q = (G + 49541) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              W |= ((T >> P) & 7) << 1;
              W |= ((T >> 16) & 1) << 4;
              w = (T >> 14) & 3;
              w |= ((T >> 17) & 7) << 2;
              t[g] = t[W] != t[w];
              break;
            case 332:
            case 348:
            case 364:
            case 380:
            case 460:
            case 476:
            case 492:
            case 508:
              g = (T >> 4) & 1;
              g |= ((T >> 15) & 1) << 1;
              g |= ((T >> 5) & 1) << 2;
              g |= ((T >> 11) & 1) << 3;
              g |= ((T >> 20) & 1) << 4;
              W = (T >> 7) & 1;
              W |= ((T >> 9) & 3) << 1;
              W |= ((T >> 12) & 1) << 3;
              y = (G & 1) + 2;
              q = (G + 3403) & 1;
              P = y * 11 + q;
              W |= ((T >> P) & 1) << 4;
              w = (T >> 13) & 1;
              w |= ((T >> 17) & 3) << 1;
              w |= ((T >> 14) & 1) << 3;
              w |= ((T >> 19) & 1) << 4;
              t[g] = t[W] !== t[w];
              break;
            case 2:
            case 6:
            case 34:
            case 38:
            case 258:
            case 262:
            case 290:
            case 294:
              X = 1;
              I = jsvm_this_insns[h + 1];
              g = (T >> 2) & 1;
              g |= ((T >> 5) & 1) << 1;
              G += 27364;
              y = (G & 1) + 2;
              q = (G + 49989) & 1;
              P = y * 9 + q;
              g |= ((I >> P) & 1) << 2;
              g |= ((I >> 6) & 1) << 3;
              g |= ((T >> 8) & 1) << 4;
              W = (T >> 9) & 1;
              G |= 14314;
              y = (G & 1) + 2;
              q = (G + 32075) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((I >> P) & 1) << 1;
              W |= ((T >> 10) & 3) << 2;
              W |= ((I >> 7) & 1) << 4;
              y = (G & 1) + 2;
              q = (G + 23927) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              P = P * (y * 1);
              w = (T >> P) & 1;
              y = (G & 1) + 2;
              q = (G + 39943) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              w |= ((T >> P) & 7) << 1;
              w |= ((I >> 0) & 1) << 4;
              H = (I >> 14) & 1;
              H |= ((T >> 15) & 1) << 1;
              H |= ((T >> 17) & 1) << 2;
              H |= ((I >> 21) & 1) << 3;
              y = (G & 1) + 2;
              q = (G + 34437) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1 + q);
              H |= ((T >> P) & 1) << 4;
              try {
                if (W === 31) {
                  t[g] = t[w](t[H]);
                } else {
                  t[g] = t[W][t[w]](t[H]);
                }
              } catch (x) {
                _ = true;
                h = v.pop();
                if (h == undefined) {
                  break;
                }
                if (h === -1) {
                  h = v.pop();
                }
                if (V === 2) {
                  V = v.pop();
                  h = v.pop();
                  if (h === -1) {
                    n.pop();
                    h = v.pop();
                  }
                }
                L = 3 + V;
                V = (V + 1) % 3;
                t[0] = x;
              }
              break;
            case 66:
            case 70:
            case 98:
            case 102:
            case 322:
            case 326:
            case 354:
            case 358:
              g = (T >> 2) & 1;
              g |= ((T >> 5) & 1) << 1;
              g |= ((T >> 8) & 7) << 2;
              W = (T >> 14) & 1;
              G += 1830;
              y = (G & 1) + 2;
              q = (G + 25763) & 1;
              P = y * 5 + q;
              W |= ((T >> P) & 7) << 1;
              W |= ((T >> 15) & 1) << 4;
              w = (T >> 16) & 31;
              try {
                if (W === 31) {
                  t[g] = t[w]();
                } else {
                  t[g] = t[W][t[w]]();
                }
              } catch (x) {
                _ = true;
                h = v.pop();
                if (h == undefined) {
                  break;
                }
                if (h === -1) {
                  h = v.pop();
                }
                if (V === 2) {
                  V = v.pop();
                  h = v.pop();
                  if (h === -1) {
                    n.pop();
                    h = v.pop();
                  }
                }
                L = 3 + V;
                V = (V + 1) % 3;
                t[0] = x;
              }
              break;
            case 130:
            case 134:
            case 162:
            case 166:
            case 386:
            case 390:
            case 418:
            case 422:
              X = 1;
              I = jsvm_this_insns[h + 1];
              g = (T >> 2) & 1;
              g |= ((T >> 5) & 1) << 1;
              g |= ((T >> 8) & 1) << 2;
              g |= ((I >> 9) & 1) << 3;
              g |= ((T >> 9) & 1) << 4;
              W = (T >> 10) & 7;
              W |= ((I >> 13) & 1) << 3;
              W |= ((T >> 13) & 1) << 4;
              w = (T >> 20) & 1;
              w |= ((T >> 14) & 3) << 1;
              w |= ((I >> 12) & 1) << 3;
              w |= ((T >> 16) & 1) << 4;
              H = (T >> 17) & 7;
              y = (G & 1) + 2;
              q = (G + 7559) & 1;
              P = y * 3 + q;
              P = P * (y * 1 + q);
              H |= ((T >> P) & 1) << 3;
              H |= ((I >> 18) & 1) << 4;
              G <<= 2;
              y = (G & 1) + 2;
              q = (G + 52923) & 1;
              P = y * 5 + q;
              P = P * (y * 1);
              E = (T >> P) & 3;
              E |= (I & 1) << 2;
              G <<= 6;
              G |= 11318;
              y = (G & 1) + 2;
              q = (G + 54567) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              E |= ((I >> P) & 1) << 3;
              G <<= 8;
              y = (G & 1) + 2;
              q = (G + 2765) & 1;
              P = y - q;
              E |= ((I >> P) & 1) << 4;
              try {
                if (W === 31) {
                  t[g] = t[w](t[H], t[E]);
                } else {
                  t[g] = t[W][t[w]](t[H], t[E]);
                }
              } catch (x) {
                _ = true;
                h = v.pop();
                if (h == undefined) {
                  break;
                }
                if (h === -1) {
                  h = v.pop();
                }
                if (V === 2) {
                  V = v.pop();
                  h = v.pop();
                  if (h === -1) {
                    n.pop();
                    h = v.pop();
                  }
                }
                L = 3 + V;
                V = (V + 1) % 3;
                t[0] = x;
              }
              break;
            case 194:
            case 198:
            case 226:
            case 230:
            case 450:
            case 454:
            case 482:
            case 486:
              X = 1;
              I = jsvm_this_insns[h + 1];
              g = (T >> 2) & 1;
              y = (G & 1) + 2;
              q = (G + 39911) & 1;
              P = y * 2 + q;
              g |= ((T >> P) & 1) << 1;
              g |= ((T >> 8) & 3) << 2;
              g |= ((T >> 12) & 1) << 4;
              W = (T >> 10) & 3;
              W |= ((T >> 13) & 7) << 2;
              w = (T >> 16) & 31;
              y = (G & 1) + 2;
              q = (G + 16547) & 1;
              P = y * 3 + q;
              P = P * (y * 1 + q);
              H = (T >> P) & 3;
              y = (G & 1) + 2;
              q = (G + 25359) & 1;
              P = y * 3 + q;
              H |= ((I >> P) & 1) << 2;
              H |= ((I >> 1) & 1) << 3;
              H |= ((I >> 6) & 1) << 4;
              y = (G & 1) + 2;
              q = (G + 33829) & 1;
              P = y * 1;
              P = P * (y * 1);
              E = (I >> P) & 1;
              G |= 88874;
              y = (G & 1) + 2;
              q = (G + 6357) & 1;
              P = y * 11 + q;
              E |= ((T >> P) & 1) << 1;
              E |= ((I >> 16) & 1) << 2;
              E |= ((I >> 9) & 1) << 3;
              E |= ((I >> 0) & 1) << 4;
              C = (I >> 21) & 1;
              C |= ((I >> 2) & 3) << 1;
              C |= ((I >> 19) & 1) << 3;
              C |= ((I >> 5) & 1) << 4;
              try {
                if (W === 31) {
                  t[g] = t[w](t[H], t[E], t[C]);
                } else {
                  t[g] = t[W][t[w]](t[H], t[E], t[C]);
                }
              } catch (x) {
                _ = true;
                h = v.pop();
                if (h == undefined) {
                  break;
                }
                if (h === -1) {
                  h = v.pop();
                }
                if (V === 2) {
                  V = v.pop();
                  h = v.pop();
                  if (h === -1) {
                    n.pop();
                    h = v.pop();
                  }
                }
                L = 3 + V;
                V = (V + 1) % 3;
                t[0] = x;
              }
              break;
            case 10:
            case 14:
            case 42:
            case 46:
            case 138:
            case 142:
            case 170:
            case 174:
              g = (T >> 12) & 1;
              g |= ((T >> 7) & 1) << 1;
              g |= ((T >> 2) & 1) << 2;
              g |= ((T >> 5) & 1) << 3;
              g |= ((T >> 9) & 1) << 4;
              W = (T >> 10) & 3;
              W |= ((T >> 13) & 7) << 2;
              d += 2;
              n.push(t[g]);
              n.push(t[W]);
              break;
            case 266:
            case 270:
            case 298:
            case 302:
            case 394:
            case 398:
            case 426:
            case 430:
              G |= 4404;
              q = (G + 39391) & 1;
              y = (G + 35531) & 1;
              P = y + q;
              g = (T >> P) & 1;
              g |= ((T >> 5) & 1) << 1;
              y = (G & 1) + 2;
              q = (G + 36903) & 1;
              P = y * 11 + q;
              g |= ((T >> P) & 1) << 2;
              g |= ((T >> 7) & 1) << 3;
              G <<= 3;
              G |= 124312;
              y = (G & 1) + 2;
              q = (G + 5833) & 1;
              P = y * 1 + q;
              P = P * (y * 1 + q);
              g |= ((T >> P) & 1) << 4;
              W = (T >> 19) & 1;
              y = (G & 1) + 2;
              q = (G + 51457) & 1;
              P = y * 5 + q;
              W |= ((T >> P) & 1) << 1;
              W |= ((T >> 10) & 1) << 2;
              W |= ((T >> 16) & 1) << 3;
              W |= ((T >> 12) & 1) << 4;
              w = (T >> 13) & 7;
              y = (G & 1) + 2;
              q = (G + 21571) & 1;
              P = y * 8 + q;
              w |= ((T >> P) & 3) << 3;
              d += 3;
              n.push(t[g]);
              n.push(t[W]);
              n.push(t[w]);
              break;
            case 74:
            case 78:
            case 202:
            case 206:
            case 330:
            case 334:
            case 458:
            case 462:
              g = (T >> 23) & 1;
              q = (G + 11213) & 1;
              y = (G + 12655) & 1;
              P = y + q;
              g |= ((T >> P) & 1) << 1;
              g |= ((T >> 7) & 1) << 2;
              g |= ((T >> 22) & 1) << 3;
              G |= 112188;
              y = (G & 1) + 2;
              q = (G + 54161) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 4;
              d += 1;
              n.push(t[g]);
              break;
            case 106:
            case 110:
            case 234:
            case 238:
            case 362:
            case 366:
            case 490:
            case 494:
              X = 1;
              I = jsvm_this_insns[h + 1];
              G += 116522;
              G |= 36886;
              q = (G + 40635) & 1;
              y = (G + 3545) & 1;
              P = y + q;
              g = (T >> P) & 1;
              g |= ((T >> 21) & 1) << 1;
              g |= ((T >> 7) & 7) << 2;
              W = (T >> 10) & 31;
              w = (T >> 15) & 1;
              w |= ((T >> 19) & 1) << 1;
              G <<= 1;
              y = (G & 1) + 2;
              q = (G + 9365) & 1;
              P = y * 8 + q;
              w |= ((I >> P) & 1) << 2;
              G |= 39812;
              y = (G & 1) + 2;
              q = (G + 1829) & 1;
              P = y * 11 + q;
              w |= ((T >> P) & 1) << 3;
              w |= ((T >> 16) & 1) << 4;
              H = (T >> 17) & 3;
              H |= ((T >> 20) & 1) << 2;
              H |= (I & 1) << 3;
              y = (G & 1) + 2;
              q = (G + 57029) & 1;
              P = y * 5 + q;
              P = P * (y * 1);
              H |= ((T >> P) & 1) << 4;
              E = (I >> 1) & 3;
              y = (G & 1) + 2;
              q = (G + 37423) & 1;
              P = y * 11 + q;
              E |= ((I >> P) & 1) << 2;
              E |= ((I >> 13) & 1) << 3;
              E |= ((I >> 11) & 1) << 4;
              y = (G & 1) + 2;
              q = (G + 55517) & 1;
              P = y * 1 + q;
              C = (I >> P) & 31;
              Y = (I >> 15) & 1;
              Y |= ((I >> 8) & 3) << 1;
              Y |= ((I >> 14) & 1) << 3;
              Y |= ((I >> 10) & 1) << 4;
              try {
                if (d === 0) {
                  if (W === 31) {
                    t[g] = t[w](t[H], t[E], t[C], t[Y]);
                  } else {
                    t[g] = t[W][t[w]](t[H], t[E], t[C], t[Y]);
                  }
                } else {
                  o = [];
                  if (W == 31) {
                    b = undefined;
                  } else {
                    b = t[W];
                  }
                  o.push(t[H]);
                  o.push(t[E]);
                  o.push(t[C]);
                  o.push(t[Y]);
                  f = [];
                  for (i = 0; i < d; i++) {
                    f.push(n.pop());
                  }
                  for (i = 0; i < d; i++) {
                    o.push(f.pop());
                  }
                  if (W == 31) {
                    t[g] = t[w].apply(b, o);
                  } else {
                    t[g] = b[t[w]].apply(b, o);
                  }
                  d = 0;
                }
              } catch (x) {
                _ = true;
                h = v.pop();
                if (h == undefined) {
                  break;
                }
                if (h === -1) {
                  h = v.pop();
                }
                if (V === 2) {
                  V = v.pop();
                  h = v.pop();
                  if (h === -1) {
                    n.pop();
                    h = v.pop();
                  }
                }
                L = 3 + V;
                V = (V + 1) % 3;
                t[0] = x;
              }
              break;
            case 18:
            case 82:
            case 146:
            case 210:
            case 274:
            case 338:
            case 402:
            case 466:
              X = 1;
              I = jsvm_this_insns[h + 1];
              y = (G & 1) + 2;
              q = (G + 3729) & 1;
              P = y * 1 + q;
              P = P * (y * 1 + q);
              g = (T >> P) & 1;
              g |= ((T >> 6) & 7) << 1;
              y = (G & 1) + 2;
              q = (G + 23287) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              g |= ((T >> P) & 127) << 4;
              g |= ((I >> 22) & 1) << 11;
              g |= ((T >> 17) & 3) << 12;
              G |= 60986;
              y = (G & 1) + 2;
              q = (G + 63647) & 1;
              P = y * 1;
              P = P * (y * 1);
              g |= ((I >> P) & 1) << 14;
              g |= ((I >> 21) & 1) << 15;
              y = (G & 1) + 2;
              q = (G + 62735) & 1;
              P = y * 9 + q;
              W = (T >> P) & 1;
              W |= ((I >> 16) & 1) << 1;
              W |= ((I >> 23) & 1) << 2;
              W |= ((T >> 20) & 3) << 3;
              G |= 130762;
              y = (G & 1) + 2;
              q = (G + 42295) & 1;
              P = y * 5 + q;
              P = P * (y * 1);
              w = (T >> P) & 3;
              w |= ((I >> 0) & 7) << 2;
              storedata(g + t[w], t[W]);
              break;
            case 22:
            case 86:
            case 150:
            case 214:
            case 278:
            case 342:
            case 406:
            case 470:
              g = (T >> 6) & 15;
              g |= ((T >> 14) & 1) << 4;
              G |= 102976;
              y = (G & 1) + 2;
              q = (G + 50439) & 1;
              P = y * 2 + q;
              P = P * (y * 1 + q);
              W = (T >> P) & 1;
              W |= ((T >> 10) & 15) << 1;
              w = (T >> 16) & 7;
              w |= ((T >> 22) & 1) << 3;
              w |= ((T >> 19) & 1) << 4;
              storedata(t[g] + t[w], t[W]);
              break;
            case 154:
            case 158:
            case 218:
            case 222:
            case 410:
            case 414:
            case 474:
            case 478:
              g = (T >> 2) & 1;
              g |= ((T >> 14) & 1) << 1;
              y = (G & 1) + 2;
              q = (G + 38665) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 2;
              g |= ((T >> 8) & 1) << 3;
              g |= ((T >> 20) & 1) << 4;
              W = (T >> 9) & 15;
              W |= ((T >> 23) & 1) << 4;
              t[g] = !t[W];
              break;
            case 50:
            case 54:
            case 58:
            case 62:
            case 114:
            case 118:
            case 122:
            case 126:
            case 178:
            case 182:
            case 186:
            case 190:
            case 242:
            case 246:
            case 250:
            case 254:
            case 306:
            case 310:
            case 314:
            case 318:
            case 370:
            case 374:
            case 378:
            case 382:
            case 434:
            case 438:
            case 442:
            case 446:
            case 498:
            case 502:
            case 506:
            case 510:
              if ((T & 2396164) == 2097156) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                g = (T >> 3) & 1;
                y = (G & 1) + 2;
                q = (G + 64167) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                g |= ((T >> P) & 1) << 1;
                g |= (I & 1) << 2;
                g |= ((I >> 16) & 1) << 3;
                g |= ((T >> 7) & 1) << 4;
                G |= 78110;
                y = (G & 1) + 2;
                q = (G + 54511) & 1;
                P = y * 1;
                P = P * (y * 1);
                P = P * (y * 1);
                W = (T >> P) & 3;
                y = (G & 1) + 2;
                q = (G + 28939) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                P = P * (y * 1);
                W |= ((I >> P) & 1) << 2;
                W |= ((I >> 11) & 1) << 3;
                G |= 57926;
                y = (G & 1) + 2;
                q = (G + 17235) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                W |= ((T >> P) & 1) << 4;
                w = (T >> 11) & 1;
                w |= ((T >> 13) & 3) << 1;
                w |= ((T >> 16) & 3) << 3;
                t[g] = t[W] ^ t[w];
              } else if ((T & 659460) == 135172) {
                I = jsvm_this_insns[h + 1];
                if (!(I & 2)) {
                  X = 1;
                  g = (T >> 3) & 1;
                  g |= ((T >> 6) & 3) << 1;
                  g |= ((I >> 3) & 1) << 3;
                  g |= ((T >> 8) & 1) << 4;
                  g |= (I & 1) << 5;
                  g |= ((T >> 9) & 1) << 6;
                  g |= ((I >> 19) & 1) << 7;
                  g |= ((T >> 10) & 3) << 8;
                  G <<= 6;
                  y = (G & 1) + 2;
                  q = (G + 20623) & 1;
                  P = y * 1 + q;
                  P = P * (y * 1);
                  g |= ((I >> P) & 1) << 10;
                  g |= ((T >> 14) & 7) << 11;
                  y = (G & 1) + 2;
                  q = (G + 42189) & 1;
                  P = y * 2 + q;
                  g |= ((I >> P) & 1) << 14;
                  y = (G & 1) + 2;
                  q = (G + 26693) & 1;
                  P = y * 1 + q;
                  P = P * (y * 1 + q);
                  g |= ((I >> P) & 1) << 15;
                  y = (G & 1) + 2;
                  q = (G + 63421) & 1;
                  P = y * 2 + q;
                  P = P * (y * 1);
                  P = P * (y * 1);
                  W = (T >> P) & 1;
                  G += 75556;
                  q = (G + 21475) & 1;
                  y = (G + 41519) & 1;
                  P = y + q;
                  W |= ((I >> P) & 1) << 1;
                  W |= ((I >> 16) & 1) << 2;
                  W |= ((T >> 22) & 3) << 3;
                  G |= 61778;
                  y = (G & 1) + 2;
                  q = (G + 12045) & 1;
                  P = y * 3 + q;
                  W |= ((I >> P) & 1) << 5;
                  W |= ((I >> 20) & 1) << 6;
                  W |= ((I >> 10) & 1) << 7;
                  W |= ((I >> 18) & 1) << 8;
                  W |= ((I >> 11) & 31) << 9;
                  W |= ((I >> 17) & 1) << 14;
                  W |= ((I >> 21) & 1) << 15;
                  for (i = 1; i <= W; i++) {
                    storedata(g + W - i, n.pop());
                  }
                } else if ((I & 258) == 258) {
                  X = 1;
                  g = (T >> 3) & 1;
                  y = (G & 1) + 2;
                  q = (G + 62837) & 1;
                  P = y * 1 + q;
                  P = P * (y * 1);
                  g |= ((T >> P) & 1) << 1;
                  g |= ((I >> 18) & 1) << 2;
                  g |= ((T >> 7) & 1) << 3;
                  g |= ((I >> 17) & 1) << 4;
                  G |= 46486;
                  y = (G & 1) + 2;
                  q = (G + 50585) & 1;
                  P = y * 1;
                  P = P * (y * 1);
                  P = P * (y * 1);
                  W = (T >> P) & 7;
                  W |= ((I >> 15) & 1) << 3;
                  W |= ((T >> 11) & 1) << 4;
                  y = (G & 1) + 2;
                  q = (G + 28701) & 1;
                  P = y * 3 + q;
                  P = P * (y * 1);
                  w = (T >> P) & 3;
                  w |= ((T >> 18) & 1) << 2;
                  G |= 94704;
                  y = (G & 1) + 2;
                  q = (G + 56805) & 1;
                  P = y * 3 + q;
                  w |= ((I >> P) & 1) << 3;
                  y = (G & 1) + 2;
                  q = (G + 50355) & 1;
                  P = y * 3 + q;
                  P = P * (y * 1 + q);
                  w |= ((I >> P) & 1) << 4;
                  try {
                    t[g] = t[W][t[w]];
                  } catch (x) {
                    _ = true;
                    h = v.pop();
                    if (h == undefined) {
                      break;
                    }
                    if (h === -1) {
                      h = v.pop();
                    }
                    if (V === 2) {
                      V = v.pop();
                      h = v.pop();
                      if (h === -1) {
                        n.pop();
                        h = v.pop();
                      }
                    }
                    L = 3 + V;
                    V = (V + 1) % 3;
                    t[0] = x;
                  }
                } else {
                  X = 1;
                  g = (I >> 19) & 1;
                  g |= ((I >> 18) & 1) << 1;
                  g |= ((T >> 15) & 1) << 2;
                  g |= ((T >> 3) & 1) << 3;
                  g |= ((T >> 6) & 1) << 4;
                  W = (T >> 7) & 1;
                  G += 84916;
                  y = (G & 1) + 2;
                  q = (G + 27591) & 1;
                  P = y * 11 + q;
                  W |= ((I >> P) & 1) << 1;
                  W |= ((T >> 8) & 3) << 2;
                  W |= ((I >> 15) & 1) << 4;
                  w = (T >> 10) & 3;
                  w |= ((T >> 21) & 1) << 2;
                  w |= ((T >> 13) & 1) << 3;
                  y = (G & 1) + 2;
                  q = (G + 55809) & 1;
                  P = y * 1;
                  P = P * (y * 1);
                  P = P * (y * 1);
                  P = P * (y * 1);
                  w |= ((T >> P) & 1) << 4;
                  t[g] = t[W] | t[w];
                }
              } else if ((T & 83332) == 1152) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                y = (G & 1) + 2;
                q = (G + 49721) & 1;
                P = y * 1 + q;
                g = (T >> P) & 1;
                g |= ((T >> 11) & 1) << 1;
                y = (G & 1) + 2;
                q = (G + 9603) & 1;
                P = y * 9 + q;
                g |= ((T >> P) & 1) << 2;
                g |= ((T >> 6) & 1) << 3;
                g |= ((T >> 9) & 1) << 4;
                G <<= 5;
                G += 127182;
                G |= 110644;
                y = (G & 1) + 2;
                q = (G + 46615) & 1;
                P = y * 6 + q;
                W = (I >> P) & 1;
                y = (G & 1) + 2;
                q = (G + 41035) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                P = P * (y * 1);
                W |= ((T >> P) & 3) << 1;
                W |= ((I >> 18) & 1) << 3;
                W |= ((T >> 15) & 1) << 4;
                G <<= 8;
                G |= 112140;
                y = (G & 1) + 2;
                q = (G + 9003) & 1;
                P = y * 8 + q;
                w = (T >> P) & 3;
                w |= ((T >> 20) & 3) << 2;
                w |= ((I >> 9) & 1) << 4;
                w |= ((T >> 22) & 3) << 5;
                w |= (I & 1) << 7;
                G |= 106398;
                q = (G + 36037) & 1;
                y = (G + 18709) & 1;
                P = y + q;
                w |= ((I >> P) & 1) << 8;
                w |= ((I >> 17) & 1) << 9;
                G <<= 9;
                y = (G & 1) + 2;
                q = (G + 13773) & 1;
                P = y * 3 + q;
                w |= ((I >> P) & 1) << 10;
                w |= ((I >> 3) & 1) << 11;
                t[g] = t[W][w];
              } else if ((T & 388) == 0) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                g = (I >> 11) & 1;
                g |= ((T >> 11) & 1) << 1;
                G += 29224;
                y = (G & 1) + 2;
                q = (G + 56643) & 1;
                P = y * 1 + q;
                g |= ((T >> P) & 1) << 2;
                g |= ((T >> 20) & 1) << 3;
                g |= ((T >> 6) & 1) << 4;
                G <<= 4;
                G |= 98126;
                y = (G & 1) + 2;
                q = (G + 38293) & 1;
                P = y * 1 + q;
                P = P * (y * 1 + q);
                g |= ((T >> P) & 3) << 5;
                g |= ((I >> 3) & 1) << 7;
                y = (G & 1) + 2;
                q = (G + 13327) & 1;
                P = y * 3 + q;
                P = P * (y * 1);
                g |= ((T >> P) & 1) << 8;
                G |= 81704;
                y = (G & 1) + 2;
                q = (G + 24481) & 1;
                P = y * 6 + q;
                g |= ((T >> P) & 1) << 9;
                G |= 9006;
                y = (G & 1) + 2;
                q = (G + 58869) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                P = P * (y * 1);
                g |= ((T >> P) & 1) << 10;
                g |= ((T >> 15) & 1) << 11;
                g |= ((I >> 17) & 1) << 12;
                g |= ((T >> 16) & 7) << 13;
                W = (T >> 19) & 1;
                W |= ((T >> 21) & 7) << 1;
                G |= 70902;
                y = (G & 1) + 2;
                q = (G + 19659) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                W |= ((I >> P) & 1) << 4;
                y = (G & 1) + 2;
                q = (G + 18357) & 1;
                P = y * 1;
                P = P * (y * 1);
                W |= ((I >> P) & 1) << 5;
                W |= (I & 1) << 6;
                W |= ((I >> 5) & 1) << 7;
                W |= ((I >> 9) & 1) << 8;
                W |= ((I >> 1) & 3) << 9;
                W |= ((I >> 6) & 1) << 11;
                W |= ((I >> 12) & 1) << 12;
                W |= ((I >> 7) & 3) << 13;
                G += 43564;
                G |= 88342;
                y = (G & 1) + 2;
                q = (G + 45001) & 1;
                P = y * 6 + q;
                W |= ((I >> P) & 1) << 15;
                for (i = 0; i < W; i++) {
                  n.push(loaddata(g + i));
                }
              } else if ((T & 18820) == 18560) {
                g = (T >> 3) & 1;
                g |= ((T >> 13) & 1) << 1;
                g |= ((T >> 18) & 1) << 2;
                y = (G & 1) + 2;
                q = (G + 36989) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                P = P * (y * 1);
                g |= ((T >> P) & 1) << 3;
                y = (G & 1) + 2;
                q = (G + 57255) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                g |= ((T >> P) & 1) << 4;
                W = (T >> 16) & 1;
                G <<= 8;
                y = (G & 1) + 2;
                q = (G + 52549) & 1;
                P = y * 1 + q;
                P = P * (y * 1 + q);
                W |= ((T >> P) & 3) << 1;
                W |= ((T >> 23) & 1) << 3;
                G <<= 6;
                y = (G & 1) + 2;
                q = (G + 36029) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                P = P * (y * 1);
                W |= ((T >> P) & 1) << 4;
                w = (T >> 15) & 1;
                G |= 67644;
                y = (G & 1) + 2;
                q = (G + 10531) & 1;
                P = y * 5 + q;
                P = P * (y * 1);
                w |= ((T >> P) & 1) << 1;
                G <<= 0;
                y = (G & 1) + 2;
                q = (G + 31977) & 1;
                P = y * 8 + q;
                w |= ((T >> P) & 1) << 2;
                w |= ((T >> 19) & 1) << 3;
                w |= ((T >> 21) & 1) << 4;
                t[g] = t[W] - t[w];
              } else if ((T & 332) == 256) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                g = (I >> 19) & 1;
                g |= ((T >> 7) & 1) << 1;
                g |= ((T >> 9) & 7) << 2;
                G |= 115426;
                y = (G & 1) + 2;
                q = (G + 63575) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                P = P * (y * 1);
                W = (T >> P) & 7;
                W |= ((T >> 19) & 1) << 3;
                W |= ((T >> 15) & 15) << 4;
                y = (G & 1) + 2;
                q = (G + 34819) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                P = P * (y * 1);
                W |= ((T >> P) & 15) << 8;
                w = (I >> 16) & 1;
                G <<= 7;
                y = (G & 1) + 2;
                q = (G + 7387) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                P = P * (y * 1 + q);
                w |= ((I >> P) & 1) << 1;
                w |= ((I >> 11) & 1) << 2;
                w |= ((I >> 0) & 3) << 3;
                t[g][W] = t[w];
              } else if ((T & 19844) == 17536) {
                I = jsvm_this_insns[h + 1];
                if ((I & 34) == 2) {
                  X = 1;
                  G |= 7306;
                  y = (G & 1) + 2;
                  q = (G + 50913) & 1;
                  P = y * 1 + q;
                  g = (T >> P) & 1;
                  G |= 61326;
                  y = (G & 1) + 2;
                  q = (G + 56107) & 1;
                  P = y * 1 + q;
                  P = P * (y * 1);
                  g |= ((T >> P) & 1) << 1;
                  G |= 124756;
                  y = (G & 1) + 2;
                  q = (G + 52109) & 1;
                  P = y * 1 + q;
                  P = P * (y * 1);
                  g |= ((I >> P) & 1) << 2;
                  g |= ((I >> 4) & 1) << 3;
                  g |= ((T >> 9) & 1) << 4;
                  W = (I >> 19) & 1;
                  W |= ((T >> 12) & 3) << 1;
                  W |= ((T >> 23) & 1) << 3;
                  W |= ((T >> 15) & 15) << 4;
                  W |= ((I >> 22) & 1) << 8;
                  W |= ((I >> 21) & 1) << 9;
                  y = (G & 1) + 2;
                  q = (G + 41847) & 1;
                  P = y * 9 + q;
                  W |= ((T >> P) & 1) << 10;
                  y = (G & 1) + 2;
                  q = (G + 55143) & 1;
                  P = y * 3 + q;
                  P = P * (y * 1 + q);
                  W |= ((T >> P) & 3) << 11;
                  W |= ((I >> 2) & 1) << 13;
                  W |= ((I >> 7) & 1) << 14;
                  W |= ((I >> 9) & 1) << 15;
                  W = (W << 16) >> 16;
                  if (n.length <= W) {
                    break;
                  }
                  t[g] = n[n.length - 1 - W];
                } else {
                  if (!(T & 2097152)) {
                    X = 1;
                    G += 101740;
                    y = (G & 1) + 2;
                    q = (G + 2793) & 1;
                    P = y * 1 + q;
                    g = (T >> P) & 1;
                    g |= ((T >> 6) & 1) << 1;
                    g |= ((I >> 3) & 1) << 2;
                    g |= ((T >> 9) & 1) << 3;
                    y = (G & 1) + 2;
                    q = (G + 37859) & 1;
                    P = y * 1 + q;
                    P = P * (y * 1);
                    P = P * (y * 1 + q);
                    g |= ((I >> P) & 1) << 4;
                    G += 11620;
                    y = (G & 1) + 2;
                    q = (G + 16705) & 1;
                    P = y * 1 + q;
                    P = P * (y * 1);
                    P = P * (y * 1);
                    W = (T >> P) & 1;
                    W |= ((T >> 16) & 1) << 1;
                    W |= ((T >> 18) & 7) << 2;
                    w = (T >> 23) & 1;
                    w |= ((I >> 4) & 1) << 1;
                    w |= ((I >> 12) & 1) << 2;
                    w |= ((I >> 7) & 3) << 3;
                    t[g] = t[W] / t[w];
                  } else {
                    X = 1;
                    y = (G & 1) + 2;
                    q = (G + 32409) & 1;
                    P = y * 1 + q;
                    g = (T >> P) & 1;
                    G |= 92902;
                    y = (G & 1) + 2;
                    q = (G + 51017) & 1;
                    P = y * 1 + q;
                    P = P * (y * 1 + q);
                    g |= ((T >> P) & 1) << 1;
                    g |= ((I >> 22) & 1) << 2;
                    g |= ((T >> 12) & 3) << 3;
                    W = (I >> 13) & 1;
                    W |= ((I >> 6) & 1) << 1;
                    y = (G & 1) + 2;
                    q = (G + 30975) & 1;
                    P = y * 1;
                    P = P * (y * 1);
                    P = P * (y * 1);
                    P = P * (y * 1);
                    W |= ((T >> P) & 7) << 2;
                    jsvm_this_tmpValue = t[W];
                    x('' + t[g] + ' = jsvm_this_tmpValue;');
                  }
                }
              } else if ((T & 2134348) == 4360) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                y = (G & 1) + 2;
                q = (G + 43887) & 1;
                P = y * 1 + q;
                P = P * (y * 1 + q);
                g = (T >> P) & 1;
                g |= ((T >> 11) & 1) << 1;
                g |= ((T >> 13) & 1) << 2;
                g |= ((I >> 15) & 1) << 3;
                y = (G & 1) + 2;
                q = (G + 33333) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                g |= ((I >> P) & 1) << 4;
                W = (T >> 20) & 1;
                W |= ((T >> 22) & 3) << 1;
                W |= ((I >> 1) & 1) << 3;
                W |= ((I >> 5) & 1) << 4;
                if (n.length <= t[g]) {
                  break;
                }
                n[n.length - 1 - t[g]] = t[W];
              } else if ((T & 2134348) == 264) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                G |= 32186;
                y = (G & 1) + 2;
                q = (G + 51421) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                g = (T >> P) & 1;
                y = (G & 1) + 2;
                q = (G + 58149) & 1;
                P = y * 5 + q;
                g |= ((I >> P) & 1) << 1;
                g |= ((T >> 20) & 1) << 2;
                g |= ((T >> 16) & 1) << 3;
                g |= ((T >> 13) & 1) << 4;
                W = (I >> 12) & 1;
                W |= ((T >> 14) & 1) << 1;
                W |= ((I >> 19) & 1) << 2;
                W |= ((T >> 17) & 3) << 3;
                if (n.length <= t[W]) {
                  break;
                }
                t[g] = n[n.length - 1 - t[W]];
              } else if ((T & 2396164) == 4) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                g = (T >> 7) & 1;
                g |= ((T >> 9) & 1) << 1;
                g |= ((I >> 14) & 1) << 2;
                g |= ((T >> 10) & 3) << 3;
                W = (T >> 14) & 1;
                G += 5728;
                G |= 32690;
                y = (G & 1) + 2;
                q = (G + 39775) & 1;
                P = y * 8 + q;
                W |= ((T >> P) & 1) << 1;
                W |= ((T >> 19) & 3) << 2;
                W |= ((T >> 22) & 1) << 4;
                w = (T >> 23) & 1;
                w |= (I & 1) << 1;
                w |= ((I >> 2) & 1) << 2;
                G |= 35046;
                y = (G & 1) + 2;
                q = (G + 14697) & 1;
                P = y * 5 + q;
                P = P * (y * 1);
                w |= ((I >> P) & 1) << 3;
                w |= ((I >> 11) & 1) << 4;
                t[g] = t[W] << t[w];
              } else if ((T & 324) == 320) {
                g = (T >> 11) & 1;
                y = (G & 1) + 2;
                q = (G + 57669) & 1;
                P = y * 1 + q;
                g |= ((T >> P) & 1) << 1;
                g |= ((T >> 7) & 1) << 2;
                g |= ((T >> 9) & 1) << 3;
                y = (G & 1) + 2;
                q = (G + 17815) & 1;
                P = y * 3 + q;
                P = P * (y * 1);
                g |= ((T >> P) & 1) << 4;
                G |= 56896;
                y = (G & 1) + 2;
                q = (G + 58053) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                W = (T >> P) & 1;
                y = (G & 1) + 2;
                q = (G + 32625) & 1;
                P = y * 3 + q;
                P = P * (y * 1 + q);
                W |= ((T >> P) & 1) << 1;
                W |= ((T >> 12) & 3) << 2;
                W |= ((T >> 22) & 1) << 4;
                w = (T >> 15) & 3;
                w |= ((T >> 23) & 1) << 2;
                w |= ((T >> 17) & 3) << 3;
                t[g] = t[W] == t[w];
              } else if ((T & 83332) == 128) {
                X = 1;
                G += 1628;
                y = (G & 1) + 2;
                q = (G + 20569) & 1;
                P = y * 1 + q;
                g = (T >> P) & 1;
                g |= ((T >> 6) & 1) << 1;
                y = (G & 1) + 2;
                q = (G + 7837) & 1;
                P = y * 1 + q;
                P = P * (y * 1 + q);
                g |= ((T >> P) & 1) << 2;
                g |= ((T >> 11) & 3) << 3;
                W = (T >> 13) & 1;
                W |= ((T >> 15) & 1) << 1;
                G |= 51174;
                y = (G & 1) + 2;
                q = (G + 11283) & 1;
                P = y * 8 + q;
                W |= ((T >> P) & 1) << 2;
                W |= ((T >> 19) & 3) << 3;
                t[g] = x('' + t[W]);
              } else if ((T & 40644) == 35844) {
                I = jsvm_this_insns[h + 1];
                if ((I & 16513) == 0) {
                  X = 1;
                  g = (T >> 3) & 1;
                  y = (G & 1) + 2;
                  q = (G + 34669) & 1;
                  P = y * 1;
                  P = P * (y * 1);
                  P = P * (y * 1);
                  g |= ((T >> P) & 1) << 1;
                  g |= ((I >> 20) & 1) << 2;
                  g |= ((T >> 13) & 3) << 3;
                  W = (T >> 17) & 1;
                  W |= ((T >> 19) & 1) << 1;
                  y = (G & 1) + 2;
                  q = (G + 31903) & 1;
                  P = y * 3 + q;
                  P = P * (y * 1 + q);
                  W |= ((T >> P) & 1) << 2;
                  W |= ((I >> 5) & 1) << 3;
                  W |= ((T >> 22) & 1) << 4;
                  w = (I >> 18) & 1;
                  w |= ((I >> 12) & 1) << 1;
                  w |= ((T >> 23) & 1) << 2;
                  G |= 116392;
                  q = (G + 36277) & 1;
                  y = (G + 56071) & 1;
                  P = y + q;
                  w |= ((I >> P) & 1) << 3;
                  w |= ((I >> 9) & 1) << 4;
                  t[g] = t[W] & t[w];
                } else if ((I & 129) == 128) {
                  X = 1;
                  g = (I >> 16) & 1;
                  y = (G & 1) + 2;
                  q = (G + 49773) & 1;
                  P = y * 1 + q;
                  g |= ((T >> P) & 1) << 1;
                  g |= ((T >> 8) & 1) << 2;
                  y = (G & 1) + 2;
                  q = (G + 11837) & 1;
                  P = y * 6 + q;
                  g |= ((T >> P) & 3) << 3;
                  G |= 106286;
                  y = (G & 1) + 2;
                  q = (G + 36927) & 1;
                  P = y * 1;
                  P = P * (y * 1);
                  P = P * (y * 1);
                  P = P * (y * 1);
                  g |= ((T >> P) & 3) << 5;
                  G |= 114602;
                  y = (G & 1) + 2;
                  q = (G + 51629) & 1;
                  P = y * 9 + q;
                  g |= ((T >> P) & 1) << 7;
                  if (j) {
                    for (i = 0; i < g; i++) {
                      n.push(m.pop());
                    }
                  }
                  m = [];
                  j = false;
                } else {
                  X = 1;
                  y = (G & 1) + 2;
                  q = (G + 54003) & 1;
                  P = y * 8 + q;
                  g = (T >> P) & 1;
                  g |= ((T >> 20) & 1) << 1;
                  y = (G & 1) + 2;
                  q = (G + 49999) & 1;
                  P = y * 1 + q;
                  g |= ((T >> P) & 1) << 2;
                  g |= ((I >> 12) & 1) << 3;
                  g |= ((T >> 8) & 1) << 4;
                  W = (T >> 19) & 1;
                  y = (G & 1) + 2;
                  q = (G + 29067) & 1;
                  P = y * 6 + q;
                  W |= ((T >> P) & 3) << 1;
                  W |= ((T >> 16) & 1) << 3;
                  G |= 81904;
                  y = (G & 1) + 2;
                  q = (G + 42897) & 1;
                  P = y * 5 + q;
                  P = P * (y * 1);
                  W |= ((T >> P) & 1) << 4;
                  t[g] = ~t[W];
                }
              } else if ((T & 299012) == 262148) {
                g = (T >> 3) & 1;
                g |= ((T >> 16) & 1) << 1;
                g |= ((T >> 6) & 1) << 2;
                g |= ((T >> 17) & 1) << 3;
                g |= ((T >> 7) & 1) << 4;
                W = (T >> 8) & 15;
                W |= ((T >> 19) & 1) << 4;
                w = (T >> 13) & 3;
                w |= ((T >> 20) & 1) << 2;
                w |= ((T >> 22) & 1) << 3;
                y = (G & 1) + 2;
                q = (G + 17039) & 1;
                P = y * 3 + q;
                P = P * (y * 1 + q);
                w |= ((T >> P) & 1) << 4;
                t[g] = t[W] % t[w];
              } else if ((T & 39500) == 32836) {
                G |= 103528;
                y = (G & 1) + 2;
                q = (G + 24905) & 1;
                P = y * 3 + q;
                g = (T >> P) & 3;
                g |= ((T >> 10) & 1) << 2;
                g |= ((T >> 13) & 3) << 3;
                g |= ((T >> 16) & 7) << 5;
                for (i = 0; i < g; i++) {
                  n.push(u.pop());
                }
              } else if ((T & 53764) == 33284) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                g = (T >> 3) & 1;
                y = (G & 1) + 2;
                q = (G + 2823) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                g |= ((T >> P) & 3) << 1;
                g |= ((T >> 10) & 3) << 3;
                W = (T >> 17) & 1;
                G <<= 5;
                G += 103432;
                y = (G & 1) + 2;
                q = (G + 7503) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                W |= ((I >> P) & 1) << 1;
                W |= ((T >> 16) & 1) << 2;
                W |= ((I >> 19) & 1) << 3;
                y = (G & 1) + 2;
                q = (G + 20385) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                P = P * (y * 1);
                W |= ((T >> P) & 1) << 4;
                y = (G & 1) + 2;
                q = (G + 48553) & 1;
                P = y * 5 + q;
                P = P * (y * 1);
                w = (T >> P) & 3;
                w |= (I & 1) << 2;
                q = (G + 10979) & 1;
                y = (G + 62989) & 1;
                P = y + q;
                w |= ((I >> P) & 1) << 3;
                w |= ((I >> 21) & 1) << 4;
                if (t[g] === undefined) {
                  jsvm_this_tmpValue = t[w];
                  x('' + t[W] + ' = jsvm_this_tmpValue;');
                } else {
                  try {
                    t[g][t[W]] = t[w];
                  } catch (x) {
                    _ = true;
                    h = v.pop();
                    if (h == undefined) {
                      break;
                    }
                    if (h === -1) {
                      h = v.pop();
                    }
                    if (V === 2) {
                      V = v.pop();
                      h = v.pop();
                      if (h === -1) {
                        n.pop();
                        h = v.pop();
                      }
                    }
                    L = 3 + V;
                    V = (V + 1) % 3;
                    t[0] = x;
                  }
                }
              } else if ((T & 53764) == 49668) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                g = (T >> 3) & 1;
                g |= ((T >> 6) & 1) << 1;
                g |= ((I >> 19) & 1) << 2;
                g |= ((T >> 7) & 1) << 3;
                g |= ((T >> 10) & 1) << 4;
                g |= ((T >> 13) & 1) << 5;
                g |= ((T >> 16) & 3) << 6;
                g |= ((T >> 19) & 1) << 8;
                g |= ((T >> 21) & 7) << 9;
                g |= ((I >> 13) & 1) << 12;
                g |= ((I >> 0) & 7) << 13;
                g = (g << 16) >> 16;
                G += 103550;
                y = (G & 1) + 2;
                q = (G + 24775) & 1;
                P = y * 1 + q;
                W = (I >> P) & 1;
                W |= ((I >> 8) & 1) << 1;
                W |= ((I >> 4) & 3) << 2;
                y = (G & 1) + 2;
                q = (G + 11841) & 1;
                P = y * 3 + q;
                P = P * (y * 1 + q);
                W |= ((I >> P) & 1) << 4;
                if (n.length <= g) {
                  break;
                }
                n[n.length - 1 - g] = t[W];
              } else if ((T & 1183748) == 4100) {
                g = (T >> 3) & 1;
                G |= 94996;
                y = (G & 1) + 2;
                q = (G + 50159) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                g |= ((T >> P) & 15) << 1;
                W = (T >> 14) & 1;
                G += 104134;
                y = (G & 1) + 2;
                q = (G + 49013) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                W |= ((T >> P) & 3) << 1;
                y = (G & 1) + 2;
                q = (G + 3743) & 1;
                P = y * 11 + q;
                W |= ((T >> P) & 1) << 3;
                W |= ((T >> 15) & 1) << 4;
                w = (T >> 13) & 1;
                w |= ((T >> 16) & 1) << 1;
                G <<= 9;
                y = (G & 1) + 2;
                q = (G + 4161) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                P = P * (y * 1 + q);
                w |= ((T >> P) & 1) << 2;
                w |= ((T >> 21) & 1) << 3;
                y = (G & 1) + 2;
                q = (G + 24013) & 1;
                P = y * 9 + q;
                w |= ((T >> P) & 1) << 4;
                t[g] = t[W] + t[w];
              } else if ((T & 39500) == 34884) {
                X = 1;
                I = jsvm_this_insns[h + 1];
                G |= 41378;
                y = (G & 1) + 2;
                q = (G + 63513) & 1;
                P = y * 2 + q;
                P = P * (y * 1);
                g = (T >> P) & 1;
                y = (G & 1) + 2;
                q = (G + 53361) & 1;
                P = y * 3 + q;
                P = P * (y * 1);
                g |= ((T >> P) & 1) << 1;
                g |= ((I >> 11) & 1) << 2;
                y = (G & 1) + 2;
                q = (G + 36275) & 1;
                P = y * 1;
                P = P * (y * 1);
                P = P * (y * 1);
                P = P * (y * 1);
                g |= ((T >> P) & 3) << 3;
                G <<= 8;
                G |= 41346;
                y = (G & 1) + 2;
                q = (G + 55819) & 1;
                P = y * 1 + q;
                P = P * (y * 1);
                P = P * (y * 1 + q);
                W = (T >> P) & 15;
                G += 90948;
                y = (G & 1) + 2;
                q = (G + 33207) & 1;
                P = y * 11 + q;
                W |= ((T >> P) & 1) << 4;
                y = (G & 1) + 2;
                q = (G + 45625) & 1;
                P = y - q;
                w = (I >> P) & 31;
                t[g] = t[W] * t[w];
              } else {
                g = (T >> 3) & 1;
                g |= ((T >> 6) & 1) << 1;
                G += 85032;
                y = (G & 1) + 2;
                q = (G + 54747) & 1;
                P = y * 1;
                P = P * (y * 1);
                P = P * (y * 1);
                P = P * (y * 1);
                g |= ((T >> P) & 1) << 2;
                g |= ((T >> 14) & 1) << 3;
                g |= ((T >> 19) & 1) << 4;
                t[g] = {};
              }
              break;
            case 26:
            case 30:
            case 90:
            case 94:
            case 282:
            case 286:
            case 346:
            case 350:
              X = 1;
              I = jsvm_this_insns[h + 1];
              g = (T >> 2) & 1;
              g |= ((T >> 6) & 1) << 1;
              G |= 42154;
              y = (G & 1) + 2;
              q = (G + 58355) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 2;
              g |= ((T >> 8) & 3) << 3;
              W = (I >> 5) & 1;
              y = (G & 1) + 2;
              q = (G + 62143) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              W |= ((T >> P) & 1) << 1;
              G += 56938;
              y = (G & 1) + 2;
              q = (G + 28509) & 1;
              P = y * 5 + q;
              P = P * (y * 1);
              W |= ((I >> P) & 1) << 2;
              W |= ((I >> 19) & 1) << 3;
              W |= ((I >> 15) & 1) << 4;
              w = (T >> 11) & 3;
              w |= ((I >> 10) & 1) << 2;
              w |= ((I >> 6) & 1) << 3;
              w |= ((I >> 3) & 1) << 4;
              H = (T >> 13) & 7;
              G += 119986;
              G |= 125440;
              y = (G & 1) + 2;
              q = (G + 12373) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              H |= ((I >> P) & 1) << 3;
              H |= ((T >> 17) & 1) << 4;
              d += 4;
              n.push(t[g]);
              n.push(t[W]);
              n.push(t[w]);
              n.push(t[H]);
              break;
            case 33:
            case 97:
            case 161:
            case 225:
            case 289:
            case 353:
            case 417:
            case 481:
              _ = true;
              h = v.pop();
              V = v.pop();
              if (L > 3) {
                h = v.pop();
                if (h === -1) {
                  n.pop();
                  h = v.pop();
                }
              }
              L = 0;
              break;
            case 0:
            case 64:
            case 128:
            case 192:
            case 256:
            case 320:
            case 384:
            case 448:
              G += 66022;
              G |= 94336;
              y = (G & 1) + 2;
              q = (G + 52189) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g = (T >> P) & 15;
              g |= ((T >> 19) & 1) << 4;
              W = (T >> 10) & 31;
              w = (T >> 15) & 15;
              w |= ((T >> 20) & 1) << 4;
              t[g] = t[W] >>> t[w];
              break;
            case 3:
            case 67:
            case 131:
            case 195:
            case 259:
            case 323:
            case 387:
            case 451:
              g = (T >> 6) & 1;
              g |= ((T >> 14) & 1) << 1;
              g |= ((T >> 7) & 7) << 2;
              _ = true;
              j = false;
              n.push(h + 1 + X);
              h = t[g] - 1;
              v.push(-1);
              V = 0;
              L = 0;
              break;
            case 35:
            case 99:
            case 163:
            case 227:
            case 291:
            case 355:
            case 419:
            case 483:
              y = (G & 1) + 2;
              q = (G + 29561) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              P = P * (y * 1);
              g = (T >> P) & 1;
              y = (G & 1) + 2;
              q = (G + 17289) & 1;
              P = y * 3 + q;
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 1;
              G |= 2270;
              y = (G & 1) + 2;
              q = (G + 34279) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g |= ((T >> P) & 15) << 2;
              g |= ((T >> 22) & 1) << 6;
              g |= ((T >> 10) & 7) << 7;
              g |= ((T >> 20) & 1) << 10;
              y = (G & 1) + 2;
              q = (G + 25385) & 1;
              P = y * 6 + q;
              g |= ((T >> P) & 1) << 11;
              G += 12592;
              y = (G & 1) + 2;
              q = (G + 5267) & 1;
              P = y * 2 + q;
              P = P * (y * 1 + q);
              g |= ((T >> P) & 1) << 12;
              G <<= 7;
              G |= 25712;
              y = (G & 1) + 2;
              q = (G + 3935) & 1;
              P = y * 8 + q;
              g |= ((T >> P) & 7) << 13;
              _ = true;
              h = g - 1;
              break;
            case 5:
            case 69:
            case 133:
            case 197:
            case 261:
            case 325:
            case 389:
            case 453:
              g = (T >> 11) & 1;
              g |= ((T >> 6) & 1) << 1;
              g |= ((T >> 18) & 1) << 2;
              g |= ((T >> 7) & 3) << 3;
              W = (T >> 9) & 1;
              W |= ((T >> 23) & 1) << 1;
              W |= ((T >> 10) & 1) << 2;
              G |= 2246;
              y = (G & 1) + 2;
              q = (G + 15835) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((T >> P) & 3) << 3;
              if (t[g]) {
                _ = true;
                h = t[W] - 1;
              }
              break;
            case 37:
            case 39:
            case 165:
            case 167:
            case 293:
            case 295:
            case 421:
            case 423:
              g = (T >> 16) & 1;
              y = (G & 1) + 2;
              q = (G + 59587) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 1;
              G |= 5174;
              y = (G & 1) + 2;
              q = (G + 22163) & 1;
              P = y * 9 + q;
              g |= ((T >> P) & 1) << 2;
              y = (G & 1) + 2;
              q = (G + 36723) & 1;
              P = y - q;
              g |= ((T >> P) & 1) << 3;
              g |= ((T >> 7) & 1) << 4;
              n.push(t[g]);
              break;
            case 101:
            case 103:
            case 229:
            case 231:
            case 357:
            case 359:
            case 485:
            case 487:
              g = (T >> 14) & 1;
              g |= ((T >> 17) & 1) << 1;
              g |= ((T >> 1) & 1) << 2;
              g |= ((T >> 7) & 3) << 3;
              W = (T >> 16) & 1;
              y = (G & 1) + 2;
              q = (G + 7023) & 1;
              P = y * 1 + q;
              P = P * (y * 1 + q);
              W |= ((T >> P) & 1) << 1;
              G |= 117362;
              y = (G & 1) + 2;
              q = (G + 30095) & 1;
              P = y * 11 + q;
              W |= ((T >> P) & 1) << 2;
              W |= ((T >> 10) & 3) << 3;
              t[g] = t[W];
              break;
            case 17:
            case 19:
            case 81:
            case 83:
            case 273:
            case 275:
            case 337:
            case 339:
              _ = true;
              h = v.pop();
              V++;
              if (L === 0) {
                h = v.pop();
                V++;
              }
              break;
            case 145:
            case 147:
            case 209:
            case 211:
            case 401:
            case 403:
            case 465:
            case 467:
              _ = true;
              h = v.pop();
              V++;
              break;
            case 7:
            case 71:
            case 135:
            case 199:
            case 263:
            case 327:
            case 391:
            case 455:
              G <<= 1;
              G += 101878;
              y = (G & 1) + 2;
              q = (G + 26115) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g = (T >> P) & 31;
              _ = true;
              h = t[g] - 1;
              break;
            case 21:
            case 85:
            case 149:
            case 213:
            case 277:
            case 341:
            case 405:
            case 469:
              g = (T >> 10) & 1;
              g |= ((T >> 6) & 1) << 1;
              g |= ((T >> 13) & 1) << 2;
              g |= ((T >> 7) & 7) << 3;
              G <<= 5;
              y = (G & 1) + 2;
              q = (G + 28415) & 1;
              P = y * 5 + q;
              g |= ((T >> P) & 1) << 6;
              g |= ((T >> 19) & 1) << 7;
              G += 20260;
              y = (G & 1) + 2;
              q = (G + 43635) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 8;
              g |= ((T >> 14) & 3) << 9;
              G += 24326;
              y = (G & 1) + 2;
              q = (G + 13007) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1 + q);
              g |= ((T >> P) & 1) << 11;
              g |= ((T >> 16) & 3) << 12;
              g |= ((T >> 23) & 1) << 14;
              g |= ((T >> 20) & 1) << 15;
              g = (g << 16) >> 16;
              v.push(h + g);
              break;
            case 49:
            case 51:
            case 53:
            case 55:
            case 177:
            case 179:
            case 181:
            case 183:
              X = 1;
              I = jsvm_this_insns[h + 1];
              y = (G & 1) + 2;
              q = (G + 62601) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              g = (I >> P) & 1;
              g |= ((T >> 1) & 3) << 1;
              y = (G & 1) + 2;
              q = (G + 6643) & 1;
              P = y * 3 + q;
              g |= ((T >> P) & 1) << 3;
              G <<= 6;
              y = (G & 1) + 2;
              q = (G + 65087) & 1;
              P = y * 1 + q;
              P = P * (y * 1 + q);
              g |= ((T >> P) & 1) << 4;
              W = (T >> 10) & 7;
              W |= ((I >> 6) & 1) << 3;
              y = (G & 1) + 2;
              q = (G + 31915) & 1;
              P = y - q;
              W |= ((I >> P) & 1) << 4;
              y = (G & 1) + 2;
              q = (G + 19611) & 1;
              P = y * 6 + q;
              W |= ((T >> P) & 1) << 5;
              W |= ((T >> 23) & 1) << 6;
              G <<= 5;
              G += 25240;
              y = (G & 1) + 2;
              q = (G + 59579) & 1;
              P = y * 3 + q;
              P = P * (y * 1);
              W |= ((T >> P) & 63) << 7;
              W |= (I & 1) << 13;
              y = (G & 1) + 2;
              q = (G + 57231) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((T >> P) & 3) << 14;
              w = (T >> 22) & 1;
              w |= ((I >> 2) & 15) << 1;
              w |= ((I >> 7) & 7) << 5;
              if (typeof t[g]['jsvmfunc'] == 'number') {
                for (i = 1; i <= w; i++) {
                  m.push(loaddata(W + i));
                }
                j = true;
                n.push(loaddata(W));
                _ = true;
                n.push(h + 1 + X);
                h = t[g]['jsvmfunc'] - 1;
                v.push(-1);
                V = 0;
                L = 0;
              } else {
                o = [];
                b = loaddata(W);
                for (i = 0; i < w; i++) {
                  o.push(loaddata(W + w - i));
                }
                if (typeof t[g] == 'function') {
                  n.push(t[g].apply(b, o));
                }
              }
              break;
            case 23:
            case 87:
            case 151:
            case 215:
            case 279:
            case 343:
            case 407:
            case 471:
              g = (T >> 6) & 127;
              g |= ((T >> 15) & 1) << 7;
              g |= ((T >> 22) & 1) << 8;
              g |= ((T >> 13) & 3) << 9;
              G += 76674;
              y = (G & 1) + 2;
              q = (G + 44893) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 11;
              y = (G & 1) + 2;
              q = (G + 16293) & 1;
              P = y * 11 + q;
              g |= ((T >> P) & 1) << 12;
              g |= ((T >> 16) & 7) << 13;
              g = (g << 16) >> 16;
              v.push(V);
              L = 0;
              V = 0;
              v.push(h + g);
              break;
            case 305:
            case 307:
            case 309:
            case 311:
            case 433:
            case 435:
            case 437:
            case 439:
              G += 112708;
              y = (G & 1) + 2;
              q = (G + 37515) & 1;
              P = y - q;
              g = (T >> P) & 3;
              g |= ((T >> 7) & 1) << 2;
              g |= ((T >> 15) & 1) << 3;
              G |= 68324;
              y = (G & 1) + 2;
              q = (G + 5243) & 1;
              P = y * 3 + q;
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 4;
              t[g] = {};
              break;
            case 117:
            case 119:
            case 245:
            case 247:
            case 373:
            case 375:
            case 501:
            case 503:
              G <<= 3;
              y = (G & 1) + 2;
              q = (G + 2657) & 1;
              P = y - q;
              g = (T >> P) & 1;
              G |= 121712;
              y = (G & 1) + 2;
              q = (G + 40475) & 1;
              P = y * 3 + q;
              g |= ((T >> P) & 15) << 1;
              W = (T >> 11) & 31;
              w = (T >> 16) & 3;
              G += 126562;
              y = (G & 1) + 2;
              q = (G + 43111) & 1;
              P = y * 9 + q;
              w |= ((T >> P) & 1) << 2;
              w |= ((T >> 18) & 1) << 3;
              w |= ((T >> 20) & 1) << 4;
              n.push(t[g]);
              n.push(t[W]);
              n.push(t[w]);
              break;
            case 113:
            case 115:
            case 241:
            case 243:
            case 369:
            case 371:
            case 497:
            case 499:
              g = (T >> 1) & 1;
              g |= ((T >> 7) & 1) << 1;
              g |= ((T >> 20) & 1) << 2;
              g |= ((T >> 8) & 1) << 3;
              g |= ((T >> 18) & 1) << 4;
              g |= ((T >> 9) & 3) << 5;
              g |= ((T >> 12) & 1) << 7;
              g |= ((T >> 11) & 1) << 8;
              g |= ((T >> 13) & 3) << 9;
              g |= ((T >> 19) & 1) << 11;
              y = (G & 1) + 2;
              q = (G + 35269) & 1;
              P = y * 2 + q;
              P = P * (y * 1 + q);
              g |= ((T >> P) & 7) << 12;
              y = (G & 1) + 2;
              q = (G + 52313) & 1;
              P = y * 3 + q;
              P = P * (y * 1 + q);
              g |= ((T >> P) & 1) << 15;
              g = (g << 16) >> 16;
              v.push(h + g);
              break;
            case 41:
            case 105:
            case 169:
            case 233:
            case 297:
            case 361:
            case 425:
            case 489:
              _ = true;
              v.pop();
              h = n.pop();
              if (h === undefined) {
                h = -1;
              }
              break;
            case 25:
            case 89:
            case 153:
            case 217:
            case 281:
            case 345:
            case 409:
            case 473:
              y = (G & 1) + 2;
              q = (G + 11425) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g = (T >> P) & 3;
              g |= ((T >> 16) & 1) << 2;
              g |= ((T >> 8) & 3) << 3;
              W = (T >> 10) & 1;
              W |= ((T >> 21) & 1) << 1;
              G |= 82848;
              y = (G & 1) + 2;
              q = (G + 46953) & 1;
              P = y * 5 + q;
              W |= ((T >> P) & 1) << 2;
              W |= ((T >> 23) & 1) << 3;
              W |= ((T >> 12) & 1) << 4;
              t[g] = n.pop();
              u.push(t[g]);
              t[W] = n.pop();
              u.push(t[W]);
              break;
            case 57:
            case 121:
            case 185:
            case 249:
            case 313:
            case 377:
            case 441:
            case 505:
              g = (T >> 6) & 3;
              g |= ((T >> 18) & 1) << 2;
              g |= ((T >> 10) & 1) << 3;
              y = (G & 1) + 2;
              q = (G + 54179) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 4;
              W = (T >> 17) & 1;
              y = (G & 1) + 2;
              q = (G + 6885) & 1;
              P = y * 2 + q;
              P = P * (y * 1 + q);
              W |= ((T >> P) & 1) << 1;
              W |= ((T >> 9) & 1) << 2;
              W |= ((T >> 11) & 3) << 3;
              y = (G & 1) + 2;
              q = (G + 43335) & 1;
              P = y * 6 + q;
              w = (T >> P) & 3;
              w |= ((T >> 16) & 1) << 2;
              w |= ((T >> 19) & 1) << 3;
              w |= ((T >> 21) & 1) << 4;
              t[g] = n.pop();
              u.push(t[g]);
              t[W] = n.pop();
              u.push(t[W]);
              t[w] = n.pop();
              u.push(t[w]);
              break;
            case 9:
            case 73:
            case 137:
            case 201:
            case 265:
            case 329:
            case 393:
            case 457:
              X = 1;
              I = jsvm_this_insns[h + 1];
              G += 121062;
              y = (G & 1) + 2;
              q = (G + 14171) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g = (T >> P) & 31;
              W = (T >> 11) & 1;
              W |= ((T >> 19) & 1) << 1;
              G += 33580;
              y = (G & 1) + 2;
              q = (G + 9307) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((T >> P) & 7) << 2;
              W |= (I & 1) << 5;
              W |= ((T >> 15) & 1) << 6;
              y = (G & 1) + 2;
              q = (G + 9339) & 1;
              P = y * 2 + q;
              W |= ((I >> P) & 1) << 7;
              W |= ((T >> 16) & 3) << 8;
              G |= 33802;
              y = (G & 1) + 2;
              q = (G + 43555) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              W |= ((I >> P) & 1) << 10;
              W |= ((T >> 18) & 1) << 11;
              W |= ((T >> 20) & 15) << 12;
              if (t[g]) {
                _ = true;
                h = W - 1;
              }
              break;
            case 11:
            case 43:
            case 75:
            case 107:
            case 267:
            case 299:
            case 331:
            case 363:
              X = 1;
              I = jsvm_this_insns[h + 1];
              y = (G & 1) + 2;
              q = (G + 6231) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              P = P * (y * 1);
              g = (T >> P) & 1;
              g |= ((T >> 5) & 1) << 1;
              G += 77982;
              q = (G + 57339) & 1;
              y = (G + 63337) & 1;
              P = y + q;
              g |= ((I >> P) & 1) << 2;
              g |= ((T >> 6) & 1) << 3;
              G += 95758;
              y = (G & 1) + 2;
              q = (G + 31717) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              P = P * (y * 1);
              g |= ((I >> P) & 1) << 4;
              G += 117472;
              G |= 89820;
              y = (G & 1) + 2;
              q = (G + 29271) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              W = (T >> P) & 3;
              W |= ((I >> 17) & 1) << 2;
              W |= ((T >> 10) & 1) << 3;
              G |= 118930;
              y = (G & 1) + 2;
              q = (G + 56049) & 1;
              P = y * 6 + q;
              W |= ((I >> P) & 1) << 4;
              w = (T >> 11) & 3;
              w |= ((I >> 19) & 1) << 2;
              w |= ((T >> 18) & 1) << 3;
              y = (G & 1) + 2;
              q = (G + 57777) & 1;
              P = y * 6 + q;
              w |= ((T >> P) & 1) << 4;
              H = (I >> 3) & 1;
              H |= ((T >> 14) & 3) << 1;
              y = (G & 1) + 2;
              q = (G + 65249) & 1;
              P = y * 3 + q;
              H |= ((I >> P) & 1) << 3;
              H |= ((T >> 17) & 1) << 4;
              n.push(t[g]);
              n.push(t[W]);
              n.push(t[w]);
              n.push(t[H]);
              break;
            case 139:
            case 171:
            case 203:
            case 235:
            case 395:
            case 427:
            case 459:
            case 491:
              g = (T >> 5) & 3;
              g |= ((T >> 8) & 3) << 2;
              y = (G & 1) + 2;
              q = (G + 6723) & 1;
              P = y * 5 + q;
              P = P * (y * 1);
              g |= ((T >> P) & 1) << 4;
              t[g] = n.pop();
              u.push(t[g]);
              break;
            case 59:
            case 123:
            case 187:
            case 251:
            case 315:
            case 379:
            case 443:
            case 507:
              g = (T >> 6) & 1;
              g |= ((T >> 23) & 1) << 1;
              y = (G & 1) + 2;
              q = (G + 33677) & 1;
              P = y * 3 + q;
              g |= ((T >> P) & 7) << 2;
              y = (G & 1) + 2;
              q = (G + 52615) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              W = (T >> P) & 15;
              W |= ((T >> 18) & 1) << 4;
              t[g] = x(t[W]);
              break;
            case 13:
            case 77:
            case 141:
            case 205:
            case 269:
            case 333:
            case 397:
            case 461:
              X = 1;
              I = jsvm_this_insns[h + 1];
              y = (G & 1) + 2;
              q = (G + 31781) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g = (T >> P) & 3;
              y = (G & 1) + 2;
              q = (G + 35019) & 1;
              P = y * 11 + q;
              g |= ((I >> P) & 1) << 2;
              g |= ((T >> 8) & 3) << 3;
              y = (G & 1) + 2;
              q = (G + 36259) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              W = (T >> P) & 7;
              W |= ((I >> 14) & 1) << 3;
              y = (G & 1) + 2;
              q = (G + 19013) & 1;
              P = y * 6 + q;
              W |= ((T >> P) & 1) << 4;
              w = (T >> 14) & 31;
              w |= (I & 1) << 5;
              w |= ((T >> 19) & 31) << 6;
              y = (G & 1) + 2;
              q = (G + 48427) & 1;
              P = y - q;
              w |= ((I >> P) & 3) << 11;
              w |= ((I >> 10) & 1) << 13;
              w |= ((I >> 3) & 1) << 14;
              y = (G & 1) + 2;
              q = (G + 19269) & 1;
              P = y * 6 + q;
              w |= ((I >> P) & 1) << 15;
              t[g] = loaddata(t[W] + w);
              break;
            case 27:
            case 91:
            case 155:
            case 219:
            case 283:
            case 347:
            case 411:
            case 475:
              g = (T >> 6) & 1;
              g |= ((T >> 21) & 1) << 1;
              y = (G & 1) + 2;
              q = (G + 13859) & 1;
              P = y * 3 + q;
              g |= ((T >> P) & 3) << 2;
              y = (G & 1) + 2;
              q = (G + 50595) & 1;
              P = y * 8 + q;
              g |= ((T >> P) & 1) << 4;
              G += 15990;
              y = (G & 1) + 2;
              q = (G + 62795) & 1;
              P = y * 1 + q;
              P = P * (y * 1 + q);
              W = (T >> P) & 31;
              if (t[g]) {
                n.push(t[W]);
              }
              break;
            case 45:
            case 109:
            case 173:
            case 237:
            case 301:
            case 365:
            case 429:
            case 493:
              X = 1;
              I = jsvm_this_insns[h + 1];
              y = (G & 1) + 2;
              q = (G + 8047) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              g = (T >> P) & 31;
              W = (I >> 3) & 1;
              W |= ((T >> 11) & 127) << 1;
              W |= ((I >> 15) & 1) << 8;
              W |= ((T >> 18) & 15) << 9;
              G |= 95202;
              y = (G & 1) + 2;
              q = (G + 40589) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              W |= ((I >> P) & 1) << 13;
              W |= ((T >> 22) & 3) << 14;
              w = I & 3;
              y = (G & 1) + 2;
              q = (G + 24213) & 1;
              P = y * 8 + q;
              w |= ((I >> P) & 1) << 2;
              w |= ((I >> 2) & 1) << 3;
              w |= ((I >> 4) & 3) << 4;
              w |= ((I >> 11) & 1) << 6;
              w |= ((I >> 13) & 1) << 7;
              w |= ((I >> 6) & 3) << 8;
              w |= ((I >> 9) & 1) << 10;
              G |= 60770;
              y = (G & 1) + 2;
              q = (G + 13729) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              w |= ((I >> P) & 1) << 11;
              w |= ((I >> 20) & 1) << 12;
              w |= ((I >> 12) & 1) << 13;
              w |= ((I >> 14) & 1) << 14;
              y = (G & 1) + 2;
              q = (G + 57895) & 1;
              P = y * 1;
              P = P * (y * 1);
              P = P * (y * 1);
              P = P * (y * 1);
              w |= ((I >> P) & 1) << 15;
              t[g] = loaddata(W + w);
              break;
            case 93:
            case 125:
            case 221:
            case 253:
            case 349:
            case 381:
            case 477:
            case 509:
              X = 1;
              I = jsvm_this_insns[h + 1];
              g = (T >> 5) & 1;
              g |= ((T >> 7) & 15) << 1;
              G |= 105172;
              y = (G & 1) + 2;
              q = (G + 585) & 1;
              P = y * 5 + q;
              W = (T >> P) & 4095;
              W |= ((I >> 6) & 1) << 12;
              W |= ((T >> 23) & 1) << 13;
              W |= ((I >> 0) & 3) << 14;
              t[g] = W;
              break;
            case 15:
            case 47:
            case 79:
            case 111:
            case 143:
            case 175:
            case 207:
            case 239:
              g = (T >> 5) & 7;
              g |= ((T >> 9) & 3) << 3;
              G += 58710;
              G |= 97498;
              y = (G & 1) + 2;
              q = (G + 63625) & 1;
              P = y * 5 + q;
              W = (T >> P) & 3;
              G += 30600;
              G |= 120178;
              y = (G & 1) + 2;
              q = (G + 29289) & 1;
              P = y * 9 + q;
              W |= ((T >> P) & 1) << 2;
              W |= ((T >> 21) & 1) << 3;
              W |= ((T >> 13) & 3) << 4;
              G |= 127390;
              y = (G & 1) + 2;
              q = (G + 65421) & 1;
              P = y * 5 + q;
              P = P * (y * 1);
              W |= ((T >> P) & 1) << 6;
              G |= 97802;
              y = (G & 1) + 2;
              q = (G + 8061) & 1;
              P = y * 2 + q;
              P = P * (y * 1 + q);
              W |= ((T >> P) & 1) << 7;
              t[g] = W == 2 ? +t[g] : W == 0 ? {} : W == 1 ? [] : undefined;
              break;
            case 29:
            case 61:
            case 157:
            case 189:
            case 285:
            case 317:
            case 413:
            case 445:
              X = 1;
              I = jsvm_this_insns[h + 1];
              g = (T >> 5) & 1;
              y = (G & 1) + 2;
              q = (G + 29109) & 1;
              P = y - q;
              g |= ((I >> P) & 1) << 1;
              g |= ((T >> 7) & 7) << 2;
              W = (I >> 10) & 1;
              y = (G & 1) + 2;
              q = (G + 35489) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              W |= ((T >> P) & 255) << 1;
              W |= ((I >> 19) & 1) << 9;
              W |= ((T >> 19) & 1) << 10;
              W |= ((I >> 18) & 1) << 11;
              y = (G & 1) + 2;
              q = (G + 50051) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1 + q);
              W |= ((T >> P) & 1) << 12;
              G |= 17706;
              y = (G & 1) + 2;
              q = (G + 41201) & 1;
              P = y * 1 + q;
              P = P * (y * 1 + q);
              W |= ((I >> P) & 1) << 13;
              y = (G & 1) + 2;
              q = (G + 40601) & 1;
              P = y * 1 + q;
              W |= ((I >> P) & 1) << 14;
              W |= ((T >> 20) & 1) << 15;
              t[g] = W;
              break;
            case 271:
            case 303:
            case 335:
            case 367:
            case 399:
            case 431:
            case 463:
            case 495:
              X = 1;
              I = jsvm_this_insns[h + 1];
              g = (T >> 5) & 7;
              G |= 30726;
              y = (G & 1) + 2;
              q = (G + 42757) & 1;
              P = y * 5 + q;
              g |= ((I >> P) & 1) << 3;
              G |= 12552;
              y = (G & 1) + 2;
              q = (G + 47005) & 1;
              P = y * 1 + q;
              P = P * (y * 1 + q);
              g |= ((T >> P) & 1) << 4;
              W = (T >> 10) & 127;
              W |= ((I >> 13) & 1) << 7;
              W |= ((T >> 17) & 15) << 8;
              W |= ((I >> 16) & 1) << 12;
              W |= ((I >> 14) & 1) << 13;
              W |= ((T >> 21) & 3) << 14;
              W = (W << 16) >> 16;
              t[g] = W;
              break;
            default:
              X = 1;
              I = jsvm_this_insns[h + 1];
              g = (T >> 6) & 15;
              y = (G & 1) + 2;
              q = (G + 52155) & 1;
              P = y * 3 + q;
              P = P * (y * 1 + q);
              g |= ((T >> P) & 1) << 4;
              W = (I >> 12) & 1;
              W |= ((T >> 10) & 3) << 1;
              W |= ((I >> 23) & 1) << 3;
              y = (G & 1) + 2;
              q = (G + 28657) & 1;
              P = y * 1 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((T >> P) & 3) << 4;
              W |= ((I >> 5) & 1) << 6;
              W |= ((I >> 21) & 1) << 7;
              W |= ((T >> 14) & 1) << 8;
              W |= ((I >> 18) & 1) << 9;
              W |= ((I >> 10) & 1) << 10;
              W |= ((I >> 15) & 1) << 11;
              y = (G & 1) + 2;
              q = (G + 37397) & 1;
              P = y * 2 + q;
              P = P * (y * 1);
              P = P * (y * 1);
              W |= ((T >> P) & 1) << 12;
              W |= ((T >> 15) & 3) << 13;
              G <<= 4;
              y = (G & 1) + 2;
              q = (G + 8581) & 1;
              P = y * 11 + q;
              W |= ((T >> P) & 1) << 15;
              w = (T >> 17) & 1;
              w |= ((I >> 20) & 1) << 1;
              w |= ((T >> 18) & 3) << 2;
              w |= ((I >> 4) & 1) << 4;
              t[g] = loaddata(W + t[w]);
              break;
          }
          a = h === -1 ? 0 : 21;
          break;
        }
      }
    }
  }
  function _pa_j74lcir86(str) {
    var x = 2;
    x: while (x !== undefined) {
      switch (x) {
        case 0:
          (function (_a_r_g_, x) {
            switch (x) {
            }
          })(arguments, (x / 0) | 0);
          break;
        case 1: {
          return false;
        }
        case 2: {
          var sign1 = [52, 58, 53, 121, 116, 102];
          var sign2 = [90, 91];
          signMatched = _pa_zs3f7lk7s(str, _pa_v6dsxr9iw(sign1), _pa_v6dsxr9iw(sign2));
          x = !signMatched ? 1 : 3;
          break;
        }
        case 3: {
          return str
            .replace(new RegExp(_pa_v6dsxr9iw(sign2), 'g'), _pa_fqls53syzs)
            .replace(new RegExp(_pa_v6dsxr9iw(sign1), 'g'), _pa_fqls09pow);
        }
      }
    }
  }
  function _pa_k27dg8zam(str) {
    var x = 4;
    x: while (x !== undefined) {
      switch (x % 4) {
        case 0:
          (function (_a_r_g_, e) {
            switch (e) {
              case 0: {
                x = i < strTokenList.length ? 8 : 2;
                return;
              }
              case 1: {
                factor = parseInt(new Date().getFullYear() / 100, 10);
                charCodeList = [];
                strTokenList = str.split('');
                i = 0;
                x = 0;
                return;
              }
              case 2: {
                charCodeList.push(strTokenList[i].charCodeAt());
                x = 12;
                return;
              }
              case 3: {
                i++;
                x = 0;
                return;
              }
            }
          })(arguments, (x / 4) | 0);
          break;
        case 1:
          (function (_a_r_g_, e) {
            switch (e) {
              case 0: {
                x = i < charCodeList.length ? 5 : 3;
                return;
              }
              case 1: {
                code = charCodeList[i];
                r = parseInt(code / factor);
                z = parseInt(factor / 10);
                newCharCodeList.push(r === z ? code : code - 1);
                x = 9;
                return;
              }
              case 2: {
                i++;
                x = 1;
                return;
              }
            }
          })(arguments, (x / 4) | 0);
          break;
        case 2: {
          newCharCodeList = [];
          var i = 0;
          x = 1;
          break;
        }
        case 3: {
          return String.fromCharCode.apply(undefined, newCharCodeList);
        }
      }
    }
  }
  function _pa_zs3f7lk7s(str, sign1, sign2) {
    signPos1 = parseInt(new Date().getFullYear() / 100, 10);
    signPos2 = str.length - 2;
    actValuePos1 = str.slice(signPos1, signPos1 + sign1.length);
    actValuePos2 = str.slice(signPos2);
    return actValuePos1 === sign1 && actValuePos2 === sign2;
  }
  function _pa_fqls09pow(match, offset) {
    var signPos1 = parseInt(new Date().getFullYear() / 100, 10);
    return offset === signPos1 ? '' : match;
  }
  var jsvm_this_tmpValue;
  var jsvm_this_insns = [];
  var jsvm_this_sdata = [];
  var jsvm_this_entrances = [];
  var jsvm_this_privs = [];
  jsvm_this_initialization(
    "Lxoxxxuu9nrxuxVdbaxretAal'\tsaoxx cxgKexinec97xrefvadxxVnoutx''nxenVn\tx3\t'sxxvx 'x'\t'x'Etr3x'vxjpWxTx\tioxox'ha9Qo9e'Txd9x3td'\t'cx\tg9n'XxLnXefixex\tuoYeOxnfT\t9AkuexnvdxuxAxx\t3edx'9'\t'xsttxTVxin9\t'js3mx9x\t'\t\tnxsxTdTxCdxxf_xu\tBW7xx'N'ViEhLTLx\tuxnxxbBgxd3x6xxoAn4lVx7xiL\txxxam 9xbEHQxdafined\tsxdefinxxxxndWfVoxx\txndefnnefixo4efxnrHxA9\tebxn3x\tn'xxatr94bfWL33\t'XVxx'jWaxxsxY'jsvmV9ac' 'Lsv9wVxsaxxa_'\txndnfxT3x\txxxefannd3xxx/fjxeX2u_xeaa3e0xLvt\tu_p\tLv6OxxI9ix'LpssxmIxeTiE'cbcsvm eIIx\t2nxexLnanxuxdeVi4eex'xV 2tc'uxv7undefiqpL\tnVllG_iIe3faxNe\t'var mbx3his'xTWsvmfxLcNVhxxWmxhrta3+9_'3'x'I'oxa_vqjslV9yxx'xTjs9ltxxxixeu'juxxdxsI'xuxLk4inedsaxddf'riTxuSdxfxpxd\tTxvxlixex4uxdefi9exxnVTl\ttrmV\t'vlLd9'xadxxxxexisxdxjsv fu3x'\tTAEx3xoxtav_3x3xxnne'inxe\t1xxMuxxx\tdn0il\tLrn3xe'lL\tr'vxLewl'u9is'\tmjxvxfHnc'g'klvIpoxtakaxXx\tuVdefinexxu6Xmfx\tbN'uHxXf9neIk'b'\t3jxxm K9g'nT3lxxvW8qxd3zxndlfxL'R\tnurI\ttmJexualse\t'va'x'xbxhiss\ti9gLxfexx9g'xxvmIaakaL_0_'TxJnxxxeSjr'Wx'4txTVa9'x'_paHjmxceip83xY'Hr'odxaxxx\tx_xxNVrnen3znbxxW2uwxxaxx\tubx'WdxnHbcnxbxmxHxsx'iaxnx9LxL3VIixjqxxxHxlA'x9\tkmnw5xxx2npjYx\txNx9nxxnTLVCW6kexs\tUlVI+Lxx9o\txnxaIrTL'WxxX3GbxxcaxkxxxAdNx2xAEabk3xX5dux\tfOR1A3n\txxpJxox\tx2Vbx4Nx9VkbaRxnxHmHkxlAx/nhnCL4xHxEdxxa3xbvf\tkcxI+ExAx'xrxbxmqxcVxcdrdVxw3V\txcVaxkGEVf0xXxax3'LLTxLxxxuxCWbxxVxxw4bA9x4aVVbkxxaxxVHdxIuxxAY37L\tLiuV/X3Qxxrxuaahuxxxxxw5dxxb3xixx3nNmCs7kxTLxarI\t9xlg3b1xx3nWxpa1xaxxxqbxnxx\txY5xxxx39IxxxnNx'xJLxLn'wxbxklh29l1xm3\taICxxxxxG6'Ex 9E9IxLWxIcxxxGxxe7fImrxr3vaXxSLVWSxv3bbxvWxxHV9x3VxpxbxxxVnbHxoxWxaLu2rxxVxxL9xxTVhx3Vmawoxnsx3abbxE'4xj\tLxsl1xxWXWTVnxmrVmVxxEfV\txxx4xr9d9xTWxAb3l5ixh\tmb5rIxxxxxdQl9T1mEx7LxxIxxxT'VxxxV'xkc_VWVxWLVx9MxWxI3VYxnxT9/xxIxDntnL 3Ve3xcxx7biHxxxhuAH6x3xxcb3Ixxx3HxWxIxbaxY3tLxL3aVoWGExxxbxhLxx9UaxxGbxxxcwIx1V3i3xA9bx\tx3IVmexxkcnk9xxpsxxvxVxxk3ixxVgx33x\tvV9xxbax2xaxaxxxLcx3npcIxb\texHip7LxdbaxpmbxxY4'EabxCamdxnxxeIc9fAe47Lbb3xAaadl3exxxnxVG3xVxSIbTxxx3Mxmu3VIdLnbLxc3Lxax7xk3d3xex3xbxexxq3xcxb4V9u'exHVVxx3V6xILxLMxxxxcxxxmnx\tx6lxpx3\tbxx3xe9C'x'VLxexxxxgixQk3exxxxTCExxMLVxxax3xbx9AbIxbxxRaTxxx/xIAkxTLHxi5lx4nLxxxqsfWd6V\tYx2HbJa9\txxrHLxIc3ExxxjxlaxQL\t9oYbxuxnxaVx9LWxx94VxxxLTxV3xLxV93I9xaV3LIixaxxLUxVxxxkLxI5x3xxxxxbnxLxxxurex3TLTxxx3axxxV9VImcVkxnsbr3xxWxxgicshilxkxxxKxxaxExIwx99r9VnWxVWx3VxLxTlxx4srxadxWxxa33jaxna7xVx3xVat3Yx_Wa9'3\tpWx3x3\t\tguxAxuxxMrdbxxexf+xxx_3Xxxxbxr/bxe73lc3xxixHxrXEm33VxrIeIwelaxnx\txX3xxYHxxI\tWAb3xxacxdxbx1ccnoxdxxxnaxxrixxV3 xbxxxxAA49xxYihHbxoIIxLVxxExxTxtxARvaxra9nWi3LxxkpxMn'bVxaxacxL|oAaxxdxancx9odxxalxAx6xx9Lx9xGax'x\txX'xxxTxxxGx3LAxxxxxuGbxxexx3xVxm4bxxxxL3bxxT9xxxxLTyoxxta3OxGlxxexLAoAnxIxAxwijx1xx3X2WR35\tx9nxMnVxuwxxxb\te9ddpAGexxPd'ixAiLaxxrxZxxxxx9n_boxxxx36xkhoLTW3xxaxxxxoxxnxxaaxVxxxxxc3__xVxxxbx9unxWxV_9xHexrYxdWxx3LcaxLHg2xcxxLxxTmxeVt'a43LHVj+ohV4LI33xL'9xAwfxrLx eu\tx9xexxx4xxcxg1xRa+xLexWx9bx53W3VxkxVxoxbxxx3xx\toxxIjI9xAWxauxxyLT+rExxrVvxpAxxaxgGxxxxLELunVxoGbxxW3LdxL93xbxdxlXAo5ixaxxxxIxqi'\t6oAxnu_xxInaxaxxExKxxxrxxk\tLxWLaxx'x3I6LWTq7Varxxekbvon3b33x3xxxxxVpVxxxVaVQx+inTxxxVILoxxVHTx3'AiuVxtxxxxxx3dHxxLcYa'1nx6txxIcmzlAr_xaexmcx9ln\txxLxxI\tx93xxxxai'xVax4xxxxxxxxlxtx9xx3b1xnVau\txiH9VxxdmusGxoYxxLTEuxxLH3xd'Wx/9xoxHa'aVkVLxx3Ox9naVOTxVxxx3ulaKYT'txl6bWxWxWxxdx3uVxxjHELRsxLxV3xx3\t2xyxb\t'xxrtx34xxx9baxPdxxxV\txxH41aVnx3Vx6IJmxeMxuncxJbVxTx9TxfuxjebxnVxLxTbxHn3xxibadxx9\trxxxsaxaALx7Lxx3bV9xu Vx9xLxGbm9xxxme3xx3xVTRUxxnAv1mLxxhLLa+3xxxrVUl1PWjxd9rAxxofxcEbx9YxxLxia9xC'dx1l3vsGtmbxcxkxALxbx0x3ixYxxnNxexJsxxbxaaHx92Vcal9AW3WhuubexxVp9xxxCWx\tL9d1exxxxxV\taxclZxExx3\txxx9xHbcxxx3Hd3Vpi'xxxA9xxxxxxA/x6IcN3xVnTxxxoxlxVx9MxbxxWCELxrdbxxVxxxxaxL\txxxxbHarfxTxfxxVixHHxL3bxxxLabx33TLaxeuuxxxbxxxarVtxTLxa_x'xxxeVxxxCAxxbxtxJaxTxxixn7bxxix3bxxKl\t2sxHTkEZxgx'Ik3b999cxrn'xwbmaAY3xLa'3Icrxxx6xrxlxxXxxsxxx6xxfxw'xOr3VxxxwILxxadn3xxxdxVxTx3UXdbk3xs'taxb\tXx3wpxxxLaxfxAxxaxrxI13W6xL3xLxlDbxxx'xAuL x3xx\tI3x3YxLApx3xxjxT3xxxaxTxxG7xxLxxxxxQnbxxxadxxcW9rxaulxx3xxxxLxx'xV993VxAInxxxeeQTETxmE3AxbVX3ahxLEaYxxHWjxb'xVbCrxxxexuPx3xrx6xcxaxeaxfx|x07y\t3x39gxoxGxIcbdd'xx3Axxxux0+bxxxxxxLYx9WLW0\tbHxxcsVn'xxWxx\t3VXxxxxxI\tAAxA3xxexxxcXxxbaxlkEAnA3xaxaAIbxxb'3axVx3xbxxx3asLT6xafxW139A3cxA7wxwxAZxxw5aaaEuxnnGxLxxx\txxnexxxaxfxcxlxAnxmmxxxff3gHx99VexxqY09oXxxQ'QO3TTmEV0TxxxxlsxxExeLx'x3L9xtx3bl7xXksxtIcxxlVxxx3xxxAaxxLxTuxTwrlHxzGZasxxr3xus0x3\tJ9v+6xxxbG+axxxx6qlxrErjxYHU8lboFxe|axTRAx3riYxIxaxWxTxCxxLxnAkExxa5"
  );
  ('__p_r_e_n_e_t_a_g__');
  var e;
  var _pa_n4lto7xi,
    str,
    _pa_j74lcir86,
    _pa_k27dg8zam,
    _pa_v6dsxr9iw,
    sign,
    _pa_zs3f7lk7s,
    sign1,
    sign2,
    _pa_fqls09pow,
    match,
    offset,
    _pa_fqls53syzs,
    encodeStrNotWithSign,
    decodeStr,
    signMatched,
    factor,
    charCodeList,
    strTokenList,
    i,
    newCharCodeList,
    code,
    r,
    z,
    l,
    signPos1,
    signPos2,
    actValuePos1,
    actValuePos2;
  var jsvmportal_0_1 = function () {
    var inout = arguments,
      retval;
    jsvm_this_run(function () {
      return eval(arguments[0]);
    }, 0);
    return retval;
  };
  jsvm_this_run(function () {
    return eval(arguments[0]);
  }, 1);
  var n;
  jsvm_this_run(function () {
    return eval(arguments[0]);
  }, 2);
  var a;
  var jsvmportal_2_1 = function () {
    var inout = arguments,
      retval;
    jsvm_this_run(function () {
      return eval(arguments[0]);
    }, 3);
    return retval;
  };
  jsvm_this_run(function () {
    return eval(arguments[0]);
  }, 4);
  var o;
  jsvm_this_run(function () {
    return eval(arguments[0]);
  }, 5);
  var p;
  var jsvmportal_4_1 = function () {
    var inout = arguments,
      retval;
    jsvm_this_run(function () {
      return eval(arguments[0]);
    }, 6);
    return retval;
  };
  jsvm_this_run(function () {
    return eval(arguments[0]);
  }, 7);
  ('');
  ('');
})();
