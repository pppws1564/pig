const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Multiplayer,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Behaviors.Bullet,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutheight,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.Multiplayer.Acts.AddClientInputValue,
		C3.Plugins.Multiplayer.Acts.SyncObject,
		C3.Plugins.Multiplayer.Acts.SyncObjectInstanceVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Multiplayer.Acts.SignallingConnect,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Multiplayer.Cnds.OnSignallingConnected,
		C3.Plugins.Multiplayer.Acts.SignallingLogin,
		C3.Plugins.Multiplayer.Acts.SignallingAutoJoinRoom,
		C3.Plugins.Multiplayer.Cnds.OnSignallingLoggedIn,
		C3.Plugins.Multiplayer.Cnds.OnSignallingJoinedRoom,
		C3.Plugins.Multiplayer.Cnds.IsHost,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Multiplayer.Exps.MyAlias,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Multiplayer.Cnds.OnPeerConnected,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Multiplayer.Exps.PeerID,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.scrollto.Acts.SetEnabled,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Multiplayer.Exps.PeerState,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Multiplayer.Cnds.OnPeerMessage,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Exps.float,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Multiplayer.Exps.Message,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Multiplayer.Acts.SetClientState,
		C3.Plugins.Multiplayer.Cnds.OnClientUpdate,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Multiplayer.Acts.SendPeerMessage
	];
};
self.C3_JsPropNameTable = [
	{Points: 0},
	{"8Direction": 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{HostSprite: 0},
	{Multiplayer: 0},
	{TextMe: 0},
	{PeerSprite: 0},
	{Keyboard: 0},
	{TiledBackground: 0},
	{TextHostPoints: 0},
	{Sprite: 0},
	{TextPeerPoints: 0},
	{Bullet: 0},
	{Bomb: 0},
	{pig: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{TiledBackground3: 0},
	{HostSprite2: 0},
	{TiledBackground2: 0},
	{TiledBackground4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Text: 0},
	{Hostend: 0},
	{Peerend: 0},
	{Hostcrown: 0},
	{Hosttextend: 0},
	{Peertextend: 0},
	{Thewinner: 0},
	{Button: 0},
	{Peercrown: 0},
	{Button2: 0},
	{Audio: 0},
	{PeerID: 0},
	{CanShoot: 0}
];

self.InstanceType = {
	HostSprite: class extends self.ISpriteInstance {},
	Multiplayer: class extends self.IInstance {},
	TextMe: class extends self.ITextInstance {},
	PeerSprite: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TextHostPoints: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	TextPeerPoints: class extends self.ITextInstance {},
	Bomb: class extends self.ISpriteInstance {},
	pig: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	HostSprite2: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Hostend: class extends self.ISpriteInstance {},
	Peerend: class extends self.ISpriteInstance {},
	Hostcrown: class extends self.ISpriteInstance {},
	Hosttextend: class extends self.ITextInstance {},
	Peertextend: class extends self.ITextInstance {},
	Thewinner: class extends self.ISpriteInstance {},
	Button: class extends self.IButtonInstance {},
	Peercrown: class extends self.ISpriteInstance {},
	Button2: class extends self.IButtonInstance {},
	Audio: class extends self.IInstance {}
}