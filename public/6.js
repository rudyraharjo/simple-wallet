(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/stock_in/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/stock_in/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      btnLoading: false,
      itemTemp: [],
      search: '',
      headers: [{
        text: 'Stock',
        align: 'left',
        value: 'stock_name'
      }, {
        text: 'Qty In',
        align: 'left',
        value: 'qty_trans'
      }, {
        text: 'Qty Awal',
        align: 'left',
        value: 'qty_awal'
      }, {
        text: 'Created',
        align: 'left',
        value: 'created_at'
      } // { text: 'Actions', value: 'action', sortable: false },
      ],
      itembreadcrumbs: [{
        text: 'Dashboard',
        disabled: false,
        href: 'dashboard'
      }, {
        text: 'Stock',
        disabled: true,
        href: 'stock'
      }],
      editedIndex: -1,
      deleteIndex: -1,
      editedItem: {
        id: 0,
        code_stock: "",
        name: "",
        qty_in: 1,
        qty: 0,
        qty_min: 0,
        unit: ""
      },
      defaultItem: {
        id: 1,
        code_stock: "",
        name: "",
        qty: 1,
        qty_min: 1,
        unit: ""
      },
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
    this.loadStoctByUnit();
    this.loadStoctinList();
    this.loadUnits();
  },
  methods: {
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    onChangeInput: function onChangeInput(id) {
      var idx = this.itemStockByunit.map(function (t) {
        return t.id;
      }).indexOf(id);
      this.editedItem = {
        id: this.itemStockByunit[idx].id,
        code_stock: this.itemStockByunit[idx].code_stock,
        name: this.itemStockByunit[idx].name,
        qty_in: 1,
        qty: this.itemStockByunit[idx].qty,
        qty_min: this.itemStockByunit[idx].qty_min,
        unit: this.itemStockByunit[idx].unit_name
      };
    },
    loadStoctinList: function loadStoctinList() {
      var url = url || 'admin/stock-in/list';
      this.$store.dispatch('stock/ACT_LOADSTOCKIN', url);
    },
    loadStoctByUnit: function loadStoctByUnit(url) {
      var _this = this;

      url = url || 'admin/stock/getStoctByUnit';
      this.$store.dispatch('stock/ACT_LOADSTOCKBYUNIT', url).then(function (res) {
        _this.editedItem = {
          id: res[0].id,
          code_stock: res[0].code_stock,
          name: res[0].name,
          qty_in: 1,
          qty: res[0].qty,
          qty_min: res[0].qty_min,
          unit: res[0].unit_name
        };
      })["catch"](function (err) {
        toast.fire({
          type: 'error',
          title: err
        });
      });
    },
    loadUnits: function loadUnits(url) {
      url = url || 'admin/unit/list';
      this.$store.dispatch('unit/ACT_LOADUNITS', url);
    },
    save: function save() {
      var _this2 = this;

      this.btnLoading = true;

      if (this.editedIndex > -1) {// this.$store.dispatch('stock/ACT_UPDATE', this.editedItem)
        // .then(res =>{
        //     toast.fire({
        //         type: 'success',
        //         title: "Success Updated stock"
        //     });
        // })
        // .catch(err => {
        //     toast.fire({
        //         type: 'error',
        //         title: err
        //     });
        // })
        // .finally(()=>{
        //     this.btnLoading = false
        //     this.close()
        // });
      } else {
        this.$store.dispatch('stock/ACT_SAVE_STOCKIN', this.editedItem).then(function (res) {
          toast.fire({
            type: 'success',
            title: "Success Created stockin"
          });
        })["catch"](function (err) {
          toast.fire({
            type: 'error',
            title: err
          });
        })["finally"](function () {
          _this2.btnLoading = false;

          _this2.close();
        });
      }
    },
    addItem: function addItem() {
      this.dialog = true;
    },
    editItem: function editItem(item) {
      console.log(item); // this.editedIndex = this.itemStockByunit.indexOf(item)
      // this.editedItem = Object.assign({}, item)

      this.dialog = true;
    },
    deleteItem: function deleteItem(item, value) {
      var _this3 = this;

      var deleteIndex = this.itemStockByunit.indexOf(item);
      this.itemTemp = item;

      if (value == "ok") {
        this.btnLoading = true;
        this.$store.dispatch('stock/ACT_DELETED', {
          index: deleteIndex,
          id: item.id
        }).then(function (res) {
          toast.fire({
            type: 'success',
            title: "Success Deleted stock"
          });
        })["catch"](function (err) {
          toast.fire({
            type: 'error',
            title: err
          });
        })["finally"](function () {
          _this3.btnLoading = false;
          _this3.dialogDelete = false;

          _this3.close();
        });
      } else {
        this.dialogDelete = true;
      } // confirm('Are you sure you want to delete this item?') && this.itemStockByunit.splice(index, 1)

    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      this.btnLoading = false;
      setTimeout(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      }, 300);
    }
  },
  computed: {
    itemStockin: function itemStockin() {
      return this.$store.state.stock.liststockin;
    },
    itemStockByunit: function itemStockByunit() {
      return this.$store.state.stock.liststockbyunit;
    },
    itemunits: function itemunits() {
      return this.$store.state.unit.listunits;
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Stock In' : 'Edit Data';
    },
    formBtnTitle: function formBtnTitle() {
      return this.editedIndex === -1 ? 'Simpan' : 'Update';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/stock_in/Index.vue?vue&type=template&id=5f4bf37a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/stock_in/Index.vue?vue&type=template&id=5f4bf37a& ***!
  \************************************************************************************************************************************************************************************************************/
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
                        "\n                            Stock In\n                            "
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
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "page-title-actions" }, [
                    _c(
                      "div",
                      { staticClass: "my-2" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mb-2",
                            attrs: { color: "primary", dark: "" },
                            on: {
                              click: function($event) {
                                return _vm.addItem()
                              }
                            }
                          },
                          [
                            _c("v-icon", { attrs: { left: "", dark: "" } }, [
                              _vm._v("mdi-plus-box")
                            ]),
                            _vm._v(" Tambah\n                            ")
                          ],
                          1
                        )
                      ],
                      1
                    )
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
                        " \n                    List Stock In\n                    "
                      ),
                      _c("v-spacer"),
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
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.itemStockin,
                      search: _vm.search
                    }
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
                                          attrs: {
                                            cols: "12",
                                            sm: "4",
                                            md: "3"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              type: "text",
                                              label: "Code Stock",
                                              readonly: "readonly",
                                              filled: ""
                                            },
                                            model: {
                                              value: _vm.editedItem.code_stock,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.editedItem,
                                                  "code_stock",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "editedItem.code_stock"
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
                                            sm: "8",
                                            md: "7"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              "item-text": "name",
                                              "item-value": "id",
                                              items: _vm.itemStockByunit,
                                              label: "list Stock",
                                              required: ""
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.onChangeInput($event)
                                              }
                                            },
                                            model: {
                                              value: _vm.editedItem.id,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.editedItem,
                                                  "id",
                                                  $$v
                                                )
                                              },
                                              expression: "editedItem.id"
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
                                            sm: "4",
                                            md: "2"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              type: "number",
                                              min: "1",
                                              label: "Qty In"
                                            },
                                            model: {
                                              value: _vm.editedItem.qty_in,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.editedItem,
                                                  "qty_in",
                                                  $$v
                                                )
                                              },
                                              expression: "editedItem.qty_in"
                                            }
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
                                [_vm._v("Cancel")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    loading: _vm.btnLoading
                                  },
                                  on: { click: _vm.save }
                                },
                                [_vm._v(_vm._s(_vm.formBtnTitle))]
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
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "290" },
                      model: {
                        value: _vm.dialogDelete,
                        callback: function($$v) {
                          _vm.dialogDelete = $$v
                        },
                        expression: "dialogDelete"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", { staticClass: "headline" }, [
                            _vm._v("Hapus data?")
                          ]),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _vm._v("\n                            Data "),
                            _c("b", [
                              _c("i", [_vm._v(_vm._s(_vm.itemTemp.name))])
                            ]),
                            _vm._v(
                              " akan terhapus permanent apa anda yakin ?\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.dialogDelete = false
                                    }
                                  }
                                },
                                [_vm._v("Cancel")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "green darken-1",
                                    text: "",
                                    loading: _vm.btnLoading
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteItem(_vm.itemTemp, "ok")
                                    }
                                  }
                                },
                                [_vm._v("OK")]
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

/***/ "./resources/js/pages/stock_in/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/stock_in/Index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5f4bf37a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5f4bf37a& */ "./resources/js/pages/stock_in/Index.vue?vue&type=template&id=5f4bf37a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/stock_in/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5f4bf37a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5f4bf37a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/stock_in/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/stock_in/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/stock_in/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/stock_in/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/stock_in/Index.vue?vue&type=template&id=5f4bf37a&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/stock_in/Index.vue?vue&type=template&id=5f4bf37a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5f4bf37a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5f4bf37a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/stock_in/Index.vue?vue&type=template&id=5f4bf37a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5f4bf37a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5f4bf37a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);