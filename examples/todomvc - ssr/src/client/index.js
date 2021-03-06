import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import '../../../../src/cpp/';

(() => {
  const config = {};

  const instantiate = (Module) => {
    Module(config);
  };

  if ('WebAssembly' in window) {
    import('../../compiled/client/wasm/app.wasm')
            .then((wasm) => {
              config.wasmBinary = new Uint8Array(wasm);
              return import('../../compiled/client/wasm/app.js');
            })
            .then(instantiate);
  } else {
    import('../../compiled/client/asmjs/app.asm.js').then(instantiate);
  }
})();
