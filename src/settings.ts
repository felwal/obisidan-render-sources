import { App, PluginSettingTab, Setting } from "obsidian";
import RenderSourcesPlugin from "./main";

export interface RenderSourcesPluginSettings {
  mySetting: string;
}

export const DEFAULT_SETTINGS: RenderSourcesPluginSettings = {
  mySetting: "default"
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
