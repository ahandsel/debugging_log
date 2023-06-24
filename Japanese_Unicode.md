# Japanese Unicode Table
Following is a table of unicode characters for Japanese.  
Note that this table excludes the Kanji characters.

This table is for reference to compare against its similar ASCII characters.  

If you are a developer who works with Japanese characters, you may want to use this table or [Japanese_Unicode.json](Japanese_Unicode.json) to create a text linters or character highlighter to avoid coding with Japanese characters.

I personally use [Highlight Bad Chars - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=wengerk.highlight-bad-chars) and added the Japanese_Unicode.json to the extension's configuration.

Simply add the following to your VSCode settings.json file:

```json
{
  "highlight-bad-chars.additionalUnicodeChars": ["insert_unicode_here", "insert_unicode_here"]
}
```

## Japanese-style punctuation ( 3000 - 303f)
  3000   　  、  。  〃  〄  々  〆  〇  〈  〉  《  》  「  」  『  』  
  3010   【  】  〒  〓  〔  〕  〖  〗  〘  〙  〚  〛  〜  〝  〞  〟  
  3020   〠  〡  〢  〣  〤  〥  〦  〧  〨  〩  〪  〫  〬  〭  〮  〯  
  3030   〰  〱  〲  〳  〴  〵  〶  〷  〸  〹  〺  〻  〼  〽  〾  〿  

## Hiragana ( 3040 - 309f)
  3040   ぀  ぁ  あ  ぃ  い  ぅ  う  ぇ  え  ぉ  お  か  が  き  ぎ  く  
  3050   ぐ  け  げ  こ  ご  さ  ざ  し  じ  す  ず  せ  ぜ  そ  ぞ  た  
  3060   だ  ち  ぢ  っ  つ  づ  て  で  と  ど  な  に  ぬ  ね  の  は  
  3070   ば  ぱ  ひ  び  ぴ  ふ  ぶ  ぷ  へ  べ  ぺ  ほ  ぼ  ぽ  ま  み  
  3080   む  め  も  ゃ  や  ゅ  ゆ  ょ  よ  ら  り  る  れ  ろ  ゎ  わ  
  3090   ゐ  ゑ  を  ん  ゔ  ゕ  ゖ  ゗  ゘  ゙  ゚  ゛  ゜  ゝ  ゞ  ゟ  

## Katakana ( 30a0 - 30ff)
  30a0   ゠  ァ  ア  ィ  イ  ゥ  ウ  ェ  エ  ォ  オ  カ  ガ  キ  ギ  ク  
  30b0   グ  ケ  ゲ  コ  ゴ  サ  ザ  シ  ジ  ス  ズ  セ  ゼ  ソ  ゾ  タ  
  30c0   ダ  チ  ヂ  ッ  ツ  ヅ  テ  デ  ト  ド  ナ  ニ  ヌ  ネ  ノ  ハ  
  30d0   バ  パ  ヒ  ビ  ピ  フ  ブ  プ  ヘ  ベ  ペ  ホ  ボ  ポ  マ  ミ  
  30e0   ム  メ  モ  ャ  ヤ  ュ  ユ  ョ  ヨ  ラ  リ  ル  レ  ロ  ヮ  ワ  
  30f0   ヰ  ヱ  ヲ  ン  ヴ  ヵ  ヶ  ヷ  ヸ  ヹ  ヺ  ・  ー  ヽ  ヾ  ヿ  

## Full-width roman characters and half-width katakana ( ff00 - ffef)
  ff00   ＀  ！  ＂  ＃  ＄  ％  ＆  ＇  （  ）  ＊  ＋  ，  －  ．  ／  
  ff10   ０  １  ２  ３  ４  ５  ６  ７  ８  ９  ：  ；  ＜  ＝  ＞  ？  
  ff20   ＠  Ａ  Ｂ  Ｃ  Ｄ  Ｅ  Ｆ  Ｇ  Ｈ  Ｉ  Ｊ  Ｋ  Ｌ  Ｍ  Ｎ  Ｏ  
  ff30   Ｐ  Ｑ  Ｒ  Ｓ  Ｔ  Ｕ  Ｖ  Ｗ  Ｘ  Ｙ  Ｚ  ［  ＼  ］  ＾  ＿  
  ff40   ｀  ａ  ｂ  ｃ  ｄ  ｅ  ｆ  ｇ  ｈ  ｉ  ｊ  ｋ  ｌ  ｍ  ｎ  ｏ  
  ff50   ｐ  ｑ  ｒ  ｓ  ｔ  ｕ  ｖ  ｗ  ｘ  ｙ  ｚ  ｛  ｜  ｝  ～  ｟  
  ff60   ｠  ｡  ｢  ｣  ､  ･  ｦ  ｧ  ｨ  ｩ  ｪ  ｫ  ｬ  ｭ  ｮ  ｯ  
  ff70   ｰ  ｱ  ｲ  ｳ  ｴ  ｵ  ｶ  ｷ  ｸ  ｹ  ｺ  ｻ  ｼ  ｽ  ｾ  ｿ  
  ff80   ﾀ  ﾁ  ﾂ  ﾃ  ﾄ  ﾅ  ﾆ  ﾇ  ﾈ  ﾉ  ﾊ  ﾋ  ﾌ  ﾍ  ﾎ  ﾏ  
  ff90   ﾐ  ﾑ  ﾒ  ﾓ  ﾔ  ﾕ  ﾖ  ﾗ  ﾘ  ﾙ  ﾚ  ﾛ  ﾜ  ﾝ  ﾞ  ﾟ  
  ffa0   ﾠ  ﾡ  ﾢ  ﾣ  ﾤ  ﾥ  ﾦ  ﾧ  ﾨ  ﾩ  ﾪ  ﾫ  ﾬ  ﾭ  ﾮ  ﾯ  
  ffb0   ﾰ  ﾱ  ﾲ  ﾳ  ﾴ  ﾵ  ﾶ  ﾷ  ﾸ  ﾹ  ﾺ  ﾻ  ﾼ  ﾽ  ﾾ  ﾿  
  ffc0   ￀  ￁  ￂ  ￃ  ￄ  ￅ  ￆ  ￇ  ￈  ￉  ￊ  ￋ  ￌ  ￍ  ￎ  ￏ  
  ffd0   ￐  ￑  ￒ  ￓ  ￔ  ￕ  ￖ  ￗ  ￘  ￙  ￚ  ￛ  ￜ  ￝  ￞  ￟  
  ffe0   ￠  ￡  ￢  ￣  ￤  ￥  ￦  ￧  ￨  ￩  ￪  ￫  ￬  ￭  ￮  ￯  
