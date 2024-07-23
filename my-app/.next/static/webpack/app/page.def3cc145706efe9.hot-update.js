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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abi */ \"(app-pages-browser)/./src/app/abi.js\");\n/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_abi__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Smart Contract ABI (Application Binary Interface)\nconst contractAddress = \"0xf3aDa739F9cB3111F36720c1393A6d623a3A8feF\";\nfunction Home() {\n    _s();\n    // general\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // inputs\n    const [valueCarInfo, setValueCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID, setValueCarID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueCarID2, setValueCarID2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //for owner\n    const [valueWallet, setValueWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueSendCarID, setValueSendCarID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [valueWalletToSend, setValueWalletToSend] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // logging\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // state values\n    const [carInfo, setCarInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ownerInfo, setOwnerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const init = async ()=>{\n            if (window.ethereum) {\n                try {\n                    // Create Web3 instance with the MetaMask provider\n                    const web3Instance = new web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"](window.ethereum);\n                    setWeb3(web3Instance);\n                    // Request account access\n                    const accounts = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    setAccount(accounts[0]);\n                    // Create contract instance\n                    const contractInstance = new web3Instance.eth.Contract((_abi__WEBPACK_IMPORTED_MODULE_3___default()), contractAddress);\n                    setContract(contractInstance);\n                    // Check network\n                    const networkId = await web3Instance.eth.net.getId();\n                    console.log(\"Network ID:\", networkId); // Ensure this matches your network\n                    setStatus(\"Connected to network\");\n                } catch (error) {\n                    console.error(\"Initialization error:\", error);\n                    setStatus(\"Initialization error: \" + error.message);\n                }\n            } else {\n                setStatus(\"MetaMask not detected\");\n            }\n        };\n        init();\n    }, []);\n    // Helper function to poll for the transaction receipt with enhanced error handling\n    const waitForReceipt = async (web3, txHash)=>{\n        const interval = 2000; // Polling interval in milliseconds\n        while(true){\n            try {\n                const receipt = await web3.eth.getTransactionReceipt(txHash);\n                if (receipt) {\n                    return receipt;\n                }\n                // Poll every 2 seconds\n                await new Promise((resolve)=>setTimeout(resolve, interval));\n            } catch (error) {\n                console.error(\"Receipt polling error:\", error);\n                throw new Error(\"Receipt polling failed\");\n            }\n        }\n    };\n    const mintCar = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                console.log(valueCarInfo);\n                const tx = await contract.methods.mintCar(account, valueCarInfo).send({\n                    from: account\n                });\n                // Poll for the transaction receipt\n                const receipt = await waitForReceipt(web3, tx.transactionHash);\n                if (receipt.status) {\n                    setStatus(\"Transaction successful!\");\n                } else {\n                    setStatus(\"Transaction failed!\");\n                }\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const findInfo = async (type)=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                let result = -1;\n                if (type === \"car\") {\n                    result = await contract.methods.getCarInfo(valueCarID).call();\n                    setCarInfo(result);\n                } else if (type === \"owner\") {\n                    result = await contract.methods.getOwnerInfo(valueCarID2).call();\n                    setOwnerInfo(result);\n                }\n                setStatus(\"Value retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    const getOwnerCars = async ()=>{\n        if (web3 && contract && account) {\n            try {\n                setStatus(\"Sending transaction...\");\n                console.log(valueWallet);\n                const result = await contract.methods.getOwnerCars().call({\n                    from: valueWallet\n                });\n                console.log(result);\n                setStatus(\"Values retrieved successfully! (\" + result + \")\");\n            } catch (error) {\n                console.error(\"Transaction error:\", error);\n                setStatus(\"Transaction failed: \" + error.message);\n            }\n        } else {\n            setStatus(\"Web3 or contract not initialized\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Car Ownership\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarInfo,\n                        onChange: (e)=>setValueCarInfo(e.target.value),\n                        placeholder: \"model number\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 157,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: mintCar,\n                        children: \"Mint a Car\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 163,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID,\n                        onChange: (e)=>setValueCarID(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 166,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"car\"),\n                        children: \"Check Car Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 172,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueCarID2,\n                        onChange: (e)=>setValueCarID2(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 175,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>findInfo(\"owner\"),\n                        children: \"Check Owner Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 181,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 174,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"any\",\n                        value: valueWallet,\n                        onChange: (e)=>setValueWallet(e.target.value),\n                        placeholder: \"wallet address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 184,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>getOwnerCars(),\n                        children: \"Get owned cars\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 190,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: valueSendCarID,\n                        onChange: (e)=>setValueSendCarID(e.target.value),\n                        placeholder: \"car ID\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 193,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"any\",\n                        value: valueWalletToSend,\n                        onChange: (e)=>setValueWalletToSend(e.target.value),\n                        placeholder: \"target wallet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 199,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>getOwnerCars(),\n                        children: \"Get owned cars\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 205,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: status\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 207,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tokuk\\\\Desktop\\\\personal projects\\\\Polkadot hackaton\\\\frontend\\\\my-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 154,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZiSzZZx59DeVvK/MfHrTERBe5Wg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0I7QUFDb0I7QUFFWjtBQUVoQyxvREFBb0Q7QUFFcEQsTUFBTUksa0JBQWtCO0FBRVQsU0FBU0M7O0lBQ3RCLFVBQVU7SUFDVixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUV6QyxTQUFTO0lBQ1QsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUMsS0FBSyxXQUFXO0lBQy9ELE1BQU0sQ0FBQ2lCLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ21CLGdCQUFnQkMsa0JBQWtCLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNxQixtQkFBbUJDLHFCQUFxQixHQUFHdEIsK0NBQVFBLENBQUM7SUFFM0QsVUFBVTtJQUNWLE1BQU0sQ0FBQ3VCLFFBQVFDLFVBQVUsR0FBR3hCLCtDQUFRQSxDQUFDO0lBRXJDLGVBQWU7SUFDZixNQUFNLENBQUN5QixTQUFTQyxXQUFXLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUMyQixXQUFXQyxhQUFhLEdBQUc1QiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNNEIsT0FBTztZQUNYLElBQUlDLE9BQU9DLFFBQVEsRUFBRTtnQkFDbkIsSUFBSTtvQkFDRixrREFBa0Q7b0JBQ2xELE1BQU1DLGVBQWUsSUFBSWpDLDRDQUFJQSxDQUFDK0IsT0FBT0MsUUFBUTtvQkFDN0N6QixRQUFRMEI7b0JBRVIseUJBQXlCO29CQUN6QixNQUFNQyxXQUFXLE1BQU1ILE9BQU9DLFFBQVEsQ0FBQ0csT0FBTyxDQUFDO3dCQUFFQyxRQUFRO29CQUFzQjtvQkFDL0UzQixXQUFXeUIsUUFBUSxDQUFDLEVBQUU7b0JBRXRCLDJCQUEyQjtvQkFDM0IsTUFBTUcsbUJBQW1CLElBQUlKLGFBQWFLLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDcEMsNkNBQVdBLEVBQUVDO29CQUNwRU8sWUFBWTBCO29CQUVaLGdCQUFnQjtvQkFDaEIsTUFBTUcsWUFBWSxNQUFNUCxhQUFhSyxHQUFHLENBQUNHLEdBQUcsQ0FBQ0MsS0FBSztvQkFDbERDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlSixZQUFZLG1DQUFtQztvQkFFMUVmLFVBQVU7Z0JBQ1osRUFBRSxPQUFPb0IsT0FBTztvQkFDZEYsUUFBUUUsS0FBSyxDQUFDLHlCQUF5QkE7b0JBQ3ZDcEIsVUFBVSwyQkFBMkJvQixNQUFNQyxPQUFPO2dCQUNwRDtZQUNGLE9BQU87Z0JBQ0xyQixVQUFVO1lBQ1o7UUFDRjtRQUVBSztJQUNGLEdBQUcsRUFBRTtJQUVMLG1GQUFtRjtJQUNuRixNQUFNaUIsaUJBQWlCLE9BQU96QyxNQUFNMEM7UUFDbEMsTUFBTUMsV0FBVyxNQUFNLG1DQUFtQztRQUMxRCxNQUFPLEtBQU07WUFDWCxJQUFJO2dCQUNGLE1BQU1DLFVBQVUsTUFBTTVDLEtBQUtnQyxHQUFHLENBQUNhLHFCQUFxQixDQUFDSDtnQkFDckQsSUFBSUUsU0FBUztvQkFDWCxPQUFPQTtnQkFDVDtnQkFDQSx1QkFBdUI7Z0JBQ3ZCLE1BQU0sSUFBSUUsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTSjtZQUNyRCxFQUFFLE9BQU9KLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQywwQkFBMEJBO2dCQUN4QyxNQUFNLElBQUlVLE1BQU07WUFDbEI7UUFDRjtJQUNGO0lBRUEsTUFBTUMsVUFBVTtRQUNkLElBQUlsRCxRQUFRSSxZQUFZRixTQUFTO1lBQy9CLElBQUk7Z0JBQ0ZpQixVQUFVO2dCQUNWa0IsUUFBUUMsR0FBRyxDQUFDaEM7Z0JBQ1osTUFBTTZDLEtBQUssTUFBTS9DLFNBQVNnRCxPQUFPLENBQUNGLE9BQU8sQ0FBQ2hELFNBQVNJLGNBQWMrQyxJQUFJLENBQUM7b0JBQUVDLE1BQU1wRDtnQkFBUTtnQkFFdEYsbUNBQW1DO2dCQUNuQyxNQUFNMEMsVUFBVSxNQUFNSCxlQUFlekMsTUFBTW1ELEdBQUdJLGVBQWU7Z0JBQzdELElBQUlYLFFBQVExQixNQUFNLEVBQUU7b0JBQ2xCQyxVQUFVO2dCQUNaLE9BQU87b0JBQ0xBLFVBQVU7Z0JBQ1o7WUFDRixFQUFFLE9BQU9vQixPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsc0JBQXNCQTtnQkFDcENwQixVQUFVLHlCQUF5Qm9CLE1BQU1DLE9BQU87WUFDbEQ7UUFDRixPQUFPO1lBQ0xyQixVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1xQyxXQUFXLE9BQU9DO1FBQ3RCLElBQUl6RCxRQUFRSSxZQUFZRixTQUFTO1lBQy9CLElBQUk7Z0JBQ0ZpQixVQUFVO2dCQUVWLElBQUl1QyxTQUFTLENBQUM7Z0JBRWQsSUFBR0QsU0FBUyxPQUFPO29CQUNqQkMsU0FBUyxNQUFNdEQsU0FBU2dELE9BQU8sQ0FBQ08sVUFBVSxDQUFDbkQsWUFBWW9ELElBQUk7b0JBRTNEdkMsV0FBV3FDO2dCQUNiLE9BQU8sSUFBR0QsU0FBUyxTQUFTO29CQUMxQkMsU0FBUyxNQUFNdEQsU0FBU2dELE9BQU8sQ0FBQ1MsWUFBWSxDQUFDbkQsYUFBYWtELElBQUk7b0JBRTlEckMsYUFBYW1DO2dCQUNmO2dCQUVBdkMsVUFBVSxvQ0FBb0N1QyxTQUFTO1lBQ3pELEVBQUUsT0FBT25CLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyxzQkFBc0JBO2dCQUNwQ3BCLFVBQVUseUJBQXlCb0IsTUFBTUMsT0FBTztZQUNsRDtRQUNGLE9BQU87WUFDTHJCLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTTJDLGVBQWU7UUFDbkIsSUFBSTlELFFBQVFJLFlBQVlGLFNBQVM7WUFDL0IsSUFBSTtnQkFDRmlCLFVBQVU7Z0JBRVZrQixRQUFRQyxHQUFHLENBQUMxQjtnQkFFWixNQUFNOEMsU0FBUyxNQUFNdEQsU0FBU2dELE9BQU8sQ0FBQ1UsWUFBWSxHQUFHRixJQUFJLENBQUM7b0JBQUVOLE1BQU0xQztnQkFBWTtnQkFDOUV5QixRQUFRQyxHQUFHLENBQUNvQjtnQkFFWnZDLFVBQVUscUNBQXFDdUMsU0FBUztZQUMxRCxFQUFFLE9BQU9uQixPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsc0JBQXNCQTtnQkFDcENwQixVQUFVLHlCQUF5Qm9CLE1BQU1DLE9BQU87WUFDbEQ7UUFDRixPQUFPO1lBQ0xyQixVQUFVO1FBQ1o7SUFDRjtJQUVBLHFCQUNFLDhEQUFDNEM7UUFBSUMsT0FBTztZQUFFQyxTQUFTO1FBQU87OzBCQUM1Qiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0g7O2tDQUNDLDhEQUFDSTt3QkFDR1YsTUFBSzt3QkFDTFcsT0FBTzlEO3dCQUNQK0QsVUFBVSxDQUFDQyxJQUFNL0QsZ0JBQWdCK0QsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUMvQ0ksYUFBWTs7Ozs7O2tDQUVoQiw4REFBQ0M7d0JBQU9DLFNBQVN4QjtrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUU1Qiw4REFBQ2E7O2tDQUNDLDhEQUFDSTt3QkFDR1YsTUFBSzt3QkFDTFcsT0FBTzVEO3dCQUNQNkQsVUFBVSxDQUFDQyxJQUFNN0QsY0FBYzZELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDN0NJLGFBQVk7Ozs7OztrQ0FFaEIsOERBQUNDO3dCQUFPQyxTQUFTLElBQU1sQixTQUFTO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBRTFDLDhEQUFDTzs7a0NBQ0MsOERBQUNJO3dCQUNHVixNQUFLO3dCQUNMVyxPQUFPMUQ7d0JBQ1AyRCxVQUFVLENBQUNDLElBQU0zRCxlQUFlMkQsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUM5Q0ksYUFBWTs7Ozs7O2tDQUVoQiw4REFBQ0M7d0JBQU9DLFNBQVMsSUFBTWxCLFNBQVM7a0NBQVU7Ozs7Ozs7Ozs7OzswQkFFNUMsOERBQUNPOztrQ0FDQyw4REFBQ0k7d0JBQ0dWLE1BQUs7d0JBQ0xXLE9BQU94RDt3QkFDUHlELFVBQVUsQ0FBQ0MsSUFBTXpELGVBQWV5RCxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzlDSSxhQUFZOzs7Ozs7a0NBRWhCLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNWjtrQ0FBZ0I7Ozs7Ozs7Ozs7OzswQkFFekMsOERBQUNDOztrQ0FDQyw4REFBQ0k7d0JBQ0tWLE1BQUs7d0JBQ0xXLE9BQU90RDt3QkFDUHVELFVBQVUsQ0FBQ0MsSUFBTXZELGtCQUFrQnVELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDakRJLGFBQVk7Ozs7OztrQ0FFbEIsOERBQUNMO3dCQUNHVixNQUFLO3dCQUNMVyxPQUFPcEQ7d0JBQ1BxRCxVQUFVLENBQUNDLElBQU1yRCxxQkFBcUJxRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQ3BESSxhQUFZOzs7Ozs7a0NBRWhCLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNWjtrQ0FBZ0I7Ozs7Ozs7Ozs7OzswQkFFekMsOERBQUNhOzBCQUFHekQ7Ozs7Ozs7Ozs7OztBQUdWO0dBdk13Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNvbnRyYWN0QUJJIGZyb20gJy4vYWJpJztcblxuLy8gU21hcnQgQ29udHJhY3QgQUJJIChBcHBsaWNhdGlvbiBCaW5hcnkgSW50ZXJmYWNlKVxuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHhmM2FEYTczOUY5Y0IzMTExRjM2NzIwYzEzOTNBNmQ2MjNhM0E4ZmVGJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gZ2VuZXJhbFxuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gaW5wdXRzXG4gIGNvbnN0IFt2YWx1ZUNhckluZm8sIHNldFZhbHVlQ2FySW5mb10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWx1ZUNhcklELCBzZXRWYWx1ZUNhcklEXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZhbHVlQ2FySUQyLCBzZXRWYWx1ZUNhcklEMl0gPSB1c2VTdGF0ZSgnJyk7IC8vZm9yIG93bmVyXG4gIGNvbnN0IFt2YWx1ZVdhbGxldCwgc2V0VmFsdWVXYWxsZXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdmFsdWVTZW5kQ2FySUQsIHNldFZhbHVlU2VuZENhcklEXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ZhbHVlV2FsbGV0VG9TZW5kLCBzZXRWYWx1ZVdhbGxldFRvU2VuZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gbG9nZ2luZ1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xuXG4gIC8vIHN0YXRlIHZhbHVlc1xuICBjb25zdCBbY2FySW5mbywgc2V0Q2FySW5mb10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtvd25lckluZm8sIHNldE93bmVySW5mb10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIENyZWF0ZSBXZWIzIGluc3RhbmNlIHdpdGggdGhlIE1ldGFNYXNrIHByb3ZpZGVyXG4gICAgICAgICAgY29uc3Qgd2ViM0luc3RhbmNlID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICBzZXRXZWIzKHdlYjNJbnN0YW5jZSk7XG5cbiAgICAgICAgICAvLyBSZXF1ZXN0IGFjY291bnQgYWNjZXNzXG4gICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xuXG4gICAgICAgICAgLy8gQ3JlYXRlIGNvbnRyYWN0IGluc3RhbmNlXG4gICAgICAgICAgY29uc3QgY29udHJhY3RJbnN0YW5jZSA9IG5ldyB3ZWIzSW5zdGFuY2UuZXRoLkNvbnRyYWN0KGNvbnRyYWN0QUJJLCBjb250cmFjdEFkZHJlc3MpO1xuICAgICAgICAgIHNldENvbnRyYWN0KGNvbnRyYWN0SW5zdGFuY2UpO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgbmV0d29ya1xuICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjNJbnN0YW5jZS5ldGgubmV0LmdldElkKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ05ldHdvcmsgSUQ6JywgbmV0d29ya0lkKTsgLy8gRW5zdXJlIHRoaXMgbWF0Y2hlcyB5b3VyIG5ldHdvcmtcblxuICAgICAgICAgIHNldFN0YXR1cygnQ29ubmVjdGVkIHRvIG5ldHdvcmsnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbml0aWFsaXphdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgc2V0U3RhdHVzKCdJbml0aWFsaXphdGlvbiBlcnJvcjogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdGF0dXMoJ01ldGFNYXNrIG5vdCBkZXRlY3RlZCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpbml0KCk7XG4gIH0sIFtdKTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcG9sbCBmb3IgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHQgd2l0aCBlbmhhbmNlZCBlcnJvciBoYW5kbGluZ1xuICBjb25zdCB3YWl0Rm9yUmVjZWlwdCA9IGFzeW5jICh3ZWIzLCB0eEhhc2gpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IDIwMDA7IC8vIFBvbGxpbmcgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB3ZWIzLmV0aC5nZXRUcmFuc2FjdGlvblJlY2VpcHQodHhIYXNoKTtcbiAgICAgICAgaWYgKHJlY2VpcHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVjZWlwdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBQb2xsIGV2ZXJ5IDIgc2Vjb25kc1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBpbnRlcnZhbCkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVjZWlwdCBwb2xsaW5nIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWNlaXB0IHBvbGxpbmcgZmFpbGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1pbnRDYXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdlYjMgJiYgY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0U3RhdHVzKCdTZW5kaW5nIHRyYW5zYWN0aW9uLi4uJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlQ2FySW5mbyk7XG4gICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5taW50Q2FyKGFjY291bnQsIHZhbHVlQ2FySW5mbykuc2VuZCh7IGZyb206IGFjY291bnQgfSk7XG5cbiAgICAgICAgLy8gUG9sbCBmb3IgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICAgICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHdhaXRGb3JSZWNlaXB0KHdlYjMsIHR4LnRyYW5zYWN0aW9uSGFzaCk7XG4gICAgICAgIGlmIChyZWNlaXB0LnN0YXR1cykge1xuICAgICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gc3VjY2Vzc2Z1bCEnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTdGF0dXMoJ1RyYW5zYWN0aW9uIGZhaWxlZCEnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVHJhbnNhY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBzZXRTdGF0dXMoJ1RyYW5zYWN0aW9uIGZhaWxlZDogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoJ1dlYjMgb3IgY29udHJhY3Qgbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbmRJbmZvID0gYXN5bmMgKHR5cGUpID0+IHtcbiAgICBpZiAod2ViMyAmJiBjb250cmFjdCAmJiBhY2NvdW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRTdGF0dXMoJ1NlbmRpbmcgdHJhbnNhY3Rpb24uLi4nKTtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGUgPT09IFwiY2FyXCIpIHtcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldENhckluZm8odmFsdWVDYXJJRCkuY2FsbCgpO1xuXG4gICAgICAgICAgc2V0Q2FySW5mbyhyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gXCJvd25lclwiKSB7XG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRPd25lckluZm8odmFsdWVDYXJJRDIpLmNhbGwoKTtcblxuICAgICAgICAgIHNldE93bmVySW5mbyhyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U3RhdHVzKCdWYWx1ZSByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5ISAoJyArIHJlc3VsdCArICcpJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2FjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cygnVHJhbnNhY3Rpb24gZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cygnV2ViMyBvciBjb250cmFjdCBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0T3duZXJDYXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh3ZWIzICYmIGNvbnRyYWN0ICYmIGFjY291bnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldFN0YXR1cygnU2VuZGluZyB0cmFuc2FjdGlvbi4uLicpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlV2FsbGV0KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0T3duZXJDYXJzKCkuY2FsbCh7IGZyb206IHZhbHVlV2FsbGV0IH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG5cbiAgICAgICAgc2V0U3RhdHVzKCdWYWx1ZXMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSEgKCcgKyByZXN1bHQgKyAnKScpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVHJhbnNhY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBzZXRTdGF0dXMoJ1RyYW5zYWN0aW9uIGZhaWxlZDogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoJ1dlYjMgb3IgY29udHJhY3Qgbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICA8aDE+Q2FyIE93bmVyc2hpcDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlQ2FySW5mb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVDYXJJbmZvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibW9kZWwgbnVtYmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21pbnRDYXJ9Pk1pbnQgYSBDYXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZUNhcklEfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZUNhcklEKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2FyIElEXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRJbmZvKFwiY2FyXCIpfT5DaGVjayBDYXIgSW5mbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlQ2FySUQyfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZUNhcklEMihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhciBJRFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kSW5mbyhcIm93bmVyXCIpfT5DaGVjayBPd25lciBJbmZvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImFueVwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVXYWxsZXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlV2FsbGV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwid2FsbGV0IGFkZHJlc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0T3duZXJDYXJzKCl9PkdldCBvd25lZCBjYXJzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlU2VuZENhcklEfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlU2VuZENhcklEKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjYXIgSURcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiYW55XCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZVdhbGxldFRvU2VuZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVXYWxsZXRUb1NlbmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0YXJnZXQgd2FsbGV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE93bmVyQ2FycygpfT5HZXQgb3duZWQgY2FyczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD57c3RhdHVzfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJXZWIzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb250cmFjdEFCSSIsImNvbnRyYWN0QWRkcmVzcyIsIkhvbWUiLCJ3ZWIzIiwic2V0V2ViMyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInZhbHVlQ2FySW5mbyIsInNldFZhbHVlQ2FySW5mbyIsInZhbHVlQ2FySUQiLCJzZXRWYWx1ZUNhcklEIiwidmFsdWVDYXJJRDIiLCJzZXRWYWx1ZUNhcklEMiIsInZhbHVlV2FsbGV0Iiwic2V0VmFsdWVXYWxsZXQiLCJ2YWx1ZVNlbmRDYXJJRCIsInNldFZhbHVlU2VuZENhcklEIiwidmFsdWVXYWxsZXRUb1NlbmQiLCJzZXRWYWx1ZVdhbGxldFRvU2VuZCIsInN0YXR1cyIsInNldFN0YXR1cyIsImNhckluZm8iLCJzZXRDYXJJbmZvIiwib3duZXJJbmZvIiwic2V0T3duZXJJbmZvIiwiaW5pdCIsIndpbmRvdyIsImV0aGVyZXVtIiwid2ViM0luc3RhbmNlIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29udHJhY3RJbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwibmV0d29ya0lkIiwibmV0IiwiZ2V0SWQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwid2FpdEZvclJlY2VpcHQiLCJ0eEhhc2giLCJpbnRlcnZhbCIsInJlY2VpcHQiLCJnZXRUcmFuc2FjdGlvblJlY2VpcHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJFcnJvciIsIm1pbnRDYXIiLCJ0eCIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsInRyYW5zYWN0aW9uSGFzaCIsImZpbmRJbmZvIiwidHlwZSIsInJlc3VsdCIsImdldENhckluZm8iLCJjYWxsIiwiZ2V0T3duZXJJbmZvIiwiZ2V0T3duZXJDYXJzIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwiaDEiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});