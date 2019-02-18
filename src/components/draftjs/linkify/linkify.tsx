import * as React from 'react';

const Linkify = (props: { url: string, children?: any }) => <a href={props.url} target="_blank">{props.children}</a>;

export { Linkify };
