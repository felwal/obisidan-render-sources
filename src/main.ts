import { Plugin, TFile, getLinkpath } from "obsidian";
import { RenderSourcesPluginSettings as RenderSourcesPluginSettings, DEFAULT_SETTINGS, RenderSourcesSettingTab } from "./settings"
import { SourceLink } from "./sourceLink";

export default class RenderSourcesPlugin extends Plugin {
  settings: RenderSourcesPluginSettings;

  async onload() {
    console.log("loading plugin");

    await this.loadSettings();
    this.registerPostProcessing();

    this.addSettingTab(new RenderSourcesSettingTab(this.app, this));

  }

  onunload() {
    console.log("unloading plugin");
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  registerPostProcessing() {
    this.registerMarkdownPostProcessor((element, context) => {
      const linkEls = element.querySelectorAll("a.internal-link");

      for (let i = 0; i < linkEls.length; i++) {
        const linkEl = linkEls.item(i);

        console.log(linkEl.parentNode.parentNode)

        const linkBasename = getLinkpath(linkEl.childNodes[0].parentNode.dataset.href);
        const linkText = linkEl.innerText.trim();

        // TODO: get class of linked file

        const isSourceLink = true;
        const isPartialWork = false;

        if (isSourceLink) {
          context.addChild(new SourceLink(linkEl, linkBasename, linkText, isPartialWork));
        }
      }
    });
  }

}
