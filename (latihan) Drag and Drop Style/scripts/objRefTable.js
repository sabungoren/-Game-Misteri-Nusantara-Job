const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Acts.SetPos
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
	{Sprite: 0}
];

self.InstanceType = {
	cat: class extends self.ISpriteInstance {},
	bingkai_kiri_bawah: class extends self.ISpriteInstance {},
	bingkai_kiri_atas: class extends self.ISpriteInstance {},
	coin: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}