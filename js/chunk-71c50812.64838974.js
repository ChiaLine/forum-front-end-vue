(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c50812"],{"73a3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/restaurants/new"}},[t._v(" New Restaurant ")]),a("AdminRestaurantsTable")],1)},r=[],s=a("e04c"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table"},[t.isLoading?a("Spinner"):a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col",width:"300"}},[t._v("操作")])])]),a("tbody",t._l(t.restaurants,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",[t._v(t._s(e.Category?e.Category.name:"未分類"))]),a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant",params:{id:e.id}}}},[t._v("Show")]),a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurants-edit",params:{id:e.id}}}},[t._v("Edit")]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteRestaurant(e.id)}}},[t._v(" Delete ")])],1)])})),0)],1)},u=[],c=a("1da1"),o=(a("d9e2"),a("4de4"),a("d3b7"),a("96cf"),a("be6c")),d=a("2fa3"),l=a("2375"),m={components:{Spinner:l["a"]},data:function(){return{restaurants:[],isLoading:!0}},created:function(){this.fetchRestaurants()},methods:{fetchRestaurants:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].restaurants.get();case 3:a=e.sent,n=a.data,t.restaurants=n.restaurants,t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.isLoading=!1,d["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},deleteRestaurant:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o["a"].restaurants.delete(t);case 3:if(n=a.sent,r=n.data,"success"===r.status){a.next=7;break}throw new Error(r.message);case 7:e.restaurants=e.restaurants.filter((function(e){return e.id!==t})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),d["a"].fire({icon:"error",title:"無法刪除餐廳資料，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},f=m,p=a("2877"),v=Object(p["a"])(f,i,u,!1,null,null,null),b=v.exports,g={components:{AdminNav:s["a"],AdminRestaurantsTable:b}},h=g,_=Object(p["a"])(h,n,r,!1,null,null,null);e["default"]=_.exports},be6c:function(t,e,a){"use strict";var n=a("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){var e=t.nweCategoryName;return n["b"].post("/admin/categories",e)},update:function(t,e){return n["b"].put("/admin/categories/".concat(t),e)},delete:function(t){return n["b"].delete("/admin/categories/".concat(t))}},restaurants:{getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},get:function(){return n["b"].get("/admin/restaurants")},delete:function(t){return n["b"].delete("/admin/restaurants/".concat(t))},update:function(t){var e=t.restaurantId,a=t.formData;return n["b"].put("/admin/restaurants/".concat(e),a)}},users:{get:function(){return n["b"].get("/admin/users")},update:function(t){var e=t.userId,a=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:a})}}}},e04c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},r=[],s=a("2877"),i={},u=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-71c50812.64838974.js.map