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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abi */ \"(app-pages-browser)/./src/app/abi.js\");\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_abi__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Smart Contract ABI (Application Binary Interface)\nconst contractAddress = \"0x8a0BddD02048E858c95ED608F58a6Ab789D128Fb\";\nfunction Home() {\n    _s();\n    // general\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // inputs\n    const [valueCarInfo, setValueCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID, setValueCarID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID2, setValueCarID2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //for owner\n    // logging\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // state values\n    const [carInfo, setCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ownerInfo, setOwnerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const init = async ()=>{\n            if (window.ethereum) {\n                try {\n                    // Create Web3 instance with the MetaMask provider\n                    const web3Instance = new web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"](window.ethereum);\n                    setWeb3(web3Instance);\n                    // Request account access\n                    const accounts = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    setAccount(accounts[0]);\n                    // Create contract instance\n                    const contractInstance = new web3Instance.eth.Contract((_abi__WEBPACK_IMPORTED_MODULE_3___default()), contractAddress);\n                    setContract(contractInstance);\n                    // Check network\n                    const networkId = await web3Instance.eth.net.getId();\n                    console.log(\"Network ID:\", networkId); // Ensure this matches your network\n                    setStatus(\"Connected to network\");\n                } catch (error) {\n                    console.error(\"Initialization error:\", error);\n                    setStatus(\"Initialization error: \" + error.message);\n                }\n            } else {\n                setStatus(\"MetaMask not detected\");\n            }\n        };\n        init();\n    }, []);\n    // Helper function to poll for the transaction receipt with enhanced error handling\n    const waitForReceipt = async (web3, txHash)=>{\n        const interval = 2000; // Polling interval in milliseconds\n        while(true){\n            try {\n                const receipt = await web3.eth.getTransactionReceipt(txHash);\n                if (receipt) {\n                    return receipt;\n                }\n                // Poll every 2 seconds\n                await new Promise((resolve)=>setTimeout(resolve, interval));\n            } catch (error) {\n                console.error(\"Receipt polling error:\", error);\n                throw new Error(\"Receipt polling failed\");\n            }\n        }\n    };\n    const mintCar = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                console.log(valueCarInfo);\n                const tx = await contract.methods.mintCar(account, valueCarInfo).send({\n                    from: account\n                });\n                // Poll for the transaction receipt\n                const receipt = await waitForReceipt(web3, tx.transactionHash);\n                if (receipt.status) {\n                    setStatus(\"Transaction successful!\");\n                } else {\n                    setStatus(\"Transaction failed!\");\n                }\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const findInfo = async (type)=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                let result = -1;\n                if (type === \"car\") {\n                    result = await contract.methods.getCarInfo(valueCarID).call();\n                    setCarInfo(result);\n                } else if (type === \"owner\") {\n                    result = await contract.methods.getOwnerInfo(valueCarID2).call();\n                    setOwnerInfo(result);\n                }\n                setStatus(\"Value retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const getOwnerCars = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                const result = await contract.methods.getOwnerCars().send({\n                    from: account\n                });\n                setStatus(\"Value retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Car Ownership\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarInfo,\n                        onChange: (e)=>setValueCarInfo(e.target.value),\n                        placeholder: \"model number\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 151,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: mintCar,\n                        children: \"Mint a Car\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 157,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID,\n                        onChange: (e)=>setValueCarID(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"car\"),\n                        children: \"Check Car Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 166,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID2,\n                        onChange: (e)=>setValueCarID2(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 169,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"owner\"),\n                        children: \"Check Owner Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 175,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 168,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueWallet,\n                        onChange: (e)=>setValueWallet(e.target.value),\n                        placeholder: \"wallet address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>getOwnerCars(),\n                        children: \"Get owned cars\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 184,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: status\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 186,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 148,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"wFCLloWq0yeLl5g6OxqsXKfqlGo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7MEJBRXpDLDhEQUFDZTswQkFBRzNEOzs7Ozs7Ozs7Ozs7QUFHVjtHQWxMd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbnRyYWN0QUJJIGZyb20gJy4vYWJpJztcblxuLy8gU21hcnQgQ29udHJhY3QgQUJJIChBcHBsaWNhdGlvbiBCaW5hcnkgSW50ZXJmYWNlKVxuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHg4YTBCZGREMDIwNDhFODU4Yzk1RUQ2MDhGNThhNkFiNzg5RDEyOEZiJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gZ2VuZXJhbFxuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gaW5wdXRzXG4gIGNvbnN0IFt2YWx1ZUNhckluZm8sIHNldFZhbHVlQ2FySW5mb10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWx1ZUNhcklELCBzZXRWYWx1ZUNhcklEXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZhbHVlQ2FySUQyLCBzZXRWYWx1ZUNhcklEMl0gPSB1c2VTdGF0ZSgnJyk7IC8vZm9yIG93bmVyXG5cbiAgLy8gbG9nZ2luZ1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xuXG4gIC8vIHN0YXRlIHZhbHVlc1xuICBjb25zdCBbY2FySW5mbywgc2V0Q2FySW5mb10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtvd25lckluZm8sIHNldE93bmVySW5mb10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIENyZWF0ZSBXZWIzIGluc3RhbmNlIHdpdGggdGhlIE1ldGFNYXNrIHByb3ZpZGVyXG4gICAgICAgICAgY29uc3Qgd2ViM0luc3RhbmNlID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XG5cbiAgICAgICAgICAvLyBSZXF1ZXN0IGFjY291bnQgYWNjZXNzXG4gICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xuXG4gICAgICAgICAgLy8gQ3JlYXRlIGNvbnRyYWN0IGluc3RhbmNlXG4gICAgICAgICAgY29uc3QgY29udHJhY3RJbnN0YW5jZSA9IG5ldyB3ZWIzSW5zdGFuY2UuZXRoLkNvbnRyYWN0KGNvbnRyYWN0QUJJLCBjb250cmFjdEFkZHJlc3MpO1xuICAgICAgICAgIHNldENvbnRyYWN0KGNvbnRyYWN0SW5zdGFuY2UpO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgbmV0d29ya1xuICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjNJbnN0YW5jZS5ldGgubmV0LmdldElkKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ05ldHdvcmsgSUQ6JywgbmV0d29ya0lkKTsgLy8gRW5zdXJlIHRoaXMgbWF0Y2hlcyB5b3VyIG5ldHdvcmtcblxuICAgICAgICAgIHNldFN0YXR1cygnQ29ubmVjdGVkIHRvIG5ldHdvcmsnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbml0aWFsaXphdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgc2V0U3RhdHVzKCdJbml0aWFsaXphdGlvbiBlcnJvcjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdGF0dXMoJ01ldGFNYXNrIG5vdCBkZXRlY3RlZCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpbml0KCk7XG4gIH0sIFtdKTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcG9sbCBmb3IgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHQgd2l0aCBlbmhhbmNlZCBlcnJvciBoYW5kbGluZ1xuICBjb25zdCB3YWl0Rm9yUmVjZWlwdCA9IGFzeW5jICh3ZWIzLCB0eEhhc2gpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IDIwMDA7IC8vIFBvbGxpbmcgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB3ZWIzLmV0aC5nZXRUcmFuc2FjdGlvblJlY2VpcHQodHhIYXNoKTtcbiAgICAgICAgaWYgKHJlY2VpcHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVjZWlwdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBQb2xsIGV2ZXJ5IDIgc2Vjb25kc1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBpbnRlcnZhbCkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWlwdCBwb2xsaW5nIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWNlaXB0IHBvbGxpbmcgZmFpbGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1pbnRDYXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdlYjMgJiYgY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0U3RhdHVzKCdTZW5kaW5nIHRyYW5zYWN0aW9uLi4uJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlQ2FySW5mbyk7XG4gICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5taW50Q2FyKGFjY291bnQsIHZhbHVlQ2FySW5mbykuc2VuZCh7IGZyb206IGFjY291bnQgfSk7XG5cbiAgICAgICAgLy8gUG9sbCBmb3IgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICAgICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHdhaXRGb3JSZWNlaXB0KHdlYjMsIHR4LnRyYW5zYWN0aW9uSGFzaCk7XG4gICAgICAgIGlmIChyZWNlaXB0LnN0YXR1cykge1xuICAgICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gc3VjY2Vzc2Z1bCEnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTdGF0dXMoJ1RyYW5zYWN0aW9uIGZhaWxlZCEnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVHJhbnNhY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBzZXRTdGF0dXMoJ1RyYW5zYWN0aW9uIGZhaWxlZDogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoJ1dlYjMgb3IgY29udHJhY3Qgbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbmRJbmZvID0gYXN5bmMgKHR5cGUpID0+IHtcbiAgICBpZiAod2ViMyAmJiBjb250cmFjdCAmJiBhY2NvdW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRTdGF0dXMoJ1NlbmRpbmcgdHJhbnNhY3Rpb24uLi4nKTtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGUgPT09IFwiY2FyXCIpIHtcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldENhckluZm8odmFsdWVDYXJJRCkuY2FsbCgpO1xuXG4gICAgICAgICAgc2V0Q2FySW5mbyhyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gXCJvd25lclwiKSB7XG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRPd25lckluZm8odmFsdWVDYXJJRDIpLmNhbGwoKTtcblxuICAgICAgICAgIHNldE93bmVySW5mbyhyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U3RhdHVzKCdWYWx1ZSByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5ISAoJyArIHJlc3VsdCArICcpJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2FjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cygnV2ViMyBvciBjb250cmFjdCBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0T3duZXJDYXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh3ZWIzICYmIGNvbnRyYWN0ICYmIGFjY291bnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldFN0YXR1cygnU2VuZGluZyB0cmFuc2FjdGlvbi4uLicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRPd25lckNhcnMoKS5zZW5kKHtmcm9tOiBhY2NvdW50fSk7XG5cbiAgICAgICAgc2V0U3RhdHVzKCdWYWx1ZSByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5ISAoJyArIHJlc3VsdCArICcpJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2FjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cygnV2ViMyBvciBjb250cmFjdCBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cbiAgICAgIDxoMT5DYXIgT3duZXJzaGlwPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVDYXJJbmZvfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZUNhckluZm8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtb2RlbCBudW1iZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17bWludENhcn0+TWludCBhIENhcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlQ2FySUR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlQ2FySUQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjYXIgSURcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZmluZEluZm8oXCJjYXJcIil9PkNoZWNrIENhciBJbmZvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVDYXJJRDJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlQ2FySUQyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2FyIElEXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRJbmZvKFwib3duZXJcIil9PkNoZWNrIE93bmVyIEluZm88L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZVdhbGxldH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVXYWxsZXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ3YWxsZXQgYWRkcmVzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXRPd25lckNhcnMoKX0+R2V0IG93bmVkIGNhcnM8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+e3N0YXR1c308L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiV2ViMyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJIb21lIiwid2ViMyIsInNldFdlYjMiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ2YWx1ZUNhckluZm8iLCJzZXRWYWx1ZUNhckluZm8iLCJ2YWx1ZUNhcklEIiwic2V0VmFsdWVDYXJJRCIsInZhbHVlQ2FySUQyIiwic2V0VmFsdWVDYXJJRDIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjYXJJbmZvIiwic2V0Q2FySW5mbyIsIm93bmVySW5mbyIsInNldE93bmVySW5mbyIsImluaXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIndlYjNJbnN0YW5jZSIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnRyYWN0SW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIm5ldHdvcmtJZCIsIm5ldCIsImdldElkIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsIndhaXRGb3JSZWNlaXB0IiwidHhIYXNoIiwiaW50ZXJ2YWwiLCJyZWNlaXB0IiwiZ2V0VHJhbnNhY3Rpb25SZWNlaXB0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiRXJyb3IiLCJtaW50Q2FyIiwidHgiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJ0cmFuc2FjdGlvbkhhc2giLCJmaW5kSW5mbyIsInR5cGUiLCJyZXN1bHQiLCJnZXRDYXJJbmZvIiwiY2FsbCIsImdldE93bmVySW5mbyIsImdldE93bmVyQ2FycyIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImgxIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInZhbHVlV2FsbGV0Iiwic2V0VmFsdWVXYWxsZXQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});