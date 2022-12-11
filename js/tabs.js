const catalog_tabs = {
    tabsClass: "js-tab-btn",
    wrap: "js-tabs-wrap",
    content: "js-tab-content",
    active: "active",
};

function setTabs(catalog_tabs) {
    const tabBtns = document.querySelectorAll(`.${catalog_tabs.tabsClass}`);

    function onTabClick(e) {
        e.preventDefault();
        const path = this.dataset.path;
        const wrap = this.closest(`.${catalog_tabs.wrap}`);
        const currentContent = wrap.querySelector(
            `.${catalog_tabs.content}[data-target="${path}"]`
        );
        const contents = wrap.querySelectorAll(`.${catalog_tabs.content}`);

        contents.forEach((el) => {
            el.classList.remove(catalog_tabs.active);
        });

        currentContent.classList.add(catalog_tabs.active);

        tabBtns.forEach((el) => {
            el.classList.remove(catalog_tabs.active);
        });

        this.classList.add(catalog_tabs.active);
    }

    tabBtns.forEach(function (el) {
        el.addEventListener("click", onTabClick);
    });
}

setTabs(catalog_tabs);