// Three.js r41/ROME - http://github.com/mrdoob/three.js
var THREE = THREE || {};
if (!window.Int32Array) window.Int32Array = Array, window.Float32Array = Array;
THREE.Color = function(b) {
	this.setHex(b)
};
THREE.Color.prototype = {
	copy: function(b) {
		this.r = b.r;
		this.g = b.g;
		this.b = b.b;
		this.hex = b.hex
	},
	setHex: function(b) {
		this.hex = ~~b & 16777215;
		this.updateRGB()
	},
	setRGB: function(b, c, d) {
		this.r = b;
		this.g = c;
		this.b = d;
		this.updateHex()
	},
	setHSV: function(b, c, d) {
		var e, f, h, j, k, m;
		if (d == 0) e = f = h = 0;
		else switch (j = Math.floor(b * 6), k = b * 6 - j, b = d * (1 - c), m = d * (1 - c * k), c = d * (1 - c * (1 - k)), j) {
			case 1:
				e = m;
				f = d;
				h = b;
				break;
			case 2:
				e = b;
				f = d;
				h = c;
				break;
			case 3:
				e = b;
				f = m;
				h = d;
				break;
			case 4:
				e = c;
				f = b;
				h = d;
				break;
			case 5:
				e = d;
				f = b;
				h = m;
				break;
			case 6:
			case 0:
				e = d, f = c, h = b
		}
		this.setRGB(e,
			f, h)
	},
	updateHex: function() {
		this.hex = ~~(this.r * 255) << 16 ^ ~~(this.g * 255) << 8 ^ ~~(this.b * 255)
	},
	updateRGB: function() {
		this.r = (this.hex >> 16 & 255) / 255;
		this.g = (this.hex >> 8 & 255) / 255;
		this.b = (this.hex & 255) / 255
	},
	clone: function() {
		return new THREE.Color(this.hex)
	}
};
THREE.Vector2 = function(b, c) {
	this.set(b || 0, c || 0)
};
THREE.Vector2.prototype = {
	set: function(b, c) {
		this.x = b;
		this.y = c;
		return this
	},
	copy: function(b) {
		this.x = b.x;
		this.y = b.y;
		return this
	},
	clone: function() {
		return new THREE.Vector2(this.x, this.y)
	},
	add: function(b, c) {
		this.x = b.x + c.x;
		this.y = b.y + c.y;
		return this
	},
	addSelf: function(b) {
		this.x += b.x;
		this.y += b.y;
		return this
	},
	sub: function(b, c) {
		this.x = b.x - c.x;
		this.y = b.y - c.y;
		return this
	},
	subSelf: function(b) {
		this.x -= b.x;
		this.y -= b.y;
		return this
	},
	multiplyScalar: function(b) {
		this.x *= b;
		this.y *= b;
		return this
	},
	divideScalar: function(b) {
		b ?
			(this.x /= b, this.y /= b) : this.set(0, 0);
		return this
	},
	negate: function() {
		return this.multiplyScalar(-1)
	},
	dot: function(b) {
		return this.x * b.x + this.y * b.y
	},
	lengthSq: function() {
		return this.x * this.x + this.y * this.y
	},
	length: function() {
		return Math.sqrt(this.lengthSq())
	},
	normalize: function() {
		return this.divideScalar(this.length())
	},
	setLength: function(b) {
		return this.normalize().multiplyScalar(b)
	},
	unit: function() {
		return this.normalize()
	}
};
THREE.Vector3 = function(b, c, d) {
	this.set(b || 0, c || 0, d || 0)
};
THREE.Vector3.prototype = {
	set: function(b, c, d) {
		this.x = b;
		this.y = c;
		this.z = d;
		return this
	},
	copy: function(b) {
		this.x = b.x;
		this.y = b.y;
		this.z = b.z;
		return this
	},
	clone: function() {
		return new THREE.Vector3(this.x, this.y, this.z)
	},
	add: function(b, c) {
		this.x = b.x + c.x;
		this.y = b.y + c.y;
		this.z = b.z + c.z;
		return this
	},
	addSelf: function(b) {
		this.x += b.x;
		this.y += b.y;
		this.z += b.z;
		return this
	},
	addScalar: function(b) {
		this.x += b;
		this.y += b;
		this.z += b;
		return this
	},
	sub: function(b, c) {
		this.x = b.x - c.x;
		this.y = b.y - c.y;
		this.z = b.z - c.z;
		return this
	},
	subSelf: function(b) {
		this.x -=
			b.x;
		this.y -= b.y;
		this.z -= b.z;
		return this
	},
	multiply: function(b, c) {
		this.x = b.x * c.x;
		this.y = b.y * c.y;
		this.z = b.z * c.z;
		return this
	},
	multiplySelf: function(b) {
		this.x *= b.x;
		this.y *= b.y;
		this.z *= b.y;
		return this
	},
	multiplyScalar: function(b) {
		this.x *= b;
		this.y *= b;
		this.z *= b;
		return this
	},
	divideSelf: function(b) {
		return this.divide(this, b)
	},
	divideScalar: function(b) {
		b ? (this.x /= b, this.y /= b, this.z /= b) : this.set(0, 0, 0);
		return this
	},
	negate: function() {
		return this.multiplyScalar(-1)
	},
	dot: function(b) {
		return this.x * b.x + this.y * b.y + this.z *
			b.z
	},
	lengthSq: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z
	},
	length: function() {
		return Math.sqrt(this.lengthSq())
	},
	lengthManhattan: function() {
		return this.x + this.y + this.z
	},
	normalize: function() {
		return this.divideScalar(this.length())
	},
	setLength: function(b) {
		return this.normalize().multiplyScalar(b)
	},
	cross: function(b, c) {
		this.x = b.y * c.z - b.z * c.y;
		this.y = b.z * c.x - b.x * c.z;
		this.z = b.x * c.y - b.y * c.x;
		return this
	},
	crossSelf: function(b) {
		return this.set(this.y * b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x *
			b.y - this.y * b.x)
	},
	distanceTo: function(b) {
		return Math.sqrt(this.distanceToSquared(b))
	},
	distanceToSquared: function(b) {
		return (new THREE.Vector3).sub(this, b).lengthSq()
	},
	setPositionFromMatrix: function(b) {
		this.x = b.n14;
		this.y = b.n24;
		this.z = b.n34
	},
	setRotationFromMatrix: function(b) {
		var c = Math.cos(this.y);
		this.y = Math.asin(b.n13);
		Math.abs(c) > 1.0E-5 ? (this.x = Math.atan2(-b.n23 / c, b.n33 / c), this.z = Math.atan2(-b.n12 / c, b.n11 / c)) : (this.x = 0, this.z = Math.atan2(b.n21, b.n22))
	},
	isZero: function() {
		return this.lengthSq() < 1.0E-4
	}
};
THREE.Vector4 = function(b, c, d, e) {
	this.set(b || 0, c || 0, d || 0, e || 1)
};
THREE.Vector4.prototype = {
	set: function(b, c, d, e) {
		this.x = b;
		this.y = c;
		this.z = d;
		this.w = e;
		return this
	},
	copy: function(b) {
		return this.set(b.x, b.y, b.z, b.w || 1)
	},
	clone: function() {
		return new THREE.Vector4(this.x, this.y, this.z, this.w)
	},
	add: function(b, c) {
		this.x = b.x + c.x;
		this.y = b.y + c.y;
		this.z = b.z + c.z;
		this.w = b.w + c.w;
		return this
	},
	addSelf: function(b) {
		this.x += b.x;
		this.y += b.y;
		this.z += b.z;
		this.w += b.w;
		return this
	},
	sub: function(b, c) {
		this.x = b.x - c.x;
		this.y = b.y - c.y;
		this.z = b.z - c.z;
		this.w = b.w - c.w;
		return this
	},
	subSelf: function(b) {
		this.x -=
			b.x;
		this.y -= b.y;
		this.z -= b.z;
		this.w -= b.w;
		return this
	},
	multiplyScalar: function(b) {
		this.x *= b;
		this.y *= b;
		this.z *= b;
		this.w *= b;
		return this
	},
	divideScalar: function(b) {
		b ? (this.x /= b, this.y /= b, this.z /= b, this.w /= b) : this.set(0, 0, 0, 1);
		return this
	},
	negate: function() {
		return this.multiplyScalar(-1)
	},
	dot: function(b) {
		return this.x * b.x + this.y * b.y + this.z * b.z + this.w * b.w
	},
	lengthSq: function() {
		return this.dot(this)
	},
	length: function() {
		return Math.sqrt(this.lengthSq())
	},
	normalize: function() {
		return this.divideScalar(this.length())
	},
	setLength: function(b) {
		return this.normalize().multiplyScalar(b)
	},
	lerpSelf: function(b, c) {
		this.x += (b.x - this.x) * c;
		this.y += (b.y - this.y) * c;
		this.z += (b.z - this.z) * c;
		this.w += (b.w - this.w) * c;
		return this
	}
};
THREE.Ray = function(b, c) {
	this.origin = b || new THREE.Vector3;
	this.direction = c || new THREE.Vector3
};
THREE.Ray.prototype = {
	intersectScene: function(b) {
		return this.intersectObjects(b.objects)
	},
	intersectObjects: function(b) {
		var c, d, e = [];
		c = 0;
		for (d = b.length; c < d; c++) e = e.concat(this.intersectObject(b[c]));
		e.sort(function(b, d) {
			return b.distance - d.distance
		});
		return e
	},
	intersectObject: function(b) {
		function c(b, d, c) {
			var e;
			e = c.position.clone().subSelf(b).dot(d);
			if (e < 0) return !1;
			b = b.clone().addSelf(d.clone().multiplyScalar(e));
			return c.position.distanceTo(b)
		}

		function d(b, d, c, e) {
			var e = e.clone().subSelf(d),
				c = c.clone().subSelf(d),
				f = b.clone().subSelf(d),
				b = e.dot(e),
				d = e.dot(c),
				e = e.dot(f),
				h = c.dot(c),
				c = c.dot(f),
				f = 1 / (b * h - d * d),
				h = (h * e - d * c) * f,
				b = (b * c - d * e) * f;
			return h > 0 && b > 0 && h + b < 1
		}
		if (b instanceof THREE.Particle) {
			var e = c(this.origin, this.direction, b);
			if (!e || e > b.scale.x) return [];
			return [{
				distance: e,
				point: b.position,
				face: null,
				object: b
			}]
		} else if (b instanceof THREE.Mesh) {
			e = c(this.origin, this.direction, b);
			if (!e || e > b.geometry.boundingSphere.radius * Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z))) return [];
			var f, h, j, k, m, n, o, p, t, u, v = b.geometry,
				C = v.vertices,
				E = [],
				e = 0;
			for (f = v.faces.length; e < f; e++)
				if (h = v.faces[e], t = this.origin.clone(), u = this.direction.clone(), n = b.matrixWorld, j = n.multiplyVector3(C[h.a].position.clone()), k = n.multiplyVector3(C[h.b].position.clone()), m = n.multiplyVector3(C[h.c].position.clone()), n = h instanceof THREE.Face4 ? n.multiplyVector3(C[h.d].position.clone()) : null, o = b.matrixRotationWorld.multiplyVector3(h.normal.clone()), p = u.dot(o), b.doubleSided || (b.flipSided ? p > 0 : p < 0))
					if (o = o.dot((new THREE.Vector3).sub(j, t)) / p, t = t.addSelf(u.multiplyScalar(o)),
						h instanceof THREE.Face3) d(t, j, k, m) && (h = {
						distance: this.origin.distanceTo(t),
						point: t,
						face: h,
						object: b
					}, E.push(h));
					else if (h instanceof THREE.Face4 && (d(t, j, k, n) || d(t, k, m, n))) h = {
				distance: this.origin.distanceTo(t),
				point: t,
				face: h,
				object: b
			}, E.push(h);
			return E
		} else return []
	}
};
THREE.Rectangle = function() {
	function b() {
		h = e - c;
		j = f - d
	}
	var c, d, e, f, h, j, k = !0;
	this.getX = function() {
		return c
	};
	this.getY = function() {
		return d
	};
	this.getWidth = function() {
		return h
	};
	this.getHeight = function() {
		return j
	};
	this.getLeft = function() {
		return c
	};
	this.getTop = function() {
		return d
	};
	this.getRight = function() {
		return e
	};
	this.getBottom = function() {
		return f
	};
	this.set = function(h, j, o, p) {
		k = !1;
		c = h;
		d = j;
		e = o;
		f = p;
		b()
	};
	this.addPoint = function(h, j) {
		k ? (k = !1, c = h, d = j, e = h, f = j) : (c = c < h ? c : h, d = d < j ? d : j, e = e > h ? e : h, f = f > j ? f : j);
		b()
	};
	this.add3Points =
		function(h, j, o, p, t, u) {
			k ? (k = !1, c = h < o ? h < t ? h : t : o < t ? o : t, d = j < p ? j < u ? j : u : p < u ? p : u, e = h > o ? h > t ? h : t : o > t ? o : t, f = j > p ? j > u ? j : u : p > u ? p : u) : (c = h < o ? h < t ? h < c ? h : c : t < c ? t : c : o < t ? o < c ? o : c : t < c ? t : c, d = j < p ? j < u ? j < d ? j : d : u < d ? u : d : p < u ? p < d ? p : d : u < d ? u : d, e = h > o ? h > t ? h > e ? h : e : t > e ? t : e : o > t ? o > e ? o : e : t > e ? t : e, f = j > p ? j > u ? j > f ? j : f : u > f ? u : f : p > u ? p > f ? p : f : u > f ? u : f);
			b()
		};
	this.addRectangle = function(h) {
		k ? (k = !1, c = h.getLeft(), d = h.getTop(), e = h.getRight(), f = h.getBottom()) : (c = c < h.getLeft() ? c : h.getLeft(), d = d < h.getTop() ? d : h.getTop(), e = e > h.getRight() ? e : h.getRight(), f = f >
			h.getBottom() ? f : h.getBottom());
		b()
	};
	this.inflate = function(h) {
		c -= h;
		d -= h;
		e += h;
		f += h;
		b()
	};
	this.minSelf = function(h) {
		c = c > h.getLeft() ? c : h.getLeft();
		d = d > h.getTop() ? d : h.getTop();
		e = e < h.getRight() ? e : h.getRight();
		f = f < h.getBottom() ? f : h.getBottom();
		b()
	};
	this.instersects = function(b) {
		return Math.min(e, b.getRight()) - Math.max(c, b.getLeft()) >= 0 && Math.min(f, b.getBottom()) - Math.max(d, b.getTop()) >= 0
	};
	this.empty = function() {
		k = !0;
		f = e = d = c = 0;
		b()
	};
	this.isEmpty = function() {
		return k
	}
};
THREE.Matrix3 = function() {
	this.m = []
};
THREE.Matrix3.prototype = {
	transpose: function() {
		var b, c = this.m;
		b = c[1];
		c[1] = c[3];
		c[3] = b;
		b = c[2];
		c[2] = c[6];
		c[6] = b;
		b = c[5];
		c[5] = c[7];
		c[7] = b;
		return this
	},
	transposeIntoArray: function(b) {
		var c = this.m;
		b[0] = c[0];
		b[1] = c[3];
		b[2] = c[6];
		b[3] = c[1];
		b[4] = c[4];
		b[5] = c[7];
		b[6] = c[2];
		b[7] = c[5];
		b[8] = c[8];
		return this
	}
};
THREE.Matrix4 = function(b, c, d, e, f, h, j, k, m, n, o, p, t, u, v, C) {
	this.set(b || 1, c || 0, d || 0, e || 0, f || 0, h || 1, j || 0, k || 0, m || 0, n || 0, o || 1, p || 0, t || 0, u || 0, v || 0, C || 1);
	this.flat = Array(16);
	this.m33 = new THREE.Matrix3
};
THREE.Matrix4.prototype = {
	set: function(b, c, d, e, f, h, j, k, m, n, o, p, t, u, v, C) {
		this.n11 = b;
		this.n12 = c;
		this.n13 = d;
		this.n14 = e;
		this.n21 = f;
		this.n22 = h;
		this.n23 = j;
		this.n24 = k;
		this.n31 = m;
		this.n32 = n;
		this.n33 = o;
		this.n34 = p;
		this.n41 = t;
		this.n42 = u;
		this.n43 = v;
		this.n44 = C;
		return this
	},
	identity: function() {
		this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this
	},
	copy: function(b) {
		this.set(b.n11, b.n12, b.n13, b.n14, b.n21, b.n22, b.n23, b.n24, b.n31, b.n32, b.n33, b.n34, b.n41, b.n42, b.n43, b.n44);
		return this
	},
	lookAt: function(b, c, d) {
		var e = THREE.Matrix4.__v1,
			f = THREE.Matrix4.__v2,
			h = THREE.Matrix4.__v3;
		h.sub(b, c).normalize();
		if (h.length() === 0) h.z = 1;
		e.cross(d, h).normalize();
		e.length() === 0 && (h.x += 1.0E-4, e.cross(d, h).normalize());
		f.cross(h, e).normalize();
		this.n11 = e.x;
		this.n12 = f.x;
		this.n13 = h.x;
		this.n21 = e.y;
		this.n22 = f.y;
		this.n23 = h.y;
		this.n31 = e.z;
		this.n32 = f.z;
		this.n33 = h.z;
		return this
	},
	multiplyVector3: function(b) {
		var c = b.x,
			d = b.y,
			e = b.z,
			f = 1 / (this.n41 * c + this.n42 * d + this.n43 * e + this.n44);
		b.x = (this.n11 * c + this.n12 * d + this.n13 * e + this.n14) * f;
		b.y = (this.n21 * c + this.n22 * d + this.n23 *
			e + this.n24) * f;
		b.z = (this.n31 * c + this.n32 * d + this.n33 * e + this.n34) * f;
		return b
	},
	multiplyVector4: function(b) {
		var c = b.x,
			d = b.y,
			e = b.z,
			f = b.w;
		b.x = this.n11 * c + this.n12 * d + this.n13 * e + this.n14 * f;
		b.y = this.n21 * c + this.n22 * d + this.n23 * e + this.n24 * f;
		b.z = this.n31 * c + this.n32 * d + this.n33 * e + this.n34 * f;
		b.w = this.n41 * c + this.n42 * d + this.n43 * e + this.n44 * f;
		return b
	},
	rotateAxis: function(b) {
		var c = b.x,
			d = b.y,
			e = b.z;
		b.x = c * this.n11 + d * this.n12 + e * this.n13;
		b.y = c * this.n21 + d * this.n22 + e * this.n23;
		b.z = c * this.n31 + d * this.n32 + e * this.n33;
		b.normalize();
		return b
	},
	crossVector: function(b) {
		var c = new THREE.Vector4;
		c.x = this.n11 * b.x + this.n12 * b.y + this.n13 * b.z + this.n14 * b.w;
		c.y = this.n21 * b.x + this.n22 * b.y + this.n23 * b.z + this.n24 * b.w;
		c.z = this.n31 * b.x + this.n32 * b.y + this.n33 * b.z + this.n34 * b.w;
		c.w = b.w ? this.n41 * b.x + this.n42 * b.y + this.n43 * b.z + this.n44 * b.w : 1;
		return c
	},
	multiply: function(b, c) {
		var d = b.n11,
			e = b.n12,
			f = b.n13,
			h = b.n14,
			j = b.n21,
			k = b.n22,
			m = b.n23,
			n = b.n24,
			o = b.n31,
			p = b.n32,
			t = b.n33,
			u = b.n34,
			v = b.n41,
			C = b.n42,
			E = b.n43,
			y = b.n44,
			D = c.n11,
			x = c.n12,
			I = c.n13,
			A = c.n14,
			z = c.n21,
			S = c.n22,
			G = c.n23,
			M = c.n24,
			F = c.n31,
			N = c.n32,
			g = c.n33,
			Y = c.n34;
		this.n11 = d * D + e * z + f * F;
		this.n12 = d * x + e * S + f * N;
		this.n13 = d * I + e * G + f * g;
		this.n14 = d * A + e * M + f * Y + h;
		this.n21 = j * D + k * z + m * F;
		this.n22 = j * x + k * S + m * N;
		this.n23 = j * I + k * G + m * g;
		this.n24 = j * A + k * M + m * Y + n;
		this.n31 = o * D + p * z + t * F;
		this.n32 = o * x + p * S + t * N;
		this.n33 = o * I + p * G + t * g;
		this.n34 = o * A + p * M + t * Y + u;
		this.n41 = v * D + C * z + E * F;
		this.n42 = v * x + C * S + E * N;
		this.n43 = v * I + C * G + E * g;
		this.n44 = v * A + C * M + E * Y + y;
		return this
	},
	multiplyToArray: function(b, c, d) {
		this.multiply(b, c);
		d[0] = this.n11;
		d[1] = this.n21;
		d[2] = this.n31;
		d[3] =
			this.n41;
		d[4] = this.n12;
		d[5] = this.n22;
		d[6] = this.n32;
		d[7] = this.n42;
		d[8] = this.n13;
		d[9] = this.n23;
		d[10] = this.n33;
		d[11] = this.n43;
		d[12] = this.n14;
		d[13] = this.n24;
		d[14] = this.n34;
		d[15] = this.n44;
		return this
	},
	multiplySelf: function(b) {
		this.multiply(this, b);
		return this
	},
	multiplyScalar: function(b) {
		this.n11 *= b;
		this.n12 *= b;
		this.n13 *= b;
		this.n14 *= b;
		this.n21 *= b;
		this.n22 *= b;
		this.n23 *= b;
		this.n24 *= b;
		this.n31 *= b;
		this.n32 *= b;
		this.n33 *= b;
		this.n34 *= b;
		this.n41 *= b;
		this.n42 *= b;
		this.n43 *= b;
		this.n44 *= b;
		return this
	},
	determinant: function() {
		var b =
			this.n11,
			c = this.n12,
			d = this.n13,
			e = this.n14,
			f = this.n21,
			h = this.n22,
			j = this.n23,
			k = this.n24,
			m = this.n31,
			n = this.n32,
			o = this.n33,
			p = this.n34,
			t = this.n41,
			u = this.n42,
			v = this.n43,
			C = this.n44;
		return e * j * n * t - d * k * n * t - e * h * o * t + c * k * o * t + d * h * p * t - c * j * p * t - e * j * m * u + d * k * m * u + e * f * o * u - b * k * o * u - d * f * p * u + b * j * p * u + e * h * m * v - c * k * m * v - e * f * n * v + b * k * n * v + c * f * p * v - b * h * p * v - d * h * m * C + c * j * m * C + d * f * n * C - b * j * n * C - c * f * o * C + b * h * o * C
	},
	transpose: function() {
		var b;
		b = this.n21;
		this.n21 = this.n12;
		this.n12 = b;
		b = this.n31;
		this.n31 = this.n13;
		this.n13 = b;
		b = this.n32;
		this.n32 =
			this.n23;
		this.n23 = b;
		b = this.n41;
		this.n41 = this.n14;
		this.n14 = b;
		b = this.n42;
		this.n42 = this.n24;
		this.n24 = b;
		b = this.n43;
		this.n43 = this.n34;
		this.n43 = b;
		return this
	},
	clone: function() {
		var b = new THREE.Matrix4;
		b.n11 = this.n11;
		b.n12 = this.n12;
		b.n13 = this.n13;
		b.n14 = this.n14;
		b.n21 = this.n21;
		b.n22 = this.n22;
		b.n23 = this.n23;
		b.n24 = this.n24;
		b.n31 = this.n31;
		b.n32 = this.n32;
		b.n33 = this.n33;
		b.n34 = this.n34;
		b.n41 = this.n41;
		b.n42 = this.n42;
		b.n43 = this.n43;
		b.n44 = this.n44;
		return b
	},
	flatten: function() {
		this.flat[0] = this.n11;
		this.flat[1] = this.n21;
		this.flat[2] = this.n31;
		this.flat[3] = this.n41;
		this.flat[4] = this.n12;
		this.flat[5] = this.n22;
		this.flat[6] = this.n32;
		this.flat[7] = this.n42;
		this.flat[8] = this.n13;
		this.flat[9] = this.n23;
		this.flat[10] = this.n33;
		this.flat[11] = this.n43;
		this.flat[12] = this.n14;
		this.flat[13] = this.n24;
		this.flat[14] = this.n34;
		this.flat[15] = this.n44;
		return this.flat
	},
	flattenToArray: function(b) {
		b[0] = this.n11;
		b[1] = this.n21;
		b[2] = this.n31;
		b[3] = this.n41;
		b[4] = this.n12;
		b[5] = this.n22;
		b[6] = this.n32;
		b[7] = this.n42;
		b[8] = this.n13;
		b[9] = this.n23;
		b[10] =
			this.n33;
		b[11] = this.n43;
		b[12] = this.n14;
		b[13] = this.n24;
		b[14] = this.n34;
		b[15] = this.n44;
		return b
	},
	flattenToArrayOffset: function(b, c) {
		b[c] = this.n11;
		b[c + 1] = this.n21;
		b[c + 2] = this.n31;
		b[c + 3] = this.n41;
		b[c + 4] = this.n12;
		b[c + 5] = this.n22;
		b[c + 6] = this.n32;
		b[c + 7] = this.n42;
		b[c + 8] = this.n13;
		b[c + 9] = this.n23;
		b[c + 10] = this.n33;
		b[c + 11] = this.n43;
		b[c + 12] = this.n14;
		b[c + 13] = this.n24;
		b[c + 14] = this.n34;
		b[c + 15] = this.n44;
		return b
	},
	setTranslation: function(b, c, d) {
		this.set(1, 0, 0, b, 0, 1, 0, c, 0, 0, 1, d, 0, 0, 0, 1);
		return this
	},
	setScale: function(b,
		c, d) {
		this.set(b, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1);
		return this
	},
	setRotationX: function(b) {
		var c = Math.cos(b),
			b = Math.sin(b);
		this.set(1, 0, 0, 0, 0, c, -b, 0, 0, b, c, 0, 0, 0, 0, 1);
		return this
	},
	setRotationY: function(b) {
		var c = Math.cos(b),
			b = Math.sin(b);
		this.set(c, 0, b, 0, 0, 1, 0, 0, -b, 0, c, 0, 0, 0, 0, 1);
		return this
	},
	setRotationZ: function(b) {
		var c = Math.cos(b),
			b = Math.sin(b);
		this.set(c, -b, 0, 0, b, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this
	},
	setRotationAxis: function(b, c) {
		var d = Math.cos(c),
			e = Math.sin(c),
			f = 1 - d,
			h = b.x,
			j = b.y,
			k = b.z,
			m = f * h,
			n = f * j;
		this.set(m *
			h + d, m * j - e * k, m * k + e * j, 0, m * j + e * k, n * j + d, n * k - e * h, 0, m * k - e * j, n * k + e * h, f * k * k + d, 0, 0, 0, 0, 1);
		return this
	},
	setPosition: function(b) {
		this.n14 = b.x;
		this.n24 = b.y;
		this.n34 = b.z;
		return this
	},
	getPosition: function() {
		if (!this.position) this.position = new THREE.Vector3;
		this.position.set(this.n14, this.n24, this.n34);
		return this.position
	},
	getColumnX: function() {
		if (!this.columnX) this.columnX = new THREE.Vector3;
		this.columnX.set(this.n11, this.n21, this.n31);
		return this.columnX
	},
	getColumnY: function() {
		if (!this.columnY) this.columnY = new THREE.Vector3;
		this.columnY.set(this.n12, this.n22, this.n32);
		return this.columnY
	},
	getColumnZ: function() {
		if (!this.columnZ) this.columnZ = new THREE.Vector3;
		this.columnZ.set(this.n13, this.n23, this.n33);
		return this.columnZ
	},
	setRotationFromEuler: function(b) {
		var c = b.x,
			d = b.y,
			e = b.z,
			b = Math.cos(c),
			c = Math.sin(c),
			f = Math.cos(d),
			d = Math.sin(d),
			h = Math.cos(e),
			e = Math.sin(e),
			j = b * d,
			k = c * d;
		this.n11 = f * h;
		this.n12 = -f * e;
		this.n13 = d;
		this.n21 = k * h + b * e;
		this.n22 = -k * e + b * h;
		this.n23 = -c * f;
		this.n31 = -j * h + c * e;
		this.n32 = j * e + c * h;
		this.n33 = b * f;
		return this
	},
	setRotationFromQuaternion: function(b) {
		var c = b.x,
			d = b.y,
			e = b.z,
			f = b.w,
			h = c + c,
			j = d + d,
			k = e + e,
			b = c * h,
			m = c * j;
		c *= k;
		var n = d * j;
		d *= k;
		e *= k;
		h *= f;
		j *= f;
		f *= k;
		this.n11 = 1 - (n + e);
		this.n12 = m - f;
		this.n13 = c + j;
		this.n21 = m + f;
		this.n22 = 1 - (b + e);
		this.n23 = d - h;
		this.n31 = c - j;
		this.n32 = d + h;
		this.n33 = 1 - (b + n);
		return this
	},
	scale: function(b) {
		var c = b.x,
			d = b.y,
			b = b.z;
		this.n11 *= c;
		this.n12 *= d;
		this.n13 *= b;
		this.n21 *= c;
		this.n22 *= d;
		this.n23 *= b;
		this.n31 *= c;
		this.n32 *= d;
		this.n33 *= b;
		this.n41 *= c;
		this.n42 *= d;
		this.n43 *= b;
		return this
	},
	extractPosition: function(b) {
		this.n14 =
			b.n14;
		this.n24 = b.n24;
		this.n34 = b.n34
	},
	extractRotation: function(b, c) {
		var d = 1 / c.x,
			e = 1 / c.y,
			f = 1 / c.z;
		this.n11 = b.n11 * d;
		this.n21 = b.n21 * d;
		this.n31 = b.n31 * d;
		this.n12 = b.n12 * e;
		this.n22 = b.n22 * e;
		this.n32 = b.n32 * e;
		this.n13 = b.n13 * f;
		this.n23 = b.n23 * f;
		this.n33 = b.n33 * f
	}
};
THREE.Matrix4.makeInvert = function(b, c) {
	var d = b.n11,
		e = b.n12,
		f = b.n13,
		h = b.n14,
		j = b.n21,
		k = b.n22,
		m = b.n23,
		n = b.n24,
		o = b.n31,
		p = b.n32,
		t = b.n33,
		u = b.n34,
		v = b.n41,
		C = b.n42,
		E = b.n43,
		y = b.n44;
	c === void 0 && (c = new THREE.Matrix4);
	c.n11 = m * u * C - n * t * C + n * p * E - k * u * E - m * p * y + k * t * y;
	c.n12 = h * t * C - f * u * C - h * p * E + e * u * E + f * p * y - e * t * y;
	c.n13 = f * n * C - h * m * C + h * k * E - e * n * E - f * k * y + e * m * y;
	c.n14 = h * m * p - f * n * p - h * k * t + e * n * t + f * k * u - e * m * u;
	c.n21 = n * t * v - m * u * v - n * o * E + j * u * E + m * o * y - j * t * y;
	c.n22 = f * u * v - h * t * v + h * o * E - d * u * E - f * o * y + d * t * y;
	c.n23 = h * m * v - f * n * v - h * j * E + d * n * E + f * j * y - d * m * y;
	c.n24 =
		f * n * o - h * m * o + h * j * t - d * n * t - f * j * u + d * m * u;
	c.n31 = k * u * v - n * p * v + n * o * C - j * u * C - k * o * y + j * p * y;
	c.n32 = h * p * v - e * u * v - h * o * C + d * u * C + e * o * y - d * p * y;
	c.n33 = f * n * v - h * k * v + h * j * C - d * n * C - e * j * y + d * k * y;
	c.n34 = h * k * o - e * n * o - h * j * p + d * n * p + e * j * u - d * k * u;
	c.n41 = m * p * v - k * t * v - m * o * C + j * t * C + k * o * E - j * p * E;
	c.n42 = e * t * v - f * p * v + f * o * C - d * t * C - e * o * E + d * p * E;
	c.n43 = f * k * v - e * m * v - f * j * C + d * m * C + e * j * E - d * k * E;
	c.n44 = e * m * o - f * k * o + f * j * p - d * m * p - e * j * t + d * k * t;
	c.multiplyScalar(1 / b.determinant());
	return c
};
THREE.Matrix4.makeInvert3x3 = function(b) {
	var c = b.m33,
		d = c.m,
		e = b.n33 * b.n22 - b.n32 * b.n23,
		f = -b.n33 * b.n21 + b.n31 * b.n23,
		h = b.n32 * b.n21 - b.n31 * b.n22,
		j = -b.n33 * b.n12 + b.n32 * b.n13,
		k = b.n33 * b.n11 - b.n31 * b.n13,
		m = -b.n32 * b.n11 + b.n31 * b.n12,
		n = b.n23 * b.n12 - b.n22 * b.n13,
		o = -b.n23 * b.n11 + b.n21 * b.n13,
		p = b.n22 * b.n11 - b.n21 * b.n12,
		b = b.n11 * e + b.n21 * j + b.n31 * n;
	b == 0 && console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");
	b = 1 / b;
	d[0] = b * e;
	d[1] = b * f;
	d[2] = b * h;
	d[3] = b * j;
	d[4] = b * k;
	d[5] = b * m;
	d[6] = b * n;
	d[7] = b * o;
	d[8] = b * p;
	return c
};
THREE.Matrix4.makeFrustum = function(b, c, d, e, f, h) {
	var j;
	j = new THREE.Matrix4;
	j.n11 = 2 * f / (c - b);
	j.n12 = 0;
	j.n13 = (c + b) / (c - b);
	j.n14 = 0;
	j.n21 = 0;
	j.n22 = 2 * f / (e - d);
	j.n23 = (e + d) / (e - d);
	j.n24 = 0;
	j.n31 = 0;
	j.n32 = 0;
	j.n33 = -(h + f) / (h - f);
	j.n34 = -2 * h * f / (h - f);
	j.n41 = 0;
	j.n42 = 0;
	j.n43 = -1;
	j.n44 = 0;
	return j
};
THREE.Matrix4.makePerspective = function(b, c, d, e) {
	var f, b = d * Math.tan(b * Math.PI / 360);
	f = -b;
	return THREE.Matrix4.makeFrustum(f * c, b * c, f, b, d, e)
};
THREE.Matrix4.makeOrtho = function(b, c, d, e, f, h) {
	var j, k, m, n;
	j = new THREE.Matrix4;
	k = c - b;
	m = d - e;
	n = h - f;
	j.n11 = 2 / k;
	j.n12 = 0;
	j.n13 = 0;
	j.n14 = -((c + b) / k);
	j.n21 = 0;
	j.n22 = 2 / m;
	j.n23 = 0;
	j.n24 = -((d + e) / m);
	j.n31 = 0;
	j.n32 = 0;
	j.n33 = -2 / n;
	j.n34 = -((h + f) / n);
	j.n41 = 0;
	j.n42 = 0;
	j.n43 = 0;
	j.n44 = 1;
	return j
};
THREE.Matrix4.__v1 = new THREE.Vector3;
THREE.Matrix4.__v2 = new THREE.Vector3;
THREE.Matrix4.__v3 = new THREE.Vector3;
THREE.Object3D = function() {
	this.parent = void 0;
	this.children = [];
	this.up = new THREE.Vector3(0, 1, 0);
	this.position = new THREE.Vector3;
	this.rotation = new THREE.Vector3;
	this.scale = new THREE.Vector3(1, 1, 1);
	this.dynamic = !1;
	this.rotationAutoUpdate = !0;
	this.matrix = new THREE.Matrix4;
	this.matrixWorld = new THREE.Matrix4;
	this.matrixRotationWorld = new THREE.Matrix4;
	this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
	this.quaternion = new THREE.Quaternion;
	this.useQuaternion = !1;
	this.boundRadius = 0;
	this.boundRadiusScale = 1;
	this.visible = !0;
	this._vector = new THREE.Vector3;
	this.name = ""
};
THREE.Object3D.prototype = {
	translate: function(b, c) {
		this.matrix.rotateAxis(c);
		this.position.addSelf(c.multiplyScalar(b))
	},
	translateX: function(b) {
		this.translate(b, this._vector.set(1, 0, 0))
	},
	translateY: function(b) {
		this.translate(b, this._vector.set(0, 1, 0))
	},
	translateZ: function(b) {
		this.translate(b, this._vector.set(0, 0, 1))
	},
	lookAt: function(b) {
		this.matrix.lookAt(b, this.position, this.up);
		this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
	},
	addChild: function(b) {
		if (this.children.indexOf(b) ===
			-1) {
			b.parent !== void 0 && b.parent.removeChild(b);
			b.parent = this;
			this.children.push(b);
			for (var c = this; c.parent !== void 0;) c = c.parent;
			c !== void 0 && c instanceof THREE.Scene && c.addChildRecurse(b)
		}
	},
	removeChild: function(b) {
		var c = this.children.indexOf(b);
		if (c !== -1) b.parent = void 0, this.children.splice(c, 1)
	},
	getChildByName: function(b, c) {
		var d, e, f;
		d = 0;
		for (e = this.children.length; d < e; d++) {
			f = this.children[d];
			if (f.name === b) return f;
			if (c && (f = f.getChildByName(b, c), f !== void 0)) return f
		}
	},
	updateMatrix: function() {
		this.matrix.setPosition(this.position);
		this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation);
		if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1) this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z));
		this.matrixWorldNeedsUpdate = !0
	},
	update: function(b, c, d) {
		this.matrixAutoUpdate && this.updateMatrix();
		if (this.matrixWorldNeedsUpdate || c) b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixRotationWorld.extractRotation(this.matrixWorld,
			this.scale), this.matrixWorldNeedsUpdate = !1, c = !0;
		for (var b = 0, e = this.children.length; b < e; b++) this.children[b].update(this.matrixWorld, c, d)
	}
};
THREE.Quaternion = function(b, c, d, e) {
	this.set(b || 0, c || 0, d || 0, e !== void 0 ? e : 1)
};
THREE.Quaternion.prototype = {
	set: function(b, c, d, e) {
		this.x = b;
		this.y = c;
		this.z = d;
		this.w = e;
		return this
	},
	copy: function(b) {
		this.x = b.x;
		this.y = b.y;
		this.z = b.z;
		this.w = b.w;
		return this
	},
	setFromEuler: function(b) {
		var c = 0.5 * Math.PI / 360,
			d = b.x * c,
			e = b.y * c,
			f = b.z * c,
			b = Math.cos(e),
			e = Math.sin(e),
			c = Math.cos(-f),
			f = Math.sin(-f),
			h = Math.cos(d),
			d = Math.sin(d),
			j = b * c,
			k = e * f;
		this.w = j * h - k * d;
		this.x = j * d + k * h;
		this.y = e * c * h + b * f * d;
		this.z = b * f * h - e * c * d;
		return this
	},
	setFromAxisAngle: function(b, c) {
		var d = c / 2,
			e = Math.sin(d);
		this.x = b.x * e;
		this.y = b.y *
			e;
		this.z = b.z * e;
		this.w = Math.cos(d);
		return this
	},
	calculateW: function() {
		this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z));
		return this
	},
	inverse: function() {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
		return this
	},
	length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
	},
	normalize: function() {
		var b = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
		b == 0 ? this.w = this.z = this.y = this.x = 0 : (b = 1 / b, this.x *= b, this.y *= b, this.z *= b, this.w *= b);
		return this
	},
	multiplySelf: function(b) {
		var c = this.x,
			d = this.y,
			e = this.z,
			f = this.w,
			h = b.x,
			j = b.y,
			k = b.z,
			b = b.w;
		this.x = c * b + f * h + d * k - e * j;
		this.y = d * b + f * j + e * h - c * k;
		this.z = e * b + f * k + c * j - d * h;
		this.w = f * b - c * h - d * j - e * k;
		return this
	},
	multiply: function(b, c) {
		this.x = b.x * c.w + b.y * c.z - b.z * c.y + b.w * c.x;
		this.y = -b.x * c.z + b.y * c.w + b.z * c.x + b.w * c.y;
		this.z = b.x * c.y - b.y * c.x + b.z * c.w + b.w * c.z;
		this.w = -b.x * c.x - b.y * c.y - b.z * c.z + b.w * c.w;
		return this
	},
	multiplyVector3: function(b, c) {
		c || (c = b);
		var d = b.x,
			e = b.y,
			f = b.z,
			h = this.x,
			j = this.y,
			k = this.z,
			m = this.w,
			n = m * d + j * f - k * e,
			o =
			m * e + k * d - h * f,
			p = m * f + h * e - j * d,
			d = -h * d - j * e - k * f;
		c.x = n * m + d * -h + o * -k - p * -j;
		c.y = o * m + d * -j + p * -h - n * -k;
		c.z = p * m + d * -k + n * -j - o * -h;
		return c
	}
};
THREE.Quaternion.slerp = function(b, c, d, e) {
	var f = b.w * c.w + b.x * c.x + b.y * c.y + b.z * c.z;
	if (Math.abs(f) >= 1) return d.w = b.w, d.x = b.x, d.y = b.y, d.z = b.z, d;
	var h = Math.acos(f),
		j = Math.sqrt(1 - f * f);
	if (Math.abs(j) < 0.001) return d.w = 0.5 * (b.w + c.w), d.x = 0.5 * (b.x + c.x), d.y = 0.5 * (b.y + c.y), d.z = 0.5 * (b.z + c.z), d;
	f = Math.sin((1 - e) * h) / j;
	e = Math.sin(e * h) / j;
	d.w = b.w * f + c.w * e;
	d.x = b.x * f + c.x * e;
	d.y = b.y * f + c.y * e;
	d.z = b.z * f + c.z * e;
	return d
};
THREE.Vertex = function(b) {
	this.position = b || new THREE.Vector3
};
THREE.Face3 = function(b, c, d, e, f, h) {
	this.a = b;
	this.b = c;
	this.c = d;
	this.normal = e instanceof THREE.Vector3 ? e : new THREE.Vector3;
	this.vertexNormals = e instanceof Array ? e : [];
	this.color = f instanceof THREE.Color ? f : new THREE.Color;
	this.vertexColors = f instanceof Array ? f : [];
	this.vertexTangents = [];
	this.materials = h instanceof Array ? h : [h];
	this.centroid = new THREE.Vector3
};
THREE.Face4 = function(b, c, d, e, f, h, j) {
	this.a = b;
	this.b = c;
	this.c = d;
	this.d = e;
	this.normal = f instanceof THREE.Vector3 ? f : new THREE.Vector3;
	this.vertexNormals = f instanceof Array ? f : [];
	this.color = h instanceof THREE.Color ? h : new THREE.Color;
	this.vertexColors = h instanceof Array ? h : [];
	this.vertexTangents = [];
	this.materials = j instanceof Array ? j : [j];
	this.centroid = new THREE.Vector3
};
THREE.UV = function(b, c) {
	this.set(b || 0, c || 0)
};
THREE.UV.prototype = {
	set: function(b, c) {
		this.u = b;
		this.v = c;
		return this
	},
	copy: function(b) {
		this.set(b.u, b.v);
		return this
	}
};
THREE.Geometry = function() {
	this.id = "Geometry" + THREE.GeometryIdCounter++;
	this.vertices = [];
	this.colors = [];
	this.faces = [];
	this.edges = [];
	this.faceUvs = [
		[]
	];
	this.faceVertexUvs = [
		[]
	];
	this.morphTargets = [];
	this.morphColors = [];
	this.skinWeights = [];
	this.skinIndices = [];
	this.boundingSphere = this.boundingBox = null;
	this.hasTangents = !1
};
THREE.Geometry.prototype = {
	computeCentroids: function() {
		var b, c, d;
		b = 0;
		for (c = this.faces.length; b < c; b++) d = this.faces[b], d.centroid.set(0, 0, 0), d instanceof THREE.Face3 ? (d.centroid.addSelf(this.vertices[d.a].position), d.centroid.addSelf(this.vertices[d.b].position), d.centroid.addSelf(this.vertices[d.c].position), d.centroid.divideScalar(3)) : d instanceof THREE.Face4 && (d.centroid.addSelf(this.vertices[d.a].position), d.centroid.addSelf(this.vertices[d.b].position), d.centroid.addSelf(this.vertices[d.c].position),
			d.centroid.addSelf(this.vertices[d.d].position), d.centroid.divideScalar(4))
	},
	computeFaceNormals: function(b) {
		var c, d, e, f, h, j, k = new THREE.Vector3,
			m = new THREE.Vector3;
		e = 0;
		for (f = this.faces.length; e < f; e++) {
			h = this.faces[e];
			if (b && h.vertexNormals.length) {
				k.set(0, 0, 0);
				c = 0;
				for (d = h.vertexNormals.length; c < d; c++) k.addSelf(h.vertexNormals[c]);
				k.divideScalar(3)
			} else c = this.vertices[h.a], d = this.vertices[h.b], j = this.vertices[h.c], k.sub(j.position, d.position), m.sub(c.position, d.position), k.crossSelf(m);
			k.isZero() ||
				k.normalize();
			h.normal.copy(k)
		}
	},
	computeVertexNormals: function() {
		var b, c, d, e;
		if (this.__tmpVertices == void 0) {
			e = this.__tmpVertices = Array(this.vertices.length);
			b = 0;
			for (c = this.vertices.length; b < c; b++) e[b] = new THREE.Vector3;
			b = 0;
			for (c = this.faces.length; b < c; b++)
				if (d = this.faces[b], d instanceof THREE.Face3) d.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
				else if (d instanceof THREE.Face4) d.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
		} else {
			e =
				this.__tmpVertices;
			b = 0;
			for (c = this.vertices.length; b < c; b++) e[b].set(0, 0, 0)
		}
		b = 0;
		for (c = this.faces.length; b < c; b++) d = this.faces[b], d instanceof THREE.Face3 ? (e[d.a].addSelf(d.normal), e[d.b].addSelf(d.normal), e[d.c].addSelf(d.normal)) : d instanceof THREE.Face4 && (e[d.a].addSelf(d.normal), e[d.b].addSelf(d.normal), e[d.c].addSelf(d.normal), e[d.d].addSelf(d.normal));
		b = 0;
		for (c = this.vertices.length; b < c; b++) e[b].normalize();
		b = 0;
		for (c = this.faces.length; b < c; b++) d = this.faces[b], d instanceof THREE.Face3 ? (d.vertexNormals[0].copy(e[d.a]),
			d.vertexNormals[1].copy(e[d.b]), d.vertexNormals[2].copy(e[d.c])) : d instanceof THREE.Face4 && (d.vertexNormals[0].copy(e[d.a]), d.vertexNormals[1].copy(e[d.b]), d.vertexNormals[2].copy(e[d.c]), d.vertexNormals[3].copy(e[d.d]))
	},
	computeTangents: function() {
		function b(b, d, c, e, h, f, G) {
			k = b.vertices[d].position;
			m = b.vertices[c].position;
			n = b.vertices[e].position;
			o = j[h];
			p = j[f];
			t = j[G];
			u = m.x - k.x;
			v = n.x - k.x;
			C = m.y - k.y;
			E = n.y - k.y;
			y = m.z - k.z;
			D = n.z - k.z;
			x = p.u - o.u;
			I = t.u - o.u;
			A = p.v - o.v;
			z = t.v - o.v;
			S = 1 / (x * z - I * A);
			N.set((z * u - A * v) *
				S, (z * C - A * E) * S, (z * y - A * D) * S);
			g.set((x * v - I * u) * S, (x * E - I * C) * S, (x * D - I * y) * S);
			M[d].addSelf(N);
			M[c].addSelf(N);
			M[e].addSelf(N);
			F[d].addSelf(g);
			F[c].addSelf(g);
			F[e].addSelf(g)
		}
		var c, d, e, f, h, j, k, m, n, o, p, t, u, v, C, E, y, D, x, I, A, z, S, G, M = [],
			F = [],
			N = new THREE.Vector3,
			g = new THREE.Vector3,
			Y = new THREE.Vector3,
			O = new THREE.Vector3,
			V = new THREE.Vector3;
		c = 0;
		for (d = this.vertices.length; c < d; c++) M[c] = new THREE.Vector3, F[c] = new THREE.Vector3;
		c = 0;
		for (d = this.faces.length; c < d; c++) h = this.faces[c], j = this.faceVertexUvs[0][c], h instanceof
		THREE.Face3 ? b(this, h.a, h.b, h.c, 0, 1, 2) : h instanceof THREE.Face4 && (b(this, h.a, h.b, h.c, 0, 1, 2), b(this, h.a, h.b, h.d, 0, 1, 3));
		var L = ["a", "b", "c", "d"];
		c = 0;
		for (d = this.faces.length; c < d; c++) {
			h = this.faces[c];
			for (e = 0; e < h.vertexNormals.length; e++) V.copy(h.vertexNormals[e]), f = h[L[e]], G = M[f], Y.copy(G), Y.subSelf(V.multiplyScalar(V.dot(G))).normalize(), O.cross(h.vertexNormals[e], G), f = O.dot(F[f]), f = f < 0 ? -1 : 1, h.vertexTangents[e] = new THREE.Vector4(Y.x, Y.y, Y.z, f)
		}
		this.hasTangents = !0
	},
	computeBoundingBox: function() {
		var b;
		if (this.vertices.length > 0) {
			this.boundingBox = {
				x: [this.vertices[0].position.x, this.vertices[0].position.x],
				y: [this.vertices[0].position.y, this.vertices[0].position.y],
				z: [this.vertices[0].position.z, this.vertices[0].position.z]
			};
			for (var c = 1, d = this.vertices.length; c < d; c++) {
				b = this.vertices[c];
				if (b.position.x < this.boundingBox.x[0]) this.boundingBox.x[0] = b.position.x;
				else if (b.position.x > this.boundingBox.x[1]) this.boundingBox.x[1] = b.position.x;
				if (b.position.y < this.boundingBox.y[0]) this.boundingBox.y[0] = b.position.y;
				else if (b.position.y > this.boundingBox.y[1]) this.boundingBox.y[1] = b.position.y;
				if (b.position.z < this.boundingBox.z[0]) this.boundingBox.z[0] = b.position.z;
				else if (b.position.z > this.boundingBox.z[1]) this.boundingBox.z[1] = b.position.z
			}
		}
	},
	computeBoundingSphere: function() {
		for (var b = 0, c = 0, d = this.vertices.length; c < d; c++) b = Math.max(b, this.vertices[c].position.length());
		this.boundingSphere = {
			radius: b
		}
	},
	computeEdgeFaces: function() {
		function b(b, d) {
			return Math.min(b, d) + "_" + Math.max(b, d)
		}

		function c(b, d, c) {
			b[d] ===
				void 0 ? (b[d] = {
					set: {},
					array: []
				}, b[d].set[c] = 1, b[d].array.push(c)) : b[d].set[c] === void 0 && (b[d].set[c] = 1, b[d].array.push(c))
		}
		var d, e, f, h, j, k = {};
		d = 0;
		for (e = this.faces.length; d < e; d++) j = this.faces[d], j instanceof THREE.Face3 ? (f = b(j.a, j.b), c(k, f, d), f = b(j.b, j.c), c(k, f, d), f = b(j.a, j.c), c(k, f, d)) : j instanceof THREE.Face4 && (f = b(j.b, j.d), c(k, f, d), f = b(j.a, j.b), c(k, f, d), f = b(j.a, j.d), c(k, f, d), f = b(j.b, j.c), c(k, f, d), f = b(j.c, j.d), c(k, f, d));
		d = 0;
		for (e = this.edges.length; d < e; d++) {
			j = this.edges[d];
			f = j.vertexIndices[0];
			h = j.vertexIndices[1];
			j.faceIndices = k[b(f, h)].array;
			for (f = 0; f < j.faceIndices.length; f++) h = j.faceIndices[f], j.faces.push(this.faces[h])
		}
	}
};
THREE.GeometryIdCounter = 0;
THREE.Spline = function(b) {
	function c(b, d, c, e, h, f, j) {
		b = (c - b) * 0.5;
		e = (e - d) * 0.5;
		return (2 * (d - c) + b + e) * j + (-3 * (d - c) - 2 * b - e) * f + b * h + d
	}
	this.points = b;
	var d = [],
		e = {
			x: 0,
			y: 0,
			z: 0
		},
		f, h, j, k, m, n, o, p, t;
	this.initFromArray = function(b) {
		this.points = [];
		for (var d = 0; d < b.length; d++) this.points[d] = {
			x: b[d][0],
			y: b[d][1],
			z: b[d][2]
		}
	};
	this.getPoint = function(b) {
		f = (this.points.length - 1) * b;
		h = Math.floor(f);
		j = f - h;
		d[0] = h == 0 ? h : h - 1;
		d[1] = h;
		d[2] = h > this.points.length - 2 ? h : h + 1;
		d[3] = h > this.points.length - 3 ? h : h + 2;
		n = this.points[d[0]];
		o = this.points[d[1]];
		p = this.points[d[2]];
		t = this.points[d[3]];
		k = j * j;
		m = j * k;
		e.x = c(n.x, o.x, p.x, t.x, j, k, m);
		e.y = c(n.y, o.y, p.y, t.y, j, k, m);
		e.z = c(n.z, o.z, p.z, t.z, j, k, m);
		return e
	};
	this.getControlPointsArray = function() {
		var b, d, c = this.points.length,
			e = [];
		for (b = 0; b < c; b++) d = this.points[b], e[b] = [d.x, d.y, d.z];
		return e
	};
	this.getLength = function(b) {
		var d, c, e = d = d = 0,
			h = new THREE.Vector3,
			f = new THREE.Vector3,
			j = [],
			k = 0;
		j[0] = 0;
		b || (b = 100);
		c = this.points.length * b;
		h.copy(this.points[0]);
		for (b = 1; b < c; b++) d = b / c, position = this.getPoint(d), f.copy(position),
			k += f.distanceTo(h), h.copy(position), d *= this.points.length - 1, d = Math.floor(d), d != e && (j[d] = k, e = d);
		j[j.length] = k;
		return {
			chunks: j,
			total: k
		}
	};
	this.reparametrizeByArcLength = function(b) {
		var d, c, e, h, f, j, k = [],
			m = new THREE.Vector3,
			n = this.getLength();
		k.push(m.copy(this.points[0]).clone());
		for (d = 1; d < this.points.length; d++) {
			c = n.chunks[d] - n.chunks[d - 1];
			j = Math.ceil(b * c / n.total);
			h = (d - 1) / (this.points.length - 1);
			f = d / (this.points.length - 1);
			for (c = 1; c < j - 1; c++) e = h + c * (1 / j) * (f - h), position = this.getPoint(e), k.push(m.copy(position).clone());
			k.push(m.copy(this.points[d]).clone())
		}
		this.points = k
	}
};
THREE.Edge = function(b, c, d, e) {
	this.vertices = [b, c];
	this.vertexIndices = [d, e];
	this.faces = [];
	this.faceIndices = []
};
THREE.Camera = function(b, c, d, e, f) {
	THREE.Object3D.call(this);
	this.fov = b || 50;
	this.aspect = c || 1;
	this.near = d || 0.1;
	this.far = e || 2E3;
	this.target = f || new THREE.Object3D;
	this.useTarget = !0;
	this.matrixWorldInverse = new THREE.Matrix4;
	this.projectionMatrix = null;
	this.updateProjectionMatrix()
};
THREE.Camera.prototype = new THREE.Object3D;
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.supr = THREE.Object3D.prototype;
THREE.Camera.prototype.translate = function(b, c) {
	this.matrix.rotateAxis(c);
	this.position.addSelf(c.multiplyScalar(b));
	this.target.position.addSelf(c.multiplyScalar(b))
};
THREE.Camera.prototype.updateProjectionMatrix = function() {
	this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.Camera.prototype.update = function(b, c, d) {
	if (this.useTarget) this.matrix.lookAt(this.position, this.target.position, this.up), this.matrix.setPosition(this.position), b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse), c = !0;
	else if (this.matrixAutoUpdate && this.updateMatrix(), c || this.matrixWorldNeedsUpdate) b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0, THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse);
	for (b = 0; b < this.children.length; b++) this.children[b].update(this.matrixWorld, c, d)
};
THREE.Light = function(b) {
	THREE.Object3D.call(this);
	this.color = new THREE.Color(b)
};
THREE.Light.prototype = new THREE.Object3D;
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function(b) {
	THREE.Light.call(this, b)
};
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function(b, c, d, e) {
	THREE.Light.call(this, b);
	this.position = new THREE.Vector3(0, 1, 0);
	this.intensity = c || 1;
	this.distance = d || 0;
	this.castShadow = e !== void 0 ? e : !1
};
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function(b, c, d) {
	THREE.Light.call(this, b);
	this.position = new THREE.Vector3;
	this.intensity = c || 1;
	this.distance = d || 0
};
THREE.PointLight.prototype = new THREE.Light;
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.LensFlare = function(b, c, d, e) {
	THREE.Object3D.call(this);
	this.positionScreen = new THREE.Vector3;
	this.lensFlares = [];
	this.customUpdateCallback = void 0;
	b !== void 0 && this.add(b, c, d, e)
};
THREE.LensFlare.prototype = new THREE.Object3D;
THREE.LensFlare.prototype.constructor = THREE.LensFlare;
THREE.LensFlare.prototype.supr = THREE.Object3D.prototype;
THREE.LensFlare.prototype.add = function(b, c, d, e) {
	c === void 0 && (c = -1);
	d === void 0 && (d = 0);
	if (e === void 0) e = THREE.BillboardBlending;
	d = Math.min(d, Math.max(0, d));
	this.lensFlares.push({
		texture: b,
		size: c,
		distance: d,
		x: 0,
		y: 0,
		z: 0,
		scale: 1,
		rotation: 1,
		opacity: 1,
		blending: e
	})
};
THREE.LensFlare.prototype.updateLensFlares = function() {
	var b, c = this.lensFlares.length,
		d, e = -this.positionScreen.x * 2,
		f = -this.positionScreen.y * 2;
	for (b = 0; b < c; b++) d = this.lensFlares[b], d.x = this.positionScreen.x + e * d.distance, d.y = this.positionScreen.y + f * d.distance, d.wantedRotation = d.x * Math.PI * 0.25, d.rotation += (d.wantedRotation - d.rotation) * 0.25
};
THREE.Material = function(b) {
	this.id = THREE.MaterialCounter.value++;
	b = b || {};
	this.opacity = b.opacity !== void 0 ? b.opacity : 1;
	this.transparent = b.transparent !== void 0 ? b.transparent : !1;
	this.blending = b.blending !== void 0 ? b.blending : THREE.NormalBlending;
	this.depthTest = b.depthTest !== void 0 ? b.depthTest : !0
};
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.MultiplyBlending = 3;
THREE.AdditiveAlphaBlending = 4;
THREE.MaterialCounter = {
	value: 0
};
THREE.CubeReflectionMapping = function() {};
THREE.CubeRefractionMapping = function() {};
THREE.LatitudeReflectionMapping = function() {};
THREE.LatitudeRefractionMapping = function() {};
THREE.SphericalReflectionMapping = function() {};
THREE.SphericalRefractionMapping = function() {};
THREE.UVMapping = function() {};
THREE.LineBasicMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.linewidth = b.linewidth !== void 0 ? b.linewidth : 1;
	this.linecap = b.linecap !== void 0 ? b.linecap : "round";
	this.linejoin = b.linejoin !== void 0 ? b.linejoin : "round";
	this.vertexColors = b.vertexColors ? b.vertexColors : !1
};
THREE.LineBasicMaterial.prototype = new THREE.Material;
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.MeshBasicMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.map = b.map !== void 0 ? b.map : null;
	this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
	this.envMap = b.envMap !== void 0 ? b.envMap : null;
	this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
	this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
	this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
	this.shading = b.shading !==
		void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
	this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
	this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.skinning = b.skinning !== void 0 ? b.skinning : !1;
	this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshBasicMaterial.prototype = new THREE.Material;
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.map = b.map !== void 0 ? b.map : null;
	this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
	this.envMap = b.envMap !== void 0 ? b.envMap : null;
	this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
	this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
	this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
	this.shading = b.shading !==
		void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
	this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
	this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.skinning = b.skinning !== void 0 ? b.skinning : !1;
	this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshLambertMaterial.prototype = new THREE.Material;
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.ambient = b.ambient !== void 0 ? new THREE.Color(b.ambient) : new THREE.Color(328965);
	this.specular = b.specular !== void 0 ? new THREE.Color(b.specular) : new THREE.Color(1118481);
	this.shininess = b.shininess !== void 0 ? b.shininess : 30;
	this.map = b.map !== void 0 ? b.map : null;
	this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
	this.envMap = b.envMap !== void 0 ? b.envMap : null;
	this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
	this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
	this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
	this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
	this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
	this.wireframeLinejoin = b.wireframeLinejoin !==
		void 0 ? b.wireframeLinejoin : "round";
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.skinning = b.skinning !== void 0 ? b.skinning : !1;
	this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshPhongMaterial.prototype = new THREE.Material;
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1
};
THREE.MeshDepthMaterial.prototype = new THREE.Material;
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.shading = b.shading ? b.shading : THREE.FlatShading;
	this.wireframe = b.wireframe ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth ? b.wireframeLinewidth : 1
};
THREE.MeshNormalMaterial.prototype = new THREE.Material;
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshFaceMaterial = function() {};
THREE.MeshShaderMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.fragmentShader = b.fragmentShader !== void 0 ? b.fragmentShader : "void main() {}";
	this.vertexShader = b.vertexShader !== void 0 ? b.vertexShader : "void main() {}";
	this.uniforms = b.uniforms !== void 0 ? b.uniforms : {};
	this.attributes = b.attributes;
	this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
	this.fog =
		b.fog !== void 0 ? b.fog : !1;
	this.lights = b.lights !== void 0 ? b.lights : !1;
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.skinning = b.skinning !== void 0 ? b.skinning : !1;
	this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshShaderMaterial.prototype = new THREE.Material;
THREE.MeshShaderMaterial.prototype.constructor = THREE.MeshShaderMaterial;
THREE.ShadowVolumeDynamicMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.map = b.map !== void 0 ? b.map : null;
	this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
	this.envMap = b.envMap !== void 0 ? b.envMap : null;
	this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
	this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
	this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
	this.shading = b.shading !==
		void 0 ? b.shading : THREE.SmoothShading;
	this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
	this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
	this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
	this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
	this.skinning = b.skinning !== void 0 ? b.skinning : !1;
	this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.ShadowVolumeDynamicMaterial.prototype = new THREE.Material;
THREE.ShadowVolumeDynamicMaterial.prototype.constructor = THREE.ShadowVolumeDynamicMaterial;
THREE.ParticleBasicMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.map = b.map !== void 0 ? b.map : null;
	this.size = b.size !== void 0 ? b.size : 1;
	this.sizeAttenuation = b.sizeAttenuation !== void 0 ? b.sizeAttenuation : !0;
	this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1
};
THREE.ParticleBasicMaterial.prototype = new THREE.Material;
THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial;
THREE.ParticleCanvasMaterial = function(b) {
	THREE.Material.call(this, b);
	b = b || {};
	this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
	this.program = b.program !== void 0 ? b.program : function() {}
};
THREE.ParticleCanvasMaterial.prototype = new THREE.Material;
THREE.ParticleCanvasMaterial.prototype.constructor = THREE.ParticleCanvasMaterial;
THREE.ParticleDOMMaterial = function(b) {
	THREE.Material.call(this);
	this.domElement = b
};
THREE.Texture = function(b, c, d, e, f, h) {
	this.image = b;
	this.mapping = c !== void 0 ? c : new THREE.UVMapping;
	this.wrapS = d !== void 0 ? d : THREE.ClampToEdgeWrapping;
	this.wrapT = e !== void 0 ? e : THREE.ClampToEdgeWrapping;
	this.magFilter = f !== void 0 ? f : THREE.LinearFilter;
	this.minFilter = h !== void 0 ? h : THREE.LinearMipMapLinearFilter;
	this.offset = new THREE.Vector2(0, 0);
	this.repeat = new THREE.Vector2(1, 1);
	this.needsUpdate = !1
};
THREE.Texture.prototype = {
	clone: function() {
		return new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter)
	}
};
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
THREE.Particle = function(b) {
	THREE.Object3D.call(this);
	this.materials = b instanceof Array ? b : [b]
};
THREE.Particle.prototype = new THREE.Object3D;
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.ParticleSystem = function(b, c) {
	THREE.Object3D.call(this);
	this.geometry = b;
	this.materials = c instanceof Array ? c : [c];
	this.sortParticles = !1
};
THREE.ParticleSystem.prototype = new THREE.Object3D;
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
THREE.Line = function(b, c, d) {
	THREE.Object3D.call(this);
	this.geometry = b;
	this.materials = c instanceof Array ? c : [c];
	this.type = d != void 0 ? d : THREE.LineStrip
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D;
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function(b, c) {
	THREE.Object3D.call(this);
	this.geometry = b;
	this.materials = c && c.length ? c : [c];
	this.overdraw = this.doubleSided = this.flipSided = !1;
	if (this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = b.boundingSphere.radius, this.geometry.morphTargets.length)) {
		this.morphTargetBase = -1;
		this.morphTargetForcedOrder = [];
		this.morphTargetInfluences = [];
		this.morphTargetDictionary = {};
		for (var d = 0; d < this.geometry.morphTargets.length; d++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[d].name] =
			d
	}
};
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Mesh.prototype.getMorphTargetIndexByName = function(b) {
	if (this.morphTargetDictionary[b] !== void 0) return this.morphTargetDictionary[b];
	console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + b + " does not exist. Returning 0.");
	return 0
};
THREE.Bone = function(b) {
	THREE.Object3D.call(this);
	this.skin = b;
	this.skinMatrix = new THREE.Matrix4;
	this.hasNoneBoneChildren = !1
};
THREE.Bone.prototype = new THREE.Object3D;
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.supr = THREE.Object3D.prototype;
THREE.Bone.prototype.update = function(b, c, d) {
	this.matrixAutoUpdate && (c |= this.updateMatrix());
	if (c || this.matrixWorldNeedsUpdate) b ? this.skinMatrix.multiply(b, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
	var e, f = this.children.length;
	if (this.hasNoneBoneChildren) {
		this.matrixWorld.multiply(this.skin.matrixWorld, this.skinMatrix);
		for (e = 0; e < f; e++) b = this.children[e], b instanceof THREE.Bone ? b.update(this.skinMatrix, c, d) : b.update(this.matrixWorld, !0, d)
	} else
		for (e = 0; e < f; e++) this.children[e].update(this.skinMatrix,
			c, d)
};
THREE.Bone.prototype.addChild = function(b) {
	if (this.children.indexOf(b) === -1 && (b.parent !== void 0 && b.parent.removeChild(b), b.parent = this, this.children.push(b), !(b instanceof THREE.Bone))) this.hasNoneBoneChildren = !0
};
THREE.SkinnedMesh = function(b, c) {
	THREE.Mesh.call(this, b, c);
	this.identityMatrix = new THREE.Matrix4;
	this.bones = [];
	this.boneMatrices = [];
	var d, e, f, h, j, k;
	if (this.geometry.bones !== void 0) {
		for (d = 0; d < this.geometry.bones.length; d++) f = this.geometry.bones[d], h = f.pos, j = f.rotq, k = f.scl, e = this.addBone(), e.name = f.name, e.position.set(h[0], h[1], h[2]), e.quaternion.set(j[0], j[1], j[2], j[3]), e.useQuaternion = !0, k !== void 0 ? e.scale.set(k[0], k[1], k[2]) : e.scale.set(1, 1, 1);
		for (d = 0; d < this.bones.length; d++) f = this.geometry.bones[d],
			e = this.bones[d], f.parent === -1 ? this.addChild(e) : this.bones[f.parent].addChild(e);
		this.boneMatrices = new Float32Array(16 * this.bones.length);
		this.pose()
	}
};
THREE.SkinnedMesh.prototype = new THREE.Mesh;
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.update = function(b, c, d) {
	if (this.visible) {
		this.matrixAutoUpdate && (c |= this.updateMatrix());
		if (c || this.matrixWorldNeedsUpdate) b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
		var e, f = this.children.length;
		for (e = 0; e < f; e++) b = this.children[e], b instanceof THREE.Bone ? b.update(this.identityMatrix, !1, d) : b.update(this.matrixWorld, c, d);
		d = this.bones.length;
		ba = this.bones;
		bm = this.boneMatrices;
		for (c = 0; c < d; c++) ba[c].skinMatrix.flattenToArrayOffset(bm,
			c * 16)
	}
};
THREE.SkinnedMesh.prototype.addBone = function(b) {
	b === void 0 && (b = new THREE.Bone(this));
	this.bones.push(b);
	return b
};
THREE.SkinnedMesh.prototype.pose = function() {
	this.update(void 0, !0);
	for (var b, c = [], d = 0; d < this.bones.length; d++) b = this.bones[d], c.push(THREE.Matrix4.makeInvert(b.skinMatrix)), b.skinMatrix.flattenToArrayOffset(this.boneMatrices, d * 16);
	if (this.geometry.skinVerticesA === void 0) {
		this.geometry.skinVerticesA = [];
		this.geometry.skinVerticesB = [];
		var e;
		for (b = 0; b < this.geometry.skinIndices.length; b++) {
			var d = this.geometry.vertices[b].position,
				f = this.geometry.skinIndices[b].x,
				h = this.geometry.skinIndices[b].y;
			e = new THREE.Vector3(d.x,
				d.y, d.z);
			this.geometry.skinVerticesA.push(c[f].multiplyVector3(e));
			e = new THREE.Vector3(d.x, d.y, d.z);
			this.geometry.skinVerticesB.push(c[h].multiplyVector3(e));
			this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y !== 1 && (d = (1 - (this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y)) * 0.5, this.geometry.skinWeights[b].x += d, this.geometry.skinWeights[b].y += d)
		}
	}
};
THREE.Ribbon = function(b, c) {
	THREE.Object3D.call(this);
	this.geometry = b;
	this.materials = c instanceof Array ? c : [c];
	this.doubleSided = this.flipSided = !1
};
THREE.Ribbon.prototype = new THREE.Object3D;
THREE.Ribbon.prototype.constructor = THREE.Ribbon;
THREE.Sound = function(b, c, d, e) {
	THREE.Object3D.call(this);
	this.isPlaying = this.isAddedToDOM = this.isLoaded = !1;
	this.duration = -1;
	this.radius = c !== void 0 ? Math.abs(c) : 100;
	this.volume = Math.min(1, Math.max(0, d !== void 0 ? d : 1));
	this.domElement = document.createElement("audio");
	this.domElement.volume = 0;
	this.domElement.pan = 0;
	this.domElement.loop = e !== void 0 ? e : !0;
	this.sources = b instanceof Array ? b : [b];
	for (var f, d = this.sources.length, b = 0; b < d; b++)
		if (c = this.sources[b], c.toLowerCase(), c.indexOf(".mp3") !== -1 ? f = "audio/mpeg" :
			c.indexOf(".ogg") !== -1 ? f = "audio/ogg" : c.indexOf(".wav") !== -1 && (f = "audio/wav"), this.domElement.canPlayType(f)) {
			f = document.createElement("source");
			f.src = this.sources[b];
			this.domElement.THREESound = this;
			this.domElement.appendChild(f);
			this.domElement.addEventListener("canplay", this.onLoad, !0);
			this.domElement.load();
			break
		}
};
THREE.Sound.prototype = new THREE.Object3D;
THREE.Sound.prototype.constructor = THREE.Sound;
THREE.Sound.prototype.supr = THREE.Object3D.prototype;
THREE.Sound.prototype.onLoad = function() {
	var b = this.THREESound;
	if (!b.isLoaded) this.removeEventListener("canplay", this.onLoad, !0), b.isLoaded = !0, b.duration = this.duration, b.isPlaying && b.play()
};
THREE.Sound.prototype.addToDOM = function(b) {
	this.isAddedToDOM = !0;
	b.appendChild(this.domElement)
};
THREE.Sound.prototype.play = function(b) {
	this.isPlaying = !0;
	if (this.isLoaded && (this.domElement.play(), b)) this.domElement.currentTime = b % this.duration
};
THREE.Sound.prototype.pause = function() {
	this.isPlaying = !1;
	this.domElement.pause()
};
THREE.Sound.prototype.stop = function() {
	this.isPlaying = !1;
	this.domElement.pause();
	this.domElement.currentTime = 0
};
THREE.Sound.prototype.calculateVolumeAndPan = function(b) {
	b = b.length();
	this.domElement.volume = b <= this.radius ? this.volume * (1 - b / this.radius) : 0
};
THREE.Sound.prototype.update = function(b, c, d) {
	this.matrixAutoUpdate && (this.matrix.setPosition(this.position), c = !0);
	if (c || this.matrixWorldNeedsUpdate) b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
	for (var e = this.children.length, b = 0; b < e; b++) this.children[b].update(this.matrixWorld, c, d)
};
THREE.LOD = function() {
	THREE.Object3D.call(this);
	this.LODs = []
};
THREE.LOD.prototype = new THREE.Object3D;
THREE.LOD.prototype.constructor = THREE.LOD;
THREE.LOD.prototype.supr = THREE.Object3D.prototype;
THREE.LOD.prototype.add = function(b, c) {
	c === void 0 && (c = 0);
	for (var c = Math.abs(c), d = 0; d < this.LODs.length; d++)
		if (c < this.LODs[d].visibleAtDistance) break;
	this.LODs.splice(d, 0, {
		visibleAtDistance: c,
		object3D: b
	});
	this.addChild(b)
};
THREE.LOD.prototype.update = function(b, c, d) {
	this.matrixAutoUpdate && (c |= this.updateMatrix());
	if (c || this.matrixWorldNeedsUpdate) b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
	if (this.LODs.length > 1) {
		b = d.matrixWorldInverse;
		b = -(b.n31 * this.position.x + b.n32 * this.position.y + b.n33 * this.position.z + b.n34);
		this.LODs[0].object3D.visible = !0;
		for (var e = 1; e < this.LODs.length; e++)
			if (b >= this.LODs[e].visibleAtDistance) this.LODs[e - 1].object3D.visible = !1,
				this.LODs[e].object3D.visible = !0;
			else break;
		for (; e < this.LODs.length; e++) this.LODs[e].object3D.visible = !1
	}
	for (b = 0; b < this.children.length; b++) this.children[b].update(this.matrixWorld, c, d)
};
THREE.ShadowVolume = function(b, c) {
	b instanceof THREE.Mesh ? (THREE.Mesh.call(this, b.geometry, c ? [new THREE.ShadowVolumeDynamicMaterial] : [new THREE.ShadowVolumeDynamicMaterial]), b.addChild(this)) : THREE.Mesh.call(this, b, c ? [new THREE.ShadowVolumeDynamicMaterial] : [new THREE.ShadowVolumeDynamicMaterial]);
	this.calculateShadowVolumeGeometry()
};
THREE.ShadowVolume.prototype = new THREE.Mesh;
THREE.ShadowVolume.prototype.constructor = THREE.ShadowVolume;
THREE.ShadowVolume.prototype.supr = THREE.Mesh.prototype;
THREE.ShadowVolume.prototype.calculateShadowVolumeGeometry = function() {
	if (this.geometry.edges && this.geometry.edges.length) {
		var b, c, d, e, f, h, j, k, m, n, o, p, t, u, v = new THREE.Geometry;
		v.vertices = this.geometry.vertices;
		e = v.faces = this.geometry.faces;
		var C = v.egdes = this.geometry.edges,
			E = v.edgeFaces = [];
		f = 0;
		var y = [];
		b = 0;
		for (c = e.length; b < c; b++)
			if (d = e[b], y.push(f), f += d instanceof THREE.Face3 ? 3 : 4, d.vertexNormals[0] = d.normal, d.vertexNormals[1] = d.normal, d.vertexNormals[2] = d.normal, d instanceof THREE.Face4) d.vertexNormals[3] =
				d.normal;
		b = 0;
		for (c = C.length; b < c; b++) k = C[b], d = k.faces[0], e = k.faces[1], f = k.faceIndices[0], h = k.faceIndices[1], j = k.vertexIndices[0], k = k.vertexIndices[1], d.a === j ? (m = "a", o = y[f] + 0) : d.b === j ? (m = "b", o = y[f] + 1) : d.c === j ? (m = "c", o = y[f] + 2) : d.d === j && (m = "d", o = y[f] + 3), d.a === k ? (m += "a", p = y[f] + 0) : d.b === k ? (m += "b", p = y[f] + 1) : d.c === k ? (m += "c", p = y[f] + 2) : d.d === k && (m += "d", p = y[f] + 3), e.a === j ? (n = "a", t = y[h] + 0) : e.b === j ? (n = "b", t = y[h] + 1) : e.c === j ? (n = "c", t = y[h] + 2) : e.d === j && (n = "d", t = y[h] + 3), e.a === k ? (n += "a", u = y[h] + 0) : e.b === k ? (n += "b", u = y[h] +
			1) : e.c === k ? (n += "c", u = y[h] + 2) : e.d === k && (n += "d", u = y[h] + 3), m === "ac" || m === "ad" || m === "ca" || m === "da" ? o > p && (d = o, o = p, p = d) : o < p && (d = o, o = p, p = d), n === "ac" || n === "ad" || n === "ca" || n === "da" ? t > u && (d = t, t = u, u = d) : t < u && (d = t, t = u, u = d), d = new THREE.Face4(o, p, t, u), d.normal.set(1, 0, 0), E.push(d);
		this.geometry = v
	} else this.calculateShadowVolumeGeometryWithoutEdgeInfo(this.geometry)
};
THREE.ShadowVolume.prototype.calculateShadowVolumeGeometryWithoutEdgeInfo = function(b) {
	this.geometry = new THREE.Geometry;
	this.geometry.boundingSphere = b.boundingSphere;
	this.geometry.edgeFaces = [];
	var c = this.geometry.vertices,
		d = this.geometry.faces,
		e = this.geometry.edgeFaces,
		f = b.faces,
		b = b.vertices,
		h = f.length,
		j, k, m, n, o, p = ["a", "b", "c", "d"];
	for (m = 0; m < h; m++) {
		k = c.length;
		j = f[m];
		j instanceof THREE.Face4 ? (n = 4, k = new THREE.Face4(k, k + 1, k + 2, k + 3)) : (n = 3, k = new THREE.Face3(k, k + 1, k + 2));
		k.normal.copy(j.normal);
		d.push(k);
		for (k = 0; k < n; k++) o = b[j[p[k]]], c.push(new THREE.Vertex(o.position.clone()))
	}
	for (h = 0; h < f.length - 1; h++) {
		b = d[h];
		for (j = h + 1; j < f.length; j++) k = d[j], k = this.facesShareEdge(c, b, k), k !== void 0 && (k = new THREE.Face4(k.indices[0], k.indices[3], k.indices[2], k.indices[1]), k.normal.set(1, 0, 0), e.push(k))
	}
};
THREE.ShadowVolume.prototype.facesShareEdge = function(b, c, d) {
	var e, f, h, j, k, m, n, o, p, t, u, v, C, E = 0,
		y = ["a", "b", "c", "d"];
	e = c instanceof THREE.Face4 ? 4 : 3;
	f = d instanceof THREE.Face4 ? 4 : 3;
	for (v = 0; v < e; v++) {
		h = c[y[v]];
		k = b[h];
		for (C = 0; C < f; C++)
			if (j = d[y[C]], m = b[j], Math.abs(k.position.x - m.position.x) < 1.0E-4 && Math.abs(k.position.y - m.position.y) < 1.0E-4 && Math.abs(k.position.z - m.position.z) < 1.0E-4 && (E++, E === 1 && (n = k, o = m, p = h, t = j, u = y[v]), E === 2)) return u += y[v], u === "ad" || u === "ac" ? {
				faces: [c, d],
				vertices: [n, o, m, k],
				indices: [p, t,
					j, h
				],
				vertexTypes: [1, 2, 2, 1],
				extrudable: !0
			} : {
				faces: [c, d],
				vertices: [n, k, m, o],
				indices: [p, h, j, t],
				vertexTypes: [1, 1, 2, 2],
				extrudable: !0
			}
	}
};
THREE.Sprite = function(b) {
	THREE.Object3D.call(this);
	if (b.material !== void 0) this.material = b.material, this.map = void 0, this.blending = material.blending;
	else if (b.map !== void 0) this.map = b.map instanceof THREE.Texture ? b.map : ImageUtils.loadTexture(b.map), this.material = void 0, this.blending = b.blending !== void 0 ? b.blending : THREE.NormalBlending;
	this.useScreenCoordinates = b.useScreenCoordinates !== void 0 ? b.useScreenCoordinates : !0;
	this.mergeWith3D = b.mergeWith3D !== void 0 ? b.mergeWith3D : !this.useScreenCoordinates;
	this.affectedByDistance =
		b.affectedByDistance !== void 0 ? b.affectedByDistance : !this.useScreenCoordinates;
	this.alignment = b.alignment instanceof THREE.Vector2 ? b.alignment : THREE.SpriteAlignment.center;
	this.rotation3d = this.rotation;
	this.rotation = 0;
	this.opacity = 1;
	this.uvOffset = new THREE.Vector2(0, 0);
	this.uvScale = new THREE.Vector2(1, 1)
};
THREE.Sprite.prototype = new THREE.Object3D;
THREE.Sprite.prototype.constructor = THREE.Sprite;
THREE.Sprite.prototype.supr = THREE.Object3D.prototype;
THREE.Sprite.prototype.updateMatrix = function() {
	this.matrix.setPosition(this.position);
	this.rotation3d.set(0, 0, this.rotation);
	this.matrix.setRotationFromEuler(this.rotation3d);
	if (this.scale.x !== 1 || this.scale.y !== 1) this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, this.scale.y);
	this.matrixWorldNeedsUpdate = !0
};
THREE.SpriteAlignment = {};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
THREE.Scene = function() {
	THREE.Object3D.call(this);
	this.matrixAutoUpdate = !1;
	this.collisions = this.fog = null;
	this.objects = [];
	this.lights = [];
	this.sounds = [];
	this.__objectsAdded = [];
	this.__objectsRemoved = []
};
THREE.Scene.prototype = new THREE.Object3D;
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.supr = THREE.Object3D.prototype;
THREE.Scene.prototype.addChild = function(b) {
	this.supr.addChild.call(this, b);
	this.addChildRecurse(b)
};
THREE.Scene.prototype.addChildRecurse = function(b) {
	if (b instanceof THREE.Light) this.lights.indexOf(b) === -1 && this.lights.push(b);
	else if (b instanceof THREE.Sound) this.sounds.indexOf(b) === -1 && this.sounds.push(b);
	else if (!(b instanceof THREE.Camera || b instanceof THREE.Bone) && this.objects.indexOf(b) === -1) this.objects.push(b), this.__objectsAdded.push(b);
	for (var c = 0; c < b.children.length; c++) this.addChildRecurse(b.children[c])
};
THREE.Scene.prototype.removeChild = function(b) {
	this.supr.removeChild.call(this, b);
	this.removeChildRecurse(b)
};
THREE.Scene.prototype.removeChildRecurse = function(b) {
	if (b instanceof THREE.Light) {
		var c = this.lights.indexOf(b);
		c !== -1 && this.lights.splice(c, 1)
	} else b instanceof THREE.Sound ? (c = this.sounds.indexOf(b), c !== -1 && this.sounds.splice(c, 1)) : b instanceof THREE.Camera || (c = this.objects.indexOf(b), c !== -1 && (this.objects.splice(c, 1), this.__objectsRemoved.push(b)));
	for (c = 0; c < b.children.length; c++) this.removeChildRecurse(b.children[c])
};
THREE.Scene.prototype.addObject = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeObject = THREE.Scene.prototype.removeChild;
THREE.Scene.prototype.addLight = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeLight = THREE.Scene.prototype.removeChild;
THREE.Fog = function(b, c, d) {
	this.color = new THREE.Color(b);
	this.near = c || 1;
	this.far = d || 1E3
};
THREE.FogExp2 = function(b, c) {
	this.color = new THREE.Color(b);
	this.density = c !== void 0 ? c : 2.5E-4
};
THREE.Projector = function() {
	function b() {
		var b = m[k] = m[k] || new THREE.RenderableVertex;
		k++;
		return b
	}

	function c(b, d) {
		return d.z - b.z
	}

	function d(b, d) {
		var c = 0,
			e = 1,
			h = b.z + b.w,
			f = d.z + d.w,
			j = -b.z + b.w,
			k = -d.z + d.w;
		return h >= 0 && f >= 0 && j >= 0 && k >= 0 ? !0 : h < 0 && f < 0 || j < 0 && k < 0 ? !1 : (h < 0 ? c = Math.max(c, h / (h - f)) : f < 0 && (e = Math.min(e, h / (h - f))), j < 0 ? c = Math.max(c, j / (j - k)) : k < 0 && (e = Math.min(e, j / (j - k))), e < c ? !1 : (b.lerpSelf(d, c), d.lerpSelf(b, 1 - e), !0))
	}
	var e, f, h = [],
		j, k, m = [],
		n, o, p = [],
		t, u = [],
		v, C, E = [],
		y, D, x = [],
		I = new THREE.Vector4,
		A = new THREE.Vector4,
		z = new THREE.Matrix4,
		S = new THREE.Matrix4,
		G = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
		M = new THREE.Vector4,
		F = new THREE.Vector4;
	this.projectVector = function(b, d) {
		z.multiply(d.projectionMatrix, d.matrixWorldInverse);
		z.multiplyVector3(b);
		return b
	};
	this.unprojectVector = function(b, d) {
		z.multiply(d.matrixWorld, THREE.Matrix4.makeInvert(d.projectionMatrix));
		z.multiplyVector3(b);
		return b
	};
	this.projectObjects = function(b, d, j) {
		var d = [],
			k, m, n;
		f = 0;
		m =
			b.objects;
		b = 0;
		for (k = m.length; b < k; b++) {
			n = m[b];
			var p;
			if (!(p = !n.visible))
				if (p = n instanceof THREE.Mesh) {
					a: {
						p = void 0;
						for (var o = n.matrixWorld, t = -n.geometry.boundingSphere.radius * Math.max(n.scale.x, Math.max(n.scale.y, n.scale.z)), u = 0; u < 6; u++)
							if (p = G[u].x * o.n14 + G[u].y * o.n24 + G[u].z * o.n34 + G[u].w, p <= t) {
								p = !1;
								break a
							}
						p = !0
					}
					p = !p
				}
			if (!p) p = h[f] = h[f] || new THREE.RenderableObject, f++, e = p, I.copy(n.position), z.multiplyVector3(I), e.object = n, e.z = I.z, d.push(e)
		}
		j && d.sort(c);
		return d
	};
	this.projectScene = function(e, g, h) {
		var f = [],
			I = g.near,
			L = g.far,
			$, T, Q, fa, U, ka, ga, ca, aa, R, P, W, X, ea, ha, J, da;
		D = C = t = o = 0;
		g.matrixAutoUpdate && g.update(void 0, !0);
		e.update(void 0, !1, g);
		z.multiply(g.projectionMatrix, g.matrixWorldInverse);
		G[0].set(z.n41 - z.n11, z.n42 - z.n12, z.n43 - z.n13, z.n44 - z.n14);
		G[1].set(z.n41 + z.n11, z.n42 + z.n12, z.n43 + z.n13, z.n44 + z.n14);
		G[2].set(z.n41 + z.n21, z.n42 + z.n22, z.n43 + z.n23, z.n44 + z.n24);
		G[3].set(z.n41 - z.n21, z.n42 - z.n22, z.n43 - z.n23, z.n44 - z.n24);
		G[4].set(z.n41 - z.n31, z.n42 - z.n32, z.n43 - z.n33, z.n44 - z.n34);
		G[5].set(z.n41 + z.n31, z.n42 + z.n32,
			z.n43 + z.n33, z.n44 + z.n34);
		for ($ = 0; $ < 6; $++) aa = G[$], aa.divideScalar(Math.sqrt(aa.x * aa.x + aa.y * aa.y + aa.z * aa.z));
		aa = this.projectObjects(e, g, !0);
		e = 0;
		for ($ = aa.length; e < $; e++)
			if (R = aa[e].object, R.visible)
				if (P = R.matrixWorld, W = R.matrixRotationWorld, X = R.materials, ea = R.overdraw, k = 0, R instanceof THREE.Mesh) {
					ha = R.geometry;
					fa = ha.vertices;
					J = ha.faces;
					ha = ha.faceVertexUvs;
					T = 0;
					for (Q = fa.length; T < Q; T++) j = b(), j.positionWorld.copy(fa[T].position), P.multiplyVector3(j.positionWorld), j.positionScreen.copy(j.positionWorld), z.multiplyVector4(j.positionScreen),
						j.positionScreen.x /= j.positionScreen.w, j.positionScreen.y /= j.positionScreen.w, j.visible = j.positionScreen.z > I && j.positionScreen.z < L;
					fa = 0;
					for (T = J.length; fa < T; fa++) {
						Q = J[fa];
						if (Q instanceof THREE.Face3)
							if (U = m[Q.a], ka = m[Q.b], ga = m[Q.c], U.visible && ka.visible && ga.visible && (R.doubleSided || R.flipSided != (ga.positionScreen.x - U.positionScreen.x) * (ka.positionScreen.y - U.positionScreen.y) - (ga.positionScreen.y - U.positionScreen.y) * (ka.positionScreen.x - U.positionScreen.x) < 0)) ca = p[o] = p[o] || new THREE.RenderableFace3,
								o++, n = ca, n.v1.copy(U), n.v2.copy(ka), n.v3.copy(ga);
							else continue;
						else if (Q instanceof THREE.Face4)
							if (U = m[Q.a], ka = m[Q.b], ga = m[Q.c], ca = m[Q.d], U.visible && ka.visible && ga.visible && ca.visible && (R.doubleSided || R.flipSided != ((ca.positionScreen.x - U.positionScreen.x) * (ka.positionScreen.y - U.positionScreen.y) - (ca.positionScreen.y - U.positionScreen.y) * (ka.positionScreen.x - U.positionScreen.x) < 0 || (ka.positionScreen.x - ga.positionScreen.x) * (ca.positionScreen.y - ga.positionScreen.y) - (ka.positionScreen.y - ga.positionScreen.y) *
									(ca.positionScreen.x - ga.positionScreen.x) < 0))) da = u[t] = u[t] || new THREE.RenderableFace4, t++, n = da, n.v1.copy(U), n.v2.copy(ka), n.v3.copy(ga), n.v4.copy(ca);
							else continue;
						n.normalWorld.copy(Q.normal);
						W.multiplyVector3(n.normalWorld);
						n.centroidWorld.copy(Q.centroid);
						P.multiplyVector3(n.centroidWorld);
						n.centroidScreen.copy(n.centroidWorld);
						z.multiplyVector3(n.centroidScreen);
						ga = Q.vertexNormals;
						U = 0;
						for (ka = ga.length; U < ka; U++) ca = n.vertexNormalsWorld[U], ca.copy(ga[U]), W.multiplyVector3(ca);
						U = 0;
						for (ka = ha.length; U <
							ka; U++)
							if (da = ha[U][fa]) {
								ga = 0;
								for (ca = da.length; ga < ca; ga++) n.uvs[U][ga] = da[ga]
							}
						n.meshMaterials = X;
						n.faceMaterials = Q.materials;
						n.overdraw = ea;
						n.z = n.centroidScreen.z;
						f.push(n)
					}
				} else if (R instanceof THREE.Line) {
			S.multiply(z, P);
			fa = R.geometry.vertices;
			U = b();
			U.positionScreen.copy(fa[0].position);
			S.multiplyVector4(U.positionScreen);
			T = 1;
			for (Q = fa.length; T < Q; T++)
				if (U = b(), U.positionScreen.copy(fa[T].position), S.multiplyVector4(U.positionScreen), ka = m[k - 2], M.copy(U.positionScreen), F.copy(ka.positionScreen), d(M, F)) M.multiplyScalar(1 /
					M.w), F.multiplyScalar(1 / F.w), P = E[C] = E[C] || new THREE.RenderableLine, C++, v = P, v.v1.positionScreen.copy(M), v.v2.positionScreen.copy(F), v.z = Math.max(M.z, F.z), v.materials = R.materials, f.push(v)
		} else if (R instanceof THREE.Particle && (A.set(R.matrixWorld.n14, R.matrixWorld.n24, R.matrixWorld.n34, 1), z.multiplyVector4(A), A.z /= A.w, A.z > 0 && A.z < 1)) P = x[D] = x[D] || new THREE.RenderableParticle, D++, y = P, y.x = A.x / A.w, y.y = A.y / A.w, y.z = A.z, y.rotation = R.rotation.z, y.scale.x = R.scale.x * Math.abs(y.x - (A.x + g.projectionMatrix.n11) / (A.w +
			g.projectionMatrix.n14)), y.scale.y = R.scale.y * Math.abs(y.y - (A.y + g.projectionMatrix.n22) / (A.w + g.projectionMatrix.n24)), y.materials = R.materials, f.push(y);
		h && f.sort(c);
		return f
	}
};
THREE.DOMRenderer = function() {
	THREE.Renderer.call(this);
	var b = null,
		c = new THREE.Projector,
		d, e, f, h;
	this.domElement = document.createElement("div");
	this.setSize = function(b, c) {
		d = b;
		e = c;
		f = d / 2;
		h = e / 2
	};
	this.render = function(d, e) {
		var m, n, o, p, t, u, v, C;
		b = c.projectScene(d, e);
		m = 0;
		for (n = b.length; m < n; m++)
			if (t = b[m], t instanceof THREE.RenderableParticle) {
				v = t.x * f + f;
				C = t.y * h + h;
				o = 0;
				for (p = t.material.length; o < p; o++)
					if (u = t.material[o], u instanceof THREE.ParticleDOMMaterial) u = u.domElement, u.style.left = v + "px", u.style.top = C + "px"
			}
	}
};
THREE.CanvasRenderer = function(b) {
	function c(b) {
		if (y != b) v.globalAlpha = y = b
	}

	function d(b) {
		if (D != b) {
			switch (b) {
				case THREE.NormalBlending:
					v.globalCompositeOperation = "source-over";
					break;
				case THREE.AdditiveBlending:
					v.globalCompositeOperation = "lighter";
					break;
				case THREE.SubtractiveBlending:
					v.globalCompositeOperation = "darker"
			}
			D = b
		}
	}

	function e(b) {
		if (x != b.hex) x = b.hex, v.strokeStyle = "#" + h(x.toString(16))
	}

	function f(b) {
		if (I != b.hex) I = b.hex, v.fillStyle = "#" + h(I.toString(16))
	}

	function h(b) {
		for (; b.length < 6;) b = "0" + b;
		return b
	}
	var j = this,
		k = null,
		m = new THREE.Projector,
		b = b || {},
		n = b.canvas !== void 0 ? b.canvas : document.createElement("canvas"),
		o, p, t, u, v = n.getContext("2d"),
		C = new THREE.Color(0),
		E = 0,
		y = 1,
		D = 0,
		x = null,
		I = null,
		A = null,
		z = null,
		S = null,
		G, M, F, N, g = new THREE.RenderableVertex,
		Y = new THREE.RenderableVertex,
		O, V, L, $, T, Q, fa, U, ka, ga, ca, aa, R = new THREE.Color(0),
		P = new THREE.Color(0),
		W = new THREE.Color(0),
		X = new THREE.Color(0),
		ea = new THREE.Color(0),
		ha, J, da, la, ma, ya, va, Z, K, wa, qa = new THREE.Rectangle,
		ia = new THREE.Rectangle,
		pa = new THREE.Rectangle,
		Sa = !1,
		sa = new THREE.Color,
		ra = new THREE.Color,
		Ma = new THREE.Color,
		Na = new THREE.Color,
		na = new THREE.Vector3,
		Ja, Ka, Ta, ta, La, Oa, b = 16;
	Ja = document.createElement("canvas");
	Ja.width = Ja.height = 2;
	Ka = Ja.getContext("2d");
	Ka.fillStyle = "rgba(0,0,0,1)";
	Ka.fillRect(0, 0, 2, 2);
	Ta = Ka.getImageData(0, 0, 2, 2);
	ta = Ta.data;
	La = document.createElement("canvas");
	La.width = La.height = b;
	Oa = La.getContext("2d");
	Oa.translate(-b / 2, -b / 2);
	Oa.scale(b, b);
	b--;
	this.domElement = n;
	this.sortElements = this.sortObjects = this.autoClear = !0;
	this.data = {
		vertices: 0,
		faces: 0
	};
	this.setSize = function(b, d) {
		o = b;
		p = d;
		t = o / 2;
		u = p / 2;
		n.width = o;
		n.height = p;
		qa.set(-t, -u, t, u);
		y = 1;
		D = 0;
		S = z = A = I = x = null
	};
	this.setClearColor = function(b, d) {
		C = b;
		E = d
	};
	this.setClearColorHex = function(b, d) {
		C.setHex(b);
		E = d
	};
	this.clear = function() {
		v.setTransform(1, 0, 0, -1, t, u);
		if (!ia.isEmpty()) ia.inflate(1), ia.minSelf(qa), C.hex == 0 && E == 0 ? v.clearRect(ia.getX(), ia.getY(), ia.getWidth(), ia.getHeight()) : (d(THREE.NormalBlending), c(1), v.fillStyle = "rgba(" + Math.floor(C.r * 255) + "," + Math.floor(C.g * 255) + "," + Math.floor(C.b *
			255) + "," + E + ")", v.fillRect(ia.getX(), ia.getY(), ia.getWidth(), ia.getHeight())), ia.empty()
	};
	this.render = function(b, h) {
		function n(b) {
			var d, c, g, e = b.lights;
			ra.setRGB(0, 0, 0);
			Ma.setRGB(0, 0, 0);
			Na.setRGB(0, 0, 0);
			b = 0;
			for (d = e.length; b < d; b++) c = e[b], g = c.color, c instanceof THREE.AmbientLight ? (ra.r += g.r, ra.g += g.g, ra.b += g.b) : c instanceof THREE.DirectionalLight ? (Ma.r += g.r, Ma.g += g.g, Ma.b += g.b) : c instanceof THREE.PointLight && (Na.r += g.r, Na.g += g.g, Na.b += g.b)
		}

		function p(b, d, c, g) {
			var e, h, f, j, k = b.lights,
				b = 0;
			for (e = k.length; b <
				e; b++) h = k[b], f = h.color, h instanceof THREE.DirectionalLight ? (j = c.dot(h.position), j <= 0 || (j *= h.intensity, g.r += f.r * j, g.g += f.g * j, g.b += f.b * j)) : h instanceof THREE.PointLight && (j = c.dot(na.sub(h.position, d).normalize()), j <= 0 || (j *= h.distance == 0 ? 1 : 1 - Math.min(d.distanceTo(h.position) / h.distance, 1), j != 0 && (j *= h.intensity, g.r += f.r * j, g.g += f.g * j, g.b += f.b * j)))
		}

		function o(b, g, h) {
			c(h.opacity);
			d(h.blending);
			var j, k, ia, m, n, p;
			if (h instanceof THREE.ParticleBasicMaterial) {
				if (h.map) m = h.map.image, n = m.width >> 1, p = m.height >> 1,
					h = g.scale.x * t, ia = g.scale.y * u, j = h * n, k = ia * p, pa.set(b.x - j, b.y - k, b.x + j, b.y + k), qa.instersects(pa) && (v.save(), v.translate(b.x, b.y), v.rotate(-g.rotation), v.scale(h, -ia), v.translate(-n, -p), v.drawImage(m, 0, 0), v.restore())
			} else h instanceof THREE.ParticleCanvasMaterial && (j = g.scale.x * t, k = g.scale.y * u, pa.set(b.x - j, b.y - k, b.x + j, b.y + k), qa.instersects(pa) && (e(h.color), f(h.color), v.save(), v.translate(b.x, b.y), v.rotate(-g.rotation), v.scale(j, k), h.program(v), v.restore()))
		}

		function y(b, g, h, f) {
			c(f.opacity);
			d(f.blending);
			v.beginPath();
			v.moveTo(b.positionScreen.x, b.positionScreen.y);
			v.lineTo(g.positionScreen.x, g.positionScreen.y);
			v.closePath();
			if (f instanceof THREE.LineBasicMaterial) {
				b = f.linewidth;
				if (A != b) v.lineWidth = A = b;
				b = f.linecap;
				if (z != b) v.lineCap = z = b;
				b = f.linejoin;
				if (S != b) v.lineJoin = S = b;
				e(f.color);
				v.stroke();
				pa.inflate(f.linewidth * 2)
			}
		}

		function x(b, g, e, f, k, ia, m, n, o) {
			j.data.vertices += 3;
			j.data.faces++;
			c(n.opacity);
			d(n.blending);
			O = b.positionScreen.x;
			V = b.positionScreen.y;
			L = g.positionScreen.x;
			$ = g.positionScreen.y;
			T = e.positionScreen.x;
			Q = e.positionScreen.y;
			E(O, V, L, $, T, Q);
			if (n instanceof THREE.MeshBasicMaterial)
				if (n.map) n.map.mapping instanceof THREE.UVMapping && (la = m.uvs[0], w(O, V, L, $, T, Q, n.map.image, la[f].u, la[f].v, la[k].u, la[k].v, la[ia].u, la[ia].v));
				else if (n.envMap) {
				if (n.envMap.mapping instanceof THREE.SphericalReflectionMapping) b = h.matrixWorldInverse, na.copy(m.vertexNormalsWorld[0]), ma = (na.x * b.n11 + na.y * b.n12 + na.z * b.n13) * 0.5 + 0.5, ya = -(na.x * b.n21 + na.y * b.n22 + na.z * b.n23) * 0.5 + 0.5, na.copy(m.vertexNormalsWorld[1]), va = (na.x * b.n11 + na.y *
					b.n12 + na.z * b.n13) * 0.5 + 0.5, Z = -(na.x * b.n21 + na.y * b.n22 + na.z * b.n23) * 0.5 + 0.5, na.copy(m.vertexNormalsWorld[2]), K = (na.x * b.n11 + na.y * b.n12 + na.z * b.n13) * 0.5 + 0.5, wa = -(na.x * b.n21 + na.y * b.n22 + na.z * b.n23) * 0.5 + 0.5, w(O, V, L, $, T, Q, n.envMap.image, ma, ya, va, Z, K, wa)
			} else n.wireframe ? B(n.color, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : D(n.color);
			else if (n instanceof THREE.MeshLambertMaterial) n.map && !n.wireframe && (n.map.mapping instanceof THREE.UVMapping && (la = m.uvs[0], w(O, V, L, $, T, Q, n.map.image, la[f].u, la[f].v,
				la[k].u, la[k].v, la[ia].u, la[ia].v)), d(THREE.SubtractiveBlending)), Sa ? !n.wireframe && n.shading == THREE.SmoothShading && m.vertexNormalsWorld.length == 3 ? (P.r = W.r = X.r = ra.r, P.g = W.g = X.g = ra.g, P.b = W.b = X.b = ra.b, p(o, m.v1.positionWorld, m.vertexNormalsWorld[0], P), p(o, m.v2.positionWorld, m.vertexNormalsWorld[1], W), p(o, m.v3.positionWorld, m.vertexNormalsWorld[2], X), ea.r = (W.r + X.r) * 0.5, ea.g = (W.g + X.g) * 0.5, ea.b = (W.b + X.b) * 0.5, da = Pa(P, W, X, ea), w(O, V, L, $, T, Q, da, 0, 0, 1, 0, 0, 1)) : (sa.r = ra.r, sa.g = ra.g, sa.b = ra.b, p(o, m.centroidWorld,
				m.normalWorld, sa), R.r = Math.max(0, Math.min(n.color.r * sa.r, 1)), R.g = Math.max(0, Math.min(n.color.g * sa.g, 1)), R.b = Math.max(0, Math.min(n.color.b * sa.b, 1)), R.updateHex(), n.wireframe ? B(R, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : D(R)) : n.wireframe ? B(n.color, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : D(n.color);
			else if (n instanceof THREE.MeshDepthMaterial) ha = h.near, J = h.far, P.r = P.g = P.b = 1 - Ca(b.positionScreen.z, ha, J), W.r = W.g = W.b = 1 - Ca(g.positionScreen.z, ha, J), X.r = X.g = X.b = 1 - Ca(e.positionScreen.z,
				ha, J), ea.r = (W.r + X.r) * 0.5, ea.g = (W.g + X.g) * 0.5, ea.b = (W.b + X.b) * 0.5, da = Pa(P, W, X, ea), w(O, V, L, $, T, Q, da, 0, 0, 1, 0, 0, 1);
			else if (n instanceof THREE.MeshNormalMaterial) R.r = Ha(m.normalWorld.x), R.g = Ha(m.normalWorld.y), R.b = Ha(m.normalWorld.z), R.updateHex(), n.wireframe ? B(R, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : D(R)
		}

		function C(b, g, e, f, k, ia, m, n, o) {
			j.data.vertices += 4;
			j.data.faces++;
			c(n.opacity);
			d(n.blending);
			if (n.map || n.envMap) x(b, g, f, 0, 1, 3, m, n, o), x(k, e, ia, 1, 2, 3, m, n, o);
			else if (O = b.positionScreen.x,
				V = b.positionScreen.y, L = g.positionScreen.x, $ = g.positionScreen.y, T = e.positionScreen.x, Q = e.positionScreen.y, fa = f.positionScreen.x, U = f.positionScreen.y, ka = k.positionScreen.x, ga = k.positionScreen.y, ca = ia.positionScreen.x, aa = ia.positionScreen.y, n instanceof THREE.MeshBasicMaterial) I(O, V, L, $, T, Q, fa, U), n.wireframe ? B(n.color, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : D(n.color);
			else if (n instanceof THREE.MeshLambertMaterial) Sa ? !n.wireframe && n.shading == THREE.SmoothShading && m.vertexNormalsWorld.length ==
				4 ? (P.r = W.r = X.r = ea.r = ra.r, P.g = W.g = X.g = ea.g = ra.g, P.b = W.b = X.b = ea.b = ra.b, p(o, m.v1.positionWorld, m.vertexNormalsWorld[0], P), p(o, m.v2.positionWorld, m.vertexNormalsWorld[1], W), p(o, m.v4.positionWorld, m.vertexNormalsWorld[3], X), p(o, m.v3.positionWorld, m.vertexNormalsWorld[2], ea), da = Pa(P, W, X, ea), E(O, V, L, $, fa, U), w(O, V, L, $, fa, U, da, 0, 0, 1, 0, 0, 1), E(ka, ga, T, Q, ca, aa), w(ka, ga, T, Q, ca, aa, da, 1, 0, 1, 1, 0, 1)) : (sa.r = ra.r, sa.g = ra.g, sa.b = ra.b, p(o, m.centroidWorld, m.normalWorld, sa), R.r = Math.max(0, Math.min(n.color.r * sa.r, 1)), R.g =
					Math.max(0, Math.min(n.color.g * sa.g, 1)), R.b = Math.max(0, Math.min(n.color.b * sa.b, 1)), R.updateHex(), I(O, V, L, $, T, Q, fa, U), n.wireframe ? B(R, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : D(R)) : (I(O, V, L, $, T, Q, fa, U), n.wireframe ? B(n.color, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : D(n.color));
			else if (n instanceof THREE.MeshNormalMaterial) R.r = Ha(m.normalWorld.x), R.g = Ha(m.normalWorld.y), R.b = Ha(m.normalWorld.z), R.updateHex(), I(O, V, L, $, T, Q, fa, U), n.wireframe ? B(R, n.wireframeLinewidth,
				n.wireframeLinecap, n.wireframeLinejoin) : D(R);
			else if (n instanceof THREE.MeshDepthMaterial) ha = h.near, J = h.far, P.r = P.g = P.b = 1 - Ca(b.positionScreen.z, ha, J), W.r = W.g = W.b = 1 - Ca(g.positionScreen.z, ha, J), X.r = X.g = X.b = 1 - Ca(f.positionScreen.z, ha, J), ea.r = ea.g = ea.b = 1 - Ca(e.positionScreen.z, ha, J), da = Pa(P, W, X, ea), E(O, V, L, $, fa, U), w(O, V, L, $, fa, U, da, 0, 0, 1, 0, 0, 1), E(ka, ga, T, Q, ca, aa), w(ka, ga, T, Q, ca, aa, da, 1, 0, 1, 1, 0, 1)
		}

		function E(b, d, c, g, e, h) {
			v.beginPath();
			v.moveTo(b, d);
			v.lineTo(c, g);
			v.lineTo(e, h);
			v.lineTo(b, d);
			v.closePath()
		}

		function I(b, d, c, g, e, h, f, j) {
			v.beginPath();
			v.moveTo(b, d);
			v.lineTo(c, g);
			v.lineTo(e, h);
			v.lineTo(f, j);
			v.lineTo(b, d);
			v.closePath()
		}

		function B(b, d, c, g) {
			if (A != d) v.lineWidth = A = d;
			if (z != c) v.lineCap = z = c;
			if (S != g) v.lineJoin = S = g;
			e(b);
			v.stroke();
			pa.inflate(d * 2)
		}

		function D(b) {
			f(b);
			v.fill()
		}

		function w(b, d, c, g, e, h, f, j, k, ia, n, m, p) {
			var o, t;
			o = f.width - 1;
			t = f.height - 1;
			j *= o;
			k *= t;
			ia *= o;
			n *= t;
			m *= o;
			p *= t;
			c -= b;
			g -= d;
			e -= b;
			h -= d;
			ia -= j;
			n -= k;
			m -= j;
			p -= k;
			o = ia * p - m * n;
			o != 0 && (t = 1 / o, o = (p * c - n * e) * t, n = (p * g - n * h) * t, c = (ia * e - m * c) * t, g = (ia * h - m * g) * t,
				b = b - o * j - c * k, d = d - n * j - g * k, v.save(), v.transform(o, n, c, g, b, d), v.clip(), v.drawImage(f, 0, 0), v.restore())
		}

		function Pa(b, d, c, g) {
			var e = ~~(b.r * 255),
				h = ~~(b.g * 255),
				b = ~~(b.b * 255),
				f = ~~(d.r * 255),
				j = ~~(d.g * 255),
				d = ~~(d.b * 255),
				k = ~~(c.r * 255),
				ia = ~~(c.g * 255),
				c = ~~(c.b * 255),
				n = ~~(g.r * 255),
				m = ~~(g.g * 255),
				g = ~~(g.b * 255);
			ta[0] = e < 0 ? 0 : e > 255 ? 255 : e;
			ta[1] = h < 0 ? 0 : h > 255 ? 255 : h;
			ta[2] = b < 0 ? 0 : b > 255 ? 255 : b;
			ta[4] = f < 0 ? 0 : f > 255 ? 255 : f;
			ta[5] = j < 0 ? 0 : j > 255 ? 255 : j;
			ta[6] = d < 0 ? 0 : d > 255 ? 255 : d;
			ta[8] = k < 0 ? 0 : k > 255 ? 255 : k;
			ta[9] = ia < 0 ? 0 : ia > 255 ? 255 : ia;
			ta[10] = c < 0 ? 0 :
				c > 255 ? 255 : c;
			ta[12] = n < 0 ? 0 : n > 255 ? 255 : n;
			ta[13] = m < 0 ? 0 : m > 255 ? 255 : m;
			ta[14] = g < 0 ? 0 : g > 255 ? 255 : g;
			Ka.putImageData(Ta, 0, 0);
			Oa.drawImage(Ja, 0, 0);
			return La
		}

		function Ca(b, d, c) {
			b = (b - d) / (c - d);
			return b * b * (3 - 2 * b)
		}

		function Ha(b) {
			b = (b + 1) * 0.5;
			return b < 0 ? 0 : b > 1 ? 1 : b
		}

		function za(b, d) {
			var c = d.x - b.x,
				g = d.y - b.y,
				e = 1 / Math.sqrt(c * c + g * g);
			c *= e;
			g *= e;
			d.x += c;
			d.y += g;
			b.x -= c;
			b.y -= g
		}
		var Qa, Ya, ja, ua, Aa, Ia, Ra, H;
		this.autoClear ? this.clear() : v.setTransform(1, 0, 0, -1, t, u);
		j.data.vertices = 0;
		j.data.faces = 0;
		k = m.projectScene(b, h, this.sortElements);
		(Sa = b.lights.length > 0) && n(b);
		Qa = 0;
		for (Ya = k.length; Qa < Ya; Qa++) {
			ja = k[Qa];
			pa.empty();
			if (ja instanceof THREE.RenderableParticle) {
				G = ja;
				G.x *= t;
				G.y *= u;
				ua = 0;
				for (Aa = ja.materials.length; ua < Aa;) H = ja.materials[ua++], H.opacity != 0 && o(G, ja, H, b)
			} else if (ja instanceof THREE.RenderableLine) {
				if (G = ja.v1, M = ja.v2, G.positionScreen.x *= t, G.positionScreen.y *= u, M.positionScreen.x *= t, M.positionScreen.y *= u, pa.addPoint(G.positionScreen.x, G.positionScreen.y), pa.addPoint(M.positionScreen.x, M.positionScreen.y), qa.instersects(pa)) {
					ua =
						0;
					for (Aa = ja.materials.length; ua < Aa;) H = ja.materials[ua++], H.opacity != 0 && y(G, M, ja, H, b)
				}
			} else if (ja instanceof THREE.RenderableFace3) {
				if (G = ja.v1, M = ja.v2, F = ja.v3, G.positionScreen.x *= t, G.positionScreen.y *= u, M.positionScreen.x *= t, M.positionScreen.y *= u, F.positionScreen.x *= t, F.positionScreen.y *= u, ja.overdraw && (za(G.positionScreen, M.positionScreen), za(M.positionScreen, F.positionScreen), za(F.positionScreen, G.positionScreen)), pa.add3Points(G.positionScreen.x, G.positionScreen.y, M.positionScreen.x, M.positionScreen.y,
						F.positionScreen.x, F.positionScreen.y), qa.instersects(pa)) {
					ua = 0;
					for (Aa = ja.meshMaterials.length; ua < Aa;)
						if (H = ja.meshMaterials[ua++], H instanceof THREE.MeshFaceMaterial) {
							Ia = 0;
							for (Ra = ja.faceMaterials.length; Ia < Ra;)(H = ja.faceMaterials[Ia++]) && H.opacity != 0 && x(G, M, F, 0, 1, 2, ja, H, b)
						} else H.opacity != 0 && x(G, M, F, 0, 1, 2, ja, H, b)
				}
			} else if (ja instanceof THREE.RenderableFace4 && (G = ja.v1, M = ja.v2, F = ja.v3, N = ja.v4, G.positionScreen.x *= t, G.positionScreen.y *= u, M.positionScreen.x *= t, M.positionScreen.y *= u, F.positionScreen.x *=
					t, F.positionScreen.y *= u, N.positionScreen.x *= t, N.positionScreen.y *= u, g.positionScreen.copy(M.positionScreen), Y.positionScreen.copy(N.positionScreen), ja.overdraw && (za(G.positionScreen, M.positionScreen), za(M.positionScreen, N.positionScreen), za(N.positionScreen, G.positionScreen), za(F.positionScreen, g.positionScreen), za(F.positionScreen, Y.positionScreen)), pa.addPoint(G.positionScreen.x, G.positionScreen.y), pa.addPoint(M.positionScreen.x, M.positionScreen.y), pa.addPoint(F.positionScreen.x, F.positionScreen.y),
					pa.addPoint(N.positionScreen.x, N.positionScreen.y), qa.instersects(pa))) {
				ua = 0;
				for (Aa = ja.meshMaterials.length; ua < Aa;)
					if (H = ja.meshMaterials[ua++], H instanceof THREE.MeshFaceMaterial) {
						Ia = 0;
						for (Ra = ja.faceMaterials.length; Ia < Ra;)(H = ja.faceMaterials[Ia++]) && H.opacity != 0 && C(G, M, F, N, g, Y, ja, H, b)
					} else H.opacity != 0 && C(G, M, F, N, g, Y, ja, H, b)
			}
			ia.addRectangle(pa)
		}
		v.setTransform(1, 0, 0, 1, 0, 0)
	}
};
THREE.SVGRenderer = function() {
	function b(b, d, c) {
		var g, e, h, f;
		g = 0;
		for (e = b.lights.length; g < e; g++) h = b.lights[g], h instanceof THREE.DirectionalLight ? (f = d.normalWorld.dot(h.position) * h.intensity, f > 0 && (c.r += h.color.r * f, c.g += h.color.g * f, c.b += h.color.b * f)) : h instanceof THREE.PointLight && (N.sub(h.position, d.centroidWorld), N.normalize(), f = d.normalWorld.dot(N) * h.intensity, f > 0 && (c.r += h.color.r * f, c.g += h.color.g * f, c.b += h.color.b * f))
	}

	function c(d, c, g, k, m, p) {
		j.data.vertices += 3;
		j.data.faces++;
		O = e(V++);
		O.setAttribute("d",
			"M " + d.positionScreen.x + " " + d.positionScreen.y + " L " + c.positionScreen.x + " " + c.positionScreen.y + " L " + g.positionScreen.x + "," + g.positionScreen.y + "z");
		m instanceof THREE.MeshBasicMaterial ? A.hex = m.color.hex : m instanceof THREE.MeshLambertMaterial ? I ? (z.r = S.r, z.g = S.g, z.b = S.b, b(p, k, z), A.r = Math.max(0, Math.min(m.color.r * z.r, 1)), A.g = Math.max(0, Math.min(m.color.g * z.g, 1)), A.b = Math.max(0, Math.min(m.color.b * z.b, 1)), A.updateHex()) : A.hex = m.color.hex : m instanceof THREE.MeshDepthMaterial ? (F = 1 - m.__2near / (m.__farPlusNear -
			k.z * m.__farMinusNear), A.setRGB(F, F, F)) : m instanceof THREE.MeshNormalMaterial && A.setRGB(f(k.normalWorld.x), f(k.normalWorld.y), f(k.normalWorld.z));
		m.wireframe ? O.setAttribute("style", "fill: none; stroke: #" + h(A.hex.toString(16)) + "; stroke-width: " + m.wireframeLinewidth + "; stroke-opacity: " + m.opacity + "; stroke-linecap: " + m.wireframeLinecap + "; stroke-linejoin: " + m.wireframeLinejoin) : O.setAttribute("style", "fill: #" + h(A.hex.toString(16)) + "; fill-opacity: " + m.opacity);
		n.appendChild(O)
	}

	function d(d, c, g, k,
		m, p, o) {
		j.data.vertices += 4;
		j.data.faces++;
		O = e(V++);
		O.setAttribute("d", "M " + d.positionScreen.x + " " + d.positionScreen.y + " L " + c.positionScreen.x + " " + c.positionScreen.y + " L " + g.positionScreen.x + "," + g.positionScreen.y + " L " + k.positionScreen.x + "," + k.positionScreen.y + "z");
		p instanceof THREE.MeshBasicMaterial ? A.hex = p.color.hex : p instanceof THREE.MeshLambertMaterial ? I ? (z.r = S.r, z.g = S.g, z.b = S.b, b(o, m, z), A.r = Math.max(0, Math.min(p.color.r * z.r, 1)), A.g = Math.max(0, Math.min(p.color.g * z.g, 1)), A.b = Math.max(0, Math.min(p.color.b *
			z.b, 1)), A.updateHex()) : A.hex = p.color.hex : p instanceof THREE.MeshDepthMaterial ? (F = 1 - p.__2near / (p.__farPlusNear - m.z * p.__farMinusNear), A.setRGB(F, F, F)) : p instanceof THREE.MeshNormalMaterial && A.setRGB(f(m.normalWorld.x), f(m.normalWorld.y), f(m.normalWorld.z));
		p.wireframe ? O.setAttribute("style", "fill: none; stroke: #" + h(A.hex.toString(16)) + "; stroke-width: " + p.wireframeLinewidth + "; stroke-opacity: " + p.opacity + "; stroke-linecap: " + p.wireframeLinecap + "; stroke-linejoin: " + p.wireframeLinejoin) : O.setAttribute("style",
			"fill: #" + h(A.hex.toString(16)) + "; fill-opacity: " + p.opacity);
		n.appendChild(O)
	}

	function e(b) {
		g[b] == null && (g[b] = document.createElementNS("http://www.w3.org/2000/svg", "path"), $ == 0 && g[b].setAttribute("shape-rendering", "crispEdges"));
		return g[b]
	}

	function f(b) {
		b = (b + 1) * 0.5;
		return b < 0 ? 0 : b > 1 ? 1 : b
	}

	function h(b) {
		for (; b.length < 6;) b = "0" + b;
		return b
	}
	var j = this,
		k = null,
		m = new THREE.Projector,
		n = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
		o, p, t, u, v, C, E, y, D = new THREE.Rectangle,
		x = new THREE.Rectangle,
		I = !1,
		A = new THREE.Color(16777215),
		z = new THREE.Color(16777215),
		S = new THREE.Color(0),
		G = new THREE.Color(0),
		M = new THREE.Color(0),
		F, N = new THREE.Vector3,
		g = [],
		Y = [],
		O, V, L, $ = 1;
	this.domElement = n;
	this.sortElements = this.sortObjects = this.autoClear = !0;
	this.data = {
		vertices: 0,
		faces: 0
	};
	this.setQuality = function(b) {
		switch (b) {
			case "high":
				$ = 1;
				break;
			case "low":
				$ = 0
		}
	};
	this.setSize = function(b, d) {
		o = b;
		p = d;
		t = o / 2;
		u = p / 2;
		n.setAttribute("viewBox", -t + " " + -u + " " + o + " " + p);
		n.setAttribute("width", o);
		n.setAttribute("height", p);
		D.set(-t, -u,
			t, u)
	};
	this.clear = function() {
		for (; n.childNodes.length > 0;) n.removeChild(n.childNodes[0])
	};
	this.render = function(b, g) {
		var e, f, p, o, z, A, F, P;
		this.autoClear && this.clear();
		j.data.vertices = 0;
		j.data.faces = 0;
		k = m.projectScene(b, g, this.sortElements);
		L = V = 0;
		if (I = b.lights.length > 0) {
			F = b.lights;
			S.setRGB(0, 0, 0);
			G.setRGB(0, 0, 0);
			M.setRGB(0, 0, 0);
			e = 0;
			for (f = F.length; e < f; e++) p = F[e], o = p.color, p instanceof THREE.AmbientLight ? (S.r += o.r, S.g += o.g, S.b += o.b) : p instanceof THREE.DirectionalLight ? (G.r += o.r, G.g += o.g, G.b += o.b) : p instanceof
			THREE.PointLight && (M.r += o.r, M.g += o.g, M.b += o.b)
		}
		e = 0;
		for (f = k.length; e < f; e++)
			if (F = k[e], x.empty(), F instanceof THREE.RenderableParticle) {
				v = F;
				v.x *= t;
				v.y *= -u;
				p = 0;
				for (o = F.materials.length; p < o;) p++
			} else if (F instanceof THREE.RenderableLine) {
			if (v = F.v1, C = F.v2, v.positionScreen.x *= t, v.positionScreen.y *= -u, C.positionScreen.x *= t, C.positionScreen.y *= -u, x.addPoint(v.positionScreen.x, v.positionScreen.y), x.addPoint(C.positionScreen.x, C.positionScreen.y), D.instersects(x)) {
				p = 0;
				for (o = F.materials.length; p < o;)
					if ((P = F.materials[p++]) &&
						P.opacity != 0) {
						z = v;
						A = C;
						var N = L++;
						Y[N] == null && (Y[N] = document.createElementNS("http://www.w3.org/2000/svg", "line"), $ == 0 && Y[N].setAttribute("shape-rendering", "crispEdges"));
						O = Y[N];
						O.setAttribute("x1", z.positionScreen.x);
						O.setAttribute("y1", z.positionScreen.y);
						O.setAttribute("x2", A.positionScreen.x);
						O.setAttribute("y2", A.positionScreen.y);
						P instanceof THREE.LineBasicMaterial && (O.setAttribute("style", "fill: none; stroke: ##" + h(P.color.hex.toString(16)) + "; stroke-width: " + P.linewidth + "; stroke-opacity: " +
							P.opacity + "; stroke-linecap: " + P.linecap + "; stroke-linejoin: " + P.linejoin), n.appendChild(O))
					}
			}
		} else if (F instanceof THREE.RenderableFace3) {
			if (v = F.v1, C = F.v2, E = F.v3, v.positionScreen.x *= t, v.positionScreen.y *= -u, C.positionScreen.x *= t, C.positionScreen.y *= -u, E.positionScreen.x *= t, E.positionScreen.y *= -u, x.addPoint(v.positionScreen.x, v.positionScreen.y), x.addPoint(C.positionScreen.x, C.positionScreen.y), x.addPoint(E.positionScreen.x, E.positionScreen.y), D.instersects(x)) {
				p = 0;
				for (o = F.meshMaterials.length; p <
					o;)
					if (P = F.meshMaterials[p++], P instanceof THREE.MeshFaceMaterial) {
						z = 0;
						for (A = F.faceMaterials.length; z < A;)(P = F.faceMaterials[z++]) && P.opacity != 0 && c(v, C, E, F, P, b)
					} else P && P.opacity != 0 && c(v, C, E, F, P, b)
			}
		} else if (F instanceof THREE.RenderableFace4 && (v = F.v1, C = F.v2, E = F.v3, y = F.v4, v.positionScreen.x *= t, v.positionScreen.y *= -u, C.positionScreen.x *= t, C.positionScreen.y *= -u, E.positionScreen.x *= t, E.positionScreen.y *= -u, y.positionScreen.x *= t, y.positionScreen.y *= -u, x.addPoint(v.positionScreen.x, v.positionScreen.y), x.addPoint(C.positionScreen.x,
				C.positionScreen.y), x.addPoint(E.positionScreen.x, E.positionScreen.y), x.addPoint(y.positionScreen.x, y.positionScreen.y), D.instersects(x))) {
			p = 0;
			for (o = F.meshMaterials.length; p < o;)
				if (P = F.meshMaterials[p++], P instanceof THREE.MeshFaceMaterial) {
					z = 0;
					for (A = F.faceMaterials.length; z < A;)(P = F.faceMaterials[z++]) && P.opacity != 0 && d(v, C, E, y, F, P, b)
				} else P && P.opacity != 0 && d(v, C, E, y, F, P, b)
		}
	}
};
THREE.ShaderChunk = {
	fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
	fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform int combine;\n#endif",
	envmap_fragment: "#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",
	map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
	map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",
	map_pars_vertex: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",
	map_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif",
	map_vertex: "#ifdef USE_MAP\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
	lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
	lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",
	lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
	lights_pars_vertex: "uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif",
	lights_vertex: "if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat pointLightWeighting = max( dot( transformedNormal, lVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef PHONG\nvPointLight[ i ] = vec4( lVector, lDistance );\n#endif\n}\n#endif\n}",
	lights_pars_fragment: "#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
	lights_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mColor = vec4( diffuse, opacity );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointDiffuse  = vec4( 0.0 );\nvec4 pointSpecular = vec4( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + vViewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight * pointDistance;\npointSpecular += mSpecular * pointSpecularWeight * pointDistance;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirDiffuse  = vec4( 0.0 );\nvec4 dirSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif\ngl_FragColor = gl_FragColor * totalLight;",
	color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
	color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",
	color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
	color_vertex: "#ifdef USE_COLOR\nvColor = color;\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetInfluences[ 8 ];\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0, 0.0, 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n#endif",
	default_vertex: "#ifndef USE_MORPHTARGETS\n#ifndef USE_SKINNING\ngl_Position = projectionMatrix * mvPosition;\n#endif\n#endif"
};
THREE.UniformsUtils = {
	merge: function(b) {
		var c, d, e, f = {};
		for (c = 0; c < b.length; c++)
			for (d in e = this.clone(b[c]), e) f[d] = e[d];
		return f
	},
	clone: function(b) {
		var c, d, e, f = {};
		for (c in b)
			for (d in f[c] = {}, b[c]) e = b[c][d], f[c][d] = e instanceof THREE.Color || e instanceof THREE.Vector3 || e instanceof THREE.Texture ? e.clone() : e;
		return f
	}
};
THREE.UniformsLib = {
	common: {
		diffuse: {
			type: "c",
			value: new THREE.Color(15658734)
		},
		opacity: {
			type: "f",
			value: 1
		},
		map: {
			type: "t",
			value: 0,
			texture: null
		},
		offsetRepeat: {
			type: "v4",
			value: new THREE.Vector4(0, 0, 1, 1)
		},
		lightMap: {
			type: "t",
			value: 2,
			texture: null
		},
		envMap: {
			type: "t",
			value: 1,
			texture: null
		},
		useRefract: {
			type: "i",
			value: 0
		},
		reflectivity: {
			type: "f",
			value: 1
		},
		refractionRatio: {
			type: "f",
			value: 0.98
		},
		combine: {
			type: "i",
			value: 0
		},
		fogDensity: {
			type: "f",
			value: 2.5E-4
		},
		fogNear: {
			type: "f",
			value: 1
		},
		fogFar: {
			type: "f",
			value: 2E3
		},
		fogColor: {
			type: "c",
			value: new THREE.Color(16777215)
		},
		morphTargetInfluences: {
			type: "f",
			value: 0
		}
	},
	lights: {
		enableLighting: {
			type: "i",
			value: 1
		},
		ambientLightColor: {
			type: "fv",
			value: []
		},
		directionalLightDirection: {
			type: "fv",
			value: []
		},
		directionalLightColor: {
			type: "fv",
			value: []
		},
		pointLightColor: {
			type: "fv",
			value: []
		},
		pointLightPosition: {
			type: "fv",
			value: []
		},
		pointLightDistance: {
			type: "fv1",
			value: []
		}
	},
	particle: {
		psColor: {
			type: "c",
			value: new THREE.Color(15658734)
		},
		opacity: {
			type: "f",
			value: 1
		},
		size: {
			type: "f",
			value: 1
		},
		scale: {
			type: "f",
			value: 1
		},
		map: {
			type: "t",
			value: 0,
			texture: null
		},
		fogDensity: {
			type: "f",
			value: 2.5E-4
		},
		fogNear: {
			type: "f",
			value: 1
		},
		fogFar: {
			type: "f",
			value: 2E3
		},
		fogColor: {
			type: "c",
			value: new THREE.Color(16777215)
		}
	}
};
THREE.ShaderLib = {
	lensFlareVertexTexture: {
		vertexShader: "uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nuniform\tsampler2D\tocclusionMap;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvarying\tfloat\tvVisibility;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ));\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
		fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvarying\tfloat\t\tvVisibility;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * vVisibility;\ngl_FragColor = color;\n}\n}"
	},
	lensFlare: {
		vertexShader: "uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
		fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tsampler2D\tocclusionMap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 )).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * visibility;\ngl_FragColor = color;\n}\n}"
	},
	sprite: {
		vertexShader: "uniform\tint\t\tuseScreenCoordinates;\nuniform    int     affectedByDistance;\nuniform\tvec3\tscreenPosition;\nuniform \tmat4 \tmodelViewMatrix;\nuniform \tmat4 \tprojectionMatrix;\nuniform    float   rotation;\nuniform    vec2    scale;\nuniform    vec2    alignment;\nuniform    vec2    uvOffset;\nuniform\tvec2    uvScale;\nattribute \tvec2 \tposition;\nattribute  vec2\tuv;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
		fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity;\ngl_FragColor = color;\n}"
	},
	shadowPost: {
		vertexShader: "uniform \tmat4 \tprojectionMatrix;\nattribute \tvec3 \tposition;\nvoid main(void)\n{\ngl_Position = projectionMatrix * vec4( position, 1.0 );\n}",
		fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform \tfloat \tdarkness;\nvoid main( void )\n{\ngl_FragColor = vec4( 0, 0, 0, darkness );\n}"
	},
	shadowVolumeDynamic: {
		uniforms: {
			directionalLightDirection: {
				type: "fv",
				value: []
			}
		},
		vertexShader: "uniform \tvec3 \tdirectionalLightDirection;\nvoid main() {\nvec4 pos      = objectMatrix * vec4( position, 1.0 );\nvec3 norm     = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nvec4 extruded = vec4( directionalLightDirection * 5000.0 * step( 0.0, dot( directionalLightDirection, norm )), 0.0 );\ngl_Position   = projectionMatrix * viewMatrix * ( pos + extruded );\n}",
		fragmentShader: "void main() {\ngl_FragColor = vec4( 1.0 );\n}"
	},
	depth: {
		uniforms: {
			mNear: {
				type: "f",
				value: 1
			},
			mFar: {
				type: "f",
				value: 2E3
			},
			opacity: {
				type: "f",
				value: 1
			}
		},
		fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}",
		vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
	},
	normal: {
		uniforms: {
			opacity: {
				type: "f",
				value: 1
			}
		},
		fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}",
		vertexShader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}"
	},
	basic: {
		uniforms: THREE.UniformsLib.common,
		fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment,
			THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.fog_fragment, "}"
		].join("\n"),
		vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex,
			THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"
		].join("\n")
	},
	lambert: {
		uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights]),
		fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment,
			THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.fog_fragment, "}"
		].join("\n"),
		vertexShader: ["varying vec3 vLightWeighting;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex,
			THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.lights_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"
		].join("\n")
	},
	phong: {
		uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights, {
			ambient: {
				type: "c",
				value: new THREE.Color(328965)
			},
			specular: {
				type: "c",
				value: new THREE.Color(1118481)
			},
			shininess: {
				type: "f",
				value: 30
			}
		}]),
		fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_pars_fragment, "void main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.lights_fragment, THREE.ShaderChunk.map_fragment,
			THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.fog_fragment, "}"
		].join("\n"),
		vertexShader: ["#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex,
			"void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = cameraPosition - mPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;", THREE.ShaderChunk.lights_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex,
			THREE.ShaderChunk.default_vertex, "}"
		].join("\n")
	},
	particle_basic: {
		uniforms: THREE.UniformsLib.particle,
		fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
		vertexShader: ["uniform float size;\nuniform float scale;",
			THREE.ShaderChunk.color_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;\n}"
		].join("\n")
	}
};
THREE.WebGLRenderer = function(b) {
	function c(b, d, c) {
		var e, h, f, j = b.vertices,
			k = j.length,
			m = b.colors,
			n = m.length,
			p = b.__vertexArray,
			o = b.__colorArray,
			t = b.__sortArray,
			u = b.__dirtyVertices,
			v = b.__dirtyColors;
		if (c.sortParticles) {
			R.multiplySelf(c.matrixWorld);
			for (e = 0; e < k; e++) h = j[e].position, X.copy(h), R.multiplyVector3(X), t[e] = [X.z, e];
			t.sort(function(b, d) {
				return d[0] - b[0]
			});
			for (e = 0; e < k; e++) h = j[t[e][1]].position, f = e * 3, p[f] = h.x, p[f + 1] = h.y, p[f + 2] = h.z;
			for (e = 0; e < n; e++) f = e * 3, color = m[t[e][1]], o[f] = color.r, o[f + 1] = color.g,
				o[f + 2] = color.b
		} else {
			if (u)
				for (e = 0; e < k; e++) h = j[e].position, f = e * 3, p[f] = h.x, p[f + 1] = h.y, p[f + 2] = h.z;
			if (v)
				for (e = 0; e < n; e++) color = m[e], f = e * 3, o[f] = color.r, o[f + 1] = color.g, o[f + 2] = color.b
		}
		if (u || c.sortParticles) g.bindBuffer(g.ARRAY_BUFFER, b.__webglVertexBuffer), g.bufferData(g.ARRAY_BUFFER, p, d);
		if (v || c.sortParticles) g.bindBuffer(g.ARRAY_BUFFER, b.__webglColorBuffer), g.bufferData(g.ARRAY_BUFFER, o, d)
	}

	function d(b, d, c, e, h) {
		e.program || N.initMaterial(e, d, c, h);
		var f = e.program,
			j = f.uniforms,
			k = e.uniforms;
		f != O && (g.useProgram(f),
			O = f);
		g.uniformMatrix4fv(j.projectionMatrix, !1, P);
		if (c && (e instanceof THREE.MeshBasicMaterial || e instanceof THREE.MeshLambertMaterial || e instanceof THREE.MeshPhongMaterial || e instanceof THREE.LineBasicMaterial || e instanceof THREE.ParticleBasicMaterial || e.fog))
			if (k.fogColor.value = c.color, c instanceof THREE.Fog) k.fogNear.value = c.near, k.fogFar.value = c.far;
			else if (c instanceof THREE.FogExp2) k.fogDensity.value = c.density;
		if (e instanceof THREE.MeshPhongMaterial || e instanceof THREE.MeshLambertMaterial || e.lights) {
			var m,
				n, p = 0,
				o = 0,
				t = 0,
				u, v, y, x, E = ea,
				C = E.directional.colors,
				F = E.directional.positions,
				D = E.point.colors,
				I = E.point.positions,
				J = E.point.distances,
				G = 0,
				B = 0,
				c = n = x = 0;
			for (m = d.length; c < m; c++)
				if (n = d[c], u = n.color, v = n.position, y = n.intensity, x = n.distance, n instanceof THREE.AmbientLight) p += u.r, o += u.g, t += u.b;
				else if (n instanceof THREE.DirectionalLight) x = G * 3, C[x] = u.r * y, C[x + 1] = u.g * y, C[x + 2] = u.b * y, F[x] = v.x, F[x + 1] = v.y, F[x + 2] = v.z, G += 1;
			else if (n instanceof THREE.PointLight) n = B * 3, D[n] = u.r * y, D[n + 1] = u.g * y, D[n + 2] = u.b * y, I[n] = v.x, I[n +
				1] = v.y, I[n + 2] = v.z, J[B] = x, B += 1;
			for (c = G * 3; c < C.length; c++) C[c] = 0;
			for (c = B * 3; c < D.length; c++) D[c] = 0;
			E.point.length = B;
			E.directional.length = G;
			E.ambient[0] = p;
			E.ambient[1] = o;
			E.ambient[2] = t;
			c = ea;
			k.enableLighting.value = c.directional.length + c.point.length;
			k.ambientLightColor.value = c.ambient;
			k.directionalLightColor.value = c.directional.colors;
			k.directionalLightDirection.value = c.directional.positions;
			k.pointLightColor.value = c.point.colors;
			k.pointLightPosition.value = c.point.positions;
			k.pointLightDistance.value = c.point.distances
		}
		if (e instanceof THREE.MeshBasicMaterial || e instanceof THREE.MeshLambertMaterial || e instanceof THREE.MeshPhongMaterial) k.diffuse.value = e.color, k.opacity.value = e.opacity, (k.map.texture = e.map) && k.offsetRepeat.value.set(e.map.offset.x, e.map.offset.y, e.map.repeat.x, e.map.repeat.y), k.lightMap.texture = e.lightMap, k.envMap.texture = e.envMap, k.reflectivity.value = e.reflectivity, k.refractionRatio.value = e.refractionRatio, k.combine.value = e.combine, k.useRefract.value = e.envMap && e.envMap.mapping instanceof THREE.CubeRefractionMapping;
		if (e instanceof THREE.LineBasicMaterial) k.diffuse.value = e.color, k.opacity.value = e.opacity;
		else if (e instanceof THREE.ParticleBasicMaterial) k.psColor.value = e.color, k.opacity.value = e.opacity, k.size.value = e.size, k.scale.value = ha.height / 2, k.map.texture = e.map;
		else if (e instanceof THREE.MeshPhongMaterial) k.ambient.value = e.ambient, k.specular.value = e.specular, k.shininess.value = e.shininess;
		else if (e instanceof THREE.MeshDepthMaterial) k.mNear.value = b.near, k.mFar.value = b.far, k.opacity.value = e.opacity;
		else if (e instanceof THREE.MeshNormalMaterial) k.opacity.value = e.opacity;
		for (var Xa in k)
			if (o = f.uniforms[Xa])
				if (m = k[Xa], p = m.type, c = m.value, p == "i") g.uniform1i(o, c);
				else if (p == "f") g.uniform1f(o, c);
		else if (p == "fv1") g.uniform1fv(o, c);
		else if (p == "fv") g.uniform3fv(o, c);
		else if (p == "v2") g.uniform2f(o, c.x, c.y);
		else if (p == "v3") g.uniform3f(o, c.x, c.y, c.z);
		else if (p == "v4") g.uniform4f(o, c.x, c.y, c.z, c.w);
		else if (p == "c") g.uniform3f(o, c.r, c.g, c.b);
		else if (p == "t" && (g.uniform1i(o, c), m = m.texture))
			if (m.image instanceof Array && m.image.length ==
				6) {
				if (m.image.length == 6) {
					if (m.needsUpdate) {
						if (m.__webglInit) {
							g.bindTexture(g.TEXTURE_CUBE_MAP, m.image.__webglTextureCube);
							for (p = 0; p < 6; ++p) g.texSubImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + p, 0, 0, 0, g.RGBA, g.UNSIGNED_BYTE, m.image[p])
						} else {
							m.image.__webglTextureCube = g.createTexture();
							g.bindTexture(g.TEXTURE_CUBE_MAP, m.image.__webglTextureCube);
							for (p = 0; p < 6; ++p) g.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + p, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, m.image[p]);
							m.__webglInit = !0
						}
						A(g.TEXTURE_CUBE_MAP, m, m.image[0]);
						g.bindTexture(g.TEXTURE_CUBE_MAP,
							null);
						m.needsUpdate = !1
					}
					g.activeTexture(g.TEXTURE0 + c);
					g.bindTexture(g.TEXTURE_CUBE_MAP, m.image.__webglTextureCube)
				}
			} else z(m, c);
		g.uniformMatrix4fv(j.modelViewMatrix, !1, h._modelViewMatrixArray);
		g.uniformMatrix3fv(j.normalMatrix, !1, h._normalMatrixArray);
		(e instanceof THREE.MeshShaderMaterial || e instanceof THREE.MeshPhongMaterial || e.envMap) && j.cameraPosition !== null && g.uniform3f(j.cameraPosition, b.position.x, b.position.y, b.position.z);
		(e instanceof THREE.MeshShaderMaterial || e.envMap || e.skinning) && j.objectMatrix !==
			null && g.uniformMatrix4fv(j.objectMatrix, !1, h._objectMatrixArray);
		(e instanceof THREE.MeshPhongMaterial || e instanceof THREE.MeshLambertMaterial || e instanceof THREE.MeshShaderMaterial || e.skinning) && j.viewMatrix !== null && g.uniformMatrix4fv(j.viewMatrix, !1, W);
		if (e instanceof THREE.ShadowVolumeDynamicMaterial) b = k.directionalLightDirection.value, b[0] = -d[1].position.x, b[1] = -d[1].position.y, b[2] = -d[1].position.z, g.uniform3fv(j.directionalLightDirection, b), g.uniformMatrix4fv(j.objectMatrix, !1, h._objectMatrixArray),
			g.uniformMatrix4fv(j.viewMatrix, !1, W);
		e.skinning && (g.uniformMatrix4fv(j.cameraInverseMatrix, !1, W), g.uniformMatrix4fv(j.boneGlobalMatrices, !1, h.boneMatrices));
		return f
	}

	function e(b, c, e, h, f, j) {
		if (h.opacity != 0) {
			var k, b = d(b, c, e, h, j).attributes;
			if (!h.morphTargets && b.position >= 0) g.bindBuffer(g.ARRAY_BUFFER, f.__webglVertexBuffer), g.vertexAttribPointer(b.position, 3, g.FLOAT, !1, 0, 0);
			else {
				c = h.program.attributes;
				j.morphTargetBase !== -1 ? (g.bindBuffer(g.ARRAY_BUFFER, f.__webglMorphTargetsBuffers[j.morphTargetBase]),
					g.vertexAttribPointer(c.position, 3, g.FLOAT, !1, 0, 0)) : c.position >= 0 && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglVertexBuffer), g.vertexAttribPointer(c.position, 3, g.FLOAT, !1, 0, 0));
				if (j.morphTargetForcedOrder.length)
					for (var e = 0, m = j.morphTargetForcedOrder, n = j.morphTargetInfluences; e < h.numSupportedMorphTargets && e < m.length;) g.bindBuffer(g.ARRAY_BUFFER, f.__webglMorphTargetsBuffers[m[e]]), g.vertexAttribPointer(c["morphTarget" + e], 3, g.FLOAT, !1, 0, 0), j.__webglMorphTargetInfluences[e] = n[m[e]], e++;
				else {
					var m = [],
						p = -1,
						o = 0,
						n = j.morphTargetInfluences,
						t, u = n.length,
						e = 0;
					for (j.morphTargetBase !== -1 && (m[j.morphTargetBase] = !0); e < h.numSupportedMorphTargets;) {
						for (t = 0; t < u; t++) !m[t] && n[t] > p && (o = t, p = n[o]);
						g.bindBuffer(g.ARRAY_BUFFER, f.__webglMorphTargetsBuffers[o]);
						g.vertexAttribPointer(c["morphTarget" + e], 3, g.FLOAT, !1, 0, 0);
						j.__webglMorphTargetInfluences[e] = p;
						m[o] = 1;
						p = -1;
						e++
					}
				}
				h.program.uniforms.morphTargetInfluences !== null && g.uniform1fv(h.program.uniforms.morphTargetInfluences, j.__webglMorphTargetInfluences)
			}
			if (f.__webglCustomAttributes)
				for (k in f.__webglCustomAttributes) b[k] >=
					0 && (c = f.__webglCustomAttributes[k], g.bindBuffer(g.ARRAY_BUFFER, c.buffer), g.vertexAttribPointer(b[k], c.size, g.FLOAT, !1, 0, 0));
			b.color >= 0 && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglColorBuffer), g.vertexAttribPointer(b.color, 3, g.FLOAT, !1, 0, 0));
			b.normal >= 0 && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglNormalBuffer), g.vertexAttribPointer(b.normal, 3, g.FLOAT, !1, 0, 0));
			b.tangent >= 0 && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglTangentBuffer), g.vertexAttribPointer(b.tangent, 4, g.FLOAT, !1, 0, 0));
			b.uv >= 0 && (f.__webglUVBuffer ? (g.bindBuffer(g.ARRAY_BUFFER,
				f.__webglUVBuffer), g.vertexAttribPointer(b.uv, 2, g.FLOAT, !1, 0, 0), g.enableVertexAttribArray(b.uv)) : g.disableVertexAttribArray(b.uv));
			b.uv2 >= 0 && (f.__webglUV2Buffer ? (g.bindBuffer(g.ARRAY_BUFFER, f.__webglUV2Buffer), g.vertexAttribPointer(b.uv2, 2, g.FLOAT, !1, 0, 0), g.enableVertexAttribArray(b.uv2)) : g.disableVertexAttribArray(b.uv2));
			h.skinning && b.skinVertexA >= 0 && b.skinVertexB >= 0 && b.skinIndex >= 0 && b.skinWeight >= 0 && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglSkinVertexABuffer), g.vertexAttribPointer(b.skinVertexA, 4,
				g.FLOAT, !1, 0, 0), g.bindBuffer(g.ARRAY_BUFFER, f.__webglSkinVertexBBuffer), g.vertexAttribPointer(b.skinVertexB, 4, g.FLOAT, !1, 0, 0), g.bindBuffer(g.ARRAY_BUFFER, f.__webglSkinIndicesBuffer), g.vertexAttribPointer(b.skinIndex, 4, g.FLOAT, !1, 0, 0), g.bindBuffer(g.ARRAY_BUFFER, f.__webglSkinWeightsBuffer), g.vertexAttribPointer(b.skinWeight, 4, g.FLOAT, !1, 0, 0));
			j instanceof THREE.Mesh ? (h.wireframe ? (g.lineWidth(h.wireframeLinewidth), g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, f.__webglLineBuffer), g.drawElements(g.LINES, f.__webglLineCount,
				g.UNSIGNED_SHORT, 0)) : (g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, f.__webglFaceBuffer), g.drawElements(g.TRIANGLES, f.__webglFaceCount, g.UNSIGNED_SHORT, 0)), N.data.vertices += f.__webglFaceCount, N.data.faces += f.__webglFaceCount / 3, N.data.drawCalls++) : j instanceof THREE.Line ? (j = j.type == THREE.LineStrip ? g.LINE_STRIP : g.LINES, g.lineWidth(h.linewidth), g.drawArrays(j, 0, f.__webglLineCount), N.data.drawCalls++) : j instanceof THREE.ParticleSystem ? (g.drawArrays(g.POINTS, 0, f.__webglParticleCount), N.data.drawCalls++) : j instanceof
			THREE.Ribbon && (g.drawArrays(g.TRIANGLE_STRIP, 0, f.__webglVertexCount), N.data.drawCalls++)
		}
	}

	function f(b, d, c) {
		if (!b.__webglVertexBuffer) b.__webglVertexBuffer = g.createBuffer();
		if (!b.__webglNormalBuffer) b.__webglNormalBuffer = g.createBuffer();
		b.hasPos && (g.bindBuffer(g.ARRAY_BUFFER, b.__webglVertexBuffer), g.bufferData(g.ARRAY_BUFFER, b.positionArray, g.DYNAMIC_DRAW), g.enableVertexAttribArray(d.attributes.position), g.vertexAttribPointer(d.attributes.position, 3, g.FLOAT, !1, 0, 0));
		if (b.hasNormal) {
			g.bindBuffer(g.ARRAY_BUFFER,
				b.__webglNormalBuffer);
			if (c == THREE.FlatShading) {
				var e, f, h, j, k, m, n, p, o, t, u = b.count * 3;
				for (t = 0; t < u; t += 9) c = b.normalArray, e = c[t], f = c[t + 1], h = c[t + 2], j = c[t + 3], m = c[t + 4], p = c[t + 5], k = c[t + 6], n = c[t + 7], o = c[t + 8], e = (e + j + k) / 3, f = (f + m + n) / 3, h = (h + p + o) / 3, c[t] = e, c[t + 1] = f, c[t + 2] = h, c[t + 3] = e, c[t + 4] = f, c[t + 5] = h, c[t + 6] = e, c[t + 7] = f, c[t + 8] = h
			}
			g.bufferData(g.ARRAY_BUFFER, b.normalArray, g.DYNAMIC_DRAW);
			g.enableVertexAttribArray(d.attributes.normal);
			g.vertexAttribPointer(d.attributes.normal, 3, g.FLOAT, !1, 0, 0)
		}
		g.drawArrays(g.TRIANGLES,
			0, b.count);
		b.count = 0
	}

	function h(b) {
		if ($ != b.doubleSided) b.doubleSided ? g.disable(g.CULL_FACE) : g.enable(g.CULL_FACE), $ = b.doubleSided;
		if (T != b.flipSided) b.flipSided ? g.frontFace(g.CW) : g.frontFace(g.CCW), T = b.flipSided
	}

	function j(b) {
		fa != b && (b ? g.enable(g.DEPTH_TEST) : g.disable(g.DEPTH_TEST), fa = b)
	}

	function k(b) {
		aa[0].set(b.n41 - b.n11, b.n42 - b.n12, b.n43 - b.n13, b.n44 - b.n14);
		aa[1].set(b.n41 + b.n11, b.n42 + b.n12, b.n43 + b.n13, b.n44 + b.n14);
		aa[2].set(b.n41 + b.n21, b.n42 + b.n22, b.n43 + b.n23, b.n44 + b.n24);
		aa[3].set(b.n41 - b.n21,
			b.n42 - b.n22, b.n43 - b.n23, b.n44 - b.n24);
		aa[4].set(b.n41 - b.n31, b.n42 - b.n32, b.n43 - b.n33, b.n44 - b.n34);
		aa[5].set(b.n41 + b.n31, b.n42 + b.n32, b.n43 + b.n33, b.n44 + b.n34);
		for (var d, b = 0; b < 6; b++) d = aa[b], d.divideScalar(Math.sqrt(d.x * d.x + d.y * d.y + d.z * d.z))
	}

	function m(b) {
		for (var d = b.matrixWorld, c = -b.geometry.boundingSphere.radius * Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z)), e = 0; e < 6; e++)
			if (b = aa[e].x * d.n14 + aa[e].y * d.n24 + aa[e].z * d.n34 + aa[e].w, b <= c) return !1;
		return !0
	}

	function n(b, d) {
		b.list[b.count] = d;
		b.count += 1
	}

	function o(b) {
		var d,
			c, e = b.object,
			g = b.opaque,
			f = b.transparent;
		f.count = 0;
		b = g.count = 0;
		for (d = e.materials.length; b < d; b++) c = e.materials[b], c.transparent ? n(f, c) : n(g, c)
	}

	function p(b) {
		var d, c, e, g, f = b.object,
			h = b.buffer,
			j = b.opaque,
			k = b.transparent;
		k.count = 0;
		b = j.count = 0;
		for (e = f.materials.length; b < e; b++)
			if (d = f.materials[b], d instanceof THREE.MeshFaceMaterial) {
				d = 0;
				for (c = h.materials.length; d < c; d++)(g = h.materials[d]) && (g.transparent ? n(k, g) : n(j, g))
			} else(g = d) && (g.transparent ? n(k, g) : n(j, g))
	}

	function t(b, d) {
		return d.z - b.z
	}

	function u(b) {
		g.enable(g.POLYGON_OFFSET_FILL);
		g.polygonOffset(0.1, 1);
		g.enable(g.STENCIL_TEST);
		g.enable(g.DEPTH_TEST);
		g.depthMask(!1);
		g.colorMask(!1, !1, !1, !1);
		g.stencilFunc(g.ALWAYS, 1, 255);
		g.stencilOpSeparate(g.BACK, g.KEEP, g.INCR, g.KEEP);
		g.stencilOpSeparate(g.FRONT, g.KEEP, g.DECR, g.KEEP);
		var d, c = b.lights.length,
			e, f = b.lights,
			h = [],
			j, k, m, n, p, o = b.__webglShadowVolumes.length;
		for (d = 0; d < c; d++)
			if (e = b.lights[d], e instanceof THREE.DirectionalLight && e.castShadow) {
				h[0] = -e.position.x;
				h[1] = -e.position.y;
				h[2] = -e.position.z;
				for (p = 0; p < o; p++) e = b.__webglShadowVolumes[p].object,
					j = b.__webglShadowVolumes[p].buffer, k = e.materials[0], k.program || N.initMaterial(k, f, void 0, e), k = k.program, m = k.uniforms, n = k.attributes, O !== k && (g.useProgram(k), O = k, g.uniformMatrix4fv(m.projectionMatrix, !1, P), g.uniformMatrix4fv(m.viewMatrix, !1, W), g.uniform3fv(m.directionalLightDirection, h)), e.matrixWorld.flattenToArray(e._objectMatrixArray), g.uniformMatrix4fv(m.objectMatrix, !1, e._objectMatrixArray), g.bindBuffer(g.ARRAY_BUFFER, j.__webglVertexBuffer), g.vertexAttribPointer(n.position, 3, g.FLOAT, !1, 0, 0), g.bindBuffer(g.ARRAY_BUFFER,
						j.__webglNormalBuffer), g.vertexAttribPointer(n.normal, 3, g.FLOAT, !1, 0, 0), g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, j.__webglFaceBuffer), g.cullFace(g.FRONT), g.drawElements(g.TRIANGLES, j.__webglFaceCount, g.UNSIGNED_SHORT, 0), g.cullFace(g.BACK), g.drawElements(g.TRIANGLES, j.__webglFaceCount, g.UNSIGNED_SHORT, 0)
			}
		g.disable(g.POLYGON_OFFSET_FILL);
		g.colorMask(!0, !0, !0, !0);
		g.stencilFunc(g.NOTEQUAL, 0, 255);
		g.stencilOp(g.KEEP, g.KEEP, g.KEEP);
		g.disable(g.DEPTH_TEST);
		Q = -1;
		O = Z.program;
		g.useProgram(Z.program);
		g.uniformMatrix4fv(Z.projectionLocation, !1, P);
		g.uniform1f(Z.darknessLocation, Z.darkness);
		g.bindBuffer(g.ARRAY_BUFFER, Z.vertexBuffer);
		g.vertexAttribPointer(Z.vertexLocation, 3, g.FLOAT, !1, 0, 0);
		g.enableVertexAttribArray(Z.vertexLocation);
		g.blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA);
		g.blendEquation(g.FUNC_ADD);
		g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, Z.elementBuffer);
		g.drawElements(g.TRIANGLES, 6, g.UNSIGNED_SHORT, 0);
		g.disable(g.STENCIL_TEST);
		g.enable(g.DEPTH_TEST);
		g.depthMask(L)
	}

	function v(b, d) {
		var c, e, f;
		c = _sprite.attributes;
		var h = _sprite.uniforms,
			j =
			ca / ga,
			k, m = [],
			n = ga * 0.5,
			p = ca * 0.5,
			o = !0;
		g.useProgram(_sprite.program);
		O = _sprite.program;
		Q = -1;
		qa || (g.enableVertexAttribArray(_sprite.attributes.position), g.enableVertexAttribArray(_sprite.attributes.uv), qa = !0);
		g.disable(g.CULL_FACE);
		g.enable(g.BLEND);
		g.depthMask(!0);
		g.bindBuffer(g.ARRAY_BUFFER, _sprite.vertexBuffer);
		g.vertexAttribPointer(c.position, 2, g.FLOAT, !1, 16, 0);
		g.vertexAttribPointer(c.uv, 2, g.FLOAT, !1, 16, 8);
		g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, _sprite.elementBuffer);
		g.uniformMatrix4fv(h.projectionMatrix, !1, P);
		g.activeTexture(g.TEXTURE0);
		g.uniform1i(h.map, 0);
		c = 0;
		for (e = b.__webglSprites.length; c < e; c++) f = b.__webglSprites[c], f.useScreenCoordinates ? f.z = -f.position.z : (f._modelViewMatrix.multiplyToArray(d.matrixWorldInverse, f.matrixWorld, f._modelViewMatrixArray), f.z = -f._modelViewMatrix.n34);
		b.__webglSprites.sort(t);
		c = 0;
		for (e = b.__webglSprites.length; c < e; c++) f = b.__webglSprites[c], f.material === void 0 && f.map && f.map.image && f.map.image.width && (f.useScreenCoordinates ? (g.uniform1i(h.useScreenCoordinates, 1), g.uniform3f(h.screenPosition,
				(f.position.x - n) / n, (p - f.position.y) / p, Math.max(0, Math.min(1, f.position.z)))) : (g.uniform1i(h.useScreenCoordinates, 0), g.uniform1i(h.affectedByDistance, f.affectedByDistance ? 1 : 0), g.uniformMatrix4fv(h.modelViewMatrix, !1, f._modelViewMatrixArray)), k = f.map.image.width / (f.affectedByDistance ? 1 : ca), m[0] = k * j * f.scale.x, m[1] = k * f.scale.y, g.uniform2f(h.uvScale, f.uvScale.x, f.uvScale.y), g.uniform2f(h.uvOffset, f.uvOffset.x, f.uvOffset.y), g.uniform2f(h.alignment, f.alignment.x, f.alignment.y), g.uniform1f(h.opacity, f.opacity),
			g.uniform1f(h.rotation, f.rotation), g.uniform2fv(h.scale, m), f.mergeWith3D && !o ? (g.enable(g.DEPTH_TEST), o = !0) : !f.mergeWith3D && o && (g.disable(g.DEPTH_TEST), o = !1), I(f.blending), z(f.map, 0), g.drawElements(g.TRIANGLES, 6, g.UNSIGNED_SHORT, 0));
		g.enable(g.CULL_FACE);
		g.enable(g.DEPTH_TEST);
		g.depthMask(L)
	}

	function C(b, d) {
		var c, e, f = b.__webglLensFlares.length,
			h, j, k, m = new THREE.Vector3,
			n = ca / ga,
			p = ga * 0.5,
			o = ca * 0.5,
			t = 16 / ca,
			u = [t * n, t],
			v = [1, 1, 0],
			y = [1, 1],
			x = K.uniforms;
		c = K.attributes;
		g.useProgram(K.program);
		O = K.program;
		Q = -1;
		wa || (g.enableVertexAttribArray(K.attributes.vertex), g.enableVertexAttribArray(K.attributes.uv), wa = !0);
		g.uniform1i(x.occlusionMap, 0);
		g.uniform1i(x.map, 1);
		g.bindBuffer(g.ARRAY_BUFFER, K.vertexBuffer);
		g.vertexAttribPointer(c.vertex, 2, g.FLOAT, !1, 16, 0);
		g.vertexAttribPointer(c.uv, 2, g.FLOAT, !1, 16, 8);
		g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, K.elementBuffer);
		g.disable(g.CULL_FACE);
		g.depthMask(!1);
		g.activeTexture(g.TEXTURE0);
		g.bindTexture(g.TEXTURE_2D, K.occlusionTexture);
		g.activeTexture(g.TEXTURE1);
		for (e = 0; e < f; e++)
			if (c =
				b.__webglLensFlares[e].object, m.set(c.matrixWorld.n14, c.matrixWorld.n24, c.matrixWorld.n34), d.matrixWorldInverse.multiplyVector3(m), d.projectionMatrix.multiplyVector3(m), v[0] = m.x, v[1] = m.y, v[2] = m.z, y[0] = v[0] * p + p, y[1] = v[1] * o + o, K.hasVertexTexture || y[0] > 0 && y[0] < ga && y[1] > 0 && y[1] < ca) {
				g.bindTexture(g.TEXTURE_2D, K.tempTexture);
				g.copyTexImage2D(g.TEXTURE_2D, 0, g.RGB, y[0] - 8, y[1] - 8, 16, 16, 0);
				g.uniform1i(x.renderType, 0);
				g.uniform2fv(x.scale, u);
				g.uniform3fv(x.screenPosition, v);
				g.disable(g.BLEND);
				g.enable(g.DEPTH_TEST);
				g.drawElements(g.TRIANGLES, 6, g.UNSIGNED_SHORT, 0);
				g.bindTexture(g.TEXTURE_2D, K.occlusionTexture);
				g.copyTexImage2D(g.TEXTURE_2D, 0, g.RGBA, y[0] - 8, y[1] - 8, 16, 16, 0);
				g.uniform1i(x.renderType, 1);
				g.disable(g.DEPTH_TEST);
				g.bindTexture(g.TEXTURE_2D, K.tempTexture);
				g.drawElements(g.TRIANGLES, 6, g.UNSIGNED_SHORT, 0);
				c.positionScreen.x = v[0];
				c.positionScreen.y = v[1];
				c.positionScreen.z = v[2];
				c.customUpdateCallback ? c.customUpdateCallback(c) : c.updateLensFlares();
				g.uniform1i(x.renderType, 2);
				g.enable(g.BLEND);
				h = 0;
				for (j = c.lensFlares.length; h <
					j; h++)
					if (k = c.lensFlares[h], k.opacity > 0.001 && k.scale > 0.001) v[0] = k.x, v[1] = k.y, v[2] = k.z, t = k.size * k.scale / ca, u[0] = t * n, u[1] = t, g.uniform3fv(x.screenPosition, v), g.uniform2fv(x.scale, u), g.uniform1f(x.rotation, k.rotation), g.uniform1f(x.opacity, k.opacity), I(k.blending), z(k.texture, 1), g.drawElements(g.TRIANGLES, 6, g.UNSIGNED_SHORT, 0)
			}
		g.enable(g.CULL_FACE);
		g.enable(g.DEPTH_TEST);
		g.depthMask(L)
	}

	function E(b, d) {
		b._modelViewMatrix.multiplyToArray(d.matrixWorldInverse, b.matrixWorld, b._modelViewMatrixArray);
		THREE.Matrix4.makeInvert3x3(b._modelViewMatrix).transposeIntoArray(b._normalMatrixArray)
	}

	function y(b) {
		var d, e, f, h, j;
		if (b instanceof THREE.Mesh) {
			e = b.geometry;
			for (d in e.geometryGroups) {
				f = e.geometryGroups[d];
				j = !1;
				for (h in f.__webglCustomAttributes)
					if (f.__webglCustomAttributes[h].needsUpdate) {
						j = !0;
						break
					}
				if (e.__dirtyVertices || e.__dirtyMorphTargets || e.__dirtyElements || e.__dirtyUvs || e.__dirtyNormals || e.__dirtyColors || e.__dirtyTangents || j) {
					j = b;
					var k = g.DYNAMIC_DRAW;
					if (f.__inittedArrays) {
						var m = void 0,
							n = void 0,
							p = void 0,
							o = void 0,
							t = p = void 0,
							u = void 0,
							v = void 0,
							y = void 0,
							x = void 0,
							E = void 0,
							C = void 0,
							F = void 0,
							ha = void 0,
							z = void 0,
							A = void 0,
							D = void 0,
							I = void 0,
							B = o = y = o = v = u = void 0,
							J = void 0,
							w = J = B = u = void 0,
							G = void 0,
							M = w = J = B = p = p = t = y = o = w = J = B = G = w = J = B = G = w = J = B = void 0,
							da = 0,
							K = 0,
							la = 0,
							L = 0,
							P = 0,
							S = 0,
							N = 0,
							R = 0,
							O = 0,
							H = 0,
							Q = 0,
							J = B = 0,
							U = f.__vertexArray,
							Z = f.__uvArray,
							$ = f.__uv2Array,
							fa = f.__normalArray,
							T = f.__tangentArray,
							ma = f.__colorArray,
							V = f.__skinVertexAArray,
							W = f.__skinVertexBArray,
							X = f.__skinIndexArray,
							Y = f.__skinWeightArray,
							ga = f.__morphTargetsArrays,
							ca = f.__webglCustomAttributes,
							w = void 0,
							aa = f.__faceArray,
							ea = f.__lineArray,
							ka = f.__needsSmoothNormals,
							E = f.__vertexColorType,
							x = f.__uvType,
							C = f.__normalType,
							oa = j.geometry,
							ya = oa.__dirtyVertices,
							va = oa.__dirtyElements,
							qa = oa.__dirtyUvs,
							wa = oa.__dirtyNormals,
							Ua = oa.__dirtyTangents,
							Va = oa.__dirtyColors,
							Wa = oa.__dirtyMorphTargets,
							Da = oa.vertices,
							Za = f.faces,
							bb = oa.faces,
							$a = oa.faceVertexUvs[0],
							ab = oa.faceVertexUvs[1],
							Ea = oa.skinVerticesA,
							Fa = oa.skinVerticesB,
							Ga = oa.skinIndices,
							xa = oa.skinWeights,
							Ba = j instanceof THREE.ShadowVolume ? oa.edgeFaces : void 0;
						morphTargets = oa.morphTargets;
						if (ca)
							for (M in ca) ca[M].offset = 0, ca[M].offsetSrc =
								0;
						m = 0;
						for (n = Za.length; m < n; m++)
							if (p = Za[m], o = bb[p], $a && (F = $a[p]), ab && (ha = ab[p]), p = o.vertexNormals, t = o.normal, u = o.vertexColors, v = o.color, y = o.vertexTangents, o instanceof THREE.Face3) {
								if (ya) z = Da[o.a].position, A = Da[o.b].position, D = Da[o.c].position, U[K] = z.x, U[K + 1] = z.y, U[K + 2] = z.z, U[K + 3] = A.x, U[K + 4] = A.y, U[K + 5] = A.z, U[K + 6] = D.x, U[K + 7] = D.y, U[K + 8] = D.z, K += 9;
								if (ca)
									for (M in ca)
										if (w = ca[M], w.needsUpdate) B = w.offset, J = w.offsetSrc, w.size === 1 ? (w.boundTo === void 0 || w.boundTo === "vertices" ? (w.array[B + 0] = w.value[o.a], w.array[B +
											1] = w.value[o.b], w.array[B + 2] = w.value[o.c]) : w.boundTo === "faces" ? (w.array[B + 0] = w.value[J], w.array[B + 1] = w.value[J], w.array[B + 2] = w.value[J], w.offsetSrc++) : w.boundTo === "faceVertices" && (w.array[B + 0] = w.value[J + 0], w.array[B + 1] = w.value[J + 1], w.array[B + 2] = w.value[J + 2], w.offsetSrc += 3), w.offset += 3) : (w.boundTo === void 0 || w.boundTo === "vertices" ? (z = w.value[o.a], A = w.value[o.b], D = w.value[o.c]) : w.boundTo === "faces" ? (z = w.value[J], A = w.value[J], D = w.value[J], w.offsetSrc++) : w.boundTo === "faceVertices" && (z = w.value[J + 0], A = w.value[J +
											1], D = w.value[J + 2], w.offsetSrc += 3), w.size === 2 ? (w.array[B + 0] = z.x, w.array[B + 1] = z.y, w.array[B + 2] = A.x, w.array[B + 3] = A.y, w.array[B + 4] = D.x, w.array[B + 5] = D.y, w.offset += 6) : w.size === 3 ? (w.type === "c" ? (w.array[B + 0] = z.r, w.array[B + 1] = z.g, w.array[B + 2] = z.b, w.array[B + 3] = A.r, w.array[B + 4] = A.g, w.array[B + 5] = A.b, w.array[B + 6] = D.r, w.array[B + 7] = D.g, w.array[B + 8] = D.b) : (w.array[B + 0] = z.x, w.array[B + 1] = z.y, w.array[B + 2] = z.z, w.array[B + 3] = A.x, w.array[B + 4] = A.y, w.array[B + 5] = A.z, w.array[B + 6] = D.x, w.array[B + 7] = D.y, w.array[B + 8] = D.z), w.offset +=
											9) : (w.array[B + 0] = z.x, w.array[B + 1] = z.y, w.array[B + 2] = z.z, w.array[B + 3] = z.w, w.array[B + 4] = A.x, w.array[B + 5] = A.y, w.array[B + 6] = A.z, w.array[B + 7] = A.w, w.array[B + 8] = D.x, w.array[B + 9] = D.y, w.array[B + 10] = D.z, w.array[B + 11] = D.w, w.offset += 12));
								if (Wa) {
									B = 0;
									for (J = morphTargets.length; B < J; B++) z = morphTargets[B].vertices[o.a].position, A = morphTargets[B].vertices[o.b].position, D = morphTargets[B].vertices[o.c].position, w = ga[B], w[Q + 0] = z.x, w[Q + 1] = z.y, w[Q + 2] = z.z, w[Q + 3] = A.x, w[Q + 4] = A.y, w[Q + 5] = A.z, w[Q + 6] = D.x, w[Q + 7] = D.y, w[Q + 8] = D.z;
									Q +=
										9
								}
								if (xa.length) B = xa[o.a], J = xa[o.b], w = xa[o.c], Y[H] = B.x, Y[H + 1] = B.y, Y[H + 2] = B.z, Y[H + 3] = B.w, Y[H + 4] = J.x, Y[H + 5] = J.y, Y[H + 6] = J.z, Y[H + 7] = J.w, Y[H + 8] = w.x, Y[H + 9] = w.y, Y[H + 10] = w.z, Y[H + 11] = w.w, B = Ga[o.a], J = Ga[o.b], w = Ga[o.c], X[H] = B.x, X[H + 1] = B.y, X[H + 2] = B.z, X[H + 3] = B.w, X[H + 4] = J.x, X[H + 5] = J.y, X[H + 6] = J.z, X[H + 7] = J.w, X[H + 8] = w.x, X[H + 9] = w.y, X[H + 10] = w.z, X[H + 11] = w.w, B = Ea[o.a], J = Ea[o.b], w = Ea[o.c], V[H] = B.x, V[H + 1] = B.y, V[H + 2] = B.z, V[H + 3] = 1, V[H + 4] = J.x, V[H + 5] = J.y, V[H + 6] = J.z, V[H + 7] = 1, V[H + 8] = w.x, V[H + 9] = w.y, V[H + 10] = w.z, V[H + 11] = 1, B = Fa[o.a],
									J = Fa[o.b], w = Fa[o.c], W[H] = B.x, W[H + 1] = B.y, W[H + 2] = B.z, W[H + 3] = 1, W[H + 4] = J.x, W[H + 5] = J.y, W[H + 6] = J.z, W[H + 7] = 1, W[H + 8] = w.x, W[H + 9] = w.y, W[H + 10] = w.z, W[H + 11] = 1, H += 12;
								if (Va && E) u.length == 3 && E == THREE.VertexColors ? (o = u[0], B = u[1], J = u[2]) : J = B = o = v, ma[O] = o.r, ma[O + 1] = o.g, ma[O + 2] = o.b, ma[O + 3] = B.r, ma[O + 4] = B.g, ma[O + 5] = B.b, ma[O + 6] = J.r, ma[O + 7] = J.g, ma[O + 8] = J.b, O += 9;
								if (Ua && oa.hasTangents) u = y[0], v = y[1], o = y[2], T[N] = u.x, T[N + 1] = u.y, T[N + 2] = u.z, T[N + 3] = u.w, T[N + 4] = v.x, T[N + 5] = v.y, T[N + 6] = v.z, T[N + 7] = v.w, T[N + 8] = o.x, T[N + 9] = o.y, T[N + 10] = o.z,
									T[N + 11] = o.w, N += 12;
								if (wa && C)
									if (p.length == 3 && ka)
										for (y = 0; y < 3; y++) t = p[y], fa[S] = t.x, fa[S + 1] = t.y, fa[S + 2] = t.z, S += 3;
									else
										for (y = 0; y < 3; y++) fa[S] = t.x, fa[S + 1] = t.y, fa[S + 2] = t.z, S += 3;
								if (qa && F !== void 0 && x)
									for (y = 0; y < 3; y++) p = F[y], Z[la] = p.u, Z[la + 1] = p.v, la += 2;
								if (qa && ha !== void 0 && x)
									for (y = 0; y < 3; y++) p = ha[y], $[L] = p.u, $[L + 1] = p.v, L += 2;
								va && (aa[P] = da, aa[P + 1] = da + 1, aa[P + 2] = da + 2, P += 3, ea[R] = da, ea[R + 1] = da + 1, ea[R + 2] = da, ea[R + 3] = da + 2, ea[R + 4] = da + 1, ea[R + 5] = da + 2, R += 6, da += 3)
							} else if (o instanceof THREE.Face4) {
							if (ya) z = Da[o.a].position, A =
								Da[o.b].position, D = Da[o.c].position, I = Da[o.d].position, U[K] = z.x, U[K + 1] = z.y, U[K + 2] = z.z, U[K + 3] = A.x, U[K + 4] = A.y, U[K + 5] = A.z, U[K + 6] = D.x, U[K + 7] = D.y, U[K + 8] = D.z, U[K + 9] = I.x, U[K + 10] = I.y, U[K + 11] = I.z, K += 12;
							if (ca)
								for (M in ca)
									if (w = ca[M], w.needsUpdate) B = w.offset, J = w.offsetSrc, w.size === 1 ? (w.boundTo === void 0 || w.boundTo === "vertices" ? (w.array[B + 0] = w.value[o.a], w.array[B + 1] = w.value[o.b], w.array[B + 2] = w.value[o.c], w.array[B + 3] = w.value[o.d]) : w.boundTo === "faces" ? (w.array[B + 0] = w.value[J], w.array[B + 1] = w.value[J], w.array[B +
										2] = w.value[J], w.array[B + 3] = w.value[J], w.offsetSrc++) : w.boundTo === "faceVertices" && (w.array[B + 0] = w.value[J + 0], w.array[B + 1] = w.value[J + 1], w.array[B + 2] = w.value[J + 2], w.array[B + 3] = w.value[J + 3], w.offsetSrc += 4), w.offset += 4) : (w.boundTo === void 0 || w.boundTo === "vertices" ? (z = w.value[o.a], A = w.value[o.b], D = w.value[o.c], I = w.value[o.d]) : w.boundTo === "faces" ? (z = w.value[J], A = w.value[J], D = w.value[J], I = w.value[J], w.offsetSrc++) : w.boundTo === "faceVertices" && (z = w.value[J + 0], A = w.value[J + 1], D = w.value[J + 2], I = w.value[J + 3], w.offsetSrc +=
										4), w.size === 2 ? (w.array[B + 0] = z.x, w.array[B + 1] = z.y, w.array[B + 2] = A.x, w.array[B + 3] = A.y, w.array[B + 4] = D.x, w.array[B + 5] = D.y, w.array[B + 6] = I.x, w.array[B + 7] = I.y, w.offset += 8) : w.size === 3 ? (w.type === "c" ? (w.array[B + 0] = z.r, w.array[B + 1] = z.g, w.array[B + 2] = z.b, w.array[B + 3] = A.r, w.array[B + 4] = A.g, w.array[B + 5] = A.b, w.array[B + 6] = D.r, w.array[B + 7] = D.g, w.array[B + 8] = D.b, w.array[B + 9] = I.r, w.array[B + 10] = I.g, w.array[B + 11] = I.b) : (w.array[B + 0] = z.x, w.array[B + 1] = z.y, w.array[B + 2] = z.z, w.array[B + 3] = A.x, w.array[B + 4] = A.y, w.array[B + 5] = A.z, w.array[B +
										6] = D.x, w.array[B + 7] = D.y, w.array[B + 8] = D.z, w.array[B + 9] = I.x, w.array[B + 10] = I.y, w.array[B + 11] = I.z), w.offset += 12) : (w.array[B + 0] = z.x, w.array[B + 1] = z.y, w.array[B + 2] = z.z, w.array[B + 3] = z.w, w.array[B + 4] = A.x, w.array[B + 5] = A.y, w.array[B + 6] = A.z, w.array[B + 7] = A.w, w.array[B + 8] = D.x, w.array[B + 9] = D.y, w.array[B + 10] = D.z, w.array[B + 11] = D.w, w.array[B + 12] = I.x, w.array[B + 13] = I.y, w.array[B + 14] = I.z, w.array[B + 15] = I.w, w.offset += 16));
							if (Wa) {
								B = 0;
								for (J = morphTargets.length; B < J; B++) z = morphTargets[B].vertices[o.a].position, A = morphTargets[B].vertices[o.b].position,
									D = morphTargets[B].vertices[o.c].position, I = morphTargets[B].vertices[o.d].position, w = ga[B], w[Q + 0] = z.x, w[Q + 1] = z.y, w[Q + 2] = z.z, w[Q + 3] = A.x, w[Q + 4] = A.y, w[Q + 5] = A.z, w[Q + 6] = D.x, w[Q + 7] = D.y, w[Q + 8] = D.z, w[Q + 9] = I.x, w[Q + 10] = I.y, w[Q + 11] = I.z;
								Q += 12
							}
							if (xa.length) B = xa[o.a], J = xa[o.b], w = xa[o.c], G = xa[o.d], Y[H] = B.x, Y[H + 1] = B.y, Y[H + 2] = B.z, Y[H + 3] = B.w, Y[H + 4] = J.x, Y[H + 5] = J.y, Y[H + 6] = J.z, Y[H + 7] = J.w, Y[H + 8] = w.x, Y[H + 9] = w.y, Y[H + 10] = w.z, Y[H + 11] = w.w, Y[H + 12] = G.x, Y[H + 13] = G.y, Y[H + 14] = G.z, Y[H + 15] = G.w, B = Ga[o.a], J = Ga[o.b], w = Ga[o.c], G = Ga[o.d],
								X[H] = B.x, X[H + 1] = B.y, X[H + 2] = B.z, X[H + 3] = B.w, X[H + 4] = J.x, X[H + 5] = J.y, X[H + 6] = J.z, X[H + 7] = J.w, X[H + 8] = w.x, X[H + 9] = w.y, X[H + 10] = w.z, X[H + 11] = w.w, X[H + 12] = G.x, X[H + 13] = G.y, X[H + 14] = G.z, X[H + 15] = G.w, B = Ea[o.a], J = Ea[o.b], w = Ea[o.c], G = Ea[o.d], V[H] = B.x, V[H + 1] = B.y, V[H + 2] = B.z, V[H + 3] = 1, V[H + 4] = J.x, V[H + 5] = J.y, V[H + 6] = J.z, V[H + 7] = 1, V[H + 8] = w.x, V[H + 9] = w.y, V[H + 10] = w.z, V[H + 11] = 1, V[H + 12] = G.x, V[H + 13] = G.y, V[H + 14] = G.z, V[H + 15] = 1, B = Fa[o.a], J = Fa[o.b], w = Fa[o.c], o = Fa[o.d], W[H] = B.x, W[H + 1] = B.y, W[H + 2] = B.z, W[H + 3] = 1, W[H + 4] = J.x, W[H + 5] = J.y, W[H + 6] =
								J.z, W[H + 7] = 1, W[H + 8] = w.x, W[H + 9] = w.y, W[H + 10] = w.z, W[H + 11] = 1, W[H + 12] = o.x, W[H + 13] = o.y, W[H + 14] = o.z, W[H + 15] = 1, H += 16;
							if (Va && E) u.length == 4 && E == THREE.VertexColors ? (o = u[0], B = u[1], J = u[2], u = u[3]) : u = J = B = o = v, ma[O] = o.r, ma[O + 1] = o.g, ma[O + 2] = o.b, ma[O + 3] = B.r, ma[O + 4] = B.g, ma[O + 5] = B.b, ma[O + 6] = J.r, ma[O + 7] = J.g, ma[O + 8] = J.b, ma[O + 9] = u.r, ma[O + 10] = u.g, ma[O + 11] = u.b, O += 12;
							if (Ua && oa.hasTangents) u = y[0], v = y[1], o = y[2], y = y[3], T[N] = u.x, T[N + 1] = u.y, T[N + 2] = u.z, T[N + 3] = u.w, T[N + 4] = v.x, T[N + 5] = v.y, T[N + 6] = v.z, T[N + 7] = v.w, T[N + 8] = o.x, T[N + 9] = o.y,
								T[N + 10] = o.z, T[N + 11] = o.w, T[N + 12] = y.x, T[N + 13] = y.y, T[N + 14] = y.z, T[N + 15] = y.w, N += 16;
							if (wa && C)
								if (p.length == 4 && ka)
									for (y = 0; y < 4; y++) t = p[y], fa[S] = t.x, fa[S + 1] = t.y, fa[S + 2] = t.z, S += 3;
								else
									for (y = 0; y < 4; y++) fa[S] = t.x, fa[S + 1] = t.y, fa[S + 2] = t.z, S += 3;
							if (qa && F !== void 0 && x)
								for (y = 0; y < 4; y++) p = F[y], Z[la] = p.u, Z[la + 1] = p.v, la += 2;
							if (qa && ha !== void 0 && x)
								for (y = 0; y < 4; y++) p = ha[y], $[L] = p.u, $[L + 1] = p.v, L += 2;
							va && (aa[P] = da, aa[P + 1] = da + 1, aa[P + 2] = da + 3, aa[P + 3] = da + 1, aa[P + 4] = da + 2, aa[P + 5] = da + 3, P += 6, ea[R] = da, ea[R + 1] = da + 1, ea[R + 2] = da, ea[R + 3] = da + 3,
								ea[R + 4] = da + 1, ea[R + 5] = da + 2, ea[R + 6] = da + 2, ea[R + 7] = da + 3, R += 8, da += 4)
						}
						if (Ba) {
							m = 0;
							for (n = Ba.length; m < n; m++) aa[P] = Ba[m].a, aa[P + 1] = Ba[m].b, aa[P + 2] = Ba[m].c, aa[P + 3] = Ba[m].a, aa[P + 4] = Ba[m].c, aa[P + 5] = Ba[m].d, P += 6
						}
						ya && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglVertexBuffer), g.bufferData(g.ARRAY_BUFFER, U, k));
						if (ca)
							for (M in ca)
								if (w = ca[M], w.needsUpdate) g.bindBuffer(g.ARRAY_BUFFER, w.buffer), g.bufferData(g.ARRAY_BUFFER, w.array, k), w.needsUpdate = !1;
						if (Wa) {
							B = 0;
							for (J = morphTargets.length; B < J; B++) g.bindBuffer(g.ARRAY_BUFFER, f.__webglMorphTargetsBuffers[B]),
								g.bufferData(g.ARRAY_BUFFER, ga[B], k)
						}
						Va && O > 0 && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglColorBuffer), g.bufferData(g.ARRAY_BUFFER, ma, k));
						wa && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglNormalBuffer), g.bufferData(g.ARRAY_BUFFER, fa, k));
						Ua && oa.hasTangents && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglTangentBuffer), g.bufferData(g.ARRAY_BUFFER, T, k));
						qa && la > 0 && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglUVBuffer), g.bufferData(g.ARRAY_BUFFER, Z, k));
						qa && L > 0 && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglUV2Buffer), g.bufferData(g.ARRAY_BUFFER,
							$, k));
						va && (g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, f.__webglFaceBuffer), g.bufferData(g.ELEMENT_ARRAY_BUFFER, aa, k), g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, f.__webglLineBuffer), g.bufferData(g.ELEMENT_ARRAY_BUFFER, ea, k));
						H > 0 && (g.bindBuffer(g.ARRAY_BUFFER, f.__webglSkinVertexABuffer), g.bufferData(g.ARRAY_BUFFER, V, k), g.bindBuffer(g.ARRAY_BUFFER, f.__webglSkinVertexBBuffer), g.bufferData(g.ARRAY_BUFFER, W, k), g.bindBuffer(g.ARRAY_BUFFER, f.__webglSkinIndicesBuffer), g.bufferData(g.ARRAY_BUFFER, X, k), g.bindBuffer(g.ARRAY_BUFFER,
							f.__webglSkinWeightsBuffer), g.bufferData(g.ARRAY_BUFFER, Y, k));
						j.dynamic || (delete f.__inittedArrays, delete f.__colorArray, delete f.__normalArray, delete f.__tangentArray, delete f.__uvArray, delete f.__uv2Array, delete f.__faceArray, delete f.__vertexArray, delete f.__lineArray, delete f.__skinVertexAArray, delete f.__skinVertexBArray, delete f.__skinIndexArray, delete f.__skinWeightArray)
					}
				}
			}
			e.__dirtyVertices = !1;
			e.__dirtyMorphTargets = !1;
			e.__dirtyElements = !1;
			e.__dirtyUvs = !1;
			e.__dirtyNormals = !1;
			e.__dirtyTangents = !1;
			e.__dirtyColors = !1
		} else if (b instanceof THREE.Ribbon) {
			e = b.geometry;
			if (e.__dirtyVertices || e.__dirtyColors) {
				b = e;
				d = g.DYNAMIC_DRAW;
				x = b.vertices;
				f = b.colors;
				E = x.length;
				j = f.length;
				C = b.__vertexArray;
				k = b.__colorArray;
				F = b.__dirtyColors;
				if (b.__dirtyVertices) {
					for (m = 0; m < E; m++) n = x[m].position, h = m * 3, C[h] = n.x, C[h + 1] = n.y, C[h + 2] = n.z;
					g.bindBuffer(g.ARRAY_BUFFER, b.__webglVertexBuffer);
					g.bufferData(g.ARRAY_BUFFER, C, d)
				}
				if (F) {
					for (m = 0; m < j; m++) color = f[m], h = m * 3, k[h] = color.r, k[h + 1] = color.g, k[h + 2] = color.b;
					g.bindBuffer(g.ARRAY_BUFFER,
						b.__webglColorBuffer);
					g.bufferData(g.ARRAY_BUFFER, k, d)
				}
			}
			e.__dirtyVertices = !1;
			e.__dirtyColors = !1
		} else if (b instanceof THREE.Line) {
			e = b.geometry;
			if (e.__dirtyVertices || e.__dirtyColors) {
				b = e;
				d = g.DYNAMIC_DRAW;
				x = b.vertices;
				f = b.colors;
				E = x.length;
				j = f.length;
				C = b.__vertexArray;
				k = b.__colorArray;
				F = b.__dirtyColors;
				if (b.__dirtyVertices) {
					for (m = 0; m < E; m++) n = x[m].position, h = m * 3, C[h] = n.x, C[h + 1] = n.y, C[h + 2] = n.z;
					g.bindBuffer(g.ARRAY_BUFFER, b.__webglVertexBuffer);
					g.bufferData(g.ARRAY_BUFFER, C, d)
				}
				if (F) {
					for (m = 0; m < j; m++) color =
						f[m], h = m * 3, k[h] = color.r, k[h + 1] = color.g, k[h + 2] = color.b;
					g.bindBuffer(g.ARRAY_BUFFER, b.__webglColorBuffer);
					g.bufferData(g.ARRAY_BUFFER, k, d)
				}
			}
			e.__dirtyVertices = !1;
			e.__dirtyColors = !1
		} else if (b instanceof THREE.ParticleSystem) e = b.geometry, (e.__dirtyVertices || e.__dirtyColors || b.sortParticles) && c(e, g.DYNAMIC_DRAW, b), e.__dirtyVertices = !1, e.__dirtyColors = !1
	}

	function D(b) {
		function d(b) {
			var g = [];
			c = 0;
			for (e = b.length; c < e; c++) b[c] == void 0 ? g.push("undefined") : g.push(b[c].id);
			return g.join("_")
		}
		var c, e, g, f, h, j, k, m,
			o = {},
			n = b.morphTargets !== void 0 ? b.morphTargets.length : 0;
		b.geometryGroups = {};
		g = 0;
		for (f = b.faces.length; g < f; g++) h = b.faces[g], j = h.materials, k = d(j), o[k] == void 0 && (o[k] = {
			hash: k,
			counter: 0
		}), m = o[k].hash + "_" + o[k].counter, b.geometryGroups[m] == void 0 && (b.geometryGroups[m] = {
			faces: [],
			materials: j,
			vertices: 0,
			numMorphTargets: n
		}), h = h instanceof THREE.Face3 ? 3 : 4, b.geometryGroups[m].vertices + h > 65535 && (o[k].counter += 1, m = o[k].hash + "_" + o[k].counter, b.geometryGroups[m] == void 0 && (b.geometryGroups[m] = {
			faces: [],
			materials: j,
			vertices: 0,
			numMorphTargets: n
		})), b.geometryGroups[m].faces.push(g), b.geometryGroups[m].vertices += h
	}

	function x(b, d, c) {
		b.push({
			buffer: d,
			object: c,
			opaque: {
				list: [],
				count: 0
			},
			transparent: {
				list: [],
				count: 0
			}
		})
	}

	function I(b) {
		if (b != Q) {
			switch (b) {
				case THREE.AdditiveBlending:
					g.blendEquation(g.FUNC_ADD);
					g.blendFunc(g.SRC_ALPHA, g.ONE);
					break;
				case THREE.SubtractiveBlending:
					g.blendEquation(g.FUNC_ADD);
					g.blendFunc(g.ZERO, g.ONE_MINUS_SRC_COLOR);
					break;
				case THREE.MultiplyBlending:
					g.blendEquation(g.FUNC_ADD);
					g.blendFunc(g.ZERO,
						g.SRC_COLOR);
					break;
				default:
					g.blendEquationSeparate(g.FUNC_ADD, g.FUNC_ADD), g.blendFuncSeparate(g.SRC_ALPHA, g.ONE_MINUS_SRC_ALPHA, g.ONE, g.ONE_MINUS_SRC_ALPHA)
			}
			Q = b
		}
	}

	function A(b, d, c) {
		(c.width & c.width - 1) == 0 && (c.height & c.height - 1) == 0 ? (g.texParameteri(b, g.TEXTURE_WRAP_S, F(d.wrapS)), g.texParameteri(b, g.TEXTURE_WRAP_T, F(d.wrapT)), g.texParameteri(b, g.TEXTURE_MAG_FILTER, F(d.magFilter)), g.texParameteri(b, g.TEXTURE_MIN_FILTER, F(d.minFilter)), g.generateMipmap(b)) : (g.texParameteri(b, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE),
			g.texParameteri(b, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), g.texParameteri(b, g.TEXTURE_MAG_FILTER, M(d.magFilter)), g.texParameteri(b, g.TEXTURE_MIN_FILTER, M(d.minFilter)))
	}

	function z(b, d) {
		if (b.needsUpdate) {
			if (b.__webglTexture) b.__webglTexture = g.deleteTexture(b.__webglTexture);
			b.__webglTexture = g.createTexture();
			g.bindTexture(g.TEXTURE_2D, b.__webglTexture);
			g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, b.image);
			A(g.TEXTURE_2D, b, b.image);
			g.bindTexture(g.TEXTURE_2D, null);
			b.needsUpdate = !1
		}
		g.activeTexture(g.TEXTURE0 +
			d);
		g.bindTexture(g.TEXTURE_2D, b.__webglTexture)
	}

	function S(b) {
		if (b && !b.__webglFramebuffer) {
			if (b.depthBuffer === void 0) b.depthBuffer = !0;
			if (b.stencilBuffer === void 0) b.stencilBuffer = !0;
			b.__webglFramebuffer = g.createFramebuffer();
			b.__webglRenderbuffer = g.createRenderbuffer();
			b.__webglTexture = g.createTexture();
			g.bindTexture(g.TEXTURE_2D, b.__webglTexture);
			g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, F(b.wrapS));
			g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, F(b.wrapT));
			g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER,
				F(b.magFilter));
			g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, F(b.minFilter));
			g.texImage2D(g.TEXTURE_2D, 0, F(b.format), b.width, b.height, 0, F(b.format), F(b.type), null);
			g.bindRenderbuffer(g.RENDERBUFFER, b.__webglRenderbuffer);
			g.bindFramebuffer(g.FRAMEBUFFER, b.__webglFramebuffer);
			g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, b.__webglTexture, 0);
			b.depthBuffer && !b.stencilBuffer ? (g.renderbufferStorage(g.RENDERBUFFER, g.DEPTH_COMPONENT16, b.width, b.height), g.framebufferRenderbuffer(g.FRAMEBUFFER,
				g.DEPTH_ATTACHMENT, g.RENDERBUFFER, b.__webglRenderbuffer)) : b.depthBuffer && b.stencilBuffer ? (g.renderbufferStorage(g.RENDERBUFFER, g.DEPTH_STENCIL, b.width, b.height), g.framebufferRenderbuffer(g.FRAMEBUFFER, g.DEPTH_STENCIL_ATTACHMENT, g.RENDERBUFFER, b.__webglRenderbuffer)) : g.renderbufferStorage(g.RENDERBUFFER, g.RGBA4, b.width, b.height);
			g.bindTexture(g.TEXTURE_2D, null);
			g.bindRenderbuffer(g.RENDERBUFFER, null);
			g.bindFramebuffer(g.FRAMEBUFFER, null)
		}
		var d, c;
		b ? (d = b.__webglFramebuffer, c = b.width, b = b.height) : (d = null,
			c = ga, b = ca);
		d != V && (g.bindFramebuffer(g.FRAMEBUFFER, d), g.viewport(U, ka, c, b), V = d)
	}

	function G(b, d) {
		var c;
		b == "fragment" ? c = g.createShader(g.FRAGMENT_SHADER) : b == "vertex" && (c = g.createShader(g.VERTEX_SHADER));
		g.shaderSource(c, d);
		g.compileShader(c);
		if (!g.getShaderParameter(c, g.COMPILE_STATUS)) return console.error(g.getShaderInfoLog(c)), console.error(d), null;
		return c
	}

	function M(b) {
		switch (b) {
			case THREE.NearestFilter:
			case THREE.NearestMipMapNearestFilter:
			case THREE.NearestMipMapLinearFilter:
				return g.NEAREST;
			default:
				return g.LINEAR
		}
	}

	function F(b) {
		switch (b) {
			case THREE.RepeatWrapping:
				return g.REPEAT;
			case THREE.ClampToEdgeWrapping:
				return g.CLAMP_TO_EDGE;
			case THREE.MirroredRepeatWrapping:
				return g.MIRRORED_REPEAT;
			case THREE.NearestFilter:
				return g.NEAREST;
			case THREE.NearestMipMapNearestFilter:
				return g.NEAREST_MIPMAP_NEAREST;
			case THREE.NearestMipMapLinearFilter:
				return g.NEAREST_MIPMAP_LINEAR;
			case THREE.LinearFilter:
				return g.LINEAR;
			case THREE.LinearMipMapNearestFilter:
				return g.LINEAR_MIPMAP_NEAREST;
			case THREE.LinearMipMapLinearFilter:
				return g.LINEAR_MIPMAP_LINEAR;
			case THREE.ByteType:
				return g.BYTE;
			case THREE.UnsignedByteType:
				return g.UNSIGNED_BYTE;
			case THREE.ShortType:
				return g.SHORT;
			case THREE.UnsignedShortType:
				return g.UNSIGNED_SHORT;
			case THREE.IntType:
				return g.INT;
			case THREE.UnsignedShortType:
				return g.UNSIGNED_INT;
			case THREE.FloatType:
				return g.FLOAT;
			case THREE.AlphaFormat:
				return g.ALPHA;
			case THREE.RGBFormat:
				return g.RGB;
			case THREE.RGBAFormat:
				return g.RGBA;
			case THREE.LuminanceFormat:
				return g.LUMINANCE;
			case THREE.LuminanceAlphaFormat:
				return g.LUMINANCE_ALPHA
		}
		return 0
	}
	var N = this,
		g, Y = [],
		O = null,
		V = null,
		L = !0,
		$ = null,
		T = null,
		Q = null,
		fa = null,
		U = 0,
		ka = 0,
		ga = 0,
		ca = 0,
		aa = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
		R = new THREE.Matrix4,
		P = new Float32Array(16),
		W = new Float32Array(16),
		X = new THREE.Vector4,
		ea = {
			ambient: [0, 0, 0],
			directional: {
				length: 0,
				colors: [],
				positions: []
			},
			point: {
				length: 0,
				colors: [],
				positions: [],
				distances: []
			}
		},
		b = b || {},
		ha = b.canvas !== void 0 ? b.canvas : document.createElement("canvas"),
		J = b.stencil !== void 0 ? b.stencil :
		!0,
		da = b.antialias !== void 0 ? b.antialias : !1,
		la = b.clearColor !== void 0 ? new THREE.Color(b.clearColor) : new THREE.Color(0),
		ma = b.clearAlpha !== void 0 ? b.clearAlpha : 0;
	this.data = {
		vertices: 0,
		faces: 0,
		drawCalls: 0
	};
	this.maxMorphTargets = 8;
	this.domElement = ha;
	this.sortObjects = this.autoClear = !0;
	try {
		if (!(g = ha.getContext("experimental-webgl", {
				antialias: da,
				stencil: J
			}))) throw "Error creating WebGL context.";
	} catch (ya) {
		console.error(ya)
	}
	console.log(navigator.userAgent + " | " + g.getParameter(g.VERSION) + " | " + g.getParameter(g.VENDOR) +
		" | " + g.getParameter(g.RENDERER) + " | " + g.getParameter(g.SHADING_LANGUAGE_VERSION));
	g.clearColor(0, 0, 0, 1);
	g.clearDepth(1);
	g.enable(g.DEPTH_TEST);
	g.depthFunc(g.LEQUAL);
	g.frontFace(g.CCW);
	g.cullFace(g.BACK);
	g.enable(g.CULL_FACE);
	g.enable(g.BLEND);
	g.blendEquation(g.FUNC_ADD);
	g.blendFunc(g.SRC_ALPHA, g.ONE_MINUS_SRC_ALPHA);
	g.clearColor(la.r, la.g, la.b, ma);
	this.context = g;
	var va = g.getParameter(g.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
	if (J) {
		var Z = {};
		Z.vertices = new Float32Array(12);
		Z.faces = new Uint16Array(6);
		Z.darkness =
			0.5;
		Z.vertices[0] = -20;
		Z.vertices[1] = -20;
		Z.vertices[2] = -1;
		Z.vertices[3] = 20;
		Z.vertices[4] = -20;
		Z.vertices[5] = -1;
		Z.vertices[6] = 20;
		Z.vertices[7] = 20;
		Z.vertices[8] = -1;
		Z.vertices[9] = -20;
		Z.vertices[10] = 20;
		Z.vertices[11] = -1;
		Z.faces[0] = 0;
		Z.faces[1] = 1;
		Z.faces[2] = 2;
		Z.faces[3] = 0;
		Z.faces[4] = 2;
		Z.faces[5] = 3;
		Z.vertexBuffer = g.createBuffer();
		Z.elementBuffer = g.createBuffer();
		g.bindBuffer(g.ARRAY_BUFFER, Z.vertexBuffer);
		g.bufferData(g.ARRAY_BUFFER, Z.vertices, g.STATIC_DRAW);
		g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, Z.elementBuffer);
		g.bufferData(g.ELEMENT_ARRAY_BUFFER, Z.faces, g.STATIC_DRAW);
		Z.program = g.createProgram();
		g.attachShader(Z.program, G("fragment", THREE.ShaderLib.shadowPost.fragmentShader));
		g.attachShader(Z.program, G("vertex", THREE.ShaderLib.shadowPost.vertexShader));
		g.linkProgram(Z.program);
		Z.vertexLocation = g.getAttribLocation(Z.program, "position");
		Z.projectionLocation = g.getUniformLocation(Z.program, "projectionMatrix");
		Z.darknessLocation = g.getUniformLocation(Z.program, "darkness")
	}
	var K = {};
	K.vertices = new Float32Array(16);
	K.faces = new Uint16Array(6);
	b = 0;
	K.vertices[b++] = -1;
	K.vertices[b++] = -1;
	K.vertices[b++] = 0;
	K.vertices[b++] = 0;
	K.vertices[b++] = 1;
	K.vertices[b++] = -1;
	K.vertices[b++] = 1;
	K.vertices[b++] = 0;
	K.vertices[b++] = 1;
	K.vertices[b++] = 1;
	K.vertices[b++] = 1;
	K.vertices[b++] = 1;
	K.vertices[b++] = -1;
	K.vertices[b++] = 1;
	K.vertices[b++] = 0;
	K.vertices[b++] = 1;
	b = 0;
	K.faces[b++] = 0;
	K.faces[b++] = 1;
	K.faces[b++] = 2;
	K.faces[b++] = 0;
	K.faces[b++] = 2;
	K.faces[b++] = 3;
	K.vertexBuffer = g.createBuffer();
	K.elementBuffer = g.createBuffer();
	K.tempTexture = g.createTexture();
	K.occlusionTexture = g.createTexture();
	g.bindBuffer(g.ARRAY_BUFFER, K.vertexBuffer);
	g.bufferData(g.ARRAY_BUFFER, K.vertices, g.STATIC_DRAW);
	g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, K.elementBuffer);
	g.bufferData(g.ELEMENT_ARRAY_BUFFER, K.faces, g.STATIC_DRAW);
	g.bindTexture(g.TEXTURE_2D, K.tempTexture);
	g.texImage2D(g.TEXTURE_2D, 0, g.RGB, 16, 16, 0, g.RGB, g.UNSIGNED_BYTE, null);
	g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
	g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
	g.texParameteri(g.TEXTURE_2D,
		g.TEXTURE_MAG_FILTER, g.NEAREST);
	g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST);
	g.bindTexture(g.TEXTURE_2D, K.occlusionTexture);
	g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, 16, 16, 0, g.RGBA, g.UNSIGNED_BYTE, null);
	g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
	g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
	g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.NEAREST);
	g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST);
	g.getParameter(g.MAX_VERTEX_TEXTURE_IMAGE_UNITS) <=
		0 ? (K.hasVertexTexture = !1, K.program = g.createProgram(), g.attachShader(K.program, G("fragment", THREE.ShaderLib.lensFlare.fragmentShader)), g.attachShader(K.program, G("vertex", THREE.ShaderLib.lensFlare.vertexShader))) : (K.hasVertexTexture = !0, K.program = g.createProgram(), g.attachShader(K.program, G("fragment", THREE.ShaderLib.lensFlareVertexTexture.fragmentShader)), g.attachShader(K.program, G("vertex", THREE.ShaderLib.lensFlareVertexTexture.vertexShader)));
	g.linkProgram(K.program);
	K.attributes = {};
	K.uniforms = {};
	K.attributes.vertex = g.getAttribLocation(K.program, "position");
	K.attributes.uv = g.getAttribLocation(K.program, "UV");
	K.uniforms.renderType = g.getUniformLocation(K.program, "renderType");
	K.uniforms.map = g.getUniformLocation(K.program, "map");
	K.uniforms.occlusionMap = g.getUniformLocation(K.program, "occlusionMap");
	K.uniforms.opacity = g.getUniformLocation(K.program, "opacity");
	K.uniforms.scale = g.getUniformLocation(K.program, "scale");
	K.uniforms.rotation = g.getUniformLocation(K.program, "rotation");
	K.uniforms.screenPosition =
		g.getUniformLocation(K.program, "screenPosition");
	var wa = !1;
	_sprite = {};
	_sprite.vertices = new Float32Array(16);
	_sprite.faces = new Uint16Array(6);
	b = 0;
	_sprite.vertices[b++] = -1;
	_sprite.vertices[b++] = -1;
	_sprite.vertices[b++] = 0;
	_sprite.vertices[b++] = 0;
	_sprite.vertices[b++] = 1;
	_sprite.vertices[b++] = -1;
	_sprite.vertices[b++] = 1;
	_sprite.vertices[b++] = 0;
	_sprite.vertices[b++] = 1;
	_sprite.vertices[b++] = 1;
	_sprite.vertices[b++] = 1;
	_sprite.vertices[b++] = 1;
	_sprite.vertices[b++] = -1;
	_sprite.vertices[b++] = 1;
	_sprite.vertices[b++] =
		0;
	_sprite.vertices[b++] = 1;
	b = 0;
	_sprite.faces[b++] = 0;
	_sprite.faces[b++] = 1;
	_sprite.faces[b++] = 2;
	_sprite.faces[b++] = 0;
	_sprite.faces[b++] = 2;
	_sprite.faces[b++] = 3;
	_sprite.vertexBuffer = g.createBuffer();
	_sprite.elementBuffer = g.createBuffer();
	g.bindBuffer(g.ARRAY_BUFFER, _sprite.vertexBuffer);
	g.bufferData(g.ARRAY_BUFFER, _sprite.vertices, g.STATIC_DRAW);
	g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, _sprite.elementBuffer);
	g.bufferData(g.ELEMENT_ARRAY_BUFFER, _sprite.faces, g.STATIC_DRAW);
	_sprite.program = g.createProgram();
	g.attachShader(_sprite.program, G("fragment", THREE.ShaderLib.sprite.fragmentShader));
	g.attachShader(_sprite.program, G("vertex", THREE.ShaderLib.sprite.vertexShader));
	g.linkProgram(_sprite.program);
	_sprite.attributes = {};
	_sprite.uniforms = {};
	_sprite.attributes.position = g.getAttribLocation(_sprite.program, "position");
	_sprite.attributes.uv = g.getAttribLocation(_sprite.program, "uv");
	_sprite.uniforms.uvOffset = g.getUniformLocation(_sprite.program, "uvOffset");
	_sprite.uniforms.uvScale = g.getUniformLocation(_sprite.program,
		"uvScale");
	_sprite.uniforms.rotation = g.getUniformLocation(_sprite.program, "rotation");
	_sprite.uniforms.scale = g.getUniformLocation(_sprite.program, "scale");
	_sprite.uniforms.alignment = g.getUniformLocation(_sprite.program, "alignment");
	_sprite.uniforms.map = g.getUniformLocation(_sprite.program, "map");
	_sprite.uniforms.opacity = g.getUniformLocation(_sprite.program, "opacity");
	_sprite.uniforms.useScreenCoordinates = g.getUniformLocation(_sprite.program, "useScreenCoordinates");
	_sprite.uniforms.affectedByDistance =
		g.getUniformLocation(_sprite.program, "affectedByDistance");
	_sprite.uniforms.screenPosition = g.getUniformLocation(_sprite.program, "screenPosition");
	_sprite.uniforms.modelViewMatrix = g.getUniformLocation(_sprite.program, "modelViewMatrix");
	_sprite.uniforms.projectionMatrix = g.getUniformLocation(_sprite.program, "projectionMatrix");
	var qa = !1;
	this.setSize = function(b, d) {
		ha.width = b;
		ha.height = d;
		this.setViewport(0, 0, ha.width, ha.height)
	};
	this.setViewport = function(b, d, c, e) {
		U = b;
		ka = d;
		ga = c;
		ca = e;
		g.viewport(U, ka, ga,
			ca)
	};
	this.setScissor = function(b, d, c, e) {
		g.scissor(b, d, c, e)
	};
	this.enableScissorTest = function(b) {
		b ? g.enable(g.SCISSOR_TEST) : g.disable(g.SCISSOR_TEST)
	};
	this.enableDepthBufferWrite = function(b) {
		L = b;
		g.depthMask(b)
	};
	this.setClearColorHex = function(b, d) {
		la.setHex(b);
		ma = d;
		g.clearColor(la.r, la.g, la.b, ma)
	};
	this.setClearColor = function(b, d) {
		la.copy(b);
		ma = d;
		g.clearColor(la.r, la.g, la.b, ma)
	};
	this.clear = function() {
		g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT | g.STENCIL_BUFFER_BIT)
	};
	this.setStencilShadowDarkness = function(b) {
		Z.darkness =
			b
	};
	this.getContext = function() {
		return g
	};
	this.initMaterial = function(b, d, c, e) {
		var f, h, j;
		b instanceof THREE.MeshDepthMaterial ? j = "depth" : b instanceof THREE.ShadowVolumeDynamicMaterial ? j = "shadowVolumeDynamic" : b instanceof THREE.MeshNormalMaterial ? j = "normal" : b instanceof THREE.MeshBasicMaterial ? j = "basic" : b instanceof THREE.MeshLambertMaterial ? j = "lambert" : b instanceof THREE.MeshPhongMaterial ? j = "phong" : b instanceof THREE.LineBasicMaterial ? j = "basic" : b instanceof THREE.ParticleBasicMaterial && (j = "particle_basic");
		if (j) {
			var k = THREE.ShaderLib[j];
			b.uniforms = THREE.UniformsUtils.clone(k.uniforms);
			b.vertexShader = k.vertexShader;
			b.fragmentShader = k.fragmentShader
		}
		var m, o, n;
		m = n = k = 0;
		for (o = d.length; m < o; m++) h = d[m], h instanceof THREE.DirectionalLight && n++, h instanceof THREE.PointLight && k++;
		k + n <= 4 ? d = n : (d = Math.ceil(4 * n / (k + n)), k = 4 - d);
		h = {
			directional: d,
			point: k
		};
		n = 50;
		if (e !== void 0 && e instanceof THREE.SkinnedMesh) n = e.bones.length;
		var p;
		a: {
			m = b.fragmentShader;o = b.vertexShader;
			var k = b.uniforms,
				d = b.attributes,
				c = {
					map: !!b.map,
					envMap: !!b.envMap,
					lightMap: !!b.lightMap,
					vertexColors: b.vertexColors,
					fog: c,
					sizeAttenuation: b.sizeAttenuation,
					skinning: b.skinning,
					morphTargets: b.morphTargets,
					maxMorphTargets: this.maxMorphTargets,
					maxDirLights: h.directional,
					maxPointLights: h.point,
					maxBones: n
				},
				t;h = [];j ? h.push(j) : (h.push(m), h.push(o));
			for (t in c) h.push(t),
			h.push(c[t]);j = h.join();t = 0;
			for (h = Y.length; t < h; t++)
				if (Y[t].code == j) {
					p = Y[t].program;
					break a
				}
			t = g.createProgram();prefix_fragment = ["#ifdef GL_ES\nprecision highp float;\n#endif", "#define MAX_DIR_LIGHTS " + c.maxDirLights,
				"#define MAX_POINT_LIGHTS " + c.maxPointLights, c.fog ? "#define USE_FOG" : "", c.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"
			].join("\n");prefix_vertex = [va ? "#define VERTEX_TEXTURES" : "", "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_BONES " + c.maxBones, c.map ?
				"#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.skinning ? "#define USE_SKINNING" : "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"
			].join("\n");
			g.attachShader(t, G("fragment", prefix_fragment + m));g.attachShader(t, G("vertex", prefix_vertex + o));g.linkProgram(t);g.getProgramParameter(t, g.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + g.getProgramParameter(t, g.VALIDATE_STATUS) + ", gl error [" + g.getError() + "]");t.uniforms = {};t.attributes = {};
			var u;m = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "objectMatrix", "cameraPosition", "cameraInverseMatrix", "boneGlobalMatrices", "morphTargetInfluences"];
			for (u in k) m.push(u);
			u = m;k = 0;
			for (m = u.length; k < m; k++) o = u[k],
			t.uniforms[o] = g.getUniformLocation(t, o);m = ["position", "normal", "uv", "uv2", "tangent", "color", "skinVertexA", "skinVertexB", "skinIndex", "skinWeight"];
			for (u = 0; u < c.maxMorphTargets; u++) m.push("morphTarget" + u);
			for (p in d) m.push(p);p = m;u = 0;
			for (d = p.length; u < d; u++) c = p[u],
			t.attributes[c] = g.getAttribLocation(t, c);Y.push({
				program: t,
				code: j
			});p = t
		}
		b.program = p;
		p = b.program.attributes;
		p.position >= 0 && g.enableVertexAttribArray(p.position);
		p.color >= 0 && g.enableVertexAttribArray(p.color);
		p.normal >= 0 && g.enableVertexAttribArray(p.normal);
		p.tangent >= 0 && g.enableVertexAttribArray(p.tangent);
		b.skinning && p.skinVertexA >= 0 && p.skinVertexB >= 0 && p.skinIndex >= 0 && p.skinWeight >= 0 && (g.enableVertexAttribArray(p.skinVertexA), g.enableVertexAttribArray(p.skinVertexB), g.enableVertexAttribArray(p.skinIndex), g.enableVertexAttribArray(p.skinWeight));
		if (b.attributes)
			for (f in b.attributes) p[f] !== void 0 && p[f] >= 0 && g.enableVertexAttribArray(p[f]);
		if (b.morphTargets) {
			b.numSupportedMorphTargets = 0;
			p.morphTarget0 >=
				0 && (g.enableVertexAttribArray(p.morphTarget0), b.numSupportedMorphTargets++);
			p.morphTarget1 >= 0 && (g.enableVertexAttribArray(p.morphTarget1), b.numSupportedMorphTargets++);
			p.morphTarget2 >= 0 && (g.enableVertexAttribArray(p.morphTarget2), b.numSupportedMorphTargets++);
			p.morphTarget3 >= 0 && (g.enableVertexAttribArray(p.morphTarget3), b.numSupportedMorphTargets++);
			p.morphTarget4 >= 0 && (g.enableVertexAttribArray(p.morphTarget4), b.numSupportedMorphTargets++);
			p.morphTarget5 >= 0 && (g.enableVertexAttribArray(p.morphTarget5),
				b.numSupportedMorphTargets++);
			p.morphTarget6 >= 0 && (g.enableVertexAttribArray(p.morphTarget6), b.numSupportedMorphTargets++);
			p.morphTarget7 >= 0 && (g.enableVertexAttribArray(p.morphTarget7), b.numSupportedMorphTargets++);
			e.__webglMorphTargetInfluences = new Float32Array(this.maxMorphTargets);
			b = 0;
			for (f = this.maxMorphTargets; b < f; b++) e.__webglMorphTargetInfluences[b] = 0
		}
	};
	this.render = function(b, c, n, y) {
		var x, z, A, D, F, ha, G, da, K = b.lights,
			M = b.fog;
		N.data.vertices = 0;
		N.data.faces = 0;
		N.data.drawCalls = 0;
		c.matrixAutoUpdate &&
			c.update(void 0, !0);
		b.update(void 0, !1, c);
		c.matrixWorldInverse.flattenToArray(W);
		c.projectionMatrix.flattenToArray(P);
		R.multiply(c.projectionMatrix, c.matrixWorldInverse);
		k(R);
		this.initWebGLObjects(b);
		S(n);
		(this.autoClear || y) && this.clear();
		F = b.__webglObjects.length;
		for (y = 0; y < F; y++)
			if (x = b.__webglObjects[y], G = x.object, G.visible)
				if (!(G instanceof THREE.Mesh) || m(G)) {
					if (G.matrixWorld.flattenToArray(G._objectMatrixArray), E(G, c), p(x), x.render = !0, this.sortObjects) X.copy(G.position), R.multiplyVector3(X), x.z =
						X.z
				} else x.render = !1;
		else x.render = !1;
		this.sortObjects && b.__webglObjects.sort(t);
		ha = b.__webglObjectsImmediate.length;
		for (y = 0; y < ha; y++) x = b.__webglObjectsImmediate[y], G = x.object, G.visible && (G.matrixAutoUpdate && G.matrixWorld.flattenToArray(G._objectMatrixArray), E(G, c), o(x));
		I(THREE.NormalBlending);
		for (y = 0; y < F; y++)
			if (x = b.__webglObjects[y], x.render) {
				G = x.object;
				da = x.buffer;
				A = x.opaque;
				h(G);
				for (x = 0; x < A.count; x++) D = A.list[x], j(D.depthTest), e(c, K, M, D, da, G)
			}
		for (y = 0; y < ha; y++)
			if (x = b.__webglObjectsImmediate[y],
				G = x.object, G.visible) {
				A = x.opaque;
				h(G);
				for (x = 0; x < A.count; x++) D = A.list[x], j(D.depthTest), z = d(c, K, M, D, G), G.render(function(b) {
					f(b, z, D.shading)
				})
			}
		for (y = 0; y < F; y++)
			if (x = b.__webglObjects[y], x.render) {
				G = x.object;
				da = x.buffer;
				A = x.transparent;
				h(G);
				for (x = 0; x < A.count; x++) D = A.list[x], I(D.blending), j(D.depthTest), e(c, K, M, D, da, G)
			}
		for (y = 0; y < ha; y++)
			if (x = b.__webglObjectsImmediate[y], G = x.object, G.visible) {
				A = x.transparent;
				h(G);
				for (x = 0; x < A.count; x++) D = A.list[x], I(D.blending), j(D.depthTest), z = d(c, K, M, D, G), G.render(function(b) {
					f(b,
						z, D.shading)
				})
			}
		b.__webglSprites.length && v(b, c);
		J && b.__webglShadowVolumes.length && b.lights.length && u(b);
		b.__webglLensFlares.length && C(b, c);
		n && n.minFilter !== THREE.NearestFilter && n.minFilter !== THREE.LinearFilter && (g.bindTexture(g.TEXTURE_2D, n.__webglTexture), g.generateMipmap(g.TEXTURE_2D), g.bindTexture(g.TEXTURE_2D, null))
	};
	this.initWebGLObjects = function(b) {
		if (!b.__webglObjects) b.__webglObjects = [], b.__webglObjectsImmediate = [], b.__webglShadowVolumes = [], b.__webglLensFlares = [], b.__webglSprites = [];
		for (; b.__objectsAdded.length;) {
			var d =
				b.__objectsAdded[0],
				c = b,
				e = void 0,
				f = void 0,
				h = void 0;
			if (d._modelViewMatrix == void 0) d._modelViewMatrix = new THREE.Matrix4, d._normalMatrixArray = new Float32Array(9), d._modelViewMatrixArray = new Float32Array(16), d._objectMatrixArray = new Float32Array(16), d.matrixWorld.flattenToArray(d._objectMatrixArray);
			if (d instanceof THREE.Mesh)
				for (e in f = d.geometry, f.geometryGroups == void 0 && D(f), f.geometryGroups) {
					h = f.geometryGroups[e];
					if (!h.__webglVertexBuffer) {
						var j = h;
						j.__webglVertexBuffer = g.createBuffer();
						j.__webglNormalBuffer =
							g.createBuffer();
						j.__webglTangentBuffer = g.createBuffer();
						j.__webglColorBuffer = g.createBuffer();
						j.__webglUVBuffer = g.createBuffer();
						j.__webglUV2Buffer = g.createBuffer();
						j.__webglSkinVertexABuffer = g.createBuffer();
						j.__webglSkinVertexBBuffer = g.createBuffer();
						j.__webglSkinIndicesBuffer = g.createBuffer();
						j.__webglSkinWeightsBuffer = g.createBuffer();
						j.__webglFaceBuffer = g.createBuffer();
						j.__webglLineBuffer = g.createBuffer();
						if (j.numMorphTargets) {
							var k = void 0,
								m = void 0;
							j.__webglMorphTargetsBuffers = [];
							k = 0;
							for (m =
								j.numMorphTargets; k < m; k++) j.__webglMorphTargetsBuffers.push(g.createBuffer())
						}
						for (var j = h, k = d, o = void 0, p = void 0, n = void 0, t = n = void 0, u = void 0, v = void 0, J = v = m = 0, A = n = p = void 0, p = o = void 0, t = k.geometry, A = t.faces, u = j.faces, o = 0, p = u.length; o < p; o++) n = u[o], n = A[n], n instanceof THREE.Face3 ? (m += 3, v += 1, J += 3) : n instanceof THREE.Face4 && (m += 4, v += 2, J += 4);
						for (var o = j, p = k, z = u = A = void 0, E = void 0, z = void 0, n = [], A = 0, u = p.materials.length; A < u; A++)
							if (z = p.materials[A], z instanceof THREE.MeshFaceMaterial) {
								z = 0;
								for (l = o.materials.length; z <
									l; z++)(E = o.materials[z]) && n.push(E)
							} else(E = z) && n.push(E);
						o = n;
						a: {
							A = p = void 0;u = o.length;
							for (p = 0; p < u; p++)
								if (A = o[p], A.map || A.lightMap || A instanceof THREE.MeshShaderMaterial) {
									p = !0;
									break a
								}
							p = !1
						}
						a: {
							A = o;n = u = void 0;z = A.length;
							for (u = 0; u < z; u++)
								if (n = A[u], !(n instanceof THREE.MeshBasicMaterial && !n.envMap || n instanceof THREE.MeshDepthMaterial)) {
									A = n && n.shading != void 0 && n.shading == THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading;
									break a
								}
							A = !1
						}
						a: {
							n = u = void 0;z = o.length;
							for (u = 0; u < z; u++)
								if (n = o[u], n.vertexColors) {
									n =
										n.vertexColors;
									break a
								}
							n = !1
						}
						j.__vertexArray = new Float32Array(m * 3);
						if (A) j.__normalArray = new Float32Array(m * 3);
						if (t.hasTangents) j.__tangentArray = new Float32Array(m * 4);
						if (n) j.__colorArray = new Float32Array(m * 3);
						if (p) {
							if (t.faceUvs.length > 0 || t.faceVertexUvs.length > 0) j.__uvArray = new Float32Array(m * 2);
							if (t.faceUvs.length > 1 || t.faceVertexUvs.length > 1) j.__uv2Array = new Float32Array(m * 2)
						}
						if (k.geometry.skinWeights.length && k.geometry.skinIndices.length) j.__skinVertexAArray = new Float32Array(m * 4), j.__skinVertexBArray =
							new Float32Array(m * 4), j.__skinIndexArray = new Float32Array(m * 4), j.__skinWeightArray = new Float32Array(m * 4);
						j.__faceArray = new Uint16Array(v * 3 + (k.geometry.edgeFaces ? k.geometry.edgeFaces.length * 6 : 0));
						j.__lineArray = new Uint16Array(J * 2);
						if (j.numMorphTargets) {
							j.__morphTargetsArrays = [];
							t = 0;
							for (u = j.numMorphTargets; t < u; t++) j.__morphTargetsArrays.push(new Float32Array(m * 3))
						}
						j.__needsSmoothNormals = A == THREE.SmoothShading;
						j.__uvType = p;
						j.__vertexColorType = n;
						j.__normalType = A;
						j.__webglFaceCount = v * 3 + (k.geometry.edgeFaces ?
							k.geometry.edgeFaces.length * 6 : 0);
						j.__webglLineCount = J * 2;
						t = 0;
						for (u = o.length; t < u; t++)
							if (o[t].attributes)
								for (a in j.__webglCustomAttributes = {}, o[t].attributes) {
									p = {};
									for (prop in o[t].attributes[a]) p[prop] = o[t].attributes[a][prop];
									if (!p.__webglInitialized || p.createUniqueBuffers) p.__webglInitialized = !0, v = 1, p.type === "v2" ? v = 2 : p.type === "v3" ? v = 3 : p.type === "v4" ? v = 4 : p.type === "c" && (v = 3), p.size = v, p.needsUpdate = !0, p.array = new Float32Array(m * v), p.buffer = g.createBuffer(), p.buffer.belongsToAttribute = a;
									j.__webglCustomAttributes[a] =
										p
								}
							j.__inittedArrays = !0;
						f.__dirtyVertices = !0;
						f.__dirtyMorphTargets = !0;
						f.__dirtyElements = !0;
						f.__dirtyUvs = !0;
						f.__dirtyNormals = !0;
						f.__dirtyTangents = !0;
						f.__dirtyColors = !0
					}
					d instanceof THREE.ShadowVolume ? x(c.__webglShadowVolumes, h, d) : x(c.__webglObjects, h, d)
				} else if (d instanceof THREE.LensFlare) x(c.__webglLensFlares, void 0, d);
				else if (d instanceof THREE.Ribbon) {
				f = d.geometry;
				if (!f.__webglVertexBuffer) e = f, e.__webglVertexBuffer = g.createBuffer(), e.__webglColorBuffer = g.createBuffer(), e = f, h = e.vertices.length, e.__vertexArray =
					new Float32Array(h * 3), e.__colorArray = new Float32Array(h * 3), e.__webglVertexCount = h, f.__dirtyVertices = !0, f.__dirtyColors = !0;
				x(c.__webglObjects, f, d)
			} else if (d instanceof THREE.Line) {
				f = d.geometry;
				if (!f.__webglVertexBuffer) e = f, e.__webglVertexBuffer = g.createBuffer(), e.__webglColorBuffer = g.createBuffer(), e = f, h = e.vertices.length, e.__vertexArray = new Float32Array(h * 3), e.__colorArray = new Float32Array(h * 3), e.__webglLineCount = h, f.__dirtyVertices = !0, f.__dirtyColors = !0;
				x(c.__webglObjects, f, d)
			} else if (d instanceof THREE.ParticleSystem) {
				f = d.geometry;
				if (!f.__webglVertexBuffer) e = f, e.__webglVertexBuffer = g.createBuffer(), e.__webglColorBuffer = g.createBuffer(), e = f, h = e.vertices.length, e.__vertexArray = new Float32Array(h * 3), e.__colorArray = new Float32Array(h * 3), e.__sortArray = [], e.__webglParticleCount = h, f.__dirtyVertices = !0, f.__dirtyColors = !0;
				x(c.__webglObjects, f, d)
			} else THREE.MarchingCubes !== void 0 && d instanceof THREE.MarchingCubes ? c.__webglObjectsImmediate.push({
				object: d,
				opaque: {
					list: [],
					count: 0
				},
				transparent: {
					list: [],
					count: 0
				}
			}) : d instanceof THREE.Sprite && c.__webglSprites.push(d);
			b.__objectsAdded.splice(0, 1)
		}
		for (; b.__objectsRemoved.length;) {
			d = b.__objectsRemoved[0];
			c = b;
			e = f = void 0;
			if (d instanceof THREE.Mesh)
				for (f = c.__webglObjects.length - 1; f >= 0; f--) {
					if (e = c.__webglObjects[f].object, d == e) {
						c.__webglObjects.splice(f, 1);
						break
					}
				} else if (d instanceof THREE.Sprite)
					for (f = c.__webglSprites.length - 1; f >= 0; f--)
						if (e = c.__webglSprites[f], d == e) {
							c.__webglSprites.splice(f, 1);
							break
						}
			b.__objectsRemoved.splice(0, 1)
		}
		d = 0;
		for (c = b.__webglObjects.length; d <
			c; d++) y(b.__webglObjects[d].object, b);
		d = 0;
		for (c = b.__webglShadowVolumes.length; d < c; d++) y(b.__webglShadowVolumes[d].object, b);
		d = 0;
		for (c = b.__webglLensFlares.length; d < c; d++) y(b.__webglLensFlares[d].object, b)
	};
	this.setFaceCulling = function(b, d) {
		b ? (!d || d == "ccw" ? g.frontFace(g.CCW) : g.frontFace(g.CW), b == "back" ? g.cullFace(g.BACK) : b == "front" ? g.cullFace(g.FRONT) : g.cullFace(g.FRONT_AND_BACK), g.enable(g.CULL_FACE)) : g.disable(g.CULL_FACE)
	};
	this.supportsVertexTextures = function() {
		return va
	}
};
THREE.WebGLRenderTarget = function(b, c, d) {
	this.width = b;
	this.height = c;
	d = d || {};
	this.wrapS = d.wrapS !== void 0 ? d.wrapS : THREE.ClampToEdgeWrapping;
	this.wrapT = d.wrapT !== void 0 ? d.wrapT : THREE.ClampToEdgeWrapping;
	this.magFilter = d.magFilter !== void 0 ? d.magFilter : THREE.LinearFilter;
	this.minFilter = d.minFilter !== void 0 ? d.minFilter : THREE.LinearMipMapLinearFilter;
	this.offset = new THREE.Vector2(0, 0);
	this.repeat = new THREE.Vector2(1, 1);
	this.format = d.format !== void 0 ? d.format : THREE.RGBAFormat;
	this.type = d.type !== void 0 ? d.type :
		THREE.UnsignedByteType;
	this.depthBuffer = d.depthBuffer !== void 0 ? d.depthBuffer : !0;
	this.stencilBuffer = d.stencilBuffer !== void 0 ? d.stencilBuffer : !0
};
THREE.SoundRenderer = function() {
	this.volume = 1;
	this.domElement = document.createElement("div");
	this.domElement.id = "THREESound";
	this.cameraPosition = new THREE.Vector3;
	this.soundPosition = new THREE.Vector3;
	this.render = function(b, c, d) {
		d && b.update(void 0, !1, c);
		var d = b.sounds,
			e, f = d.length;
		for (e = 0; e < f; e++) b = d[e], this.soundPosition.set(b.matrixWorld.n14, b.matrixWorld.n24, b.matrixWorld.n34), this.soundPosition.subSelf(c.position), b.isPlaying && b.isLoaded && (b.isAddedToDOM || b.addToDOM(this.domElement), b.calculateVolumeAndPan(this.soundPosition))
	}
};
THREE.RenderableVertex = function() {
	this.positionWorld = new THREE.Vector3;
	this.positionScreen = new THREE.Vector4;
	this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function(b) {
	this.positionWorld.copy(b.positionWorld);
	this.positionScreen.copy(b.positionScreen)
};
THREE.RenderableFace3 = function() {
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.v3 = new THREE.RenderableVertex;
	this.centroidWorld = new THREE.Vector3;
	this.centroidScreen = new THREE.Vector3;
	this.normalWorld = new THREE.Vector3;
	this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
	this.faceMaterials = this.meshMaterials = null;
	this.overdraw = !1;
	this.uvs = [
		[]
	];
	this.z = null
};
THREE.RenderableFace4 = function() {
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.v3 = new THREE.RenderableVertex;
	this.v4 = new THREE.RenderableVertex;
	this.centroidWorld = new THREE.Vector3;
	this.centroidScreen = new THREE.Vector3;
	this.normalWorld = new THREE.Vector3;
	this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
	this.faceMaterials = this.meshMaterials = null;
	this.overdraw = !1;
	this.uvs = [
		[]
	];
	this.z = null
};
THREE.RenderableObject = function() {
	this.z = this.object = null
};
THREE.RenderableParticle = function() {
	this.rotation = this.z = this.y = this.x = null;
	this.scale = new THREE.Vector2;
	this.materials = null
};
THREE.RenderableLine = function() {
	this.z = null;
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.materials = null
};
THREE.ColorUtils = {
	adjustHSV: function(b, c, d, e) {
		var f = THREE.ColorUtils.__hsv;
		THREE.ColorUtils.rgbToHsv(b, f);
		f.h = THREE.ColorUtils.clamp(f.h + c, 0, 1);
		f.s = THREE.ColorUtils.clamp(f.s + d, 0, 1);
		f.v = THREE.ColorUtils.clamp(f.v + e, 0, 1);
		b.setHSV(f.h, f.s, f.v)
	},
	rgbToHsv: function(b, c) {
		var d = b.r,
			e = b.g,
			f = b.b,
			h = Math.max(Math.max(d, e), f),
			j = Math.min(Math.min(d, e), f);
		if (j == h) j = d = 0;
		else {
			var k = h - j,
				j = k / h,
				d = d == h ? (e - f) / k : e == h ? 2 + (f - d) / k : 4 + (d - e) / k;
			d /= 6;
			d < 0 && (d += 1);
			d > 1 && (d -= 1)
		}
		c === void 0 && (c = {
			h: 0,
			s: 0,
			v: 0
		});
		c.h = d;
		c.s = j;
		c.v = h;
		return c
	},
	clamp: function(b, c, d) {
		return b < c ? c : b > d ? d : b
	}
};
THREE.ColorUtils.__hsv = {
	h: 0,
	s: 0,
	v: 0
};
var GeometryUtils = {
	merge: function(b, c) {
		var d = c instanceof THREE.Mesh,
			e = b.vertices.length,
			f = d ? c.geometry : c,
			h = b.vertices,
			j = f.vertices,
			k = b.faces,
			m = f.faces,
			n = b.faceVertexUvs[0],
			f = f.faceVertexUvs[0];
		d && c.matrixAutoUpdate && c.updateMatrix();
		for (var o = 0, p = j.length; o < p; o++) {
			var t = new THREE.Vertex(j[o].position.clone());
			d && c.matrix.multiplyVector3(t.position);
			h.push(t)
		}
		o = 0;
		for (p = m.length; o < p; o++) {
			var j = m[o],
				u, v, C = j.vertexNormals,
				t = j.vertexColors;
			j instanceof THREE.Face3 ? u = new THREE.Face3(j.a + e, j.b + e, j.c + e) :
				j instanceof THREE.Face4 && (u = new THREE.Face4(j.a + e, j.b + e, j.c + e, j.d + e));
			u.normal.copy(j.normal);
			d = 0;
			for (h = C.length; d < h; d++) v = C[d], u.vertexNormals.push(v.clone());
			u.color.copy(j.color);
			d = 0;
			for (h = t.length; d < h; d++) v = t[d], u.vertexColors.push(v.clone());
			u.materials = j.materials.slice();
			u.centroid.copy(j.centroid);
			k.push(u)
		}
		o = 0;
		for (p = f.length; o < p; o++) {
			e = f[o];
			k = [];
			d = 0;
			for (h = e.length; d < h; d++) k.push(new THREE.UV(e[d].u, e[d].v));
			n.push(k)
		}
	}
};
THREE.ImageUtils = {
	loadTexture: function(b, c, d) {
		var e = new Image,
			f = new THREE.Texture(e, c);
		e.onload = function() {
			f.needsUpdate = !0;
			d && d(this)
		};
		e.src = b;
		return f
	},
	loadTextureCube: function(b, c, d) {
		var e, f = [],
			h = new THREE.Texture(f, c),
			c = f.loadCount = 0;
		for (e = b.length; c < e; ++c) f[c] = new Image, f[c].onload = function() {
			f.loadCount += 1;
			if (f.loadCount == 6) h.needsUpdate = !0;
			d && d(this)
		}, f[c].src = b[c];
		return h
	}
};
THREE.SceneUtils = {
	addMesh: function(b, c, d, e, f, h, j, k, m, n) {
		c = new THREE.Mesh(c, n);
		c.scale.x = c.scale.y = c.scale.z = d;
		c.position.x = e;
		c.position.y = f;
		c.position.z = h;
		c.rotation.x = j;
		c.rotation.y = k;
		c.rotation.z = m;
		b.addObject(c);
		return c
	},
	addPanoramaCubeWebGL: function(b, c, d) {
		var e = THREE.ShaderUtils.lib.cube;
		e.uniforms.tCube.texture = d;
		d = new THREE.MeshShaderMaterial({
			fragmentShader: e.fragmentShader,
			vertexShader: e.vertexShader,
			uniforms: e.uniforms
		});
		c = new THREE.Mesh(new THREE.Cube(c, c, c, 1, 1, 1, null, !0), d);
		b.addObject(c);
		return c
	},
	addPanoramaCube: function(b, c, d) {
		var e = [];
		e.push(new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[0])
		}));
		e.push(new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[1])
		}));
		e.push(new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[2])
		}));
		e.push(new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[3])
		}));
		e.push(new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[4])
		}));
		e.push(new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[5])
		}));
		c = new THREE.Mesh(new THREE.Cube(c, c, c, 1, 1, e, !0),
			new THREE.MeshFaceMaterial);
		b.addObject(c);
		return c
	},
	addPanoramaCubePlanes: function(b, c, d) {
		var e = c / 2,
			c = new THREE.Plane(c, c),
			f = Math.PI,
			h = Math.PI / 2;
		THREE.SceneUtils.addMesh(b, c, 1, 0, 0, -e, 0, 0, 0, new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[5])
		}));
		THREE.SceneUtils.addMesh(b, c, 1, -e, 0, 0, 0, h, 0, new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[0])
		}));
		THREE.SceneUtils.addMesh(b, c, 1, e, 0, 0, 0, -h, 0, new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[1])
		}));
		THREE.SceneUtils.addMesh(b, c, 1, 0, e, 0, h, 0, f,
			new THREE.MeshBasicMaterial({
				map: new THREE.Texture(d[2])
			}));
		THREE.SceneUtils.addMesh(b, c, 1, 0, -e, 0, -h, 0, f, new THREE.MeshBasicMaterial({
			map: new THREE.Texture(d[3])
		}))
	},
	showHierarchy: function(b, c) {
		THREE.SceneUtils.traverseHierarchy(b, function(b) {
			b.visible = c
		})
	},
	traverseHierarchy: function(b, c) {
		var d, e, f = b.children.length;
		for (e = 0; e < f; e++) d = b.children[e], c(d), THREE.SceneUtils.traverseHierarchy(d, c)
	}
};
THREE.ShaderUtils = {
	lib: {
		fresnel: {
			uniforms: {
				mRefractionRatio: {
					type: "f",
					value: 1.02
				},
				mFresnelBias: {
					type: "f",
					value: 0.1
				},
				mFresnelPower: {
					type: "f",
					value: 2
				},
				mFresnelScale: {
					type: "f",
					value: 1
				},
				tCube: {
					type: "t",
					value: 1,
					texture: null
				}
			},
			fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
			vertexShader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"
		},
		normal: {
			uniforms: {
				enableAO: {
					type: "i",
					value: 0
				},
				enableDiffuse: {
					type: "i",
					value: 0
				},
				enableSpecular: {
					type: "i",
					value: 0
				},
				tDiffuse: {
					type: "t",
					value: 0,
					texture: null
				},
				tNormal: {
					type: "t",
					value: 2,
					texture: null
				},
				tSpecular: {
					type: "t",
					value: 3,
					texture: null
				},
				tAO: {
					type: "t",
					value: 4,
					texture: null
				},
				uNormalScale: {
					type: "f",
					value: 1
				},
				tDisplacement: {
					type: "t",
					value: 5,
					texture: null
				},
				uDisplacementBias: {
					type: "f",
					value: -0.5
				},
				uDisplacementScale: {
					type: "f",
					value: 2.5
				},
				uPointLightPos: {
					type: "v3",
					value: new THREE.Vector3
				},
				uPointLightColor: {
					type: "c",
					value: new THREE.Color(15658734)
				},
				uDirLightPos: {
					type: "v3",
					value: new THREE.Vector3
				},
				uDirLightColor: {
					type: "c",
					value: new THREE.Color(15658734)
				},
				uAmbientLightColor: {
					type: "c",
					value: new THREE.Color(328965)
				},
				uDiffuseColor: {
					type: "c",
					value: new THREE.Color(15658734)
				},
				uSpecularColor: {
					type: "c",
					value: new THREE.Color(1118481)
				},
				uAmbientColor: {
					type: "c",
					value: new THREE.Color(328965)
				},
				uShininess: {
					type: "f",
					value: 30
				}
			},
			fragmentShader: "uniform vec3 uDirLightPos;\nuniform vec3 uAmbientLightColor;\nuniform vec3 uDirLightColor;\nuniform vec3 uPointLightColor;\nuniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform float uNormalScale;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 diffuseTex = vec3( 1.0, 1.0, 1.0 );\nvec3 aoTex = vec3( 1.0, 1.0, 1.0 );\nvec3 specularTex = vec3( 1.0, 1.0, 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ndiffuseTex = texture2D( tDiffuse, vUv ).xyz;\nif( enableAO )\naoTex = texture2D( tAO, vUv ).xyz;\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 pointDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 pointSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec3 pointVector = normalize( vPointLightVector );\nvec3 pointHalfVector = normalize( vPointLightVector + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = specularTex.r * pow( pointDotNormalHalf, uShininess );\npointDiffuse  += vec4( uDiffuseColor, 1.0 ) * pointDiffuseWeight;\npointSpecular += vec4( uSpecularColor, 1.0 ) * pointSpecularWeight * pointDiffuseWeight;\nvec4 dirDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 dirSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 lDirection = viewMatrix * vec4( uDirLightPos, 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = specularTex.r * pow( dirDotNormalHalf, uShininess );\ndirDiffuse  += vec4( uDiffuseColor, 1.0 ) * dirDiffuseWeight;\ndirSpecular += vec4( uSpecularColor, 1.0 ) * dirSpecularWeight * dirDiffuseWeight;\nvec4 totalLight = vec4( uAmbientLightColor * uAmbientColor, 1.0 );\ntotalLight += vec4( uDirLightColor, 1.0 ) * ( dirDiffuse + dirSpecular );\ntotalLight += vec4( uPointLightColor, 1.0 ) * ( pointDiffuse + pointSpecular );\ngl_FragColor = vec4( totalLight.xyz * aoTex * diffuseTex, 1.0 );\n}",
			vertexShader: "attribute vec4 tangent;\nuniform vec3 uPointLightPos;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv;\nvec4 lPosition = viewMatrix * vec4( uPointLightPos, 1.0 );\nvPointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif\n}"
		},
		cube: {
			uniforms: {
				tCube: {
					type: "t",
					value: 1,
					texture: null
				}
			},
			vertexShader: "varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}"
		},
		convolution: {
			uniforms: {
				tDiffuse: {
					type: "t",
					value: 0,
					texture: null
				},
				uImageIncrement: {
					type: "v2",
					value: new THREE.Vector2(0.001953125, 0)
				},
				cKernel: {
					type: "fv1",
					value: []
				}
			},
			vertexShader: "varying vec2 vUv;\nuniform vec2 uImageIncrement;\nvoid main(void) {\nvUv = uv - ((KERNEL_SIZE - 1.0) / 2.0) * uImageIncrement;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 uImageIncrement;\nuniform float cKernel[KERNEL_SIZE];\nvoid main(void) {\nvec2 imageCoord = vUv;\nvec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );\nfor( int i=0; i<KERNEL_SIZE; ++i ) {\nsum += texture2D( tDiffuse, imageCoord ) * cKernel[i];\nimageCoord += uImageIncrement;\n}\ngl_FragColor = sum;\n}"
		},
		film: {
			uniforms: {
				tDiffuse: {
					type: "t",
					value: 0,
					texture: null
				},
				time: {
					type: "f",
					value: 0
				},
				nIntensity: {
					type: "f",
					value: 0.5
				},
				sIntensity: {
					type: "f",
					value: 0.05
				},
				sCount: {
					type: "f",
					value: 4096
				},
				grayscale: {
					type: "i",
					value: 1
				}
			},
			vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float time;\nuniform bool grayscale;\nuniform float nIntensity;\nuniform float sIntensity;\nuniform float sCount;\nvoid main() {\nvec4 cTextureScreen = texture2D( tDiffuse, vUv );\nfloat x = vUv.x * vUv.y * time *  1000.0;\nx = mod( x, 13.0 ) * mod( x, 123.0 );\nfloat dx = mod( x, 0.01 );\nvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\nvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\ncResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\ncResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\nif( grayscale ) {\ncResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n}\ngl_FragColor =  vec4( cResult, cTextureScreen.a );\n}"
		},
		screen: {
			uniforms: {
				tDiffuse: {
					type: "t",
					value: 0,
					texture: null
				},
				opacity: {
					type: "f",
					value: 1
				}
			},
			vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float opacity;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\ngl_FragColor = opacity * texel;\n}"
		},
		basic: {
			uniforms: {},
			vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "void main() {\ngl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );\n}"
		}
	},
	buildKernel: function(b) {
		var c, d, e, f, h = 2 * Math.ceil(b * 3) + 1;
		h > 25 && (h = 25);
		f = (h - 1) * 0.5;
		d = Array(h);
		for (c = e = 0; c < h; ++c) d[c] = Math.exp(-((c - f) * (c - f)) / (2 * b * b)), e += d[c];
		for (c = 0; c < h; ++c) d[c] /= e;
		return d
	}
};
THREE.AnimationHandler = function() {
	var b = [],
		c = {},
		d = {
			update: function(d) {
				for (var c = 0; c < b.length; c++) b[c].update(d)
			},
			addToUpdate: function(d) {
				b.indexOf(d) === -1 && b.push(d)
			},
			removeFromUpdate: function(d) {
				d = b.indexOf(d);
				d !== -1 && b.splice(d, 1)
			},
			add: function(b) {
				c[b.name] !== void 0 && console.log("THREE.AnimationHandler.add: Warning! " + b.name + " already exists in library. Overwriting.");
				c[b.name] = b;
				if (b.initialized !== !0) {
					for (var d = 0; d < b.hierarchy.length; d++) {
						for (var e = 0; e < b.hierarchy[d].keys.length; e++) {
							if (b.hierarchy[d].keys[e].time <
								0) b.hierarchy[d].keys[e].time = 0;
							if (b.hierarchy[d].keys[e].rot !== void 0 && !(b.hierarchy[d].keys[e].rot instanceof THREE.Quaternion)) {
								var k = b.hierarchy[d].keys[e].rot;
								b.hierarchy[d].keys[e].rot = new THREE.Quaternion(k[0], k[1], k[2], k[3])
							}
						}
						if (b.hierarchy[d].keys[0].morphTargets !== void 0) {
							k = {};
							for (e = 0; e < b.hierarchy[d].keys.length; e++)
								for (var m = 0; m < b.hierarchy[d].keys[e].morphTargets.length; m++) {
									var n = b.hierarchy[d].keys[e].morphTargets[m];
									k[n] = -1
								}
							b.hierarchy[d].usedMorphTargets = k;
							for (e = 0; e < b.hierarchy[d].keys.length; e++) {
								var o = {};
								for (n in k) {
									for (m = 0; m < b.hierarchy[d].keys[e].morphTargets.length; m++)
										if (b.hierarchy[d].keys[e].morphTargets[m] === n) {
											o[n] = b.hierarchy[d].keys[e].morphTargetsInfluences[m];
											break
										}
									m === b.hierarchy[d].keys[e].morphTargets.length && (o[n] = 0)
								}
								b.hierarchy[d].keys[e].morphTargetsInfluences = o
							}
						}
						for (e = 1; e < b.hierarchy[d].keys.length; e++) b.hierarchy[d].keys[e].time === b.hierarchy[d].keys[e - 1].time && (b.hierarchy[d].keys.splice(e, 1), e--);
						for (e = 1; e < b.hierarchy[d].keys.length; e++) b.hierarchy[d].keys[e].index = e
					}
					e = parseInt(b.length *
						b.fps, 10);
					b.JIT = {};
					b.JIT.hierarchy = [];
					for (d = 0; d < b.hierarchy.length; d++) b.JIT.hierarchy.push(Array(e));
					b.initialized = !0
				}
			},
			get: function(b) {
				if (typeof b === "string") return c[b] ? c[b] : (console.log("THREE.AnimationHandler.get: Couldn't find animation " + b), null)
			},
			parse: function(b) {
				var d = [];
				if (b instanceof THREE.SkinnedMesh)
					for (var c = 0; c < b.bones.length; c++) d.push(b.bones[c]);
				else e(b, d);
				return d
			}
		},
		e = function(b, d) {
			d.push(b);
			for (var c = 0; c < b.children.length; c++) e(b.children[c], d)
		};
	d.LINEAR = 0;
	d.CATMULLROM = 1;
	d.CATMULLROM_FORWARD =
		2;
	return d
}();
THREE.Animation = function(b, c, d, e) {
	this.root = b;
	this.data = THREE.AnimationHandler.get(c);
	this.hierarchy = THREE.AnimationHandler.parse(b);
	this.currentTime = 0;
	this.timeScale = 1;
	this.isPlaying = !1;
	this.loop = this.isPaused = !0;
	this.interpolationType = d !== void 0 ? d : THREE.AnimationHandler.LINEAR;
	this.JITCompile = e !== void 0 ? e : !0;
	this.points = [];
	this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function(b, c) {
	if (!this.isPlaying) {
		this.isPlaying = !0;
		this.loop = b !== void 0 ? b : !0;
		this.currentTime = c !== void 0 ? c : 0;
		var d, e = this.hierarchy.length,
			f;
		for (d = 0; d < e; d++) {
			f = this.hierarchy[d];
			if (this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD) f.useQuaternion = !0;
			f.matrixAutoUpdate = !0;
			if (f.animationCache === void 0) f.animationCache = {}, f.animationCache.prevKey = {
				pos: 0,
				rot: 0,
				scl: 0
			}, f.animationCache.nextKey = {
				pos: 0,
				rot: 0,
				scl: 0
			}, f.animationCache.originalMatrix = f instanceof
			THREE.Bone ? f.skinMatrix : f.matrix;
			var h = f.animationCache.prevKey;
			f = f.animationCache.nextKey;
			h.pos = this.data.hierarchy[d].keys[0];
			h.rot = this.data.hierarchy[d].keys[0];
			h.scl = this.data.hierarchy[d].keys[0];
			f.pos = this.getNextKeyWith("pos", d, 1);
			f.rot = this.getNextKeyWith("rot", d, 1);
			f.scl = this.getNextKeyWith("scl", d, 1)
		}
		this.update(0)
	}
	this.isPaused = !1;
	THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function() {
	this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
	this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function() {
	this.isPaused = this.isPlaying = !1;
	THREE.AnimationHandler.removeFromUpdate(this);
	for (var b = 0; b < this.hierarchy.length; b++)
		if (this.hierarchy[b].animationCache !== void 0) this.hierarchy[b] instanceof THREE.Bone ? this.hierarchy[b].skinMatrix = this.hierarchy[b].animationCache.originalMatrix : this.hierarchy[b].matrix = this.hierarchy[b].animationCache.originalMatrix, delete this.hierarchy[b].animationCache
};
THREE.Animation.prototype.update = function(b) {
	if (this.isPlaying) {
		var c = ["pos", "rot", "scl"],
			d, e, f, h, j, k, m, n, o = this.data.JIT.hierarchy,
			p, t;
		this.currentTime += b * this.timeScale;
		t = this.currentTime;
		p = this.currentTime %= this.data.length;
		n = parseInt(Math.min(p * this.data.fps, this.data.length * this.data.fps), 10);
		for (var u = 0, v = this.hierarchy.length; u < v; u++)
			if (b = this.hierarchy[u], m = b.animationCache, this.JITCompile && o[u][n] !== void 0) b instanceof THREE.Bone ? (b.skinMatrix = o[u][n], b.matrixAutoUpdate = !1, b.matrixWorldNeedsUpdate = !1) : (b.matrix = o[u][n], b.matrixAutoUpdate = !1, b.matrixWorldNeedsUpdate = !0);
			else {
				if (this.JITCompile) b instanceof THREE.Bone ? b.skinMatrix = b.animationCache.originalMatrix : b.matrix = b.animationCache.originalMatrix;
				for (var C = 0; C < 3; C++) {
					d = c[C];
					j = m.prevKey[d];
					k = m.nextKey[d];
					if (k.time <= t) {
						if (p < t)
							if (this.loop) {
								j = this.data.hierarchy[u].keys[0];
								for (k = this.getNextKeyWith(d, u, 1); k.time < p;) j = k, k = this.getNextKeyWith(d, u, k.index + 1)
							} else {
								this.stop();
								return
							}
						else {
							do j = k, k = this.getNextKeyWith(d, u, k.index + 1); while (k.time <
								p)
						}
						m.prevKey[d] = j;
						m.nextKey[d] = k
					}
					b.matrixAutoUpdate = !0;
					b.matrixWorldNeedsUpdate = !0;
					e = (p - j.time) / (k.time - j.time);
					f = j[d];
					h = k[d];
					if (e < 0 || e > 1) console.log("THREE.Animation.update: Warning! Scale out of bounds:" + e + " on bone " + u), e = e < 0 ? 0 : 1;
					if (d === "pos")
						if (d = b.position, this.interpolationType === THREE.AnimationHandler.LINEAR) d.x = f[0] + (h[0] - f[0]) * e, d.y = f[1] + (h[1] - f[1]) * e, d.z = f[2] + (h[2] - f[2]) * e;
						else {
							if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD)
								if (this.points[0] =
									this.getPrevKeyWith("pos", u, j.index - 1).pos, this.points[1] = f, this.points[2] = h, this.points[3] = this.getNextKeyWith("pos", u, k.index + 1).pos, e = e * 0.33 + 0.33, f = this.interpolateCatmullRom(this.points, e), d.x = f[0], d.y = f[1], d.z = f[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) e = this.interpolateCatmullRom(this.points, e * 1.01), this.target.set(e[0], e[1], e[2]), this.target.subSelf(d), this.target.y = 0, this.target.normalize(), e = Math.atan2(this.target.x, this.target.z), b.rotation.set(0, e, 0)
						}
					else if (d ===
						"rot") THREE.Quaternion.slerp(f, h, b.quaternion, e);
					else if (d === "scl") d = b.scale, d.x = f[0] + (h[0] - f[0]) * e, d.y = f[1] + (h[1] - f[1]) * e, d.z = f[2] + (h[2] - f[2]) * e
				}
			}
		if (this.JITCompile && o[0][n] === void 0) {
			this.hierarchy[0].update(void 0, !0);
			for (u = 0; u < this.hierarchy.length; u++) o[u][n] = this.hierarchy[u] instanceof THREE.Bone ? this.hierarchy[u].skinMatrix.clone() : this.hierarchy[u].matrix.clone()
		}
	}
};
THREE.Animation.prototype.interpolateCatmullRom = function(b, c) {
	var d = [],
		e = [],
		f, h, j, k, m, n;
	f = (b.length - 1) * c;
	h = Math.floor(f);
	f -= h;
	d[0] = h == 0 ? h : h - 1;
	d[1] = h;
	d[2] = h > b.length - 2 ? h : h + 1;
	d[3] = h > b.length - 3 ? h : h + 2;
	h = b[d[0]];
	k = b[d[1]];
	m = b[d[2]];
	n = b[d[3]];
	d = f * f;
	j = f * d;
	e[0] = this.interpolate(h[0], k[0], m[0], n[0], f, d, j);
	e[1] = this.interpolate(h[1], k[1], m[1], n[1], f, d, j);
	e[2] = this.interpolate(h[2], k[2], m[2], n[2], f, d, j);
	return e
};
THREE.Animation.prototype.interpolate = function(b, c, d, e, f, h, j) {
	b = (d - b) * 0.5;
	e = (e - c) * 0.5;
	return (2 * (c - d) + b + e) * j + (-3 * (c - d) - 2 * b - e) * h + b * f + c
};
THREE.Animation.prototype.getNextKeyWith = function(b, c, d) {
	var e = this.data.hierarchy[c].keys;
	for (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? d = d < e.length - 1 ? d : e.length - 1 : d %= e.length; d < e.length; d++)
		if (e[d][b] !== void 0) return e[d];
	return this.data.hierarchy[c].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function(b, c, d) {
	for (var e = this.data.hierarchy[c].keys, d = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? d > 0 ? d : 0 : d >= 0 ? d : d + e.length; d >= 0; d--)
		if (e[d][b] !== void 0) return e[d];
	return this.data.hierarchy[c].keys[e.length - 1]
};
THREE.QuakeCamera = function(b) {
	function c(b, c) {
		return function() {
			c.apply(b, arguments)
		}
	}
	THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
	this.movementSpeed = 1;
	this.lookSpeed = 0.005;
	this.noFly = !1;
	this.lookVertical = !0;
	this.autoForward = !1;
	this.activeLook = !0;
	this.heightSpeed = !1;
	this.heightCoef = 1;
	this.heightMin = 0;
	this.constrainVertical = !1;
	this.verticalMin = 0;
	this.verticalMax = 3.14;
	this.domElement = document;
	this.lastUpdate = (new Date).getTime();
	this.tdiff = 0;
	if (b) {
		if (b.movementSpeed !== void 0) this.movementSpeed =
			b.movementSpeed;
		if (b.lookSpeed !== void 0) this.lookSpeed = b.lookSpeed;
		if (b.noFly !== void 0) this.noFly = b.noFly;
		if (b.lookVertical !== void 0) this.lookVertical = b.lookVertical;
		if (b.autoForward !== void 0) this.autoForward = b.autoForward;
		if (b.activeLook !== void 0) this.activeLook = b.activeLook;
		if (b.heightSpeed !== void 0) this.heightSpeed = b.heightSpeed;
		if (b.heightCoef !== void 0) this.heightCoef = b.heightCoef;
		if (b.heightMin !== void 0) this.heightMin = b.heightMin;
		if (b.heightMax !== void 0) this.heightMax = b.heightMax;
		if (b.constrainVertical !==
			void 0) this.constrainVertical = b.constrainVertical;
		if (b.verticalMin !== void 0) this.verticalMin = b.verticalMin;
		if (b.verticalMax !== void 0) this.verticalMax = b.verticalMax;
		if (b.domElement !== void 0) this.domElement = b.domElement
	}
	this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = this.autoSpeedFactor = 0;
	this.mouseDragOn = this.freeze = this.moveRight = this.moveLeft = this.moveBackward = this.moveForward = !1;
	this.windowHalfX = window.innerWidth / 2;
	this.windowHalfY = window.innerHeight / 2;
	this.onMouseDown = function(b) {
		b.preventDefault();
		b.stopPropagation();
		if (this.activeLook) switch (b.button) {
			case 0:
				this.moveForward = !0;
				break;
			case 2:
				this.moveBackward = !0
		}
		this.mouseDragOn = !0
	};
	this.onMouseUp = function(b) {
		b.preventDefault();
		b.stopPropagation();
		if (this.activeLook) switch (b.button) {
			case 0:
				this.moveForward = !1;
				break;
			case 2:
				this.moveBackward = !1
		}
		this.mouseDragOn = !1
	};
	this.onMouseMove = function(b) {
		this.mouseX = b.clientX - this.windowHalfX;
		this.mouseY = b.clientY - this.windowHalfY
	};
	this.onKeyDown = function(b) {
		switch (b.keyCode) {
			case 38:
			case 87:
				this.moveForward = !0;
				break;
			case 37:
			case 65:
				this.moveLeft = !0;
				break;
			case 40:
			case 83:
				this.moveBackward = !0;
				break;
			case 39:
			case 68:
				this.moveRight = !0;
				break;
			case 81:
				this.freeze = !this.freeze
		}
	};
	this.onKeyUp = function(b) {
		switch (b.keyCode) {
			case 38:
			case 87:
				this.moveForward = !1;
				break;
			case 37:
			case 65:
				this.moveLeft = !1;
				break;
			case 40:
			case 83:
				this.moveBackward = !1;
				break;
			case 39:
			case 68:
				this.moveRight = !1
		}
	};
	this.update = function() {
		var b = (new Date).getTime();
		this.tdiff = (b - this.lastUpdate) / 1E3;
		this.lastUpdate = b;
		if (!this.freeze) {
			this.autoSpeedFactor =
				this.heightSpeed ? this.tdiff * ((this.position.y < this.heightMin ? this.heightMin : this.position.y > this.heightMax ? this.heightMax : this.position.y) - this.heightMin) * this.heightCoef : 0;
			var c = this.tdiff * this.movementSpeed;
			(this.moveForward || this.autoForward && !this.moveBackward) && this.translateZ(-(c + this.autoSpeedFactor));
			this.moveBackward && this.translateZ(c);
			this.moveLeft && this.translateX(-c);
			this.moveRight && this.translateX(c);
			c = this.tdiff * this.lookSpeed;
			this.activeLook || (c = 0);
			this.lon += this.mouseX * c;
			this.lookVertical &&
				(this.lat -= this.mouseY * c);
			this.lat = Math.max(-85, Math.min(85, this.lat));
			this.phi = (90 - this.lat) * Math.PI / 180;
			this.theta = this.lon * Math.PI / 180;
			var b = this.target.position,
				f = this.position;
			b.x = f.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
			b.y = f.y + 100 * Math.cos(this.phi);
			b.z = f.z + 100 * Math.sin(this.phi) * Math.sin(this.theta)
		}
		this.lon += this.mouseX * c;
		this.lookVertical && (this.lat -= this.mouseY * c);
		this.lat = Math.max(-85, Math.min(85, this.lat));
		this.phi = (90 - this.lat) * Math.PI / 180;
		this.theta = this.lon * Math.PI / 180;
		if (this.constrainVertical) this.phi =
			(this.phi - 0) * (this.verticalMax - this.verticalMin) / 3.14 + this.verticalMin;
		b = this.target.position;
		f = this.position;
		b.x = f.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
		b.y = f.y + 100 * Math.cos(this.phi);
		b.z = f.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);
		this.supr.update.call(this)
	};
	this.domElement.addEventListener("contextmenu", function(b) {
		b.preventDefault()
	}, !1);
	this.domElement.addEventListener("mousemove", c(this, this.onMouseMove), !1);
	this.domElement.addEventListener("mousedown", c(this, this.onMouseDown), !1);
	this.domElement.addEventListener("mouseup", c(this, this.onMouseUp), !1);
	this.domElement.addEventListener("keydown", c(this, this.onKeyDown), !1);
	this.domElement.addEventListener("keyup", c(this, this.onKeyUp), !1)
};
THREE.QuakeCamera.prototype = new THREE.Camera;
THREE.QuakeCamera.prototype.constructor = THREE.QuakeCamera;
THREE.QuakeCamera.prototype.supr = THREE.Camera.prototype;
THREE.QuakeCamera.prototype.translate = function(b, c) {
	this.matrix.rotateAxis(c);
	if (this.noFly) c.y = 0;
	this.position.addSelf(c.multiplyScalar(b));
	this.target.position.addSelf(c.multiplyScalar(b))
};
THREE.PathCamera = function(b) {
	function c(b, d, c, e) {
		var f = {
				name: c,
				fps: 0.6,
				length: e,
				hierarchy: []
			},
			h, j = d.getControlPointsArray(),
			k = d.getLength(),
			m = j.length,
			D = 0;
		h = m - 1;
		d = {
			parent: -1,
			keys: []
		};
		d.keys[0] = {
			time: 0,
			pos: j[0],
			rot: [0, 0, 0, 1],
			scl: [1, 1, 1]
		};
		d.keys[h] = {
			time: e,
			pos: j[h],
			rot: [0, 0, 0, 1],
			scl: [1, 1, 1]
		};
		for (h = 1; h < m - 1; h++) D = e * k.chunks[h] / k.total, d.keys[h] = {
			time: D,
			pos: j[h]
		};
		f.hierarchy[0] = d;
		THREE.AnimationHandler.add(f);
		return new THREE.Animation(b, c, THREE.AnimationHandler.CATMULLROM_FORWARD, !1)
	}

	function d(b, d) {
		var c,
			e, f = new THREE.Geometry;
		for (c = 0; c < b.points.length * d; c++) e = c / (b.points.length * d), e = b.getPoint(e), f.vertices[c] = new THREE.Vertex(new THREE.Vector3(e.x, e.y, e.z));
		return f
	}

	function e(b, c) {
		var e = d(c, 10),
			f = d(c, 10),
			h = new THREE.LineBasicMaterial({
				color: 16711680,
				linewidth: 3
			});
		lineObj = new THREE.Line(e, h);
		particleObj = new THREE.ParticleSystem(f, new THREE.ParticleBasicMaterial({
			color: 16755200,
			size: 3
		}));
		lineObj.scale.set(1, 1, 1);
		b.addChild(lineObj);
		particleObj.scale.set(1, 1, 1);
		b.addChild(particleObj);
		f = new THREE.Sphere(1,
			16, 8);
		h = new THREE.MeshBasicMaterial({
			color: 65280
		});
		for (i = 0; i < c.points.length; i++) e = new THREE.Mesh(f, h), e.position.copy(c.points[i]), e.updateMatrix(), b.addChild(e)
	}
	THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
	this.id = "PathCamera" + THREE.PathCameraIdCounter++;
	this.duration = 1E4;
	this.waypoints = [];
	this.useConstantSpeed = !0;
	this.resamplingCoef = 50;
	this.debugPath = new THREE.Object3D;
	this.debugDummy = new THREE.Object3D;
	this.animationParent = new THREE.Object3D;
	this.lookSpeed = 0.005;
	this.lookHorizontal =
		this.lookVertical = !0;
	this.verticalAngleMap = {
		srcRange: [0, 6.28],
		dstRange: [0, 6.28]
	};
	this.horizontalAngleMap = {
		srcRange: [0, 6.28],
		dstRange: [0, 6.28]
	};
	this.domElement = document;
	if (b) {
		if (b.duration !== void 0) this.duration = b.duration * 1E3;
		if (b.waypoints !== void 0) this.waypoints = b.waypoints;
		if (b.useConstantSpeed !== void 0) this.useConstantSpeed = b.useConstantSpeed;
		if (b.resamplingCoef !== void 0) this.resamplingCoef = b.resamplingCoef;
		if (b.createDebugPath !== void 0) this.createDebugPath = b.createDebugPath;
		if (b.createDebugDummy !==
			void 0) this.createDebugDummy = b.createDebugDummy;
		if (b.lookSpeed !== void 0) this.lookSpeed = b.lookSpeed;
		if (b.lookVertical !== void 0) this.lookVertical = b.lookVertical;
		if (b.lookHorizontal !== void 0) this.lookHorizontal = b.lookHorizontal;
		if (b.verticalAngleMap !== void 0) this.verticalAngleMap = b.verticalAngleMap;
		if (b.horizontalAngleMap !== void 0) this.horizontalAngleMap = b.horizontalAngleMap;
		if (b.domElement !== void 0) this.domElement = b.domElement
	}
	this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = 0;
	this.windowHalfX =
		window.innerWidth / 2;
	this.windowHalfY = window.innerHeight / 2;
	var f = Math.PI * 2,
		h = Math.PI / 180;
	this.update = function(b, d, c) {
		var e, j;
		this.lookHorizontal && (this.lon += this.mouseX * this.lookSpeed);
		this.lookVertical && (this.lat -= this.mouseY * this.lookSpeed);
		this.lon = Math.max(0, Math.min(360, this.lon));
		this.lat = Math.max(-85, Math.min(85, this.lat));
		this.phi = (90 - this.lat) * h;
		this.theta = this.lon * h;
		e = this.phi % f;
		this.phi = e >= 0 ? e : e + f;
		e = this.verticalAngleMap.srcRange;
		j = this.verticalAngleMap.dstRange;
		var k = j[1] - j[0];
		this.phi =
			TWEEN.Easing.Quadratic.EaseInOut(((this.phi - e[0]) * (j[1] - j[0]) / (e[1] - e[0]) + j[0] - j[0]) / k) * k + j[0];
		e = this.horizontalAngleMap.srcRange;
		j = this.horizontalAngleMap.dstRange;
		k = j[1] - j[0];
		this.theta = TWEEN.Easing.Quadratic.EaseInOut(((this.theta - e[0]) * (j[1] - j[0]) / (e[1] - e[0]) + j[0] - j[0]) / k) * k + j[0];
		e = this.target.position;
		e.x = 100 * Math.sin(this.phi) * Math.cos(this.theta);
		e.y = 100 * Math.cos(this.phi);
		e.z = 100 * Math.sin(this.phi) * Math.sin(this.theta);
		this.supr.update.call(this, b, d, c)
	};
	this.onMouseMove = function(b) {
		this.mouseX =
			b.clientX - this.windowHalfX;
		this.mouseY = b.clientY - this.windowHalfY
	};
	this.spline = new THREE.Spline;
	this.spline.initFromArray(this.waypoints);
	this.useConstantSpeed && this.spline.reparametrizeByArcLength(this.resamplingCoef);
	if (this.createDebugDummy) {
		var b = new THREE.MeshLambertMaterial({
				color: 30719
			}),
			j = new THREE.MeshLambertMaterial({
				color: 65280
			}),
			k = new THREE.Cube(10, 10, 20),
			m = new THREE.Cube(2, 2, 10);
		this.animationParent = new THREE.Mesh(k, b);
		b = new THREE.Mesh(m, j);
		b.position.set(0, 10, 0);
		this.animation = c(this.animationParent,
			this.spline, this.id, this.duration);
		this.animationParent.addChild(this);
		this.animationParent.addChild(this.target);
		this.animationParent.addChild(b)
	} else this.animation = c(this.animationParent, this.spline, this.id, this.duration), this.animationParent.addChild(this.target), this.animationParent.addChild(this);
	this.createDebugPath && e(this.debugPath, this.spline);
	this.domElement.addEventListener("mousemove", function(b, d) {
		return function() {
			d.apply(b, arguments)
		}
	}(this, this.onMouseMove), !1)
};
THREE.PathCamera.prototype = new THREE.Camera;
THREE.PathCamera.prototype.constructor = THREE.PathCamera;
THREE.PathCamera.prototype.supr = THREE.Camera.prototype;
THREE.PathCameraIdCounter = 0;
THREE.FlyCamera = function(b) {
	function c(b, c) {
		return function() {
			c.apply(b, arguments)
		}
	}
	THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
	this.tmpQuaternion = new THREE.Quaternion;
	this.movementSpeed = 1;
	this.rollSpeed = 0.005;
	this.autoForward = this.dragToLook = !1;
	this.domElement = document;
	if (b) {
		if (b.movementSpeed !== void 0) this.movementSpeed = b.movementSpeed;
		if (b.rollSpeed !== void 0) this.rollSpeed = b.rollSpeed;
		if (b.dragToLook !== void 0) this.dragToLook = b.dragToLook;
		if (b.autoForward !== void 0) this.autoForward =
			b.autoForward;
		if (b.domElement !== void 0) this.domElement = b.domElement
	}
	this.useTarget = !1;
	this.useQuaternion = !0;
	this.mouseStatus = 0;
	this.moveState = {
		up: 0,
		down: 0,
		left: 0,
		right: 0,
		forward: 0,
		back: 0,
		pitchUp: 0,
		pitchDown: 0,
		yawLeft: 0,
		yawRight: 0,
		rollLeft: 0,
		rollRight: 0
	};
	this.moveVector = new THREE.Vector3(0, 0, 0);
	this.rotationVector = new THREE.Vector3(0, 0, 0);
	this.lastUpdate = -1;
	this.tdiff = 0;
	this.handleEvent = function(b) {
		if (typeof this[b.type] == "function") this[b.type](b)
	};
	this.keydown = function(b) {
		if (!b.altKey) {
			switch (b.keyCode) {
				case 16:
					this.movementSpeedMultiplier =
						0.1;
					break;
				case 87:
					this.moveState.forward = 1;
					break;
				case 83:
					this.moveState.back = 1;
					break;
				case 65:
					this.moveState.left = 1;
					break;
				case 68:
					this.moveState.right = 1;
					break;
				case 82:
					this.moveState.up = 1;
					break;
				case 70:
					this.moveState.down = 1;
					break;
				case 38:
					this.moveState.pitchUp = 1;
					break;
				case 40:
					this.moveState.pitchDown = 1;
					break;
				case 37:
					this.moveState.yawLeft = 1;
					break;
				case 39:
					this.moveState.yawRight = 1;
					break;
				case 81:
					this.moveState.rollLeft = 1;
					break;
				case 69:
					this.moveState.rollRight = 1
			}
			this.updateMovementVector();
			this.updateRotationVector()
		}
	};
	this.keyup = function(b) {
		switch (b.keyCode) {
			case 16:
				this.movementSpeedMultiplier = 1;
				break;
			case 87:
				this.moveState.forward = 0;
				break;
			case 83:
				this.moveState.back = 0;
				break;
			case 65:
				this.moveState.left = 0;
				break;
			case 68:
				this.moveState.right = 0;
				break;
			case 82:
				this.moveState.up = 0;
				break;
			case 70:
				this.moveState.down = 0;
				break;
			case 38:
				this.moveState.pitchUp = 0;
				break;
			case 40:
				this.moveState.pitchDown = 0;
				break;
			case 37:
				this.moveState.yawLeft = 0;
				break;
			case 39:
				this.moveState.yawRight = 0;
				break;
			case 81:
				this.moveState.rollLeft = 0;
				break;
			case 69:
				this.moveState.rollRight = 0
		}
		this.updateMovementVector();
		this.updateRotationVector()
	};
	this.mousedown = function(b) {
		b.preventDefault();
		b.stopPropagation();
		if (this.dragToLook) this.mouseStatus++;
		else switch (b.button) {
			case 0:
				this.moveForward = !0;
				break;
			case 2:
				this.moveBackward = !0
		}
	};
	this.mousemove = function(b) {
		if (!this.dragToLook || this.mouseStatus > 0) {
			var c = this.getContainerDimensions(),
				f = c.size[0] / 2,
				h = c.size[1] / 2;
			this.moveState.yawLeft = -(b.clientX - c.offset[0] - f) / f;
			this.moveState.pitchDown = (b.clientY -
				c.offset[1] - h) / h;
			this.updateRotationVector()
		}
	};
	this.mouseup = function(b) {
		b.preventDefault();
		b.stopPropagation();
		if (this.dragToLook) this.mouseStatus--, this.moveState.yawLeft = this.moveState.pitchDown = 0;
		else switch (b.button) {
			case 0:
				this.moveForward = !1;
				break;
			case 2:
				this.moveBackward = !1
		}
		this.updateRotationVector()
	};
	this.update = function() {
		var b = (new Date).getTime();
		if (this.lastUpdate == -1) this.lastUpdate = b;
		this.tdiff = (b - this.lastUpdate) / 1E3;
		this.lastUpdate = b;
		var b = this.tdiff * this.movementSpeed,
			c = this.tdiff *
			this.rollSpeed;
		this.translateX(this.moveVector.x * b);
		this.translateY(this.moveVector.y * b);
		this.translateZ(this.moveVector.z * b);
		this.tmpQuaternion.set(this.rotationVector.x * c, this.rotationVector.y * c, this.rotationVector.z * c, 1).normalize();
		this.quaternion.multiplySelf(this.tmpQuaternion);
		this.matrix.setPosition(this.position);
		this.matrix.setRotationFromQuaternion(this.quaternion);
		this.matrixWorldNeedsUpdate = !0;
		this.supr.update.call(this)
	};
	this.updateMovementVector = function() {
		var b = this.moveState.forward ||
			this.autoForward && !this.moveState.back ? 1 : 0;
		this.moveVector.x = -this.moveState.left + this.moveState.right;
		this.moveVector.y = -this.moveState.down + this.moveState.up;
		this.moveVector.z = -b + this.moveState.back
	};
	this.updateRotationVector = function() {
		this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
		this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
		this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft
	};
	this.getContainerDimensions = function() {
		return this.domElement !=
			document ? {
				size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
				offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
			} : {
				size: [window.innerWidth, window.innerHeight],
				offset: [0, 0]
			}
	};
	this.domElement.addEventListener("mousemove", c(this, this.mousemove), !1);
	this.domElement.addEventListener("mousedown", c(this, this.mousedown), !1);
	this.domElement.addEventListener("mouseup", c(this, this.mouseup), !1);
	window.addEventListener("keydown", c(this, this.keydown), !1);
	window.addEventListener("keyup", c(this,
		this.keyup), !1);
	this.updateMovementVector();
	this.updateRotationVector()
};
THREE.FlyCamera.prototype = new THREE.Camera;
THREE.FlyCamera.prototype.constructor = THREE.FlyCamera;
THREE.FlyCamera.prototype.supr = THREE.Camera.prototype;
THREE.RollCamera = function(b, c, d, e) {
	THREE.Camera.call(this, b, c, d, e);
	this.mouseLook = !0;
	this.autoForward = !1;
	this.rollSpeed = this.movementSpeed = this.lookSpeed = 1;
	this.constrainVertical = [-0.9, 0.9];
	this.domElement = document;
	this.matrixAutoUpdate = this.useTarget = !1;
	this.forward = new THREE.Vector3(0, 0, 1);
	this.roll = 0;
	this.lastUpdate = -1;
	this.delta = 0;
	var f = new THREE.Vector3,
		h = new THREE.Vector3,
		j = new THREE.Vector3,
		k = new THREE.Matrix4,
		m = !1,
		n = 1,
		o = 0,
		p = 0,
		t = 0,
		u = 0,
		v = 0,
		C = window.innerWidth / 2,
		E = window.innerHeight / 2;
	this.update =
		function() {
			var b = (new Date).getTime();
			if (this.lastUpdate == -1) this.lastUpdate = b;
			this.delta = (b - this.lastUpdate) / 1E3;
			this.lastUpdate = b;
			this.mouseLook && (b = this.delta * this.lookSpeed, this.rotateHorizontally(b * u), this.rotateVertically(b * v));
			b = this.delta * this.movementSpeed;
			this.translateZ(b * (o > 0 || this.autoForward && !(o < 0) ? 1 : o));
			this.translateX(b * p);
			this.translateY(b * t);
			m && (this.roll += this.rollSpeed * this.delta * n);
			if (this.forward.y > this.constrainVertical[1]) this.forward.y = this.constrainVertical[1], this.forward.normalize();
			else if (this.forward.y < this.constrainVertical[0]) this.forward.y = this.constrainVertical[0], this.forward.normalize();
			j.copy(this.forward);
			h.set(0, 1, 0);
			f.cross(h, j).normalize();
			h.cross(j, f).normalize();
			this.matrix.n11 = f.x;
			this.matrix.n12 = h.x;
			this.matrix.n13 = j.x;
			this.matrix.n21 = f.y;
			this.matrix.n22 = h.y;
			this.matrix.n23 = j.y;
			this.matrix.n31 = f.z;
			this.matrix.n32 = h.z;
			this.matrix.n33 = j.z;
			k.identity();
			k.n11 = Math.cos(this.roll);
			k.n12 = -Math.sin(this.roll);
			k.n21 = Math.sin(this.roll);
			k.n22 = Math.cos(this.roll);
			this.matrix.multiplySelf(k);
			this.matrixWorldNeedsUpdate = !0;
			this.matrix.n14 = this.position.x;
			this.matrix.n24 = this.position.y;
			this.matrix.n34 = this.position.z;
			this.supr.update.call(this)
		};
	this.translateX = function(b) {
		this.position.x += this.matrix.n11 * b;
		this.position.y += this.matrix.n21 * b;
		this.position.z += this.matrix.n31 * b
	};
	this.translateY = function(b) {
		this.position.x += this.matrix.n12 * b;
		this.position.y += this.matrix.n22 * b;
		this.position.z += this.matrix.n32 * b
	};
	this.translateZ = function(b) {
		this.position.x -= this.matrix.n13 * b;
		this.position.y -=
			this.matrix.n23 * b;
		this.position.z -= this.matrix.n33 * b
	};
	this.rotateHorizontally = function(b) {
		f.set(this.matrix.n11, this.matrix.n21, this.matrix.n31);
		f.multiplyScalar(b);
		this.forward.subSelf(f);
		this.forward.normalize()
	};
	this.rotateVertically = function(b) {
		h.set(this.matrix.n12, this.matrix.n22, this.matrix.n32);
		h.multiplyScalar(b);
		this.forward.addSelf(h);
		this.forward.normalize()
	};
	this.domElement.addEventListener("contextmenu", function(b) {
		b.preventDefault()
	}, !1);
	this.domElement.addEventListener("mousemove",
		function(b) {
			u = (b.clientX - C) / window.innerWidth;
			v = (b.clientY - E) / window.innerHeight
		}, !1);
	this.domElement.addEventListener("mousedown", function(b) {
		b.preventDefault();
		b.stopPropagation();
		switch (b.button) {
			case 0:
				o = 1;
				break;
			case 2:
				o = -1
		}
	}, !1);
	this.domElement.addEventListener("mouseup", function(b) {
		b.preventDefault();
		b.stopPropagation();
		switch (b.button) {
			case 0:
				o = 0;
				break;
			case 2:
				o = 0
		}
	}, !1);
	this.domElement.addEventListener("keydown", function(b) {
		switch (b.keyCode) {
			case 38:
			case 87:
				o = 1;
				break;
			case 37:
			case 65:
				p = -1;
				break;
			case 40:
			case 83:
				o = -1;
				break;
			case 39:
			case 68:
				p = 1;
				break;
			case 81:
				m = !0;
				n = 1;
				break;
			case 69:
				m = !0;
				n = -1;
				break;
			case 82:
				t = 1;
				break;
			case 70:
				t = -1
		}
	}, !1);
	this.domElement.addEventListener("keyup", function(b) {
		switch (b.keyCode) {
			case 38:
			case 87:
				o = 0;
				break;
			case 37:
			case 65:
				p = 0;
				break;
			case 40:
			case 83:
				o = 0;
				break;
			case 39:
			case 68:
				p = 0;
				break;
			case 81:
				m = !1;
				break;
			case 69:
				m = !1;
				break;
			case 82:
				t = 0;
				break;
			case 70:
				t = 0
		}
	}, !1)
};
THREE.RollCamera.prototype = new THREE.Camera;
THREE.RollCamera.prototype.constructor = THREE.RollCamera;
THREE.RollCamera.prototype.supr = THREE.Camera.prototype;
THREE.TrackballCamera = function(b) {
	function c(b, c) {
		return function() {
			c.apply(b, arguments)
		}
	}
	b = b || {};
	THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
	this.domElement = b.domElement || document;
	this.screen = b.screen || {
		width: window.innerWidth,
		height: window.innerHeight,
		offsetLeft: 0,
		offsetTop: 0
	};
	this.radius = b.radius || (this.screen.width + this.screen.height) / 4;
	this.rotateSpeed = b.rotateSpeed || 1;
	this.zoomSpeed = b.zoomSpeed || 1.2;
	this.panSpeed = b.panSpeed || 0.3;
	this.noZoom = b.noZoom || !1;
	this.noPan = b.noPan ||
		!1;
	this.staticMoving = b.staticMoving || !1;
	this.dynamicDampingFactor = b.dynamicDampingFactor || 0.2;
	this.minDistance = b.minDistance || 0;
	this.maxDistance = b.maxDistance || Infinity;
	this.keys = b.keys || [65, 83, 68];
	this.useTarget = !0;
	var d = !1,
		e = this.STATE.NONE,
		f = new THREE.Vector3,
		h = new THREE.Vector3,
		j = new THREE.Vector3,
		k = new THREE.Vector2,
		m = new THREE.Vector2,
		n = new THREE.Vector2,
		o = new THREE.Vector2;
	this.handleEvent = function(b) {
		if (typeof this[b.type] == "function") this[b.type](b)
	};
	this.getMouseOnScreen = function(b, c) {
		return new THREE.Vector2((b -
			this.screen.offsetLeft) / this.radius * 0.5, (c - this.screen.offsetTop) / this.radius * 0.5)
	};
	this.getMouseProjectionOnBall = function(b, c) {
		var d = new THREE.Vector3((b - this.screen.width * 0.5 - this.screen.offsetLeft) / this.radius, (this.screen.height * 0.5 + this.screen.offsetTop - c) / this.radius, 0),
			e = d.length();
		e > 1 ? d.normalize() : d.z = Math.sqrt(1 - e * e);
		f = this.position.clone().subSelf(this.target.position);
		e = this.up.clone().setLength(d.y);
		e.addSelf(this.up.clone().crossSelf(f).setLength(d.x));
		e.addSelf(f.setLength(d.z));
		return e
	};
	this.rotateCamera = function() {
		var b = Math.acos(h.dot(j) / h.length() / j.length());
		if (b) {
			var c = (new THREE.Vector3).cross(h, j).normalize(),
				d = new THREE.Quaternion;
			b *= this.rotateSpeed;
			d.setFromAxisAngle(c, -b);
			d.multiplyVector3(f);
			d.multiplyVector3(this.up);
			d.multiplyVector3(j);
			this.staticMoving ? h = j : (d.setFromAxisAngle(c, b * (this.dynamicDampingFactor - 1)), d.multiplyVector3(h))
		}
	};
	this.zoomCamera = function() {
		var b = 1 + (m.y - k.y) * this.zoomSpeed;
		b !== 1 && b > 0 && (f.multiplyScalar(b), this.staticMoving ? k = m : k.y += (m.y - k.y) * this.dynamicDampingFactor)
	};
	this.panCamera = function() {
		var b = o.clone().subSelf(n);
		if (b.lengthSq()) {
			b.multiplyScalar(f.length() * this.panSpeed);
			var c = f.clone().crossSelf(this.up).setLength(b.x);
			c.addSelf(this.up.clone().setLength(b.y));
			this.position.addSelf(c);
			this.target.position.addSelf(c);
			this.staticMoving ? n = o : n.addSelf(b.sub(o, n).multiplyScalar(this.dynamicDampingFactor))
		}
	};
	this.checkDistances = function() {
		if (!this.noZoom || !this.noPan) this.position.lengthSq() > this.maxDistance * this.maxDistance && this.position.setLength(this.maxDistance),
			f.lengthSq() < this.minDistance * this.minDistance && this.position.add(this.target.position, f.setLength(this.minDistance))
	};
	this.update = function(b, c, d) {
		f = this.position.clone().subSelf(this.target.position);
		this.rotateCamera();
		this.noZoom || this.zoomCamera();
		this.noPan || this.panCamera();
		this.position.add(this.target.position, f);
		this.checkDistances();
		this.supr.update.call(this, b, c, d)
	};
	this.domElement.addEventListener("contextmenu", function(b) {
		b.preventDefault()
	}, !1);
	this.domElement.addEventListener("mousemove",
		c(this, function(b) {
			d && (h = j = this.getMouseProjectionOnBall(b.clientX, b.clientY), k = m = this.getMouseOnScreen(b.clientX, b.clientY), n = o = this.getMouseOnScreen(b.clientX, b.clientY), d = !1);
			e !== this.STATE.NONE && (e === this.STATE.ROTATE ? j = this.getMouseProjectionOnBall(b.clientX, b.clientY) : e === this.STATE.ZOOM && !this.noZoom ? m = this.getMouseOnScreen(b.clientX, b.clientY) : e === this.STATE.PAN && !this.noPan && (o = this.getMouseOnScreen(b.clientX, b.clientY)))
		}), !1);
	this.domElement.addEventListener("mousedown", c(this, function(b) {
		b.preventDefault();
		b.stopPropagation();
		if (e === this.STATE.NONE) e = b.button, e === this.STATE.ROTATE ? h = j = this.getMouseProjectionOnBall(b.clientX, b.clientY) : e === this.STATE.ZOOM && !this.noZoom ? k = m = this.getMouseOnScreen(b.clientX, b.clientY) : this.noPan || (n = o = this.getMouseOnScreen(b.clientX, b.clientY))
	}), !1);
	this.domElement.addEventListener("mouseup", c(this, function(b) {
		b.preventDefault();
		b.stopPropagation();
		e = this.STATE.NONE
	}), !1);
	window.addEventListener("keydown", c(this, function(b) {
		if (e === this.STATE.NONE) {
			if (b.keyCode === this.keys[this.STATE.ROTATE]) e =
				this.STATE.ROTATE;
			else if (b.keyCode === this.keys[this.STATE.ZOOM] && !this.noZoom) e = this.STATE.ZOOM;
			else if (b.keyCode === this.keys[this.STATE.PAN] && !this.noPan) e = this.STATE.PAN;
			e !== this.STATE.NONE && (d = !0)
		}
	}), !1);
	window.addEventListener("keyup", c(this, function() {
		if (e !== this.STATE.NONE) e = this.STATE.NONE
	}), !1)
};
THREE.TrackballCamera.prototype = new THREE.Camera;
THREE.TrackballCamera.prototype.constructor = THREE.TrackballCamera;
THREE.TrackballCamera.prototype.supr = THREE.Camera.prototype;
THREE.TrackballCamera.prototype.STATE = {
	NONE: -1,
	ROTATE: 0,
	ZOOM: 1,
	PAN: 2
};
THREE.Cube = function(b, c, d, e, f, h, j, k, m) {
	function n(b, c, d, j, k, m, n, p) {
		var t, u, v = e || 1,
			C = f || 1,
			g = k / 2,
			Y = m / 2,
			O = o.vertices.length;
		if (b == "x" && c == "y" || b == "y" && c == "x") t = "z";
		else if (b == "x" && c == "z" || b == "z" && c == "x") t = "y", C = h || 1;
		else if (b == "z" && c == "y" || b == "y" && c == "z") t = "x", v = h || 1;
		var V = v + 1,
			L = C + 1;
		k /= v;
		var $ = m / C;
		for (u = 0; u < L; u++)
			for (m = 0; m < V; m++) {
				var T = new THREE.Vector3;
				T[b] = (m * k - g) * d;
				T[c] = (u * $ - Y) * j;
				T[t] = n;
				o.vertices.push(new THREE.Vertex(T))
			}
		for (u = 0; u < C; u++)
			for (m = 0; m < v; m++) o.faces.push(new THREE.Face4(m + V * u + O, m + V * (u +
				1) + O, m + 1 + V * (u + 1) + O, m + 1 + V * u + O, null, null, p)), o.faceVertexUvs[0].push([new THREE.UV(m / v, u / C), new THREE.UV(m / v, (u + 1) / C), new THREE.UV((m + 1) / v, (u + 1) / C), new THREE.UV((m + 1) / v, u / C)])
	}
	THREE.Geometry.call(this);
	var o = this,
		p = b / 2,
		t = c / 2,
		u = d / 2,
		k = k ? -1 : 1;
	if (j !== void 0)
		if (j instanceof Array) this.materials = j;
		else {
			this.materials = [];
			for (var v = 0; v < 6; v++) this.materials.push([j])
		}
	else this.materials = [];
	this.sides = {
		px: !0,
		nx: !0,
		py: !0,
		ny: !0,
		pz: !0,
		nz: !0
	};
	if (m != void 0)
		for (var C in m) this.sides[C] != void 0 && (this.sides[C] = m[C]);
	this.sides.px && n("z", "y", 1 * k, -1, d, c, -p, this.materials[0]);
	this.sides.nx && n("z", "y", -1 * k, -1, d, c, p, this.materials[1]);
	this.sides.py && n("x", "z", 1 * k, 1, b, d, t, this.materials[2]);
	this.sides.ny && n("x", "z", 1 * k, -1, b, d, -t, this.materials[3]);
	this.sides.pz && n("x", "y", 1 * k, -1, b, c, u, this.materials[4]);
	this.sides.nz && n("x", "y", -1 * k, -1, b, c, -u, this.materials[5]);
	(function() {
		for (var b = [], c = [], d = 0, e = o.vertices.length; d < e; d++) {
			for (var f = o.vertices[d], h = !1, j = 0, k = b.length; j < k; j++) {
				var m = b[j];
				if (f.position.x == m.position.x &&
					f.position.y == m.position.y && f.position.z == m.position.z) {
					c[d] = j;
					h = !0;
					break
				}
			}
			if (!h) c[d] = b.length, b.push(new THREE.Vertex(f.position.clone()))
		}
		d = 0;
		for (e = o.faces.length; d < e; d++) f = o.faces[d], f.a = c[f.a], f.b = c[f.b], f.c = c[f.c], f.d = c[f.d];
		o.vertices = b
	})();
	this.computeCentroids();
	this.computeFaceNormals()
};
THREE.Cube.prototype = new THREE.Geometry;
THREE.Cube.prototype.constructor = THREE.Cube;
THREE.Cylinder = function(b, c, d, e, f, h) {
	function j(b, c, d) {
		k.vertices.push(new THREE.Vertex(new THREE.Vector3(b, c, d)))
	}
	THREE.Geometry.call(this);
	var k = this,
		m, n = Math.PI * 2,
		o = e / 2;
	for (m = 0; m < b; m++) j(Math.sin(n * m / b) * c, Math.cos(n * m / b) * c, -o);
	for (m = 0; m < b; m++) j(Math.sin(n * m / b) * d, Math.cos(n * m / b) * d, o);
	for (m = 0; m < b; m++) k.faces.push(new THREE.Face4(m, m + b, b + (m + 1) % b, (m + 1) % b));
	if (d > 0) {
		j(0, 0, -o - (h || 0));
		for (m = b; m < b + b / 2; m++) k.faces.push(new THREE.Face4(2 * b, (2 * m - 2 * b) % b, (2 * m - 2 * b + 1) % b, (2 * m - 2 * b + 2) % b))
	}
	if (c > 0) {
		j(0, 0, o + (f || 0));
		for (m = b + b / 2; m < 2 * b; m++) k.faces.push(new THREE.Face4(2 * b + 1, (2 * m - 2 * b + 2) % b + b, (2 * m - 2 * b + 1) % b + b, (2 * m - 2 * b) % b + b))
	}
	m = 0;
	for (b = this.faces.length; m < b; m++) {
		var c = [],
			d = this.faces[m],
			f = this.vertices[d.a],
			h = this.vertices[d.b],
			o = this.vertices[d.c],
			p = this.vertices[d.d];
		c.push(new THREE.UV(0.5 + Math.atan2(f.position.x, f.position.y) / n, 0.5 + f.position.z / e));
		c.push(new THREE.UV(0.5 + Math.atan2(h.position.x, h.position.y) / n, 0.5 + h.position.z / e));
		c.push(new THREE.UV(0.5 + Math.atan2(o.position.x, o.position.y) / n, 0.5 + o.position.z /
			e));
		d instanceof THREE.Face4 && c.push(new THREE.UV(0.5 + Math.atan2(p.position.x, p.position.y) / n, 0.5 + p.position.z / e));
		this.faceVertexUvs[0].push(c)
	}
	this.computeCentroids();
	this.computeFaceNormals()
};
THREE.Cylinder.prototype = new THREE.Geometry;
THREE.Cylinder.prototype.constructor = THREE.Cylinder;
THREE.Icosahedron = function(b) {
	function c(b, c, d) {
		var e = Math.sqrt(b * b + c * c + d * d);
		return f.vertices.push(new THREE.Vertex(new THREE.Vector3(b / e, c / e, d / e))) - 1
	}

	function d(b, c, d, e) {
		e.faces.push(new THREE.Face3(b, c, d))
	}

	function e(b, d) {
		var e = f.vertices[b].position,
			h = f.vertices[d].position;
		return c((e.x + h.x) / 2, (e.y + h.y) / 2, (e.z + h.z) / 2)
	}
	var f = this,
		h = new THREE.Geometry,
		j;
	this.subdivisions = b || 0;
	THREE.Geometry.call(this);
	b = (1 + Math.sqrt(5)) / 2;
	c(-1, b, 0);
	c(1, b, 0);
	c(-1, -b, 0);
	c(1, -b, 0);
	c(0, -1, b);
	c(0, 1, b);
	c(0, -1, -b);
	c(0,
		1, -b);
	c(b, 0, -1);
	c(b, 0, 1);
	c(-b, 0, -1);
	c(-b, 0, 1);
	d(0, 11, 5, h);
	d(0, 5, 1, h);
	d(0, 1, 7, h);
	d(0, 7, 10, h);
	d(0, 10, 11, h);
	d(1, 5, 9, h);
	d(5, 11, 4, h);
	d(11, 10, 2, h);
	d(10, 7, 6, h);
	d(7, 1, 8, h);
	d(3, 9, 4, h);
	d(3, 4, 2, h);
	d(3, 2, 6, h);
	d(3, 6, 8, h);
	d(3, 8, 9, h);
	d(4, 9, 5, h);
	d(2, 4, 11, h);
	d(6, 2, 10, h);
	d(8, 6, 7, h);
	d(9, 8, 1, h);
	for (b = 0; b < this.subdivisions; b++) {
		j = new THREE.Geometry;
		for (var k in h.faces) {
			var m = e(h.faces[k].a, h.faces[k].b),
				n = e(h.faces[k].b, h.faces[k].c),
				o = e(h.faces[k].c, h.faces[k].a);
			d(h.faces[k].a, m, o, j);
			d(h.faces[k].b, n, m, j);
			d(h.faces[k].c,
				o, n, j);
			d(m, n, o, j)
		}
		h.faces = j.faces
	}
	f.faces = h.faces;
	delete h;
	delete j;
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.Icosahedron.prototype = new THREE.Geometry;
THREE.Icosahedron.prototype.constructor = THREE.Icosahedron;
THREE.Lathe = function(b, c, d) {
	THREE.Geometry.call(this);
	this.steps = c || 12;
	this.angle = d || 2 * Math.PI;
	for (var c = this.angle / this.steps, d = [], e = [], f = [], h = [], j = (new THREE.Matrix4).setRotationZ(c), k = 0; k < b.length; k++) this.vertices.push(new THREE.Vertex(b[k])), d[k] = b[k].clone(), e[k] = this.vertices.length - 1;
	for (var m = 0; m <= this.angle + 0.001; m += c) {
		for (k = 0; k < d.length; k++) m < this.angle ? (d[k] = j.multiplyVector3(d[k].clone()), this.vertices.push(new THREE.Vertex(d[k])), f[k] = this.vertices.length - 1) : f = h;
		m == 0 && (h = e);
		for (k = 0; k <
			e.length - 1; k++) this.faces.push(new THREE.Face4(f[k], f[k + 1], e[k + 1], e[k])), this.faceVertexUvs[0].push([new THREE.UV(1 - m / this.angle, k / b.length), new THREE.UV(1 - m / this.angle, (k + 1) / b.length), new THREE.UV(1 - (m - c) / this.angle, (k + 1) / b.length), new THREE.UV(1 - (m - c) / this.angle, k / b.length)]);
		e = f;
		f = []
	}
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.Lathe.prototype = new THREE.Geometry;
THREE.Lathe.prototype.constructor = THREE.Lathe;
THREE.Plane = function(b, c, d, e) {
	THREE.Geometry.call(this);
	var f, h = b / 2,
		j = c / 2,
		d = d || 1,
		e = e || 1,
		k = d + 1,
		m = e + 1;
	b /= d;
	var n = c / e;
	for (f = 0; f < m; f++)
		for (c = 0; c < k; c++) this.vertices.push(new THREE.Vertex(new THREE.Vector3(c * b - h, -(f * n - j), 0)));
	for (f = 0; f < e; f++)
		for (c = 0; c < d; c++) this.faces.push(new THREE.Face4(c + k * f, c + k * (f + 1), c + 1 + k * (f + 1), c + 1 + k * f)), this.faceVertexUvs[0].push([new THREE.UV(c / d, f / e), new THREE.UV(c / d, (f + 1) / e), new THREE.UV((c + 1) / d, (f + 1) / e), new THREE.UV((c + 1) / d, f / e)]);
	this.computeCentroids();
	this.computeFaceNormals()
};
THREE.Plane.prototype = new THREE.Geometry;
THREE.Plane.prototype.constructor = THREE.Plane;
THREE.Sphere = function(b, c, d) {
	THREE.Geometry.call(this);
	for (var e, f = Math.PI, h = Math.max(3, c || 8), j = Math.max(2, d || 6), c = [], d = 0; d < j + 1; d++) {
		e = d / j;
		var k = b * Math.cos(e * f),
			m = b * Math.sin(e * f),
			n = [],
			o = 0;
		for (e = 0; e < h; e++) {
			var p = 2 * e / h,
				t = m * Math.sin(p * f),
				p = m * Math.cos(p * f);
			(d == 0 || d == j) && e > 0 || (o = this.vertices.push(new THREE.Vertex(new THREE.Vector3(p, k, t))) - 1);
			n.push(o)
		}
		c.push(n)
	}
	for (var u, v, C, f = c.length, d = 0; d < f; d++)
		if (h = c[d].length, d > 0)
			for (e = 0; e < h; e++) {
				n = e == h - 1;
				j = c[d][n ? 0 : e + 1];
				k = c[d][n ? h - 1 : e];
				m = c[d - 1][n ? h - 1 : e];
				n = c[d -
					1][n ? 0 : e + 1];
				t = d / (f - 1);
				u = (d - 1) / (f - 1);
				v = (e + 1) / h;
				var p = e / h,
					o = new THREE.UV(1 - v, t),
					t = new THREE.UV(1 - p, t),
					p = new THREE.UV(1 - p, u),
					E = new THREE.UV(1 - v, u);
				d < c.length - 1 && (u = this.vertices[j].position.clone(), v = this.vertices[k].position.clone(), C = this.vertices[m].position.clone(), u.normalize(), v.normalize(), C.normalize(), this.faces.push(new THREE.Face3(j, k, m, [new THREE.Vector3(u.x, u.y, u.z), new THREE.Vector3(v.x, v.y, v.z), new THREE.Vector3(C.x, C.y, C.z)])), this.faceVertexUvs[0].push([o, t, p]));
				d > 1 && (u = this.vertices[j].position.clone(),
					v = this.vertices[m].position.clone(), C = this.vertices[n].position.clone(), u.normalize(), v.normalize(), C.normalize(), this.faces.push(new THREE.Face3(j, m, n, [new THREE.Vector3(u.x, u.y, u.z), new THREE.Vector3(v.x, v.y, v.z), new THREE.Vector3(C.x, C.y, C.z)])), this.faceVertexUvs[0].push([o, p, E]))
			}
		this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals();
	this.boundingSphere = {
		radius: b
	}
};
THREE.Sphere.prototype = new THREE.Geometry;
THREE.Sphere.prototype.constructor = THREE.Sphere;
THREE.Torus = function(b, c, d, e) {
	THREE.Geometry.call(this);
	this.radius = b || 100;
	this.tube = c || 40;
	this.segmentsR = d || 8;
	this.segmentsT = e || 6;
	b = [];
	for (c = 0; c <= this.segmentsR; ++c)
		for (d = 0; d <= this.segmentsT; ++d) {
			var e = d / this.segmentsT * 2 * Math.PI,
				f = c / this.segmentsR * 2 * Math.PI;
			this.vertices.push(new THREE.Vertex(new THREE.Vector3((this.radius + this.tube * Math.cos(f)) * Math.cos(e), (this.radius + this.tube * Math.cos(f)) * Math.sin(e), this.tube * Math.sin(f))));
			b.push([d / this.segmentsT, 1 - c / this.segmentsR])
		}
	for (c = 1; c <= this.segmentsR; ++c)
		for (d =
			1; d <= this.segmentsT; ++d) {
			var e = (this.segmentsT + 1) * c + d,
				f = (this.segmentsT + 1) * c + d - 1,
				h = (this.segmentsT + 1) * (c - 1) + d - 1,
				j = (this.segmentsT + 1) * (c - 1) + d;
			this.faces.push(new THREE.Face4(e, f, h, j));
			this.faceVertexUvs[0].push([new THREE.UV(b[e][0], b[e][1]), new THREE.UV(b[f][0], b[f][1]), new THREE.UV(b[h][0], b[h][1]), new THREE.UV(b[j][0], b[j][1])])
		}
	delete b;
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.Torus.prototype = new THREE.Geometry;
THREE.Torus.prototype.constructor = THREE.Torus;
THREE.TorusKnot = function(b, c, d, e, f, h, j) {
	function k(b, c, d, e, f, h) {
		c = d / e * b;
		d = Math.cos(c);
		return new THREE.Vector3(f * (2 + d) * 0.5 * Math.cos(b), f * (2 + d) * Math.sin(b) * 0.5, h * f * Math.sin(c) * 0.5)
	}
	THREE.Geometry.call(this);
	this.radius = b || 200;
	this.tube = c || 40;
	this.segmentsR = d || 64;
	this.segmentsT = e || 8;
	this.p = f || 2;
	this.q = h || 3;
	this.heightScale = j || 1;
	this.grid = Array(this.segmentsR);
	d = new THREE.Vector3;
	e = new THREE.Vector3;
	h = new THREE.Vector3;
	for (b = 0; b < this.segmentsR; ++b) {
		this.grid[b] = Array(this.segmentsT);
		for (c = 0; c < this.segmentsT; ++c) {
			var m =
				b / this.segmentsR * 2 * this.p * Math.PI,
				j = c / this.segmentsT * 2 * Math.PI,
				f = k(m, j, this.q, this.p, this.radius, this.heightScale),
				m = k(m + 0.01, j, this.q, this.p, this.radius, this.heightScale);
			d.x = m.x - f.x;
			d.y = m.y - f.y;
			d.z = m.z - f.z;
			e.x = m.x + f.x;
			e.y = m.y + f.y;
			e.z = m.z + f.z;
			h.cross(d, e);
			e.cross(h, d);
			h.normalize();
			e.normalize();
			m = -this.tube * Math.cos(j);
			j = this.tube * Math.sin(j);
			f.x += m * e.x + j * h.x;
			f.y += m * e.y + j * h.y;
			f.z += m * e.z + j * h.z;
			this.grid[b][c] = this.vertices.push(new THREE.Vertex(new THREE.Vector3(f.x, f.y, f.z))) - 1
		}
	}
	for (b = 0; b < this.segmentsR; ++b)
		for (c =
			0; c < this.segmentsT; ++c) {
			var e = (b + 1) % this.segmentsR,
				h = (c + 1) % this.segmentsT,
				f = this.grid[b][c],
				d = this.grid[e][c],
				e = this.grid[e][h],
				h = this.grid[b][h],
				j = new THREE.UV(b / this.segmentsR, c / this.segmentsT),
				m = new THREE.UV((b + 1) / this.segmentsR, c / this.segmentsT),
				n = new THREE.UV((b + 1) / this.segmentsR, (c + 1) / this.segmentsT),
				o = new THREE.UV(b / this.segmentsR, (c + 1) / this.segmentsT);
			this.faces.push(new THREE.Face4(f, d, e, h));
			this.faceVertexUvs[0].push([j, m, n, o])
		}
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.TorusKnot.prototype = new THREE.Geometry;
THREE.TorusKnot.prototype.constructor = THREE.TorusKnot;
THREE.Loader = function(b) {
	this.statusDomElement = (this.showStatus = b) ? THREE.Loader.prototype.addStatusElement() : null;
	this.onLoadStart = function() {};
	this.onLoadProgress = function() {};
	this.onLoadComplete = function() {}
};
THREE.Loader.prototype = {
	addStatusElement: function() {
		var b = document.createElement("div");
		b.style.position = "absolute";
		b.style.right = "0px";
		b.style.top = "0px";
		b.style.fontSize = "0.8em";
		b.style.textAlign = "left";
		b.style.background = "rgba(0,0,0,0.25)";
		b.style.color = "#fff";
		b.style.width = "120px";
		b.style.padding = "0.5em 0.5em 0.5em 0.5em";
		b.style.zIndex = 1E3;
		b.innerHTML = "Loading ...";
		return b
	},
	updateProgress: function(b) {
		var c = "Loaded ";
		c += b.total ? (100 * b.loaded / b.total).toFixed(0) + "%" : (b.loaded / 1E3).toFixed(2) + " KB";
		this.statusDomElement.innerHTML = c
	},
	extractUrlbase: function(b) {
		b = b.split("/");
		b.pop();
		return b.join("/")
	},
	init_materials: function(b, c, d) {
		b.materials = [];
		for (var e = 0; e < c.length; ++e) b.materials[e] = [THREE.Loader.prototype.createMaterial(c[e], d)]
	},
	createMaterial: function(b, c) {
		function d(b) {
			b = Math.log(b) / Math.LN2;
			return Math.floor(b) == b
		}

		function e(b, c) {
			var e = new Image;
			e.onload = function() {
				if (!d(this.width) || !d(this.height)) {
					var c = Math.pow(2, Math.round(Math.log(this.width) / Math.LN2)),
						e = Math.pow(2, Math.round(Math.log(this.height) /
							Math.LN2));
					b.image.width = c;
					b.image.height = e;
					b.image.getContext("2d").drawImage(this, 0, 0, c, e)
				} else b.image = this;
				b.needsUpdate = !0
			};
			e.src = c
		}
		var f, h, j;
		f = "MeshLambertMaterial";
		h = {
			color: 15658734,
			opacity: 1,
			map: null,
			lightMap: null,
			wireframe: b.wireframe
		};
		b.shading && (b.shading == "Phong" ? f = "MeshPhongMaterial" : b.shading == "Basic" && (f = "MeshBasicMaterial"));
		if (b.blending)
			if (b.blending == "Additive") h.blending = THREE.AdditiveBlending;
			else if (b.blending == "Subtractive") h.blending = THREE.SubtractiveBlending;
		else if (b.blending ==
			"Multiply") h.blending = THREE.MultiplyBlending;
		if (b.transparent !== void 0 || b.opacity < 1) h.transparent = b.transparent;
		if (b.depthTest !== void 0) h.depthTest = b.depthTest;
		if (b.vertexColors !== void 0)
			if (b.vertexColors == "face") h.vertexColors = THREE.FaceColors;
			else if (b.vertexColors) h.vertexColors = THREE.VertexColors;
		if (b.mapDiffuse && c) j = document.createElement("canvas"), h.map = new THREE.Texture(j), h.map.sourceFile = b.mapDiffuse, e(h.map, c + "/" + b.mapDiffuse);
		else if (b.colorDiffuse) j = (b.colorDiffuse[0] * 255 << 16) + (b.colorDiffuse[1] *
			255 << 8) + b.colorDiffuse[2] * 255, h.color = j, h.opacity = b.transparency;
		else if (b.DbgColor) h.color = b.DbgColor;
		if (b.mapLightmap && c) j = document.createElement("canvas"), h.lightMap = new THREE.Texture(j), h.lightMap.sourceFile = b.mapLightmap, e(h.lightMap, c + "/" + b.mapLightmap);
		return new THREE[f](h)
	}
};
THREE.JSONLoader = function(b) {
	THREE.Loader.call(this, b)
};
THREE.JSONLoader.prototype = new THREE.Loader;
THREE.JSONLoader.prototype.constructor = THREE.JSONLoader;
THREE.JSONLoader.prototype.supr = THREE.Loader.prototype;
THREE.JSONLoader.prototype.load = function(b) {
	var c = this,
		d = b.model,
		e = b.callback,
		f = b.texture_path ? b.texture_path : this.extractUrlbase(d),
		b = new Worker(d);
	b.onmessage = function(b) {
		c.createModel(b.data, e, f);
		c.onLoadComplete()
	};
	this.onLoadStart();
	b.postMessage((new Date).getTime())
};
THREE.JSONLoader.prototype.createModel = function(b, c, d) {
	var e = new THREE.Geometry,
		f = b.scale !== void 0 ? 1 / b.scale : 1;
	this.init_materials(e, b.materials, d);
	(function(c) {
		if (b.version === void 0 || b.version != 2) console.error("Deprecated file format.");
		else {
			var d, f, m, n, o, p, t, u, v, C, E, y, D, x, I = b.faces;
			p = b.vertices;
			var A = b.normals,
				z = b.colors,
				S = 0;
			for (d = 0; d < b.uvs.length; d++) b.uvs[d].length && S++;
			for (d = 0; d < S; d++) e.faceUvs[d] = [], e.faceVertexUvs[d] = [];
			n = 0;
			for (o = p.length; n < o;) t = new THREE.Vertex, t.position.x = p[n++] * c, t.position.y =
				p[n++] * c, t.position.z = p[n++] * c, e.vertices.push(t);
			n = 0;
			for (o = I.length; n < o;) {
				c = I[n++];
				p = c & 1;
				m = c & 2;
				d = c & 4;
				f = c & 8;
				u = c & 16;
				t = c & 32;
				C = c & 64;
				c &= 128;
				p ? (E = new THREE.Face4, E.a = I[n++], E.b = I[n++], E.c = I[n++], E.d = I[n++], p = 4) : (E = new THREE.Face3, E.a = I[n++], E.b = I[n++], E.c = I[n++], p = 3);
				if (m) m = I[n++], E.materials = e.materials[m];
				m = e.faces.length;
				if (d)
					for (d = 0; d < S; d++) y = b.uvs[d], v = I[n++], x = y[v * 2], v = y[v * 2 + 1], e.faceUvs[d][m] = new THREE.UV(x, v);
				if (f)
					for (d = 0; d < S; d++) {
						y = b.uvs[d];
						D = [];
						for (f = 0; f < p; f++) v = I[n++], x = y[v * 2], v = y[v * 2 + 1], D[f] =
							new THREE.UV(x, v);
						e.faceVertexUvs[d][m] = D
					}
				if (u) u = I[n++] * 3, f = new THREE.Vector3, f.x = A[u++], f.y = A[u++], f.z = A[u], E.normal = f;
				if (t)
					for (d = 0; d < p; d++) u = I[n++] * 3, f = new THREE.Vector3, f.x = A[u++], f.y = A[u++], f.z = A[u], E.vertexNormals.push(f);
				if (C) t = I[n++], t = new THREE.Color(z[t]), E.color = t;
				if (c)
					for (d = 0; d < p; d++) t = I[n++], t = new THREE.Color(z[t]), E.vertexColors.push(t);
				e.faces.push(E)
			}
		}
	})(f);
	(function() {
		var c, d, f, m;
		if (b.skinWeights) {
			c = 0;
			for (d = b.skinWeights.length; c < d; c += 2) f = b.skinWeights[c], m = b.skinWeights[c + 1], e.skinWeights.push(new THREE.Vector4(f,
				m, 0, 0))
		}
		if (b.skinIndices) {
			c = 0;
			for (d = b.skinIndices.length; c < d; c += 2) f = b.skinIndices[c], m = b.skinIndices[c + 1], e.skinIndices.push(new THREE.Vector4(f, m, 0, 0))
		}
		e.bones = b.bones;
		e.animation = b.animation
	})();
	(function(c) {
		if (b.morphTargets !== void 0) {
			var d, f, m, n, o, p, t, u, v;
			d = 0;
			for (f = b.morphTargets.length; d < f; d++) {
				e.morphTargets[d] = {};
				e.morphTargets[d].name = b.morphTargets[d].name;
				e.morphTargets[d].vertices = [];
				u = e.morphTargets[d].vertices;
				v = b.morphTargets[d].vertices;
				m = 0;
				for (n = v.length; m < n; m += 3) o = v[m] * c, p = v[m + 1] *
					c, t = v[m + 2] * c, u.push(new THREE.Vertex(new THREE.Vector3(o, p, t)))
			}
		}
		if (b.morphColors !== void 0) {
			d = 0;
			for (f = b.morphColors.length; d < f; d++) {
				e.morphColors[d] = {};
				e.morphColors[d].name = b.morphColors[d].name;
				e.morphColors[d].colors = [];
				n = e.morphColors[d].colors;
				o = b.morphColors[d].colors;
				c = 0;
				for (m = o.length; c < m; c += 3) p = new THREE.Color(16755200), p.setRGB(o[c], o[c + 1], o[c + 2]), n.push(p)
			}
		}
	})(f);
	(function() {
		if (b.edges !== void 0) {
			var c, d, f;
			for (c = 0; c < b.edges.length; c += 2) d = b.edges[c], f = b.edges[c + 1], e.edges.push(new THREE.Edge(e.vertices[d],
				e.vertices[f], d, f))
		}
	})();
	e.computeCentroids();
	e.computeFaceNormals();
	c(e)
};
THREE.BinaryLoader = function(b) {
	THREE.Loader.call(this, b)
};
THREE.BinaryLoader.prototype = new THREE.Loader;
THREE.BinaryLoader.prototype.constructor = THREE.BinaryLoader;
THREE.BinaryLoader.prototype.supr = THREE.Loader.prototype;
THREE.BinaryLoader.prototype = {
	load: function(b) {
		var c = b.model,
			d = b.callback,
			e = b.texture_path ? b.texture_path : THREE.Loader.prototype.extractUrlbase(c),
			f = b.bin_path ? b.bin_path : THREE.Loader.prototype.extractUrlbase(c),
			b = (new Date).getTime(),
			c = new Worker(c),
			h = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
		c.onmessage = function(b) {
			THREE.BinaryLoader.prototype.loadAjaxBuffers(b.data.buffers, b.data.materials, d, f, e, h)
		};
		c.onerror = function(b) {
			alert("worker.onerror: " + b.message + "\n" + b.data);
			b.preventDefault()
		};
		c.postMessage(b)
	},
	loadAjaxBuffers: function(b, c, d, e, f, h) {
		var j = new XMLHttpRequest,
			k = e + "/" + b,
			m = 0;
		j.onreadystatechange = function() {
			j.readyState == 4 ? j.status == 200 || j.status == 0 ? THREE.BinaryLoader.prototype.createBinModel(j.responseText, d, f, c) : alert("Couldn't load [" + k + "] [" + j.status + "]") : j.readyState == 3 ? h && (m == 0 && (m = j.getResponseHeader("Content-Length")), h({
				total: m,
				loaded: j.responseText.length
			})) : j.readyState == 2 && (m = j.getResponseHeader("Content-Length"))
		};
		j.open("GET", k, !0);
		j.overrideMimeType("text/plain; charset=x-user-defined");
		j.setRequestHeader("Content-Type", "text/plain");
		j.send(null)
	},
	createBinModel: function(b, c, d, e) {
		var f = function(c) {
			function d(b, c) {
				var e = o(b, c),
					f = o(b, c + 1),
					g = o(b, c + 2),
					h = o(b, c + 3),
					j = (h << 1 & 255 | g >> 7) - 127;
				e |= (g & 127) << 16 | f << 8;
				if (e == 0 && j == -127) return 0;
				return (1 - 2 * (h >> 7)) * (1 + e * Math.pow(2, -23)) * Math.pow(2, j)
			}

			function f(b, c) {
				var d = o(b, c),
					e = o(b, c + 1),
					g = o(b, c + 2);
				return (o(b, c + 3) << 24) + (g << 16) + (e << 8) + d
			}

			function m(b, c) {
				var d = o(b, c);
				return (o(b, c + 1) << 8) + d
			}

			function n(b, c) {
				var d = o(b, c);
				return d > 127 ? d - 256 : d
			}

			function o(b,
				c) {
				return b.charCodeAt(c) & 255
			}

			function p(c) {
				var d, e, g;
				d = f(b, c);
				e = f(b, c + z);
				g = f(b, c + S);
				c = m(b, c + G);
				THREE.BinaryLoader.prototype.f3(y, d, e, g, c)
			}

			function t(c) {
				var d, e, g, h, j, n;
				d = f(b, c);
				e = f(b, c + z);
				g = f(b, c + S);
				h = m(b, c + G);
				j = f(b, c + M);
				n = f(b, c + F);
				c = f(b, c + N);
				THREE.BinaryLoader.prototype.f3n(y, I, d, e, g, h, j, n, c)
			}

			function u(c) {
				var d, e, h, j;
				d = f(b, c);
				e = f(b, c + g);
				h = f(b, c + Y);
				j = f(b, c + O);
				c = m(b, c + V);
				THREE.BinaryLoader.prototype.f4(y, d, e, h, j, c)
			}

			function v(c) {
				var d, e, h, j, n, o, p, t;
				d = f(b, c);
				e = f(b, c + g);
				h = f(b, c + Y);
				j = f(b, c + O);
				n = m(b,
					c + V);
				o = f(b, c + L);
				p = f(b, c + $);
				t = f(b, c + T);
				c = f(b, c + Q);
				THREE.BinaryLoader.prototype.f4n(y, I, d, e, h, j, n, o, p, t, c)
			}

			function C(c) {
				var d, e;
				d = f(b, c);
				e = f(b, c + fa);
				c = f(b, c + U);
				THREE.BinaryLoader.prototype.uv3(y.faceVertexUvs[0], A[d * 2], A[d * 2 + 1], A[e * 2], A[e * 2 + 1], A[c * 2], A[c * 2 + 1])
			}

			function E(c) {
				var d, e, g;
				d = f(b, c);
				e = f(b, c + ka);
				g = f(b, c + ga);
				c = f(b, c + ca);
				THREE.BinaryLoader.prototype.uv4(y.faceVertexUvs[0], A[d * 2], A[d * 2 + 1], A[e * 2], A[e * 2 + 1], A[g * 2], A[g * 2 + 1], A[c * 2], A[c * 2 + 1])
			}
			var y = this,
				D = 0,
				x, I = [],
				A = [],
				z, S, G, M, F, N, g, Y, O, V, L, $, T, Q,
				fa, U, ka, ga, ca, aa, R, P, W, X, ea;
			THREE.Geometry.call(this);
			THREE.Loader.prototype.init_materials(y, e, c);
			x = {
				signature: b.substr(D, 8),
				header_bytes: o(b, D + 8),
				vertex_coordinate_bytes: o(b, D + 9),
				normal_coordinate_bytes: o(b, D + 10),
				uv_coordinate_bytes: o(b, D + 11),
				vertex_index_bytes: o(b, D + 12),
				normal_index_bytes: o(b, D + 13),
				uv_index_bytes: o(b, D + 14),
				material_index_bytes: o(b, D + 15),
				nvertices: f(b, D + 16),
				nnormals: f(b, D + 16 + 4),
				nuvs: f(b, D + 16 + 8),
				ntri_flat: f(b, D + 16 + 12),
				ntri_smooth: f(b, D + 16 + 16),
				ntri_flat_uv: f(b, D + 16 + 20),
				ntri_smooth_uv: f(b,
					D + 16 + 24),
				nquad_flat: f(b, D + 16 + 28),
				nquad_smooth: f(b, D + 16 + 32),
				nquad_flat_uv: f(b, D + 16 + 36),
				nquad_smooth_uv: f(b, D + 16 + 40)
			};
			D += x.header_bytes;
			z = x.vertex_index_bytes;
			S = x.vertex_index_bytes * 2;
			G = x.vertex_index_bytes * 3;
			M = x.vertex_index_bytes * 3 + x.material_index_bytes;
			F = x.vertex_index_bytes * 3 + x.material_index_bytes + x.normal_index_bytes;
			N = x.vertex_index_bytes * 3 + x.material_index_bytes + x.normal_index_bytes * 2;
			g = x.vertex_index_bytes;
			Y = x.vertex_index_bytes * 2;
			O = x.vertex_index_bytes * 3;
			V = x.vertex_index_bytes * 4;
			L = x.vertex_index_bytes *
				4 + x.material_index_bytes;
			$ = x.vertex_index_bytes * 4 + x.material_index_bytes + x.normal_index_bytes;
			T = x.vertex_index_bytes * 4 + x.material_index_bytes + x.normal_index_bytes * 2;
			Q = x.vertex_index_bytes * 4 + x.material_index_bytes + x.normal_index_bytes * 3;
			fa = x.uv_index_bytes;
			U = x.uv_index_bytes * 2;
			ka = x.uv_index_bytes;
			ga = x.uv_index_bytes * 2;
			ca = x.uv_index_bytes * 3;
			c = x.vertex_index_bytes * 3 + x.material_index_bytes;
			ea = x.vertex_index_bytes * 4 + x.material_index_bytes;
			aa = x.ntri_flat * c;
			R = x.ntri_smooth * (c + x.normal_index_bytes * 3);
			P = x.ntri_flat_uv *
				(c + x.uv_index_bytes * 3);
			W = x.ntri_smooth_uv * (c + x.normal_index_bytes * 3 + x.uv_index_bytes * 3);
			X = x.nquad_flat * ea;
			c = x.nquad_smooth * (ea + x.normal_index_bytes * 4);
			ea = x.nquad_flat_uv * (ea + x.uv_index_bytes * 4);
			D += function(c) {
				for (var e, f, g, h = x.vertex_coordinate_bytes * 3, k = c + x.nvertices * h; c < k; c += h) e = d(b, c), f = d(b, c + x.vertex_coordinate_bytes), g = d(b, c + x.vertex_coordinate_bytes * 2), THREE.BinaryLoader.prototype.v(y, e, f, g);
				return x.nvertices * h
			}(D);
			D += function(c) {
				for (var d, e, f, g = x.normal_coordinate_bytes * 3, h = c + x.nnormals * g; c <
					h; c += g) d = n(b, c), e = n(b, c + x.normal_coordinate_bytes), f = n(b, c + x.normal_coordinate_bytes * 2), I.push(d / 127, e / 127, f / 127);
				return x.nnormals * g
			}(D);
			D += function(c) {
				for (var e, f, g = x.uv_coordinate_bytes * 2, h = c + x.nuvs * g; c < h; c += g) e = d(b, c), f = d(b, c + x.uv_coordinate_bytes), A.push(e, f);
				return x.nuvs * g
			}(D);
			aa = D + aa;
			R = aa + R;
			P = R + P;
			W = P + W;
			X = W + X;
			c = X + c;
			ea = c + ea;
			(function(b) {
				var c, d = x.vertex_index_bytes * 3 + x.material_index_bytes,
					e = d + x.uv_index_bytes * 3,
					f = b + x.ntri_flat_uv * e;
				for (c = b; c < f; c += e) p(c), C(c + d);
				return f - b
			})(R);
			(function(b) {
				var c,
					d = x.vertex_index_bytes * 3 + x.material_index_bytes + x.normal_index_bytes * 3,
					e = d + x.uv_index_bytes * 3,
					f = b + x.ntri_smooth_uv * e;
				for (c = b; c < f; c += e) t(c), C(c + d);
				return f - b
			})(P);
			(function(b) {
				var c, d = x.vertex_index_bytes * 4 + x.material_index_bytes,
					e = d + x.uv_index_bytes * 4,
					f = b + x.nquad_flat_uv * e;
				for (c = b; c < f; c += e) u(c), E(c + d);
				return f - b
			})(c);
			(function(b) {
				var c, d = x.vertex_index_bytes * 4 + x.material_index_bytes + x.normal_index_bytes * 4,
					e = d + x.uv_index_bytes * 4,
					f = b + x.nquad_smooth_uv * e;
				for (c = b; c < f; c += e) v(c), E(c + d);
				return f - b
			})(ea);
			(function(b) {
				var c, d = x.vertex_index_bytes * 3 + x.material_index_bytes,
					e = b + x.ntri_flat * d;
				for (c = b; c < e; c += d) p(c);
				return e - b
			})(D);
			(function(b) {
				var c, d = x.vertex_index_bytes * 3 + x.material_index_bytes + x.normal_index_bytes * 3,
					e = b + x.ntri_smooth * d;
				for (c = b; c < e; c += d) t(c);
				return e - b
			})(aa);
			(function(b) {
				var c, d = x.vertex_index_bytes * 4 + x.material_index_bytes,
					e = b + x.nquad_flat * d;
				for (c = b; c < e; c += d) u(c);
				return e - b
			})(W);
			(function(b) {
				var c, d = x.vertex_index_bytes * 4 + x.material_index_bytes + x.normal_index_bytes * 4,
					e = b + x.nquad_smooth *
					d;
				for (c = b; c < e; c += d) v(c);
				return e - b
			})(X);
			this.computeCentroids();
			this.computeFaceNormals()
		};
		f.prototype = new THREE.Geometry;
		f.prototype.constructor = f;
		c(new f(d))
	},
	v: function(b, c, d, e) {
		b.vertices.push(new THREE.Vertex(new THREE.Vector3(c, d, e)))
	},
	f3: function(b, c, d, e, f) {
		b.faces.push(new THREE.Face3(c, d, e, null, null, b.materials[f]))
	},
	f4: function(b, c, d, e, f, h) {
		b.faces.push(new THREE.Face4(c, d, e, f, null, null, b.materials[h]))
	},
	f3n: function(b, c, d, e, f, h, j, k, m) {
		var h = b.materials[h],
			n = c[k * 3],
			o = c[k * 3 + 1],
			k = c[k * 3 + 2],
			p = c[m * 3],
			t = c[m * 3 + 1],
			m = c[m * 3 + 2];
		b.faces.push(new THREE.Face3(d, e, f, [new THREE.Vector3(c[j * 3], c[j * 3 + 1], c[j * 3 + 2]), new THREE.Vector3(n, o, k), new THREE.Vector3(p, t, m)], null, h))
	},
	f4n: function(b, c, d, e, f, h, j, k, m, n, o) {
		var j = b.materials[j],
			p = c[m * 3],
			t = c[m * 3 + 1],
			m = c[m * 3 + 2],
			u = c[n * 3],
			v = c[n * 3 + 1],
			n = c[n * 3 + 2],
			C = c[o * 3],
			E = c[o * 3 + 1],
			o = c[o * 3 + 2];
		b.faces.push(new THREE.Face4(d, e, f, h, [new THREE.Vector3(c[k * 3], c[k * 3 + 1], c[k * 3 + 2]), new THREE.Vector3(p, t, m), new THREE.Vector3(u, v, n), new THREE.Vector3(C, E, o)], null, j))
	},
	uv3: function(b,
		c, d, e, f, h, j) {
		var k = [];
		k.push(new THREE.UV(c, d));
		k.push(new THREE.UV(e, f));
		k.push(new THREE.UV(h, j));
		b.push(k)
	},
	uv4: function(b, c, d, e, f, h, j, k, m) {
		var n = [];
		n.push(new THREE.UV(c, d));
		n.push(new THREE.UV(e, f));
		n.push(new THREE.UV(h, j));
		n.push(new THREE.UV(k, m));
		b.push(n)
	}
};
THREE.SceneLoader = function() {
	this.onLoadStart = function() {};
	this.onLoadProgress = function() {};
	this.onLoadComplete = function() {};
	this.callbackSync = function() {};
	this.callbackProgress = function() {}
};
THREE.SceneLoader.prototype = {
	load: function(b, c) {
		var d = this,
			e = new Worker(b);
		e.postMessage(0);
		var f = THREE.Loader.prototype.extractUrlbase(b);
		e.onmessage = function(b) {
			function e(b, c) {
				return c == "relativeToHTML" ? b : f + "/" + b
			}

			function k() {
				for (u in F.objects)
					if (!L.objects[u])
						if (D = F.objects[u], D.geometry !== void 0) {
							if (z = L.geometries[D.geometry]) {
								M = [];
								for (Q = 0; Q < D.materials.length; Q++) M[Q] = L.materials[D.materials[Q]];
								x = D.position;
								r = D.rotation;
								q = D.quaternion;
								s = D.scale;
								q = 0;
								M.length == 0 && (M[0] = new THREE.MeshFaceMaterial);
								M.length > 1 && (M = [new THREE.MeshFaceMaterial]);
								object = new THREE.Mesh(z, M);
								object.name = u;
								object.position.set(x[0], x[1], x[2]);
								q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]);
								object.scale.set(s[0], s[1], s[2]);
								object.visible = D.visible;
								L.scene.addObject(object);
								L.objects[u] = object;
								if (D.meshCollider) {
									var b = THREE.CollisionUtils.MeshColliderWBox(object);
									L.scene.collisions.colliders.push(b)
								}
								if (D.castsShadow) b = new THREE.ShadowVolume(z), L.scene.addChild(b),
									b.position = object.position, b.rotation = object.rotation, b.scale = object.scale;
								D.trigger && D.trigger.toLowerCase() != "none" && (b = {
									type: D.trigger,
									object: D
								}, L.triggers[object.name] = b)
							}
						} else x = D.position, r = D.rotation, q = D.quaternion, s = D.scale, q = 0, object = new THREE.Object3D, object.name = u, object.position.set(x[0], x[1], x[2]), q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]), object.scale.set(s[0], s[1], s[2]), object.visible = D.visible !== void 0 ? D.visible : !1, L.scene.addObject(object),
							L.objects[u] = object, L.empties[u] = object, D.trigger && D.trigger.toLowerCase() != "none" && (b = {
								type: D.trigger,
								object: D
							}, L.triggers[object.name] = b)
			}

			function m(b) {
				return function(c) {
					L.geometries[b] = c;
					k();
					g -= 1;
					d.onLoadComplete();
					o()
				}
			}

			function n(b) {
				return function(c) {
					L.geometries[b] = c
				}
			}

			function o() {
				d.callbackProgress({
					totalModels: O,
					totalTextures: V,
					loadedModels: O - g,
					loadedTextures: V - Y
				}, L);
				d.onLoadProgress();
				g == 0 && Y == 0 && c(L)
			}
			var p, t, u, v, C, E, y, D, x, I, A, z, S, G, M, F, N, g, Y, O, V, L;
			F = b.data;
			b = new THREE.BinaryLoader;
			N = new THREE.JSONLoader;
			Y = g = 0;
			L = {
				scene: new THREE.Scene,
				geometries: {},
				materials: {},
				textures: {},
				objects: {},
				cameras: {},
				lights: {},
				fogs: {},
				triggers: {},
				empties: {}
			};
			var $ = !1;
			for (u in F.objects)
				if (D = F.objects[u], D.meshCollider) {
					$ = !0;
					break
				}
			if ($) L.scene.collisions = new THREE.CollisionSystem;
			if (F.transform) {
				$ = F.transform.position;
				I = F.transform.rotation;
				var T = F.transform.scale;
				$ && L.scene.position.set($[0], $[1], $[2]);
				I && L.scene.rotation.set(I[0], I[1], I[2]);
				T && L.scene.scale.set(T[0], T[1], T[2]);
				($ || I || T) && L.scene.updateMatrix()
			}
			$ = function() {
				Y -=
					1;
				o();
				d.onLoadComplete()
			};
			for (C in F.cameras) {
				I = F.cameras[C];
				if (I.type == "perspective") S = new THREE.Camera(I.fov, I.aspect, I.near, I.far);
				else if (I.type == "ortho") S = new THREE.Camera, S.projectionMatrix = THREE.Matrix4.makeOrtho(I.left, I.right, I.top, I.bottom, I.near, I.far);
				x = I.position;
				I = I.target;
				S.position.set(x[0], x[1], x[2]);
				S.target.position.set(I[0], I[1], I[2]);
				L.cameras[C] = S
			}
			for (v in F.lights) {
				C = F.lights[v];
				S = C.color !== void 0 ? C.color : 16777215;
				I = C.intensity !== void 0 ? C.intensity : 1;
				if (C.type == "directional") x =
					C.direction, light = new THREE.DirectionalLight(S, I), light.position.set(x[0], x[1], x[2]), light.position.normalize();
				else if (C.type == "point") x = C.position, light = new THREE.PointLight(S, I), light.position.set(x[0], x[1], x[2]);
				L.scene.addLight(light);
				L.lights[v] = light
			}
			for (E in F.fogs) v = F.fogs[E], v.type == "linear" ? G = new THREE.Fog(0, v.near, v.far) : v.type == "exp2" && (G = new THREE.FogExp2(0, v.density)), I = v.color, G.color.setRGB(I[0], I[1], I[2]), L.fogs[E] = G;
			if (L.cameras && F.defaults.camera) L.currentCamera = L.cameras[F.defaults.camera];
			if (L.fogs && F.defaults.fog) L.scene.fog = L.fogs[F.defaults.fog];
			I = F.defaults.bgcolor;
			L.bgColor = new THREE.Color;
			L.bgColor.setRGB(I[0], I[1], I[2]);
			L.bgColorAlpha = F.defaults.bgalpha;
			for (p in F.geometries)
				if (E = F.geometries[p], E.type == "bin_mesh" || E.type == "ascii_mesh") g += 1, d.onLoadStart();
			O = g;
			for (p in F.geometries) E = F.geometries[p], E.type == "cube" ? (z = new THREE.Cube(E.width, E.height, E.depth, E.segmentsWidth, E.segmentsHeight, E.segmentsDepth, null, E.flipped, E.sides), L.geometries[p] = z) : E.type == "plane" ? (z = new THREE.Plane(E.width,
				E.height, E.segmentsWidth, E.segmentsHeight), L.geometries[p] = z) : E.type == "sphere" ? (z = new THREE.Sphere(E.radius, E.segmentsWidth, E.segmentsHeight), L.geometries[p] = z) : E.type == "cylinder" ? (z = new THREE.Cylinder(E.numSegs, E.topRad, E.botRad, E.height, E.topOffset, E.botOffset), L.geometries[p] = z) : E.type == "torus" ? (z = new THREE.Torus(E.radius, E.tube, E.segmentsR, E.segmentsT), L.geometries[p] = z) : E.type == "icosahedron" ? (z = new THREE.Icosahedron(E.subdivisions), L.geometries[p] = z) : E.type == "bin_mesh" ? b.load({
				model: e(E.url,
					F.urlBaseType),
				callback: m(p)
			}) : E.type == "ascii_mesh" ? N.load({
				model: e(E.url, F.urlBaseType),
				callback: m(p)
			}) : E.type == "embedded_mesh" && (E = F.embeds[E.id]) && N.createModel(E, n(p), "");
			for (y in F.textures)
				if (p = F.textures[y], p.url instanceof Array) {
					Y += p.url.length;
					for (b = 0; b < p.url.length; b++) d.onLoadStart()
				} else Y += 1, d.onLoadStart();
			V = Y;
			for (y in F.textures) {
				p = F.textures[y];
				if (p.mapping != void 0 && THREE[p.mapping] != void 0) p.mapping = new THREE[p.mapping];
				if (p.url instanceof Array) {
					for (var b = [], Q = 0; Q < p.url.length; Q++) b[Q] =
						e(p.url[Q], F.urlBaseType);
					b = THREE.ImageUtils.loadTextureCube(b, p.mapping, $)
				} else {
					b = THREE.ImageUtils.loadTexture(e(p.url, F.urlBaseType), p.mapping, $);
					if (THREE[p.minFilter] != void 0) b.minFilter = THREE[p.minFilter];
					if (THREE[p.magFilter] != void 0) b.magFilter = THREE[p.magFilter]
				}
				L.textures[y] = b
			}
			for (t in F.materials) {
				y = F.materials[t];
				for (A in y.parameters)
					if (A == "envMap" || A == "map" || A == "lightMap") y.parameters[A] = L.textures[y.parameters[A]];
					else if (A == "shading") y.parameters[A] = y.parameters[A] == "flat" ? THREE.FlatShading :
					THREE.SmoothShading;
				else if (A == "blending") y.parameters[A] = THREE[y.parameters[A]] ? THREE[y.parameters[A]] : THREE.NormalBlending;
				else if (A == "combine") y.parameters[A] = y.parameters[A] == "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation;
				else if (A == "vertexColors")
					if (y.parameters[A] == "face") y.parameters[A] = THREE.FaceColors;
					else if (y.parameters[A]) y.parameters[A] = THREE.VertexColors;
				if (y.parameters.opacity !== void 0 && y.parameters.opacity < 1) y.parameters.transparent = !0;
				y = new THREE[y.type](y.parameters);
				L.materials[t] = y
			}
			k();
			d.callbackSync(L)
		}
	}
};
THREE.MarchingCubes = function(b, c) {
	THREE.Object3D.call(this);
	this.materials = c instanceof Array ? c : [c];
	this.init = function(b) {
		this.isolation = 80;
		this.size = b;
		this.size2 = this.size * this.size;
		this.size3 = this.size2 * this.size;
		this.halfsize = this.size / 2;
		this.delta = 2 / this.size;
		this.yd = this.size;
		this.zd = this.size2;
		this.field = new Float32Array(this.size3);
		this.normal_cache = new Float32Array(this.size3 * 3);
		this.vlist = new Float32Array(36);
		this.nlist = new Float32Array(36);
		this.firstDraw = !0;
		this.maxCount = 4096;
		this.count =
			0;
		this.hasNormal = this.hasPos = !1;
		this.positionArray = new Float32Array(this.maxCount * 3);
		this.normalArray = new Float32Array(this.maxCount * 3)
	};
	this.lerp = function(b, c, f) {
		return b + (c - b) * f
	};
	this.VIntX = function(b, c, f, h, j, k, m, n, o, p) {
		j = (j - o) / (p - o);
		o = this.normal_cache;
		c[h] = k + j * this.delta;
		c[h + 1] = m;
		c[h + 2] = n;
		f[h] = this.lerp(o[b], o[b + 3], j);
		f[h + 1] = this.lerp(o[b + 1], o[b + 4], j);
		f[h + 2] = this.lerp(o[b + 2], o[b + 5], j)
	};
	this.VIntY = function(b, c, f, h, j, k, m, n, o, p) {
		j = (j - o) / (p - o);
		o = this.normal_cache;
		c[h] = k;
		c[h + 1] = m + j * this.delta;
		c[h +
			2] = n;
		c = b + this.yd * 3;
		f[h] = this.lerp(o[b], o[c], j);
		f[h + 1] = this.lerp(o[b + 1], o[c + 1], j);
		f[h + 2] = this.lerp(o[b + 2], o[c + 2], j)
	};
	this.VIntZ = function(b, c, f, h, j, k, m, n, o, p) {
		j = (j - o) / (p - o);
		o = this.normal_cache;
		c[h] = k;
		c[h + 1] = m;
		c[h + 2] = n + j * this.delta;
		c = b + this.zd * 3;
		f[h] = this.lerp(o[b], o[c], j);
		f[h + 1] = this.lerp(o[b + 1], o[c + 1], j);
		f[h + 2] = this.lerp(o[b + 2], o[c + 2], j)
	};
	this.compNorm = function(b) {
		var c = b * 3;
		this.normal_cache[c] == 0 && (this.normal_cache[c] = this.field[b - 1] - this.field[b + 1], this.normal_cache[c + 1] = this.field[b - this.yd] - this.field[b +
			this.yd], this.normal_cache[c + 2] = this.field[b - this.zd] - this.field[b + this.zd])
	};
	this.polygonize = function(b, c, f, h, j, k) {
		var m = h + 1,
			n = h + this.yd,
			o = h + this.zd,
			p = m + this.yd,
			t = m + this.zd,
			u = h + this.yd + this.zd,
			v = m + this.yd + this.zd,
			C = 0,
			E = this.field[h],
			y = this.field[m],
			D = this.field[n],
			x = this.field[p],
			I = this.field[o],
			A = this.field[t],
			z = this.field[u],
			S = this.field[v];
		E < j && (C |= 1);
		y < j && (C |= 2);
		D < j && (C |= 8);
		x < j && (C |= 4);
		I < j && (C |= 16);
		A < j && (C |= 32);
		z < j && (C |= 128);
		S < j && (C |= 64);
		var G = THREE.edgeTable[C];
		if (G == 0) return 0;
		var M = this.delta,
			F = b + M,
			N = c + M,
			M = f + M;
		G & 1 && (this.compNorm(h), this.compNorm(m), this.VIntX(h * 3, this.vlist, this.nlist, 0, j, b, c, f, E, y));
		G & 2 && (this.compNorm(m), this.compNorm(p), this.VIntY(m * 3, this.vlist, this.nlist, 3, j, F, c, f, y, x));
		G & 4 && (this.compNorm(n), this.compNorm(p), this.VIntX(n * 3, this.vlist, this.nlist, 6, j, b, N, f, D, x));
		G & 8 && (this.compNorm(h), this.compNorm(n), this.VIntY(h * 3, this.vlist, this.nlist, 9, j, b, c, f, E, D));
		G & 16 && (this.compNorm(o), this.compNorm(t), this.VIntX(o * 3, this.vlist, this.nlist, 12, j, b, c, M, I, A));
		G & 32 && (this.compNorm(t),
			this.compNorm(v), this.VIntY(t * 3, this.vlist, this.nlist, 15, j, F, c, M, A, S));
		G & 64 && (this.compNorm(u), this.compNorm(v), this.VIntX(u * 3, this.vlist, this.nlist, 18, j, b, N, M, z, S));
		G & 128 && (this.compNorm(o), this.compNorm(u), this.VIntY(o * 3, this.vlist, this.nlist, 21, j, b, c, M, I, z));
		G & 256 && (this.compNorm(h), this.compNorm(o), this.VIntZ(h * 3, this.vlist, this.nlist, 24, j, b, c, f, E, I));
		G & 512 && (this.compNorm(m), this.compNorm(t), this.VIntZ(m * 3, this.vlist, this.nlist, 27, j, F, c, f, y, A));
		G & 1024 && (this.compNorm(p), this.compNorm(v), this.VIntZ(p *
			3, this.vlist, this.nlist, 30, j, F, N, f, x, S));
		G & 2048 && (this.compNorm(n), this.compNorm(u), this.VIntZ(n * 3, this.vlist, this.nlist, 33, j, b, N, f, D, z));
		C <<= 4;
		for (j = h = 0; THREE.triTable[C + j] != -1;) b = C + j, c = b + 1, f = b + 2, this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[b], 3 * THREE.triTable[c], 3 * THREE.triTable[f], k), j += 3, h++;
		return h
	};
	this.posnormtriv = function(b, c, f, h, j, k) {
		var m = this.count * 3;
		this.positionArray[m] = b[f];
		this.positionArray[m + 1] = b[f + 1];
		this.positionArray[m + 2] = b[f + 2];
		this.positionArray[m + 3] = b[h];
		this.positionArray[m +
			4] = b[h + 1];
		this.positionArray[m + 5] = b[h + 2];
		this.positionArray[m + 6] = b[j];
		this.positionArray[m + 7] = b[j + 1];
		this.positionArray[m + 8] = b[j + 2];
		this.normalArray[m] = c[f];
		this.normalArray[m + 1] = c[f + 1];
		this.normalArray[m + 2] = c[f + 2];
		this.normalArray[m + 3] = c[h];
		this.normalArray[m + 4] = c[h + 1];
		this.normalArray[m + 5] = c[h + 2];
		this.normalArray[m + 6] = c[j];
		this.normalArray[m + 7] = c[j + 1];
		this.normalArray[m + 8] = c[j + 2];
		this.hasNormal = this.hasPos = !0;
		this.count += 3;
		this.count >= this.maxCount - 3 && k(this)
	};
	this.begin = function() {
		this.count = 0;
		this.hasNormal = this.hasPos = !1
	};
	this.end = function(b) {
		if (this.count != 0) {
			for (var c = this.count * 3; c < this.positionArray.length; c++) this.positionArray[c] = 0;
			b(this)
		}
	};
	this.addBall = function(b, c, f, h, j) {
		var k = this.size * Math.sqrt(h / j),
			m = f * this.size,
			n = c * this.size,
			o = b * this.size,
			p = Math.floor(m - k);
		p < 1 && (p = 1);
		m = Math.floor(m + k);
		m > this.size - 1 && (m = this.size - 1);
		var t = Math.floor(n - k);
		t < 1 && (t = 1);
		n = Math.floor(n + k);
		n > this.size - 1 && (n = this.size - 1);
		var u = Math.floor(o - k);
		u < 1 && (u = 1);
		k = Math.floor(o + k);
		k > this.size - 1 && (k = this.size -
			1);
		for (var v, C, E, y, D, x; p < m; p++) {
			o = this.size2 * p;
			C = p / this.size - f;
			D = C * C;
			for (C = t; C < n; C++) {
				E = o + this.size * C;
				v = C / this.size - c;
				x = v * v;
				for (v = u; v < k; v++) y = v / this.size - b, y = h / (1.0E-6 + y * y + x + D) - j, y > 0 && (this.field[E + v] += y)
			}
		}
	};
	this.addPlaneX = function(b, c) {
		var f, h, j, k, m, n = this.size,
			o = this.yd,
			p = this.zd,
			t = this.field,
			u = n * Math.sqrt(b / c);
		u > n && (u = n);
		for (f = 0; f < u; f++)
			if (h = f / n, h *= h, k = b / (1.0E-4 + h) - c, k > 0)
				for (h = 0; h < n; h++) {
					m = f + h * o;
					for (j = 0; j < n; j++) t[p * j + m] += k
				}
	};
	this.addPlaneY = function(b, c) {
		var f, h, j, k, m, n, o = this.size,
			p = this.yd,
			t =
			this.zd,
			u = this.field,
			v = o * Math.sqrt(b / c);
		v > o && (v = o);
		for (h = 0; h < v; h++)
			if (f = h / o, f *= f, k = b / (1.0E-4 + f) - c, k > 0) {
				m = h * p;
				for (f = 0; f < o; f++) {
					n = m + f;
					for (j = 0; j < o; j++) u[t * j + n] += k
				}
			}
	};
	this.addPlaneZ = function(b, c) {
		var f, h, j, k, m, n;
		size = this.size;
		yd = this.yd;
		zd = this.zd;
		field = this.field;
		dist = size * Math.sqrt(b / c);
		dist > size && (dist = size);
		for (j = 0; j < dist; j++)
			if (f = j / size, f *= f, k = b / (1.0E-4 + f) - c, k > 0) {
				m = zd * j;
				for (h = 0; h < size; h++) {
					n = m + h * yd;
					for (f = 0; f < size; f++) field[n + f] += k
				}
			}
	};
	this.reset = function() {
		var b;
		for (b = 0; b < this.size3; b++) this.normal_cache[b *
			3] = 0, this.field[b] = 0
	};
	this.render = function(b) {
		this.begin();
		var c, f, h, j, k, m, n, o, p, t = this.size - 2;
		for (j = 1; j < t; j++) {
			p = this.size2 * j;
			n = (j - this.halfsize) / this.halfsize;
			for (h = 1; h < t; h++) {
				o = p + this.size * h;
				m = (h - this.halfsize) / this.halfsize;
				for (f = 1; f < t; f++) k = (f - this.halfsize) / this.halfsize, c = o + f, this.polygonize(k, m, n, c, this.isolation, b)
			}
		}
		this.end(b)
	};
	this.generateGeometry = function() {
		var b = 0,
			c = new THREE.Geometry,
			f = [];
		this.render(function(h) {
			var j, k, m, n, o, p, t, u;
			for (j = 0; j < h.count; j++) t = j * 3, o = t + 1, u = t + 2, k = h.positionArray[t],
				m = h.positionArray[o], n = h.positionArray[u], p = new THREE.Vector3(k, m, n), k = h.normalArray[t], m = h.normalArray[o], n = h.normalArray[u], t = new THREE.Vector3(k, m, n), t.normalize(), o = new THREE.Vertex(p), c.vertices.push(o), f.push(t);
			nfaces = h.count / 3;
			for (j = 0; j < nfaces; j++) t = (b + j) * 3, o = t + 1, u = t + 2, p = f[t], k = f[o], m = f[u], t = new THREE.Face3(t, o, u, [p, k, m]), c.faces.push(t);
			b += nfaces;
			h.count = 0
		});
		return c
	};
	this.init(b)
};
THREE.MarchingCubes.prototype = new THREE.Object3D;
THREE.MarchingCubes.prototype.constructor = THREE.MarchingCubes;
THREE.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107,
	1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170,
	419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0
]);
THREE.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5,
	8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6,
	5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1,
	10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1,
	6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1,
	8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7,
	2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11,
	2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11,
	4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10,
	2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
]);
THREE.Trident = function(b) {
	function c(c) {
		return new THREE.Mesh(new THREE.Cylinder(30, 0.1, b.length / 20, b.length / 5), new THREE.MeshBasicMaterial({
			color: c
		}))
	}

	function d(b, c) {
		var d = new THREE.Geometry;
		d.vertices = [new THREE.Vertex, new THREE.Vertex(b)];
		return new THREE.Line(d, new THREE.LineBasicMaterial({
			color: c
		}))
	}
	THREE.Object3D.call(this);
	var e = Math.PI / 2,
		f, b = b || THREE.Trident.defaultParams;
	if (b !== THREE.Trident.defaultParams)
		for (f in THREE.Trident.defaultParams) b.hasOwnProperty(f) || (b[f] = THREE.Trident.defaultParams[f]);
	this.scale = new THREE.Vector3(b.scale, b.scale, b.scale);
	this.addChild(d(new THREE.Vector3(b.length, 0, 0), b.xAxisColor));
	this.addChild(d(new THREE.Vector3(0, b.length, 0), b.yAxisColor));
	this.addChild(d(new THREE.Vector3(0, 0, b.length), b.zAxisColor));
	if (b.showArrows) f = c(b.xAxisColor), f.rotation.y = -e, f.position.x = b.length, this.addChild(f), f = c(b.yAxisColor), f.rotation.x = e, f.position.y = b.length, this.addChild(f), f = c(b.zAxisColor), f.rotation.y = Math.PI, f.position.z = b.length, this.addChild(f)
};
THREE.Trident.prototype = new THREE.Object3D;
THREE.Trident.prototype.constructor = THREE.Trident;
THREE.Trident.defaultParams = {
	xAxisColor: 16711680,
	yAxisColor: 65280,
	zAxisColor: 255,
	showArrows: !0,
	length: 100,
	scale: 1
};
THREE.PlaneCollider = function(b, c) {
	this.point = b;
	this.normal = c
};
THREE.SphereCollider = function(b, c) {
	this.center = b;
	this.radius = c;
	this.radiusSq = c * c
};
THREE.BoxCollider = function(b, c) {
	this.min = b;
	this.max = c;
	this.dynamic = !0;
	this.normal = new THREE.Vector3
};
THREE.MeshCollider = function(b, c) {
	this.mesh = b;
	this.box = c;
	this.numFaces = this.mesh.geometry.faces.length;
	this.normal = new THREE.Vector3
};
THREE.CollisionSystem = function() {
	this.collisionNormal = new THREE.Vector3;
	this.colliders = [];
	this.hits = []
};
THREE.Collisions = new THREE.CollisionSystem;
THREE.CollisionSystem.prototype.merge = function(b) {
	this.colliders = this.colliders.concat(b.colliders);
	this.hits = this.hits.concat(b.hits)
};
THREE.CollisionSystem.prototype.rayCastAll = function(b) {
	b.direction.normalize();
	this.hits.length = 0;
	var c, d, e, f, h = 0;
	c = 0;
	for (d = this.colliders.length; c < d; c++)
		if (f = this.colliders[c], e = this.rayCast(b, f), e < Number.MAX_VALUE) f.distance = e, e > h ? this.hits.push(f) : this.hits.unshift(f), h = e;
	return this.hits
};
THREE.CollisionSystem.prototype.rayCastNearest = function(b) {
	var c = this.rayCastAll(b);
	if (c.length == 0) return null;
	for (var d = 0; c[d] instanceof THREE.MeshCollider;) {
		var e = this.rayMesh(b, c[d]);
		if (e.dist < Number.MAX_VALUE) {
			c[d].distance = e.dist;
			c[d].faceIndex = e.faceIndex;
			break
		}
		d++
	}
	if (d > c.length) return null;
	return c[d]
};
THREE.CollisionSystem.prototype.rayCast = function(b, c) {
	if (c instanceof THREE.PlaneCollider) return this.rayPlane(b, c);
	else if (c instanceof THREE.SphereCollider) return this.raySphere(b, c);
	else if (c instanceof THREE.BoxCollider) return this.rayBox(b, c);
	else if (c instanceof THREE.MeshCollider && c.box) return this.rayBox(b, c.box)
};
THREE.CollisionSystem.prototype.rayMesh = function(b, c) {
	for (var d = this.makeRayLocal(b, c.mesh), e = Number.MAX_VALUE, f, h = 0; h < c.numFaces; h++) {
		var j = c.mesh.geometry.faces[h],
			k = c.mesh.geometry.vertices[j.a].position,
			m = c.mesh.geometry.vertices[j.b].position,
			n = c.mesh.geometry.vertices[j.c].position,
			o = j instanceof THREE.Face4 ? c.mesh.geometry.vertices[j.d].position : null;
		j instanceof THREE.Face3 ? (j = this.rayTriangle(d, k, m, n, e, this.collisionNormal), j < e && (e = j, f = h, c.normal.copy(this.collisionNormal), c.normal.normalize())) :
			j instanceof THREE.Face4 && (j = this.rayTriangle(d, k, m, o, e, this.collisionNormal), j < e && (e = j, f = h, c.normal.copy(this.collisionNormal), c.normal.normalize()), j = this.rayTriangle(d, m, n, o, e, this.collisionNormal), j < e && (e = j, f = h, c.normal.copy(this.collisionNormal), c.normal.normalize()))
	}
	return {
		dist: e,
		faceIndex: f
	}
};
THREE.CollisionSystem.prototype.rayTriangle = function(b, c, d, e, f, h) {
	var j = THREE.CollisionSystem.__v1,
		k = THREE.CollisionSystem.__v2;
	h.set(0, 0, 0);
	j.sub(d, c);
	k.sub(e, d);
	h.cross(j, k);
	k = h.dot(b.direction);
	if (!(k < 0)) return Number.MAX_VALUE;
	j = h.dot(c) - h.dot(b.origin);
	if (!(j <= 0)) return Number.MAX_VALUE;
	if (!(j >= k * f)) return Number.MAX_VALUE;
	j /= k;
	k = THREE.CollisionSystem.__v3;
	k.copy(b.direction);
	k.multiplyScalar(j);
	k.addSelf(b.origin);
	Math.abs(h.x) > Math.abs(h.y) ? Math.abs(h.x) > Math.abs(h.z) ? (b = k.y - c.y, h = d.y - c.y,
		f = e.y - c.y, k = k.z - c.z, d = d.z - c.z, e = e.z - c.z) : (b = k.x - c.x, h = d.x - c.x, f = e.x - c.x, k = k.y - c.y, d = d.y - c.y, e = e.y - c.y) : Math.abs(h.y) > Math.abs(h.z) ? (b = k.x - c.x, h = d.x - c.x, f = e.x - c.x, k = k.z - c.z, d = d.z - c.z, e = e.z - c.z) : (b = k.x - c.x, h = d.x - c.x, f = e.x - c.x, k = k.y - c.y, d = d.y - c.y, e = e.y - c.y);
	c = h * e - d * f;
	if (c == 0) return Number.MAX_VALUE;
	c = 1 / c;
	e = (b * e - k * f) * c;
	if (!(e >= 0)) return Number.MAX_VALUE;
	c *= h * k - d * b;
	if (!(c >= 0)) return Number.MAX_VALUE;
	if (!(1 - e - c >= 0)) return Number.MAX_VALUE;
	return j
};
THREE.CollisionSystem.prototype.makeRayLocal = function(b, c) {
	var d = THREE.CollisionSystem.__m;
	THREE.Matrix4.makeInvert(c.matrixWorld, d);
	var e = THREE.CollisionSystem.__r;
	e.origin.copy(b.origin);
	e.direction.copy(b.direction);
	d.multiplyVector3(e.origin);
	d.rotateAxis(e.direction);
	e.direction.normalize();
	return e
};
THREE.CollisionSystem.prototype.rayBox = function(b, c) {
	var d;
	c.dynamic && c.mesh && c.mesh.matrixWorld ? d = this.makeRayLocal(b, c.mesh) : (d = THREE.CollisionSystem.__r, d.origin.copy(b.origin), d.direction.copy(b.direction));
	var e = 0,
		f = 0,
		h = 0,
		j = 0,
		k = 0,
		m = 0,
		n = !0;
	d.origin.x < c.min.x ? (e = c.min.x - d.origin.x, e /= d.direction.x, n = !1, j = -1) : d.origin.x > c.max.x && (e = c.max.x - d.origin.x, e /= d.direction.x, n = !1, j = 1);
	d.origin.y < c.min.y ? (f = c.min.y - d.origin.y, f /= d.direction.y, n = !1, k = -1) : d.origin.y > c.max.y && (f = c.max.y - d.origin.y, f /= d.direction.y,
		n = !1, k = 1);
	d.origin.z < c.min.z ? (h = c.min.z - d.origin.z, h /= d.direction.z, n = !1, m = -1) : d.origin.z > c.max.z && (h = c.max.z - d.origin.z, h /= d.direction.z, n = !1, m = 1);
	if (n) return -1;
	n = 0;
	f > e && (n = 1, e = f);
	h > e && (n = 2, e = h);
	switch (n) {
		case 0:
			k = d.origin.y + d.direction.y * e;
			if (k < c.min.y || k > c.max.y) return Number.MAX_VALUE;
			d = d.origin.z + d.direction.z * e;
			if (d < c.min.z || d > c.max.z) return Number.MAX_VALUE;
			c.normal.set(j, 0, 0);
			break;
		case 1:
			j = d.origin.x + d.direction.x * e;
			if (j < c.min.x || j > c.max.x) return Number.MAX_VALUE;
			d = d.origin.z + d.direction.z *
				e;
			if (d < c.min.z || d > c.max.z) return Number.MAX_VALUE;
			c.normal.set(0, k, 0);
			break;
		case 2:
			j = d.origin.x + d.direction.x * e;
			if (j < c.min.x || j > c.max.x) return Number.MAX_VALUE;
			k = d.origin.y + d.direction.y * e;
			if (k < c.min.y || k > c.max.y) return Number.MAX_VALUE;
			c.normal.set(0, 0, m)
	}
	return e
};
THREE.CollisionSystem.prototype.rayPlane = function(b, c) {
	var d = b.direction.dot(c.normal),
		e = c.point.dot(c.normal);
	if (d < 0) d = (e - b.origin.dot(c.normal)) / d;
	else return Number.MAX_VALUE;
	return d > 0 ? d : Number.MAX_VALUE
};
THREE.CollisionSystem.prototype.raySphere = function(b, c) {
	var d = c.center.clone().subSelf(b.origin);
	if (d.lengthSq < c.radiusSq) return -1;
	var e = d.dot(b.direction.clone());
	if (e <= 0) return Number.MAX_VALUE;
	d = c.radiusSq - (d.lengthSq() - e * e);
	if (d >= 0) return Math.abs(e) - Math.sqrt(d);
	return Number.MAX_VALUE
};
THREE.CollisionSystem.__v1 = new THREE.Vector3;
THREE.CollisionSystem.__v2 = new THREE.Vector3;
THREE.CollisionSystem.__v3 = new THREE.Vector3;
THREE.CollisionSystem.__nr = new THREE.Vector3;
THREE.CollisionSystem.__m = new THREE.Matrix4;
THREE.CollisionSystem.__r = new THREE.Ray;
THREE.CollisionUtils = {};
THREE.CollisionUtils.MeshOBB = function(b) {
	b.geometry.computeBoundingBox();
	var c = b.geometry.boundingBox,
		d = new THREE.Vector3(c.x[0], c.y[0], c.z[0]),
		c = new THREE.Vector3(c.x[1], c.y[1], c.z[1]),
		d = new THREE.BoxCollider(d, c);
	d.mesh = b;
	return d
};
THREE.CollisionUtils.MeshAABB = function(b) {
	var c = THREE.CollisionUtils.MeshOBB(b);
	c.min.addSelf(b.position);
	c.max.addSelf(b.position);
	c.dynamic = !1;
	return c
};
THREE.CollisionUtils.MeshColliderWBox = function(b) {
	return new THREE.MeshCollider(b, THREE.CollisionUtils.MeshOBB(b))
};
