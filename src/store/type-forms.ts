import store from './index';

export const TYPE_FORM_DECLARATION = 1;
export const TYPE_FORM_PREVIEW = 2;

export function isPreviewForm(): boolean {
  return store.state.typeForm === TYPE_FORM_PREVIEW
}

export function isDeclarationForm(): boolean {
  return store.state.typeForm === TYPE_FORM_DECLARATION
}
