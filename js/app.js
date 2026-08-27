// ==========================================
// LOGIQUE JAVASCRIPT (Interactivité)
// ==========================================

// Injection des partiels dans leurs emplacements réservés
document.addEventListener('DOMContentLoaded', function () {
    var mounts = {
        'partial-sidebar': PARTIALS.sidebar,
        'partial-view-documents': PARTIALS.viewDocuments,
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
        'partial-modal-save-view': PARTIALS.modalSaveView
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

    var savedViewSelect = document.getElementById('saved-view-select');
    if (savedViewSelect) applySavedView(savedViewSelect);

    document.title = VIEW_TITLES['view-documents'];
});

var VIEW_TITLES = {
    'view-recent': 'Récemment consultés',
    'view-documents': 'Documents',
    'view-users': 'Utilisateurs',
    'view-roles': 'Rôles et privilèges',
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
    'Jean Dupont': {
        email: 'j.dupont@chimay-gestion.be',
        status: 'Actif',
        statusClass: 'badge-success',
        lastLogin: '24/08/2026 - 16:42',
        roles: [
            { name: 'Administrateur', period: 'Depuis le 01/02/2024' }
        ]
    },
    'Philippe Dumont': {
        email: 'p.dumont@partenaire.be',
        status: 'Actif',
        statusClass: 'badge-success',
        lastLogin: '22/08/2026 - 14:40',
        roles: [
            { name: 'Partenaire externe CGE', period: 'Jusqu au 31/12/2026' }
        ]
    },
    'Marie Bernard': {
        email: 'm.bernard@chimay-gestion.be',
        status: 'Actif',
        statusClass: 'badge-success',
        lastLogin: '21/08/2026 - 16:30',
        roles: [
            { name: 'Secrétaire de séance', period: 'Depuis le 03/03/2026' }
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
// APERÇU DE DOCUMENT (Popup)
// ==========================================
function openPreview(title) {
    document.getElementById('preview-title').textContent = title;
    toggleModal('modal-preview', true);
}

// ==========================================
// ENREGISTREMENT DE VUE
// ==========================================
var SAVED_VIEW_FILTERS = {
    'CA 2026': { search: '', entity: 'ALL', organ: 'OA', audience: 'ALL', type: 'ALL', from: '2026-01-01', to: '2026-12-31' },
    'Projets Externes': { search: '', entity: 'ALL', organ: 'ALL', audience: 'EXT', type: 'ALL', from: '', to: '' }
};

function currentDocumentFilters() {
    return {
        search: document.getElementById('f-search').value,
        entity: document.getElementById('f-entity').value,
        organ: document.getElementById('f-organ').value,
        audience: document.getElementById('f-audience').value,
        type: document.getElementById('f-type').value,
        from: document.getElementById('f-date-from').value,
        to: document.getElementById('f-date-to').value
    };
}

function saveView() {
    var input = document.getElementById('save-view-name');
    var name = input.value.trim();
    if (!name) {
        input.focus();
        return;
    }
    var select = document.getElementById('saved-view-select');
    if (!Array.prototype.some.call(select.options, function (o) { return o.value === name; })) {
        var opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    }
    SAVED_VIEW_FILTERS[name] = currentDocumentFilters();
    input.value = '';
    toggleModal('modal-save-view', false);
}

function applySavedView(select) {
    var name = select.value;
    if (!name) return;
    var f = SAVED_VIEW_FILTERS[name];
    if (!f) return;
    document.getElementById('f-search').value = f.search;
    document.getElementById('f-entity').value = f.entity;
    document.getElementById('f-organ').value = f.organ;
    document.getElementById('f-audience').value = f.audience;
    document.getElementById('f-type').value = f.type;
    document.getElementById('f-date-from').value = f.from;
    document.getElementById('f-date-to').value = f.to;
    filterDocuments();
}

// ==========================================
// FILTRES DOCUMENTS
// ==========================================
function filterDocuments() {
    var q = document.getElementById('f-search').value.toLowerCase();
    var val = function (id) {
        var el = document.getElementById(id);
        return el ? el.value : 'ALL';
    };
    var entity = val('f-entity'), organ = val('f-organ'), audience = val('f-audience'), type = val('f-type');
    var from = (document.getElementById('f-date-from').value || '');
    var to = (document.getElementById('f-date-to').value || '');

    var rows = document.querySelectorAll('#docs-tbody tr:not(.empty-row)');
    var visible = 0;
    rows.forEach(function (r) {
        var ok = true;
        if (q && (r.getAttribute('data-search') || '').indexOf(q) === -1) ok = false;
        if (ok && entity !== 'ALL' && r.getAttribute('data-entity') !== entity) ok = false;
        if (ok && organ !== 'ALL' && r.getAttribute('data-organ') !== organ) ok = false;
        if (ok && audience !== 'ALL' && r.getAttribute('data-audience') !== audience) ok = false;
        if (ok && type !== 'ALL' && r.getAttribute('data-type') !== type) ok = false;
        if (ok && from && r.getAttribute('data-date') < from) ok = false;
        if (ok && to && r.getAttribute('data-date') > to) ok = false;
        r.classList.toggle('hidden-view', !ok);
        if (ok) visible++;
    });
    document.getElementById('docs-empty').classList.toggle('hidden-view', visible > 0);
    document.getElementById('docs-count').textContent = visible + (visible > 1 ? ' documents' : ' document');
}

function resetDocumentFilters() {
    ['f-search', 'f-entity', 'f-organ', 'f-audience', 'f-type', 'f-date-from', 'f-date-to'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.value = (id === 'f-search' || id === 'f-date-from' || id === 'f-date-to') ? '' : 'ALL';
    });
    filterDocuments();
}

// ==========================================
// FILTRES UTILISATEURS
// ==========================================
function filterUsers() {
    var q = document.getElementById('user-search').value.toLowerCase();
    var rows = document.querySelectorAll('#users-tbody tr:not(.empty-row)');
    var visible = 0;
    rows.forEach(function (r) {
        var ok = !q || (r.getAttribute('data-search') || '').indexOf(q) !== -1;
        r.classList.toggle('hidden-view', !ok);
        if (ok) visible++;
    });
    document.getElementById('users-empty').classList.toggle('hidden-view', visible > 0);
}

// ==========================================
// FILTRES LIBELLÉS
// ==========================================
function filterLabels() {
    var q = document.getElementById('label-search').value.toLowerCase();
    var anyVisible = false;
    document.querySelectorAll('#view-labels .label-category').forEach(function (card) {
        var rows = card.querySelectorAll('tbody tr:not(.empty-row)');
        var visible = 0;
        rows.forEach(function (r) {
            var ok = !q || (r.getAttribute('data-search') || '').indexOf(q) !== -1;
            r.classList.toggle('hidden-view', !ok);
            if (ok) visible++;
        });
        var emptyRow = card.querySelector('tbody .empty-row');
        if (emptyRow) emptyRow.classList.toggle('hidden-view', visible > 0);
        card.classList.toggle('hidden-view', visible === 0);
        if (visible > 0) anyVisible = true;
    });
    document.getElementById('labels-none').classList.toggle('hidden-view', anyVisible);
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
    var action = document.getElementById('audit-filter-action').value;
    var type = document.getElementById('audit-filter-type').value;
    var from = (document.getElementById('audit-date-from').value || '').replace(/-/g, '');
    var to = (document.getElementById('audit-date-to').value || '').replace(/-/g, '');

    var rows = document.querySelectorAll('#audit-tbody tr:not(.empty-row)');
    var visible = 0;
    rows.forEach(function (r) {
        var ok = true;
        if (q && (r.getAttribute('data-text') || '').indexOf(q) === -1) ok = false;
        if (ok && action !== 'ALL' && r.getAttribute('data-action') !== action) ok = false;
        if (ok && type !== 'ALL' && r.getAttribute('data-type') !== type) ok = false;
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
    document.getElementById('audit-filter-action').value = 'ALL';
    document.getElementById('audit-filter-type').value = 'ALL';
    document.getElementById('audit-date-from').value = '';
    document.getElementById('audit-date-to').value = '';
    applyAuditFilters();
}

var auditSortState = { col: -1, dir: 1 };

function sortTable(thEl, colIdx) {
    var table = thEl.closest('table');
    var tbody = table.querySelector('tbody');
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

function sortAuditTable(thEl, colIdx) {
    sortTable(thEl, colIdx);
}
