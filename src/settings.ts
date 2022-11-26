import { App, PluginSettingTab, Setting } from "obsidian";
import RenderSourcesPlugin from "./main";

export interface RenderSourcesPluginSettings {
  italicClass: string;
  quotationMarkClass: string;
}

export const DEFAULT_SETTINGS: RenderSourcesPluginSettings = {
  italicClass: "source-work",
  quotationMarkClass: "source-work-partial"
}

export class RenderSourcesSettingTab extends PluginSettingTab {
  plugin: RenderSourcesPlugin;

  constructor(app: App, plugin: RenderSourcesPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const {containerEl} = this;

    containerEl.empty();
    containerEl.createEl("h1", {text: "Render Sources"});
  }
}
