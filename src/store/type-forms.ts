import {TYPE_FORM_ENTER, TYPE_FORM_PREVIEW, TYPE_FORM_HANDLE} from './const';
import store from './index';

export function isPreviewForm(): boolean {
  return store.state.typeForm === TYPE_FORM_PREVIEW
}

export function isDeclarationForm(): boolean {
  return store.state.typeForm === TYPE_FORM_ENTER
}

export function isHandleForm(): boolean {
  return store.state.typeForm === TYPE_FORM_HANDLE
}
