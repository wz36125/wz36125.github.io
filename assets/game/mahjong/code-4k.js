// Copyrights C-EGG inc.
(function () {
	function aa(b, d) {
		return 0 != (0 == b ? 0 != (d & 1536) ? ~d & 8 : d & 64 : d & 64)
	}

	function ba(b) {
		return (b & 32) >> 4 | (b & 128) >> 7
	}

	function ca(b) {
		return 0 != (b & 2048) ? "東天紅" : (b & 16 ? "三" : "四") + "般上特鳳若銀琥孔".substr(ba(b) + 4 * (0 != (b & 1536)), 1) + (b & 8 ? "南" : "東") + (0 != (b & 1536) ? (b & 8 ? "" : "速") + (~b & 512 ? "祝０" : b & 1024 ? "祝５" : "祝２") : (b & 4 ? "" : "喰") + (b & 2 ? "" : "赤") + (b & 64 ? "速" : "") + (b & 256 ? "暗" : "") + (b & 512 ? "祝" : ""))
	}

	var da = "新人 ９級 ８級 ７級 ６級 ５級 ４級 ３級 ２級 １級 初段 二段 三段 四段 五段 六段 七段 八段 九段 十段 天鳳".split(" "),
		ea = " 滿貫 跳滿 倍滿 三倍滿 役滿".split(" "), fa = {
			kaze4: "四風連打", yao9: "九種九牌", ron3: "三家和了", reach4: "四家立直",
			kan4: "四槓散了", nm: "流局滿貫"
		}, ja = [{
			800: "300-500",
			1100: "400-700",
			1200: "400-800",
			1500: "500-1000",
			1800: "600-1200",
			2E3: "700-1300",
			2300: "800-1500",
			2400: "800-1600",
			2700: "900-1800",
			3E3: "1000-2000",
			3500: "1200-2300",
			3900: "1300-2600",
			4400: "1500-2900",
			4800: "1600-3200",
			5400: "1800-3600",
			5900: "2000-3900",
			6E3: "2000-4000",
			9E3: "3000-6000",
			12E3: "4000-8000",
			18E3: "6000-12000",
			24E3: "8000-16000",
			48E3: "16000-32000",
			72E3: "24000-48000"
		}, {
			1E3: 500,
			1400: 700,
			1600: 800,
			2E3: 1E3,
			2400: 1200,
			2600: 1300,
			3E3: 1500,
			3200: 1600,
			3600: 1800,
			4E3: 2E3,
			4600: 2300,
			5200: 2600,
			5800: 2900,
			6400: 3200,
			7200: 3600,
			7800: 3900,
			8E3: 4E3,
			12E3: 6E3,
			16E3: 8E3,
			24E3: 12E3,
			32E3: 16E3,
			64E3: 32E3,
			96E3: 48E3
		}, {
			1100: "300-500",
			1500: "400-700",
			1600: "400-800",
			2E3: "500-1000",
			2400: "600-1200",
			2700: "700-1300",
			3100: "800-1500",
			3200: "800-1600",
			3600: "900-1800",
			4E3: "1000-2000",
			4700: "1200-2300",
			5200: "1300-2600",
			5900: "1500-2900",
			6400: "1600-3200",
			7200: "1800-3600",
			7900: "2000-3900",
			8E3: "2000-4000",
			12E3: "3000-6000",
			16E3: "4000-8000",
			24E3: "6000-12000",
			32E3: "8000-16000",
			64E3: "16000-32000",
			96E3: "24000-48000"
		}, {
			1500: 500,
			2100: 700,
			2400: 800,
			3E3: 1E3,
			3600: 1200,
			3900: 1300,
			4500: 1500,
			4800: 1600,
			5400: 1800,
			6E3: 2E3,
			6900: 2300,
			7800: 2600,
			8700: 2900,
			9600: 3200,
			10800: 3600,
			11700: 3900,
			12E3: 4E3,
			18E3: 6E3,
			24E3: 8E3,
			36E3: 12E3,
			48E3: 16E3,
			96E3: 32E3,
			144E3: 48E3
		}],
		ka = "門前清自摸和;立直;一發;槍槓;嶺上開花;海底摸月;河底撈魚;平和;斷么九;一盃口;自風 東;自風 南;自風 西;自風 北;場風 東;場風 南;場風 西;場風 北;役牌 白;役牌 發;役牌 中;兩立直;七對子;混全帶么九;一氣通貫;三色同順;三色同刻;三槓子;對對和;三暗刻;小三元;混老頭;二盃口;純全帶么九;混一色;清一色;人和;天和;地和;大三元;四暗刻;四暗刻單騎;字一色;綠一色;清老頭;九蓮寶燈;純正九蓮寶燈;國士無雙;國士無雙13面;大四喜;小四喜;四槓子;ドラ;裏ドラ;赤ドラ;親;門前;榮和;本場;明槓;暗槓;五;ガリ;セット;カラス;全ガリ;バンバン".split(";"),
		pa = [20, 20, 20, 20, 40, 60, 80, 100, 100, 100, 400, 800, 1200, 1600, 2E3, 2400, 2800, 3200, 3600, 4E3, 0],
		qa = [1, 3, 0, 7, 9, 11, 0, 15, 65, 0, 0, 0, 73, 0, 0, 0, 129, 131, 0, 135, 137, 139, 0, 143, 193, 0, 0, 0, 201, 0, 0, 0, 33, 35, 0, 39, 41, 43, 0, 47, 97, 0, 0, 0, 105, 0, 0, 0, 161, 163, 0, 167, 169, 171, 0, 175, 225, 0, 0, 0, 233, 0, 0, 0, 17, 25, 145, 153, 49, 57, 177, 185, 81, 89, 209, 217, 113, 121, 241, 249, 1025, 1033, 513, 521, 1537, 1545, 1553, 1561, 1153, 1161, 641, 649, 1665, 1673, 1681, 1689, 1057, 1065, 545, 553, 1569, 1577, 1585, 1593, 1185, 1193, 673, 681, 1697, 1705, 1713, 1721, 2065];

	function ra(b, d, c) {
		return {x: b, y: d, z: c}
	}

	function sa(b, d) {
		return ra(b.x - d.x, b.y - d.y, b.z - d.z)
	}

	function ta(b) {
		var d = Math.sqrt(b.x * b.x + b.y * b.y + b.z * b.z);
		return ra(b.x / d, b.y / d, b.z / d)
	}

	function ua(b, d) {
		return b.x * d.x + b.y * d.y + b.z * d.z
	}

	function va(b, d) {
		return ra(b.y * d.z - b.z * d.y, b.z * d.x - b.x * d.z, b.x * d.y - b.y * d.x)
	}

	function wa() {
		var b = 1, d = 0, c = ra(0, 0, 0), a = ra(0, 0, 0), e = ra(0, 0, 0), l = ra(0, 0, 0);
		return {
			Vc: function (m, g, f, k, h) {
				l = m;
				b = h;
				e = ta(sa(l, g));
				c = ta(va(f, e));
				m = va(e, c);
				a = ra(m.x / b, m.y / b, m.z / b);
				k = .5 / Math.tan(3.141592 / 180 * k / 2);
				e = ra(e.x * k, e.y * k, e.z * k);
				d = Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z)
			}, ad: function (m, g, f) {
				m = ra(m, g, f);
				m = sa(m, sa(l, e));
				g = -ua(m, e) / d;
				if (0 > g) throw 0;
				g = d / (d + g);
				m.x = ua(m, c) * g;
				m.z = ua(m, a) * g * b * b;
				m.z *= -1;
				return m
			}
		}
	}

	var xa = wa(), Ca = wa(), Pa = ra(0, 480, 420), Qa = ra(0, 0, 20), Ra = ra(0, 1, 0);
	xa.Vc(Pa, Qa, Ra, 30, 1.33);
	Pa = ra(0, 200, 600);
	Qa = ra(0, 53, 0);
	Ra = ra(0, 1, 0);
	Ca.Vc(Pa, Qa, Ra, 30, 1.33);
	var Sa = function () {
		function b(a, b, l, m, g) {
			b = a.ad(b, 0, l);
			a = a.ad(m, 0, g);
			return {R: (a.x - b.x) * d, ka: (a.z - b.z) * c}
		}

		var d = 0, c = 0;
		return {
			Rb: function (a, b) {
				d = a;
				c = b
			}, 116: [function (a, c) {
				return void 0 === c ? b(Ca, 12 * (a - 6) - 5.9, 139.1, 12 * (a - 6) + 5.9, 139.1) : b(Ca, 12 * (a - 6) - 5.9, 139.1, 12 * (c - 6) - 5.9, 139.1)
			}, function (a, c) {
				return void 0 === c ? b(xa, 139.9, 12 * (6 - a) - .1 * 6 + 6, 139.9, 12 * (6 - a) - .1 * 6 - 6) : b(xa, 139.9, 12 * (6 - a) - .1 * 6 + 6, 139.9, 12 * (6 - c) - .1 * 6 + 6)
			}, function (a, c) {
				return void 0 === c ? b(xa, 12 * (6 - a) + 5.9, -145.9, 12 * (6 - a) - 5.9, -145.9) : b(xa, 12 * (6 - a) +
					5.9, -145.9, 12 * (6 - c) + 5.9, -145.9)
			}, function (a, c) {
				return void 0 === c ? b(xa, -139.9, 12 * (a - 6) - .1 * 6 - 6, -139.9, 12 * (a - 6) - .1 * 6 + 6) : b(xa, -139.9, 12 * (a - 6) - .1 * 6 - 6, -139.9, 12 * (c - 6) - .1 * 6 - 6)
			}], 121: [function (a) {
				return b(xa, 12 * (a - 8.5) + 15 - 5.9, 103 - .1 * 7 + 8, 12 * (a - 8.5) + 20.9, 103 - .1 * 7 + 8)
			}, function (a) {
				return b(xa, 110.9, 12 * (8.5 - a) - 15 - .1 * 7 + 6, 110.9, 12 * (8.5 - a) - 15 - .1 * 7 - 6)
			}, function (a) {
				return b(xa, 12 * (8.5 - a) - 15 + 5.9, -103 - .1 * 7 - 8, 12 * (8.5 - a) - 15 - 5.9, -103 - .1 * 7 - 8)
			}, function (a) {
				return b(xa, -110.9, 12 * (a - 8.5) + 15 - .1 * 7 - 6, -110.9, 12 * (a - 8.5) + 15 - .1 * 7 +
					6)
			}], 107: [function (a) {
				var c = 12 > a ? a % 6 : a - 12;
				a = 12 > a ? ~~(a / 6) : 2;
				return b(xa, 12 * (c - 3) + 11.9, 16 * a + 44 - .5 + 8, 12 * (c - 3) + 15.9, 16 * a + 46 - .5 + 6)
			}, function (a) {
				var c = 12 > a ? a % 6 : a - 12;
				a = 12 > a ? ~~(a / 6) : 2;
				return b(xa, 16 * a + 51.9, 12 * (3 - c) - 6 - .5 - 6, 16 * a + 51.9, 12 * (3 - c) - 8 - .5 - 8)
			}, function (a) {
				var c = 12 > a ? a % 6 : a - 12;
				a = 12 > a ? ~~(a / 6) : 2;
				return b(xa, 12 * (3 - c) - 6 - 5.9, -16 * a - 44 - .5 - 8, 12 * (3 - c) - 8 - 7.9, -16 * a - 44 - 2 - .5 - 6)
			}, function (a) {
				var c = 12 > a ? a % 6 : a - 12;
				a = 12 > a ? ~~(a / 6) : 2;
				return b(xa, -16 * a - 44 - 7.9, 12 * (c - 3) + 6 - .5 + 6, -16 * a - 44 - 2 - 5.9, 12 * (c - 3) + 8 - .5 + 8)
			}], 110: [function (a) {
				return b(xa,
					12 * -a + 132 - 5.9, 142.1, 12 * -a + 132 - 2 - 7.9, 142.1)
			}, function (a) {
				return b(xa, 142.9, 12 * +a - 84 - 48 - .1 * 7 + 6, 142.9, 12 * +a - 84 - 48 + 2 - .1 * 7 + 8)
			}, function (a) {
				return b(xa, 12 * +a - 84 - 48 + 5.9, -148.9, 12 * +a - 84 - 48 + 9.9, -148.9)
			}, function (a) {
				return b(xa, -142.9, 12 * -a + 132 - .1 * 7 - 6, -142.9, 12 * -a + 132 - 2 - .1 * 7 - 8)
			}]
		}
	}();

	function Ta(b) {
		var d = ~~b.m, c = d & 3, a;
		if (d & 4) {
			b[2] = 3;
			a = (d & 64512) >> 10;
			var e = a % 3;
			a = ~~(a / 3);
			a = 4 * (9 * ~~(a / 7) + a % 7);
			a = [a + 0 + ((d & 24) >> 3), a + 4 + ((d & 96) >> 5), a + 8 + ((d & 384) >> 7)];
			a.splice(0, 0, a.splice(e, 1)[0])
		} else d & 24 ? (b[2] = d & 16 ? 5 : 1, b[4] = (d & 96) >> 5, a = (d & 65024) >> 9, e = a % 3, a = 4 * ~~(a / 3), a = [a + 0, a + 1, a + 2, a + 3], b[4] = a.splice(b[4], 1)[0], a.splice(c ^ 3, 0, a.splice(e, 1)[0]), d & 16 && (a = [b[4]])) : d & 32 ? (b[2] = 10, a = [(d & 65280) >> 8]) : 0 == c ? (b[2] = 4, a = (d & 65280) >> 8 & -4, a = [a + 2, a + 0, a + 1, a + 3]) : (b[2] = 2, d = (d & 65280) >> 8, a = d & -4, a = [a + 0, a + 1, a + 2, a + 3], a.splice(d &
			3, 1), a.splice(1 == c ? 3 : c ^ 3, 0, d));
		b[3] = c;
		b[1] = a
	};

	function Va() {
		this.Y = 624;
		this.tb = 397;
		this.gd = 2567483615;
		this.Pb = 2147483648;
		this.Ob = 2147483647;
		this.B = Array(this.Y);
		this.ha = this.Y + 1
	}

	function Wa(b, d) {
		b.B[0] = d >>> 0;
		for (b.ha = 1; b.ha < b.Y; b.ha++) d = b.B[b.ha - 1] ^ b.B[b.ha - 1] >>> 30, b.B[b.ha] = (1812433253 * ((d & 4294901760) >>> 16) << 16) + 1812433253 * (d & 65535) + b.ha, b.B[b.ha] >>>= 0
	}

	function ab(b, d, c) {
		var a, e, l;
		Wa(b, 19650218);
		a = 1;
		e = 0;
		for (l = b.Y > c ? b.Y : c; l; l--) {
			var m = b.B[a - 1] ^ b.B[a - 1] >>> 30;
			b.B[a] = (b.B[a] ^ (1664525 * ((m & 4294901760) >>> 16) << 16) + 1664525 * (m & 65535)) + d[e] + e;
			b.B[a] >>>= 0;
			a++;
			e++;
			a >= b.Y && (b.B[0] = b.B[b.Y - 1], a = 1);
			e >= c && (e = 0)
		}
		for (l = b.Y - 1; l; l--) m = b.B[a - 1] ^ b.B[a - 1] >>> 30, b.B[a] = (b.B[a] ^ (1566083941 * ((m & 4294901760) >>> 16) << 16) + 1566083941 * (m & 65535)) - a, b.B[a] >>>= 0, a++, a >= b.Y && (b.B[0] = b.B[b.Y - 1], a = 1);
		b.B[0] = 2147483648
	}

	function bb(b) {
		var d, c = [0, b.gd];
		if (b.ha >= b.Y) {
			var a;
			b.ha == b.Y + 1 && Wa(b, 5489);
			for (a = 0; a < b.Y - b.tb; a++) d = b.B[a] & b.Pb | b.B[a + 1] & b.Ob, b.B[a] = b.B[a + b.tb] ^ d >>> 1 ^ c[d & 1];
			for (; a < b.Y - 1; a++) d = b.B[a] & b.Pb | b.B[a + 1] & b.Ob, b.B[a] = b.B[a + (b.tb - b.Y)] ^ d >>> 1 ^ c[d & 1];
			d = b.B[b.Y - 1] & b.Pb | b.B[0] & b.Ob;
			b.B[b.Y - 1] = b.B[b.tb - 1] ^ d >>> 1 ^ c[d & 1];
			b.ha = 0
		}
		d = b.B[b.ha++];
		d ^= d >>> 11;
		d ^= d << 7 & 2636928640;
		d ^= d << 15 & 4022730752;
		return (d ^ d >>> 18) >>> 0
	}

	Va.prototype.random = function () {
		return bb(this) * (1 / 4294967296)
	};
	var cb = function () {
		var b = [-2147483648, 8388608, 32768, 128],
			d = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
				1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817,
				3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992,
				116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
			c = [];
		return function (a) {
			var e, l, m, g, f, k, h, p, q, r, u, v, F, L, oa, la, C, ga = !1, I, hb = 0, tb = 0, Xa = 0, Ua = a.length, ma,
				na, G, w, A, y, Ib, Jb, Bb, Cb, Ya, Za, O, Q, ha, ia, $a;
			e = 1779033703;
			l = 4089235720;
			m = 3144134277;
			g = 2227873595;
			f = 1013904242;
			k = 4271175723;
			h = 2773480762;
			p = 1595750129;
			q = 1359893119;
			r = 2917565137;
			u = 2600822924;
			v = 725511199;
			F = 528734635;
			L = 4215389547;
			oa = 1541459225;
			la = 327033209;
			C = 0;
			do {
				c[0] = C;
				c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = c[16] = c[17] = c[18] = c[19] = c[20] = c[21] = c[22] = c[23] = c[24] = c[25] = c[26] = c[27] = c[28] = c[29] = c[30] = c[31] = c[32] = 0;
				for (I = tb; hb < Ua && 128 > I; ++hb) c[I >> 2] |= a[hb], I += 4;
				Xa += I - tb;
				tb = I - 128;
				hb == Ua && (c[I >> 2] |= b[I & 3], ++hb);
				C = c[32];
				hb > Ua && 112 > I && (c[31] = Xa << 3, ga = !0);
				for (I = 32; 160 > I; I += 2) O = c[I - 30], Q = c[I - 29], ma = (O >>> 1 | Q << 31) ^ (O >>>
					8 | Q << 24) ^ O >>> 7, na = (Q >>> 1 | O << 31) ^ (Q >>> 8 | O << 24) ^ (Q >>> 7 | O << 25), O = c[I - 4], Q = c[I - 3], G = (O >>> 19 | Q << 13) ^ (Q >>> 29 | O << 3) ^ O >>> 6, w = (Q >>> 19 | O << 13) ^ (O >>> 29 | Q << 3) ^ (Q >>> 6 | O << 26), O = c[I - 32], Q = c[I - 31], ha = c[I - 14], ia = c[I - 13], A = (ia & 65535) + (Q & 65535) + (na & 65535) + (w & 65535), w = (ia >>> 16) + (Q >>> 16) + (na >>> 16) + (w >>> 16) + (A >>> 16), y = (ha & 65535) + (O & 65535) + (ma & 65535) + (G & 65535) + (w >>> 16), G = (ha >>> 16) + (O >>> 16) + (ma >>> 16) + (G >>> 16) + (y >>> 16), c[I] = G << 16 | y & 65535, c[I + 1] = w << 16 | A & 65535;
				var Da = e, Ea = l, ya = m, za = g, Aa = f, Ba = k, Fa = h, Ga = p, Ha = q, Ia = r, Ja = u, Ka = v,
					La = F, Ma = L, Na = oa, Oa = la;
				Bb = ya & Aa;
				Cb = za & Ba;
				for (I = 0; 160 > I; I += 8) ma = (Da >>> 28 | Ea << 4) ^ (Ea >>> 2 | Da << 30) ^ (Ea >>> 7 | Da << 25), na = (Ea >>> 28 | Da << 4) ^ (Da >>> 2 | Ea << 30) ^ (Da >>> 7 | Ea << 25), G = (Ha >>> 14 | Ia << 18) ^ (Ha >>> 18 | Ia << 14) ^ (Ia >>> 9 | Ha << 23), w = (Ia >>> 14 | Ha << 18) ^ (Ia >>> 18 | Ha << 14) ^ (Ha >>> 9 | Ia << 23), Ib = Da & ya, Jb = Ea & za, Ya = Ib ^ Da & Aa ^ Bb, Za = Jb ^ Ea & Ba ^ Cb, $a = Ha & Ja ^ ~Ha & La, y = Ia & Ka ^ ~Ia & Ma, O = c[I], Q = c[I + 1], ha = d[I], ia = d[I + 1], A = (ia & 65535) + (Q & 65535) + (y & 65535) + (w & 65535) + (Oa & 65535), w = (ia >>> 16) + (Q >>> 16) + (y >>> 16) + (w >>> 16) + (Oa >>> 16) + (A >>> 16), y = (ha & 65535) +
					(O & 65535) + ($a & 65535) + (G & 65535) + (Na & 65535) + (w >>> 16), G = (ha >>> 16) + (O >>> 16) + ($a >>> 16) + (G >>> 16) + (Na >>> 16) + (y >>> 16), O = G << 16 | y & 65535, Q = w << 16 | A & 65535, A = (Za & 65535) + (na & 65535), w = (Za >>> 16) + (na >>> 16) + (A >>> 16), y = (Ya & 65535) + (ma & 65535) + (w >>> 16), G = (Ya >>> 16) + (ma >>> 16) + (y >>> 16), ha = G << 16 | y & 65535, ia = w << 16 | A & 65535, A = (Ga & 65535) + (Q & 65535), w = (Ga >>> 16) + (Q >>> 16) + (A >>> 16), y = (Fa & 65535) + (O & 65535) + (w >>> 16), G = (Fa >>> 16) + (O >>> 16) + (y >>> 16), Na = G << 16 | y & 65535, Oa = w << 16 | A & 65535, A = (ia & 65535) + (Q & 65535), w = (ia >>> 16) + (Q >>> 16) + (A >>> 16), y = (ha &
					65535) + (O & 65535) + (w >>> 16), G = (ha >>> 16) + (O >>> 16) + (y >>> 16), Fa = G << 16 | y & 65535, Ga = w << 16 | A & 65535, ma = (Fa >>> 28 | Ga << 4) ^ (Ga >>> 2 | Fa << 30) ^ (Ga >>> 7 | Fa << 25), na = (Ga >>> 28 | Fa << 4) ^ (Fa >>> 2 | Ga << 30) ^ (Fa >>> 7 | Ga << 25), G = (Na >>> 14 | Oa << 18) ^ (Na >>> 18 | Oa << 14) ^ (Oa >>> 9 | Na << 23), w = (Oa >>> 14 | Na << 18) ^ (Oa >>> 18 | Na << 14) ^ (Na >>> 9 | Oa << 23), Bb = Fa & Da, Cb = Ga & Ea, Ya = Bb ^ Fa & ya ^ Ib, Za = Cb ^ Ga & za ^ Jb, $a = Na & Ha ^ ~Na & Ja, y = Oa & Ia ^ ~Oa & Ka, O = c[I + 2], Q = c[I + 3], ha = d[I + 2], ia = d[I + 3], A = (ia & 65535) + (Q & 65535) + (y & 65535) + (w & 65535) + (Ma & 65535), w = (ia >>> 16) + (Q >>> 16) + (y >>> 16) + (w >>>
					16) + (Ma >>> 16) + (A >>> 16), y = (ha & 65535) + (O & 65535) + ($a & 65535) + (G & 65535) + (La & 65535) + (w >>> 16), G = (ha >>> 16) + (O >>> 16) + ($a >>> 16) + (G >>> 16) + (La >>> 16) + (y >>> 16), O = G << 16 | y & 65535, Q = w << 16 | A & 65535, A = (Za & 65535) + (na & 65535), w = (Za >>> 16) + (na >>> 16) + (A >>> 16), y = (Ya & 65535) + (ma & 65535) + (w >>> 16), G = (Ya >>> 16) + (ma >>> 16) + (y >>> 16), ha = G << 16 | y & 65535, ia = w << 16 | A & 65535, A = (Ba & 65535) + (Q & 65535), w = (Ba >>> 16) + (Q >>> 16) + (A >>> 16), y = (Aa & 65535) + (O & 65535) + (w >>> 16), G = (Aa >>> 16) + (O >>> 16) + (y >>> 16), La = G << 16 | y & 65535, Ma = w << 16 | A & 65535, A = (ia & 65535) + (Q & 65535),
					w = (ia >>> 16) + (Q >>> 16) + (A >>> 16), y = (ha & 65535) + (O & 65535) + (w >>> 16), G = (ha >>> 16) + (O >>> 16) + (y >>> 16), Aa = G << 16 | y & 65535, Ba = w << 16 | A & 65535, ma = (Aa >>> 28 | Ba << 4) ^ (Ba >>> 2 | Aa << 30) ^ (Ba >>> 7 | Aa << 25), na = (Ba >>> 28 | Aa << 4) ^ (Aa >>> 2 | Ba << 30) ^ (Aa >>> 7 | Ba << 25), G = (La >>> 14 | Ma << 18) ^ (La >>> 18 | Ma << 14) ^ (Ma >>> 9 | La << 23), w = (Ma >>> 14 | La << 18) ^ (Ma >>> 18 | La << 14) ^ (La >>> 9 | Ma << 23), Ib = Aa & Fa, Jb = Ba & Ga, Ya = Ib ^ Aa & Da ^ Bb, Za = Jb ^ Ba & Ea ^ Cb, $a = La & Na ^ ~La & Ha, y = Ma & Oa ^ ~Ma & Ia, O = c[I + 4], Q = c[I + 5], ha = d[I + 4], ia = d[I + 5], A = (ia & 65535) + (Q & 65535) + (y & 65535) + (w & 65535) + (Ka & 65535),
					w = (ia >>> 16) + (Q >>> 16) + (y >>> 16) + (w >>> 16) + (Ka >>> 16) + (A >>> 16), y = (ha & 65535) + (O & 65535) + ($a & 65535) + (G & 65535) + (Ja & 65535) + (w >>> 16), G = (ha >>> 16) + (O >>> 16) + ($a >>> 16) + (G >>> 16) + (Ja >>> 16) + (y >>> 16), O = G << 16 | y & 65535, Q = w << 16 | A & 65535, A = (Za & 65535) + (na & 65535), w = (Za >>> 16) + (na >>> 16) + (A >>> 16), y = (Ya & 65535) + (ma & 65535) + (w >>> 16), G = (Ya >>> 16) + (ma >>> 16) + (y >>> 16), ha = G << 16 | y & 65535,ia = w << 16 | A & 65535,A = (za & 65535) + (Q & 65535),w = (za >>> 16) + (Q >>> 16) + (A >>> 16),y = (ya & 65535) + (O & 65535) + (w >>> 16),G = (ya >>> 16) + (O >>> 16) + (y >>> 16),Ja = G << 16 | y & 65535,Ka =
					w << 16 | A & 65535,A = (ia & 65535) + (Q & 65535),w = (ia >>> 16) + (Q >>> 16) + (A >>> 16),y = (ha & 65535) + (O & 65535) + (w >>> 16),G = (ha >>> 16) + (O >>> 16) + (y >>> 16),ya = G << 16 | y & 65535,za = w << 16 | A & 65535,ma = (ya >>> 28 | za << 4) ^ (za >>> 2 | ya << 30) ^ (za >>> 7 | ya << 25),na = (za >>> 28 | ya << 4) ^ (ya >>> 2 | za << 30) ^ (ya >>> 7 | za << 25),G = (Ja >>> 14 | Ka << 18) ^ (Ja >>> 18 | Ka << 14) ^ (Ka >>> 9 | Ja << 23),w = (Ka >>> 14 | Ja << 18) ^ (Ka >>> 18 | Ja << 14) ^ (Ja >>> 9 | Ka << 23),Bb = ya & Aa,Cb = za & Ba,Ya = Bb ^ ya & Fa ^ Ib,Za = Cb ^ za & Ga ^ Jb,$a = Ja & La ^ ~Ja & Na,y = Ka & Ma ^ ~Ka & Oa,O = c[I + 6],Q = c[I + 7],ha = d[I + 6],ia = d[I + 7],A = (ia & 65535) + (Q &
					65535) + (y & 65535) + (w & 65535) + (Ia & 65535),w = (ia >>> 16) + (Q >>> 16) + (y >>> 16) + (w >>> 16) + (Ia >>> 16) + (A >>> 16),y = (ha & 65535) + (O & 65535) + ($a & 65535) + (G & 65535) + (Ha & 65535) + (w >>> 16),G = (ha >>> 16) + (O >>> 16) + ($a >>> 16) + (G >>> 16) + (Ha >>> 16) + (y >>> 16),O = G << 16 | y & 65535,Q = w << 16 | A & 65535,A = (Za & 65535) + (na & 65535),w = (Za >>> 16) + (na >>> 16) + (A >>> 16),y = (Ya & 65535) + (ma & 65535) + (w >>> 16),G = (Ya >>> 16) + (ma >>> 16) + (y >>> 16),ha = G << 16 | y & 65535,ia = w << 16 | A & 65535,A = (Ea & 65535) + (Q & 65535),w = (Ea >>> 16) + (Q >>> 16) + (A >>> 16),y = (Da & 65535) + (O & 65535) + (w >>> 16),G = (Da >>> 16) +
					(O >>> 16) + (y >>> 16),Ha = G << 16 | y & 65535,Ia = w << 16 | A & 65535,A = (ia & 65535) + (Q & 65535),w = (ia >>> 16) + (Q >>> 16) + (A >>> 16),y = (ha & 65535) + (O & 65535) + (w >>> 16),G = (ha >>> 16) + (O >>> 16) + (y >>> 16),Da = G << 16 | y & 65535,Ea = w << 16 | A & 65535;
				A = (l & 65535) + (Ea & 65535);
				w = (l >>> 16) + (Ea >>> 16) + (A >>> 16);
				y = (e & 65535) + (Da & 65535) + (w >>> 16);
				G = (e >>> 16) + (Da >>> 16) + (y >>> 16);
				e = G << 16 | y & 65535;
				l = w << 16 | A & 65535;
				A = (g & 65535) + (za & 65535);
				w = (g >>> 16) + (za >>> 16) + (A >>> 16);
				y = (m & 65535) + (ya & 65535) + (w >>> 16);
				G = (m >>> 16) + (ya >>> 16) + (y >>> 16);
				m = G << 16 | y & 65535;
				g = w << 16 | A & 65535;
				A = (k & 65535) +
					(Ba & 65535);
				w = (k >>> 16) + (Ba >>> 16) + (A >>> 16);
				y = (f & 65535) + (Aa & 65535) + (w >>> 16);
				G = (f >>> 16) + (Aa >>> 16) + (y >>> 16);
				f = G << 16 | y & 65535;
				k = w << 16 | A & 65535;
				A = (p & 65535) + (Ga & 65535);
				w = (p >>> 16) + (Ga >>> 16) + (A >>> 16);
				y = (h & 65535) + (Fa & 65535) + (w >>> 16);
				G = (h >>> 16) + (Fa >>> 16) + (y >>> 16);
				h = G << 16 | y & 65535;
				p = w << 16 | A & 65535;
				A = (r & 65535) + (Ia & 65535);
				w = (r >>> 16) + (Ia >>> 16) + (A >>> 16);
				y = (q & 65535) + (Ha & 65535) + (w >>> 16);
				G = (q >>> 16) + (Ha >>> 16) + (y >>> 16);
				q = G << 16 | y & 65535;
				r = w << 16 | A & 65535;
				A = (v & 65535) + (Ka & 65535);
				w = (v >>> 16) + (Ka >>> 16) + (A >>> 16);
				y = (u & 65535) + (Ja & 65535) +
					(w >>> 16);
				G = (u >>> 16) + (Ja >>> 16) + (y >>> 16);
				u = G << 16 | y & 65535;
				v = w << 16 | A & 65535;
				A = (L & 65535) + (Ma & 65535);
				w = (L >>> 16) + (Ma >>> 16) + (A >>> 16);
				y = (F & 65535) + (La & 65535) + (w >>> 16);
				G = (F >>> 16) + (La >>> 16) + (y >>> 16);
				F = G << 16 | y & 65535;
				L = w << 16 | A & 65535;
				A = (la & 65535) + (Oa & 65535);
				w = (la >>> 16) + (Oa >>> 16) + (A >>> 16);
				y = (oa & 65535) + (Na & 65535) + (w >>> 16);
				G = (oa >>> 16) + (Na >>> 16) + (y >>> 16);
				oa = G << 16 | y & 65535;
				la = w << 16 | A & 65535
			} while (!ga);
			return [e, l, m, g, f, k, h, p, q, r, u, v, F, L, oa, la]
		}
	}();

	function db(b, d) {
		return ("000" + d).slice(-b)
	}

	function eb(b) {
		return (0 < b ? "+" : "") + b
	}

	function n(b, d) {
		for (var c in d) b[c] = d[c];
		return b
	}

	function fb(b, d) {
		for (var c in b) for (var a in d) b[c][a] = d[a]
	}

	function gb(b, d) {
		for (var c = 0; c < d.length; c += 2) b[d[c + 0]] = d[c + 1];
		return b
	}

	function t(b) {
		var d;
		if (void 0 === b || "" === b) return [];
		d = d || 1;
		b.split && (b = b.split(","));
		for (var c = 0; c < b.length; ++c) b[c] = d * ~~b[c];
		return b
	}

	function ib(b) {
		b = b.split(",");
		for (var d = 0; d < b.length; ++d) b[d] = Number(b[d]);
		return b
	}

	function jb(b) {
		return b && b.replace ? b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : ""
	}

	function kb(b) {
		var d;
		return function () {
			clearTimeout(d);
			d = setTimeout(function () {
				d = null;
				b()
			}, 10)
		}
	}

	function lb(b) {
		try {
			return decodeURIComponent(b)
		} catch (d) {
			return b
		}
	}

	var x = window, mb = document, nb = mb.body, ob;

	function pb(b) {
		return ~~b / ob + "px"
	}

	function qb(b) {
		b = b.getBoundingClientRect();
		return {x: b.left * ob, y: b.top * ob, b: b.width * ob, h: b.height * ob}
	}

	var rb = 0, sb = 0, ub = navigator.userAgent;
	ub.match(/iP(hone|od|ad)/) && ub.match(/OS (\d+)_(\d+)/) && (rb = RegExp.$1 + "." + RegExp.$2);
	ub.match(/Android (\d\.\d)/) && (sb = parseFloat(RegExp.$1));
	var vb = !1, wb = !!x.cordova;

	function xb(b, d, c) {
		b.addEventListener(d, c, !1)
	}

	function yb(b, d) {
		for (var c in d) b.addEventListener(c, d[c], !1);
		return b
	}

	function zb(b, d) {
		mb.addEventListener(b, d, {once: !0, passive: !0, capture: !0})
	}

	function Ab(b, d, c) {
		b.addEventListener(d, c, {once: !1, passive: !1, capture: !0})
	}

	function z(b, d, c, a, e) {
		b = mb.createElement(b);
		c && (b.className = c);
		n(b, a);
		n(b.style, e);
		return d ? d.insertBefore(b, null) : b
	}

	function Db(b, d, c, a) {
		var e = new XMLHttpRequest;
		a && (e.onprogress = a);
		e.onload = function (a) {
			200 == this.status ? c.call(this) : c(a)
		};
		e.onerror = function (a) {
			c(a)
		};
		e.open("GET", b, !0);
		d && (e.responseType = d || "");
		e.send();
		return e
	}

	function Eb(b) {
		return mb.querySelector(b)
	}

	function B(b) {
		return mb.getElementById(b)
	}

	function Fb(b, d) {
		var c = mb.getElementById(b);
		return c ? c.checked : d
	}

	function Gb(b) {
		if (b = mb.getElementById(b)) b.checked = !1
	}

	var D = 0;

	function Hb() {
		var b = mb.cancelFullScreen || mb.webkitCancelFullScreen || mb.mozCancelFullScreen || mb.exitFullscreen,
			d = nb.requestFullScreen || nb.webkitRequestFullScreen || nb.mozRequestFullScreen || nb.msRequestFullscreen;
		b && d ? mb.fullScreenElement && null !== mb.fullScreenElement || mb.mozFullScreen || mb.webkitIsFullScreen ? b.call(mb) : d.call(nb) : "undefined" !== typeof x.ActiveXObject ? (b = new ActiveXObject("WScript.Shell"), null !== b && b.he("{F11}")) : alert("FullScreen function is not available on this device. (NG=iPhone, OK=iPad iOS12~, Chrome, etc.)");
		return !1
	}

	var Kb = function () {
		var b = [], d = new XMLHttpRequest;
		d.onload = function () {
			b.length && 1 != d.readyState && (d.open("POST", "https://tenhou.net/4/err.cgi", !0), d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), d.send("101 " + b.shift()))
		};
		return function () {
			for (var c = arguments[0], a = 1; a < arguments.length; ++a) c += " " + arguments[a];
			b.push(c);
			d.onload()
		}
	}(), Lb = "";
	x.onerror = function (b, d, c, a, e) {
		b = b + " " + d + ":" + c + ":" + a + " " + e;
		Lb != b && Kb(b);
		Lb = b
	};

	function Mb(b) {
		var d = x.StatusBar;
		if (d) {
			wb && sb && d.backgroundColorByHexString("#000");
			var c = mb.documentElement.clientWidth, a = x.innerHeight;
			!b && a < c ? (d.overlaysWebView(!0), d.hide()) : (d.overlaysWebView(!1), d.show())
		}
	}

	var Nb = gb({}, [0, "https://cdn.tenhou.net/3/res/img/bglogow_0921x0651.png", 1, "https://cdn.tenhou.net/4/res/img/bg_lobby0.png", 2, "https://cdn.tenhou.net/4/res/img/bg_lobby1.png", 3, "https://cdn.tenhou.net/4/res/img/bg_lobby2.png"]),
		Ob;
	for (Ob in Nb) (new Image).src = Nb[Ob];

	function Pb(b, d, c, a) {
		return {x: b || 0, y: d || 0, b: c || 0, h: a || 0}
	}

	function Qb(b, d, c, a, e) {
		b.b && b.h ? (b.x + b.b < d + a && (b.b = d + a - b.x), b.y + b.h < c + e && (b.h = c + e - b.y), d < b.x && (b.b += b.x - d, b.x = d), c < b.y && (b.h += b.y - c, b.y = c)) : (b.x = d, b.y = c, b.b = a, b.h = e)
	}

	function Rb(b, d, c, a, e) {
		b = {x: b.x, y: b.y, b: b.b, h: b.h};
		if (!b.b || !b.h) return b;
		b.x + b.b > d + a && (b.b = d + a - b.x);
		b.y + b.h > c + e && (b.h = c + e - b.y);
		d > b.x && (b.b += b.x - d, b.x = d);
		c > b.y && (b.h += b.y - c, b.y = c);
		return b
	};var Sb = function () {
		function b(a) {
			var c = a & 7, b = 0, d = 0;
			1 == c || 4 == c ? b = d = 1 : 2 == c && (b = d = 2);
			a >>= 3;
			c = (a & 7) - b;
			if (0 > c) return !1;
			b = d;
			d = 0;
			1 == c || 4 == c ? (b += 1, d += 1) : 2 == c && (b += 2, d += 2);
			a >>= 3;
			c = (a & 7) - b;
			if (0 > c) return !1;
			b = d;
			d = 0;
			1 == c || 4 == c ? (b += 1, d += 1) : 2 == c && (b += 2, d += 2);
			a >>= 3;
			c = (a & 7) - b;
			if (0 > c) return !1;
			b = d;
			d = 0;
			1 == c || 4 == c ? (b += 1, d += 1) : 2 == c && (b += 2, d += 2);
			a >>= 3;
			c = (a & 7) - b;
			if (0 > c) return !1;
			b = d;
			d = 0;
			1 == c || 4 == c ? (b += 1, d += 1) : 2 == c && (b += 2, d += 2);
			a >>= 3;
			c = (a & 7) - b;
			if (0 > c) return !1;
			b = d;
			d = 0;
			1 == c || 4 == c ? (b += 1, d += 1) : 2 == c && (b += 2, d += 2);
			a >>= 3;
			c = (a & 7) - b;
			if (0 > c) return !1;
			b = d;
			d = 0;
			1 == c || 4 == c ? (b += 1, d += 1) : 2 == c && (b += 2, d += 2);
			a >>= 3;
			c = (a & 7) - b;
			if (0 != c && 3 != c) return !1;
			c = (a >> 3 & 7) - d;
			return 0 == c || 3 == c
		}

		function d(a, c) {
			if (0 == a) {
				if (128 <= (c & 448) && b(c - 128) || 65536 <= (c & 229376) && b(c - 65536) || 33554432 <= (c & 117440512) && b(c - 33554432)) return !0
			} else if (1 == a) {
				if (16 <= (c & 56) && b(c - 16) || 8192 <= (c & 28672) && b(c - 8192) || 4194304 <= (c & 14680064) && b(c - 4194304)) return !0
			} else if (2 == a && (2 <= (c & 7) && b(c - 2) || 1024 <= (c & 3584) && b(c - 1024) || 524288 <= (c & 1835008) && b(c - 524288))) return !0;
			return !1
		}

		function c(a,
		           c) {
			return a[c + 0] << 0 | a[c + 1] << 3 | a[c + 2] << 6 | a[c + 3] << 9 | a[c + 4] << 12 | a[c + 5] << 15 | a[c + 6] << 18 | a[c + 7] << 21 | a[c + 8] << 24
		}

		return {
			Ub: function (a) {
				var e = 1 << a[27] | 1 << a[28] | 1 << a[29] | 1 << a[30] | 1 << a[31] | 1 << a[32] | 1 << a[33];
				if (16 <= e) return !1;
				if (2 == (e & 3) && 2 == a[0] * a[8] * a[9] * a[17] * a[18] * a[26] * a[27] * a[28] * a[29] * a[30] * a[31] * a[32] * a[33] || !(e & 10) && 7 == (2 == a[0]) + (2 == a[1]) + (2 == a[2]) + (2 == a[3]) + (2 == a[4]) + (2 == a[5]) + (2 == a[6]) + (2 == a[7]) + (2 == a[8]) + (2 == a[9]) + (2 == a[10]) + (2 == a[11]) + (2 == a[12]) + (2 == a[13]) + (2 == a[14]) + (2 == a[15]) + (2 == a[16]) + (2 == a[17]) +
					(2 == a[18]) + (2 == a[19]) + (2 == a[20]) + (2 == a[21]) + (2 == a[22]) + (2 == a[23]) + (2 == a[24]) + (2 == a[25]) + (2 == a[26]) + (2 == a[27]) + (2 == a[28]) + (2 == a[29]) + (2 == a[30]) + (2 == a[31]) + (2 == a[32]) + (2 == a[33])) return !0;
				if (e & 2) return !1;
				var l = a[0] + a[3] + a[6], m = a[1] + a[4] + a[7], g = a[9] + a[12] + a[15], f = a[10] + a[13] + a[16],
					k = a[18] + a[21] + a[24], h = a[19] + a[22] + a[25], p = (l + m + (a[2] + a[5] + a[8])) % 3;
				if (1 == p) return !1;
				var q = (g + f + (a[11] + a[14] + a[17])) % 3;
				if (1 == q) return !1;
				var r = (k + h + (a[20] + a[23] + a[26])) % 3;
				if (1 == r || 1 != (2 == p) + (2 == q) + (2 == r) + (2 == a[27]) + (2 == a[28]) +
					(2 == a[29]) + (2 == a[30]) + (2 == a[31]) + (2 == a[32]) + (2 == a[33])) return !1;
				l = (1 * l + 2 * m) % 3;
				m = c(a, 0);
				g = (1 * g + 2 * f) % 3;
				f = c(a, 9);
				k = (1 * k + 2 * h) % 3;
				a = c(a, 18);
				return e & 4 ? !(p | l | q | g | r | k) && b(m) && b(f) && b(a) : 2 == p ? !(q | g | r | k) && b(f) && b(a) && d(l, m) : 2 == q ? !(r | k | p | l) && b(a) && b(m) && d(g, f) : 2 == r ? !(p | l | q | g) && b(m) && b(f) && d(k, a) : !1
			}, Xb: function (a) {
				var c = [], b = 0;
				if (12 <= (0 !== a[0]) + (0 !== a[8]) + (0 !== a[9]) + (0 !== a[17]) + (0 !== a[18]) + (0 !== a[26]) + (0 !== a[27]) + (0 !== a[28]) + (0 !== a[29]) + (0 !== a[30]) + (0 !== a[31]) + (0 !== a[32]) + (0 !== a[33])) for (; 34 > b; ++b) 3 >= a[b] &&
				(++a[b], Sb.Ub(a) && c.push(b), --a[b]); else {
					for (; 27 > b; ++b) 3 >= a[b] && (a[b] || 0 < b % 9 && a[b - 1] || 8 > b % 9 && a[b + 1]) && (++a[b], Sb.Ub(a) && c.push(b), --a[b]);
					for (; 34 > b; ++b) 3 >= a[b] && a[b] && (++a[b], Sb.Ub(a) && c.push(b), --a[b])
				}
				return c
			}, yd: function (a) {
				for (var c = {}, b = 0; 34 > b; ++b) a[b] && (--a[b], c[b] = Sb.Xb(a), ++a[b]);
				return c
			}
		}
	}();
	var Tb = function () {
		function b(b) {
			a && (clearInterval(a), a = null);
			c && c[b] && 0 == c[b](d) || !d || (d.parentNode.removeChild(d), d = null)
		}

		var d, c, a;
		return {
			v: function (e, l, m, g, f, k, h) {
				setTimeout(function () {
					k = k || "OK";
					h = h || "CANCEL";
					d && (d.parentNode.removeChild(d), d = null);
					1 == arguments.length && (l = 1);
					c = [g, m];
					var p = d = z("DIV", nb, "", {}, {
						position: "fixed",
						zIndex: 1E4,
						left: 0,
						top: 0,
						width: "100%",
						height: "100%",
						background: "rgba(0,0,0,0.75)"
					});
					setTimeout(function () {
						l || xb(p, "click", function () {
							b(0)
						});
						z("FORM", p, "", {
							innerHTML: "<div style='position:relative;font-size:150%;" +
								(l ? "padding:1em 0;" : "") + "'>" + e + "</div><input type=button style='padding:1em 3em;' /><input type=submit style='padding:1em 3em;' />",
							onsubmit: function () {
								return !1
							}
						}, {
							position: "absolute",
							textAlign: "center",
							background: "#FFF",
							color: "#000",
							borderRadius: "0.6em",
							maxWidth: "90vw",
							padding: "1em",
							left: "50%",
							top: "50%",
							transform: "translate(-50%,-50%)"
						});
						var c = p.querySelectorAll("FORM>INPUT");
						c[0].onclick = function () {
							b(0)
						};
						c[0].style.display = l & 2 ? "" : "none";
						c[0].value = h;
						c[1].onclick = function () {
							b(1)
						};
						c[1].style.display =
							l & 1 ? "" : "none";
						c[1].value = k;
						if (sb && wb) for (var d = 0; d < c.length; ++d) yb(c[d], {
							focus: function () {
								Mb(1)
							}, blur: function () {
								Mb()
							}
						});
						c.length && c[0].focus();
						if (f) {
							E(106, 0, 0);
							var g = z("DIV", p, "", {innerHTML: "<div style='position:absolute;right:0;bottom:0;padding:0 0.1em;font-size:70%;'></div>"}, {
								color: "#000",
								position: "absolute",
								pointerEvents: "none"
							});
							a = setInterval(function () {
								var a = g.style, d = c[0].getBoundingClientRect();
								a.left = d.left + "px";
								a.top = d.top + "px";
								a.width = d.width + "px";
								a.height = d.height + "px";
								g.firstChild.innerHTML =
									--f;
								0 < f && E(108, 0, 0);
								0 > f && b(0)
							}, 1E3)
						}
					}, 1)
				}, 1)
			}, Ec: function (a, c, b, d, f) {
				return Tb.v("<div class='fixed-select sscl' style='position:relative;" + (c || "") + "'>" + a + "</div><div class=sblink style='visibility:hidden;'>▼</div>", b, d, f)
			}, ib: function () {
				return !!d
			}
		}
	}();
	var Ub = function () {
		var b = "";
		return function (d) {
			d ? b += d : b && (d = document.createElement("style"), d.innerHTML = b, b = "", document.getElementsByTagName("HEAD")[0].appendChild(d))
		}
	}();

	function Vb(b, d) {
		return "<span class='" + b + "'>" + d + "</span>"
	}

	function H(b) {
		return Vb("gray", b)
	}

	Ub("@font-face{font-family:cwTeX-Q-Kai-T;src: url(https://cdn.tenhou.net/3/res/font/cwTeXQKaiT-Medium_20200430.ttf) format('truetype');}@font-face{font-family:icons2;src:url(https://cdn.tenhou.net/3/res/font/icons_20200502.ttf) format('truetype');}:focus{outline:0 !important;}*,*:before,*:after{box-sizing:inherit;line-height:inherit;}HTML{box-sizing:border-box;width:100%;height:100%;font-family:sans-serif;}HR{border-color:#666;width:100%;}LABEL{margin:0;cursor:pointer;}BODY{color:#FFF;background:#000;padding:0;margin:0;width:100%;height:100%;overflow:hidden;line-height:1;}A:hover{color:#F93;}A{color:inherit;}.nopp{pointer-events:none;position:absolute;}.notxt{font-size:0;}.nosel{-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;}.nobr{word-break:keep-all;white-space:nowrap;}.nodisp{display:none;}.w100{width:100%;}.s1{opacity:0;}.s11,.s12,.s13,.s14,.s15{display:inline-block;}.elip{display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.n2r{display:inline-block;width:2em;text-align:right;}.gray{color:#666;}.desc{color:#666;font-size:60%;}.ts0{text-shadow:#000 -0.03em -0.03em 0,#000 -0.03em 0.03em 0,#000 0.03em -0.03em 0,#000 0.03em 0.03em 0;}.ts1{text-shadow:#F00 -0.03em -0.03em 0,#F00 -0.03em 0.03em 0,#F00 0.03em -0.03em 0,#F00 0.03em 0.03em 0;}.ts2{text-shadow:#000 -1px -1px 0,#000 -1px 1px 0,#000 1px -1px 0,#000 1px 1px 0;}.sscl{-webkit-overflow-scrolling:touch;}.bbg5{border:solid 0.05em #222;border-image:linear-gradient(-10deg,#000, #333) 1;background:linear-gradient(-10deg,rgba(63,63,63,0.3), rgba(0,0,0,0.3));}INPUT{color:#000;border:solid 0.05em #444;font-size:inherit;}BUTTON *,.btn *,.s7 *{pointer-events:none;}BUTTON{margin:0;font-size:inherit;}A.bt3{display:block;width:100%;height:100%;border:solid 1px #444;background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(47,47,47,0.4) 100%);}.bt3:hover{background-color:#030;}.bblink{animation: _bblink 0.5s ease 0s infinite alternate;}@keyframes _bblink{0%{background-color:rgba(255,255,255,0.3);}30%{background-color:rgba(0,0,0,0.3);}100%{background-color:rgba(0,0,0,0.3);}}.cblink{animation: _cblink 1.75s linear 0s infinite alternate;}@keyframes _cblink{0%{color:#FFF;}80%{color:#FFF;}100%{color:#666;}}.sblink{animation:_sblink 0.5s linear 0s infinite alternate;position:absolute;bottom:0;right:0.25em;color:rgba(255,255,255,0.5);font-size:300%;pointer-events:none;}@keyframes _sblink{0%{color:transparent;}30%{color:#888;}100%{color:#888;}}INPUT[type=radio].radio,INPUT[type=radio].radiobtn,INPUT[type=checkbox].checkbox,INPUT[type=checkbox].checkbtn{display:none;}.btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:solid 1px #444;padding:0 0.75em;min-height:2.5em;color:#FFF;background:linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(107,107,107,0.5) 50%,rgba(31,31,31,0.5) 50%,rgba(0,0,0,0.7) 100%);text-shadow:#000 -0.03em -0.03em 0,#000 -0.03em 0.03em 0,#000 0.03em -0.03em 0,#000 0.06em 0.06em 0;}INPUT[type=checkbox].checkbtn+LABEL{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:solid 0.01em #444;border-radius:0.2em;background:rgba(0,0,0,0.3);padding:0.5em;margin:0 0.1em;min-height:2.0em;}INPUT[type=checkbox]:not(:checked).checkbtn+LABEL{color:#666;}INPUT[type=checkbox]:checked.checkbtn+LABEL{color:#FFF;text-shadow:#000 -0.03em -0.03em 0,#000 -0.03em 0.03em 0,#000 0.03em -0.03em 0,#000 0.03em 0.03em 0;}INPUT[type=checkbox].checkbox+LABEL:hover,.btn:hover{background-color:#030;}.btn.s5,.btn:disabled{color:#888;text-shadow:none;background:rgba(64,64,64,0.75);pointer-events:none;}INPUT[type=radio].radio:checked+LABEL:before,INPUT[type=checkbox].checkbox:checked+LABEL:before{opacity:1;}INPUT[type=radio].radio+LABEL,INPUT[type=checkbox].checkbox+LABEL{position:relative;display:inline-block;padding:0.75em 0.75em 0.75em 2.0em;vertical-align:middle;}INPUT[type=radio].radio+LABEL:after,INPUT[type=checkbox].checkbox+LABEL:after{position:absolute;display:block;content:'';left:1.0em;top:50%;width:1.0em;height:1.0em;border:0.1em solid #CCC;border-radius:0.2em;transform:translate(-50%,-50%);}INPUT[type=radio].radio+LABEL:before{position:absolute;display:block;content:'';opacity:0;left:1.0em;top:50%;width:0.6em;height:0.6em;border-radius:50%;background-color:#3E9;transform:translate(-50%,-50%);}INPUT[type=checkbox].checkbox+LABEL:before{position:absolute;display:block;content:'';opacity:0;top:50%;left:1.0em;margin-top:-0.1em;width:0.3em;height:0.6em;border-right:0.2em solid #4C4;border-bottom:0.2em solid #4C4;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);}INPUT[type=radio].radiobtn+LABEL{display:none;}INPUT[type=radio].radiobtn:checked+LABEL{display:inline-block;padding:0.75em;}BUTTON.aur,BUTTON.aul,BUTTON.aru,BUTTON.ard,BUTTON.adr,BUTTON.adl,BUTTON.alu,BUTTON.ald{position:relative;padding-right:0.9em;}BUTTON.aur:after,BUTTON.aul:after,BUTTON.aru:after,BUTTON.ard:after,BUTTON.adr:after,BUTTON.adl:after,BUTTON.alu:after,BUTTON.ald:after{content:'';pointer-events:none;position:absolute;right:0.3em;top:45%;width:0;height:0;}BUTTON.aur:after,BUTTON.aul:after{border-left:0.15em solid transparent;border-right:0.15em solid transparent;border-bottom:0.20em solid #CCC;}BUTTON.aru:after,BUTTON.ard:after{border-top:0.15em solid transparent;border-bottom:0.15em solid transparent;border-left:0.20em solid #CCC;}BUTTON.adr:after,BUTTON.adl:after{border-left:0.15em solid transparent;border-right:0.15em solid transparent;border-top:0.20em solid #CCC;}BUTTON.alu:after,BUTTON.ald:after{border-top:0.15em solid transparent;border-bottom:0.15em solid transparent;border-right:0.20em solid #CCC;}BUTTON.aur+*{right:0;bottom:100%;}BUTTON.aul+*{left:0;bottom:100%;}BUTTON.aru+*{left:100%;bottom:0;}BUTTON.ard+*{left:100%;top:0;}BUTTON.adr+*{right:0;}BUTTON.adl+*{left:0;}BUTTON.alu+*{right:100%;bottom:0;}BUTTON.ald+*{right:100%;top:0;}BUTTON.aur+*,BUTTON.aul+*{animation:dropdown_fadein_au 0.15s ease-out;transform:translateY(0%);}BUTTON.aru+*,BUTTON.ard+*{animation:dropdown_fadein_ar 0.15s ease-out;transform:translateX(0%);}BUTTON.adr+*,BUTTON.adl+*{animation:dropdown_fadein_ad 0.15s ease-out;transform:translateY(0%);}BUTTON.alu+*,BUTTON.ald+*{animation:dropdown_fadein_al 0.15s ease-out;transform:translateX(0%);}@keyframes dropdown_fadein_au{0%{display:none;opacity:0;transform:translateY(0.5em);}1%{display:block;opacity:0;transform:translateY(0.5em);}100%{display:block;opacity:1;transform:translateY(0);}}@keyframes dropdown_fadein_al{0%{display:none;opacity:0;transform:translateX(0.5em);}1%{display:block;opacity:0;transform:translateX(0.5em);}100%{display:block;opacity:1;transform:translateX(0);}}@keyframes dropdown_fadein_ar{0%{display:none;opacity:0;transform:translateX(-0.5em);}1%{display:block;opacity:0;transform:translateX(-0.5em);}100%{display:block;opacity:1;transform:translateX(0);}}@keyframes dropdown_fadein_ad{0%{display:none;opacity:0;transform:translateY(-0.5em);}1%{display:block;opacity:0;transform:translateY(-0.5em);}100%{display:block;opacity:1;transform:translateY(0);}}.dropdown{position:relative;display:inline-block;}.dropdown>DIV{display:none;position:absolute;z-index:1;background:rgba(0,0,0,0.90);border:solid 1px #333;}.dropdown:not(.s6).s2>DIV{display:block;}.dropdown.s6:hover>DIV{display:block;}.dropdown.s6:hover>.s7{background-color:#080;}.dropdown>DIV>BUTTON.s7{padding:0.25em;background-color:transparent;border:none;text-align:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#FFF;display:inline-block;cursor:pointer;}.dropdown>DIV>BUTTON.s7:hover,.s7:hover{background-color:#040;}A.s7{text-decoration:none;}.dropdown .s7.s8{position:relative;padding-left:1em;}.dropdown .s7.s8.s4:before{content:'';position:absolute;left:0.5em;top:50%;margin-top:-0.1em;width:0.3em;height:0.6em;border-right:0.2em solid #4C4;border-bottom:0.2em solid #4C4;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);pointer-events:none;}.tabs{}.tabs>INPUT[type=radio]{display:none;}.tabs>INPUT[type=radio]+LABEL{padding:0.5em;color:#888;display:inline-block;float:left;}.tabs.r>INPUT[type=radio]+LABEL{float:right;}.tabs>INPUT[type=radio]+LABEL:hover{background:#030;}.tabs>INPUT[type=radio]:checked+LABEL{border:0.05em solid #333;color:#FFF;top:0.08em;background:linear-gradient(to bottom, #000 0%,#222 100%);text-shadow:#000 -0.03em -0.03em 0,#000 -0.03em 0.03em 0,#000 0.03em -0.03em 0,#000 0.06em 0.06em 0;}.tabs>DIV{display:none;clear:both;}.tab0:checked~.tab0,.tab1:checked~.tab1,.tab2:checked~.tab2,.tab3:checked~.tab3,.tab4:checked~.tab4,.tab5:checked~.tab5,.tab6:checked~.tab6,.tab7:checked~.tab7,.tab8:checked~.tab8,.tab9:checked~.tab9{display:block;}.tabs>INPUT[type=radio]+LABEL{position:relative;}.tooltip{position:relative;}.tooltip:after{content:attr(data-tooltip);background-color:#040;pointer-events:none;position:absolute;left:0;top:0;z-index:1;}.tabs>INPUT[type=radio]+LABEL.tooltip:after{padding:0.5em;}.tooltip:not(:hover):after{visibility:hidden;}INPUT.tabs:not(:checked)~.tab0{display:none;}INPUT.tabs:checked~.tab1{display:none;}.fixed-select{min-width:10em;max-width:90vw;max-height:85vh;overflow-y:auto;}.fixed-select .s7{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;text-align:inherit;font-size:150%;color:#000;padding:0.5em;text-decoration:none;width:100%;display:block;}.fixed-select .s7{border-bottom:1px solid #DDD;cursor:pointer;}.fixed-select .s7:nth-child(1){border-top:1px solid #DDD;}.fixed-select .s7:hover{background-color:#CCC}.dan18,.dan19,.dan20{font-weight:bold;}");
	(function () {
		function b(a) {
			for (var c = mb.querySelectorAll(".dropdown"), b = 0; b < c.length; ++b) !c[b].contains(a) && c[b].classList && c[b].classList.remove("s2")
		}

		function d(a) {
			var c = a.target.parentNode;
			c && c.classList && c.classList.contains("dropdown") && c.classList.toggle("s2");
			b(a.target)
		}

		var c = {BUTTON: 1, INPUT: 1};
		xb(x, "touchstart", function (a) {
			c[a.target.tagName] || d(a)
		});
		Ab(x, "click", function (a) {
			if (a.target && a.target.classList && (a.target.classList.contains("s9") && a.preventDefault(), a.target.classList.contains("s7"))) {
				if (a.target.parentNode) for (var c =
					a.target.parentNode.parentNode; c; c = c.parentNode) if (c.classList && c.classList.contains("dropdown")) {
					c.classList.remove("s2");
					break
				}
				J.s7(a)
			}
			d(a)
		});
		xb(x, "blur", function (a) {
			a.target == x && b()
		})
	})();
	setInterval(function () {
		for (var b = mb.getElementsByClassName("sblink"), d = 0; d < b.length; ++d) {
			var c = b[d], a = c.previousSibling;
			c.style.visibility = a.scrollTop + a.offsetHeight < a.scrollHeight - .25 * c.offsetHeight ? "" : "hidden"
		}
	}, 1E3);

	function Wb(b) {
		b = b.split("&");
		var d = {}, c;
		for (c in b) if (b[c].length) {
			var a = b[c].split("=");
			d[a.shift()] = decodeURIComponent(a.join("="))
		}
		return d
	}

	var K = function () {
		function b(a, c, b) {
			return (a = a.match(c)) ? a[1] : b
		}

		function d(a) {
			c.log = b(a, /\?log=([^&]*)/, "");
			c.TW = c.tw = ~~b(a, /&tw=(\d)/, 0);
			c.ts = ~~b(a, /&ts=(\d+)/, 0);
			c.wg = b(a, /\?wg=([^&]*)/, "")
		}

		var c = {};
		d(location.href);
		c.Ld = !(!c.wg && !c.log);
		return n(c, {s: 0, cb: !1, Od: d})
	}();
	var M;
	(function () {
		try {
			M = x.localStorage, M.setItem("a", 1), M.removeItem("a")
		} catch (e) {
			M = {
				setItem: function (a, c) {
					M[a] = c
				}, removeItem: function (a) {
					delete M[a]
				}
			};
			var b = navigator.languages, d = 0;
			navigator.userAgent.match(/TwitterAndroid/) && (d |= 1);
			for (var c in b) b[c].match(/(ja|JP)/) && (d |= 2);
			b = "";
			switch (d) {
				case 0:
					b = "This browser(private browsing etc.) won't let you save game logs, IDs or other settings.";
					break;
				case 1:
					b = "The Twitter browser will not let you save your settings (game logs, IDs, etc). Open the menu and select Open in Browser.";
					break;
				default:
				case 2:
					b = "このブラウザ環境(プライベートブラウズなど)では、牌譜の記録やIDの保存などが行えません。";
					break;
				case 3:
					b = "Twitterの専用ブラウザでは、設定の保存(牌譜の記録/IDの保存/など)が行えません。メニューの「ブラウザで開く」から通常のブラウザで開いてください。"
			}
			Tb.v(b)
		}
		d =
			M.scro;
		if (wb && x.screen && x.screen.orientation && x.screen.orientation.lock) {
			b = screen.orientation;
			c = b.type;
			if (rb && ("landscape-primary" == c || "landscape-secondary" == c)) {
				var a = B("loading");
				a && (a.style.display = "none");
				x.StatusBar.overlaysWebView(!0);
				x.StatusBar.hide();
				b.lock("portrait");
				"landscape-primary" == c ? b.lock("landscape-secondary") : "landscape-secondary" == c && b.lock("landscape-primary");
				a && setTimeout(function () {
					a.style.display = "table"
				}, 1E3)
			}
			rb && 2 == d ? b.lock("landscape-primary" == c ? "landscape-secondary" :
				"landscape-secondary" == c ? "landscape-primary" : "landscape") : b.lock(1 == d ? "portrait" : 2 == d ? "landscape" : "any")
		}
	})();

	function Xb(b, d, c) {
		M && (d != c ? M.setItem(b, d) : M.removeItem(b))
	}

	(function () {
		function b(d) {
			vb = "mousedown" == d.type;
			d = M.desktop;
			1 != d && 2 != d && (Xb("desktop", vb ? 3 : 0, 0), d !== M.desktop && N.Mc());
			x.removeEventListener("touchstart", b, !1);
			x.removeEventListener("mousedown", b, !1)
		}

		xb(x, "touchstart", b);
		xb(x, "mousedown", b)
	})();
	x.requestAnimationFrame = x.requestAnimationFrame || x.webkitRequestAnimationFrame || x.mozRequestAnimationFrame || x.oRequestAnimationFrame || x.msRequestAnimationFrame || function (b) {
		x.setTimeout(b, 1E3 / 60)
	};
	var Yb = function () {
		function b(d) {
			var f = 0, k = 1 >= a ? 0 : d - a, h;
			for (h in c) c[h](k) ? ++f : delete c[h];
			if (!f) for (h in c) ++f;
			f ? (a = d, requestAnimationFrame(b)) : a = 0
		}

		function d() {
		}

		var c = {}, a = 0, e = 0, l = Date.now(), m = requestAnimationFrame;
		setInterval(function () {
			var c = Date.now();
			a && a == e && requestAnimationFrame == m && (requestAnimationFrame = d, b(c - l), requestAnimationFrame = m);
			e = a
		}, 250);
		return function () {
			!a && b && (requestAnimationFrame(b), a = 1);
			return c
		}
	}(), Zb = 1;

	function $b(b, d) {
		if (0 < d) return Yb()[Zb++] = function (c) {
			d -= c;
			if (0 < d) return !0;
			b()
		}, Zb - 1;
		b()
	}

	function ac(b) {
		delete Yb()[b]
	}

	function bc(b) {
		b.style.transition = "none"
	}

	function cc(b, d) {
		var c = ~~(b.style.transitionDelay.match(/^(\d+)ms$/) ? RegExp.$1 : 0),
			a = ~~(b.style.transitionDuration.match(/^(\d+)ms$/) ? RegExp.$1 : 0);
		$b(function () {
			d(b)
		}, c + a)
	};var dc = {ja: {}, en: {}, zh: {}, ko: {}, ru: {}, fr: {}, it: {}, es: {}, vi: {}, pt: {}, de: {}},
		ec = function () {
			function b(a) {
				void 0 !== a && Xb("lang", a, d);
				c = (M.lang || d).split("-")[0];
				switch (c) {
					case "JP":
						c = "ja";
						break;
					case "EN":
						c = "en"
				}
				return c
			}

			var d = (navigator.language || "ja").split("-")[0], c = "";
			return {
				Cb: b, jd: function (a) {
					function d() {
						--l || a()
					}

					c = b();
					var l = 0;
					++l;
					ec.ec("en", d);
					++l;
					ec.ec("ja", d);
					++l;
					ec.ec(ec.Cb(), d)
				}, Id: function (a) {
					var b = dc[c];
					return b && b[a] || dc.en[a] || dc.ja[a] || "[str:" + c + a + "]"
				}, ec: function (a, c) {
					dc[a] ? Object.keys(dc[a]).length ?
						c(a, dc[a]) : Db("https://cdn.tenhou.net/4/res/lang/string20220321_" + a + ".json", "", function (b) {
							if (b) return alert("LANG " + b);
							try {
								var d = JSON.parse(this.response)
							} catch (k) {
								return
							}
							b = d;
							var g = dc[a];
							if (b.length) for (var f = 0; f < b.length; f += 2) g[b[f + 0]] = b[f + 1]; else for (f in b) g[f] = b[f];
							c(a, d)
						}) : c(a, {})
				}
			}
		}(), P = ec.Id;
	var fc = function () {
		function b(a) {
			if (a) {
				var c = /<([a-zA-Z0-9]+)[^>]*>|[^<]+|<\/(.*)>/g, d = c.exec(a);
				if (d) {
					var h = {};
					h.tag = d[1];
					for (var g = / ([a-zA-Z0-9]+)="([^"]*)"/g, e; e = g.exec(d[0]);) h[e[1]] = e[2];
					for (; (d = c.exec(a)) && !d[2];) h.childNodes || (h.childNodes = []), h.childNodes.push(d[1] ? b(d[0]) : ~~d[0]);
					return h
				}
			}
		}

		function d(a) {
			for (var b = -1, d = e; 0 <= --d;) {
				switch (c[d].tag) {
					case "INIT":
						return d + 1;
					case "N":
						a = c[d][2];
						if (2 == a || 4 == a || 5 == a) b = -1;
						break;
					case "D":
					case "E":
					case "F":
					case "G":
						if (-1 != b) return b;
						break;
					case "T":
					case "U":
					case "V":
					case "W":
						a ||
						(b = d)
				}
				a = !1
			}
			return -1
		}

		var c, a, e, l = {D: !0, E: !0, F: !0, G: !0, T: !0, U: !0, V: !0, W: !0, N: !0, RYUUKYOKU: !0, VOICE: !0},
			m = [22136, 52719, 55146, 42104, 59591, 46934, 9248, 28891, 49597, 52974, 62844, 4015, 18311, 50730, 43056, 17939, 64838, 38145, 27008, 39128, 35652, 63407, 65535, 23473, 35164, 55230, 27536, 4386, 64920, 29075, 42617, 17294, 18868, 2081];
		return {
			Oc: !0, cc: !1, ab: null, Jd: function (a) {
				var c = a.split("-");
				if (4 != c.length) return a;
				if (120 == c[3].charCodeAt(0)) {
					a = parseInt(c[3].substr(1, 4), 16);
					var b = parseInt(c[3].substr(5, 4), 16), d = parseInt(c[3].substr(9,
						4), 16), g = 0;
					"2010041111gm" <= c[0] && (g = ~~("3" + c[0].substr(4, 6)) % (34 - ~~c[0].substr(9, 1) - 1));
					c[3] = db(4, (a ^ b ^ m[g + 0]).toString(16)) + db(4, (b ^ m[g + 0] ^ d ^ m[g + 1]).toString(16))
				}
				return c.join("-")
			}, Ib: function (a) {
				var c = a.tag;
				if (1 < c.length) {
					var b = a.tag.charCodeAt(1);
					48 <= b && 57 >= b && (a[1] = ~~c.substr(1), a.tag = c.substr(0, 1))
				}
				return a
			}, Hd: function (d, f) {
				f && (c = b(f).childNodes);
				if (!f || !c) return Tb.v(P(2003), 1, function () {
					K.Ld ? location.reload() : delete K.log
				});
				fc.cc = !1;
				for (var k = 0; 40 > k; ++k) {
					var h = M["log" + k];
					try {
						h = JSON.parse(h)
					} catch (oa) {
						continue
					}
					if (h.log ==
						d) {
						fc.cc = !0;
						break
					}
				}
				for (var g, k = 0; k < c.length; ++k) {
					switch (c[k].tag) {
						case "SHUFFLE":
							g = R.ud(c[k].seed);
							break;
						case "GO":
							S.Aa(c[k])
					}
					if ("UN" == c[k].tag) break
				}
				a = [];
				for (fc.ab = null; k < c.length; ++k) {
					var h = c[k], m = [0, 0, 0, 0], l = k;
					switch (h.tag) {
						case "INIT":
							a.push(k);
							break;
						case "RYUUKYOKU":
							if ("ron3" == h.type) for (var u = 0; 4 > u; ++u) h["hai" + u] && (m[u] = 6);
							h.owari && (fc.ab = h.owari);
							break;
						case "AGARI":
							for (; h = c[k], m[~~h.who] = h.who == h.fromWho ? 7 : 6, h.paoWho && (m[~~h.paoWho] = 11), k + 1 < c.length && "AGARI" == c[k + 1].tag; ++k) ;
							h.owari && (fc.ab =
								h.owari);
							break;
						case "N":
							Ta(h);
							m[~~h.who] = h[2];
							break;
						default:
							fc.Ib(h)
					}
					if (m[0] || m[1] || m[2] || m[3]) c.splice(l, 0, {tag: "VOICE", type: m}), ++k
				}
				if (g) for (k = 0; k < a.length; ++k) {
					var h = c[a[k]], u = t(h.seed), u = 6 == u[3] && 0 == u[4], v;
					g && (v = h[5] = g(~~h.oya, u));
					if (v) if (u) {
						if (T.u & 16) for (F = 0; 6 > F; ++F) v[F] |= 1280;
						for (u = 0; u < (T.u & 16 ? 3 : 4); ++u) {
							for (F = 0; 4 > F; ++F) v[34 * u + F] |= 1280;
							for (; 34 > F; ++F) v[34 * u + F] |= u + 1 << 8
						}
						for (var m = 0, F = a[k] + 1; F < c.length && "INIT" != c[F].tag; ++F) h = c[F], "N" != h.tag || 4 != h[2] && 2 != h[2] && 5 != h[2] && 10 != h[2] || (u = ~~h.who, v[m / 4 *
						34 + m % 4 ^ 1] |= u + 1 << 8, ++m)
					} else {
						for (var L = !1, l = 13 * (T.u & 16 ? 3 : 4), m = 0, u = -1, F = a[k] + 1; F < c.length && "INIT" != c[F].tag; ++F) switch (h = c[F], h.tag) {
							case "N":
								L = 4 == h[2] || 2 == h[2] || 5 == h[2] || 10 == h[2];
								break;
							case "T":
							case "U":
							case "V":
							case "W":
								u = h.tag.charCodeAt(0) - 84, v[L ? m++ ^ 1 : v.length - 1 - l++] |= u + 1 << 8, L = !1
						}
						for (h = T.u & 16 ? 3 : 4; l < v.length - 14 - m; ++l) u = (u + 1) % h, v[v.length - 1 - l] |= u + 1 << 8;
						for (; l < v.length; ++l) v[v.length - 1 - l] & 3840 || (v[v.length - 1 - l] |= 1280)
					}
				}
				for (k = 0; k < c.length; ++k) gc(K.tw, c[k]);
				for (k = 0; "INIT" != c[k].tag; ++k) switch (c[k].tag) {
					case "BYE":
					case "SHUFFLE":
					case "GO":
						break;
					case "UN":
					case "TAIKYOKU":
						S.Aa(c[k]);
						break;
					default:
						throw console.log(k, c[k]);
				}
				e = a[0];
				K.ts && (e = a[~~K.ts] + 1, delete K.ts)
			}, bb: function (b) {
				if (c) {
					if (0 == arguments.length) {
						for (var f = e; 0 <= f && "INIT" != c[f].tag; --f) ;
						if (0 <= f) return hc(c, f, e - f)
					} else if (0 >= b) {
						var k = d(0 > b);
						if (-1 == k) return;
						if (0 > b && e == k + 1) for (k = k - 1 == a[0] ? c.length - 1 : k - 2; "AGARI" == c[k - 1].tag; --k) ;
						for (var h = [], f = 0; f < a.length && !(k < a[f]); ++f) ;
						for (var g = a[f - 1], f = g; f < k; ++f) h.push(c[f]);
						S.Aa(hc(c, g, k - g));
						e = k;
						ic.ib() && fc.Oc && 1 == k - g && ic.ub()
					} else {
						ic.ib() && fc.Oc &&
						(c.length <= e || "AGARI" == c[e].tag || "RYUUKYOKU" == c[e].tag) && ic.ub();
						if (N.Ga) return J.c6();
						c.length <= e && (e = a[0])
					}
					J.c0();
					for (f = !1; !f && e < c.length; ++e) {
						switch (c[e].tag) {
							case "REACH":
								2 != c[e].step && (f = !0);
								break;
							case "AGARI":
								e + 1 < c.length && "AGARI" != c[e + 1].tag && (f = !0);
								break;
							default:
								l[c[e].tag] && (f = !0)
						}
						S.Aa(c[e])
					}
				}
			}, Ba: function () {
				e = 0;
				c = void 0
			}, Td: function (a) {
				e = ~~a + 1;
				fc.bb(0)
			}, zd: function () {
				for (var a = -1, b = [], d = 0; d < c.length; ++d) {
					var h = c[d];
					switch (h.tag) {
						case "INIT":
							a = d;
							break;
						case "RYUUKYOKU":
						case "AGARI":
							b.push([a,
								c[a], h])
					}
				}
				for (d = b.length - 1; 0 < d && !(b[d][0] < e); --d) ;
				a = b[d][0];
				for (d = 0; d < b.length; ++d) b[d][0] == a && b[d].push(1);
				return b
			}, Ad: function () {
				for (var a = e - 1; 0 <= a && "INIT" != c[a].tag;) --a;
				var b = [];
				for (++a; a < c.length && "INIT" != c[a].tag; ++a) "T" == c[a].tag && b.push([a, c[a]]);
				for (a = b.length - 1; 0 <= a; --a) if (!(e <= b[a][0])) {
					b[a].push(1);
					break
				}
				return b
			}, jc: function (a) {
				if (4 > a) {
					a = (4 + a - K.tw) % 4;
					for (var b = 0; b < c.length; ++b) gc(a, c[b]);
					K.tw = (K.tw + a) % 4
				}
				for (b = 0; b < c.length; ++b) if ("UN" == c[b].tag) {
					S.Aa(c[b]);
					break
				}
				fc.bb(0)
			}
		}
	}();

	function hc(b, d, c) {
		var a = b[d];
		if ("INIT" != a.tag) return null;
		for (var e = [], l = t(a.hai0); l.length;) e[l.pop()] = 1;
		for (l = t(a.hai1); l.length;) e[l.pop()] = 2;
		for (l = t(a.hai2); l.length;) e[l.pop()] = 3;
		for (l = t(a.hai3); l.length;) e[l.pop()] = 4;
		for (var m = t(a.seed), g = t(a.ten), l = t(a.chip), f = ~~a.oya, k = a[5], h = [[], [], [], []], p = [[], [], [], []], q = -1; d < b.length && c; ++d, --c) switch (a = b[d], a.tag) {
			case "D":
			case "E":
			case "F":
			case "G":
				var r = a.tag.charCodeAt(0) - 68, u = a[1] == q, q = a[1];
				e[q] = 0;
				u && p[r].push(254);
				p[r].push(q);
				break;
			case "T":
			case "U":
			case "V":
			case "W":
				r =
					a.tag.charCodeAt(0) - 84;
				q = a[1];
				e[q] = r + 1;
				break;
			case "N":
				void 0 === a[2] && Ta(a);
				for (var q = -1, r = ~~a.who, u = ~~a.m, v = a[3], F = a[1], L = 0; L < F.length; ++L) e[F[L]] = 0;
				5 != a[2] && 4 != a[2] && 10 != a[2] && (v = p[(r + v) % 4], v.pop(), 254 == v[v.length - 1] && v.pop());
				if (5 == a[2]) {
					for (L = 0; L < h[r].length && h[r][L] != (u ^ 24); ++L) ;
					if (L == h[r].length) throw console.log("Log2ReiniXML INVALID KAKAN");
					h[r][L] = u
				} else h[r].unshift(u);
				break;
			case "REACH":
				r = ~~a.who;
				u = ~~a.step;
				2 == u ? (a = t(a.ten), a.length ? g = a : g[r] -= 10) : (1 == u ? p[r].push(255) : (p[r].push(255), g[r] -=
					10), ++m[2]);
				break;
			case "DORA":
				m.push(~~a.hai)
		}
		(a = b[d]) && "AGARI" == a.tag && a.who == a.fromWho && (e[~~a.machi] = 0);
		b = {tag: "REINIT", seed: "" + m, ten: "" + g, oya: f, hai0: [], hai1: [], hai2: [], hai3: []};
		for (d = 0; 136 > d; ++d) e[d] && b["hai" + (e[d] - 1 & 3)].push(d);
		k && (b[5] = k);
		l.length && (b.chip = l);
		for (r = 0; 4 > r; ++r) h[r].length && (b["m" + r] = h[r]);
		for (r = 0; 4 > r; ++r) p[r].length && (b["kawa" + r] = p[r]);
		return b
	}

	var gc = function () {
		function b(b, c) {
			var a = c.split(",");
			8 == a.length ? a = [a[(0 + b) % 4 * 2 + 0], a[(0 + b) % 4 * 2 + 1], a[(1 + b) % 4 * 2 + 0], a[(1 + b) % 4 * 2 + 1], a[(2 + b) % 4 * 2 + 0], a[(2 + b) % 4 * 2 + 1], a[(3 + b) % 4 * 2 + 0], a[(3 + b) % 4 * 2 + 1]] : 16 == a.length && (a = [a[(0 + b) % 4 * 2 + 0], a[(0 + b) % 4 * 2 + 1], a[(1 + b) % 4 * 2 + 0], a[(1 + b) % 4 * 2 + 1], a[(2 + b) % 4 * 2 + 0], a[(2 + b) % 4 * 2 + 1], a[(3 + b) % 4 * 2 + 0], a[(3 + b) % 4 * 2 + 1], a[(0 + b) % 4 * 2 + 8], a[(0 + b) % 4 * 2 + 9], a[(1 + b) % 4 * 2 + 8], a[(1 + b) % 4 * 2 + 9], a[(2 + b) % 4 * 2 + 8], a[(2 + b) % 4 * 2 + 9], a[(3 + b) % 4 * 2 + 8], a[(3 + b) % 4 * 2 + 9]]);
			return a.join(",")
		}

		return function (d, c) {
			if (!d) return c;
			var a = c.tag, e = a.charCodeAt(1);
			if (1 == a.length || 48 <= e && 57 >= e) e = a.charCodeAt(0), 78 == e ? c.who = (4 + ~~c.who - d) % 4 : 68 <= e && 71 >= e ? c.tag = "DEFG".substr((4 + (e - 68) - d) % 4, 1) + a.substr(1) : 84 <= e && 87 >= e && (c.tag = "TUVW".substr((4 + (e - 84) - d) % 4, 1) + a.substr(1)); else switch (a) {
				case "UN":
					a = [c.n0, c.n1, c.n2, c.n3];
					c.n0 = a[(d + 0) % 4];
					c.n1 = a[(d + 1) % 4];
					c.n2 = a[(d + 2) % 4];
					c.n3 = a[(d + 3) % 4];
					c.dan && (a = c.dan.split(","), c.dan = a.concat(a.splice(0, d)).join(","));
					c.rate && (a = c.rate.split(","), c.rate = a.concat(a.splice(0, d)).join(","));
					c.sx && (a = c.sx.split(","),
						c.sx = a.concat(a.splice(0, d)).join(","));
					c.rc && (a = c.rc.split(","), c.rc = a.concat(a.splice(0, d)).join(","));
					c.gold && (a = c.gold.split(","), c.gold = a.concat(a.splice(0, d)).join(","));
					break;
				case "TAIKYOKU":
				case "KANSEN":
					c.oya = (4 + ~~c.oya - d) % 4;
					break;
				case "REINIT":
					a = [c.m0, c.m1, c.m2, c.m3], c.m0 = a[(d + 0) % 4], c.m1 = a[(d + 1) % 4], c.m2 = a[(d + 2) % 4], c.m3 = a[(d + 3) % 4], a = [c.kawa0, c.kawa1, c.kawa2, c.kawa3], c.kawa0 = a[(d + 0) % 4], c.kawa1 = a[(d + 1) % 4], c.kawa2 = a[(d + 2) % 4], c.kawa3 = a[(d + 3) % 4];
				case "INIT":
					c.oya = (4 + ~~c.oya - d) % 4;
					a = [c.hai0, c.hai1,
						c.hai2, c.hai3];
					c.hai0 = a[(d + 0) % 4];
					c.hai1 = a[(d + 1) % 4];
					c.hai2 = a[(d + 2) % 4];
					c.hai3 = a[(d + 3) % 4];
					a = c.ten.split(",");
					c.ten = a.concat(a.splice(0, d)).join(",");
					void 0 != c.chip && (a = c.chip.split(","), c.chip = a.concat(a.splice(0, d)).join(","));
					break;
				case "REACH":
					c.who = (4 + ~~c.who - d) % 4;
					c.ten && (a = c.ten.split(","), c.ten = a.concat(a.splice(0, d)).join(","));
					break;
				case "RYUUKYOKU":
					a = [c.hai0, c.hai1, c.hai2, c.hai3];
					c.hai0 = a[(d + 0) % 4];
					c.hai1 = a[(d + 1) % 4];
					c.hai2 = a[(d + 2) % 4];
					c.hai3 = a[(d + 3) % 4];
					c.sc = b(d, c.sc);
					void 0 != c.owari && (c.owari =
						b(d, c.owari));
					break;
				case "AGARI":
					c.who = (4 + ~~c.who - d) % 4;
					c.fromWho = (4 + ~~c.fromWho - d) % 4;
					void 0 != c.paoWho && (c.paoWho = (4 + ~~c.paoWho - d) % 4);
					c.sc = b(d, c.sc);
					void 0 != c.owari && (c.owari = b(d, c.owari));
					break;
				case "VOICE":
					a = c.type;
					c.type = a.concat(a.splice(0, d));
					break;
				case "BYE":
					c.who = (4 + ~~c.who - d) % 4
			}
			if (c.childNodes) for (a = c.childNodes, e = 0; e < a.length; ++e) a[e].tag && gc(d, a[e]);
			return c
		}
	}();
	var J = gb({}, ["c0", function () {
		U.Wd();
		E(-1, 0, 0)
	}, "c6", function () {
		jc.L();
		var b = Eb("BUTTON[name=c6]");
		b && !b.disabled && (b.disabled = !0);
		kc.Gd() ? (1 == T.a && V.K({tag: "NEXTREADY"}), 3 == T.a && kc.eb(function () {
			fc.bb(1)
		})) : kc.eb(kc.Vd);
		return !1
	}, "c1", function () {
		return 2 == T.a ? !1 : 3 == T.a ? !fc.cc : !0
	}, "s7", function (b) {
		if (b.target.href) return J.c5(b.target.href);
		var d = b.target.name || b.target.id, d = d.split("-");
		J[d[0]](b, d.splice(1).join("-"))
	}, "c19", function () {
	}]);
	gb(J, function () {
		function b() {
			var b = Yb(), c;
			for (c in b) delete b[c];
			J.c0();
			S.qd();
			lc.Ba(!0);
			mc.Ba();
			fc.Ba();
			nc();
			V.Dc();
			V.Oa = 0;
			T.I = [];
			T.J = [];
			N.hb.style.display = "none";
			oc.xc();
			pc.Kb(-1);
			pc.sb();
			pc.Lb();
			qc.$b();
			rc.L();
			jc.L();
			sc.ta();
			tc.oa();
			K.cb ? V.K({tag: "HELO", name: "NoName", sx: "M"}) : (b = {
				tag: "HELO",
				name: M.uname || "NoName",
				sx: M.sx || "M"
			}, M.gpid && (b.gpid = M.gpid, M.removeItem("gpid")), V.K(b))
		}

		return ["c5", function (d) {
			d && d.length ? (K.Od(d), K.log ? Db("https://tenhou.net/0/log/?" + fc.Jd(K.log), "", function (b) {
				if (b) return alert("OPENUEL-log " +
					b);
				fc.Hd(K.log, this.response);
				fc.jc(K.tw)
			}) : K.wg && b()) : Tb.v(P(289) + "<br><input type=text size=20 value='' style='font-size:100%;'/>", 3, function (b) {
				J.c5(b.getElementsByTagName("INPUT")[0].value)
			})
		}, "c8", function () {
			function d() {
				--c || (T.a = 0, delete K.wg, delete K.log, b())
			}

			jc.L();
			var c = 1;
			++c;
			uc.rd(d);
			++c;
			kc.eb(d);
			d()
		}, "c9", function () {
			V.Dc();
			vc(function () {
				K.wg ? (K.cb = !0, b()) : K.log ? (K.cb = !0, J.c5(location.href)) : (K.cb = !1, wc(xc.ac))
			})
		}]
	}());
	var V = function () {
		function b(b) {
			var req = new XMLHttpRequest();
			// req.open("POST", "http://localhost:12121/");
			req.open("POST", "http://localhost:12212/");
			req.send(b.data);
			try {
				var a = JSON.parse(b.data)
			} catch (e) {
			}
			if ("ECHO" == a.tag) {
				if (b = B("c30")) b.style.display = "", b.innerHTML = Date.now() - b.innerText + "ms"
			} else 2 == T.a && gc(K.tw, a), fc.Ib(a), 1 == T.a && "D" == a.tag || S.Aa(a)
		}

		var d;
		setInterval(function () {
			d && 1 == d.readyState && (d.send("<Z/>"), V.Oa && d.send('<PXR v="' + V.Oa + '" />'))
		}, 1E4);
		return {
			Oa: 0, v: function (c) {
				V.L();
				x.WebSocket && (d = yb(new WebSocket("wss://b-wk.mjv.jp"), {
					error: function (a) {
						console.log("ws:onerror", a)
					}, open: function () {
						c(this)
					}, message: b, close: function () {
						this ==
						d && (V.L(), Tb.v("CONNECTION CLOSED<br>" + P(365), 3, function () {
							J.c8()
						}))
					}
				}))
			}, K: function (b) {
				d ? d.send(b.tag ? JSON.stringify(b) : b) : "HELO" == b.tag ? setTimeout(function () {
					V.v(function (a) {
						a.send(JSON.stringify(b))
					})
				}, 1) : console.trace("NO CONNETION", b)
			}, L: function () {
				d && (d.close(), d = null)
			}, Dc: function () {
				d && 1 == d.readyState && d.send("<BYE/>")
			}
		}
	}();
	var R = function () {
		function b() {
			return !1
		}

		function d(a) {
			return 16 == a || 52 == a || 88 == a
		}

		var c, a, e, l;
		return {
			Za: 0, Ta: !1, Lc: {136: 37, 255: 255}, fe: function (m) {
				for (var g = R.Lc, f = 0; 136 > f; ++f) {
					var k = ~~(f / 4);
					g[f] = 27 > k ? 10 * ~~(k / 9) + k % 9 + 1 : k - 27 + 30
				}
				T.u & 2 ? R.bc = b : (R.bc = d, g[16] = 0, g[52] = 10, g[88] = 20);
				var g = T.za, f = T.J[0], k = T.J[3], h = T.J[4];
				R.Ta = 6 == k && 0 == h;
				e = (4 + g - f % 4) % 4;
				a = ((g + (k + 1) + (h + 1) - 1) % 4 * 17 + 17 - 1 - (k + 1) - (h + 1)) % 68 * 2 + 2;
				R.Ta && (a = 34 * (e + 1));
				c = [0, 0, 0, 0];
				R.Za = 0;
				l = null;
				if (m) for (l = [], f = 0; 136 > f; ++f) l[f] = m[135 - f]
			}, Nb: function () {
				if (!R.Ta) return R.zc(c[0]++)
			},
			Ac: function (a) {
				if (!R.Ta) return R.zc(135 - a ^ 1)
			}, zc: function (b) {
				b = (135 - b + a) % 136;
				var c = ~~(b / 34);
				b %= 34;
				return [121, 40 * (3 == T.a && W.o & 8 ? 1 : 0) + (b >> 1) + 17 * (~b & 1), 255, c]
			}, ge: function (b, c) {
				return l ? R.Ta ? l[135 - (34 * b + ~~(c % 34 / 17) + c % 17 * 2)] : l[(135 - (34 * b + c % 34) + a) % 136] : 136
			}, bd: function (a) {
				if (!c) return 0;
				if (0 != (T.u & 2048)) return 116 - c[0] - 2 * (T.J.length - 5);
				if (!R.Ta) return 122 - c[0] - R.Za;
				for (var b = 0, d = -1, k = 1; 4 >= k; ++k) T.I[(a + k) % 4] && b < c[(a + k) % 4] && (b = c[(a + k) % 4], d = k);
				return (30 - b) * (T.u & 16 ? 3 : 4) + d - 1
			}, bc: b
		}
	}();
	R.ud = function (b) {
		function d(a) {
			for (var b = 0; b < a.length; ++b) a[b] = (a[b] & 255) << 24 | (a[b] & 65280) << 8 | (a[b] & 16711680) >>> 8 | (a[b] & 4278190080) >>> 24;
			return a
		}

		b = b.split(",");
		if ("mt19937ar-sha512-n288-base64" == b[0]) {
			b = function (a) {
				a = atob(a);
				for (var b = [], c = 0; c < a.length; c += 4) b.push(a.charCodeAt(c + 0) << 0 | a.charCodeAt(c + 1) << 8 | a.charCodeAt(c + 2) << 16 | a.charCodeAt(c + 3) << 24);
				return b
			}(b[1]);
			var c = -1, a = new Va;
			ab(a, b, b.length);
			var e = new Va;
			return function (b, m) {
				if (m && c != b) {
					for (var g = [], f = 0; 624 > f; ++f) g[f] = bb(a);
					ab(e, g, 624)
				}
				c =
					b;
				for (var k = m ? e : a, g = [], h = [], f = 0; 9 > f; ++f) {
					for (var l = [], q = 0; 32 > q; ++q) l[q] = bb(k);
					Array.prototype.push.apply(h, d(cb(d(l))))
				}
				for (var f = 0; f < h.length; ++f) h[f] >>>= 0;
				if (T.u & 16) for (f = 0; 136 > f; ++f) (4 > f || 32 <= f) && g.push(f); else for (f = 0; 136 > f; ++f) g.push(f);
				q = g.length;
				for (f = 0; f < q - 1; ++f) k = f + h[f] % (q - f), l = g[f], g[f] = g[k], g[k] = l;
				return g
			}
		}
	};
	var ic = function () {
		function b(b) {
			if (void 0 !== e) return 350 < c && 25 < c - a && (e(), a = c), c += b, !0
		}

		function d(a) {
			a.buttons || ic.ub()
		}

		var c = 0, a = 0, e = void 0;
		yb(x, {touchend: d, touchcancel: d, mouseup: d, blur: d});
		return {
			ib: function () {
				return !!Yb().Fc
			}, ub: function (d, m) {
				e = d;
				c = a = 0;
				e ? (m && e(), Yb().Fc = b) : delete Yb().Fc
			}
		}
	}();
	var N = function () {
		function b() {
			c.style.display = "";
			a.style.display = "";
			ob = x.devicePixelRatio || 1;
			var b = qb(nb), d = b.b, f = b.h, k, g, l;
			3 * d < 4 * f ? (b = 20 * ~~(d / 20), 800 > b ? b = 800 : 2640 < b && (b = 2640), k = 3 * b / 4, g = 800 <= d && 2660 > d ? b : d, l = 3 * g / 4) : (k = 15 * ~~(f / 15), 600 > k ? k = 600 : 1980 < k && (k = 1980), b = 4 * k / 3, l = 600 <= f && 1995 > f ? k : f, g = 4 * l / 3);
			var p = g / b, q = ~~((d - g) / 2), ga = ~~((f - l) / 2);
			console.log("w(" + d.toFixed(4) + "," + f.toFixed(4) + ")", 3 * d < 4 * f, "res=" + b + "," + k, p.toFixed(4), q, ga);
			n(c.style, {
				width: pb(g), height: pb(l), transform: "translate(" + pb(q) + "," + pb(ga) +
					")"
			});
			n(a.style, {width: pb(g), height: pb(l), transform: "translate(" + pb(q) + "," + pb(ga) + ")"});
			m.style.transform = h.style.transform = "scale(" + p * b / 1440 / ob + ")";
			e.style.transform = "translateZ(-1000px) translate(-50%,-50%) perspective(2200px) scale(" + .855 * b * p / 1E3 / ob + ") rotateX(40.3deg) translate(0,-7.15%)";
			nb.style.fontSize = b / ob / 50 + "px";
			N.Ga && (d = N.Ga.parentNode) && (d.style.transform = "scale(" + p * b / d.offsetWidth / ob + ")");
			if (N.P.canvas.width != b || N.P.canvas.height != k) yc({wd: b, xd: k}), oc.Sb();
			N.Ra = b;
			N.zb = k
		}

		function d() {
			c.style.display =
				"none";
			a.style.display = "none";
			clearTimeout(q);
			q = setTimeout(b, 250)
		}

		var c = z("DIV", nb, "nosel", {}, {position: "fixed", opacity: 0, display: "none", transformOrigin: "0 0"}),
			a = z("DIV", nb, "nosel", {}, {position: "fixed", opacity: 0, display: "none", transformOrigin: "0 0"}),
			e = z("DIV", a, "nopp", {}, {left: "50%", top: "50%", width: "1000px", height: "1000px"}),
			l = z("DIV", e, "", {}, {position: "absolute", width: "100%", height: "100%"}),
			m = z("DIV", a, "nopp", {}, {width: "1440px", height: "1080px", transformOrigin: "0 0", color: "#FFF"}),
			g = z("CANVAS",
				a, "nopp", {}, {width: "100%", height: "100%"}).getContext("2d"),
			f = z("CANVAS", a, "nopp", {}, {width: "100%", height: "100%", display: "none"}).getContext("2d"),
			k = z("DIV", a, "nopp ts0", {}, {right: "80%", bottom: "7.7%", fontSize: "60%", color: "#FFF", display: "none"}),
			h = z("DIV", a, "nopp", {}, {width: "1440px", height: "1080px", transformOrigin: "0 0", color: "#FFF"}),
			p = z("DIV", a, "", {}, {position: "absolute", top: 0, right: 0}), q;
		xb(x, "orientationchange", d);
		xb(x, "resize", d);
		return {
			Ra: 0, zb: 0, Mc: d, Wa: a, Eb: c, ob: e, Rc: l, ic: m, P: g, Kc: f, hb: k, Kd: h,
			pd: p, Ga: null, Xa: null, Pa: null
		}
	}();
	var zc = function () {
		function b(a) {
			n(c.style, {transition: "opacity 500ms ease-out", opacity: 0});
			a();
			cc(c, function () {
				bc(c);
				c.parentNode.removeChild(c);
				c = null
			})
		}

		function d(a) {
			n(c.style, {transition: "opacity 500ms linear", opacity: ""});
			cc(c, function () {
				bc(c);
				Yb().ie = function () {
					if (3 * N.P.canvas.width / 4 != N.P.canvas.height) return !0;
					b(a)
				}
			})
		}

		var c = z("DIV", nb, "nopp", {}, {
			position: "absolute",
			left: "50%",
			top: "50%",
			width: "25%",
			transform: "translate(-50%,-50%)",
			opacity: 0
		});
		z("IMG", c, "", {}, {width: "100%"});
		z("DIV", c, "bar",
			{}, {color: "#AAA", height: "0.8em", textAlign: "center", fontSize: "0.5vmin", border: "1px solid #DDD"});
		return {
			Sd: function (a) {
				var b = c.childNodes[0];
				xb(b, "load", function () {
					d(a)
				});
				b.src = Nb[0]
			}, $d: function (a) {
				c && (c.childNodes[1].style.background = "linear-gradient(to right,#DDD 0%,#DDD " + a + "%, #000 " + a + "%,#000 100%)")
			}
		}
	}();
	var jc = function () {
		function b(a) {
			void 0 !== a && (g = a);
			if (void 0 !== g) if (a = N.Pa.style, g.tagName) {
				var b = g.getBoundingClientRect();
				a.left = b.left + "px";
				a.top = b.top + "px";
				a.width = b.width + "px";
				a.height = b.height + "px"
			} else if (b = X[116][0][g], b.c) {
				var c = qb(N.P.canvas);
				a.left = pb(c.x + (b.c.i.x + b.da) / N.P.canvas.width * c.b);
				a.top = pb(c.y + (b.c.i.y + b.ea) / N.P.canvas.height * c.h);
				a.width = pb(b.c.i.b / N.P.canvas.width * c.b);
				a.height = pb(b.c.i.h / N.P.canvas.height * c.h)
			}
		}

		var d, c, a, e, l, m, g;
		N.Pa = z("DIV", nb, "nosel", {innerHTML: "<div class=ts2 style='position:absolute;right:0;bottom:0;padding:0 0.1em;'></div>"},
			{position: "fixed", pointerEvents: "none", zIndex: 1, fontSize: "70%"});
		return {
			Ed: function () {
				var b = (T.u & 8 ? 7 : 3) - (T.u & 16 ? 1 : 0);
				0 == T.J[0] && 0 == T.J[1] ? (c = T.kc, a = e = T.lc) : b <= T.J[0] ? (c = T.pc, a = e = T.qc) : (c = T.mc, a = e = T.nc)
			}, v: function (f, k) {
				N.Pa.firstChild.innerHTML = "";
				N.Pa.style.display = "";
				if (-1 === k) {
					for (var h = 13; 0 <= h && !(X[116][0][h].w & 16 && X[116][0][h].w & 8); --h) ;
					if (-1 == h) for (h = 13; 0 <= h && !(X[116][0][h].w & 16); --h) ;
					0 <= h && (k = h)
				}
				b(k);
				0 > f ? (d = -f + 1E3, a = 0) : d = (f || c) + a + 1E3;
				m = d - 1E3;
				l = d - 1E3;
				Yb().count = function (c) {
					if (0 > l) return jc.L(),
						!1;
					d -= c;
					if (0 <= d && ~~(1 + l / 1E3) == ~~(1 + d / 1E3)) return !0;
					l = d;
					0 <= d ? (0 > f ? E(1E3 > d ? 0 : 102, 0, 0) : 3E3 > d && E(108, 0, 0), N.Pa.firstChild.innerText = d < a || !a ? ~~(d / 1E3) : ~~((d - a) / 1E3) + "+" + ~~(a / 1E3), b()) : jc.wb();
					return !0
				}
			}, wb: function (a) {
				if (void 0 !== g) if (g && g.classList && g.classList.contains("s7")) ~a & 1 && (J.s7({target: g}), jc.L()); else if (~a & 2) {
					a = g;
					if (X[116][0][a].w & 64) for (a = 13; 0 <= a && !(X[116][0][a].w & 16); --a) ;
					J.c4(a);
					jc.L()
				}
			}, Uc: function () {
				a < e && (a += 1E3)
			}, Rb: b, L: function () {
				d < a && (a = 1E3 * ~~(0 > d ? 0 : d / 1E3));
				m < d && jc.Uc();
				l = -1;
				N.Pa.style.display =
					"none";
				g = void 0
			}
		}
	}();

	function E() {
	}

	function Ac() {
	}

	function Bc() {
	}

	function Cc() {
		var b = {};
		return function (d, c, a) {
			for (var e in b) if (b[e] == d && a - 5 < e && e < a + 10) return;
			b[a] = d;
			E(d, c, a)
		}
	}

	x.AudioContext = x.AudioContext || x.webkitAudioContext;
	x.AudioContext && function () {
		function b(b, m, g) {
			var f = a.createBufferSource();
			if (g) {
				var k = b + "-" + m + "-" + g;
				d[k] = f;
				f.onended = function () {
					delete d[k]
				}
			}
			f.buffer = c[b].Ka;
			f.connect(e);
			f.start ? f.start(a.currentTime + g / 1E3) : f.noteOn(a.currentTime + g / 1E3);
			return f
		}

		var d = {}, c = {}, a = new AudioContext, e;
		E = function (a, m, g) {
			if (-1 == a) for (var f in d) d[f].stop(), delete d[f]; else if ("0" != M.sevol && 0 != a && e) {
				if (c[a]) return b(a, m, g);
				switch (a) {
					case 1010:
						E(136, m, g);
						E(113, m, g);
						break;
					case 1011:
						E(137, m, g);
						E(113, m, g);
						break;
					case 1012:
						E(141,
							m, g);
						E(113, m, g);
						break;
					case 1013:
						E(136, m, g);
						E(113, m, g);
						break;
					case 1014:
						E(128, m, g);
						E(113, m, g);
						break;
					case 1015:
						E(132, m, g);
						E(113, m, g);
						break;
					case 1016:
						E(118, m, g);
						E(113, m, g);
						break;
					case 1017:
						E(119, m, g);
						E(113, m, g);
						break;
					case 1018:
						E(123, m, g);
						E(113, m, g);
						break;
					case 1019:
						E(145, m, g);
						E(145, m, g);
						break;
					case 1020:
						E(146, m, g);
						E(145, m, g);
						break;
					case 1021:
						E(150, m, g);
						E(145, m, g);
						break;
					case 1022:
						E(154, m, g);
						E(114, m, g);
						break;
					case 1023:
						E(155, m, g);
						E(114, m, g);
						break;
					case 1024:
						E(159, m, g);
						E(114, m, g);
						break;
					case 1025:
						E(163, m, g);
						E(114,
							m, g);
						break;
					case 1026:
						E(164, m, g);
						E(114, m, g);
						break;
					case 1027:
						E(168, m, g);
						E(114, m, g);
						break;
					case 127:
						E(136, m, g);
						break;
					case 112:
						E(111, m, g);
						break;
					case 1028:
						E(111, m, g)
				}
			}
		};
		Ac = function () {
			e.gain.value = ~~(M.sevol || 5) / 10
		};
		(function (a) {
			zb("touchend", a);
			zb("mousedown", a)
		})(function () {
			var c = ~~(M.sevol || 5) / 10;
			e = a.createGain ? a.createGain() : a.createGainNode();
			e.connect(a.destination);
			e.gain.value = c;
			e.gain.value = .001;
			b(104, 0, 0);
			setTimeout(function () {
				e.gain.value = c
			}, 1E3)
		});
		Bc = function (b, d) {
			a.decodeAudioData(d, function (a) {
				for (var d in b) c[b[d]] =
					{Ka: a}
			})
		}
	}();
	if (x.gr && x.gr.eworx && x.gr.eworx.AVAudioSessionAdapter) {
		var Dc = gr.eworx.AVAudioSessionAdapter;
		(new Dc).setCategoryWithOptions(Dc.Categories.PLAYBACK, Dc.CategoryOptions.MIX_WITH_OTHERS, function () {
		}, function () {
		})
	}
	;var yc = function () {
		function b(a) {
			var b = l.indexOf(a.target);
			a.total && (m[b] = a.total);
			g[b] = a.loaded;
			for (var c = a = 0, b = 0; b < l.length; ++b) a += m[b], c += g[b];
			zc.$d(~~(c / a * 100))
		}

		function d() {
			for (var b = 0; b < l.length; ++b) if (!l[b].response) return;
			for (b = 0; b < l.length; ++b) if (200 != l[b].status) {
				alert("DOWNLOAD ERROR");
				return
			}
			Ec.lb(l[0].response);
			Fc.lb(l[1].response);
			Fc.lb(l[2].response);
			for (var d = Date.now(), h = 0, b = 3; b < l.length; ++b) h += l[b].response.byteLength;
			for (var h = new Uint8Array(h), g = 0, b = 3; b < l.length; ++b) h.set(new Uint8Array(l[b].response),
				g), g += l[b].response.byteLength;
			console.log("compile _obj0", Date.now() - d);
			Fc.lb(h.buffer);
			Sa.Rb(c, a);
			for (b = 0; 4 > b; ++b) Gc.$a(b), Hc.$a(b);
			Fc.be();
			n(N.P.canvas, {width: c, height: a});
			n(N.Kc.canvas, {width: c, height: a});
			Ic.Sc();
			Ic.ia();
			l = void 0;
			e && (e.close(), e = void 0)
		}

		var c, a, e, l, m, g;
		return function (f) {
			if (l) for (var k = 0; k < l.length; ++k) l[k].abort();
			c = f.wd;
			a = f.xd;
			e && (e.close(), e = void 0);
			l = [];
			m = [];
			g = [];
			var h = gb({}, ["0/_res0_01440x01080.ini", {
				Ua: 0,
				content: ""
			}, "2/_obj1_" + db(5, c) + "x" + db(5, a) + ".ini", {Ua: 1, content: ""},
				"3/_sdw0_" + db(5, c) + "x" + db(5, a) + ".ini", {
					Ua: 2,
					content: ""
				}, "9/_obj0_" + db(5, c) + "x" + db(5, a) + ".ini", {Ua: 3, content: ""}]), p = 0;
			e = yb(new WebSocket("wss://b-wk.mjv.jp"), {
				error: function (a) {
					alert("DOWNLOAD ERROR WS " + JSON.stringify(a));
					location.reload()
				}, open: function () {
					for (var a in h) ++p, this.send('<GET id="' + (M.uname || "NoName") + '" file="' + a + '"/>')
				}, message: function (a) {
					try {
						var c = JSON.parse(a.data)
					} catch (v) {
						return
					}
					a = h[c.name];
					if ("FILE" == c.tag && a && (a.content = atob(c.content).split(/\r?\n/), !--p)) for (var f in h) if (a =
						h[f], c = a.content, 3 == c.length) g[a.Ua] = 0, m[a.Ua] = ~~c[1].substr(2), l[a.Ua] = Db("https://cdn.tenhou.net/4/res/" + f.replace(".ini", ".dat"), "arraybuffer", d, b); else if (3 < c.length) for (a = 2; a < c.length; ++a) c[a] && (c[a] = c[a].split("="), g[a - 2 + 3] = 0, m[a - 2 + 3] = ~~c[a][1], l[a - 2 + 3] = Db("https://cdn.tenhou.net/4/res/" + f.replace(".ini", "_" + c[a][0] + ".dat"), "arraybuffer", d, b))
				}
			})
		}
	}();
	var Jc = function () {
		var b = 0, d = 0;
		return {
			La: 0, yb: 0, Zc: 0, $c: 0, Da: function (c) {
				console.log(c || "", ~~((Jc.La + Jc.yb) / (Jc.Zc + Jc.$c) * 100) + "%", Jc.La - b, Jc.yb - d);
				b = Jc.La;
				d = Jc.yb
			}
		}
	}();

	function Kc(b) {
		return String.fromCharCode(b >> 0 & 255) + (b >> 24 & 255) + "-" + (b >> 8 & 255) + "-" + (b >> 16 & 255)
	}

	function Lc(b, d, c, a) {
		return b << 0 | (d & 255) << 8 | (c & 255) << 16 | (a & 255) << 24
	}

	var Fc = function () {
		var b = {}, d = {}, c = {}, a = [function (a, b, c, d) {
			a.x = b.x + b.b - (c.x + ~~d.R);
			a.b = c.b - a.x
		}, function (a, b, c, d) {
			a.h = b.y - (c.y + ~~d.ka)
		}, function (a, b, c, d) {
			a.b = b.x - (c.x + ~~d.R)
		}, function (a, b, c, d) {
			a.y = b.y + b.h - (c.y + ~~d.ka);
			a.h = c.h - a.y
		}];
		return {
			Gb: b, Pd: d, lb: function (a) {
				function c(a) {
					var b = a >> 0 & 255, c = a >> 8 & 255;
					return 110 == b ? (20 <= c && 38 > c ? c = 40 + c % 20 : 40 <= c && 58 > c ? c = 98 + c % 20 : 60 <= c && 78 > c && (c = 120 + c % 20), b << 0 | c << 8 | (a >> 16 & 255) << 16 | (a >> 24 & 255) << 24) : a
				}

				var e = 0, g = new DataView(a), f = g.getUint32(e, !0), e = e + 4, k = g.getUint32(e,
					!0), e = e + 4;
				g.getUint32(e, !0);
				e += 4;
				if (k != {
					812278383: 103780,
					829055599: 3856,
					845832815: 103780,
					862610031: 3856,
					813130867: 6316,
					846685299: 6316
				}[f]) throw"invalid dwStructSize";
				if (813130867 == f || 846685299 == f) {
					for (var h = [{pa: 116, offset: 0, ra: [14, 13, 14]}, {
						pa: 121,
						offset: 0,
						ra: [17, 17, 16, 16, 16, 17, 17, 16, 16, 17]
					}, {pa: 107, offset: 0, ra: [25, 24, 4]}, {pa: 107, offset: 40, ra: [25, 24]}, {
						pa: 110,
						offset: 0,
						ra: [18, 17]
					}, {pa: 110, offset: 20, ra: [17, 17]}, {
						pa: 110,
						offset: 40,
						ra: [17]
					}], f = []; h.length; h.shift()) for (var p = 0; 4 > p; ++p) for (var q = 0; q < h[0].ra.length; ++q) for (var r =
						0; r < h[0].ra[q]; ++r) f.push(Lc(h[0].pa, h[0].offset + r, q, p));
					for (h = e; h < k; h += 4) if (e = g.getUint32(h, !0), p = f.shift(), e) {
						var q = g.getInt16(e, !0), e = e + 2, r = g.getInt16(e, !0), e = e + 2, u = g.getInt16(e, !0), e = e + 2,
							v = g.getInt16(e, !0), e = e + 2, F = g.getUint32(e, !0), e = e + 4, p = c(p);
						d[p] || (d[p] = {});
						n(d[p], {aa: p, x: q, y: r, b: u, h: v, Ka: a, fb: F, gb: e})
					}
					for (h = [{
						pa: 110,
						offset: 120,
						ra: [17, 17],
						Qd: 40
					}]; h.length; h.shift()) for (p = 0; 4 > p; ++p) for (q = 0; q < h[0].ra.length; ++q) for (r = 0; r < h[0].ra[q]; ++r) d[Lc(h[0].pa, h[0].offset + r, q, p)] = d[Lc(h[0].pa, h[0].Qd + r,
						q, p)]
				} else {
					if (829055599 == f || 862610031 == f) g.getFloat32(e, !0), e += 4, g.getFloat32(e, !0), e += 4, g.getFloat32(e, !0), e += 4;
					for (h = e; h < k; h += 4) if (e = g.getUint32(h, !0)) q = g.getInt16(e, !0), e += 2, r = g.getInt16(e, !0), e += 2, u = g.getInt16(e, !0), e += 2, v = g.getInt16(e, !0), e += 2, p = g.getUint32(e, !0), e += 4, g.getUint32(e, !0), e += 4, F = g.getUint32(e, !0), e += 4, p = c(p), b[p] || (b[p] = {}), n(b[p], {
						aa: p,
						x: q,
						y: r,
						b: u,
						h: v,
						Ka: a,
						fb: F,
						gb: e,
						i: void 0
					})
				}
			}, be: function () {
				var e = [2584, 136, 136, 2584, 2584, 532, 84, 3800, 3800, 2736, 144, 2584, 2584, 2584], l = 0, m;
				for (m in b) {
					var g =
						m >> 0 & 255, f = m >> 8 & 255, k = m >> 16 & 255, h = m >> 24 & 255;
					121 == g && 0 <= f && 17 > f && (0 <= k && 37 > k || 38 == k) && 0 <= h && 4 > h ? --e[0] : 121 == g && 0 <= f && 17 > f && (37 == k || 39 == k) && 0 <= h && 4 > h ? --e[1] : 121 == g && 17 <= f && 34 > f && (37 == k || 39 == k) && 0 <= h && 4 > h ? --e[2] : 121 == g && 40 <= f && 57 > f && (0 <= k && 37 > k || 38 == k) && 0 <= h && 4 > h ? --e[3] : 121 == g && 57 <= f && 74 > f && (0 <= k && 37 > k || 38 == k) && 0 <= h && 4 > h ? --e[4] : 116 == g && 0 <= f && 14 > f && (0 <= k && 37 > k || 38 == k) && 0 == h ? --e[5] : 116 == g && 0 <= f && 14 > f && (37 == k || 39 == k) && 1 <= h && 4 > h ? --e[6] : 107 == g && 0 <= f && 25 > f && (0 <= k && 37 > k || 38 == k) && 0 <= h && 4 > h ? --e[7] : 107 == g && 40 <=
					f && 65 > f && (0 <= k && 37 > k || 38 == k) && 0 <= h && 4 > h ? --e[8] : 110 == g && 0 <= f && 18 > f && (0 <= k && 37 > k || 38 == k) && 0 <= h && 4 > h ? --e[9] : 110 == g && 0 <= f && 18 > f && (37 == k || 39 == k) && 0 <= h && 4 > h ? --e[10] : 110 == g && 40 <= f && 57 > f && (0 <= k && 37 > k || 38 == k) && 0 <= h && 4 > h ? --e[11] : 110 == g && 98 <= f && 115 > f && (0 <= k && 37 > k || 38 == k) && 0 <= h && 4 > h ? --e[12] : 110 == g && 120 <= f && 137 > f && (0 <= k && 37 > k || 38 == k) && 0 <= h && 4 > h ? --e[13] : (console.log(Kc(m)), ++l)
				}
				if (l) throw console.log(e, l);
				e = {};
				for (m in d) if (g = m >> 0 & 255, f = m >> 8 & 255, k = m >> 16 & 255, h = m >> 24 & 255, 121 == g && 1 == k && 0 <= f && 17 > f && (f += 17, k = 0), 121 ==
				g && 2 == k && 0 <= f && 17 > f && (f += 0, k = 1), 121 == g && 3 == k && 0 <= f && 17 > f && (f += 17, k = 1), 121 != g || 4 != k) if (121 == g && 5 == k && 0 <= f && 17 > f && (f += 40, k = 0), 121 == g && 6 == k && 0 <= f && 17 > f && (f += 57, k = 0), 121 == g && 7 == k && 0 <= f && 17 > f && (f += 40, k = 1), 121 == g && 8 == k && 0 <= f && 17 > f && (f += 57, k = 1), 121 != g || 9 != k) if (107 != g || 2 != k) l = d[m], m = g << 0 | f << 8 | k << 16 | h << 24, g = m & 4278255615, e[g] ? (f = e[g], f.x == l.x && f.y == l.y && f.b == l.b && f.h == l.h || console.log(Kc(g), f.x, f.y, f.b, f.h, Kc(m), l.x, l.y, l.b, l.h)) : e[g] = l;
				for (m in b) {
					k = m >> 16 & 255;
					if (34 == k) k = 38; else if (37 == k) k = 39; else continue;
					b[m].Cd = b[m & 4278255615 | k << 16]
				}
				for (m in b) l = b[m], k = m >> 16 & 255, l.i = 37 > k ? b[m & 4278255615 | 2228224] : l;
				for (m in b) if (l = b[m], !(l.X || (g = m >> 0 & 255, f = m >> 8 & 255, k = m >> 16 & 255, h = m >> 24 & 255, 38 <= k || (m &= 4278255615, l.X = c[m], l.X)))) {
					var p = 0, q = 1;
					121 == g && (q = 2, 17 <= f && 34 > f && 37 == k ? (f -= 17, p = 1, q = 3) : 40 <= f && 57 > f ? (f -= 40, p = 5, q = 7) : 57 <= f && 74 > f && (f -= 57, p = 6, q = 8));
					e = d[Lc(g, f, p, h)];
					if (!e) throw console.log("sdw default", g, f, k, h, p, q);
					l.X = c[m] = {};
					l.X[0] = e;
					l.X[2] = Pb();
					var r = d[Lc(g, f, q, h)];
					r && (l.X[1] = r);
					if (e && r && (e.x != r.x || e.y != r.y || e.b != r.b ||
						e.h != r.h)) throw console.log("sdw default", g, f, k, h, p, q);
				}
				for (m in c) g = c[m], e = g[0], n(g[2], {x: 0, y: 0, b: e.b, h: e.h});
				k = [121, 4473, 10361, 14713, 116, 107, 1643, 3179, 10347, 11883, 13419, 110, 10350, 25198, 30830];
				for (m in c) {
					g = m >> 0 & 255;
					f = m >> 8 & 255;
					h = m >> 24 & 255;
					e = c[m];
					if (-1 == k.indexOf(m & 65535)) {
						if (p = c[Lc(g, 40 * (121 == g && 40 <= f && 74 > f ? 1 : 0) + f % 40 - 1, 0, h)]) e[3] || (e[3] = Pb()), n(e[3], e[2]), l = {
							R: 0,
							ka: 0
						}, a[(h + (110 == g ? 2 : 0)) % 4](e[3], p[0], e[0], l);
						if (116 == g || 121 == g) continue;
						if (p = c[Lc(g, 40 + f % 40 - 1, 0, h)]) e[4] || (e[4] = Pb()), n(e[4], e[2]), l = Sa[g][h](f %
							40 - 1), a[(h + (110 == g ? 2 : 0)) % 4](e[4], p[0], e[0], l)
					}
					110 == g && (40 <= f && 58 > f || 120 <= f && 138 > f) && (p = c[Lc(g, 98 + f % 40, 0, h)], e[5] || (e[5] = Pb()), n(e[5], e[2]), l = {
						R: 0,
						ka: 0
					}, a[(h + 3) % 4](e[5], p[0], e[0], l), e[3] && (e[6] || (e[6] = Pb()), n(e[6], e[3]), l = Sa[g][h](f % 40 - 1), a[(h + 3) % 4](e[6], p[0], e[0], l)), e[4] && (e[7] || (e[7] = Pb()), n(e[7], e[4]), l = Sa[g][h](f % 40 - 1), a[(h + 3) % 4](e[7], p[0], e[0], l)))
				}
			}
		}
	}();
	var Mc = {
		r: 0, Ea: 0, Gc: 0, Db: function (b) {
			void 0 !== b && (Xb("msk", b, "000000"), Mc.r = parseInt(b.substr(0, 2), 16) / 255, Mc.Ea = parseInt(b.substr(2, 2), 16) / 255, Mc.Gc = parseInt(b.substr(4, 2), 16) / 255);
			return M.msk && M.msk.match(/^([0-9a-fA-F]{6})$/) ? M.msk : "000000"
		}
	};
	Mc.Db(Mc.Db());
	var Nc = function () {
		var b = [[.95, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, .75, 0, 0, 0, 0, 0, 1, 0, 0, .5, .25, 0, 1], [.5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, .5, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1], [.8, 0, 0, 0, 0, 0, .8, 0, 0, 0, 0, 0, .8, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, .5, 1, 0, 1], [.7, 0, 0, 0, 0, 0, .7, 0, 0, 0, 0, 0, .7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [.8, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, .8, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [.9, 0, 0, 0, 0, 0, .85, 0, 0, 0, 0, 0, .7, 0, 0, 0, 0, 0, 1, 0, .1, 0, 0, 0, 1]];
		return {
			La: function (d, c) {
				++Jc.La;
				for (var a =
					d.i, e = (new Zlib.Inflate(new Uint8Array(a.Ka, a.gb, a.fb))).decompress(), l = new Uint8ClampedArray(e.buffer.slice(0, a.b * a.h * 4)), m = a.b, g = a.h, f = 0; f < g; ++f) for (var k = 0; k < m; ++k) {
					var h = 4 * (f * m + k), p = l[h + 0];
					l[h + 0] = l[h + 2];
					l[h + 2] = p
				}
				if (d.aa != a.aa) {
					if (d.x < a.x || d.y < a.y || a.x + a.b < d.x + d.b || a.y + a.h < d.y + d.h) throw 0;
					var e = (new Zlib.Inflate(new Uint8Array(d.Ka, d.gb, d.fb))).decompress(),
						q = (new DataView(e.buffer)).getUint8(0, !0);
					if (e.byteLength != d.b * d.h + 4 * q + 1) throw 0;
					for (f = 0; f < d.h; ++f) for (k = 0; k < d.b; ++k) h = 4 * ((d.y - a.y + f) * m + (d.x -
						a.x + k)), p = e[f * d.b + k + 4 * q + 1], l[h + 0] ^= e[4 * p + 3], l[h + 1] ^= e[4 * p + 2], l[h + 2] ^= e[4 * p + 1], l[h + 3] ^= e[4 * p + 4]
				}
				f = d.i.Cd;
				e = (new Zlib.Inflate(new Uint8Array(f.Ka, f.gb, f.fb))).decompress();
				if (e.byteLength != f.b * f.h * 4) throw 0;
				for (f = 0; f < g; ++f) for (k = 0; k < m; ++k) {
					var h = 4 * (f * m + k), r = e[h + 3] / 255;
					r && (p = e[h + 2], a = p * (1 - r + r * Mc.r), q = p * (1 - r + r * Mc.Ea), p *= 1 - r + r * Mc.Gc, l[h + 0] = 255 > a ? a : 255, l[h + 1] = 255 > q ? q : 255, l[h + 2] = 255 > p ? p : 255)
				}
				if (c) {
					f = -1;
					if (c & 124) c & 32 ? f = c & 8 ? 4 : 2 : c & 8 ? f = c & 16 ? 0 : 1 : c & 4 ? f = 7 : c & 64 && (f = c & 8 ? 1 : 3); else switch (c) {
						case 0:
							f = -1;
							break;
						case 1:
							f =
								2;
							break;
						case 2:
							f = 5;
							break;
						case 2:
							f = 5;
							break;
						case 3:
							f = 6
					}
					if (e = b[f]) for (f = 0; f < g; ++f) for (k = 0; k < m; ++k) h = 4 * (f * m + k), a = l[h + 0], q = l[h + 1], p = l[h + 2], r = l[h + 3], l[h + 0] = e[0] * a + e[5] * q + e[10] * p + e[15] * r + 255 * e[20], l[h + 1] = e[1] * a + e[6] * q + e[11] * p + e[16] * r + 255 * e[21], l[h + 2] = e[2] * a + e[7] * q + e[12] * p + e[17] * r + 255 * e[22], l[h + 3] = e[3] * a + e[8] * q + e[13] * p + e[18] * r + 255 * e[23]
				}
				return new ImageData(l, m, g)
			}
		}
	}();
	try {
		new window.ImageData(new Uint8ClampedArray([0, 0, 0, 0]), 1, 1)
	} catch (b) {
		x.ImageData = function () {
			var d = arguments, c = d[0], a = d[1], d = d[2];
			if (!(c instanceof Uint8ClampedArray)) throw new TypeError("Failed to construct ImageData: parameter 1 is not of type Uint8ClampedArray");
			if (c.length !== 4 * a * d) throw Error("Failed to construct ImageData: The input data byte length is not a multiple of (4 * width * height)");
			a = document.createElement("CANVAS").getContext("2d").createImageData(a, d);
			c && a.data.set(c);
			return a
		}
	}
	;var Ec = function () {
		var b;
		return {
			pa: {}, createImageData: function (d) {
				var c = Ec[d];
				if (c) {
					var a = new DataView(b);
					d = a.getInt16(c, !0);
					var c = c + 2, e = a.getInt16(c, !0), c = c + 2, a = a.getUint32(c, !0);
					if (d && e) {
						var l = b, c = new Uint8ClampedArray(l, c + 4, a);
						a < d * e * 4 && (l = (new Zlib.Inflate(c)).decompress().buffer.slice(0, d * e * 4), c = new Uint8ClampedArray(l));
						for (a = 0; a < e; ++a) for (l = 0; l < d; ++l) {
							var m = 4 * (a * d + l), g = c[m + 0];
							c[m + 0] = c[m + 2];
							c[m + 2] = g
						}
						return new ImageData(c, d, e)
					}
				}
			}, lb: function (d) {
				b = d;
				d = 0;
				var c = new DataView(b);
				c.getUint32(d, !0);
				for (d += 4; d < b.byteLength;) {
					var a = c.getUint32(d, !0);
					d += 4;
					Ec[a] = d;
					c.getInt16(d, !0);
					d += 2;
					c.getInt16(d, !0);
					d += 2;
					a = c.getUint32(d, !0);
					d += 4;
					d += a
				}
				d = [111, 102, 104, 105, 103, 108, 106, 107, 101, 109, 118, 127, 136, 145, 154, 163, 114, 113, 137, 128, 119, 146, 155, 164, 141, 132, 123, 150, 159, 168, 112];
				for (var e in d) if (c = d[e], a = Ec[c]) {
					var l = new DataView(b), m = l.getInt16(a, !0), a = a + 2, g = l.getInt16(a, !0), a = a + 2,
						l = l.getUint32(a, !0), a = a + 4;
					m || g || Bc([c], b.slice(a, a + l))
				}
			}
		}
	}();
	var U = function () {
		function b(a, b, c, d) {
			return a == d ? b + c : b + c * (-Math.pow(2, -10 * a / d) + 1)
		}

		function d(d) {
			l += d;
			d = N.Kc;
			m && (d.clearRect(0, 0, d.canvas.width + 1, d.canvas.height + 1), m = !1);
			var f = c, k = 0, h = {}, g;
			for (g in a) {
				++k;
				var q = a[g];
				if (!(void 0 !== q.O && l < q.O)) if (q.va && (q.va(q, l), delete q.va), l < q.Z && q.S) {
					var r = ~~(q.Ha + (q.Ab - q.Ha) / (q.Z - q.O) * (l - q.O)),
						u = ~~(q.qb + (q.Bb - q.qb) / (q.Z - q.O) * (l - q.O));
					d.globalAlpha = q.alpha;
					d.drawImage(q.S.canvas, r, u);
					m = !0
				} else if (l < q.Z && q.Ya && q.Ya.c) {
					var u = q.Ya, r = ~~b(l - q.O, q.fc, u.da - q.fc, q.Z - q.O),
						u = ~~b(l - q.O, q.gc, u.ea - q.gc, q.Z - q.O), v = q.ca[0], F = q.ca[1], q = q.ca[3];
					h[v << 2 | q] || (h[v << 2 | q] = []);
					h[v << 2 | q].push([v, F, -1, q, r, u])
				} else q.sa && q.sa(q, l) || (q.Ya && q.Ya.c && Y.wc([q.ca]), delete q.sa, delete a[g])
			}
			for (var L in h) Y.wc(h[L]);
			!k && e.length && e.shift()();
			d.canvas.style.display = m ? "" : "none";
			return k + (c - f) + e.length
		}

		var c = 0, a = {}, e = [], l = 0, m = !1;
		return {
			ua: !1, qa: function (b) {
				if (U.ua) for (var e in b) {
					var k = b[e];
					void 0 !== k.ca && Y.wc([k.ca]);
					k.va && k.va(k, l);
					k.sa && k.sa(k, l)
				} else {
					for (e in b) {
						k = b[e];
						void 0 !== k.O && (k.O +=
							l);
						void 0 !== k.Z && (k.Z += l);
						if (void 0 !== k.ca) {
							var h = X[k.ca[0]][k.ca[3]][k.ca[1]], g;
							for (g in a) if (a[g].Ya == h) {
								a[g].fc = h.offsetX;
								a[g].gc = h.offsetY;
								a[g].O = k.O;
								a[g].Z = k.Z;
								k = void 0;
								break
							}
							if (!k) continue;
							k.Ya = h;
							k.fc = h.offsetX;
							k.gc = h.offsetY
						}
						a[++c] = k
					}
					Yb().Tb || (Yb().Tb = d)
				}
			}, od: function (b) {
				var c = b[0], d = b[1];
				b = b[3];
				for (var h in a) {
					var e = a[h];
					if (e.ca && c == e.ca[0] && d == e.ca[1] && b == e.ca[3]) return console.log("cancelOffsetAnimationForRemove", String.fromCharCode(c) + b + d), delete a[h], !0
				}
			}, $: function (a) {
				e.push(a);
				Yb().Tb ||
				(Yb().Tb = d)
			}, Mb: function (a, b, c) {
				a.Z = a.O + ~~(Math.sqrt((a.Ha - a.Ab) * (a.Ha - a.Ab) + (a.qb - a.Bb) * (a.qb - a.Bb)) / b) + (c ? c : 0);
				return a
			}, Wd: function () {
				var a = U.ua;
				a || (U.ua = !0);
				for (; d(1E4);) ;
				a || (U.ua = !1)
			}
		}
	}();
	var Ic = function () {
		function b(a, b) {
			a.canvas.width = b.width;
			a.canvas.height = b.height;
			a.canvas.style.width = pb(b.width);
			a.canvas.style.height = pb(b.height);
			a.clearRect(0, 0, b.width + 1, b.height + 1);
			a.putImageData(b, 0, 0)
		}

		function d(c, d) {
			var e = "img" + (c & 4278255615) + "col" + d, h = a[e];
			h && h.c && (c & 16711680) == (h.c.aa & 16711680) && d == h.w || (h || (h = a[e] = {
				S: mb.createElement("CANVAS").getContext("2d"),
				c: null,
				w: d
			}), h.c = Fc.Gb[c], h.w = d, b(h.S, Nc.La(h.c, d)));
			return h
		}

		function c(a, c, d, e, f) {
			var h = mb.createElement("CANVAS").getContext("2d");
			c = Fc.Gb[Oc(c, d, e, 0)];
			Qb(a, c.i.x + f, c.i.y, c.i.b, c.i.h);
			b(h, Nc.La(c, 0));
			return {S: h, i: c.i, R: f}
		}

		var a = {}, e = {}, l = [], m = [], g = [], f;
		return {
			kd: .6, Dd: function (a) {
				var b = [[110, 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 16, 15, 14, 13, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 35, 34, 33, 32, 31, 30]], [116, 2, [0, 13, 1, 12, 2, 11, 3, 10, 4, 9, 5, 8, 6, 7]], [121, 2, [16, 33, 15, 32, 14, 31, 13, 30, 12, 29, 11, 28, 10, 27, 9, 26]], [116, 3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]], [110, 3, [17, 35, 16, 34, 15, 33, 14, 32, 13, 31, 12, 30, 11, 29, 10, 28, 9, 27, 8, 26, 7, 25, 6, 24, 5, 23, 4, 22, 3, 21, 2, 20,
					1, 19, 0, 18]], [110, 1, [0, 18, 1, 19, 2, 20, 3, 21, 4, 22, 5, 23, 6, 24, 7, 25, 8, 26, 9, 27, 10, 28, 11, 29, 12, 30, 13, 31, 14, 32, 15, 33, 16, 34, 17, 35]], [116, 1, [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], [121, 3, [0, 17, 1, 18, 2, 19, 3, 20, 4, 21, 5, 22, 6, 23, 7, 24, 8, 25, 9, 26, 10, 27, 11, 28, 12, 29, 13, 30, 14, 31, 15, 32, 16, 33]], [121, 1, [16, 33, 15, 32, 14, 31, 13, 30, 12, 29, 11, 28, 10, 27, 9, 26, 8, 25, 7, 24, 6, 23, 5, 22, 4, 21, 3, 20, 2, 19, 1, 18, 0, 17]], [107, 1, [24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], [121, 2, [0, 17, 1, 18, 2, 19, 3, 20, 4, 21, 5, 22, 6, 23, 7, 24, 8, 25]], [107,
					2, [24, 23, 22, 21, 20, 19, 18, 12, 17, 13, 16, 14, 15, 6, 11, 7, 10, 8, 9, 0, 5, 1, 4, 2, 3]], [107, 3, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5]], [107, 0, [0, 5, 1, 4, 2, 3, 6, 11, 7, 10, 8, 9, 24, 23, 22, 21, 20, 19, 18, 12, 17, 13, 16, 14, 15]], [121, 0, [0, 17, 16, 33, 1, 18, 15, 32, 2, 19, 14, 31, 3, 20, 13, 30, 4, 21, 12, 29, 5, 22, 11, 28, 6, 23, 10, 27, 7, 24, 9, 26, 8, 25]], [110, 0, [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 35, 34, 33, 32, 31, 30, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 16, 15, 14, 13, 12]], [116, 0, [0, 13, 1, 12, 2, 11, 3, 10, 4, 9, 5, 8, 6, 7]]];
				f = b[15][2];
				for (var c = 0; c < b.length; ++c) for (var d =
					b[c], e = 0; e < d[2].length; ++e) l.push(a[d[0]][d[1]][d[2][e]]);
				if (436 != l.length) throw 0;
			}, Sc: function () {
				a = {};
				e = {};
				m = [];
				g = []
			}, xa: d, ia: function (a) {
				if (!Ic.pb) {
					var c = N.P;
					if (a) {
						a.x = Math.floor(a.x);
						a.y = Math.floor(a.y);
						a.b = Math.ceil(a.b);
						a.h = Math.ceil(a.h);
						var f = a, k = c.canvas.width, r = c.canvas.height;
						f.b && f.h && (f.x + f.b > 0 + k && (f.b = 0 + k - f.x), f.y + f.h > 0 + r && (f.h = 0 + r - f.y), 0 > f.x && (f.b += f.x - 0, f.x = 0), 0 > f.y && (f.h += f.y - 0, f.y = 0))
					} else a = Pb(0, 0, c.canvas.width + 1, c.canvas.height + 1);
					c.clearRect(a.x, a.y, a.b, a.h);
					for (var u in l) {
						var v =
							l[u], F = v.H;
						if (F && (r = v.fa, f = F.x + v.offsetX + r.x, k = F.y + v.offsetY + r.y, a.x + a.b > f && a.x < f + r.b && a.y + a.h > k && a.y < k + r.h)) {
							var L = Rb(a, f, k, r.b, r.h);
							if (!g[u] || g[u].H != F) {
								var F = g, oa = u, la = v.H.aa, C = "sdw" + (la & 4278452223), v = e[C];
								if (!v || !v.H || (la & 16711680) != (v.H.aa & 16711680)) {
									v || (v = e[C] = e[C] || {S: mb.createElement("CANVAS").getContext("2d"), H: null});
									v.H = Fc.Pd[la];
									var la = v.S, C = v.H, ga = Ic.kd;
									++Jc.yb;
									var I = new ArrayBuffer(C.b * C.h * 4),
										hb = (new Zlib.Inflate(new Uint8Array(C.Ka, C.gb, C.fb))).decompress(), tb = C.b + 3 & -4;
									if (hb.byteLength !=
										tb * C.h) throw"ss.byteLength";
									I = new Uint8ClampedArray(I);
									if ({}.je) for (var Xa = 0; Xa < C.h; ++Xa) for (var Ua = 0; Ua < C.b; ++Ua) ; else for (Xa = 0; Xa < C.h; ++Xa) for (Ua = 0; Ua < C.b; ++Ua) {
										var ma = hb[Xa * tb + Ua], na = 4 * (Xa * C.b + Ua);
										I[na + 0] = I[na + 1] = I[na + 2] = 0;
										ma = 255 * (64 == ma ? 1 : ma / 64) * ga;
										I[na + 3] = 255 > ma ? ma : 255
									}
									C = new ImageData(I, C.b, C.h);
									b(la, C)
								}
								F[oa] = v
							}
							c.drawImage(g[u].S.canvas, L.x - f + r.x, L.y - k + r.y, L.b, L.h, L.x, L.y, L.b, L.h);
							++Jc.$c
						}
					}
					for (u in l) v = l[u], v.c && (r = v.c.i, f = r.x + v.offsetX, k = r.y + v.offsetY, a.x + a.b > f && a.x < f + r.b && a.y + a.h > k && a.y < k +
					r.h && (L = Rb(a, f, k, r.b, r.h), m[u] && m[u].c == v.c && m[u].w == v.w || (m[u] = d(v.c.aa, v.w)), c.drawImage(m[u].S.canvas, L.x - f, L.y - k, L.b, L.h, L.x, L.y, L.b, L.h), ++Jc.Zc))
				}
			}, Xd: function (a) {
				for (var b in l) {
					var c = l[b];
					if (c.c) {
						var d = c.w, d = d & -5 | (a[c.l >> 2] ? 4 : 0);
						d != c.w && (c.w = d, d = Pb(), Pc(d, c), Ic.ia(d))
					}
				}
			}, td: function (a, b) {
				var d = X[116][0], e = Qc(d, 0, 14, b, 14);
				if (14 > e) for (var f in l) if (l[f] == d[e] && 0 == d[e].w) {
					e = d[e].c.i;
					f = m[f].S.canvas;
					a.canvas.width = e.b;
					a.canvas.height = e.h;
					a.drawImage(f, 0, 0);
					return
				}
				console.log("createCanvasNakiButton",
					b, "wpos=" + e);
				14 == e && (e = 7);
				f = Pb();
				e = c(f, 116, e, b, 0);
				a.canvas.width = f.b;
				a.canvas.height = f.h;
				a.drawImage(e.S.canvas, e.i.x + e.R - f.x, e.i.y - f.y)
			}, Ic: function (a, b) {
				var d = [], e = Pb();
				b.unshift(136);
				for (b.unshift(136); 7 > b.length;) b.push(136);
				for (var h = 0; h < b.length; ++h) {
					var g = 14 - h;
					d[g] = c(e, 110, g, b[h], 0)
				}
				e.b = 2 * Math.ceil(e.b / 2);
				a.canvas.width = e.b;
				a.canvas.height = e.h;
				a.canvas.style.width = pb(e.b * N.Ra / N.P.canvas.width);
				a.canvas.style.height = pb(e.h * N.zb / N.P.canvas.height);
				for (h = 0; h < f.length; ++h) (g = d[f[h]]) && a.drawImage(g.S.canvas,
					g.i.x + g.R - e.x, g.i.y - e.y)
			}, sd: function (a, b, d, e) {
				for (var h = [], g = Pb(), k = 17, l = 0, m = 0; m < d.length; ++m) {
					var p = d[m];
					p != b && (h[k] = c(g, 110, k, p, 0), --k)
				}
				m = Sa[107][0](k);
				l += .2 * m.R;
				h[k] = c(g, 110, k, b, l);
				--k;
				l += .4 * m.R;
				b = [];
				for (var q = 0; q < e.length; ++q) {
					var C = {m: e[q]};
					Ta(C);
					if (5 == C[2]) C.m ^= 24, Ta(C), C[2] = 5; else if (10 == C[2]) {
						d = C[1];
						b.push(d[0]);
						continue
					}
					var ga = -1;
					d = C[1];
					4 == d.length && 1 == C[3] ? ga = 3 : 1 < d.length && 0 != C[3] && (ga = 3 - C[3]);
					for (m = 0; m < d.length; ++m) p = d[m], 0 != C[3] || 4 != d.length || 0 != m && 3 != m || (p = 136), m == ga && (l -= Sa[110][0](k).R,
					5 == C[2] && (h[18 + k] = c(g, 110, 98 + k, C[4], l))), h[k] = c(g, 110, (m != ga ? 0 : 0 == m ? 120 : 40) + k, p, l), --k
				}
				b.length && (h[k] = c(g, 110, 0 + k, b[0], l), --k, e = h[k + 1], Qb(g, e.i.x + l, e.i.y - .3 * e.i.h, e.i.b, e.i.h));
				g.b = 2 * Math.ceil(g.b / 2);
				a.canvas.width = g.b;
				a.canvas.height = g.h;
				a.canvas.style.width = pb(g.b * N.Ra / N.P.canvas.width);
				a.canvas.style.height = pb(g.h * N.zb / N.P.canvas.height);
				for (m = 0; m < f.length; ++m) (e = h[f[m]]) && a.drawImage(e.S.canvas, e.i.x + ~~e.R - g.x, e.i.y - g.y);
				b.length && (e = h[k + 1], a.fillStyle = "#FFF", a.textAlign = "right", a.font = .25 * e.i.b +
					"px sans-serif", a.fillText("x" + b.length, e.i.x + ~~e.R - g.x + .8 * e.i.b, e.i.y - g.y - .05 * e.i.h))
			}, pb: !1
		}
	}();

	function Pc(b, d) {
		Qb(b, d.c.i.x + d.offsetX, d.c.i.y + d.offsetY, d.c.i.b, d.c.i.h)
	}

	function Rc(b, d) {
		Qb(b, d.H.x + d.offsetX + d.fa.x, d.H.y + d.offsetY + d.fa.y, d.fa.b, d.fa.h)
	}

	function Oc(b, d, c, a) {
		var e = R.Lc[c];
		116 == b && 40 <= d && 54 > d && 0 != a ? (b = 110, d = 17 - (d - 40)) : 121 == b && 0 <= d && 17 > d && 255 == c && (d += 17, e = 37);
		return b << 0 | (d & 255) << 8 | (e & 255) << 16 | (a & 255) << 24
	}

	function Qc(b, d, c, a, e) {
		if (d < c) for (; d < c; ++d) {
			if (b[d].l == a) return d
		} else for (--d; d >= c; --d) if (b[d].l == a) return d;
		return e
	}

	function Sc(b, d) {
		for (var c = 0; 14 > c; ++c) if (b[c].l >> 2 == d) return c;
		return 14
	}

	function Tc(b, d) {
		var c;
		for (c = 13; 0 <= c; --c) if (255 != b[c].l) return c;
		return d
	}

	var Uc = [{}, {}], X;

	function nc(b) {
		function d(a, b) {
			for (var c = 0; c < a.length; ++c) for (var d = 0; d < b; ++d) a[c][d] = {}
		}

		X[107] || d(X[107] = [[], [], [], []], 25);
		X[116] || d(X[116] = [[], [], [], []], 14);
		X[121] || d(X[121] = [[], [], [], []], 34);
		X[110] || d(X[110] = [[], [], [], []], 36);
		for (var c in X) for (var a = 0; 4 > a; ++a) for (var e = X[c][a], l = 0; l < e.length; ++l) e[l] = n(e[l], {
			l: 255,
			w: 0,
			da: 0,
			ea: 0,
			offsetX: 0,
			offsetY: 0,
			c: void 0,
			H: void 0,
			fa: void 0
		});
		b || N.P.clearRect(0, 0, N.P.canvas.width + 1, N.P.canvas.height + 1)
	}

	X = Uc[1];
	nc();
	X = Uc[0];
	nc();
	Ic.Dd(X);
	var Y = function () {
		function b(a, b, c) {
			return X[a][c][121 == a && 17 <= b && 34 > b ? b % 17 : 121 == a && 40 <= b && 74 > b && 0 != c ? b % 40 + (57 > b ? 17 : -17) : b % 40]
		}

		function d(a) {
			return 121 == (a >> 0 & 255) || 18 > (a >> 8 & 255)
		}

		function c(a, b) {
			if (!(a && a.H && b && b.H) || a.offsetX != b.offsetX || a.offsetY != b.offsetY) return !1;
			var c = a.H.aa, d = b.H.aa, e = c >> 8 & 255, k = d >> 8 & 255, h = c >> 0 & 255, l = c >> 24 & 255;
			if (121 == h) {
				if (16 == e) return !1
			} else if (107 == h) {
				if (0 != l && (40 <= e || 40 <= k)) return !1;
				e %= 40;
				k %= 40;
				if (5 == e || 11 == e) return !1
			} else if (110 == h) {
				if (0 != l && (40 <= e || 40 <= k) || 80 <= e || 80 <=
					k) return !1;
				e %= 40;
				k %= 40;
				if (17 == e) return !1
			}
			return k != e + 1 ? (console.log(Kc(c), Kc(d)), !1) : 121 != h || 1 != (c >> 16 & 255) && 1 != (d >> 16 & 255) ? !0 : !1
		}

		function a(a, l, m, g) {
			var e = b(l, m, g);
			e.H && Rc(a, e);
			e.H = void 0;
			e.c && (e.H = e.c.X[0]);
			var k = b(l, m - 1, g), h = b(l, m + 1, g);
			if (121 == l) {
				if (16 == m || 56 == m) h = void 0
			} else if (116 == l && (k && k.c && 110 == (k.c.aa >> 0 & 255) || e && e.c && 110 == (e.c.aa >> 0 & 255) || h && h.c && 110 == (h.c.aa >> 0 & 255))) var p = k,
				k = h, h = p;
			if (p = c(e, h)) e.H = e.c.X[1];
			e.H && (e.fa = e.c.X[2], e.fa || console.log("sdw null e11", e, 2), Rc(a, e));
			p ? h.fa = h.c.X[d(e.c.aa) ?
				3 : 4] : h && h.H && (h.fa = h.c.X[2], Rc(a, h));
			c(k, e) ? (h = k.c.X[1], k.H != h && (k.H = h, Rc(a, k)), e.fa = e.c.X[d(k.c.aa) ? 3 : 4]) : k && k.c && (h = k.c.X[0], k.H != h && (k.H = h, Rc(a, k)));
			110 == l && 98 <= m && 116 > m && (a = X[110][g][m % 40 - 18 - 0], m = X[110][g][m % 40 - 18 - 1], c(m, a) ? a.fa = a.c.X[d(m.c.aa) ? 6 : 7] : a.fa = a.c.X[5])
		}

		return {
			xa: function (a) {
				return Ic.xa(Oc.apply(null, a), b(a[0], a[1], a[3]).w)
			}, ga: function (c) {
				for (var d = Pb(), e = 0; e < c.length; ++e) {
					var g = c[e];
					if (g) {
						var f = g[0], k = g[1], h = g[3], p;
						a:{
							p = d;
							var q = f, r = k, g = g[2], u = h, v = b(q, r, u), F = Fc.Gb[Oc(q, r, g, u)];
							if (121 ==
								q && 0 <= r && 17 > r && 136 > g) v.l = 136, X[q][u][r + 17].l = g, X[q][u][r + 17].c = F, F = Fc.Gb[Lc(q, r, 37, u)]; else {
								if (v.c == F && v.l != g) {
									v.l = g;
									p = !0;
									break a
								}
								v.l = g;
								if (v.c == F) {
									p = !1;
									break a
								}
							}
							v.c && Pc(p, v);
							v.c = F;
							v.c && Pc(p, v);
							p = !0
						}
						p && a(d, f, k, h)
					} else Ic.ia(d), d = Pb()
				}
				Ic.ia(d);
				return d
			}, wc: function (b) {
				for (var c = Pb(), d = 0; d < b.length; ++d) {
					var e = b[d], f = e[0], k = e[1], h = e[3], p = X[f][h][k], q = e[4] || p.da, e = e[5] || p.ea;
					if (p.offsetX != q || p.offsetY != e) Pc(c, p), Rc(c, p), p.offsetX = q, p.offsetY = e, Pc(c, p), Rc(c, p), p.offsetX == p.da && p.offsetY == p.ea && a(c, f, k,
						h)
				}
				Ic.ia(c)
			}, ce: function (a) {
				for (var b in X) for (var c = 0; 4 > c; ++c) {
					for (var d = Pb(), e = X[b][c], k = a[b][c], h = 0; h < e.length; ++h) {
						var p = e[h], q = k[h];
						p.l = q.l;
						if (p.c != q.c || p.H != q.H || p.w != q.w || p.offsetX != q.offsetX || p.offsetY != q.offsetY || p.fa != q.fa) p.c && Pc(d, p), q.c && Pc(d, q), p.H && Rc(d, p), q.H && Rc(d, q), n(p, q)
					}
					Ic.ia(d)
				}
			}, na: function (a, c, d, g) {
				var e = a[0], k = a[1], h = a[3];
				(a = b(e, k, h)) || console.log(String.fromCharCode(e) + h + "-" + k);
				e = a.w;
				a.w = e & ~c | d;
				g && a.c && e != a.w && Pc(g, a)
			}, vc: function (a, c, d, g) {
				var e = a[0], k = a[1];
				a = a[3];
				var h =
					b(e, k, a);
				h || console.log(String.fromCharCode(e) + a + "-" + k);
				if (h.offsetX != c || h.offsetY != d) g && h.c ? (Pc(g, h), Rc(g, h), h.offsetX = c, h.offsetY = d, Pc(g, h), Rc(g, h)) : (h.offsetX = c, h.offsetY = d)
			}
		}
	}();
	var Hc = {
		Nc: function () {
			return 3 == T.a || 2 == T.a ? !(W.o & 1) : 1 == T.a ? T.u & 256 : !1
		}, $a: function (b) {
			for (var d = X[107][b], c = 0, a = 0, e = 0; 25 > e; ++e) {
				if (6 == e || 12 == e) c = a = 0;
				var l = d[e];
				l.da = l.offsetX = c;
				l.ea = l.offsetY = a;
				T.ma[b] == e && (l = Sa[107][b](e), c += ~~l.R, a += ~~l.ka)
			}
		}
	};
	var Vc = function () {
		var b = [];
		return {
			Ca: function (d) {
				b[d] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}, Cc: function (d, c) {
				++b[d][c >> 2]
			}, Bc: function (d, c) {
				0 < b[d][c >> 2] && --b[d][c >> 2]
			}, Qb: function (d) {
				return b[d]
			}
		}
	}(), Wc = function () {
		var b, d, c, a;
		return {
			Ca: function () {
				b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				d = [[], [], [], []];
				c = ["", "", "", ""];
				a = ["", "", "", ""];
				for (var e = 0; 4 > e; ++e) a[e] = c[e] = ""
			}, Va: function (a) {
				return 1 == T.a || W.o & 2 ? !1 : b[a >> 2]
			}, uc: function (e) {
				var l =
					Vc.Qb(e), m = "" + l;
				if (a[e] != m && (a[e] = m, d[e] = Sb.Xb(l), l = "" + d[e], c[e] != l)) {
					c[e] = l;
					for (l = 0; l < b.length; ++l) b[l] = 0;
					for (e = 0; 4 > e; ++e) if (d[e]) for (l = 0; l < d[e].length; ++l) b[d[e][l]] = 1;
					1 == T.a || W.o & 2 || Ic.Xd(b)
				}
			}, hd: function (a) {
				return c[a]
			}
		}
	}();
	var Gc = {
		$a: function (b) {
			for (var d = X[110][b], c = 0, a = 0, e = 0; 17 > e; ++e) {
				var l = d[e + 0], m = d[e + 18];
				l.da = l.offsetX = m.da = m.offsetX = c;
				l.ea = l.offsetY = m.ea = m.offsetY = a;
				T.mb[b][e] && (l = Sa[110][b](e), c += ~~l.R, a += ~~l.ka)
			}
		}
	}, qc = function () {
		for (var b = [], d = {
			left: "50%",
			top: "50%"
		}, c = 0; 4 > c; ++c) b.push(z("DIV", N.Kd, "nopp", {}, n({
			display: "none",
			fontSize: "18px",
			textAlign: "right",
			transformOrigin: "0 0"
		}, d)));
		for (var a = [675, 472, -515, -620], e = [373, -475, -440, 442], d = {color: "#FFF"}, c = 0; 4 > c; ++c) b[c].style.transform = "translate(" + a[c] + "px," +
			e[c] + "px) rotate(" + 270 * c + "deg) translate(-100%,-100%) ", n(b[c].style, n(d, {textShadow: "#000 -0.08em -0.08em 0,#000 -0.08em 0.08em 0,#000 0.08em -0.08em 0,#000 0.08em 0.08em 0"}));
		var l = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10, 11, 12, 13, 14, 15, 16, 17, 9, 19, 20, 21, 22, 23, 24, 25, 26, 18, 28, 29, 30, 27, 32, 33, 31];
		return {
			$b: function () {
				for (var a = 0; 4 > a; ++a) b[a].style.display = "none"
			}, rb: function (a) {
				var c = b[a], d = T.ya[a].length;
				if (d) {
					for (var e = d, h = [], m = 0; m < T.ya[a].length; ++m) {
						var q = T.ya[a][m];
						16 == q && (e += 1);
						h[q] = 1
					}
					h[0] && h[1] && h[2] && h[3] && (e +=
						4);
					h[16] && h[17] && h[18] && h[19] && (e += 4);
					h[32] && h[33] && h[34] && h[35] && (e += 4);
					h[120] && h[121] && h[122] && h[123] && (e += 4);
					for (m = 5; m < T.J.length; ++m) a = l[T.J[m] >> 2], 0 != (T.u & 2048) ? 1 == a ? a = 4 : 5 == a && (a = 8) : T.u & 16 && 1 == a && (a = 8), a *= 4, e += ~~h[a + 0] + ~~h[a + 1] + ~~h[a + 2] + ~~h[a + 3];
					h = "";
					0 != (T.u & 2048) && (h += e + "<span style='font-size:50%;'>+</span><br>");
					c.style.display = "";
					c.innerHTML = "<div class=tbc style='vertical-align:bottom;padding:0 0.1em;'>" + (h + ("<span style='font-size:60%;'>x</span>" + d + "<br>")) + "</div>"
				} else c.style.display =
					"none"
			}
		}
	}(), rc = function () {
		function b(b, c, d) {
			a[b] = {tag: "N", type: c >> 2 == d >> 2 ? 1 : 3, hai0: c, hai1: d}
		}

		function d() {
			rc.L();
			N.Xa = z("DIV", N.Wa, "nobr", {}, {
				position: "absolute",
				bottom: "17%",
				paddingRight: 5 + 3 * (14 - Tc(X[116][0], 0)) + "%",
				width: "100%",
				textAlign: "right"
			});
			for (var b = Object.keys(a).sort(function (a, b) {
				return b - a
			}), c = 0; c < b.length; ++c) {
				var d = b[c], g = "", f = 0, k = void 0;
				switch (a[d].tag) {
					case "REACH":
						f = 6;
						g = P(153);
						g = "<span>" + g + "</span>";
						break;
					case "N":
						switch (a[d].type) {
							case void 0:
								f = 7;
								g = "&times;";
								g = "<span>" + g + "</span>";
								break;
							case 7:
								f = 2;
								g = P(151);
								break;
							case 6:
								f = 2;
								g = P(152);
								break;
							case 9:
								f = 7;
								g = P(154);
								break;
							case 2:
								f = 5;
								g = P(184);
								break;
							case 1:
								f = 4;
								g = P(182);
								k = [a[d].hai0, a[d].hai1];
								g = (6 > b.length ? "<span>" + g + "</span>" : "") + "==";
								break;
							case 5:
								f = 5;
								g = P(184);
								k = [a[d].hai];
								g = (6 > b.length ? "<span>" + g + "</span>" : "") + "=";
								break;
							case 4:
								f = 5;
								g = P(184);
								k = [a[d].hai];
								g = (6 > b.length ? "<span>" + g + "</span>" : "") + "=";
								break;
							case 10:
								f = 0;
								g = P(185);
								k = [a[d].hai || 120];
								g = (6 > b.length ? "<span>" + g + "</span>" : "") + "=";
								break;
							case 3:
								f = 1, g = P(183), k = [a[d].hai0, a[d].hai1], g =
									(6 > b.length ? "<span>" + g + "</span>" : "") + "=="
						}
				}
				(g = g.replace(/=/g, "<canvas></canvas>")) || (g = JSON.stringify(a[d]));
				g = z("BUTTON", N.Xa, "s7 btn" + f + "", {innerHTML: g, name: "c22-" + d}, {
					margin: "0 0.1em",
					minWidth: "4em",
					verticalAlign: "bottom"
				});
				if (7 == a[d].type || 6 == a[d].type) g.style.marginLeft = "1em";
				d = g.getElementsByTagName("CANVAS");
				if (k) for (g = 0; g < k.length; ++g) f = d[g].getContext("2d"), Ic.td(f, k[g]), n(f.canvas.style, {
					width: f.canvas.width / f.canvas.height * 2.2 + "em",
					height: "2.2em"
				})
			}
		}

		for (var c = 0; 8 > c; ++c) Ub(".btn" + c + "{color:#FFF;min-height:3em;border:solid 0.02em #444;border-radius:0;border-image:linear-gradient(-10deg,#000,rgba(" +
			(c & 2 ? 127 : 63) + "," + (c & 4 ? 127 : 63) + "," + (c & 1 ? 127 : 63) + ",1.0)) 1;background:linear-gradient(0,rgba(" + (c & 2 ? 127 : 0) + "," + (c & 4 ? 127 : 0) + "," + (c & 1 ? 127 : 0) + ",0.5) 0%,rgba(" + (c & 2 ? 127 : 0) + "," + (c & 4 ? 127 : 0) + "," + (c & 1 ? 127 : 0) + ",1) 15%,rgba(" + (c & 2 ? 127 : 0) + "," + (c & 4 ? 127 : 0) + "," + (c & 1 ? 127 : 0) + ",0.6) 15%,rgba(" + (c & 2 ? 63 : 0) + "," + (c & 4 ? 63 : 0) + "," + (c & 1 ? 63 : 0) + ",0.6) 100%);}.btn" + c + ">CANVAS{vertical-align:middle;opacity:0.9;}.btn" + c + ":hover>CANVAS{opacity:1.0;}.btn" + c + ">SPAN{vertical-align:middle;margin:0 0.1em;}.btn" + c + ":hover{border-image:linear-gradient(-10deg,#000,rgba(" +
			(c & 2 ? 255 : 127) + "," + (c & 4 ? 255 : 127) + "," + (c & 1 ? 255 : 127) + ",1.0)) 1;background:rgba(" + (c & 2 ? 255 : 63) + "," + (c & 4 ? 255 : 63) + "," + (c & 1 ? 255 : 63) + ",0.4);}");
		var a = {};
		gb(J, ["c22", function (b, c) {
			rc.L();
			jc.L();
			sc.ta();
			tc.oa();
			V.K(a[c])
		}]);
		return {
			nd: function (b, c) {
				if (1 == T.a || 4 == T.a) {
					a = {};
					b & 32 && (a[2] = {tag: "REACH"});
					b & 16 && (a[0] = {tag: "N", type: 7});
					b & 64 && (a[3] = {tag: "N", type: 9});
					0 < R.bd(0) && 4 > R.Za - T.ya[0].length - T.ya[1].length - T.ya[2].length - T.ya[3].length && (b |= 2);
					var e = [];
					if (b & 2) {
						var g = X[110][0], f;
						for (f in T.mb[0]) {
							for (var k = g[f].l >>
								2, h = 2; 18 > h && (g[h - 2].l >> 2 != k || g[h - 1].l >> 2 != k || g[h - 0].l >> 2 != k); ++h) ;
							if (18 != h) for (var h = X[116][0], l = 0; 14 > l; ++l) if (255 != h[l].l && h[l].l >> 2 == k) {
								e.push({tag: "N", type: 5, hai: h[l].l});
								break
							}
						}
					}
					if (b & 2) if (f = Vc.Qb(0), -1 != T.ma[0]) g = Wc.hd(0), k = c >> 2, 4 == f[k] && (f[k] -= 4, "" + Sb.Xb(f) == g && e.push({
						tag: "N",
						type: 4,
						hai: 4 * k
					}), f[k] += 4); else for (k = 0; 34 > k; ++k) 4 > f[k] || e.push({tag: "N", type: 4, hai: 4 * k});
					e.length || (b &= -3);
					e.length && (a[10] = e[0], e.shift());
					e.length && (a[11] = e[0], e.shift());
					e.length && (a[12] = e[0], e.shift());
					if (b & 128) if (0 !=
						(T.u & 2048) && -1 == T.ma[0]) {
						e = [];
						for (f = 0; 14 > f; ++f) if (g = X[116][0][f].l, k = g >> 2, 0 == k || 4 == k || 8 == k || 30 == k) e[g] = {
							tag: "N",
							type: 10,
							hai: g
						};
						k = [5, 6, 7, 8, 9];
						if (f = e[120] || e[121] || e[122] || e[123]) a[k[0]] = f, k.shift();
						if (f = e[0] || e[1] || e[2] || e[3]) a[k[0]] = f, k.shift();
						if (f = e[16]) a[k[0]] = f, k.shift();
						if (f = e[17] || e[18] || e[19]) a[k[0]] = f, k.shift();
						if (f = e[32] || e[33] || e[34] || e[35]) a[k[0]] = f, k.shift()
					} else a[5] = {tag: "N", type: 10}, -1 != T.ma[0] && (a[5].hai = c);
					b && (d(), ~W.o & 64 && E(106, 0, 0));
					return b
				}
			}, ld: function (c, l) {
				if (1 == T.a || 4 == T.a) {
					for (var e =
						~~(l / 4 / 9), g = ~~(l / 4) % 9, f = {}, k = 0; 14 > k; ++k) {
						var h = X[116][0][k].l;
						if (255 != h) {
							var p = ~~(h / 4);
							if (3 > e && 2 <= g && p == 9 * e + g - 2 || 3 > e && 1 <= g && p == 9 * e + g - 1 || p == 9 * e + g || 3 > e && 7 >= g && p == 9 * e + g + 1 || 3 > e && 6 >= g && p == 9 * e + g + 2) p |= R.bc(h) << 8, f[p] ? f[p].push(h) : f[p] = [h]
						}
					}
					k = 0;
					a = {};
					c & 8 && (a[1] = {tag: "N", type: 6});
					h = f[0 | 9 * e + g] || [];
					p = f[256 | 9 * e + g] || [];
					c & 2 && 3 == h.length + p.length && (a[13] = {tag: "N", type: 2}, ++k);
					c & 1 && (1 == p.length && 2 == h.length ? (b(14, h[0], h[1]), b(15, p[0], h[0]), k += 2) : 2 <= h.length ? (b(15, h[0], h[1]), ++k) : 1 == p.length && 1 == h.length && (b(15, p[0],
						h[0]), ++k));
					if (c & 4) for (var q = 0; 3 > q; ++q) {
						var r = (q & 1) << 8, u = (q & 2) << 7;
						(h = f[r | 9 * e + g - 2]) && (p = f[u | 9 * e + g - 1]) && (b(q ? 20 : 21, h[0], p[0]), ++k);
						(h = f[r | 9 * e + g - 1]) && (p = f[u | 9 * e + g + 1]) && (b(q ? 18 : 19, h[0], p[0]), ++k);
						(h = f[r | 9 * e + g + 1]) && (p = f[u | 9 * e + g + 2]) && (b(q ? 16 : 17, h[0], p[0]), ++k)
					}
					c && (a[4] = {tag: "N"}, d(), jc.v(0, Eb("BUTTON[name=c22-4]")), ~W.o & 64 && E(106, 0, 0))
				}
			}, md: function (b) {
				if (1 == T.a || 4 == T.a) a = {}, b & 8 && (a[1] = {
					tag: "N",
					type: 6
				}), b && (a[4] = {tag: "N"}, d(), jc.v(0, Eb("BUTTON[name=c22-4]")), ~W.o & 64 && E(106, 0, 0))
			}, L: function () {
				N.Xa && (N.Xa.parentNode.removeChild(N.Xa),
					N.Xa = null)
			}
		}
	}();
	var pc = function () {
		function b(b, d) {
			d = d || 1;
			c(d);
			1 == d ? (f.style.display = "none", console.log("START ECHO"), V.K("<ECHO />")) : 3 == d && (a(), f.style.display = "")
		}

		function d() {
			b(0, 2);
			p && (ac(p), p = void 0);
			p = $b(function () {
				b(0, 3);
				p = void 0
			}, 2E3)
		}

		function c(a) {
			if (2 != a) {
				var b = ["", "", "", ""];
				if (T.J && 5 <= T.J.length) for (var c = 0; 4 > c; ++c) T.I[c] && (0 != c && 1 == a ? T.u & 512 ? (b[0] = T.Ia[0] + " " + eb(T.Vb[0]), b[c] = eb(T.Ia[c] - T.Ia[0]) + " " + eb(T.Vb[c])) : b[c] = eb(T.Ia[c] - T.Ia[0]) : b[c] = Vb(0 == T.Pc[c] ? "ts0" : "gray", T.dc[c]) + " <span class=ts0>" + T.Ia[c] +
					"</span><span style='font-size:75%;'>" + H("00") + "</span>");
				for (var d = [0, 269.3, 540, 810.7], e = [-8, 126.8, 8, -125.8], h = [4, -65, -154, -81], f = [0, -.5, 0, .5], l = [0, -1.5, 0, 1.5], c = 0; 4 > c; ++c) k[c].innerHTML = b[c], k[c].style.transform = "translate(-50%,-50%) translate(" + e[c] + "px," + h[c] + "px) rotate(" + d[c] + "deg) skew(" + f[c] + "deg," + l[c] + "deg)", k[c].style.color = T.connected & 1 << c ? "" : "#F00";
				T.J && 5 <= T.J.length ? 1 == a ? g.innerHTML = "<div style='font-family:sans-serif;font-size:40%;'>" + ca(T.u) + "</div><div class=gray style='font-family:sans-serif;font-size:30%;text-align:center;'>ECHO:<span id=c30 style='display:none;'>" +
					Date.now() + "</span></div>" : (a = T.J[0], g.innerHTML = "<span style='text-shadow:" + (~~(a / 4) & 1 ? "#F00" : "#00F") + " 0.025em 0.025em 0,#000 -0.025em 0.025em 0,#000 0.025em -0.025em 0, #000 -0.025em -0.025em 0;'>" + "東南西北".substr(~~(a / 4), 1) + "</span><span style='text-shadow:" + (a % 4 == (T.u & 16 ? 2 : 3) ? "#F00" : "#000") + " 0.025em 0.025em 0,#000 -0.025em 0.025em 0,#000 0.025em -0.025em 0, #000 -0.025em -0.025em 0;'>" + (a % 4 + 1) + "</span>" + H("局")) : g.innerHTML = ""
			}
		}

		function a() {
			if (T.J && 5 <= T.J.length) {
				var a =
					R.bd(0);
				f.innerHTML = "<span" + (a < (T.u & 16 ? 6 : 8) ? " class=ts1" : "") + ">" + a + "</span><span style='font-size:80%;color:#AAA;display:inline-block;transform:translate(3px,0);'></span>" + (T.J[1] || 0) + "<span style='font-size:80%;color:#AAA;display:inline-block;transform:translate(3px,0);'></span>" + (T.J[2] || 0)
			} else f.innerHTML = ""
		}

		for (var e = 22.74 * 10, l = z("DIV", N.ob, "", {}, {
			pointerEvents: "auto",
			position: "absolute",
			background: "#222",
			border: "2px solid #000",
			borderRadius: "4%",
			left: "374.05px",
			top: 486.9 - e / 2 + "px",
			width: "252.5px",
			height: e + "px"
		}), m = z("DIV", N.ob, "nopp", {}, {}), g = z("DIV", N.ic, "nopp", {}, {
			left: "50%",
			top: "50%",
			transform: "translate(-50%,-50%) translate(0,-83px)",
			fontSize: "58px",
			fontFamily: "cwTeX-Q-Kai-T,icons2,serif"
		}), f = z("DIV", N.ic, "nopp ts0", {}, {
			left: "50%",
			top: "50%",
			transform: "translate(-50%,-50%) translate(0,-43px)",
			fontSize: "25px",
			fontFamily: "cwTeX-Q-Kai-T,icons2,serif"
		}), k = [], h = 0; 4 > h; ++h) k.push(z("DIV", N.ic, "nopp", {}, {
			left: "50%",
			top: "50%",
			fontSize: "45px",
			fontFamily: "cwTeX-Q-Kai-T,icons2,serif"
		}));
		var p = void 0;
		yb(l, {touchstart: b, touchend: d, mouseover: b, mouseout: d});
		return {
			Zd: function () {
				l.style.opacity = oc.nb ? "" : .75
			}, sb: c, Kb: function (a) {
				switch (a) {
					case 0:
						n(m.style, {
							display: "",
							left: "374.05px",
							top: 486.9 + e / 2 - 11 + "px",
							width: "252.5px",
							height: "10px"
						});
						break;
					case 1:
						n(m.style, {display: "", left: "615.55px", top: 486.9 - e / 2 + "px", width: "10px", height: e + "px"});
						break;
					case 2:
						n(m.style, {
							display: "",
							left: "374.05px",
							top: 486.9 - e / 2 + 1 + "px",
							width: "252.5px",
							height: "10px"
						});
						break;
					case 3:
						n(m.style, {
							display: "", left: "375.05px",
							top: 486.9 - e / 2 + "px", width: "10px", height: e + "px"
						});
						break;
					default:
						m.style.display = "none"
				}
				m.style.background = "linear-gradient(" + 90 * (a + 1) + "deg, rgba(0,127,0,0) 0%,rgba(0,127,0,1) 10%, rgba(0,127,0,1) 90%, rgba(0,127,0,0) 100%)"
			}, Lb: a
		}
	}();

	function Xc() {
		var b = M.backgroundImage;
		if (!b) return !1;
		b = b.replace(/\?.*$/, "");
		return b.match(/^https?:\/\/(?:[\w-]+\.)+[\w-]+(?:\/[\w-]+)+\.(?:jpg|png|gif)$/)
	}

	var oc = function () {
		function b() {
			function b(a) {
				return " a10 10 0 0 0 " + 10 * (a & 1 ? -1 : 1) + " " + 10 * (a & 2 ? -1 : 1)
			}

			function e(a, b) {
				return "<rect x=" + a + " y=" + b + " width=155.1 height=155.1 rx=10 ry=10 />"
			}

			if (oc.nb) for (var h = {color: "rgba(255,255,255,0.3)"}, f = 0; 4 > f; ++f) n(d[f].style, n(h, {textShadow: "none"})), n(c[f].style, n(h, {textShadow: "none"})), n(a[f].style, n(h, {textShadow: "none"})); else for (h = {color: "#AAA"}, f = 0; 4 > f; ++f) {
				var g = "0.08em", k = "#000";
				n(d[f].style, n(h, {
					textShadow: k + " -" + g + " -" + g + " 0," + k + " -" + g + " " + g + " 0," +
						k + " " + g + " -" + g + " 0," + k + " " + g + " " + g + " 0"
				}));
				g = "0.08em";
				k = "#000";
				n(c[f].style, n(h, {textShadow: k + " -" + g + " 0em 0," + k + " " + g + " 0em 0," + k + " 0em -" + g + " 0, " + k + " 0em " + g + " 0"}));
				g = "0.02em";
				k = "#000";
				n(a[f].style, n(h, {textShadow: k + " -" + g + " 0em 0," + k + " " + g + " 0em 0," + k + " 0em -" + g + " 0, " + k + " 0em " + g + " 0"}))
			}
			h = "<svg width=105% height=105% viewBox='-25 -25 1050 1050' style='transform:translate(-2.5%,-2.5%);'>" + ("<g stroke-width=0 fill=" + (oc.nb ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.15)") + "><path d='M375.5 627v159.5" + b(0) +
				"h401" + b(2) + "v-135.1" + b(3) + "h-158.4v" + -(56.5 - 42.1) + "h159.5" + b(2) + "v-401" + b(3) + "h-135.1" + b(1) + "v158.4h" + -(56.5 - 42.1) + "v-159.5" + b(3) + "h-401" + b(1) + "v135.1" + b(0) + "h158.4v" + (56.5 - 42.1) + "h-159.5" + b(1) + "v401" + b(0) + "h135.1" + b(2) + "v-158.4z' /></g>");
			N.Rc.innerHTML = h + ("<g stroke-width=0 fill=rgba(0,0,0,0.10)><rect x=375.5 y=" + (627 - 42.1 * 6) + " width=" + 42.1 * 6 + " height=" + 42.1 * 6 + " />" + e(375.5 + 42.1 * 9 - 113, 641.4) + e(642.5, 206) + e(207.1, 627 - 42.1 * 6 - 169.5) + e(206, 627 + 42.1 * 3 - 113) + "</g>") + "</svg>"
		}

		for (var d = [], c = [], a = [], e =
			[215, 257, -215, -257], l = [257, -215, -257, 215], m = [220, 217, -220, -217], g = [217, -220, -217, 220], f = [220, 178, -220, -178], k = [178, -220, -178, 220], h = {
			left: "50%",
			top: "50%"
		}, p = 0; 4 > p; ++p) c.push(z("DIV", N.ob, "nopp", {}, n({
			transform: "translate(-50%,-50%) translate(" + f[p] + "px," + k[p] + "px) rotate(" + 270 * p + "deg)",
			fontSize: "20px",
			fontWeight: "normal"
		}, h))), a.push(z("DIV", N.ob, "nopp", {}, n({
				transform: "translate(-50%,-50%) translate(" + m[p] + "px," + g[p] + "px) rotate(" + 270 * p + "deg)",
				fontSize: "65px",
				fontWeight: "normal",
				fontFamily: "cwTeX-Q-Kai-T,icons2,serif"
			},
			h))), d.push(z("DIV", N.ob, "nopp", {}, n({
			transform: "translate(-50%,-50%) translate(" + e[p] + "px," + l[p] + "px) rotate(" + 270 * p + "deg)",
			fontSize: "17px",
			fontWeight: "bold"
		}, h)));
		return {
			xc: function () {
				N.Rc.style.display = W.o & 16 ? "none" : "";
				for (var b = 0; 4 > b; ++b) d[b].innerText = T.I[b], a[b].innerText = da[T.Sa[b]], c[b].innerText = 1800 <= T.Na[b] ? "R" + T.Na[b] : "", d[b].style.display = a[b].style.display = c[b].style.display = ~W.o & 16 && T.I[b] ? "" : "none"
			}, nb: !0, Zb: function (a) {
				void 0 !== a && Xb("backgroundImage", a, "000100100");
				return M.backgroundImage &&
				M.backgroundImage.match(/^([0-9]{9})$/) ? M.backgroundImage : "000100100"
			}, Yb: function (a) {
				void 0 !== a && Xb("backgroundMask", a, "080000");
				return M.backgroundMask && M.backgroundMask.match(/^([0-9]{6})$/) ? M.backgroundMask : "080000"
			}, Sb: function () {
				var a = "https://cdn.tenhou.net/4/res/img/1/_bg9_1024x0768_" + oc.Yb() + ".png",
					c = "https://cdn.tenhou.net/4/res/img/3/_bg0_1024x0768_" + oc.Zb() + ".jpg";
				Xc() ? (c = M.backgroundImage, oc.nb = !1) : oc.nb = !0;
				N.Eb.style.background = "url('" + a + "') center center / cover no-repeat,url('" + c +
					"') center center / cover no-repeat";
				b();
				pc.Zd()
			}
		}
	}();
	var Yc = {
		Wb: !1, Nd: function (b) {
			var d = [[], [], [], []];
			b.hai1 && (d[1] = t(b.hai1));
			b.hai2 && (d[2] = t(b.hai2));
			b.hai3 && (d[3] = t(b.hai3));
			for (b = 0; 4 > b; ++b) if (T.I[b]) if (d[b].length) (3 == T.a || 2 == T.a) && ~W.o & 4 && (d[b] = []); else for (var c = 0; 13 > c; ++c) 255 != X[116][b][c].l && d[b].push(136);
			for (c = 0; 14 > c; ++c) for (b = 1; 4 > b; ++b) !d[b] || d[b].length <= c || Y.xa([116, 40 + c, d[b][c], b]);
			U.$(function () {
				for (var a = Cc(), b = [], c = 0; 14 > c; ++c) for (var m = 1; 4 > m; ++m) !d[m] || d[m].length <= c || (b.push({
					O: 25 * c, wa: [116, 40 + c, d[m][c], m], sa: function (a) {
						136 == a.wa[2] &&
						Y.na(a.wa, 4, 0);
						Y.ga([a.wa])
					}
				}), a(104, m, 25 * c));
				U.qa(b)
			})
		}, xb: function (b, d, c, a) {
			if (!Yc.Wb) {
				for (var e = X[116][b], l = [], m = 0; 14 > m; ++m) {
					var g = e[m];
					l.push({Ja: m, l: g.l, w: g.w, offsetX: g.offsetX, offsetY: g.offsetY})
				}
				if (Fb("c40", !0)) {
					if (void 0 !== c || void 0 !== a) return;
					l.sort(function (a, b) {
						return a.l - b.l
					})
				} else l.sort(function (a, b) {
					return a.Ja + (255 == a.l ? 14 : 0) - (b.Ja + (255 == b.l ? 14 : 0))
				}), void 0 !== c && void 0 !== a && 255 != l[c].l && 255 != l[a].l && (m = l[c], l[c] = l[a], l[a] = m);
				Yc.Yc(b);
				a = [];
				g = [];
				for (m = 0; 14 > m; ++m) {
					var f = l[m].l, k = [116,
						((3 == T.a || 2 == T.a) && ~W.o & 4 && 0 != b ? 40 : 0) + m, f, b];
					if (255 != f) {
						var h = e[l[m].Ja].c.i.x + l[m].offsetX, f = e[l[m].Ja].c.i.y + l[m].offsetY, p = Y.xa(k, l[m].w),
							h = h - p.c.i.x, f = f - p.c.i.y;
						if (m == l[m].Ja && e[m].da == h && e[m].ea == f) continue;
						Y.na(k, -1, l[m].w);
						Y.vc(k, h, f);
						a.push({ca: [116, m, -1, b], O: d, Z: d + (void 0 !== c ? 100 : 500), va: tc.oa})
					}
					g.push(k)
				}
				if (d) {
					Ic.pb = !0;
					var q = Y.ga(g);
					Ic.pb = !1;
					a.push({
						O: d, va: function () {
							Ic.ia(q)
						}
					})
				} else Y.ga(g);
				U.qa(a)
			}
		}, Yc: function (b, d) {
			var c = X[116][b];
			if (void 0 === d) for (var a = d = 0; 14 > a; ++a) 255 != c[a].l && ++d;
			for (var e = ~~(d / 3), l = Sa[116][b](0, 14), a = 0; 14 > a; ++a) c[a].offsetX = c[a].da = -(4 - e) * l.R * .04, c[a].offsetY = c[a].ea = -(4 - e) * l.ka * .04
		}
	}, sc = function () {
		function b(b, c) {
			for (var a = 0; 14 > a; ++a) X[116][0][a].l >> 2 == c && (b[a] = b[a] & -81 | 16)
		}

		return {
			kb: null, ta: function (d) {
				var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], a = X[116][0];
				if (d) switch (d.tag) {
					case "REACH":
						d = Sb.yd(Vc.Qb(0));
						for (var e = 0; 14 > e; ++e) {
							var l = d[~~(a[e].l >> 2)];
							c[e] |= l && l.length ? 16 : 64
						}
						break;
					case "T":
						if (-1 == T.ma[0]) for (e = 0; 14 > e; ++e) c[e] |= 255 == a[e].l ? 64 : 16; else for (e = Tc(a,
							0), c[e] |= 16, --e; 0 <= e; --e) c[e] |= 64;
						break;
					case "E":
					case "F":
					case "G":
					case "e":
					case "f":
					case "g":
						sc.kb = d;
						for (e = 0; 14 > e; ++e) c[e] = 64;
						for (var l = d[1] >> 2, m = 255, e = 0; 14 > e && !(a[e].w & 32); ++e) ;
						14 > e && (m = a[e].l, c[e] = 48);
						e = ~~d.t;
						if (255 == m) {
							if (e & 1 && b(c, l), e & 4 && ("G" == d.tag || "g" == d.tag) && 27 > l) {
								e = [1, 1, 1, 1];
								switch (l % 9) {
									case 0:
										e[0] = e[1] = 0;
										break;
									case 1:
										e[0] = 0;
										break;
									case 7:
										e[3] = 0;
										break;
									case 8:
										e[2] = e[3] = 0
								}
								e[0] && (e[0] = 14 > Sc(a, l - 2));
								e[1] && (e[1] = 14 > Sc(a, l - 1));
								e[2] && (e[2] = 14 > Sc(a, l + 1));
								e[3] && (e[3] = 14 > Sc(a, l + 2));
								e[0] && e[1] && (b(c,
									l - 2), b(c, l - 1));
								e[1] && e[2] && (b(c, l - 1), b(c, l + 1));
								e[2] && e[3] && (b(c, l + 1), b(c, l + 2))
							}
						} else a = m >> 2, e & 1 && a == l && b(c, l), e & 4 && ("G" == d.tag || "g" == d.tag) && 27 > l && 27 > a && ~~(l / 9) == ~~(a / 9) && (a == l - 2 ? ~~(l / 9) == ~~((l - 1) / 9) && b(c, l - 1) : a == l - 1 ? (~~(l / 9) == ~~((l - 2) / 9) && b(c, l - 2), ~~(l / 9) == ~~((l + 1) / 9) && b(c, l + 1)) : a == l + 1 ? (~~(l / 9) == ~~((l - 1) / 9) && b(c, l - 1), ~~(l / 9) == ~~((l + 2) / 9) && b(c, l + 2)) : a == l + 2 && ~~(l / 9) == ~~((l + 1) / 9) && b(c, l + 1));
						break;
					case "N":
						if (3 == d[2] || 1 == d[2]) for (l = {}, 1 == (d[1][2] >> 2) - (d[1][1] >> 2) ? (0 < (d[1][1] >> 2) % 9 && (l[(d[1][1] >> 2) - 1] =
							1), 8 > (d[1][2] >> 2) % 9 && (l[(d[1][2] >> 2) + 1] = 1)) : l[d[1][0] >> 2] = 1, e = 0; 14 > e; ++e) c[e] |= 255 == a[e].l || l[a[e].l >> 2] ? 64 : 16
				} else sc.kb = null;
				a = Pb();
				for (e = 0; 14 > e; ++e) Y.na([116, e, -1, 0], 112, c[e], a);
				Ic.ia(a)
			}, Bd: function () {
				for (var b = X[116][0], c = 0; 14 > c; ++c) if (b[c].w & 8) return c;
				return -1
			}
		}
	}();
	var uc = function () {
		function b(a, b) {
			return "<span style='background:" + a + ";'>" + b + "</span>"
		}

		function d(a) {
			var c = a[0];
			return b(c & 4 ? "#600" : "#008", "東南西北".substr(~~(c / 4), 1)) + (c % 4 + 1) + H("局") + a[1] + H("本場")
		}

		function c() {
			3 == T.a && fc.bb(0);
			2 == T.a && J.c5("?wg=" + K.wg + "&tw=" + K.tw)
		}

		var a = "c" + D++;
		Ub("." + a + "{float:right;}");
		gb(J, ["c34", function () {
			var a = ["", "", "", ""], b = ["", "", "", ""];
			if (3 == T.a && fc.ab) {
				for (var c = ib(fc.ab), d = [0, 1, 2, 3], f = 1; f < (T.u & 16 ? 3 : 4); ++f) if (!(c[2 * d[f - 1] + 1] >= c[2 * d[f] + 1])) {
					var k =
						d[f];
					d[f] = d[f - 1];
					d[f - 1] = k;
					f = 0
				}
				k = [0, 1, 2, 3];
				for (f = 0; 4 > f; ++f) k[d[f]] = f;
				for (d = 0; 4 > d; ++d) a[d] = k[d] + 1 + P(281)[k[d]] + "(", b[d] = eb(Number(c[2 * d + 1]).toFixed(1)) + ")"
			}
			for (var h = B("c34").nextSibling, c = "", f = 0; 4 > f; ++f) d = (4 - K.tw + f) % 4, T.I[d] && (c += "<button class='s7 s8 w100 nobr" + (0 == d ? " s4" : "") + "' name='c14-" + f + "'><span class='nobr s11'><span class=dan" + T.Sa[d] + ">" + da[T.Sa[d]] + "</span>" + (1800 <= T.Na[d] ? "R" + T.Na[d] : "") + "</span>　<span class='nobr s12'>" + T.I[d] + "</span>　<span class='nobr s13'>" + a[f] + "</span><span class='nobr s14' style='text-align:right;'>" +
				b[f] + "</span></button>");
			if (3 == T.a || 2 == T.a) c = c + "<hr/>" + ("<button class='s7 s8 nobr w100" + (W.o & 4 ? "" : " s4") + "' name='c11'>" + P(164) + "</button>"), c += "<button class='s7 s8 nobr w100" + (W.o & 1 ? "" : " s4") + "' name='c12'>" + P(162) + "</button>", c += "<button class='s7 s8 nobr w100" + (W.o & 2 ? "" : " s4") + "' name='c13'>" + P(163) + "</button>";
			J.c1() || (c = c + "<hr/>" + ("<button class='s7 s8 nobr w100 " + (W.o & 32 ? " s4" : "") + "' name='c14-4'>" + P(166) + "</button>"));
			h.innerHTML = c;
			setTimeout(function () {
				for (var a = ["s11", "s12", "s13", "s14",
					"s15"], b = 0; b < a.length; ++b) {
					for (var c = h.querySelectorAll("." + a[b]), d = 0, e = 0; e < c.length; ++e) d < c[e].offsetWidth && (d = c[e].offsetWidth);
					for (e = 0; e < c.length; ++e) c[e].style.width = d + "px"
				}
			}, 1)
		}, "c35", function () {
			for (var a = B("c35").nextSibling, c = fc.zd(), m = "", g = 0; g < c.length; ++g) {
				var f = c[g][0], k = t(c[g][1].seed), h = c[g][2], p = "s7 s8 w100 nobr" + (c[g][3] ? " s4" : "");
				switch (h.tag) {
					case "RYUUKYOKU":
						var q = fa[h.type],
							m = m + ("<button class='" + p + "' name='c17-" + f + "'>" + d(k) + " 流局" + (q ? ":" + q : "") + "</button>");
						break;
					case "AGARI":
						var q =
								~~h.who, r = ~~h.fromWho, h = t(h.ten),
							m = m + ("<button class='" + p + "' name='c17-" + f + "'>" + d(k) + " " + (q == r ? b("#060", "ツモ") : "ロン") + ":" + T.I[q] + " " + h[1] + " " + (q != r ? b("#600", "放銃") + ":" + T.I[r] : "") + "</button>")
				}
			}
			m = m + "<hr>" + ("<button class='s7 s8 w100 nobr" + (W.o & 8 ? " s4" : "") + "' name='c10'>" + P(24) + "</button>");
			a.innerHTML = m
		}, "c36", function (a) {
			a = B("c36").nextSibling;
			for (var b = "", c = fc.Ad(), d = 0; d < c.length; ++d) b += "<button class='s7 s8 w100 nobr" + (c[d][2] ? " s4" : "") + "' name='c17-" + c[d][0] + "'>" + (d +
				1) + H("巡目") + "</button>";
			a.innerHTML = b
		}, "c40", function () {
			Fb("c40", !1) && Yc.xb(0, 0)
		}, "c10", function () {
			W.o = M.check = ~~M.check ^ 8;
			c()
		}, "c11", function () {
			W.o = M.check = ~~M.check ^ 4;
			c()
		}, "c12", function () {
			W.o = M.check = ~~M.check ^ 1;
			c()
		}, "c13", function () {
			W.o = M.check = ~~M.check ^ 2;
			c()
		}, "c14", function (a, b) {
			4 == b ? (W.o = M.check = ~~M.check ^ 32, 3 == T.a && fc.jc(b), 2 == T.a && c()) : (3 == T.a && fc.jc(b), 2 == T.a && (K.tw = ~~b % 4, c()))
		}, "c24", J.c8, "c17", function (a, b) {
			fc.Td(~~b)
		}, "c63", function () {
			Tb.v("L-click/→/wheel-down ... next<br>R-click/←/wheel-up ... prev<br>",
				1)
		}]);
		return {
			Md: function () {
				if (!Eb(".c33")) {
					var b = "";
					if ((3 == T.a || 2 == T.a) && !K.cb || 1 == T.a && ~T.u & 1) b += "<button class='btn s7' id=c24 style='padding-top:0.5em;padding-bottom:0.5em;min-height:2.0em;'>" + P(156) + "</button>";
					if (3 == T.a || 2 == T.a) b += "<span class='dropdown'><button class='aul btn s7' id=c34 style='padding-top:0.5em;padding-bottom:0.5em;min-height:2.0em;'>Player</button><div></div></span>";
					3 == T.a && (b += "<span class='dropdown'><button class='aul btn s7' id=c35 style='padding-top:0.5em;padding-bottom:0.5em;min-height:2.0em;'>Round</button><div></div></span><span class='dropdown'><button disabled class='aul btn s7' id=c36 style='padding-top:0.5em;padding-bottom:0.5em;min-height:2.0em;'>Step</button><div></div></span><button class='btn s7' id=c63 style='padding-top:0.5em;padding-bottom:0.5em;min-height:2.0em;'>?</button><button class='btn' id=c62 style='width:6em;padding-top:0.5em;padding-bottom:0.5em;min-height:2.0em;margin-left:4em;'>&lt;</button><button class='btn' id=c61 style='width:6em;padding-top:0.5em;padding-bottom:0.5em;min-height:2.0em;margin-left:0em;'>&gt;</button>");
					1 == T.a && (b += "<input type=checkbox class='checkbtn' id='c39'/><label class='s7 " + a + "' style='margin-right:20%;' for=c39>" + P(157) + "</label>", b += "<input type=checkbox class='checkbtn' id='c37'/><label class='s7 " + a + "' style=''for=c37>" + P(160) + "</label>", b += "<input type=checkbox class='checkbtn s7' id='c40' checked /><label class='s7 " + a + "' style='margin-right:5%;' for=c40>" + P(158) + "</label>", b += "<input type=checkbox class='checkbtn' id='c38'/><label class='s7 " + a + "' style=''for=c38>" + P(161) + "</label>");
					b = z("DIV", N.Wa, "c33", {innerHTML: b}, {
						position: "absolute",
						bottom: 0,
						left: 0,
						opacity: 0,
						width: "100%",
						transition: "all 80ms linear",
						transform: "translateY(100%)"
					});
					window.calcSizeResult = b.offsetWidth;
					n(b.style, {opacity: "", transform: ""});
					cc(b, bc);
					var c = Date.now();
					if (b = B("c62")) Ab(b, "touchstart", function (a) {
						J.c3(a, -1);
						c = Date.now();
						a.preventDefault()
					}), xb(b, "mousedown", function (a) {
						500 > Date.now() - c || J.c3(a, -1)
					});
					if (b = B("c61")) Ab(b, "touchstart", function (a) {
						J.c3(a, 1);
						c = Date.now();
						a.preventDefault()
					}), xb(b, "mousedown",
						function (a) {
							500 > Date.now() - c || J.c3(a, 1)
						})
				}
			}, rd: function (a) {
				var b = Eb(".c33");
				b ? (n(b.style, {opacity: 0, transition: "all 80ms linear", transform: "translateY(100%)"}), cc(b, function () {
					b.parentNode && b.parentNode.removeChild(b);
					a()
				})) : a()
			}
		}
	}();
	var lc = function () {
		var b = {
			C: [0, 136, 127, 118, 127, 127, 1022, 1025, 1019, 0, 107, 0],
			M: [0, 137, 128, 119, 128, 128, 1023, 1026, 1020, 0, 107, 0],
			F: [0, 141, 132, 123, 132, 132, 1024, 1027, 1021, 0, 107, 0]
		};
		b[""] = b.M;
		var d = [50, 82.421875, 50, 17.578125],
			c = [453120 / 728 / 768 * 100, 261120 / 728 / 768 * 100, 69120 / 728 / 768 * 100, 261120 / 728 / 768 * 100],
			a = 0, e = [];
		return {
			Qa: function (l, m) {
				var g = P(190)[m];
				if (g) {
					var f = z("SPAN", N.Wa, "nosel nobr nopp s10", {innerHTML: g}, {
						color: "#FFF",
						fontWeight: "bold",
						fontSize: "400%",
						transition: "all 300ms linear",
						left: d[l] + "%",
						top: c[l] +
							"%",
						textShadow: "#000 -0.013em -0.013em 0, #000 0 0.013em 0, #000 0.039em 0.039em 0",
						zIndex: 1,
						opacity: 0,
						transform: "translate(-50%,-50%) scale(2)"
					});
					window.calcSizeResult = f.offsetWidth;
					3 == T.a && e.push(f);
					var k = g = Date.now();
					k < a + 90 && (k = a + 90);
					a = k;
					$b(function () {
							n(f.style, {opacity: "", transform: "translate(-50%,-50%)"});
							E(b[T.Ha[l]][m], l, 0);
							cc(f, function () {
								Yb()[Zb++] = function () {
									if (-1 != e.indexOf(f)) return !0;
									n(f.style, {opacity: 0, transition: "all 800ms linear 500ms"});
									cc(f, function () {
										f.parentNode.removeChild(f)
									})
								}
							})
						},
						k - g + 1)
				}
			}, Ba: function (a) {
				e = [];
				if (a) {
					a = mb.querySelectorAll(".s10");
					for (var b = 0; b < a.length; ++b) a[b].parentNode.removeChild(a[b])
				}
			}
		}
	}();

	function wc(b, d, c) {
		var a = z("DIV", N.Wa, "s0", {}, {
			position: "absolute",
			background: "rgba(0,0,0,0.90)",
			border: "1px solid #444",
			padding: "0.5em",
			left: "50%",
			top: "50%",
			opacity: 0,
			transform: "translate(-50%,-50%) scale(0.95)",
			transition: "all 100ms ease-out"
		});
		b(a, d);
		window.calcSizeResult = a.offsetWidth;
		n(a.style, {opacity: "", transform: a.style.transform.replace(/scale\([^\)]*\)/, "scale(1.0)")});
		cc(a, function (a) {
			bc(a);
			c && c()
		})
	}

	function vc(b) {
		if (!Eb(".s0.s3")) {
			var d = Eb(".s0");
			d ? (d.classList.add("s3"), n(d.style, {
				transition: "all 200ms ease-out 0ms",
				opacity: 0,
				transform: d.style.transform.replace(/scale\([^\)]*\)/, "scale(0.97)")
			}), cc(d, function (c) {
				c.parentNode.removeChild(c);
				b && $b(b, 1)
			})) : b && b()
		}
	}

	var xc;
	gb(J, ["c16", function (b, d) {
		var c = d ? d : "F" == M.sx ? "F" : "";
		b = B("c16");
		"F" == c ? (b.innerHTML = P(322), M.sx = "F") : (b.innerHTML = P(321), M.removeItem("sx"))
	}, "c64", function () {
		var b = "<a class='w100 nobr s7' href='?L0000'>" + P(340) + P(341) + "</a><a class='w100 nobr s7' href='?C00112233'>" + P(342) + P(343) + "</a><a class='w100 nobr s7' href='?C00223344'>" + P(344) + P(345) + "</a><a class='w100 nobr s7' href='?C00334455'>" + P(346) + P(347) + "</a><div class='w100 nobr s7' id=c65>" + P(348) + P(349) + "</div><a class='w100 nobr s7' href='https://tenhou.net/make_lobby.html' target=_blank>" +
			P(350) + P(351) + "</a>";
		Tb.Ec(b, "", 0)
	}, "c65", function () {
		var b = "0000";
		location.search.match(/^\?(L[1-9][0-9]{3}|C[0-9]{8})/) && (b = RegExp.$1.substr(1));
		Tb.v(P(330) + "<br><div style='font-size:75%;'>" + P(300) + "L<span style='color:#F00;'>8141</span> / " + P(301) + "C<span style='color:#F00;'>00112233</span></div><input type=text size=10 value='" + b + "'/><br>", 3, function (b) {
			b = b.getElementsByTagName("INPUT")[0];
			b = b.value;
			b.match(/^L?(\d{4})$/) ? location.href = "?L" + RegExp.$1 : b.match(/^C?(\d{8})$/) && (location.href = "?C" +
				RegExp.$1)
		})
	}]);
	xc = {
		Hb: function (b) {
			for (var d = mb.querySelectorAll(".s0 BUTTON"), c = 0; c < d.length; ++c) d[c].disabled = b
		}, Fd: function (b) {
			n(b.style, {padding: "1em", width: "95%", textAlign: "center"});
			var d = x.tenhouEventInfo || [], c = 4 > d.length ? 2 : 5, a = .5 > Math.random() ? 0 : 2, e;
			e = "<table class=notxt cellpadding=0 cellspacing=0 align=center width=100%><tr>";
			for (var l = 0; l < c; ++l) {
				var m = d.splice(Math.floor(Math.random() * d.length), 1)[0], g = m.href,
					f = m.img ? m.img : m.href + "title.jpg";
				"https://" != g.substr(0, 8) && (g = "https://tenhou.net" + g);
				"https://" !=
				f.substr(0, 8) && (f = "https://cdn.tenhou.net" + f);
				var k = l != a && 5 == c ? 1 : 2;
				e += "<td rowspan=" + k + " colspan=" + k + " width=" + 25 * k + "% ><a href='" + g + "' target=_blank><img src='" + f + "' border=0 style='width:100%;'/></a></td>";
				2 == l && (e += "</tr><tr>");
				d.length < c - l - 1 && d.push(m)
			}
			e += "</tr></table><div style='padding:0.75em 0;'>";
			x.info && (e += x.info);
			x.tenhouAnnounce && (e += x.tenhouAnnounce);
			b.innerHTML = e + "</div><button class='btn' name=c6 disabled style='width:8em;padding:1em;'>OK</button>";
			b.querySelector("BUTTON[name=c6]").onclick =
				function () {
					xc.Hb(!0);
					J.c9()
				};
			setTimeout(function () {
				b.querySelector("BUTTON[name=c6]").disabled = !1
			}, 1E3)
		}, ac: function (b) {
			n(b.style, {padding: "1em", width: "80%", textAlign: "center"});
			var d = "";
			location.search.match(/^\?(L[1-9][0-9]{3})/) ? d = H(P(300)) + RegExp.$1 : location.search.match(/^\?(C[0-9]{8})/) && (d = H(P(301)) + RegExp.$1.substr(0, 5));
			var c;
			c = "" + ("<div style='position:relative;'><img src='" + Nb[0] + "' style='width:15em;'/><span style=\"position:absolute;bottom:1em;\">" + d + "</span></div>");
			c += "<hr style='width:75%;border:0;margin:0 auto;height:1px;background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,1),rgba(255,255,255,0));'><br><br><div class=guest><button class='nobr btn' style='width:80%;' name=guestok>" +
				P(310) + "</button><br><button class='nobr btn' name=regid>" + P(311) + "</button><button class='nobr btn' name=idcont>" + P(312) + "</button></div><div class=idcont><button class=btn name=changeid>" + P(320) + "</button><span class='dropdown'><button class='adl btn' id=c16 style='width:3em;'>" + P(323) + "</button><div><button class='s7 w100' name='c16-M' style='min-width:3em;'>" + P(323) + "</button><button class='s7 w100' name='c16-F' style='min-width:3em;'>" + P(324) + "</button></div></span><span class='dropdown'><button class='adl btn s7' id=c64>" +
				P(d ? 326 : 325) + "</button><div></div></span><button class=btn name=c6>　OK　</button></div>";
			b.innerHTML = c;
			J.c16();
			Eb("." + (M.uname ? "guest" : "idcont")).style.display = "none";
			b.querySelector("BUTTON[name=regid]").onclick = function () {
				Tb.v(P(313) + "<br><input type=text size=22 style='font-size:100%;'/><br>", 3, function (a) {
					a = a.getElementsByTagName("INPUT")[0];
					var b = a.value;
					if (b) return Db("https://b.mjv.jp/regid?q=1&uname=" + encodeURIComponent(b), "", function (a) {
						if (a) return alert("REGIDQ-0 " + a);
						a = Wb(this.response);
						0 != a.res ? S.ERR({code: a.res}) : (b = decodeURIComponent(a.uname), Tb.v(b + "<br><br>" + P(314), 3, function () {
							Db("https://b.mjv.jp/regid?uname=" + encodeURIComponent(b), "", function (a) {
								if (a) return alert("REGIDQ-1 " + a);
								a = Wb(this.response);
								1012 != a.res ? T.ERR({code: a.res}) : (M.uname = a.id, Tb.v("<hr><input type=text readonly value='" + M.uname + "' style='border:none;width:100%;text-align:center;'/><hr>" + P(1012), 1), Eb(".idcont").style.display = "", Eb(".guest").style.display = "none")
							})
						}))
					}), !0
				})
			};
			b.querySelector("BUTTON[name=idcont]").onclick =
				function () {
					Tb.v(P(327) + "<br><input type=text size=22 value='ID00000000-aabbccdd' style='font-size:100%;margin:0.25em'/><br><div id=info></div><small class=gray>" + P(328) + "</small>", 3, function (a) {
						a = a.getElementsByTagName("INPUT")[0].value;
						if ("ID00000000" == a.substr(0, 10) || !a.match(/^ID[0-9A-F]{8}\-[0-9a-zA-Z]{8}$/)) return a = B("info"), a.innerHTML = "<span style='font-size:75%;color:#F00'>" + P(329) + "</span>", !1;
						M.uname = a;
						Eb(".idcont").style.display = "";
						Eb(".guest").style.display = "none";
						return !0
					})
				};
			b.querySelector("BUTTON[name=changeid]").onclick =
				function () {
					Tb.v("<hr><input type=text readonly value='" + (M.hideid ? "ID########-########" : M.uname) + "' style='border:none;width:100%;text-align:center;'/><hr>" + P(331), 3, function () {
						M.removeItem("uname");
						Eb(".idcont").style.display = "none";
						Eb(".guest").style.display = ""
					})
				};
			b.querySelector("BUTTON[name=guestok]").onclick = function () {
				M.removeItem("uname");
				xc.Hb(!0);
				J.c8()
			};
			b.querySelector("BUTTON[name=c6]").onclick = function () {
				xc.Hb(!0);
				J.c8()
			};
			B("c55").parentNode.style.display = "";
			B("c66").parentNode.style.display =
				"none"
		}
	};
	var Zc = [1, 65, 9, 73, 17, 81, 25, 89, 129, 193, 137, 201, 145, 209, 153, 217, 33, 97, 41, 105, 49, 113, 57, 121, 161, 225, 169, 233, 177, 241, 185, 249, 1057, 545, 1569, 1065, 553, 1577, 1585, 1593],
		$c = [7, 3, 15, 11, 135, 131, 143, 139, 39, 35, 47, 43, 167, 163, 175, 171], Z = function () {
			function b(a) {
				return a.replace(/,/g, "</td><td>").replace(/\|/g, "</td></tr><tr><td>").replace(/>\(/g, "><table cellpadding=0 cellspacing=0 style='width:100%;border-collapse:collapse;'><tr><td>").replace(/\)</g, "</td></tr></table><")
			}

			function d() {
				var a = Z[2];
				Eb("#expdisp").innerHTML =
					H(P(218) + ":") + (a ? a.replace(/(\d\d\d\d)(\d\d)(\d\d)/, "$1.$2.$3") : "- - - -")
			}

			function c(a, b) {
				return "<center><span class='dropdown'><button class='adl btn s7' id=" + a + " style='width:11.5em;text-align:left;'>SELECT GAME</button><div class=rule style='height:15em;overflow-y:auto;text-align:left;'></div></span><button class='btn s7' id=" + b + " disabled>" + P(216) + "</button></center>"
			}

			function a(a) {
				return a ? e(a) ? (ca(a) + "　　　").substr(0, 6) + "&nbsp;&nbsp;" + h[a] : ca(a) : "SELECT GAME"
			}

			function e(a) {
				if (K.s) return !0;
				var b = Z[3], c = Z[5], d = Z[4], c = a & 16 ? d : c, d = !1;
				switch (ba(a) + 4 * (0 != (a & 1536))) {
					case 0:
						d = 13 <= c[0] && 1800 <= c[2] ? !1 : !0;
						break;
					case 1:
						d = 16 <= c[0] && 2E3 <= c[2] ? !1 : 9 <= c[0] || 60 <= b;
						break;
					case 2:
						d = 13 <= c[0] && 1800 <= c[2] ? !0 : !1;
						break;
					case 3:
						d = 16 <= c[0] && 2E3 <= c[2] ? b : !1;
						break;
					case 6:
						d = 13 <= c[0] && 1800 <= c[2] ? b : !1
				}
				return !!d
			}

			function l(b) {
				var c = Z[3], d = Z[5], e = Z[4], h;
				h = "" + ("<div class='w100 nobr s7' id='c20-" + b + "-0'>SELECT GAME</div>");
				for (var f = Zc.concat(~~M.swar ? $c : []), k = 0; k < f.length; ++k) {
					var g = f[k];
					0 < K.s && 1E4 > K.s && ba(g) + 4 * (0 != (g &
						1536)) || (h += "<div class='w100 nobr s7' id='c20-" + b + "-" + g + "'>" + a(g) + "</div>")
				}
				b && "rule3" != b && h && !K.s && (9 <= d[0] || 60 <= c || (h += "<div class='w100 nobr s7' id='c20-" + b + "-128'>※四麻上級卓</div>"), 9 <= e[0] || 60 <= c || (h += "<div class='w100 nobr s7' id='c20-" + b + "-144'>※三麻上級卓</div>"), 13 <= d[0] && 1800 <= d[2] || (h += "<div class='w100 nobr s7' id='c20-" + b + "-32'>※四麻特上卓</div>"), 13 <= e[0] && 1800 <= e[2] || (h += "<div class='w100 nobr s7' id='c20-" +
					b + "-48'>※三麻特上卓</div>"), 13 <= d[0] && 1800 <= d[2] && c || (h += "<div class='w100 nobr s7' id='c20-" + b + "-1056'>※四麻雀荘戦</div>"), 13 <= e[0] && 1800 <= e[2] && c || (h += "<div class='w100 nobr s7' id='c20-" + b + "-1072'>※三麻雀荘戦</div>"), 16 <= d[0] && 2E3 <= d[2] && c || (h += "<div class='w100 nobr s7' id='c20-" + b + "-160'>※四麻鳳凰卓</div>"), 16 <= e[0] && 2E3 <= e[2] && c || (h += "<div class='w100 nobr s7' id='c20-" + b + "-176'>※三麻鳳凰卓</div>"));
				Tb.Ec(h + ("<div class='w100 nobr s7' id='c20-" + b + "-65536'>※喰断ナシON/OFF</div>"), "text-align:left;", 0)
			}

			function m() {
				for (var b = mb.querySelectorAll(".tabs>.tab0.tabs>DIV BUTTON"), c = 0; c < b.length; ++c) {
					var d = r[c % r.length] | q[~~(c / r.length)], h = e(d);
					b[c].disabled = !(h && !p[d]);
					b[c].innerHTML = h ? P(216) : "&times;"
				}
				b = ad();
				for (c = 0; 5 > c; ++c) {
					d = b[c];
					if (h = B("rule" + c)) h.innerHTML = a(d);
					if (h = B("join" + c)) h.disabled = !(e(d) && !p[d])
				}
			}

			function g(a) {
				var b, c;
				a && (c = a.target.id.split("-"), b = c[1], c = ~~c[2]);
				if (void 0 !==
					c) switch (c) {
					case 128:
					case 144:
						return Tb.v(P(223));
					case 32:
					case 48:
						return Tb.v(P(224));
					case 160:
					case 176:
						return Tb.v(P(225));
					case 1056:
					case 1072:
						return Tb.v(P(226));
					case 65536:
						Xb("swar", ~~!~~M.swar, 0);
						return
				}
				a = ad();
				5 > a.length && (a = [1, 9]);
				if (void 0 !== c) {
					var d = ~~b.slice(-1);
					if (a[d] == c) return;
					a[d] = ~~c;
					M.rule = a
				}
				m();
				"rule3" == b && bd.yc();
				"rule4" == b && bd.Xc()
			}

			function f() {
				for (var a = 0; a < qa.length; ++a) h[qa[a]] = ~~h.jb[a] + ":<div class=n2r>" + ~~h.Ea[a] + "</div>";
				for (var b = 0; 4 > b; ++b) if (a = Eb(".tabs>.tab0.tabs>DIV.tab" +
					b)) for (var c = a.querySelectorAll(".ln"), a = 0; a < c.length; ++a) c[a].innerHTML = h[r[a] | q[b]]
			}

			function k(a) {
				var b = mb.querySelectorAll(".tabs>.tab0.tabs>DIV BUTTON");
				if (a && a.tagName) for (var c = 0; c < b.length; ++c) if (a == b[c]) {
					a = r[c % r.length] | q[~~(c / r.length)];
					break
				}
				if (void 0 === a) {
					for (c = 0; c < b.length; ++c) b[c].disabled = !e(r[c % r.length] | q[~~(c / r.length)]);
					for (c = 0; 5 > c; ++c) if (b = Eb("#join" + c)) b.disabled = !1;
					p = {}
				} else if (~a & 1) {
					for (c = 0; c < b.length; ++c) b[c].disabled = !0;
					for (c = 0; 5 > c; ++c) if (b = Eb("#join" + c)) b.disabled = !0
				} else p[a] =
					1, m();
				Eb("BUTTON[name=c19]").style.display = void 0 !== a && a & 1 ? "" : "none";
				Eb("BUTTON[name=c23]").style.display = void 0 !== a ? "none" : "";
				B("c18").disabled = void 0 !== a;
				a ? V.K({tag: "JOIN", t: K.s + "," + a}) : V.K({tag: "JOIN"})
			}

			Ub(".jtab tr:nth-child(n+2)>td:nth-child(2n+3){padding:0 0.25em;}.jtab tr>td:nth-child(2n){width:1em;text-align:center;}.jtab tr:nth-child(n+2)>td:nth-child(2n+1){color:#666;}.jtab tr:nth-child(n+2)>td:nth-child(2n):hover+td{background:#030;color:#FFF;}");
			var h = {n: [], jb: [], Ea: []}, p = {}, q = [0, 128,
				32, 160], r = [7, 15, 3, 11, 1, 9, 65, 73, 17, 25, 81, 89];
			gb(J, ["c18", function (a, b) {
				"" === b ? B("c18").nextSibling.innerHTML = "<button class='w100 nobr s7' name='c18-64'>" + ca(64) + "</button><button class='w100 nobr s7' name='c18-0'>" + ca(0) + "</button><button class='w100 nobr s7' name='c18-16'>" + ca(16) + "</button><button class='w100 nobr s7' name='c18-1536'>" + ca(1536) + "</button><button class='w100 nobr s7' name='c18-1552'>" + ca(1552) + "</button>" : k(b)
			}, "c19", function () {
				B("csmain") ? cd.Ud() : k()
			}, "c23", J.c9, "c20", g, "c25", function () {
				x.open("https://tenhou.net/man/",
					wb ? "_system" : "_blank")
			}, "c26", function () {
				x.open("https://tenhou.net/2/", wb ? "_system" : "_blank")
			}, "c27", function () {
				var a = M.uname;
				a && a.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? wb && store ? popup.v({tag: "STORE"}) : x.open("https://tenhou.net/reg/?ID" + RegExp.$1, "_blank") : Tb.v("ログイン画面の「新規ID」からIDを取得してください")
			}, "rule3", function () {
				l("rule3")
			}, "rule4", function () {
				l("rule4")
			}, "join3", function () {
				k(ad()[3])
			},
				"join4", function () {
					k(ad()[4])
				}]);
			return {
				Yd: d, ac: function (a, l) {
					p = {};
					Z[0] = decodeURIComponent(l.uname);
					Z[2] = l.expire;
					Z[3] = ~~l.expiredays;
					Z[5] = l.PF4 ? l.PF4.split(",") : [];
					Z[4] = l.PF3 ? l.PF3.split(",") : [];
					var r;
					Z[6] = l.PF601 && l.PF01C ? (r = l.PF601.split(","), r.splice(1, 0, 0, l.PF01C.split(",")[1]), r) : [];
					Z[7] = l.PF602 && l.PF02C ? (r = l.PF602.split(","), r.splice(1, 0, 0, l.PF02C.split(",")[1]), r) : [];
					Z[8] = l.PF603 && l.PF03C ? (r = l.PF603.split(","), r.splice(1, 0, 0, l.PF03C.split(",")[1]), r) : [];
					Z[9] = l.PF611 && l.PF11C ? (r = l.PF611.split(","),
						r.splice(1, 0, 0, l.PF11C.split(",")[1]), r) : [];
					Z[20] = l.PF612 && l.PF12C ? (r = l.PF612.split(","), r.splice(1, 0, 0, l.PF12C.split(",")[1]), r) : [];
					Z[21] = l.PF613 && l.PF13C ? (r = l.PF613.split(","), r.splice(1, 0, 0, l.PF13C.split(",")[1]), r) : [];
					Z[22] = l.PF623 && l.PF23C ? (r = l.PF623.split(","), r.splice(1, 0, 0, l.PF23C.split(",")[1]), r) : [];
					Z[23] = l.PF633 && l.PF33C ? (r = l.PF633.split(","), r.splice(1, 0, 0, l.PF33C.split(",")[1]), r) : [];
					r = "";
					r = Z[5];
					var u = Z[4];
					Z[3] || r.length || u.length ? (r.length || (r = [0, 0, 1500]), u.length || (u = [0, 0, 1500]), r =
						"<tr><td class=gray>四麻:</td><td>" + da[r[0]] + "</td><td class=gray>R</td><td>" + ~~r[2] + "</td><td style='padding:0 0 0 0.25em;'>" + r[1] + "</td><td class=gray>/</td><td>" + pa[~~r[0]] + "</td><td class=gray>pt</td></tr>", u = "<tr><td class=gray>三麻:</td><td>" + da[u[0]] + "</td><td class=gray>R</td><td>" + ~~u[2] + "</td><td style='padding:0 0 0 0.25em;'>" + u[1] + "</td><td class=gray>/</td><td>" + pa[~~u[0]] + "</td><td class=gray>pt</td></tr>") : (r = "<tr><td class=gray>" + P(219) + "</td></tr>", u = "");
					r = "" + ("<table cellpadding=0 cellspacing=0 style='pointer-events:none;width:100%;white-space:nowrap;text-align:right;'><tr><td><table cellpadding=0 cellspacing=0 style='width:100%;'><tr><td style='text-align:left;'>" +
						H(P(220) + ":") + "<span id=lnn0>" + ~~h.n[0] + "</span> " + H(P(221) + ":") + "<span id=lnn2>" + ~~h.n[2] + "</span> " + H(P(222) + ":") + "<span id=lnn3>" + ~~h.n[3] + "</span> </td></tr><tr><td><span id=iddisp>" + jb(Z[0]) + "</span> <span id=expdisp></span></td></tr></table></td><td rowspan=2 style='width:0.01em;padding-left:0.25em;'><table cellpadding=0 cellspacing=0 align=right>" + r + u + "</table></td></tr></table><div style='display:none;'></div><hr>");
					r = r + "<div class=tabs>" + ("<input type=radio name=tg0 class=tab0 id=uk" + D + "0><label class='tooltip nobr' data-tooltip='" +
						P(269) + "' for=uk" + D++ + "0>" + P(269).substr(0, 2) + "</label>");
					0 == K.s && (r += "<input type=radio name=tg0 class=tab1 id=uk" + D + "1><label class='tooltip nobr' data-tooltip='" + P(282) + "' for=uk" + D++ + "1>" + P(282).substr(0, 2) + "</label>", r += "<input type=radio name=tg0 class=tab2 id=uk" + D + "2><label class='tooltip nobr' data-tooltip='" + P(284) + "' for=uk" + D++ + "2>" + P(284).substr(0, 2) + "</label>");
					1E4 <= K.s && 2E4 > K.s && (r += "<input type=radio name=tg0 class=tab1 id=uk" + D + "1><label class='tooltip nobr' data-tooltip='" + P(290) +
						"' for=uk" + D++ + "1>" + P(290).substr(0, 2) + "</label>");
					r += "<input type=radio name=tg0 class=tab3 id=uk" + D + "3><label class='tooltip nobr' data-tooltip='" + P(210) + "' for=uk" + D++ + "3>" + P(210).substr(0, 2) + "</label>";
					r += "<input type=radio name=tg0 class=tab4 id=uk" + D + "4><label class='tooltip nobr' data-tooltip='" + P(200) + "' for=uk" + D++ + "4>" + P(200).substr(0, 2) + "</label>";
					r += "<input type=radio name=tg0 class=tab7 id=uk" + D + "7><label class='tooltip nobr' data-tooltip='" + P(291) + "' for=uk" + D++ + "7>" + P(291).substr(0,
						2) + "</label>";
					r += "<hr style='margin:0;clear:both;'/>";
					0 == K.s ? r += "<div class='tab0 tabs' style='position:relative;height:20.5em;padding:0.25em 0 0 0.25em;'><img class=nopp src='" + Nb[1] + "' style='z-index:-1;height:120%;right:0;bottom:-20%;' /><input type=radio name=tg1 class=tab0 id=uk" + D + "0><label class='tooltip nobr' data-tooltip='" + P(214)[0] + "' for=uk" + D++ + "0>" + P(214)[0].substr(0, 2) + "</label><input type=radio name=tg1 class=tab1 id=uk" + D + "1><label class='tooltip nobr' data-tooltip='" + P(214)[1] +
							"' for=uk" + D++ + "1>" + P(214)[1].substr(0, 2) + "</label><input type=radio name=tg1 class=tab2 id=uk" + D + "2><label class='tooltip nobr' data-tooltip='" + P(214)[2] + "' for=uk" + D++ + "2>" + P(214)[2].substr(0, 2) + "</label><input type=radio name=tg1 class=tab3 id=uk" + D + "3><label class='tooltip nobr' data-tooltip='" + P(214)[3] + "' for=uk" + D++ + "3>" + P(214)[3].substr(0, 2) + "</label><hr style='margin:0;clear:both;'/><div class=tab0 style='position:relative;height:18em;'></div><div class=tab1 style='position:relative;height:18em;'></div><div class=tab2 style='position:relative;height:18em;'></div><div class=tab3 style='position:relative;height:18em;'></div></div>" :
						1E4 > K.s ? r += "<div class='tab0 tabs' style='position:relative;height:20.5em;padding:0.25em 0 0 0.25em;'><img class=nopp src='" + Nb[1] + "' style='z-index:-1;height:120%;right:0;bottom:-20%;' /><input type=radio name=tg1 class=tab0 id=uk" + D + "0><label class='tooltip nobr' data-tooltip='個室" + K.s + "' for=uk" + D++ + "0>個室" + K.s + "</label><hr style='margin:0;clear:both;'/><div class=tab0 style='position:relative;height:18em;'></div></div>" : 2E4 > K.s && (r += "<div class='tab0' style='position:relative;height:20.5em;padding:0.25em 0 0 0.25em;text-align:center;line-height:1.1;'><img class=nopp src='" +
							Nb[1] + "' style='z-index:-1;height:120%;right:0;bottom:-20%;' /><div style='height:16em;'><div id=csmain></div><hr style='width:90%;'><div id=csranking></div></div><hr><span style='padding:0 1em;'>" + H(P(268)) + "<span id=lnj0>" + ~~h.jb[0] + "</span>" + H(P(270)) + " " + H(P(269)) + "<span id=lng0>" + ~~h.Ea[0] + "</span>" + H(P(270)) + "</span><button class='nobr btn s7' id=joincs0 disabled>　</button></div>");
					1E4 <= K.s && 2E4 > K.s && (r += "<div class='tab1' style='height:20.5em;padding:0.25em 0 0 0.25em;text-align:center;'><div style='position:relative;height:16em;'><button class='btn s7' name=c60 style='position:absolute;font-size:100%;right:1em;bottom:0em;'>&middot;&middot;&middot;</button><div id=c59 style='height:100%;font-size:75%;overflow-y:scroll;user-select:text;text-align:left;line-height:1.1;'><div>#ENTER LOBBY " +
						K.s + "</div></div></div><hr><span style='padding:0 1em;'>" + H(P(268)) + "<span id=lnj1>" + ~~h.jb[0] + "</span>" + H(P(270)) + " " + H(P(269)) + "<span id=lng1>" + ~~h.Ea[0] + "</span>" + H(P(270)) + "</span><button class='nobr btn s7' id=joincs1 disabled>　</button></div>");
					0 == K.s && (r += b("<div class=tab1 style='position:relative;width:100%;height:20.5em;'><img class=nopp src='" + Nb[1] + "' style='z-index:-1;height:120%;right:0;bottom:-20%;' /><br><br><br>" + c("rule3", "join3") + "<br><table class=nobr cellpadding=0 cellspacing=0 id=c56 style='min-width:80%;margin:0 auto;line-height:1.8;'><tr><td valign=top style='min-width:10em;'>(," +
						P(283)[0] + "," + P(283)[1] + "|" + P(283)[2] + ",,|" + P(283)[3] + ",,|" + P(283)[4] + ",,|" + P(283)[5] + ",,)</td><td style='width:0.5em;'></td><td valign=top style='min-width:7em;'>(," + P(283)[6] + "," + P(283)[7] + "|,,|,,|,,|,,)</td><td rowspan=2 style='width:1em;'></td><td rowspan=2 valign=top style='min-width:11em;'>(" + P(283)[8] + ",,|" + P(283)[9] + ",,|" + P(283)[10] + ",,|<div style='border-bottom:1px solid transparent;'>&nbsp;</div>|" + P(283)[12] + ",,|" + P(283)[13] + ",,)</td></tr><tr><td colspan=3 align=right style='padding:0;'><table cellpadding=0 cellspacing=0 style='border-collapse:collapse;'><tr><td style='padding-right:0.5em;'>" +
						P(283)[14] + ",</td></tr></table></tr></table><div id=c56_ style='text-align:center;padding:5em 0;'>" + H(P(280)) + "</div></div>"));
					0 == K.s && (r += b("<div class=tab2 style='position:relative;height:20.5em;'><img class=nopp src='" + Nb[1] + "' style='z-index:-1;height:120%;right:0;bottom:-20%;' /><br><br><br>" + c("rule4", "join4") + "<br><table class=nobr cellpadding=0 cellspacing=0 id=c57 style='min-width:80%;margin:0 auto;line-height:1.8;'><tr><td valign=top style='min-width:6.5em;'>(" + P(285)[0] + ",|" + P(285)[1] +
						",|" + P(285)[2] + ",|" + P(285)[3] + ",|" + P(285)[4] + ",)</td><td style='width:1em;'></td><td valign=top style='min-width:8em;'>(" + P(285)[5] + ",|" + P(285)[6] + ",|" + P(285)[7] + ",|" + P(285)[8] + ",|" + P(285)[9] + ",)</td><td style='width:1em;'></td><td valign=top style='min-width:6.5em;'>(" + P(285)[10] + ",|" + P(285)[11] + ",|" + P(285)[12] + ",|" + P(285)[13] + ",|" + P(285)[14] + ",)</td></tr><tr><td colspan=5 class=gray style='font-size:75%;padding:0.2em;'></td></tr></table><div id=c57_ style='text-align:center;padding:5em 0;'>" + H(P(280)) +
						"</div></div>"));
					r += "<div class=tab3 style='position:relative;height:20.5em;'><img class=nopp src='" + Nb[2] + "' style='z-index:-1;height:130%;right:0;bottom:-20%;' /><div id='c31' style='height:100%;overflow-x:hidden;overflow-y:auto;'>" + H("<br>L O A D I N G ...") + "</div><div class=sblink style='visibility:hidden;'>▼</div><div style='position:absolute;bottom:0;background:#000;font-size:150%;'><input type=radio class=radiobtn name=wg0 id=wg00 /><label class=btn for=wg01>－</label><input type=radio class=radiobtn name=wg0 id=wg01 /><label class=btn for=wg02>四</label><input type=radio class=radiobtn name=wg0 id=wg02 /><label class=btn for=wg00>三</label><input type=radio class=radiobtn name=wg1 id=wg10 /><label class=btn for=wg11>－</label><input type=radio class=radiobtn name=wg1 id=wg11 /><label class=btn for=wg12>東</label><input type=radio class=radiobtn name=wg1 id=wg12 /><label class=btn for=wg10>南</label><input type=radio class=radiobtn name=wg2 id=wg20 /><label class=btn for=wg21>－</label><input type=radio class=radiobtn name=wg2 id=wg21 /><label class=btn for=wg22>鳳</label><input type=radio class=radiobtn name=wg2 id=wg22 /><label class=btn for=wg23>特</label><input type=radio class=radiobtn name=wg2 id=wg23 /><label class=btn for=wg20>雀</label></div></div>";
					r += "<div class=tab4 style='position:relative;height:20.5em;'><img class=nopp src='" + Nb[2] + "' style='z-index:-1;height:130%;right:0;bottom:-20%;' /><div id='c32' style='height:100%;overflow-x:hidden;overflow-y:auto;'>" + H("<br>L O A D I N G ...") + "</div><div class=sblink style='visibility:hidden;'>▼</div></div>";
					r += "<div class=tab7 style='position:relative;height:20.5em;'><img class=nopp src='" + Nb[3] + "' style='z-index:-1;height:130%;right:0;bottom:-20%;' /><br><br><br><br><br><br><br><button class='btn s7' name=c5>OpenURL</button> <button class='btn s7' name=c25>" +
						P(286) + "</button> <button class='btn s7' name=c26>" + P(287) + "</button><br><br><button class='btn s7' name=c27>" + P(288) + "</button><br></div>";
					r = r + "</div><hr>" + ("<span class='dropdown' style='float:left;'><button class='aul btn s7' id=c18>" + P(217) + "</button><div></div></span>");
					a.innerHTML = r + "<button class='btn s7' name=c23 style='float:right;'>LOGOUT</button><button class='btn s7' name=c19 style='float:right;display:none;'>CANCEL</button>";
					d();
					0 == K.s ? (bd.Xc(), bd.yc()) : 1E4 > K.s || 2E4 > K.s && cd.Ca();
					g();
					n(a.style, {width: "36em"});
					r = a.querySelectorAll("#c31~DIV INPUT[type=radio].radiobtn");
					for (u = 0; u < r.length; ++u) xb(r[u], "click", function () {
						dd.Wc()
					});
					ed.Rd();
					xb(a.querySelector(".tabs>INPUT[type=radio].tab3"), "change", dd.Tc);
					r = b(("<table class=jtab cellpadding=0 cellspacing=0 style='width:80%;height:100%;padding:1em;margin:0 auto;'><tr><td>," + H("東風戦") + ",," + H("東南戦") + ",|喰断ナシ+|喰断アリ+|喰アリ赤+|喰アリ赤速+|三喰赤+|三喰赤速+</td></tr></table>").replace(/\+/g,
						",<button></button></td><td class=ln>,<button></button></td><td class=ln>"));
					if (1E4 > K.s && (a.querySelector(".tabs>.tab0.tabs>DIV.tab0").innerHTML = r, u = [0, 223, 224, 225], 0 == K.s)) for (var v = 1; 4 > v; ++v) {
						var la = a.querySelector(".tabs>.tab0.tabs>DIV.tab" + v);
						la.innerHTML = r + "<div class=gray style='position:absolute;left:30%;top:50%;width:50%;transform:translate(-50%,-50%);'>" + P(u[v]) + "</div>";
						var C = e(1 | q[v]) || e(17 | q[v]);
						la.childNodes[0].style.display = C ? "" : "none";
						la.childNodes[1].style.display = C ? "none" : ""
					}
					r = a.querySelectorAll(".tabs>.tab0.tabs>DIV BUTTON");
					for (u = 0; u < r.length; ++u) r[u].className = "btn nobr", r[u].style.width = "100%", r[u].style.minWidth = "4em", xb(r[u], "click", function (a) {
						k(a.target)
					});
					r = a.querySelectorAll("INPUT[name=tg0],INPUT[name=tg1]");
					for (u = 0; u < r.length; ++u) xb(r[u], "change", function (a) {
						var b = ~~a.target.name.substr(-1);
						a = ~~a.target.id.substr(-1);
						var c = t(M.tabsel);
						c[b] = a;
						M.tabsel = c.join(",")
					});
					u = t(M.tabsel);
					r = a.querySelectorAll("INPUT[name=tg0]");
					r.length && (r[0 <= u[0] && u[0] < r.length ? ~~u[0] : 0].checked = !0);
					r = a.querySelectorAll("INPUT[name=tg1]");
					r.length && (r[0 <= u[1] && u[1] < r.length ? ~~u[1] : 0].checked = !0);
					f();
					m();
					dd.Tc();
					B("c55").parentNode.style.display = "none";
					B("c66").parentNode.style.display = ""
				}, fd: function (a) {
					h.n = a.n.split(",");
					h.jb = a.j.split(",");
					h.Ea = a.g.split(",");
					B("lnn0") && (B("lnn0").innerText = ~~h.n[0], B("lnn2").innerText = ~~h.n[2], B("lnn3").innerText = ~~h.n[3], g());
					for (a = 0; 2 > a; ++a) {
						var b = B("lnj" + a);
						b && (b.innerText = ~~h.jb[0]);
						if (b = B("lng" + a)) b.innerText = ~~h.Ea[0]
					}
					f();
					return 1
				}, cd: function (a) {
					var b = a.lobby;
					b && (4 == b.length ? K.s = ~~b : 9 == b.length &&
						(K.s = ~~("1" + b.substr(1, 4))));
					var b = B("c59"), c = a.text, d = a.hidden;
					if (b && c && c.length && "1" != d) {
						var c = decodeURIComponent(c), d = a.uname,
							e = a.color && a.color.match(/[0-9A-Fa-f]{6}/) ? "#" + a.color : d ? "" : "#FF0";
						d && d.length && (c = decodeURIComponent(d) + ": " + c);
						a = mb.createElement("DIV");
						e && (a.style.color = e);
						a.innerText = c;
						d = b.scrollHeight;
						e = b.scrollTop + 1.1 * b.clientHeight;
						b.appendChild(a);
						d <= e && (b.scrollTop = b.scrollHeight)
					}
					if (c && c.match(/^\/prompt /)) {
						var b = c.split(" "), h = b[1], c = ~~b[2], f = b[3], k = b[4];
						a = "";
						for (d = 5; d < b.length; ++d) a +=
							b[d] + (d != b.length - 1 ? " " : "");
						a = jb(a).replace(/&lt;br&gt;/g, "<br>");
						Tb.v(a, 3, function () {
							V.K({tag: "CHAT", text: "/prompt " + h + " " + f})
						}, function () {
							V.K({tag: "CHAT", text: "/prompt " + h + " " + k})
						}, c, f, k)
					} else "/attention please" == c && (Eb("DIV.tabs>INPUT[type=radio][name=tg0].tab1").checked = !0);
					return 1
				}
			}
		}();
	var cd = function () {
		function b(a) {
			function b(a) {
				return a.replace(RegExp("[^ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ]", "g"), "")
			}

			var c = Z[0];
			return (a = b(a)) && a != b(c)
		}

		function d(a) {
			return (new Date(a.substr(0, 4), a.substr(4, 2) - 1, a.substr(6,
				2), a.substr(8, 2), a.substr(10, 2), a.substr(12, 2))).getTime()
		}

		function c(a) {
			return a.replace(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)/, function (a, b, c, d, e, h) {
				return b + "." + c + "." + d + "(" + P(250)[(new Date(b, c - 1, d)).getDay()] + ") " + e + ":" + h
			})
		}

		function a() {
			var a = ~~f.players, b = ~~f.premiumonly, d = ~~f.joinfee, e = f.rule, h = parseInt(e[2], 16), k;
			k = "" + (h & 8 ? "東南" : "東風") + (h & 16 ? "サンマ" : "戦") + " " + (h & 4 ? "喰ナシ" : "喰あり") + (h & 2 ? "赤ナシ" : "赤あり") + " ";
			aa(K.s,
				h) && (k += "速");
			h & 256 && (k += "暗");
			h & 512 && (k += "祝");
			var g = "", l = ~~e[3], m = ~~e[4], C = ~~e[5], ga = ~~e[6];
			f.la = !!f.join;
			if (f.la) {
				var I = (h & 16 ? Z[4] : Z[5])[0];
				l && m ? f.la = l <= I && I <= m : l ? f.la = l <= I : m && (f.la = I <= m)
			}
			f.la && (h = (h & 16 ? Z[4] : Z[5])[2], C && ga ? f.la = C <= h && h <= ga : C ? f.la = C <= h : ga && (f.la = h <= ga));
			l && m && l == m ? g += da[l] + "限定" : l && m ? g += da[l] + "～" + da[m] : l ? g += da[l] + "以上" : m && (g += da[m] + "以下");
			g.length && (C || ga) && (g += " & ");
			C && ga ? g += "R" + C + "～R" + ga : C ? g += "R" + C + "以上" : ga && (g += "R" + ga +
				"以下");
			g.length || (g += "段位R指定なし");
			g += "<br>";
			g = d ? g + "だれでもOK" : b ? g + (a ? "固定 " + a + " 名(有効期限3日以上)" : "有効期限3日以上") : g + (a ? "固定 " + a + " 名" : "だれでもOK");
			a = d ? "有効期限" + d + "日分" : a ? "- - -" : b ? "なし" : "無料";
			e = "" + ("<div style='font-size:150%;padding-top:0.25em;'>" + lb(f.title) + "</div><hr><table cellpadding=0 cellspacing=0 style='min-width:80%;margin:0 auto;text-align:left;'><tr><td><table cellpadding=0 cellspacing=0 style='width:100%;'><tr><td colspan=3>" +
				H(P(251) + "JST") + "<br></td></tr><tr><td>" + H(P(252)) + "</td><td>&nbsp;</td><td>" + c(e[0]) + "</td></tr><td>" + H(P(253)) + "</td><td></td><td>" + c(e[1]) + "</td></tr></td></tr><tr><td colspan=3 style='padding-top:0.25em;'>" + H(P(254)) + "<br>" + k + "</td></tr></table></td><td style='padding:0 0 0 1em;'><table cellpadding=0 cellspacing=0 style='width:100%;'><tr><td>" + H(P(266)) + "<br>" + a + "<br></td></tr><tr><td style='padding-top:0.25em;'>" + H(P(267)) + "<br>" + g + "</td></tr></table></td></tr></table>");
			B("csmain").innerHTML =
				e;
			V.K("<DATE />")
		}

		function e() {
			h = void 0;
			B("csmain") && V.K("<DATE />")
		}

		function l(a) {
			Eb("BUTTON[name=c19]").style.display = void 0 !== a && a & 1 ? "" : "none";
			Eb("BUTTON[name=c23]").style.display = void 0 !== a ? "none" : "";
			B("c18").disabled = void 0 !== a;
			B("joincs0").disabled = B("joincs1").disabled = void 0 !== a || !f.la;
			(k = a) ? V.K({tag: "JOIN", t: K.s + "," + a}) : V.K({tag: "JOIN"})
		}

		function m(a) {
			a = a.rankingcs.split(",");
			var b = "", c = P(256), d = P(263), e = "", h = "-", k = [], g = "---";
			a[0] = a[0] || f && f.ranking;
			if ("sc3m" == a[0] || "sc3c0m" == a[0] || "sc3c2m" ==
				a[0] || "sc3c5m" == a[0]) c = P(257), "sc3c2m" == a[0] && (d = P(264)), "sc3c5m" == a[0] && (d = P(265)), e = P(259), a[8] && (g = a[8]), a[6] && (h = eb(Number(a[6]).toFixed(1))), a[3] && k.push(eb(Number(a[3]).toFixed(1))), a[2] && k.push(eb(Number(a[2]).toFixed(1))), a[1] && k.push(eb(Number(a[1]).toFixed(1))), k.length && k.push("= " + eb((1 * a[1] + 1 * a[2] + 1 * a[3]).toFixed(1))); else if ("sc5m" == a[0] || "sc5c0m" == a[0] || "sc5c2m" == a[0] || "sc5c5m" == a[0]) c = P(258), "sc5c2m" == a[0] && (d = P(264)), "sc5c5m" == a[0] && (d = P(265)), e = P(260), a[9] && (g = a[9]), a[7] && (h = eb(Number(a[7]).toFixed(1))),
			a[5] && k.push(eb(Number(a[5]).toFixed(1))), a[4] && k.push(eb(Number(a[4]).toFixed(1))), a[3] && k.push(eb(Number(a[3]).toFixed(1))), a[2] && k.push(eb(Number(a[2]).toFixed(1))), a[1] && k.push(eb(Number(a[1]).toFixed(1))), k.length && k.push("= " + eb((1 * a[1] + 1 * a[2] + 1 * a[3] + 1 * a[4] + 1 * a[5]).toFixed(1)));
			k = k.length ? k.join(" ") : "- - -";
			b += "<div style='min-width:80%;display:inline-block;text-align:left;'>" + H(P(255)) + "　" + c + "<br>" + H(P(261)) + "　" + h + "　" + H(P(262)) + "　" + d + "<br>" + H(e) + " " + k + "<br></div>";
			b += "<div style='font-size:200%;padding:0.1em 0;'>" +
				g + fd(g) + "</div>";
			B("csranking").innerHTML = b
		}

		function g() {
			if (f.la) l(parseInt(f.rule[2], 16)); else if (f.joinfee) {
				var a = M.uname;
				a && a.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? Tb.v(P(273).replace("###", f.joinfee), 3, function () {
					Db("https://b.mjv.jp/csreg?lobby=" + K.s + "&uname=" + a, "", function (a) {
						if (a) return alert("CSREG" + a);
						a = Wb(this.response);
						S.ERR({code: a.res});
						1027 == a.res && (Z[2] = a.expire, Z.Yd(), J.c8())
					})
				}) : Tb.v(P(272))
			} else f.premiumonly && ((a = M.uname) && a.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? T.ERR({code: 1020}) :
				Tb.v(P(271)))
		}

		var f, k = 0, h;
		gb(J, ["joincs0", g, "joincs1", g, "c60", function () {
			Tb.v("CHAT:<input type=text size=15 style='font-size:100%;'/>", 3, function (a) {
				a = a.getElementsByTagName("INPUT")[0];
				(a = a.value) && V.K({tag: "CHAT", text: a})
			})
		}]);
		return {
			Ca: function () {
				k = 0;
				m({rankingcs: ""})
			}, Ud: l, ke: a, ae: m, dd: function (b) {
				b && (f = b, f.rule = ("" + (f.rule || "")).split(","), f.csrule = ("" + (f.csrule || "")).split(","), f.join = ~~f.join, f.joinfee = ~~f.joinfee, f.players = ~~f.players, f.premiumonly = ~~f.premiumonly);
				B("csmain") && a();
				return 1
			},
			ed: function (a) {
				var c = B("joincs0");
				if (!c) return 1;
				a = d(a.t);
				var g = d(f.rule[0]), l = d(f.rule[1]);
				if (l <= a) c.innerText = P(277), c.disabled = !0, f.la = !1; else if (b(lb(f.title))) c.innerText = P(276), c.disabled = !0; else if (f.la) if (a < g) {
					var m = (g - a) / 1E3;
					c.innerText = P(278)[0] + (86400 < m ? (m / 24 / 60 / 60).toFixed(1) + P(278)[1] : 3600 < m ? (m / 60 / 60).toFixed(1) + P(278)[2] : 60 < m ? (m / 60).toFixed(1) + P(278)[3] : 5 * ~~(m / 5) + P(278)[4]);
					c.disabled = !0
				} else parseInt(f.csrule[0], 16) & 1073741824 ? (c.innerText = "- - -", c.disabled = !0) : (m = parseInt(f.rule[2],
					16), c.innerText = P(216), c.disabled = k == m); else f.joinfee ? (c.innerText = P(274), c.disabled = !1) : f.premiumonly ? (c.innerText = P(275), c.disabled = !1) : (c.innerText = P(276), c.disabled = !0);
				h || (h = setTimeout(e, a < g - 6E4 || l < a || g < a && a < l - 3E4 ? 3E4 : 5E3));
				B("joincs1").innerText = c.innerText;
				B("joincs1").disabled = c.disabled;
				return 1
			}
		}
	}();
	var ed = function () {
		function b() {
			for (var b = [], a = ~~M.lognext, d = 0; 40 > d; ++d) {
				var l = (a + 40 - 1 - d) % 40;
				try {
					b.push(JSON.parse(M["log" + l]))
				} catch (m) {
				}
			}
			return b
		}

		function d() {
			var c = B("c32");
			c.innerHTML = "";
			var a = z("DIV", c, "select-wrapper", {innerHTML: "<span class='dropdown'><button class='adr btn' id=c28 style='height:3em;'>Analyze/AI</button><div><button class='s7' name='c28-0' style='width:15em;'>NAGA25 / <span class=desc>© 2021 DWANGO Co., Ltd.</span></button><button class='s7' name='c28-1' style='width:15em;'>Custom URL</button></div></span>"},
					{"float": "right"}),
				a = z("DIV", c, "", {innerHTML: "<a class='bt3 s9' href='https://tenhou.net/mjlog.html' target=_blank style='padding:1em 0;'>" + P(202) + "</a>"}, {textAlign: "center"});
			a.childNodes[0].onclick = function () {
				c.innerHTML = H("<br>L O A D I N G ...");
				Db("https://tenhou.net/0/log/find.cgi?un=" + M.uname + "&raw=1", "", function (a) {
					if (a) throw alert("FINDLOG " + a);
					ed.vd(c, this.response)
				});
				return !1
			};
			ed.Jc(c, b())
		}

		gb(J, ["c28", function (c, a) {
			function d(a) {
				for (var c = b(), d = [], e = 0; e < c.length; ++e) d.push(c[e].log + "%25tw=" +
					(4 - ~~c[e].oya) % 4);
				x.open(a + "?lang=" + ec.Cb() + "&tenhou=" + d.join(","), wb ? "_system" : "_blank")
			}

			0 == a ? d("https://naga.dmv.nico/naga_report/order_form/") : 1 == a && Tb.v("Analyzer URL:<input type=text size=22 value='https://' style='font-size:100%;margin:0.25em'/><br>", 3, function (a) {
				a = a.getElementsByTagName("INPUT")[0];
				d(a.value);
				return !0
			})
		}]);
		return {
			Rd: d, Jc: function (b, a) {
				for (var c = 0; c < a.length; ++c) {
					var d = a[c], m = "javascript:void(0)",
						g = "<table class=bt3 cellpadding=0 cellspacing=0 width=100% height=100% style='position:absolute;width:100%;height:100%;padding:0.3em 0.5em;'><tr>";
					if (d) {
						var f = (4 - ~~d.oya) % 4, m = "http://tenhou.net/0/?log=" + d.log + "&tw=" + f,
							g = g + "<td class=nobr colspan=2>",
							g = g + (H(P(200) + " | ") + d.log.substr(4, 2) + "/" + d.log.substr(6, 2) + H(" | ")),
							g = g + ca(d.type), k = d.lobby;
						k && (g += " " + (1E4 > k ? "L" : "C") + db(4, k));
						var g = g + (H(" | ") + "<span class='elip gray' style='max-width:19em;'>" + m + "</span>"),
							g = g + "</td>", g = g + "</tr><tr>", k = d.uname, h = ~~d.oya;
						if (d = d.sc) {
							for (var d = d.split(","), p = 0; p < d.length; ++p) d[p] = Number(d[p]);
							for (p = 0; 4 > p; ++p) {
								g += "<td width=47% ><a class='w100 s9 s7' href='" +
									m + "&tw=" + (f + p) % 4 + "'>";
								if (k[p]) {
									if (p) g += "ABCD".substr((p + 4 - h) % 4, 1) + ":"; else var q = 0 + ~~(k[1] && d[3] > d[1]) + ~~(k[2] && d[5] > d[1]) + ~~(k[3] && d[7] > d[1]),
										g = g + (q + 1 + P(281)[q] + " ");
									g += jb(k[p]) + "(" + eb(d[2 * p + 1].toFixed(1)) + ")"
								}
								g += "</a></td>";
								1 == p && (g += "</tr><tr>")
							}
						} else if (k) for (p = 0; 4 > p; ++p) g += "<td width=47% >" + jb(k[p]) + "</td>", 1 == p && (g += "</tr><tr>")
					}
					g += "</tr></table>";
					g += "<a class='s9 s7 bt3' href='" + m + "' target=_blank></a>";
					m = z("DIV", b, "", {innerHTML: g}, {height: "3.6em", position: "relative", userSelect: "text"});
					m.childNodes[vb ?
						1 : 0].style.pointerEvents = "none";
					m.childNodes[1].onclick = kc.logOpen
				}
				z("DIV", b, "gray", {innerHTML: P(201)}, {fontSize: "75%", align: "left", padding: "1em 0 6em 0"})
			}, vd: function (b, a) {
				var c = a.split("\n");
				c[l - 1] || c.pop();
				for (var l = 0; l < c.length; ++l) {
					var m = c[l].split(" "), g = m[0], f = ~~m[1];
					c[l] = {
						type: parseInt(g.split("-")[1], 16),
						lobby: ~~g.split("-")[2],
						log: g,
						oya: (4 - f) % 4,
						uname: [m[2 + (0 + f) % 4], m[2 + (1 + f) % 4], m[2 + (2 + f) % 4], m[2 + (3 + f) % 4]],
						sc: [0, m[6 + (0 + f) % 4], 0, m[6 + (1 + f) % 4], 0, m[6 + (2 + f) % 4], 0, m[6 + (3 + f) % 4]].join()
					}
				}
				b.innerHTML =
					"";
				l = z("DIV", b, "", {innerHTML: "<a class=bt3 href='https://tenhou.net/mjlog.html' target=_blank style='padding:1em 0;'>" + P(204) + "</a>"}, {textAlign: "center"});
				l.childNodes[0].onclick = function () {
					d();
					return !1
				};
				l = z("DIV", b, "gray", {innerHTML: P(203)}, {fontSize: "75%", padding: "0.5em 0"});
				ed.Jc(b, c.reverse())
			}
		}
	}();
	var dd = function () {
		function b(a, b) {
			for (var d = 0; c[a].length; ++d) if (c[a][d] == b) return d;
			return 0
		}

		var d, c = [[3, 1, 2], [12, 4, 8], [112, 64, 32, 16]];
		return {
			w: 79, Tc: function () {
				Db("https://mjv.jp/0/wg/" + (1E4 > K.s ? db(4, K.s) : K.s) + ".js", "", function (a) {
					if (a) return console.log(a);
					a = this.response;
					if (a = a.substr(3, a.length - 3 - 2)) try {
						a = JSON.parse(a)
					} catch (l) {
						return
					}
					if (a) for (var b = 0; b < a.length; ++b) a[b] = a[b].split(",");
					dd.Wc(a)
				})
			}, Wc: function (a) {
				a && (d = a);
				var e = Eb("INPUT[name=wg0]:checked");
				e || (e = B("wg0" + b(0, dd.w & 3)) || B("wg00"),
					e.checked = !0);
				a = 0 | c[0][e.id.substr(-1)];
				e = Eb("INPUT[name=wg1]:checked");
				e || (e = B("wg1" + b(1, dd.w & 12)) || B("wg10"), e.checked = !0);
				a |= c[1][e.id.substr(-1)];
				0 == K.s && (e = Eb("INPUT[name=wg2]:checked"), e || (e = B("wg2" + b(2, dd.w & 112)) || B("wg21"), e.checked = !0), a |= c[2][e.id.substr(-1)]);
				dd.w = a;
				var l = B("c31");
				l.innerHTML = "";
				var m = 0;
				if (d) for (var g = 0; g < d.length; ++g) {
					var e = "<table class=bt3 cellpadding=0 cellspacing=0 width=100% height=100% style='position:absolute;width:100%;height:100%;padding:0.3em 0.5em;'>",
						f = d[g],
						k = ~~f[3];
					if (a & 3) {
						if (~k & 16 && ~a & 1) continue;
						if (k & 16 && ~a & 2) continue
					}
					if (a & 12) {
						if (~k & 8 && ~a & 4) continue;
						if (k & 8 && ~a & 8) continue
					}
					if (a & 112 && 0 == K.s) {
						if (0 != (k & 1536) && ~a & 16) continue;
						if (!(k & 3584) && 2 == ba(k) && ~a & 32) continue;
						if (!(k & 3584) && 3 == ba(k) && ~a & 64) continue
					}
					for (var h = "https://tenhou.net/0/?wg=" + f[0], p = [f[4], f[7], f[10], f[13]], q = 0; 4 > q; ++q) p[q] && (p[q] = decodeURIComponent(escape(atob(p[q]))));
					for (var r = [~~f[5], ~~f[8], ~~f[11], ~~f[14]], u = [~~f[6], ~~f[9], ~~f[12], ~~f[15]], e = e + ("<td colspan=2 class=nobr>" + H(P(210) + " | ") +
						f[2] + H(" | ") + ca(k) + H(" | ") + "<span class='elip gray' style='max-width:19em;'>" + h + "</span></td></tr><tr>"), q = 0; 4 > q; ++q) p[q] && (e += "<td width=47%><a class='w100 s9 s7' href='" + h + "&tw=" + q + "'><span class=dan" + r[q] + ">" + da[r[q]] + "</span>" + H("R") + u[q] + H("/") + p[q] + "</a></td>", 1 == q && (e += "</tr><tr>"));
					e += "</tr></table>";
					e += "<a class='s9 s7 bt3' href='" + h + "' target=_blank></a>";
					e = z("DIV", l, "", {innerHTML: e}, {height: "3.6em", position: "relative", userSelect: "text"});
					e.childNodes[vb ? 1 : 0].style.pointerEvents = "none";
					e.childNodes[1].onclick = kc.wgOpen;
					++m
				}
				m || (l.innerHTML = "<br>" + P(211));
				z("DIV", l, "gray", {innerHTML: P(212)}, {fontSize: "75%", align: "left", padding: "1em 0 6em 0"})
			}
		}
	}();

	function ad() {
		return ("" + (M.rule || "")).split(",")
	}

	function fd(b) {
		var d = b % 10;
		b %= 100;
		return 1 == d && 11 != b ? P(281)[0] : 2 == d && 12 != b ? P(281)[1] : 3 == d && 13 != b ? P(281)[2] : P(281)[3]
	}

	var bd = function () {
		function b(b) {
			if (0 != (b & 1536)) switch (b) {
				case 1057:
					return 601;
				case 545:
					return 602;
				case 1569:
					return 603;
				case 1065:
					return 611;
				case 553:
					return 612;
				case 1577:
					return 613;
				case 1585:
					return 623;
				case 1593:
					return 633
			} else return b & 16 ? 3 : 4
		}

		return {
			Xc: function () {
				function d(a, b) {
					var c = e[a].childNodes[1];
					c.className = "";
					c.innerHTML = b
				}

				function c(a, b, c) {
					d(a, b == c ? "1.00" : (b / c).toFixed(3).substr(1))
				}

				var a = B("c57");
				a.style.display = "none";
				B("c57_").style.display = "";
				for (var e = a.getElementsByTagName("TR"),
					     l = 1; l < e.length; ++l) if (!(2 > e[l].childNodes.length)) {
					var m = e[l];
					m.style.borderBottom = "1px solid #444";
					m = e[l].childNodes[0];
					m.className = "gray";
					m.style.textAlign = "left";
					m = e[l].childNodes[1];
					m.innerHTML = "-";
					m.className = "gray";
					m.style.textAlign = "right"
				}
				e[16].childNodes[0].innerHTML = "";
				if (l = ~~ad()[4]) {
					var g, m = 4, f = 0, k = "";
					switch (b(l)) {
						case 4:
							m = 4;
							f = 0;
							g = Z[5];
							k = P(240);
							break;
						case 3:
							m = 3;
							f = 0;
							g = Z[4];
							k = P(241);
							break;
						case 601:
							m = 4;
							f = 0;
							g = Z[6];
							break;
						case 602:
							m = 4;
							f = 2;
							g = Z[7];
							break;
						case 603:
							m = 4;
							f = 5;
							g = Z[8];
							break;
						case 611:
							m =
								4;
							f = 0;
							g = Z[9];
							break;
						case 612:
							m = 4;
							f = 2;
							g = Z[20];
							break;
						case 613:
							m = 4;
							f = 5;
							g = Z[21];
							break;
						case 623:
							m = 3;
							f = 5;
							g = Z[22];
							break;
						case 633:
							m = 3, f = 5, g = Z[23]
					}
					e[16].childNodes[0].innerHTML = k;
					g && (a.style.display = "", B("c57_").style.display = "none", a = ~~g[4] + ~~g[5] + ~~g[6] + ~~g[7]) && (c(1, g[4], a), c(2, g[5], a), c(3, g[6], a), 4 == m && c(4, g[7], a), c(5, g[8], a), d(6, a), d(7, (0 < g[3] ? "+" : "") + (g[3] / a).toFixed(1)), d(8, ((1 * ~~g[4] + 2 * ~~g[5] + 3 * ~~g[6] + 4 * ~~g[7]) / a).toFixed(2)), 0 != (l & 1536) && (l = 1 * g[3] + g[0] * f, d(9, (0 < l ? "+" : "") + (l / a).toFixed(1)), d(10, (~~g[0] /
						a).toFixed(2))), c(11, g[10], g[9]), c(12, g[11], g[9]), c(13, g[12], g[9]), c(14, g[13], g[9]), d(15, ~~g[2]))
				}
			}, yc: function (d) {
				function c(a) {
					for (var b, c = 1; c < arguments.length; ++c) b = m[a].childNodes[c], b.className = "", b.innerHTML = arguments[c]
				}

				function a(a, b, d) {
					c(a, b, (d ? d : "- ") + H(fd(d)))
				}

				function e(a, b, d, e) {
					c(a, b == d ? "1.00" : (b / d).toFixed(3).substr(1), (e ? e : "- ") + H(fd(e)))
				}

				var l = B("c56");
				if (l) {
					l.style.display = "none";
					B("c56_").style.display = "";
					for (var m = l.getElementsByTagName("TR"), g = 1; g < m.length; ++g) {
						var f = m[g], k = f.childNodes;
						if (!(2 > k.length)) {
							16 != g && 18 != g && (f.style.borderBottom = "1px solid #444");
							k[0].style.textAlign = "left";
							k[0].className = "gray";
							for (var h = 1; h < k.length; ++h) f = k[h], f.className = "gray", f.style.textAlign = "right", f.style.paddingLeft = "0.5em", 1 != g && 6 != g && (f.innerHTML = "-")
						}
					}
					c(18, H("-"));
					g = ~~ad()[3];
					V.Oa != g && (V.Oa = g, V.K('<PXR V="' + g + '" />'));
					if (g && (l.style.display = "", B("c56_").style.display = "none", d && (d = d.v2.split(","), 15 == d.length || 21 == d.length))) {
						var l = ~~d[0], f = ~~d[1], k = ~~d[2], h = ~~d[3], p = l + f + k + h, q = d[4], r;
						switch (b(g)) {
							case 4:
								r =
									Z[5][2];
								break;
							case 3:
								r = Z[4][2];
								break;
							case 601:
								r = Z[6][2];
								break;
							case 602:
								r = Z[7][2];
								break;
							case 603:
								r = Z[8][2];
								break;
							case 611:
								r = Z[9][2];
								break;
							case 612:
								r = Z[20][2];
								break;
							case 613:
								r = Z[21][2];
								break;
							case 623:
								r = Z[22][2];
								break;
							case 633:
								r = Z[23][2]
						}
						var u = ~~d[6], v = ~~d[7], F = ~~d[8], L = ~~d[9], oa = ~~d[10], la = ~~d[11], C = ~~d[12], ga = ~~d[13],
							I = ~~d[14];
						if (p) {
							var hb = g & 16 ? 30 * l + 0 * f + -30 * k : 30 * l + 10 * f + -10 * k + -30 * h,
								tb = g & 16 ? 1 * l + 2 * f + 3 * k : 1 * l + 2 * f + 3 * k + 4 * h, Xa = l + f, Ua = g & 16 ? k : h;
							a(2, eb(q), v);
							a(7, eb((q / p).toFixed(1)), F);
							a(3, eb(hb), L);
							a(8, (tb /
								p).toFixed(2), oa);
							e(11, l, p, la);
							~g & 16 && e(12, Xa, p, C);
							e(13, Ua, p, ga)
						}
						if (21 == d.length) {
							var q = d[15], la = d[16], ma = ~~d[17], na = ~~d[18], C = ~~d[19], ga = ~~d[20];
							a(4, eb(q), ma);
							a(9, eb((q / p).toFixed(1)), na);
							a(5, eb(la), C);
							a(10, eb((la / p).toFixed(2)), ga)
						}
						q = "-";
						15 == d.length && F && (q = v + F + L + oa);
						21 == d.length && na && (q = ma + na);
						a(15, ~~r, I);
						a(16, q, u);
						c(18, l + H(" + ") + f + H(" + ") + k + (g & 16 ? "" : H(" + ") + h) + H(" = ") + p)
					}
				}
			}
		}
	}();
	var kc = function () {
		function b(a, b) {
			return a ? "<span style='color:" + (0 < a ? "#0FF" : "#F00") + ";'>" + eb(a) + (void 0 != b ? b : "") + "</span>" : ""
		}

		function d(a, c) {
			return T.I[c] ? "<tr><td align=center class=bbg5 style='padding:0.5em;'>" + jb(T.I[c]) + "<table cellpadding=0 cellspacing=0><tr><td align=right style='width:6em;'>" + 100 * a[2 * c + 0] + "</td><td align=right style='width:5em;'>" + b(a[2 * c + 1].toFixed(1)) + "</td>" + (16 == a.length ? "<td align=right style='width:4em;'>" + b(a[2 * c + 8], "枚") + "</td>" : "") + "<td style='width:3em;'></td></tr></table></td></tr>" :
				""
		}

		function c(a) {
			if ("OWARI" == a.tag) {
				var c = ib(a.sc);
				a = [0, 1, 2, 3];
				for (var e = 1; 4 > e; ++e) if (!(c[2 * a[e - 1] + 1] >= c[2 * a[e] + 1])) {
					var h = a[e];
					a[e] = a[e - 1];
					a[e - 1] = h;
					e = 0
				}
				e = "<table cellpadding=0 cellspacing=0 width=75% align=center>" + d(c, a[0]);
				e += d(c, a[1]);
				e += d(c, a[2]);
				e += d(c, a[3]);
				return e + "</table>"
			}
			c = a.sc ? t(a.sc) : [];
			e = [];
			for (h = 0; 4 > h; ++h) e[h] = "<span style='font-weight:bold;color:#888;'>" + T.dc[h] + "</span> ", c.length || (e[h] += da[T.Sa[h]] + (1800 > T.Na[h] ? "" : " <span style='color:#888;'>R</span>" + ~~T.Na[h]) + "<br>"), e[h] +=
				"<span style='font-weight:bold;color:#CCC;'>" + jb(T.I[h]) + "</span><br>";
			h = 2.4;
			if (8 == c.length || 16 == c.length) e[0] += 100 * c[0] + (c[1] ? " " + b(100 * c[1]) : ""), e[1] += 100 * c[2] + (c[3] ? " " + b(100 * c[3]) : ""), e[2] += 100 * c[4] + (c[5] ? " " + b(100 * c[5]) : ""), e[3] += 100 * c[6] + (c[7] ? " " + b(100 * c[7]) : "");
			16 == c.length && (++h, e[0] += "<br>" + c[8] + "枚" + (c[9] ? " " + b(c[9], "枚") : ""), e[1] += "<br>" + c[10] + "枚" + (c[9] ? " " + b(c[11], "枚") : ""), e[2] += "<br>" + c[12] + "枚" + (c[9] ? " " + b(c[13], "枚") : ""), e[3] += "<br>" + c[14] + "枚" + (c[9] ?
				" " + b(c[15], "枚") : ""));
			c = "";
			a.ba && (c = t(a.ba), c = H("") + c[0] + " " + H("") + c[1]);
			return "<table cellpadding=0 cellspacing=0 width=100%><tr><td rowspan=1 style='width:33%;height:" + h / 2 + "em;font-family:icons2;'>" + c + "</td><td rowspan=2 style='width:34%;height:" + 1 * h + "em;'><div style='padding:0.2em 0;'" + (T.I[2] ? " class=bbg5>" + e[2] : ">") + "</div></td><td rowspan=1 style='width:33%;height:" + h / 2 + "em;'>" + H(ca(T.u)) + "</td></tr><tr><td rowspan=2 style='height:" + 1 * h + "em;'><div style='padding:0.2em 0;'" +
				(T.I[3] ? " class=bbg5>" + e[3] : ">") + "</div></td><td rowspan=2 style='height:" + 1 * h + "em;'><div style='padding:0.2em 0;'" + (T.I[1] ? " class=bbg5>" + e[1] : ">") + "</div></td></tr><tr><td rowspan=2 style='height:" + 1 * h + "em;'><div style='padding:0.2em 0;'" + (T.I[0] ? " class=bbg5>" + e[0] : ">") + "</div></td></tr><tr><td rowspan=1 style='height:" + h / 2 + "em;'></td><td rowspan=1 style='height:" + h / 2 + "em;'></td></tr></table>"
		}

		function a() {
			if (m.length) {
				var a = N.Ra / ob * .02, b = "<canvas class=nodisp width=0 height=0 style='pointer-events:none;margin:0 0 " +
					pb(.5 * a) + "'></canvas>", d = m.shift(), h = N.Ga = z("DIV", z("DIV", N.Wa, "nopp", {}, {
						width: pb(N.Ra),
						height: pb(N.zb),
						transformOrigin: "0 0",
						transform: "scale(1.0)",
						fontSize: a + "px",
						color: "#FFF"
					}), "s0", {innerHTML: b + b + "<div style='pointer-events:none;margin:0 0 " + pb(.5 * a) + "'></div>" + b + "<div style='pointer-events:none;font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;'></div><div style='pointer-events:none;'></div><button class='btn s7' name=" + ("NINTEI" == d.tag ? "c8" : 3 != T.a && "OWARI" == d.tag ? "c8" : "c6") + " style='width:8em;padding:1em;'>OK</button>"},
					{
						pointerEvents: "auto",
						position: "absolute",
						background: "rgba(0,0,0,0.90)",
						textAlign: "center",
						border: pb(.05 * a) + " solid #444",
						padding: pb(a) + " 0",
						left: "50%",
						top: "50%",
						display: "",
						opacity: 0,
						transform: "translate(-50%,-50%) scale(1.0)"
					});
				if (l[d.tag]) l[d.tag](h, d);
				var p = h.childNodes;
				e[d.tag] && (p[4].innerHTML = e[d.tag]);
				"NINTEI" != d.tag && (p[5].innerHTML = c(d));
				p[5].style.margin = pb(("AGARI" != d.tag ? 2 : .5) * a) + " " + pb(.5 * a) + " " + pb(a);
				"AGARI" == d.tag || "RYUUKYOKU" == d.tag ? (a = qb(h), a.b = Math.max(.7 * N.Ra, a.b), h.style.width =
					200 * Math.ceil(a.b / 2) / (h.parentNode.offsetWidth * ob) + "%", h.style.height = 200 * Math.ceil(a.h / 2) / (h.parentNode.offsetHeight * ob) + "%") : (p[4].style.margin = pb(2 * a) + " 0 " + pb(3 * a), h.style.minWidth = "70%");
				a = (T.u & 8 ? 7 : 3) - (T.u & 16 ? 1 : 0);
				console.log(d, a, T.J);
				var q = "TAIKYOKU" == d.tag ? T.Jb + 5E3 : 0 == T.J[0] && 0 == T.J[1] ? T.Jb : a <= T.J[0] ? T.tc : T.oc;
				h.style.transform = "translate(-50%,-50%) scale(" + ("NINTEI" == d.tag || "OWARI" == d.tag ? 1 : .95) + ")";
				$b(function () {
					n(h.style, {
						transition: "all " + ("NINTEI" == d.tag ? 3E3 : "OWARI" == d.tag ? 1500 : U.ua ? 1 :
							150) + "ms ease-out", opacity: "", transform: h.style.transform.replace(/scale\([^\)]*\)/, "scale(1.0)")
					});
					if (3 != T.a && "AGARI" == d.tag) {
						p[6].disabled = !0;
						fb([p[3].style, p[4].style, p[5].style], {opacity: 0});
						for (var a = h.querySelectorAll(".yk,.ym"), b = h.querySelectorAll(".hn"), c = 0; c < a.length; ++c) n(a[c].style, {
							transform: "scale(2.5)",
							opacity: 0
						}), n(b[c].style, {transform: "scale(2.5)", opacity: 0});
						cc(h, function () {
							bc(h);
							if (h.childNodes.length) for (var c = d.yakuman ? 3E3 : 750, e = 0; e < a.length; ++e) {
								e == a.length - 1 && d.doraHaiUra &&
								(c += 650);
								var f = a[e].classList.contains("ym") ? 3E3 : 300;
								n(a[e].style, {transition: "all " + f + "ms ease-out " + c + "ms", opacity: "", transform: ""});
								n(b[e].style, {transition: "all " + f + "ms ease-out " + c + "ms", opacity: "", transform: ""});
								cc(a[e], bc);
								cc(b[e], bc);
								E(d.yakuman && 0 == e ? 1028 : 109, 0, c);
								e == a.length - 1 && (fb([p[3].style, p[4].style, p[5].style], {
									transition: "all " + f + "ms ease-out " + c + "ms",
									opacity: ""
								}), cc(p[3], bc), cc(p[4], bc), cc(p[5], bc), (2 != T.a || m.length) && U.qa([{
									O: c + f, sa: function () {
										1 != T.a || d.owari || jc.v(-q, p[6]);
										p[6].disabled =
											!1;
										console.log("popup end")
									}
								}]));
								c += f + 550
							}
						})
					} else cc(h, function () {
						bc(h);
						1 != T.a || d.owari || "OWARI" == d.tag || p[6].disabled || jc.v(-q, p[6])
					})
				}, 1)
			}
		}

		var e = {TAIKYOKU: "對局", SAIKAI: "再開", KANSEN: "觀戰", RYUUKYOKU: "流局", OWARI: "終局", NINTEI: "認定"}, l = {
			NINTEI: function (a, b) {
				var c = b.nintei,
					d = "%E6%96%B0%E4%BA%BA %EF%BC%99%E7%B4%9A %EF%BC%98%E7%B4%9A %EF%BC%97%E7%B4%9A %EF%BC%96%E7%B4%9A %EF%BC%95%E7%B4%9A %EF%BC%94%E7%B4%9A %EF%BC%93%E7%B4%9A %EF%BC%92%E7%B4%9A %EF%BC%91%E7%B4%9A %E5%88%9D%E6%AE%B5 %E4%BA%8C%E6%AE%B5 %E4%B8%89%E6%AE%B5 %E5%9B%9B%E6%AE%B5 %E4%BA%94%E6%AE%B5 %E5%85%AD%E6%AE%B5 %E4%B8%83%E6%AE%B5 %E5%85%AB%E6%AE%B5 %E4%B9%9D%E6%AE%B5 %E5%8D%81%E6%AE%B5 %E5%A4%A9%E9%B3%B3%E4%BD%8D".split(" "),
					e = !1, f = -1, g = "", l = "20201010";
				c.match(/%E3%82%B5%E3%83%B3%E3%83%9E/) && (e = !0);
				c.match(/ ((?:%[0-9A-F]{2})+)%0A%0A/) && (f = d.indexOf(RegExp.$1));
				c.match(/%0A%0A([^ ]+) %E6%AE%BF%0A/) && (g = decodeURIComponent(RegExp.$1));
				c.match(/%0A%0A(\d{4})%E5%B9%B4(\d{2})%E6%9C%88(\d{2})%E6%97%A5%0A/) && (l = RegExp.$1 + RegExp.$2 + RegExp.$3);
				c = decodeURIComponent(c);
				0 < f && g && (c = (e ? P(361) : P(360)).replace(/\$UNAME/g, g).replace(/\$DAN/g, decodeURIComponent(d[f])).replace(/\$YYYY/g, l.substr(0, 4)).replace(/\$MM/g, l.substr(4, 2)).replace(/\$DD/g,
					l.substr(6, 2)));
				c = c.replace(/\n/g, "<br>");
				a.childNodes[5].innerHTML = "<div style='text-align:left;margin:1em 0;display:inline-block;'>" + c + "</div>"
			}, SAIKAI: function () {
				Eb("BUTTON[name=c6]").disabled = !0
			}, KANSEN: function (a, b) {
				var c = Eb("BUTTON[name=c6]");
				c.innerText = decodeURIComponent(b.msg || "WAIT");
				c.disabled = !0
			}, AGARI: function (a, b) {
				E(101, 0, 0);
				b.ten = t(b.ten);
				b.chip = t(b.chip);
				for (var c = b.who != b.fromWho, d = 0, e = 0; e < b.chip.length; e += 2) d += b.chip[e + 1];
				var d = d ? d + H(c ? "枚" : "枚∀") : "", g;
				g = c ? b.ten[1] +
					H("点") : ja[(T.u & 16 ? 0 : 2) + (T.za == b.who ? 1 : 0)][b.ten[1]] + H(T.za == b.who ? "点∀" : "点");
				var f = a.childNodes;
				Ic.sd(f[0].getContext("2d"), b.machi, t(b.hai), t(b.m));
				f[0].classList.remove("nodisp");
				var l = "", m = [];
				if (b.yakuman) {
					b.yakuman = t(b.yakuman);
					l += H("役滿") + g + d;
					for (e = 0; e < b.yakuman.length; e += 1) m.push([b.yakuman[e], 2 * e < b.chip.length ? b.chip[2 * e + 1] + H("枚") : ""]);
					for (e *= 2; e < b.chip.length; e += 2) m.push([b.chip[e + 0], b.chip[e + 1] + H("枚")])
				} else {
					b.yaku = t(b.yaku);
					for (var F = ea[b.ten[2]], L =
						0, e = 0; e < b.yaku.length; e += 2) L += b.yaku[e + 1];
					if (30 == b.ten[0] && 4 == L || 60 == b.ten[0] && 3 == L) !c && T.u & 16 ? b.ten[1] == (T.za == b.who ? 8E3 : 6E3) && (F = ea[1]) : b.ten[1] == (T.za == b.who ? 12E3 : 8E3) && (F = ea[1]);
					~T.u & 2048 && (l += (F ? "" : b.ten[0] + H("符") + L + H("飜")) + H(F) + g + d);
					for (c = e = 0; e < b.yaku.length; e += 2) d = b.yaku[e + 1] + H(T.u & 2048 ? "点" : "飜"), c < b.chip.length && b.yaku[e + 0] == b.chip[c + 0] && (d += b.chip[c + 1] + H("枚"), c += 2), m.push([b.yaku[e + 0], d])
				}
				f[4].innerHTML = l;
				f[4].style.fontSize = "250%";
				l = "<table cellpadding=0 cellspacing=0 style='width:100%;font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:150%;'><tr>";
				e = 4 > m.length ? 0 : Math.ceil(m.length / 2);
				for (c = 0; c < m.length; ++c) {
					if (0 == c || c == e) l += "<td width=50% align=center valign=top><table cellpadding=0 cellspacing=0>";
					l += "<tr>";
					d = m[c][0];
					l += "<td align=left><div class='" + (37 <= d && 51 >= d ? "ym" : "yk") + "'>" + ka[m[c][0]] + "</div></td>";
					l += "<td align=left><div class='hn'>　" + m[c][1] + "</div></td>";
					l += "</tr>";
					if (c == e - 1 || c == m.length - 1) l += "</table></td>"
				}
				f[2].innerHTML = l + "</tr></table>";
				Ic.Ic(f[1].getContext("2d"), t(b.doraHai));
				f[1].classList.remove("nodisp");
				b.doraHaiUra &&
				(Ic.Ic(f[3].getContext("2d"), t(b.doraHaiUra)), f[3].classList.remove("nodisp"))
			}, RYUUKYOKU: function (a, b) {
				var c = a.childNodes;
				b.type && (c[4].innerHTML = fa[b.type])
			}, OWARI: function () {
				qc.$b();
				N.hb.style.display = "none";
				nc()
			}
		}, m = [];
		return {
			Gd: function () {
				return !m.length
			}, Vd: a, Hc: function () {
				m = []
			}, Fb: function (a) {
				m.push(a)
			}, hc: function () {
				N.Ga || a()
			}, eb: function (a) {
				var b = N.Ga;
				b ? b.classList.contains("s3") || (b.classList.add("s3"), n(b.style, {
					transition: "all " + (U.ua ? 1 : 400) + "ms ease-out 0ms",
					opacity: 0,
					transform: b.style.transform.replace(/scale\([^\)]*\)/,
						"scale(0.9)")
				}), cc(b, function () {
					b.parentNode.parentNode.removeChild(b.parentNode);
					N.Ga = null;
					a && $b(a, 1)
				})) : a && a()
			}
		}
	}();
	var T = {
		a: 0,
		u: 0,
		s: 0,
		I: [],
		Sa: [],
		Na: [],
		Ha: ["", "", "", ""],
		za: -1,
		J: [],
		Vb: [],
		Pc: [],
		dc: [],
		Fa: !1,
		Ia: [],
		ma: [],
		mb: [{}, {}, {}, {}],
		connected: 0,
		ya: [],
		kc: 0,
		lc: 0,
		Jb: 0,
		mc: 0,
		nc: 0,
		oc: 0,
		pc: 0,
		qc: 0,
		tc: 0,
		INIT: function (b) {
			T.za = ~~b.oya;
			T.J = t(b.seed);
			T.Ia = t(b.ten);
			T.Vb = t(b.chip);
			T.ma = [-1, -1, -1, -1];
			T.mb = [{}, {}, {}, {}];
			T.ya = [[], [], [], []];
			T.Qc();
			T.Fa = !1
		},
		Qc: function () {
			for (var b = 0, d = 0; 4 > d; ++d) {
				var c = (T.za + d) % 4;
				T.I[c] && (T.Pc[c] = b, T.dc[c] = "東南西北".substr(b, 1), ++b)
			}
		}
	};
	var S = function () {
		function b(a) {
			if (c.length) {
				if (c[0] != a) throw Kb("INVALID TAG " + JSON.stringify(c[0]) + " " + JSON.stringify(a));
				delete c[0][0];
				c.shift();
				d()
			}
		}

		function d() {
			if (c.length) if (c[0][0]) console.log("RUNNING", c[0]); else {
				var a = c[0];
				c[0][0] = 1;
				S[a.tag] || console.log(a);
				S[a.tag](a) && b(a)
			}
		}

		var c = [];
		return {
			Ma: b, Aa: function (a) {
				c.push(a);
				1 == c.length && d()
			}, qd: function () {
				c.length && console.log("%conXML::clearQ", "color:#F00;", c);
				c = []
			}, ERR: function (a) {
				var b = ~~a.code;
				a = "(ERR" + b + ")";
				var c = 1;
				switch (b) {
					case 1001:
					case 1002:
					case 1003:
					case 1004:
					case 1005:
					case 1006:
					case 1012:
					case 1019:
					case 1021:
						xc.Hb(!1);
						break;
					case 1020:
						c |= 2;
						J.c19();
						break;
					case 1027:
						a = ""
				}
				Tb.v(P(b) + a, c, function () {
					switch (b) {
						case 1019:
							J.c9();
							break;
						case 1020:
							J.c27()
					}
				});
				return 1
			}, TRAININGINIT: function (a) {
				console.log(a.tag, a);
				return 1
			}
		}
	}();

	function gd(b) {
		Y.ga([b.vb]);
		delete b.va
	}

	function hd(b) {
		Y.ga([b.wa]);
		delete b.sa
	}

	function id(b, d, c, a, e, l) {
		var m = N.P.canvas.width / 1024, g = Y.xa(a), f = g.S, k, h, p = !1;
		switch (a[0]) {
			case 121:
				var q = a[3];
				k = g.c.i.x + 200 * (1 == q ? 1 : 3 == q ? -1 : 0) * m;
				h = g.c.i.y + 200 * (0 == q ? 1 : 2 == q ? -1 : 0) * m;
				break;
			case 116:
				var r = c[1], q = c[3], p = Y.xa([121, r % 40 % 17 + 17, 136, q]), f = p.S;
				k = p.c.i.x;
				h = p.c.i.y;
				p = !0;
				break;
			case 107:
			case 110:
				if (!c) throw 0;
				var u = c[0], r = c[1], q = c[3], q = X[u][q][r];
				k = q.c.i.x + q.offsetX;
				h = q.c.i.y + q.offsetY;
				Y.ga([c]);
				U.od(c);
				p = !0;
				c = void 0
		}
		u = a[0];
		r = a[1] % 40;
		q = a[3];
		q = X[u][q][r];
		g = {
			alpha: .125, Ha: k, qb: h, Ab: g.c.i.x + q.offsetX,
			Bb: g.c.i.y + q.offsetY
		};
		p && (b.push(U.Mb(n(n({}, g), {S: f, O: d + 0}), e * m, l)), b.push(U.Mb(n(n({}, g), {
			S: f,
			O: d + 24
		}), e * m, l)));
		g = n(g, {S: f, alpha: .25, O: d + 12 * (p ? 1 : 0), wa: a, sa: hd});
		c && n(g, {vb: c, va: gd});
		b.push(U.Mb(g, e * m, l));
		return g
	}

	n(S, function () {
		function b(a) {
			kc.Fb(a);
			if (a.owari) {
				M.removeItem("gpid");
				kc.Fb({tag: "OWARI", sc: a.owari});
				a:{
					var b = a.owari;
					if (1 == T.a) {
						var c = (~~M.lognext + 40 - 1) % 40, d = M["log" + c];
						if (d) {
							try {
								d = JSON.parse(d)
							} catch (u) {
								break a
							}
							d.sc || (d.sc = b, M["log" + c] = JSON.stringify(d))
						}
					}
				}
				V.L()
			}
			$b(kc.hc, 3 != T.a && "AGARI" == a.tag ? 1E3 : 0)
		}

		function d() {
			if (255 != g) {
				var a = k, b = Qc(X[107][a], 25, 0, g, -1);
				0 <= b && U.qa([{ca: [107, b, -1, a], O: 0, Z: 500}])
			}
		}

		var c = {84: 0, 85: 1, 86: 2, 87: 3, 116: 0, 117: 1, 118: 2, 119: 3}, a = {100: 0, 101: 1, 102: 2, 103: 3},
			e = [15, 5, -15, -5],
			l = [5, -15, -5, 15], m = gb({}, [2, 1, 4, 1, 5, 1, 10, 1]), g = 255, f = !1, k = -1;
		gb(J, ["c4", function (a) {
			var b = X[116][0];
			-1 != a && (b[a].w & 64 || ~b[a].w & 16) && (a = -1);
			if (sc.kb) {
				for (var c = [], d = 0; 14 > d; ++d) d != a && b[d].w & 32 && c.push(d);
				-1 != a && c.push(a);
				-1 == a && c.length && (a = c[0]);
				2 == c.length ? (rc.L(), jc.L(), sc.ta(), tc.oa(), a = b[c[0]].l, b = b[c[1]].l, V.K({
					tag: "N",
					type: a >> 2 == b >> 2 ? 1 : 3,
					hai0: a,
					hai1: b
				})) : -1 != a && (c = Pb(), Y.na([116, a, -1, 0], 32, b[a].w ^ 32, c), Ic.ia(c), sc.ta(sc.kb))
			} else -1 != a && 255 != b[a].l && J.c21(b[a].l)
		}, "c21", function (a) {
			rc.L();
			jc.L();
			sc.ta();
			tc.oa();
			var b = {tag: "D", p: a};
			1 == T.a && V.K(b);
			b[1] = a;
			S.Aa(b)
		}]);
		return {
			SHUFFLE: function (a) {
				console.log(a);
				return 1
			}, UN: function (a) {
				if (3 <= !!a.n0 + !!a.n1 + !!a.n2 + !!a.n3) {
					T.I = ["", "", "", ""];
					for (var b = 0; 4 > b; ++b) T.I[b] = decodeURIComponent(a["n" + b]).replace("Ⓟ", "ⓟ").replace("Ⓢ", "ⓢ");
					T.Sa = t(a.dan ? a.dan : ",,,");
					T.Na = t(a.rate ? a.rate : ",,,");
					T.Ha = (a.sx ? a.sx : ",,,").split(",");
					if (1 != T.a && (J.c1() || W.o & 32)) for (b = 0; 4 > b; ++b) {
						if (a = T.I[b]) (a = T.I[b]) && a.length ? (a = a.charCodeAt(0), a = 9372 <= a && 9397 >=
							a || 9398 <= a && 9423 >= a || 9424 <= a && 9449 >= a) : a = !1, a = !(a || 20 <= T.Sa[b]);
						a && (a = (K.tw + b) % 4, T.I[b] = 3 == T.a && a == K.TW ? "私" : "ABCD".substr(a, 1) + "さん")
					}
					oc.xc()
				} else a.n0 && (T.connected |= 1), a.n1 && (T.connected |= 2), a.n2 && (T.connected |= 4), a.n3 && (T.connected |= 8), pc.sb();
				return 1
			}, BYE: function (a) {
				T.connected &= ~(1 << ~~a.who);
				pc.sb();
				return 1
			}, TAIKYOKU: function (a) {
				vc(function () {
					T.connected = 15;
					T.za = ~~a.oya;
					if (3 == T.a) V.L(); else if (2 != T.a && 1 == T.a && a.log) {
						var b = ~~M.lognext;
						M["log" + b] = JSON.stringify({
							type: T.u, lobby: T.s,
							log: a.log, oya: T.za, uname: T.I
						});
						M.lognext = (b + 1) % 40
					}
					uc.Md();
					Wc.Ca();
					T.Qc();
					f = "SAIKAI" != a.tag && T.u & 1 && 3 != T.a;
					kc.Hc();
					kc.eb(function () {
						kc.Fb(a);
						kc.hc();
						S.Ma(a)
					})
				})
			}, INIT: function (a) {
				if (0 == T.a) return 1;
				kc.Hc();
				if (N.Ga) return kc.eb(function () {
					S.INIT(a)
				});
				g = 255;
				k = -1;
				Jc.Da();
				var b = "REINIT" == a.tag || 3 == T.a;
				b ? (Ic.pb = !0, U.ua = !0, X = Uc[1], nc(!0), f = !1) : (nc(), Wc.Ca(), f && (E(112, 0, 0), f = !1), 1 == T.a && (Gb("c37"), Gb("c39"), Gb("c38")));
				T.INIT(a);
				R.fe(a[5]);
				pc.sb();
				pc.Kb(k);
				pc.Lb();
				qc.$b();
				jc.Ed();
				N.hb.style.display = "none";
				3 == T.a && (B("c36").disabled = "");
				Yc.Wb = !0;
				jd(a, b);
				U.$(function () {
					b && (Ic.pb = !1, U.ua = !1, X = Uc[0], Y.ce(Uc[1]));
					for (var c = 0; 4 > c; ++c) Wc.uc(c);
					pc.Lb();
					tc.oa();
					Yc.Wb = !1;
					S.Ma(a)
				})
			}, DORA: function (a) {
				if (0 == T.a) return 1;
				a = ~~a.hai;
				var b = T.J.length - 5;
				1 < b && (qc.rb(0), qc.rb(1), qc.rb(2), qc.rb(3));
				b = R.Ac((T.u & 2048 ? 20 : T.u & 16 ? 8 : 4) + 2 * b);
				b[2] = a;
				if (3 == T.a && W.o & 8) {
					var c = Pb();
					Y.na(b, 3, 1, c);
					Ic.ia(c)
				}
				Y.ga([b]);
				T.J.push(a);
				return 1
			}, FURITEN: function (a) {
				if (0 == T.a) return 1;
				N.hb.style.display = ~~a.show ? "" : "none";
				return 1
			}, T: function (a) {
				function b() {
					--L ||
					S.Ma(a)
				}

				if (0 == T.a) return 1;
				3 == T.a && lc.Ba();
				d();
				k = c[a.tag.charCodeAt(0)];
				pc.Kb(k);
				var e = T.Fa ? R.Ac(R.Za++) : R.Nb(k);
				T.Fa = !1;
				pc.Lb();
				g = void 0 === a[1] ? 136 : a[1];
				136 > g && Vc.Cc(k, g);
				var h = X[116][k], f = Qc(h, 0, 14, 255, 14),
					l = [116, (1 != T.a && ~W.o & 4 && 0 != k ? 40 : 0) + f, W.o & 4 && 0 != k ? 136 : g, k], m = 0;
				1 != T.a && (~W.o & 4 || 0 == k) && Wc.Va(g) && (m |= 4);
				Y.na(l, -1, m);
				m = Sa[116][k](f, f + 1);
				Y.vc(l, h[f].da + ~~(.1 * m.R), h[f].ea + ~~(.1 * m.ka));
				var L = 0;
				3 != T.a && (++L, $b(b, 750));
				h = [];
				++L;
				id(h, 0, e, l, 0, 120).sa = function (c) {
					hd(c);
					E(105, k, 0);
					0 == k && tc.oa();
					c = ~~a.t;
					3 == T.a || 2 == T.a || k || (c & 16 && Fb("c37", !1) ? V.K({
						tag: "N",
						type: 7
					}) : (c = rc.nd(c, g)) || !Fb("c38", !1) && -1 == T.ma[0] ? (sc.ta(a), tc.oa(), jc.v(0, f)) : (jc.Uc(), J.c21(g)));
					b()
				};
				U.qa(h)
			}, D: function (b) {
				function c() {
					--oa || (Yc.xb(k, 0 == k ? 0 : 600), S.Ma(b))
				}

				if (0 == T.a) return 1;
				var d = a[b.tag.charCodeAt(0)] || g === b[1];
				g = b[1];
				Vc.Bc(k, g);
				var h = X[116][k], f = Qc(h, 0, 14, g, 14);
				if (14 == f) var m = Tc(h, -1), f = d ? m : ~~(m / 2);
				var m = [116, f, 255, k], h = X[107][k], f = Qc(h, 0, 25, 255, 25),
					F = [107, f + (T.ma[k] == f ? 40 : 0), g, k], L = N.P.canvas.width / 1024;
				Y.vc(F, h[f].da +
					~~(e[k] * L), h[f].ea + ~~(l[k] * L));
				h = [];
				m = id(h, 0, m, F, 0, 120);
				m.va = function () {
					Wc.uc(k);
					var a = d && Hc.Nc() ? 2 : 0;
					Wc.Va(g) && (a |= 4);
					Y.na(F, -1, a)
				};
				var oa = 0;
				3 != T.a && (++oa, $b(c, 500));
				++oa;
				m.sa = function (a) {
					hd(a);
					E(103, k, 0);
					a = ~~b.t;
					a & 8 && Fb("c37", !1) ? (~W.o & 64 && E(106, 0, 0), $b(function () {
						V.K({tag: "N", type: 6})
					}, 1E3)) : ~a & 8 && a && Fb("c39", !1) ? V.K({tag: "N"}) : a && (rc.ld(a, g), sc.ta(b));
					c()
				};
				U.qa(h)
			}, N: function (a) {
				function b() {
					--C || (Yc.xb(k, 0), 1 != T.a || 0 != k || T.Fa || (sc.ta(a), jc.v(0, -1)), S.Ma(a))
				}

				if (0 == T.a) return 1;
				rc.L();
				jc.L();
				sc.ta();
				tc.oa();
				a[2] || Ta(a);
				var c = k;
				k = ~~a.who;
				pc.Kb(k);
				var d = -1;
				2 == a[2] && 1 == a[3] ? d = 3 : a[3] && (d = 3 - a[3]);
				var e = a[1], h = [], f = X[110][k], l = T.u & 16 ? 1 : 0;
				if (5 == a[2]) {
					a.tag || S.N({who: k, m: a.m ^ 24});
					for (l in T.mb[k]) if (f[l].l >> 2 == e[0] >> 2) break;
					l = ~~l
				} else 10 == a[2] ? (T.ya[k].push(e[0]), qc.rb(k), l = 0) : l = Qc(f, l, 18, 255, 18);
				T.Fa = !!m[a[2]];
				for (f = e.length - 1; 0 <= f; --f, ++l) {
					var oa = e[f];
					0 != a[3] || 4 != e.length || 0 != f && 3 != f || (oa = 136);
					h[f] = {wa: [110, (5 == a[2] ? 98 : d != f ? 0 : 0 == f ? 120 : 40) + l, oa, k]};
					var la = 0;
					Wc.Va(oa) && (la |= 4);
					Y.na(h[f].wa, 7, la);
					d ==
					f && (T.mb[k][l] = !0)
				}
				Gc.$a(k);
				if (!a.tag) {
					for (f = 0; f < h.length; ++f) hd(h[f]);
					return 1
				}
				for (f = d = 0; f < e.length; ++f) 1 < e.length && 0 != a[3] && e[f] == g ? (l = Qc(X[107][c], 25, 0, g, -1), h[f].vb = [107, l, 255, c]) : (l = Qc(X[116][k], 0, 14, e[f], 14), 14 == l && (l = d), h[f].vb = [116, l, 255, k], Vc.Bc(k, e[f]), ++d);
				E(113, k, 0);
				3 != T.a && lc.Qa(k, a[2]);
				for (var C = 1, c = [], f = 0; f < h.length; ++f) ++C, id(c, 0, h[f].vb, h[f].wa, 3.1, 0).va = function () {
					b()
				};
				U.qa(c);
				b();
				(h = ~~a.t) && rc.md(h)
			}, VOICE: function (a) {
				a = a.type;
				for (var b = 0; 4 > b; ++b) lc.Qa(b, a[b]);
				return 1
			}, REACH: function (a) {
				if (0 ==
					T.a) return 1;
				k = ~~a.who;
				a.ten && (T.Ia = t(a.ten));
				if (1 == a.step) lc.Qa(k, 8), T.ma[k] = Qc(X[107][k], 0, 25, 255, 25), Hc.$a(k), 1 == T.a && 0 == k && (sc.ta(a), tc.oa(), jc.v(0, -1)), $b(function () {
					S.Ma(a)
				}, 1 == T.a || 2 == T.a ? 1E3 : 0); else return 2 == a.step && (Wc.uc(k), T.J[2]++, pc.sb()), 1
			}, AGARI: function (a) {
				if (0 == T.a) return 1;
				rc.L();
				jc.L();
				sc.ta();
				tc.oa();
				d();
				if (3 == T.a) lc.Ba(); else {
					var c = ~~a.who;
					lc.Qa(c, c == a.fromWho ? 7 : 6);
					void 0 !== a.paoWho && lc.Qa(~~a.paoWho, 11)
				}
				b(a);
				return 1
			}, RYUUKYOKU: function (a) {
				if (0 == T.a) return 1;
				d();
				if (3 == T.a) lc.Ba();
				else if ("ron3" == a.type) for (var c = 0; 4 > c; ++c) a["hai" + c] && lc.Qa(c, 6);
				Yc.Nd(a);
				b(a);
				return 1
			}, PROF: function () {
				return 1
			}
		}
	}());
	S.W = S.V = S.U = S.T;
	S.g = S.f = S.e = S.d = S.G = S.F = S.E = S.D;
	S.KANSEN = S.SAIKAI = S.TAIKYOKU;
	S.REINIT = S.INIT;

	function jd(b, d) {
		if (3 == T.a && W.o & 8) U.$(function () {
			for (var a = K.tw + 1, b = Cc(), c = [], e = 0; 34 > e; ++e) for (var f = 0; 4 > f; ++f) {
				var h = R.ge(f, e), g = h & 255, h = (h & 3840) >> 8, h = h == a ? 3 : 5 == h ? 2 : 0;
				Wc.Va(g) && (h |= 4);
				g = [121, 40 + (e >> 1) + 17 * (~e & 1), g, f];
				Y.na(g, -1, h);
				g = id(c, 14 * (4 * (e >> 1) + f), void 0, g, 2, 0);
				!d && e & 1 && b(104, f, g.Z + 10 * Math.random())
			}
			U.qa(c)
		}); else if (d) for (var c = 0; 4 > c; ++c) {
			for (var a = [], e = 0; 17 > e; ++e) a.push([121, 0 + e, 136, c]);
			Y.ga(a)
		} else U.$(function () {
			Jc.Da("yama-0");
			for (var a = 0; 17 > a; ++a) for (var b = 0; 4 > b; ++b) Y.xa([121, 0 + a, 136, b]);
			Jc.Da("yama-1")
		}), U.$(function () {
			for (var a = Cc(), b = [], c = 0; 17 > c; ++c) for (var d = 0; 4 > d; ++d) {
				var e = id(b, 14 * (4 * c + d), void 0, [121, 0 + c, 136, d], 2, 0);
				a(104, d, e.Z + 10 * Math.random())
			}
			U.qa(b)
		}), U.$(function () {
			Jc.Da("yama-2")
		});
		U.$(function () {
			for (var a = T.J.splice(5); a.length;) S.DORA({hai: a.shift()})
		});
		U.$(function () {
			var a = R.zc(120), b = X[121][a[3]], c = a[1] % 40 % 17;
			if (0 != c) {
				for (var d = Pb(), e = 3 == T.a && W.o & 8 ? 1 : 0; 0 <= e; --e) {
					var f = b[c + 17 * e];
					f.c && Pc(d, f);
					f.H && Rc(d, f);
					b[c + 17 * e - 1].c && (b[c + 17 * e - 1].H = b[c + 17 * e - 1].c.X[0]);
					b[c + 17 * e - 1].H &&
					Rc(d, b[c + 17 * e - 1]);
					f.H && (f.fa = f.c.X[2])
				}
				a = Sa[121][a[3]](c);
				a.R = ~~(.2 * a.R);
				for (a.ka = ~~(.2 * a.ka); 17 > c; ++c) e = b[c + 0], f = b[c + 17], e.offsetX = e.da = a.R, e.offsetY = e.ea = a.ka, f.offsetX = f.da = a.R, f.offsetY = f.ea = a.ka, 16 == c && (Pc(d, e), Rc(d, e), f.c && Pc(d, f), f.H && Rc(d, f));
				Ic.ia(d)
			}
		});
		for (var l = [0, 0, 0, 0], c = 0; 4 > c; ++c) T.I[c] || (l[c] += 136 - (T.u & 2048 ? 112 : 108));
		e = [13, 13, 13, 13];
		for (c = 0; 4 > c; ++c) b["m" + c] && (b["m" + c] = t(b["m" + c]));
		T.Fa = !1;
		for (c = 0; 4 > c; ++c) if (a = b["m" + c]) for (var m = a.length - 1; 0 <= m; --m) {
			var g = {who: c, m: a[m]};
			S.N(g);
			switch (g[2]) {
				case 1:
				case 2:
				case 3:
				case 4:
					e[c] -=
						3
			}
			T.Fa && (++R.Za, T.Fa = !1);
			++l[(c + g[3]) % 4];
			--l[c]
		}
		U.$(function () {
			for (var a = 0; a < R.Za; ++a) Y.ga([R.Ac(a)])
		});
		g = [t(b.kawa0), t(b.kawa1), t(b.kawa2), t(b.kawa3)];
		a = [];
		for (c = 0; 4 > c; ++c) {
			for (var f = 0, k = !1, m = 0; m < g[c].length; ++m) {
				var h = g[c][m];
				if (255 == h) T.ma[c] = f; else if (254 == h) k = !0; else {
					var p = [107, f + (T.ma[c] == f ? 40 : 0), h & 255, c];
					a.push(p);
					k = k && Hc.Nc() ? 2 : 0;
					Wc.Va(h) && (k |= 4);
					Y.na(p, -1, k);
					++l[c];
					++f;
					k = !1
				}
			}
			-1 != T.ma[c] && Hc.$a(c)
		}
		Y.ga(a);
		for (c = 0; 4 > c; ++c) Yc.Yc(c, e[c]);
		for (var q = [[], [], [], []], c = 0; 4 > c; ++c) if (T.I[c]) for (m = 0; m <
		e[c]; ++m) q[c].push(136);
		b.hai && (q[0] = t(b.hai));
		b.hai0 && (q[0] = t(b.hai0));
		b.hai1 && (q[1] = t(b.hai1));
		b.hai2 && (q[2] = t(b.hai2));
		b.hai3 && (q[3] = t(b.hai3));
		for (c = 0; 4 > c; ++c) for (T.I[c] && (l[c] += 13 - q[c].length), Vc.Ca(c), m = 0; m < q[c].length; ++m) 136 > q[c][m] && Vc.Cc(c, q[c][m]);
		d ? U.$(function () {
			for (var a = 0; 4 > a; ++a) T.I[a] && (l[a] += q[a].length);
			for (a = 0; 4 > a; ++a) {
				for (var b = [], c = 0; c < l[a]; ++c) b.push(R.Nb(a));
				Y.ga(b)
			}
			for (a = 0; 4 > a; ++a) if (T.I[a]) {
				q[a].sort(function (a, b) {
					return a - b
				});
				b = [];
				for (c = 0; c < q[a].length; ++c) {
					var d = W.o & 4 &&
					0 != a ? 136 : q[a][c], e = [116, (1 != T.a && ~W.o & 4 && 0 != a ? 40 : 0) + c, d, a];
					b.push(e);
					var f = 0;
					Wc.Va(d) && (f |= 4);
					Y.na(e, -1, f)
				}
				Y.ga(b)
			}
		}) : (U.$(function () {
			for (var a = 0; 4 > a; ++a) {
				for (var b = [], c = 0; c < l[a]; ++c) b.push(R.Nb(a));
				Y.ga(b)
			}
		}), U.$(function () {
			Jc.Da("haipai-0");
			for (var a = 0; 4 > a; ++a) if (T.I[a]) for (var b = 0; b < q[a].length; ++b) Y.xa([116, (1 != T.a && ~W.o & 4 && 0 != a ? 40 : 0) + b, W.o & 4 && 0 != a ? 136 : q[a][b], a]);
			Jc.Da("haipai-1")
		}), U.$(function () {
			for (var a = Cc(), b = [], c = 0; 52 > c; ++c) {
				var d = ~~(48 > c ? c >> 2 : 12 + (c & 3)), e = (48 > c ? c >> 2 : c) & 3;
				if (T.I[e]) {
					var f =
							48 > c ? 4 * ~~(c / 16) + c % 4 : 12, h = R.Nb(e),
						d = id(b, 80 * d, h, [116, (1 != T.a && ~W.o & 4 && 0 != e ? 40 : 0) + f, W.o & 4 && 0 != e ? 136 : q[e][f], e], 3.1, 0);
					a(104, 0, d.Z + 10 * Math.random())
				}
			}
			U.qa(b)
		}), U.$(function () {
			Jc.Da("haipai-2")
		}));
		d || (U.$(function () {
			for (var a = Cc(), b = 0; 4 > b; ++b) {
				for (var c = [], d = X[116][b], e = 0; 14 > e; ++e) c.push({l: d[e].l, Ja: e});
				c.sort(function (a, b) {
					return a.l - b.l
				});
				for (var f = [], h = [], e = 0; 14 > e; ++e) if (e != c[e].Ja) {
					var g = c[e].Ja, k = [116, e + (0 != b ? 40 : 0), c[e].l, b], k = {
						S: Y.xa(k).S, Ha: d[g].c.i.x + d[g].offsetX, qb: d[g].c.i.y + d[g].offsetY, Ab: d[e].c.i.x +
							d[e].offsetX, Bb: d[e].c.i.y + d[e].offsetY, alpha: .8, O: 0, wa: k, sa: hd
					};
					U.Mb(k, 1.9 * ob);
					f.push(k);
					a(104, 0, k.Z);
					h.push([116, g, 255, b])
				}
				Y.ga(h);
				U.qa(f)
			}
		}), U.$(function () {
			Jc.Da("sort-2")
		}))
	};var mc = function () {
		function b(b) {
			if (!a.length) return 0;
			d += b;
			if (d < c) return 1;
			b = a.shift();
			b.tag ? S.Aa(b) : c += ~~b;
			return 1
		}

		var d, c, a = [];
		S.WGC = function (e) {
			if (2 == T.a) {
				Yb().ee || (d = c = 0, Yb().ee = b);
				e = e.childNodes;
				for (var l = 0; l < e.length; ++l) e[l].tag && fc.Ib(e[l]);
				Array.prototype.push.apply(a, e);
				return 1
			}
		};
		return {
			Ba: function () {
				d = c = 0;
				a = []
			}
		}
	}();
	S.INITBYLOG = function (b) {
		b = b.childNodes;
		for (var d = 0; d < b.length; ++d) fc.Ib(b[d]);
		S.Aa(hc(b, 0, -1));
		return 1
	};
	n(S, {
		HELO: function (b) {
			if (b.closing) return location.reload(), 1;
			if (K.wg) return B("c55").parentNode.style.display = "none", B("c66").parentNode.style.display = "", V.K({
				tag: "WG",
				id: K.wg,
				tw: K.tw
			}), 1;
			if (b.nintei) return vc(function () {
				b.tag = "NINTEI";
				kc.Fb(b);
				kc.hc()
			}), 1;
			K.s = 0;
			location.search.match(/^\?L([1-9][0-9]{3})/) ? (V.K({
				tag: "LOBBY",
				id: RegExp.$1
			}), K.s = ~~RegExp.$1) : location.search.match(/^\?(C[0-9]{8})/) ? (K.s = ~~("1" + RegExp.$1.substr(1, 4)), V.K({
				tag: "CS",
				lobby: RegExp.$1
			}), V.Oa = -1, V.K('<PXR V="-1" />')) : K.s =
				0;
			vc(function () {
				wc(Z.ac, b, function () {
					S.Ma(b)
				})
			})
		}, REHELO: function () {
			V.L();
			setTimeout(J.c8, 5E3);
			return 1
		}, LN: Z.fd, REJOIN: function (b) {
			return V.K({tag: "JOIN", t: b.t}), 1
		}, CHAT: function (b) {
			return Z.cd(b), 1
		}, CS: function (b) {
			return cd.dd(b), 1
		}, DATE: function (b) {
			return cd.ed(b), 1
		}, RANKING: function (b) {
			b.rankingcs ? cd.ae(b) : bd.yc(b);
			return 1
		}, GO: function (b) {
			B("c55").parentNode.style.display = "none";
			B("c66").parentNode.style.display = "";
			b.gpid && (M.gpid = b.gpid);
			T.u = ~~b.type;
			T.s = ~~b.lobby;
			if (K.log) T.a = 3; else if (b.kansen) T.a =
				2, V.K({tag: "GOK"}); else if (T.a = 1, V.K({tag: "GOK"}), 0 == T.s && T.u & 1) {
				var d = ad();
				d[3] = d[4] = T.u;
				M.rule = d
			}
			T.kc = T.mc = T.pc = 1E3 * (aa(T.s, T.u) ? 3 : 5);
			T.lc = T.nc = T.qc = 1E3 * (aa(T.s, T.u) ? 5 : 10);
			T.Jb = T.oc = T.tc = 5E3;
			b = ("" + (b.csrule || "")).split(",");
			0 < b[36] && (T.kc = 1E3 * ~~b[36]);
			0 < b[37] && (T.lc = 1E3 * ~~b[37]);
			0 < b[38] && (T.Jb = 1E3 * ~~b[38]);
			0 < b[39] && (T.mc = 1E3 * ~~b[39]);
			0 < b[40] && (T.nc = 1E3 * ~~b[40]);
			0 < b[41] && (T.oc = 1E3 * ~~b[41]);
			0 < b[42] && (T.pc = 1E3 * ~~b[42]);
			0 < b[43] && (T.qc = 1E3 * ~~b[43]);
			0 < b[44] && (T.tc = 1E3 * ~~b[44]);
			return 1
		}
	});
	var tc = function () {
		function b() {
			var a = k;
			a:{
				for (var b = 2 == l ? a : -1, c = N.P.canvas, d = qb(c), h = (m * ob - d.x) / d.b * c.width, c = (g * ob - d.y) / d.h * c.height, d = X[116][0], p = 0; 14 > p; ++p) {
					var q = d[e[p]];
					if (q.c) {
						var C = q.c.i;
						if (c && (c < C.y + q.ea || C.y + C.h + q.ea <= c)) break;
						if (C.x + q.da <= h && h < C.x + C.b + q.da) {
							k = e[p];
							break a
						}
					}
				}
				k = b
			}
			b = f;
			f = !1;
			if (b && k == a) return a;
			b = Pb();
			for (h = 0; 14 > h; ++h) Y.na([116, h, -1, 0], 8, h == k ? 8 : 0, b);
			Ic.ia(b);
			return a
		}

		function d(a) {
			if (-1 != a && -1 != k && a != k) {
				for (1 == T.a && Gb("c40"); a != k;) {
					var b = a < k ? 1 : -1;
					Yc.xb(0, 0, a, a + b);
					a += b
				}
				l = 2;
				h =
					!1
			}
		}

		function c(a) {
			if (1 == T.a && !Eb(".dropdown.s2")) {
				if (2 != l) if (2 == a.button || 3 == a.which) {
					var b = 0;
					W.o & 128 && (b |= 1);
					W.o & 256 && (b |= 2);
					jc.wb(b)
				} else if (!(a.target && a.target.classList && a.target.classList.contains("s7"))) {
					var c = sc.Bd();
					-1 == c && (350 > Date.now() - p && (b = 0, W.o & 512 && (b |= 1), W.o & 1024 && (b |= 2), jc.wb(b)), p = Date.now());
					h && (J.c4(c), "touchend" == a.type && (m = g = 0))
				}
				l = 0
			}
		}

		function a(a) {
			f = !0;
			m = a.pageX;
			g = a.pageY
		}

		var e = [7, 6, 8, 5, 9, 4, 10, 3, 11, 2, 12, 1, 13, 0], l = 0, m = 0, g = 0, f = !1, k = -1, h = !1, p = Date.now(),
			q = Date.now();
		yb(x, {
			touchstart: function (c) {
				c =
					c.changedTouches;
				1 == c.length && (a(c[0]), c = b(), h = sc.kb || c == k, -1 == k || Eb("BUTTON[name=c22-4]") || jc.Rb(k), 1 == T.a && (l = -1 != k))
			}, touchmove: function (c) {
				a(c.changedTouches[0]);
				c = b();
				d(c)
			}, touchend: function (a) {
				q = Date.now();
				c(a);
				h = !1
			}, touchcancel: function () {
			}, mousemove: function (c) {
				a(c);
				l ? (c = b(), d(c)) : tc.oa()
			}, mousedown: function () {
				100 > Date.now() - q || (1 == T.a && (l = -1 != k), h = !0)
			}, mouseup: function (a) {
				100 > Date.now() - q || (c(a), h = !1)
			}, keydown: function (a) {
				1 == T.a && 27 == a.keyCode && (a = 0, W.o & 2048 && (a |= 1), W.o & 4096 && (a |= 2), jc.wb(a))
			}
		});
		return {oa: kb(b)}
	}(), kd = {A: 1, BUTTON: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1, OPTION: 1, LABEL: 1};
	gb(J, ["c3", function (b, d) {
		3 == T.a && (b.target.classList && b.target.classList.contains("s0") || ic.ub(function () {
			J.c2(b, d)
		}, !0))
	}, "c2", function (b, d) {
		if (3 == T.a && !Tb.ib() && !Eb(".dropdown.s2")) {
			var c = ic.ib();
			c && (U.ua = !0);
			fc.bb(d);
			c && (U.ua = !1)
		}
	}]);
	yb(x, {
		touchstart: function (b) {
			kd[b.target.tagName] || J.c3(b, 1 < b.targetTouches.length ? -1 : 1)
		}, mousedown: function (b) {
			kd[b.target.tagName] || J.c3(b, 2 == b.button || 3 == b.which ? -1 : 1)
		}, keydown: function (b) {
			switch (b.keyCode) {
				case 39:
					J.c2(b, 1);
					break;
				case 37:
					J.c2(b, -1)
			}
		}
	});
	Ab(mb, "onwheel" in mb ? "wheel" : "onmousewheel" in mb ? "mousewheel" : "DOMMouseScroll", function (b) {
		console.log(b.target.offsetHeight, b.target.scrollHeight);
		for (var d = b.target; d && !(d.offsetHeight < d.scrollHeight); d = d.parentNode) ;
		d || (b.preventDefault(), J.c2(b, 0 > (b.deltaY ? -b.deltaY : b.wheelDelta ? b.wheelDelta : -b.detail) ? 1 : -1))
	});
	yb(x, function () {
		function b(b) {
			b.target.classList && b.target.classList.contains("s0") && b.target.classList.add("s1")
		}

		function d(b) {
			(b = Eb(".s0.s1")) && b.classList.remove("s1")
		}

		return {touchstart: b, mousedown: b, touchend: d, mouseup: d, blur: d}
	}());
	nb.oncontextmenu = function (b) {
		if (b = b.target) {
			if ("A" != b.tagName && "INPUT" != b.tagName && "TEXTAREA" != b.tagName && (!b.parentNode || "c59" != b.parentNode.id)) return !1;
			if (wb && b.href) return x.prompt("Anchor URL as TEXT", b.href), !1
		}
	};
	var ld = {};

	function md(b) {
		b.shiftKey ? ld[16] = !0 : delete ld[16];
		b.ctrlKey ? ld[17] = !0 : delete ld[17];
		b.altKey ? ld[18] = !0 : delete ld[18];
		b.metaKey ? ld[91] = !0 : delete ld[91]
	}

	yb(x, {keydown: md, keyup: md, mousedown: md, mouseup: md});
	(function () {
		var b = 0;
		mb.documentElement.addEventListener("touchend", function (d) {
			if (!(2 <= d.touches.length)) {
				var c = (new Date).getTime();
				350 > c - b && d.preventDefault();
				b = c
			}
		}, !1)
	})();
	var W = function () {
		function b(a, b) {
			var c;
			c = "" + ("<span class=dropdown><button class='adr btn' id='" + a + "'></button><div style='textAlign:center;min-width:5em;max-height:20em;overflow-y:auto;'>");
			for (var d = 0; ; ++d) {
				var e = b(d);
				if (!e) break;
				c += "<button class='s7 s8 w100 nobr" + (e[2] ? " s4" : "") + "' name='" + a + "'>" + e[0] + " " + (e[1] ? H("*") : "<span style='visibility:hidden;'>*</span>") + "</button>"
			}
			return c + "</div></span>"
		}

		function d(a, c, d) {
			return b(a, function (a) {
				if (a <= d) return [a, a == c, !1]
			})
		}

		function c(a, b, c) {
			c || (c = a.substr(-1));
			a = B(a);
			a.innerHTML = H(c + ":") + b;
			(c = a.nextSibling.querySelector(".s4")) && c.classList.remove("s4");
			a.nextSibling.childNodes[b].classList.add("s4")
		}

		function a(a) {
			for (var b = 0; b < a.parentNode.childNodes.length; ++b) if (a.parentNode.childNodes[b] == a) return b
		}

		function e(b) {
			return a(B(b).nextSibling.querySelector(".s4"))
		}

		function l() {
			var a = oc.Zb(), b = oc.Yb();
			c("c42H", ~~a.substr(0, 3) / 10);
			c("c43S", ~~a.substr(3, 3) / 10);
			c("c44V", ~~a.substr(6, 3) / 10);
			c("c45A", ~~b.substr(0, 3) / 10);
			c("c46B", ~~b.substr(3, 3) / 10)
		}

		function m(b) {
			b &&
			c(b.target.parentNode.previousSibling.id, a(b.target));
			Fb("c41", !1) ? oc.Zb(db(3, 10 * e("c42H")) + db(3, 10 * e("c43S")) + db(3, 10 * e("c44V"))) : k();
			oc.Yb(db(3, 10 * e("c45A")) + db(3, 10 * e("c46B")));
			oc.Sb()
		}

		function g() {
			var a = Mc.Db();
			c("c49R", parseInt(a.substr(0, 2), 16) / 17);
			c("c50G", parseInt(a.substr(2, 2), 16) / 17);
			c("c51B", parseInt(a.substr(4, 2), 16) / 17)
		}

		function f(b) {
			b && c(b.target.parentNode.previousSibling.id, a(b.target));
			Mc.Db(db(2, (17 * e("c49R")).toString(16)) + db(2, (17 * e("c50G")).toString(16)) + db(2, (17 * e("c51B")).toString(16)));
			Ic.Sc();
			Ic.ia()
		}

		function k() {
			M.backgroundImage = B("c47").value;
			oc.Sb()
		}

		gb(J, ["c15", Hb, "c55", function (a) {
			ec.Cb(a.target.innerText.substr(0, 2));
			location.reload()
		}, "c42H", m, "c43S", m, "c44V", m, "c45A", m, "c46B", m, "c49R", f, "c50G", f, "c51B", f, "c53", function (b) {
			b && c(b.target.parentNode.previousSibling.id, a(b.target), P(28));
			Xb("sevol", e("c53"), 5);
			Ac();
			arguments.length && E(106, 0, 0)
		}]);
		return {
			o: M.check, Ca: function () {
				for (var a = "ug" + D++, a = "<span class=dropdown style='display:none;'><button class='adr btn' id=c66 style='font-family:icons2;'></button><div style='width:18em;max-height:50em;'><div class='tabs'><input type=radio name=" +
					a + " class=tab0 id=uk" + D + " checked><label class='tooltip nobr' data-tooltip='" + P(31) + "' for=uk" + D++ + ">" + P(31).substr(0, 2) + "</label><input type=radio name=" + a + " class=tab1 id=uk" + D + "><label class='tooltip nobr' data-tooltip='" + P(37) + "' for=uk" + D++ + ">" + P(37).substr(0, 2) + "</label><input type=radio name=" + a + " class=tab2 id=uk" + D + "><label class='tooltip nobr' data-tooltip='" + P(13) + "' for=uk" + D++ + ">" + P(13).substr(0, 2) + "</label><input type=radio name=" + a + " class=tab3 id=uk" + D + "><label class='tooltip nobr' data-tooltip='" +
					P(12) + "' for=uk" + D++ + ">" + P(12).substr(0, 2) + "</label><input type=radio name=" + a + " class=tab4 id=uk" + D + "><label class='tooltip nobr' data-tooltip='" + P(11) + "' for=uk" + D++ + ">" + P(11).substr(0, 2) + "</label><hr style='margin:0;clear:both;'/><div class=tab0 style='padding:0.5em;height:20em;'><input type=checkbox class='checkbox tabs' id='c41'/><label for=c41>" + P(32) + "</label><div class=tab0>" + d("c42H", 0, 35) + d("c43S", 10, 15) + d("c44V", 10, 15) + "</div><div class=tab1>" + P(33) + "<br><input type=text class=w100 id=c47 placeholder='https://....' value='https://tenhou.net/4/res/img/_bg1_1024x0768.jpg' /></div>" +
					d("c45A", 8, 10) + d("c46B", 0, 10) + "<br><br><input type=checkbox class=checkbox id='c48'" + (W.o & 16 ? "" : " checked") + "/><label for=c48>showPlayerInfo</label></div><div class=tab1 style='padding:0.5em;height:20em;'><div style='padding:0.75em;'>" + P(38) + ":</div>" + d("c49R", 0, 15) + d("c50G", 0, 15) + d("c51B", 0, 15) + "</div><div class=tab2 style='padding:0.5em;height:20em;'>" + d("c53", 5, 10) + "<br><input type=checkbox class='checkbox tabs' id='c67'/><label for=c67>" + P(45) + "</label></div><div class=tab3 style='padding:0.5em;height:20em;'><input type=checkbox class='checkbox tabs' id='c68'/><label for=c68>" +
					P(46) + "</label><br><input type=checkbox class='checkbox tabs' id='c69'/><label for=c69>" + P(47) + "</label><br><input type=checkbox class='checkbox tabs' id='c70'/><label for=c70>" + P(48) + "</label><br><input type=checkbox class='checkbox tabs' id='c71'/><label for=c71>" + P(49) + "</label><br><input type=checkbox class='checkbox tabs' id='c72'/><label for=c72>" + P(50) + "</label><br><input type=checkbox class='checkbox tabs' id='c73'/><label for=c73>" + P(51) + "</label><br></div><div class=tab4 style='padding:0.5em;height:20em;'><button class='btn s7' name='c15'>FullScreen on/off</button><br><br><input type=checkbox class=checkbox id=c58 /><label class=bth for=c58>" +
					P(17) + "</label><br>" + Vb("desc", P(18)) + "<br></div><div class=tab5 style='padding:0.5em;height:20em;'><div class=gray style='position:absolute;top:50%;left:50%;translate:(-50%,-50%);'>準備中</div><br></div></div></div></span>", a = a.replace(/B\t([^\t]+)\t/g, "<button class='btn s7' name='$1'>$1</button>"), a = a + "<span class=dropdown><button class='adr btn' id='c55'></button><div>", b = Object.keys(dc), e = 0; e < b.length; ++e) a += "<button class='s7 w100 nobr' name='c55'>" + b[e] + "</button>";
				N.pd.innerHTML =
					a + "</div></span>";
				B("c55").innerText = ec.Cb();
				l();
				g();
				c("c53", M.sevol || 5, P(28));
				b = B("c47");
				b.onchange = k;
				a = B("c41");
				Xc() ? b.value = M.backgroundImage : a.checked = !0;
				a.onchange = function (a) {
					a.target.checked ? m() : k()
				};
				a = B("c58");
				M.hideid && (a.checked = !0);
				a.onchange = function (a) {
					Xb("hideid", ~~a.target.checked, 0)
				};
				B("c48").onchange = function () {
					W.o = M.check = ~~M.check ^ 16;
					oc.xc()
				};
				for (b = [["c67", 64], ["c68", 128], ["c69", 256], ["c70", 512], ["c71", 1024], ["c72", 2048], ["c73", 4096]]; b.length; b.shift()) e = b[0][1], a = B(b[0][0]), ~M.check &
				e && (a.checked = !0), a.onchange = function (a) {
					return function () {
						W.o = M.check = ~~M.check ^ a
					}
				}(e)
			}
		}
	}();
	(function () {
		function b() {
			n(N.Eb.style, {transition: "opacity 500ms ease-out", opacity: ""});
			cc(N.Eb, function () {
				bc(N.Eb);
				wc(xc.Fd);
				x.AudioContext || Tb.v("AudioContext function is not available on this device.<br><br>Microsoft Edge、Google Chromeなどのモダンブラウザを使用してください。");
				N.Wa.style.opacity = ""
			})
		}

		function d() {
			/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent) || (Ub(), ec.jd(function () {
				N.hb.innerHTML =
					P(364);
				W.Ca();
				N.Mc();
				zc.Sd(b)
			}))
		}

		var c = M.lastreload, a = Date.now();
		c ? 36E5 < a - c ? (M.lastreload = a, location.reload()) : d() : (M.lastreload = a, d())
	})();
})();
//