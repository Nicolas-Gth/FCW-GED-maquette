window.PARTIALS = window.PARTIALS || {};
PARTIALS.sidebar = `
<aside class="w-64 bg-primary text-white flex flex-col h-full z-10">
    <div class="p-6 flex flex-col items-center text-center">
        <img src="assets/logo-fcw-2019-blanc.png" alt="Logo Fondation Chimay-Wartoise" class="h-32 w-auto">
        <p class="text-xs text-white/60 mt-3">Plateforme documentaire sécurisée</p>
    </div>
    
    <nav class="flex-1 px-4 space-y-2 overflow-y-auto">
        <p class="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 mt-4">Menu Principal</p>

        <button data-view="view-recent" onclick="switchView('view-recent', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Récemment consultés
        </button>
        
        <button data-view="view-documents" onclick="switchView('view-documents', this)" class="menu-btn w-full flex items-center gap-3 bg-primary brightness-125 text-white px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Documents
        </button>
        
        <button data-view="view-users" onclick="switchView('view-users', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            Utilisateurs
        </button>

        <button data-view="view-roles" onclick="switchView('view-roles', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            Rôles & Permissions
        </button>

        <button data-view="view-labels" onclick="switchView('view-labels', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
            Gestion des Libellés
        </button>

        <button data-view="view-audit" onclick="switchView('view-audit', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Historique
        </button>

        <!-- VUES ENREGISTRÉES -->
        <p class="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 mt-8">Vues enregistrées</p>
        <div id="saved-views-list">
            <a href="#" class="flex items-center gap-3 text-white/85 hover:text-white text-sm px-3 py-1.5">
                Mes CA 2026
            </a>
            <a href="#" class="flex items-center gap-3 text-white/85 hover:text-white text-sm px-3 py-1.5">
                Projets Externes
            </a>
        </div>
    </nav>
    
    <div class="p-4 border-t border-white/20 space-y-2">
        <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold shrink-0">JD</div>
            <div class="text-sm flex-1 min-w-0">
                <p class="font-medium text-white truncate">Jean Dupont</p>
                <p class="text-xs text-white/60">Admin Système</p>
            </div>
            <button onclick="switchView('view-settings')" title="Paramètres du compte" class="text-white/60 hover:text-white transition-colors shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
        </div>
        <button onclick="alert('Déconnexion (prototype)')" class="w-full flex items-center gap-2 text-white/60 hover:text-white text-sm px-1 py-1.5 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Se déconnecter
        </button>
        <div class="pt-3 border-t border-white/10 text-center space-y-1">
            <p class="text-[10px] text-white/40 leading-snug">Prototype de démonstration<br>Fondation Chimay-Wartoise</p>
            <p class="text-[10px] text-white/40">Version prototype</p>
        </div>
    </div>
</aside>
`;
