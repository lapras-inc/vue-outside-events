import {
  ClickOutside,
  DblClickOutside,
  FocusOutside,
  BlurOutside,
  MouseMoveOutside,
  MouseDownOutside,
  MouseUpOutside,
  MouseOverOutside,
  MouseOutOutside,
  ChangeOutside,
  SelectOutside,
  SubmitOutside,
  KeyDownOutside,
  KeyPressOutside,
  KeyUpOutside,
  CustomEventOutside
} from './vue-outside-events'

const plugin = {
  install (app) {
    app.directive(ClickOutside.directiveName, ClickOutside)
    app.directive(DblClickOutside.directiveName, DblClickOutside)
    app.directive(FocusOutside.directiveName, FocusOutside)
    app.directive(BlurOutside.directiveName, BlurOutside)
    app.directive(MouseMoveOutside.directiveName, MouseMoveOutside)
    app.directive(MouseDownOutside.directiveName, MouseDownOutside)
    app.directive(MouseUpOutside.directiveName, MouseUpOutside)
    app.directive(MouseOverOutside.directiveName, MouseOverOutside)
    app.directive(MouseOutOutside.directiveName, MouseOutOutside)
    app.directive(ChangeOutside.directiveName, ChangeOutside)
    app.directive(SelectOutside.directiveName, SelectOutside)
    app.directive(SubmitOutside.directiveName, SubmitOutside)
    app.directive(KeyDownOutside.directiveName, KeyDownOutside)
    app.directive(KeyPressOutside.directiveName, KeyPressOutside)
    app.directive(KeyUpOutside.directiveName, KeyUpOutside)
    app.directive(CustomEventOutside.directiveName, CustomEventOutside)
  }
}

export default plugin
