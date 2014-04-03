// Compiled by ClojureScript 0.0-2197
goog.provide('session.keymap');
goog.require('cljs.core');
goog.require('session.paredit');
goog.require('session.paredit');
goog.require('subpar.core');
session.keymap.test = (function test(cm){alert("foo");
var doc = cm;return console.log(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc.getCursor("head"),doc.getCursor("from"),doc.getCursor("to"),doc.getCursor("anchor")], null));
});
session.keymap.editor_data = (function editor_data(doc){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selection-start","selection-start",2374755411),(function (){var x = doc.indexFromPos(doc.getCursor("from"));return x;
})(),new cljs.core.Keyword(null,"selection-end","selection-end",2052177036),(function (){var x = doc.indexFromPos(doc.getCursor("to"));return x;
})(),new cljs.core.Keyword(null,"caret-position","caret-position",4530957221),(function (){var x = doc.indexFromPos(doc.getCursor("head"));return x;
})(),new cljs.core.Keyword(null,"text-value","text-value",1779206211),doc.getValue()], null);
});
session.keymap.subpar_keymap = {"Shift-Ctrl-9": (function (cm){return subpar.core.backward_slurp.call(null,cm);
}), "Shift-Ctrl-[": (function (cm){return subpar.core.backward_barf.call(null,cm);
}), "Shift-Alt-S": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.split-sexp","paredit-plus.split-sexp",2384054337),cm);
}), "Shift-0": (function (cm){return subpar.core.close_expression.call(null,cm,")");
}), "Alt-J": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.join-sexps","paredit-plus.join-sexps",3200795434),cm);
}), "Shift-Ctrl-]": (function (cm){return subpar.core.forward_barf.call(null,cm);
}), "Ctrl-K": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.kill","paredit-plus.kill",2146474370),cm);
}), "Ctrl-Left": (function (cm){return subpar.core.forward_barf.call(null,cm);
}), "fallthrough": ["basic"], "Shift-Alt-9": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.wrap-round","paredit-plus.wrap-round",4530489071),cm);
}), "Delete": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.backward-delete","paredit-plus.backward-delete",3592606805),cm);
}), "Shift-Alt-[": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.wrap-curly","paredit-plus.wrap-curly",4516812078),cm);
}), "Ctrl-Alt-Left": (function (cm){return subpar.core.backward_slurp.call(null,cm);
}), "Shift-9": (function (cm){return subpar.core.open_expression.call(null,cm,"()");
}), "Alt-S": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.splice-sexp","paredit-plus.splice-sexp",4170175995),cm);
}), "Ctrl-R": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.raise-sexp","paredit-plus.raise-sexp",2844782255),cm);
}), "Shift-[": (function (cm){return subpar.core.open_expression.call(null,cm,"{}");
}), "Shift-]": (function (cm){return subpar.core.close_expression.call(null,cm,"}");
}), "Alt-Enter": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.new-line-after-pair-close","paredit-plus.new-line-after-pair-close",4241192482),cm);
}), "Ctrl-Alt-Right": (function (cm){return subpar.core.backward_barf.call(null,cm);
}), "Alt-[": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.wrap-square","paredit-plus.wrap-square",2684315776),cm);
}), "Shift-Ctrl-0": (function (cm){return subpar.core.forward_slurp.call(null,cm);
}), "Ctrl-[": (function (cm){return subpar.core.backward_slurp.call(null,cm);
}), "Ctrl-Right": (function (cm){return subpar.core.forward_slurp.call(null,cm);
}), "[": (function (cm){return subpar.core.open_expression.call(null,cm,"[]");
}), "Ctrl-]": (function (cm){return subpar.core.backward_barf.call(null,cm);
}), "Shift-'": (function (cm){return subpar.core.double_quote.call(null,cm);
}), "]": (function (cm){return subpar.core.close_expression.call(null,cm,"]");
}), "Backspace": (function (cm){return session.paredit.paredit.call(null,new cljs.core.Keyword(null,"paredit-plus.backward-delete","paredit-plus.backward-delete",3592606805),cm);
})};

//# sourceMappingURL=keymap.js.map