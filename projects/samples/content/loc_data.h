// Generated by MSXgl on 2024-09-16 22:33:53
#pragma once
#include "core.h"

// Language definition
#define LANG_EN 0
#define LANG_FR 1
#define LANG_JA 2
#define LANG_DA 3
#define LANG_NL 4
#define LANG_FI 5
#define LANG_DE 6
#define LANG_IS 7
#define LANG_GA 8
#define LANG_IT 9
#define LANG_PL 10
#define LANG_PT 11
#define LANG_ES 12
#define LANG_UK 13
#define LANG_SK 14
#define LANG_KO 15
#define LANG_AR 16
#define LANG_RU 17
#define LANG_SV 18
#define LANG_TR 19
#define LANG_MAX 20

// Text ID definition
#define TEXT_TITLE 0
#define TEXT_LANG_LABEL 1
#define TEXT_LANG_VALUE 2
#define TEXT_LANG_VALUE_EN 3
#define TEXT_FONT_LABEL 4
#define TEXT_PANGRAM_LABEL 5
#define TEXT_PANGRAM_VALUE 6
#define TEXT_GLYPH_LABEL 7
#define TEXT_GLYPH_VALUE 8
#define TEXT_MAX 9

// Localization data table
const c8* const g_LocData[LANG_MAX][TEXT_MAX] =
{
	// EN
	{
		"MSXgl - Localization sample", // TEXT_TITLE
		"Language", // TEXT_LANG_LABEL
		"English", // TEXT_LANG_VALUE
		"English", // TEXT_LANG_VALUE_EN
		"Font", // TEXT_FONT_LABEL
		"Sample", // TEXT_PANGRAM_LABEL
		"The quick brown fox jumps over the lazy dog.", // TEXT_PANGRAM_VALUE
		"Alphabet", // TEXT_GLYPH_LABEL
		"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", // TEXT_GLYPH_VALUE
	},
	// FR
	{
		"MSXgl - Sample de traduction", // TEXT_TITLE
		"Langue", // TEXT_LANG_LABEL
		"Fran\x87\x61is", // TEXT_LANG_VALUE
		"French", // TEXT_LANG_VALUE_EN
		"Police", // TEXT_FONT_LABEL
		"Exemple", // TEXT_PANGRAM_LABEL
		"Voix ambigu\x89 d'un coeur qui, au z\x82phyr, pr\x82\x66\x8Are les jattes de kiwis.", // TEXT_PANGRAM_VALUE
		"Alphabet", // TEXT_GLYPH_LABEL
		"Aa\x1C\x85\x1C\x83\x92\x91\x42\x62\x43\x63\x80\x87\x44\x64\x45\x65\x90\x82\x1C\x8A\x1C\x88\x1C\x89\x46\x66GgHhIi\x1C\x8C\x1C\x8BJjKkLlMmNnOo\x1C\x93OEoePpQqRrSsTtUu\x1C\x97\x1C\x96\x9A\x81VvWwXxYy\x1C\x98Zz", // TEXT_GLYPH_VALUE
	},
	// JA
	{
		"MSXgl - \xDB\xB0\xB6\xD8\xBE\xDE\xB0\xBC\xAE\xDD\xA5\xBB\xDD\xCC\xDF\xD9", // TEXT_TITLE
		"\x99\xDE\xFD\x9A\xDE", // TEXT_LANG_LABEL
		"\xE6\xEE\xFD\x9A\xDE", // TEXT_LANG_VALUE
		"Japanese", // TEXT_LANG_VALUE_EN
		"\xCC\xAB\xDD\xC4", // TEXT_FONT_LABEL
		"\xBB\xDD\xCC\xDF\xD9", // TEXT_PANGRAM_LABEL
		"\x92\xFB\xEA\xE6\xEE\xED\xE4\xE1\xF8\xE7\xF9\x86\xFC\x96\xF6\xE0\xFA\x9F\xE2\xE8\xE5\xF7\xF1\x93\x1C\xE9\x95\x98\xF4\xEF\x99\xEC\x9A\x94\xE3\x91\x9B\x97\xF5\xF2\xF0\x9C\x1C\xEB\xF3\x9E\x9D\xA1", // TEXT_PANGRAM_VALUE
		"\x96\xE5", // TEXT_GLYPH_LABEL
		"\x87\x91\x88\x92\x89\x93\x8A\x94\x8B\x95\x96\x96\xDE\x97\x97\xDE\x98\x98\xDE\x99\x99\xDE\x9A\x9A\xDE\x9B\x9B\xDE\x9C\x9C\xDE\x9D\x9D\xDE\x9E\x9E\xDE\x9F\x9F\xDE\xE0\xE0\xDE\xE1\xE1\xDE\x8F\xE2\xE2\xDE\xE3\xE3\xDE\xE4\xE4\xDE\xE5\xE6\xE7\xE8\xE9\xEA\xEA\xDE\xEA\xDF\xEB\xEB\xDE\xEB\xDF\xEC\xEC\xDE\xEC\xDF\xED\xED\xDE\xED\xDF\xEE\xEE\xDE\xEE\xDF\xEF\xF0\xF1\xF2\xF3\x8C\xF4\x8D\xF5\x8E\xF6\xF7\xF8\xF9\xFA\xFB\x1C\xFC\x1C\x1C\x86\xFD\x93\xDE\x1C\x1C\xA7\xB1\xA8\xB2\xA9\xB3\xAA\xB4\xAB\xB5\xB6\xB6\xDE\xB7\xB7\xDE\xB8\xB8\xDE\xB9\xB9\xDE\xBA\xBA\xDE\xBB\xBB\xDE\xBC\xBC\xDE\xBD\xBD\xDE\xBE\xBE\xDE\xBF\xBF\xDE\xC0\xC0\xDE\xC1\xC1\xDE\xAF\xC2\xC2\xDE\xC3\xC3\xDE\xC4\xC4\xDE\xC5\xC6\xC7\xC8\xC9\xCA\xCA\xDE\xCA\xDF\xCB\xCB\xDE\xCB\xDF\xCC\xCC\xDE\xCC\xDF\xCD\xCD\xDE\xCD\xDF\xCE\xCE\xDE\xCE\xDF\xCF\xD0\xD1\xD2\xD3\xAC\xD4\xAD\xD5\xAE\xD6\xD7\xD8\xD9\xDA\xDB\x1C\xDC\x1C\x1C\xA6\xDD\xB3\xDE\x1C\x1C\xDC\xDE\x1C\x1C\xA6\xDE", // TEXT_GLYPH_VALUE
	},
	// DA
	{
		"MSXgl - Eksempel p\x86 lokalisering", // TEXT_TITLE
		"Sprog", // TEXT_LANG_LABEL
		"Dansk", // TEXT_LANG_VALUE
		"Danish", // TEXT_LANG_VALUE_EN
		"Skrifttype", // TEXT_FONT_LABEL
		"Eksempel", // TEXT_PANGRAM_LABEL
		"H\x1Cj bly gom vandt fr\x91k sexquiz p\x86 wc.", // TEXT_PANGRAM_VALUE
		"Alfabet", // TEXT_GLYPH_LABEL
		"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz\x92\x91\x1C\x1C\x8F\x86", // TEXT_GLYPH_VALUE
	},
	// NL
	{
		"MSXgl - Voorbeeld voor lokalisatie", // TEXT_TITLE
		"Taal", // TEXT_LANG_LABEL
		"Nederlands", // TEXT_LANG_VALUE
		"Dutch", // TEXT_LANG_VALUE_EN
		"Lettertype", // TEXT_FONT_LABEL
		"Voorbeeld", // TEXT_PANGRAM_LABEL
		"Pa's wijze lynx bezag vroom het fikse aquaduct.", // TEXT_PANGRAM_VALUE
		"Alfabet", // TEXT_GLYPH_LABEL
		"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", // TEXT_GLYPH_VALUE
	},
	// FI
	{
		"MSXgl - Lokalisointin\x84yte", // TEXT_TITLE
		"Kieli", // TEXT_LANG_LABEL
		"Finnish", // TEXT_LANG_VALUE
		"Finnish", // TEXT_LANG_VALUE_EN
		"Fontti", // TEXT_FONT_LABEL
		"N\x84yte", // TEXT_PANGRAM_LABEL
		"Wienil\x84inen siouxia puhuva \x94kyzombi diggaa \x8Fsan roquefort-tacoja.", // TEXT_PANGRAM_VALUE
		"Aakkoset", // TEXT_GLYPH_LABEL
		"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz\x8F\x86\x8E\x84\x99\x94\x1C\x1C\x1C\x1C", // TEXT_GLYPH_VALUE
	},
	// DE
	{
		"MSXgl - Lokalisierungsbeispiel", // TEXT_TITLE
		"Sprache", // TEXT_LANG_LABEL
		"Deutsch", // TEXT_LANG_VALUE
		"German", // TEXT_LANG_VALUE_EN
		"Schriftart", // TEXT_FONT_LABEL
		"Beispiel", // TEXT_PANGRAM_LABEL
		"Victor jagt zw\x94lf Boxk\x84mpfer quer \x81\x62\x65r den gro\xE1\x65n Sylter Deich.", // TEXT_PANGRAM_VALUE
		"Alphabet", // TEXT_GLYPH_LABEL
		"Aa\x8E\x84\x42\x62\x43\x63\x44\x64\x45\x65\x46\x66GgHhIiJjKkLlMmNnOo\x99\x94PpQqRrSsTtUu\x9A\x81VvWwXxYyZz\x1C\xE1", // TEXT_GLYPH_VALUE
	},
	// IS
	{
		"MSXgl - Sta\x1Csetningars\x1Cni", // TEXT_TITLE
		"Tungum\xA0l", // TEXT_LANG_LABEL
		"\xA1slenskur", // TEXT_LANG_VALUE
		"Icelandic", // TEXT_LANG_VALUE_EN
		"Leturger\x1C", // TEXT_FONT_LABEL
		"S\x1Cnishorn", // TEXT_PANGRAM_LABEL
		"K\x91mi n\x1C \x94xi h\x82r, ykist \x1Cj\xA2\x66um n\xA3 b\x91\x1Ci v\xA1l og \xA0\x64repa.", // TEXT_PANGRAM_VALUE
		"Stafr\xA2\x66i\x1C", // TEXT_GLYPH_LABEL
		"Aa\x1C\xA0\x42\x62\x44\x64\x1C\x1C\x45\x65\x90\x82\x46\x66GgHhIi\x1C\xA1JjKkLlMmNnOo\x1C\xA2PpRrSsTtUu\x1C\xA3VvXxYy\x1C\x1C\x1C\x1C\x92\x91\x99\x94Zz", // TEXT_GLYPH_VALUE
	},
	// GA
	{
		"MSXgl - Sampla log\xA0naithe", // TEXT_TITLE
		"Teanga", // TEXT_LANG_LABEL
		"Gaeilge", // TEXT_LANG_VALUE
		"Irish", // TEXT_LANG_VALUE_EN
		"Cl\xA2", // TEXT_FONT_LABEL
		"Sampla", // TEXT_PANGRAM_LABEL
		"d'Ith cat m\xA2r dubh na h\x82isc lofa go pras.", // TEXT_PANGRAM_VALUE
		"Aib\xA1tir", // TEXT_GLYPH_LABEL
		"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", // TEXT_GLYPH_VALUE
	},
	// IT
	{
		"MSXgl - Esempio di localizzazione", // TEXT_TITLE
		"Lingua", // TEXT_LANG_LABEL
		"Italiano", // TEXT_LANG_VALUE
		"Italian", // TEXT_LANG_VALUE_EN
		"Carattere", // TEXT_FONT_LABEL
		"Esempio", // TEXT_PANGRAM_LABEL
		"Pranzo d'acqua fa volti sghembi.", // TEXT_PANGRAM_VALUE
		"Alfabeto", // TEXT_GLYPH_LABEL
		"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", // TEXT_GLYPH_VALUE
	},
	// PL
	{
		"MSXgl - Pr\xA2\x62ka lokalizacji", // TEXT_TITLE
		"J\x1Czyk", // TEXT_LANG_LABEL
		"Polski", // TEXT_LANG_VALUE
		"Polish", // TEXT_LANG_VALUE_EN
		"Czcionka", // TEXT_FONT_LABEL
		"Pr\xA2\x62ka", // TEXT_PANGRAM_LABEL
		"PrStr\xA2\x1C pchn\x1C\x1C ko\x1C\x1C w quiz g\x1C\x64\x1C\x62 vel fax myj\x1C.", // TEXT_PANGRAM_VALUE
		"Alfabet", // TEXT_GLYPH_LABEL
		"Aa\x1C\x1C\x42\x62\x43\x63\x1C\x1C\x44\x64\x45\x65\x1C\x1C\x46\x66GgHhIiJjKkLl\x1C\x1CMmNn\x1C\x1COo\x1C\xA2PpQqRrSs\x1C\x1CTtUuVvWwXxYyZz\x1C\x1C\x1C\x1C", // TEXT_GLYPH_VALUE
	},
	// PT
	{
		"MSXgl - Amostra de localiza\x87\xB1o", // TEXT_TITLE
		"Idioma", // TEXT_LANG_LABEL
		"Portugu\x88s", // TEXT_LANG_VALUE
		"Portuguese", // TEXT_LANG_VALUE_EN
		"Fonte", // TEXT_FONT_LABEL
		"Amostra", // TEXT_PANGRAM_LABEL
		"R\x82 s\xA2 que v\x88 gal\xB1 sexy p\x93r kiwi talhado \x85 for\x87\x61 em ba\xA3 p\xB5\x65 ju\xA1za m\xA0 em p\x83nico.", // TEXT_PANGRAM_VALUE
		"Alfabeto", // TEXT_GLYPH_LABEL
		"Aa\x1C\xA0\x1C\x83\xB0\xB1\x1C\x85\x42\x62\x43\x63\x44\x64\x45\x65\x90\x82\x1C\x88\x1C\x8A\x46\x66GgHhIi\x1C\xA1\x1C\x8DJjKkLlMmNnOo\x1C\xA2\x1C\x93\xB4\xB5\x1C\x95PpQqRrSsTtUu\x1C\xA3\x1C\x97VvWwXxYyZz", // TEXT_GLYPH_VALUE
	},
	// ES
	{
		"MSXgl - Muestra de localizaci\xA2n", // TEXT_TITLE
		"Idioma", // TEXT_LANG_LABEL
		"Espa\xA4ol", // TEXT_LANG_VALUE
		"Spanish", // TEXT_LANG_VALUE_EN
		"Fuente", // TEXT_FONT_LABEL
		"Muestra", // TEXT_PANGRAM_LABEL
		"Benjam\xA1n pidi\xA2 una bebida de kiwi y fresa. No\x82, sin verg\x81\x65nza, la m\xA0s exquisita champa\xA4\x61 del men\xA3.", // TEXT_PANGRAM_VALUE
		"Alfabeto", // TEXT_GLYPH_LABEL
		"AaBbCcDdEeFfGgHhIiJjKkLlMmNn\xA5\xA4OoPpQqRrSsTtUuVvWwXxYyZz", // TEXT_GLYPH_VALUE
	},
	// UK
	{
		"MSXgl - \xFA\xD2\xC1\xDA\xCF\xCB \xCC\xCF\xCB\xC1\xCC\x1C\xDA\xC1\xC3\x1C\x1C", // TEXT_TITLE
		"\xED\xCF\xD7\xC1", // TEXT_LANG_LABEL
		"\xF5\xCB\xD2\xC1\x1C\xCE\xD3\xD8\xCB\xC1", // TEXT_LANG_VALUE
		"Ukrainian", // TEXT_LANG_VALUE_EN
		"\xFB\xD2\xC9\xC6\xD4", // TEXT_FONT_LABEL
		"\xFA\xD2\xC1\xDA\xCF\xCB", // TEXT_PANGRAM_LABEL
		"\xFD\xC1\xD3\xD4\xD1\xCD \xC2'\x1C\xDB \xD6\xD5\xCB \x1C\xC8 \xC7\xCC\xC9\xC3\xC0 \xD7 \xC6\xCF\xCE \xCA \x1C\xC5\xC4\xDA\xD8 \xD0\xD2\x1C\xDE.", // TEXT_PANGRAM_VALUE
		"\xE1\xCC\xC6\xC1\xD7\x1C\xD4", // TEXT_GLYPH_LABEL
		"\xE1\xC1\xE2\xC2\xF7\xD7\xE7\xC7\x1C\x1C\xE4\xC4\xE5\xC5\x1C\x1C\xF6\xD6\xFA\xDA\xE9\xC9\x1C\x1C\x1C\x1C\xEA\xCA\xEB\xCB\xEC\xCC\xED\xCD\xEE\xCE\xEF\xCF\xF0\xD0\xF2\xD2\xF3\xD3\xF4\xD4\xF5\xD5\xE6\xC6\xE8\xC8\xE3\xC3\xFE\xDE\xFB\xDB\xFD\xDD\xF8\xD8\xE0\xC0\xF1\xD1", // TEXT_GLYPH_VALUE
	},
	// SK
	{
		"MSXgl - Uk\xA0\x1Cka lokaliz\xA0\x63ie", // TEXT_TITLE
		"Jazyk", // TEXT_LANG_LABEL
		"Sloven\x1Cina", // TEXT_LANG_VALUE
		"Slovak", // TEXT_LANG_VALUE_EN
		"P\xA1smo", // TEXT_FONT_LABEL
		"Uk\xA0\x1Cka", // TEXT_PANGRAM_LABEL
		"K\x1C\x64\x65\x1C \x1C\x1C\x61stn\x1C\x63h \x1C\x61t\x1Cov u\x1C\xA1 pri \xA3st\xA1 V\xA0hu m\x1Ckveho ko\x1C\x61 obhr\x1Cza\x1C k\x93ru a \x1Cra\x1C \x1C\x65rstv\x82 m\x84so.", // TEXT_PANGRAM_VALUE
		"Abeceda", // TEXT_GLYPH_LABEL
		"Aa\x1C\xA0\x8E\x84\x42\x62\x43\x63\x1C\x1C\x44\x64\x1C\x1C\x45\x65\x90\x82\x46\x66GgHhIi\x1C\xA1JjKkLl\x1C\x1C\x1C\x1CMmNn\x1C\x1COo\x1C\xA2\x1C\x93PpQqRr\x1C\x1CSs\x1C\x1CTt\x1C\x1CUu\x1C\xA3VvWwXxYy\x1C\x1CZz\x1C\x1C", // TEXT_GLYPH_VALUE
	},
	// KO
	{
		"MSXgl - \x1C\x1C\x1C \x1C\x1C", // TEXT_TITLE
		"\x1C\x1C", // TEXT_LANG_LABEL
		"\x1C\x1C\x1C", // TEXT_LANG_VALUE
		"Korean", // TEXT_LANG_VALUE_EN
		"\x1C\xFB", // TEXT_FONT_LABEL
		"\x1C\x1C", // TEXT_PANGRAM_LABEL
		"\x1C \xED\x1C\x1C? \x1C\x1C \x1C\x1C\x1C \x1C \x1C\x1C\x1C \x1C\x1C\x1C \x1C\xC3\x1C\xDF. \x1C\x1C, \x1C \xBB \x1C\x1C?", // TEXT_PANGRAM_VALUE
		"\x1C\x1C\x1C", // TEXT_GLYPH_LABEL
		"\x86\x88\x89\x8B\x8C\x8D\x8F\x91\x92\x94\x95\x96\x97\x98\x99\x9B\x9D\x9F\xA1\xA2\xA3\xA4\xA5\xA6\x87\x8A\x8E\x93\x90\x1C\x1C\x9A\x1C\x9E\x9C\xA0\x1C\x1C\x1C\x1C", // TEXT_GLYPH_VALUE
	},
	// AR
	{
		"\xE4\xCE\xA9\xE7\xA5\xCC\xE2\x80\xE4\xD0\xD4\xB9\x80\x8D\x80MSXgl", // TEXT_TITLE
		"\xE4\xC4\xCC", // TEXT_LANG_LABEL
		"\xD6\xA3\xE7\xB9", // TEXT_LANG_VALUE
		"Arabic", // TEXT_LANG_VALUE_EN
		"\xB7\xAD\xCC\xE2", // TEXT_FONT_LABEL
		"\xE4\xD0\xD4\xB9", // TEXT_PANGRAM_LABEL
		"\xC9\xE7\xE8\xD9\x80\xE5\xCC\xA9\xA3\x80\xC7\xCC\xC4\xCE\xE9\x80\xE7\xB5\xAD\xD9\x80\xA4\xE9\xA7\x80\xEB\xCC\xB9\x80\xA4\xE9\xA5\xCA\xCE\x80\xCF\xD4\xB8\xB9\x80\xD1\xD9\xB1\x80\xE9\xE6\xE9\x80\xC1\xB7\xE3\xC8\x80\xE7\xAF\x80\xD3\xCC\x80\xCF\xD4\xCA\xAB\x80\xB4\xD0", // TEXT_PANGRAM_VALUE
		"\xE4\xD4\xE5\xA9\xA3\xED\xE2", // TEXT_GLYPH_LABEL
		"\xD6\xD4\xD4\x80\xE9\xF1\xE9\x80\xD3\xD2\xD2\x80\xD1\xD0\xD0\x80\xCF\xCE\xCE\x80\xCD\xCC\xCC\x80\xCB\xCA\xCA\x80\xC9\xC8\xC8\x80\xC7\xC6\xC6\x80\xC5\xC4\xC2\x80\xC1\xC0\xB9\x80\xB8\xB8\xB8\x80\xB7\xB7\xB7\x80\xB6\xB5\xB5\x80\xB4\xB3\xB3\x80\xB2\xB1\xB1\x80\xB0\xAF\xAF\x80\xE8\xF1\xE8\x80\xE7\xF1\xE7\x80\xE6\xF1\xE6\x80\xE5\xF1\xE5\x80\xAE\xAD\xAD\x80\xAC\xAB\xAB\x80\xAA\xA9\xA9\x80\xA8\xA7\xA7\x80\xA6\xA5\xA5\x80\xA4\xA3\xA3\x80\xE3\xF1\xE2\x80\xA2\x80\xDF\x80\xE0\x80\xD9", // TEXT_GLYPH_VALUE
	},
	// RU
	{
		"MSXgl - \xEF\xC2\xD2\xC1\xDA\xC5\xC3 \xCC\xCF\xCB\xC1\xCC\xC9\xDA\xC1\xC3\xC9\xC9", // TEXT_TITLE
		"\xF1\xDA\xD9\xCB", // TEXT_LANG_LABEL
		"\xF2\xD5\xD3\xD3\xCB\xC9\xCA", // TEXT_LANG_VALUE
		"Russian", // TEXT_LANG_VALUE_EN
		"\xFB\xD2\xC9\xC6\xD4", // TEXT_FONT_LABEL
		"\xEF\xC2\xD2\xC1\xDA\xC5\xC3", // TEXT_PANGRAM_LABEL
		"\xF3\xDF\xC5\xDB\xD8 \xC5\xDD\x1C \xDC\xD4\xC9\xC8 \xCD\xD1\xC7\xCB\xC9\xC8 \xC6\xD2\xC1\xCE\xC3\xD5\xDA\xD3\xCB\xC9\xC8 \xC2\xD5\xCC\xCF\xCB, \xC4\xC1 \xD7\xD9\xD0\xC5\xCA \xD6\xC5 \xDE\xC1\xC0.", // TEXT_PANGRAM_VALUE
		"\xE1\xCC\xC6\xC1\xD7\xC9\xD4", // TEXT_GLYPH_LABEL
		"\xE1\xC1\xE2\xC2\xF7\xD7\xE7\xC7\xE4\xC4\xE5\xC5\x1C\x1C\xF6\xD6\xFA\xDA\xE9\xC9\xEA\xCA\xEB\xCB\xEC\xCC\xED\xCD\xEE\xCE\xEF\xCF\xF0\xD0\xF2\xD2\xF3\xD3\xF4\xD4\xF5\xD5\xE6\xC6\xE8\xC8\xE3\xC3\xFE\xDE\xFB\xDB\xFD\xDD\x1C\xDF\xF9\xD9\xF8\xD8\xFC\xDC\xE0\xC0\xF1\xD1", // TEXT_GLYPH_VALUE
	},
	// SV
	{
		"MSXgl - Exempel p\x86 lokalisering", // TEXT_TITLE
		"Spr\x86k", // TEXT_LANG_LABEL
		"Svenska", // TEXT_LANG_VALUE
		"Swedish", // TEXT_LANG_VALUE_EN
		"Typsnitt", // TEXT_FONT_LABEL
		"Exempel", // TEXT_PANGRAM_LABEL
		"Yxm\x94rdaren Julia Blomqvist p\x86 f\x84ktning i Schweiz.", // TEXT_PANGRAM_VALUE
		"Alfabet", // TEXT_GLYPH_LABEL
		"Aa\x8F\x86\x8E\x84\x42\x62\x43\x63\x44\x64\x45\x65\x46\x66GgHhIiJjKkLlMmNnOo\x99\x94PpQqRrSsTtUuVvWwXxYyZz", // TEXT_GLYPH_VALUE
	},
	// TR
	{
		"MSXgl - Yerelle\x1Ctirme \x94rne\x1Ci", // TEXT_TITLE
		"Dil", // TEXT_LANG_LABEL
		"T\x81rk\x87\x65", // TEXT_LANG_VALUE
		"Turkish", // TEXT_LANG_VALUE_EN
		"Yaz\x1C Tipi", // TEXT_FONT_LABEL
		"\x99rnek", // TEXT_PANGRAM_LABEL
		"Pijamal\x1C hasta ya\x1C\x1Cz \x1Cof\x94re \x87\x61\x62ucak g\x81vendi.", // TEXT_PANGRAM_VALUE
		"Alfabe", // TEXT_GLYPH_LABEL
		"AaBbCc\x80\x87\x44\x64\x45\x65\x46\x66Gg\x1C\x1CHhI\x1C\x1CiJjKkLlMmNnOo\x99\x94PpRrSs\x1C\x1CTtUu\x9A\x81VvYyZzQqWwXx", // TEXT_GLYPH_VALUE
	},
};