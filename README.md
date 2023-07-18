# What is this?

A Google Chrome and Microsoft Edge browser extension that performs some basic rudimentary security checks on URLs visited by native-English speakers.

# What does it do?

1. Check if the domain name in the URL contains a hidden non-ASCII character. This is common in phishing and malicious links. [Example](https://news.ycombinator.com/item?id=14119713)

2. Check if the domain name in the URL is obfuscated in such a way that leads to a malicious link, using the new TLDs .zip and .mov [Example](https://medium.com/@bobbyrsec/the-dangers-of-googles-zip-tld-5e1e675e59a5)

If either 1 and/or 2 are are true, an alert popup with a warning will be presented to the user.

# How to install

Review is pending on Chrome Web Store.

Until that happens, here are the steps:

1. Download all these files in this repo, place them in a folder
2. In your browser's extension settings, enable "developer mode"
3. "load unpacked" and select the folder name (from step 1)

# Feedback or thoughts

I look forward to receiving feedback and ideas for improvement.

I'm also looking for collaborators.

# License

MIT

# Credits

- Icon is created by FauzIDEA. [More](https://www.flaticon.com/free-icon/website_2931281)