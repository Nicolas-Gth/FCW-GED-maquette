import base64
import os

BASE = os.path.dirname(os.path.abspath(__file__))
BUILD_DIR = os.path.join(BASE, 'build')


def read(rel):
    with open(os.path.join(BASE, rel), encoding='utf-8') as f:
        return f.read()


def data_uri(rel):
    b64 = base64.b64encode(open(os.path.join(BASE, rel), 'rb').read()).decode()
    ext = os.path.splitext(rel)[1].lstrip('.').lower()
    mime = 'image/svg+xml' if ext == 'svg' else 'image/png'
    return 'data:%s;base64,%s' % (mime, b64)


html = read('index.html')

html = html.replace(
    '<link rel="icon" type="image/png" href="assets/favicon.png">',
    '<link rel="icon" type="image/png" href="' + data_uri('assets/favicon.png') + '">')

html = html.replace(
    '<script src="js/tailwind.js"></script>',
    '<script>' + read('js/tailwind.js') + '</script>')

html = html.replace(
    '<link rel="stylesheet" href="css/charter.css">',
    '<style>' + read('css/charter.css') + '</style>')
html = html.replace(
    '<link rel="stylesheet" href="css/style.css">',
    '<style>' + read('css/style.css') + '</style>')

logo = data_uri('assets/logo-fcw-2019-blanc.png')
blason = data_uri('assets/separateur-blason.svg')

scripts = [
    'js/partials/sidebar.js',
    'js/partials/view-documents.js',
    'js/partials/view-recent.js',
    'js/partials/view-users.js',
    'js/partials/view-roles.js',
    'js/partials/view-labels.js',
    'js/partials/view-audit.js',
    'js/partials/view-settings.js',
    'js/partials/modal-invite.js',
    'js/partials/modal-upload.js',
    'js/partials/modal-preview.js',
    'js/partials/modal-user.js',
    'js/partials/modal-label.js',
    'js/partials/modal-save-view.js',
    'js/app.js'
]

for src in scripts:
    content = read(src)
    content = content.replace('assets/logo-fcw-2019-blanc.png', logo)
    content = content.replace('assets/separateur-blason.svg', blason)
    tag = '<script src="%s"></script>' % src
    if tag in html:
        html = html.replace(tag, '<script>\n' + content + '\n</script>')
    else:
        print('ATTENTION: tag introuvable pour', src)

os.makedirs(BUILD_DIR, exist_ok=True)
out = os.path.join(BUILD_DIR, 'index.html')
with open(out, 'w', encoding='utf-8') as f:
    f.write(html)

print('OK - build/index.html autonome genere (%d Ko)' % (len(html.encode()) // 1024))
