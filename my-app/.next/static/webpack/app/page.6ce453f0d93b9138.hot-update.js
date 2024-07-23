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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Smart Contract ABI (Application Binary Interface)\nconst contractABI = [\n    {\n        \"constant\": false,\n        \"inputs\": [\n            {\n                \"name\": \"to\",\n                \"type\": \"address\"\n            },\n            {\n                \"name\": \"carInfo\",\n                \"type\": \"string\"\n            }\n        ],\n        \"name\": \"mintCar\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [\n            {\n                \"name\": \"tokenId\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"getCarInfo\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"string\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"anonymous\": true,\n        \"inputs\": [\n            {\n                \"indexed\": false,\n                \"name\": \"tokenId\",\n                \"type\": \"uint256\"\n            },\n            {\n                \"indexed\": false,\n                \"name\": \"owner\",\n                \"type\": \"address\"\n            },\n            {\n                \"indexed\": false,\n                \"name\": \"carInfo\",\n                \"type\": \"string\"\n            }\n        ],\n        \"name\": \"CarMinted\",\n        \"type\": \"event\"\n    }\n];\nconst contractAddress = \"0x94EE577f2906e0eF3F963f114F1348212af61C45\";\nfunction Home() {\n    _s();\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCar, setValueCar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const init = async ()=>{\n            if (window.ethereum) {\n                try {\n                    // Create Web3 instance with the MetaMask provider\n                    const web3Instance = new web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"](window.ethereum);\n                    setWeb3(web3Instance);\n                    // Request account access\n                    const accounts = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    setAccount(accounts[0]);\n                    // Create contract instance\n                    const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);\n                    setContract(contractInstance);\n                    // Check network\n                    const networkId = await web3Instance.eth.net.getId();\n                    console.log(\"Network ID:\", networkId); // Ensure this matches your network\n                    setStatus(\"Connected to network\");\n                } catch (error) {\n                    console.error(\"Initialization error:\", error);\n                    setStatus(\"Initialization error: \" + error.message);\n                }\n            } else {\n                setStatus(\"MetaMask not detected\");\n            }\n        };\n        init();\n    }, []);\n    // Helper function to poll for the transaction receipt with enhanced error handling\n    const waitForReceipt = async (web3, txHash)=>{\n        const interval = 2000; // Polling interval in milliseconds\n        while(true){\n            try {\n                const receipt = await web3.eth.getTransactionReceipt(txHash);\n                if (receipt) {\n                    return receipt;\n                }\n                // Poll every 2 seconds\n                await new Promise((resolve)=>setTimeout(resolve, interval));\n            } catch (error) {\n                console.error(\"Receipt polling error:\", error);\n                throw new Error(\"Receipt polling failed\");\n            }\n        }\n    };\n    const mintCar = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                const tx = await contract.methods.mintCar(account, value).send({\n                    from: account\n                });\n                // Poll for the transaction receipt\n                const receipt = await waitForReceipt(web3, tx.transactionHash);\n                if (receipt.status) {\n                    setStatus(\"Transaction successful!\");\n                } else {\n                    setStatus(\"Transaction failed!\");\n                }\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const findCarInfo = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                const tx = await contract.methods.getCarInfo(account, value);\n                // Poll for the transaction receipt\n                const receipt = await waitForReceipt(web3, tx.transactionHash);\n                if (receipt.status) {\n                    setStatus(\"Transaction successful!\");\n                } else {\n                    setStatus(\"Transaction failed!\");\n                }\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Car Ownership\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 176,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: value,\n                        onChange: (e)=>setValue(e.target.value),\n                        placeholder: \"model number\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: mintCar,\n                        children: \"Mint a Car\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 184,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: value,\n                        onChange: (e)=>setValue(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 187,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: findCarInfo,\n                        children: \"Check Car Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 193,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 186,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: status\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 195,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 175,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OFbdSiZnoM2hDwGMRAFQizOplbc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87WUFDTGpCLFVBQVU7UUFDWjtJQUNGO0lBRUEscUJBQ0UsOERBQUNtQztRQUFJQyxPQUFPO1lBQUVDLFNBQVM7UUFBTzs7MEJBQzVCLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDSDs7a0NBQ0MsOERBQUNJO3dCQUNHQyxNQUFLO3dCQUNMN0MsT0FBT0E7d0JBQ1A4QyxVQUFVLENBQUNDLElBQU05QyxTQUFTOEMsRUFBRUMsTUFBTSxDQUFDaEQsS0FBSzt3QkFDeENpRCxhQUFZOzs7Ozs7a0NBRWhCLDhEQUFDQzt3QkFBT0MsU0FBU25CO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRTVCLDhEQUFDUTs7a0NBQ0MsOERBQUNJO3dCQUNHQyxNQUFLO3dCQUNMN0MsT0FBT0E7d0JBQ1A4QyxVQUFVLENBQUNDLElBQU05QyxTQUFTOEMsRUFBRUMsTUFBTSxDQUFDaEQsS0FBSzt3QkFDeENpRCxhQUFZOzs7Ozs7a0NBRWhCLDhEQUFDQzt3QkFBT0MsU0FBU2I7a0NBQWE7Ozs7Ozs7Ozs7OzswQkFFaEMsOERBQUNjOzBCQUFHaEQ7Ozs7Ozs7Ozs7OztBQUdWO0dBL0h3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTbWFydCBDb250cmFjdCBBQkkgKEFwcGxpY2F0aW9uIEJpbmFyeSBJbnRlcmZhY2UpXG5jb25zdCBjb250cmFjdEFCSSA9IFtcbiAge1xuICAgIFwiY29uc3RhbnRcIjogZmFsc2UsXG4gICAgXCJpbnB1dHNcIjogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJ0b1wiLFxuICAgICAgICBcInR5cGVcIjogXCJhZGRyZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcImNhckluZm9cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIm1pbnRDYXJcIixcbiAgICBcIm91dHB1dHNcIjogW10sXG4gICAgXCJwYXlhYmxlXCI6IGZhbHNlLFxuICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxuICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIFwiY29uc3RhbnRcIjogdHJ1ZSxcbiAgICBcImlucHV0c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcInRva2VuSWRcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hbWVcIjogXCJnZXRDYXJJbmZvXCIsXG4gICAgXCJvdXRwdXRzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBcInBheWFibGVcIjogZmFsc2UsXG4gICAgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsXG4gICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgXCJhbm9ueW1vdXNcIjogdHJ1ZSxcbiAgICBcImlucHV0c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaW5kZXhlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJuYW1lXCI6IFwidG9rZW5JZFwiLFxuICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaW5kZXhlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJuYW1lXCI6IFwib3duZXJcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImluZGV4ZWRcIjogZmFsc2UsXG4gICAgICAgIFwibmFtZVwiOiBcImNhckluZm9cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmFtZVwiOiBcIkNhck1pbnRlZFwiLFxuICAgIFwidHlwZVwiOiBcImV2ZW50XCJcbiAgfVxuXTtcblxuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHg5NEVFNTc3ZjI5MDZlMGVGM0Y5NjNmMTE0RjEzNDgyMTJhZjYxQzQ1JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZhbHVlQ2FyLCBzZXRWYWx1ZUNhcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIENyZWF0ZSBXZWIzIGluc3RhbmNlIHdpdGggdGhlIE1ldGFNYXNrIHByb3ZpZGVyXG4gICAgICAgICAgY29uc3Qgd2ViM0luc3RhbmNlID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XG5cbiAgICAgICAgICAvLyBSZXF1ZXN0IGFjY291bnQgYWNjZXNzXG4gICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xuXG4gICAgICAgICAgLy8gQ3JlYXRlIGNvbnRyYWN0IGluc3RhbmNlXG4gICAgICAgICAgY29uc3QgY29udHJhY3RJbnN0YW5jZSA9IG5ldyB3ZWIzSW5zdGFuY2UuZXRoLkNvbnRyYWN0KGNvbnRyYWN0QUJJLCBjb250cmFjdEFkZHJlc3MpO1xuICAgICAgICAgIHNldENvbnRyYWN0KGNvbnRyYWN0SW5zdGFuY2UpO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgbmV0d29ya1xuICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjNJbnN0YW5jZS5ldGgubmV0LmdldElkKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ05ldHdvcmsgSUQ6JywgbmV0d29ya0lkKTsgLy8gRW5zdXJlIHRoaXMgbWF0Y2hlcyB5b3VyIG5ldHdvcmtcblxuICAgICAgICAgIHNldFN0YXR1cygnQ29ubmVjdGVkIHRvIG5ldHdvcmsnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbml0aWFsaXphdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgc2V0U3RhdHVzKCdJbml0aWFsaXphdGlvbiBlcnJvcjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdGF0dXMoJ01ldGFNYXNrIG5vdCBkZXRlY3RlZCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpbml0KCk7XG4gIH0sIFtdKTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcG9sbCBmb3IgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHQgd2l0aCBlbmhhbmNlZCBlcnJvciBoYW5kbGluZ1xuICBjb25zdCB3YWl0Rm9yUmVjZWlwdCA9IGFzeW5jICh3ZWIzLCB0eEhhc2gpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IDIwMDA7IC8vIFBvbGxpbmcgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB3ZWIzLmV0aC5nZXRUcmFuc2FjdGlvblJlY2VpcHQodHhIYXNoKTtcbiAgICAgICAgaWYgKHJlY2VpcHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVjZWlwdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBQb2xsIGV2ZXJ5IDIgc2Vjb25kc1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBpbnRlcnZhbCkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWlwdCBwb2xsaW5nIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWNlaXB0IHBvbGxpbmcgZmFpbGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1pbnRDYXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdlYjMgJiYgY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0U3RhdHVzKCdTZW5kaW5nIHRyYW5zYWN0aW9uLi4uJyk7XG4gICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5taW50Q2FyKGFjY291bnQsIHZhbHVlKS5zZW5kKHsgZnJvbTogYWNjb3VudCB9KTtcblxuICAgICAgICAvLyBQb2xsIGZvciB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgd2FpdEZvclJlY2VpcHQod2ViMywgdHgudHJhbnNhY3Rpb25IYXNoKTtcbiAgICAgICAgaWYgKHJlY2VpcHQuc3RhdHVzKSB7XG4gICAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBzdWNjZXNzZnVsIScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkIScpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2FjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cygnV2ViMyBvciBjb250cmFjdCBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluZENhckluZm8gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdlYjMgJiYgY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0U3RhdHVzKCdTZW5kaW5nIHRyYW5zYWN0aW9uLi4uJyk7XG4gICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRDYXJJbmZvKGFjY291bnQsIHZhbHVlKTtcblxuICAgICAgICAvLyBQb2xsIGZvciB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgd2FpdEZvclJlY2VpcHQod2ViMywgdHgudHJhbnNhY3Rpb25IYXNoKTtcbiAgICAgICAgaWYgKHJlY2VpcHQuc3RhdHVzKSB7XG4gICAgICAgICAgc2V0U3RhdHVzKCdUcmFuc2FjdGlvbiBzdWNjZXNzZnVsIScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkIScpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2FjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cygnV2ViMyBvciBjb250cmFjdCBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cbiAgICAgIDxoMT5DYXIgT3duZXJzaGlwPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibW9kZWwgbnVtYmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21pbnRDYXJ9Pk1pbnQgYSBDYXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjYXIgSURcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZmluZENhckluZm99PkNoZWNrIENhciBJbmZvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPntzdGF0dXN9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIldlYjMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiSG9tZSIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwidmFsdWUiLCJzZXRWYWx1ZSIsInZhbHVlQ2FyIiwic2V0VmFsdWVDYXIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpbml0Iiwid2luZG93IiwiZXRoZXJldW0iLCJ3ZWIzSW5zdGFuY2UiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJjb250cmFjdEluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJuZXR3b3JrSWQiLCJuZXQiLCJnZXRJZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJ3YWl0Rm9yUmVjZWlwdCIsInR4SGFzaCIsImludGVydmFsIiwicmVjZWlwdCIsImdldFRyYW5zYWN0aW9uUmVjZWlwdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkVycm9yIiwibWludENhciIsInR4IiwibWV0aG9kcyIsInNlbmQiLCJmcm9tIiwidHJhbnNhY3Rpb25IYXNoIiwiZmluZENhckluZm8iLCJnZXRDYXJJbmZvIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});