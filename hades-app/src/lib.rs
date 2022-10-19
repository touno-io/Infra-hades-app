extern crate cfg_if;
extern crate wasm_bindgen;
// extern crate console_error_panic_hook;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
	if #[cfg(feature = "wee_alloc")] {
		extern crate wee_alloc;
		#[global_allocator]
		static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
	}
}

#[wasm_bindgen]
extern "C" {
	fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
	// console_error_panic_hook::set_once();
	alert(&format!("Hello,{}!", name));
}
