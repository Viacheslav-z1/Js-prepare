import { Component } from "../core/component";

export class Navigation extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener("click", tabClick.bind(this));
  }

  registerTabs(tabs) {
    this.tabs = tabs;
  }
}

function tabClick(e) {
  const target = e.target;
  e.preventDefault();
  if (target.classList.contains("tab")) {
    const tabsNav = this.$el.querySelectorAll(".tab");
    tabsNav.forEach((tab) => {
      tab.classList.remove("active");
    });
    target.classList.add("active");

    const activeTab = this.tabs.find((t) => t.name === target.dataset.name);

    this.tabs.forEach((t) => t.component.hide());
    activeTab.component.show();

  }
}
