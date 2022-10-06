import $ from "jquery";
import { marked } from "marked";

console.info('Runnning on google keep')

const elems = $('[role="textbox"]')

elems.each(function() {
  const val = $(this).text();

  if(!val.startsWith("--md")){
    return;
  }
  const markedText = marked(val);
  $(this).append(markedText)
});

export {}
