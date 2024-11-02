<div align="center" width="100%">
  <img src="./assets/logo.gif" alt="Quick Notes logo" width="200" />
</div>
<div align="center" width="100%">
    <h2>✍🏽 Quick notes</h2>
    <p>A simple bookmarklet for adding notes directly in your browser.</p>
    <img alt="Visitors count" src="https://api.visitorbadge.io/api/VisitorHit?user=AkashRajpurohit&repo=quick-notes&style=flat-square">
    <a href="https://github.com/AkashRajpurohit/quick-notes/actions/workflows/pages/pages-build-deployment"><img src="https://github.com/AkashRajpurohit/quick-notes/actions/workflows/pages/pages-build-deployment/badge.svg"></a>
    <a target="_blank" href="https://github.com/AkashRajpurohit/quick-notes"><img src="https://img.shields.io/github/stars/AkashRajpurohit/quick-notes" /></a>
    <br />
    <p align="center">
      <a href="https://github.com/AkashRajpurohit/quick-notes/issues/new?template=bug_report.yml">Bug report</a>
      ·
      <a href="https://github.com/AkashRajpurohit/quick-notes/issues/new?template=feature_request.yml">Feature request</a>
      ·
      <a href="https://akashrajpurohit.github.io/quick-notes/">Read Docs</a>
    </p>
</div>
<hr />

The **Quick Notes** bookmarklet allows you to take quick notes directly in your browser. Your notes are saved automatically in your browser's local storage, so you can access them anytime.

## 📺 Demo

<video width="100%" controls>
  <source src="./assets/demo.mp4" type="video/mp4">
</video>

https://github.com/user-attachments/assets/70ce1928-8761-4854-8fe2-4ead6f4e297c

## 👨🏻‍💻 How to Add the Bookmarklet

- Click the link below and drag it to your bookmarks bar.
- Alternatively, you can right-click on the link and choose "Bookmark This Link".

> [!NOTE]\
> Open the docs page to view the clickable bookmarklet link.
> 
> https://akashrajpurohit.github.io/quick-notes/#-how-to-add-the-bookmarklet

---

<p align="center">
	<a id='bookmarklet-link' href="javascript:(function()%7Blet%20savedContent%20%3D%20localStorage.getItem('quickNotes')%20%7C%7C%20''%3B%20let%20newWin%20%3D%20window.open()%3B%20if%20(newWin)%20%7B%20newWin.document.title%20%3D%20'Quick%20Notes'%3B%20newWin.document.head.innerHTML%20%3D%20%60%20%3Cstyle%3E%20body%20%7B%20font-size%3A%201.5em%3B%20font-family%3A%20Arial%2C%20Helvetica%2C%20sans-serif%3B%20margin%3A%200%20auto%3B%20max-width%3A%20768px%3B%20word-wrap%3A%20break-word%3B%20padding%3A%2020px%3B%20line-height%3A%201.5%3B%20transition%3A%20background-color%200.5s%2C%20color%200.5s%3B%20%7D%20%40media%20(prefers-color-scheme%3A%20light)%20%7B%20body%20%7B%20background-color%3A%20%23f8f8f8%3B%20color%3A%20%23333%3B%20%7D%20%7D%20%40media%20(prefers-color-scheme%3A%20dark)%20%7B%20body%20%7B%20background-color%3A%20%231e1e1e%3B%20color%3A%20%23f8f8f8%3B%20%7D%20%7D%20%3C%2Fstyle%3E%20%60%3B%20newWin.document.body.setAttribute('contenteditable'%2C%20'true')%3B%20newWin.document.body.setAttribute('autofocus'%2C%20'true')%3B%20newWin.document.body.innerHTML%20%3D%20savedContent%3B%20newWin.document.body.oninput%20%3D%20function%20()%20%7B%20localStorage.setItem('quickNotes'%2C%20newWin.document.body.innerHTML)%3B%20%7D%3B%20%7D%20else%20%7B%20alert(%20'Pop-up%20blocked!%20Please%20allow%20pop-ups%20for%20this%20site%20to%20use%20the%20Quick%20Notes%20feature.'%2C%20)%3B%20%7D%7D)()%3B"><b>Quick Notes</b></a>
</p>

---

## 🔗 How to Use the Bookmarklet

1. Click the bookmark you added to your bookmarks bar.
2. A new window will open with a text area where you can write your notes.
3. As you type, your notes will be automatically saved.
4. Close the window when you're done. Your notes will be available the next time you open the bookmarklet.

## ❕ Important Notes

- Make sure your browser allows pop-ups for the bookmarklet to work.
- If the notes do not appear, check your browser's settings for local storage permissions.

## 🙏🏻 Support

If you found the project helpful, consider giving it a star ⭐️. If you would like to support the project in other ways, you can [buy me a coffee](https://ko-fi.com/akashrajpurohit) or [sponsor me on GitHub](https://github.com/sponsors/AkashRajpurohit).

## 🐛 Bugs or Requests

If you encounter any problems feel free to open an [issue](https://github.com/AkashRajpurohit/quick-notes/issues/new?template=bug_report.yml). If you feel the project is missing a feature, please raise a [ticket](https://github.com/AkashRajpurohit/quick-notes/issues/new?template=feature_request.yml) on GitHub and I'll look into it. Pull requests are also welcome.

## 👀 Who am I?

[![Website Badge](https://img.shields.io/badge/-akashrajpurohit.com-3b5998?logo=google-chrome&logoColor=white)](https://akashrajpurohit.com/?ref=quick-notes)
[![Linkedin Badge](https://img.shields.io/badge/-@AkashRajpurohit-0e76a8?logo=Linkedin&logoColor=white)](https://linkedin.com/in/AkashRajpurohit)
[![Twitter Badge](https://img.shields.io/twitter/follow/akashwhocodes)](https://twitter.com/AkashWhoCodes)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/112372456922065040)](https://mastodon.social/@akashrajpurohit)
