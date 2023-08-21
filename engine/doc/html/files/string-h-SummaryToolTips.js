﻿NDSummary.OnToolTipsLoaded("File:string.h",{26:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype26\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline bool</span> Char_IsNum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">c8&nbsp;</td><td class=\"PName last\">chr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if a given character is numeric (0-9)</div></div>",28:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline bool</span> Char_IsAlpha(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">c8&nbsp;</td><td class=\"PName last\">chr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if a given character is alphabetic (A-Za-z)</div></div>",30:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype30\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline bool</span> Char_IsAlphaNum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">c8&nbsp;</td><td class=\"PName last\">chr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if a given character is alphanumeric (alphabet letter and numbers)</div></div>",37:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype37\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> u8 String_Length(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get the length of a given string</div></div>",134:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype134\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> String_Copy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">dst,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td class=\"PName last\">src</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Copy a source string to a destination buffer</div></div>",994:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype994\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> String_FromUInt8ZT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\">c8*&nbsp;</td><td class=\"PName last\">string</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a zero-terminated string from a 8-bits unsigned integer String buffer must be at least 4 bytes length (will be padded with \'0\')</div></div>",995:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype995\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> String_FromUInt8(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\">c8*&nbsp;</td><td class=\"PName last\">string</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a string from a 8-bits unsigned integer (string is not zero-terminated) String buffer must be at least 3 bytes length (will be padded with \'0\') Original version derived from Galandros work (https://&#8203;wikiti&#8203;.brandonw&#8203;.net&#8203;/index&#8203;.php&#8203;?title=Z80_Routines:Other:DispA)</div></div>",996:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype996\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> String_FromUInt16ZT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\">c8*&nbsp;</td><td class=\"PName last\">string</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a zero-terminated string from a 16-bits unsigned integer String buffer must be at least 6 bytes length (will be padded with \'0\')</div></div>",997:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype997\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> String_FromUInt16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\">c8*&nbsp;</td><td class=\"PName last\">string</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Create a string from a 16-bits unsigned integer (string is not zero-terminated) String buffer must be at least 5 bytes length (will be padded with \'0\') Original version by Milos &quot;baze&quot; Bazelides (http://&#8203;map&#8203;.grauw&#8203;.nl&#8203;/sources&#8203;/external&#8203;/z80bits&#8203;.html&#8203;#5&#8203;.1)</div></div>",998:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype998\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> String_Format(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">c8*&nbsp;</td><td></td><td class=\"PName last\">dest,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">c8*&nbsp;</td><td></td><td class=\"PName last\">format,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PSymbols\">...</td><td class=\"last\"></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Build a zero-terminated string</div></div>"});