window.PARTIALS = window.PARTIALS || {};
PARTIALS.sidebar = `
<aside id="app-sidebar" class="w-64 bg-primary text-white flex flex-col h-full z-10">
    <div class="p-6 flex items-center gap-4 border-b border-white/20">
        <img src="assets/logo-fcw-2019-blanc.png" alt="Logo Fondation Chimay-Wartoise" class="h-24 w-auto shrink-0">
        <div class="text-left text-base font-bold text-white/85 leading-tight font-futura">
            <span class="block">Plateforme</span>
            <span class="block">documentaire</span>
            <span class="block">sécurisée</span>
        </div>
    </div>

    <button id="sidebar-toggle" class="sidebar-toggle" onclick="toggleSidebar()" title="Cliquer pour masquer le menu" aria-label="Basculer le menu">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
    </button>
    
    <nav class="flex-1 px-4 pt-4 space-y-2 overflow-y-auto">

        <button data-view="view-recent" onclick="switchView('view-recent', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M12 7v5l4 2" /></svg>
            Activité récente
        </button>
        
        <button data-view="view-documents" onclick="switchView('view-documents', this)" class="menu-btn w-full flex items-center gap-3 bg-primary brightness-125 text-white px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
            Documents
        </button>
        
        <button data-view="view-calendar" onclick="switchView('view-calendar', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" /></svg>
            Calendrier
        </button>
        
        <button data-view="view-users" onclick="switchView('view-users', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" /></svg>
            Utilisateurs
        </button>

        <button data-view="view-roles" onclick="switchView('view-roles', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
            Rôles et accès
        </button>

        <button data-view="view-labels" onclick="switchView('view-labels', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z" />
  <path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" />
  <circle cx="10.5" cy="6.5" r=".5" fill="currentColor" /></svg>
            Gestion des libellés
        </button>

        <button data-view="view-audit" onclick="switchView('view-audit', this)" class="menu-btn w-full flex items-center gap-3 text-white/85 hover:text-white hover:bg-white/15 px-3 py-2 rounded-md transition-colors">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
            Historique des actions
        </button>
    </nav>
    
    <img src="assets/separateur-blason.svg" alt="Blason Fondation Chimay-Wartoise" class="w-full block shrink-0">

    <div class="p-4 space-y-1 bg-secondary">
        <div class="flex items-center gap-3 mb-2">
            <div class="avatar w-8 h-8 text-sm avatar-red">PD</div>
            <div class="text-sm flex-1 min-w-0">
                <p class="font-medium text-white truncate">Philippe Dumont</p>
                <p class="text-xs text-white/60 truncate">p.dumont@chimay-gestion.be</p>
            </div>
        </div>
        <button onclick="switchView('view-settings')" title="Paramètres du compte" class="w-full flex items-center gap-2 text-white/60 hover:text-white text-sm px-1 py-1 transition-colors">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" /></svg>
            Paramètres compte
        </button>
        <button onclick="alert('Déconnexion (prototype)')" class="w-full flex items-center gap-2 text-white/60 hover:text-white text-sm px-1 py-1 transition-colors">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m16 17 5-5-5-5" />
  <path d="M21 12H9" />
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
            Se déconnecter
        </button>
        <div class="pt-3 border-t border-white/10 text-center space-y-1">
            <p class="text-[10px] text-white/40 leading-snug">© 2026 Fondation Chimay-Wartoise<br>Tous droits réservés</p>
            <p class="text-[10px] text-white/40">Version 0.0.0</p>
        </div>
    </div>
</aside>
`;
