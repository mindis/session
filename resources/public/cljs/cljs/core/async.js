// Compiled by ClojureScript 0.0-2197
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11983 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11983 = (function (f,fn_handler,meta11984){
this.f = f;
this.fn_handler = fn_handler;
this.meta11984 = meta11984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11983.cljs$lang$type = true;
cljs.core.async.t11983.cljs$lang$ctorStr = "cljs.core.async/t11983";
cljs.core.async.t11983.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t11983");
});
cljs.core.async.t11983.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11985){var self__ = this;
var _11985__$1 = this;return self__.meta11984;
});
cljs.core.async.t11983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11985,meta11984__$1){var self__ = this;
var _11985__$1 = this;return (new cljs.core.async.t11983(self__.f,self__.fn_handler,meta11984__$1));
});
cljs.core.async.__GT_t11983 = (function __GT_t11983(f__$1,fn_handler__$1,meta11984){return (new cljs.core.async.t11983(f__$1,fn_handler__$1,meta11984));
});
}
return (new cljs.core.async.t11983(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11987 = buff;if(G__11987)
{var bit__4128__auto__ = null;if(cljs.core.truth_((function (){var or__3478__auto__ = bit__4128__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return G__11987.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11987.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11987);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11987);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11988 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11988);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11988,ret){
return (function (){return fn1.call(null,val_11988);
});})(val_11988,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3466__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4326__auto___11989 = n;var x_11990 = 0;while(true){
if((x_11990 < n__4326__auto___11989))
{(a[x_11990] = 0);
{
var G__11991 = (x_11990 + 1);
x_11990 = G__11991;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11992 = (i + 1);
i = G__11992;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11996 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11996 = (function (flag,alt_flag,meta11997){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11997 = meta11997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11996.cljs$lang$type = true;
cljs.core.async.t11996.cljs$lang$ctorStr = "cljs.core.async/t11996";
cljs.core.async.t11996.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t11996");
});})(flag))
;
cljs.core.async.t11996.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11998){var self__ = this;
var _11998__$1 = this;return self__.meta11997;
});})(flag))
;
cljs.core.async.t11996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11998,meta11997__$1){var self__ = this;
var _11998__$1 = this;return (new cljs.core.async.t11996(self__.flag,self__.alt_flag,meta11997__$1));
});})(flag))
;
cljs.core.async.__GT_t11996 = ((function (flag){
return (function __GT_t11996(flag__$1,alt_flag__$1,meta11997){return (new cljs.core.async.t11996(flag__$1,alt_flag__$1,meta11997));
});})(flag))
;
}
return (new cljs.core.async.t11996(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12002 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12002 = (function (cb,flag,alt_handler,meta12003){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12003 = meta12003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12002.cljs$lang$type = true;
cljs.core.async.t12002.cljs$lang$ctorStr = "cljs.core.async/t12002";
cljs.core.async.t12002.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12002");
});
cljs.core.async.t12002.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12004){var self__ = this;
var _12004__$1 = this;return self__.meta12003;
});
cljs.core.async.t12002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12004,meta12003__$1){var self__ = this;
var _12004__$1 = this;return (new cljs.core.async.t12002(self__.cb,self__.flag,self__.alt_handler,meta12003__$1));
});
cljs.core.async.__GT_t12002 = (function __GT_t12002(cb__$1,flag__$1,alt_handler__$1,meta12003){return (new cljs.core.async.t12002(cb__$1,flag__$1,alt_handler__$1,meta12003));
});
}
return (new cljs.core.async.t12002(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12005_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12005_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3478__auto__ = wport;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12006 = (i + 1);
i = G__12006;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3478__auto__ = ret;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3466__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3466__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12007){var map__12009 = p__12007;var map__12009__$1 = ((cljs.core.seq_QMARK_.call(null,map__12009))?cljs.core.apply.call(null,cljs.core.hash_map,map__12009):map__12009);var opts = map__12009__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12007 = null;if (arguments.length > 1) {
  p__12007 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12007);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12010){
var ports = cljs.core.first(arglist__12010);
var p__12007 = cljs.core.rest(arglist__12010);
return alts_BANG___delegate(ports,p__12007);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12018 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12018 = (function (ch,f,map_LT_,meta12019){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12019 = meta12019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12018.cljs$lang$type = true;
cljs.core.async.t12018.cljs$lang$ctorStr = "cljs.core.async/t12018";
cljs.core.async.t12018.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12018");
});
cljs.core.async.t12018.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12018.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12021 = (function (fn1,_,meta12019,ch,f,map_LT_,meta12022){
this.fn1 = fn1;
this._ = _;
this.meta12019 = meta12019;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12022 = meta12022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12021.cljs$lang$type = true;
cljs.core.async.t12021.cljs$lang$ctorStr = "cljs.core.async/t12021";
cljs.core.async.t12021.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12021");
});})(___$1))
;
cljs.core.async.t12021.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12021.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12011_SHARP_){return f1.call(null,(((p1__12011_SHARP_ == null))?null:self__.f.call(null,p1__12011_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12023){var self__ = this;
var _12023__$1 = this;return self__.meta12022;
});})(___$1))
;
cljs.core.async.t12021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12023,meta12022__$1){var self__ = this;
var _12023__$1 = this;return (new cljs.core.async.t12021(self__.fn1,self__._,self__.meta12019,self__.ch,self__.f,self__.map_LT_,meta12022__$1));
});})(___$1))
;
cljs.core.async.__GT_t12021 = ((function (___$1){
return (function __GT_t12021(fn1__$1,___$2,meta12019__$1,ch__$2,f__$2,map_LT___$2,meta12022){return (new cljs.core.async.t12021(fn1__$1,___$2,meta12019__$1,ch__$2,f__$2,map_LT___$2,meta12022));
});})(___$1))
;
}
return (new cljs.core.async.t12021(fn1,___$1,self__.meta12019,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3466__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12018.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12020){var self__ = this;
var _12020__$1 = this;return self__.meta12019;
});
cljs.core.async.t12018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12020,meta12019__$1){var self__ = this;
var _12020__$1 = this;return (new cljs.core.async.t12018(self__.ch,self__.f,self__.map_LT_,meta12019__$1));
});
cljs.core.async.__GT_t12018 = (function __GT_t12018(ch__$1,f__$1,map_LT___$1,meta12019){return (new cljs.core.async.t12018(ch__$1,f__$1,map_LT___$1,meta12019));
});
}
return (new cljs.core.async.t12018(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12027 = (function (ch,f,map_GT_,meta12028){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12028 = meta12028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12027.cljs$lang$type = true;
cljs.core.async.t12027.cljs$lang$ctorStr = "cljs.core.async/t12027";
cljs.core.async.t12027.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12027");
});
cljs.core.async.t12027.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12027.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12027.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12029){var self__ = this;
var _12029__$1 = this;return self__.meta12028;
});
cljs.core.async.t12027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12029,meta12028__$1){var self__ = this;
var _12029__$1 = this;return (new cljs.core.async.t12027(self__.ch,self__.f,self__.map_GT_,meta12028__$1));
});
cljs.core.async.__GT_t12027 = (function __GT_t12027(ch__$1,f__$1,map_GT___$1,meta12028){return (new cljs.core.async.t12027(ch__$1,f__$1,map_GT___$1,meta12028));
});
}
return (new cljs.core.async.t12027(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12033 = (function (ch,p,filter_GT_,meta12034){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12034 = meta12034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12033.cljs$lang$type = true;
cljs.core.async.t12033.cljs$lang$ctorStr = "cljs.core.async/t12033";
cljs.core.async.t12033.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12033");
});
cljs.core.async.t12033.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12033.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12033.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12035){var self__ = this;
var _12035__$1 = this;return self__.meta12034;
});
cljs.core.async.t12033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12035,meta12034__$1){var self__ = this;
var _12035__$1 = this;return (new cljs.core.async.t12033(self__.ch,self__.p,self__.filter_GT_,meta12034__$1));
});
cljs.core.async.__GT_t12033 = (function __GT_t12033(ch__$1,p__$1,filter_GT___$1,meta12034){return (new cljs.core.async.t12033(ch__$1,p__$1,filter_GT___$1,meta12034));
});
}
return (new cljs.core.async.t12033(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___12118 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12118,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12118,out){
return (function (state_12097){var state_val_12098 = (state_12097[1]);if((state_val_12098 === 1))
{var state_12097__$1 = state_12097;var statearr_12099_12119 = state_12097__$1;(statearr_12099_12119[2] = null);
(statearr_12099_12119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12098 === 2))
{var state_12097__$1 = state_12097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12097__$1,4,ch);
} else
{if((state_val_12098 === 3))
{var inst_12095 = (state_12097[2]);var state_12097__$1 = state_12097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12097__$1,inst_12095);
} else
{if((state_val_12098 === 4))
{var inst_12079 = (state_12097[7]);var inst_12079__$1 = (state_12097[2]);var inst_12080 = (inst_12079__$1 == null);var state_12097__$1 = (function (){var statearr_12100 = state_12097;(statearr_12100[7] = inst_12079__$1);
return statearr_12100;
})();if(cljs.core.truth_(inst_12080))
{var statearr_12101_12120 = state_12097__$1;(statearr_12101_12120[1] = 5);
} else
{var statearr_12102_12121 = state_12097__$1;(statearr_12102_12121[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12098 === 5))
{var inst_12082 = cljs.core.async.close_BANG_.call(null,out);var state_12097__$1 = state_12097;var statearr_12103_12122 = state_12097__$1;(statearr_12103_12122[2] = inst_12082);
(statearr_12103_12122[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12098 === 6))
{var inst_12079 = (state_12097[7]);var inst_12084 = p.call(null,inst_12079);var state_12097__$1 = state_12097;if(cljs.core.truth_(inst_12084))
{var statearr_12104_12123 = state_12097__$1;(statearr_12104_12123[1] = 8);
} else
{var statearr_12105_12124 = state_12097__$1;(statearr_12105_12124[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12098 === 7))
{var inst_12093 = (state_12097[2]);var state_12097__$1 = state_12097;var statearr_12106_12125 = state_12097__$1;(statearr_12106_12125[2] = inst_12093);
(statearr_12106_12125[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12098 === 8))
{var inst_12079 = (state_12097[7]);var state_12097__$1 = state_12097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12097__$1,11,out,inst_12079);
} else
{if((state_val_12098 === 9))
{var state_12097__$1 = state_12097;var statearr_12107_12126 = state_12097__$1;(statearr_12107_12126[2] = null);
(statearr_12107_12126[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12098 === 10))
{var inst_12090 = (state_12097[2]);var state_12097__$1 = (function (){var statearr_12108 = state_12097;(statearr_12108[8] = inst_12090);
return statearr_12108;
})();var statearr_12109_12127 = state_12097__$1;(statearr_12109_12127[2] = null);
(statearr_12109_12127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12098 === 11))
{var inst_12087 = (state_12097[2]);var state_12097__$1 = state_12097;var statearr_12110_12128 = state_12097__$1;(statearr_12110_12128[2] = inst_12087);
(statearr_12110_12128[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___12118,out))
;return ((function (switch__6233__auto__,c__6248__auto___12118,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12114 = [null,null,null,null,null,null,null,null,null];(statearr_12114[0] = state_machine__6234__auto__);
(statearr_12114[1] = 1);
return statearr_12114;
});
var state_machine__6234__auto____1 = (function (state_12097){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12097);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12115){if((e12115 instanceof Object))
{var ex__6237__auto__ = e12115;var statearr_12116_12129 = state_12097;(statearr_12116_12129[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12130 = state_12097;
state_12097 = G__12130;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12097){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12118,out))
})();var state__6250__auto__ = (function (){var statearr_12117 = f__6249__auto__.call(null);(statearr_12117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12118);
return statearr_12117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12118,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__){
return (function (state_12282){var state_val_12283 = (state_12282[1]);if((state_val_12283 === 1))
{var state_12282__$1 = state_12282;var statearr_12284_12321 = state_12282__$1;(statearr_12284_12321[2] = null);
(statearr_12284_12321[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 2))
{var state_12282__$1 = state_12282;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12282__$1,4,in$);
} else
{if((state_val_12283 === 3))
{var inst_12280 = (state_12282[2]);var state_12282__$1 = state_12282;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12282__$1,inst_12280);
} else
{if((state_val_12283 === 4))
{var inst_12228 = (state_12282[7]);var inst_12228__$1 = (state_12282[2]);var inst_12229 = (inst_12228__$1 == null);var state_12282__$1 = (function (){var statearr_12285 = state_12282;(statearr_12285[7] = inst_12228__$1);
return statearr_12285;
})();if(cljs.core.truth_(inst_12229))
{var statearr_12286_12322 = state_12282__$1;(statearr_12286_12322[1] = 5);
} else
{var statearr_12287_12323 = state_12282__$1;(statearr_12287_12323[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 5))
{var inst_12231 = cljs.core.async.close_BANG_.call(null,out);var state_12282__$1 = state_12282;var statearr_12288_12324 = state_12282__$1;(statearr_12288_12324[2] = inst_12231);
(statearr_12288_12324[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 6))
{var inst_12228 = (state_12282[7]);var inst_12233 = f.call(null,inst_12228);var inst_12238 = cljs.core.seq.call(null,inst_12233);var inst_12239 = inst_12238;var inst_12240 = null;var inst_12241 = 0;var inst_12242 = 0;var state_12282__$1 = (function (){var statearr_12289 = state_12282;(statearr_12289[8] = inst_12242);
(statearr_12289[9] = inst_12240);
(statearr_12289[10] = inst_12241);
(statearr_12289[11] = inst_12239);
return statearr_12289;
})();var statearr_12290_12325 = state_12282__$1;(statearr_12290_12325[2] = null);
(statearr_12290_12325[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 7))
{var inst_12278 = (state_12282[2]);var state_12282__$1 = state_12282;var statearr_12291_12326 = state_12282__$1;(statearr_12291_12326[2] = inst_12278);
(statearr_12291_12326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 8))
{var inst_12242 = (state_12282[8]);var inst_12241 = (state_12282[10]);var inst_12244 = (inst_12242 < inst_12241);var inst_12245 = inst_12244;var state_12282__$1 = state_12282;if(cljs.core.truth_(inst_12245))
{var statearr_12292_12327 = state_12282__$1;(statearr_12292_12327[1] = 10);
} else
{var statearr_12293_12328 = state_12282__$1;(statearr_12293_12328[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 9))
{var inst_12275 = (state_12282[2]);var state_12282__$1 = (function (){var statearr_12294 = state_12282;(statearr_12294[12] = inst_12275);
return statearr_12294;
})();var statearr_12295_12329 = state_12282__$1;(statearr_12295_12329[2] = null);
(statearr_12295_12329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 10))
{var inst_12242 = (state_12282[8]);var inst_12240 = (state_12282[9]);var inst_12247 = cljs.core._nth.call(null,inst_12240,inst_12242);var state_12282__$1 = state_12282;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12282__$1,13,out,inst_12247);
} else
{if((state_val_12283 === 11))
{var inst_12253 = (state_12282[13]);var inst_12239 = (state_12282[11]);var inst_12253__$1 = cljs.core.seq.call(null,inst_12239);var state_12282__$1 = (function (){var statearr_12299 = state_12282;(statearr_12299[13] = inst_12253__$1);
return statearr_12299;
})();if(inst_12253__$1)
{var statearr_12300_12330 = state_12282__$1;(statearr_12300_12330[1] = 14);
} else
{var statearr_12301_12331 = state_12282__$1;(statearr_12301_12331[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 12))
{var inst_12273 = (state_12282[2]);var state_12282__$1 = state_12282;var statearr_12302_12332 = state_12282__$1;(statearr_12302_12332[2] = inst_12273);
(statearr_12302_12332[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 13))
{var inst_12242 = (state_12282[8]);var inst_12240 = (state_12282[9]);var inst_12241 = (state_12282[10]);var inst_12239 = (state_12282[11]);var inst_12249 = (state_12282[2]);var inst_12250 = (inst_12242 + 1);var tmp12296 = inst_12240;var tmp12297 = inst_12241;var tmp12298 = inst_12239;var inst_12239__$1 = tmp12298;var inst_12240__$1 = tmp12296;var inst_12241__$1 = tmp12297;var inst_12242__$1 = inst_12250;var state_12282__$1 = (function (){var statearr_12303 = state_12282;(statearr_12303[8] = inst_12242__$1);
(statearr_12303[9] = inst_12240__$1);
(statearr_12303[10] = inst_12241__$1);
(statearr_12303[14] = inst_12249);
(statearr_12303[11] = inst_12239__$1);
return statearr_12303;
})();var statearr_12304_12333 = state_12282__$1;(statearr_12304_12333[2] = null);
(statearr_12304_12333[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 14))
{var inst_12253 = (state_12282[13]);var inst_12255 = cljs.core.chunked_seq_QMARK_.call(null,inst_12253);var state_12282__$1 = state_12282;if(inst_12255)
{var statearr_12305_12334 = state_12282__$1;(statearr_12305_12334[1] = 17);
} else
{var statearr_12306_12335 = state_12282__$1;(statearr_12306_12335[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 15))
{var state_12282__$1 = state_12282;var statearr_12307_12336 = state_12282__$1;(statearr_12307_12336[2] = null);
(statearr_12307_12336[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 16))
{var inst_12271 = (state_12282[2]);var state_12282__$1 = state_12282;var statearr_12308_12337 = state_12282__$1;(statearr_12308_12337[2] = inst_12271);
(statearr_12308_12337[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 17))
{var inst_12253 = (state_12282[13]);var inst_12257 = cljs.core.chunk_first.call(null,inst_12253);var inst_12258 = cljs.core.chunk_rest.call(null,inst_12253);var inst_12259 = cljs.core.count.call(null,inst_12257);var inst_12239 = inst_12258;var inst_12240 = inst_12257;var inst_12241 = inst_12259;var inst_12242 = 0;var state_12282__$1 = (function (){var statearr_12309 = state_12282;(statearr_12309[8] = inst_12242);
(statearr_12309[9] = inst_12240);
(statearr_12309[10] = inst_12241);
(statearr_12309[11] = inst_12239);
return statearr_12309;
})();var statearr_12310_12338 = state_12282__$1;(statearr_12310_12338[2] = null);
(statearr_12310_12338[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 18))
{var inst_12253 = (state_12282[13]);var inst_12262 = cljs.core.first.call(null,inst_12253);var state_12282__$1 = state_12282;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12282__$1,20,out,inst_12262);
} else
{if((state_val_12283 === 19))
{var inst_12268 = (state_12282[2]);var state_12282__$1 = state_12282;var statearr_12311_12339 = state_12282__$1;(statearr_12311_12339[2] = inst_12268);
(statearr_12311_12339[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12283 === 20))
{var inst_12253 = (state_12282[13]);var inst_12264 = (state_12282[2]);var inst_12265 = cljs.core.next.call(null,inst_12253);var inst_12239 = inst_12265;var inst_12240 = null;var inst_12241 = 0;var inst_12242 = 0;var state_12282__$1 = (function (){var statearr_12312 = state_12282;(statearr_12312[15] = inst_12264);
(statearr_12312[8] = inst_12242);
(statearr_12312[9] = inst_12240);
(statearr_12312[10] = inst_12241);
(statearr_12312[11] = inst_12239);
return statearr_12312;
})();var statearr_12313_12340 = state_12282__$1;(statearr_12313_12340[2] = null);
(statearr_12313_12340[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto__))
;return ((function (switch__6233__auto__,c__6248__auto__){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12317[0] = state_machine__6234__auto__);
(statearr_12317[1] = 1);
return statearr_12317;
});
var state_machine__6234__auto____1 = (function (state_12282){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12282);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12318){if((e12318 instanceof Object))
{var ex__6237__auto__ = e12318;var statearr_12319_12341 = state_12282;(statearr_12319_12341[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12282);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12342 = state_12282;
state_12282 = G__12342;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12282){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_12320 = f__6249__auto__.call(null);(statearr_12320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_12320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__))
);
return c__6248__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6248__auto___12423 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12423){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12423){
return (function (state_12402){var state_val_12403 = (state_12402[1]);if((state_val_12403 === 1))
{var state_12402__$1 = state_12402;var statearr_12404_12424 = state_12402__$1;(statearr_12404_12424[2] = null);
(statearr_12404_12424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 2))
{var state_12402__$1 = state_12402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12402__$1,4,from);
} else
{if((state_val_12403 === 3))
{var inst_12400 = (state_12402[2]);var state_12402__$1 = state_12402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12402__$1,inst_12400);
} else
{if((state_val_12403 === 4))
{var inst_12385 = (state_12402[7]);var inst_12385__$1 = (state_12402[2]);var inst_12386 = (inst_12385__$1 == null);var state_12402__$1 = (function (){var statearr_12405 = state_12402;(statearr_12405[7] = inst_12385__$1);
return statearr_12405;
})();if(cljs.core.truth_(inst_12386))
{var statearr_12406_12425 = state_12402__$1;(statearr_12406_12425[1] = 5);
} else
{var statearr_12407_12426 = state_12402__$1;(statearr_12407_12426[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 5))
{var state_12402__$1 = state_12402;if(cljs.core.truth_(close_QMARK_))
{var statearr_12408_12427 = state_12402__$1;(statearr_12408_12427[1] = 8);
} else
{var statearr_12409_12428 = state_12402__$1;(statearr_12409_12428[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 6))
{var inst_12385 = (state_12402[7]);var state_12402__$1 = state_12402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12402__$1,11,to,inst_12385);
} else
{if((state_val_12403 === 7))
{var inst_12398 = (state_12402[2]);var state_12402__$1 = state_12402;var statearr_12410_12429 = state_12402__$1;(statearr_12410_12429[2] = inst_12398);
(statearr_12410_12429[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 8))
{var inst_12389 = cljs.core.async.close_BANG_.call(null,to);var state_12402__$1 = state_12402;var statearr_12411_12430 = state_12402__$1;(statearr_12411_12430[2] = inst_12389);
(statearr_12411_12430[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 9))
{var state_12402__$1 = state_12402;var statearr_12412_12431 = state_12402__$1;(statearr_12412_12431[2] = null);
(statearr_12412_12431[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 10))
{var inst_12392 = (state_12402[2]);var state_12402__$1 = state_12402;var statearr_12413_12432 = state_12402__$1;(statearr_12413_12432[2] = inst_12392);
(statearr_12413_12432[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12403 === 11))
{var inst_12395 = (state_12402[2]);var state_12402__$1 = (function (){var statearr_12414 = state_12402;(statearr_12414[8] = inst_12395);
return statearr_12414;
})();var statearr_12415_12433 = state_12402__$1;(statearr_12415_12433[2] = null);
(statearr_12415_12433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___12423))
;return ((function (switch__6233__auto__,c__6248__auto___12423){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12419 = [null,null,null,null,null,null,null,null,null];(statearr_12419[0] = state_machine__6234__auto__);
(statearr_12419[1] = 1);
return statearr_12419;
});
var state_machine__6234__auto____1 = (function (state_12402){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12402);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12420){if((e12420 instanceof Object))
{var ex__6237__auto__ = e12420;var statearr_12421_12434 = state_12402;(statearr_12421_12434[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12435 = state_12402;
state_12402 = G__12435;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12402){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12423))
})();var state__6250__auto__ = (function (){var statearr_12422 = f__6249__auto__.call(null);(statearr_12422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12423);
return statearr_12422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12423))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6248__auto___12522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___12522,tc,fc){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___12522,tc,fc){
return (function (state_12500){var state_val_12501 = (state_12500[1]);if((state_val_12501 === 1))
{var state_12500__$1 = state_12500;var statearr_12502_12523 = state_12500__$1;(statearr_12502_12523[2] = null);
(statearr_12502_12523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 2))
{var state_12500__$1 = state_12500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12500__$1,4,ch);
} else
{if((state_val_12501 === 3))
{var inst_12498 = (state_12500[2]);var state_12500__$1 = state_12500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12500__$1,inst_12498);
} else
{if((state_val_12501 === 4))
{var inst_12481 = (state_12500[7]);var inst_12481__$1 = (state_12500[2]);var inst_12482 = (inst_12481__$1 == null);var state_12500__$1 = (function (){var statearr_12503 = state_12500;(statearr_12503[7] = inst_12481__$1);
return statearr_12503;
})();if(cljs.core.truth_(inst_12482))
{var statearr_12504_12524 = state_12500__$1;(statearr_12504_12524[1] = 5);
} else
{var statearr_12505_12525 = state_12500__$1;(statearr_12505_12525[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 5))
{var inst_12484 = cljs.core.async.close_BANG_.call(null,tc);var inst_12485 = cljs.core.async.close_BANG_.call(null,fc);var state_12500__$1 = (function (){var statearr_12506 = state_12500;(statearr_12506[8] = inst_12484);
return statearr_12506;
})();var statearr_12507_12526 = state_12500__$1;(statearr_12507_12526[2] = inst_12485);
(statearr_12507_12526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 6))
{var inst_12481 = (state_12500[7]);var inst_12487 = p.call(null,inst_12481);var state_12500__$1 = state_12500;if(cljs.core.truth_(inst_12487))
{var statearr_12508_12527 = state_12500__$1;(statearr_12508_12527[1] = 9);
} else
{var statearr_12509_12528 = state_12500__$1;(statearr_12509_12528[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 7))
{var inst_12496 = (state_12500[2]);var state_12500__$1 = state_12500;var statearr_12510_12529 = state_12500__$1;(statearr_12510_12529[2] = inst_12496);
(statearr_12510_12529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 8))
{var inst_12493 = (state_12500[2]);var state_12500__$1 = (function (){var statearr_12511 = state_12500;(statearr_12511[9] = inst_12493);
return statearr_12511;
})();var statearr_12512_12530 = state_12500__$1;(statearr_12512_12530[2] = null);
(statearr_12512_12530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 9))
{var state_12500__$1 = state_12500;var statearr_12513_12531 = state_12500__$1;(statearr_12513_12531[2] = tc);
(statearr_12513_12531[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 10))
{var state_12500__$1 = state_12500;var statearr_12514_12532 = state_12500__$1;(statearr_12514_12532[2] = fc);
(statearr_12514_12532[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12501 === 11))
{var inst_12481 = (state_12500[7]);var inst_12491 = (state_12500[2]);var state_12500__$1 = state_12500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12500__$1,8,inst_12491,inst_12481);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___12522,tc,fc))
;return ((function (switch__6233__auto__,c__6248__auto___12522,tc,fc){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12518 = [null,null,null,null,null,null,null,null,null,null];(statearr_12518[0] = state_machine__6234__auto__);
(statearr_12518[1] = 1);
return statearr_12518;
});
var state_machine__6234__auto____1 = (function (state_12500){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12500);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12519){if((e12519 instanceof Object))
{var ex__6237__auto__ = e12519;var statearr_12520_12533 = state_12500;(statearr_12520_12533[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12534 = state_12500;
state_12500 = G__12534;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12500){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___12522,tc,fc))
})();var state__6250__auto__ = (function (){var statearr_12521 = f__6249__auto__.call(null);(statearr_12521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___12522);
return statearr_12521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___12522,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__){
return (function (state_12581){var state_val_12582 = (state_12581[1]);if((state_val_12582 === 7))
{var inst_12577 = (state_12581[2]);var state_12581__$1 = state_12581;var statearr_12583_12599 = state_12581__$1;(statearr_12583_12599[2] = inst_12577);
(statearr_12583_12599[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 6))
{var inst_12567 = (state_12581[7]);var inst_12570 = (state_12581[8]);var inst_12574 = f.call(null,inst_12567,inst_12570);var inst_12567__$1 = inst_12574;var state_12581__$1 = (function (){var statearr_12584 = state_12581;(statearr_12584[7] = inst_12567__$1);
return statearr_12584;
})();var statearr_12585_12600 = state_12581__$1;(statearr_12585_12600[2] = null);
(statearr_12585_12600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 5))
{var inst_12567 = (state_12581[7]);var state_12581__$1 = state_12581;var statearr_12586_12601 = state_12581__$1;(statearr_12586_12601[2] = inst_12567);
(statearr_12586_12601[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 4))
{var inst_12570 = (state_12581[8]);var inst_12570__$1 = (state_12581[2]);var inst_12571 = (inst_12570__$1 == null);var state_12581__$1 = (function (){var statearr_12587 = state_12581;(statearr_12587[8] = inst_12570__$1);
return statearr_12587;
})();if(cljs.core.truth_(inst_12571))
{var statearr_12588_12602 = state_12581__$1;(statearr_12588_12602[1] = 5);
} else
{var statearr_12589_12603 = state_12581__$1;(statearr_12589_12603[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 3))
{var inst_12579 = (state_12581[2]);var state_12581__$1 = state_12581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12581__$1,inst_12579);
} else
{if((state_val_12582 === 2))
{var state_12581__$1 = state_12581;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12581__$1,4,ch);
} else
{if((state_val_12582 === 1))
{var inst_12567 = init;var state_12581__$1 = (function (){var statearr_12590 = state_12581;(statearr_12590[7] = inst_12567);
return statearr_12590;
})();var statearr_12591_12604 = state_12581__$1;(statearr_12591_12604[2] = null);
(statearr_12591_12604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6248__auto__))
;return ((function (switch__6233__auto__,c__6248__auto__){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12595 = [null,null,null,null,null,null,null,null,null];(statearr_12595[0] = state_machine__6234__auto__);
(statearr_12595[1] = 1);
return statearr_12595;
});
var state_machine__6234__auto____1 = (function (state_12581){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12581);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12596){if((e12596 instanceof Object))
{var ex__6237__auto__ = e12596;var statearr_12597_12605 = state_12581;(statearr_12597_12605[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12581);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12606 = state_12581;
state_12581 = G__12606;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12581){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_12598 = f__6249__auto__.call(null);(statearr_12598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_12598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__))
);
return c__6248__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6248__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto__){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto__){
return (function (state_12668){var state_val_12669 = (state_12668[1]);if((state_val_12669 === 1))
{var inst_12648 = cljs.core.seq.call(null,coll);var inst_12649 = inst_12648;var state_12668__$1 = (function (){var statearr_12670 = state_12668;(statearr_12670[7] = inst_12649);
return statearr_12670;
})();var statearr_12671_12689 = state_12668__$1;(statearr_12671_12689[2] = null);
(statearr_12671_12689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 2))
{var inst_12649 = (state_12668[7]);var state_12668__$1 = state_12668;if(cljs.core.truth_(inst_12649))
{var statearr_12672_12690 = state_12668__$1;(statearr_12672_12690[1] = 4);
} else
{var statearr_12673_12691 = state_12668__$1;(statearr_12673_12691[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 3))
{var inst_12666 = (state_12668[2]);var state_12668__$1 = state_12668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12668__$1,inst_12666);
} else
{if((state_val_12669 === 4))
{var inst_12649 = (state_12668[7]);var inst_12652 = cljs.core.first.call(null,inst_12649);var state_12668__$1 = state_12668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12668__$1,7,ch,inst_12652);
} else
{if((state_val_12669 === 5))
{var state_12668__$1 = state_12668;if(cljs.core.truth_(close_QMARK_))
{var statearr_12674_12692 = state_12668__$1;(statearr_12674_12692[1] = 8);
} else
{var statearr_12675_12693 = state_12668__$1;(statearr_12675_12693[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 6))
{var inst_12664 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12676_12694 = state_12668__$1;(statearr_12676_12694[2] = inst_12664);
(statearr_12676_12694[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 7))
{var inst_12649 = (state_12668[7]);var inst_12654 = (state_12668[2]);var inst_12655 = cljs.core.next.call(null,inst_12649);var inst_12649__$1 = inst_12655;var state_12668__$1 = (function (){var statearr_12677 = state_12668;(statearr_12677[7] = inst_12649__$1);
(statearr_12677[8] = inst_12654);
return statearr_12677;
})();var statearr_12678_12695 = state_12668__$1;(statearr_12678_12695[2] = null);
(statearr_12678_12695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 8))
{var inst_12659 = cljs.core.async.close_BANG_.call(null,ch);var state_12668__$1 = state_12668;var statearr_12679_12696 = state_12668__$1;(statearr_12679_12696[2] = inst_12659);
(statearr_12679_12696[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 9))
{var state_12668__$1 = state_12668;var statearr_12680_12697 = state_12668__$1;(statearr_12680_12697[2] = null);
(statearr_12680_12697[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 10))
{var inst_12662 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12681_12698 = state_12668__$1;(statearr_12681_12698[2] = inst_12662);
(statearr_12681_12698[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto__))
;return ((function (switch__6233__auto__,c__6248__auto__){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_12685 = [null,null,null,null,null,null,null,null,null];(statearr_12685[0] = state_machine__6234__auto__);
(statearr_12685[1] = 1);
return statearr_12685;
});
var state_machine__6234__auto____1 = (function (state_12668){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_12668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e12686){if((e12686 instanceof Object))
{var ex__6237__auto__ = e12686;var statearr_12687_12699 = state_12668;(statearr_12687_12699[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12686;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12700 = state_12668;
state_12668 = G__12700;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_12668){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_12668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto__))
})();var state__6250__auto__ = (function (){var statearr_12688 = f__6249__auto__.call(null);(statearr_12688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto__);
return statearr_12688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto__))
);
return c__6248__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12702 = {};return obj12702;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3466__auto__ = _;if(and__3466__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4105__auto__ = (((_ == null))?null:_);return (function (){var or__3478__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12704 = {};return obj12704;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12928 = (function (cs,ch,mult,meta12929){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12929 = meta12929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12928.cljs$lang$type = true;
cljs.core.async.t12928.cljs$lang$ctorStr = "cljs.core.async/t12928";
cljs.core.async.t12928.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t12928");
});})(cs))
;
cljs.core.async.t12928.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12928.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12928.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12928.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12928.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12928.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12930){var self__ = this;
var _12930__$1 = this;return self__.meta12929;
});})(cs))
;
cljs.core.async.t12928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12930,meta12929__$1){var self__ = this;
var _12930__$1 = this;return (new cljs.core.async.t12928(self__.cs,self__.ch,self__.mult,meta12929__$1));
});})(cs))
;
cljs.core.async.__GT_t12928 = ((function (cs){
return (function __GT_t12928(cs__$1,ch__$1,mult__$1,meta12929){return (new cljs.core.async.t12928(cs__$1,ch__$1,mult__$1,meta12929));
});})(cs))
;
}
return (new cljs.core.async.t12928(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6248__auto___13151 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13151,cs,m,dchan,dctr,done){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13151,cs,m,dchan,dctr,done){
return (function (state_13065){var state_val_13066 = (state_13065[1]);if((state_val_13066 === 32))
{var inst_12933 = (state_13065[7]);var inst_13009 = (state_13065[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13065,31,Object,null,30);var inst_13016 = cljs.core.async.put_BANG_.call(null,inst_13009,inst_12933,done);var state_13065__$1 = state_13065;var statearr_13067_13152 = state_13065__$1;(statearr_13067_13152[2] = inst_13016);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13065__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 1))
{var state_13065__$1 = state_13065;var statearr_13068_13153 = state_13065__$1;(statearr_13068_13153[2] = null);
(statearr_13068_13153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 33))
{var inst_13022 = (state_13065[9]);var inst_13024 = cljs.core.chunked_seq_QMARK_.call(null,inst_13022);var state_13065__$1 = state_13065;if(inst_13024)
{var statearr_13069_13154 = state_13065__$1;(statearr_13069_13154[1] = 36);
} else
{var statearr_13070_13155 = state_13065__$1;(statearr_13070_13155[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 2))
{var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13065__$1,4,ch);
} else
{if((state_val_13066 === 34))
{var state_13065__$1 = state_13065;var statearr_13071_13156 = state_13065__$1;(statearr_13071_13156[2] = null);
(statearr_13071_13156[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 3))
{var inst_13063 = (state_13065[2]);var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13065__$1,inst_13063);
} else
{if((state_val_13066 === 35))
{var inst_13047 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13072_13157 = state_13065__$1;(statearr_13072_13157[2] = inst_13047);
(statearr_13072_13157[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 4))
{var inst_12933 = (state_13065[7]);var inst_12933__$1 = (state_13065[2]);var inst_12934 = (inst_12933__$1 == null);var state_13065__$1 = (function (){var statearr_13073 = state_13065;(statearr_13073[7] = inst_12933__$1);
return statearr_13073;
})();if(cljs.core.truth_(inst_12934))
{var statearr_13074_13158 = state_13065__$1;(statearr_13074_13158[1] = 5);
} else
{var statearr_13075_13159 = state_13065__$1;(statearr_13075_13159[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 36))
{var inst_13022 = (state_13065[9]);var inst_13026 = cljs.core.chunk_first.call(null,inst_13022);var inst_13027 = cljs.core.chunk_rest.call(null,inst_13022);var inst_13028 = cljs.core.count.call(null,inst_13026);var inst_13001 = inst_13027;var inst_13002 = inst_13026;var inst_13003 = inst_13028;var inst_13004 = 0;var state_13065__$1 = (function (){var statearr_13076 = state_13065;(statearr_13076[10] = inst_13004);
(statearr_13076[11] = inst_13003);
(statearr_13076[12] = inst_13001);
(statearr_13076[13] = inst_13002);
return statearr_13076;
})();var statearr_13077_13160 = state_13065__$1;(statearr_13077_13160[2] = null);
(statearr_13077_13160[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 5))
{var inst_12940 = cljs.core.deref.call(null,cs);var inst_12941 = cljs.core.seq.call(null,inst_12940);var inst_12942 = inst_12941;var inst_12943 = null;var inst_12944 = 0;var inst_12945 = 0;var state_13065__$1 = (function (){var statearr_13078 = state_13065;(statearr_13078[14] = inst_12942);
(statearr_13078[15] = inst_12943);
(statearr_13078[16] = inst_12944);
(statearr_13078[17] = inst_12945);
return statearr_13078;
})();var statearr_13079_13161 = state_13065__$1;(statearr_13079_13161[2] = null);
(statearr_13079_13161[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 37))
{var inst_13022 = (state_13065[9]);var inst_13031 = cljs.core.first.call(null,inst_13022);var state_13065__$1 = (function (){var statearr_13080 = state_13065;(statearr_13080[18] = inst_13031);
return statearr_13080;
})();var statearr_13081_13162 = state_13065__$1;(statearr_13081_13162[2] = null);
(statearr_13081_13162[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 6))
{var inst_12993 = (state_13065[19]);var inst_12992 = cljs.core.deref.call(null,cs);var inst_12993__$1 = cljs.core.keys.call(null,inst_12992);var inst_12994 = cljs.core.count.call(null,inst_12993__$1);var inst_12995 = cljs.core.reset_BANG_.call(null,dctr,inst_12994);var inst_13000 = cljs.core.seq.call(null,inst_12993__$1);var inst_13001 = inst_13000;var inst_13002 = null;var inst_13003 = 0;var inst_13004 = 0;var state_13065__$1 = (function (){var statearr_13082 = state_13065;(statearr_13082[20] = inst_12995);
(statearr_13082[10] = inst_13004);
(statearr_13082[19] = inst_12993__$1);
(statearr_13082[11] = inst_13003);
(statearr_13082[12] = inst_13001);
(statearr_13082[13] = inst_13002);
return statearr_13082;
})();var statearr_13083_13163 = state_13065__$1;(statearr_13083_13163[2] = null);
(statearr_13083_13163[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 38))
{var inst_13044 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13084_13164 = state_13065__$1;(statearr_13084_13164[2] = inst_13044);
(statearr_13084_13164[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 7))
{var inst_13061 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13085_13165 = state_13065__$1;(statearr_13085_13165[2] = inst_13061);
(statearr_13085_13165[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 39))
{var inst_13022 = (state_13065[9]);var inst_13040 = (state_13065[2]);var inst_13041 = cljs.core.next.call(null,inst_13022);var inst_13001 = inst_13041;var inst_13002 = null;var inst_13003 = 0;var inst_13004 = 0;var state_13065__$1 = (function (){var statearr_13086 = state_13065;(statearr_13086[10] = inst_13004);
(statearr_13086[11] = inst_13003);
(statearr_13086[12] = inst_13001);
(statearr_13086[13] = inst_13002);
(statearr_13086[21] = inst_13040);
return statearr_13086;
})();var statearr_13087_13166 = state_13065__$1;(statearr_13087_13166[2] = null);
(statearr_13087_13166[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 8))
{var inst_12944 = (state_13065[16]);var inst_12945 = (state_13065[17]);var inst_12947 = (inst_12945 < inst_12944);var inst_12948 = inst_12947;var state_13065__$1 = state_13065;if(cljs.core.truth_(inst_12948))
{var statearr_13088_13167 = state_13065__$1;(statearr_13088_13167[1] = 10);
} else
{var statearr_13089_13168 = state_13065__$1;(statearr_13089_13168[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 40))
{var inst_13031 = (state_13065[18]);var inst_13032 = (state_13065[2]);var inst_13033 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13034 = cljs.core.async.untap_STAR_.call(null,m,inst_13031);var state_13065__$1 = (function (){var statearr_13090 = state_13065;(statearr_13090[22] = inst_13032);
(statearr_13090[23] = inst_13033);
return statearr_13090;
})();var statearr_13091_13169 = state_13065__$1;(statearr_13091_13169[2] = inst_13034);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13065__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 9))
{var inst_12990 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13092_13170 = state_13065__$1;(statearr_13092_13170[2] = inst_12990);
(statearr_13092_13170[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 41))
{var inst_13031 = (state_13065[18]);var inst_12933 = (state_13065[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13065,40,Object,null,39);var inst_13038 = cljs.core.async.put_BANG_.call(null,inst_13031,inst_12933,done);var state_13065__$1 = state_13065;var statearr_13093_13171 = state_13065__$1;(statearr_13093_13171[2] = inst_13038);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13065__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 10))
{var inst_12943 = (state_13065[15]);var inst_12945 = (state_13065[17]);var inst_12951 = cljs.core._nth.call(null,inst_12943,inst_12945);var inst_12952 = cljs.core.nth.call(null,inst_12951,0,null);var inst_12953 = cljs.core.nth.call(null,inst_12951,1,null);var state_13065__$1 = (function (){var statearr_13094 = state_13065;(statearr_13094[24] = inst_12952);
return statearr_13094;
})();if(cljs.core.truth_(inst_12953))
{var statearr_13095_13172 = state_13065__$1;(statearr_13095_13172[1] = 13);
} else
{var statearr_13096_13173 = state_13065__$1;(statearr_13096_13173[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 42))
{var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13065__$1,45,dchan);
} else
{if((state_val_13066 === 11))
{var inst_12942 = (state_13065[14]);var inst_12962 = (state_13065[25]);var inst_12962__$1 = cljs.core.seq.call(null,inst_12942);var state_13065__$1 = (function (){var statearr_13097 = state_13065;(statearr_13097[25] = inst_12962__$1);
return statearr_13097;
})();if(inst_12962__$1)
{var statearr_13098_13174 = state_13065__$1;(statearr_13098_13174[1] = 16);
} else
{var statearr_13099_13175 = state_13065__$1;(statearr_13099_13175[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 43))
{var state_13065__$1 = state_13065;var statearr_13100_13176 = state_13065__$1;(statearr_13100_13176[2] = null);
(statearr_13100_13176[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 12))
{var inst_12988 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13101_13177 = state_13065__$1;(statearr_13101_13177[2] = inst_12988);
(statearr_13101_13177[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 44))
{var inst_13058 = (state_13065[2]);var state_13065__$1 = (function (){var statearr_13102 = state_13065;(statearr_13102[26] = inst_13058);
return statearr_13102;
})();var statearr_13103_13178 = state_13065__$1;(statearr_13103_13178[2] = null);
(statearr_13103_13178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 13))
{var inst_12952 = (state_13065[24]);var inst_12955 = cljs.core.async.close_BANG_.call(null,inst_12952);var state_13065__$1 = state_13065;var statearr_13104_13179 = state_13065__$1;(statearr_13104_13179[2] = inst_12955);
(statearr_13104_13179[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 45))
{var inst_13055 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13108_13180 = state_13065__$1;(statearr_13108_13180[2] = inst_13055);
(statearr_13108_13180[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 14))
{var state_13065__$1 = state_13065;var statearr_13109_13181 = state_13065__$1;(statearr_13109_13181[2] = null);
(statearr_13109_13181[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 15))
{var inst_12942 = (state_13065[14]);var inst_12943 = (state_13065[15]);var inst_12944 = (state_13065[16]);var inst_12945 = (state_13065[17]);var inst_12958 = (state_13065[2]);var inst_12959 = (inst_12945 + 1);var tmp13105 = inst_12942;var tmp13106 = inst_12943;var tmp13107 = inst_12944;var inst_12942__$1 = tmp13105;var inst_12943__$1 = tmp13106;var inst_12944__$1 = tmp13107;var inst_12945__$1 = inst_12959;var state_13065__$1 = (function (){var statearr_13110 = state_13065;(statearr_13110[27] = inst_12958);
(statearr_13110[14] = inst_12942__$1);
(statearr_13110[15] = inst_12943__$1);
(statearr_13110[16] = inst_12944__$1);
(statearr_13110[17] = inst_12945__$1);
return statearr_13110;
})();var statearr_13111_13182 = state_13065__$1;(statearr_13111_13182[2] = null);
(statearr_13111_13182[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 16))
{var inst_12962 = (state_13065[25]);var inst_12964 = cljs.core.chunked_seq_QMARK_.call(null,inst_12962);var state_13065__$1 = state_13065;if(inst_12964)
{var statearr_13112_13183 = state_13065__$1;(statearr_13112_13183[1] = 19);
} else
{var statearr_13113_13184 = state_13065__$1;(statearr_13113_13184[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 17))
{var state_13065__$1 = state_13065;var statearr_13114_13185 = state_13065__$1;(statearr_13114_13185[2] = null);
(statearr_13114_13185[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 18))
{var inst_12986 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13115_13186 = state_13065__$1;(statearr_13115_13186[2] = inst_12986);
(statearr_13115_13186[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 19))
{var inst_12962 = (state_13065[25]);var inst_12966 = cljs.core.chunk_first.call(null,inst_12962);var inst_12967 = cljs.core.chunk_rest.call(null,inst_12962);var inst_12968 = cljs.core.count.call(null,inst_12966);var inst_12942 = inst_12967;var inst_12943 = inst_12966;var inst_12944 = inst_12968;var inst_12945 = 0;var state_13065__$1 = (function (){var statearr_13116 = state_13065;(statearr_13116[14] = inst_12942);
(statearr_13116[15] = inst_12943);
(statearr_13116[16] = inst_12944);
(statearr_13116[17] = inst_12945);
return statearr_13116;
})();var statearr_13117_13187 = state_13065__$1;(statearr_13117_13187[2] = null);
(statearr_13117_13187[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 20))
{var inst_12962 = (state_13065[25]);var inst_12972 = cljs.core.first.call(null,inst_12962);var inst_12973 = cljs.core.nth.call(null,inst_12972,0,null);var inst_12974 = cljs.core.nth.call(null,inst_12972,1,null);var state_13065__$1 = (function (){var statearr_13118 = state_13065;(statearr_13118[28] = inst_12973);
return statearr_13118;
})();if(cljs.core.truth_(inst_12974))
{var statearr_13119_13188 = state_13065__$1;(statearr_13119_13188[1] = 22);
} else
{var statearr_13120_13189 = state_13065__$1;(statearr_13120_13189[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 21))
{var inst_12983 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13121_13190 = state_13065__$1;(statearr_13121_13190[2] = inst_12983);
(statearr_13121_13190[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 22))
{var inst_12973 = (state_13065[28]);var inst_12976 = cljs.core.async.close_BANG_.call(null,inst_12973);var state_13065__$1 = state_13065;var statearr_13122_13191 = state_13065__$1;(statearr_13122_13191[2] = inst_12976);
(statearr_13122_13191[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 23))
{var state_13065__$1 = state_13065;var statearr_13123_13192 = state_13065__$1;(statearr_13123_13192[2] = null);
(statearr_13123_13192[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 24))
{var inst_12962 = (state_13065[25]);var inst_12979 = (state_13065[2]);var inst_12980 = cljs.core.next.call(null,inst_12962);var inst_12942 = inst_12980;var inst_12943 = null;var inst_12944 = 0;var inst_12945 = 0;var state_13065__$1 = (function (){var statearr_13124 = state_13065;(statearr_13124[14] = inst_12942);
(statearr_13124[15] = inst_12943);
(statearr_13124[16] = inst_12944);
(statearr_13124[29] = inst_12979);
(statearr_13124[17] = inst_12945);
return statearr_13124;
})();var statearr_13125_13193 = state_13065__$1;(statearr_13125_13193[2] = null);
(statearr_13125_13193[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 25))
{var inst_13004 = (state_13065[10]);var inst_13003 = (state_13065[11]);var inst_13006 = (inst_13004 < inst_13003);var inst_13007 = inst_13006;var state_13065__$1 = state_13065;if(cljs.core.truth_(inst_13007))
{var statearr_13126_13194 = state_13065__$1;(statearr_13126_13194[1] = 27);
} else
{var statearr_13127_13195 = state_13065__$1;(statearr_13127_13195[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 26))
{var inst_12993 = (state_13065[19]);var inst_13051 = (state_13065[2]);var inst_13052 = cljs.core.seq.call(null,inst_12993);var state_13065__$1 = (function (){var statearr_13128 = state_13065;(statearr_13128[30] = inst_13051);
return statearr_13128;
})();if(inst_13052)
{var statearr_13129_13196 = state_13065__$1;(statearr_13129_13196[1] = 42);
} else
{var statearr_13130_13197 = state_13065__$1;(statearr_13130_13197[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 27))
{var inst_13004 = (state_13065[10]);var inst_13002 = (state_13065[13]);var inst_13009 = cljs.core._nth.call(null,inst_13002,inst_13004);var state_13065__$1 = (function (){var statearr_13131 = state_13065;(statearr_13131[8] = inst_13009);
return statearr_13131;
})();var statearr_13132_13198 = state_13065__$1;(statearr_13132_13198[2] = null);
(statearr_13132_13198[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 28))
{var inst_13001 = (state_13065[12]);var inst_13022 = (state_13065[9]);var inst_13022__$1 = cljs.core.seq.call(null,inst_13001);var state_13065__$1 = (function (){var statearr_13136 = state_13065;(statearr_13136[9] = inst_13022__$1);
return statearr_13136;
})();if(inst_13022__$1)
{var statearr_13137_13199 = state_13065__$1;(statearr_13137_13199[1] = 33);
} else
{var statearr_13138_13200 = state_13065__$1;(statearr_13138_13200[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 29))
{var inst_13049 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13139_13201 = state_13065__$1;(statearr_13139_13201[2] = inst_13049);
(statearr_13139_13201[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 30))
{var inst_13004 = (state_13065[10]);var inst_13003 = (state_13065[11]);var inst_13001 = (state_13065[12]);var inst_13002 = (state_13065[13]);var inst_13018 = (state_13065[2]);var inst_13019 = (inst_13004 + 1);var tmp13133 = inst_13003;var tmp13134 = inst_13001;var tmp13135 = inst_13002;var inst_13001__$1 = tmp13134;var inst_13002__$1 = tmp13135;var inst_13003__$1 = tmp13133;var inst_13004__$1 = inst_13019;var state_13065__$1 = (function (){var statearr_13140 = state_13065;(statearr_13140[10] = inst_13004__$1);
(statearr_13140[11] = inst_13003__$1);
(statearr_13140[12] = inst_13001__$1);
(statearr_13140[13] = inst_13002__$1);
(statearr_13140[31] = inst_13018);
return statearr_13140;
})();var statearr_13141_13202 = state_13065__$1;(statearr_13141_13202[2] = null);
(statearr_13141_13202[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 31))
{var inst_13009 = (state_13065[8]);var inst_13010 = (state_13065[2]);var inst_13011 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13012 = cljs.core.async.untap_STAR_.call(null,m,inst_13009);var state_13065__$1 = (function (){var statearr_13142 = state_13065;(statearr_13142[32] = inst_13010);
(statearr_13142[33] = inst_13011);
return statearr_13142;
})();var statearr_13143_13203 = state_13065__$1;(statearr_13143_13203[2] = inst_13012);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13065__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___13151,cs,m,dchan,dctr,done))
;return ((function (switch__6233__auto__,c__6248__auto___13151,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13147[0] = state_machine__6234__auto__);
(statearr_13147[1] = 1);
return statearr_13147;
});
var state_machine__6234__auto____1 = (function (state_13065){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13065);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13148){if((e13148 instanceof Object))
{var ex__6237__auto__ = e13148;var statearr_13149_13204 = state_13065;(statearr_13149_13204[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13148;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13205 = state_13065;
state_13065 = G__13205;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13065){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13151,cs,m,dchan,dctr,done))
})();var state__6250__auto__ = (function (){var statearr_13150 = f__6249__auto__.call(null);(statearr_13150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13151);
return statearr_13150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13151,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13207 = {};return obj13207;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13317 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13318){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta13318 = meta13318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13317.cljs$lang$type = true;
cljs.core.async.t13317.cljs$lang$ctorStr = "cljs.core.async/t13317";
cljs.core.async.t13317.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t13317");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13317.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13317.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13317.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13317.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13317.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13317.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13317.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13319){var self__ = this;
var _13319__$1 = this;return self__.meta13318;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13319,meta13318__$1){var self__ = this;
var _13319__$1 = this;return (new cljs.core.async.t13317(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13318__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13317 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13317(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13318){return (new cljs.core.async.t13317(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13318));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13317(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6248__auto___13426 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13384){var state_val_13385 = (state_13384[1]);if((state_val_13385 === 1))
{var inst_13323 = (state_13384[7]);var inst_13323__$1 = calc_state.call(null);var inst_13324 = cljs.core.seq_QMARK_.call(null,inst_13323__$1);var state_13384__$1 = (function (){var statearr_13386 = state_13384;(statearr_13386[7] = inst_13323__$1);
return statearr_13386;
})();if(inst_13324)
{var statearr_13387_13427 = state_13384__$1;(statearr_13387_13427[1] = 2);
} else
{var statearr_13388_13428 = state_13384__$1;(statearr_13388_13428[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 2))
{var inst_13323 = (state_13384[7]);var inst_13326 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13323);var state_13384__$1 = state_13384;var statearr_13389_13429 = state_13384__$1;(statearr_13389_13429[2] = inst_13326);
(statearr_13389_13429[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 3))
{var inst_13323 = (state_13384[7]);var state_13384__$1 = state_13384;var statearr_13390_13430 = state_13384__$1;(statearr_13390_13430[2] = inst_13323);
(statearr_13390_13430[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 4))
{var inst_13323 = (state_13384[7]);var inst_13329 = (state_13384[2]);var inst_13330 = cljs.core.get.call(null,inst_13329,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13331 = cljs.core.get.call(null,inst_13329,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13332 = cljs.core.get.call(null,inst_13329,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13333 = inst_13323;var state_13384__$1 = (function (){var statearr_13391 = state_13384;(statearr_13391[8] = inst_13331);
(statearr_13391[9] = inst_13332);
(statearr_13391[10] = inst_13330);
(statearr_13391[11] = inst_13333);
return statearr_13391;
})();var statearr_13392_13431 = state_13384__$1;(statearr_13392_13431[2] = null);
(statearr_13392_13431[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 5))
{var inst_13333 = (state_13384[11]);var inst_13336 = cljs.core.seq_QMARK_.call(null,inst_13333);var state_13384__$1 = state_13384;if(inst_13336)
{var statearr_13393_13432 = state_13384__$1;(statearr_13393_13432[1] = 7);
} else
{var statearr_13394_13433 = state_13384__$1;(statearr_13394_13433[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 6))
{var inst_13382 = (state_13384[2]);var state_13384__$1 = state_13384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13384__$1,inst_13382);
} else
{if((state_val_13385 === 7))
{var inst_13333 = (state_13384[11]);var inst_13338 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13333);var state_13384__$1 = state_13384;var statearr_13395_13434 = state_13384__$1;(statearr_13395_13434[2] = inst_13338);
(statearr_13395_13434[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 8))
{var inst_13333 = (state_13384[11]);var state_13384__$1 = state_13384;var statearr_13396_13435 = state_13384__$1;(statearr_13396_13435[2] = inst_13333);
(statearr_13396_13435[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 9))
{var inst_13341 = (state_13384[12]);var inst_13341__$1 = (state_13384[2]);var inst_13342 = cljs.core.get.call(null,inst_13341__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13343 = cljs.core.get.call(null,inst_13341__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13344 = cljs.core.get.call(null,inst_13341__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13384__$1 = (function (){var statearr_13397 = state_13384;(statearr_13397[13] = inst_13344);
(statearr_13397[14] = inst_13343);
(statearr_13397[12] = inst_13341__$1);
return statearr_13397;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13384__$1,10,inst_13342);
} else
{if((state_val_13385 === 10))
{var inst_13348 = (state_13384[15]);var inst_13349 = (state_13384[16]);var inst_13347 = (state_13384[2]);var inst_13348__$1 = cljs.core.nth.call(null,inst_13347,0,null);var inst_13349__$1 = cljs.core.nth.call(null,inst_13347,1,null);var inst_13350 = (inst_13348__$1 == null);var inst_13351 = cljs.core._EQ_.call(null,inst_13349__$1,change);var inst_13352 = (inst_13350) || (inst_13351);var state_13384__$1 = (function (){var statearr_13398 = state_13384;(statearr_13398[15] = inst_13348__$1);
(statearr_13398[16] = inst_13349__$1);
return statearr_13398;
})();if(cljs.core.truth_(inst_13352))
{var statearr_13399_13436 = state_13384__$1;(statearr_13399_13436[1] = 11);
} else
{var statearr_13400_13437 = state_13384__$1;(statearr_13400_13437[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 11))
{var inst_13348 = (state_13384[15]);var inst_13354 = (inst_13348 == null);var state_13384__$1 = state_13384;if(cljs.core.truth_(inst_13354))
{var statearr_13401_13438 = state_13384__$1;(statearr_13401_13438[1] = 14);
} else
{var statearr_13402_13439 = state_13384__$1;(statearr_13402_13439[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 12))
{var inst_13363 = (state_13384[17]);var inst_13349 = (state_13384[16]);var inst_13344 = (state_13384[13]);var inst_13363__$1 = inst_13344.call(null,inst_13349);var state_13384__$1 = (function (){var statearr_13403 = state_13384;(statearr_13403[17] = inst_13363__$1);
return statearr_13403;
})();if(cljs.core.truth_(inst_13363__$1))
{var statearr_13404_13440 = state_13384__$1;(statearr_13404_13440[1] = 17);
} else
{var statearr_13405_13441 = state_13384__$1;(statearr_13405_13441[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 13))
{var inst_13380 = (state_13384[2]);var state_13384__$1 = state_13384;var statearr_13406_13442 = state_13384__$1;(statearr_13406_13442[2] = inst_13380);
(statearr_13406_13442[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 14))
{var inst_13349 = (state_13384[16]);var inst_13356 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13349);var state_13384__$1 = state_13384;var statearr_13407_13443 = state_13384__$1;(statearr_13407_13443[2] = inst_13356);
(statearr_13407_13443[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 15))
{var state_13384__$1 = state_13384;var statearr_13408_13444 = state_13384__$1;(statearr_13408_13444[2] = null);
(statearr_13408_13444[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 16))
{var inst_13359 = (state_13384[2]);var inst_13360 = calc_state.call(null);var inst_13333 = inst_13360;var state_13384__$1 = (function (){var statearr_13409 = state_13384;(statearr_13409[18] = inst_13359);
(statearr_13409[11] = inst_13333);
return statearr_13409;
})();var statearr_13410_13445 = state_13384__$1;(statearr_13410_13445[2] = null);
(statearr_13410_13445[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 17))
{var inst_13363 = (state_13384[17]);var state_13384__$1 = state_13384;var statearr_13411_13446 = state_13384__$1;(statearr_13411_13446[2] = inst_13363);
(statearr_13411_13446[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 18))
{var inst_13349 = (state_13384[16]);var inst_13344 = (state_13384[13]);var inst_13343 = (state_13384[14]);var inst_13366 = cljs.core.empty_QMARK_.call(null,inst_13344);var inst_13367 = inst_13343.call(null,inst_13349);var inst_13368 = cljs.core.not.call(null,inst_13367);var inst_13369 = (inst_13366) && (inst_13368);var state_13384__$1 = state_13384;var statearr_13412_13447 = state_13384__$1;(statearr_13412_13447[2] = inst_13369);
(statearr_13412_13447[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 19))
{var inst_13371 = (state_13384[2]);var state_13384__$1 = state_13384;if(cljs.core.truth_(inst_13371))
{var statearr_13413_13448 = state_13384__$1;(statearr_13413_13448[1] = 20);
} else
{var statearr_13414_13449 = state_13384__$1;(statearr_13414_13449[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 20))
{var inst_13348 = (state_13384[15]);var state_13384__$1 = state_13384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13384__$1,23,out,inst_13348);
} else
{if((state_val_13385 === 21))
{var state_13384__$1 = state_13384;var statearr_13415_13450 = state_13384__$1;(statearr_13415_13450[2] = null);
(statearr_13415_13450[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 22))
{var inst_13341 = (state_13384[12]);var inst_13377 = (state_13384[2]);var inst_13333 = inst_13341;var state_13384__$1 = (function (){var statearr_13416 = state_13384;(statearr_13416[11] = inst_13333);
(statearr_13416[19] = inst_13377);
return statearr_13416;
})();var statearr_13417_13451 = state_13384__$1;(statearr_13417_13451[2] = null);
(statearr_13417_13451[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13385 === 23))
{var inst_13374 = (state_13384[2]);var state_13384__$1 = state_13384;var statearr_13418_13452 = state_13384__$1;(statearr_13418_13452[2] = inst_13374);
(statearr_13418_13452[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___13426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6233__auto__,c__6248__auto___13426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13422[0] = state_machine__6234__auto__);
(statearr_13422[1] = 1);
return statearr_13422;
});
var state_machine__6234__auto____1 = (function (state_13384){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13384);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13423){if((e13423 instanceof Object))
{var ex__6237__auto__ = e13423;var statearr_13424_13453 = state_13384;(statearr_13424_13453[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13454 = state_13384;
state_13384 = G__13454;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13384){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6250__auto__ = (function (){var statearr_13425 = f__6249__auto__.call(null);(statearr_13425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13426);
return statearr_13425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13456 = {};return obj13456;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3478__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3478__auto__,mults){
return (function (p1__13457_SHARP_){if(cljs.core.truth_(p1__13457_SHARP_.call(null,topic)))
{return p1__13457_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13457_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3478__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13582 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13582 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13583){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13583 = meta13583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13582.cljs$lang$type = true;
cljs.core.async.t13582.cljs$lang$ctorStr = "cljs.core.async/t13582";
cljs.core.async.t13582.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t13582");
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13584){var self__ = this;
var _13584__$1 = this;return self__.meta13583;
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13584,meta13583__$1){var self__ = this;
var _13584__$1 = this;return (new cljs.core.async.t13582(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13583__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13582 = ((function (mults,ensure_mult){
return (function __GT_t13582(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13583){return (new cljs.core.async.t13582(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13583));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13582(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6248__auto___13706 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13706,mults,ensure_mult,p){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13706,mults,ensure_mult,p){
return (function (state_13658){var state_val_13659 = (state_13658[1]);if((state_val_13659 === 1))
{var state_13658__$1 = state_13658;var statearr_13660_13707 = state_13658__$1;(statearr_13660_13707[2] = null);
(statearr_13660_13707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 2))
{var state_13658__$1 = state_13658;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13658__$1,4,ch);
} else
{if((state_val_13659 === 3))
{var inst_13656 = (state_13658[2]);var state_13658__$1 = state_13658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13658__$1,inst_13656);
} else
{if((state_val_13659 === 4))
{var inst_13587 = (state_13658[7]);var inst_13587__$1 = (state_13658[2]);var inst_13588 = (inst_13587__$1 == null);var state_13658__$1 = (function (){var statearr_13661 = state_13658;(statearr_13661[7] = inst_13587__$1);
return statearr_13661;
})();if(cljs.core.truth_(inst_13588))
{var statearr_13662_13708 = state_13658__$1;(statearr_13662_13708[1] = 5);
} else
{var statearr_13663_13709 = state_13658__$1;(statearr_13663_13709[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 5))
{var inst_13594 = cljs.core.deref.call(null,mults);var inst_13595 = cljs.core.vals.call(null,inst_13594);var inst_13596 = cljs.core.seq.call(null,inst_13595);var inst_13597 = inst_13596;var inst_13598 = null;var inst_13599 = 0;var inst_13600 = 0;var state_13658__$1 = (function (){var statearr_13664 = state_13658;(statearr_13664[8] = inst_13600);
(statearr_13664[9] = inst_13599);
(statearr_13664[10] = inst_13598);
(statearr_13664[11] = inst_13597);
return statearr_13664;
})();var statearr_13665_13710 = state_13658__$1;(statearr_13665_13710[2] = null);
(statearr_13665_13710[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 6))
{var inst_13635 = (state_13658[12]);var inst_13637 = (state_13658[13]);var inst_13587 = (state_13658[7]);var inst_13635__$1 = topic_fn.call(null,inst_13587);var inst_13636 = cljs.core.deref.call(null,mults);var inst_13637__$1 = cljs.core.get.call(null,inst_13636,inst_13635__$1);var state_13658__$1 = (function (){var statearr_13666 = state_13658;(statearr_13666[12] = inst_13635__$1);
(statearr_13666[13] = inst_13637__$1);
return statearr_13666;
})();if(cljs.core.truth_(inst_13637__$1))
{var statearr_13667_13711 = state_13658__$1;(statearr_13667_13711[1] = 19);
} else
{var statearr_13668_13712 = state_13658__$1;(statearr_13668_13712[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 7))
{var inst_13654 = (state_13658[2]);var state_13658__$1 = state_13658;var statearr_13669_13713 = state_13658__$1;(statearr_13669_13713[2] = inst_13654);
(statearr_13669_13713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 8))
{var inst_13600 = (state_13658[8]);var inst_13599 = (state_13658[9]);var inst_13602 = (inst_13600 < inst_13599);var inst_13603 = inst_13602;var state_13658__$1 = state_13658;if(cljs.core.truth_(inst_13603))
{var statearr_13673_13714 = state_13658__$1;(statearr_13673_13714[1] = 10);
} else
{var statearr_13674_13715 = state_13658__$1;(statearr_13674_13715[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 9))
{var inst_13633 = (state_13658[2]);var state_13658__$1 = state_13658;var statearr_13675_13716 = state_13658__$1;(statearr_13675_13716[2] = inst_13633);
(statearr_13675_13716[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 10))
{var inst_13600 = (state_13658[8]);var inst_13599 = (state_13658[9]);var inst_13598 = (state_13658[10]);var inst_13597 = (state_13658[11]);var inst_13605 = cljs.core._nth.call(null,inst_13598,inst_13600);var inst_13606 = cljs.core.async.muxch_STAR_.call(null,inst_13605);var inst_13607 = cljs.core.async.close_BANG_.call(null,inst_13606);var inst_13608 = (inst_13600 + 1);var tmp13670 = inst_13599;var tmp13671 = inst_13598;var tmp13672 = inst_13597;var inst_13597__$1 = tmp13672;var inst_13598__$1 = tmp13671;var inst_13599__$1 = tmp13670;var inst_13600__$1 = inst_13608;var state_13658__$1 = (function (){var statearr_13676 = state_13658;(statearr_13676[14] = inst_13607);
(statearr_13676[8] = inst_13600__$1);
(statearr_13676[9] = inst_13599__$1);
(statearr_13676[10] = inst_13598__$1);
(statearr_13676[11] = inst_13597__$1);
return statearr_13676;
})();var statearr_13677_13717 = state_13658__$1;(statearr_13677_13717[2] = null);
(statearr_13677_13717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 11))
{var inst_13597 = (state_13658[11]);var inst_13611 = (state_13658[15]);var inst_13611__$1 = cljs.core.seq.call(null,inst_13597);var state_13658__$1 = (function (){var statearr_13678 = state_13658;(statearr_13678[15] = inst_13611__$1);
return statearr_13678;
})();if(inst_13611__$1)
{var statearr_13679_13718 = state_13658__$1;(statearr_13679_13718[1] = 13);
} else
{var statearr_13680_13719 = state_13658__$1;(statearr_13680_13719[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 12))
{var inst_13631 = (state_13658[2]);var state_13658__$1 = state_13658;var statearr_13681_13720 = state_13658__$1;(statearr_13681_13720[2] = inst_13631);
(statearr_13681_13720[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 13))
{var inst_13611 = (state_13658[15]);var inst_13613 = cljs.core.chunked_seq_QMARK_.call(null,inst_13611);var state_13658__$1 = state_13658;if(inst_13613)
{var statearr_13682_13721 = state_13658__$1;(statearr_13682_13721[1] = 16);
} else
{var statearr_13683_13722 = state_13658__$1;(statearr_13683_13722[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 14))
{var state_13658__$1 = state_13658;var statearr_13684_13723 = state_13658__$1;(statearr_13684_13723[2] = null);
(statearr_13684_13723[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 15))
{var inst_13629 = (state_13658[2]);var state_13658__$1 = state_13658;var statearr_13685_13724 = state_13658__$1;(statearr_13685_13724[2] = inst_13629);
(statearr_13685_13724[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 16))
{var inst_13611 = (state_13658[15]);var inst_13615 = cljs.core.chunk_first.call(null,inst_13611);var inst_13616 = cljs.core.chunk_rest.call(null,inst_13611);var inst_13617 = cljs.core.count.call(null,inst_13615);var inst_13597 = inst_13616;var inst_13598 = inst_13615;var inst_13599 = inst_13617;var inst_13600 = 0;var state_13658__$1 = (function (){var statearr_13686 = state_13658;(statearr_13686[8] = inst_13600);
(statearr_13686[9] = inst_13599);
(statearr_13686[10] = inst_13598);
(statearr_13686[11] = inst_13597);
return statearr_13686;
})();var statearr_13687_13725 = state_13658__$1;(statearr_13687_13725[2] = null);
(statearr_13687_13725[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 17))
{var inst_13611 = (state_13658[15]);var inst_13620 = cljs.core.first.call(null,inst_13611);var inst_13621 = cljs.core.async.muxch_STAR_.call(null,inst_13620);var inst_13622 = cljs.core.async.close_BANG_.call(null,inst_13621);var inst_13623 = cljs.core.next.call(null,inst_13611);var inst_13597 = inst_13623;var inst_13598 = null;var inst_13599 = 0;var inst_13600 = 0;var state_13658__$1 = (function (){var statearr_13688 = state_13658;(statearr_13688[8] = inst_13600);
(statearr_13688[9] = inst_13599);
(statearr_13688[10] = inst_13598);
(statearr_13688[11] = inst_13597);
(statearr_13688[16] = inst_13622);
return statearr_13688;
})();var statearr_13689_13726 = state_13658__$1;(statearr_13689_13726[2] = null);
(statearr_13689_13726[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 18))
{var inst_13626 = (state_13658[2]);var state_13658__$1 = state_13658;var statearr_13690_13727 = state_13658__$1;(statearr_13690_13727[2] = inst_13626);
(statearr_13690_13727[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 19))
{var state_13658__$1 = state_13658;var statearr_13691_13728 = state_13658__$1;(statearr_13691_13728[2] = null);
(statearr_13691_13728[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 20))
{var state_13658__$1 = state_13658;var statearr_13692_13729 = state_13658__$1;(statearr_13692_13729[2] = null);
(statearr_13692_13729[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 21))
{var inst_13651 = (state_13658[2]);var state_13658__$1 = (function (){var statearr_13693 = state_13658;(statearr_13693[17] = inst_13651);
return statearr_13693;
})();var statearr_13694_13730 = state_13658__$1;(statearr_13694_13730[2] = null);
(statearr_13694_13730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 22))
{var inst_13648 = (state_13658[2]);var state_13658__$1 = state_13658;var statearr_13695_13731 = state_13658__$1;(statearr_13695_13731[2] = inst_13648);
(statearr_13695_13731[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 23))
{var inst_13635 = (state_13658[12]);var inst_13639 = (state_13658[2]);var inst_13640 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13635);var state_13658__$1 = (function (){var statearr_13696 = state_13658;(statearr_13696[18] = inst_13639);
return statearr_13696;
})();var statearr_13697_13732 = state_13658__$1;(statearr_13697_13732[2] = inst_13640);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13658__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13659 === 24))
{var inst_13637 = (state_13658[13]);var inst_13587 = (state_13658[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13658,23,Object,null,22);var inst_13644 = cljs.core.async.muxch_STAR_.call(null,inst_13637);var state_13658__$1 = state_13658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13658__$1,25,inst_13644,inst_13587);
} else
{if((state_val_13659 === 25))
{var inst_13646 = (state_13658[2]);var state_13658__$1 = state_13658;var statearr_13698_13733 = state_13658__$1;(statearr_13698_13733[2] = inst_13646);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13658__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___13706,mults,ensure_mult,p))
;return ((function (switch__6233__auto__,c__6248__auto___13706,mults,ensure_mult,p){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13702[0] = state_machine__6234__auto__);
(statearr_13702[1] = 1);
return statearr_13702;
});
var state_machine__6234__auto____1 = (function (state_13658){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13658);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13703){if((e13703 instanceof Object))
{var ex__6237__auto__ = e13703;var statearr_13704_13734 = state_13658;(statearr_13704_13734[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13658);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13735 = state_13658;
state_13658 = G__13735;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13658){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13706,mults,ensure_mult,p))
})();var state__6250__auto__ = (function (){var statearr_13705 = f__6249__auto__.call(null);(statearr_13705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13706);
return statearr_13705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13706,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6248__auto___13872 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13872,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13872,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13842){var state_val_13843 = (state_13842[1]);if((state_val_13843 === 1))
{var state_13842__$1 = state_13842;var statearr_13844_13873 = state_13842__$1;(statearr_13844_13873[2] = null);
(statearr_13844_13873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 2))
{var inst_13805 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13806 = 0;var state_13842__$1 = (function (){var statearr_13845 = state_13842;(statearr_13845[7] = inst_13806);
(statearr_13845[8] = inst_13805);
return statearr_13845;
})();var statearr_13846_13874 = state_13842__$1;(statearr_13846_13874[2] = null);
(statearr_13846_13874[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 3))
{var inst_13840 = (state_13842[2]);var state_13842__$1 = state_13842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13842__$1,inst_13840);
} else
{if((state_val_13843 === 4))
{var inst_13806 = (state_13842[7]);var inst_13808 = (inst_13806 < cnt);var state_13842__$1 = state_13842;if(cljs.core.truth_(inst_13808))
{var statearr_13847_13875 = state_13842__$1;(statearr_13847_13875[1] = 6);
} else
{var statearr_13848_13876 = state_13842__$1;(statearr_13848_13876[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 5))
{var inst_13826 = (state_13842[2]);var state_13842__$1 = (function (){var statearr_13849 = state_13842;(statearr_13849[9] = inst_13826);
return statearr_13849;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13842__$1,12,dchan);
} else
{if((state_val_13843 === 6))
{var state_13842__$1 = state_13842;var statearr_13850_13877 = state_13842__$1;(statearr_13850_13877[2] = null);
(statearr_13850_13877[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 7))
{var state_13842__$1 = state_13842;var statearr_13851_13878 = state_13842__$1;(statearr_13851_13878[2] = null);
(statearr_13851_13878[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 8))
{var inst_13824 = (state_13842[2]);var state_13842__$1 = state_13842;var statearr_13852_13879 = state_13842__$1;(statearr_13852_13879[2] = inst_13824);
(statearr_13852_13879[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 9))
{var inst_13806 = (state_13842[7]);var inst_13819 = (state_13842[2]);var inst_13820 = (inst_13806 + 1);var inst_13806__$1 = inst_13820;var state_13842__$1 = (function (){var statearr_13853 = state_13842;(statearr_13853[7] = inst_13806__$1);
(statearr_13853[10] = inst_13819);
return statearr_13853;
})();var statearr_13854_13880 = state_13842__$1;(statearr_13854_13880[2] = null);
(statearr_13854_13880[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 10))
{var inst_13810 = (state_13842[2]);var inst_13811 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13842__$1 = (function (){var statearr_13855 = state_13842;(statearr_13855[11] = inst_13810);
return statearr_13855;
})();var statearr_13856_13881 = state_13842__$1;(statearr_13856_13881[2] = inst_13811);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13842__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 11))
{var inst_13806 = (state_13842[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13842,10,Object,null,9);var inst_13815 = chs__$1.call(null,inst_13806);var inst_13816 = done.call(null,inst_13806);var inst_13817 = cljs.core.async.take_BANG_.call(null,inst_13815,inst_13816);var state_13842__$1 = state_13842;var statearr_13857_13882 = state_13842__$1;(statearr_13857_13882[2] = inst_13817);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13842__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 12))
{var inst_13828 = (state_13842[12]);var inst_13828__$1 = (state_13842[2]);var inst_13829 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13828__$1);var state_13842__$1 = (function (){var statearr_13858 = state_13842;(statearr_13858[12] = inst_13828__$1);
return statearr_13858;
})();if(cljs.core.truth_(inst_13829))
{var statearr_13859_13883 = state_13842__$1;(statearr_13859_13883[1] = 13);
} else
{var statearr_13860_13884 = state_13842__$1;(statearr_13860_13884[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 13))
{var inst_13831 = cljs.core.async.close_BANG_.call(null,out);var state_13842__$1 = state_13842;var statearr_13861_13885 = state_13842__$1;(statearr_13861_13885[2] = inst_13831);
(statearr_13861_13885[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 14))
{var inst_13828 = (state_13842[12]);var inst_13833 = cljs.core.apply.call(null,f,inst_13828);var state_13842__$1 = state_13842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13842__$1,16,out,inst_13833);
} else
{if((state_val_13843 === 15))
{var inst_13838 = (state_13842[2]);var state_13842__$1 = state_13842;var statearr_13862_13886 = state_13842__$1;(statearr_13862_13886[2] = inst_13838);
(statearr_13862_13886[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13843 === 16))
{var inst_13835 = (state_13842[2]);var state_13842__$1 = (function (){var statearr_13863 = state_13842;(statearr_13863[13] = inst_13835);
return statearr_13863;
})();var statearr_13864_13887 = state_13842__$1;(statearr_13864_13887[2] = null);
(statearr_13864_13887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___13872,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6233__auto__,c__6248__auto___13872,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13868[0] = state_machine__6234__auto__);
(statearr_13868[1] = 1);
return statearr_13868;
});
var state_machine__6234__auto____1 = (function (state_13842){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13842);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13869){if((e13869 instanceof Object))
{var ex__6237__auto__ = e13869;var statearr_13870_13888 = state_13842;(statearr_13870_13888[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13889 = state_13842;
state_13842 = G__13889;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13842){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13872,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6250__auto__ = (function (){var statearr_13871 = f__6249__auto__.call(null);(statearr_13871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13872);
return statearr_13871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13872,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___13997 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___13997,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___13997,out){
return (function (state_13973){var state_val_13974 = (state_13973[1]);if((state_val_13974 === 1))
{var inst_13944 = cljs.core.vec.call(null,chs);var inst_13945 = inst_13944;var state_13973__$1 = (function (){var statearr_13975 = state_13973;(statearr_13975[7] = inst_13945);
return statearr_13975;
})();var statearr_13976_13998 = state_13973__$1;(statearr_13976_13998[2] = null);
(statearr_13976_13998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13974 === 2))
{var inst_13945 = (state_13973[7]);var inst_13947 = cljs.core.count.call(null,inst_13945);var inst_13948 = (inst_13947 > 0);var state_13973__$1 = state_13973;if(cljs.core.truth_(inst_13948))
{var statearr_13977_13999 = state_13973__$1;(statearr_13977_13999[1] = 4);
} else
{var statearr_13978_14000 = state_13973__$1;(statearr_13978_14000[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13974 === 3))
{var inst_13971 = (state_13973[2]);var state_13973__$1 = state_13973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13973__$1,inst_13971);
} else
{if((state_val_13974 === 4))
{var inst_13945 = (state_13973[7]);var state_13973__$1 = state_13973;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13973__$1,7,inst_13945);
} else
{if((state_val_13974 === 5))
{var inst_13967 = cljs.core.async.close_BANG_.call(null,out);var state_13973__$1 = state_13973;var statearr_13979_14001 = state_13973__$1;(statearr_13979_14001[2] = inst_13967);
(statearr_13979_14001[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13974 === 6))
{var inst_13969 = (state_13973[2]);var state_13973__$1 = state_13973;var statearr_13980_14002 = state_13973__$1;(statearr_13980_14002[2] = inst_13969);
(statearr_13980_14002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13974 === 7))
{var inst_13953 = (state_13973[8]);var inst_13952 = (state_13973[9]);var inst_13952__$1 = (state_13973[2]);var inst_13953__$1 = cljs.core.nth.call(null,inst_13952__$1,0,null);var inst_13954 = cljs.core.nth.call(null,inst_13952__$1,1,null);var inst_13955 = (inst_13953__$1 == null);var state_13973__$1 = (function (){var statearr_13981 = state_13973;(statearr_13981[8] = inst_13953__$1);
(statearr_13981[10] = inst_13954);
(statearr_13981[9] = inst_13952__$1);
return statearr_13981;
})();if(cljs.core.truth_(inst_13955))
{var statearr_13982_14003 = state_13973__$1;(statearr_13982_14003[1] = 8);
} else
{var statearr_13983_14004 = state_13973__$1;(statearr_13983_14004[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13974 === 8))
{var inst_13953 = (state_13973[8]);var inst_13954 = (state_13973[10]);var inst_13952 = (state_13973[9]);var inst_13945 = (state_13973[7]);var inst_13957 = (function (){var c = inst_13954;var v = inst_13953;var vec__13950 = inst_13952;var cs = inst_13945;return ((function (c,v,vec__13950,cs,inst_13953,inst_13954,inst_13952,inst_13945,state_val_13974,c__6248__auto___13997,out){
return (function (p1__13890_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13890_SHARP_);
});
;})(c,v,vec__13950,cs,inst_13953,inst_13954,inst_13952,inst_13945,state_val_13974,c__6248__auto___13997,out))
})();var inst_13958 = cljs.core.filterv.call(null,inst_13957,inst_13945);var inst_13945__$1 = inst_13958;var state_13973__$1 = (function (){var statearr_13984 = state_13973;(statearr_13984[7] = inst_13945__$1);
return statearr_13984;
})();var statearr_13985_14005 = state_13973__$1;(statearr_13985_14005[2] = null);
(statearr_13985_14005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13974 === 9))
{var inst_13953 = (state_13973[8]);var state_13973__$1 = state_13973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13973__$1,11,out,inst_13953);
} else
{if((state_val_13974 === 10))
{var inst_13965 = (state_13973[2]);var state_13973__$1 = state_13973;var statearr_13987_14006 = state_13973__$1;(statearr_13987_14006[2] = inst_13965);
(statearr_13987_14006[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13974 === 11))
{var inst_13945 = (state_13973[7]);var inst_13962 = (state_13973[2]);var tmp13986 = inst_13945;var inst_13945__$1 = tmp13986;var state_13973__$1 = (function (){var statearr_13988 = state_13973;(statearr_13988[11] = inst_13962);
(statearr_13988[7] = inst_13945__$1);
return statearr_13988;
})();var statearr_13989_14007 = state_13973__$1;(statearr_13989_14007[2] = null);
(statearr_13989_14007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___13997,out))
;return ((function (switch__6233__auto__,c__6248__auto___13997,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_13993 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13993[0] = state_machine__6234__auto__);
(statearr_13993[1] = 1);
return statearr_13993;
});
var state_machine__6234__auto____1 = (function (state_13973){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_13973);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e13994){if((e13994 instanceof Object))
{var ex__6237__auto__ = e13994;var statearr_13995_14008 = state_13973;(statearr_13995_14008[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13973);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14009 = state_13973;
state_13973 = G__14009;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_13973){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_13973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___13997,out))
})();var state__6250__auto__ = (function (){var statearr_13996 = f__6249__auto__.call(null);(statearr_13996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___13997);
return statearr_13996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___13997,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14102 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14102,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14102,out){
return (function (state_14079){var state_val_14080 = (state_14079[1]);if((state_val_14080 === 1))
{var inst_14056 = 0;var state_14079__$1 = (function (){var statearr_14081 = state_14079;(statearr_14081[7] = inst_14056);
return statearr_14081;
})();var statearr_14082_14103 = state_14079__$1;(statearr_14082_14103[2] = null);
(statearr_14082_14103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14080 === 2))
{var inst_14056 = (state_14079[7]);var inst_14058 = (inst_14056 < n);var state_14079__$1 = state_14079;if(cljs.core.truth_(inst_14058))
{var statearr_14083_14104 = state_14079__$1;(statearr_14083_14104[1] = 4);
} else
{var statearr_14084_14105 = state_14079__$1;(statearr_14084_14105[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14080 === 3))
{var inst_14076 = (state_14079[2]);var inst_14077 = cljs.core.async.close_BANG_.call(null,out);var state_14079__$1 = (function (){var statearr_14085 = state_14079;(statearr_14085[8] = inst_14076);
return statearr_14085;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14079__$1,inst_14077);
} else
{if((state_val_14080 === 4))
{var state_14079__$1 = state_14079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14079__$1,7,ch);
} else
{if((state_val_14080 === 5))
{var state_14079__$1 = state_14079;var statearr_14086_14106 = state_14079__$1;(statearr_14086_14106[2] = null);
(statearr_14086_14106[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14080 === 6))
{var inst_14074 = (state_14079[2]);var state_14079__$1 = state_14079;var statearr_14087_14107 = state_14079__$1;(statearr_14087_14107[2] = inst_14074);
(statearr_14087_14107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14080 === 7))
{var inst_14061 = (state_14079[9]);var inst_14061__$1 = (state_14079[2]);var inst_14062 = (inst_14061__$1 == null);var inst_14063 = cljs.core.not.call(null,inst_14062);var state_14079__$1 = (function (){var statearr_14088 = state_14079;(statearr_14088[9] = inst_14061__$1);
return statearr_14088;
})();if(inst_14063)
{var statearr_14089_14108 = state_14079__$1;(statearr_14089_14108[1] = 8);
} else
{var statearr_14090_14109 = state_14079__$1;(statearr_14090_14109[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14080 === 8))
{var inst_14061 = (state_14079[9]);var state_14079__$1 = state_14079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14079__$1,11,out,inst_14061);
} else
{if((state_val_14080 === 9))
{var state_14079__$1 = state_14079;var statearr_14091_14110 = state_14079__$1;(statearr_14091_14110[2] = null);
(statearr_14091_14110[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14080 === 10))
{var inst_14071 = (state_14079[2]);var state_14079__$1 = state_14079;var statearr_14092_14111 = state_14079__$1;(statearr_14092_14111[2] = inst_14071);
(statearr_14092_14111[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14080 === 11))
{var inst_14056 = (state_14079[7]);var inst_14066 = (state_14079[2]);var inst_14067 = (inst_14056 + 1);var inst_14056__$1 = inst_14067;var state_14079__$1 = (function (){var statearr_14093 = state_14079;(statearr_14093[7] = inst_14056__$1);
(statearr_14093[10] = inst_14066);
return statearr_14093;
})();var statearr_14094_14112 = state_14079__$1;(statearr_14094_14112[2] = null);
(statearr_14094_14112[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___14102,out))
;return ((function (switch__6233__auto__,c__6248__auto___14102,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14098 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14098[0] = state_machine__6234__auto__);
(statearr_14098[1] = 1);
return statearr_14098;
});
var state_machine__6234__auto____1 = (function (state_14079){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14099){if((e14099 instanceof Object))
{var ex__6237__auto__ = e14099;var statearr_14100_14113 = state_14079;(statearr_14100_14113[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14114 = state_14079;
state_14079 = G__14114;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14079){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14102,out))
})();var state__6250__auto__ = (function (){var statearr_14101 = f__6249__auto__.call(null);(statearr_14101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14102);
return statearr_14101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14102,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14211 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14211,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14211,out){
return (function (state_14186){var state_val_14187 = (state_14186[1]);if((state_val_14187 === 1))
{var inst_14163 = null;var state_14186__$1 = (function (){var statearr_14188 = state_14186;(statearr_14188[7] = inst_14163);
return statearr_14188;
})();var statearr_14189_14212 = state_14186__$1;(statearr_14189_14212[2] = null);
(statearr_14189_14212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 2))
{var state_14186__$1 = state_14186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14186__$1,4,ch);
} else
{if((state_val_14187 === 3))
{var inst_14183 = (state_14186[2]);var inst_14184 = cljs.core.async.close_BANG_.call(null,out);var state_14186__$1 = (function (){var statearr_14190 = state_14186;(statearr_14190[8] = inst_14183);
return statearr_14190;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14186__$1,inst_14184);
} else
{if((state_val_14187 === 4))
{var inst_14166 = (state_14186[9]);var inst_14166__$1 = (state_14186[2]);var inst_14167 = (inst_14166__$1 == null);var inst_14168 = cljs.core.not.call(null,inst_14167);var state_14186__$1 = (function (){var statearr_14191 = state_14186;(statearr_14191[9] = inst_14166__$1);
return statearr_14191;
})();if(inst_14168)
{var statearr_14192_14213 = state_14186__$1;(statearr_14192_14213[1] = 5);
} else
{var statearr_14193_14214 = state_14186__$1;(statearr_14193_14214[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 5))
{var inst_14166 = (state_14186[9]);var inst_14163 = (state_14186[7]);var inst_14170 = cljs.core._EQ_.call(null,inst_14166,inst_14163);var state_14186__$1 = state_14186;if(inst_14170)
{var statearr_14194_14215 = state_14186__$1;(statearr_14194_14215[1] = 8);
} else
{var statearr_14195_14216 = state_14186__$1;(statearr_14195_14216[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 6))
{var state_14186__$1 = state_14186;var statearr_14197_14217 = state_14186__$1;(statearr_14197_14217[2] = null);
(statearr_14197_14217[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 7))
{var inst_14181 = (state_14186[2]);var state_14186__$1 = state_14186;var statearr_14198_14218 = state_14186__$1;(statearr_14198_14218[2] = inst_14181);
(statearr_14198_14218[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 8))
{var inst_14163 = (state_14186[7]);var tmp14196 = inst_14163;var inst_14163__$1 = tmp14196;var state_14186__$1 = (function (){var statearr_14199 = state_14186;(statearr_14199[7] = inst_14163__$1);
return statearr_14199;
})();var statearr_14200_14219 = state_14186__$1;(statearr_14200_14219[2] = null);
(statearr_14200_14219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 9))
{var inst_14166 = (state_14186[9]);var state_14186__$1 = state_14186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14186__$1,11,out,inst_14166);
} else
{if((state_val_14187 === 10))
{var inst_14178 = (state_14186[2]);var state_14186__$1 = state_14186;var statearr_14201_14220 = state_14186__$1;(statearr_14201_14220[2] = inst_14178);
(statearr_14201_14220[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14187 === 11))
{var inst_14166 = (state_14186[9]);var inst_14175 = (state_14186[2]);var inst_14163 = inst_14166;var state_14186__$1 = (function (){var statearr_14202 = state_14186;(statearr_14202[7] = inst_14163);
(statearr_14202[10] = inst_14175);
return statearr_14202;
})();var statearr_14203_14221 = state_14186__$1;(statearr_14203_14221[2] = null);
(statearr_14203_14221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___14211,out))
;return ((function (switch__6233__auto__,c__6248__auto___14211,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14207 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14207[0] = state_machine__6234__auto__);
(statearr_14207[1] = 1);
return statearr_14207;
});
var state_machine__6234__auto____1 = (function (state_14186){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14186);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14208){if((e14208 instanceof Object))
{var ex__6237__auto__ = e14208;var statearr_14209_14222 = state_14186;(statearr_14209_14222[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14223 = state_14186;
state_14186 = G__14223;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14186){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14211,out))
})();var state__6250__auto__ = (function (){var statearr_14210 = f__6249__auto__.call(null);(statearr_14210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14211);
return statearr_14210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14211,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14358 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14358,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14358,out){
return (function (state_14328){var state_val_14329 = (state_14328[1]);if((state_val_14329 === 1))
{var inst_14291 = (new Array(n));var inst_14292 = inst_14291;var inst_14293 = 0;var state_14328__$1 = (function (){var statearr_14330 = state_14328;(statearr_14330[7] = inst_14293);
(statearr_14330[8] = inst_14292);
return statearr_14330;
})();var statearr_14331_14359 = state_14328__$1;(statearr_14331_14359[2] = null);
(statearr_14331_14359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 2))
{var state_14328__$1 = state_14328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14328__$1,4,ch);
} else
{if((state_val_14329 === 3))
{var inst_14326 = (state_14328[2]);var state_14328__$1 = state_14328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14328__$1,inst_14326);
} else
{if((state_val_14329 === 4))
{var inst_14296 = (state_14328[9]);var inst_14296__$1 = (state_14328[2]);var inst_14297 = (inst_14296__$1 == null);var inst_14298 = cljs.core.not.call(null,inst_14297);var state_14328__$1 = (function (){var statearr_14332 = state_14328;(statearr_14332[9] = inst_14296__$1);
return statearr_14332;
})();if(inst_14298)
{var statearr_14333_14360 = state_14328__$1;(statearr_14333_14360[1] = 5);
} else
{var statearr_14334_14361 = state_14328__$1;(statearr_14334_14361[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 5))
{var inst_14293 = (state_14328[7]);var inst_14296 = (state_14328[9]);var inst_14292 = (state_14328[8]);var inst_14301 = (state_14328[10]);var inst_14300 = (inst_14292[inst_14293] = inst_14296);var inst_14301__$1 = (inst_14293 + 1);var inst_14302 = (inst_14301__$1 < n);var state_14328__$1 = (function (){var statearr_14335 = state_14328;(statearr_14335[11] = inst_14300);
(statearr_14335[10] = inst_14301__$1);
return statearr_14335;
})();if(cljs.core.truth_(inst_14302))
{var statearr_14336_14362 = state_14328__$1;(statearr_14336_14362[1] = 8);
} else
{var statearr_14337_14363 = state_14328__$1;(statearr_14337_14363[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 6))
{var inst_14293 = (state_14328[7]);var inst_14314 = (inst_14293 > 0);var state_14328__$1 = state_14328;if(cljs.core.truth_(inst_14314))
{var statearr_14339_14364 = state_14328__$1;(statearr_14339_14364[1] = 12);
} else
{var statearr_14340_14365 = state_14328__$1;(statearr_14340_14365[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 7))
{var inst_14324 = (state_14328[2]);var state_14328__$1 = state_14328;var statearr_14341_14366 = state_14328__$1;(statearr_14341_14366[2] = inst_14324);
(statearr_14341_14366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 8))
{var inst_14292 = (state_14328[8]);var inst_14301 = (state_14328[10]);var tmp14338 = inst_14292;var inst_14292__$1 = tmp14338;var inst_14293 = inst_14301;var state_14328__$1 = (function (){var statearr_14342 = state_14328;(statearr_14342[7] = inst_14293);
(statearr_14342[8] = inst_14292__$1);
return statearr_14342;
})();var statearr_14343_14367 = state_14328__$1;(statearr_14343_14367[2] = null);
(statearr_14343_14367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 9))
{var inst_14292 = (state_14328[8]);var inst_14306 = cljs.core.vec.call(null,inst_14292);var state_14328__$1 = state_14328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14328__$1,11,out,inst_14306);
} else
{if((state_val_14329 === 10))
{var inst_14312 = (state_14328[2]);var state_14328__$1 = state_14328;var statearr_14344_14368 = state_14328__$1;(statearr_14344_14368[2] = inst_14312);
(statearr_14344_14368[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 11))
{var inst_14308 = (state_14328[2]);var inst_14309 = (new Array(n));var inst_14292 = inst_14309;var inst_14293 = 0;var state_14328__$1 = (function (){var statearr_14345 = state_14328;(statearr_14345[7] = inst_14293);
(statearr_14345[8] = inst_14292);
(statearr_14345[12] = inst_14308);
return statearr_14345;
})();var statearr_14346_14369 = state_14328__$1;(statearr_14346_14369[2] = null);
(statearr_14346_14369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 12))
{var inst_14292 = (state_14328[8]);var inst_14316 = cljs.core.vec.call(null,inst_14292);var state_14328__$1 = state_14328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14328__$1,15,out,inst_14316);
} else
{if((state_val_14329 === 13))
{var state_14328__$1 = state_14328;var statearr_14347_14370 = state_14328__$1;(statearr_14347_14370[2] = null);
(statearr_14347_14370[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 14))
{var inst_14321 = (state_14328[2]);var inst_14322 = cljs.core.async.close_BANG_.call(null,out);var state_14328__$1 = (function (){var statearr_14348 = state_14328;(statearr_14348[13] = inst_14321);
return statearr_14348;
})();var statearr_14349_14371 = state_14328__$1;(statearr_14349_14371[2] = inst_14322);
(statearr_14349_14371[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14329 === 15))
{var inst_14318 = (state_14328[2]);var state_14328__$1 = state_14328;var statearr_14350_14372 = state_14328__$1;(statearr_14350_14372[2] = inst_14318);
(statearr_14350_14372[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___14358,out))
;return ((function (switch__6233__auto__,c__6248__auto___14358,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14354[0] = state_machine__6234__auto__);
(statearr_14354[1] = 1);
return statearr_14354;
});
var state_machine__6234__auto____1 = (function (state_14328){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14355){if((e14355 instanceof Object))
{var ex__6237__auto__ = e14355;var statearr_14356_14373 = state_14328;(statearr_14356_14373[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14374 = state_14328;
state_14328 = G__14374;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14328){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14358,out))
})();var state__6250__auto__ = (function (){var statearr_14357 = f__6249__auto__.call(null);(statearr_14357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14358);
return statearr_14357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14358,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6248__auto___14517 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___14517,out){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___14517,out){
return (function (state_14487){var state_val_14488 = (state_14487[1]);if((state_val_14488 === 1))
{var inst_14446 = [];var inst_14447 = inst_14446;var inst_14448 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14487__$1 = (function (){var statearr_14489 = state_14487;(statearr_14489[7] = inst_14448);
(statearr_14489[8] = inst_14447);
return statearr_14489;
})();var statearr_14490_14518 = state_14487__$1;(statearr_14490_14518[2] = null);
(statearr_14490_14518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 2))
{var state_14487__$1 = state_14487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14487__$1,4,ch);
} else
{if((state_val_14488 === 3))
{var inst_14485 = (state_14487[2]);var state_14487__$1 = state_14487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14487__$1,inst_14485);
} else
{if((state_val_14488 === 4))
{var inst_14451 = (state_14487[9]);var inst_14451__$1 = (state_14487[2]);var inst_14452 = (inst_14451__$1 == null);var inst_14453 = cljs.core.not.call(null,inst_14452);var state_14487__$1 = (function (){var statearr_14491 = state_14487;(statearr_14491[9] = inst_14451__$1);
return statearr_14491;
})();if(inst_14453)
{var statearr_14492_14519 = state_14487__$1;(statearr_14492_14519[1] = 5);
} else
{var statearr_14493_14520 = state_14487__$1;(statearr_14493_14520[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 5))
{var inst_14448 = (state_14487[7]);var inst_14455 = (state_14487[10]);var inst_14451 = (state_14487[9]);var inst_14455__$1 = f.call(null,inst_14451);var inst_14456 = cljs.core._EQ_.call(null,inst_14455__$1,inst_14448);var inst_14457 = cljs.core.keyword_identical_QMARK_.call(null,inst_14448,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14458 = (inst_14456) || (inst_14457);var state_14487__$1 = (function (){var statearr_14494 = state_14487;(statearr_14494[10] = inst_14455__$1);
return statearr_14494;
})();if(cljs.core.truth_(inst_14458))
{var statearr_14495_14521 = state_14487__$1;(statearr_14495_14521[1] = 8);
} else
{var statearr_14496_14522 = state_14487__$1;(statearr_14496_14522[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 6))
{var inst_14447 = (state_14487[8]);var inst_14472 = inst_14447.length;var inst_14473 = (inst_14472 > 0);var state_14487__$1 = state_14487;if(cljs.core.truth_(inst_14473))
{var statearr_14498_14523 = state_14487__$1;(statearr_14498_14523[1] = 12);
} else
{var statearr_14499_14524 = state_14487__$1;(statearr_14499_14524[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 7))
{var inst_14483 = (state_14487[2]);var state_14487__$1 = state_14487;var statearr_14500_14525 = state_14487__$1;(statearr_14500_14525[2] = inst_14483);
(statearr_14500_14525[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 8))
{var inst_14455 = (state_14487[10]);var inst_14451 = (state_14487[9]);var inst_14447 = (state_14487[8]);var inst_14460 = inst_14447.push(inst_14451);var tmp14497 = inst_14447;var inst_14447__$1 = tmp14497;var inst_14448 = inst_14455;var state_14487__$1 = (function (){var statearr_14501 = state_14487;(statearr_14501[7] = inst_14448);
(statearr_14501[8] = inst_14447__$1);
(statearr_14501[11] = inst_14460);
return statearr_14501;
})();var statearr_14502_14526 = state_14487__$1;(statearr_14502_14526[2] = null);
(statearr_14502_14526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 9))
{var inst_14447 = (state_14487[8]);var inst_14463 = cljs.core.vec.call(null,inst_14447);var state_14487__$1 = state_14487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14487__$1,11,out,inst_14463);
} else
{if((state_val_14488 === 10))
{var inst_14470 = (state_14487[2]);var state_14487__$1 = state_14487;var statearr_14503_14527 = state_14487__$1;(statearr_14503_14527[2] = inst_14470);
(statearr_14503_14527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 11))
{var inst_14455 = (state_14487[10]);var inst_14451 = (state_14487[9]);var inst_14465 = (state_14487[2]);var inst_14466 = [];var inst_14467 = inst_14466.push(inst_14451);var inst_14447 = inst_14466;var inst_14448 = inst_14455;var state_14487__$1 = (function (){var statearr_14504 = state_14487;(statearr_14504[7] = inst_14448);
(statearr_14504[8] = inst_14447);
(statearr_14504[12] = inst_14465);
(statearr_14504[13] = inst_14467);
return statearr_14504;
})();var statearr_14505_14528 = state_14487__$1;(statearr_14505_14528[2] = null);
(statearr_14505_14528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 12))
{var inst_14447 = (state_14487[8]);var inst_14475 = cljs.core.vec.call(null,inst_14447);var state_14487__$1 = state_14487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14487__$1,15,out,inst_14475);
} else
{if((state_val_14488 === 13))
{var state_14487__$1 = state_14487;var statearr_14506_14529 = state_14487__$1;(statearr_14506_14529[2] = null);
(statearr_14506_14529[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 14))
{var inst_14480 = (state_14487[2]);var inst_14481 = cljs.core.async.close_BANG_.call(null,out);var state_14487__$1 = (function (){var statearr_14507 = state_14487;(statearr_14507[14] = inst_14480);
return statearr_14507;
})();var statearr_14508_14530 = state_14487__$1;(statearr_14508_14530[2] = inst_14481);
(statearr_14508_14530[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14488 === 15))
{var inst_14477 = (state_14487[2]);var state_14487__$1 = state_14487;var statearr_14509_14531 = state_14487__$1;(statearr_14509_14531[2] = inst_14477);
(statearr_14509_14531[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6248__auto___14517,out))
;return ((function (switch__6233__auto__,c__6248__auto___14517,out){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_14513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14513[0] = state_machine__6234__auto__);
(statearr_14513[1] = 1);
return statearr_14513;
});
var state_machine__6234__auto____1 = (function (state_14487){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_14487);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e14514){if((e14514 instanceof Object))
{var ex__6237__auto__ = e14514;var statearr_14515_14532 = state_14487;(statearr_14515_14532[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14533 = state_14487;
state_14487 = G__14533;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_14487){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_14487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___14517,out))
})();var state__6250__auto__ = (function (){var statearr_14516 = f__6249__auto__.call(null);(statearr_14516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___14517);
return statearr_14516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___14517,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map