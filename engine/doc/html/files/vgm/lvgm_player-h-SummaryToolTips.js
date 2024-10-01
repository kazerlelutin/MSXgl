﻿NDSummary.OnToolTipsLoaded("File:vgm/lvgm_player.h",{248:"<div class=\"NDToolTip TMacro LC\"><div class=\"TTSummary\">Get frequency from option</div></div>",249:"<div class=\"NDToolTip TMacro LC\"><div class=\"TTSummary\">Get format version from option</div></div>",251:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype251\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> LVGM_Play(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">void</span>*&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">loop</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Start music playback.</div></div>",252:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype252\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> LVGM_Stop()</div></div><div class=\"TTSummary\">Stop music playback.</div></div>",253:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype253\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> LVGM_SetFrequency50Hz()</div></div><div class=\"TTSummary\">Change frequency to 50 Hz.</div></div>",254:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype254\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> LVGM_IsFrequency50Hz()</div></div><div class=\"TTSummary\">Check if frequency is 50 Hz.</div></div>",255:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype255\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> LVGM_SetFrequency60Hz()</div></div><div class=\"TTSummary\">Change frequency to 60 Hz.</div></div>",256:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Check if frequency is 60 Hz.</div></div>",257:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype257\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> LVGM_IsPlaying()</div></div><div class=\"TTSummary\">Check if music playing</div></div>",258:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype258\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> LVGM_Resume()</div></div><div class=\"TTSummary\">Resume music playback</div></div>",259:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype259\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> LVGM_Pause()</div></div><div class=\"TTSummary\">Pause music playback</div></div>",260:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype260\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> LVGM_Decode()</div></div><div class=\"TTSummary\">Decode a frame of music</div></div>",261:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype261\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> LVGM_SetPointer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">ptr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Decode a frame of music</div></div>",262:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype262\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 LVGM_GetDevices()</div></div><div class=\"TTSummary\">Get devices list</div></div>",263:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype263\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> LVGM_IncludePSG()</div></div><div class=\"TTSummary\">Is music including PSG data</div></div>",264:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype264\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> LVGM_IncludeOPLL()</div></div><div class=\"TTSummary\">Is music including OPLL/MSX-Music data</div></div>",265:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype265\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> LVGM_IncludeOPL()</div></div><div class=\"TTSummary\">Is music including OPL/MSX-Audio data</div></div>",266:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype266\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> LVGM_IncludeSCC()</div></div><div class=\"TTSummary\">Is music including SCC data</div></div>",267:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype267\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 LVGM_GetDefaultPSGValue()</div></div><div class=\"TTSummary\">Get default PSG value</div></div>",268:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype268\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> LVGM_SetNotifyCallback(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">LVGM_NotifyCB&nbsp;</td><td class=\"PName last\">cb</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set the function to be called when a notification is triggered</div></div>"});