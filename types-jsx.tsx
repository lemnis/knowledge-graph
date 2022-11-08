import { DOMAttributes }  from 'react';

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['knowledge-graph']: CustomElement<{ source: 'wikidata' | 'openstreetmap', key: string, data: Schema }>;
    }
  }
}
