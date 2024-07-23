"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abi */ \"(app-pages-browser)/./src/app/abi.js\");\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_abi__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Smart Contract ABI (Application Binary Interface)\nconst contractAddress = \"0x8a0BddD02048E858c95ED608F58a6Ab789D128Fb\";\nfunction Home() {\n    _s();\n    // general\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // inputs\n    const [valueCarInfo, setValueCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID, setValueCarID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID2, setValueCarID2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //for owner\n    // logging\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // state values\n    const [carInfo, setCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ownerInfo, setOwnerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const init = async ()=>{\n            if (window.ethereum) {\n                try {\n                    // Create Web3 instance with the MetaMask provider\n                    const web3Instance = new web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"](window.ethereum);\n                    setWeb3(web3Instance);\n                    // Request account access\n                    const accounts = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    setAccount(accounts[0]);\n                    // Create contract instance\n                    const contractInstance = new web3Instance.eth.Contract((_abi__WEBPACK_IMPORTED_MODULE_3___default()), contractAddress);\n                    setContract(contractInstance);\n                    // Check network\n                    const networkId = await web3Instance.eth.net.getId();\n                    console.log(\"Network ID:\", networkId); // Ensure this matches your network\n                    setStatus(\"Connected to network\");\n                } catch (error) {\n                    console.error(\"Initialization error:\", error);\n                    setStatus(\"Initialization error: \" + error.message);\n                }\n            } else {\n                setStatus(\"MetaMask not detected\");\n            }\n        };\n        init();\n    }, []);\n    // Helper function to poll for the transaction receipt with enhanced error handling\n    const waitForReceipt = async (web3, txHash)=>{\n        const interval = 2000; // Polling interval in milliseconds\n        while(true){\n            try {\n                const receipt = await web3.eth.getTransactionReceipt(txHash);\n                if (receipt) {\n                    return receipt;\n                }\n                // Poll every 2 seconds\n                await new Promise((resolve)=>setTimeout(resolve, interval));\n            } catch (error) {\n                console.error(\"Receipt polling error:\", error);\n                throw new Error(\"Receipt polling failed\");\n            }\n        }\n    };\n    const mintCar = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                console.log(valueCarInfo);\n                const tx = await contract.methods.mintCar(account, valueCarInfo).send({\n                    from: account\n                });\n                // Poll for the transaction receipt\n                const receipt = await waitForReceipt(web3, tx.transactionHash);\n                if (receipt.status) {\n                    setStatus(\"Transaction successful!\");\n                } else {\n                    setStatus(\"Transaction failed!\");\n                }\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const findInfo = async (type)=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                let result = -1;\n                if (type === \"car\") {\n                    result = await contract.methods.getCarInfo(valueCarID).call();\n                    setCarInfo(result);\n                } else if (type === \"owner\") {\n                    result = await contract.methods.getOwnerInfo(valueCarID2).call();\n                    setOwnerInfo(result);\n                }\n                setStatus(\"Value retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Car Ownership\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarInfo,\n                        onChange: (e)=>setValueCarInfo(e.target.value),\n                        placeholder: \"model number\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: mintCar,\n                        children: \"Mint a Car\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID,\n                        onChange: (e)=>setValueCarID(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"car\"),\n                        children: \"Check Car Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID2,\n                        onChange: (e)=>setValueCarID2(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"owner\"),\n                        children: \"Check Owner Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueWallet,\n                        onChange: (e)=>setValueWallet(e.target.value),\n                        placeholder: \"wallet address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>getOwnerCars(),\n                        children: \"Check Owner Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 167,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: status\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"wFCLloWq0yeLl5g6OxqsXKfqlGo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDL0NJLGFBQVk7Ozs7OztrQ0FFaEIsOERBQUNDO3dCQUFPQyxTQUFTdkI7a0NBQVM7Ozs7Ozs7Ozs7OzswQkFFNUIsOERBQUNZOztrQ0FDQyw4REFBQ0k7d0JBQ0dULE1BQUs7d0JBQ0xVLE9BQU9yRDt3QkFDUHNELFVBQVUsQ0FBQ0MsSUFBTXRELGNBQWNzRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzdDSSxhQUFZOzs7Ozs7a0NBRWhCLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNakIsU0FBUztrQ0FBUTs7Ozs7Ozs7Ozs7OzBCQUUxQyw4REFBQ007O2tDQUNDLDhEQUFDSTt3QkFDR1QsTUFBSzt3QkFDTFUsT0FBT25EO3dCQUNQb0QsVUFBVSxDQUFDQyxJQUFNcEQsZUFBZW9ELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDOUNJLGFBQVk7Ozs7OztrQ0FFaEIsOERBQUNDO3dCQUFPQyxTQUFTLElBQU1qQixTQUFTO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBRTVDLDhEQUFDTTs7a0NBQ0MsOERBQUNJO3dCQUNHVCxNQUFLO3dCQUNMVSxPQUFPTzt3QkFDUE4sVUFBVSxDQUFDQyxJQUFNTSxlQUFlTixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzlDSSxhQUFZOzs7Ozs7a0NBRWhCLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNRztrQ0FBZ0I7Ozs7Ozs7Ozs7OzswQkFFekMsOERBQUNDOzBCQUFHM0Q7Ozs7Ozs7Ozs7OztBQUdWO0dBakt3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29udHJhY3RBQkkgZnJvbSAnLi9hYmknO1xuXG4vLyBTbWFydCBDb250cmFjdCBBQkkgKEFwcGxpY2F0aW9uIEJpbmFyeSBJbnRlcmZhY2UpXG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweDhhMEJkZEQwMjA0OEU4NThjOTVFRDYwOEY1OGE2QWI3ODlEMTI4RmInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBnZW5lcmFsXG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBpbnB1dHNcbiAgY29uc3QgW3ZhbHVlQ2FySW5mbywgc2V0VmFsdWVDYXJJbmZvXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZhbHVlQ2FySUQsIHNldFZhbHVlQ2FySURdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdmFsdWVDYXJJRDIsIHNldFZhbHVlQ2FySUQyXSA9IHVzZVN0YXRlKCcnKTsgLy9mb3Igb3duZXJcblxuICAvLyBsb2dnaW5nXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gc3RhdGUgdmFsdWVzXG4gIGNvbnN0IFtjYXJJbmZvLCBzZXRDYXJJbmZvXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW293bmVySW5mbywgc2V0T3duZXJJbmZvXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIFdlYjMgaW5zdGFuY2Ugd2l0aCB0aGUgTWV0YU1hc2sgcHJvdmlkZXJcbiAgICAgICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcblxuICAgICAgICAgIC8vIFJlcXVlc3QgYWNjb3VudCBhY2Nlc3NcbiAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG5cbiAgICAgICAgICAvLyBDcmVhdGUgY29udHJhY3QgaW5zdGFuY2VcbiAgICAgICAgICBjb25zdCBjb250cmFjdEluc3RhbmNlID0gbmV3IHdlYjNJbnN0YW5jZS5ldGguQ29udHJhY3QoY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICAgICAgc2V0Q29udHJhY3QoY29udHJhY3RJbnN0YW5jZSk7XG5cbiAgICAgICAgICAvLyBDaGVjayBuZXR3b3JrXG4gICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViM0luc3RhbmNlLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTmV0d29yayBJRDonLCBuZXR3b3JrSWQpOyAvLyBFbnN1cmUgdGhpcyBtYXRjaGVzIHlvdXIgbmV0d29ya1xuXG4gICAgICAgICAgc2V0U3RhdHVzKCdDb25uZWN0ZWQgdG8gbmV0d29yaycpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luaXRpYWxpemF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICBzZXRTdGF0dXMoJ0luaXRpYWxpemF0aW9uIGVycm9yOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0YXR1cygnTWV0YU1hc2sgbm90IGRldGVjdGVkJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGluaXQoKTtcbiAgfSwgW10pO1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBwb2xsIGZvciB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdCB3aXRoIGVuaGFuY2VkIGVycm9yIGhhbmRsaW5nXG4gIGNvbnN0IHdhaXRGb3JSZWNlaXB0ID0gYXN5bmMgKHdlYjMsIHR4SGFzaCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gMjAwMDsgLy8gUG9sbGluZyBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHdlYjMuZXRoLmdldFRyYW5zYWN0aW9uUmVjZWlwdCh0eEhhc2gpO1xuICAgICAgICBpZiAocmVjZWlwdCkge1xuICAgICAgICAgIHJldHVybiByZWNlaXB0O1xuICAgICAgICB9XG4gICAgICAgIC8vIFBvbGwgZXZlcnkgMiBzZWNvbmRzXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGludGVydmFsKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXB0IHBvbGxpbmcgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlY2VpcHQgcG9sbGluZyBmYWlsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbWludENhciA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAod2ViMyAmJiBjb250cmFjdCAmJiBhY2NvdW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRTdGF0dXMoJ1NlbmRpbmcgdHJhbnNhY3Rpb24uLi4nKTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVDYXJJbmZvKTtcbiAgICAgICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLm1pbnRDYXIoYWNjb3VudCwgdmFsdWVDYXJJbmZvKS5zZW5kKHsgZnJvbTogYWNjb3VudCB9KTtcblxuICAgICAgICAvLyBQb2xsIGZvciB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgd2FpdEZvclJlY2VpcHQod2ViMywgdHgudHJhbnNhY3Rpb25IYXNoKTtcbiAgICAgICAgaWYgKHJlY2VpcHQuc3RhdHVzKSB7XG4gICAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBzdWNjZXNzZnVsIScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkIScpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2FjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cygnV2ViMyBvciBjb250cmFjdCBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluZEluZm8gPSBhc3luYyAodHlwZSkgPT4ge1xuICAgIGlmICh3ZWIzICYmIGNvbnRyYWN0ICYmIGFjY291bnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldFN0YXR1cygnU2VuZGluZyB0cmFuc2FjdGlvbi4uLicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IC0xO1xuICAgICAgICBcbiAgICAgICAgaWYodHlwZSA9PT0gXCJjYXJcIikge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0Q2FySW5mbyh2YWx1ZUNhcklEKS5jYWxsKCk7XG5cbiAgICAgICAgICBzZXRDYXJJbmZvKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09PSBcIm93bmVyXCIpIHtcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldE93bmVySW5mbyh2YWx1ZUNhcklEMikuY2FsbCgpO1xuXG4gICAgICAgICAgc2V0T3duZXJJbmZvKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdGF0dXMoJ1ZhbHVlIHJldHJpZXZlZCBzdWNjZXNzZnVsbHkhICgnICsgcmVzdWx0ICsgJyknKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zYWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBmYWlsZWQ6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdHVzKCdXZWIzIG9yIGNvbnRyYWN0IG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxuICAgICAgPGgxPkNhciBPd25lcnNoaXA8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZUNhckluZm99XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlQ2FySW5mbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1vZGVsIG51bWJlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttaW50Q2FyfT5NaW50IGEgQ2FyPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVDYXJJRH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVDYXJJRChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhciBJRFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kSW5mbyhcImNhclwiKX0+Q2hlY2sgQ2FyIEluZm88L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZUNhcklEMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVDYXJJRDIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjYXIgSURcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZmluZEluZm8oXCJvd25lclwiKX0+Q2hlY2sgT3duZXIgSW5mbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlV2FsbGV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZVdhbGxldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIndhbGxldCBhZGRyZXNzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE93bmVyQ2FycygpfT5DaGVjayBPd25lciBJbmZvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPntzdGF0dXN9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIldlYjMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiSG9tZSIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwidmFsdWVDYXJJbmZvIiwic2V0VmFsdWVDYXJJbmZvIiwidmFsdWVDYXJJRCIsInNldFZhbHVlQ2FySUQiLCJ2YWx1ZUNhcklEMiIsInNldFZhbHVlQ2FySUQyIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiY2FySW5mbyIsInNldENhckluZm8iLCJvd25lckluZm8iLCJzZXRPd25lckluZm8iLCJpbml0Iiwid2luZG93IiwiZXRoZXJldW0iLCJ3ZWIzSW5zdGFuY2UiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJjb250cmFjdEluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJuZXR3b3JrSWQiLCJuZXQiLCJnZXRJZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJ3YWl0Rm9yUmVjZWlwdCIsInR4SGFzaCIsImludGVydmFsIiwicmVjZWlwdCIsImdldFRyYW5zYWN0aW9uUmVjZWlwdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkVycm9yIiwibWludENhciIsInR4IiwibWV0aG9kcyIsInNlbmQiLCJmcm9tIiwidHJhbnNhY3Rpb25IYXNoIiwiZmluZEluZm8iLCJ0eXBlIiwicmVzdWx0IiwiZ2V0Q2FySW5mbyIsImNhbGwiLCJnZXRPd25lckluZm8iLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciLCJoMSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWx1ZVdhbGxldCIsInNldFZhbHVlV2FsbGV0IiwiZ2V0T3duZXJDYXJzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});