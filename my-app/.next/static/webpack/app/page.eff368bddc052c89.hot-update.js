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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abi */ \"(app-pages-browser)/./src/app/abi.js\");\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_abi__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Smart Contract ABI (Application Binary Interface)\nconst contractAddress = \"0xf3aDa739F9cB3111F36720c1393A6d623a3A8feF\";\nfunction Home() {\n    _s();\n    // general\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // inputs\n    const [valueCarInfo, setValueCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID, setValueCarID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID2, setValueCarID2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //for owner\n    const [valueWallet, setValueWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // logging\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // state values\n    const [carInfo, setCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ownerInfo, setOwnerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const init = async ()=>{\n            if (window.ethereum) {\n                try {\n                    // Create Web3 instance with the MetaMask provider\n                    const web3Instance = new web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"](window.ethereum);\n                    setWeb3(web3Instance);\n                    // Request account access\n                    const accounts = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    setAccount(accounts[0]);\n                    // Create contract instance\n                    const contractInstance = new web3Instance.eth.Contract((_abi__WEBPACK_IMPORTED_MODULE_3___default()), contractAddress);\n                    setContract(contractInstance);\n                    // Check network\n                    const networkId = await web3Instance.eth.net.getId();\n                    console.log(\"Network ID:\", networkId); // Ensure this matches your network\n                    setStatus(\"Connected to network\");\n                } catch (error) {\n                    console.error(\"Initialization error:\", error);\n                    setStatus(\"Initialization error: \" + error.message);\n                }\n            } else {\n                setStatus(\"MetaMask not detected\");\n            }\n        };\n        init();\n    }, []);\n    // Helper function to poll for the transaction receipt with enhanced error handling\n    const waitForReceipt = async (web3, txHash)=>{\n        const interval = 2000; // Polling interval in milliseconds\n        while(true){\n            try {\n                const receipt = await web3.eth.getTransactionReceipt(txHash);\n                if (receipt) {\n                    return receipt;\n                }\n                // Poll every 2 seconds\n                await new Promise((resolve)=>setTimeout(resolve, interval));\n            } catch (error) {\n                console.error(\"Receipt polling error:\", error);\n                throw new Error(\"Receipt polling failed\");\n            }\n        }\n    };\n    const mintCar = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                console.log(valueCarInfo);\n                const tx = await contract.methods.mintCar(account, valueCarInfo).send({\n                    from: account\n                });\n                // Poll for the transaction receipt\n                const receipt = await waitForReceipt(web3, tx.transactionHash);\n                if (receipt.status) {\n                    setStatus(\"Transaction successful!\");\n                } else {\n                    setStatus(\"Transaction failed!\");\n                }\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const findInfo = async (type)=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                let result = -1;\n                if (type === \"car\") {\n                    result = await contract.methods.getCarInfo(valueCarID).call();\n                    setCarInfo(result);\n                } else if (type === \"owner\") {\n                    result = await contract.methods.getOwnerInfo(valueCarID2).call();\n                    setOwnerInfo(result);\n                }\n                setStatus(\"Value retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const getOwnerCars = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                console.log(valueWallet);\n                const result = await contract.methods.getOwnerCars().call({\n                    from: valueWallet\n                });\n                console.log(result);\n                setStatus(\"Values retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Car Ownership\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarInfo,\n                        onChange: (e)=>setValueCarInfo(e.target.value),\n                        placeholder: \"model number\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 155,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: mintCar,\n                        children: \"Mint a Car\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID,\n                        onChange: (e)=>setValueCarID(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"car\"),\n                        children: \"Check Car Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID2,\n                        onChange: (e)=>setValueCarID2(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 173,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"owner\"),\n                        children: \"Check Owner Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 172,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"any\",\n                        value: valueWallet,\n                        onChange: (e)=>setValueWallet(e.target.value),\n                        placeholder: \"wallet address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 182,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>getOwnerCars(),\n                        children: \"Get owned cars\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 188,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID,\n                        onChange: (e)=>setValueCarID(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 191,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"any\",\n                        value: valueWalletToSend,\n                        onChange: (e)=>setValueWalletToSend(e.target.value),\n                        placeholder: \"wallet address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 197,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>getOwnerCars(),\n                        children: \"Get owned cars\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 203,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 190,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: status\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 205,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"McqJQm4z+uniMJcqJLto2kn7vhg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLElBQU1yRCxlQUFlcUQsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUM5Q0ksYUFBWTs7Ozs7O2tDQUVoQiw4REFBQ0M7d0JBQU9DLFNBQVMsSUFBTVo7a0NBQWdCOzs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDQzs7a0NBQ0MsOERBQUNJO3dCQUNLVixNQUFLO3dCQUNMVyxPQUFPeEQ7d0JBQ1B5RCxVQUFVLENBQUNDLElBQU16RCxjQUFjeUQsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUM3Q0ksYUFBWTs7Ozs7O2tDQUVsQiw4REFBQ0w7d0JBQ0dWLE1BQUs7d0JBQ0xXLE9BQU9PO3dCQUNQTixVQUFVLENBQUNDLElBQU1NLHFCQUFxQk4sRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUNwREksYUFBWTs7Ozs7O2tDQUVoQiw4REFBQ0M7d0JBQU9DLFNBQVMsSUFBTVo7a0NBQWdCOzs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDZTswQkFBRzNEOzs7Ozs7Ozs7Ozs7QUFHVjtHQXJNd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbnRyYWN0QUJJIGZyb20gJy4vYWJpJztcblxuLy8gU21hcnQgQ29udHJhY3QgQUJJIChBcHBsaWNhdGlvbiBCaW5hcnkgSW50ZXJmYWNlKVxuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHhmM2FEYTczOUY5Y0IzMTExRjM2NzIwYzEzOTNBNmQ2MjNhM0E4ZmVGJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gZ2VuZXJhbFxuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gaW5wdXRzXG4gIGNvbnN0IFt2YWx1ZUNhckluZm8sIHNldFZhbHVlQ2FySW5mb10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWx1ZUNhcklELCBzZXRWYWx1ZUNhcklEXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZhbHVlQ2FySUQyLCBzZXRWYWx1ZUNhcklEMl0gPSB1c2VTdGF0ZSgnJyk7IC8vZm9yIG93bmVyXG4gIGNvbnN0IFt2YWx1ZVdhbGxldCwgc2V0VmFsdWVXYWxsZXRdID0gdXNlU3RhdGUoJycpO1xuXG4gIC8vIGxvZ2dpbmdcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBzdGF0ZSB2YWx1ZXNcbiAgY29uc3QgW2NhckluZm8sIHNldENhckluZm9dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbb3duZXJJbmZvLCBzZXRPd25lckluZm9dID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBDcmVhdGUgV2ViMyBpbnN0YW5jZSB3aXRoIHRoZSBNZXRhTWFzayBwcm92aWRlclxuICAgICAgICAgIGNvbnN0IHdlYjNJbnN0YW5jZSA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xuXG4gICAgICAgICAgLy8gUmVxdWVzdCBhY2NvdW50IGFjY2Vzc1xuICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcblxuICAgICAgICAgIC8vIENyZWF0ZSBjb250cmFjdCBpbnN0YW5jZVxuICAgICAgICAgIGNvbnN0IGNvbnRyYWN0SW5zdGFuY2UgPSBuZXcgd2ViM0luc3RhbmNlLmV0aC5Db250cmFjdChjb250cmFjdEFCSSwgY29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgICBzZXRDb250cmFjdChjb250cmFjdEluc3RhbmNlKTtcblxuICAgICAgICAgIC8vIENoZWNrIG5ldHdvcmtcbiAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzSW5zdGFuY2UuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXR3b3JrIElEOicsIG5ldHdvcmtJZCk7IC8vIEVuc3VyZSB0aGlzIG1hdGNoZXMgeW91ciBuZXR3b3JrXG5cbiAgICAgICAgICBzZXRTdGF0dXMoJ0Nvbm5lY3RlZCB0byBuZXR3b3JrJyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignSW5pdGlhbGl6YXRpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgIHNldFN0YXR1cygnSW5pdGlhbGl6YXRpb24gZXJyb3I6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdHVzKCdNZXRhTWFzayBub3QgZGV0ZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBvbGwgZm9yIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0IHdpdGggZW5oYW5jZWQgZXJyb3IgaGFuZGxpbmdcbiAgY29uc3Qgd2FpdEZvclJlY2VpcHQgPSBhc3luYyAod2ViMywgdHhIYXNoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSAyMDAwOyAvLyBQb2xsaW5nIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgd2ViMy5ldGguZ2V0VHJhbnNhY3Rpb25SZWNlaXB0KHR4SGFzaCk7XG4gICAgICAgIGlmIChyZWNlaXB0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlY2VpcHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUG9sbCBldmVyeSAyIHNlY29uZHNcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgaW50ZXJ2YWwpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpcHQgcG9sbGluZyBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVjZWlwdCBwb2xsaW5nIGZhaWxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBtaW50Q2FyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh3ZWIzICYmIGNvbnRyYWN0ICYmIGFjY291bnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldFN0YXR1cygnU2VuZGluZyB0cmFuc2FjdGlvbi4uLicpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZUNhckluZm8pO1xuICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMubWludENhcihhY2NvdW50LCB2YWx1ZUNhckluZm8pLnNlbmQoeyBmcm9tOiBhY2NvdW50IH0pO1xuXG4gICAgICAgIC8vIFBvbGwgZm9yIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB3YWl0Rm9yUmVjZWlwdCh3ZWIzLCB0eC50cmFuc2FjdGlvbkhhc2gpO1xuICAgICAgICBpZiAocmVjZWlwdC5zdGF0dXMpIHtcbiAgICAgICAgICBzZXRTdGF0dXMoJ1RyYW5zYWN0aW9uIHN1Y2Nlc3NmdWwhJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBmYWlsZWQhJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zYWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBmYWlsZWQ6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdHVzKCdXZWIzIG9yIGNvbnRyYWN0IG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaW5kSW5mbyA9IGFzeW5jICh0eXBlKSA9PiB7XG4gICAgaWYgKHdlYjMgJiYgY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0U3RhdHVzKCdTZW5kaW5nIHRyYW5zYWN0aW9uLi4uJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVzdWx0ID0gLTE7XG4gICAgICAgIFxuICAgICAgICBpZih0eXBlID09PSBcImNhclwiKSB7XG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRDYXJJbmZvKHZhbHVlQ2FySUQpLmNhbGwoKTtcblxuICAgICAgICAgIHNldENhckluZm8ocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09IFwib3duZXJcIikge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0T3duZXJJbmZvKHZhbHVlQ2FySUQyKS5jYWxsKCk7XG5cbiAgICAgICAgICBzZXRPd25lckluZm8ocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFN0YXR1cygnVmFsdWUgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSEgKCcgKyByZXN1bHQgKyAnKScpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVHJhbnNhY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBzZXRTdGF0dXMoJ1RyYW5zYWN0aW9uIGZhaWxlZDogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoJ1dlYjMgb3IgY29udHJhY3Qgbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldE93bmVyQ2FycyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAod2ViMyAmJiBjb250cmFjdCAmJiBhY2NvdW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRTdGF0dXMoJ1NlbmRpbmcgdHJhbnNhY3Rpb24uLi4nKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZVdhbGxldCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldE93bmVyQ2FycygpLmNhbGwoeyBmcm9tOiB2YWx1ZVdhbGxldCB9KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuXG4gICAgICAgIHNldFN0YXR1cygnVmFsdWVzIHJldHJpZXZlZCBzdWNjZXNzZnVsbHkhICgnICsgcmVzdWx0ICsgJyknKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zYWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBmYWlsZWQ6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdHVzKCdXZWIzIG9yIGNvbnRyYWN0IG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxuICAgICAgPGgxPkNhciBPd25lcnNoaXA8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZUNhckluZm99XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlQ2FySW5mbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1vZGVsIG51bWJlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttaW50Q2FyfT5NaW50IGEgQ2FyPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVDYXJJRH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVDYXJJRChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhciBJRFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kSW5mbyhcImNhclwiKX0+Q2hlY2sgQ2FyIEluZm88L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZUNhcklEMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVDYXJJRDIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjYXIgSURcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZmluZEluZm8oXCJvd25lclwiKX0+Q2hlY2sgT3duZXIgSW5mbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJhbnlcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlV2FsbGV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZVdhbGxldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIndhbGxldCBhZGRyZXNzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE93bmVyQ2FycygpfT5HZXQgb3duZWQgY2FyczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZUNhcklEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlQ2FySUQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhciBJRFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJhbnlcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlV2FsbGV0VG9TZW5kfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZVdhbGxldFRvU2VuZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIndhbGxldCBhZGRyZXNzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE93bmVyQ2FycygpfT5HZXQgb3duZWQgY2FyczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD57c3RhdHVzfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJXZWIzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb250cmFjdEFCSSIsImNvbnRyYWN0QWRkcmVzcyIsIkhvbWUiLCJ3ZWIzIiwic2V0V2ViMyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInZhbHVlQ2FySW5mbyIsInNldFZhbHVlQ2FySW5mbyIsInZhbHVlQ2FySUQiLCJzZXRWYWx1ZUNhcklEIiwidmFsdWVDYXJJRDIiLCJzZXRWYWx1ZUNhcklEMiIsInZhbHVlV2FsbGV0Iiwic2V0VmFsdWVXYWxsZXQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjYXJJbmZvIiwic2V0Q2FySW5mbyIsIm93bmVySW5mbyIsInNldE93bmVySW5mbyIsImluaXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIndlYjNJbnN0YW5jZSIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnRyYWN0SW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIm5ldHdvcmtJZCIsIm5ldCIsImdldElkIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsIndhaXRGb3JSZWNlaXB0IiwidHhIYXNoIiwiaW50ZXJ2YWwiLCJyZWNlaXB0IiwiZ2V0VHJhbnNhY3Rpb25SZWNlaXB0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiRXJyb3IiLCJtaW50Q2FyIiwidHgiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJ0cmFuc2FjdGlvbkhhc2giLCJmaW5kSW5mbyIsInR5cGUiLCJyZXN1bHQiLCJnZXRDYXJJbmZvIiwiY2FsbCIsImdldE93bmVySW5mbyIsImdldE93bmVyQ2FycyIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImgxIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInZhbHVlV2FsbGV0VG9TZW5kIiwic2V0VmFsdWVXYWxsZXRUb1NlbmQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});