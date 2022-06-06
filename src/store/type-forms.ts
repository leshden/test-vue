import {TYPE_FORM_ENTER, TYPE_FORM_PREVIEW} from './const';
import store from './index';

export function isPreviewForm(): boolean {
  return store.state.typeForm === TYPE_FORM_PREVIEW
}

export function isDeclarationForm(): boolean {
  return store.state.typeForm === TYPE_FORM_ENTER
}
