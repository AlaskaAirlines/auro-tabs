<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Tabs

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
`<auro-tabs>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of showing a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
The `<auro-tabs>` element should be used in situations where users:

* show a list of content without reloading the page or compromising on space
* need to organize large amount of content that can be separated
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-tabs/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-tabs/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-tabs?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-tabs)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-tabs?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-tabs</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Define Dependency in Project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Defining the dependency within each project that is using the `<auro-tabs>` component.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-tabs";</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Legacy browsers such as IE11 are no longer supported.

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-tabs@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

## Basic Example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-tabgroup variant="unstyled"&gt;
  &lt;div slot="tabs"&gt;
    &lt;auro-tab&gt;
      Baggage Info
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      Help
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      More
    &lt;/auro-tab&gt;
    &lt;auro-tab&gt;
      No Panel
    &lt;/auro-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;auro-tabpanel&gt;
      &lt;span&gt;Tab 1 Content&lt;/span&gt;
    &lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 2 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
    &lt;auro-tabpanel&gt;&lt;span&gt;Tab 3 Content&lt;/span&gt;&lt;/auro-tabpanel&gt;
  &lt;/div&gt;
&lt;/auro-tabgroup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->

## Custom Component Registration for Version Management

There are two key parts to every Auro component: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

When you install the component as described on the `Install` page, the class is imported automatically, and the component is registered globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), you can manually register the class under a custom element name to avoid conflicts.

You can do this by importing only the component class and using the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

<pre class="language-js"><code class="language-js">// Import the class only
import { AuroTab, AuroTabgroup, AuroTabpanel } from '@aurodesignsystem/auro-tabs/class';
// Register with a custom name if desired
AuroTab.register('custom-tab');
AuroTabgroup.register('custom-tabgroup');
AuroTabpanel.register('custom-tabpanel');</code></pre>

This will create new custom elements `<custom-tabgroup>`, `<custom-tab>` and `<custom-tabpanel>` that behave exactly like `<auro-tabgroup>`, `<auro-tab>` and `<auro-tabpanel>`, allowing both to coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
<!-- The below content is automatically added from ./apiExamples/custom.html -->
<custom-tabgroup variant="unstyled">
<div slot="tabs">
<custom-tab>
        Baggage Info
</custom-tab>
<custom-tab>
        Help
</custom-tab>
<custom-tab>
        More
</custom-tab>
<custom-tab>
        No Panel
</custom-tab>
</div>
<div slot="panels">
<custom-tabpanel>
<span>Tab 1 Content</span>
</custom-tabpanel>
<custom-tabpanel><span>Tab 2 Content</span></custom-tabpanel>
<custom-tabpanel><span>Tab 3 Content</span></custom-tabpanel>
</div>
</custom-tabgroup>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

<pre class="language-html"><code class="language-html">&lt;custom-tabgroup variant="unstyled"&gt;
  &lt;div slot="tabs"&gt;
    &lt;custom-tab&gt;
      Baggage Info
    &lt;/custom-tab&gt;
    &lt;custom-tab&gt;
      Help
    &lt;/custom-tab&gt;
    &lt;custom-tab&gt;
      More
    &lt;/custom-tab&gt;
    &lt;custom-tab&gt;
      No Panel
    &lt;/custom-tab&gt;
  &lt;/div&gt;
  &lt;div slot="panels"&gt;
    &lt;custom-tabpanel&gt;
      &lt;span&gt;Tab 1 Content&lt;/span&gt;
    &lt;/custom-tabpanel&gt;
    &lt;custom-tabpanel&gt;&lt;span&gt;Tab 2 Content&lt;/span&gt;&lt;/custom-tabpanel&gt;
    &lt;custom-tabpanel&gt;&lt;span&gt;Tab 3 Content&lt;/span&gt;&lt;/custom-tabpanel&gt;
  &lt;/div&gt;
&lt;/custom-tabgroup&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
