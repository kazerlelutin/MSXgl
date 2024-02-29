﻿NDSummary.OnToolTipsLoaded("File:tool/qrcode_tiny.h",{894:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The error correction level in a QR Code symbol.</div></div>",935:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The mask pattern used in a QR Code symbol.</div></div>",938:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Describes how a segment\'s data bits are interpreted.</div></div>",1001:"<div class=\"NDToolTip TMacro LC\"><div class=\"TTSummary\">Calculates the number of bytes needed to store any QR Code up to and including the given version number, as a compile-time constant. For example, \'u8 buffer[QRCODE_BUFFER_LEN_FOR_VERSION(25)];\' can store any single QR Code from version 1 to 25 (inclusive). The result fits in an i16 (or int16).&nbsp; Requires QRCODE_VERSION_MIN &lt;= n &lt;= QRCODE_VERSION_MAX.</div></div>",1002:"<div class=\"NDToolTip TMacro LC\"><div class=\"TTSummary\">The worst-case number of bytes needed to store one QR Code, up to and including version 40. This value equals 3918, which is just under 4 kilobytes.&nbsp; Use this more convenient value to avoid calculating tighter memory bounds for buffers.</div></div>",1004:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1004\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> QRCode_EncodeText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">text,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td></td><td class=\"PName last\">tempBuffer[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td></td><td class=\"PName last\">qrcode[]</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Encodes the given text string to a QR Code, returning TRUE if successful.&nbsp; If the data is too long to fit in any version in the given range at the given ECC level, then FALSE is returned.</div></div>",1005:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1005\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> QRCode_EncodeSegmentsAdvanced(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const struct</span>&nbsp;</td><td class=\"PType\">QRCode_Segment&nbsp;</td><td class=\"PName last\">segs[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u16&nbsp;</td><td class=\"PName last\">len,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">tempBuffer[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">qrcode[]</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Encodes the given segments to a QR Code, returning TRUE if successful.&nbsp; If the data is too long to fit in any version in the given range at the given ECC level, then FALSE is returned.</div></div>",1102:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1102\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> u8 QRCode_GetSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">qrcode[]</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns the side length of the given QR Code, assuming that encoding succeeded.&nbsp; The result is in the range [21, 177]. Note that the length of the array buffer is related to the side length - every \'u8 qrcode[]\' must have length at least QRCODE_BUFFER_LEN_FOR_VERSION(version), which equals ceil(size^2 / 8 + 1).</div></div>",1103:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1103\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> QRCode_GetModule(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">qrcode[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns the color of the module (pixel) at the given coordinates, which is FALSE for light or TRUE for dark.&nbsp; The top left corner has the coordinates (x=0, y=0).&nbsp; Coordinates must be in bounds.</div></div>",1104:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1104\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">u8 QRCode_GetByte(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">qrcode[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns colors of 8 module (byte) at the given coordinates, which is 0 for light or 1 for dark.&nbsp; The top left corner has the coordinates (x=0, y=0).</div></div>",1105:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1105\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> u8 QRCode_GetVersion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">u8&nbsp;</td><td class=\"PName last\">qrcode[]</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});