// ==========================================
// LOGIQUE JAVASCRIPT (Interactivité)
// ==========================================

// Injection des partiels dans leurs emplacements réservés
document.addEventListener('DOMContentLoaded', function () {
    var mounts = {
        'partial-sidebar': PARTIALS.sidebar,
        'partial-view-documents': PARTIALS.viewDocuments,
        'partial-view-calendar': PARTIALS.viewCalendar,
        'partial-view-recent': PARTIALS.viewRecent,
        'partial-view-users': PARTIALS.viewUsers,
        'partial-view-roles': PARTIALS.viewRoles,
        'partial-view-labels': PARTIALS.viewLabels,
        'partial-view-audit': PARTIALS.viewAudit,
        'partial-view-settings': PARTIALS.viewSettings,
        'partial-modal-invite': PARTIALS.modalInvite,
        'partial-modal-upload': PARTIALS.modalUpload,
        'partial-modal-preview': PARTIALS.modalPreview,
        'partial-modal-user': PARTIALS.modalUser,
        'partial-modal-label': PARTIALS.modalLabel,
        'partial-modal-role': PARTIALS.modalRole,
        'partial-modal-save-view': PARTIALS.modalSaveView,
        'partial-modal-delete-view': PARTIALS.modalDeleteView,
        'partial-modal-access-check': PARTIALS.modalAccessCheck,
        'partial-modal-doc-history': PARTIALS.modalDocHistory,
        'partial-modal-doc-access': PARTIALS.modalDocAccess,
        'partial-modal-share': PARTIALS.modalShare,
        'partial-modal-revoke-access': PARTIALS.modalRevokeAccess
    };

    Object.keys(mounts).forEach(function (id) {
        var el = document.getElementById(id);
        if (el && mounts[id]) {
            el.innerHTML = mounts[id];
        }
    });

    document.querySelectorAll('#view-labels .labels-tbody').forEach(function (tb) {
        renumberLabels(tb);
    });

    syncSavedViewSelect();

    initFlyActions();

    setDateRangeMode(false);

    initUploadEventSelect();

    var uploadDate = document.getElementById('upload-doc-date');
    if (uploadDate) {
        var now = new Date();
        uploadDate.value = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    }

    var t = calendarStateToday();
    CAL_STATE.year = t.year;
    CAL_STATE.month = t.month;
    CAL_STATE.view = 'month';
    renderCalendar();

    document.title = VIEW_TITLES['view-documents'];
});

var VIEW_TITLES = {
    'view-recent': 'Activité récente',
    'view-documents': 'Documents',
    'view-calendar': 'Calendrier',
    'view-users': 'Utilisateurs',
    'view-roles': 'Rôles et accès',
    'view-labels': 'Gestion des libellés',
    'view-audit': 'Historique des actions',
    'view-settings': 'Paramètres du compte'
};

// Fonction pour changer de vue depuis le menu
function switchView(viewId, btnElement) {
    document.querySelectorAll('.app-view').forEach(view => {
        view.classList.add('hidden-view');
    });
    document.getElementById(viewId).classList.remove('hidden-view');

    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.className = "menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors";
    });
    if (btnElement) {
        btnElement.className = "menu-btn w-full flex items-center gap-3 bg-primary brightness-125 text-white px-3 py-2 rounded-md transition-colors";
    }

    document.title = VIEW_TITLES[viewId] || 'Documents';
}

// Navigation programmatique (ex: depuis l'historique)
function navigateTo(viewId) {
    var btn = document.querySelector('.menu-btn[data-view="' + viewId + '"]');
    switchView(viewId, btn);
}

// ==========================================
// REPLI DE LA SIDEBAR (poignée)
// ==========================================
function toggleSidebar() {
    var collapsed = document.body.classList.toggle('sidebar-collapsed');
    var t = document.getElementById('sidebar-toggle');
    if (t) t.title = collapsed ? 'Cliquer pour afficher le menu' : 'Cliquer pour masquer le menu';
}

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && !e.altKey && (e.key === 'b' || e.key === 'B')) {
        e.preventDefault();
        toggleSidebar();
    }
});

// Fonction pour afficher ou masquer une modale
function toggleModal(modalId, show) {
    const modal = document.getElementById(modalId);
    if (show) {
        modal.classList.remove('hidden-view');
    } else {
        modal.classList.add('hidden-view');
    }
}

// ==========================================
// FICHE UTILISATEUR (Popup)
// ==========================================
var USERS_DB = {
    'Marc Lemoine': {
        email: 'm.lemoine@cge.fr',
        status: 'Actif',
        statusClass: 'badge-success',
        lastLogin: '24/08/2026 - 16:12',
        roles: [
            { name: 'Membre de la direction CGE', period: 'Depuis le 12/01/2025' },
            { name: 'Secrétaire de séance', period: '10/08/2026 → 30/09/2026' }
        ]
    },
    'Sophie Durant': {
        email: 's.durant@audit-externe.be',
        status: 'Inactif',
        statusClass: 'badge-danger',
        lastLogin: 'Jamais connectée',
        roles: [
            { name: 'Auditeur externe', period: 'Rôle planifié - débute le 10/09/2026' }
        ]
    },
    'Denis Buchet': {
        email: 'd.buchet@chimay-gestion.be',
        status: 'Actif',
        statusClass: 'badge-success',
        lastLogin: '22/08/2026 - 14:40',
        roles: [
            { name: 'Partenaire externe CGE', period: 'Jusqu au 31/12/2026' }
        ]
    },
    'Philippe Dumont': {
        email: 'p.dumont@chimay-gestion.be',
        status: 'Actif',
        statusClass: 'badge-success',
        lastLogin: '24/08/2026 - 16:42',
        roles: [
            { name: 'Administrateur système', period: 'Depuis le 01/02/2024' }
        ]
    },
    'Julie Stavrakas': {
        email: 'j.stavrakas@chimay-gestion.be',
        status: 'Actif',
        statusClass: 'badge-success',
        lastLogin: '21/08/2026 - 16:30',
        roles: [
            { name: 'Assistant de direction', period: 'Depuis le 03/03/2026' }
        ]
    },
    'Laurent Petit': {
        email: 'l.petit@externe.be',
        status: 'Inactif',
        statusClass: 'badge-danger',
        lastLogin: '15/05/2026 - 10:02',
        roles: [
            { name: 'Auditeur externe', period: 'Révoqué le 16/05/2026' }
        ]
    }
};

var AVATAR_COLORS = ['avatar-blue', 'avatar-teal', 'avatar-green', 'avatar-magenta', 'avatar-purple', 'avatar-orange', 'avatar-red'];

function avatarColorFor(name) {
    var sum = 0;
    for (var i = 0; i < name.length; i++) sum += name.charCodeAt(i);
    return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

function openUserPopup(name) {
    var user = USERS_DB[name];
    if (!user) return;

    var parts = name.split(' ');
    var initials = parts[0].charAt(0) + (parts.length > 1 ? parts[parts.length - 1].charAt(0) : '');

    var avatar = document.getElementById('user-popup-avatar');
    avatar.className = 'avatar w-16 h-16 text-xl ' + avatarColorFor(name);
    avatar.textContent = initials;
    document.getElementById('user-popup-name').textContent = name;
    document.getElementById('user-popup-email').textContent = user.email;
    document.getElementById('user-popup-lastlogin').textContent = user.lastLogin;

    var statusEl = document.getElementById('user-popup-status');
    statusEl.className = 'badge mt-1 ' + user.statusClass;
    statusEl.textContent = user.status;

    var rolesList = document.getElementById('user-popup-roles');
    rolesList.innerHTML = '';
    user.roles.forEach(function (role) {
        var li = document.createElement('li');
        li.className = 'flex items-center justify-between bg-gray-50 rounded-md px-4 py-2.5';
        li.innerHTML = '<span class="font-medium text-gray-800 text-sm">' + role.name + '</span><span class="text-xs text-gray-500">' + role.period + '</span>';
        rolesList.appendChild(li);
    });

    toggleModal('modal-user', true);
}

// ==========================================
// DÉPÔT DE DOCUMENT : ANNEXES / EXTRAITS
// ==========================================
function addUploadFiles(input, listId) {
    var list = document.getElementById(listId);
    if (!list) return;
    Array.prototype.forEach.call(input.files || [], function (f) {
        var li = document.createElement('li');
        li.className = 'flex items-center gap-2 text-sm text-gray-700';
        li.innerHTML = '<svg class="w-4 h-4 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg><span class="truncate">' + f.name + '</span>';
        list.appendChild(li);
    });
    input.value = '';
}

// ==========================================
// APERÇU DE DOCUMENT (Popup)
// ==========================================
var PREVIEW_FILE = '';

var DOC_ANNEXES = {
    'Compte Rendu CA Mars 2026.pdf': ['Plan de trésorerie 03-2026.xlsx', 'Liste de présence 15-03-2026.pdf'],
    'Procès Verbal CA Avril 2026.pdf': ['2026fcw028 - Annexe PV OA FCW du 09-04-2026 - Présentation CSRD 2025.pptx'],
    '2026fcw024 - PV OA FCW du 09-04-2026.doc': ['Annexe 1 - Rapport d’activité 2025.pdf', 'Annexe 2 - Liste de présence.pdf']
};

var DOC_META = {
    'compte rendu ca mars 2026.pdf': { version: 3, desc: 'Compte rendu de la séance du conseil d’administration du mois de mars 2026.' },
    'procès verbal ca janvier 2026.pdf': { version: 2, desc: 'Procès-verbal de la séance de janvier 2026.' },
    'procès verbal ca avril 2026.pdf': { version: 4, desc: 'Procès-verbal de la séance d’avril 2026, validé après modifications.' },
    '2026fcw006 - pv oa fcw du 23-01-2026.doc': { version: 1, desc: 'Procès-verbal de la séance du 23 janvier 2026.' },
    '2026fcw024 - pv oa fcw du 09-04-2026.doc': { version: 2, desc: 'Procès-verbal de la séance du 9 avril 2026.' },
    'bilan financier annuel.xlsx': { version: 1, desc: 'Bilan financier annuel consolidé de la société.' },
    'rapport annuel 2025.pdf': { version: 3, desc: 'Rapport annuel présenté à l’assemblée générale.' }
};

var TYPE_DESC = {
    'PV': 'Procès-verbal de la séance.',
    'CNVC': 'Convocation à la séance.',
    'PROC': 'Procuration pour la séance.',
    'CPT': 'Document comptable de la période.',
    'BDGT': 'Budget prévisionnel.',
    'NOT': 'Note préparatoire.',
    'PRES': 'Support de présentation.',
    'RA': 'Rapport annuel.',
    'BETU': 'Document relatif aux bourses d’étude.',
    'ANX': 'Annexe au document principal.',
    'EXTR': 'Extrait de document.'
};

var PAPERCLIP_SVG = '<svg class="w-3.5 h-3.5 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>';

function openPreview(title, filename) {
    var file = filename || title;
    PREVIEW_FILE = file;
    document.getElementById('preview-title').textContent = title.replace(/\.[a-z0-9]+$/i, '');
    var isXls = /\.xlsx?$/i.test(file);
    var isDoc = /\.docx?$/i.test(file);
    var isPpt = /\.pptx?$/i.test(file);
    var svg = isPpt
        ? '<path d="M2 3h20" /><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /><path d="m7 21 5-5 5 5" />'
        : isXls
        ? '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M8 13h2" /><path d="M14 13h2" /><path d="M8 17h2" /><path d="M14 17h2" />'
        : '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />';
    ['preview-icon-header', 'preview-icon-body'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.innerHTML = svg;
        el.classList.remove('text-red-500', 'text-green-500', 'text-blue-500', 'text-orange-500');
        el.classList.add(isPpt ? 'text-orange-500' : (isXls ? 'text-green-500' : (isDoc ? 'text-blue-500' : 'text-red-500')));
    });
    var annexes = DOC_ANNEXES[file];
    if (!annexes) {
        var annexKey = Object.keys(DOC_ANNEXES).find(function (key) { return key.toLowerCase() === file.toLowerCase(); });
        if (annexKey) annexes = DOC_ANNEXES[annexKey];
    }
    annexes = annexes || [];
    var annexSec = document.getElementById('preview-annexes-section');
    var annexList = document.getElementById('preview-annexes-list');
    if (annexSec && annexList) {
        if (annexes.length) {
            annexSec.classList.remove('hidden-view');
            annexList.innerHTML = annexes.map(function (a) {
                var safe = a.replace(/'/g, "\\'");
                return '<li class="flex items-center gap-2 min-w-0"><button type="button" onclick="openPreview(\'' + safe + '\')" class="flex items-center gap-2 min-w-0 text-left group"><span class="shrink-0">' + PAPERCLIP_SVG + '</span><span class="text-gray-700 truncate group-hover:text-primary group-hover:underline">' + a + '</span></button></li>';
            }).join('');
        } else {
            annexSec.classList.add('hidden-view');
            annexList.innerHTML = '';
        }
    }
    updatePreviewLabels(file);
    var parents = [];
    Object.keys(DOC_ANNEXES).forEach(function (p) {
        DOC_ANNEXES[p].forEach(function (a) {
            if (a.toLowerCase() === file.toLowerCase()) parents.push(p);
        });
    });
    var parSec = document.getElementById('preview-parent-section');
    var parList = document.getElementById('preview-parent-list');
    if (parSec && parList) {
        if (parents.length) {
            parSec.classList.remove('hidden-view');
            parList.innerHTML = parents.map(function (p) {
                var safe = p.replace(/'/g, "\\'");
                return '<li class="min-w-0"><button type="button" onclick="openPreview(\'' + safe + '\')" class="flex items-center gap-2 min-w-0 text-left group"><svg class="w-3.5 h-3.5 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg><span class="text-gray-700 truncate group-hover:text-primary group-hover:underline">' + p.replace(/\.[a-z0-9]+$/i, '') + '</span></button></li>';
            }).join('');
        } else {
            parSec.classList.add('hidden-view');
            parList.innerHTML = '';
        }
    }
    toggleModal('modal-preview', true);
}

function updatePreviewLabels(file) {
    var labelsEl = document.getElementById('preview-labels');
    var eventsEl = document.getElementById('preview-events');
    var found = Array.prototype.filter.call(document.querySelectorAll('#docs-tbody tr'), function (r) {
        return (r.getAttribute('data-sort0') || '').toLowerCase() === file.toLowerCase();
    })[0] || null;
    var metaKey = file.toLowerCase();
    var meta = DOC_META[metaKey] || null;
    var h = 0;
    for (var i = 0; i < metaKey.length; i++) h = (h * 31 + metaKey.charCodeAt(i)) % 997;
    var version = meta ? meta.version : (1 + h % 4);
    var by = found && found.children[3] ? found.children[3].textContent.trim() : '—';
    var deposit = found && found.children[4] ? found.children[4].textContent.trim() : '';
    var metaLine = document.getElementById('preview-meta-line');
    if (metaLine) metaLine.textContent = 'Version ' + version + ' · Déposé par ' + by + (deposit ? ' le ' + deposit : '');
    var infoDate = document.getElementById('preview-info-date');
    if (infoDate) infoDate.textContent = found && found.children[1] ? found.children[1].textContent.trim() : '—';
    var infoBy = document.getElementById('preview-info-by');
    if (infoBy) infoBy.textContent = by;
    var infoVer = document.getElementById('preview-info-version');
    if (infoVer) infoVer.textContent = version;
    var infoDesc = document.getElementById('preview-info-desc');
    if (infoDesc) {
        if (meta && meta.desc) {
            infoDesc.textContent = meta.desc;
        } else {
            var type = found ? (found.getAttribute('data-type') || '').split(/\s+/)[0] : '';
            infoDesc.textContent = TYPE_DESC[type] || 'Document de la plateforme.';
        }
    }
    if (found) {
        var tmp = document.createElement('div');
        tmp.innerHTML = found.children[2] ? found.children[2].innerHTML : '';
        tmp.querySelectorAll('.badge-event').forEach(function (b) { b.remove(); });
        if (labelsEl) labelsEl.innerHTML = tmp.innerHTML;
        var evHtml = rowEventIds(found).map(function (id) {
            var ev = eventById(id);
            return ev ? '<span class="badge badge-event">' + eventDisplayName(ev) + '</span>' : '';
        }).join(' ');
        if (eventsEl) eventsEl.innerHTML = evHtml || '<span class="text-xs text-gray-400">Aucune séance</span>';
    } else {
        if (labelsEl) labelsEl.innerHTML = '<span class="text-xs text-gray-400">Aucun libellé</span>';
        if (eventsEl) eventsEl.innerHTML = '<span class="text-xs text-gray-400">Aucune séance</span>';
    }
}

// ==========================================
// HISTORIQUE D'UN DOCUMENT (Popup)
// ==========================================
function pad2(n) {
    return String(n).padStart(2, '0');
}

function addDaysIso(iso, n) {
    var p = iso.split('-');
    if (p.length !== 3) return iso;
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n);
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
}

function isoToDisplay(iso) {
    var p = iso.split('-');
    if (p.length !== 3) return iso;
    return p[2] + '/' + p[1] + '/' + p[0];
}

function dhUserCell(name) {
    if (name === 'Système (SSO)') return '<td class="px-6 py-4 font-medium text-gray-900">' + name + '</td>';
    return '<td class="px-6 py-4"><button onclick="navigateTo(\'view-users\'); openUserPopup(\'' + name + '\')" class="font-medium text-primary hover:underline">' + name + '</button></td>';
}

function openDocHistory(title, btn) {
    var row = btn.closest('tr') || btn.closest('.tree-doc-grid');
    var by = (row && row.children[3]) ? row.children[3].textContent.trim() : 'Philippe Dumont';
    var sort4 = row ? (row.getAttribute('data-sort4') || '') : '';
    var base = sort4 || '2026-08-24';
    var clean = title.replace(/\.[a-z0-9]+$/i, '');

    var el = document.getElementById('dh-title');
    if (el) el.textContent = clean;

    var steps = [
        { day: 0, time: '09:15:00', user: by, badge: 'badge-success', action: 'Création', desc: 'A déposé « ' + clean + ' » (version 1)' },
        { day: 0, time: '10:02:00', user: by, badge: 'badge-success', action: 'Consultation', desc: 'A consulté « ' + clean + ' »' },
        { day: 1, time: '14:02:00', user: by, badge: 'badge-orange', action: 'Mise à jour', desc: 'A publié la version 2 de « ' + clean + ' »' },
        { day: 2, time: '09:40:00', user: 'Philippe Dumont', badge: 'badge-success', action: 'Consultation', desc: 'A consulté « ' + clean + ' »' },
        { day: 3, time: '11:12:00', user: 'Julie Stavrakas', badge: 'badge-success', action: 'Consultation', desc: 'A consulté « ' + clean + ' »' },
        { day: 4, time: '16:45:00', user: 'Denis Buchet', badge: 'badge-success', action: 'Téléchargement', desc: 'A téléchargé « ' + clean + ' »' }
    ];

    var html = '';
    steps.forEach(function (s) {
        var iso = addDaysIso(base, s.day);
        var stamp = isoToDisplay(iso) + ' - ' + s.time;
        html += '<tr class="hover:bg-gray-50 transition-colors">'
            + '<td class="px-6 py-4 text-gray-500">' + stamp + '</td>'
            + dhUserCell(s.user)
            + '<td class="px-6 py-4"><span class="badge ' + s.badge + '">' + s.action + '</span></td>'
            + '<td class="px-6 py-4 text-gray-500">Document</td>'
            + '<td class="px-6 py-4 text-gray-600">' + s.desc + '</td>'
            + '</tr>';
    });
    document.getElementById('dh-tbody').innerHTML = html;
    toggleModal('modal-doc-history', true);
}

// ==========================================
// ACCÈS NOMINATIFS SUR UN DOCUMENT (Popup)
// ==========================================
function daToggleInvite() {
    var sel = document.getElementById('da-user');
    document.getElementById('da-invite-wrap').classList.toggle('hidden-view', sel.value !== '__invite');
}

function openDocAccess(title, btn) {
    var sel = document.getElementById('da-user');
    if (sel) sel.value = '__invite';
    var email = document.getElementById('da-invite-email');
    if (email) email.value = '';
    var wrap = document.getElementById('da-invite-wrap');
    if (wrap) {
        wrap.classList.toggle('hidden-view', sel.value !== '__invite');
    }
    var priv = document.getElementById('da-privileges');
    if (priv) {
        priv.querySelectorAll('input[type="checkbox"]:checked').forEach(function (c) {
            c.checked = false;
            msUpdate(c);
        });
    }
    var from = document.getElementById('da-from');
    if (from) from.value = '';
    var to = document.getElementById('da-to');
    if (to) to.value = '';
    var titleEl = document.getElementById('da-title');
    if (titleEl) titleEl.textContent = title.replace(/\.[a-z0-9]+$/i, '');
    toggleModal('modal-doc-access', true);
}

// ==========================================
// URL DE PARTAGE D'UN DOCUMENT (Popup)
// ==========================================
function shareLinkWithToken(on) {
    var f = currentDocumentFilters();
    var parts = [];
    if ((f.search || '').trim()) parts.push('search=' + encodeURIComponent(f.search.trim()));
    if (f.entity.length) parts.push('entity=' + f.entity.map(encodeURIComponent).join(','));
    if (f.organ.length) parts.push('organ=' + f.organ.map(encodeURIComponent).join(','));
    if (f.type.length) parts.push('type=' + f.type.map(encodeURIComponent).join(','));
    if (f.from) parts.push('from=' + encodeURIComponent(f.from));
    if (f.to) parts.push('to=' + encodeURIComponent(f.to));
    if (f.grouping && f.grouping.length) parts.push('grouping=' + f.grouping.map(encodeURIComponent).join(','));
    if (on) parts.push('token=x7f2k9');
    var qs = parts.length ? '?' + parts.join('&') : '';
    return 'https://ged.chimaywartoise.be/share/documents' + qs;
}

function openShareLink(title, btn) {
    var nameEl = document.getElementById('share-doc-name');
    if (nameEl) nameEl.textContent = title.replace(/\.[a-z0-9]+$/i, '');
    var input = document.getElementById('share-link-input');
    var toggle = document.getElementById('share-link-toggle');
    var warn = document.getElementById('share-anonymous-warning');
    if (toggle) toggle.checked = false;
    if (input) input.value = shareLinkWithToken(false);
    if (warn) warn.classList.add('hidden-view');
    toggleModal('modal-share', true);
}

function onShareToggle(cb) {
    var input = document.getElementById('share-link-input');
    var warn = document.getElementById('share-anonymous-warning');
    if (input) input.value = shareLinkWithToken(cb.checked);
    if (warn) warn.classList.toggle('hidden-view', !cb.checked);
}

function copyShareLink() {
    var input = document.getElementById('share-link-input');
    if (!input || !input.value) return;
    var done = function () { alert('Lien copié dans le presse-papiers !'); };
    input.select();
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(input.value).then(done, function () {
            document.execCommand('copy');
            done();
        });
    } else {
        document.execCommand('copy');
        done();
    }
}

// ==========================================
// ACCÈS NOMINATIFS (écran de gestion)
// ==========================================
function switchRolesTab(tabEl, idx) {
    document.querySelectorAll('#view-roles .label-tab').forEach(function (t, i) {
        t.classList.remove('label-tab-inactive', 'label-tab-active');
        if (i === idx) {
            t.classList.add('label-tab-active');
        } else {
            t.classList.add('label-tab-inactive');
        }
    });
    var roles = document.getElementById('roles-tab-panel');
    var accesses = document.getElementById('accesses-tab-panel');
    if (roles) roles.classList.toggle('hidden-view', idx !== 0);
    if (accesses) accesses.classList.toggle('hidden-view', idx !== 1);
}

function filterNominativeAccesses() {
    var q = (document.getElementById('na-search').value || '').toLowerCase();
    var statuses = multiCheckedValues('na-status-filter');
    var rows = document.querySelectorAll('#na-tbody tr:not(.empty-row)');
    var visible = 0;
    rows.forEach(function (r) {
        var ok = true;
        if (q && (r.getAttribute('data-search') || '').indexOf(q) === -1) ok = false;
        if (ok && statuses.length && statuses.indexOf(r.getAttribute('data-status')) === -1) ok = false;
        r.classList.toggle('hidden-view', !ok);
        if (ok) visible++;
    });
    var empty = document.getElementById('na-empty');
    if (empty) empty.classList.toggle('hidden-view', visible > 0);
    var count = document.getElementById('na-count');
    if (count) count.textContent = visible + (visible > 1 ? ' accès nominatifs' : ' accès nominatif');
}

function resetNominativeAccessFilters() {
    var search = document.getElementById('na-search');
    if (search) search.value = '';
    var el = document.getElementById('na-status-filter');
    if (el) {
        el.querySelectorAll('input[type="checkbox"]:checked').forEach(function (c) {
            c.checked = false;
            msUpdate(c);
        });
    }
    filterNominativeAccesses();
}

var PENDING_REVOKE_ROW = null;

function openRevokeAccess(btn) {
    var row = btn.closest('tr');
    if (!row) return;
    PENDING_REVOKE_ROW = row;
    var docEl = row.querySelector('[data-role="na-doc"]');
    var userEl = row.querySelector('[data-role="na-user"]');
    var doc = docEl ? docEl.textContent.trim() : '';
    var user = userEl ? userEl.textContent.replace(/\(invité\)/, '').trim() : '';
    document.getElementById('revoke-doc-name').textContent = doc;
    document.getElementById('revoke-user-name').textContent = user;
    toggleModal('modal-revoke-access', true);
}

function confirmRevokeAccess() {
    if (PENDING_REVOKE_ROW) {
        var row = PENDING_REVOKE_ROW;
        row.setAttribute('data-status', 'Révoqué');
        row.setAttribute('data-sort5', 'révoqué');
        var statusTd = row.querySelectorAll('td')[5];
        if (statusTd) {
            statusTd.innerHTML = '<span class="badge badge-danger">Révoqué</span>';
        }
        var revoke = row.querySelector('.na-revoke');
        if (revoke) revoke.remove();
        PENDING_REVOKE_ROW = null;
    }
    toggleModal('modal-revoke-access', false);
    filterNominativeAccesses();
}

// ==========================================
// ENREGISTREMENT DE VUE
// ==========================================
var SAVED_VIEW_FILTERS = {
    'CA 2026': { search: '', entity: [], organ: ['OA'], type: [], year: [], event: [], from: '2026-01-01', to: '2026-12-31' },
    'Projets Externes': { search: '', entity: ['SOL'], organ: [], type: [], year: [], event: [], from: '', to: '' },
    'Séances par entité': { search: '', entity: [], organ: [], type: [], year: [], event: [], from: '', to: '', grouping: ['entity', 'organ', 'event'] }
};

function multiCheckedValues(id) {
    var el = document.getElementById(id);
    if (!el) return [];
    return Array.prototype.map.call(el.querySelectorAll('input[type="checkbox"]:checked'), function (c) { return c.value; });
}

function currentDocumentFilters() {
    return {
        search: document.getElementById('f-search').value,
        entity: multiCheckedValues('f-entity'),
        organ: multiCheckedValues('f-organ'),
        type: multiCheckedValues('f-type'),
        year: multiCheckedValues('f-year'),
        event: multiCheckedValues('f-event'),
        from: document.getElementById('f-date-from').value,
        to: document.getElementById('f-date-to').value,
        dateType: document.getElementById('f-date-type').value,
        grouping: GROUPING.map(function (g) { return g.key; })
    };
}

function isDefaultFilters(f) {
    return !f.search
        && !f.entity.length && !f.organ.length && !f.type.length && !f.year.length && !f.event.length
        && !f.dateExact && !f.from && !f.to && !(f.grouping || []).length;
}

function sameArrayValues(a, b) {
    if (!a || !b) return (!a || !a.length) && (!b || !b.length);
    if (a.length !== b.length) return false;
    return a.slice().sort().join('|') === b.slice().sort().join('|');
}

function savedViewMatches(a, b) {
    return (a.search || '').trim() === (b.search || '').trim()
        && sameArrayValues(a.entity, b.entity)
        && sameArrayValues(a.organ, b.organ)
        && sameArrayValues(a.type, b.type)
        && sameArrayValues(a.year, b.year)
        && sameArrayValues(a.event, b.event)
        && (a.from || '') === (b.from || '')
        && (a.to || '') === (b.to || '')
        && normDateType(a) === normDateType(b)
        && sameArrayValues(a.grouping, b.grouping);
}

function normDateType(f) {
    if (f.dateType) return f.dateType;
    return (f.from || f.to) ? 'doc' : 'event';
}

function syncSavedViewSelect() {
    var select = document.getElementById('saved-view-select');
    var saveBtn = document.getElementById('btn-save-new-view');
    var deleteBtn = document.getElementById('btn-delete-view');
    if (!select) return;
    var f = currentDocumentFilters();
    var names = Object.keys(SAVED_VIEW_FILTERS);
    var match = null;
    names.forEach(function (name) {
        if (!match && savedViewMatches(f, SAVED_VIEW_FILTERS[name])) match = name;
    });
    var unsaved = !match && !isDefaultFilters(f);
    select.innerHTML = '';
    var cur = document.createElement('option');
    cur.value = '';
    cur.textContent = 'Tous les documents';
    select.appendChild(cur);
    if (unsaved) {
        var opt = document.createElement('option');
        opt.value = '__unsaved';
        opt.textContent = 'Vue non enregistrée';
        select.appendChild(opt);
    }
    names.forEach(function (name) {
        var opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    });
    select.value = match || (unsaved ? '__unsaved' : '');
    if (saveBtn) saveBtn.classList.toggle('hidden-view', !unsaved);
    if (deleteBtn) deleteBtn.classList.toggle('hidden-view', !match);
}

var PENDING_DELETE_VIEW_NAME = null;

function openDeleteViewModal() {
    var select = document.getElementById('saved-view-select');
    if (!select) return;
    var name = select.value;
    if (!name || !SAVED_VIEW_FILTERS[name]) return;
    PENDING_DELETE_VIEW_NAME = name;
    document.getElementById('delete-view-name').textContent = name;
    toggleModal('modal-delete-view', true);
}

function confirmDeleteView() {
    if (PENDING_DELETE_VIEW_NAME) {
        delete SAVED_VIEW_FILTERS[PENDING_DELETE_VIEW_NAME];
        PENDING_DELETE_VIEW_NAME = null;
    }
    toggleModal('modal-delete-view', false);
    syncSavedViewSelect();
}

function saveView() {
    var input = document.getElementById('save-view-name');
    var name = input.value.trim();
    if (!name) {
        input.focus();
        return;
    }
    SAVED_VIEW_FILTERS[name] = currentDocumentFilters();
    input.value = '';
    toggleModal('modal-save-view', false);
    syncSavedViewSelect();
}

function applySavedView(select) {
    var name = select.value;
    if (!name) {
        resetDocumentFilters();
        return;
    }
    var f = SAVED_VIEW_FILTERS[name];
    if (!f) return;
    document.getElementById('f-search').value = f.search || '';
    var apply = function (id, vals) {
        var el = document.getElementById(id);
        if (!el) return;
        el.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
            var want = (vals || []).indexOf(c.value) !== -1;
            if (c.checked !== want) {
                c.checked = want;
                msUpdate(c);
            }
        });
    };
    apply('f-entity', f.entity);
    apply('f-organ', f.organ);
    apply('f-type', f.type);
    apply('f-year', f.year);
    apply('f-event', f.event);
    document.getElementById('f-date-type').value = normDateType(f);
    document.getElementById('f-date-from').value = f.from || '';
    document.getElementById('f-date-to').value = f.to || '';
    setDateRangeMode(!!(f.from && f.to));
    GROUPING = [];
    (f.grouping || []).forEach(function (key) {
        var cat = DOC_GROUPING_CATEGORIES.find(function (c) { return c.key === key; });
        if (cat) GROUPING.push({ key: key, name: cat.name });
    });
    syncGroupingCheckboxes();
    renderGroupingChips();
    filterDocuments();
}

// ==========================================
// RÈGLES D'ACCÈS (modal création de rôle)
// ==========================================
var ROLE_RULE_CATEGORIES = [
    { name: 'Entité', labels: [['FCW', 'Fondation Chimay-Wartoise (FCW)'], ['CGE', 'Chimay-Gestion (CGE)'], ['CPA', 'Chimay-Patrimoine (CPA)'], ['ADS', 'Abbaye Notre-Dame de Scourmont (ADS)'], ['SOL', 'Solidarité Cistercienne (SOL)'], ['AUB', 'Auberge de Poteaupré (AUB)'], ['ESP', 'Espace Chimay (ESP)'], ['BSM', 'Boissons Sambre et Meuse (BSM)'], ['BDC', 'Bières de Chimay (BDC)'], ['FRO', 'Chimay Fromages (FRO)'], ['PPB', 'Les Petits Pas de la Botte (PPB)'], ['MDC', 'La Maison De Casimir (MDC)'], ['AP', 'Albatros Poteaupré (AP)']] },
    { name: 'Instance', labels: [['OA', "Organe d'administration (OA)"], ['AG', 'Assemblée générale (AG)']] },
    { name: 'Type de document', labels: [['CPT', 'Comptes (CPT)'], ['BDGT', 'Budget (BDGT)'], ['PV', 'Procès-verbal (PV)'], ['CNVC', 'Convocation (CNVC)'], ['PROC', 'Procuration (PROC)'], ['NOT', 'Notes (NOT)'], ['PRES', 'Présentation (PRES)'], ['RA', 'Rapport annuel (RA)'], ['BETU', "Bourse d'étude (BETU)"], ['ANX', 'Annexe (ANX)'], ['EXTR', 'Extrait (EXTR)']] },
    { name: 'Année', labels: [['2026', '2026'], ['2025', '2025'], ['2024', '2024']] }
];

var ROLE_DOC_PRIVILEGES = [
    ['Consulter', 'Rechercher et lire des documents.'],
    ['Télécharger', 'Enregistrer une copie des documents sur son ordinateur.'],
    ['Déposer', 'Ajouter de nouveaux documents sur la plateforme.'],
    ['Modifier', "Mettre à jour les étiquettes d'un document existant ou publier une nouvelle version."]
];

var ROLE_GENERAL_PRIVILEGES = [
    { group: 'Actions sur les utilisateurs', items: [
        ['Créer des invitations', "Envoyer un mail contenant un lien d'invitation à rejoindre la plateforme."],
        ['Gérer les comptes', "Supprimer le compte d'un utilisateur existant."],
        ['Gérer les rôles', 'Définir de nouveaux profils métiers (ex : « Membre Chimay Gestion », « Comptable »), choisir leurs privilèges et définir les libellés auxquels ils ont accès.']
    ] },
    { group: 'Paramétrage et suivi', items: [
        ['Gérer les libellés', 'Créer, modifier ou supprimer des libellés.'],
        ["Consulter l'historique", "Avoir accès à l'historique recensant toutes les actions effectuées par les utilisateurs sur l'ensemble de la plateforme."],
        ['Gérer les accès nominatifs', 'Rendre un document strictement confidentiel en limitant sa lecture à des personnes nommées explicitement (accès nominatif).']
    ] }
];

function rolePrivilegePanelHTML(groups, preset) {
    return groups.map(function (g) {
        var opts = g.items.map(function (it) {
            var checked = preset && preset.privileges && preset.privileges.indexOf(it[0]) !== -1 ? ' checked' : '';
            return '<label class="ms-option"><input type="checkbox" value="' + it[0] + '"' + checked + ' onchange="msUpdate(this)"><span class="ms-name">' + it[0] + '</span><span class="ms-desc">' + it[1] + '</span></label>';
        }).join('');
        return (g.group ? '<div class="ms-group">' + g.group + '</div>' : '') + opts;
    }).join('');
}

function roleRuleCategoryHTML(cat, preset) {
    var opts = cat.labels.map(function (l) {
        var checked = preset && preset[cat.name] && preset[cat.name].indexOf(l[0]) !== -1 ? ' checked' : '';
        return '<label class="ms-option"><input type="checkbox" value="' + l[0] + '"' + checked + ' onchange="msUpdate(this)"> ' + l[1] + '</label>';
    }).join('');
    return '                        <div>\n'
        + '                            <label class="block text-sm font-medium text-gray-700 mb-1">' + cat.name + '</label>\n'
        + '                            <div class="multi-select" data-placeholder="Tous les libellés">\n'
        + '                                <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">\n'
        + '                                    <span class="ms-value">Tous les libellés</span>\n'
        + '                                    <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>\n'
        + '                                </div>\n'
        + '                                <div class="multi-select-panel hidden-view">\n' + opts + '\n'
        + '                                </div>\n'
        + '                            </div>\n'
        + '                        </div>';
}

function roleRuleHTML(n, preset) {
    var cats = ROLE_RULE_CATEGORIES.map(function (cat) { return roleRuleCategoryHTML(cat, preset); }).join('\n');
    return '                    <div class="role-rule border border-gray-200 rounded-md p-3">\n'
        + '                        <div class="flex items-center justify-between mb-2">\n'
        + '                            <span class="rule-num text-xs font-semibold text-gray-500 uppercase">Règle n°' + n + '</span>\n'
        + '                            <button type="button" onclick="removeRoleRule(this)" title="Supprimer la règle" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors shrink-0"><svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 6h18" />\n  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />\n  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />\n  <line x1="10" x2="10" y1="11" y2="17" />\n  <line x1="14" x2="14" y1="11" y2="17" /></svg></button>\n'
        + '                        </div>\n'
        + '                        <div class="mb-2">\n'
        + '                            <label class="block text-sm font-medium text-gray-700 mb-1">Privilège(s)</label>\n'
        + '                            <div class="multi-select">\n'
        + '                                <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">\n'
        + '                                    <span class="ms-value">Sélectionner…</span>\n'
        + '                                    <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>\n'
        + '                                </div>\n'
        + '                                <div class="multi-select-panel hidden-view">' + rolePrivilegePanelHTML([{ group: '', items: ROLE_DOC_PRIVILEGES }], preset) + '</div>\n'
        + '                            </div>\n'
        + '                        </div>\n'
        + '                        <div class="space-y-3">\n' + cats + '\n'
        + '                        </div>\n'
        + '                    </div>';
}

function renumberRoleRules() {
    var i = 1;
    document.querySelectorAll('#role-rules .role-rule').forEach(function (r) {
        var num = r.querySelector('.rule-num');
        if (num) num.textContent = 'Règle n°' + i++;
    });
}

function addRoleRule() {
    var wrap = document.getElementById('role-rules');
    if (!wrap) return;
    var count = wrap.querySelectorAll('.role-rule').length + 1;
    var div = document.createElement('div');
    div.innerHTML = roleRuleHTML(count);
    wrap.appendChild(div.firstElementChild);
}

function removeRoleRule(btn) {
    var row = btn.closest('.role-rule');
    if (row) row.remove();
    renumberRoleRules();
}

// ==========================================
// DUPLICATION D'UN RÔLE
// ==========================================
var ROLES_DB = {
    'Administrateur système': {
        general: ['Créer des invitations', 'Gérer les comptes', 'Gérer les rôles', 'Gérer les libellés', "Consulter l'historique", 'Gérer les accès nominatifs'],
        rules: [{ privileges: ['Consulter', 'Télécharger', 'Déposer', 'Modifier'] }]
    },
    'Membre de la direction CGE': {
        general: ['Créer des invitations', 'Gérer les comptes'],
        rules: [
            { privileges: ['Consulter'], Entité: ['CGE'] },
            { privileges: ['Déposer'], Entité: ['CGE'] },
            { privileges: ['Consulter'], Instance: ['AG'] }
        ]
    },
    'Secrétaire de séance': {
        general: ['Créer des invitations'],
        rules: [
            { privileges: ['Déposer'], Entité: ['CGE'] },
            { privileges: ['Consulter'], Entité: ['CGE'], Instance: ['OA'] }
        ]
    },
    'Assistant de direction': {
        general: ['Créer des invitations'],
        rules: [
            { privileges: ['Déposer'], Entité: ['CGE'] },
            { privileges: ['Consulter'], Entité: ['CGE'], Instance: ['OA'] }
        ]
    },
    'Auditeur externe': {
        general: [],
        rules: [{ privileges: ['Consulter'], Instance: ['AG'] }]
    },
    'Partenaire externe CGE': {
        general: [],
        rules: [{ privileges: ['Consulter'], Entité: ['CGE'] }]
    }
};

function buildRoleRules(container, rules) {
    if (!container) return;
    container.innerHTML = '';
    rules.forEach(function (preset, i) {
        var div = document.createElement('div');
        div.innerHTML = roleRuleHTML(i + 1, preset);
        container.appendChild(div.firstElementChild);
    });
    container.querySelectorAll('input[type="checkbox"]:checked').forEach(function (c) {
        msUpdate(c);
    });
}

function setRoleGeneralPrivileges(values) {
    var gp = document.getElementById('role-general-privileges');
    if (!gp) return;
    gp.querySelectorAll('input[type="checkbox"]').forEach(function (c) {
        c.checked = (values || []).indexOf(c.value) !== -1;
        msUpdate(c);
    });
}

function duplicateRole(name) {
    var def = ROLES_DB[name];
    if (!def) return;
    document.getElementById('role-modal-title').textContent = 'Dupliquer un rôle';
    document.getElementById('role-name-input').value = name + ' (copie)';
    setRoleGeneralPrivileges(def.general);
    buildRoleRules(document.getElementById('role-rules'), def.rules.length ? def.rules : [{}]);
    toggleModal('modal-role', true);
}

function openRoleCreate() {
    document.getElementById('role-modal-title').textContent = 'Créer un rôle';
    document.getElementById('role-name-input').value = '';
    setRoleGeneralPrivileges([]);
    buildRoleRules(document.getElementById('role-rules'), [{}]);
    toggleModal('modal-role', true);
}

// ==========================================
// LISTE À COCHER (multi-select des règles)
// ==========================================
function toggleMultiSelect(btn) {
    var panel = btn.parentNode.querySelector('.multi-select-panel');
    var open = !panel.classList.contains('hidden-view');
    document.querySelectorAll('.multi-select-panel').forEach(function (p) { p.classList.add('hidden-view'); });
    if (!open) panel.classList.remove('hidden-view');
}

document.addEventListener('click', function (e) {
    if (!e.target.closest('.multi-select')) {
        document.querySelectorAll('.multi-select-panel').forEach(function (p) { p.classList.add('hidden-view'); });
    }
});

function msUpdate(cb) {
    var ms = cb.closest('.multi-select');
    var holder = ms.querySelector('.ms-value');
    holder.innerHTML = '';
    var chips = document.createElement('span');
    chips.className = 'ms-chips';
    ms.querySelectorAll('input[type="checkbox"]:checked').forEach(function (c) {
        var chip = document.createElement('span');
        chip.className = 'ms-chip';
        chip.textContent = c.value + ' ';
        var x = document.createElement('button');
        x.type = 'button';
        x.textContent = '×';
        x.onclick = function (ev) { ev.stopPropagation(); msUncheck(this, c.value); };
        chip.appendChild(x);
        chips.appendChild(chip);
    });
    if (!chips.children.length) {
        holder.textContent = ms.getAttribute('data-placeholder') || 'Sélectionner…';
    } else {
        holder.appendChild(chips);
    }
}

function msUncheck(btn, value) {
    var ms = btn.closest('.multi-select');
    var cb = ms.querySelector('input[type="checkbox"][value="' + value + '"]');
    if (cb) {
        cb.checked = false;
        msUpdate(cb);
    }
}

function msModeChange(sel) {
    var ms = sel.parentNode.querySelector('.multi-select');
    if (ms) ms.classList.toggle('hidden-view', sel.value === 'Tous');
}

// ==========================================
// VÉRIFIER LES ACCÈS (rôles → documents visibles)
// ==========================================
var ROLE_ACCESS_RULES = {
    'Administrateur système': function () { return true; },
    'Membre de la direction CGE': function (r) { return r.ent === 'CGE' || r.org === 'AG'; },
    'Secrétaire de séance': function (r) { return r.ent === 'CGE' && r.org === 'OA'; },
    'Assistant de direction': function (r) { return r.ent === 'CGE' && r.org === 'OA'; },
    'Auditeur externe': function (r) { return r.org === 'AG'; },
    'Partenaire externe CGE': function (r) { return r.ent === 'CGE' && r.org !== 'OA'; }
};

function openAccessCheck() {
    toggleModal('modal-access-check', true);
    updateAccessCheck();
}

function updateAccessCheck() {
    var tbody = document.getElementById('ac-tbody');
    if (!tbody) return;
    var roles = multiCheckedValues('ac-roles');
    var docs = document.querySelectorAll('#docs-tbody tr:not(.empty-row)');
    var rows = [];
    docs.forEach(function (r) {
        var d = {
            ent: r.getAttribute('data-entity') || '',
            org: r.getAttribute('data-organ') || ''
        };
        if (roles.some(function (name) {
            var fn = ROLE_ACCESS_RULES[name];
            return fn ? fn(d) : false;
        })) rows.push(r);
    });
    var count = document.getElementById('ac-count');
    if (count) {
        count.textContent = roles.length
            ? (rows.length + (rows.length > 1 ? ' documents visibles' : ' document visible'))
            : 'Aucun document visible pour la sélection.';
    }
    tbody.innerHTML = '';
    if (!rows.length) {
        var msg = roles.length
            ? 'Aucun document ne correspond à la sélection de rôles.'
            : 'Sélectionnez un ou plusieurs rôles pour afficher les documents visibles.';
        tbody.innerHTML = '<tr><td colspan="3" class="px-6 py-8 text-center text-gray-500">' + msg + '</td></tr>';
        return;
    }
    rows.forEach(function (r) {
        var titleEl = r.querySelector('td:first-child .font-medium');
        var title = titleEl ? titleEl.textContent.trim() : r.querySelector('td:first-child').textContent.trim();
        var date = r.querySelectorAll('td')[1].textContent.trim();
        var labels = r.querySelectorAll('td')[2].innerHTML;
        var tr = document.createElement('tr');
        tr.className = 'hover:bg-primary-light transition-colors';
        tr.innerHTML = '<td class="px-6 py-3 font-medium text-gray-900">' + title + '</td>'
            + '<td class="px-6 py-3 text-gray-500">' + date + '</td>'
            + '<td class="px-6 py-3">' + labels + '</td>';
        tbody.appendChild(tr);
    });
}

// ==========================================
// ACTIONS DE LIGNE FLOTTANTES (hover, visibles même avec scroll horizontal)
// ==========================================
var FLY_ACTIVE = null;

function flyScrollContainer(el) {
    return el.closest('.overflow-y-auto') || el.closest('.overflow-x-auto') || el.parentNode;
}

function positionFlyActions(fly, row, scroll) {
    var cRect = scroll.getBoundingClientRect();
    var rRect = row.getBoundingClientRect();
    var sbw = scroll.offsetWidth - scroll.clientWidth;
    fly.style.position = 'fixed';
    fly.style.left = 'auto';
    fly.style.top = rRect.top + 'px';
    fly.style.height = rRect.height + 'px';
    fly.style.right = (window.innerWidth - cRect.right + sbw) + 'px';
}

function showFlyActions(fly, row, scroll) {
    FLY_ACTIVE = { fly: fly, row: row, scroll: scroll };
    positionFlyActions(fly, row, scroll);
    fly.classList.add('fly-visible');
}

function hideFlyActions(fly) {
    fly.classList.remove('fly-visible');
    setTimeout(function () {
        if (fly.classList.contains('fly-visible')) return;
        fly.style.position = '';
        fly.style.top = '';
        fly.style.left = '';
        fly.style.right = '';
        fly.style.height = '';
        if (FLY_ACTIVE && FLY_ACTIVE.fly === fly) FLY_ACTIVE = null;
    }, 150);
}

function bindFlyScroll(scroll) {
    scroll.addEventListener('scroll', function () {
        if (FLY_ACTIVE && FLY_ACTIVE.scroll === scroll) {
            positionFlyActions(FLY_ACTIVE.fly, FLY_ACTIVE.row, scroll);
        }
    });
}

function bindFlySurface(surface, scroll, rowSel) {
    surface.addEventListener('mouseover', function (e) {
        var row = e.target.closest(rowSel);
        if (!row || !surface.contains(row)) return;
        var fly = row.querySelector('.row-actions-fly');
        if (!fly) return;
        if (FLY_ACTIVE && FLY_ACTIVE.fly === fly) {
            positionFlyActions(fly, row, scroll);
            return;
        }
        showFlyActions(fly, row, scroll);
    });
    surface.addEventListener('mouseout', function (e) {
        var row = e.target.closest(rowSel);
        if (!row) return;
        var fly = row.querySelector('.row-actions-fly');
        if (!fly) return;
        var rel = e.relatedTarget;
        if (rel && row.contains(rel)) return;
        hideFlyActions(fly);
    });
}

function initFlyActions() {
    document.querySelectorAll('table.table-actions').forEach(function (table) {
        var scroll = flyScrollContainer(table);
        table.querySelectorAll('tbody').forEach(function (tbody) {
            bindFlySurface(tbody, scroll, 'tr');
        });
        bindFlyScroll(scroll);
    });
    var tree = document.getElementById('docs-tree');
    if (tree) {
        var scroll = tree.closest('.overflow-y-auto') || tree.parentNode;
        bindFlySurface(tree, scroll, '.tree-doc-grid');
        bindFlyScroll(scroll);
    }
}

// ==========================================
// FILTRES DOCUMENTS
// ==========================================
function setDateRangeMode(on) {
    var btn = document.getElementById('f-date-interval-btn');
    var wrap = document.getElementById('f-date-end-wrap');
    if (btn) btn.classList.toggle('hidden-view', !!on);
    if (wrap) wrap.classList.toggle('hidden-view', !on);
    if (wrap && on) {
        wrap.classList.add('flex');
    } else if (wrap) {
        wrap.classList.remove('flex');
    }
}

function toggleDateRange(on) {
    setDateRangeMode(on);
    if (!on) {
        document.getElementById('f-date-to').value = '';
        filterDocuments();
    } else {
        var to = document.getElementById('f-date-to');
        if (to) setTimeout(function () { to.focus(); }, 50);
    }
}

function onDateFilterTypeChange() {
    filterDocuments();
}

function rowDateValues(r) {
    var dateType = document.getElementById('f-date-type').value;
    if (dateType === 'deposit') return [(r.getAttribute('data-sort4') || '').slice(0, 10)];
    if (dateType === 'event') return rowEventIds(r).map(function (id) { var ev = eventById(id); return ev ? ev.date : null; }).filter(Boolean);
    return [r.getAttribute('data-date') || ''];
}

function filterDocuments() {
    var q = document.getElementById('f-search').value.toLowerCase();
    var entities = multiCheckedValues('f-entity');
    var organs = multiCheckedValues('f-organ');
    var types = multiCheckedValues('f-type');
    var years = multiCheckedValues('f-year');
    var events = multiCheckedValues('f-event');
    var from = (document.getElementById('f-date-from').value || '');
    var to = (document.getElementById('f-date-to').value || '');

    var rows = document.querySelectorAll('#docs-tbody tr:not(.empty-row)');
    var visible = 0;
    rows.forEach(function (r) {
        var ok = true;
        if (q && (r.getAttribute('data-search') || '').indexOf(q) === -1) ok = false;
        if (ok && entities.length && entities.indexOf(r.getAttribute('data-entity')) === -1) ok = false;
        if (ok && organs.length && organs.indexOf(r.getAttribute('data-organ')) === -1) ok = false;
        if (ok && types.length && !types.some(function (t) { return (r.getAttribute('data-type') || '').split(/\s+/).indexOf(t) !== -1; })) ok = false;
        if (ok && years.length && years.indexOf((r.getAttribute('data-date') || '').substring(0, 4)) === -1) ok = false;
        if (ok && events.length && !rowEventIds(r).some(function (id) { return events.indexOf(id) !== -1; })) ok = false;
        if (ok && from && to) {
            if (!rowDateValues(r).some(function (d) { return d >= from && d <= to; })) ok = false;
        } else if (ok && from) {
            if (rowDateValues(r).indexOf(from) === -1) ok = false;
        } else if (ok && to) {
            if (!rowDateValues(r).some(function (d) { return d <= to; })) ok = false;
        }
        r.classList.toggle('hidden-view', !ok);
        if (ok) visible++;
    });
    document.getElementById('docs-empty').classList.toggle('hidden-view', visible > 0);
    document.getElementById('docs-count').textContent = visible + (visible > 1 ? ' documents' : ' document');
    updateDocView();
    syncSavedViewSelect();
}

// ==========================================
// REGROUPEMENT PAR CATÉGORIES (navigation par dossiers)
// ==========================================
var EVENTS = [
    { id: 'ev1', date: '2026-01-22', title: '', entity: 'CGE', label: 'CA CGE' },
    { id: 'ev7', date: '2026-01-23', title: 'CA FCW du 23-01-2026', entity: 'FCW', label: 'CA FCW' },
    { id: 'ev2', date: '2026-03-15', title: 'CA de mars 2026', entity: 'CGE', label: 'CA CGE' },
    { id: 'ev8', date: '2026-04-09', title: 'CA FCW du 09-04-2026', entity: 'FCW', label: 'CA FCW' },
    { id: 'ev3', date: '2026-04-16', title: '', entity: 'CGE', label: 'CA CGE' },
    { id: 'ev4', date: '2026-06-01', title: 'Assemblée générale', entity: 'CPA', label: 'AG CPA' },
    { id: 'ev9', date: '2026-06-23', title: 'AG FCW du 23-06-2026', entity: 'FCW', label: 'AG FCW' },
    { id: 'ev5', date: '2026-06-25', title: '', entity: 'CGE', label: 'CA CGE' },
    { id: 'ev6', date: '2026-09-17', title: '', entity: 'CGE', label: 'CA CGE' }
];

function formatEventDate(d) {
    var p = d.split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
}

function eventById(id) {
    return EVENTS.find(function (e) { return e.id === id; }) || null;
}

function eventDisplayName(ev) {
    return 'Séance du ' + formatEventDate(ev.date);
}

// ==========================================
// ÉCRAN CALENDRIER
// ==========================================
var CAL_STATE = { year: 0, month: 0, view: 'month' };

var CAL_MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

function calendarStateToday() {
    var d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() };
}

function eventChipClass(ev) {
    return 'cal-chip cal-chip-event';
}

function eventsByDateMap() {
    var map = {};
    EVENTS.forEach(function (ev) {
        (map[ev.date] = map[ev.date] || []).push(ev);
    });
    return map;
}

function openEventFromCalendar(date) {
    navigateTo('view-documents');
    var type = document.getElementById('f-date-type');
    if (type) type.value = 'event';
    var from = document.getElementById('f-date-from');
    if (from) from.value = date;
    var to = document.getElementById('f-date-to');
    if (to) to.value = '';
    setDateRangeMode(false);
    filterDocuments();
}

function toggleCalendarView() {
    CAL_STATE.view = CAL_STATE.view === 'month' ? 'year' : 'month';
    renderCalendar();
}

function openCalendarMonth(m) {
    CAL_STATE.view = 'month';
    CAL_STATE.month = m;
    renderCalendar();
}

function renderMonthCalendar() {
    var y = CAL_STATE.year;
    var m = CAL_STATE.month;
    var grid = document.getElementById('calendar-grid');
    if (!grid) return;

    var startOffset = (new Date(y, m, 1).getDay() + 6) % 7;
    var daysInMonth = new Date(y, m + 1, 0).getDate();
    var eventsByDate = eventsByDateMap();

    var today = new Date();
    var cells = Math.ceil((startOffset + daysInMonth) / 7) * 7;
    var html = '';
    for (var i = 0; i < cells; i++) {
        var d = i - startOffset + 1;
        if (d < 1 || d > daysInMonth) {
            html += '<div class="cal-cell out"></div>';
            continue;
        }
        var iso = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
        var evs = eventsByDate[iso] || [];
        var isToday = today.getFullYear() === y && today.getMonth() === m && today.getDate() === d;
        html += '<div class="cal-cell' + (isToday ? ' today' : '') + '"><span class="cal-day">' + d + '</span>';
        evs.forEach(function (ev) {
            html += '<button type="button" onclick="openEventFromCalendar(\'' + iso + '\')" class="' + eventChipClass(ev) + '" title="' + eventDisplayName(ev) + '">' + ev.label + '</button>';
        });
        html += '</div>';
    }
    grid.innerHTML = html;
}

function renderYearCalendar() {
    var y = CAL_STATE.year;
    var grid = document.getElementById('calendar-year-grid');
    if (!grid) return;
    var eventsByDate = eventsByDateMap();
    var html = '';
    for (var m = 0; m < 12; m++) {
        html += '<div class="cal-month-mini">'
            + '<button type="button" class="cal-mini-header" onclick="openCalendarMonth(' + m + ')">' + CAL_MONTHS[m] + ' ' + y + '</button>'
            + '<div class="cal-mini-weekdays"><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span></div>'
            + '<div class="cal-mini-grid">';
        var startOffset = (new Date(y, m, 1).getDay() + 6) % 7;
        var daysInMonth = new Date(y, m + 1, 0).getDate();
        for (var i = 0; i < startOffset; i++) html += '<div class="cal-mini-cell"></div>';
        for (var d = 1; d <= daysInMonth; d++) {
            var iso = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
            var evs = eventsByDate[iso] || [];
            var attrs = evs.length
                ? ' class="cal-mini-cell has" onclick="openEventFromCalendar(\'' + iso + '\')" title="' + eventDisplayName(evs[0]) + '"'
                : ' class="cal-mini-cell"';
            html += '<div' + attrs + '>' + d + '</div>';
        }
        html += '</div></div>';
    }
    grid.innerHTML = html;
}

function renderCalendar() {
    var y = CAL_STATE.year;
    var m = CAL_STATE.month;
    var label = document.getElementById('calendar-month-label');
    if (label) label.textContent = CAL_STATE.view === 'year' ? String(y) : CAL_MONTHS[m] + ' ' + y;
    var monthWrap = document.getElementById('calendar-month-wrap');
    var yearWrap = document.getElementById('calendar-year-wrap');
    if (monthWrap) monthWrap.classList.toggle('hidden-view', CAL_STATE.view !== 'month');
    if (yearWrap) yearWrap.classList.toggle('hidden-view', CAL_STATE.view !== 'year');
    var vbtn = document.getElementById('calendar-view-toggle');
    if (vbtn) {
        vbtn.innerHTML = CAL_STATE.view === 'month'
            ? '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>Vue année'
            : '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>Vue mois';
    }
    if (CAL_STATE.view === 'year') {
        renderYearCalendar();
    } else {
        renderMonthCalendar();
    }
}

function calendarPrev() {
    if (CAL_STATE.view === 'year') {
        CAL_STATE.year--;
    } else if (CAL_STATE.month === 0) {
        CAL_STATE.month = 11;
        CAL_STATE.year--;
    } else {
        CAL_STATE.month--;
    }
    renderCalendar();
}

function calendarNext() {
    if (CAL_STATE.view === 'year') {
        CAL_STATE.year++;
    } else if (CAL_STATE.month === 11) {
        CAL_STATE.month = 0;
        CAL_STATE.year++;
    } else {
        CAL_STATE.month++;
    }
    renderCalendar();
}

function calendarToday() {
    var t = calendarStateToday();
    CAL_STATE.year = t.year;
    CAL_STATE.month = t.month;
    renderCalendar();
}

function rowEventIds(r) {
    return (r.getAttribute('data-event') || '').split(/\s+/).filter(Boolean);
}

function rowHasCatValue(r, key, v) {
    if (key === 'event') return rowEventIds(r).indexOf(v) !== -1;
    if (key === 'type') return (r.getAttribute('data-type') || '').split(/\s+/).indexOf(v) !== -1;
    return rowCatValue(r, key) === v;
}

function rowHasNoCatValue(r, key) {
    if (key === 'event') return rowEventIds(r).length === 0;
    return !rowCatValue(r, key);
}

var DOC_GROUPING_CATEGORIES = [
    { key: 'entity', name: 'Entité' },
    { key: 'organ', name: 'Instance' },
    { key: 'type', name: 'Type de document' },
    { key: 'year', name: 'Année' },
    { key: 'event', name: 'Séance' }
];

var GROUPING = [];
var TREE_PATH = [];

function syncGroupingCheckboxes() {
    document.querySelectorAll('#f-grouping-panel input[type="checkbox"]').forEach(function (cb) {
        cb.checked = GROUPING.some(function (g) { return g.key === cb.value; });
        var idx = GROUPING.findIndex(function (g) { return g.key === cb.value; });
        var lbl = cb.parentNode.querySelector('.opt-label');
        if (!lbl) return;
        if (idx === -1) {
            lbl.textContent = cb.getAttribute('data-name');
        } else {
            lbl.textContent = '';
            var num = document.createElement('span');
            num.className = 'chip-num';
            num.textContent = String(idx + 1);
            lbl.appendChild(num);
            lbl.appendChild(document.createTextNode(' ' + cb.getAttribute('data-name')));
        }
    });
}

function onGroupingChange(cb) {
    var i = GROUPING.findIndex(function (g) { return g.key === cb.value; });
    if (cb.checked && i === -1) GROUPING.push({ key: cb.value, name: cb.getAttribute('data-name') });
    if (!cb.checked && i !== -1) GROUPING.splice(i, 1);
    syncGroupingCheckboxes();
    renderGroupingChips();
    filterDocuments();
}

function removeGrouping(index) {
    GROUPING.splice(index, 1);
    syncGroupingCheckboxes();
    renderGroupingChips();
    filterDocuments();
}

function renderGroupingChips() {
    var el = document.getElementById('f-grouping');
    if (!el) return;
    var holder = el.querySelector('.ms-value');
    holder.innerHTML = '';
    if (!GROUPING.length) {
        holder.textContent = el.getAttribute('data-placeholder') || 'Choisir une catégorie';
        return;
    }
    var chips = document.createElement('span');
    chips.className = 'ms-chips';
    GROUPING.forEach(function (g, i) {
        var chip = document.createElement('span');
        chip.className = 'ms-chip';
        chip.appendChild(document.createTextNode(g.name + ' '));
        var x = document.createElement('button');
        x.type = 'button';
        x.textContent = '×';
        x.onclick = function (ev) { ev.stopPropagation(); removeGrouping(i); };
        chip.appendChild(x);
        chips.appendChild(chip);
    });
    holder.appendChild(chips);
}

function visibleDocRows() {
    return Array.prototype.filter.call(document.querySelectorAll('#docs-tbody tr:not(.empty-row)'), function (r) {
        return !r.classList.contains('hidden-view');
    });
}

function rowCatValue(r, key) {
    if (key === 'year') {
        var d = r.getAttribute('data-date') || '';
        return d ? d.substring(0, 4) : '';
    }
    return r.getAttribute('data-' + key) || '';
}

function docLabelName(key, value) {
    if (key === 'event') {
        var ev = eventById(value);
        return ev ? eventDisplayName(ev) : value;
    }
    var cat = DOC_GROUPING_CATEGORIES.find(function (c) { return c.key === key; });
    var def = ROLE_RULE_CATEGORIES.find(function (c) { return c.name === cat.name; });
    var l = def ? def.labels.find(function (l) { return l[0] === value; }) : null;
    return l ? l[1] : value;
}

function docLabelOrder(key) {
    if (key === 'event') {
        return EVENTS.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).map(function (e) { return e.id; });
    }
    var cat = DOC_GROUPING_CATEGORIES.find(function (c) { return c.key === key; });
    var def = ROLE_RULE_CATEGORIES.find(function (c) { return c.name === cat.name; });
    return def ? def.labels.map(function (l) { return l[0]; }) : [];
}

function buildDocTree() {
    var container = document.getElementById('docs-tree');
    if (!container) return;
    TREE_PATH = [];
    renderTreeView();
}

function pathRows() {
    return visibleDocRows().filter(function (r) {
        return TREE_PATH.every(function (p) {
            if (p.value === 'AUTRES') return rowHasNoCatValue(r, p.key);
            return rowHasCatValue(r, p.key, p.value);
        });
    });
}

function renderTreeView() {
    var container = document.getElementById('docs-tree');
    var breadcrumb = document.getElementById('tree-breadcrumb');
    if (!container) return;
    renderTreeBreadcrumb(breadcrumb);
    container.innerHTML = '';
    var rows = pathRows();
    if (!rows.length) {
        container.innerHTML = '<p class="text-center text-gray-500 py-10">Aucun document à afficher.</p>';
        return;
    }
    container.appendChild(renderTreeLevel(rows));
}

function renderTreeBreadcrumb(el) {
    if (!el) return;
    el.innerHTML = '';
    el.classList.toggle('hidden-view', TREE_PATH.length === 0);
    if (!TREE_PATH.length) return;
    var home = document.createElement('button');
    home.type = 'button';
    home.className = 'crumb';
    home.title = 'Tout afficher';
    home.innerHTML = '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>';
    home.onclick = function () {
        TREE_PATH = [];
        renderTreeView();
    };
    el.appendChild(home);
    TREE_PATH.forEach(function (p, i) {
        var sep = document.createElement('span');
        sep.className = 'crumb-sep';
        sep.innerHTML = '<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>';
        el.appendChild(sep);
        if (i === TREE_PATH.length - 1) {
            var cur = document.createElement('span');
            cur.className = 'crumb current';
            cur.textContent = p.name;
            el.appendChild(cur);
        } else {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'crumb';
            btn.textContent = p.name;
            btn.onclick = (function (idx) {
                return function () {
                    TREE_PATH = TREE_PATH.slice(0, idx + 1);
                    renderTreeView();
                };
            })(i);
            el.appendChild(btn);
        }
    });
}

function renderTreeLevel(rows) {
    var wrap = document.createElement('div');
    if (TREE_PATH.length === GROUPING.length) {
        rows.forEach(function (r) { wrap.appendChild(renderTreeDocItem(r)); });
        return wrap;
    }
    var g = GROUPING[TREE_PATH.length];
    var present = {};
    var hasOther = false;
    rows.forEach(function (r) {
        if (g.key === 'event') {
            var ids = rowEventIds(r);
            if (ids.length) ids.forEach(function (id) { present[id] = true; });
            else hasOther = true;
        } else if (g.key === 'type') {
            var types = (r.getAttribute('data-type') || '').split(/\s+/).filter(Boolean);
            if (types.length) types.forEach(function (t) { present[t] = true; });
            else hasOther = true;
        } else {
            var v = rowCatValue(r, g.key);
            if (v) present[v] = true; else hasOther = true;
        }
    });
    docLabelOrder(g.key).filter(function (v) { return present[v]; }).forEach(function (v) {
        wrap.appendChild(makeTreeFolder(g.key, v, docLabelName(g.key, v), rows.filter(function (r) { return rowHasCatValue(r, g.key, v); })));
    });
    if (hasOther) {
        wrap.appendChild(makeTreeFolder(g.key, 'AUTRES', 'Autres', rows.filter(function (r) { return rowHasNoCatValue(r, g.key); })));
    }
    return wrap;
}

function makeTreeFolder(key, value, name, rows) {
    var el = document.createElement('div');
    el.className = 'folder-row';
    el.innerHTML = '<svg class="w-4 h-4 text-amber-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>'
        + '<span class="text-sm font-medium text-gray-800 flex-1">' + name + '</span>'
        + '<span class="badge badge-neutral">' + rows.length + '</span>'
        + '<svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>';
    el.onclick = function () {
        TREE_PATH.push({ key: key, value: value, name: name });
        renderTreeView();
    };
    return el;
}

function renderTreeDocItem(r) {
    var tds = r.querySelectorAll('td');
    var titleEl = r.querySelector('td:first-child .font-medium');
    var title = titleEl ? titleEl.textContent.trim() : '';
    var date = tds[1] ? tds[1].textContent.trim() : '';
    var labels = tds[2] ? tds[2].innerHTML : '';
    var by = tds[3] ? tds[3].textContent.trim() : '';
    var deposit = tds[4] ? tds[4].textContent.trim() : '';
    var actionsEl = r.querySelector('.row-actions');
    var actions = actionsEl ? actionsEl.outerHTML : '';
    var sort0 = r.getAttribute('data-sort0') || title;
    var isXls = /\.xlsx?$/i.test(sort0);
    var isDoc = /\.docx?$/i.test(sort0);
    var isPpt = /\.pptx?$/i.test(sort0);
    var icon = isPpt
        ? '<svg class="w-4 h-4 text-orange-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M2 3h20" /><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /><path d="m7 21 5-5 5 5" /></svg>'
        : isXls
        ? '<svg class="w-4 h-4 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M8 13h2" /><path d="M14 13h2" /><path d="M8 17h2" /><path d="M14 17h2" /></svg>'
        : (isDoc
            ? '<svg class="w-4 h-4 text-blue-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>'
            : '<svg class="w-4 h-4 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>');
    var div = document.createElement('div');
    div.className = 'tree-cols tree-doc-grid text-sm';
    div.setAttribute('data-sort4', r.getAttribute('data-sort4') || '');
    div.onclick = function () { openPreview(title, sort0); };
    div.innerHTML = '<div class="flex items-center gap-3 min-w-0">' + icon + '<span class="font-medium text-gray-900 truncate">' + title + '</span></div>'
        + '<div class="text-gray-500 truncate">' + date + '</div>'
        + '<div class="min-w-0 overflow-hidden whitespace-nowrap">' + labels + '</div>'
        + '<div class="text-gray-500 truncate">' + by + '</div>'
        + '<div class="text-gray-500 truncate">' + deposit + '</div>'
        + '<div class="text-right text-gray-500">' + actions + '</div>';
    return div;
}

function updateDocView() {
    var tableCard = document.getElementById('docs-table-card');
    var treeCard = document.getElementById('docs-tree-card');
    if (!tableCard || !treeCard) return;
    var grouped = GROUPING.length > 0;
    tableCard.classList.toggle('hidden-view', grouped);
    treeCard.classList.toggle('hidden-view', !grouped);
    if (grouped) buildDocTree();
}

function initUploadEventSelect() {
    var sel = document.getElementById('upload-event-select');
    if (!sel) return;
    var html = '<option value="">Aucune séance</option>';
    EVENTS.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; }).forEach(function (ev) {
        html += '<option value="' + ev.id + '">' + eventDisplayName(ev) + '</option>';
    });
    sel.innerHTML = html;
}

function onUploadEventSelect() {
    var sel = document.getElementById('upload-event-select');
    if (sel && sel.value) {
        var wrap = document.getElementById('upload-new-event');
        if (wrap) wrap.classList.add('hidden-view');
    }
}

function toggleUploadNewEvent() {
    var el = document.getElementById('upload-new-event');
    if (el) el.classList.toggle('hidden-view');
}

function hideFiltersPanel() {
    var coll = document.getElementById('filters-collapsible');
    var dates = document.getElementById('filters-dates');
    var showBtn = document.getElementById('btn-show-filters');
    if (coll) coll.classList.add('hidden-view');
    if (dates) dates.classList.add('hidden-view');
    if (showBtn) showBtn.classList.remove('hidden-view');
}

function showFiltersPanel() {
    var coll = document.getElementById('filters-collapsible');
    var dates = document.getElementById('filters-dates');
    var showBtn = document.getElementById('btn-show-filters');
    if (coll) coll.classList.remove('hidden-view');
    if (dates) dates.classList.remove('hidden-view');
    if (showBtn) showBtn.classList.add('hidden-view');
}

function resetDocumentFilters() {
    document.getElementById('f-search').value = '';
    ['f-entity', 'f-organ', 'f-type', 'f-event'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.querySelectorAll('input[type="checkbox"]:checked').forEach(function (c) {
            c.checked = false;
            msUpdate(c);
        });
    });
    document.getElementById('f-date-type').value = 'event';
    document.getElementById('f-date-from').value = '';
    document.getElementById('f-date-to').value = '';
    setDateRangeMode(false);
    GROUPING.length = 0;
    syncGroupingCheckboxes();
    renderGroupingChips();
    filterDocuments();
}

// ==========================================
// FILTRES UTILISATEURS
// ==========================================
function filterUsers() {
    var q = document.getElementById('user-search').value.toLowerCase();
    document.querySelectorAll('#users-tbody, #invites-tbody').forEach(function (tb) {
        var visible = 0;
        tb.querySelectorAll('tr:not(.empty-row)').forEach(function (r) {
            var ok = !q || (r.getAttribute('data-search') || '').indexOf(q) !== -1;
            r.classList.toggle('hidden-view', !ok);
            if (ok) visible++;
        });
        var emptyRow = tb.querySelector('tr.empty-row');
        if (emptyRow) emptyRow.classList.toggle('hidden-view', visible > 0);
    });
}

function switchUsersTab(tabEl, idx) {
    document.querySelectorAll('#view-users .label-tab').forEach(function (t, i) {
        t.classList.remove('label-tab-inactive', 'label-tab-active');
        if (i === idx) {
            t.classList.add('label-tab-active');
        } else {
            t.classList.add('label-tab-inactive');
        }
    });
    document.querySelectorAll('#view-users tbody.labels-tbody').forEach(function (tb, i) {
        tb.classList.toggle('hidden-view', i !== idx);
    });
}

// ==========================================
// FILTRES LIBELLÉS
// ==========================================
function filterLabels() {
    var q = document.getElementById('label-search').value.toLowerCase();
    var anyVisible = false;
    document.querySelectorAll('#view-labels tbody.labels-tbody').forEach(function (tb) {
        var rows = tb.querySelectorAll('tr:not(.empty-row)');
        var visible = 0;
        rows.forEach(function (r) {
            var ok = !q || (r.getAttribute('data-search') || '').indexOf(q) !== -1;
            r.classList.toggle('hidden-view', !ok);
            if (ok) visible++;
        });
        var emptyRow = tb.querySelector('tr.empty-row');
        if (emptyRow) emptyRow.classList.toggle('hidden-view', visible > 0);
        if (visible > 0) anyVisible = true;
    });
    document.getElementById('labels-none').classList.toggle('hidden-view', anyVisible);
}

// ==========================================
// ONGLETS DE CATÉGORIES (libellés / activité récente)
// ==========================================
function switchTabGroup(scopeId, tabEl, idx) {
    var activeColor = null;
    document.querySelectorAll(scopeId + ' .label-tab').forEach(function (t, i) {
        t.classList.remove('label-tab-inactive', 'label-tab-0', 'label-tab-1', 'label-tab-2', 'label-tab-3', 'label-tab-4');
        if (i === idx) {
            var cls = t.getAttribute('data-tab-color') || ('label-tab-' + i);
            t.classList.add(cls);
            activeColor = cls;
        } else {
            t.classList.add('label-tab-inactive');
        }
    });
    document.querySelectorAll(scopeId + ' tbody.labels-tbody').forEach(function (tb, i) {
        tb.classList.toggle('hidden-view', i !== idx);
    });
    var thead = document.querySelector(scopeId + ' table thead');
    if (thead) {
        thead.classList.remove('thead-tab-0', 'thead-tab-1', 'thead-tab-2', 'thead-tab-3', 'thead-tab-4');
        thead.classList.add(activeColor ? activeColor.replace('label-tab-', 'thead-tab-') : 'thead-tab-' + idx);
    }
}

function switchLabelCategory(tabEl, idx) {
    switchTabGroup('#view-labels', tabEl, idx);
    filterLabels();
}

function switchRecentCategory(tabEl, idx) {
    document.querySelectorAll('#view-recent .label-tab').forEach(function (t, i) {
        t.classList.remove('label-tab-inactive', 'label-tab-active');
        if (i === idx) {
            t.classList.add('label-tab-active');
        } else {
            t.classList.add('label-tab-inactive');
        }
    });
    var colNames = ['Date consultation', "Date d'ajout", 'Date de partage'];
    var col = document.getElementById('recent-date-col');
    if (col) col.textContent = colNames[idx] || 'Date consultation';
    document.querySelectorAll('#view-recent tbody.labels-tbody').forEach(function (tb, i) {
        tb.classList.toggle('hidden-view', i !== idx);
    });
}

// ==========================================
// RÉORDONNANCEMENT DES LIBELLÉS
// ==========================================
function moveLabel(btn, dir) {
    var tr = btn.closest('tr');
    var tbody = tr.parentNode;
    var sibling = dir === -1 ? tr.previousElementSibling : tr.nextElementSibling;
    if (!sibling || sibling.classList.contains('empty-row')) return;
    if (dir === -1) {
        tbody.insertBefore(tr, sibling);
    } else {
        tbody.insertBefore(sibling, tr);
    }
    renumberLabels(tbody);
}

function renumberLabels(tbody) {
    var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr:not(.empty-row)'));
    rows.forEach(function (r, i) {
        var orderEl = r.querySelector('.label-order');
        if (orderEl) orderEl.textContent = i + 1;
        var up = r.querySelector('.order-up');
        var down = r.querySelector('.order-down');
        if (up) {
            up.classList.toggle('opacity-30', i === 0);
            up.classList.toggle('pointer-events-none', i === 0);
        }
        if (down) {
            down.classList.toggle('opacity-30', i === rows.length - 1);
            down.classList.toggle('pointer-events-none', i === rows.length - 1);
        }
    });
}

// ==========================================
// FILTRES ET TRI DE L'HISTORIQUE
// ==========================================
function applyAuditFilters() {
    var q = (document.getElementById('audit-search').value || '').toLowerCase();
    var actions = multiCheckedValues('audit-filter-action');
    var types = multiCheckedValues('audit-filter-type');
    var from = (document.getElementById('audit-date-from').value || '').replace(/-/g, '');
    var to = (document.getElementById('audit-date-to').value || '').replace(/-/g, '');

    var rows = document.querySelectorAll('#audit-tbody tr:not(.empty-row)');
    var visible = 0;
    rows.forEach(function (r) {
        var ok = true;
        if (q && (r.getAttribute('data-text') || '').indexOf(q) === -1) ok = false;
        if (ok && actions.length && actions.indexOf(r.getAttribute('data-action')) === -1) ok = false;
        if (ok && types.length && types.indexOf(r.getAttribute('data-type')) === -1) ok = false;
        if (ok && from && r.getAttribute('data-date') < from) ok = false;
        if (ok && to && r.getAttribute('data-date') > to) ok = false;
        r.classList.toggle('hidden-view', !ok);
        if (ok) visible++;
    });
    document.getElementById('audit-empty').classList.toggle('hidden-view', visible > 0);
    document.getElementById('audit-count').textContent = visible + (visible > 1 ? ' actions' : ' action');
}

function resetAuditFilters() {
    document.getElementById('audit-search').value = '';
    ['audit-filter-action', 'audit-filter-type'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.querySelectorAll('input[type="checkbox"]:checked').forEach(function (c) {
            c.checked = false;
            msUpdate(c);
        });
    });
    document.getElementById('audit-date-from').value = '';
    document.getElementById('audit-date-to').value = '';
    applyAuditFilters();
}

var auditSortState = { col: -1, dir: 1 };

function sortRows(tbody, table, thEl, colIdx) {
    var allRows = Array.prototype.slice.call(tbody.querySelectorAll('tr:not(.empty-row)'));
    var dir = table._sortCol === colIdx ? -table._sortDir : 1;
    table._sortCol = colIdx;
    table._sortDir = dir;

    var sortable = [];
    var unsortable = [];
    allRows.forEach(function (r) {
        if (r.hasAttribute('data-sort' + colIdx)) sortable.push(r);
        else unsortable.push(r);
    });

    var numeric = /^-?\d+(\.\d+)?$/;
    sortable.sort(function (a, b) {
        var av = a.getAttribute('data-sort' + colIdx).trim();
        var bv = b.getAttribute('data-sort' + colIdx).trim();
        if (numeric.test(av) && numeric.test(bv)) {
            return (parseFloat(av) - parseFloat(bv)) * dir;
        }
        return av.toLowerCase().localeCompare(bv.toLowerCase(), 'fr') * dir;
    });

    sortable.concat(unsortable).forEach(function (r) { tbody.appendChild(r); });
    var emptyRow = tbody.querySelector('.empty-row');
    if (emptyRow) tbody.appendChild(emptyRow);

    table.querySelectorAll('th.sortable').forEach(function (th) {
        var ind = th.querySelector('.sort-indicator');
        if (ind) ind.textContent = th === thEl ? (dir === 1 ? '▲' : '▼') : '';
    });
}

function sortTable(thEl, colIdx) {
    var table = thEl.closest('table');
    sortRows(table.querySelector('tbody'), table, thEl, colIdx);
}

function sortTabTable(thEl, colIdx) {
    var table = thEl.closest('table');
    var active = null;
    table.querySelectorAll('tbody.labels-tbody').forEach(function (tb) {
        if (!tb.classList.contains('hidden-view')) active = tb;
    });
    if (!active) return;
    if (colIdx === 2) {
        active.querySelectorAll('tr:not(.empty-row)').forEach(function (r) {
            var o = r.querySelector('.label-order');
            if (o) r.setAttribute('data-sort2', o.textContent.trim());
        });
    }
    sortRows(active, table, thEl, colIdx);
    if (colIdx === 2) renumberLabels(active);
}

function sortAuditTable(thEl, colIdx) {
    sortTable(thEl, colIdx);
}
