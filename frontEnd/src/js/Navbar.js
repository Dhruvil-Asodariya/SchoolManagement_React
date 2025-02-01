const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');

    toggleSidebarButton.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
      mainContent.classList.toggle('expanded');
    });
