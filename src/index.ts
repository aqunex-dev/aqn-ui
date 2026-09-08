import type { App, Plugin } from 'vue';

import './style.css';

import UIAccordion from './components/UIAccordion/UIAccordion.vue';
import UIAlert from './components/UIAlert/UIAlert.vue';
import UIBadge from './components/UIBadge/UIBadge.vue';
import UIBase from './components/UIBase/UIBase.vue';
import UIButton from './components/UIButton/UIButton.vue';
import UICard from './components/UICard/UICard.vue';

import UIFooter from './components/UIFooter/UIFooter.vue';
import UIFooterLink from './components/UIFooter/UIFooterLink.vue';
import UIFooterSocial from './components/UIFooter/UIFooterSocial.vue';

import UIHero from './components/UIHero/UIHero.vue';
import UIInput from './components/UIInput/UIInput.vue';
import UILogo from './components/UILogo/UILogo.vue';
import UISectionTitle from './components/UISectionTitle/UISectionTitle.vue';
import UISocialButton from './components/UISocialButton/UISocialButton.vue';
import UIStat from './components/UIStat/UIStat.vue';
import UITable from './components/UITable/UITable.vue';
import UIThemeToggle from './components/UIThemeToggle/UIThemeToggle.vue';


export {
  UIAccordion,
  UIAlert,
  UIBadge,
  UIBase,
  UIButton,
  UICard,
  UIFooter,
  UIFooterLink,
  UIFooterSocial,
  UIHero,
  UIInput,
  UILogo,
  UISectionTitle,
  UISocialButton,
  UIStat,
  UITable,
  UIThemeToggle,
};

const components = {
  UIAccordion,
  UIAlert,
  UIBadge,
  UIBase,
  UIButton,
  UICard,
  UIFooter,
  UIFooterLink,
  UIFooterSocial,
  UIHero,
  UIInput,
  UILogo,
  UISectionTitle,
  UISocialButton,
  UIStat,
  UITable,
  UIThemeToggle,
};

const plugin: Plugin = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

export default plugin;
