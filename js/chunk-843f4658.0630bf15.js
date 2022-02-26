(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-843f4658"],{1511:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"album py-5 bg-light"},[r("div",{staticClass:"container"},[r("div",{staticClass:"card mb-3"},[r("UserProfileCard",{attrs:{user:e.user,"is-current-user":e.currentUser.id===e.user.id,"initial-is-followed":e.isFollowed}})],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("UserFollowingsCard",{attrs:{followings:e.followings}}),r("br"),r("UserFollowersCard",{attrs:{followers:e.followers}})],1),r("div",{staticClass:"col-md-8"},[r("UserCommentsCard",{attrs:{comments:e.comments}}),r("br"),r("UserFavoritedRestaurantsCard",{attrs:{"favorited-restaurants":e.favoritedRestaurants}})],1)])])])},n=[],a=r("1da1"),i=r("5530"),o=(r("96cf"),r("d9e2"),r("b0c0"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("4de4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"300px",height:"300px"}})]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[e._v(" "+e._s(e.user.name)+" ")]),r("p",{staticClass:"card-text"},[e._v(" "+e._s(e.user.email)+" ")]),r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[e._v(e._s(e.user.commentsLength))]),e._v(" 已評論餐廳 ")]),r("li",[r("strong",[e._v(e._s(e.user.favoritedRestaurantsLength))]),e._v(" 收藏的餐廳 ")]),r("li",[r("strong",[e._v(e._s(e.user.followingsLength))]),e._v(" followings (追蹤者) ")]),r("li",[r("strong",[e._v(e._s(e.user.followersLength))]),e._v(" followers (追隨者) ")])]),e.isCurrentUser?[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"user-edit",params:{id:e.user.id}}}},[e._v(" Edit ")])]:[e.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowing(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(e.user.id)}}},[e._v(" 追蹤 ")])]],2)])])])}),l=[],c=r("2708"),u=r("4cce"),d=r("2fa3"),f={mixins:[c["a"]],props:{user:{type:Object,required:!0},isCurrentUser:{type:Boolean,required:!0},initialIsFollowed:{type:Boolean,required:!0}},data:function(){return{isFollowed:this.initialIsFollowed,isProcessing:!1}},watch:{initialIsFollowed:function(e){this.isFollowed=e}},methods:{addFollowing:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,u["a"].addFollowing({userId:e});case 4:if(s=r.sent,n=s.data,"error"!==n.status){r.next=8;break}throw new Error(n.message);case 8:t.isFollowed=!0,t.isProcessing=!1,r.next=17;break;case 12:r.prev=12,r.t0=r["catch"](0),t.isProcessing=!1,console.error(r.t0.message),d["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,12]])})))()},deleteFollowing:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,u["a"].deleteFollowing({userId:e});case 4:if(s=r.sent,n=s.data,"error"!==n.status){r.next=8;break}throw new Error(n.message);case 8:t.isFollowed=!1,t.isProcessing=!1,r.next=17;break;case 12:r.prev=12,r.t0=r["catch"](0),t.isProcessing=!1,console.error(r.t0.message),d["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}},v=f,g=r("2877"),m=Object(g["a"])(v,o,l,!1,null,null,null),h=m.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followings.length))]),e._v(" followings (追蹤者)")]),r("div",{staticClass:"card-body"},e._l(e.followings,(function(t){return r("img",{key:t.id,staticClass:"mr-1 mb-1",attrs:{src:e._f("emptyImage")(t.image),width:"60px",height:"60px"}})})),0)])},w=[],b={mixins:[c["a"]],props:{followings:{type:Array,require:!0}}},x=b,_=Object(g["a"])(x,p,w,!1,null,null,null),y=_.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followers.length))]),e._v(" followers (追隨者)")]),r("div",{staticClass:"card-body"},e._l(e.followers,(function(t){return r("a",{key:t.id,attrs:{href:"/users/1"}},[r("img",{staticClass:"avatar mr-1 mb-1",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),0)])},F=[],k={mixins:[c["a"]],props:{followers:{type:Array,require:!0}}},R=k,O=Object(g["a"])(R,C,F,!1,null,null,null),j=O.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.comments.length))]),e._v(" 已評論餐廳")]),r("div",{staticClass:"card-body"},e._l(e.comments,(function(t){return r("a",{key:t.id,attrs:{href:"/restaurants/1"}},[r("img",{staticClass:"avatar mr-1 mb-1",attrs:{src:e._f("emptyImage")(t.Restaurant.image),width:"60",height:"60"}})])})),0)])},U=[],P={mixins:[c["a"]],props:{comments:{type:Array,require:!0}}},I=P,L=Object(g["a"])(I,E,U,!1,null,null,null),z=L.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.FavoritedRestaurants.length))]),e._v(" 收藏的餐廳")]),r("div",{staticClass:"card-body"},e._l(e.FavoritedRestaurants,(function(t){return r("a",{key:t.id,attrs:{href:"/restaurants/2"}},[r("img",{staticClass:"avatar mr-1 mb-1",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),0)])},S=[],q={mixins:[c["a"]],props:{FavoritedRestaurants:{type:Array,require:!0}}},D=q,$=Object(g["a"])(D,A,S,!1,null,null,null),B=$.exports,N=r("2f62"),J={name:"User",components:{UserProfileCard:h,UserFollowingsCard:y,UserFollowersCard:j,UserCommentsCard:z,UserFavoritedRestaurantsCard:B},data:function(){return{user:{id:0,image:"",name:"",email:"",followingsLength:0,followersLength:0,commentsLength:0,favoritedRestaurantsLength:0},isFollowed:!1,followings:[],followers:[],comments:[],favoritedRestaurants:[]}},computed:Object(i["a"])({},Object(N["b"])(["currentUser"])),created:function(){var e=this.$route.params.id;this.fetchUser(e)},beforeRouteUpdate:function(e,t,r){var s=e.params.id;this.fetchUser(s),r()},methods:{fetchUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n,a,o,l,c,f,v,g,m,h,p,w;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].getUse(e);case 3:if(s=r.sent,n=s.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:a=n.profile,o=n.isFollowed,l=a.id,c=a.image,f=a.name,v=a.email,g=a.Followings,m=a.Followers,h=a.Comments,p=a.FavoritedRestaurants,w=new Set,t.comments=h.filter((function(e){return e.Restaurant&&!w.has(e.Restaurant.id)&&w.add(e.Restaurant.id)})),t.user=Object(i["a"])(Object(i["a"])({},t.user),{},{id:l,image:c,name:f,email:v,followingsLength:g.length,followersLength:m.length,commentsLength:t.comments.length,favoritedRestaurantsLength:p.length}),t.isFollowed=o,t.followings=g,t.followers=m,t.favoritedRestaurants=p,r.next=22;break;case 18:r.prev=18,r.t0=r["catch"](0),console.log(r.t0),d["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試.."});case 22:case"end":return r.stop()}}),r,null,[[0,18]])})))()}}},K=J,T=Object(g["a"])(K,s,n,!1,null,null,null);t["default"]=T.exports},"4fad":function(e,t,r){var s=r("d039"),n=r("861d"),a=r("c6b6"),i=r("d86b"),o=Object.isExtensible,l=s((function(){o(1)}));e.exports=l||i?function(e){return!!n(e)&&((!i||"ArrayBuffer"!=a(e))&&(!o||o(e)))}:o},6062:function(e,t,r){"use strict";var s=r("6d61"),n=r("6566");s("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},6566:function(e,t,r){"use strict";var s=r("9bf2").f,n=r("7c73"),a=r("e2cc"),i=r("0366"),o=r("19aa"),l=r("2266"),c=r("7dd0"),u=r("2626"),d=r("83ab"),f=r("f183").fastKey,v=r("69f3"),g=v.set,m=v.getterFor;e.exports={getConstructor:function(e,t,r,c){var u=e((function(e,s){o(e,v),g(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=s&&l(s,e[c],{that:e,AS_ENTRIES:r})})),v=u.prototype,h=m(t),p=function(e,t,r){var s,n,a=h(e),i=w(e,t);return i?i.value=r:(a.last=i={index:n=f(t,!0),key:t,value:r,previous:s=a.last,next:void 0,removed:!1},a.first||(a.first=i),s&&(s.next=i),d?a.size++:e.size++,"F"!==n&&(a.index[n]=i)),e},w=function(e,t){var r,s=h(e),n=f(t);if("F"!==n)return s.index[n];for(r=s.first;r;r=r.next)if(r.key==t)return r};return a(v,{clear:function(){var e=this,t=h(e),r=t.index,s=t.first;while(s)s.removed=!0,s.previous&&(s.previous=s.previous.next=void 0),delete r[s.index],s=s.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,r=h(t),s=w(t,e);if(s){var n=s.next,a=s.previous;delete r.index[s.index],s.removed=!0,a&&(a.next=n),n&&(n.previous=a),r.first==s&&(r.first=n),r.last==s&&(r.last=a),d?r.size--:t.size--}return!!s},forEach:function(e){var t,r=h(this),s=i(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:r.first){s(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!w(this,e)}}),a(v,r?{get:function(e){var t=w(this,e);return t&&t.value},set:function(e,t){return p(this,0===e?0:e,t)}}:{add:function(e){return p(this,e=0===e?0:e,e)}}),d&&s(v,"size",{get:function(){return h(this).size}}),u},setStrong:function(e,t,r){var s=t+" Iterator",n=m(t),a=m(s);c(e,t,(function(e,t){g(this,{type:s,target:e,state:n(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,r=e.last;while(r&&r.removed)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),u(t)}}},"6d61":function(e,t,r){"use strict";var s=r("23e7"),n=r("da84"),a=r("e330"),i=r("94ca"),o=r("6eeb"),l=r("f183"),c=r("2266"),u=r("19aa"),d=r("1626"),f=r("861d"),v=r("d039"),g=r("1c7e"),m=r("d44e"),h=r("7156");e.exports=function(e,t,r){var p=-1!==e.indexOf("Map"),w=-1!==e.indexOf("Weak"),b=p?"set":"add",x=n[e],_=x&&x.prototype,y=x,C={},F=function(e){var t=a(_[e]);o(_,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(w&&!f(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return w&&!f(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(w&&!f(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})},k=i(e,!d(x)||!(w||_.forEach&&!v((function(){(new x).entries().next()}))));if(k)y=r.getConstructor(t,e,p,b),l.enable();else if(i(e,!0)){var R=new y,O=R[b](w?{}:-0,1)!=R,j=v((function(){R.has(1)})),E=g((function(e){new x(e)})),U=!w&&v((function(){var e=new x,t=5;while(t--)e[b](t,t);return!e.has(-0)}));E||(y=t((function(e,t){u(e,_);var r=h(new x,e,y);return void 0!=t&&c(t,r[b],{that:r,AS_ENTRIES:p}),r})),y.prototype=_,_.constructor=y),(j||U)&&(F("delete"),F("has"),p&&F("get")),(U||O)&&F(b),w&&_.clear&&delete _.clear}return C[e]=y,s({global:!0,forced:y!=x},C),m(y,e),w||r.setStrong(y,e,p),y}},bb2f:function(e,t,r){var s=r("d039");e.exports=!s((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d86b:function(e,t,r){var s=r("d039");e.exports=s((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},f183:function(e,t,r){var s=r("23e7"),n=r("e330"),a=r("d012"),i=r("861d"),o=r("1a2d"),l=r("9bf2").f,c=r("241c"),u=r("057f"),d=r("4fad"),f=r("90e3"),v=r("bb2f"),g=!1,m=f("meta"),h=0,p=function(e){l(e,m,{value:{objectID:"O"+h++,weakData:{}}})},w=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,m)){if(!d(e))return"F";if(!t)return"E";p(e)}return e[m].objectID},b=function(e,t){if(!o(e,m)){if(!d(e))return!0;if(!t)return!1;p(e)}return e[m].weakData},x=function(e){return v&&g&&d(e)&&!o(e,m)&&p(e),e},_=function(){y.enable=function(){},g=!0;var e=c.f,t=n([].splice),r={};r[m]=1,e(r).length&&(c.f=function(r){for(var s=e(r),n=0,a=s.length;n<a;n++)if(s[n]===m){t(s,n,1);break}return s},s({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},y=e.exports={enable:_,fastKey:w,getWeakData:b,onFreeze:x};a[m]=!0}}]);
//# sourceMappingURL=chunk-843f4658.0630bf15.js.map