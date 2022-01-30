module.exports = {   
    root: true, 
    env: {
        node: true,
        es2021: true,
        jest: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {                
        //Suggestions
        "capitalized-comments": "error",
        "camelcase": "error",
        "curly": "error",        
        "eqeqeq": "error",
        "max-classes-per-file": ["error", 1],    
        "max-nested-callbacks": ["error", 4],
        "max-params": ["error", {"max": 4}],
        "new-cap": ["error", {"newIsCap": true}],
        "strict": ["error", "global"],
        //Layout and Format
        "array-bracket-spacing": "warn",
        "arrow-parens": "warn",
        "arrow-spacing": ["warn", {
            "before": true, 
            "after": true
        }],
        "brace-style": "warn",
        "comma-dangle": "warn",
        "comma-spacing": "warn",
        "indent": [
            "error", 
            4,
            {"SwitchCase": 1}
        ],         
        "key-spacing": ["warn", {
            "beforeColon": false, 
            "afterColon": true
        }],
        "lines-between-class-members": ["warn"],
        "max-len": ["warn", {"code": 100, "comments": 80, "ignoreUrls": true}],
        "max-statements-per-line": ["warn", {"max": 1}],
        "new-parens": "error",
        "newline-per-chained-call": "warn",
        "no-trailing-spaces": "warn",
        "no-whitespace-before-property": "warn",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        
    }
};