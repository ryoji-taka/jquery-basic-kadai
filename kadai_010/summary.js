$(function() {
  // 5色の配列
  const colors = ['red', 'blue', 'green', 'purple', 'orange'];
  let colorIndex = 0; // 色のインデックス

  // 5種類のテキスト
  const texts = ['こんにちは！', 'こんばんは！', 'おはよう！', 'ありがとう！', 'よろしく！'];
  let textIndex = 0; // テキストのインデックス

  // 文字色を順番に変更
  $('#change-color').on('click', function() {
    $('#target').css('color', colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length; // 次の色へ
  });

  // 文字内容を順番に変更
  $('#change-text').on('click', function() {
    $('#target').text(texts[textIndex]);
    textIndex = (textIndex + 1) % texts.length; // 次のテキストへ
  });

  // フェードアウト（1秒かけて消える）
  $('#fade-out').on('click', function() {
    $('#target').fadeOut(1000);
  });

  // フェードイン（1秒かけて現れる）
  $('#fade-in').on('click', function() {
    $('#target').fadeIn(1000);
  });
});
