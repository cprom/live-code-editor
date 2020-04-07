
function update() {
  var idoc = document.getElementById('iframe').contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}

function setupEditor() {
  var theme = document.getElementById('theme')
  var themeColor = theme.value

  window.editor = ace.edit("editor");
  editor.setTheme(`ace/theme/${themeColor}`);
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(
    `<!DOCTYPE html>
<html>
    <head>
      <style>

        h1 {
          color: red;
}
</style>
    </head>

    <body>

      <h1>Welcome to the Sandbox</h1>



    </body>

  </html>`, 1); //1 = moves cursor to end

  editor.getSession().on('change', function () {
    update();
  });

  editor.focus();
  editor.setOptions({
    fontSize: "12pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();

