(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/transaction/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/transaction/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      btnLoading: false,
      itemtypeOrder: [{
        id: 0,
        name: "Via Shop"
      }, {
        id: 1,
        name: "Via Ojol"
      }],
      search: '',
      headers: [{
        text: 'No Inv',
        align: 'left',
        value: 'no_invoice'
      }, {
        text: 'Table',
        align: 'left',
        value: 'table_name'
      }, {
        text: 'Total',
        align: 'left',
        value: 'total'
      }, {
        text: 'Type Order',
        align: 'left',
        value: 'type_order'
      }, {
        text: 'Created',
        align: 'left',
        value: 'created_at'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      itembreadcrumbs: [{
        text: 'Dashboard',
        disabled: false,
        href: 'dashboard'
      }, {
        text: 'Transactions',
        disabled: true,
        href: 'transaction'
      }],
      Mdl_TableNameHead: 0,
      Mdl_TableTotalHead: 0,
      editedIndex: -1,
      deleteIndex: -1,
      editedItem: {},
      defaultItem: {},
      dialog: false,
      dialogDelete: false
    };
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.loadListTransactions();
  },
  methods: {
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    filterByTypeOrder: function filterByTypeOrder(val) {
      console.log(val); //this.$store.dispatch('book/ACT_GETBYAUTHORID', {id:val})
    },
    loadListTransactions: function loadListTransactions() {
      this.$store.dispatch('transaction/ACT_LOADTRANSACTIONS');
    },
    showItem: function showItem(item) {
      var _this = this;

      this.$store.dispatch('transaction/ACT_LOAD_DETAILTRANSACTION', item.id).then(function (res) {
        _this.dialog = true;
        _this.editedItem = Object.assign({}, res);
        _this.Mdl_TableTotalHead = item.total;
        _this.Mdl_TableNameHead = item.table_name;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      this.btnLoading = false;
      setTimeout(function () {
        _this2.TotalHead = 0;
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      }, 300);
    }
  },
  computed: {
    itemListTransactions: function itemListTransactions() {
      return this.$store.state.transaction.listtransactions;
    },
    formTitle: function formTitle() {
      return 'Detail Transaction';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/transaction/Index.vue?vue&type=template&id=107f13a8&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/transaction/Index.vue?vue&type=template&id=107f13a8& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "v-layout",
            { attrs: { column: "" } },
            [
              _c("div", { staticClass: "app-page-title grey lighten-4" }, [
                _c("div", { staticClass: "page-title-wrapper" }, [
                  _c("div", { staticClass: "page-title-heading" }, [
                    _c(
                      "div",
                      { staticClass: "page-title-icon" },
                      [
                        _c("v-img", {
                          attrs: {
                            src:
                              "https://cdn.vuetifyjs.com/images/logos/logo.svg",
                            alt: "Vuetify"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        "\n                            Transactions\n                            "
                      ),
                      _c("div", { staticClass: "page-title-subheading" }, [
                        _c(
                          "div",
                          { staticClass: "breadcrumbs" },
                          [
                            _c("v-breadcrumbs", {
                              staticStyle: { padding: "0" },
                              attrs: { items: _vm.itembreadcrumbs },
                              scopedSlots: _vm._u([
                                {
                                  key: "item",
                                  fn: function(props) {
                                    return [
                                      _c(
                                        "v-breadcrumbs-item",
                                        {
                                          class: [
                                            props.item.disabled && "disabled"
                                          ],
                                          attrs: {
                                            to: { name: props.item.href }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                props.item.text.toUpperCase()
                                              ) +
                                              "\n                                        "
                                          )
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ])
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v(
                        "\n                    List Transactions\n                    "
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.itemtypeOrder,
                              label: "Filter by type order",
                              "item-text": "name",
                              "item-value": "id"
                            },
                            on: { change: _vm.filterByTypeOrder }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "append-icon": "search",
                              label: "Search",
                              "single-line": "",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.search,
                              callback: function($$v) {
                                _vm.search = $$v
                              },
                              expression: "search"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.itemListTransactions,
                      search: _vm.search
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.type_order",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            item.type_order == 0
                              ? _c(
                                  "v-chip",
                                  {
                                    staticClass: "ma-2",
                                    attrs: {
                                      color: "orange darken-4",
                                      "text-color": "white",
                                      small: ""
                                    }
                                  },
                                  [_c("strong", [_vm._v("Via Shop")])]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            item.type_order == 1
                              ? _c(
                                  "v-chip",
                                  {
                                    staticClass: "ma-2",
                                    attrs: {
                                      color: "green",
                                      "text-color": "white",
                                      small: ""
                                    }
                                  },
                                  [_c("strong", [_vm._v("Via Ojol")])]
                                )
                              : _vm._e()
                          ]
                        }
                      },
                      {
                        key: "item.total",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.formatPrice(item.total)) +
                                "\n                    "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.action",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-icon",
                              {
                                staticClass: "mr-2",
                                attrs: { small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.showItem(item)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            edit\n                        "
                                )
                              ]
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "800px" },
                      model: {
                        value: _vm.dialog,
                        callback: function($$v) {
                          _vm.dialog = $$v
                        },
                        expression: "dialog"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v(_vm._s(_vm.formTitle))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: { cols: "6", sm: "6", md: "6" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "No Invoice",
                                              readonly: "readonly"
                                            },
                                            model: {
                                              value: _vm.editedItem.no_invoice,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.editedItem,
                                                  "no_invoice",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "editedItem.no_invoice"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: { cols: "6", sm: "6", md: "6" }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Table Name",
                                              readonly: "readonly"
                                            },
                                            model: {
                                              value: _vm.Mdl_TableNameHead,
                                              callback: function($$v) {
                                                _vm.Mdl_TableNameHead = $$v
                                              },
                                              expression: "Mdl_TableNameHead"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "12",
                                            md: "12"
                                          }
                                        },
                                        [
                                          _c("v-simple-table", {
                                            attrs: {
                                              "fixed-header": "",
                                              height: "280px"
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "default",
                                                fn: function() {
                                                  return [
                                                    _c("thead", [
                                                      _c("tr", [
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left"
                                                          },
                                                          [_vm._v("Name")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left"
                                                          },
                                                          [_vm._v("Price")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left"
                                                          },
                                                          [_vm._v("Qty")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "text-left"
                                                          },
                                                          [_vm._v("Sub Total")]
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "tbody",
                                                      [
                                                        _vm._l(
                                                          _vm.editedItem.data,
                                                          function(item) {
                                                            return _c(
                                                              "tr",
                                                              { key: item.id },
                                                              [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.name
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "text-right"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.formatPrice(
                                                                          item.price
                                                                        )
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "text-left"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.qty
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticClass:
                                                                      "text-right"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.formatPrice(
                                                                          item.sub_total
                                                                        )
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          }
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tr",
                                                          {
                                                            staticStyle: {
                                                              "background-color":
                                                                "#eee"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "td",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                attrs: {
                                                                  colspan: "2"
                                                                }
                                                              },
                                                              [_vm._v("Total")]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              {
                                                                staticClass:
                                                                  "text-right",
                                                                attrs: {
                                                                  colspan: "2"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.formatPrice(
                                                                      _vm.Mdl_TableTotalHead
                                                                    )
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      2
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ])
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: { click: _vm.close }
                                },
                                [_vm._v("Close")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/transaction/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/transaction/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_107f13a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=107f13a8& */ "./resources/js/pages/transaction/Index.vue?vue&type=template&id=107f13a8&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/transaction/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_107f13a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_107f13a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/transaction/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/transaction/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/transaction/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/transaction/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/transaction/Index.vue?vue&type=template&id=107f13a8&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/transaction/Index.vue?vue&type=template&id=107f13a8& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_107f13a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=107f13a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/transaction/Index.vue?vue&type=template&id=107f13a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_107f13a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_107f13a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);