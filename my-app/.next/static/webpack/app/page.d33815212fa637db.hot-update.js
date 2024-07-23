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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Smart Contract ABI (Application Binary Interface)\nconst contractABI = [\n    {\n        \"constant\": false,\n        \"inputs\": [\n            {\n                \"name\": \"to\",\n                \"type\": \"address\"\n            },\n            {\n                \"name\": \"carInfo\",\n                \"type\": \"string\"\n            }\n        ],\n        \"name\": \"mintCar\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [\n            {\n                \"name\": \"tokenId\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"getCarInfo\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"string\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"anonymous\": true,\n        \"inputs\": [\n            {\n                \"indexed\": false,\n                \"name\": \"tokenId\",\n                \"type\": \"uint256\"\n            },\n            {\n                \"indexed\": false,\n                \"name\": \"owner\",\n                \"type\": \"address\"\n            },\n            {\n                \"indexed\": false,\n                \"name\": \"carInfo\",\n                \"type\": \"string\"\n            }\n        ],\n        \"name\": \"CarMinted\",\n        \"type\": \"event\"\n    }\n];\nconst contractAddress = \"0x48937205008b42fcD6C9643ee89f664eEF7aA501\";\nfunction Home() {\n    _s();\n    // general\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // inputs\n    const [valueCarInfo, setValueCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID, setValueCarID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // logging\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // state values\n    const [carInfo, setCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ownerInfo, setOwnerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const init = async ()=>{\n            if (window.ethereum) {\n                try {\n                    // Create Web3 instance with the MetaMask provider\n                    const web3Instance = new web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"](window.ethereum);\n                    setWeb3(web3Instance);\n                    // Request account access\n                    const accounts = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    setAccount(accounts[0]);\n                    // Create contract instance\n                    const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);\n                    setContract(contractInstance);\n                    // Check network\n                    const networkId = await web3Instance.eth.net.getId();\n                    console.log(\"Network ID:\", networkId); // Ensure this matches your network\n                    setStatus(\"Connected to network\");\n                } catch (error) {\n                    console.error(\"Initialization error:\", error);\n                    setStatus(\"Initialization error: \" + error.message);\n                }\n            } else {\n                setStatus(\"MetaMask not detected\");\n            }\n        };\n        init();\n    }, []);\n    // Helper function to poll for the transaction receipt with enhanced error handling\n    const waitForReceipt = async (web3, txHash)=>{\n        const interval = 2000; // Polling interval in milliseconds\n        while(true){\n            try {\n                const receipt = await web3.eth.getTransactionReceipt(txHash);\n                if (receipt) {\n                    return receipt;\n                }\n                // Poll every 2 seconds\n                await new Promise((resolve)=>setTimeout(resolve, interval));\n            } catch (error) {\n                console.error(\"Receipt polling error:\", error);\n                throw new Error(\"Receipt polling failed\");\n            }\n        }\n    };\n    const mintCar = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                console.log(valueCarInfo);\n                const tx = await contract.methods.mintCar(account, valueCarInfo).send({\n                    from: account\n                });\n                // Poll for the transaction receipt\n                const receipt = await waitForReceipt(web3, tx.transactionHash);\n                if (receipt.status) {\n                    setStatus(\"Transaction successful!\");\n                } else {\n                    setStatus(\"Transaction failed!\");\n                }\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const findInfo = async (type)=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                let result = -1;\n                if (type === \"car\") {\n                    result = await contract.methods.getCarInfo(valueCarID).call();\n                    setCarInfo(result);\n                } else if (type === \"owner\") {\n                    result = await contract.methods.getOwnerInfo(valueCarID).call();\n                    setOwnerInfo(result);\n                }\n                setStatus(\"Value retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Car Ownership\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarInfo,\n                        onChange: (e)=>setValueCarInfo(e.target.value),\n                        placeholder: \"model number\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 193,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: mintCar,\n                        children: \"Mint a Car\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 199,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID,\n                        onChange: (e)=>setValueCarID(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 202,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: findInfo,\n                        children: \"Check Car Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 208,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID,\n                        onChange: (e)=>setValueCarID(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 211,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"owner\"),\n                        children: \"Check Owner Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 217,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 210,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: status\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 219,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 190,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"0AVqZaoDBosgOc9SpsBBFWa99Dg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R1Y7R0F2SndCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFNtYXJ0IENvbnRyYWN0IEFCSSAoQXBwbGljYXRpb24gQmluYXJ5IEludGVyZmFjZSlcbmNvbnN0IGNvbnRyYWN0QUJJID0gW1xuICB7XG4gICAgXCJjb25zdGFudFwiOiBmYWxzZSxcbiAgICBcImlucHV0c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcInRvXCIsXG4gICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiY2FySW5mb1wiLFxuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwibWludENhclwiLFxuICAgIFwib3V0cHV0c1wiOiBbXSxcbiAgICBcInBheWFibGVcIjogZmFsc2UsXG4gICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJub25wYXlhYmxlXCIsXG4gICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgXCJjb25zdGFudFwiOiB0cnVlLFxuICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5JZFwiLFxuICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcImdldENhckluZm9cIixcbiAgICBcIm91dHB1dHNcIjogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwicGF5YWJsZVwiOiBmYWxzZSxcbiAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBcImFub255bW91c1wiOiB0cnVlLFxuICAgIFwiaW5wdXRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpbmRleGVkXCI6IGZhbHNlLFxuICAgICAgICBcIm5hbWVcIjogXCJ0b2tlbklkXCIsXG4gICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpbmRleGVkXCI6IGZhbHNlLFxuICAgICAgICBcIm5hbWVcIjogXCJvd25lclwiLFxuICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5kZXhlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJuYW1lXCI6IFwiY2FySW5mb1wiLFxuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJuYW1lXCI6IFwiQ2FyTWludGVkXCIsXG4gICAgXCJ0eXBlXCI6IFwiZXZlbnRcIlxuICB9XG5dO1xuXG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweDQ4OTM3MjA1MDA4YjQyZmNENkM5NjQzZWU4OWY2NjRlRUY3YUE1MDEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBnZW5lcmFsXG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBpbnB1dHNcbiAgY29uc3QgW3ZhbHVlQ2FySW5mbywgc2V0VmFsdWVDYXJJbmZvXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZhbHVlQ2FySUQsIHNldFZhbHVlQ2FySURdID0gdXNlU3RhdGUoJycpO1xuXG4gIC8vIGxvZ2dpbmdcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBzdGF0ZSB2YWx1ZXNcbiAgY29uc3QgW2NhckluZm8sIHNldENhckluZm9dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbb3duZXJJbmZvLCBzZXRPd25lckluZm9dID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBDcmVhdGUgV2ViMyBpbnN0YW5jZSB3aXRoIHRoZSBNZXRhTWFzayBwcm92aWRlclxuICAgICAgICAgIGNvbnN0IHdlYjNJbnN0YW5jZSA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xuXG4gICAgICAgICAgLy8gUmVxdWVzdCBhY2NvdW50IGFjY2Vzc1xuICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcblxuICAgICAgICAgIC8vIENyZWF0ZSBjb250cmFjdCBpbnN0YW5jZVxuICAgICAgICAgIGNvbnN0IGNvbnRyYWN0SW5zdGFuY2UgPSBuZXcgd2ViM0luc3RhbmNlLmV0aC5Db250cmFjdChjb250cmFjdEFCSSwgY29udHJhY3RBZGRyZXNzKTtcbiAgICAgICAgICBzZXRDb250cmFjdChjb250cmFjdEluc3RhbmNlKTtcblxuICAgICAgICAgIC8vIENoZWNrIG5ldHdvcmtcbiAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzSW5zdGFuY2UuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXR3b3JrIElEOicsIG5ldHdvcmtJZCk7IC8vIEVuc3VyZSB0aGlzIG1hdGNoZXMgeW91ciBuZXR3b3JrXG5cbiAgICAgICAgICBzZXRTdGF0dXMoJ0Nvbm5lY3RlZCB0byBuZXR3b3JrJyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignSW5pdGlhbGl6YXRpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgIHNldFN0YXR1cygnSW5pdGlhbGl6YXRpb24gZXJyb3I6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdHVzKCdNZXRhTWFzayBub3QgZGV0ZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHBvbGwgZm9yIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0IHdpdGggZW5oYW5jZWQgZXJyb3IgaGFuZGxpbmdcbiAgY29uc3Qgd2FpdEZvclJlY2VpcHQgPSBhc3luYyAod2ViMywgdHhIYXNoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSAyMDAwOyAvLyBQb2xsaW5nIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgd2ViMy5ldGguZ2V0VHJhbnNhY3Rpb25SZWNlaXB0KHR4SGFzaCk7XG4gICAgICAgIGlmIChyZWNlaXB0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlY2VpcHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUG9sbCBldmVyeSAyIHNlY29uZHNcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgaW50ZXJ2YWwpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VpcHQgcG9sbGluZyBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVjZWlwdCBwb2xsaW5nIGZhaWxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBtaW50Q2FyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh3ZWIzICYmIGNvbnRyYWN0ICYmIGFjY291bnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldFN0YXR1cygnU2VuZGluZyB0cmFuc2FjdGlvbi4uLicpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZUNhckluZm8pO1xuICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMubWludENhcihhY2NvdW50LCB2YWx1ZUNhckluZm8pLnNlbmQoeyBmcm9tOiBhY2NvdW50IH0pO1xuXG4gICAgICAgIC8vIFBvbGwgZm9yIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB3YWl0Rm9yUmVjZWlwdCh3ZWIzLCB0eC50cmFuc2FjdGlvbkhhc2gpO1xuICAgICAgICBpZiAocmVjZWlwdC5zdGF0dXMpIHtcbiAgICAgICAgICBzZXRTdGF0dXMoJ1RyYW5zYWN0aW9uIHN1Y2Nlc3NmdWwhJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBmYWlsZWQhJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zYWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBmYWlsZWQ6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdHVzKCdXZWIzIG9yIGNvbnRyYWN0IG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaW5kSW5mbyA9IGFzeW5jICh0eXBlKSA9PiB7XG4gICAgaWYgKHdlYjMgJiYgY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0U3RhdHVzKCdTZW5kaW5nIHRyYW5zYWN0aW9uLi4uJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmVzdWx0ID0gLTE7XG4gICAgICAgIFxuICAgICAgICBpZih0eXBlID09PSBcImNhclwiKSB7XG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRDYXJJbmZvKHZhbHVlQ2FySUQpLmNhbGwoKTtcblxuICAgICAgICAgIHNldENhckluZm8ocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09IFwib3duZXJcIikge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0T3duZXJJbmZvKHZhbHVlQ2FySUQpLmNhbGwoKTtcblxuICAgICAgICAgIHNldE93bmVySW5mbyhyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U3RhdHVzKCdWYWx1ZSByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5ISAoJyArIHJlc3VsdCArICcpJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2FjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cygnV2ViMyBvciBjb250cmFjdCBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cbiAgICAgIDxoMT5DYXIgT3duZXJzaGlwPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVDYXJJbmZvfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZUNhckluZm8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtb2RlbCBudW1iZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17bWludENhcn0+TWludCBhIENhcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlQ2FySUR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlQ2FySUQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjYXIgSURcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZmluZEluZm99PkNoZWNrIENhciBJbmZvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVDYXJJRH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVDYXJJRChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhciBJRFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kSW5mbyhcIm93bmVyXCIpfT5DaGVjayBPd25lciBJbmZvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPntzdGF0dXN9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIldlYjMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiSG9tZSIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwidmFsdWVDYXJJbmZvIiwic2V0VmFsdWVDYXJJbmZvIiwidmFsdWVDYXJJRCIsInNldFZhbHVlQ2FySUQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJjYXJJbmZvIiwic2V0Q2FySW5mbyIsIm93bmVySW5mbyIsInNldE93bmVySW5mbyIsImluaXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIndlYjNJbnN0YW5jZSIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnRyYWN0SW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIm5ldHdvcmtJZCIsIm5ldCIsImdldElkIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsIndhaXRGb3JSZWNlaXB0IiwidHhIYXNoIiwiaW50ZXJ2YWwiLCJyZWNlaXB0IiwiZ2V0VHJhbnNhY3Rpb25SZWNlaXB0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiRXJyb3IiLCJtaW50Q2FyIiwidHgiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJ0cmFuc2FjdGlvbkhhc2giLCJmaW5kSW5mbyIsInR5cGUiLCJyZXN1bHQiLCJnZXRDYXJJbmZvIiwiY2FsbCIsImdldE93bmVySW5mbyIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImgxIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});