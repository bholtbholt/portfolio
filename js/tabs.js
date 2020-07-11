// This tab implementation considers everything with [data-behavior~="tab"] a togglable tab
// [data-behavior~="trigger-tab"] will make it _active

// Tabs will reset their state, apply the new state, and push it to the browser history

// Tab Trigger elements expect
// [data-behavior~="trigger-tab"]: the trigger to bind
// data-tab: id of the tab to make active
// href: the path to push to history.state
// data-title: the title of the path
// class: '_active' will be applied to active trigger

// Tabs expect
// id: must correspond to trigger's data-tab
// [data-behavior~="trigger-tab"]
// class: '_active' will be applied to active tab

(() => {
  const tabs = Array.from(document.querySelectorAll('[data-behavior~="tab"]'));
  const tabTriggers = Array.from(document.querySelectorAll('[data-behavior~="trigger-tab"]'));

  function updateUrl(trigger) {
    const newPath = trigger.getAttribute('href');
    const pageTitle = trigger.getAttribute('data-title');

    window.history.pushState(newPath, pageTitle, newPath);
  }

  function activateMastheadTrigger(targetTrigger) {
    const targetUrl = targetTrigger.href;
    const activatingTrigger = tabTriggers.find(
      (trigger) => trigger.href === targetUrl && trigger.classList.contains('masthead__link'),
    );
    activatingTrigger.classList.add('_active');
  }

  function activateTab(targetTab) {
    const activatingTab = tabs.find((tab) => tab.id === targetTab);
    activatingTab.classList.add('_active');
  }

  function resetTabs() {
    tabs.forEach((tab) => tab.classList.remove('_active'));
    tabTriggers.forEach((trigger) => trigger.classList.remove('_active'));
  }

  function toggleActiveTab(e) {
    e.preventDefault();
    const trigger = e.target;
    const targetTab = trigger.getAttribute('data-tab');

    resetTabs();
    activateTab(targetTab);
    activateMastheadTrigger(trigger);
    updateUrl(trigger);
  }

  tabTriggers.forEach((trigger) => trigger.addEventListener('click', toggleActiveTab));
  window.addEventListener('popstate', (e) => (window.location = e.state || '/'));
})();
