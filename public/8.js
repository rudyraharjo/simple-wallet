(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/supportojol/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/supportojol/Index.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      btnLoading: false,
      itemTemp: [],
      search: '',
      headers: [{
        text: 'Nama',
        align: 'left',
        value: 'name'
      }, {
        text: 'Persentase (%)',
        align: 'left',
        value: 'persentase'
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
        text: 'Dukukangan Ojek Online',
        disabled: true,
        href: 'supportojol'
      }],
      editedIndex: -1,
      deleteIndex: -1,
      editedItem: {
        name: '',
        persentase: 1000,
        id: 1
      },
      defaultItem: {
        name: '',
        price: 1000,
        id: 1
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
    this.loadOjeks();
  },
  methods: {
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    loadOjeks: function loadOjeks(url) {
      url = url || 'support-ojol/list';
      this.$store.dispatch('supportonline/ACT_LOADSUPPORTONLINES', url);
    },
    save: function save() {
      var _this = this;

      this.btnLoading = true;

      if (this.editedIndex > -1) {
        this.$store.dispatch('supportonline/ACT_UPDATE', this.editedItem).then(function (res) {
          toast.fire({
            type: 'success',
            title: "Success Updated Dukungan Ojek Online"
          });
        })["catch"](function (err) {
          toast.fire({
            type: 'error',
            title: err
          });
        })["finally"](function () {
          _this.btnLoading = false;

          _this.close();
        });
      } else {
        this.$store.dispatch('supportonline/ACT_SAVE', this.editedItem).then(function (res) {
          toast.fire({
            type: 'success',
            title: "Success Created Ojeks"
          });
        })["catch"](function (err) {
          toast.fire({
            type: 'error',
            title: err
          });
        })["finally"](function () {
          _this.btnLoading = false;

          _this.close();
        });
      }
    },
    addItem: function addItem() {
      this.dialog = true;
    },
    editItem: function editItem(item) {
      this.editedIndex = this.itemOjeks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item, value) {
      var _this2 = this;

      var deleteIndex = this.itemOjeks.indexOf(item);
      this.itemTemp = item;

      if (value == "ok") {
        this.btnLoading = true;
        this.$store.dispatch('menucategories/ACT_DELETED', {
          index: deleteIndex,
          id: item.id
        }).then(function (res) {
          toast.fire({
            type: 'success',
            title: "Success Deleted menu categories"
          });
        })["catch"](function (err) {
          toast.fire({
            type: 'error',
            title: err
          });
        })["finally"](function () {
          _this2.btnLoading = false;
          _this2.dialogDelete = false;

          _this2.close();
        });
      } else {
        this.dialogDelete = true;
      }
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.btnLoading = false;
      setTimeout(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      }, 300);
    }
  },
  computed: {
    itemOjeks: function itemOjeks() {
      return this.$store.state.supportonline.listsupportonlines;
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Tambah Data' : 'Edit Data';
    },
    formBtnTitle: function formBtnTitle() {
      return this.editedIndex === -1 ? 'Simpan' : 'Update';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/supportojol/Index.vue?vue&type=template&id=5bea22d1&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/supportojol/Index.vue?vue&type=template&id=5bea22d1& ***!
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
                        "\n                            Dukukangan Ojek Online\n                            "
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
                        "\n                    List Ojek Online\n                    "
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
                      items: _vm.itemOjeks,
                      search: _vm.search
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.price",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.formatPrice(item.price)) +
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
                                    return _vm.editItem(item)
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
                      attrs: { persistent: "", "max-width": "600px" },
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
                                            attrs: { label: "Name" },
                                            model: {
                                              value: _vm.editedItem.name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.editedItem,
                                                  "name",
                                                  $$v
                                                )
                                              },
                                              expression: "editedItem.name"
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
                                              type: "number",
                                              label: "Persentase (%)"
                                            },
                                            model: {
                                              value: _vm.editedItem.persentase,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.editedItem,
                                                  "persentase",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "editedItem.persentase"
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

/***/ "./resources/js/pages/supportojol/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/supportojol/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5bea22d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5bea22d1& */ "./resources/js/pages/supportojol/Index.vue?vue&type=template&id=5bea22d1&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/supportojol/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5bea22d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5bea22d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/supportojol/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/supportojol/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/supportojol/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/supportojol/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/supportojol/Index.vue?vue&type=template&id=5bea22d1&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/supportojol/Index.vue?vue&type=template&id=5bea22d1& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5bea22d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5bea22d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/supportojol/Index.vue?vue&type=template&id=5bea22d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5bea22d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5bea22d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);