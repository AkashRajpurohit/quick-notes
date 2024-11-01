let savedContent = localStorage.getItem('quickNotes') || '';
let newWin = window.open();
if (newWin) {
  newWin.document.title = 'Quick Notes';
  newWin.document.head.innerHTML = `
      <style>
        body {
          font-size: 3em;
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
          padding: 20px;
          line-height: 1.5;
          transition: background-color 0.5s, color 0.5s;
        }
        @media (prefers-color-scheme: light) {
          body {
            background-color: #f8f8f8;
            color: #333;
          }
        }
        @media (prefers-color-scheme: dark) {
          body {
            background-color: #1e1e1e;
            color: #f8f8f8;
          }
        }
      </style>
    `;
  newWin.document.body.setAttribute('contenteditable', 'true');
  newWin.document.body.setAttribute('autofocus', 'true');
  newWin.document.body.innerHTML = savedContent;
  newWin.document.body.oninput = function () {
    localStorage.setItem('quickNotes', newWin.document.body.innerHTML);
  };
} else {
  alert(
    'Pop-up blocked! Please allow pop-ups for this site to use the Quick Notes feature.',
  );
}
