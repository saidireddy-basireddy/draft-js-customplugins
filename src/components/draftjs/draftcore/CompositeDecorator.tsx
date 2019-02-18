import * as Draft from 'draft-js';
import { HashTagDecorator } from './../hashTags/hashTagDecorator';
import { AtMentionsDecorator } from './../atMentions/atMentionDecorator';
import { LinkifyDecorator } from './../linkify/linkifyDecorator';
import { EmojiDecorator } from './../emojis/EmojiDecorator';

export class CompositDecorator {

  constructor(public UpdateEditorStoreCallBack: (editorState: Draft.EditorState) => void) { }

  private atMention = new AtMentionsDecorator(this.UpdateEditorStoreCallBack);
  private hashTag = new HashTagDecorator(this.UpdateEditorStoreCallBack);
  private Linkify = new LinkifyDecorator();
  private emoji = new EmojiDecorator(this.UpdateEditorStoreCallBack);

  onUpDateEditorState(editorState: Draft.EditorState) {
    this.hashTag.onEditorStateUpdated(editorState);
    this.atMention.onEditorStateUpdated(editorState);
    this.emoji.onEditorStateUpdated(editorState);
  }

  onKeyPressed = (e) => {
    let keyHandeled = this.atMention.onKeyPressed(e);
    if (keyHandeled) { return keyHandeled; }
    keyHandeled = this.hashTag.onKeyPressed(e);
    if (keyHandeled) { return keyHandeled; }
    keyHandeled = this.emoji.onKeyPressed(e);
    if (keyHandeled) { return keyHandeled; }
    return null;
  }

  onKeyCommand = (command: string) => {
    let keyHandled = this.atMention.onKeyCommand(command);
    if (keyHandled !== 'not-handled') { return keyHandled; }
    keyHandled = this.hashTag.onKeyCommand(command);
    if (keyHandled !== 'not-handled') { return keyHandled; }
    keyHandled = this.emoji.onKeyCommand(command);
    if (keyHandled !== 'not-handled') { return keyHandled; }
    return 'not-handled';
  }    

  onKeyUp = (e) => {
    let keyHandled = this.atMention.onKeyUp(e);
    if (keyHandled) { return keyHandled; }
    keyHandled = this.hashTag.onKeyUp(e);
    if (keyHandled) { return keyHandled; }
    keyHandled = this.emoji.onKeyUp(e);
    if (keyHandled) { return keyHandled; }
    return null;
  }

  onKeyDown = (e) => {
    let keyHandled = this.atMention.onKeyDown(e);
    if (keyHandled) { return keyHandled; }
    keyHandled = this.hashTag.onKeyDown(e);
    if (keyHandled) { return keyHandled; }
    keyHandled = this.emoji.onKeyDown(e);
    if (keyHandled) { return keyHandled; }
    return null;
  }

  onEscape = (e) => {
    let keyHandled = this.atMention.onEscape(e);
    if (keyHandled) { return keyHandled; }
    keyHandled = this.hashTag.onEscape(e);
    if (keyHandled) { return keyHandled; }
    keyHandled = this.emoji.onEscape(e);
    if (keyHandled) { return keyHandled; }
    return null;
  }

  getCompositDecorators() {
    const compositDecorators = new Draft.CompositeDecorator([
      {
        strategy: this.atMention.strategy,
        component: this.atMention.component
      },
      {
        strategy: this.hashTag.strategy,
        component: this.hashTag.component
      },
      {
        strategy: this.Linkify.strategy,
        component: this.Linkify.component
      },
      {
        strategy: this.emoji.strategy,
        component: this.emoji.component
      }
    ]);
    return compositDecorators;
  }
}
