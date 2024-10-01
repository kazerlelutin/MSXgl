﻿NDSummary.OnToolTipsLoaded("File:bios_hook.h",{1052:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1052\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_SetHookCallback(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">hook,</td></tr><tr><td class=\"PType first\">callback&nbsp;</td><td class=\"PName last\">cb</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set a safe hook interslot jump to a given function</div></div>",1053:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1053\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_SetHookDirectCallback(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">hook,</td></tr><tr><td class=\"PType first\">callback&nbsp;</td><td class=\"PName last\">cb</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set a Hook to jump directly to a given function</div></div>",1054:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1054\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_SetHookInterSlotCallback(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">hook,</td></tr><tr><td class=\"PType first\">u32&nbsp;</td><td class=\"PName last\">slot,</td></tr><tr><td class=\"PType first\">callback&nbsp;</td><td class=\"PName last\">cb</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set a Hook to jump to a given function in a given slot ID</div></div>",1055:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1055\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_ClearHook(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">hook</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Clear a Hook (set RET asm code)</div></div>",1056:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1056\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_BackupHook(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">hook,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">void</span>*&nbsp;</td><td class=\"PName last\">buffer</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Backup hook content into a buffer (must be 5 bytes length). The buffer content can been call at any time using Call() function</div></div>"});