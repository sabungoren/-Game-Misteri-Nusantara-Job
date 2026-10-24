const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{StartX: 0},
	{StartY: 0},
	{DragDrop: 0},
	{cat: 0},
	{bingkai_kiri_bawah: 0},
	{bingkai_kiri_atas: 0},
	{coin: 0},
	{Sprite: 0},
	{ID: 0},
	{cat_asal: 0},
	{ball_tujuan: 0},
	{Aktif: 0},
	{Garis: 0},
	{Touch: 0},
	{titik_kiri: 0},
	{titik_kanan: 0}
];

self.InstanceType = {
	cat: class extends self.ISpriteInstance {},
	bingkai_kiri_bawah: class extends self.ISpriteInstance {},
	bingkai_kiri_atas: class extends self.ISpriteInstance {},
	coin: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	cat_asal: class extends self.ISpriteInstance {},
	ball_tujuan: class extends self.ISpriteInstance {},
	Garis: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	titik_kiri: class extends self.ISpriteInstance {},
	titik_kanan: class extends self.ISpriteInstance {}
}