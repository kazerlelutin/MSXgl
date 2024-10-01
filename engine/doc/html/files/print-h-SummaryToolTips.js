﻿NDSummary.OnToolTipsLoaded("File:print.h",{676:"<div class=\"NDToolTip TGroup LC\"><div class=\"TTSummary\">Font initialization functions</div></div>",677:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype677\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> Print_Initialize()</div></div><div class=\"TTSummary\">Initialize print module.&nbsp; Must be called after VDP_SetMode().</div></div>",678:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype678\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_SetMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Change current print mode.</div></div>",679:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype679\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_SetFont(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">font</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set the current font (and set mode to RAM).</div></div>",680:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype680\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_SetFontEx(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">patternX,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">patternY,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">sizeX,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">sizeY,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">firstChr,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">lastChr,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">patterns</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set the current font</div></div>",681:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype681\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline const struct</span> Print_Data* Print_GetFontInfo()</div></div><div class=\"TTSummary\">Get first character code</div></div>",682:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype682\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_SetPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UX&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">UY&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set cursor position.</div></div>",683:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype683\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_SetCharSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set character size.</div></div>",684:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype684\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_SetTabSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set tabulation size in pixel.</div></div>",685:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype685\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> Print_SetBitmapFont(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">font</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initialize print module and set a font in RAM.&nbsp; This function requires PRINT_USE_BITMAP compile option to be set to TRUE.</div></div>",686:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype686\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_SetVRAMFont(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">font,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">UY&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set the current font and upload data to VRAM .&nbsp; This function requires PRINT_USE_VRAM compile option to be set to TRUE.</div></div>",687:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype687\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_SetTextFont(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">font,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initialize print module and set a font in RAM.&nbsp; This function requires PRINT_USE_TEXT compile option to be set to TRUE.</div></div>",688:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype688\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_SelectTextFont(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">font,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set print mode to text mode.&nbsp; This function requires PRINT_USE_TEXT compile option to be set to TRUE.</div></div>",689:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype689\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_SetSpriteFont(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">font,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">patIdx,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">sprtIdx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set the current font and upload to Sprite Pattern Table.&nbsp; This function requires PRINT_USE_SPRITE compile option to be set to TRUE.</div></div>",690:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype690\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 Print_GetSpritePattern()</div></div><div class=\"TTSummary\">Get pattern index of the 1st sprite character.&nbsp; This function requires PRINT_USE_SPRITE compile option to be set to TRUE.</div></div>",691:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype691\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 Print_GetSpriteID()</div></div><div class=\"TTSummary\">Get the next sprite index.&nbsp; This function requires PRINT_USE_SPRITE compile option to be set to TRUE.</div></div>",692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype692\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_SetSpriteID(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set the next sprite index.&nbsp; This function requires PRINT_USE_SPRITE compile option to be set to TRUE.</div></div>",693:"<div class=\"NDToolTip TGroup LC\"><div class=\"TTSummary\">Text draw functions</div></div>",694:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype694\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawChar(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">chr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a single character</div></div>",695:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype695\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawCharX(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">c8&nbsp;</td><td class=\"PName last\">chr,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">num</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print the same character many times</div></div>",696:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype696\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">string</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a character string</div></div>",697:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype697\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawHex8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a 8-bits binary value</div></div>",698:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype698\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawHex16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a 16-bits hexadecimal value</div></div>",699:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype699\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawBin8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a 8-bits binary value</div></div>",700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype700\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawHex32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u32&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a 32-bits hexadecimal value This function requires PRINT_USE_32B compile option to be set to TRUE.</div></div>",701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype701\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawInt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">i32&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a 32-bits signed decimal value.&nbsp; This function requires PRINT_USE_32B compile option to be set to TRUE.</div></div>",702:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype702\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawInt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">i16&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a 16-bits signed decimal value.&nbsp; This function requires PRINT_USE_32B compile option to be set to FALSE.</div></div>",703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype703\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Print_Space()</div></div><div class=\"TTSummary\">Print space.</div></div>",704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype704\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Print_Tab()</div></div><div class=\"TTSummary\">Print tabulation.</div></div>",705:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype705\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Print_Return()</div></div><div class=\"TTSummary\">Print return.</div></div>",706:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype706\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawFormat(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td></td><td class=\"PName last\">format,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PSymbols\">...</td><td class=\"last\"></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a formated string with a variable number of parameters.&nbsp; This function requires PRINT_USE_FORMAT compile option to be set to TRUE.</div></div>",708:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype708\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> Print_Clear()</div></div><div class=\"TTSummary\">Clear screen</div></div>",709:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype709\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_Backspace(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">num</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Clear X character back from current cursor position.</div></div>",710:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype710\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_DrawTextAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Draw text at a given position on screen.</div></div>",711:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype711\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_DrawTextAtV(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Draw a vertical text at a given position on screen.</div></div>",712:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype712\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_DrawCharAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\">c8&nbsp;</td><td class=\"PName last\">chr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a single character at a given position.</div></div>",713:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype713\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_DrawCharXAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\">c8&nbsp;</td><td class=\"PName last\">chr,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">len</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print the same character many times at a given position.</div></div>",714:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype714\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_DrawCharYAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\">c8&nbsp;</td><td class=\"PName last\">chr,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">len</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print vertically the same character many times at a given position.</div></div>",715:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype715\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_DrawIntAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\">i16&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a 16-bits signed decimal value at a given position.</div></div>",717:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype717\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_SetColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">text,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">bg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set the draw color.</div></div>",718:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype718\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_SetColorShade(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8*&nbsp;</td><td class=\"PName last\">shade</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set colors shade.&nbsp; This function requires PRINT_COLOR_NUM compile option to be set to greater than 1 value.</div></div>",719:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype719\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_SetShadow(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable,</td></tr><tr><td class=\"PType first\">i8&nbsp;</td><td class=\"PName last\">offsetX,</td></tr><tr><td class=\"PType first\">i8&nbsp;</td><td class=\"PName last\">offsetY,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set shadow effect.&nbsp; This function requires PRINT_USE_FX_SHADOW compile option to be set to TRUE.</div></div>",720:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype720\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_EnableShadow(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Activate/desactivate shadow effect.&nbsp; This function requires PRINT_USE_FX_SHADOW compile option to be set to TRUE.</div></div>",721:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype721\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawTextShadow(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">string,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">i8&nbsp;</td><td class=\"PName last\">offsetX,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">i8&nbsp;</td><td class=\"PName last\">offsetY,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a character string with shadow FX using 2 pass rendering (to have clean shadow over all characters).&nbsp; This function requires PRINT_USE_2_PASS_FX and PRINT_USE_FX_SHADOW compile options to be set to TRUE.</div></div>",722:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype722\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_SetOutline(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set shadow effect.&nbsp; This function requires PRINT_USE_FX_OUTLINE compile option to be set to TRUE.</div></div>",723:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype723\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_EnableOutline(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Activate/desactivate shadow effect This function requires PRINT_USE_FX_OUTLINE compile option to be set to TRUE.</div></div>",724:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype724\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawTextOutline(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">string,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a character string using outline FX.&nbsp; This function requires PRINT_USE_2_PASS_FX and PRINT_USE_FX_OUTLINE compile options to be set to TRUE.</div></div>",725:"<div class=\"NDToolTip TGroup LC\"><div class=\"TTSummary\">Boxes draw functions</div></div>",726:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype726\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawLineH(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">len</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Draw an horizontal line using characters This function requires PRINT_USE_GRAPH compile option to be set to TRUE.</div></div>",727:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype727\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawLineV(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">len</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Draw a vertical line using characters This function requires PRINT_USE_GRAPH compile option to be set to TRUE.</div></div>",728:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype728\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Print_DrawBox(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">width,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">height</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Draw a box using characters This function requires PRINT_USE_GRAPH compile option to be set to TRUE.</div></div>",729:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype729\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_DrawTextAlign(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">str,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">align</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Print a character string</div></div>",730:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype730\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Print_DrawTextAlignAt(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">str,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">align</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Draw text at a given position on screen.</div></div>"});