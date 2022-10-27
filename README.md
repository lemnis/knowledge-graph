# Knowledge-graph

Simple lightweight component that render a table of facts about a subject, similar to google's knowledge graph / info box.

![image](https://user-images.githubusercontent.com/3999815/198284396-094420fd-81e3-4bda-98f1-4669df99313b.png)

Go to https://lemnis.github.io/knowledge-graph/ for a live demo.

# How to use as a web component

```html
<!-- Add script & stylesheet -->
<link rel="stylesheet" href="https://raw.githack.com/lemnis/knowledge-graph/master/src/style.css">
<script src="https://raw.githack.com/lemnis/knowledge-graph/master/src/script.js" type="module"></script>

<!-- component -->
<knowledge-graph key="Q2770505" source="wikidata"></knowledge-graph>
```

## Todo

- Improve & add more data sources
- Allow multiple methods for using the component (React, Node, iframe, etc)
