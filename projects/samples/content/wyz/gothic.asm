;-----------------------------------------------------------------------------
; WYZ file merged for MSXgl on 25/05/2024 23:14:18,06 
;-----------------------------------------------------------------------------
.module wyz_gothic 
_gothic_Song:: .DW SONG00 

; Tabla de instrumentos
_gothic_Inst:: .DW PAUTA_0,0,PAUTA_2,PAUTA_3

; Tabla de efectos
_gothic_FX:: .DW 0

;Pautas (instrumentos)
;Instrumento 'Piano'
PAUTA_0:	.DB	14,0,13,0,12,0,11,0,11,0,10,0,10,0,10,0,9,0,9,0,9,0,9,0,8,0,8,0,8,0,8,0,7,0,7,0,7,0,7,0,136
;Instrumento 'Piano +1'
PAUTA_2:	.DB	78,0,13,0,12,0,10,0,10,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,10,0,10,0,139
;Instrumento 'Piano eco'
PAUTA_3:	.DB	9,0,9,0,8,0,8,0,8,0,7,0,7,0,7,0,7,0,7,0,129

;Efectos

;Frecuencias para las notas
_gothic_Freq:: .DW 0,0
.DW 1711,1614,1524,1438,1358,1281,1210,1142,1078,1017
.DW 960,906,855,807,762,719,679,641,605,571
.DW 539,509,480,453,428,404,381,360,339,320
.DW 302,285,269,254,240,227,214,202,190,180
.DW 170,160,151,143,135,127,120,113,107,101
.DW 95,90,85,80,76,71,67,64,60,57
; Song data 
SONG00: 
; MSXbin 1.4.1 by Guillaume "Aoineko" Blanchard (2022) under CC BY-SA free license
; File generated on Sat May 25 23:14:17 2024
; Soure file: D:\Dev\Private\MSX\MSXgl\projects\samples\datasrc\wyz\gothic.mus
_gothic_Data::
.db 0x01,0x31,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x3F,0x00,0x00,0xCE
.db 0xFE,0xDA,0xFE,0xDD,0xFE,0xDA,0xFE,0xE1,0xFE,0xDD,0xFE,0xDC,0xFE,0xDA,0xFE,0xCE
.db 0xFE,0xDA,0xFE,0xDD,0xFE,0xDA,0xFE,0xE1,0xFE,0xDD,0xFE,0xDC,0xFE,0xDA,0xFE,0xCE
.db 0xFE,0xDA,0xFE,0xDD,0xFE,0xDA,0xFE,0xE1,0xFE,0xDD,0xFE,0xDC,0xFE,0xDA,0xFE,0xD3
.db 0xFE,0xDA,0xFE,0xDF,0xFE,0xDA,0xFE,0xE2,0xFE,0xDF,0xFE,0xDA,0xFE,0xD8,0xFE,0xCE
.db 0xFE,0xDA,0xFE,0xDD,0xFE,0xDA,0xFE,0xE1,0xFE,0xDD,0xFE,0xDC,0xFE,0xDA,0xFE,0xD5
.db 0xFE,0xDC,0xFE,0xE1,0xFE,0xDC,0xFE,0xE4,0xFE,0xE1,0xFE,0xDC,0xFE,0xE1,0xFE,0xCA
.db 0xFE,0xD6,0xFE,0xDA,0xFE,0xD6,0xFE,0xDD,0xFE,0xDA,0xFE,0xD8,0xFE,0xD6,0xFE,0xD1
.db 0xFE,0xDD,0xFE,0xE1,0xFE,0xDD,0xFE,0xDA,0xFE,0xDD,0xFE,0xE1,0xFE,0xDD,0xFE,0xD8
.db 0xFE,0xDF,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xD8,0xFE,0xDF,0xFE,0xE4,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xCE,0xFE,0xDA,0xFE,0xDD,0xFE,0xDA,0xFE
.db 0xE1,0xFE,0xDD,0xFE,0xDC,0xFE,0xDA,0xFE,0xD3,0xFE,0xDA,0xFE,0xDF,0xFE,0xDA,0xFE
.db 0xE2,0xFE,0xDF,0xFE,0xDA,0xFE,0xD8,0xFE,0xCE,0xFE,0xDA,0xFE,0xDD,0xFE,0xDA,0xFE
.db 0xE1,0xFE,0xDD,0xFE,0xDC,0xFE,0xDA,0xFE,0xD5,0xFE,0xDC,0xFE,0xE1,0xFE,0xDC,0xFE
.db 0xE4,0xFE,0xE1,0xFE,0xDC,0xFE,0xE1,0xFE,0xCA,0xFE,0xD6,0xFE,0xDA,0xFE,0xD6,0xFE
.db 0xDD,0xFE,0xDA,0xFE,0xD8,0xFE,0xD6,0xFE,0xD1,0xFE,0xDD,0xFE,0xE1,0xFE,0xDD,0xFE
.db 0xDA,0xFE,0xDD,0xFE,0xE1,0xFE,0xDD,0xFE,0xD8,0xFE,0xDF,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xD8,0xFE,0xDF
.db 0xFE,0xE4,0xFE,0xDF,0xFE,0xE4,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xD9
.db 0xFE,0xDD,0xFE,0xE0,0xFE,0xDD,0xFE,0xD9,0xFE,0xE0,0xFE,0xDD,0xFE,0xE0,0xFE,0xD9
.db 0xFE,0xE0,0xFE,0xE5,0xFE,0xE0,0xFE,0xE9,0xFE,0xE5,0xFE,0xE0,0xFE,0xE5,0xFE,0xDD
.db 0xFE,0xE0,0xFE,0xE4,0xFE,0xE0,0xFE,0xE9,0xFE,0xE4,0xFE,0xE0,0xFE,0xE4,0xFE,0xDD
.db 0xFE,0xE0,0xFE,0xE4,0xFE,0xE0,0xFE,0xDD,0xFE,0xE0,0xFE,0xE4,0xFE,0xE0,0xFE,0xDD
.db 0xFE,0xE4,0xFE,0xE9,0xFE,0xE4,0xFE,0xE0,0xFE,0xE4,0xFE,0xE9,0xFE,0xE4,0xFE,0xE0
.db 0xFE,0xE5,0xFE,0xE9,0xFE,0xEC,0xFE,0xE9,0xFE,0xE7,0xFE,0xE5,0xFE,0xE0,0xFE,0xDD
.db 0xFE,0xE0,0xFE,0xE5,0xFE,0xE9,0xFE,0xE7,0xFE,0xE5,0xFE,0xE0,0xFE,0xDD,0xFE,0xDB
.db 0xFE,0xDF,0xFE,0xE2,0xFE,0xE7,0xFE,0xE5,0xFE,0xE2,0xFE,0xDF,0xFE,0xDB,0xFE,0xD9
.db 0xFE,0xE5,0xFE,0xE9,0xFE,0xC1,0xFE,0xDB,0xFE,0xE7,0xFE,0xEB,0xFE,0xC1,0xFE,0xD1
.db 0xFE,0xD8,0xFE,0xDD,0xFE,0xE0,0xFE,0xE4,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0x00,0x81,0x7E,0x3F,0x03,0x00,0xCE
.db 0xFE,0xDA,0xFE,0xDD,0xFE,0xDA,0xFE,0xE1,0xFE,0xDD,0xFE,0xDC,0xFE,0x9A,0xBE,0x7E
.db 0x81,0x7E,0xCE,0xFE,0xDA,0xFE,0xDD,0xFE,0xDA,0xFE,0xE1,0xFE,0xDD,0xFE,0xDC,0xFE
.db 0x9A,0xBE,0x7E,0x3F,0x00,0x00,0xE1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xE6,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xA9,0xBE,0xAD,0xBE,0xEE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xE4,0xFE,0xE2
.db 0xFE,0xE6,0xFE,0xFE,0xFE,0xFE,0xE1,0xFE,0xFE,0xFE,0xFE,0xE6,0xFE,0xFE,0xFE,0xFE
.db 0xE8,0xFE,0xFE,0xFE,0xFE,0xED,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xC1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xEE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xEE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xE6,0xFE
.db 0xED,0xFE,0xFE,0xFE,0xFE,0xE9,0xFE,0xFE,0xFE,0xFE,0xE1,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xAB,0xBE,0xA9,0xBE,0xEB,0xFE,0xFE,0xFE,0xFE,0xE4,0xFE,0xE6,0xFE,0xE8
.db 0xFE,0xEB,0xFE,0xF0,0xFE,0xF2,0xFE,0xF4,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF7
.db 0xFE,0x3F,0x02,0x00,0xF4,0xFE,0xFE,0xFE,0xFE,0x3F,0x00,0x00,0xFC,0xFE,0xFE,0xFE
.db 0xFE,0xE1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xE6,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xA9,0xBE,0xAD,0xBE,0xEE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xE4,0xFE,0xE2,0xFE,0xE6,0xFE,0xFE,0xFE
.db 0xFE,0xE1,0xFE,0xFE,0xFE,0xFE,0xE6,0xFE,0xFE,0xFE,0xFE,0xE8,0xFE,0xFE,0xFE,0xFE
.db 0xED,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xEE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xEE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xE6,0xFE,0xED,0xFE,0xFE,0xFE,0xFE
.db 0xE9,0xFE,0xFE,0xFE,0xFE,0xE1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xAB,0xBE,0xA9
.db 0xBE,0xE7,0xFE,0xFE,0xFE,0xFE,0xE4,0xFE,0xE6,0xFE,0xE7,0xFE,0xEB,0xFE,0xF0,0xFE
.db 0xF2,0xFE,0xF3,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xF5,0xFE,0xF3,0xFE,0xE9,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xEC,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xB8,0xBE,0xB7,0xBE,0xF8,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF5,0xFE,0xF0,0xFE,0xFE,0xFE,0xFE,0xF5,0xFE
.db 0xFE,0xFE,0xFE,0xF0,0xFE,0xFE,0xFE,0xFE,0xF5,0xFE,0xFE,0xFE,0xFE,0xF5,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xF8,0xFE,0xF7
.db 0xFE,0xF1,0xFE,0xFE,0xFE,0xFE,0xF7,0xFE,0xFE,0xFE,0xFE,0xEC,0xFE,0xFE,0xFE,0xFE
.db 0xF5,0xFE,0xFE,0xFE,0xFE,0xF1,0xFE,0xFE,0xFE,0xFE,0xF7,0xFE,0xFE,0xFE,0xFE,0xEC
.db 0xFE,0xFE,0xFE,0xFE,0xF5,0xFE,0xFE,0xFE,0xFE,0xF3,0xFE,0xFE,0xFE,0xFE,0xF7,0xFE
.db 0xFE,0xFE,0xFE,0xEE,0xFE,0xFE,0xFE,0xFE,0xF5,0xFE,0xFE,0xFE,0xFE,0xF1,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xEC,0xFE,0xEE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xF5,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xE9,0xFE,0xEC,0xFE,0xF0,0xFE,0xF5,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xF8,0xFE,0xFE,0xFE,0xFE,0xFC,0xFE,0xFE,0xFE,0xFE,0x00,0xC1,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0x3F,0x00,0x00,0xE6,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xED,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xAB,0xBE,0x81,0xBE,0xE6,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1
.db 0xFE,0xFE,0xFE,0xFE,0xED,0xFE,0xEB,0xFE,0xED,0xFE,0xFE,0xFE,0xFE,0xE6,0xFE,0xFE
.db 0xFE,0xFE,0xED,0xFE,0xFE,0xFE,0xFE,0xEF,0xFE,0xFE,0xFE,0xFE,0xF0,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xF2,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF0,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xEE,0xFE,0xF0,0xFE,0xFE,0xFE,0xFE,0xF0,0xFE,0xFE,0xFE
.db 0xFE,0xE9,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0x81,0x7E,0x3F,0x03,0x00
.db 0xEB,0xFE,0xFE,0xFE,0xFE,0xE4,0xFE,0xE6,0xFE,0xE8,0xFE,0xEB,0xFE,0xF0,0xFE,0xF2
.db 0xFE,0xF4,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xB7,0xBE,0x7E,0xC1,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0x3F,0x00,0x00,0xE6,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xED,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xAB,0xBE,0x81
.db 0xBE,0xE6,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE
.db 0xFE,0xED,0xFE,0xEB,0xFE,0xED,0xFE,0xFE,0xFE,0xFE,0xE6,0xFE,0xFE,0xFE,0xFE,0xED
.db 0xFE,0xFE,0xFE,0xFE,0xEF,0xFE,0xFE,0xFE,0xFE,0xF0,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF2
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF0,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xEE,0xFE,0xF0,0xFE,0xFE,0xFE,0xFE,0xF0,0xFE,0xFE,0xFE,0xFE,0xE9,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0x7E,0x3F,0x03,0x00,0xE7,0xFE,0xFE
.db 0xFE,0xFE,0xE4,0xFE,0xE6,0xFE,0xE7,0xFE,0xEB,0xFE,0xF0,0xFE,0xF2,0xFE,0xF3,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF5
.db 0xFE,0xB3,0xBE,0x7E,0x3F,0x00,0x00,0xF5,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF8,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF8,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xC1,0xFE,0xEC,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xF7,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE
.db 0xFE,0xFE,0xF8,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xFC,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xF8,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xF3,0xFE,0xFE,0xFE
.db 0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xF8,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE
.db 0xF3,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xF8,0xFE,0xFE,0xFE,0xFE,0xC1
.db 0xFE,0xFE,0xFE,0xFE,0xF3,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xF8,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xF3,0xFE,0xF7,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xF0,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xC1,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE,0xFE
.db 0xFE,0x00,0xC1,0x00,0x00
; Total bytes: 1749
; End of file 
_gothic_End:: 
