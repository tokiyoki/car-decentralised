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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abi */ \"(app-pages-browser)/./src/app/abi.js\");\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_abi__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Smart Contract ABI (Application Binary Interface)\nconst contractAddress = \"0x8a0BddD02048E858c95ED608F58a6Ab789D128Fb\";\nfunction Home() {\n    _s();\n    // general\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // inputs\n    const [valueCarInfo, setValueCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID, setValueCarID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID2, setValueCarID2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //for owner\n    const [valueWallet, setValueWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // logging\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // state values\n    const [carInfo, setCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ownerInfo, setOwnerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const init = async ()=>{\n            if (window.ethereum) {\n                try {\n                    // Create Web3 instance with the MetaMask provider\n                    const web3Instance = new web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"](window.ethereum);\n                    setWeb3(web3Instance);\n                    // Request account access\n                    const accounts = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    setAccount(accounts[0]);\n                    // Create contract instance\n                    const contractInstance = new web3Instance.eth.Contract((_abi__WEBPACK_IMPORTED_MODULE_3___default()), contractAddress);\n                    setContract(contractInstance);\n                    // Check network\n                    const networkId = await web3Instance.eth.net.getId();\n                    console.log(\"Network ID:\", networkId); // Ensure this matches your network\n                    setStatus(\"Connected to network\");\n                } catch (error) {\n                    console.error(\"Initialization error:\", error);\n                    setStatus(\"Initialization error: \" + error.message);\n                }\n            } else {\n                setStatus(\"MetaMask not detected\");\n            }\n        };\n        init();\n    }, []);\n    // Helper function to poll for the transaction receipt with enhanced error handling\n    const waitForReceipt = async (web3, txHash)=>{\n        const interval = 2000; // Polling interval in milliseconds\n        while(true){\n            try {\n                const receipt = await web3.eth.getTransactionReceipt(txHash);\n                if (receipt) {\n                    return receipt;\n                }\n                // Poll every 2 seconds\n                await new Promise((resolve)=>setTimeout(resolve, interval));\n            } catch (error) {\n                console.error(\"Receipt polling error:\", error);\n                throw new Error(\"Receipt polling failed\");\n            }\n        }\n    };\n    const mintCar = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                console.log(valueCarInfo);\n                const tx = await contract.methods.mintCar(account, valueCarInfo).send({\n                    from: account\n                });\n                // Poll for the transaction receipt\n                const receipt = await waitForReceipt(web3, tx.transactionHash);\n                if (receipt.status) {\n                    setStatus(\"Transaction successful!\");\n                } else {\n                    setStatus(\"Transaction failed!\");\n                }\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const findInfo = async (type)=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                let result = -1;\n                if (type === \"car\") {\n                    result = await contract.methods.getCarInfo(valueCarID).call();\n                    setCarInfo(result);\n                } else if (type === \"owner\") {\n                    result = await contract.methods.getOwnerInfo(valueCarID2).call();\n                    setOwnerInfo(result);\n                }\n                setStatus(\"Value retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const getOwnerCars = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                const result = await contract.methods.getOwnerCars().send({\n                    from: valueWallet\n                });\n                setStatus(\"Values retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Car Ownership\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarInfo,\n                        onChange: (e)=>setValueCarInfo(e.target.value),\n                        placeholder: \"model number\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: mintCar,\n                        children: \"Mint a Car\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID,\n                        onChange: (e)=>setValueCarID(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"car\"),\n                        children: \"Check Car Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 167,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID2,\n                        onChange: (e)=>setValueCarID2(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"owner\"),\n                        children: \"Check Owner Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 176,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueWallet,\n                        onChange: (e)=>setValueWallet(e.target.value),\n                        placeholder: \"wallet address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>getOwnerCars(),\n                        children: \"Get owned cars\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 185,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: status\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 187,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"McqJQm4z+uniMJcqJLto2kn7vhg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVk7Ozs7OztrQ0FFaEIsOERBQUNDO3dCQUFPQyxTQUFTLElBQU1aO2tDQUFnQjs7Ozs7Ozs7Ozs7OzBCQUV6Qyw4REFBQ2E7MEJBQUd6RDs7Ozs7Ozs7Ozs7O0FBR1Y7R0FuTHdCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjb250cmFjdEFCSSBmcm9tICcuL2FiaSc7XG5cbi8vIFNtYXJ0IENvbnRyYWN0IEFCSSAoQXBwbGljYXRpb24gQmluYXJ5IEludGVyZmFjZSlcblxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4OGEwQmRkRDAyMDQ4RTg1OGM5NUVENjA4RjU4YTZBYjc4OUQxMjhGYic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIGdlbmVyYWxcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIGlucHV0c1xuICBjb25zdCBbdmFsdWVDYXJJbmZvLCBzZXRWYWx1ZUNhckluZm9dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdmFsdWVDYXJJRCwgc2V0VmFsdWVDYXJJRF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWx1ZUNhcklEMiwgc2V0VmFsdWVDYXJJRDJdID0gdXNlU3RhdGUoJycpOyAvL2ZvciBvd25lclxuICBjb25zdCBbdmFsdWVXYWxsZXQsIHNldFZhbHVlV2FsbGV0XSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBsb2dnaW5nXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gc3RhdGUgdmFsdWVzXG4gIGNvbnN0IFtjYXJJbmZvLCBzZXRDYXJJbmZvXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW293bmVySW5mbywgc2V0T3duZXJJbmZvXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIFdlYjMgaW5zdGFuY2Ugd2l0aCB0aGUgTWV0YU1hc2sgcHJvdmlkZXJcbiAgICAgICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgIHNldFdlYjMod2ViM0luc3RhbmNlKTtcblxuICAgICAgICAgIC8vIFJlcXVlc3QgYWNjb3VudCBhY2Nlc3NcbiAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG5cbiAgICAgICAgICAvLyBDcmVhdGUgY29udHJhY3QgaW5zdGFuY2VcbiAgICAgICAgICBjb25zdCBjb250cmFjdEluc3RhbmNlID0gbmV3IHdlYjNJbnN0YW5jZS5ldGguQ29udHJhY3QoY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICAgICAgc2V0Q29udHJhY3QoY29udHJhY3RJbnN0YW5jZSk7XG5cbiAgICAgICAgICAvLyBDaGVjayBuZXR3b3JrXG4gICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViM0luc3RhbmNlLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTmV0d29yayBJRDonLCBuZXR3b3JrSWQpOyAvLyBFbnN1cmUgdGhpcyBtYXRjaGVzIHlvdXIgbmV0d29ya1xuXG4gICAgICAgICAgc2V0U3RhdHVzKCdDb25uZWN0ZWQgdG8gbmV0d29yaycpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luaXRpYWxpemF0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICBzZXRTdGF0dXMoJ0luaXRpYWxpemF0aW9uIGVycm9yOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0YXR1cygnTWV0YU1hc2sgbm90IGRldGVjdGVkJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGluaXQoKTtcbiAgfSwgW10pO1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBwb2xsIGZvciB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdCB3aXRoIGVuaGFuY2VkIGVycm9yIGhhbmRsaW5nXG4gIGNvbnN0IHdhaXRGb3JSZWNlaXB0ID0gYXN5bmMgKHdlYjMsIHR4SGFzaCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gMjAwMDsgLy8gUG9sbGluZyBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHdlYjMuZXRoLmdldFRyYW5zYWN0aW9uUmVjZWlwdCh0eEhhc2gpO1xuICAgICAgICBpZiAocmVjZWlwdCkge1xuICAgICAgICAgIHJldHVybiByZWNlaXB0O1xuICAgICAgICB9XG4gICAgICAgIC8vIFBvbGwgZXZlcnkgMiBzZWNvbmRzXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGludGVydmFsKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXB0IHBvbGxpbmcgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlY2VpcHQgcG9sbGluZyBmYWlsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbWludENhciA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAod2ViMyAmJiBjb250cmFjdCAmJiBhY2NvdW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRTdGF0dXMoJ1NlbmRpbmcgdHJhbnNhY3Rpb24uLi4nKTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVDYXJJbmZvKTtcbiAgICAgICAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLm1pbnRDYXIoYWNjb3VudCwgdmFsdWVDYXJJbmZvKS5zZW5kKHsgZnJvbTogYWNjb3VudCB9KTtcblxuICAgICAgICAvLyBQb2xsIGZvciB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgd2FpdEZvclJlY2VpcHQod2ViMywgdHgudHJhbnNhY3Rpb25IYXNoKTtcbiAgICAgICAgaWYgKHJlY2VpcHQuc3RhdHVzKSB7XG4gICAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBzdWNjZXNzZnVsIScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkIScpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2FjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cygnV2ViMyBvciBjb250cmFjdCBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluZEluZm8gPSBhc3luYyAodHlwZSkgPT4ge1xuICAgIGlmICh3ZWIzICYmIGNvbnRyYWN0ICYmIGFjY291bnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldFN0YXR1cygnU2VuZGluZyB0cmFuc2FjdGlvbi4uLicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VsdCA9IC0xO1xuICAgICAgICBcbiAgICAgICAgaWYodHlwZSA9PT0gXCJjYXJcIikge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0Q2FySW5mbyh2YWx1ZUNhcklEKS5jYWxsKCk7XG5cbiAgICAgICAgICBzZXRDYXJJbmZvKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09PSBcIm93bmVyXCIpIHtcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldE93bmVySW5mbyh2YWx1ZUNhcklEMikuY2FsbCgpO1xuXG4gICAgICAgICAgc2V0T3duZXJJbmZvKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdGF0dXMoJ1ZhbHVlIHJldHJpZXZlZCBzdWNjZXNzZnVsbHkhICgnICsgcmVzdWx0ICsgJyknKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zYWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBmYWlsZWQ6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdHVzKCdXZWIzIG9yIGNvbnRyYWN0IG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRPd25lckNhcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdlYjMgJiYgY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0U3RhdHVzKCdTZW5kaW5nIHRyYW5zYWN0aW9uLi4uJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldE93bmVyQ2FycygpLnNlbmQoe2Zyb206IHZhbHVlV2FsbGV0fSk7XG5cbiAgICAgICAgc2V0U3RhdHVzKCdWYWx1ZXMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSEgKCcgKyByZXN1bHQgKyAnKScpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVHJhbnNhY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBzZXRTdGF0dXMoJ1RyYW5zYWN0aW9uIGZhaWxlZDogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoJ1dlYjMgb3IgY29udHJhY3Qgbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICA8aDE+Q2FyIE93bmVyc2hpcDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlQ2FySW5mb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVDYXJJbmZvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibW9kZWwgbnVtYmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21pbnRDYXJ9Pk1pbnQgYSBDYXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZUNhcklEfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZUNhcklEKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2FyIElEXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRJbmZvKFwiY2FyXCIpfT5DaGVjayBDYXIgSW5mbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlQ2FySUQyfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZUNhcklEMihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhciBJRFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kSW5mbyhcIm93bmVyXCIpfT5DaGVjayBPd25lciBJbmZvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVXYWxsZXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlV2FsbGV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwid2FsbGV0IGFkZHJlc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0T3duZXJDYXJzKCl9PkdldCBvd25lZCBjYXJzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPntzdGF0dXN9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIldlYjMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiSG9tZSIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwidmFsdWVDYXJJbmZvIiwic2V0VmFsdWVDYXJJbmZvIiwidmFsdWVDYXJJRCIsInNldFZhbHVlQ2FySUQiLCJ2YWx1ZUNhcklEMiIsInNldFZhbHVlQ2FySUQyIiwidmFsdWVXYWxsZXQiLCJzZXRWYWx1ZVdhbGxldCIsInN0YXR1cyIsInNldFN0YXR1cyIsImNhckluZm8iLCJzZXRDYXJJbmZvIiwib3duZXJJbmZvIiwic2V0T3duZXJJbmZvIiwiaW5pdCIsIndpbmRvdyIsImV0aGVyZXVtIiwid2ViM0luc3RhbmNlIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29udHJhY3RJbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwibmV0d29ya0lkIiwibmV0IiwiZ2V0SWQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwid2FpdEZvclJlY2VpcHQiLCJ0eEhhc2giLCJpbnRlcnZhbCIsInJlY2VpcHQiLCJnZXRUcmFuc2FjdGlvblJlY2VpcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJFcnJvciIsIm1pbnRDYXIiLCJ0eCIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsInRyYW5zYWN0aW9uSGFzaCIsImZpbmRJbmZvIiwidHlwZSIsInJlc3VsdCIsImdldENhckluZm8iLCJjYWxsIiwiZ2V0T3duZXJJbmZvIiwiZ2V0T3duZXJDYXJzIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwiaDEiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});