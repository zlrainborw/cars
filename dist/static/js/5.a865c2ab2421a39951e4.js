webpackJsonp([5],{XxHS:function(t,e){},wHgX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),i=a.n(s),r=a("9rMa"),n={computed:i()({},Object(r.e)({detaiList:function(t){return t.detail.detaiList},currentYear:function(t){return t.detail.currentYear}}),Object(r.c)({years:"detail/years",lists:"detail/lists"})),methods:i()({},Object(r.d)({}),Object(r.d)({changeYear:"detail/changeYear"}),Object(r.b)("detail",["DatailLists"]),{updata:function(){var t=this.$route.query.id;this.DatailLists(t).then(function(e){console.log(t)})}}),mounted:function(){this.updata(),console.log(this.$route.query.id)}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warp"},[a("router-link",{staticClass:"img_box",attrs:{to:{path:"/img",query:{id:t.detaiList.SerialID}}}},[a("img",{attrs:{src:t.detaiList.CoverPhoto}}),t._v(" "),a("span",{staticClass:"imgs"},[t._v(t._s(t.detaiList.pic_group_count)+"张图片")])]),t._v(" "),a("div",{staticClass:"des_box"},[a("div",{staticClass:"left"},[a("span",{staticClass:"prices"},[t._v(t._s(t.detaiList.market_attribute&&t.detaiList.market_attribute.dealer_price))]),t._v(" "),a("p",[t._v("指导价"+t._s(t.detaiList.market_attribute&&t.detaiList.market_attribute.official_refer_price))])]),t._v(" "),a("router-link",{staticClass:"right",attrs:{to:"/follor"}},[a("span",[t._v(t._s(t.detaiList.BottomEntranceTitle))])])],1),t._v(" "),a("section",[a("div",{staticClass:"type_box"},t._l(t.years,function(e,s){return a("span",{key:s,class:t.currentYear==e?"active":"",on:{click:function(a){t.changeYear(e)}}},[t._v(t._s(e))])})),t._v(" "),a("div",{staticClass:"list_box"},t._l(t.lists,function(e,s){return a("ul",{key:s},[a("h6",[t._v(t._s(s))]),t._v(" "),t._l(e,function(e,s){return a("li",{key:s,staticClass:"box"},[a("p",[t._v(t._s(e.market_attribute.year+"款 "+e.car_name))]),t._v(" "),a("span",[t._v(t._s(e.max_power+"马力"+e.gear_num+"档"+e.trans_type))]),t._v(" "),a("p",{staticClass:"price_box"},[a("span",[t._v("指导价"+t._s(""+e.market_attribute.dealer_price_min))]),t._v(" "),a("span",{staticClass:"color"},[t._v(t._s(e.market_attribute.official_refer_price))])]),t._v(" "),a("p",{staticClass:"float_box"},[t._v("询问底价")])])})],2)}))]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",[this._v("询问底价")]),this._v(" "),e("span",[this._v("本地经销商为你报价")])])}]};var c=a("VU/8")(n,_,!1,function(t){a("XxHS")},"data-v-51d789f6",null);e.default=c.exports}});
//# sourceMappingURL=5.a865c2ab2421a39951e4.js.map