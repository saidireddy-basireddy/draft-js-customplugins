import * as React from 'react';
import * as Draft from 'draft-js';
import { MyDraftDecorator } from '../draftcore/MyDraft';
import { observer } from 'mobx-react';
import { Linkify } from './linkify';
import * as tlds from 'tlds';
import * as linkifyIt from 'linkify-it';

const linkify = linkifyIt();
linkify.tlds(tlds);

export class LinkifyDecorator implements MyDraftDecorator {
  entityType = 'linkyfy';

  editorState: Draft.EditorState;

  onEditorStateUpdated = (editorState: Draft.EditorState) => {
    this.editorState = editorState;
  }

  strategy = (block: Draft.ContentBlock, callback: (start: number, end: number) => void) => {
    const links = linkify.match(block.getText());
    if (links) {
      links.map(l => callback(l.index, l.lastIndex));
    }
  }

  component = observer<any>((props: { decoratedText: string, entityKey: string, children: any }) => {
    const links = linkify.match(props.decoratedText);
    let url = '';
    if (links && links.length > 0) {
      url = links[0].url;
    }
    return(
     <Linkify url={url} >
      {props.children}
    </Linkify>
    );
  });

}