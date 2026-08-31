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
        'partial-modal-role': PARTIALS.modalRole,
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
    'view-recent': 'Activité récente',
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
        email: 'j.dupont@partenaire.be',
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
            { name: 'Administrateur', period: 'Depuis le 01/02/2024' }
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
function openPreview(title) {
    document.getElementById('preview-title').textContent = title;
    var isXls = /\.xlsx?$/i.test(title);
    var svg = isXls
        ? '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M8 13h2" /><path d="M14 13h2" /><path d="M8 17h2" /><path d="M14 17h2" />'
        : '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />';
    ['preview-icon-header', 'preview-icon-body'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.innerHTML = svg;
        el.classList.remove('text-red-500', 'text-green-500');
        el.classList.add(isXls ? 'text-green-500' : 'text-red-500');
    });
    toggleModal('modal-preview', true);
}

// ==========================================
// ENREGISTREMENT DE VUE
// ==========================================
var SAVED_VIEW_FILTERS = {
    'CA 2026': { search: '', entity: [], organ: ['OA'], audience: [], type: [], year: [], from: '2026-01-01', to: '2026-12-31' },
    'Projets Externes': { search: '', entity: [], organ: [], audience: ['EXT'], type: [], year: [], from: '', to: '' }
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
        audience: multiCheckedValues('f-audience'),
        type: multiCheckedValues('f-type'),
        year: multiCheckedValues('f-year'),
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
    apply('f-audience', f.audience);
    apply('f-type', f.type);
    apply('f-year', f.year);
    document.getElementById('f-date-from').value = f.from || '';
    document.getElementById('f-date-to').value = f.to || '';
    filterDocuments();
}

// ==========================================
// RÈGLES D'ACCÈS (modal création de rôle)
// ==========================================
var ROLE_RULE_CATEGORIES = [
    { name: 'Entité', labels: [['CGE', 'Chimay gestion (CGE)'], ['CPA', 'Chimay patrimoine (CPA)'], ['ADS', 'Abbaye de Scourmont (ADS)'], ['SOL', 'Solidarité cistercienne (SOL)'], ['AUB', 'Poteaupré (AUB)'], ['ESP', 'Espace Chimay (ESP)'], ['BSM', 'Boissons Sambre & Meuse (BSM)'], ['BDC', 'Bières de Chimay (BDC)'], ['FRO', 'Chimay fromages (FRO)'], ['PPB', 'Les Petits Pas de la Botte (PPB)'], ['MDC', 'La Maison De Casimir (MDC)'], ['AP', 'Albatros Poteaupré (AP)']] },
    { name: 'Organe', labels: [['OA', "Organe d'administration (OA)"], ['AG', 'Assemblée générale (AG)']] },
    { name: 'Audience', labels: [['INT', 'Interne (INT)'], ['EXT', 'Externe (EXT)']] },
    { name: 'Type de document', labels: [['CPT', 'Comptes (CPT)'], ['BDGT', 'Budget (BDGT)'], ['PV', 'Procès verbal (PV)'], ['CNVC', 'Convocation (CNVC)'], ['NOT', 'Notes (NOT)'], ['PRES', 'Présentation (PRES)'], ['RA', 'Rapport annuel (RA)'], ['BETU', "Bourse d'étude (BETU)"], ['ANX', 'Annexe (ANX)'], ['EXTR', 'Extrait (EXTR)']] },
    { name: 'Année', labels: [['2026', '2026'], ['2025', '2025'], ['2024', '2024']] }
];

var ROLE_DOC_PRIVILEGES = [
    ['Consulter', 'Rechercher et lire des documents.'],
    ['Télécharger', 'Enregistrer une copie des documents sur son ordinateur.'],
    ['Déposer', 'Ajouter de nouveaux documents sur la plateforme.'],
    ['Modifier', "Mettre à jour les étiquettes d'un document existant ou publier une nouvelle version."],
    ['Gérer les accès nominatifs', 'Rendre un document strictement confidentiel en limitant sa lecture à des personnes nommées explicitement (accès nominatif).']
];

var ROLE_GENERAL_PRIVILEGES = [
    { group: 'Actions sur les utilisateurs', items: [
        ['Créer des invitations', "Envoyer un mail contenant un lien d'invitation à rejoindre la plateforme."],
        ['Gérer les comptes', "Supprimer le compte d'un utilisateur existant."],
        ['Gérer les rôles', 'Définir de nouveaux profils métiers (ex : « Membre Chimay Gestion », « Comptable »), choisir leurs privilèges et définir les libellés auxquels ils ont accès.']
    ] },
    { group: 'Paramétrage et suivi', items: [
        ['Gérer les libellés', 'Créer, modifier ou supprimer des libellés.'],
        ["Consulter l'historique", "Avoir accès à l'historique recensant toutes les actions effectuées par les utilisateurs sur l'ensemble de la plateforme."]
    ] }
];

function rolePrivilegePanelHTML(groups) {
    return groups.map(function (g) {
        var opts = g.items.map(function (it) {
            return '<label class="ms-option"><input type="checkbox" value="' + it[0] + '" onchange="msUpdate(this)"><span class="ms-name">' + it[0] + '</span><span class="ms-desc">' + it[1] + '</span></label>';
        }).join('');
        return (g.group ? '<div class="ms-group">' + g.group + '</div>' : '') + opts;
    }).join('');
}

function roleRuleCategoryHTML(cat) {
    var opts = cat.labels.map(function (l) {
        return '<label class="ms-option"><input type="checkbox" value="' + l[0] + '" onchange="msUpdate(this)"> ' + l[1] + '</label>';
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

function roleRuleHTML(n) {
    var cats = ROLE_RULE_CATEGORIES.map(roleRuleCategoryHTML).join('\n');
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
        + '                                <div class="multi-select-panel hidden-view">' + rolePrivilegePanelHTML([{ group: '', items: ROLE_DOC_PRIVILEGES }]) + '</div>\n'
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
// FILTRES DOCUMENTS
// ==========================================
function filterDocuments() {
    var q = document.getElementById('f-search').value.toLowerCase();
    var entities = multiCheckedValues('f-entity');
    var organs = multiCheckedValues('f-organ');
    var audiences = multiCheckedValues('f-audience');
    var types = multiCheckedValues('f-type');
    var years = multiCheckedValues('f-year');
    var from = (document.getElementById('f-date-from').value || '');
    var to = (document.getElementById('f-date-to').value || '');

    var rows = document.querySelectorAll('#docs-tbody tr:not(.empty-row)');
    var visible = 0;
    rows.forEach(function (r) {
        var ok = true;
        if (q && (r.getAttribute('data-search') || '').indexOf(q) === -1) ok = false;
        if (ok && entities.length && entities.indexOf(r.getAttribute('data-entity')) === -1) ok = false;
        if (ok && organs.length && organs.indexOf(r.getAttribute('data-organ')) === -1) ok = false;
        if (ok && audiences.length && audiences.indexOf(r.getAttribute('data-audience')) === -1) ok = false;
        if (ok && types.length && types.indexOf(r.getAttribute('data-type')) === -1) ok = false;
        if (ok && years.length && years.indexOf((r.getAttribute('data-date') || '').substring(0, 4)) === -1) ok = false;
        if (ok && from && r.getAttribute('data-date') < from) ok = false;
        if (ok && to && r.getAttribute('data-date') > to) ok = false;
        r.classList.toggle('hidden-view', !ok);
        if (ok) visible++;
    });
    document.getElementById('docs-empty').classList.toggle('hidden-view', visible > 0);
    document.getElementById('docs-count').textContent = visible + (visible > 1 ? ' documents' : ' document');
    updateDocView();
}

// ==========================================
// REGROUPEMENT PAR CATÉGORIES (arborescence)
// ==========================================
var DOC_GROUPING_CATEGORIES = [
    { key: 'entity', name: 'Entité' },
    { key: 'organ', name: 'Organe' },
    { key: 'audience', name: 'Audience' },
    { key: 'type', name: 'Type de document' },
    { key: 'year', name: 'Année' }
];

var GROUPING = [];
var treeNodeSeq = 0;

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
    var cat = DOC_GROUPING_CATEGORIES.find(function (c) { return c.key === key; });
    var def = ROLE_RULE_CATEGORIES.find(function (c) { return c.name === cat.name; });
    var l = def ? def.labels.find(function (l) { return l[0] === value; }) : null;
    return l ? l[1] : value;
}

function docLabelOrder(key) {
    var cat = DOC_GROUPING_CATEGORIES.find(function (c) { return c.key === key; });
    var def = ROLE_RULE_CATEGORIES.find(function (c) { return c.name === cat.name; });
    return def ? def.labels.map(function (l) { return l[0]; }) : [];
}

function buildDocTree() {
    var container = document.getElementById('docs-tree');
    if (!container) return;
    container.innerHTML = '';
    var rows = visibleDocRows();
    if (!rows.length) {
        container.innerHTML = '<p class="text-center text-gray-500 py-10">Aucun document à afficher.</p>';
        return;
    }
    container.appendChild(makeTreeLevel(rows, 0));
}

function makeTreeLevel(rows, depth) {
    var wrap = document.createElement('div');
    if (depth > 0) wrap.className = 'folder-children';
    if (depth === GROUPING.length) {
        rows.forEach(function (r) { wrap.appendChild(renderTreeDocItem(r)); });
        return wrap;
    }
    var g = GROUPING[depth];
    var present = {};
    var hasOther = false;
    rows.forEach(function (r) {
        var v = rowCatValue(r, g.key);
        if (v) present[v] = true; else hasOther = true;
    });
    docLabelOrder(g.key).filter(function (v) { return present[v]; }).forEach(function (v) {
        wrap.appendChild(makeTreeFolder(g.key, v, docLabelName(g.key, v), rows.filter(function (r) { return rowCatValue(r, g.key) === v; }), depth));
    });
    if (hasOther) {
        wrap.appendChild(makeTreeFolder(g.key, 'AUTRES', 'Autres', rows.filter(function (r) { return !rowCatValue(r, g.key); }), depth));
    }
    return wrap;
}

function makeTreeFolder(key, value, name, rows, depth) {
    var el = document.createElement('div');
    var id = 'tf-' + (treeNodeSeq++);
    var rowEl = document.createElement('div');
    rowEl.className = 'folder-row';
    rowEl.innerHTML = '<svg class="folder-chev w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>'
        + '<svg class="w-4 h-4 text-amber-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>'
        + '<span class="text-sm font-medium text-gray-800 flex-1">' + (name === 'Autres' ? 'Autres' : name) + '</span>'
        + '<span class="badge badge-neutral">' + rows.length + '</span>';
    rowEl.setAttribute('data-folder', id);
    var children = makeTreeLevel(rows, depth + 1);
    children.id = id;
    if (depth > 0) children.classList.add('hidden-view');
    rowEl.onclick = function () {
        children.classList.toggle('hidden-view');
        rowEl.querySelector('.folder-chev').classList.toggle('open');
    };
    el.appendChild(rowEl);
    el.appendChild(children);
    return el;
}

function renderTreeDocItem(r) {
    var titleEl = r.querySelector('td:first-child .font-medium');
    var title = titleEl ? titleEl.textContent.trim() : '';
    var date = r.querySelectorAll('td')[1] ? r.querySelectorAll('td')[1].textContent.trim() : '';
    var isXls = /\.xlsx?$/i.test(title);
    var icon = isXls
        ? '<svg class="w-4 h-4 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M8 13h2" /><path d="M14 13h2" /><path d="M8 17h2" /><path d="M14 17h2" /></svg>'
        : '<svg class="w-4 h-4 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>';
    var div = document.createElement('div');
    div.className = 'doc-item flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-primary-light cursor-pointer';
    div.onclick = function () { openPreview(title); };
    div.innerHTML = icon + '<span class="text-sm text-gray-700 flex-1 truncate">' + title + '</span><span class="text-xs text-gray-500 shrink-0">' + date + '</span>';
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

function resetDocumentFilters() {
    document.getElementById('f-search').value = '';
    ['f-entity', 'f-organ', 'f-audience', 'f-type', 'f-year'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.querySelectorAll('input[type="checkbox"]:checked').forEach(function (c) {
            c.checked = false;
            msUpdate(c);
        });
    });
    document.getElementById('f-date-from').value = '';
    document.getElementById('f-date-to').value = '';
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
    document.querySelectorAll(scopeId + ' .label-tab').forEach(function (t, i) {
        t.classList.remove('label-tab-inactive', 'label-tab-0', 'label-tab-1', 'label-tab-2', 'label-tab-3', 'label-tab-4');
        if (i === idx) {
            t.classList.add('label-tab-' + i);
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
        thead.classList.add('thead-tab-' + idx);
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
